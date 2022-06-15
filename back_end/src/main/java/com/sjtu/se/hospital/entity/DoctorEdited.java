package com.sjtu.se.hospital.entity;


public class DoctorEdited {
    public int id;
    public String name;
    public String gender;
    public Integer deptId;
    public String department;
    public Integer age;
    public String post;
    public String avatar;
    public String intro;
    public String username;
    public String password;
    public Integer type;

    public DoctorEdited() {}
    public DoctorEdited(int id, String name, String gen, Integer deptId, String dep, Integer age, String post, String ava,
                        String intro, String username, String password, Integer type) {
        this.id = id;
        this.name = name;
        this.gender = gen;
        this.deptId = deptId;
        this.department = dep;
        this.age = age;
        this.post = post;
        this.avatar = ava;
        this.intro = intro;
        this.username = username;
        this.password = password;
        this.type = type;
    }
}