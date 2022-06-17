drop database hospital;
create database hospital;

use hospital;

drop table if exists notification;
drop table if exists news;
drop table if exists schedule;
drop table if exists appointment;
drop table if exists patient;
drop table if exists doctor;
drop table if exists history;
drop table if exists department;
drop table if exists user;
drop table if exists constant;

create table constant
(
	morning_max integer check ( morning_max >= 0 ),
    afternoon_max integer check ( afternoon_max >= 0 ),
    punish_count integer check ( punish_count >= 0 ),#超过n次禁止挂号
    punish_duration integer check ( punish_duration >= 0 ),#一次禁止n天
    primary key(morning_max)
)engine=ndbcluster;
create table notification
(
    id integer auto_increment,
    date date,
    title varchar(50),
    content text,
    primary key (id)
)engine=ndbcluster;

create table news
(
    id integer auto_increment,
    date date,
    title varchar(50),
    content text,
    primary key (id)
)engine=ndbcluster;

create table department
(
    id integer auto_increment,
    title varchar(30),
    doc_num numeric(3) check ( doc_num >= 0 ),
    primary key (id)
)engine=ndbcluster;

create table user
(
	id integer not null auto_increment,
    primary key (id),
	username varchar(50),
    password char(64) not null,
    `type` integer not null
)engine=ndbcluster;

create table patient
(
    id integer,
    name varchar(50),
    gender varchar(1) check ( gender in ('m', 'f') ),
    email varchar(50),
    phone varchar(15),
    age integer check ( age >= 0 ),
    punish_count integer,#累计废号次数 达到n次后记录禁用开始时间
    punish_begin timestamp,#禁用开始时间
    primary key (id),
    foreign key (id) references user (id) on delete cascade
)engine=ndbcluster;


create table doctor
(
    id integer,
    name varchar(50),
    gender varchar(1), check ( gender in ('m', 'f') ),
    dept_id integer,
    age integer,
    post varchar(16),
    avatar TEXT,
    intro TEXT,

    primary key (id)
    #foreign key (id) references user (id) on delete cascade
    #foreign key (dept_id) references department (id) on delete cascade

)engine=ndbcluster;

create table history
(
    id integer auto_increment,
    time date,
    patient_id integer,
    dept_id integer,
    description text,

    primary key (id)
    #foreign key (dept_id) references department (id) on delete cascade

)engine=ndbcluster;

create table appointment
(
    ranking integer,
    patient_id integer,
    dept_id integer,
    doctor_id integer,
    date date,
    time varchar(1) check ( time in ('m', 'a') ),
    primary key (date, ranking, patient_id, doctor_id),
    unique key (ranking,doctor_id,date,time),
    unique key(patient_id,doctor_id,date,time),
    foreign key (patient_id) references patient (id) on delete cascade,
    foreign key (dept_id) references department (id) on delete cascade,
    foreign key (doctor_id) references department (id) on delete cascade
)engine=ndbcluster;

create table schedule
(
    doctor_id integer,
    date date,
    n_morning integer check ( n_morning >= 0 ),
    n_afternoon integer check ( n_afternoon >= 0 ),
    rank_morning integer check ( rank_morning >= 0 ),
    rank_afternoon integer check ( rank_afternoon >= 0 ),
    content varchar(50),
    primary key (doctor_id, date),
    foreign key (doctor_id) references doctor (id) on delete cascade
)engine=ndbcluster;