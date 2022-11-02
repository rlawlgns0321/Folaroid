package com.folaroid.portfolio.api.vo;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OAuthToken {
    private String accessToken;
    private String tokenType;
    private String scope;
    private String bearer;

    @JsonProperty("access_token")
    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    @JsonProperty("token_type")
    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }

    public void setScope(String scope) {
        this.scope = scope;
    }
    public void setBearer(String bearer) {
        this.bearer = bearer;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public String getTokenType() {
        return tokenType;
    }

    public String getScope() {
        return scope;
    }

    public String getBearer() {
        return bearer;
    }
}
