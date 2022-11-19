package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.PjtImageDto;
import com.folaroid.portfolio.api.dto.PortfolioDto;
import com.folaroid.portfolio.api.dto.ProjectDto;
import com.folaroid.portfolio.db.entity.*;
import com.folaroid.portfolio.db.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

import static java.util.stream.Collectors.toList;

@RequiredArgsConstructor
@Service("portfolioService")
public class PortfolioServiceImpl implements PortfolioService {


    private final PortfolioRepository portfolioRepository;
    private final IntroRepository introRepository;
    private final IntroPersonalDataRepository introPersonalDataRepository;
    private final IntroStackRepository introStackRepository;
    private final IntroSloganRepository introSloganRepository;
    private final IntroLanguageRepository introLanguageRepository;
    private final IntroActivityRepository introActivityRepository;
    private final IntroArchivingRepository introArchivingRepository;
    private final IntroAwardsRepository introAwardsRepository;
    private final IntroCareerRepository introCareerRepository;
    private final IntroCertificationRepository introCertificationRepository;
    private final IntroImageRepository introImageRepository;
    private final IntroSchoolRepository introSchoolRepository;
    private final ProjectRepository projectRepository;
    private final PjtImageRepository pjtImageRepository;
    private final FileService fileService;
    private final UserRepository userRepository;

    @Transactional
    @Override
    public PortfolioDto.TotalPortfolioDto getTotalPortfolio(Long userNo, Long portfolioNo) {

        Portfolio portfolio =  portfolioRepository.findById(portfolioNo).orElseThrow(() -> new IllegalAccessError("유효하지 않은 pfNo 입니다."));
        List<Project> projects = projectRepository.findAllByPortfolio(portfolio);
        List<ProjectDto.AllProjectDto> allProjectDto = projects.stream().map(project -> {
            Long pjtNo = project.getPjtNo();
            List<PjtImageDto.PjtImageResponse> pjtImageDtos = pjtImageRepository.findAllByPjtNo(pjtNo).stream().map(pjtImage -> new PjtImageDto.PjtImageResponse(pjtImage)).collect(toList());
            return new ProjectDto.AllProjectDto(project, pjtImageDtos);
        }).collect(toList());;

//                IntroDto.AllIntroDto allIntroDto =
        return new PortfolioDto.TotalPortfolioDto(portfolio, allProjectDto); //, allIntroDto
    }


    @Transactional
    @Override
    public PortfolioDto.PortfolioDetailDto getPortfolioDetail(Long pfNo) {
        Portfolio portfolio = portfolioRepository.findById(pfNo).orElseThrow(() -> new IllegalAccessError("유효하지 않은 pfNo 입니다."));
        Long introNo = introRepository.findIntroNoByPfNoAndUserNo(pfNo, portfolio.getUserNo());
        return new PortfolioDto.PortfolioDetailDto(portfolio, introNo);
    }

    @Transactional
    @Override
    public PortfolioDto.SavePortfolioDto createPortfolio(PortfolioDto.portfolioRequest request) {
        Portfolio portfolio = portfolioRepository.save(request.toEntity());
        portfolio.updatePortfolioTemplate(1L);

        List<Portfolio> portfolios = portfolioRepository.findAllByUserNo(request.getUserNo());
        User user = userRepository.findById(request.getUserNo()).orElseThrow(() -> new IllegalAccessError("유효하지 않은 userNo 입니다."));
        String githubId = user.getUserGithubId();
        // 빈 리스트 생성
        List<String> res = new ArrayList<>();
        for (Portfolio eachPortfolio : portfolios) {
            // 빈 리스트에 각각의 포트폴리오 이름을 추가
            res.add(eachPortfolio.getPfName());
        }
        Integer i = 1;
        String defaultPfName = githubId + "의 포트폴리오";
        String pfName = defaultPfName;
        // while 문을 활용해서
        while (true) {
            if (!res.contains(pfName)) {
                break;
            } else {
                pfName = defaultPfName + " (" + i + ")";
                i += 1;
            }
        }
        //알고리즘을 거친 pfName으로 이름 설정
        portfolio.updatePortfolioName(pfName);

        Intro introTemp = new Intro();
        introTemp.SavePortfolioInfo(portfolio.getPfNo(), request.getUserNo());
        // 새로 만든 introNo
        Intro intro = introRepository.save(introTemp);
        Long portfolioIntroNo = intro.getIntroNo();
        //기존 개인정보 데이터 introNo
        Long userInfoIntroNo = introRepository.findUserDefaultData(request.getUserNo());
        // 기존의 개인정보 데이터들을 포트폴리오의 자기소개 정보로 저장할 것.


        IntroImage userInfoImage = introImageRepository.findByIntroNo(userInfoIntroNo);
        //포트폴리오 자기소개 이미지 테이블 저장 1:1 - fileService를 사용해서 기존 파일 불러오고 이름 바꿔서 독립적으로 사진을 저장하기
        IntroImage portfolioInfoImage = new IntroImage(portfolioIntroNo);
        portfolioInfoImage.IntroImageLocationSave(fileService.duplicateImage(userInfoImage.getIntroImageLocation()));
        introImageRepository.save(portfolioInfoImage);

        //포트폴리오 자기소개 개인정보 테이블 저장 1:1
        IntroPersonalData userInfoPersonalData = introPersonalDataRepository.findByIntroNo(userInfoIntroNo);
        IntroPersonalData portfolioInfoPersonalData = new IntroPersonalData(portfolioIntroNo);
        portfolioInfoPersonalData.updateIntroPersonalData(userInfoPersonalData.getPersonalDataName(), userInfoPersonalData.getPersonalDataBirth(), userInfoPersonalData.getPersonalDataPhone(), userInfoPersonalData.getPersonalDataEmail());
        introPersonalDataRepository.save(portfolioInfoPersonalData);

        //포트폴리오 자기소개 기술스택 테이블 저장 1:N
        List<IntroStack> userInfoStack = introStackRepository.findAllByIntroNo(userInfoIntroNo);
        userInfoStack.forEach(userInfo -> {
            IntroStack portfolioIntroStack = new IntroStack(portfolioIntroNo);
            portfolioIntroStack.saveOtherData(userInfo.getHashNo());
            introStackRepository.save(portfolioIntroStack);
        });
        //포트폴리오 자기소개 어학성적 테이블 저장 1:N
        List<IntroLanguage> userInfoLanguage = introLanguageRepository.findAllByIntroNo(userInfoIntroNo);
        userInfoLanguage.forEach(userInfo -> {
            IntroLanguage portfolioIntroLanguage = new IntroLanguage(portfolioIntroNo);
            portfolioIntroLanguage.saveOtherData(userInfo.getLanguageName(), userInfo.getLanguageTestName(), userInfo.getLanguageGrade(), userInfo.getLanguageDate());
            introLanguageRepository.save(portfolioIntroLanguage);
        });
        //포트폴리오 자기소개 링크 테이블 저장 1:N
        List<IntroArchiving> userInfoArchiving = introArchivingRepository.findAllByIntroNo(userInfoIntroNo);
        userInfoArchiving.forEach(userInfo -> {
            IntroArchiving portfolioIntroArchiving = new IntroArchiving(portfolioIntroNo);
            portfolioIntroArchiving.saveOtherData(userInfo.getArchivingName(), userInfo.getArchivingLink());
            introArchivingRepository.save(portfolioIntroArchiving);
        });
        //포트폴리오 자기소개 수상내역 테이블 저장 1:N
        List<IntroAwards> userInfoAwards = introAwardsRepository.findAllByIntroNo(userInfoIntroNo);
        userInfoAwards.forEach(userInfo -> {
            IntroAwards portfolioIntroAwards = new IntroAwards(portfolioIntroNo);
            portfolioIntroAwards.saveOtherData(userInfo.getAwardsName(), userInfo.getAwardsDate(), userInfo.getAwardsIssuer(), userInfo.getAwardsDetail());
            introAwardsRepository.save(portfolioIntroAwards);
        });
        //포트폴리오 자기소개 활동 테이블 저장 1:N
        List<IntroActivity> userInfoActivity = introActivityRepository.findAllByIntroNo(userInfoIntroNo);
        userInfoActivity.forEach(userInfo -> {
            IntroActivity portfolioIntroActivity = new IntroActivity(portfolioIntroNo);
            portfolioIntroActivity.saveOtherData(userInfo.getActivityName(), userInfo.getActivityDate(), userInfo.getActivityUrl(), userInfo.getActivityDetail());
            introActivityRepository.save(portfolioIntroActivity);
        });
        //포트폴리오 자기소개 경력 테이블 저장 1:N
        List<IntroCareer> userInfoCareer = introCareerRepository.findAllByIntroNo(userInfoIntroNo);
        userInfoCareer.forEach(userInfo -> {
            IntroCareer portfolioIntroCareer = new IntroCareer(portfolioIntroNo);
            portfolioIntroCareer.saveOtherData(userInfo.getCareerComName(), userInfo.getCareerJob(), userInfo.getCareerDate(), userInfo.getCareerResult(), userInfo.getCareerDetail());
            introCareerRepository.save(portfolioIntroCareer);
        });
        //포트폴리오 자기소개 학력 테이블 저장 1:N
        List<IntroSchool> userInfoSchool = introSchoolRepository.findAllByIntroNo(userInfoIntroNo);
        userInfoSchool.forEach(userInfo -> {
            IntroSchool portfolioIntroSchool = new IntroSchool(portfolioIntroNo);
            portfolioIntroSchool.saveOtherData(userInfo.getSchoolName(), userInfo.getSchoolMajor(), userInfo.getSchoolDegree(), userInfo.getSchoolAdmissionDate(), userInfo.getSchoolGraduationDate(), userInfo.getSchoolCredit(), userInfo.getSchoolMaxCredit());
            introSchoolRepository.save(portfolioIntroSchool);
        });

        List<IntroCertification> userInfoCertification = introCertificationRepository.findAllByIntroNo(userInfoIntroNo);
        userInfoCertification.forEach(userInfo ->{
            IntroCertification portfolioIntroCertification = new IntroCertification(portfolioIntroNo);
            portfolioIntroCertification.saveOtherData(userInfo.getCertificationDate(),userInfo.getCertificationName(),userInfo.getCertificationIssuer(),userInfo.getCertificationDetail(),userInfo.getCertificationId());
            introCertificationRepository.save(portfolioIntroCertification);
        });

        //포트폴리오 자기소개 슬로건 테이블 저장 1:1
        IntroSlogan userInfoSlogan = introSloganRepository.findByIntroNo(userInfoIntroNo);
        IntroSlogan portfolioInfoSlogan = new IntroSlogan(portfolioIntroNo);
        portfolioInfoSlogan.updateIntroSlogan(userInfoSlogan.getSloganContent());
        introSloganRepository.save(portfolioInfoSlogan);

        return new PortfolioDto.SavePortfolioDto(portfolio, portfolioIntroNo);
    }

    @Transactional
    @Override
    public Long getPortfolioIntroNo(Long pfNo) {
        Long userNo = portfolioRepository.findById(pfNo).orElseThrow(() -> new IllegalAccessError("유효하지 않은 pfNo 입니다.")).getUserNo();
        return introRepository.findIntroNoByPfNoAndUserNo(pfNo, userNo);
    }


    @Transactional
    @Override
    public void deletePortfolio(Long pfNo) {
        Portfolio portfolio = portfolioRepository.findById(pfNo).orElseThrow(() ->
                new IllegalArgumentException("해당 포트폴리오가 존재하지 않습니다."));
        // 포트폴리오에 존재하는 프로젝트들, 자기소개 테이블까지만 삭제

        List<Project> projects = projectRepository.findAllByPortfolio(portfolio);
        projects.forEach(project -> {
            projectRepository.delete(project);
        });
        introRepository.deleteById(introRepository.findIntroNoByPfNoAndUserNo(pfNo, portfolio.getUserNo()));

        portfolioRepository.delete(portfolio);
    }

    @Transactional
    @Override
    public void patchPortfolio(Long pfNo, PortfolioDto.portfolioRequest portfolioRequest) {
        Portfolio portfolio = portfolioRepository.findById(pfNo).orElseThrow(() ->
                new IllegalArgumentException("해당하는 포트폴리오 프로젝트가 존재하지 않습니다."));
        portfolio.updatePortfolio(portfolioRequest.getUserNo(), portfolioRequest.getPfPrivacy(), portfolioRequest.getUpdatedAt(), portfolioRequest.getPortfolioTemplatesNo(), portfolioRequest.getPfName());
    }

    @Override
    @Transactional
    public List<PortfolioDto.PortfolioSimpleDto> readSimplePortfolio(Long userNo) {
        List<Portfolio> portfolios = portfolioRepository.findAllByUserNo(userNo);
        List<PortfolioDto.PortfolioSimpleDto> result = portfolios.stream()
                .map(i -> new PortfolioDto.PortfolioSimpleDto(i))
                .collect(toList());
        return result;
    }

    @Override
    @Transactional
    public PortfolioDto.DuplicatePortfolioDto duplicatePortfolio(Long pfNo) {

        // 포트폴리오 복제
        Portfolio portfolio = portfolioRepository.findById(pfNo).orElseThrow(() -> new IllegalAccessError("유효하지 않은 pfNo 입니다."));
        Portfolio duplicatedTempPortfolio = new Portfolio(portfolio);
        //포트폴리오에서 유저 번호 찾기
        Long userNo = portfolio.getUserNo();


        List<Portfolio> portfolios = portfolioRepository.findAllByUserNo(userNo);
        // 빈 리스트 생성
        List<String> res = new ArrayList<>();
        for (Portfolio eachPortfolio : portfolios) {
            // 빈 리스트에 각각의 포트폴리오 이름을 추가
            res.add(eachPortfolio.getPfName());
        }
        Integer i = 1;
        String pfName = "";
        // while 문을 활용해서
        while (true) {
            pfName = portfolio.getPfName() + " (" + i + ")";
            if (!res.contains(pfName)) {
                break;
            } else {
                i += 1;
            }
        }
        //알고리즘을 거친 pfName으로 이름 설정
        duplicatedTempPortfolio.updatePortfolioName(pfName);
        // 포트폴리오 저장 및 번호 찾기
        Portfolio duplicatedPortfolio = portfolioRepository.save(duplicatedTempPortfolio);
        Long duplicatedPfNo = duplicatedPortfolio.getPfNo();
        // 각각의 프로젝트 복제
        List<Project> projects = projectRepository.findAllByPortfolio(portfolio);
        // 각각의 프로젝트에서 각각의 프로젝트 이미지 복제
        projects.forEach(project -> {
            Long pjtNo = project.getPjtNo();
            Project duplicatedTempProject = new Project(project);
            duplicatedTempProject.updatePortfolio(duplicatedPortfolio);
            Project duplicatedProject = projectRepository.save(duplicatedTempProject);
            Long duplicatedProjectPjtNo = duplicatedProject.getPjtNo();
            List<PjtImage> pjtImages = pjtImageRepository.findAllByPjtNo(pjtNo);
            for (PjtImage pjtImage : pjtImages) {
                PjtImage pjtImageTemp = new PjtImage(pjtImage);
                //기존 파일 불러오고 이름 바꿔서 독립적으로 저장하기
                pjtImageTemp.saveImage(duplicatedProjectPjtNo, fileService.duplicateImage(pjtImage.getPjtImageLocation()));
                pjtImageRepository.save(pjtImageTemp);
            }
        });

        //기존 포트폴리오의 intro
        Intro intro = introRepository.findByPfNoAndUserNo(pfNo, userNo);

        // intro 복제
        Intro introTemp = new Intro(intro);
        introTemp.SavePfNo(duplicatedPortfolio.getPfNo());
        // 복제된 introNo
        Intro duplicatedPortfolioIntro = introRepository.save(introTemp);
        Long duplicatedPortfolioIntroNo = duplicatedPortfolioIntro.getIntroNo();
        //기존 introNo
        Long portfolioIntroNo = intro.getIntroNo();
        // 기존의 개인정보 데이터들을 포트폴리오의 자기소개 정보로 저장할 것.

        //포트폴리오 자기소개 이미지 테이블 저장 1:1
        IntroImage userInfoImage = introImageRepository.findByIntroNo(portfolioIntroNo);
        IntroImage portfolioInfoImage = new IntroImage(duplicatedPortfolioIntroNo);
        portfolioInfoImage.IntroImageLocationSave(userInfoImage.getIntroImageLocation());
        introImageRepository.save(portfolioInfoImage);

        //포트폴리오 자기소개 개인정보 테이블 저장 1:1
        IntroPersonalData userInfoPersonalData = introPersonalDataRepository.findByIntroNo(portfolioIntroNo);
        IntroPersonalData portfolioInfoPersonalData = new IntroPersonalData(duplicatedPortfolioIntroNo);
        portfolioInfoPersonalData.updateIntroPersonalData(userInfoPersonalData.getPersonalDataName(), userInfoPersonalData.getPersonalDataBirth(), userInfoPersonalData.getPersonalDataPhone(),userInfoPersonalData.getPersonalDataEmail());
        introPersonalDataRepository.save(portfolioInfoPersonalData);

        //포트폴리오 자기소개 기술스택 테이블 저장 1:N
        List<IntroStack> userInfoStack = introStackRepository.findAllByIntroNo(portfolioIntroNo);
        userInfoStack.forEach(userInfo -> {
            IntroStack portfolioIntroStack = new IntroStack(duplicatedPortfolioIntroNo);
            portfolioIntroStack.saveOtherData(userInfo.getHashNo());
            introStackRepository.save(portfolioIntroStack);
        });
        //포트폴리오 자기소개 어학성적 테이블 저장 1:N
        List<IntroLanguage> userInfoLanguage = introLanguageRepository.findAllByIntroNo(portfolioIntroNo);
        userInfoLanguage.forEach(userInfo -> {
            IntroLanguage portfolioIntroLanguage = new IntroLanguage(duplicatedPortfolioIntroNo);
            portfolioIntroLanguage.saveOtherData(userInfo.getLanguageName(), userInfo.getLanguageTestName(), userInfo.getLanguageGrade(), userInfo.getLanguageDate());
            introLanguageRepository.save(portfolioIntroLanguage);
        });
        //포트폴리오 자기소개 링크 테이블 저장 1:N
        List<IntroArchiving> userInfoArchiving = introArchivingRepository.findAllByIntroNo(portfolioIntroNo);
        userInfoArchiving.forEach(userInfo -> {
            IntroArchiving portfolioIntroArchiving = new IntroArchiving(duplicatedPortfolioIntroNo);
            portfolioIntroArchiving.saveOtherData(userInfo.getArchivingName(), userInfo.getArchivingLink());
            introArchivingRepository.save(portfolioIntroArchiving);
        });
        //포트폴리오 자기소개 수상내역 테이블 저장 1:N
        List<IntroAwards> userInfoAwards = introAwardsRepository.findAllByIntroNo(portfolioIntroNo);
        userInfoAwards.forEach(userInfo -> {
            IntroAwards portfolioIntroAwards = new IntroAwards(duplicatedPortfolioIntroNo);
            portfolioIntroAwards.saveOtherData(userInfo.getAwardsName(), userInfo.getAwardsDate(), userInfo.getAwardsIssuer(), userInfo.getAwardsDetail());
            introAwardsRepository.save(portfolioIntroAwards);
        });
        //포트폴리오 자기소개 활동 테이블 저장 1:N
        List<IntroActivity> userInfoActivity = introActivityRepository.findAllByIntroNo(portfolioIntroNo);
        userInfoActivity.forEach(userInfo -> {
            IntroActivity portfolioIntroActivity = new IntroActivity(duplicatedPortfolioIntroNo);
            portfolioIntroActivity.saveOtherData(userInfo.getActivityName(), userInfo.getActivityDate(), userInfo.getActivityUrl(), userInfo.getActivityDetail());
            introActivityRepository.save(portfolioIntroActivity);
        });
        //포트폴리오 자기소개 경력 테이블 저장 1:N
        List<IntroCareer> userInfoCareer = introCareerRepository.findAllByIntroNo(portfolioIntroNo);
        userInfoCareer.forEach(userInfo -> {
            IntroCareer portfolioIntroCareer = new IntroCareer(duplicatedPortfolioIntroNo);
            portfolioIntroCareer.saveOtherData(userInfo.getCareerComName(), userInfo.getCareerJob(), userInfo.getCareerDate(), userInfo.getCareerResult(), userInfo.getCareerDetail());
            introCareerRepository.save(portfolioIntroCareer);
        });
        //포트폴리오 자기소개 학력 테이블 저장 1:N
        List<IntroSchool> userInfoSchool = introSchoolRepository.findAllByIntroNo(portfolioIntroNo);
        userInfoSchool.forEach(userInfo -> {
            IntroSchool portfolioIntroSchool = new IntroSchool(duplicatedPortfolioIntroNo);
            portfolioIntroSchool.saveOtherData(userInfo.getSchoolName(), userInfo.getSchoolMajor(), userInfo.getSchoolDegree(), userInfo.getSchoolAdmissionDate(), userInfo.getSchoolGraduationDate(), userInfo.getSchoolCredit(), userInfo.getSchoolMaxCredit());
            introSchoolRepository.save(portfolioIntroSchool);
        });
        //포트폴리오 자기소개 슬로건 테이블 저장 1:1
        IntroSlogan userInfoSlogan = introSloganRepository.findByIntroNo(portfolioIntroNo);
        IntroSlogan portfolioInfoSlogan = new IntroSlogan(duplicatedPortfolioIntroNo);
        portfolioInfoSlogan.updateIntroSlogan(userInfoSlogan.getSloganContent());
        introSloganRepository.save(portfolioInfoSlogan);

        return new PortfolioDto.DuplicatePortfolioDto(duplicatedPfNo);
    }
}