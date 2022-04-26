package com.sjtu.se.hospital.entity;

import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

@NoArgsConstructor
public class AppointmentCoKey implements Serializable {
    private Integer ranking;

    private Integer patientID;

    private Integer doctorID;

    private Date date;


    public AppointmentCoKey(Appointment appointment){
        this.ranking = appointment.getRanking();
        this.patientID = appointment.getPatientID();;
        this.doctorID = appointment.getDoctorID();
        this.date = appointment.getDate();
    }
    @Override
    public boolean equals(Object o){
        if(this == o){
            return true;
        }
        if(o == null || getClass() != o.getClass()){
            return false;
        }
        AppointmentCoKey a = (AppointmentCoKey) o;
        return Objects.equals(this.ranking,a.ranking) && Objects.equals(this.patientID,a.patientID) && Objects.equals(this.doctorID,a.doctorID) && Objects.equals(this.date,a.date);
    }

    @Override
    public int hashCode(){
        return Objects.hash(this.ranking,this.patientID,this.doctorID,this.date);
    }

}
