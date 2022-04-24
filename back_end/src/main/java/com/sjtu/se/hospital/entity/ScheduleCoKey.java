package com.sjtu.se.hospital.entity;

import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.sql.Date;
import java.util.Objects;

@NoArgsConstructor
public class ScheduleCoKey implements Serializable {
    private Integer doctorID;
    private Date date;

    public ScheduleCoKey(Integer doctorID,Date date){
        this.doctorID = doctorID;
        this.date = date;
    }
    @Override
    public boolean equals(Object o){
        if(this == o){
            return true;
        }
        if(o == null || getClass() != o.getClass()){
            return false;
        }
        ScheduleCoKey a = (ScheduleCoKey) o;
        return Objects.equals(this.doctorID,a.doctorID) && Objects.equals(this.date,a.date);
    }

    @Override
    public int hashCode(){
        return Objects.hash(this.doctorID,this.date);
    }
}
