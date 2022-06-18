package com.sjtu.se.hospital.controller;


import com.sjtu.se.hospital.constant.Constant;
import com.sjtu.se.hospital.dao.ConstantDao;
import com.sjtu.se.hospital.entity.Doctor;
import com.sjtu.se.hospital.entity.Patient;
import com.sjtu.se.hospital.entity.User;
import com.sjtu.se.hospital.service.PatientService;
import com.sjtu.se.hospital.service.UserService;
import com.sjtu.se.hospital.utils.Msg;
import com.sjtu.se.hospital.utils.MsgUtil;
import com.sjtu.se.hospital.utils.SessionUtil;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class LoginController {
    @Autowired
    PatientService patientService;

    @Autowired
    UserService userService;

    @Autowired
    ConstantDao constantDao;

    @RequestMapping("/register")
    public boolean register(
            @RequestParam("name") String name,
            @RequestParam("gender") String gender,
            @RequestParam("email") String email,
            @RequestParam("phone") String phone,
            @RequestParam("age") Integer age,
            @RequestParam("username") String username,
            @RequestParam("password") String password
    ){
        try{
            return patientService.register(name,gender,email,phone,age,username,password);
        }catch (Exception e){
            return false;
        }
    }

    @RequestMapping("/login")
    public Msg login(
            @RequestParam("username") String username,
            @RequestParam("password") String password
    ){
        if(SessionUtil.checkAuth()>0){
            logout();
        }
        User user = userService.login(username,password);
        if(user != null){
            if(user.getType().equals(Constant.Type_Patient)){
                Patient patient = (Patient) user;
                if(patient.getPunish_count() == constantDao.getPunishCount()){
                    long begin = patient.getPunish_begin().getTime();
                    long now = new Date().getTime();
                    if(now - begin < constantDao.getPunishDuration() * 1000 * 3600 * 24){//惩罚结束
                        return MsgUtil.makeMsg(false, MsgUtil.BANNED);
                    }else{
                        patientService.resetPatient(patient.getId());
                    }
                }
            }
            JSONObject obj = new JSONObject();
            obj.put(Constant.USER_ID, user.getId());
            obj.put(Constant.USERNAME, user.getUsername());
            obj.put(Constant.USER_TYPE, user.getType());

//            obj.put(Constant.USER_TYPE, 0);
            SessionUtil.setSession(obj);

//            System.out.println("set session");
            JSONObject data = null;
            if(user.getType()==Constant.Type_Patient){
                Patient patient = (Patient)user;
                data = JSONObject.fromObject(patient);
            }else {
                if (user.getType() == Constant.Type_Doctor) {
                    Doctor doctor = (Doctor) user;
                    data = JSONObject.fromObject(doctor);
                }else{
                    data = JSONObject.fromObject(user);
                }
            }
            data.remove(Constant.PASSWORD);
            return  MsgUtil.makeMsg(true, MsgUtil.LOGIN_SUCCESS_MSG, data);
        }

        return MsgUtil.makeMsg(false, MsgUtil.LOGIN_USER_ERROR_MSG);
    }

    @RequestMapping("/logout")
    public void logout(){
        SessionUtil.removeSession();
    }


}
