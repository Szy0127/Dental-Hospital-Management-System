package com.sjtu.se.hospital.repository;

import com.sjtu.se.hospital.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DepartmentRepository extends JpaRepository<Department,Integer> {
    @Query("select d from Department d")
    List<Department> getDepartments();
}
