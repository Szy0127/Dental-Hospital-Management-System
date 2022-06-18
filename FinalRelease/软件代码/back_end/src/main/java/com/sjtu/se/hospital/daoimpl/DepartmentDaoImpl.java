package com.sjtu.se.hospital.daoimpl;

import com.sjtu.se.hospital.dao.DepartmentDao;
import com.sjtu.se.hospital.entity.Department;
import com.sjtu.se.hospital.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class DepartmentDaoImpl implements DepartmentDao {
    @Autowired
    private DepartmentRepository departmentRepository;

    @Override
    public List<Department> getDepartments() {
        return departmentRepository.getDepartments();
    }

    @Override
    public Department getDeptOnly(Integer ID) {
        return departmentRepository.getOne(ID);
    }

    @Override
    public Department addNewDept(Department department) {
        return departmentRepository.save(department);
    }

    @Override
    public void delDept(int deptId) {
        departmentRepository.deleteById(deptId);
    }

    @Override
    public void alterDeptName(int deptId, String name) {
        Department department = departmentRepository.getOne(deptId);
        department.setTitle(name);
        departmentRepository.save(department);
    }

    @Override
    public void alterDocNum(int deptId, int adding) {
        Department department = departmentRepository.getOne(deptId);
        department.setDoc_num(department.getDoc_num() + adding);
        departmentRepository.save(department);
    }
}
