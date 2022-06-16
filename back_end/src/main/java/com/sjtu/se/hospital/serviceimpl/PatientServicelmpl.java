package com.sjtu.se.hospital.serviceimpl;


import com.sjtu.se.hospital.constant.Constant;
import com.sjtu.se.hospital.dao.*;
import com.sjtu.se.hospital.entity.*;
import com.sjtu.se.hospital.service.PatientService;
import com.sjtu.se.hospital.service.UserService;
import com.sjtu.se.hospital.utils.RedisLockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.integration.redis.util.RedisLockRegistry;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;

import org.springframework.transaction.annotation.Transactional;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

/**
 * @ClassName BookServiceImpl
 * @Description the Implement of BookService
 * @Author thunderBoy
 * @Date 2019/11/6 16:04
 */

@Service
public class PatientServicelmpl implements PatientService {

    @Autowired
    PatientDao patientDao;
    @Autowired
    private AppointmentDao appointmentDao;

    @Autowired
    private ScheduleDao scheduleDao;

    @Autowired
    private RecordDao recordDao;

    @Autowired
    private HistoryDao historyDao;

    @Autowired
    private ConstantDao constantDao;

    @Autowired
    private RedisLockService redisLockService;

    @Autowired
    private UserService userService;

    @Bean
    public RedisLockService redisLockService(RedisLockRegistry redisLockRegistry) {
        return new RedisLockService(redisLockRegistry);
    }

    @Transactional(isolation = Isolation.REPEATABLE_READ, propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    @Override
    public Appointment addAppointment(Integer patientID, Integer deptID, Integer doctorID, String datestr, String time) {
        Date date;
        try {
            date = new Date(new SimpleDateFormat("yyyy-MM-dd").parse(datestr).getTime());
        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }
        Appointment appointment = new Appointment(patientID, deptID, doctorID, date, time);

        redisLockService.lock(doctorID + String.valueOf(date));
        Schedule schedule = scheduleDao.getSchedule(doctorID, date);
        System.out.println(schedule);
        if (time.equals("m")) {
            if (schedule.getN_morning() >= constantDao.getMorningMax()) {
                redisLockService.unlock(doctorID + String.valueOf(date));
                appointment.setRanking(0);
                return appointment;
            }
            schedule.setN_morning(schedule.getN_morning()+1);
            schedule.setRank_morning(schedule.getRank_morning()+1);
            appointment.setRanking(schedule.getRank_morning());
        } else {
            if (schedule.getN_afternoon() >= constantDao.getAfternoonMax()) {
                redisLockService.unlock(doctorID + String.valueOf(date));
                appointment.setRanking(0);
                return appointment;
            }
            schedule.setRank_afternoon(schedule.getRank_afternoon()+1);
            schedule.setN_afternoon(schedule.getN_afternoon()+1);
            appointment.setRanking(schedule.getRank_afternoon());
        }
        scheduleDao.update(schedule);
        redisLockService.unlock(doctorID + String.valueOf(date));
        appointmentDao.addAppointment(appointment);
        addHistory(date,patientID,deptID);//这个得改
        return appointment;
    }

    @Transactional(isolation = Isolation.REPEATABLE_READ, propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    @Override
    public boolean cancelAppointment(Integer ranking,Integer patientID, Integer deptID, Integer doctorID, String datestr, String time) {
        Date date = null;
        try {
            date = new Date(new SimpleDateFormat("yyyy-MM-dd").parse(datestr).getTime());
        } catch (ParseException e) {
            e.printStackTrace();
            return false;
        }
        boolean success = appointmentDao.cancelAppointment(new Appointment(ranking,patientID,deptID,doctorID,date,time));
        if(success){
            Schedule schedule = scheduleDao.getSchedule(doctorID, date);

            if (time.equals("m")) {
                schedule.setN_morning(schedule.getN_morning()-1);
            } else {
                schedule.setN_afternoon(schedule.getN_afternoon()-1);
            }
            scheduleDao.update(schedule);
            removeHistory(date,patientID,deptID);
        }
        return success;
    }

    @Override
    public List<Schedule> getFullScheduleByDateTime(String datestr, String time) {
        Date date = null;
        try {
            date = new Date(new SimpleDateFormat("yyyy-MM-dd").parse(datestr).getTime());
        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }
        return scheduleDao.getFullScheduleByDateTime(date,time);
    }

    @Override
    public List<AppointmentEdited> getAppointmentsByPatient(Integer ID) {
        return appointmentDao.getAppointmentsByPatient(ID);
    }

    @Override
    public Patient getPatientInfo(Integer ID) {
        return recordDao.getRecord(ID);
    }

    @Override
    public List<HistoryEdited> getHistories(Integer ID) {
        return historyDao.getHistories(ID);
    }

    @Override
    public void addHistory(Date date, Integer patientID, Integer deptID) {
        historyDao.addHistory(new History(date ,patientID, deptID));
    }
    @Override
    public void removeHistory(Date date, Integer patientID, Integer deptID) {
        historyDao.removeHistory(new History(date ,patientID, deptID));
    }

    @Override
    public void updateDescription(Integer ID, String time, String newDes) {
        Date date = null;
        try {
            date = new Date(new SimpleDateFormat("yyyy-MM-dd").parse(time).getTime());
        } catch (ParseException e) {
            e.printStackTrace();
        }
        historyDao.updateHistory(ID, date, newDes);
    }

    @Transactional
    @Override
    public boolean register(String name, String gender, String email, String phone, Integer age, String username, String password) {
        if(!userService.checkValid(username)) {
            return false;

        }
        Patient patient = new Patient(name,gender,email,phone,age);
        patient.setUsername(username);
        patient.setPassword(password);
        patientDao.save(patient);
//        userService.createUser(username,password);
        return true;
    }

    @Override
    public Patient resetPatient(Integer id) {
        return patientDao.resetPunish(id);
    }
}
