package com.sjtu.se.hospital.entity;

import java.io.Serializable;

public class AppointmentAdding implements Serializable {

    private Integer patientId;
    private Integer deptId;
    private Integer doctorId;
    private String date;
    private String time;

//    public AppointmentAdding(Integer patientId, Integer deptId, Integer doctorId, String date, String time) {
//        this.patientId = patientId;
//        this.deptId = deptId;
//        this.doctorId = doctorId;
//        this.date = date;
//        this.time = time;
//    }
}
