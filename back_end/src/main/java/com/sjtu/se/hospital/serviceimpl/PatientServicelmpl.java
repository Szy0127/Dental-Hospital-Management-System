package com.sjtu.se.hospital.serviceimpl;

import com.reins.bookstore.constant.Constant;
import com.sjtu.se.hospital.dao.AppointmentDao;
import com.sjtu.se.hospital.dao.HistoryDao;
import com.sjtu.se.hospital.dao.RecordDao;
import com.sjtu.se.hospital.dao.ScheduleDao;
import com.sjtu.se.hospital.entity.*;
import com.sjtu.se.hospital.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.sql.Date;
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



    @Transactional
    @Override
    public Appointment addAppointment(Integer patientID,Integer deptID,Integer doctorID,String datestr,String time) {
        try{
            boolean success = false;
            Date date = new Date(new SimpleDateFormat("yyyy-MM-dd").parse(datestr).getTime());
            System.out.println(datestr);
            System.out.println(date);
            Appointment appointment = new Appointment();
            appointment.setPatientID(patientID);
            appointment.setDeptID(deptID);
            appointment.setDoctorID(doctorID);
            appointment.setDate(new java.sql.Date(date.getTime()));
            appointment.setTime(time);
            Schedule schedule = scheduleDao.getSchedule(doctorID,date);
            if(time.equals("m")&& schedule.getN_morning() < Constant.N_MORNING_MAX){
                appointment.setRanking(schedule.getN_morning()+1);
                success = true;
            }
            if(time.equals("a")&& schedule.getN_afternoon() < Constant.N_AFTERNOON_MAX){
                appointment.setRanking(schedule.getN_afternoon()+1);
                success = true;
            }
            if(success){
                scheduleDao.update(schedule,time);
                appointmentDao.addAppointment(appointment);
                return appointment;
            }
        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }
        return null;
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
    public List<HistoryEdited> getHistories() {
        return historyDao.getHistories();
    }

}
