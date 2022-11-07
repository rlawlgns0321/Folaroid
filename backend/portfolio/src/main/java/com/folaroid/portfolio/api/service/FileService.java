//package com.folaroid.portfolio.api.service;
//
//import com.amazonaws.auth.AWSStaticCredentialsProvider;
//import com.amazonaws.auth.BasicAWSCredentials;
//import com.amazonaws.services.s3.AmazonS3;
//import com.amazonaws.services.s3.AmazonS3ClientBuilder;
//import lombok.RequiredArgsConstructor;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//import org.springframework.web.server.ResponseStatusException;
//
//import javax.annotation.PostConstruct;
//
//@RequiredArgsConstructor
//@Service
//@Transactional(readOnly = true)
//public class FileService {
//
//    private final StoreRepository storeRepository;
//
//    private AmazonS3 amazonS3;
//
//    @Value("${cloud.aws.credentials.access-key}")
//    private String accessKey;
//
//    @Value("${cloud.aws.credentials.secret-key}")
//    private String secretKey;
//
//    @Value("${cloud.aws.region.static}")
//    private String region;
//
//    @Value("${cloud.aws.s3.bucket}")
//    private String bucket;
//
//
//    @PostConstruct
//    public void amazonS3Client() {
//        BasicAWSCredentials awsCreds = new BasicAWSCredentials(accessKey, secretKey);
//        amazonS3= AmazonS3ClientBuilder.standard()
//                .withRegion(region)
//                .withCredentials(new AWSStaticCredentialsProvider(awsCreds))
//                .build();
//    }
//
//    @Transactional
//    public String uploadImg(StoreRegisterPostReq store, MultipartFile multipartFile) throws IOException {
//        String fileName = createFileName(store.getStoreName(), store.getSellerNo(), multipartFile.getOriginalFilename());
//        amazonS3.putObject(new PutObjectRequest(bucket, fileName, multipartFile.getInputStream(), null)
//                .withCannedAcl(CannedAccessControlList.PublicRead));
//        return fileName;
//    }
//
//    @Transactional
//    public void updateImg(Integer storeNo, MultipartFile file) throws IOException {
//        Store store = storeRepository.findById(storeNo)
//                .orElseThrow(() -> new IllegalAccessError("[storeNo=" + storeNo + "] 해당 상점은 존재하지 않습니다."));
//        Integer sellerNo = store.getSeller().getSellerNo();
//        String fileName = createFileName(store.getStoreName(), sellerNo, file.getOriginalFilename());
//        amazonS3.putObject(new PutObjectRequest(bucket, fileName, file.getInputStream(), null)
//                .withCannedAcl(CannedAccessControlList.PublicRead));
//
//        if(!(store.getStoreImg().equals("default.png"))){ //그 전에 사진이 있었어
//            amazonS3.deleteObject(new DeleteObjectRequest(bucket, store.getStoreImg()));
//            System.out.println(store.getStoreImg()+"지웠어");
//        }
//
//        store.updateImg(fileName);
//        System.out.println(fileName+"생겼어");
//    }
//
//    ////////////////////////------------S3관련---------------//////////////////////////////
//
//    @Transactional
//    public Integer deleteImg(Integer storeNo) {
//        Store store = storeRepository.findById(storeNo)
//                .orElseThrow(() -> new IllegalAccessError("[storeNo=" + storeNo + "] 해당 상점은 존재하지 않습니다."));
//        String fileName = store.getStoreImg();
//        if (fileName=="default.png") {
//            return 400;//배드리퀘스트. 삭제할 이미지가 없음
//        } else {
//            amazonS3.deleteObject(new DeleteObjectRequest(bucket, fileName));
//            return 200;
//        }
//    }
//
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
//
//
//    private String createFileName(String storeName, int sellerNo, String fileName) {
//
//        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd-HHmmSS");
//        Date date = new Date();
//        String dateForm = dateFormat.format(date);
//        String changedName = storeName + "-" + sellerNo + "-" + dateForm;
//        getFileExtension(fileName);
//        return changedName.concat(getFileExtension(fileName));
//    }
//
//    private String getFileExtension(String fileName) {
//        try {
//            return fileName.substring(fileName.lastIndexOf("."));
//        } catch (StringIndexOutOfBoundsException e) {
//            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "잘못된 형식의 파일(" + fileName + ") 입니다.");
//        }
//    }
//}