package com.sjtu.se.hospital.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;


import javax.persistence.*;
import java.sql.Date;

@Data
@Entity
@Table(name = "news")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
public class News {
    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Date date;
    private String title;
    private String content;

    public News() {}
    public News(Date date, String title, String content) {
        this.id = 0;
        this.date = date;
        this.title = title;
        this.content = content;
    }

}