package com.sjtu.se.hospital.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "department")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
public class Department {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;
    private Integer doc_num;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "dept_id", referencedColumnName = "id", updatable = false, insertable = false)
    private List<Doctor> doctors;

    public Department() {}
    public Department(String title) {
        this.id = 0;
        this.title = title;
        this.doc_num = 0;
    }
}