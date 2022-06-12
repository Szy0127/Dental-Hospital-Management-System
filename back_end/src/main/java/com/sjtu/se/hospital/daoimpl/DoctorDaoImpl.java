package com.sjtu.se.hospital.daoimpl;

import com.sjtu.se.hospital.entity.Doctor;
import com.sjtu.se.hospital.dao.DoctorDao;
import com.sjtu.se.hospital.entity.DoctorEdited;
import com.sjtu.se.hospital.entity.Schedule;
import com.sjtu.se.hospital.repository.DepartmentRepository;
import com.sjtu.se.hospital.repository.DoctorRepository;
import com.sjtu.se.hospital.repository.ScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.print.Doc;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

@Repository
public class DoctorDaoImpl implements DoctorDao {
    @Autowired
    private DoctorRepository doctorRepository;
    @Autowired
    private DepartmentRepository departmentRepository;
    @Autowired
    private ScheduleRepository scheduleRepository;

    @Override
    public DoctorEdited getDoctor(Integer ID) {
        Doctor p = doctorRepository.getOne(ID);
        return new DoctorEdited(
                p.getId(),
                p.getName(),
                p.getGender(),
                departmentRepository.getOne(p.getDeptID()).getTitle(),
                p.getAge(),
                p.getPost(),
                p.getAvatar(),
                p.getIntro());
    }

    @Override
    public Doctor getDetailedDoctor(int doctorId) {
        return doctorRepository.getOne(doctorId);
    }

    @Override
    public List<DoctorEdited> getDoctorsByDept(Integer ID) {
        List<Doctor> docs = doctorRepository.getDoctorsByDept(ID);
        LinkedList<DoctorEdited> res = new LinkedList<>();

        for (Doctor p : docs) {
            res.add(new DoctorEdited(
                    p.getId(),
                    p.getName(),
                    p.getGender(),
                    departmentRepository.getOne(p.getDeptID()).getTitle(),
                    p.getAge(),
                    p.getPost(),
                    p.getAvatar(),
                    p.getIntro()));
        }

        return res;
    }

    @Override
    public List<Schedule> getSchedule(Integer ID) {
        return scheduleRepository.getSchedule(ID);
    }

    @Override
    public Doctor addNewDoctor(Doctor doctor) {
        Optional<Doctor> doctor_old = doctorRepository.findById(doctor.getId());
        if (doctor_old.isPresent()) {
            doctorRepository.delete(doctor_old.get());
            doctorRepository.flush();
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
