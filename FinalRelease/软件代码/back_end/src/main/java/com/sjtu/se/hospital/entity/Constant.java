package com.sjtu.se.hospital.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Objects;


@NoArgsConstructor
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

    public Constant(Integer morningMax, Integer afternoonMax, Integer punishCount, Integer punishDuration){
        this.morningMax = morningMax;
        this.afternoonMax = afternoonMax;
        this.punishCount = punishCount;
        this.punishDuration = punishDuration;
    }
}
