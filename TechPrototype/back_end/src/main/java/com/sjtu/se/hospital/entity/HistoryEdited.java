package com.sjtu.se.hospital.entity;

import java.sql.Date;

public class HistoryEdited {
    public Date time;
    public String department;
    public String description;

    public HistoryEdited() {}
    public HistoryEdited(Date time, String dep, String des) {
        this.time = time;
        this.department = dep;
        this.description =des;
    }
}