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
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityNotFoundException;
import java.sql.Date;
import java.util.Optional;

@Repository
public class ScheduleDaoImpl implements ScheduleDao {
    @Autowired
    private ScheduleRepository scheduleRepository;

    @Nullable
//    @NotFound(action = NotFoundAction.IGNORE)
    @Override
    public Schedule getSchedule(Integer doctorID, Date date){
        Optional<Schedule> s = scheduleRepository.findById(new ScheduleCoKey(doctorID,date));
//        try{
//            Schedule schedule = scheduleRepository.getOne(new ScheduleCoKey(doctorID,date));
//            return schedule;
//        }catch (EntityNotFoundException e){
//            return null;
//        }
        if(s.isPresent()){
            return s.get();
        }else{
            System.out.println("schedule not exist");
            Schedule schedule = new Schedule(doctorID,date);
            scheduleRepository.save(schedule);
            return schedule;
        }
    }


//    @Override
//    public void saveSchedule(Schedule schedule){
//        scheduleRepository.save(schedule);
//    }
    @Override
    public void update(Schedule schedule,String time){
        if(time.equals("m")){
            scheduleRepository.updateMorning(schedule.getDoctorID(),schedule.getDate());
        }else{
            scheduleRepository.updateAfternoon(schedule.getDoctorID(),schedule.getDate());
        }
    }

}
