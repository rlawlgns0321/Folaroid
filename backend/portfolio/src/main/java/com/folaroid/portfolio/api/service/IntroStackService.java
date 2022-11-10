package com.folaroid.portfolio.api.service;


import com.folaroid.portfolio.api.dto.IntroDto;
import com.folaroid.portfolio.db.entity.HashTag;
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
    public Long save(StackNoDto request) {
        IntroStack introStack = new IntroStack(request.getIntroNo(), request.getHashNo());
        return introStackRepository.save(introStack).getIntroStackNo();
    }
    @Transactional
    public List<StackNameDto> find(Long introNo) {
        List<IntroStack> introStacks = introStackRepository.findAllByIntroNo(introNo);
        List<StackNameDto> result = introStacks.stream()
                .map(i -> new StackNameDto(i, hashTagRepository.findById(i.getHashNo()).get()))
                .collect(Collectors.toList());
        return result;
    }
    @Transactional
    public void delete(Long introStackNo) {
        introStackRepository.deleteById(introStackNo);
    }
}
