package com.sjtu.se.hospital.constant;

/**
 * @ClassName Constant
 * @Description TODO
 * @Author thunderBoy
 * @Date 2019/11/7 20:49
 */
public class Constant {
    public static final String USER_ID = "userId";
    public static final String USERNAME = "username";
    public static final String PASSWORD = "password";
    public static final String USER_TYPE = "userType";
    public static final String REMEMBER_ME = "remember";
    public static final String JSESSIONID = "JSESSIONID";


    public static final Integer NO_SUCH_USER = -1;
    public static final Integer MANAGER = 10;
    public static final Integer CUSTOMER = 1;

    public static final Integer Type_Patient = 1;
    public static final Integer Type_Doctor = 2;
    public static final Integer Type_Admin = 3;

    public static final Integer N_MORNING_MAX = 30;
    public static final Integer N_AFTERNOON_MAX = 40;

    public static final Integer Punish_MAX = 3;//3次
    public static final Integer Punish_Day = 3;//3天

}
