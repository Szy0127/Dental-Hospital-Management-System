package com.sjtu.se.hospital.daoimpl;

import com.sjtu.se.hospital.dao.ScheduleDao;
import com.sjtu.se.hospital.entity.Schedule;
import com.sjtu.se.hospital.entity.ScheduleCoKey;
import com.sjtu.se.hospital.repository.AppointmentRepository;
import com.sjtu.se.hospital.repository.ScheduleRepository;
import jdk.nashorn.internal.runtime.options.Option;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityNotFoundException;
import java.util.Date;
import java.util.Optional;

@Repository
public class ScheduleDaoImpl implements ScheduleDao {
    @Autowired
    private ScheduleRepository scheduleRepository;

    @Override
    public Schedule getSchedule(Integer doctorID, Date date){
        Optional<Schedule> s = scheduleRepository.findById(new ScheduleCoKey(doctorID,date));
        if(s.isPresent()){
            return s.get();
        }else{
            System.out.println("schedule not exist");
            Schedule schedule = new Schedule();
            schedule.setDoctorID(doctorID);
            schedule.setDate(date);
            schedule.setContent("门诊");
            schedule.setN_morning(0);
            schedule.setN_afternoon(0);
            scheduleRepository.save(schedule);
            return schedule;
        }
    }


//    @Override
//    public void saveSchedule(Schedule schedule){
//        scheduleRepository.save(schedule);
//    }
    @Override
    public void updateMorning(Schedule schedule){
        scheduleRepository.updateMorning(schedule.getDoctorID(),schedule.getDate());
    }

    @Override
    public  void updateAfternoon(Schedule schedule){

    }
}
