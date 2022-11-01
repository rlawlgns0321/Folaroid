package com.folaroid.portfolio.api.service;


import com.folaroid.portfolio.db.entity.HashTag;
import com.folaroid.portfolio.db.entity.IntroStack;
import com.folaroid.portfolio.db.repository.HashTagRepository;
import com.folaroid.portfolio.db.repository.IntroStackRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static com.folaroid.portfolio.api.dto.IntroStackDto.*;
@RequiredArgsConstructor
@Service
public class IntroStackService {

    private final IntroStackRepository introStackRepository;
    private final HashTagRepository hashTagRepository;

    @Transactional
    public Long save(StackNoDto request) {
        IntroStack introStack = new IntroStack();
        introStack.saveIntroStack(request.getIntroNo(), request.getHashNo());
        return introStackRepository.save(introStack).getIntroStackNo();
    }
    @Transactional
    public StackNameDto find(IntroStackNoDto request) {
        IntroStack introStack = introStackRepository.findById(request.getIntroStackNo()).get();
        HashTag hashTag = hashTagRepository.findById(introStack.getHashNo()).get();
        return new StackNameDto(introStack, hashTag.getHashName());
    }
    @Transactional
    public void delete(Long introStackNo) {
        introStackRepository.deleteById(introStackNo);
    }
}
