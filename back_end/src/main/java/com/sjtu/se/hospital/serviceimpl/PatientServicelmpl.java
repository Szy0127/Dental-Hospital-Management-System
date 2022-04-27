package com.sjtu.se.hospital.serviceimpl;


import com.sjtu.se.hospital.constant.Constant;
import com.sjtu.se.hospital.dao.AppointmentDao;
import com.sjtu.se.hospital.dao.HistoryDao;
import com.sjtu.se.hospital.dao.RecordDao;
import com.sjtu.se.hospital.dao.ScheduleDao;
import com.sjtu.se.hospital.entity.*;
import com.sjtu.se.hospital.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
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
    private AppointmentDao appointmentDao;

    @Autowired
    private ScheduleDao scheduleDao;

    @Autowired
    private RecordDao recordDao;

    @Autowired
    private HistoryDao historyDao;



    @Transactional(isolation = Isolation.REPEATABLE_READ, propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    @Override
    public Appointment addAppointment(Integer patientID, Integer deptID, Integer doctorID, String datestr, String time) {
        Date date = null;
        try {
            date = new Date(new SimpleDateFormat("yyyy-MM-dd").parse(datestr).getTime());
        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }
        Appointment appointment = new Appointment(patientID, deptID, doctorID, date, time);
        Schedule schedule = scheduleDao.getSchedule(doctorID, date);

        if (time.equals("m")) {
            if (schedule.getN_morning() >= Constant.N_MORNING_MAX) {
                appointment.setRanking(0);
                return appointment;
            }
            appointment.setRanking(schedule.getRank_morning() + 1);
        } else {
            if (schedule.getN_afternoon() >= Constant.N_AFTERNOON_MAX) {
                appointment.setRanking(0);
                return appointment;
            }
            appointment.setRanking(schedule.getRank_afternoon() + 1);
        }

        scheduleDao.update(schedule, time);
        appointmentDao.addAppointment(appointment);
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
            scheduleDao.cancel(doctorID, date,time);
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
    public Record getPatientInfo(Integer ID) {
        return recordDao.getRecord(ID);
    }

    @Override
    public List<HistoryEdited> getHistories(Integer ID) {
        return historyDao.getHistories(ID);
    }

    @Override
    public void addHistory(History newHis) {
        historyDao.addHistory(newHis);
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

}
