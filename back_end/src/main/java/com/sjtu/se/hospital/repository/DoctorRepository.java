package com.sjtu.se.hospital.repository;

import com.sjtu.se.hospital.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface DoctorRepository extends JpaRepository<Doctor,Integer> {
    @Transactional
    @Query("select d from Doctor d where (d.deptID=:ID)")
    List<Doctor> getDoctorsByDeptID(@Param("ID") Integer ID);
}
