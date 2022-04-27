package com.sjtu.se.hospital.daoimpl;

import com.sjtu.se.hospital.dao.AppointmentDao;
import com.sjtu.se.hospital.entity.Appointment;
import com.sjtu.se.hospital.entity.AppointmentCoKey;
import com.sjtu.se.hospital.entity.AppointmentEdited;
import com.sjtu.se.hospital.repository.AppointmentRepository;
import com.sjtu.se.hospital.repository.DepartmentRepository;
import com.sjtu.se.hospital.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;


@Repository
public class AppointmentDaolmpl implements AppointmentDao {

    @Autowired
    private AppointmentRepository appointmentRepository;
    @Autowired
    private DepartmentRepository departmentRepository;
    @Autowired
    private DoctorRepository doctorRepository;

    @Override
    public void addAppointment(Appointment appointment) {
        appointmentRepository.save(appointment);
    }

    @Override
    public boolean cancelAppointment(Appointment appointment) {

        Optional<Appointment> a = appointmentRepository.findById(new AppointmentCoKey(appointment));
        if(!a.isPresent()){
            return false;
        }
        appointmentRepository.delete(a.get());
        return true;
    }

    @Override
    public List<AppointmentEdited> getAppointmentsByPatient(Integer ID) {
        LinkedList<AppointmentEdited> res = new LinkedList<>();
        List<Appointment> ap = appointmentRepository.getAppointmentsByPatient(ID);

        for (Appointment p : ap) {
            res.addFirst(new AppointmentEdited(
                    p.getRanking(),
                    p.getPatientID(),
                    departmentRepository.getOne(p.getDeptID()).getTitle(),
                    doctorRepository.getOne(p.getDoctorID()).getName(),
                    p.getDate(),
                    p.getTime(),
                    p.getDeptID(),
                    p.getDoctorID()
            ));
        }

        return res;
    }

    @Override
    public List<Appointment> getAppointmentsByDoc(Integer ID) {
        return appointmentRepository.getAppointmentsByDoc(ID);
    }


}
