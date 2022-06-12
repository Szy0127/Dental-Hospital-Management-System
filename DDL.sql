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
);
create table notification
(
    ID integer,
    date date,
    title varchar(50),
    content text,
    primary key (ID)
);

create table news
(
    ID integer,
    date date,
    title varchar(50),
    content text,
    primary key (ID)
);

create table department
(
    ID integer,
    title varchar(30),
    doc_num numeric(3) check ( doc_num >= 0 ),
    primary key (ID)
);

create table user
(
	ID integer not null auto_increment,
    primary key (ID),
	username varchar(50),
    password char(64) not null,
    `type` integer not null
);

create table patient
(
    ID integer,
    name varchar(50),
    gender varchar(1) check ( gender in ('m', 'f') ),
    email varchar(50),
    phone varchar(15),
    age integer check ( age >= 0 ),
    punish_count integer,#累计废号次数 达到n次后记录禁用开始时间
    punish_begin timestamp,#禁用开始时间
    primary key (ID),
    foreign key (ID) references user (ID) on delete cascade
);


create table doctor
(
    ID integer,
    name varchar(50),
    gender varchar(1), check ( gender in ('m', 'f') ),
    dept_id integer,
    age integer,
    post varchar(16),
    avatar TEXT,
    intro TEXT,
    primary key (ID),
    foreign key (dept_id) references department (ID) on delete cascade
);

create table history
(
    ID integer auto_increment,
    time date,
    patient_id integer,
    dept_id integer,
    description text,
    primary key (ID),
    foreign key (dept_id) references department (ID) on delete cascade
);

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
--     foreign key (patient_id) references patient (ID) on delete cascade,
    foreign key (dept_id) references department (ID) on delete cascade,
    foreign key (doctor_id) references department (ID) on delete cascade
);

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
    foreign key (doctor_id) references doctor (ID) on delete cascade
);