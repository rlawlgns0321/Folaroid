package com.folaroid.portfolio.api.service;


import com.folaroid.portfolio.db.entity.IntroStack;
import com.folaroid.portfolio.db.repository.HashTagRepository;
import com.folaroid.portfolio.db.repository.IntroStackRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

import static com.folaroid.portfolio.api.dto.IntroStackDto.*;
@RequiredArgsConstructor
@Service
public class IntroStackService {

    private final IntroStackRepository introStackRepository;
    private final HashTagRepository hashTagRepository;

    @Transactional
    public StackNameDto save(StackNoDto request) {
        IntroStack introStackTemp = new IntroStack(request.getIntroNo(), request.getHashNo());
        IntroStack introStack = introStackRepository.save(introStackTemp);
        return new StackNameDto(introStack, hashTagRepository.findById(introStack.getHashNo()).orElseThrow(() -> new IllegalAccessError("유효하지 않은 hashNo 입니다.")));
    }
    @Transactional
    public List<StackNameDto> find(Long introNo) {
        List<IntroStack> introStacks = introStackRepository.findAllByIntroNo(introNo);
        List<StackNameDto> result = introStacks.stream()
                .map(i -> new StackNameDto(i, hashTagRepository.findById(i.getHashNo()).orElseThrow(() -> new IllegalAccessError("유효하지 않은 hashNo 입니다."))))
                .collect(Collectors.toList());
        return result;
    }
    @Transactional
    public void delete(Long introStackNo) {
        introStackRepository.deleteById(introStackNo);
    }
}
