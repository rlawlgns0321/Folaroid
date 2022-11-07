package com.folaroid.portfolio.api.vo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GithubRepo {

    private String name;
    private String html_url;
    private String description;
    private String created_at;
    private String updated_at;
    private int stargazers_count;
}
