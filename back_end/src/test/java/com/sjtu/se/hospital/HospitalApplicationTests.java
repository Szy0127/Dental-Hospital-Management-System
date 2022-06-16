package com.sjtu.se.hospital;

import com.sjtu.se.hospital.controller.LoginController;
import com.sjtu.se.hospital.controller.PatientController;
import com.sjtu.se.hospital.entity.Appointment;
import com.sjtu.se.hospital.utils.Msg;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import static org.assertj.core.api.Assertions.assertThat;

//Junit5

@TestMethodOrder(OrderAnnotation.class)
@SpringBootTest
class HospitalApplicationTests {

    @Autowired
    private LoginController loginController;

    @Autowired
    private PatientController patientController;

    private String username = "test";
    private String password = "test";

    private Integer doctorID = 2;

    private Integer deptID = 1;

    //测试前 delete from user where username='test';
    @Test
    @Order(1)
    void testLogin() {

        //第一次注册 成功
        boolean regRes= loginController.register("test","m","test@sjtu.edu.cn","54749110",123,username,password);
        assertThat(regRes).isEqualTo(true);
        System.out.println("register ");
        //相同用户名注册 失败
        regRes = loginController.register("test2", "f", "111", "111", 111, username, password);
        assertThat(regRes).isEqualTo(false);

        //第一次登录 成功
        Msg loginRes = loginController.login(username,password);
        assertThat(loginRes.isSuccess()).isEqualTo(true);
     //重复登录 成功
        loginRes = loginController.login(username,password);
        assertThat(loginRes.isSuccess()).isEqualTo(true);
    }

    @Test
    @Order(2)
    void testAppointment() {
        //未登录 失败
        loginController.logout();
        Appointment addRes = patientController.addAppointment(deptID,doctorID,"2022-6-17","a");
        assertThat(addRes).isEqualTo(null);

        System.out.println("login in Appointment");
        Msg loginRes = loginController.login(username, password);
        assertThat(loginRes.isSuccess()).isEqualTo(true);
        //已登录 成功
        addRes = patientController.addAppointment(deptID,doctorID,"2022-6-17","a");
        assertThat(addRes.getRanking()).isEqualTo(1);
    }

}
