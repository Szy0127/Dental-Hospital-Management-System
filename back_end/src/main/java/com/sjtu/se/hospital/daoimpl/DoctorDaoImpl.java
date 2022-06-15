package com.sjtu.se.hospital.daoimpl;

import com.sjtu.se.hospital.entity.Doctor;
import com.sjtu.se.hospital.dao.DoctorDao;
import com.sjtu.se.hospital.entity.Schedule;
import com.sjtu.se.hospital.repository.DepartmentRepository;
import com.sjtu.se.hospital.repository.DoctorRepository;
import com.sjtu.se.hospital.repository.ScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class DoctorDaoImpl implements DoctorDao {
    @Autowired
    private DoctorRepository doctorRepository;
    @Autowired
    private ScheduleRepository scheduleRepository;

    @Override
    public Doctor getDoctor(Integer ID) {
        return doctorRepository.getOne(ID);
    }


    @Override
    public Doctor getDetailedDoctor(int doctorId) {
        return doctorRepository.getOne(doctorId);
    }

    @Override
    public List<Doctor> getDoctorsByDept(Integer ID) {
        return doctorRepository.getDoctorsByDept(ID);
    }

    @Override
    public List<Schedule> getSchedule(Integer ID) {
        return scheduleRepository.getSchedule(ID);
    }

    @Override
    public Doctor addNewDoctor(Doctor doctor) {
        Optional<Doctor> doctor_old = doctorRepository.findById(doctor.getId());
        if (doctor_old.isPresent()) {
            doctor_old.get().setUsername(doctor.getUsername());
            doctor_old.get().setPassword(doctor.getPassword());
            doctor_old.get().setName(doctor.getName());
            doctor_old.get().setGender(doctor.getGender());
            doctor_old.get().setDeptID(doctor.getDeptID());
            doctor_old.get().setAge(doctor.getAge());
            doctor_old.get().setPost(doctor.getPost());
            doctor_old.get().setAvatar(doctor.getAvatar());
            doctor_old.get().setIntro(doctor.getIntro());
            return doctorRepository.save(doctor_old.get());
        } else {
            return doctorRepository.save(doctor);
        }
    }

    @Override
    public void delDoctor(int doctorId) {
        doctorRepository.deleteById(doctorId);
    }
}
