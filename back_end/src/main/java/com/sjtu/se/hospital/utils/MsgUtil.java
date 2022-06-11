package com.sjtu.se.hospital.utils;

import net.sf.json.JSONObject;

public class MsgUtil {

    public static final String SUCCESS_MSG = "成功！";
    public static final String LOGIN_SUCCESS_MSG = "登录成功！";
    public static final String LOGOUT_SUCCESS_MSG = "登出成功！";
    public static final String LOGOUT_ERR_MSG = "登出异常！";
    public static final String ERROR_MSG = "错误！";
    public static final String LOGIN_USER_ERROR_MSG = "用户名或密码错误，请重新输入！";
    public static final String NOT_LOGGED_IN_ERROR_MSG = "登录失效，请重新登录！";

    public static final String AUTH = "无权限！";
    public static final String BANNED = "您的账号暂被禁用，请联系管理员！";
    public static Msg makeMsg(boolean status, String msg, JSONObject data){
        return new Msg(status, msg, data);
    }

    public static Msg makeMsg(boolean status, String msg){
        return new Msg(status, msg);
    }
}
