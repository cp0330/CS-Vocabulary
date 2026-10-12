# CSIT882 Week11 词汇

由本周可读JSON自动生成。原文与整理说明分开；跨周条目保留全部来源和不同义项。原PDF及完整录音TXT不在网站中。

## 重要疑点与来源限制

### Week11归档与位置依据

**位置：** CSIT115_CSIT882 Lect-transcript.txt第2–5行；CSIT882_week11.mp4-transcript.txt第2行；DAC1–39／P3 1–15

**说明：** 第一份TXT开头明确welcome to week 11并出现115、882；主题与Discretionary Access Control对应。第二份TXT正文没有周次标签，按用户指定归入Week11，dirty read及isolation levels主题与P3对应。两份PDF本身没有Week11标签。PDF页序与幻灯片页在所引正文页一致；DAC封面按PDF第1页定位。TXT无时间戳，位置按原文件行号及该行Unicode字符（从1起）定位，附原句锚点。仅核对TXT，未核对音频。

### 录音缺口：view权限示例

**位置：** CSIT115_CSIT882 Lect-transcript.txt第590行结尾；DAC37–38

**说明：** 教师在DNAME列REFERENCES例子后表示These 2 slides留到下一周。DAC37–38的ITDEPT view及INSERT权限仍从PDF收录；不能声称录音已讲解，也不补充当前资料未列出的全部view可更新条件。

### Access Control拼写与示例标题不一致

**位置：** DAC2／4／7／22／26、18、20、29、36

**说明：** 多个outline页把Access写成Acess；DAC29有provileges，DAC36标签把REFERENCES写成REFERENCE并有provilege；DAC20定义重复apply to。DAC18第三例代码为csit115.ORDERS，说明标签却写university；以代码说明对象，同时保留冲突。DAC20把csit115称为table的标签也疑似笔误。原文引用保留这些文字，不默默修改。

### 权限清单和撤销模板的限制

**位置：** DAC13、16–17、32–33

**说明：** DAC17所列数据库级权限未列出DAC16、32–33实际示例中的SELECT／INSERT／UPDATE／DELETE，因此不能看作完整清单。DAC13的REVOKE GRANT OPTION FROM user没有前一模板中的ON范围；本资料不能单独确认简写的全部可执行条件。保留原式，只作为课件表达，不生成执行任务。

### ALL与USAGE的范围和例外

**位置：** DAC10、13–16、29、34；TXT第527行，行内字符1–57；搜索“Or we also have proxy privilege, it doesn't contain proxy”

**说明：** DAC29的GRANT ALL例子不含GRANT OPTION，教师另说ALL不含PROXY。ALL仍受所写level限制。USAGE的文字说明为未授予权限，但DAC34同时展示USAGE ON *.*和数据库级权限，所以不能仅凭这一行认定用户在任何范围都无权限。

### root无密码是演示设定

**位置：** DAC27；TXT第590行，行内字符5380–5457；搜索“in modern SQL, uh, you may have default password and later you need to change.”

**说明：** DAC27写安装后只有root、无密码、全部权限；教师随后补充现代环境可能有默认密码，root作为密码只为demonstration。保留课件和教师的适用范围，不把例子推广为全部安装环境或密码建议。

### TXT操作混淆和异常表名

**位置：** CSIT115_CSIT882 Lect-transcript.txt第11、404、548、578、590行及相关段；DAC10–13、20–21、36

**说明：** TXT有SQL flax／comments、three villages、DP／tables prof／columns prev／process proof、root写成route、CUSTOMER写成Summer、advanced DMLS、correlatedness set query等疑似转写。开场的Vikelas／withlas按上下文疑似WITH clause，但当前PDF未给对应语法，标作未确认。DELETE段一度说delete tables，而DAC11明确delete existing rows。列级INSERT例子稿中说让Harry see两列，PDF20代码是INSERT。REFERENCES说明的foreign key方向不够清楚。原句与疑点保留；不补造表名或正式定义。

### ANSI课件的拼写与DELETE代码疑点

**位置：** P3第1、5、10页

**说明：** 封面Phenomenons与正文Phenomena不同；第10页正文READ UNCOMMITED少一个T，规范隔离级别名按第8、14页READ UNCOMMITTED。第5页原式DELETE DEPARTMENT未写FROM（对比DAC31的DELETE FROM mi6.COURSE）；引号样式也不同。保留第5页原代码用于解释行数20→19的图，不把它当作已验证可执行SQL。

### 读现象及隔离级别的异常转写

**位置：** CSIT882_week11.mp4-transcript.txt第2行；P3第3–14页

**说明：** 稿中NC SQL／A system、dirty rate／30 data、non-repeatable rate、read and committed／re committed／read committee、sterilizable／sterillizable／erializable及roles等形式疑似转写。规范词按PDF的ANSI SQL、dirty read、non-repeatable read、READ UNCOMMITTED、READ COMMITTED、SERIALIZABLE、rows。某些read and committed上下文谈最低级别，不能只凭该字面形式分配到READ COMMITTED。仅有TXT，未核对音频。

### 隔离级别表与教师简化解释的范围

**位置：** P3第7–14页；CSIT882_week11.mp4-transcript.txt第2行

**说明：** 以课件ANSI比较表保存三种现象的Possible／Not possible，may不是必然。教师用等其他事务commit说明READ COMMITTED，用serial way说明SERIALIZABLE，并讨论效率；PDF没有给出全部实现机制，不能据此声称所有READ COMMITTED都必须等待、所有SERIALIZABLE都禁止并发，或低隔离级别总是更快。当前资料未说明具体MySQL存储引擎差异。

### 事务图中的上下顺序

**位置：** P3第3–5页

**说明：** 已对照页面图核对：dirty read中T2读取3000后T1 ROLLBACK；non-repeatable read中T1 UPDATE之后COMMIT，随后T2再次读取；phantom中DELETE后COMMIT，count(*)从20到19。纯文本抽取的COMMIT可能先出现，不能按该抽取顺序重排执行次序。

## 专业英语

### Discretionary Access Control

**稳定ID：** csit882-w11-0001

**类别：** technical

**中文解释：** 自主访问控制；本课通过管理用户、授予或收回权限、分配 roles 来管理数据库访问。

**简单英文（整理解释）：** The access-control topic in this lecture: manage users, privileges and roles.

**必要说明：** 课件给出标题、操作和例子，没有给出完整正式定义。不要只凭标题补充未出现的机制。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> A concept of a role allows for simplification of discretionary access control

**原文来源：** Discretionary Access Control.pdf · PDF第24页（幻灯片24）

**全部来源：** Discretionary Access Control.pdf · PDF第1页（幻灯片1）；Discretionary Access Control.pdf · PDF第2页（幻灯片2）；Discretionary Access Control.pdf · PDF第24页（幻灯片24）

### user management

**稳定ID：** csit882-w11-0002

**类别：** technical

**中文解释：** 用户管理；本节包括创建、删除、修改用户和列出用户。

**简单英文（整理解释）：** Create, remove, change and list database users.

**必要说明：** 管理对象是账户；DROP USER 与 DROP TABLE／DROP DATABASE 的对象不同。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Creating a new user Dropping a user Altering a user Listing the users

**原文来源：** Discretionary Access Control.pdf · PDF第3页（幻灯片3）

**全部来源：** Discretionary Access Control.pdf · PDF第3页（幻灯片3）

### CREATE USER

**稳定ID：** csit882-w11-0003

**类别：** technical

**中文解释：** 创建数据库用户；例子创建 jamesb，并设置密码。也作为创建用户所需的权限名出现。

**简单英文（整理解释）：** Create a database user. The same words also name a privilege for creating users.

**必要说明：** DAC14–15把 CREATE USER 权限列为全局权限。教师以 root 演示，不把例子理解为只有名为 root 的账户才能拥有该权限。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> CREATE USER jamesb IDENTIFIED BY 'mi6';

**原文来源：** Discretionary Access Control.pdf · PDF第3页（幻灯片3）

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> GRANT CREATE USER ON *.* TO James;

**原文来源：** Discretionary Access Control.pdf · PDF第14页（幻灯片14）

**全部来源：** Discretionary Access Control.pdf · PDF第3页（幻灯片3）；Discretionary Access Control.pdf · PDF第11页（幻灯片11）；Discretionary Access Control.pdf · PDF第14页（幻灯片14）；Discretionary Access Control.pdf · PDF第15页（幻灯片15）；Discretionary Access Control.pdf · PDF第27页（幻灯片27）；Discretionary Access Control.pdf · PDF第31页（幻灯片31）

### DROP USER

**稳定ID：** csit882-w11-0004

**类别：** technical

**中文解释：** 删除已有用户账户。

**简单英文（整理解释）：** Remove an existing database user.

**必要说明：** 本例删除 jamesb 账户；不是删除同名表或整个数据库。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> DROP USER jamesb;

**原文来源：** Discretionary Access Control.pdf · PDF第3页（幻灯片3）

**全部来源：** Discretionary Access Control.pdf · PDF第3页（幻灯片3）

### ALTER USER

**稳定ID：** 86597cc35b07

**类别：** technical

**中文解释：** 修改用户；本课示例用它更改 jamesb 或 root 的密码。

**简单英文（整理解释）：** Change a user; these examples change the user password.

**必要说明：** 保留旧周词条 ID；新例子由 IDENTIFIED BY 指定新密码。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> ALTER USER jamesb IDENTIFIED BY 'cia';

**原文来源：** Discretionary Access Control.pdf · PDF第3页（幻灯片3）

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> ALTER USER root IDENTIFIED BY 'root';

**原文来源：** Discretionary Access Control.pdf · PDF第27页（幻灯片27）

**全部来源：** Discretionary Access Control.pdf · PDF第3页（幻灯片3）；Discretionary Access Control.pdf · PDF第27页（幻灯片27）

### IDENTIFIED BY

**稳定ID：** csit882-w11-0006

**类别：** technical

**中文解释：** 本课账户语句中用于指定密码的 SQL 表达。

**简单英文（整理解释）：** The SQL words used here before the password.

**必要说明：** 例子中后面是带单引号的密码；资料没有展开其他认证方式。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> CREATE USER jamesb IDENTIFIED BY 'mi6';

**原文来源：** Discretionary Access Control.pdf · PDF第3页（幻灯片3）

**全部来源：** Discretionary Access Control.pdf · PDF第3页（幻灯片3）；Discretionary Access Control.pdf · PDF第27页（幻灯片27）；Discretionary Access Control.pdf · PDF第31页（幻灯片31）

### mysql.user

**稳定ID：** csit882-w11-0007

**类别：** technical

**中文解释：** mysql 数据库中的 user 表；本课用来列出用户名及查询全局权限。

**简单英文（整理解释）：** The user table in the mysql database, used here to list users and global privileges.

**必要说明：** DAC28的 N 表示例子中相应全局权限没有授予；不能仅据这一行判断其他范围的全部权限。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> SELECT USER FROM mysql.user;

**原文来源：** Discretionary Access Control.pdf · PDF第3页（幻灯片3）

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Global privileges are stored in mysql.user table or in information_schema.user_privileges table

**原文来源：** Discretionary Access Control.pdf · PDF第15页（幻灯片15）

**全部来源：** Discretionary Access Control.pdf · PDF第3页（幻灯片3）；Discretionary Access Control.pdf · PDF第10页（幻灯片10）；Discretionary Access Control.pdf · PDF第15页（幻灯片15）；Discretionary Access Control.pdf · PDF第28页（幻灯片28）；Discretionary Access Control.pdf · PDF第29页（幻灯片29）

### database management

**稳定ID：** csit882-w11-0008

**类别：** technical

**中文解释：** 数据库管理；本节包括创建、删除、访问和列出数据库。

**简单英文（整理解释）：** Create, remove, access and list databases.

**必要说明：** 与 user management 的操作对象区分。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Creating a new database Dropping a database Accessing a database

**原文来源：** Discretionary Access Control.pdf · PDF第5页（幻灯片5）

**全部来源：** Discretionary Access Control.pdf · PDF第5页（幻灯片5）；Discretionary Access Control.pdf · PDF第6页（幻灯片6）

### CREATE DATABASE / DROP DATABASE privilege

**稳定ID：** b9d6d4a0f588

**类别：** technical

**中文解释：** 本周示例用 CREATE DATABASE 创建数据库，用 DROP DATABASE 删除数据库；执行操作需要相应权限。

**简单英文（整理解释）：** The examples create or remove a database; the user needs the right privilege.

**必要说明：** 教师强调 DROP DATABASE 删除整个数据库及其中的表。此处沿用旧词组与 ID，不把语句例子改成新的权限名称定义。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> CREATE DATABASE university;

**原文来源：** Discretionary Access Control.pdf · PDF第5页（幻灯片5）

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> DROP DATABASE university;

**原文来源：** Discretionary Access Control.pdf · PDF第5页（幻灯片5）

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> remove the whole database with all the tables

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第59行，行内字符76–120；搜索“remove the whole database with all the tables”

**全部来源：** Discretionary Access Control.pdf · PDF第5页（幻灯片5）；Discretionary Access Control.pdf · PDF第30页（幻灯片30）；CSIT115_CSIT882 Lect-transcript.txt · TXT第59行，行内字符76–120；搜索“remove the whole database with all the tables”

### default database

**稳定ID：** 9789b6ef1fd7

**类别：** technical

**中文解释：** 默认数据库；use university 选中 university 后，SELECT * FROM COURSE 使用这个数据库的 COURSE 表。

**简单英文（整理解释）：** The selected database used when the statement gives only a table name.

**必要说明：** 另一种写法直接给出 university.COURSE；本周例子没有要求必须先 USE 才能这样访问。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> use university; SELECT * FROM COURSE;

**原文来源：** Discretionary Access Control.pdf · PDF第5页（幻灯片5）

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> SELECT * FROM university.COURSE;

**原文来源：** Discretionary Access Control.pdf · PDF第5页（幻灯片5）

**全部来源：** Discretionary Access Control.pdf · PDF第5页（幻灯片5）；Discretionary Access Control.pdf · PDF第30页（幻灯片30）

### database-name prefix

**稳定ID：** 23a47f53e583

**类别：** technical

**中文解释：** 数据库名前缀；表名前的 database-name. 用于指明表属于哪个数据库。

**简单英文（整理解释）：** Put the database name and a dot before the table name.

**必要说明：** 例子 university.COURSE 访问指定数据库中的表；与权限范围中的 database-name.* 区分。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> SELECT * FROM university.COURSE;

**原文来源：** Discretionary Access Control.pdf · PDF第5页（幻灯片5）

**全部来源：** Discretionary Access Control.pdf · PDF第5页（幻灯片5）；Discretionary Access Control.pdf · PDF第18页（幻灯片18）

### SHOW DATABASES / SHOW TABLES / SHOW VARIABLES

**稳定ID：** 5b3b0d9fc3d4

**类别：** technical

**中文解释：** 本周涉及 SHOW DATABASES：列出数据库名称；同一表达也作为全局权限名出现。

**简单英文（整理解释）：** This week uses SHOW DATABASES to list database names and as a global privilege name.

**必要说明：** SHOW TABLES 和 SHOW VARIABLES 来自旧周语境；本周新来源只支持 SHOW DATABASES。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> show databases;

**原文来源：** Discretionary Access Control.pdf · PDF第6页（幻灯片6）

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> GRANT SHOW DATABASES ON *.* TO James;

**原文来源：** Discretionary Access Control.pdf · PDF第14页（幻灯片14）

**全部来源：** Discretionary Access Control.pdf · PDF第6页（幻灯片6）；Discretionary Access Control.pdf · PDF第8页（幻灯片8）；Discretionary Access Control.pdf · PDF第14页（幻灯片14）；Discretionary Access Control.pdf · PDF第15页（幻灯片15）

### privilege

**稳定ID：** a22c826bda31

**类别：** technical

**中文解释：** 权限：执行数据库操作，或以读／写方式访问数据库中数据对象的权利。

**简单英文（整理解释）：** A right to perform a database operation or to read or write a stored data object.

**必要说明：** 权限既可以针对操作，也可以针对数据对象；读和写都在定义范围内。

**说明依据：** 课件原文定义；中文及简单英文为整理解释

**课件原文定义：** 课件原文定义

> A privilege is a right to perform an operation on a database or to access in a read or write mode a data object stored in a database

**定义来源：** Discretionary Access Control.pdf · PDF第8页（幻灯片8）

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> Privilege is a permission, so you give permission to different

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第110行，行内字符121–182；搜索“Privilege is a permission, so you give permission to different”

**全部来源：** Discretionary Access Control.pdf · PDF第8页（幻灯片8）；CSIT115_CSIT882 Lect-transcript.txt · TXT第110行，行内字符121–182；搜索“Privilege is a permission, so you give permission to different”

### administrative privileges / global privileges

**稳定ID：** csit882-w11-0014

**类别：** technical

**中文解释：** 管理权限／全局权限；管理权限管理 MySQL server 的运行；global 范围也可覆盖服务器上的所有数据库。

**简单英文（整理解释）：** Administrative privileges manage the server. Global privileges may also apply to all databases on that server.

**必要说明：** 不能把所有 global privileges 都理解为某一张表的权限。CREATE USER 等使用 *.* 的全局语法。

**说明依据：** 课件原文定义；中文及简单英文为整理解释

**课件原文定义：** 课件原文定义

> Global privileges are administrative privileges or apply to all databases on a given server

**定义来源：** Discretionary Access Control.pdf · PDF第14页（幻灯片14）

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Administrative privileges are global because they are not specific to a particular database

**原文来源：** Discretionary Access Control.pdf · PDF第8页（幻灯片8）

**全部来源：** Discretionary Access Control.pdf · PDF第8页（幻灯片8）；Discretionary Access Control.pdf · PDF第14页（幻灯片14）；Discretionary Access Control.pdf · PDF第15页（幻灯片15）

### database privileges

**稳定ID：** csit882-w11-0015

**类别：** technical

**中文解释：** 数据库级权限；作用于一个指定数据库中的所有对象；相关权限也可以在全局范围授予。

**简单英文（整理解释）：** Privileges that apply to all objects in a given database; they can also be granted globally.

**必要说明：** 指定数据库的范围写为 database-name.*。DAC17列出的权限不含DAC16示例的 SELECT／INSERT／UPDATE／DELETE，因此不视为完整清单。

**说明依据：** 课件原文定义；中文及简单英文为整理解释

**课件原文定义：** 课件原文定义

> Database privileges are privileges that apply to all objects in a given database

**定义来源：** Discretionary Access Control.pdf · PDF第16页（幻灯片16）

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Database privileges can be granted for the specific databases, or globally, so that they apply to all databases

**原文来源：** Discretionary Access Control.pdf · PDF第9页（幻灯片9）

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> GRANT SELECT ON csit115.* TO James;

**原文来源：** Discretionary Access Control.pdf · PDF第16页（幻灯片16）

**全部来源：** Discretionary Access Control.pdf · PDF第9页（幻灯片9）；Discretionary Access Control.pdf · PDF第16页（幻灯片16）；Discretionary Access Control.pdf · PDF第17页（幻灯片17）；Discretionary Access Control.pdf · PDF第32页（幻灯片32）；Discretionary Access Control.pdf · PDF第33页（幻灯片33）

### table privileges

**稳定ID：** csit882-w11-0016

**类别：** technical

**中文解释：** 表级权限；作用于指定表的所有列。

**简单英文（整理解释）：** Privileges that apply to all columns in a given table.

**必要说明：** 范围写为 database-name.table-name。DAC10还描述可以覆盖指定数据库中的所有表。DAC18第三例的代码是 csit115.ORDERS，标题却写 university。

**说明依据：** 课件原文定义；中文及简单英文为整理解释

**课件原文定义：** 课件原文定义

> Table privileges are privileges that apply to all columns in a given table

**定义来源：** Discretionary Access Control.pdf · PDF第18页（幻灯片18）

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> GRANT SELECT ON csit115.DRIVER TO James;

**原文来源：** Discretionary Access Control.pdf · PDF第18页（幻灯片18）

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> GRANT INSERT, UPDATE, DELETE on csit115.ORDERS TO Robin;

**原文来源：** Discretionary Access Control.pdf · PDF第18页（幻灯片18）

**全部来源：** Discretionary Access Control.pdf · PDF第10页（幻灯片10）；Discretionary Access Control.pdf · PDF第18页（幻灯片18）；Discretionary Access Control.pdf · PDF第19页（幻灯片19）；Discretionary Access Control.pdf · PDF第35页（幻灯片35）；Discretionary Access Control.pdf · PDF第38页（幻灯片38）

### column privileges

**稳定ID：** csit882-w11-0017

**类别：** technical

**中文解释：** 列级权限；只作用于指定表中选定的列。

**简单英文（整理解释）：** Privileges that apply only to selected columns in a table.

**必要说明：** 原定义重复 apply to，引用保留。列名放在括号中；资料只列 INSERT、REFERENCES、SELECT、UPDATE 四类列级权限。

**说明依据：** 课件原文定义；中文及简单英文为整理解释

**课件原文定义：** 课件原文定义

> Column privileges are privileges that apply to apply to selected columns in a given table

**定义来源：** Discretionary Access Control.pdf · PDF第20页（幻灯片20）

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Column privilege must be followed by the column or columns, enclosed within parentheses

**原文来源：** Discretionary Access Control.pdf · PDF第12页（幻灯片12）

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> GRANT SELECT (LNUM) ON csit115.DRIVER TO James;

**原文来源：** Discretionary Access Control.pdf · PDF第20页（幻灯片20）

**全部来源：** Discretionary Access Control.pdf · PDF第12页（幻灯片12）；Discretionary Access Control.pdf · PDF第20页（幻灯片20）；Discretionary Access Control.pdf · PDF第21页（幻灯片21）；Discretionary Access Control.pdf · PDF第36页（幻灯片36）

### privilege-type / privilege-level

**稳定ID：** csit882-w11-0018

**类别：** technical

**中文解释：** 权限类型／权限范围；前者说明可做什么，后者说明在哪个范围生效。

**简单英文（整理解释）：** The type says what operation is allowed. The level says where it is allowed.

**必要说明：** 例：SELECT 是 type；*.*、csit115.*、csit115.DRIVER 是不同 level。列级还需要列名。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> GRANT privilege-type ON privilege-level TO user[WITH GRANT OPTION];

**原文来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）

**全部来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）；Discretionary Access Control.pdf · PDF第14页（幻灯片14）；Discretionary Access Control.pdf · PDF第16页（幻灯片16）；Discretionary Access Control.pdf · PDF第18页（幻灯片18）；Discretionary Access Control.pdf · PDF第20页（幻灯片20）

### GRANT … ON … TO …

**稳定ID：** csit882-w11-0019

**类别：** technical

**中文解释：** 把指定范围的某种权限授予用户。

**简单英文（整理解释）：** Give a user a privilege at the stated level.

**必要说明：** 结构：GRANT 权限类型 ON 范围 TO 用户；[WITH GRANT OPTION] 为课件模板中的可选部分。方括号是模板标记。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> GRANT privilege-type ON privilege-level TO user[WITH GRANT OPTION];

**原文来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）

**全部来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）；Discretionary Access Control.pdf · PDF第14页（幻灯片14）；Discretionary Access Control.pdf · PDF第16页（幻灯片16）；Discretionary Access Control.pdf · PDF第18页（幻灯片18）；Discretionary Access Control.pdf · PDF第20页（幻灯片20）

### REVOKE … ON … FROM …

**稳定ID：** csit882-w11-0020

**类别：** technical

**中文解释：** 从用户处收回指定范围的权限。

**简单英文（整理解释）：** Take a stated privilege away from a user.

**必要说明：** 与 GRANT 的 TO 相对应，REVOKE 使用 FROM。收回一种权限与删除账户是不同操作。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> REVOKE privilege-type ON privilege-level FROM user;

**原文来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）

**全部来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）

### REVOKE ALL PRIVILEGES / REVOKE GRANT OPTION

**稳定ID：** csit882-w11-0021

**类别：** technical

**中文解释：** 课件列出的收回全部权限／收回再授权权限的表达。

**简单英文（整理解释）：** The slide expressions for removing all privileges or the grant option.

**必要说明：** 原页写 REVOKE ALL PRIVILEGES FROM user 和 REVOKE GRANT OPTION FROM user；后者没有 ON 范围。保留原式，不据此保证它们可直接执行。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> REVOKE ALL PRIVILEGES FROM user;

**原文来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> REVOKE GRANT OPTION FROM user;

**原文来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）

**全部来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）

### GRANT OPTION / WITH GRANT OPTION

**稳定ID：** csit882-w11-0022

**类别：** technical

**中文解释：** 允许用户把自己拥有的相应权限再授予其他用户。

**简单英文（整理解释）：** Allow a user to grant their own relevant privileges to another user.

**必要说明：** 范围和已有权限仍有限制：教师例子中 Robin 只能转授自己拥有的 INSERT／UPDATE／DELETE。GRANT ALL 的例子没有自动给予 GRANT OPTION。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> User jamesb has all privileges but he/she cannot grant any privileges

**原文来源：** Discretionary Access Control.pdf · PDF第29页（幻灯片29）

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> Grant just his own privilege, not other privileges.

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第584行，行内字符33–83；搜索“Grant just his own privilege, not other privileges.”

**全部来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）；Discretionary Access Control.pdf · PDF第16页（幻灯片16）；Discretionary Access Control.pdf · PDF第29页（幻灯片29）；CSIT115_CSIT882 Lect-transcript.txt · TXT第584行，行内字符33–83；搜索“Grant just his own privilege, not other privileges.”

### ALL / ALL PRIVILEGES

**稳定ID：** csit882-w11-0023

**类别：** technical

**中文解释：** 授予所指定范围的全部相应权限；本课明确保留例外。

**简单英文（整理解释）：** All applicable privileges at the stated level, with the exceptions explained in this lecture.

**必要说明：** DAC29明确例子没有 GRANT OPTION；教师还说 ALL 不包含 PROXY。不要把数据库级 ALL 当作所有服务器管理权限。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> GRANT ALL ON *.* to jamesb;

**原文来源：** Discretionary Access Control.pdf · PDF第29页（幻灯片29）

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> Or we also have proxy privilege, it doesn't contain proxy

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第527行，行内字符1–57；搜索“Or we also have proxy privilege, it doesn't contain proxy”

**全部来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）；Discretionary Access Control.pdf · PDF第14页（幻灯片14）；Discretionary Access Control.pdf · PDF第16页（幻灯片16）；Discretionary Access Control.pdf · PDF第18页（幻灯片18）；Discretionary Access Control.pdf · PDF第29页（幻灯片29）；CSIT115_CSIT882 Lect-transcript.txt · TXT第527行，行内字符1–57；搜索“Or we also have proxy privilege, it doesn't contain proxy”

### USAGE

**稳定ID：** csit882-w11-0024

**类别：** technical

**中文解释：** 不授予权限的特殊权限名；本课用它表示没有新增权限。

**简单英文（整理解释）：** A special privilege name meaning that no privileges are granted.

**必要说明：** SHOW GRANTS 的 USAGE ON *.* 行不能单独理解为该用户在其他范围也无权限；DAC34同时显示数据库级权限。

**说明依据：** 课件原文定义；中文及简单英文为整理解释

**课件原文定义：** 课件原文定义

> A special privilege named USAGE is a synonym for no privileges granted to a user

**定义来源：** Discretionary Access Control.pdf · PDF第10页（幻灯片10）

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> GRANT USAGE ON *.* TO `harryp`@`%`

**原文来源：** Discretionary Access Control.pdf · PDF第34页（幻灯片34）

**全部来源：** Discretionary Access Control.pdf · PDF第10页（幻灯片10）；Discretionary Access Control.pdf · PDF第14页（幻灯片14）；Discretionary Access Control.pdf · PDF第34页（幻灯片34）

### *.* / database-name.*

**稳定ID：** csit882-w11-0025

**类别：** technical

**中文解释：** 全局范围／指定数据库范围；前者覆盖所有数据库，后者覆盖指定数据库中的所有对象。

**简单英文（整理解释）：** The global scope, or the scope of all objects in one named database.

**必要说明：** 表级再写明表名；全局管理权限也用 ON *.*，不是在每张表上创建用户。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Global privileges are denoted by *.*

**原文来源：** Discretionary Access Control.pdf · PDF第14页（幻灯片14）

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Database privileges are denoted by database-name.*

**原文来源：** Discretionary Access Control.pdf · PDF第16页（幻灯片16）

**全部来源：** Discretionary Access Control.pdf · PDF第14页（幻灯片14）；Discretionary Access Control.pdf · PDF第16页（幻灯片16）；Discretionary Access Control.pdf · PDF第18页（幻灯片18）

### SHOW PRIVILEGES

**稳定ID：** csit882-w11-0026

**类别：** technical

**中文解释：** 列出可用权限、适用语境和描述的语句。

**简单英文（整理解释）：** List available privileges, their contexts and their descriptions.

**必要说明：** 不是显示某用户已经获得了哪些权限；后者在本课用 SHOW GRANTS FOR user。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> The SHOW PRIVILEGES statement lists the available privileges, their contexts, and descriptions;

**原文来源：** Discretionary Access Control.pdf · PDF第11页（幻灯片11）

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> when you use shop privilege, it doesn't show who has access to what.

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第350行，行内字符563–630；搜索“when you use shop privilege, it doesn't show who has access to what.”

**全部来源：** Discretionary Access Control.pdf · PDF第10页（幻灯片10）；Discretionary Access Control.pdf · PDF第11页（幻灯片11）；Discretionary Access Control.pdf · PDF第34页（幻灯片34）；CSIT115_CSIT882 Lect-transcript.txt · TXT第350行，行内字符563–630；搜索“when you use shop privilege, it doesn't show who has access to what.”

### SHOW GRANTS FOR …

**稳定ID：** csit882-w11-0027

**类别：** technical

**中文解释：** 显示某个用户已获授的权限。

**简单英文（整理解释）：** List the privileges granted to a named user.

**必要说明：** 与 SHOW PRIVILEGES 的“可用权限目录”区分。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> The SHOW GRANTS statement lists the privileges granted to a user;

**原文来源：** Discretionary Access Control.pdf · PDF第34页（幻灯片34）

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> SHOW GRANTS FOR harryp;

**原文来源：** Discretionary Access Control.pdf · PDF第34页（幻灯片34）

**全部来源：** Discretionary Access Control.pdf · PDF第34页（幻灯片34）

### ALTER (privilege)

**稳定ID：** csit882-w11-0028

**类别：** technical

**中文解释：** 修改表的权限。

**简单英文（整理解释）：** Permission to alter a table.

**必要说明：** DAC11在表语境中说明 ALTER；列在权限清单中。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> To alter the table

**原文来源：** Discretionary Access Control.pdf · PDF第11页（幻灯片11）

**全部来源：** Discretionary Access Control.pdf · PDF第11页（幻灯片11）；Discretionary Access Control.pdf · PDF第13页（幻灯片13）；Discretionary Access Control.pdf · PDF第19页（幻灯片19）

### CREATE (privilege)

**稳定ID：** csit882-w11-0029

**类别：** technical

**中文解释：** 创建数据库、表等对象的权限；输出 Context 还列出 Indexes。

**简单英文（整理解释）：** Permission to create databases and tables; the context also lists indexes.

**必要说明：** 不要把普通 CREATE 权限与 CREATE USER 等复合权限名称混为一项。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> To create new databases and tables

**原文来源：** Discretionary Access Control.pdf · PDF第11页（幻灯片11）

**全部来源：** Discretionary Access Control.pdf · PDF第9页（幻灯片9）；Discretionary Access Control.pdf · PDF第11页（幻灯片11）；Discretionary Access Control.pdf · PDF第13页（幻灯片13）；Discretionary Access Control.pdf · PDF第19页（幻灯片19）

### DROP (privilege)

**稳定ID：** csit882-w11-0030

**类别：** technical

**中文解释：** 删除数据库、表和视图等对象的权限。

**简单英文（整理解释）：** Permission to drop databases, tables and views.

**必要说明：** DROP 删除对象；DELETE 在本页描述为删除表内已有行。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> To drop databases, tables, and views

**原文来源：** Discretionary Access Control.pdf · PDF第11页（幻灯片11）

**全部来源：** Discretionary Access Control.pdf · PDF第11页（幻灯片11）；Discretionary Access Control.pdf · PDF第13页（幻灯片13）；Discretionary Access Control.pdf · PDF第19页（幻灯片19）

### SELECT / INSERT / UPDATE / DELETE privileges

**稳定ID：** csit882-w11-0031

**类别：** technical

**中文解释：** 读取／插入／修改／删除行的权限；SELECT 属于读权限，后三者在例子中合称写权限。

**简单英文（整理解释）：** SELECT reads data; INSERT, UPDATE and DELETE are write privileges in these examples.

**必要说明：** 可授予范围取决于 level。列级列表不含 DELETE。TXT有把 DELETE 说成删除表、把 INSERT 说成查看的混淆，按课件例子区分。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> GRANT INSERT, UPDATE, DELETE on csit115.* TO Robin;

**原文来源：** Discretionary Access Control.pdf · PDF第16页（幻灯片16）

**全部来源：** Discretionary Access Control.pdf · PDF第9页（幻灯片9）；Discretionary Access Control.pdf · PDF第11页（幻灯片11）；Discretionary Access Control.pdf · PDF第12页（幻灯片12）；Discretionary Access Control.pdf · PDF第16页（幻灯片16）；Discretionary Access Control.pdf · PDF第20页（幻灯片20）；Discretionary Access Control.pdf · PDF第21页（幻灯片21）；Discretionary Access Control.pdf · PDF第31页（幻灯片31）；Discretionary Access Control.pdf · PDF第32页（幻灯片32）

### ALTER ROUTINE / CREATE ROUTINE

**稳定ID：** csit882-w11-0032

**类别：** technical

**中文解释：** 修改或删除 stored functions／procedures 的权限／创建这类例程的权限。

**简单英文（整理解释）：** Privileges to alter or drop stored functions and procedures, or to create them.

**必要说明：** routine 在这里指数据库例程；它不是“日常习惯”的普通义。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> To alter or drop stored functions/procedures

**原文来源：** Discretionary Access Control.pdf · PDF第11页（幻灯片11）

**全部来源：** Discretionary Access Control.pdf · PDF第11页（幻灯片11）；Discretionary Access Control.pdf · PDF第13页（幻灯片13）

### CREATE ROLE

**稳定ID：** csit882-w11-0033

**类别：** technical

**中文解释：** 创建 role 的 SQL 语句；也作为创建角色所需的管理权限名出现。

**简单英文（整理解释）：** Create a named role; the words also name the server privilege for creating roles.

**必要说明：** 角色中的权限要另行授予；仅创建角色不等于已经授予示例中的表权限。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> CREATE ROLE CUSTOMER;

**原文来源：** Discretionary Access Control.pdf · PDF第24页（幻灯片24）

**全部来源：** Discretionary Access Control.pdf · PDF第11页（幻灯片11）；Discretionary Access Control.pdf · PDF第24页（幻灯片24）；Discretionary Access Control.pdf · PDF第25页（幻灯片25）

### CREATE TEMPORARY TABLES

**稳定ID：** csit882-w11-0034

**类别：** technical

**中文解释：** 创建临时表的权限；课件输出描述是允许使用 CREATE TEMPORARY TABLE。

**简单英文（整理解释）：** A privilege to use CREATE TEMPORARY TABLE.

**必要说明：** 这是权限名；语句名中的 TABLE 在课件说明中为单数。资料没有展开临时表生命周期条件。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> To use CREATE TEMPORARY TABLE

**原文来源：** Discretionary Access Control.pdf · PDF第11页（幻灯片11）

**全部来源：** Discretionary Access Control.pdf · PDF第11页（幻灯片11）；Discretionary Access Control.pdf · PDF第13页（幻灯片13）

### CREATE VIEW

**稳定ID：** 7db2fa8c55a7

**类别：** technical

**中文解释：** 本周指创建 view 的权限或语句；DAC37创建 ITDEPT，再给 jamesb 授予该 view 的 INSERT 权限。

**简单英文（整理解释）：** A privilege or statement to create a view; the example then grants INSERT on that view.

**必要说明：** CREATE VIEW 与对已存在 view 的 INSERT 权限是不同事项。录音未讲完DAC37–38，不添加超出示例的可更新性条件。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> GRANT INSERT ON csit115.ITDEPT TO jamesb;

**原文来源：** Discretionary Access Control.pdf · PDF第37页（幻灯片37）

**全部来源：** Discretionary Access Control.pdf · PDF第11页（幻灯片11）；Discretionary Access Control.pdf · PDF第13页（幻灯片13）；Discretionary Access Control.pdf · PDF第19页（幻灯片19）；Discretionary Access Control.pdf · PDF第37页（幻灯片37）

### CREATE TABLESPACE

**稳定ID：** csit882-w11-0036

**类别：** technical

**中文解释：** 创建 tablespace 的权限名；教师把 tablespace 联系到表的逻辑存储空间。

**简单英文（整理解释）：** A privilege name related here to logical storage space for tables.

**必要说明：** PDF只列名称及全局范围；逻辑存储说明来自TXT，没有完整正式定义。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> CREATE TABLESPACE,CREATE USER,FILE,PROCESS,RELOAD,

**原文来源：** Discretionary Access Control.pdf · PDF第15页（幻灯片15）

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> Table spaces, talks about logical, uh, storage.

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第536行，行内字符169–215；搜索“Table spaces, talks about logical, uh, storage.”

**全部来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）；Discretionary Access Control.pdf · PDF第15页（幻灯片15）；CSIT115_CSIT882 Lect-transcript.txt · TXT第536行，行内字符169–215；搜索“Table spaces, talks about logical, uh, storage.”

### EVENT / scheduled event

**稳定ID：** csit882-w11-0037

**类别：** technical

**中文解释：** 事件权限／按时间安排执行的数据库事件；教师举定期清除过期预订记录的例子。

**简单英文（整理解释）：** A privilege and a database event that runs on a schedule, such as checking expired bookings.

**必要说明：** 时间安排是这里与教师 trigger 例子的重要区分。PDF列EVENT，机制说明来自教师转写。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> this is the scheduled procedure that you can run, we call it event.

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第542行，行内字符468–534；搜索“this is the scheduled procedure that you can run, we call it event.”

**全部来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）；Discretionary Access Control.pdf · PDF第17页（幻灯片17）；CSIT115_CSIT882 Lect-transcript.txt · TXT第542行，行内字符468–534；搜索“this is the scheduled procedure that you can run, we call it event.”

### EXECUTE

**稳定ID：** csit882-w11-0038

**类别：** technical

**中文解释：** 执行 procedure 或 function 的权限名。

**简单英文（整理解释）：** A privilege to execute a procedure or function in the teacher explanation.

**必要说明：** PDF只列关键词；这里的用途根据教师转写整理。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> in order to execute a procedure or function

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第542行，行内字符601–643；搜索“in order to execute a procedure or function”

**全部来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）；CSIT115_CSIT882 Lect-transcript.txt · TXT第542行，行内字符601–643；搜索“in order to execute a procedure or function”

### FILE

**稳定ID：** csit882-w11-0039

**类别：** technical

**中文解释：** 文件相关权限；教师在本课用导出数据到文件说明它。

**简单英文（整理解释）：** A file-related privilege, explained here with exporting data to a file.

**必要说明：** PDF列为只能全局授予的权限；不要把教师的导出例子当作完整权限定义。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> file in order to export, uh, different outputs to a file

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第542行，行内字符645–700；搜索“file in order to export, uh, different outputs to a file”

**全部来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）；Discretionary Access Control.pdf · PDF第15页（幻灯片15）；CSIT115_CSIT882 Lect-transcript.txt · TXT第542行，行内字符645–700；搜索“file in order to export, uh, different outputs to a file”

### INDEX

**稳定ID：** csit882-w11-0040

**类别：** technical

**中文解释：** 索引相关权限名；教师将 index 解释为帮助更快查找信息的结构。

**简单英文（整理解释）：** An index-related privilege; an index helps find information faster in this explanation.

**必要说明：** PDF没有给出INDEX权限的全部操作范围。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> It's like end of the book you have index

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第542行，行内字符877–916；搜索“It's like end of the book you have index”

**全部来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）；Discretionary Access Control.pdf · PDF第19页（幻灯片19）；CSIT115_CSIT882 Lect-transcript.txt · TXT第542行，行内字符877–916；搜索“It's like end of the book you have index”

### LOCK TABLES

**稳定ID：** csit882-w11-0041

**类别：** technical

**中文解释：** 锁表权限名；教师用并发访问时先锁表、完成后解锁来说明。

**简单英文（整理解释）：** A privilege to lock tables in the teacher example of concurrent access.

**必要说明：** 不要把它与旧周2PL的抽象 lock(x) 直接当作同一完整语法；此处没有列出全部锁模式。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> You are working on a specific table, you want to lock that table in order to avoid concurrent access.

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第548行，行内字符1–101；搜索“You are working on a specific table, you want to lock that table in order to avoid concurrent access.”

**全部来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）；Discretionary Access Control.pdf · PDF第17页（幻灯片17）；CSIT115_CSIT882 Lect-transcript.txt · TXT第548行，行内字符1–101；搜索“You are working on a specific table, you want to lock that table in order to avoid concurrent access.”

### PROCESS

**稳定ID：** csit882-w11-0042

**类别：** technical

**中文解释：** 查看服务器上当前 processes／threads 等运行情况的权限名。

**简单英文（整理解释）：** A privilege explained here with viewing current server processes and threads.

**必要说明：** PDF列为只能全局授予；用途说明来自教师转写。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> current processes or threads running on the MySQL server

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第173行，行内字符27–82；搜索“current processes or threads running on the MySQL server”

**全部来源：** Discretionary Access Control.pdf · PDF第8页（幻灯片8）；Discretionary Access Control.pdf · PDF第13页（幻灯片13）；Discretionary Access Control.pdf · PDF第15页（幻灯片15）；CSIT115_CSIT882 Lect-transcript.txt · TXT第173行，行内字符27–82；搜索“current processes or threads running on the MySQL server”

### PROXY

**稳定ID：** csit882-w11-0043

**类别：** technical

**中文解释：** 代理权限；教师描述为用自己的身份连接，但经认证后使用另一用户的权限。

**简单英文（整理解释）：** Connect with your own identity and, after authentication, work with another user's privileges in this explanation.

**必要说明：** PDF只列PROXY，教师说明ALL不包含它；资料没有完整代理认证条件。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> you connect to the database with your own identity

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第554行，行内字符181–230；搜索“you connect to the database with your own identity”

**全部来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）；CSIT115_CSIT882 Lect-transcript.txt · TXT第554行，行内字符181–230；搜索“you connect to the database with your own identity”

### REFERENCES (privilege)

**稳定ID：** csit882-w11-0044

**类别：** technical

**中文解释：** 引用相关权限；本课可以在表级或列级授予，教师把它与 foreign key 引用联系起来。

**简单英文（整理解释）：** A reference-related privilege that can be granted for a table or selected columns.

**必要说明：** DAC36是对DNAME列授予REFERENCES。TXT对foreign key在哪一侧建立的说明不够清楚，不把该句扩展为完整建键规则。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> GRANT REFERENCES (DNAME) ON csit115.DEPARTMENT TO jamesb;

**原文来源：** Discretionary Access Control.pdf · PDF第36页（幻灯片36）

**全部来源：** Discretionary Access Control.pdf · PDF第12页（幻灯片12）；Discretionary Access Control.pdf · PDF第13页（幻灯片13）；Discretionary Access Control.pdf · PDF第17页（幻灯片17）；Discretionary Access Control.pdf · PDF第19页（幻灯片19）；Discretionary Access Control.pdf · PDF第20页（幻灯片20）；Discretionary Access Control.pdf · PDF第21页（幻灯片21）；Discretionary Access Control.pdf · PDF第36页（幻灯片36）

### RELOAD

**稳定ID：** csit882-w11-0045

**类别：** technical

**中文解释：** 重新加载相关的权限名；教师用 refresh 来简要解释。

**简单英文（整理解释）：** A privilege name briefly explained as refresh in the transcript.

**必要说明：** 课件列为只能全局授予，但资料没有明确哪些内容会重新加载；不把它解释成重建整个数据库。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> reload in order to refresh uh the database

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第554行，行内字符590–631；搜索“reload in order to refresh uh the database”

**全部来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）；Discretionary Access Control.pdf · PDF第15页（幻灯片15）；CSIT115_CSIT882 Lect-transcript.txt · TXT第554行，行内字符590–631；搜索“reload in order to refresh uh the database”

### REPLICATION CLIENT / REPLICATION SLAVE

**稳定ID：** csit882-w11-0046

**类别：** technical

**中文解释：** 复制相关权限名；教师用另一服务器保存数据库副本并通信说明 replication。

**简单英文（整理解释）：** Privilege names related to a database copy on another server and communication with that copy.

**必要说明：** 保留课件的REPLICATION SLAVE名称；资料没有完整区分两项权限的操作范围，也没有说明副本等于备份。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> we have a replication in another server as well.

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第554行，行内字符724–771；搜索“we have a replication in another server as well.”

**全部来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）；Discretionary Access Control.pdf · PDF第15页（幻灯片15）；CSIT115_CSIT882 Lect-transcript.txt · TXT第554行，行内字符724–771；搜索“we have a replication in another server as well.”

### SHOW VIEW

**稳定ID：** csit882-w11-0047

**类别：** technical

**中文解释：** view 相关查看权限名；本资料只列名称，教师简要联系到查看 views。

**简单英文（整理解释）：** A view-related privilege name listed in the slide.

**必要说明：** 当前资料未给出完整正式定义；不把它默认为能读取view结果的SELECT权限。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> show view, what are the views that are available now?

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第554行，行内字符1211–1263；搜索“show view, what are the views that are available now?”

**全部来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）；Discretionary Access Control.pdf · PDF第19页（幻灯片19）；CSIT115_CSIT882 Lect-transcript.txt · TXT第554行，行内字符1211–1263；搜索“show view, what are the views that are available now?”

### SHUTDOWN

**稳定ID：** csit882-w11-0048

**类别：** technical

**中文解释：** 关闭 MySQL server 的权限名。

**简单英文（整理解释）：** A privilege to shut down the MySQL server.

**必要说明：** PDF列为全局权限；教师强调并非每个用户都应具有这个权限。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> Who can shut down the MySQL server?

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第170行，行内字符15–49；搜索“Who can shut down the MySQL server?”

**全部来源：** Discretionary Access Control.pdf · PDF第8页（幻灯片8）；Discretionary Access Control.pdf · PDF第13页（幻灯片13）；Discretionary Access Control.pdf · PDF第15页（幻灯片15）；CSIT115_CSIT882 Lect-transcript.txt · TXT第170行，行内字符15–49；搜索“Who can shut down the MySQL server?”

### SUPER

**稳定ID：** csit882-w11-0049

**类别：** technical

**中文解释：** 课件列出的全局管理权限名。

**简单英文（整理解释）：** A global administrative privilege name listed in this lecture.

**必要说明：** 教师说部分用途已deprecated，但当前资料没有列出替代权限和版本细节；不自行补充。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> super now is deprecated for, uh, some privileges

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第554行，行内字符1309–1356；搜索“super now is deprecated for, uh, some privileges”

**全部来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）；Discretionary Access Control.pdf · PDF第15页（幻灯片15）；CSIT115_CSIT882 Lect-transcript.txt · TXT第554行，行内字符1309–1356；搜索“super now is deprecated for, uh, some privileges”

### TRIGGER

**稳定ID：** csit882-w11-0050

**类别：** technical

**中文解释：** 触发器相关权限名；教师用表中发生变化后执行相应操作的例子说明 trigger。

**简单英文（整理解释）：** A privilege related to triggers, explained with running an action after a table change.

**必要说明：** 教师例子是成绩更新后记录或生成报告；不由例子推出所有trigger的触发时机。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> when something happens in a specific table or database, trigger can execute

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第554行，行内字符1506–1580；搜索“when something happens in a specific table or database, trigger can execute”

**全部来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）；Discretionary Access Control.pdf · PDF第19页（幻灯片19）；CSIT115_CSIT882 Lect-transcript.txt · TXT第554行，行内字符1506–1580；搜索“when something happens in a specific table or database, trigger can execute”

### mysql.db / information_schema.schema_privileges

**稳定ID：** csit882-w11-0051

**类别：** technical

**中文解释：** 本课列出的数据库级权限信息表。

**简单英文（整理解释）：** The tables named here for database-level privilege information.

**必要说明：** DAC32–33用 mysql.db 显示 harryp 对不同数据库的不同权限，不能只看数据库名称就认为权限相同。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Database privileges are stored in mysql.db table or in information_schema.schema_privileges table

**原文来源：** Discretionary Access Control.pdf · PDF第17页（幻灯片17）

**全部来源：** Discretionary Access Control.pdf · PDF第17页（幻灯片17）；Discretionary Access Control.pdf · PDF第32页（幻灯片32）；Discretionary Access Control.pdf · PDF第33页（幻灯片33）

### mysql.tables_priv / information_schema.table_privileges

**稳定ID：** csit882-w11-0052

**类别：** technical

**中文解释：** 本课列出的表级权限信息表；view 的示例权限也显示在 mysql.tables_priv 输出中。

**简单英文（整理解释）：** The tables named for table-level privileges; the view example also appears in mysql.tables_priv.

**必要说明：** 输出字段包括 user、db、table_name、table_priv；DAC38把 ITDEPT 的 Insert 显示为一条表级记录。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Table privileges are stored in mysql.tables_priv table or in information_schema.table_privileges table

**原文来源：** Discretionary Access Control.pdf · PDF第19页（幻灯片19）

**全部来源：** Discretionary Access Control.pdf · PDF第10页（幻灯片10）；Discretionary Access Control.pdf · PDF第19页（幻灯片19）；Discretionary Access Control.pdf · PDF第35页（幻灯片35）；Discretionary Access Control.pdf · PDF第38页（幻灯片38）

### mysql.columns_priv / information_schema.column_privileges

**稳定ID：** csit882-w11-0053

**类别：** technical

**中文解释：** 本课列出的列级权限信息表。

**简单英文（整理解释）：** The tables named for column-level privilege information.

**必要说明：** DAC36的列包括 user、db、table_name、column_name、column_priv；DNAME记录的权限是References。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Column privileges are stored in mysql.columns_priv table or in information_schema.column_privileges table

**原文来源：** Discretionary Access Control.pdf · PDF第21页（幻灯片21）

**全部来源：** Discretionary Access Control.pdf · PDF第10页（幻灯片10）；Discretionary Access Control.pdf · PDF第12页（幻灯片12）；Discretionary Access Control.pdf · PDF第21页（幻灯片21）；Discretionary Access Control.pdf · PDF第36页（幻灯片36）

### mysql.procs_priv

**稳定ID：** csit882-w11-0054

**类别：** technical

**中文解释：** mysql 数据库中保存账户权限信息的表名之一；教师将它联系到 functions／procedures 的权限。

**简单英文（整理解释）：** A mysql table linked in the transcript to privileges for functions and procedures.

**必要说明：** PDF10列出procs_priv；TXT写成process proof等形式，不把异常转写作为表名。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Information about user account privileges is stored in the user, db, tables_priv, columns_priv, and procs_priv tables in the mysql database

**原文来源：** Discretionary Access Control.pdf · PDF第10页（幻灯片10）

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> we have also process privileges for different functions and procedures.

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第314行，行内字符202–272；搜索“we have also process privileges for different functions and procedures.”

**全部来源：** Discretionary Access Control.pdf · PDF第10页（幻灯片10）；CSIT115_CSIT882 Lect-transcript.txt · TXT第314行，行内字符202–272；搜索“we have also process privileges for different functions and procedures.”

### user_privileges / GRANTEE / PRIVILEGE_TYPE / IS_GRANTABLE

**稳定ID：** 31bbb44ce160

**类别：** technical

**中文解释：** 本周只涉及 information_schema.user_privileges：课件将它列为全局权限信息来源。

**简单英文（整理解释）：** This week names information_schema.user_privileges for global privilege information.

**必要说明：** GRANTEE、PRIVILEGE_TYPE、IS_GRANTABLE的字段解释保留在旧周语境；本周没有重新给出这些字段。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Global privileges are stored in mysql.user table or in information_schema.user_privileges table

**原文来源：** Discretionary Access Control.pdf · PDF第15页（幻灯片15）

**全部来源：** Discretionary Access Control.pdf · PDF第15页（幻灯片15）

### select_priv / insert_priv / update_priv / delete_priv / grant_priv

**稳定ID：** csit882-w11-0056

**类别：** technical

**中文解释：** 示例中分别标记读、插入、更新、删除、再授权权限的字段。

**简单英文（整理解释）：** Fields showing the listed privileges in the example output.

**必要说明：** 示例Y为已授予、N为未授予。DAC29前四项为Y而grant_priv为N；mysql.user这一输出讨论全局权限。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> SELECT select_priv, insert_priv, update_priv, delete_priv, grant_priv FROM mysql.user

**原文来源：** Discretionary Access Control.pdf · PDF第29页（幻灯片29）

**全部来源：** Discretionary Access Control.pdf · PDF第28页（幻灯片28）；Discretionary Access Control.pdf · PDF第29页（幻灯片29）；Discretionary Access Control.pdf · PDF第32页（幻灯片32）；Discretionary Access Control.pdf · PDF第33页（幻灯片33）

### table_priv / column_priv

**稳定ID：** csit882-w11-0057

**类别：** technical

**中文解释：** 权限查询输出中表示表级权限／列级权限的字段名。

**简单英文（整理解释）：** Output fields for table privileges and column privileges.

**必要说明：** DAC35的table_priv为Update,Delete；DAC36的column_priv为References。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> SELECT user, db, table_name, table_priv FROM mysql.tables_priv

**原文来源：** Discretionary Access Control.pdf · PDF第35页（幻灯片35）

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> SELECT user, db, table_name, column_name, column_priv FROM mysql.columns_priv

**原文来源：** Discretionary Access Control.pdf · PDF第36页（幻灯片36）

**全部来源：** Discretionary Access Control.pdf · PDF第35页（幻灯片35）；Discretionary Access Control.pdf · PDF第36页（幻灯片36）；Discretionary Access Control.pdf · PDF第38页（幻灯片38）

### role

**稳定ID：** csit882-w11-0058

**类别：** technical

**中文解释：** 角色：有名称的一组权限。

**简单英文（整理解释）：** A named group of privileges.

**必要说明：** CUSTOMER例子中包含一项读权限和一组写权限。100个新增用户若分别授权，要重复两个GRANT语句200次；角色可减少重复。

**说明依据：** 课件原文定义；中文及简单英文为整理解释

**课件原文定义：** 课件原文定义

> A role is a named group of privileges

**定义来源：** Discretionary Access Control.pdf · PDF第23页（幻灯片23）

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> If the same privileges must be granted to another 100 users then we have to repeat GRANT statements 200 times

**原文来源：** Discretionary Access Control.pdf · PDF第24页（幻灯片24）

**全部来源：** Discretionary Access Control.pdf · PDF第23页（幻灯片23）；Discretionary Access Control.pdf · PDF第24页（幻灯片24）；Discretionary Access Control.pdf · PDF第25页（幻灯片25）

### GRANT role TO user / GRANT role TO role

**稳定ID：** csit882-w11-0059

**类别：** technical

**中文解释：** 把角色授予用户／把一个角色授予另一个角色。

**简单英文（整理解释）：** Grant a role to a user, or grant one role to another role.

**必要说明：** 角色授予的例子没有 ON 对象范围。GRANT CUSTOMER TO FREQUENT_CUSTOMER 的方向是后者获得前者的权限。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> GRANT CUSTOMER TO James;

**原文来源：** Discretionary Access Control.pdf · PDF第24页（幻灯片24）

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> GRANT CUSTOMER TO FREQUENT_CUSTOMER;

**原文来源：** Discretionary Access Control.pdf · PDF第25页（幻灯片25）

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> GRANT FREQUENT_CUSTOMER TO Harry;

**原文来源：** Discretionary Access Control.pdf · PDF第25页（幻灯片25）

**全部来源：** Discretionary Access Control.pdf · PDF第24页（幻灯片24）；Discretionary Access Control.pdf · PDF第25页（幻灯片25）

### role hierarchy / hierarchy of privileges

**稳定ID：** csit882-w11-0060

**类别：** technical

**中文解释：** 角色／权限层次：通过向另一个角色授予角色形成层次关系。

**简单英文（整理解释）：** A privilege hierarchy formed by granting one role to another role.

**必要说明：** FREQUENT_CUSTOMER获得CUSTOMER的全部权限，并另有DISCOUNT表的写权限；CUSTOMER的修改会被FREQUENT_CUSTOMER继承。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> A role can be granted to another role creating a hierarchy of privileges

**原文来源：** Discretionary Access Control.pdf · PDF第25页（幻灯片25）

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Any modifications to a roleCUSTOMER will be inherited by a role FREQUENT_CUSTOMER

**原文来源：** Discretionary Access Control.pdf · PDF第25页（幻灯片25）

**全部来源：** Discretionary Access Control.pdf · PDF第25页（幻灯片25）

### root user

**稳定ID：** bd3dc0129c14

**类别：** technical

**中文解释：** 本课应用示例中的 MySQL 管理用户，已具有全部权限。

**简单英文（整理解释）：** The MySQL administration user with all privileges in these examples.

**必要说明：** DAC27假设安装后root没有密码；教师同时提到现代环境可能有默认密码。保留两种说法，不把演示的无密码状态推广到所有安装。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Immediately after installation of the system there is one user root with no password and with all privileges granted

**原文来源：** Discretionary Access Control.pdf · PDF第27页（幻灯片27）

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> in modern SQL, uh, you may have default password and later you need to change.

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第590行，行内字符5380–5457；搜索“in modern SQL, uh, you may have default password and later you need to change.”

**全部来源：** Discretionary Access Control.pdf · PDF第27页（幻灯片27）；Discretionary Access Control.pdf · PDF第29页（幻灯片29）；Discretionary Access Control.pdf · PDF第30页（幻灯片30）；Discretionary Access Control.pdf · PDF第31页（幻灯片31）；CSIT115_CSIT882 Lect-transcript.txt · TXT第590行，行内字符5380–5457；搜索“in modern SQL, uh, you may have default password and later you need to change.”

### mysql -u … -p -v -c

**稳定ID：** csit882-w11-0062

**类别：** technical

**中文解释：** 课件中的 MySQL 客户端连接命令；例子以 jamesb 身份连接。

**简单英文（整理解释）：** The client command shown for connecting as jamesb.

**必要说明：** 教师解释-u用于用户名、-p用于密码；当前资料没有解释-v与-c，保留原式而不猜测。DAC27无密码演示只写mysql -u root。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> mysql -u jamesb -p -v -c

**原文来源：** Discretionary Access Control.pdf · PDF第30页（幻灯片30）

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> mysql -u root

**原文来源：** Discretionary Access Control.pdf · PDF第27页（幻灯片27）

**全部来源：** Discretionary Access Control.pdf · PDF第27页（幻灯片27）；Discretionary Access Control.pdf · PDF第30页（幻灯片30）

### relational view / virtual relational table / derived relational table

**稳定ID：** 8145b3b22745

**类别：** technical

**中文解释：** 本周view示例为ITDEPT：从DEPARTMENT选择DNAME为IT的行，并对view授予INSERT权限。

**简单英文（整理解释）：** The ITDEPT view selects rows whose DNAME is IT; the example grants INSERT on the view.

**必要说明：** DAC37–38只给定义代码和权限输出；TXT结尾表示两页留到下一周。不要自行补充所有view都可插入的规则。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> CREATE VIEW ITDEPT(DNAME, BUDGET, CHAIRMAN) AS (SELECT * FROM DEPARTMENT WHERE DNAME='IT');

**原文来源：** Discretionary Access Control.pdf · PDF第37页（幻灯片37）

**全部来源：** Discretionary Access Control.pdf · PDF第37页（幻灯片37）；Discretionary Access Control.pdf · PDF第38页（幻灯片38）

### read mode / write mode

**稳定ID：** adcaca7676a4

**类别：** technical

**中文解释：** 在本周权限语境中：以读或写方式访问数据对象。

**简单英文（整理解释）：** Access a data object by reading or writing in the privilege definition.

**必要说明：** DAC23等例子把SELECT称为read privilege，INSERT／UPDATE／DELETE称为write privileges。与旧周TO访问模式的语境分开保留。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> A privilege is a right to perform an operation on a database or to access in a read or write mode a data object stored in a database

**原文来源：** Discretionary Access Control.pdf · PDF第8页（幻灯片8）

**全部来源：** Discretionary Access Control.pdf · PDF第8页（幻灯片8）；Discretionary Access Control.pdf · PDF第16页（幻灯片16）；Discretionary Access Control.pdf · PDF第23页（幻灯片23）；Discretionary Access Control.pdf · PDF第32页（幻灯片32）

### ANSI SQL

**稳定ID：** csit882-w11-0065

**类别：** technical

**中文解释：** 本份事务课件讨论的SQL标准语境。

**简单英文（整理解释）：** The SQL standard named in this lecture on transactions.

**必要说明：** 当前资料未展开ANSI全称；不自行补充标准历史或版本。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> ANSI standard of SQL provides four levels of isolation for processing of database transactions

**原文来源：** 12TransactionProcessingInSQL_1.pdf · PDF第7页（幻灯片7）

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第1页（幻灯片1）；12TransactionProcessingInSQL_1.pdf · PDF第7页（幻灯片7）

### isolation level

**稳定ID：** csit882-w11-0066

**类别：** technical

**中文解释：** 隔离级别；本课按事务可能出现的现象定义四个级别，并称其对应正确性级别。

**简单英文（整理解释）：** A level defined here by which transaction phenomena may occur.

**必要说明：** 本课比较dirty read、non-repeatable read、phantom三种现象；不把该表当作所有数据库产品和隔离实现的完整行为说明。

**说明依据：** 课件原文定义；中文及简单英文为整理解释

**课件原文定义：** 课件原文定义

> Isolation levels are defined in terms of several possible phenomena, or weird hard-to-explain occurrences of operations

**定义来源：** 12TransactionProcessingInSQL_1.pdf · PDF第7页（幻灯片7）

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Isolation levels are equivalent to correctness levels

**原文来源：** 12TransactionProcessingInSQL_1.pdf · PDF第7页（幻灯片7）

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第7页（幻灯片7）；12TransactionProcessingInSQL_1.pdf · PDF第8页（幻灯片8）；12TransactionProcessingInSQL_1.pdf · PDF第14页（幻灯片14）

### dirty read phenomenon

**稳定ID：** csit882-w11-0067

**类别：** technical

**中文解释：** 脏读：读操作读到了尚未提交的事务写入的数据。

**简单英文（整理解释）：** A read accesses data written by a transaction that has not committed.

**必要说明：** P3第3页例子：T2先读2000；T1加1000；T2读3000后T1回滚，更新被撤销。dirty指未提交，不是指格式脏或一般错误值。

**说明依据：** 课件原文定义；中文及简单英文为整理解释

**课件原文定义：** 课件原文定义

> Read operations may access dirty data, i.e. data written by uncommitted transactions

**定义来源：** 12TransactionProcessingInSQL_1.pdf · PDF第9页（幻灯片9）

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> the first transaction uh hasn't complete.

**原文来源：** CSIT882_week11.mp4-transcript.txt · TXT第2行，行内字符1230–1270；搜索“the first transaction uh hasn't complete.”

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第3页（幻灯片3）；12TransactionProcessingInSQL_1.pdf · PDF第9页（幻灯片9）；12TransactionProcessingInSQL_1.pdf · PDF第14页（幻灯片14）；CSIT882_week11.mp4-transcript.txt · TXT第2行，行内字符1230–1270；搜索“the first transaction uh hasn't complete.”

### dirty data / uncommitted data

**稳定ID：** csit882-w11-0068

**类别：** technical

**中文解释：** 脏数据／未提交数据；在本课指尚未提交的事务所写的数据。

**简单英文（整理解释）：** Data written by a transaction before it commits.

**必要说明：** 后续可能回滚是第3页例子的关键；不把未提交数据一概理解为数值必然错误。

**说明依据：** 课件原文定义；中文及简单英文为整理解释

**课件原文定义：** 课件原文定义

> Read operations may access dirty data, i.e. data written by uncommitted transactions

**定义来源：** 12TransactionProcessingInSQL_1.pdf · PDF第9页（幻灯片9）

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第3页（幻灯片3）；12TransactionProcessingInSQL_1.pdf · PDF第9页（幻灯片9）

### non-repeatable read phenomenon

**稳定ID：** csit882-w11-0069

**类别：** technical

**中文解释：** 不可重复读：同一个事务对同一数据进行不同次读取，可能得到不同值。

**简单英文（整理解释）：** One transaction reads the same data more than once and may get different values.

**必要说明：** P3第4页中，T2第一次读2000；T1把预算改为3000并COMMIT；T2再读3000。与dirty read的未提交条件区分。

**说明依据：** 课件原文定义；中文及简单英文为整理解释

**课件原文定义：** 课件原文定义

> Different reads by a single transaction to the same data will not be repeatable, i.e. they may return different values

**定义来源：** 12TransactionProcessingInSQL_1.pdf · PDF第9页（幻灯片9）

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第4页（幻灯片4）；12TransactionProcessingInSQL_1.pdf · PDF第9页（幻灯片9）；12TransactionProcessingInSQL_1.pdf · PDF第14页（幻灯片14）

### phantom phenomenon

**稳定ID：** csit882-w11-0070

**类别：** technical

**中文解释：** 幻读：同一事务再次读取一组行时，得到的行集合可能不同。

**简单英文（整理解释）：** A transaction reads a set of rows again and may get a different set.

**必要说明：** 第5页用删除部门并提交后count(*)从20变19说明；教师也举插入后行变多的情况。关键是行集合变化，不只是某个值变了。

**说明依据：** 课件原文定义；中文及简单英文为整理解释

**课件原文定义：** 课件原文定义

> A set of rows that transaction reads once might be different from a set of rows when the transaction attempts to read it again

**定义来源：** 12TransactionProcessingInSQL_1.pdf · PDF第9页（幻灯片9）

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> some data may appear, may disappear.

**原文来源：** CSIT882_week11.mp4-transcript.txt · TXT第2行，行内字符3161–3196；搜索“some data may appear, may disappear.”

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第5页（幻灯片5）；12TransactionProcessingInSQL_1.pdf · PDF第9页（幻灯片9）；12TransactionProcessingInSQL_1.pdf · PDF第14页（幻灯片14）；CSIT882_week11.mp4-transcript.txt · TXT第2行，行内字符3161–3196；搜索“some data may appear, may disappear.”

### READ UNCOMMITTED

**稳定ID：** csit882-w11-0071

**类别：** technical

**中文解释：** 读未提交；在本课ANSI表中，三种现象都可能出现。

**简单英文（整理解释）：** This level may allow all three listed phenomena.

**必要说明：** may／Possible表示可能，不是每次必然发生。第10页正文少了一个T，写UNCOMMITED，规范词条按第8、14页。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> At READ UNCOMMITED isolation level a transaction may exhibit: dirty read phenomenon, non-repeatable read phenomenon, phantom phenomenon

**原文来源：** 12TransactionProcessingInSQL_1.pdf · PDF第10页（幻灯片10）

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第8页（幻灯片8）；12TransactionProcessingInSQL_1.pdf · PDF第10页（幻灯片10）；12TransactionProcessingInSQL_1.pdf · PDF第14页（幻灯片14）

### READ COMMITTED

**稳定ID：** csit882-w11-0072

**类别：** technical

**中文解释：** 读已提交；在本课表中不可能脏读，但可能不可重复读和幻读。

**简单英文（整理解释）：** Dirty reads are not possible in this table; non-repeatable reads and phantoms may occur.

**必要说明：** “避免脏读”不等于同一事务每次都读相同值。教师用等待其他事务提交说明它；课件没有给出所有实现都必须等待的机制。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> At READ COMMITTED isolation level a transaction may exhibit: non-repeatable read phenomenon, phantom phenomenon

**原文来源：** 12TransactionProcessingInSQL_1.pdf · PDF第11页（幻灯片11）

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第8页（幻灯片8）；12TransactionProcessingInSQL_1.pdf · PDF第11页（幻灯片11）；12TransactionProcessingInSQL_1.pdf · PDF第14页（幻灯片14）

### REPEATABLE READ

**稳定ID：** csit882-w11-0073

**类别：** technical

**中文解释：** 可重复读；本课表中脏读和不可重复读不可能，幻读仍可能。

**简单英文（整理解释）：** Dirty and non-repeatable reads are not possible in this table; phantoms may occur.

**必要说明：** 这是本课ANSI比较表的范围；资料没有展开具体存储引擎的实现差异。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> At REPEATABLE READ isolation level a transaction may exhibit: phantom phenomenon

**原文来源：** 12TransactionProcessingInSQL_1.pdf · PDF第12页（幻灯片12）

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第8页（幻灯片8）；12TransactionProcessingInSQL_1.pdf · PDF第12页（幻灯片12）；12TransactionProcessingInSQL_1.pdf · PDF第14页（幻灯片14）

### SERIALIZABLE (isolation level)

**稳定ID：** csit882-w11-0074

**类别：** technical

**中文解释：** 可串行化隔离级别；本课表中三种现象都不可能出现。

**简单英文（整理解释）：** None of the three listed phenomena is possible at this level in the table.

**必要说明：** 沿用独立level词条，与旧周serializability概念组区分。教师强调可能降低处理效率；不能把其“serial way”简化说法当作禁止一切并发的正式定义。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> At SERIALIZABLE isolation level a transaction may exhibit: none of the phenomena

**原文来源：** 12TransactionProcessingInSQL_1.pdf · PDF第13页（幻灯片13）

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第8页（幻灯片8）；12TransactionProcessingInSQL_1.pdf · PDF第13页（幻灯片13）；12TransactionProcessingInSQL_1.pdf · PDF第14页（幻灯片14）

### transaction / database transaction

**稳定ID：** 9e9bc685aebd

**类别：** technical

**中文解释：** 本周示例中的事务T1与T2：分别执行更新或删除、读取及提交／回滚，用于展示并发读取现象。

**简单英文（整理解释）：** T1 and T2 run reads, changes and commit or rollback in the examples.

**必要说明：** 本周课件没有重新给出transaction正式定义；保留旧周定义与来源，只增加本周例子。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Transaction 1 Transaction 2

**原文来源：** 12TransactionProcessingInSQL_1.pdf · PDF第3页（幻灯片3）

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第3页（幻灯片3）；12TransactionProcessingInSQL_1.pdf · PDF第4页（幻灯片4）；12TransactionProcessingInSQL_1.pdf · PDF第5页（幻灯片5）；12TransactionProcessingInSQL_1.pdf · PDF第7页（幻灯片7）

### concurrent transactions / concurrent execution

**稳定ID：** af93076c06f2

**类别：** technical

**中文解释：** 并发事务／并发执行；本周T1、T2操作交错，另一个事务的更新或删除影响读取结果。

**简单英文（整理解释）：** Transactions whose operations occur during the same period, as shown by T1 and T2.

**必要说明：** TXT说明两事务并发；第3–5页按图中的上下顺序阅读，不能根据纯文本抽取顺序把COMMIT移到更新之前。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> Suppose there are 2 concurrent transactions, transaction 1 and the transaction 2.

**原文来源：** CSIT882_week11.mp4-transcript.txt · TXT第2行，行内字符311–391；搜索“Suppose there are 2 concurrent transactions, transaction 1 and the transaction 2.”

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第3页（幻灯片3）；12TransactionProcessingInSQL_1.pdf · PDF第4页（幻灯片4）；12TransactionProcessingInSQL_1.pdf · PDF第5页（幻灯片5）；CSIT882_week11.mp4-transcript.txt · TXT第2行，行内字符311–391；搜索“Suppose there are 2 concurrent transactions, transaction 1 and the transaction 2.”

### commit / COMMIT

**稳定ID：** d1a0fdf7c110

**类别：** technical

**中文解释：** 提交；本周第4–5页T1的更新或删除之后提交，T2随后再读得到变化后的结果。

**简单英文（整理解释）：** Commit T1 after its change in the examples, before T2 reads again.

**必要说明：** 第4页的COMMIT在图中位于UPDATE之后；第5页在DELETE之后。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> COMMIT;

**原文来源：** 12TransactionProcessingInSQL_1.pdf · PDF第4页（幻灯片4）

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第4页（幻灯片4）；12TransactionProcessingInSQL_1.pdf · PDF第5页（幻灯片5）

### abort / rollback

**稳定ID：** e6014e9a5df2

**类别：** technical

**中文解释：** 本周ROLLBACK表示撤销T1的未提交更新，恢复原预算；T2先前已读取了3000。

**简单英文（整理解释）：** ROLLBACK cancels T1's uncommitted change and restores the original budget in this example.

**必要说明：** 第3页的问号提出脏读问题；回滚不等于T2过去已经读到的值从未发生。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> ROLLBACK;

**原文来源：** 12TransactionProcessingInSQL_1.pdf · PDF第3页（幻灯片3）

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> the original data should be restored.

**原文来源：** CSIT882_week11.mp4-transcript.txt · TXT第2行，行内字符970–1006；搜索“the original data should be restored.”

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第3页（幻灯片3）；CSIT882_week11.mp4-transcript.txt · TXT第2行，行内字符970–1006；搜索“the original data should be restored.”

### COUNT(cnum) / COUNT(*)

**稳定ID：** f1408dfb9354

**类别：** technical

**中文解释：** 本周COUNT(*)用于数DEPARTMENT表的行数；示例从20行变19行。

**简单英文（整理解释）：** COUNT(*) counts rows in DEPARTMENT; the example changes from 20 to 19.

**必要说明：** 本周只出现COUNT(*)，COUNT(cnum)的旧解释仍保留；行数变化用于说明phantom现象。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> SELECT count(*) FROM DEPARTMENT;

**原文来源：** 12TransactionProcessingInSQL_1.pdf · PDF第5页（幻灯片5）

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第5页（幻灯片5）

### row / record

**稳定ID：** 0a56d62cdff7

**类别：** technical

**中文解释：** 本周phantom定义中的row为表中的一行；再次读取时行集合可能变化。

**简单英文（整理解释）：** A row is one table record in the set read by a transaction.

**必要说明：** TXT中的roles疑似rows转写；规范词按P3第9页rows。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> A set of rows that transaction reads once might be different from a set of rows when the transaction attempts to read it again

**原文来源：** 12TransactionProcessingInSQL_1.pdf · PDF第9页（幻灯片9）

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第5页（幻灯片5）；12TransactionProcessingInSQL_1.pdf · PDF第9页（幻灯片9）

### data object

**稳定ID：** csit882-w11-0126

**类别：** technical

**中文解释：** 数据对象；本周privilege定义中，在数据库内保存、可按读或写方式访问的对象。

**简单英文（整理解释）：** A stored database object that can be accessed in read or write mode.

**必要说明：** 课件定义privilege时使用该词，没有给data object单独正式定义。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> a data object stored in a database

**原文来源：** Discretionary Access Control.pdf · PDF第8页（幻灯片8）

**全部来源：** Discretionary Access Control.pdf · PDF第8页（幻灯片8）

### function / procedure

**稳定ID：** aa0133d0a76a

**类别：** technical

**中文解释：** 函数／过程；本课权限输出谈stored functions和procedures，可以创建、修改、删除或执行。

**简单英文（整理解释）：** Stored functions and procedures mentioned with routine privileges.

**必要说明：** PDF11有CREATE FUNCTION/PROCEDURE表达；本周未给出函数与过程的完整区别或创建语法。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> To use CREATE FUNCTION/PROCEDURE

**原文来源：** Discretionary Access Control.pdf · PDF第11页（幻灯片11）

**全部来源：** Discretionary Access Control.pdf · PDF第11页（幻灯片11）；Discretionary Access Control.pdf · PDF第13页（幻灯片13）

### temporary relational table

**稳定ID：** 7df67884acc2

**类别：** technical

**中文解释：** 本周教师用temporary tables说明保存中间结果的临时表，并介绍相关创建权限。

**简单英文（整理解释）：** Temporary tables used for intermediate results in the teacher example.

**必要说明：** PDF11列出CREATE TEMPORARY TABLES权限；教师概括完成后会移除，没有完整展开session和生命周期条件。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> to store intermediate results, for example, these are temporary tables

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第383行，行内字符1–70；搜索“to store intermediate results, for example, these are temporary tables”

**全部来源：** Discretionary Access Control.pdf · PDF第11页（幻灯片11）；Discretionary Access Control.pdf · PDF第13页（幻灯片13）；CSIT115_CSIT882 Lect-transcript.txt · TXT第383行，行内字符1–70；搜索“to store intermediate results, for example, these are temporary tables”

### transaction processing

**稳定ID：** 4eb28407955e

**类别：** technical

**中文解释：** 事务处理；本份课件按ANSI SQL讨论读取现象与隔离级别。

**简单英文（整理解释）：** Processing database transactions, discussed here through read phenomena and isolation levels.

**必要说明：** 本周没有重新给出transaction processing正式定义；保留旧周定义与本周内容范围。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> ANSI standard of SQL provides four levels of isolation for processing of database transactions

**原文来源：** 12TransactionProcessingInSQL_1.pdf · PDF第7页（幻灯片7）

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第1页（幻灯片1）；12TransactionProcessingInSQL_1.pdf · PDF第7页（幻灯片7）

### read operation / read(x)

**稳定ID：** 564bdc38d46b

**类别：** technical

**中文解释：** 本周read operations指读取数据的操作，可能访问未提交事务写入的数据。

**简单英文（整理解释）：** Operations that read data, including the uncommitted-data case discussed here.

**必要说明：** 本周使用SELECT示例；read(x)的符号来自旧周，不把两种形式直接替换成可执行语法。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Read operations may access dirty data, i.e. data written by uncommitted transactions

**原文来源：** 12TransactionProcessingInSQL_1.pdf · PDF第9页（幻灯片9）

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第3页（幻灯片3）；12TransactionProcessingInSQL_1.pdf · PDF第4页（幻灯片4）；12TransactionProcessingInSQL_1.pdf · PDF第5页（幻灯片5）；12TransactionProcessingInSQL_1.pdf · PDF第9页（幻灯片9）

### column

**稳定ID：** eb6d188ef9f1

**类别：** technical

**中文解释：** 列；列级权限可以只对表中的指定列授权。

**简单英文（整理解释）：** A table column that may receive a column-level privilege.

**必要说明：** DAC20选LNUM、sname/level或ordernum；不能把选定列解释成所有列。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Column privileges apply to the columns in relational tables

**原文来源：** Discretionary Access Control.pdf · PDF第12页（幻灯片12）

**全部来源：** Discretionary Access Control.pdf · PDF第12页（幻灯片12）；Discretionary Access Control.pdf · PDF第20页（幻灯片20）；Discretionary Access Control.pdf · PDF第21页（幻灯片21）；Discretionary Access Control.pdf · PDF第36页（幻灯片36）

### relational table

**稳定ID：** 48ff937dd1af

**类别：** technical

**中文解释：** 关系表；本课角色及权限例子中的ITEM、ORDERS、DISCOUNT等表。

**简单英文（整理解释）：** The tables named in the privilege and role examples.

**必要说明：** 本周没有重新正式定义表的全部结构；保留表级与列级授权范围的区别。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Table privileges apply to a relational table and its columns

**原文来源：** Discretionary Access Control.pdf · PDF第10页（幻灯片10）

**全部来源：** Discretionary Access Control.pdf · PDF第10页（幻灯片10）；Discretionary Access Control.pdf · PDF第18页（幻灯片18）；Discretionary Access Control.pdf · PDF第23页（幻灯片23）；Discretionary Access Control.pdf · PDF第25页（幻灯片25）

### subquery / nested query

**稳定ID：** aa3794f6bbf1

**类别：** technical

**中文解释：** 子查询／嵌套查询；教师在开场作业回顾中提到，未重新定义。

**简单英文（整理解释）：** Queries named in the opening assignment reminder; no new definition is given here.

**必要说明：** 只保存本次出现及来源；开场提到non-correlated nested query，具体旧周说明继续保留。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> nested query statements and correlated nested query.

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第11行，行内字符1703–1754；搜索“nested query statements and correlated nested query.”

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> non-correlated nested query.

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第11行，行内字符2116–2143；搜索“non-correlated nested query.”

**全部来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第11行，行内字符1703–1754；搜索“nested query statements and correlated nested query.”；CSIT115_CSIT882 Lect-transcript.txt · TXT第11行，行内字符2116–2143；搜索“non-correlated nested query.”

### correlated nested query

**稳定ID：** 44a97ded46f9

**类别：** technical

**中文解释：** 关联嵌套查询；教师在开场强调作业要求使用的查询类型，未重新定义。

**简单英文（整理解释）：** The query type named in the assignment reminder; this recording gives no new definition.

**必要说明：** TXT还写correlatedness set query等异常形式；规范词来自同一稿前文correlated nested query，旧周词条及来源保持。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> nested query statements and correlated nested query.

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第11行，行内字符1703–1754；搜索“nested query statements and correlated nested query.”

**全部来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第11行，行内字符1703–1754；搜索“nested query statements and correlated nested query.”

### WITH clause

**稳定ID：** 863d62387a4c

**类别：** technical

**中文解释：** WITH子句；教师开场在view任务回顾中提到，其后的withlas等形式疑似转写。

**简单英文（整理解释）：** The clause named in the view-task reminder, with an unclear transcript spelling.

**必要说明：** 该段只出现Vikelas／withlas，没有当前PDF对应正式写法；按前后语境及旧词条登记为疑似对应，不把异常形式确定为新词。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> you need to create withlas in, uh, first part.

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第11行，行内字符2768–2813；搜索“you need to create withlas in, uh, first part.”

**全部来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第11行，行内字符2768–2813；搜索“you need to create withlas in, uh, first part.”

### Data Manipulation Language (DML)

**稳定ID：** 5415dfcd3923

**类别：** technical

**中文解释：** 数据操作语言；教师开场回顾advanced DML statements，没有本周新定义。

**简单英文（整理解释）：** DML statements named in the opening reminder; no new definition is given here.

**必要说明：** TXT写advanced DMLS statements，规范缩写沿用旧周DML；当前录音只是回顾。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> advanced DMLS statements

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第11行，行内字符2885–2908；搜索“advanced DMLS statements”

**全部来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第11行，行内字符2885–2908；搜索“advanced DMLS statements”

### normalization

**稳定ID：** csit882-w11-0137

**类别：** technical

**中文解释：** 规范化；教师开场提到的数据库课程主题。

**简单英文（整理解释）：** A database topic named in the opening reminder, without an explanation here.

**必要说明：** 当前四份资料只在作业提醒中提到，没有正式定义或规范化步骤；不补写课程知识。

**说明依据：** 根据课件示例／说明及所列教师转写整理；当前资料未给出正式定义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> A normalization that you have learned

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第11行，行内字符3668–3704；搜索“A normalization that you have learned”

**全部来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第11行，行内字符3668–3704；搜索“A normalization that you have learned”

## 阅读词汇

### grant privileges / be granted …

**稳定ID：** a79b4637acd6

**类别：** reading

**中文解释：** 授予权限／被授予……；主动句说明谁授予，被动句突出获授者。

**简单英文（整理解释）：** Give privileges to someone, or receive privileges.

**必要说明：** 完整结构：grant a privilege to a user；a user is granted a privilege。SQL关键词GRANT另有专业词条。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> For example, assume, that user James must be granted a read privilege on a relational table ITEM and a write privilege on a relational table ORDERS

**原文来源：** Discretionary Access Control.pdf · PDF第23页（幻灯片23）

**全部来源：** Discretionary Access Control.pdf · PDF第9页（幻灯片9）；Discretionary Access Control.pdf · PDF第13页（幻灯片13）；Discretionary Access Control.pdf · PDF第23页（幻灯片23）

### revoke privileges / revoke … from …

**稳定ID：** csit882-w11-0082

**类别：** reading

**中文解释：** 收回权限／从……处撤销……。

**简单英文（整理解释）：** Take back a privilege previously given to someone.

**必要说明：** 结构revoke a privilege from a user；与grant … to …配对。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> SQL statements GRANT and REVOKE can be used to assign/revoke the privileges to/from the database users

**原文来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）

**全部来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）

### assign … to …

**稳定ID：** csit882-w11-0083

**类别：** reading

**中文解释：** 把……分配给……；这里是分配权限或角色。

**简单英文（整理解释）：** Give something to a chosen person or group.

**必要说明：** 学习完整结构，不只记assign＝分配。课件13的assign/revoke把两种动作并列。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> SQL statements GRANT and REVOKE can be used to assign/revoke the privileges to/from the database users

**原文来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）

**全部来源：** Discretionary Access Control.pdf · PDF第13页（幻灯片13）

### apply to … / be applied to …

**稳定ID：** csit882-w11-0084

**类别：** reading

**中文解释：** 适用于……／被应用到……；这里说明权限生效的对象范围。

**简单英文（整理解释）：** Be used for, or have an effect on, the stated objects.

**必要说明：** apply to a database and all objects within it；不是“申请数据库”。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Database privileges apply to a database and to all objects within it

**原文来源：** Discretionary Access Control.pdf · PDF第9页（幻灯片9）

**全部来源：** Discretionary Access Control.pdf · PDF第9页（幻灯片9）；Discretionary Access Control.pdf · PDF第10页（幻灯片10）；Discretionary Access Control.pdf · PDF第18页（幻灯片18）；Discretionary Access Control.pdf · PDF第20页（幻灯片20）

### be specific to …

**稳定ID：** csit882-w11-0085

**类别：** reading

**中文解释：** 专用于……；只针对某个对象或范围。

**简单英文（整理解释）：** Be for a particular thing rather than a wider group.

**必要说明：** not specific to a particular database保留否定：管理权限不限于某个特定数据库。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Administrative privileges are global because they are not specific to a particular database

**原文来源：** Discretionary Access Control.pdf · PDF第8页（幻灯片8）

**全部来源：** Discretionary Access Control.pdf · PDF第8页（幻灯片8）

### distinguish …

**稳定ID：** csit882-w11-0086

**类别：** reading

**中文解释：** 区分……；在这里指把权限分成不同组。

**简单英文（整理解释）：** Recognize or describe different groups.

**必要说明：** PDF9使用MySQL distinguishes the following groups；其他页有distinguish的主谓形式问题，原文不默默改写。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> MySQL distinguishes the following groups of privileges

**原文来源：** Discretionary Access Control.pdf · PDF第9页（幻灯片9）

**全部来源：** Discretionary Access Control.pdf · PDF第8页（幻灯片8）；Discretionary Access Control.pdf · PDF第9页（幻灯片9）；Discretionary Access Control.pdf · PDF第10页（幻灯片10）；Discretionary Access Control.pdf · PDF第12页（幻灯片12）

### enable … to …

**稳定ID：** csit882-w11-0087

**类别：** reading

**中文解释：** 使……能够……。

**简单英文（整理解释）：** Make it possible for someone to do something.

**必要说明：** 结构enable users to manage …；to后面用动作原形。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Administrative (global) privileges enable the users to manage operation of the M ySQL server

**原文来源：** Discretionary Access Control.pdf · PDF第8页（幻灯片8）

**全部来源：** Discretionary Access Control.pdf · PDF第8页（幻灯片8）

### be denoted by …

**稳定ID：** csit882-w11-0088

**类别：** reading

**中文解释：** 用……表示；这里用符号或名称表示权限范围。

**简单英文（整理解释）：** Be shown or represented by a symbol or name.

**必要说明：** Global privileges are denoted by *.*；denoted不是授予，而是“表示”。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Global privileges are denoted by *.*

**原文来源：** Discretionary Access Control.pdf · PDF第14页（幻灯片14）

**全部来源：** Discretionary Access Control.pdf · PDF第14页（幻灯片14）；Discretionary Access Control.pdf · PDF第16页（幻灯片16）；Discretionary Access Control.pdf · PDF第18页（幻灯片18）；Discretionary Access Control.pdf · PDF第20页（幻灯片20）

### permissible / be allowed at …

**稳定ID：** csit882-w11-0089

**类别：** reading

**中文解释：** 允许的／在……范围被允许；这里说明某个level可用的权限种类。

**简单英文（整理解释）：** Allowed at the stated level.

**必要说明：** permissible privileges at the table level；列级只列四类权限，不扩展到所有类型。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> The permissible privileges at the column level are the following

**原文来源：** Discretionary Access Control.pdf · PDF第21页（幻灯片21）

**全部来源：** Discretionary Access Control.pdf · PDF第17页（幻灯片17）；Discretionary Access Control.pdf · PDF第19页（幻灯片19）；Discretionary Access Control.pdf · PDF第21页（幻灯片21）

### be enclosed in …

**稳定ID：** 4c3903e49afa

**类别：** reading

**中文解释：** 放在……里面；本周列名用括号括起来。

**简单英文（整理解释）：** Be put inside something, here parentheses.

**必要说明：** 本周原文用enclosed within parentheses；in和within在这个表达中都指括号内部。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Column privilege must be followed by the column or columns, enclosed within parentheses

**原文来源：** Discretionary Access Control.pdf · PDF第12页（幻灯片12）

**全部来源：** Discretionary Access Control.pdf · PDF第12页（幻灯片12）

### parentheses

**稳定ID：** csit882-w11-0091

**类别：** reading

**中文解释：** 圆括号；这里用于包住一个或多个列名。

**简单英文（整理解释）：** Round brackets, ( and ).

**必要说明：** 当前语境是复数parentheses；单数parenthesis为必要词形说明。不要与模板的方括号混淆。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Column privilege must be followed by the column or columns, enclosed within parentheses

**原文来源：** Discretionary Access Control.pdf · PDF第12页（幻灯片12）

**全部来源：** Discretionary Access Control.pdf · PDF第12页（幻灯片12）；Discretionary Access Control.pdf · PDF第20页（幻灯片20）

### be followed by

**稳定ID：** d54cc76eeb29

**类别：** reading

**中文解释：** 后面必须／可以接……；本周描述列级权限名之后的列名。

**简单英文（整理解释）：** Have something come after it.

**必要说明：** must be followed by保留必须条件：列名跟在权限名后，并放在括号中。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Column privilege must be followed by the column or columns, enclosed within parentheses

**原文来源：** Discretionary Access Control.pdf · PDF第12页（幻灯片12）

**全部来源：** Discretionary Access Control.pdf · PDF第12页（幻灯片12）

### a synonym for …

**稳定ID：** csit882-w11-0093

**类别：** reading

**中文解释：** 与……同义的词或表达。

**简单英文（整理解释）：** A word or expression with the same meaning as another.

**必要说明：** 课件用USAGE is a synonym for no privileges granted；这句解释名称的特殊含义。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> A special privilege named USAGE is a synonym for no privileges granted to a user

**原文来源：** Discretionary Access Control.pdf · PDF第10页（幻灯片10）

**全部来源：** Discretionary Access Control.pdf · PDF第10页（幻灯片10）

### continuously increasing

**稳定ID：** csit882-w11-0094

**类别：** reading

**中文解释：** 持续增长的；本课指用户群人数继续增加。

**简单英文（整理解释）：** Growing as more people are added.

**必要说明：** 完整搭配a continuously increasing group of users；continuously修饰increasing。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Roles are very useful when a group of privileges must be granted to a continuously increasing group of users

**原文来源：** Discretionary Access Control.pdf · PDF第23页（幻灯片23）

**全部来源：** Discretionary Access Control.pdf · PDF第23页（幻灯片23）

### simplification of …

**稳定ID：** csit882-w11-0095

**类别：** reading

**中文解释：** ……的简化；本课通过roles减少重复授权。

**简单英文（整理解释）：** Making something simpler to manage.

**必要说明：** 结构allow for simplification of …表示使简化成为可能，不是删除权限条件。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> A concept of a role allows for simplification of discretionary access control

**原文来源：** Discretionary Access Control.pdf · PDF第24页（幻灯片24）

**全部来源：** Discretionary Access Control.pdf · PDF第24页（幻灯片24）

### allow for …

**稳定ID：** csit882-w11-0096

**类别：** reading

**中文解释：** 使……成为可能；在当前句中不是“考虑到”的另一个义项。

**简单英文（整理解释）：** Make something possible in this sentence.

**必要说明：** 完整表达allows for simplification of …；按本页意思解释。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> A concept of a role allows for simplification of discretionary access control

**原文来源：** Discretionary Access Control.pdf · PDF第24页（幻灯片24）

**全部来源：** Discretionary Access Control.pdf · PDF第24页（幻灯片24）

### modification to … / modify …

**稳定ID：** csit882-w11-0097

**类别：** reading

**中文解释：** 对……的修改／修改……；这里修改role会影响获授该role的用户权限。

**简单英文（整理解释）：** A change to something, or to change it.

**必要说明：** modification to a role；any modification与also affects保留影响关系。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Any modification to a roleCUSTOMER also affects the privileges of the users who have been granted a roleCUSTOMER

**原文来源：** Discretionary Access Control.pdf · PDF第24页（幻灯片24）

**全部来源：** Discretionary Access Control.pdf · PDF第24页（幻灯片24）；Discretionary Access Control.pdf · PDF第25页（幻灯片25）

### be inherited by … / inherit … from …

**稳定ID：** csit882-w11-0098

**类别：** reading

**中文解释：** 被……继承／从……继承；本课是另一个role取得已有role的权限及修改。

**简单英文（整理解释）：** Receive privileges or changes from another role.

**必要说明：** 方向：CUSTOMER的修改被FREQUENT_CUSTOMER继承；不能把方向倒过来。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Any modifications to a roleCUSTOMER will be inherited by a role FREQUENT_CUSTOMER

**原文来源：** Discretionary Access Control.pdf · PDF第25页（幻灯片25）

**全部来源：** Discretionary Access Control.pdf · PDF第25页（幻灯片25）

### possess … / additionally …

**稳定ID：** csit882-w11-0099

**类别：** reading

**中文解释：** 拥有……／另外还……；这里是在已有一组权限外再加权限。

**简单英文（整理解释）：** Have something, and have something more as well.

**必要说明：** must possess all privileges … and additionally a write privilege；保留all和另外增加这两个部分。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> For example, assume that roleFREQUENT_CUSTOMER must possess all privileges of a roleCUSTOMER and additionally a write privilege on a relational table DISCOUNT

**原文来源：** Discretionary Access Control.pdf · PDF第25页（幻灯片25）

**全部来源：** Discretionary Access Control.pdf · PDF第25页（幻灯片25）

### hierarchy

**稳定ID：** csit882-w11-0100

**类别：** reading

**中文解释：** 层次结构；本课role之间通过授权形成的层次。

**简单英文（整理解释）：** A structure with levels or relationships between groups.

**必要说明：** 普通名词hierarchy放在阅读词汇；完整课程概念role hierarchy另列为专业词条。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> A role can be granted to another role creating a hierarchy of privileges

**原文来源：** Discretionary Access Control.pdf · PDF第25页（幻灯片25）

**全部来源：** Discretionary Access Control.pdf · PDF第25页（幻灯片25）

### deteriorate performance

**稳定ID：** csit882-w11-0101

**类别：** reading

**中文解释：** 使运行表现变差；这里指某些查询或processes可能降低服务器性能。

**简单英文（整理解释）：** Make the server performance worse.

**必要说明：** 原句是口语转写may deteriorate performance；概念是性能变差，规范词deteriorate来自本句。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> may deteriorate uh performance.

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第179行，行内字符111–141；搜索“may deteriorate uh performance.”

**全部来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第179行，行内字符111–141；搜索“may deteriorate uh performance.”

### monitor … / track …

**稳定ID：** csit882-w11-0102

**类别：** reading

**中文解释：** 监控……／跟踪……；这里是观察当前查询和服务器运行情况。

**简单英文（整理解释）：** Watch activity or performance over time.

**必要说明：** 教师把这类工作联系到管理员职责和PROCESS权限；不是简单的一次查看。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> track and monitor, uh, different queries currently running on the serve

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第179行，行内字符201–271；搜索“track and monitor, uh, different queries currently running on the serve”

**全部来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第179行，行内字符201–271；搜索“track and monitor, uh, different queries currently running on the serve”

### deprecated

**稳定ID：** csit882-w11-0103

**类别：** reading

**中文解释：** 已被弃用或不再推荐使用；本稿谈SUPER的部分用途。

**简单英文（整理解释）：** No longer recommended for some uses in the teacher statement.

**必要说明：** 不等于已经从所有版本删除；资料没有提供替代权限、时间或完整版本条件。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> super now is deprecated for, uh, some privileges

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第554行，行内字符1309–1356；搜索“super now is deprecated for, uh, some privileges”

**全部来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第554行，行内字符1309–1356；搜索“super now is deprecated for, uh, some privileges”

### expiry date / expired records

**稳定ID：** csit882-w11-0104

**类别：** reading

**中文解释：** 到期日／已过期的记录；教师举尚未付款的预订到期后清除的例子。

**简单英文（整理解释）：** The date a booking ends, or records that are past that date.

**必要说明：** 例子的event定期检查；保留未付款和到期条件，不把所有预订都当作应删除。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> these rooms have expiry date for confirmation if customers don't pay.

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第554行，行内字符2252–2320；搜索“these rooms have expiry date for confirmation if customers don't pay.”

**全部来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第554行，行内字符2252–2320；搜索“these rooms have expiry date for confirmation if customers don't pay.”

### intentionally / unintentionally

**稳定ID：** csit882-w11-0105

**类别：** reading

**中文解释：** 有意地／无意地；教师用两者说明错误删除数据库可能出于不同原因。

**简单英文（整理解释）：** On purpose, or without intending to do it.

**必要说明：** 与DROP DATABASE例子联系，表达原因差异；不是新的技术术语。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> intentionally or unintentionally drop a university database.

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第59行，行内字符480–539；搜索“intentionally or unintentionally drop a university database.”

**全部来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第59行，行内字符480–539；搜索“intentionally or unintentionally drop a university database.”

### be applicable at …

**稳定ID：** csit882-w11-0106

**类别：** reading

**中文解释：** 在……范围适用；本课强调不是所有权限都能用于列级。

**简单英文（整理解释）：** Be usable at the stated level.

**必要说明：** not all privileges are applicable …保留部分否定：不是所有，而非全部都不可以。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> not all the privileges are applicable at the column level.

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第584行，行内字符8169–8226；搜索“not all the privileges are applicable at the column level.”

**全部来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第584行，行内字符8169–8226；搜索“not all the privileges are applicable at the column level.”

### time consuming

**稳定ID：** csit882-w11-0107

**类别：** reading

**中文解释：** 耗时的；逐一收回权限在教师例子中很耗时。

**简单英文（整理解释）：** Taking a lot of time.

**必要说明：** 整句语境是revoking privileges one by one individually；按完整做法理解。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> revoking privileges one by one individually, so it's very time consuming.

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第512行，行内字符974–1046；搜索“revoking privileges one by one individually, so it's very time consuming.”

**全部来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第512行，行内字符974–1046；搜索“revoking privileges one by one individually, so it's very time consuming.”

### clarification

**稳定ID：** csit882-w11-0108

**类别：** reading

**中文解释：** 澄清；把作业问题中不清楚的要求讲清楚。

**简单英文（整理解释）：** An explanation that makes something clear.

**必要说明：** 来自教师开场的作业说明，不是执行向教师发消息的指令。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> clarification for the question.

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第11行，行内字符4061–4091；搜索“clarification for the question.”

**全部来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第11行，行内字符4061–4091；搜索“clarification for the question.”

### corresponding …

**稳定ID：** csit882-w11-0109

**类别：** reading

**中文解释：** 相对应的……；这里指与作业要求对应的lecture。

**简单英文（整理解释）：** Matching or related to the thing being discussed.

**必要说明：** 完整搭配the corresponding lectures；保留为阅读表达，不处理作业任务。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> the corresponding lectures

**原文来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第11行，行内字符2954–2979；搜索“the corresponding lectures”

**全部来源：** CSIT115_CSIT882 Lect-transcript.txt · TXT第11行，行内字符2954–2979；搜索“the corresponding lectures”

### in terms of …

**稳定ID：** csit882-w11-0110

**类别：** reading

**中文解释：** 按……来定义或说明；这里按可能出现的现象定义isolation levels。

**简单英文（整理解释）：** By using the stated features to define or explain something.

**必要说明：** 完整结构be defined in terms of several possible phenomena；不是“在术语里面”。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Isolation levels are defined in terms of several possible phenomena, or weird hard-to-explain occurrences of operations

**原文来源：** 12TransactionProcessingInSQL_1.pdf · PDF第7页（幻灯片7）

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第7页（幻灯片7）

### phenomenon / phenomena

**稳定ID：** csit882-w11-0111

**类别：** reading

**中文解释：** 现象；phenomenon为单数，phenomena为复数。

**简单英文（整理解释）：** An event or situation; phenomena is the plural form.

**必要说明：** 这里是三种事务读取现象。标题的Phenomenons与教师稿的phenomenons为资料异常形式，不作为主要词形记忆。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Phenomena

**原文来源：** 12TransactionProcessingInSQL_1.pdf · PDF第2页（幻灯片2）

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第1页（幻灯片1）；12TransactionProcessingInSQL_1.pdf · PDF第2页（幻灯片2）；12TransactionProcessingInSQL_1.pdf · PDF第7页（幻灯片7）；12TransactionProcessingInSQL_1.pdf · PDF第9页（幻灯片9）

### occurrence / weird / hard-to-explain

**稳定ID：** csit882-w11-0112

**类别：** reading

**中文解释：** 出现的事件／不寻常的／难以解释的；完整短语表示难以说明的异常操作现象。

**简单英文（整理解释）：** An event; something unusual; something difficult to explain.

**必要说明：** 理解完整表达weird hard-to-explain occurrences of operations；这些是普通描述词，不是另三种技术现象名称。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> weird hard-to-explain occurrences of operations

**原文来源：** 12TransactionProcessingInSQL_1.pdf · PDF第7页（幻灯片7）

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第7页（幻灯片7）

### be equivalent to …

**稳定ID：** dcd2aa071d5f

**类别：** reading

**中文解释：** 等同于……；课件把isolation levels与correctness levels对应起来。

**简单英文（整理解释）：** Have the same meaning or role in the stated comparison.

**必要说明：** 保留本页的比较范围，不推导某level能避免所有可能的数据库错误。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Isolation levels are equivalent to correctness levels

**原文来源：** 12TransactionProcessingInSQL_1.pdf · PDF第7页（幻灯片7）

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第7页（幻灯片7）

### may exhibit …

**稳定ID：** csit882-w11-0114

**类别：** reading

**中文解释：** 可能出现或表现出……；用于列出某隔离级别允许的现象。

**简单英文（整理解释）：** May show or have the stated phenomenon.

**必要说明：** may表示可能，不是一定；exhibit在此不是“展览”。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> At READ UNCOMMITED isolation level a transaction may exhibit: dirty read phenomenon, non-repeatable read phenomenon, phantom phenomenon

**原文来源：** 12TransactionProcessingInSQL_1.pdf · PDF第10页（幻灯片10）

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第10页（幻灯片10）；12TransactionProcessingInSQL_1.pdf · PDF第11页（幻灯片11）；12TransactionProcessingInSQL_1.pdf · PDF第12页（幻灯片12）；12TransactionProcessingInSQL_1.pdf · PDF第13页（幻灯片13）

### attempt to …

**稳定ID：** csit882-w11-0115

**类别：** reading

**中文解释：** 尝试再次做……；这里是事务尝试重读一组行。

**简单英文（整理解释）：** Try to do something.

**必要说明：** 结构attempt to read it again；to后接动作。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> when the transaction attempts to read it again

**原文来源：** 12TransactionProcessingInSQL_1.pdf · PDF第9页（幻灯片9）

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第9页（幻灯片9）

### a set of …

**稳定ID：** csit882-w11-0116

**类别：** reading

**中文解释：** 一组……／一个……集合；本课是一组行。

**简单英文（整理解释）：** A group or collection of things.

**必要说明：** a set of rows与the same data的读值比较区分；不要把set译成SQL SET语句。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> A set of rows that transaction reads once might be different from a set of rows when the transaction attempts to read it again

**原文来源：** 12TransactionProcessingInSQL_1.pdf · PDF第9页（幻灯片9）

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第9页（幻灯片9）

### i.e.

**稳定ID：** f4bd8976a394

**类别：** reading

**中文解释：** 也就是说；后面用更具体的话解释前面的说法。

**简单英文（整理解释）：** That is; used to explain the same idea more clearly.

**必要说明：** 第9页dirty data后面的i.e.明确解释为uncommitted transactions写的数据。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> Read operations may access dirty data, i.e. data written by uncommitted transactions

**原文来源：** 12TransactionProcessingInSQL_1.pdf · PDF第9页（幻灯片9）

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第9页（幻灯片9）

### none of … / not possible

**稳定ID：** csit882-w11-0118

**类别：** reading

**中文解释：** ……都没有／不可能；本课在表中限定为所列三种现象。

**简单英文（整理解释）：** Not any of the listed things, or unable to happen.

**必要说明：** none of the phenomena不是“没有所有现象”这种部分否定；本课第13–14页说三项全部不可能。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> none of the phenomena

**原文来源：** 12TransactionProcessingInSQL_1.pdf · PDF第13页（幻灯片13）

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第13页（幻灯片13）；12TransactionProcessingInSQL_1.pdf · PDF第14页（幻灯片14）

### be restored / restore …

**稳定ID：** csit882-w11-0119

**类别：** reading

**中文解释：** 被恢复／恢复……；教师指回滚后原数据恢复。

**简单英文（整理解释）：** Be brought back to its earlier state.

**必要说明：** 完整表达the original data should be restored；与ROLLBACK例子联系。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> the original data should be restored.

**原文来源：** CSIT882_week11.mp4-transcript.txt · TXT第2行，行内字符970–1006；搜索“the original data should be restored.”

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第3页（幻灯片3）；CSIT882_week11.mp4-transcript.txt · TXT第2行，行内字符970–1006；搜索“the original data should be restored.”

### inconsistency / avoid inconsistency

**稳定ID：** csit882-w11-0120

**类别：** reading

**中文解释：** 不一致／避免数据不一致；教师讨论选择隔离级别时的目标。

**简单英文（整理解释）：** A lack of consistency; try to prevent inconsistent data.

**必要说明：** avoid后直接接名词；当前资料没有完整列出各种不一致情况。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> avoid inconsistency of the data in the database systems.

**原文来源：** CSIT882_week11.mp4-transcript.txt · TXT第2行，行内字符3910–3965；搜索“avoid inconsistency of the data in the database systems.”

**全部来源：** CSIT882_week11.mp4-transcript.txt · TXT第2行，行内字符3910–3965；搜索“avoid inconsistency of the data in the database systems.”

### efficiency / accuracy

**稳定ID：** csit882-w11-0121

**类别：** reading

**中文解释：** 处理效率／准确性；教师比较速度、效率与数据正确性。

**简单英文（整理解释）：** How well processing uses time, and how correct the result is.

**必要说明：** 这里用来说明选择隔离级别时的考虑；不能由此认定低隔离级别总是合适或总是更快。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> the efficiency of the processes, not just the accuracy

**原文来源：** CSIT882_week11.mp4-transcript.txt · TXT第2行，行内字符4644–4697；搜索“the efficiency of the processes, not just the accuracy”

**全部来源：** CSIT882_week11.mp4-transcript.txt · TXT第2行，行内字符4644–4697；搜索“the efficiency of the processes, not just the accuracy”

### correspond to …

**稳定ID：** csit882-w11-0122

**类别：** reading

**中文解释：** 与……对应；不同isolation levels对应不同现象的控制情况。

**简单英文（整理解释）：** Match or relate to something.

**必要说明：** 动词correspond与形容词corresponding分开说明，但都记住完整搭配。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> different isolation levels corresponding to the solutions of different phenomenons.

**原文来源：** CSIT882_week11.mp4-transcript.txt · TXT第2行，行内字符3518–3600；搜索“different isolation levels corresponding to the solutions of different phenomenons.”

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第14页（幻灯片14）；CSIT882_week11.mp4-transcript.txt · TXT第2行，行内字符3518–3600；搜索“different isolation levels corresponding to the solutions of different phenomenons.”

### prevent … / avoid …

**稳定ID：** csit882-w11-0123

**类别：** reading

**中文解释：** 阻止……发生／避免……；本稿讨论控制读取现象。

**简单英文（整理解释）：** Stop something from happening, or keep it from happening.

**必要说明：** 在此防止的是课件列出的phenomena；不扩大到所有事务问题。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句（未核对音频；非课件正式定义）

> can prevent all these phenomenons.

**原文来源：** CSIT882_week11.mp4-transcript.txt · TXT第2行，行内字符7258–7291；搜索“can prevent all these phenomenons.”

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第13页（幻灯片13）；12TransactionProcessingInSQL_1.pdf · PDF第14页（幻灯片14）；CSIT882_week11.mp4-transcript.txt · TXT第2行，行内字符7258–7291；搜索“can prevent all these phenomenons.”

### increase … by … / decrease … by …

**稳定ID：** ed8b95be765d

**类别：** reading

**中文解释：** 增加……数额／减少……数额；本周预算增加1000，而不是变为1000。

**简单英文（整理解释）：** Change by the stated amount, not to that amount.

**必要说明：** 预算2000增加by 1000后为3000；by表示变化量，to通常表示最终值。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> SET BUDGET = BUDGET + 1000

**原文来源：** 12TransactionProcessingInSQL_1.pdf · PDF第3页（幻灯片3）

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第3页（幻灯片3）；12TransactionProcessingInSQL_1.pdf · PDF第4页（幻灯片4）

### budget

**稳定ID：** bf835d477e18

**类别：** reading

**中文解释：** 预算；本周SALES部门预算从2000更新到3000。

**简单英文（整理解释）：** The department budget used in the read examples.

**必要说明：** 这是普通阅读词义，不因出现在数据库列名中就变成专业术语。

**说明依据：** 按当前资料的实际义项整理；结构说明含必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文说明／代码（非正式定义）

> UPDATE DEPARTMENT SET BUDGET = BUDGET + 1000

**原文来源：** 12TransactionProcessingInSQL_1.pdf · PDF第3页（幻灯片3）

**全部来源：** 12TransactionProcessingInSQL_1.pdf · PDF第3页（幻灯片3）；12TransactionProcessingInSQL_1.pdf · PDF第4页（幻灯片4）
