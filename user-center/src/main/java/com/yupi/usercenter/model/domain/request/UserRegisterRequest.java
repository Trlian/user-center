package com.yupi.usercenter.model.domain.request;

import lombok.Data;

import java.io.Serializable;

/**
 * 用户注册请求体
 *
 * @author zh
 */
@Data
public class UserRegisterRequest implements Serializable {

    private static final long serialVersionUID = -2756472346664827885L;      //序列化

    private String userAccount;

    private String userPassword;

    private String checkPassword;

    private String planetCode;
}
