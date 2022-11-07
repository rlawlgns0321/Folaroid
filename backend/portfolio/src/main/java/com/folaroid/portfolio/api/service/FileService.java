package com.folaroid.portfolio.api.service;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.folaroid.portfolio.db.entity.PjtImage;
import com.folaroid.portfolio.db.repository.PjtImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class FileService {

    private final PjtImageRepository pjtImageRepository;

    private AmazonS3 amazonS3;

    @Value("${cloud.aws.credentials.access-key}")
    private String accessKey;

    @Value("${cloud.aws.credentials.secret-key}")
    private String secretKey;

    @Value("${cloud.aws.region.static}")
    private String region;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;


    @PostConstruct
    public void amazonS3Client() {
        BasicAWSCredentials awsCreds = new BasicAWSCredentials(accessKey, secretKey);
        amazonS3= AmazonS3ClientBuilder.standard()
                .withRegion(region)
                .withCredentials(new AWSStaticCredentialsProvider(awsCreds))
                .build();
    }

    @Transactional
    public List<String> uploadImg(Long pjtNo, List<MultipartFile> multipartFile) throws IOException {
        List<String> fileNameList = new ArrayList<>();

        //지우고
        List<PjtImage> pjtImages = pjtImageRepository.findAllByPjtNo(pjtNo);
        pjtImages.forEach(pjtImage -> {
            deleteFile(pjtImage.getPjtImageLocation());
        });

        //생성
        multipartFile.forEach(file -> {
            String fileName = createFileName(file.getOriginalFilename());
            ObjectMetadata objectMetadata = new ObjectMetadata();
            objectMetadata.setContentLength(file.getSize());
            objectMetadata.setContentType(file.getContentType());

            try(InputStream inputStream = file.getInputStream()) {
                amazonS3.putObject(new PutObjectRequest(bucket, fileName, inputStream, objectMetadata)
                        .withCannedAcl(CannedAccessControlList.PublicRead));
            } catch(IOException e) {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "파일 업로드에 실패했습니다.");
            }
            PjtImage pjtImage = new PjtImage();
            //파일 위치에는 이름으로 저장
            pjtImage.saveImage(pjtNo, fileName);
            pjtImageRepository.save(pjtImage);
            fileNameList.add(fileName);
        });

        return fileNameList;
    }

    public void deleteFile(String fileName) {
        amazonS3.deleteObject(new DeleteObjectRequest(bucket, fileName));
    }

//    @Transactional
//    public String downloadImg(Integer storeNo) {
//        Store store = storeRepository.findById(storeNo)
//                .orElseThrow(() -> new IllegalAccessError("[storeNo=" + storeNo + "] 해당 상점은 존재하지 않습니다."));
//        if(store.getStoreImg()==null){
//            return amazonS3.getUrl(bucket, "default.png").toString();
//        }else {
//            return amazonS3.getUrl(bucket, store.getStoreImg()).toString();
//        }
//    }


    private String createFileName(String fileName) { // 먼저 파일 업로드 시, 파일명을 난수화하기 위해 random으로 돌립니다.
        return UUID.randomUUID().toString().concat(getFileExtension(fileName));
    }

    private String getFileExtension(String fileName) {
        try {
            return fileName.substring(fileName.lastIndexOf("."));
        } catch (StringIndexOutOfBoundsException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "잘못된 형식의 파일(" + fileName + ") 입니다.");
        }
    }
}