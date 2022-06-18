package com.sjtu.se.hospital.entity;
import java.sql.Date;

public class AppointmentEdited {
    public Integer ranking;
    public Integer patientID;
    public String department;
    public String doctor;
    public Date date;
    public String time;
    public Integer deptID;
    public Integer docID;


    public AppointmentEdited() {}
    public AppointmentEdited(Integer ran, Integer pat, String dep, String doc, Date date, String time, Integer deptID, Integer docID) {
        this.ranking = ran;
        this.patientID = pat;
        this.department = dep;
        this.doctor = doc;
        this.date = date;
        this.time = time;
        this.deptID = deptID;
        this.docID = docID;
    }
}