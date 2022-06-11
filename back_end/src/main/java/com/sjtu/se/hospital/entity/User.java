package com.sjtu.se.hospital.entity;

import com.sjtu.se.hospital.constant.Constant;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Objects;
@NoArgsConstructor
@Data
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class User {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ID")
    private Integer id;
    @Basic
    @Column(name = "username")
    private String username;
    @Basic
    @Column(name = "password")
    private String password;
    @Basic
    @Column(name = "type")
    private Integer type;


    public User(String username,String password){
        this.username = username;
        this.password = password;
        this.type = Constant.Type_Patient;
    }
}
