package com.sjtu.se.hospital.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Objects;
@Data
@Entity
@Table(name="constant")
public class Constant {
    @Id
    @Column(name = "morning_max")
    private Integer morningMax;
    @Basic
    @Column(name = "afternoon_max")
    private Integer afternoonMax;
    @Basic
    @Column(name = "punish_count")
    private Integer punishCount;
    @Basic
    @Column(name = "punish_duration")
    private Integer punishDuration;

}
