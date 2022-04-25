package com.sjtu.se.hospital.entity;
import java.sql.Date;

public class AppointmentEdited {
    public Integer ranking;
    public Integer patientID;
    public String department;
    public String doctor;
    public Date date;
    public String time;

    public AppointmentEdited() {}
    public AppointmentEdited(Integer ran, Integer pat, String dep, String doc, Date date, String time) {
        this.ranking = ran;
        this.patientID = pat;
        this.department = dep;
        this.doctor = doc;
        this.date = date;
        this.time = time;
    }
}