use hospital;

create table notification
(
    ID integer,
    date date,
    title varchar(50),
    content text,
    primary key (ID, date)
);

create table news
(
    ID integer,
    date date,
    title varchar(50),
    content text,
    primary key (ID, date)
);

create table department
(
    ID integer,
    title varchar(30),
    doc_num numeric(3) check ( doc_num >= 0 ),
    primary key (ID)
);

create table patient
(
    ID integer,
    name varchar(50),
    gender varchar(1) check ( gender in ('m', 'f') ),
    email varchar(50),
    phone varchar(15),
    age integer check ( age >= 0 ),
    account varchar(50),
    primary key (ID)
);

create table doctor
(
    ID integer,
    name varchar(50),
    gender varchar(1), check ( gender in ('m', 'f') ),
    deptID integer,
    age integer,
    post varchar(16),
    avatar TEXT,
    intro TEXT,
    primary key (ID),
    foreign key (deptID) references department (ID) on delete cascade
);

create table history
(
    ID integer auto_increment,
    time date,
    patientID integer,
    deptID integer,
    description text,
    primary key (ID),
    foreign key (deptID) references department (ID) on delete cascade
);

create table appointment
(
    ranking integer,
    patientID integer,
    deptID integer,
    doctorID integer,
    date date,
    time varchar(1) check ( time in ('m', 'a') ),
    primary key (date, ranking, patientID, doctorID),
    foreign key (patientID) references patient (ID) on delete cascade,
    foreign key (deptID) references department (ID) on delete cascade,
    foreign key (doctorID) references department (ID) on delete cascade
);

create table schedule
(
    doctorID integer,
    date date,
    n_morning integer check ( n_morning >= 0 ),
    n_afternoon integer check ( n_afternoon >= 0 ),
    content varchar(50),
    primary key (doctorID, date),
    foreign key (doctorID) references doctor (ID) on delete cascade
);