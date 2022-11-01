package com.folaroid.portfolio.config;

import lombok.Builder;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class GithubRestTemplateConfig {

    @Builder
    public RestTemplate restTemplate(RestTemplateBuilder builder) {
        return builder.build();
    }

}
