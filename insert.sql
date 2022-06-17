use hospital;
delete from doctor;
delete from patient;
delete from history;
delete from department;
delete from appointment;
delete from news;
delete from notification;
delete from schedule;
delete from constant;
delete from user;

insert into constant values(30,40,3,3);

insert into department values (1, '儿科', 0);
insert into department values (2, '内科', 0);
insert into department values (3, '神经科', 0);

insert into user values(2,'doctor1','25605c8c4d7bd9073922aedc05236bf35acd14587281f147bd84242ffecb053b',2);
insert into user values(3,'doctor2','25605c8c4d7bd9073922aedc05236bf35acd14587281f147bd84242ffecb053b',2);
insert into user values(4,'doctor3','25605c8c4d7bd9073922aedc05236bf35acd14587281f147bd84242ffecb053b',2);
insert into user values(5,'doctor4','25605c8c4d7bd9073922aedc05236bf35acd14587281f147bd84242ffecb053b',2);
insert into user values(6,'doctor5','25605c8c4d7bd9073922aedc05236bf35acd14587281f147bd84242ffecb053b',2);
insert into user values(7,'doctor6','25605c8c4d7bd9073922aedc05236bf35acd14587281f147bd84242ffecb053b',2);

insert into doctor values (2, 'Alice', 'm', 1, 40, '儿科主任', 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1', '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生');
insert into doctor values (3, 'Bob', 'f', 1, 30, '儿科主任', 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1', '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生');
insert into doctor values (4, 'John', 'm', 2, 42, '儿科主任', 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1', '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生');
insert into doctor values (5, 'Mike', 'm', 2, 34, '儿科主任', 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1', '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生');
insert into doctor values (6, 'George', 'f', 3, 43, '儿科主任', 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1', '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生');
insert into doctor values (7, 'Adam', 'm', 3, 40, '儿科主任', 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1', '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生');




-- insert into doctor values (2, 'Doctor B', 'm', 1, 40, '儿科主任', 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1', '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生');
-- insert into doctor values (3, 'Doctor C', 'm', 1, 40, '儿科主任', 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1', '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生');
-- insert into doctor values (4, 'Doctor D', 'm', 1, 40, '儿科主任', 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1', '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生');
-- insert into doctor values (5, 'Doctor E', 'm', 1, 40, '儿科主任', 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1', '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生');
-- insert into doctor values (6, 'Doctor F', 'm', 2, 40, '儿科主任', 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1', '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生');
-- insert into doctor values (7, 'Doctor G', 'm', 2, 40, '儿科主任', 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1', '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生');
-- insert into doctor values (8, 'Doctor H', 'm', 2, 40, '儿科主任', 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1', '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生');
-- insert into doctor values (9, 'Doctor I', 'm', 2, 40, '儿科主任', 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1', '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生');
-- insert into doctor values (10, 'Doctor J', 'm', 2, 40, '儿科主任', 'https://tse1-mm.cn.bing.net/th/id/R-C.76fd05867d71406683f3a45373c10379?rik=%2bDduNoMwI2URVQ&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0801%2fpic2011123717112.jpg&ehk=SGXl%2baTf7X%2b5yncC90AYrDDvXxDdEFMic8EVKUfvcs4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1', '毕业于上海交通大学医学院，2015年赴哈佛大学深造。2020年上海市十大最美医生');

insert into notification values (1, '2022-03-26', 'kkkkkkkkkkkkkkk', '1111111111111111111111111111111111111111111111111111111111');
insert into notification values (2, '2022-03-27', 'eeeeeeeeeeeeeeee', '222222222222222222222222222222222222222222222222222222222222222222');
insert into notification values (3, '2022-03-28', 'vvvvvvvvvvvvvvv', '222222222222222222222222222222222222222222222222222222222222222222');
insert into notification values (4, '2022-03-28', 'ggggggggggggg', '222222222222222222222222222222222222222222222222222222222222222222');
insert into notification values (5, '2022-03-28', 'iiiiiiiiiiiiii', '222222222222222222222222222222222222222222222222222222222222222222');

insert into news values (1, '2022-04-26', 'kkkkkkkkkkkk', '11111111111111111111111111111111111111111111111111111111111111111111');
insert into news values (2, '2022-04-27', 'eeeeeeeeeeee', '11111111111111111111111111111111111111111111111111111111111111111111');
insert into news values (3, '2022-04-28', 'vvvvvvvvvvvv', '11111111111111111111111111111111111111111111111111111111111111111111');
insert into news values (4, '2022-04-28', 'ggggggggggggg', '11111111111111111111111111111111111111111111111111111111111111111111');
insert into news values (5, '2022-04-28', 'iiiiiiiiiii', '11111111111111111111111111111111111111111111111111111111111111111111');

insert into user values(1,'admin','25605c8c4d7bd9073922aedc05236bf35acd14587281f147bd84242ffecb053b',3);