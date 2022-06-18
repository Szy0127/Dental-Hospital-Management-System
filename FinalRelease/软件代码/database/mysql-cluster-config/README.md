image压缩后仍400M太大 github放不上来
需要保证至少8G内存
#### management

- config.ini

- `ndb_mgmd -f config.ini --initial`


- 之后不能加--initial 否则数据没了


#### data

- /etc/my.cnf 默认配置文件路径
- `ndbd --initial`

- 之后不用加initial

- 数据存在/usr/local/mysql/data/


#### mysql

- /etc/mysql/my.cnf

- `mysqld_safe &`

- 需要等所有data node启动完(不在starting状态)才行

- 需要被客户端（其他语言的脚本）连接 需要改设置

  ```mysql
  use mysql;
  update user set host = '%' where user = 'root';
  flush privileges;
  ```

#### client

client的安装需要的东西似乎和mysql一样

`ndb_mgm`进入management_client

show 查看连接情况
