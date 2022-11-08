package com.folaroid.portfolio.api.vo;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

@Getter
@Setter
public class GithubRepo {

    private String name;
    private String id;
    private String html_url;
    private String description;
    private String created_at;
    private String updated_at;
    private int stargazers_count;
    private int watchers_count;
    private String languages_url;
    private ArrayList<String> readmeContent;
    private String default_branch;
    private String[] imagesUrl;

}
