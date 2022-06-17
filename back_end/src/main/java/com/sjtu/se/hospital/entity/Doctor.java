package com.sjtu.se.hospital.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sjtu.se.hospital.constant.Constant;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Data
@Entity
@Table(name = "doctor")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
public class Doctor extends User {

    @Column(name = "name")
    private String name;

    @Column(name = "gender")
    private String gender;

    @Column(name = "dept_id")
    private Integer deptID;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dept_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Department department;

    @Column(name = "age")
    private Integer age;

    @Column(name = "post")
    private String post;

    @Column(name = "avatar")
    private String avatar;

    @Column(name = "intro")
    private String intro;

    public Doctor(Integer id, String username, String password, String name, String gender,
                  Integer deptID, Integer age, String post, String avatar, String intro) {
        this.setId(id);
        this.setUsername(username);
        this.setPassword(password);
        this.setType(Constant.Type_Doctor);

        this.name = name;
        this.gender = gender;
        this.deptID = deptID;
        this.age = age;
        this.post = post;
        this.avatar = avatar;
        this.intro = intro;
    }
}