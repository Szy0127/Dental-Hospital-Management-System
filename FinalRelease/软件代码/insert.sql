use hospital;
delete from doctor;
delete from patient;
delete from department;
delete from appointment;
delete from news;
delete from notification;
delete from schedule;
delete from constant;
delete from user;

insert into constant values(30,40,3,3);

insert into department values (1, '儿科', 2);
insert into department values (2, '内科', 2);
insert into department values (3, '神经科', 2);

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

insert into notification values (1, '2022-04-20', '2022年我院劳动节期间医疗工作安排通知', '各位患者：

       现将2022年劳动节期间医疗工作时间调整通知如下：

1.总院（海淀魏公村）

    4月24日（周日）                              全天门诊，上5月3日（周二）班，停晚诊

    4月29日（周五）                              正常门诊，停晚诊

    4月30日（周六）至5月2日（周一）  节日放假，门诊停诊，急诊应诊

    5月3日（周二）至5月4日（周三）    节日半日门诊

    5月5日（周四）                                正常门诊，开晚诊

    5月7日（周六）                                全天门诊，上5月4日（周三）班，停晚诊

2.第一门诊部（西城区西四）

    4月24日（周日）                              全天门诊，上5月3日（周二）班

    4月29日（周五）                              正常门诊

    4月30日（周六）至5月2日（周一）  节日放假，门诊停诊

    5月3日（周二）至5月4日（周三）    节日半日门诊

    5月5日（周四）                                正常门诊

    5月7日（周六）                                全天门诊，上5月4日（周三）班

3.第二门诊部（北四环安立路）、第三门诊部（北三环花园东路）

    4月24日（周日）                              正常门诊

    4月29日（周五）至4月30日（周六）正常门诊

    5月1日（周日）                                节日放假，门诊停诊

    5月2日（周一）至5月7日（周六）    正常门诊

4.第四门诊部（东四环慈云寺）

    4月23日（周六）                              正常门诊，上5月3日（周二）班

    4月24日（周日）                              正常门诊

    4月29日（周五）                              正常门诊

    4月30日（周六）至5月4日（周三）  节日放假，门诊停诊

    5月7日（周六）                                正常门诊，上5月4日（周三）班

    5月14日（周六）                              正常门诊

5.第五门诊部（东二环朝阳门外）

    4月24日（周日）                              全天门诊

    4月29日（周五）                              全天门诊

    4月30日（周六）至5月3日（周二）  节日放假，门诊停诊

    5月4日（周三）                                全天值班门诊

    5月5日（周四）                                正常门诊

    5月7日（周六）                                全天门诊

特此通告 ');
insert into notification values (2, '2022-04-20', '水源诊所口腔外科停诊通知', '尊敬的患者:
因安立花园写字楼高压配电设备检修停电，我口腔外科于2022年4月20日上午停诊。请您注意接听我院来电，将为您改约该时段预约就诊时间。4月20日12:30后恢复门诊。（注意：停电期间请您不要乘坐电梯！！）
由此给您带来的不便，敬请谅解！');
insert into notification values (3, '2022-03-17', '2022年我院清明节期间医疗工作安排通知', '各位患者：

       现将2022年清明节期间医疗工作时间调整通知如下：

1.总院（海淀魏公村）

  4月2日（周六）                                全天门诊，上4月4日（周一）班，停晚诊

  4月3日（周日）                                双休日停诊，急诊应诊

  4月4日（周一）                                节日调休，门诊停诊，急诊应诊

  4月5日（周二，清明节）                   节日放假，门诊停诊，急诊应诊

  4月6日（周三）                                正常门诊，开晚诊

2.第一门诊部（西城区西四）、第四门诊部（东四环慈云寺）

  4月2日（周六）                                全天门诊，上4月4日（周一）班

  4月3日（周日）                                双休日停诊

  4月4日（周一）                                节日调休，门诊停诊

  4月5日（周二，清明节）                   节日放假，门诊停诊

  4月6日（周三）                                正常门诊

3.第二门诊部（北四环安立路）、第三门诊部（北三环花园东路）

  4月2日（周六）                                正常门诊

  4月3日（周日）                                正常门诊

  4月4日（周一）                                正常门诊

  4月5日（周二，清明节）                  节日放假，门诊停诊

  4月6日（周三）                                正常门诊

4.第五门诊部（东二环朝阳门外）

  4月2日（周六）                                全天门诊

  4月3日（周日）                                双休日停诊

  4月4日（周一）                                节日调休，门诊停诊

  4月5日（周二，清明节）                   节日放假，门诊停诊

  4月6日（周三）                                正常门诊



特此通告');
insert into notification values (4, '2022-01-24', '2022年我院春节期间医疗工作安排通知', '各位患者：

       现将2022年春节期间医疗工作时间调整通知如下：

1.总院（海淀魏公村）

  1月29日（周六）                                                     全天门诊，上2月3日（周四）班，停晚诊

  1月30日（周日）                                                     全天门诊，上2月4日（周五）班，停晚诊

  1月31日（周一，除夕）至2月2日（周三，初二）     节日放假，门诊停诊，急诊应诊

  2月3日（周四，初三）至2月6日（周日，初六）       节日半日门诊

  2月7日（周一，初七）                                             正常门诊，开晚诊

2. 第一门诊部（西城区西四）

  1月29日（周六）                                                     全天门诊，上2月3日（周四）班

  1月30日（周日）                                                     全天门诊，上2月4日（周五）班

  1月31日（周一，除夕）至2月2日（周三，初二）     节日放假，门诊停诊

  2月3日（周四，初三）至2月6日（周日，初六）       节日半日门诊

  2月7日（周一，初七）                                             正常门诊

3.第二门诊部（北四环安立路）

  1月29日（周六）                                                     正常门诊

  1月30日（周日）                                                     正常门诊

  1月31日（周一，除夕）至2月2日（周三，初二）     节日放假，门诊停诊

  2月3日（周四，初三）至2月6日（周日，初六）       正常门诊

  2月7日（周一，初七）                                             正常门诊

4.第三门诊部（北三环花园东路）

  1月29日（周六）                                                     正常门诊

  1月30日（周日）                                                     全天门诊

  1月31日（周一，除夕）至2月2日（周三，初二）     节日放假，门诊停诊

  2月3日（周四，初三）至2月6日（周日，初六）       节日门诊

  2月7日（周一，初七）                                             正常门诊

5.第四门诊部（东四环慈云寺）

  1月29日（周六）                                                     全天门诊，上2月3日（周四）班

  1月30日（周日）                                                     全天门诊

  1月31日（周一，除夕）至2月4日（周五，初四）     节日放假，门诊停诊

  2月5日（周六，初五）至2月6日（周日，初六）       节日值班门诊

  2月7日（周一，初七）                                             正常门诊

  2月12日（周六）                                                     正常门诊，上2月4日（周五）班

6.第五门诊部（东二环朝阳门外）

  1月29日（周六）                                                     全天门诊，上2月3日（周四）班

  1月30日（周日）                                                     全天门诊，上2月4日（周五）班

  1月31日（周一，除夕）至2月4日（周五，初四）     节日放假，门诊停诊

  2月5日（周六，初五）至2月6日（周日，初六）       节日值班门诊

  2月7日（周一，初七）                                             正常门诊



 特此通告 ');
insert into notification values (5, '2021-12-15', '2022年我院元旦期间医疗工作安排通知', '各位患者：

      现将2022年元旦期间医疗工作时间调整通知如下：

1.总院（海淀魏公村）

       2021年12月31日（周五）                        正常门诊，停晚诊

       2022年1月1日（周六，元旦）                  节日放假，门诊停诊，急诊应诊

       1月2日（周日）                                        双休日停诊，急诊应诊

       1月3日（周一）                                        节日调休，门诊停诊，急诊应诊

       1月4日（周二）                                        正常门诊，开晚诊

2. 第一门诊部（西城区西四）、第四门诊部（东四环慈云寺）、第五门诊部（东二环朝阳门外）

       2021年12月31日（周五）                        正常门诊

       2022年1月1日（周六，元旦）                  节日放假，门诊停诊

       1月2日（周日）                                       双休日停诊

       1月3日（周一）                                       节日调休，门诊停诊

       1月4日（周二）                                       正常门诊

3.第二门诊部（北四环安立路）、第三门诊部（北三环花园东路）

       2021年12月31日（周五）                        正常门诊

       2022年1月1日（周六，元旦）                  节日放假，门诊停诊

       1月2日（周日）                                       正常门诊

       1月3日（周一）                                       正常门诊

       1月4日（周二）                                       正常门诊



特此通告');

insert into news values (1, '2022-04-26', '党代会｜踔厉奋发 笃行不怠 建全国党建标杆院系', '党代会｜踔厉奋发 笃行不怠 建全国党建标杆院系');
insert into news values (2, '2022-04-20', '喜讯｜北大口腔党委入选“全国党建工作标杆院系”！', '喜讯｜北大口腔党委入选“全国党建工作标杆院系”！');
insert into news values (3, '2022-04-08', '“创新驱动健康口腔 转化引领高质量发展”学术研讨会', '创新驱动健康口腔 转化引领高质量发展”学术研讨会');
insert into news values (4, '2022-03-18', '水源诊所2022年工作研讨会圆满举行', '水源诊所2022年工作研讨会圆满举行');
insert into news values (5, '2022-02-28', '水源诊所荣获国家卫健委2020-2021年度“私立医疗机构经济管理年”活动优秀单位', '水源诊所荣获国家卫健委2020-2021年度“私立医疗机构经济管理年”活动优秀单位');


insert into user values(1,'admin','25605c8c4d7bd9073922aedc05236bf35acd14587281f147bd84242ffecb053b',3);