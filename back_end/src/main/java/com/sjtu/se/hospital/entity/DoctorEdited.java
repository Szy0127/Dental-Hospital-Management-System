package com.sjtu.se.hospital.entity;


public class DoctorEdited {
    public int id;
    public String name;
    public String gender;
    public String department;
    public Integer age;
    public String post;
    public String avatar;
    public String intro;

    public DoctorEdited() {}
    public DoctorEdited(int id, String name, String gen, String dep, Integer age, String post, String ava, String intro) {
        this.id = id;
        this.name = name;
        this.gender = gen;
        this.department = dep;
        this.age = age;
        this.post = post;
        this.avatar = ava;
        this.intro = intro;
    }
}