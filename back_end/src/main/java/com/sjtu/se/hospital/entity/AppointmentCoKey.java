package com.sjtu.se.hospital.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

public class AppointmentCoKey implements Serializable {
    private Integer ranking;

    private Integer patientID;

    private Integer doctorID;

    private Date date;

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
