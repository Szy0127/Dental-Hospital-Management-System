package com.sjtu.se.hospital.serviceimpl;

import com.reins.bookstore.constant.Constant;
import com.sjtu.se.hospital.dao.AppointmentDao;
import com.sjtu.se.hospital.dao.ScheduleDao;
import com.sjtu.se.hospital.entity.Appointment;
import com.sjtu.se.hospital.entity.Schedule;
import com.sjtu.se.hospital.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

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



    @Transactional
    @Override
    public Appointment addAppointment(Integer patientID,Integer deptID,Integer doctorID,String datestr,String time) {
        try{
            Date date = new SimpleDateFormat("yyyy-mm-dd").parse(datestr);
            Appointment appointment = new Appointment();
            appointment.setPatientID(patientID);
            appointment.setDeptID(deptID);
            appointment.setDoctorID(doctorID);
            appointment.setDate(date);
            appointment.setTime(time);
            Schedule schedule = scheduleDao.getSchedule(doctorID,date);
            if(time.equals("m")&& schedule.getN_morning() < Constant.N_MORNING_MAX){
//                schedule.setN_morning(schedule.getN_morning()+1);
                scheduleDao.updateMorning(schedule);
                appointment.setRanking(schedule.getN_morning()+1);
                appointmentDao.addAppointment(appointment);
                return appointment;
            }
            if(time.equals("a")&& schedule.getN_afternoon() < Constant.N_AFTERNOON_MAX){
//                schedule.setN_afternoon(schedule.getN_afternoon()+1);
                scheduleDao.updateAfternoon(schedule);
                appointment.setRanking(schedule.getN_afternoon()+1);
                appointmentDao.addAppointment(appointment);
                return appointment;
            }
        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }
        return null;
    }

}
