### Mysql

一：基本命令
1.数据库连接

```sql
mysql -h 主机名 -u root -p
```

2.添加用户

```sql
insert into user (host,user,password,select_priv,insert_priv,update_priv) values ('localhost','guest',password('guest123'),'Y','Y','Y');

```

3.创建用户

```sql
create user 'username'@'host' identified by 'password';
create user 'username'@'%' identified by 'password';			

```

4.对db_name下所有表都有查询(SELECT)权限
```sql
grant select on db_name.* to 'username'@'%';

```

5对所有表有全部权限
```sql
grant all on *.* to 'username'@'%';

```

5.删除用户

```sql
drop user 'username'@'host';

```

6.修改用户密码

```sql
set password for 'username'@'host' = password('123password');

```

7.创建数据库病设置字符集和排序规则

```sql
create database data_name;
create database data_name character set utf8 collate utf8_general_ci;

```

8.删除数据库

```sql
drop table data_name;

```

二:操作命令
1.显示表属性

```sql
desc user_table;
show columns from user_table;

```

2.显示数据表的索引信息

```sql
show index from user_table;

```

3.示数据库所有以run开头的表信息

```sql
show table status like'run%';

```

4.创建表
```sql
create table 'run_tb'(
    'run_id',int unsigend auto_increment,
    'run_title', varchar(100) not null,
    'run_author',varchar(40) not null,
    'sub_data',date,
    primary key('run_id')

```

5.插入数据

```sql
insert into table_name(field1,field2,field3,field4) values(value1,value2,value3,value4);

```

6.更改字段类型

```sql
alter table system_info modify column ip varchar(100) ;

```

7.更改字段为非空

```sql
alter table system_info alter column ip set not null;

```
8.添加字段

```sql
alter table system_info add email varchar(30);

```
9.删除字段

```sql
alter table system_info drop column email;

```
10.字段改名

```sql
alter table system_info rename email to new_email;

```
11.清空表或删除记录

```sql
delete from table_name; 或 delete from table_name where id=1;

```
12.插入记录

```sql
insert into table_name(field1,field2,field3) values(value1,value2,value3);

```
13.更新记录

```sql
update table_name set field2="张三" where id =3;

```
14.修改表名

```sql
alter table table_name rename to new_table_name;

```
15.模糊查询,%表示任意字符

```sql
select *  from Student where name like "%三%"

```
16.多条件查询and,or
```sql
select * from Sudent where age between 18 and 50;
select * from Student where age >18 and age <60 and address='上海'

```
17.去重

```sql
select distinct address from Student;

```
18.排序 asc升序,desc倒序

```sql
select * from Student order by age desc;

```
19.查询上做计算

```sql
select age*3 name from Student;

```
20.最大max,最小min,平均avg,求和sum,个数count

```sql
select count(id) from Student;

```
21.分组查询 group by 将某一列相同数据视为一组
```sql
使用了group by,select后只能跟分组列和聚合函数
查询人数大于3的地区的最大年龄
select address,max(age) from Student group by address having count(*)>3;

```
22.分页

```sql
select * from Student limit 3,5; # 从第三条记录,查询五条
select * from Student limit (n-1)*m,m; # 第n也查询m条记录

```
23.join连表查询 on 条件

```sql
select Sites.id,Sites.name,Log.count,Log.date from Sites inner join Log on Sites.id=Log.site_id;

```

三: 复制,导入导出数据
1.复制n条记录并创建
```sql
INSERT into reyo (num,overtime) SELECT num,overtime from reyo where id IN(1,3,5,6,7,9);
INSERT into reyo (`num`,`overtime`) SELECT `num`,`overtime` from reyo where id IN(1,3,5,6,7,9);

```
2.导出整个数据库

```sql
mysqldump -u root -p dbname>dbname.sql

```
3.导出表 show variables like '%secure%'查看安全目录

```sql
mysqldump -u root -p dbname users>dbname_users.sql
SELECT * FROM runoob_tbl  INTO OUTFILE '/var/lib/mysql-files/Dbug_manangement.txt';
SELECT * FROM users  INTO OUTFILE '/var/lib/mysql-files/users.sql';

```
4.导入备份的整个数据库

```sql
mysql -u root -p < Detector.sql     # 需要再sql文件创建或指定数据库
mysql>source /home/abc/abc.sql      # 进入数据库下use Detector

```
5.插入数据到某个表
```sql
load data local infile "/var/lib/mysql-files/CaseUrl.sql" into table CaseUrl;
load data local infile "/var/lib/mysql-files/CaseUrl.sql" into table CaseUrl
(id,name, url, status_code, result, processresult, proposal,@create_time,test_time,case_id) FIELDS TERMINATED BY ', '
set create_time=DATE_FORMAT(@create_time,"%Y-%m-%d %H:%i:%s")

```