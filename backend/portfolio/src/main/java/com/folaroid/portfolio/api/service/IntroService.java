package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroDto;
import com.folaroid.portfolio.db.entity.Intro;

public interface IntroService {
    Intro createIntro(IntroDto.introRequest introRequest);
}
