package com.sjtu.se.hospital;

import com.sjtu.se.hospital.controller.*;
import com.sjtu.se.hospital.entity.*;
import com.sjtu.se.hospital.service.AdminService;
import com.sjtu.se.hospital.utils.Msg;
import net.sf.json.JSON;
import net.sf.json.JSONObject;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

//Junit5
//不加transactional会因为懒加载报错 加了以后不写入数据库 所以order也没用
@TestMethodOrder(OrderAnnotation.class)
@SpringBootTest
class HospitalApplicationTests {

    @Autowired
    private LoginController loginController;

    @Autowired
    private PatientController patientController;

    @Autowired
    private AdminController adminController;

    @Autowired
    private DepartmentController departmentController;

    @Autowired
    private DoctorController doctorController;

    @Autowired
    private  HomeController homeController;

    @Autowired
    private AdminService adminService;

    private String username = "test";
    private String password = "test";

    private Integer doctorID = 2;

    private Integer deptID = 1;

    private String username_doctor = "doctor1";
    private String username_admin = "admin";


    private String password_doctor = "25605c8c4d7bd9073922aedc05236bf35acd14587281f147bd84242ffecb053b";
    private String password_admin = "25605c8c4d7bd9073922aedc05236bf35acd14587281f147bd84242ffecb053b";


    //测试前 delete from user where username='test';

    @Transactional
    @Test
//    @Order(1)
    void testLogin() {

        //第一次注册 成功
        boolean regRes= loginController.register("test","m","test@sjtu.edu.cn","54749110",123,username,password);
        assertThat(regRes).isEqualTo(true);
//        System.out.println("register ");
        //相同用户名注册 失败
        regRes = loginController.register("test2", "f", "111", "111", 111, username, password);
        assertThat(regRes).isEqualTo(false);

        //第一次登录 成功
        Msg loginRes = loginController.login(username,password);
        assertThat(loginRes.isSuccess()).isEqualTo(true);
     //重复登录 成功
        loginRes = loginController.login(username,password);
        assertThat(loginRes.isSuccess()).isEqualTo(true);

        //测试医生 管理员
        loginRes = loginController.login(username_doctor,password_doctor);
        assertThat(loginRes.isSuccess()).isEqualTo(true);
        loginRes = loginController.login(username_admin,password_admin);
        assertThat(loginRes.isSuccess()).isEqualTo(true);

    }

    @Transactional
    @Test
//    @Order(2)
    void testAppointment() {
        //未登录 失败
        loginController.logout();
        String date = "2022-6-17";
        String time = "m";
        Appointment addRes = patientController.addAppointment(deptID,doctorID,date,time);
        assertThat(addRes).isEqualTo(null);

//        System.out.println("login in Appointment");
        //已登录 成功
        for(int i = 0 ; i < adminService.getConstants().getMorningMax();i++){
            boolean regRes= loginController.register("test","m","test@sjtu.edu.cn","54749110",123,username+i,password);
            assertThat(regRes).isEqualTo(true);
            Msg loginRes = loginController.login(username+i, password);
            assertThat(loginRes.isSuccess()).isEqualTo(true);
            addRes = patientController.addAppointment(deptID,doctorID,date,time);
            assertThat(addRes.getRanking()).isEqualTo(i+1);
        }
        //超个数 失败
        for(int i = 0 ; i < 10;i++){
            Msg loginRes = loginController.login(username+i, password);
            assertThat(loginRes.isSuccess()).isEqualTo(true);
            addRes = patientController.addAppointment(deptID,doctorID,date,time);
            assertThat(addRes.getRanking()).isEqualTo(0);
        }
        time = "a";
        //下午
        User user = null;
        Appointment appointment = null;
        for(int i = 0 ; i < adminService.getConstants().getAfternoonMax();i++){
            boolean regRes= loginController.register("test","m","test@sjtu.edu.cn","54749110",123,username+i+"a",password);
            assertThat(regRes).isEqualTo(true);
            Msg loginRes = loginController.login(username+i+"a", password);
            assertThat(loginRes.isSuccess()).isEqualTo(true);
            JSONObject data = loginRes.getData();
            data.remove("punish_begin");
            user = (User) JSONObject.toBean(data,User.class);
            appointment = patientController.addAppointment(deptID,doctorID,"abcd",time);
            assertThat(appointment).isEqualTo(null);
            appointment = patientController.addAppointment(deptID,doctorID,date,time);
            assertThat(appointment.getRanking()).isEqualTo(i+1);
        }
        //超个数 失败
        for(int i = 0 ; i < 10;i++){
            Msg loginRes = loginController.login(username+i, password);
            assertThat(loginRes.isSuccess()).isEqualTo(true);
            addRes = patientController.addAppointment(deptID,doctorID,date,time);
            assertThat(addRes.getRanking()).isEqualTo(0);
        }

        loginController.logout();
        boolean res = patientController.cancelAppointment(appointment.getRanking(), appointment.getPatientID(), appointment.getDeptID(), appointment.getDoctorID(), date, appointment.getTime());
        assertThat(res).isEqualTo(false);
        List<AppointmentEdited> list = patientController.getAppointmentsByPatient();
        assertThat(list).isEqualTo(null);

        Msg loginRes =  loginController.login(user.getUsername(), password);
        assertThat(loginRes.isSuccess()).isEqualTo(true);
        list = patientController.getAppointmentsByPatient();
        assertThat(list.size()).isGreaterThan(0);
        res = patientController.cancelAppointment(appointment.getRanking(), appointment.getPatientID(), appointment.getDeptID(), appointment.getDoctorID(), date, appointment.getTime());
        assertThat(res).isEqualTo(true);
    }

    @Test
    @Transactional
    void testConstants() {
        //修改和查询
        Constant constant = adminController.getConstants();
        assertThat(constant).isEqualTo(null);
        constant = adminService.getConstants();
        Integer morning = constant.getMorningMax();
        adminController.modifyConstants(morning+1, 50, 4, 4);
        loginController.login(username_admin, password_admin);
        constant = adminController.getConstants();
        assertThat(constant.getMorningMax()).isEqualTo(morning);

        adminController.modifyConstants(morning+1, 50, 4, 4);
        constant = adminController.getConstants();
        assertThat(constant.getMorningMax()).isEqualTo(morning+1);
        assertThat(constant.getAfternoonMax()).isEqualTo(50);
        assertThat(constant.getPunishCount()).isEqualTo(4);
        assertThat(constant.getPunishDuration()).isEqualTo(4);
    }

    @Test
    @Transactional
    void testDepartment() {
        //获取所有departments
        List<Department> departments = departmentController.getDepartments();
        assertThat(departments.size()).isEqualTo(3);

        //根据id获取一个department
        Department department = departmentController.getDeptOnly(1);
        assertThat(department.getDoc_num()).isEqualTo(2);
        assertThat(department.getTitle()).isEqualTo("儿科");

        //插入department
        department = departmentController.addNewDept("骨科");
        assertThat(department.getTitle()).isEqualTo("骨科");
        assertThat(department.getDoc_num()).isEqualTo(0);

        //修改科室名称
        departmentController.alterDeptName(1, "颌面外科");
        department = departmentController.getDeptOnly(1);
        assertThat(department.getTitle()).isEqualTo("颌面外科");

        departmentController.delDept(department.getId());
    }

    @Test
    @Transactional
    void testDoctor(){
        List<Appointment> appointments = doctorController.getAppointments();
        assertThat(appointments).isEqualTo(null);
        boolean regRes= loginController.register("test","m","test@sjtu.edu.cn","54749110",123,username,password);
        assertThat(regRes).isEqualTo(true);
        Msg loginRes = loginController.login(username, password);
        assertThat(loginRes.isSuccess()).isEqualTo(true);
        JSONObject data = loginRes.getData();
        data.remove("punish_begin");
        User user = (User)JSONObject.toBean(loginRes.getData(),User.class);
        Appointment appointment = patientController.addAppointment(deptID,doctorID,"2022-6-18","a");
        boolean res = doctorController.discardAppointment(user.getId());
        assertThat(res).isEqualTo(false);
        res = doctorController.modifyDescription(appointment.getRanking(), appointment.getPatientID(), appointment.getDeptID(), appointment.getDoctorID(), appointment.getDate(), appointment.getTime(), appointment.getDescription());
        assertThat(res).isEqualTo(false);

        loginController.login(username_doctor, password_doctor);
        appointments = doctorController.getAppointments();
        assertThat(appointments.size()).isEqualTo(1);
        res = doctorController.modifyDescription(appointment.getRanking(), appointment.getPatientID(), appointment.getDeptID(), appointment.getDoctorID(), appointment.getDate(), appointment.getTime(), appointment.getDescription());
        assertThat(res).isEqualTo(true);
        res = doctorController.discardAppointment(user.getId());
        res = doctorController.discardAppointment(user.getId());
        res = doctorController.discardAppointment(user.getId());
        assertThat(res).isEqualTo(true);
        loginRes = loginController.login(username, password);
        assertThat(loginRes.isSuccess()).isEqualTo(false);
    }
    @Test
    @Transactional
    void testAdminforDoctor() {

        List<Schedule> schedules = doctorController.getSchedule();
        assertThat(schedules).isEqualTo(null);

        loginController.login(username_doctor,password_doctor);
        //获取指定医生的schedule
        schedules = doctorController.getSchedule();
        assertThat(schedules.size()).isEqualTo(0);


        //增加和修改医生
        Doctor doctor = doctorController.addNewDoctor(0, "胡法光", "m", 1, 34, "医生", "123", "123", "123", "123");
        assertThat(doctor).isEqualTo(null);
        boolean res = adminController.delDoctor(2);
        assertThat(res).isEqualTo(false);

        loginController.login(username_admin, password_admin);
        doctor = doctorController.addNewDoctor(0, "胡法光", "m", 1, 34, "医生", "123", "123", "123", "123");
        assertThat(doctor.getName()).isEqualTo("胡法光");
        doctor = doctorController.addNewDoctor(doctor.getId(), "霍英东", doctor.getGender(), doctor.getDeptID(),
                doctor.getAge(), doctor.getPost(), doctor.getAvatar(), doctor.getIntro(), doctor.getUsername(), doctor.getPassword());
        assertThat(doctor.getName()).isEqualTo("霍英东");
        res = adminController.delDoctor(doctor.getId());
        assertThat(res).isEqualTo(true);
    }

    @Test
    @Transactional
    void testAdminforHome() {
        List<News> newss = homeController.getNews();
        assertThat(newss.size()).isGreaterThan(0);
        List<Notification> notifications = homeController.getNotifications();
        assertThat(notifications.size()).isGreaterThan(0);
        //获取doctor
        Doctor doctor = doctorController.getDoctor(2);
        assertThat(doctor.getName()).isEqualTo("Alice");

        //根据科室获取doctors
        List<Doctor> doctors = doctorController.getDoctorsByDept(2);
        assertThat(doctors.size()).isEqualTo(2);

        //增加news
        News news = adminController.addNews(new Date(2022, 5, 19), "党代会", "12345");
        assertThat(news).isEqualTo(null);

        //增加通知
        Notification notification = adminController.addNotification(new Date(2022, 5, 19), "党代会", "12345");
        assertThat(notification).isEqualTo(null);

        loginController.login(username_admin, password_admin);
         news = adminController.addNews(new Date(2022, 5, 19), "党代会", "12345");

        assertThat(news.getContent()).isEqualTo("12345");
        assertThat(news.getTitle()).isEqualTo("党代会");

        //增加通知
         notification = adminController.addNotification(new Date(2022, 5, 19), "党代会", "12345");
        assertThat(notification.getContent()).isEqualTo("12345");
        assertThat(notification.getTitle()).isEqualTo("党代会");
    }

    @Test
    @Transactional
    void testPatient() {
        //获取患者信息
        String name="abcd";
        boolean regRes= loginController.register(name,"m","test@sjtu.edu.cn","54749110",123,username,password);
        assertThat(regRes).isEqualTo(true);
        Msg loginRes = loginController.login(username, password);
        assertThat(loginRes.isSuccess()).isEqualTo(true);
        JSONObject data = loginRes.getData();
        data.remove("punish_begin");
        User user = (User)JSONObject.toBean(loginRes.getData(),User.class);
        Patient patient = patientController.getPatientById(user.getId());
        assertThat(patient.getName()).isEqualTo(name);
    }

}
