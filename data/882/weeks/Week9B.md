# CSIT882 Week9B 词汇

由本周可读JSON自动生成。原文与整理说明分开；跨周条目保留全部来源和不同义项。原PDF及完整录音TXT不在网站中。

## 重要疑点与来源限制

### Serial schedule 的结果与一致性

**位置：** P1 PDF第17页／幻灯片17；T9B 第2行，搜索“then we won't get different results”

**说明：** PDF 明确保留 even if different results may be generated；TXT 却说 then we won't get different results。按 PDF 保留：不同串行顺序可以有不同结果，不能只因数值不同就判不一致；未核对原音频，不能确认口误还是转写错误。

### No impact 的范围含糊

**位置：** P1 PDF第8页／幻灯片8；第12、19–22页

**说明：** 原文 Transactions have no impact on processing of their operations and transaction do not communicate with each other 的第一部分没有清楚说明对象与范围。保留原文；不解释为“并发事务不会相互影响共享数据”，因为后面的冲突实例表明可能产生问题。

### Partially ordered 的说明不完整

**位置：** P1 PDF第6、8页／幻灯片6、8；T9B 第2行，搜索“why we say it's partially ordered”

**说明：** PDF 称事务为 partially ordered set。TXT 强调事务内顺序不可变，同时用事务之间调度可变化解释 partially ordered。资料未完整形式化定义 partial order；不从教师简化解释推导额外数学规则。

### 双会话实验缺少设置条件

**位置：** P1 PDF第3–5页／幻灯片3–5；T9B 第2行，搜索“by default, each transaction consists of one statement”

**说明：** 实验用 mysql 命令，但输出出现 SQL> 和 1 row created.；未说明完整系统、自动提交及隔离设置。TXT 另说默认每条语句一个事务且可修改设置，但没有连接到实验配置。只保留课件观察：插入后左20右19、COMMIT后双方20；不外推为所有 MySQL 会话必然如此。

### NP-complete 的简化／异常解释

**位置：** P1 PDF第18页／幻灯片18；T9B 第2行，搜索“MP complete problem”

**说明：** PDF 用 NP-complete，并把测试时间概括为事务数增加时指数增长；TXT 出现 MP complete、non polynomial complete 及“不能在 polynomial time 判断”等表达。資料未给严格完整定义，不把指数增长句当 NP-complete 的定义，也不据此断言所有算法都必须指数时间。P2 第5页 O(n²) 的 n 及算法假设也未说明。

### 冲突实例的转写数字

**位置：** P1 PDF第12、22页／幻灯片12、22；T9B 第2行，搜索“write. 990”及“may be 20”

**说明：** PDF 表格从 x=100 开始，写90、120，按图提交顺序最后显示90。TXT 出现 990 后自修为90，并另说最终值 may be 20。正式数值依据 PDF；无法仅凭 TXT 判断原音频。表格用于本节演示，不当作所有系统物理存储过程。

### 第二份 PDF 没有对应录音补充

**位置：** P2 第1–16页；T9B 全文

**说明：** T9B 内容从 transaction 实验到 conflict serializability，结尾结束并发事务讲解；未发现 SGT、2PL、TO 部分。第二份 PDF 仍完整收录，但仅按课件解释，未标成教师已讲解。【增量更新】Week10新提供的T10已补充SGT、2PL、TO讲解；原缺口仍仅针对Week9B的T9B，历史来源不改写。

### 图示代码及术语规范化

**位置：** P2 PDF第14–15页／幻灯片14–15；T9B 第2行

**说明：** P2 p14 写 write(x,a-10)，p15 写 write(x,x-10)，资料没有解释变化原因，保留两种写法。TXT 多次把 read/write、SKILL、row、view serializable、conflict serializable 写成异常词形；词表以 PDF 规范术语为主，教师引文保留转写字词。

### 2PL 与 TO 的范围

**位置：** P2 PDF第7–15页／幻灯片7–15

**说明：** 2PL 原则不等于开始前一次性取完所有锁；p8 的操作之间仍申请锁。未给锁类型、2PL 变体、死锁预防具体算法、timeout 后完整处理及 TO 完整判断规则，词表不补造。【增量更新】Week10的TXT补充了锁种类的教师说明和timeout后中止／重启的例子；PDF本身仍未给完整规则，疑点见W10-I03–I05。

### 周次证据

**位置：** 两份 PDF 标题、T9B 开场及全文

**说明：** 两份 PDF 明确课程 CSIT882 与主题，但正文没有教学周次；TXT 也没有明确 Week9B 标签。Week9B 来自用户指定，不能用文件名独立证明。PDF 页序与有编号的幻灯片页码一致；标题页按 PDF 第1页定位。

## 专业英语

### COUNT(cnum) / COUNT(*)

**稳定ID：** f1408dfb9354

**类别：** technical

**中文解释：** 本例中，前者统计非 NULL 的课程编号；后者统计行。没有课程的系也被 LEFT OUTER JOIN 保留一行，不能把这一行算成一门课程。

**简单英文（整理解释）：** COUNT(cnum) counts non-NULL course numbers; COUNT(*) counts rows, including a row kept for a department with no course.

**必要说明：** 教师补充：COUNT(cnum) 统计非 NULL 值，COUNT(*) 统计行。无课程部门保留的一行不应算成一门课程。已重新核对T9第47行；未核对音频。

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> Also note, that a column cnum in a relational table COURSE is used for counting the values in each group, do you remember why it is so ?

**原文来源：** Views.pdf · PDF第21页（幻灯片21）

**原文短句／描述：** 教师转写原句

> it counts not null values

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第47行

**补充语境：** 课件示例：统计 SKILL 表的行数；初始两边都显示 19。

**补充说明：** COUNT(*) 的完整语法不是本节新定义；此处解释代码的作用。

**补充来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第3页（幻灯片3）；10IntroductionToTransactionProcessing_1.pdf · PDF第4页（幻灯片4）；10IntroductionToTransactionProcessing_1.pdf · PDF第5页（幻灯片5）

**全部来源：** Views.pdf · PDF第21页（幻灯片21）；CSIT882 Week9 LectA-transcript.txt · TXT第47行；10IntroductionToTransactionProcessing_1.pdf · PDF第3页（幻灯片3）；10IntroductionToTransactionProcessing_1.pdf · PDF第4页（幻灯片4）；10IntroductionToTransactionProcessing_1.pdf · PDF第5页（幻灯片5）

### relational table

**稳定ID：** 48ff937dd1af

**类别：** technical

**中文解释：** 关系表；本节示例以命名的列及数据行构成表。当前资料没有给出它的完整正式定义。

**简单英文（整理解释）：** A table with rows of data and named columns, in these examples.

**必要说明：**

**说明依据：** 辅助释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> same relational table

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**补充语境：** 关系表；由行和列组成的表，本节示例为 SKILL。

**补充说明：** 必要基础释义；不是本周课件提供的正式定义。

**补充来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第3页（幻灯片3）；10IntroductionToTransactionProcessing_1.pdf · PDF第4页（幻灯片4）；CSIT882_week9B--transcript.txt · TXT第2行

**全部来源：** Views.pdf · PDF第4页（幻灯片4）；Views.pdf · PDF第19页（幻灯片19）；Advanced DDL and DML statements.pdf · PDF第7页（幻灯片7）；10IntroductionToTransactionProcessing_1.pdf · PDF第3页（幻灯片3）；10IntroductionToTransactionProcessing_1.pdf · PDF第4页（幻灯片4）；CSIT882_week9B--transcript.txt · TXT第2行

### transaction / database transaction

**稳定ID：** 9e9bc685aebd

**类别：** technical

**中文解释：** 事务：数据库数据项上部分有序的读写操作集合。可以是一条或多条语句、程序的一部分或整个程序。

**简单英文（整理解释）：** A partially ordered set of read and write operations on database items. It may be one statement, several statements, part of a program, or a whole program.

**必要说明：** 保留 partially ordered；资料未给出 partial order 的完整数学定义。TXT 对事务内顺序的解释见疑点 I03。

**说明依据：** 课件明确定义

**课件原文定义：** 课件原文定义

> A partially ordered set of read, write operations on the database items is called as a transaction

**定义来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第6页（幻灯片6）

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> Suppose we have concurrent transactions, T1, T2.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符355–402；搜索“Suppose we have concurrent transactions, T1, T2.”

**补充语境：** Week10教师语境：事务；本讲用T1、T2、T3表示不同事务。

**补充说明：** 本讲沿用既有概念；正式定义保留此前指定P1第6页原文。

**补充英文：** A transaction contains read and write operations on database items.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）；11IntroductionToTransactionProcessing_2.pdf · PDF第4页（幻灯片4）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符355–402；搜索“Suppose we have concurrent transactions, T1, T2.”

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第6页（幻灯片6）；11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）；11IntroductionToTransactionProcessing_2.pdf · PDF第4页（幻灯片4）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符355–402；搜索“Suppose we have concurrent transactions, T1, T2.”

### transaction processing

**稳定ID：** 4eb28407955e

**类别：** technical

**中文解释：** 事务处理：执行数据库事务中的操作。

**简单英文（整理解释）：** Processing the operations in database transactions.

**必要说明：** 标题及原则中的概念；

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Introduction to Transaction Processing (Database transactions, principles and correctness) CSIT882: Data Management Systems

**原文来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第1页（幻灯片1）

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> introduce more about the transaction processing

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符34–80；搜索“introduce more about the transaction processing”

**补充语境：** Week10教师语境：事务处理；本讲继续讨论并发事务的处理规则。

**补充说明：** 开场回顾，不把异常转写词当作新的专业术语。

**补充英文：** Rules and methods for processing transactions.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第1页（幻灯片1）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符34–80；搜索“introduce more about the transaction processing”

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第1页（幻灯片1）；10IntroductionToTransactionProcessing_1.pdf · PDF第8页（幻灯片8）；10IntroductionToTransactionProcessing_1.pdf · PDF第9页（幻灯片9）；11IntroductionToTransactionProcessing_2.pdf · PDF第1页（幻灯片1）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符34–80；搜索“introduce more about the transaction processing”

### database system / database management system

**稳定ID：** 2b3833646509

**类别：** technical

**中文解释：** 数据库系统／数据库管理系统；本节讨论通过该系统处理事务与存储更新。

**简单英文（整理解释）：** The system used to store data and process the database operations discussed here.

**必要说明：** 必要基础释义，不补入未说明的组件或产品实现。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> database management system

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第1页（幻灯片1）；10IntroductionToTransactionProcessing_1.pdf · PDF第8页（幻灯片8）；CSIT882_week9B--transcript.txt · TXT第2行

### program

**稳定ID：** bc9cd657db6c

**类别：** technical

**中文解释：** 程序；本节把程序处理与数据库读写操作联系起来。

**简单英文（整理解释）：** Instructions processed by the database system in this description.

**必要说明：** whole program、part of a program 与单条／多条 statements 都是事务可能范围。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> A transaction might be a whole program, or a part of a program, or several statements, or a single statement.

**原文来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第6页（幻灯片6）

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第6页（幻灯片6）；10IntroductionToTransactionProcessing_1.pdf · PDF第8页（幻灯片8）

### read operation / read(x)

**稳定ID：** 564bdc38d46b

**类别：** technical

**中文解释：** 读操作：读取数据项的值；read(x) 读取 x。教师用 SELECT 说明数据库读取。

**简单英文（整理解释）：** Get the value of a data item. The teacher links reading data to SELECT.

**必要说明：** read(x) 是课件操作记号，不是要求在 MySQL 中直接执行的 SQL。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> Read means we use a select a statement.

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> Read operation with the X in transaction T1.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符473–516；搜索“Read operation with the X in transaction T1.”

**补充语境：** Week10教师语境：读操作；读取数据项x，图中将值保存到变量v或w。

**补充说明：** TXT的read/reed/red等词形混杂；代码与正式拼写依据PDF。

**补充英文：** Read the value of a data item.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）；11IntroductionToTransactionProcessing_2.pdf · PDF第4页（幻灯片4）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符473–516；搜索“Read operation with the X in transaction T1.”

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第6页（幻灯片6）；10IntroductionToTransactionProcessing_1.pdf · PDF第8页（幻灯片8）；10IntroductionToTransactionProcessing_1.pdf · PDF第14页（幻灯片14）；CSIT882_week9B--transcript.txt · TXT第2行；11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）；11IntroductionToTransactionProcessing_2.pdf · PDF第4页（幻灯片4）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符473–516；搜索“Read operation with the X in transaction T1.”

### write operation / write(x, value)

**稳定ID：** be3d5c6de2e2

**类别：** technical

**中文解释：** 写操作：把值写入数据项；教师用 INSERT、UPDATE、DELETE 说明数据库写入。

**简单英文（整理解释）：** Put a value into a data item. The teacher links writing data to INSERT, UPDATE, and DELETE.

**必要说明：** write(x,v-10) 表示把 v-10 写入 x；不是直接可运行的 SQL。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> Write means we use a delete, update, insert statement.

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> operation right data X in T1.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符791–819；搜索“operation right data X in T1.”

**补充语境：** 示例符号：v、w 先各读到 100；随后各用该旧值计算 90、120。课件提交次序最后显示 90。

**补充说明：** 这是课件演示，不把提交时覆盖的表格简化为所有系统通用的物理写入顺序；TXT 数字疑点见 I06。

**补充来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第12页（幻灯片12）；10IntroductionToTransactionProcessing_1.pdf · PDF第22页（幻灯片22）

**补充语境：** TO 图例两种写法：p14 用 a-10，p15 用 x-10；不能默默把原代码统一改写。

**补充说明：** 资料没有解释写法变化原因；保留原文并记录 I08。 Week9B所给TXT无该部分讲解（历史来源范围）。

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第14页（幻灯片14）；11IntroductionToTransactionProcessing_2.pdf · PDF第15页（幻灯片15）

**补充语境：** Week10教师语境：写操作；向x写入指定值。

**补充说明：** TXT反复用right误写write；保留引文，以课件代码核对。

**补充英文：** Write the stated value to a data item.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）；11IntroductionToTransactionProcessing_2.pdf · PDF第4页（幻灯片4）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符791–819；搜索“operation right data X in T1.”

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第6页（幻灯片6）；10IntroductionToTransactionProcessing_1.pdf · PDF第12页（幻灯片12）；10IntroductionToTransactionProcessing_1.pdf · PDF第19页（幻灯片19）；CSIT882_week9B--transcript.txt · TXT第2行；10IntroductionToTransactionProcessing_1.pdf · PDF第22页（幻灯片22）；11IntroductionToTransactionProcessing_2.pdf · PDF第14页（幻灯片14）；11IntroductionToTransactionProcessing_2.pdf · PDF第15页（幻灯片15）；11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）；11IntroductionToTransactionProcessing_2.pdf · PDF第4页（幻灯片4）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符791–819；搜索“operation right data X in T1.”

### data item / database item

**稳定ID：** ab72de563312

**类别：** technical

**中文解释：** 数据项：事务可以读取或写入的一份数据；例子使用 x、y、z。

**简单英文（整理解释）：** A piece of data that a transaction can read or write.

**必要说明：** 资料未单独正式定义数据项的最小大小；不要规定它只能是表、行或列。 Week9B所给TXT无该部分讲解（历史来源范围）。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> access the same data

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符13665–13684；搜索“access the same data”

**补充语境：** Week10教师语境：数据项；本讲用x、y、u、v表示读写或加锁的对象。

**补充说明：** 资料未给出数据项最小粒度；不能推成只能是一行或一列。

**补充英文：** An item of data used by a read, write, or lock operation.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）；11IntroductionToTransactionProcessing_2.pdf · PDF第8页（幻灯片8）；11IntroductionToTransactionProcessing_2.pdf · PDF第14页（幻灯片14）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符13665–13684；搜索“access the same data”

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第6页（幻灯片6）；10IntroductionToTransactionProcessing_1.pdf · PDF第8页（幻灯片8）；11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）；11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）；11IntroductionToTransactionProcessing_2.pdf · PDF第8页（幻灯片8）；11IntroductionToTransactionProcessing_2.pdf · PDF第14页（幻灯片14）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符13665–13684；搜索“access the same data”

### partially ordered set

**稳定ID：** 4f80f6e3a7c1

**类别：** technical

**中文解释：** 部分有序集：课件 transaction 定义中的原词。数学定义未在资料中完整给出。

**简单英文（整理解释）：** The wording used for the set of transaction operations. The materials do not give a full mathematical definition.

**必要说明：** 只保留资料用法，不把它解释为“事务内顺序可以任意改变”；教师强调保留事务内顺序。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> A partially ordered set of read, write operations on the database items is called as a transaction Transaction ?

**原文来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第6页（幻灯片6）

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第6页（幻灯片6）；10IntroductionToTransactionProcessing_1.pdf · PDF第8页（幻灯片8）

### statement / SQL statement

**稳定ID：** 3f93bb4e8427

**类别：** technical

**中文解释：** 语句／SQL 语句；事务可包含单条或多条语句。

**简单英文（整理解释）：** One database instruction, such as SELECT or INSERT.

**必要说明：** 不能把 transaction 固定等同于一条语句。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> just a single statement

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第3页（幻灯片3）；10IntroductionToTransactionProcessing_1.pdf · PDF第4页（幻灯片4）；10IntroductionToTransactionProcessing_1.pdf · PDF第6页（幻灯片6）；CSIT882_week9B--transcript.txt · TXT第2行

### INSERT INTO … VALUES (…)

**稳定ID：** dde566a10bbf

**类别：** technical

**中文解释：** 课件插入示例：向 SKILL 新增一行；插入方读到 20，另一方在该例中仍读到 19。

**简单英文（整理解释）：** Add the value 'singing' as a new row in the example table.

**必要说明：** singing 是示例数据，不是课程专业术语；可见性条件未完整说明，见 I04。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第4页（幻灯片4）

### mysql -u csit882 -p

**稳定ID：** da8eacdabf1c

**类别：** technical

**中文解释：** 两侧示例中的数据库连接命令；-u 指定用户，-p 请求输入密码。

**简单英文（整理解释）：** The command shown for two users to connect to the example database.

**必要说明：** 选项含义属于必要代码基础释义；本页没有展开正式说明。课件显示的长短横线不宜直接复制执行。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第3页（幻灯片3）

### row / record

**稳定ID：** 0a56d62cdff7

**类别：** technical

**中文解释：** 行／记录；教师用 rows 和 records 描述 SKILL 表中的数据。

**简单英文（整理解释）：** One entry in a relational table in the teacher's example.

**必要说明：** TXT 中 role、Rose、scale 等异常词形不作为正式术语；以 PDF 的 row、SKILL 为准。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> there are 19. rows

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**补充语境：** 行／记录：课件示例中的一条表数据；TXT用rows与records说明SKILL表的数据。

**补充说明：**

**补充来源：** Views.pdf · PDF第4页（幻灯片4）；Views.pdf · PDF第19页（幻灯片19）；Advanced DDL and DML statements.pdf · PDF第7页（幻灯片7）

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第4页（幻灯片4）；CSIT882_week9B--transcript.txt · TXT第2行；Views.pdf · PDF第4页（幻灯片4）；Views.pdf · PDF第19页（幻灯片19）；Advanced DDL and DML statements.pdf · PDF第7页（幻灯片7）

### function / procedure

**稳定ID：** aa0133d0a76a

**类别：** technical

**中文解释：** 函数／过程；教师提到事务可以放在这些程序单元中。

**简单英文（整理解释）：** Program units mentioned by the teacher as possible places for transactions.

**必要说明：** 教师只提及，未正式定义区别或提供语法；不补入其他内容。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> use the functions or procedures

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**全部来源：** CSIT882_week9B--transcript.txt · TXT第2行

### long transaction

**稳定ID：** 9b493f688a6e

**类别：** technical

**中文解释：** 长事务：教师区分“操作多”和“处理时间长”。操作数量有限也可能处理很久。

**简单英文（整理解释）：** A transaction with many operations or one that takes a long time to process.

**必要说明：** 银行月末利息例子是补充理解；不把长事务等同于操作数量很多。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> sometimes the transaction could be long

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**全部来源：** CSIT882_week9B--transcript.txt · TXT第2行

### concurrent transactions / concurrent execution

**稳定ID：** af93076c06f2

**类别：** technical

**中文解释：** 并发事务／并发执行：处理时间有重叠，操作可交错。

**简单英文（整理解释）：** Transactions whose processing overlaps in time; their operations can be interleaved.

**必要说明：** 不要求所有操作恰好同一瞬间发生；教师以一个未结束、另一个已开始说明。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> one transaction hasn't been finished, the other transaction already start.

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> Suppose we have concurrent transactions, T1, T2.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符355–402；搜索“Suppose we have concurrent transactions, T1, T2.”

**补充语境：** Week10教师语境：并发事务／并发执行；不同事务的操作交错出现。

**补充说明：** 图中的先后指操作先后，不是事务编号先后。

**补充英文：** Operations from different transactions take place in an overlapping period.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）；11IntroductionToTransactionProcessing_2.pdf · PDF第4页（幻灯片4）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符355–402；搜索“Suppose we have concurrent transactions, T1, T2.”

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第8页（幻灯片8）；10IntroductionToTransactionProcessing_1.pdf · PDF第13页（幻灯片13）；10IntroductionToTransactionProcessing_1.pdf · PDF第16页（幻灯片16）；CSIT882_week9B--transcript.txt · TXT第2行；11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）；11IntroductionToTransactionProcessing_2.pdf · PDF第4页（幻灯片4）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符355–402；搜索“Suppose we have concurrent transactions, T1, T2.”

### interleaving / interleaved operations

**稳定ID：** 2c9a5d46edab

**类别：** technical

**中文解释：** 交错：不同事务的操作穿插执行。

**简单英文（整理解释）：** Operations from different transactions appear between one another.

**必要说明：** 不改变各事务自身操作顺序，见 schedule 定义。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第8页（幻灯片8）；10IntroductionToTransactionProcessing_1.pdf · PDF第16页（幻灯片16）

### commit / COMMIT

**稳定ID：** d1a0fdf7c110

**类别：** technical

**中文解释：** 提交：成功结束事务，并将其更改永久记录；课件 COMMIT 示例之后两方都读到 20。

**简单英文（整理解释）：** Finish a transaction successfully and record its changes permanently, in the materials' explanation.

**必要说明：** 与 abort/rollback 区分；不据本例推出所有隔离设置的读取规则。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> Commit command means the transaction finished successfully

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> When transaction tissue process commits, anything locked in transaction tissue will be released

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符8962–9056；搜索“When transaction tissue process commits, anything locked in transaction tissue will be released”

**补充语境：** Week10教师语境：提交；教师说明其例子中的事务提交后，写入持久保存，持有的锁释放。

**补充说明：** 不要把提交时释放剩余锁误写成所有2PL都只能到提交才解锁。

**补充英文：** Commit keeps the transaction’s writes. In this explanation, its remaining locks are released.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第9页（幻灯片9）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符8962–9056；搜索“When transaction tissue process commits, anything locked in transaction tissue will be released”

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第5页（幻灯片5）；10IntroductionToTransactionProcessing_1.pdf · PDF第9页（幻灯片9）；10IntroductionToTransactionProcessing_1.pdf · PDF第10页（幻灯片10）；CSIT882_week9B--transcript.txt · TXT第2行；11IntroductionToTransactionProcessing_2.pdf · PDF第9页（幻灯片9）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符8962–9056；搜索“When transaction tissue process commits, anything locked in transaction tissue will be released”

### abort / rollback

**稳定ID：** e6014e9a5df2

**类别：** technical

**中文解释：** 中止／回滚：不保留该事务的更新，回到更新前状态。课件以 abort (rollback) 表示终止方式。

**简单英文（整理解释）：** End the transaction without keeping its updates; return to the state before its updates, in the teacher's explanation.

**必要说明：** 保留此节资料的用法；不扩展部分回滚、SAVEPOINT 等未出现内容。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> the rollback and in another meaning is abort.

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> it's rolled back to the beginning status

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符16308–16347；搜索“it's rolled back to the beginning status”

**补充语境：** Week10教师语境：中止／回滚；教师在失败例子中说T1中止并回到先前状态。

**补充说明：** abort和rollback不是两个完全同义动作；这里一起描述失败处理。

**补充英文：** Abort stops the transaction. Rollback removes its failed update in this example.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第15页（幻灯片15）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符16308–16347；搜索“it's rolled back to the beginning status”

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第9页（幻灯片9）；CSIT882_week9B--transcript.txt · TXT第2行；11IntroductionToTransactionProcessing_2.pdf · PDF第15页（幻灯片15）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符16308–16347；搜索“it's rolled back to the beginning status”

**中文解释：** 回滚语句：在本节用于撤销 DML 操作。完整事务条件以后再依据课程资料学习。

**简单英文（整理解释）：** A statement used here to reverse a DML action.

**必要说明：**

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> its actions can be reversed with ROLLBACK statement

**原文来源：** Advanced DDL and DML statements.pdf · PDF第9页（幻灯片9）

**全部来源：** Advanced DDL and DML statements.pdf · PDF第9页（幻灯片9）

### consistent database state

**稳定ID：** 829d2601f169

**类别：** technical

**中文解释：** 一致的数据库状态：课件要求事务到达一致状态，并在结束时留下同样一致的状态。

**简单英文（整理解释）：** A database state that a transaction must start with and leave, according to the stated principle.

**必要说明：** 资料没有完整列出判断一致性的全部约束；一致不表示数据值必须不变，也不表示所有 serial 顺序结果相同。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件英文原文原则／描述

> Each transaction arrives at a consistent database state and must leave a database in a consistent state as well

**原文来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第9页（幻灯片9）

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第9页（幻灯片9）；10IntroductionToTransactionProcessing_1.pdf · PDF第10页（幻灯片10）；10IntroductionToTransactionProcessing_1.pdf · PDF第17页（幻灯片17）

### inconsistent state

**稳定ID：** 7cf70a7e76fd

**类别：** technical

**中文解释：** 不一致状态；课件用于讨论执行正确性。

**简单英文（整理解释）：** A state described as not consistent in the materials.

**必要说明：** 资料未提供完整形式化定义；不能仅凭两个执行结果不同就一概判断不一致，见 I01。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> data items are consistent or inconsistent.

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第17页（幻灯片17）；CSIT882_week9B--transcript.txt · TXT第2行

### active transaction

**稳定ID：** 91529b468946

**类别：** technical

**中文解释：** 活动事务：状态图开始处理中的节点，可进入 Partially committed 或 Failed。

**简单英文（整理解释）：** The transaction state shown before it partly completes or fails.

**必要说明：** 图中标签，无单独正式定义。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Each transaction terminates by either commit or abort (rollback) operation Each transaction arrives at a consistent database state and must leave a database in a consistent state as well Principles of transaction processing Active transaction Partially committed Failed Committed Aborted 9

**原文来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第9页（幻灯片9）

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第9页（幻灯片9）

### partially committed

**稳定ID：** 0901664b7b69

**类别：** technical

**中文解释：** 部分提交状态：操作已完成，但更新尚未永久记录；仍可能 Failed，也可能 Committed。

**简单英文（整理解释）：** The operations have finished, but the changes are not yet permanently recorded, in the teacher's explanation.

**必要说明：** 不能理解为只提交一部分操作；PDF 只有图标签，含义由教师补充。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> the transaction operation finished

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第9页（幻灯片9）；CSIT882_week9B--transcript.txt · TXT第2行

### committed

**稳定ID：** 82a3e238cf84

**类别：** technical

**中文解释：** 已提交：状态图中的成功终止节点；与“部分提交”不同。

**简单英文（整理解释）：** The successful end state shown after Partially committed.

**必要说明：** 持久记录条件见 Durability。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Each transaction terminates by either commit or abort (rollback) operation Each transaction arrives at a consistent database state and must leave a database in a consistent state as well Principles of transaction processing Active transaction Partially committed Failed Committed Aborted 9

**原文来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第9页（幻灯片9）

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第9页（幻灯片9）；10IntroductionToTransactionProcessing_1.pdf · PDF第10页（幻灯片10）

### failed

**稳定ID：** d1564d87a965

**类别：** technical

**中文解释：** 失败状态：图中 Active transaction 或 Partially committed 可进入 Failed，再进入 Aborted。

**简单英文（整理解释）：** The state reached when the transaction cannot finish successfully.

**必要说明：** 图显示的路径不等于所有系统的全部状态转换。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Each transaction terminates by either commit or abort (rollback) operation Each transaction arrives at a consistent database state and must leave a database in a consistent state as well Principles of transaction processing Active transaction Partially committed Failed Committed Aborted 9

**原文来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第9页（幻灯片9）

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第9页（幻灯片9）

### aborted

**稳定ID：** 0769aefdd1d5

**类别：** technical

**中文解释：** 已中止：课件图中 Failed 后的节点；教师联系到回滚。

**简单英文（整理解释）：** The end state shown after Failed; the teacher connects it to rollback.

**必要说明：** 与 Failed 区分，不能把两者当成同一个图标签。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> it will roll back the transaction

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第9页（幻灯片9）；CSIT882_week9B--transcript.txt · TXT第2行

### system abort

**稳定ID：** d3328c9b70f4

**类别：** technical

**中文解释：** 系统中止：教师用电源、硬盘等故障说明事务可能失败及随后回滚。

**简单英文（整理解释）：** An abort associated with a system failure in the teacher's examples.

**必要说明：** 教师例子，未给正式分类或完整恢复算法。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> system abort

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**全部来源：** CSIT882_week9B--transcript.txt · TXT第2行

### variable

**稳定ID：** 8ac6b0e9c7aa

**类别：** technical

**中文解释：** 变量；v、w 等保存读取到的值，与数据库项 x、y 区分。

**简单英文（整理解释）：** A name holding a value read or used in the examples.

**必要说明：** P1 p12 中 v 和 w 都先读到 100，再各自计算；字母本身是示例符号。 本次 TXT 无该部分讲解。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第12页（幻灯片12）；10IntroductionToTransactionProcessing_1.pdf · PDF第19页（幻灯片19）；10IntroductionToTransactionProcessing_1.pdf · PDF第21页（幻灯片21）；11IntroductionToTransactionProcessing_2.pdf · PDF第8页（幻灯片8）；11IntroductionToTransactionProcessing_2.pdf · PDF第14页（幻灯片14）

### hard disk drive / SSD drive

**稳定ID：** fcf5d4a5783b

**类别：** technical

**中文解释：** 硬盘驱动器／SSD存储设备；教师将其故障作为事务失败的例子。资料未解释SSD缩写全称或设备原理。

**简单英文（整理解释）：** Storage devices mentioned as possible sources of failure.

**必要说明：** 未给出设备的正式定义；只解释本段背景用词。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> some bugs

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**原文短句／描述：** 教师转写定位短句（未核对音频）

> power off

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**原文短句／描述：** 教师转写定位短句（未核对音频）

> hard disk drive

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**原文短句／描述：** 教师转写定位短句（未核对音频）

> SSD drive

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**全部来源：** CSIT882_week9B--transcript.txt · TXT第2行

### ACID

**稳定ID：** 8859e9c5c011

**类别：** technical

**中文解释：** 事务四项基本性质的缩写：Atomicity、Consistency、Isolation、Durability。

**简单英文（整理解释）：** The name for four basic transaction properties: Atomicity, Consistency, Isolation, and Durability.

**必要说明：** 四项必须分别理解，不能用其中一项代替全部。

**说明依据：** 课件明确定义

**课件原文定义：** 课件原文定义

> Basic properties for all transactions are called ACID.

**定义来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第10页（幻灯片10）

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第10页（幻灯片10）

### Atomicity

**稳定ID：** d92b7fda8014

**类别：** technical

**中文解释：** 原子性：事务是不可分的单位，必须整体处理，或完全不处理。

**简单英文（整理解释）：** A transaction is one unit that cannot be divided. All of it must be processed, or none of it.

**必要说明：** 保留 entirely or not at all；资料原文见原文区。

**说明依据：** 课件明确定义

**课件原文定义：** 课件原文定义

> Atomicity: A transaction unit is indivisible. It must be processed entirely or not at all.

**定义来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第10页（幻灯片10）

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第10页（幻灯片10）

### Consistency

**稳定ID：** f4e628b50b7d

**类别：** technical

**中文解释：** 一致性：事务必须把数据库从一个一致状态变为另一个一致状态。

**简单英文（整理解释）：** A transaction must move the database from one consistent state to another consistent state.

**必要说明：** 不等于数据值不变；不等于不同 serial 顺序必然产生相同数值。

**说明依据：** 课件明确定义

**课件原文定义：** 课件原文定义

> Consistency: A transaction must transform the database from one consistent state to another consistent state.

**定义来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第10页（幻灯片10）

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第10页（幻灯片10）

### Isolation

**稳定ID：** aa1812519f4b

**类别：** technical

**中文解释：** 隔离性：每个事务必须独立处理。

**简单英文（整理解释）：** Each transaction must be processed independently.

**必要说明：** 本页的简短正式表述；资料未展开 isolation levels，不能补造等级规则。

**说明依据：** 课件明确定义

**课件原文定义：** 课件原文定义

> Isolation: Each transaction must be processed independently.

**定义来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第10页（幻灯片10）

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第10页（幻灯片10）

### Durability

**稳定ID：** 4dc474bc4aa0

**类别：** technical

**中文解释：** 持久性：已提交事务影响的数据必须在数据库中永久记录。

**简单英文（整理解释）：** Data changed by a committed transaction must be recorded permanently in the database.

**必要说明：** 限定 committed transaction；不是所有尚未提交的更新都必须永久保留。

**说明依据：** 课件明确定义

**课件原文定义：** 课件原文定义

> Durability: The data affected by a committed transaction must be permanently recorded in the database.

**定义来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第10页（幻灯片10）

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第10页（幻灯片10）

### schedule

**稳定ID：** a53eff598a73

**类别：** technical

**中文解释：** 调度：执行事务时保留每个事务内部的操作顺序。

**简单英文（整理解释）：** Processing of transactions that keeps the operation order inside each transaction.

**必要说明：** 正式定义使用 concurrent transactions；不能任意改变单个事务内部的 read → write → commit。

**说明依据：** 课件明确定义

**课件原文定义：** 课件原文定义

> A schedule is a processing of concurrent transactions that preserves the order of the operations in each transaction.

**定义来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第14页（幻灯片14）

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第14页（幻灯片14）

### serial schedule

**稳定ID：** fe1e0046927a

**类别：** technical

**中文解释：** 串行调度：事务一个接一个地执行，不交错。

**简单英文（整理解释）：** A schedule in which transactions run one after another, without interleaving.

**必要说明：** 原文称 a set of concurrent transactions，但其执行方式为 consecutively；与实际交错执行区分。

**说明依据：** 课件明确定义

**课件原文定义：** 课件原文定义

> A serial schedule consists of a set of concurrent transactions, that processed their operation consecutively

**定义来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第15页（幻灯片15）

**原文短句／描述：** 课件英文原文原则／描述

> A serial schedule never leaves the database in an inconsistent state even if different results may be generated.

**原文来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第17页（幻灯片17）

**补充语境：** 即使可能产生不同结果；课件说 serial schedule 仍不会留下不一致状态。

**补充说明：** 不能删除 even if 后的例外；与教师“不会得到不同结果”冲突见 I01。

**补充来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第17页（幻灯片17）

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第15页（幻灯片15）；10IntroductionToTransactionProcessing_1.pdf · PDF第17页（幻灯片17）

### nonserial schedule

**稳定ID：** a9d279e7eb94

**类别：** technical

**中文解释：** 非串行调度：不同事务的操作交错执行。

**简单英文（整理解释）：** A schedule in which operations of different transactions are interleaved.

**必要说明：** 不意味着每一对事务都必须交错；示例 T1 完成后 T2/T3 才交错。

**说明依据：** 课件明确定义

**课件原文定义：** 课件原文定义

> A nonserial schedule consists of a set of concurrent transactions that are interleaved.

**定义来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第16页（幻灯片16）

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第16页（幻灯片16）

### serializability

**稳定ID：** cd5a9c7f3e8f

**类别：** technical

**中文解释：** 可串行化性：讨论非串行调度是否在规定条件下对应某个串行调度。

**简单英文（整理解释）：** The topic of checking whether a nonserial schedule can match a serial schedule under stated conditions.

**必要说明：** 标题概念，具体区分 view serializable 与 conflict serializable；不是“已经串行执行”。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Serializability 17

**原文来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第17页（幻灯片17）

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> how to determine the transaction can be sterillizable

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符169–221；搜索“how to determine the transaction can be sterillizable”

**补充语境：** Week10教师语境：可串行化；本讲开场回顾，并转向冲突可串行化的图判据。

**补充说明：** 规范术语及原定义沿用此前指定PDF；TXT反复出现sterillizable等异常词。开场real sterilizable的原词无法确认。

**补充英文：** An execution can match a serial execution under the stated test.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符169–221；搜索“how to determine the transaction can be sterillizable”

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第17页（幻灯片17）；10IntroductionToTransactionProcessing_1.pdf · PDF第20页（幻灯片20）；11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符169–221；搜索“how to determine the transaction can be sterillizable”

### view serializable

**稳定ID：** 062c4737667a

**类别：** technical

**中文解释：** 视图可串行化：按本课件定义，非串行调度与某个串行调度结果相同，且每个事务读取相同数据项。

**简单英文（整理解释）：** A nonserial schedule whose transactions give the same results as a certain serial schedule, and each transaction reads the same data items, in the slide definition.

**必要说明：** 保留 and 后的读取条件及 a certain；不是要求与所有 serial 顺序相同。资料未展开更完整的形式化判据。

**说明依据：** 课件明确定义

**课件原文定义：** 课件原文定义

> In a nonserial schedule if concurrent transactions produce the same results as in a certain serial schedule, and each transaction reads the same data items then the nonserial schedule is called view serializable.

**定义来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第17页（幻灯片17）

**补充语境：** 每个事务读取与被比较的串行调度中相同的数据项。

**补充说明：** 课件原文是 data items；不静默替换成未给出的完整形式化规则。

**补充来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第17页（幻灯片17）

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第17页（幻灯片17）

### correctness / correctness condition

**稳定ID：** cba5de49fabd

**类别：** technical

**中文解释：** 正确性／正确性条件；本节问如何判定并发事务执行正确。

**简单英文（整理解释）：** Whether the concurrent execution is correct, and what condition is used to judge it.

**必要说明：** P1 p13 是问题，不是完整定义；后续两种 serializability 给出条件。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Correctness condition 13

**原文来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第13页（幻灯片13）

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第13页（幻灯片13）；10IntroductionToTransactionProcessing_1.pdf · PDF第17页（幻灯片17）；10IntroductionToTransactionProcessing_1.pdf · PDF第20页（幻灯片20）

### NP-complete

**稳定ID：** 59db5ffd529f

**类别：** technical

**中文解释：** NP 完全：课件用于标记 view serializability 检测的复杂性。资料未给出严格完整定义。

**简单英文（整理解释）：** The complexity label used for testing view serializability. The slides do not give its full formal definition.

**必要说明：** TXT 的 MP complete、non polynomial complete 疑似转写／解释异常；不作为可靠展开式，见 I05。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> MP complete problem

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第18页（幻灯片18）；CSIT882_week9B--transcript.txt · TXT第2行

### exponential growth / exponential time

**稳定ID：** 81750e265f3f

**类别：** technical

**中文解释：** 指数增长／指数时间；教师用 2 的 n 次方、3 的 n 次方说明增长。

**简单英文（整理解释）：** Growth described with powers such as 2 to the n in the teacher's explanation.

**必要说明：** 课件将检测难度概括为事务数增加时指数增长；不作为 NP-complete 的严格定义或所有算法的必然下界。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> 2 to the end, 3 to the end.

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第18页（幻灯片18）；CSIT882_week9B--transcript.txt · TXT第2行

### polynomial / polynomial time

**稳定ID：** 8ce602bdc14e

**类别：** technical

**中文解释：** 多项式／多项式时间：教师与指数增长作对比。

**简单英文（整理解释）：** The teacher contrasts this type of calculation with exponential growth.

**必要说明：** 转写公式残缺；不猜原公式，不把“通常快”当作所有输入规模下的绝对保证。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> polynomial

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**原文短句／描述：** 教师转写定位短句（未核对音频）

> It's quite efficient.

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**全部来源：** CSIT882_week9B--transcript.txt · TXT第2行

### exhaustive search

**稳定ID：** faed66b3e950

**类别：** technical

**中文解释：** 穷举搜索：尝试可能情况寻找答案；教师将其与规模增大、检测费时联系。

**简单英文（整理解释）：** Try the possibilities to find an answer, in the teacher's description.

**必要说明：** 该规范词形根据明显上下文整理；原转写用词异常，不是 PDF 正式术语或算法定义。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> an exhaust the search

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**全部来源：** CSIT882_week9B--transcript.txt · TXT第2行

### serialize / serial / serializable

**稳定ID：** 100c2be5ac60

**类别：** technical

**中文解释：** 使串行化／串行的／可串行化的；三种词形不同。

**简单英文（整理解释）：** Make an execution serial / one after another / able to meet a stated serial-equivalence condition.

**必要说明：** serializable 不等于实际 serial；规范术语依据 PDF，不沿用 TXT 的 sterilized 等异常词形。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第15页（幻灯片15）；10IntroductionToTransactionProcessing_1.pdf · PDF第17页（幻灯片17）；10IntroductionToTransactionProcessing_1.pdf · PDF第22页（幻灯片22）

### conflicting operations

**稳定ID：** cd8a8b7a9bf7

**类别：** technical

**中文解释：** 冲突操作：来自不同事务、访问相同数据项，且至少一个为写；读／读不冲突。

**简单英文（整理解释）：** Operations from different transactions on the same data item, with at least one write. Read/read does not conflict.

**必要说明：** 同一事务内操作不作为本节跨事务冲突；read/write、write/read、write/write 三种为 YES。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> If they don't access the same data, they don't conflict with each other.

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**原文短句／描述：** 教师转写定位短句（未核对音频）

> if an operation is include the right

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> the red X and the right X in T1 conflict with the right X in T2.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符1332–1395；搜索“the red X and the right X in T1 conflict with the right X in T2.”

**补充语境：** 至少一个是写操作；读／写、写／读、写／写都满足。

**补充说明：** 根据矩阵和教师説明整理的表达；不是 PDF 原句。还须不同事务、相同数据项。

**补充来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第19页（幻灯片19）；CSIT882_week9B--transcript.txt · TXT第2行

**补充语境：** Week10教师语境：冲突操作；本讲展示不同事务对同一数据项的读写或写写冲突。

**补充说明：** 读读不列为冲突；图示箭头按实际先后决定。规范判据来自此前指定P1。

**补充英文：** Operations from different transactions conflict on the same item when at least one writes it.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）；11IntroductionToTransactionProcessing_2.pdf · PDF第4页（幻灯片4）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符1332–1395；搜索“the red X and the right X in T1 conflict with the right X in T2.”

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第19页（幻灯片19）；CSIT882_week9B--transcript.txt · TXT第2行；11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）；11IntroductionToTransactionProcessing_2.pdf · PDF第4页（幻灯片4）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符1332–1395；搜索“the red X and the right X in T1 conflict with the right X in T2.”

### conflict serializable

**稳定ID：** 2bbafca1e717

**类别：** technical

**中文解释：** 冲突可串行化：存在同一组事务的某个串行调度，使两种调度中的冲突操作顺序相同。

**简单英文（整理解释）：** A nonserial schedule for which a serial schedule of the same transactions exists and keeps the same order of conflicting operations.

**必要说明：** 保留 exists、same set、both schedules 和 order；不要求所有非冲突操作顺序相同。

**说明依据：** 课件明确定义

**课件原文定义：** 课件原文定义

> Nonserial schedule of database transactions is conflict serializable if there exists a possible serial schedule of the same set of transactions such that in both schedules the order of conflicting operations is the same

**定义来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第20页（幻灯片20）

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> conflict sterillizable

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符250–271；搜索“conflict sterillizable”

**补充语境：** 同一组事务；比较时不能换成另一组事务。

**补充说明：** 强调比较对象保持一致。

**补充来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第20页（幻灯片20）

**补充语境：** 在两个被比较的调度中都……；both 不等于其中一个。

**补充说明：** 比较 nonserial schedule 与 possible serial schedule。

**补充来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第20页（幻灯片20）

**补充语境：** Week10教师语境：冲突可串行化；本讲使用串行化图判断。

**补充说明：** 针对conflict serializability，不把图判据扩大为所有可串行化概念。

**补充英文：** The execution can be put in a serial order without changing the order of conflicting operations.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）；11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）；11IntroductionToTransactionProcessing_2.pdf · PDF第7页（幻灯片7）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符250–271；搜索“conflict sterillizable”

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第20页（幻灯片20）；11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）；11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）；11IntroductionToTransactionProcessing_2.pdf · PDF第7页（幻灯片7）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符250–271；搜索“conflict sterillizable”

### conflict nonserializable execution

**稳定ID：** 274ad54edf72

**类别：** technical

**中文解释：** 冲突不可串行化的执行；本例同时要求 T1 在 T2 前与 T2 在 T1 前。

**简单英文（整理解释）：** An execution that cannot match a serial order while keeping the conflicting-operation order.

**必要说明：** 本例两向约束无法同时满足；不把所有非串行调度都归为不可串行化。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> T1 T2 x = $100 v=read(x) x = $100 w=read(x) x = $100 write(x,v-10) x = $90 write(x,w+20) x = $120 commit x = $120 commit x = $90 Order of conflicting operations: T1 before T2 and T2 before T1 impossible to serialize Conflict nonserializable execution 22

**原文来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第22页（幻灯片22）

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> it's a conflict. Uh, unsterillizable.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符1629–1665；搜索“it's a conflict. Uh, unsterillizable.”

**补充语境：** 无法串行化；图中两向先后约束无法同时满足。

**补充说明：** 这里针对图示冲突顺序，不把它作为所有 schedule 的一般断言。

**补充来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第22页（幻灯片22）

**补充语境：** Week10教师语境：冲突不可串行化的执行；图形成有向环时不满足冲突可串行化。

**补充说明：** TXT使用unsterillizable等异常词；不是新的正式术语。

**补充英文：** An execution that does not meet conflict serializability.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）；11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符1629–1665；搜索“it's a conflict. Uh, unsterillizable.”

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第22页（幻灯片22）；11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）；11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符1629–1665；搜索“it's a conflict. Uh, unsterillizable.”

### order of conflicting operations

**稳定ID：** 586fb24d1c41

**类别：** technical

**中文解释：** 冲突操作的先后顺序；图中用箭头表示约束方向。

**简单英文（整理解释）：** The earlier/later order of the operation pairs that conflict.

**必要说明：** 每对冲突按实际发生先后确定；不是按事务编号决定。 Week9B所给TXT无该部分讲解（历史来源范围）。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> T1 T2 w=read(x) write(x,w-10) v=read(x) u=read(y) write(y,u+10) t=read(y) Order of conflicting operations: T1 before T2 Conflict serializable execution 21

**原文来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第21页（幻灯片21）

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> we draw a row line. From T2 to T1.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符1019–1052；搜索“we draw a row line. From T2 to T1.”

**补充语境：** T1 在 T2 前／T2 在 T1 前；冲突图中的先后约束。

**补充说明：** P1 p21 都要求 T1 在 T2 前；p22 同时有两方向。

**补充来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第21页（幻灯片21）；10IntroductionToTransactionProcessing_1.pdf · PDF第22页（幻灯片22）

**补充语境：** Week10教师语境：冲突操作的先后顺序；先发生的一方决定箭头起点。

**补充说明：** 以PDF第3页两个相反方向为依据，TXT该段句法有误。

**补充英文：** The earlier-to-later order of operations that conflict.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）；11IntroductionToTransactionProcessing_2.pdf · PDF第4页（幻灯片4）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符1019–1052；搜索“we draw a row line. From T2 to T1.”

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第21页（幻灯片21）；10IntroductionToTransactionProcessing_1.pdf · PDF第22页（幻灯片22）；11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）；11IntroductionToTransactionProcessing_2.pdf · PDF第4页（幻灯片4）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符1019–1052；搜索“we draw a row line. From T2 to T1.”

### read/read; read/write; write/read; write/write

**稳定ID：** 6291999bfefd

**类别：** technical

**中文解释：** 四种操作组合；同一数据项、不同事务的前提下，只有读／读不冲突，其余三类冲突。

**简单英文（整理解释）：** Four operation pairs. For the same data item in different transactions, only read/read has no conflict.

**必要说明：** 保留两个前提；write 并不与所有事务中的任何操作无条件冲突。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第19页（幻灯片19）

### serialization graph

**稳定ID：** 6b7b92cbca03

**类别：** technical

**中文解释：** 串行化图：节点表示事务，箭头表示冲突操作要求的事务先后方向。

**简单英文（整理解释）：** A graph whose transaction nodes and arrows show the order required by conflicting operations.

**必要说明：** 根据图整理，课件未单独正式定义 node/edge；p3 为 T1↔T2，p4 含 T1→T2、T2→T1、T1→T3、T2→T3。 Week9B所给TXT无该部分讲解（历史来源范围）。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> T1 T2 v=read(x) w=read(x) write(x,v-10) write(x,w+20) T1 T2 Serialization graph 3

**原文来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> what is a sterilization graph?

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符324–353；搜索“what is a sterilization graph?”

**补充语境：** Week10教师语境：串行化图；节点对应事务，箭头表示冲突操作要求的先后。

**补充说明：** TXT写sterilization graph；学习词形按PDF。无有向环才满足本讲冲突可串行化判据。

**补充英文：** Transaction nodes and directed arrows show the order required by conflicts.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）；11IntroductionToTransactionProcessing_2.pdf · PDF第4页（幻灯片4）；11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符324–353；搜索“what is a sterilization graph?”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）；11IntroductionToTransactionProcessing_2.pdf · PDF第4页（幻灯片4）；11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符324–353；搜索“what is a sterilization graph?”

### serialization graph testing protocol / SGT

**稳定ID：** fa0ae6f9f2da

**类别：** technical

**中文解释：** 串行化图测试协议：调度器维护并检测图；若某事务发出的操作造成环，则中止该事务。

**简单英文（整理解释）：** The scheduler maintains and tests the serialization graph. If a transaction operation creates a cycle, that transaction is aborted.

**必要说明：** 课件列出 cascading aborts 与检测复杂性两个问题；Week9B所给TXT未讲到（历史来源范围）。 Week9B所给TXT无该部分讲解（历史来源范围）。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件英文原文原则／描述

> Scheduler maintains and tests serialization graph If an operation issued by a transaction violates conflict serializability (i.e. it creates a cycle in serialization graph) then such transaction is aborted

**原文来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> if operations issued by the transaction violates conflict the sterizabilities

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符3193–3269；搜索“if operations issued by the transaction violates conflict the sterizabilities”

**补充语境：** Week10教师语境：串行化图测试协议；操作若在图中造成环，发出该操作的事务被中止。

**补充说明：** PDF说such transaction，不是任意一个事务；级联中止与检测开销均保留。

**补充英文：** Test the serialization graph. Abort the transaction whose operation creates a cycle.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符3193–3269；搜索“if operations issued by the transaction violates conflict the sterizabilities”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符3193–3269；搜索“if operations issued by the transaction violates conflict the sterizabilities”

### scheduler

**稳定ID：** a4fbee05e347

**类别：** technical

**中文解释：** 调度器；在 SGT 中负责维护和测试串行化图。

**简单英文（整理解释）：** The part that maintains and tests the serialization graph in SGT.

**必要说明：** 资料没有单独正式定义；不是 schedule 本身。 本次 TXT 无该部分讲解。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Principles Scheduler maintains and tests serialization graph If an operation issued by a transaction violates conflict serializability (i.e.

**原文来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）

### cycle / acyclicity

**稳定ID：** 1ca9234fcc68

**类别：** technical

**中文解释：** 环／无环性；如 T1→T2→T1；SGT 检测操作是否产生环。

**简单英文（整理解释）：** A directed path that returns to its start / having no such cycle.

**必要说明：** 必要图示基础释义；资料没有展开图算法。 Week9B所给TXT无该部分讲解（历史来源范围）。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> that's a directed graph and the the directly graph and this doesn't form a circle.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符2588–2669；搜索“that's a directed graph and the the directly graph and this doesn't form a circle.”

**补充语境：** Week10教师语境：有向环／无环性；T1→T2→T1为环，T1→T2→T3加T1→T3本身不构成环。

**补充说明：** 教师用circle说明cycle；必须按箭头方向，不能只看外形。

**补充英文：** A cycle follows arrows back to its start. Acyclicity means there is no such cycle.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）；11IntroductionToTransactionProcessing_2.pdf · PDF第4页（幻灯片4）；11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符2588–2669；搜索“that's a directed graph and the the directly graph and this doesn't form a circle.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）；11IntroductionToTransactionProcessing_2.pdf · PDF第4页（幻灯片4）；11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符2588–2669；搜索“that's a directed graph and the the directly graph and this doesn't form a circle.”

### cascading aborts

**稳定ID：** 89b714ff5951

**类别：** technical

**中文解释：** 级联中止：一个事务失败或中止，导致依赖它的另一事务也被中止；p15 图示。

**简单英文（整理解释）：** One transaction's failure or abort causes another dependent transaction to abort, as shown in P2 p15.

**必要说明：** 资料无独立正式定义；SGT 与 TO 都列出这个问题；不要误写成只在一种 protocol 发生。 Week9B所给TXT无该部分讲解（历史来源范围）。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> it creates a cycle in serialization graph) then such transaction is aborted Problems Cascading aborts performance (testing acyclicity of serialization graph has O(n2) complexity) Serialization graph testing protocol (SGT) 5

**原文来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> the other transaction may read the data. Uh, which affect by the aborted transaction.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符3626–3710；搜索“the other transaction may read the data. Uh, which affect by the aborted transaction.”

**补充语境：** Week10教师语境：级联中止；一个事务中止后，读取其无效更新的另一个事务也被迫中止。

**补充说明：** 不是所有中止都必然导致级联；本讲给出读取依赖条件。SGT和TO均可能出现。

**补充英文：** One abort forces another transaction to abort because it read the failed transaction’s update.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）；11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）；11IntroductionToTransactionProcessing_2.pdf · PDF第15页（幻灯片15）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符3626–3710；搜索“the other transaction may read the data. Uh, which affect by the aborted transaction.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）；11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）；11IntroductionToTransactionProcessing_2.pdf · PDF第15页（幻灯片15）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符3626–3710；搜索“the other transaction may read the data. Uh, which affect by the aborted transaction.”

### O(n²) complexity

**稳定ID：** ad2302a7239d

**类别：** technical

**中文解释：** O(n²) 复杂度；课件标注测试串行化图无环性的复杂度。

**简单英文（整理解释）：** The complexity notation the slides use for testing graph acyclicity.

**必要说明：** 课件未说明 n 的确切对象及算法假设；不扩大为所有图检测算法的统一复杂度。 Week9B所给TXT无该部分讲解（历史来源范围）。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> big O N to the square

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符3915–3935；搜索“big O N to the square”

**补充语境：** Week10教师语境：O(n²)复杂度；课件用于串行化图无环性检测。

**补充说明：** 教师说big O N to the square；资料没有明确n的对象和算法假设。

**补充英文：** The slide gives O(n²) for testing graph acyclicity.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符3915–3935；搜索“big O N to the square”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符3915–3935；搜索“big O N to the square”

### node / directed arrow

**稳定ID：** 721dc5750fb9

**类别：** technical

**中文解释：** 节点／有向箭头；用于读懂课件图。

**简单英文（整理解释）：** A transaction point / an arrow showing a required earlier-to-later order in the graph.

**必要说明：** node 和 directed arrow 是必要图形基础释义，非课件明确术语定义；箭头方向不能反转。 Week9B所给TXT无该部分讲解（历史来源范围）。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> we draw another node and Mark the transaction name T2.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符673–726；搜索“we draw another node and Mark the transaction name T2.”

**补充语境：** Week10教师语境：节点／有向箭头；节点标T1、T2等，箭头从较早冲突操作的事务指向较晚者。

**补充说明：** TXT的note、row、aroma可能是node、arrow的转写错误；不默默改引文。

**补充英文：** A node marks a transaction. An arrow shows the required direction.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）；11IntroductionToTransactionProcessing_2.pdf · PDF第4页（幻灯片4）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符673–726；搜索“we draw another node and Mark the transaction name T2.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）；11IntroductionToTransactionProcessing_2.pdf · PDF第4页（幻灯片4）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符673–726；搜索“we draw another node and Mark the transaction name T2.”

### concurrency control techniques

**稳定ID：** 4a2471973f77

**类别：** technical

**中文解释：** 并发控制技术；出现在课件参考文献的章节标题中。

**简单英文（整理解释）：** Methods for handling concurrent transactions; the phrase appears in the reference titles.

**必要说明：** 只收录标题词义；未读取或引用参考书正文。 本次 TXT 无该部分讲解。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> 747-779 Elmasri R., Navathe S., Fundamentals of Database Systems, 6th edition, chapters 22.1, 22.3 Concurrency Control Techniques, pp.

**原文来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第23页（幻灯片23）

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第23页（幻灯片23）；11IntroductionToTransactionProcessing_2.pdf · PDF第16页（幻灯片16）

### protocol (transaction processing)

**稳定ID：** 208f8c174101

**类别：** technical

**中文解释：** 协议；本节三种 protocol 给出处理并发事务的规则。

**简单英文（整理解释）：** A set of rules for how a process works.

**必要说明：** 必要基础释义；不是网络协议的专门定义。 本次 TXT 无该部分讲解。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Outline • Serialization graph testing protocol • Two-phase locking protocol • Timestamp ordering protocol 2

**原文来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第2页（幻灯片2）

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第2页（幻灯片2）；11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）；11IntroductionToTransactionProcessing_2.pdf · PDF第7页（幻灯片7）；11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）

### two-phase locking protocol / 2PL

**稳定ID：** 3467c7586b81

**类别：** technical

**中文解释：** 两阶段锁协议：一个事务必须在释放任何锁之前获取它所需的所有锁。

**简单英文（整理解释）：** A transaction must acquire all its locks before it releases any lock.

**必要说明：** 不等于“事务一开始必须一次取完所有锁”；P2 p8 的读写之间仍可申请锁。未引入资料没有给出的锁类型或变体。 Week9B所给TXT无该部分讲解（历史来源范围）。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件英文原文原则／描述

> Each transaction must acquire all locks before releasing any lock

**原文来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第7页（幻灯片7）

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> One is called expanding phase or acquiring phase.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符4109–4157；搜索“One is called expanding phase or acquiring phase.”

**补充语境：** Week10教师语境：两阶段锁协议；释放任何锁之前先获取该事务所需的所有锁。

**补充说明：** 不等于开始前一次性获得所有锁，也不等于基本2PL必须等commit才解锁；P2第8–9页中途解锁。

**补充英文：** Acquire every needed lock before releasing any lock.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第7页（幻灯片7）；11IntroductionToTransactionProcessing_2.pdf · PDF第8页（幻灯片8）；11IntroductionToTransactionProcessing_2.pdf · PDF第9页（幻灯片9）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符4109–4157；搜索“One is called expanding phase or acquiring phase.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第7页（幻灯片7）；11IntroductionToTransactionProcessing_2.pdf · PDF第8页（幻灯片8）；11IntroductionToTransactionProcessing_2.pdf · PDF第9页（幻灯片9）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符4109–4157；搜索“One is called expanding phase or acquiring phase.”

### lock / lock(u)

**稳定ID：** e1895b16b504

**类别：** technical

**中文解释：** 锁／加锁；lock(u) 申请数据项 u 上的锁。

**简单英文（整理解释）：** Get a lock on the named data item before the protected operation, in the examples.

**必要说明：** 资料未定义 shared/exclusive locks 或完整兼容规则；不能自行加入。 Week9B所给TXT无该部分讲解（历史来源范围）。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> T1 T2 lock(u)a=read(u) lock(v) write(v,1) write(u,a+2) lock(v) wait lock(x) b=read(x) unlock(v) write(x,b+2) ...

**原文来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第8页（幻灯片8）

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> we don't make it special for the red lock or write lock.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符6605–6660；搜索“we don't make it special for the red lock or write lock.”

**补充语境：** 等待；因所需锁尚不可获得而暂停。

**补充说明：** wait 本身不一定是 deadlock；p8/p9 等待可结束，p10 是相互等待。 Week9B所给TXT无该部分讲解（历史来源范围）。

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第8页（幻灯片8）；11IntroductionToTransactionProcessing_2.pdf · PDF第10页（幻灯片10）

**补充语境：** Week10教师语境：锁／加锁；图中访问u前申请其上的锁。

**补充说明：** 教师明确本例不区分读锁和写锁；多个事务能否同时访问须看锁种类，不概括为任意锁均可共享。

**补充英文：** Get a lock on the item before the protected operation.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第8页（幻灯片8）；11IntroductionToTransactionProcessing_2.pdf · PDF第10页（幻灯片10）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符6605–6660；搜索“we don't make it special for the red lock or write lock.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第8页（幻灯片8）；11IntroductionToTransactionProcessing_2.pdf · PDF第9页（幻灯片9）；11IntroductionToTransactionProcessing_2.pdf · PDF第10页（幻灯片10）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符6605–6660；搜索“we don't make it special for the red lock or write lock.”

### unlock / unlock(v)

**稳定ID：** bff556d84034

**类别：** technical

**中文解释：** 解锁；unlock(v) 释放 v 上的锁。

**简单英文（整理解释）：** Release the lock on the named item.

**必要说明：** 2PL 在释放任何锁之后不再获取新锁，按 p7 原则整理。 Week9B所给TXT无该部分讲解（历史来源范围）。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> T1 T2 lock(u)a=read(u) lock(v) write(v,1) write(u,a+2) lock(v) wait lock(x) b=read(x) unlock(v) write(x,b+2) ...

**原文来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第8页（幻灯片8）

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> it's used to unlock data V.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符7907–7933；搜索“it's used to unlock data V.”

**补充语境：** Week10教师语境：解锁；释放v上的锁，等待它的事务随后可继续。

**补充说明：** 图中unlock(v)发生在T2 commit之前；不能删除这个先后条件。

**补充英文：** Release the lock so a waiting transaction can continue.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第8页（幻灯片8）；11IntroductionToTransactionProcessing_2.pdf · PDF第9页（幻灯片9）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符7907–7933；搜索“it's used to unlock data V.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第8页（幻灯片8）；11IntroductionToTransactionProcessing_2.pdf · PDF第9页（幻灯片9）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符7907–7933；搜索“it's used to unlock data V.”

### deadlock

**稳定ID：** 530333c7ca08

**类别：** technical

**中文解释：** 死锁：事务各持有对方需要的锁，并相互等待；p10 中 T1 等 v、T2 等 u。

**简单英文（整理解释）：** Transactions wait for each other's locked items and cannot move on in the shown example.

**必要说明：** 课件给出图示，无单独正式定义；与 p8 中等待后还能继续的情况区分。 Week9B所给TXT无该部分讲解（历史来源范围）。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Principle Each transaction must acquire all locks before releasing any lock Problems Deadlocks Unnecessary locks when execution is conflict serializable Two-phase locking (2PL) protocol 7

**原文来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第7页（幻灯片7）

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> both transactions cannot continue because they wait for each other to release the logs.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符10057–10143；搜索“both transactions cannot continue because they wait for each other to release the logs.”

**补充语境：** Week10教师语境：死锁；T1等T2释放v，T2等T1释放u，两者相互等待而不能继续。

**补充说明：** 等待本身不等于死锁；与第8页最终能继续的等待区分。

**补充英文：** Each transaction waits for a lock held by the other, so neither can continue.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第10页（幻灯片10）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符10057–10143；搜索“both transactions cannot continue because they wait for each other to release the logs.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第7页（幻灯片7）；11IntroductionToTransactionProcessing_2.pdf · PDF第10页（幻灯片10）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符10057–10143；搜索“both transactions cannot continue because they wait for each other to release the logs.”

### unnecessary locks

**稳定ID：** 152d937fa3fe

**类别：** technical

**中文解释：** 不必要的锁；课件列为 2PL 的问题：执行本身冲突可串行化时仍可能要求锁。

**简单英文（整理解释）：** Locks the slides say can be required even when execution is conflict serializable.

**必要说明：** 保留 when execution is conflict serializable；未给出独立演示或量化性能结果。 本次 TXT 无该部分讲解。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Principle Each transaction must acquire all locks before releasing any lock Problems Deadlocks Unnecessary locks when execution is conflict serializable Two-phase locking (2PL) protocol 7

**原文来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第7页（幻灯片7）

**补充语境：** 当执行是冲突可串行化时；用来限定 unnecessary locks 的情形。

**补充说明：** 不能删掉这个条件只记“锁没有用”。 本次 TXT 无该部分讲解。

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第7页（幻灯片7）

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第7页（幻灯片7）

### timeouts

**稳定ID：** 1981bbc111cc

**类别：** technical

**中文解释：** 超时；课件列出一种死锁处理技术，系统规定等待锁的时间。

**简单英文（整理解释）：** A deadlock-handling technique using a defined lock waiting time period.

**必要说明：** 资料未说明超过时限后的完整策略，不补造一律中止所有事务等规则。 Week9B所给TXT无该部分讲解（历史来源范围）。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Timeouts: The system has defined a lock waiting time period.

**原文来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> wait for 30 seconds and if it cannot continue the transaction automatically abort, then can restart again.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符10706–10811；搜索“wait for 30 seconds and if it cannot continue the transaction automatically abort, then can restart again.”

**补充语境：** 等待锁的时间段；timeout 方法的依据。

**补充说明：** 资料未给具体时长。 Week9B所给TXT无该部分讲解（历史来源范围）。

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）

**补充语境：** Week10教师语境：超时；给等待锁设定时限，教师用30秒后中止并重启作例子。

**补充说明：** 30秒只是教师示例，不是所有DBMS的固定时限；长事务也会超时，因此超时不证明死锁。

**补充英文：** Set a waiting limit. The example aborts and restarts a transaction after 30 seconds.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符10706–10811；搜索“wait for 30 seconds and if it cannot continue the transaction automatically abort, then can restart again.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符10706–10811；搜索“wait for 30 seconds and if it cannot continue the transaction automatically abort, then can restart again.”

### deadlock prevention

**稳定ID：** 3b7f12e84695

**类别：** technical

**中文解释：** 死锁预防：课件说用事务时间戳给事务排序。

**简单英文（整理解释）：** Use transaction timestamps to order transactions, as described in the slides.

**必要说明：** 未给出具体预防算法或名字；不自行添加。 Week9B所给TXT无该部分讲解（历史来源范围）。 prevention表示预防，detection表示检测，两者不同。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Deadlock prevention: Use transaction timestamps to order transactions.

**原文来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> deadlock prevention, uh, this consume more resources.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符12501–12553；搜索“deadlock prevention, uh, this consume more resources.”

**补充语境：** Week10教师语境：死锁预防；课件用事务时间戳给事务排序，教师补充资源开销。

**补充说明：** 资料没有给出具体算法；“consume more resources”是本讲教师评价，没有数量对照。

**补充英文：** Use timestamps to order transactions before a deadlock occurs, as described in the slides.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符12501–12553；搜索“deadlock prevention, uh, this consume more resources.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符12501–12553；搜索“deadlock prevention, uh, this consume more resources.”

### deadlock detection

**稳定ID：** 627063558e1b

**类别：** technical

**中文解释：** 死锁检测：使用事务依赖构建 wait-for graph。

**简单英文（整理解释）：** Use transaction dependencies to construct a wait-for graph, as described in the slides.

**必要说明：** 资料未展开检测后的事务选择及恢复策略。 Week9B所给TXT无该部分讲解（历史来源范围）。 detection表示检测，prevention表示预防，两者不同。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Deadlock detection: Use transaction dependencies to construct a wait- for graph.

**原文来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> if there is a deadlock, we choose one transaction to abort. Then the, then the other transaction can continue.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符11354–11463；搜索“if there is a deadlock, we choose one transaction to abort. Then the, then the other transaction can continue.”

**补充语境：** Week10教师语境：死锁检测；根据事务依赖构建等待图，检测后选择一个事务中止，使其他事务继续。

**补充说明：** 选哪个事务的规则未给出；不补造代价比较算法。

**补充英文：** Check waiting dependencies. If a deadlock is found, choose one transaction to abort.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符11354–11463；搜索“if there is a deadlock, we choose one transaction to abort. Then the, then the other transaction can continue.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符11354–11463；搜索“if there is a deadlock, we choose one transaction to abort. Then the, then the other transaction can continue.”

### wait-for graph

**稳定ID：** 8ac756d11d19

**类别：** technical

**中文解释：** 等待图：根据事务等待依赖构建，用于检测死锁。

**简单英文（整理解释）：** A graph constructed from transaction waiting dependencies for deadlock detection.

**必要说明：** 资料未正式定义节点与边方向；不要把 serialization graph 的冲突边直接当等待边。 Week9B所给TXT无该部分讲解（历史来源范围）。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> the width for the graph

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符11166–11188；搜索“the width for the graph”

**补充语境：** Week10教师语境：等待图；基于等待依赖检测死锁，教师用“是否有环”说明。

**补充说明：** TXT写width for the graph；正式词形来自PDF第11页。等待依赖边和冲突顺序边不可混用。

**补充英文：** A graph of waiting dependencies used to detect deadlock.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符11166–11188；搜索“the width for the graph”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符11166–11188；搜索“the width for the graph”

### transaction dependencies

**稳定ID：** f3193e7268c0

**类别：** technical

**中文解释：** 事务依赖关系；用于构建等待图。

**简单英文（整理解释）：** Relationships used to show which transactions depend on others in the deadlock-detection description.

**必要说明：** dependency 表示依赖，不是 transaction 本身。 本次 TXT 无该部分讲解。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Deadlock detection: Use transaction dependencies to construct a wait- for graph.

**原文来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）

### timestamp ordering protocol / TO

**稳定ID：** 497f5cc189fb

**类别：** technical

**中文解释：** 时间戳排序协议：事务开始时获得时间戳；数据项访问按递增时间戳顺序进行。

**简单英文（整理解释）：** Transactions get timestamps at their start. Data accesses must follow increasing timestamp order in the slide principles.

**必要说明：** 数据项每次读／写访问时被标记；资料只给简化原则，未给完整实现算法。 Week9B所给TXT无该部分讲解（历史来源范围）。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件英文原文原则／描述

> Each transaction obtains a timestamp at the start point Data items are stamped each time a transaction accesses data items in a read or write mode Access to data items is permitted in increasing order of timestamps

**原文来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> If the time stamp in the decreasing order, we should abort the transaction.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符13855–13929；搜索“If the time stamp in the decreasing order, we should abort the transaction.”

**补充语境：** 每次事务访问数据项时；课件包括读与写模式。

**补充说明：** each time 不是只在第一次访问时。 Week9B所给TXT无该部分讲解（历史来源范围）。

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）

**补充语境：** Week10教师语境：时间戳排序协议；事务开始时获得时间戳，数据访问按递增时间戳顺序。

**补充说明：** 教师用递减就中止的简化例子说明，不当作完整TO算法；不等待以避免死锁的说明不排除级联中止。

**补充英文：** Each transaction gets a timestamp at its start. Access follows increasing timestamp order.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）；11IntroductionToTransactionProcessing_2.pdf · PDF第14页（幻灯片14）；11IntroductionToTransactionProcessing_2.pdf · PDF第15页（幻灯片15）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符13855–13929；搜索“If the time stamp in the decreasing order, we should abort the transaction.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）；11IntroductionToTransactionProcessing_2.pdf · PDF第14页（幻灯片14）；11IntroductionToTransactionProcessing_2.pdf · PDF第15页（幻灯片15）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符13855–13929；搜索“If the time stamp in the decreasing order, we should abort the transaction.”

### timestamp / timestamp(t1)

**稳定ID：** 682fb4a14baf

**类别：** technical

**中文解释：** 时间戳：事务开始时获得、用于排序的标记；timestamp(t1) 是图示操作。

**简单英文（整理解释）：** A time-order label given to a transaction at its start.

**必要说明：** 本节未定义具体时钟来源或编码；t1/t2 不是数据库项 x/y。 Week9B所给TXT无该部分讲解（历史来源范围）。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Deadlock prevention: Use transaction timestamps to order transactions.

**原文来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> We have a time stamp when each transaction starts.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符13241–13290；搜索“We have a time stamp when each transaction starts.”

**补充语境：** Week10教师语境：时间戳；事务开始时获得的时间顺序标记，示例为t1、t2。

**补充说明：** 教师提到machine time及其他生成方法只是可能实现，未给具体编码或唯一性规则。

**补充英文：** A time-order mark given when a transaction starts.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）；11IntroductionToTransactionProcessing_2.pdf · PDF第14页（幻灯片14）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符13241–13290；搜索“We have a time stamp when each transaction starts.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）；11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）；11IntroductionToTransactionProcessing_2.pdf · PDF第14页（幻灯片14）；11IntroductionToTransactionProcessing_2.pdf · PDF第15页（幻灯片15）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符13241–13290；搜索“We have a time stamp when each transaction starts.”

### read mode / write mode

**稳定ID：** adcaca7676a4

**类别：** technical

**中文解释：** 读模式／写模式；TO 原则说两类访问都给数据项加时间戳标记。

**简单英文（整理解释）：** Accessing an item by reading / by writing.

**必要说明：** 未定义访问权限或锁兼容模式；不要混用 read lock/write lock。 本次 TXT 无该部分讲解。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**补充语境：** 以读或写模式访问；两种方式都在 TO 原则范围内。

**补充说明：** 不要漏掉 read 或 write 中任何一种。 本次 TXT 无该部分讲解。

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）

### stamped data item / x:t1:t2

**稳定ID：** a2902ae08d4f

**类别：** technical

**中文解释：** 带时间戳标记的数据项；x:t1:t2 表示课件图中依次出现 t1、t2 访问标记。

**简单英文（整理解释）：** An item marked when transactions access it; the example shows the access timestamp order.

**必要说明：** 这是图中记号，不是可执行 SQL 或完整内部数据结构。 Week9B所给TXT无该部分讲解（历史来源范围）。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> since we already have time stamp on data X, it's T1, so we don't need to repeat the same time stamp.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符14333–14432；搜索“since we already have time stamp on data X, it's T1, so we don't need to repeat the same time stamp.”

**补充语境：** Week10教师语境：带时间戳标记的数据项；x:t1:t2表示示例中的访问标记顺序。

**补充说明：** 同事务再次写x时图中不重复打印t1，不否定第13页每次读写访问都按原则检查；不是完整内部存储格式。

**补充英文：** The example puts transaction timestamps on a data item in access order.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）；11IntroductionToTransactionProcessing_2.pdf · PDF第14页（幻灯片14）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符14333–14432；搜索“since we already have time stamp on data X, it's T1, so we don't need to repeat the same time stamp.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）；11IntroductionToTransactionProcessing_2.pdf · PDF第14页（幻灯片14）；11IntroductionToTransactionProcessing_2.pdf · PDF第15页（幻灯片15）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符14333–14432；搜索“since we already have time stamp on data X, it's T1, so we don't need to repeat the same time stamp.”

### increasing order of timestamps

**稳定ID：** 7623d13944d0

**类别：** technical

**中文解释：** 时间戳递增顺序；先小后大。

**简单英文（整理解释）：** Access order going from earlier to later timestamps.

**必要说明：** p14 的 y:t2:t1 违反该顺序，图中 T1 abort。 Week9B所给TXT无该部分讲解（历史来源范围）。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Principles Each transaction obtains a timestamp at the start point Data items are stamped each time a transaction accesses data items in a read or write mode Access to data items is permitted in increasing order of timestamps Problems Cascading aborts Unnecessary aborts when a schedule is conflict serializable Timestamp ordering (TO) protocol 13

**原文来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> T1, T2 is in the increasing order.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符14682–14715；搜索“T1, T2 is in the increasing order.”

**补充语境：** Week10教师语境：时间戳递增顺序；t1早于t2时先t1后t2。

**补充说明：** 冲突本身不导致该例中止；顺序递减y:t2:t1才在图中触发T1 abort。

**补充英文：** Earlier timestamps come before later ones.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）；11IntroductionToTransactionProcessing_2.pdf · PDF第14页（幻灯片14）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符14682–14715；搜索“T1, T2 is in the increasing order.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）；11IntroductionToTransactionProcessing_2.pdf · PDF第14页（幻灯片14）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符14682–14715；搜索“T1, T2 is in the increasing order.”

### unnecessary aborts

**稳定ID：** 2db7b1ea587d

**类别：** technical

**中文解释：** 不必要的中止；即使 schedule 冲突可串行化，TO 也可能要求中止。

**简单英文（整理解释）：** Aborts that the protocol may require even when a schedule is conflict serializable, according to the slides.

**必要说明：** 保留 when a schedule is conflict serializable；并非声称所有 TO 中止都不必要。 本次 TXT 无该部分讲解。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Principles Each transaction obtains a timestamp at the start point Data items are stamped each time a transaction accesses data items in a read or write mode Access to data items is permitted in increasing order of timestamps Problems Cascading aborts Unnecessary aborts when a schedule is conflict serializable Timestamp ordering (TO) protocol 13

**原文来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）

**补充语境：** 当一个调度冲突可串行化时；TO 仍可能有 unnecessary aborts。

**补充说明：** 不要把 timestamp order 等同于所有可能的 serial orders。 本次 TXT 无该部分讲解。

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）

### forced abort

**稳定ID：** 08301fbdf1a1

**类别：** technical

**中文解释：** 强制中止；p15 中 T1 fail，已读过 x 的 T2 被 forced abort。

**简单英文（整理解释）：** An abort forced on a transaction because another transaction fails in the cascading-abort example.

**必要说明：** 只按图说明，资料无单独正式定义；这是 cascading abort 的例子。 Week9B所给TXT无该部分讲解（历史来源范围）。

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> T1 T2 x timestamp(t1) a=read(x) x:t1 write(x,x-10) timestamp(t2) read(x) x:t1:t2 fail forced abort Cascading abort !

**原文来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第15页（幻灯片15）

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> DBMS forced transaction T2 to abort as well.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符16482–16525；搜索“DBMS forced transaction T2 to abort as well.”

**补充语境：** Week10教师语境：强制中止；T2读了T1写入的数据，T1失败回滚后，T2也被DBMS中止。

**补充说明：** 保留读取依赖条件，不是任意T1失败都强制T2中止。

**补充英文：** The DBMS makes T2 abort because the update it read from T1 is no longer valid.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第15页（幻灯片15）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符16482–16525；搜索“DBMS forced transaction T2 to abort as well.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第15页（幻灯片15）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符16482–16525；搜索“DBMS forced transaction T2 to abort as well.”

### complexity (of a test)

**稳定ID：** 9f66bb118bd1

**类别：** technical

**中文解释：** 测试的复杂度；课件给出O(n²)，但没有说明n的确切含义和算法假设。

**简单英文（整理解释）：** How the work needed by a test grows with its input size, in this context.

**必要说明：** 课件具体给出 O(n²)，未展开时间与空间复杂度的完整理论。 Week9B所给TXT无该部分讲解（历史来源范围）。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> it creates a cycle in serialization graph) then such transaction is aborted Problems Cascading aborts performance (testing acyclicity of serialization graph has O(n2) complexity) Serialization graph testing protocol (SGT) 5

**原文来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> that's the algorithm complexity.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符3942–3973；搜索“that's the algorithm complexity.”

**补充语境：** Week10教师语境：算法复杂度；教师用于说明SGT检测所需工作量的增长。

**补充说明：** 本讲只给O(n²)，未说明n与具体算法；不外推所有图算法。

**补充英文：** How the work needed by an algorithm grows with its input.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符3942–3973；搜索“that's the algorithm complexity.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符3942–3973；搜索“that's the algorithm complexity.”

## 阅读词汇

### such that … / there exists … such that …

**稳定ID：** bc3e600ba765

**类别：** reading

**中文解释：** 满足后面所说的条件。

**简单英文（整理解释）：** meeting the condition that follows

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Inline views A query find the chair people of departments, that offer more than one course can be decomposed into the following queries Find the total number of courses offered by a department Find the chair people of departments, such that the total number of courses offered by a department is greater than one ( SELECT count(*) FROM COURSE WHERE COURSE.offered_by = ...

**原文来源：** Views.pdf · PDF第5页（幻灯片5）

**补充语境：** 存在一个可能的串行调度，使得……；存在性条件，不是所有串行调度都须匹配。

**补充说明：** 后面的条件是两种 schedule 中冲突操作顺序相同。

**补充来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第20页（幻灯片20）

**全部来源：** Views.pdf · PDF第5页（幻灯片5）；10IntroductionToTransactionProcessing_1.pdf · PDF第20页（幻灯片20）

### a given … / a certain …

**稳定ID：** 5cbd062a82a3

**类别：** reading

**中文解释：** a given …／a certain …：某个给定的、特定的对象；不是“所有可能的对象”。资料中包括给定SELECT语句与某个serial schedule。

**简单英文（整理解释）：** One specified or particular thing, not every possible one.

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**补充语境：** 与某一个串行调度的结果相同；a certain 表示某一个，不是任意所有。

**补充说明：** 还必须保留课件 each transaction reads the same data items 条件。

**补充来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第17页（幻灯片17）

**全部来源：** Advanced DDL and DML statements.pdf · PDF第6页（幻灯片6）；Advanced DDL and DML statements.pdf · PDF第9页（幻灯片9）；10IntroductionToTransactionProcessing_1.pdf · PDF第17页（幻灯片17）

### determine … / be determined by … / determine whether …

**稳定ID：** 6c8eef56ba3f

**类别：** reading

**中文解释：** 由……决定／在……中确定。

**简单英文（整理解释）：** decided by / specified in

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> correct or incorrect is a challenge problem

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**补充语境：** 判定……正确还是不正确；本节关注 concurrent execution 的正确性。

**补充说明：** 必须对应具体 correctness condition；不能只凭是否交错判断。

**补充来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第13页（幻灯片13）；CSIT882_week9B--transcript.txt · TXT第2行

**补充语境：** 判断是否……所需的时间；不是实际事务执行时间。

**补充说明：** 本页讨论测试 schedule 的时间。

**补充来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第18页（幻灯片18）

**全部来源：** Advanced DDL and DML statements.pdf · PDF第15页（幻灯片15）；10IntroductionToTransactionProcessing_1.pdf · PDF第13页（幻灯片13）；CSIT882_week9B--transcript.txt · TXT第2行；10IntroductionToTransactionProcessing_1.pdf · PDF第18页（幻灯片18）

### increase … by … / decrease … by …

**稳定ID：** ed8b95be765d

**类别：** reading

**中文解释：** 增加 5；区别于 increase … to 5，后者是变成 5。

**简单英文（整理解释）：** add 5 to the current amount

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> decrease the value by 10

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**补充语境：** 减少 10／增加 20；by 是变化量。

**补充说明：** 与 decrease to 10 区分；此例 100-10 与 100+20 使用不同事务各自读取的值。

**补充来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第12页（幻灯片12）；CSIT882_week9B--transcript.txt · TXT第2行

**全部来源：** Advanced DDL and DML statements.pdf · PDF第17页（幻灯片17）；10IntroductionToTransactionProcessing_1.pdf · PDF第12页（幻灯片12）；CSIT882_week9B--transcript.txt · TXT第2行

### consist of …

**稳定ID：** 1595b695e908

**类别：** reading

**中文解释：** 由……组成；例如事务由读写操作组成。

**简单英文（整理解释）：** Have these parts or members.

**必要说明：** 完整表达优先；不要与 consist with 混用。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> consists of several read and write statements

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第15页（幻灯片15）；10IntroductionToTransactionProcessing_1.pdf · PDF第16页（幻灯片16）；CSIT882_week9B--transcript.txt · TXT第2行

### by default

**稳定ID：** 94363994eb82

**类别：** reading

**中文解释：** 在默认设置下；教师说 MySQL 通常每条语句为一个事务，也说可以改变设置。

**简单英文（整理解释）：** If no one changes the usual setting.

**必要说明：** 没有给出设置命令或本次实验的完整配置；不推广为任何会话都如此。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> by default, each transaction consists of one statement.

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**全部来源：** CSIT882_week9B--transcript.txt · TXT第2行

### a limited number of operations

**稳定ID：** aa5f47d5377d

**类别：** reading

**中文解释：** 有限数量的操作；教师的利息例子里操作种类少，但可能涉及很多账户。

**简单英文（整理解释）：** Only a certain, not very large, number of operations.

**必要说明：** limited 修饰数量，不表示处理时间一定短。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> A limited number of operations

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**全部来源：** CSIT882_week9B--transcript.txt · TXT第2行

### interest (banking) / account balance

**稳定ID：** 356ce9550d1c

**类别：** reading

**中文解释：** interest 在银行例子中指“利息”；account balance 指“账户余额”。此处不是兴趣或身体平衡。

**简单英文（整理解释）：** Interest is money charged or paid for using money. An account balance is the amount in the account.

**必要说明：** 仅解释教师例子的词义；不是金融建议。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> calculate the interest

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**原文短句／描述：** 教师转写定位短句（未核对音频）

> home loan or personal loan accounts

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**原文短句／描述：** 教师转写定位短句（未核对音频）

> update the balance

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> the bank calculates the interest and uh modify the balance for each account.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符12017–12092；搜索“the bank calculates the interest and uh modify the balance for each account.”

**补充语境：** 计算利息／更新余额；银行月末批量处理的例子。

**补充说明：** 教师例子，不引入银行计算公式。

**补充来源：** CSIT882_week9B--transcript.txt · TXT第2行

**补充语境：** Week10教师语境：利息／账户余额；教师用银行月末计算利息、修改余额说明长事务。

**补充说明：** 该流程可能持续数小时是教师例子，不是规定时长。

**补充英文：** Interest is money paid or charged for money use. A balance is the amount in an account.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符12017–12092；搜索“the bank calculates the interest and uh modify the balance for each account.”

**全部来源：** CSIT882_week9B--transcript.txt · TXT第2行；11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符12017–12092；搜索“the bank calculates the interest and uh modify the balance for each account.”

### affect the whole transaction

**稳定ID：** 35e512566338

**类别：** reading

**中文解释：** 影响整个事务；教师提醒，一个操作失败可能影响整体。

**简单英文（整理解释）：** Have an effect on the entire transaction.

**必要说明：** 保留 may；不是说所有错误都必然产生相同的系统行为。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> One operation fail, that may affect the whole transaction.

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**全部来源：** CSIT882_week9B--transcript.txt · TXT第2行

### interact with … by …

**稳定ID：** 370270177e54

**类别：** reading

**中文解释：** 通过……与……交互；课件说用户通过处理程序与数据库交互。

**简单英文（整理解释）：** Work with something by doing the stated action.

**必要说明：** by 后的动作说明方式。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第8页（幻灯片8）

### be equivalent to …

**稳定ID：** dcd2aa071d5f

**类别：** reading

**中文解释：** 在此描述中等价于……；课件把处理程序对应到处理部分有序读写操作。

**简单英文（整理解释）：** Have the same meaning or effect in this description.

**必要说明：** equivalent 的具体对象是本页两种 processing 描述。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第8页（幻灯片8）

### be visible to … as …

**稳定ID：** 016bae66d54e

**类别：** reading

**中文解释：** 对……来说以……形式可见；事务把数据库看作数据项集合。

**简单英文（整理解释）：** Be seen or treated by someone in a stated form.

**必要说明：** 这里解释数据库的抽象视角，不是指图形界面可见。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第8页（幻灯片8）

### have no impact on …

**稳定ID：** 0bca2fcd2e9d

**类别：** reading

**中文解释：** have no impact on …＝对……没有影响。P1第8页的对象和范围不清楚，原文与后续冲突例子需一起保留，见资料疑点。

**简单英文（整理解释）：** Do not affect the stated processing / do not send information to one another.

**必要说明：** 第一部分主语及范围含糊，见 I02；不可扩大为“并发事务不会影响共享数据”。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件英文原文原则／描述

> Transactions have no impact on processing of their operations and transaction do not communicate with each other

**原文来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第8页（幻灯片8）

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第8页（幻灯片8）

### terminate by either … or …

**稳定ID：** 33ed4d226cdc

**类别：** reading

**中文解释：** 以……或……之一终止；本页是 commit 或 abort (rollback)。

**简单英文（整理解释）：** End in one of the two stated ways.

**必要说明：** 保留 either … or … 及两个终止方式。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第9页（幻灯片9）

### arrive at … / leave … in …

**稳定ID：** b4eed6c115e6

**类别：** reading

**中文解释：** 到达……／结束时使……处于……；本节要求前后都是 consistent state。

**简单英文（整理解释）：** Reach a state / keep something in a stated state when finishing.

**必要说明：** leave 在这里不是“离开某地”，而是“留下某种状态”。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第9页（幻灯片9）

### permanently / temporarily

**稳定ID：** 69bf99cfd7de

**类别：** reading

**中文解释：** 永久地／暂时地；用于区分提交后持久记录与暂存。

**简单英文（整理解释）：** For lasting storage / for a short time only.

**必要说明：** 教师对例子中暂存与提交的说明不等于完整存储实现。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> memory temporarily

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**补充语境：** 永久地；本节用于描述删除。

**补充说明：**

**补充来源：** Advanced DDL and DML statements.pdf · PDF第3页（幻灯片3）

**补充语境：** 被永久记录；Durability 的要求。

**补充说明：** 原文是 must be，不只是 may be。

**补充来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第10页（幻灯片10）

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第10页（幻灯片10）；CSIT882_week9B--transcript.txt · TXT第2行；Advanced DDL and DML statements.pdf · PDF第3页（幻灯片3）

### principle / property

**稳定ID：** 57a67d2666bc

**类别：** reading

**中文解释：** 原理、原则／性质；principles 是处理原则，properties 是事务必须具备的特征。

**简单英文（整理解释）：** A basic rule used in the explanation / a feature that something must have.

**必要说明：** 两词不能机械互换；本节 ACID 是 basic properties。 本次 TXT 无该部分讲解。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Processing of a program is equivalent to processing of a partially ordered set of read , write operations on data Database users interact with a database system by processing the programs Database is visible to transactions as a collection of data items Principles of transaction processing Concurrently running transactions interleave their operations Transactions have no impact on processing of their operations and transaction do not communicate with each other 8

**原文来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第8页（幻灯片8）

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第8页（幻灯片8）；10IntroductionToTransactionProcessing_1.pdf · PDF第9页（幻灯片9）；10IntroductionToTransactionProcessing_1.pdf · PDF第10页（幻灯片10）；11IntroductionToTransactionProcessing_2.pdf · PDF第7页（幻灯片7）；11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）

### a collection of …

**稳定ID：** d2be896b75d6

**类别：** reading

**中文解释：** 数据项的集合；课件说事务以这种方式看待数据库。

**简单英文（整理解释）：** Data items considered together as a group.

**必要说明：** collection 此处不是“收藏功能”；不规定数据项的物理粒度。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Processing of a program is equivalent to processing of a partially ordered set of read , write operations on data Database users interact with a database system by processing the programs Database is visible to transactions as a collection of data items Principles of transaction processing Concurrently running transactions interleave their operations Transactions have no impact on processing of their operations and transaction do not communicate with each other 8

**原文来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第8页（幻灯片8）

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第8页（幻灯片8）

### indivisible / entirely or not at all

**稳定ID：** eb62d19c6b7e

**类别：** reading

**中文解释：** indivisible＝不可分的；entirely or not at all＝全部处理，或完全不处理。课件用于说明Atomicity。

**简单英文（整理解释）：** Not able to be split / all of it, or none of it.

**必要说明：** Atomicity 保留全部处理或完全不处理的限制。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Atomicity: A transaction unit is indivisible.

**原文来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第10页（幻灯片10）

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第10页（幻灯片10）

### transform … from … to …

**稳定ID：** 4781aaea9676

**类别：** reading

**中文解释：** 把……从……变为……；Consistency 的两端都必须 consistent。

**简单英文（整理解释）：** Change something from one state to another.

**必要说明：** 保留 from 和 to 两端条件。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第10页（幻灯片10）

### be processed independently

**稳定ID：** 3b4a5a7e27b8

**类别：** reading

**中文解释：** 独立处理；Isolation 的原文表达。

**简单英文（整理解释）：** Be processed on its own.

**必要说明：** 不自动推出事务只能按 serial schedule 执行。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Isolation: Each transaction must be processed independently.

**原文来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第10页（幻灯片10）

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第10页（幻灯片10）

### be affected by …

**稳定ID：** 74d1487af95c

**类别：** reading

**中文解释：** be affected by …＝受到……影响；本页指已提交事务所影响的数据。保留committed的限定。

**简单英文（整理解释）：** Data changed by a transaction that has committed.

**必要说明：** affected by 说明受谁影响，committed 限定事务状态。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第10页（幻灯片10）

### preserve the order of …

**稳定ID：** 4233f5eda9a8

**类别：** reading

**中文解释：** 保留……的顺序；schedule 保留每个事务内部操作顺序。

**简单英文（整理解释）：** Keep the order unchanged.

**必要说明：** 这里 order 是顺序，不是“命令”或“订单”。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> preserve the order of operations

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第14页（幻灯片14）；CSIT882_week9B--transcript.txt · TXT第2行

### consecutively

**稳定ID：** f25df3057ae6

**类别：** reading

**中文解释：** 连续地、一个接一个地；用于 serial schedule。

**简单英文（整理解释）：** One after another.

**必要说明：** 不是 concurrently（并发地）。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> A serial schedule consists of a set of concurrent transactions, that processed their operation consecutively Serial schedule T1 T2 T3 read(x) write(x) commit read(z) write(z) commit read(y) write(y) commit 15

**原文来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第15页（幻灯片15）

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第15页（幻灯片15）

### be involved in …

**稳定ID：** 0c704ec82dce

**类别：** reading

**中文解释：** 参与某个调度的事务；课件将测试规模与 total number 联系。

**简单英文（整理解释）：** Transactions that take part in the schedule.

**必要说明：** involved in 表示参与其中。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** 10IntroductionToTransactionProcessing_1.pdf · PDF第18页（幻灯片18）

### maintain and test …

**稳定ID：** d609e22e4b60

**类别：** reading

**中文解释：** 维护并检测……；SGT 对 serialization graph 的操作。

**简单英文（整理解释）：** Keep something up to date and check it.

**必要说明：** maintain 此处不是维修硬件。 本次 TXT 无该部分讲解。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）

### be issued by …

**稳定ID：** 6af4d6697294

**类别：** reading

**中文解释：** be issued by …＝由……发出；本页是事务发出一个操作。issued是issue的过去分词，这里不是“问题”。

**简单英文（整理解释）：** An operation sent by a transaction for processing.

**必要说明：** 不是“事务发布的问题”。 Week9B所给TXT无该部分讲解（历史来源范围）。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> operations issued by the transaction

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符3196–3231；搜索“operations issued by the transaction”

**补充语境：** Week10教师语境：由……发出；此处为事务发出操作。

**补充说明：** issued by结构标出发出者；不是issue作“问题”。

**补充英文：** An operation is sent by a transaction.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符3196–3231；搜索“operations issued by the transaction”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符3196–3231；搜索“operations issued by the transaction”

### violate a condition (conflict serializability)

**稳定ID：** dd1dfe9da1cd

**类别：** reading

**中文解释：** 违反冲突可串行化条件；本页用产生环说明这种违反。

**简单英文（整理解释）：** Break the required condition for conflict serializability.

**必要说明：** 保留 i.e. 后的具体判据 creates a cycle。 Week9B所给TXT无该部分讲解（历史来源范围）。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> violates conflict the sterizabilities

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符3233–3269；搜索“violates conflict the sterizabilities”

**补充语境：** Week10教师语境：违反条件；本节为违反冲突可串行化条件。

**补充说明：** PDF第5页以产生环解释这种违反；TXT句法错误保留。

**补充英文：** Fail to follow a required condition.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符3233–3269；搜索“violates conflict the sterizabilities”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符3233–3269；搜索“violates conflict the sterizabilities”

### i.e.

**稳定ID：** f4bd8976a394

**类别：** reading

**中文解释：** 即、也就是说；用来进一步说明前面的表述。课件在括号中解释“产生环”这一情况。

**简单英文（整理解释）：** That is; it introduces a clearer explanation.

**必要说明：** 不是中止任意事务或无条件中止所有事务。 本次 TXT 无该部分讲解。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Principles Scheduler maintains and tests serialization graph If an operation issued by a transaction violates conflict serializability (i.e.

**原文来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）

### performance

**稳定ID：** bd0d2f1ebb00

**类别：** reading

**中文解释：** 性能；此处讨论SGT检测图的开销。

**简单英文（整理解释）：** How well or efficiently the process runs.

**必要说明：** 课件具体给出 O(n²)，未展开时间与空间复杂度的完整理论。 本次 TXT 无该部分讲解。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> it creates a cycle in serialization graph) then such transaction is aborted Problems Cascading aborts performance (testing acyclicity of serialization graph has O(n2) complexity) Serialization graph testing protocol (SGT) 5

**原文来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）

### acquire / release a lock

**稳定ID：** d6ae6525f0e2

**类别：** reading

**中文解释：** acquire a lock＝获取锁；release a lock＝释放锁。2PL原句要求在释放任何锁之前获得全部所需锁。

**简单英文（整理解释）：** Get every required lock before letting go of even one lock.

**必要说明：** 操作可穿插在锁申请之间；“释放后再获取新锁”不满足此原则。 Week9B所给TXT无该部分讲解（历史来源范围）。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Principle Each transaction must acquire all locks before releasing any lock Problems Deadlocks Unnecessary locks when execution is conflict serializable Two-phase locking (2PL) protocol 7

**原文来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第7页（幻灯片7）

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> obtain the lock before it can process.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符4241–4278；搜索“obtain the lock before it can process.”

**补充语境：** acquire＝获取；release＝释放。在本页的完整用法是acquire locks和release locks。

**补充说明：** prevention 与 detection 不是同义词。 Week9B所给TXT无该部分讲解（历史来源范围）。

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第7页（幻灯片7）；11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）

**补充语境：** Week10教师语境：获取锁／释放锁；acquire或obtain a lock，与release a lock配对。

**补充说明：** before releasing any lock保留“任何一个”限制；TXT的log多为lock的疑似转写。

**补充英文：** Get a lock / let the lock go.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第7页（幻灯片7）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符4241–4278；搜索“obtain the lock before it can process.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第7页（幻灯片7）；11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符4241–4278；搜索“obtain the lock before it can process.”

### order transactions (by timestamps)

**稳定ID：** b7da7b056ef1

**类别：** reading

**中文解释：** 使用……给事务排序；此处是 timestamps。

**简单英文（整理解释）：** Use something to put transactions in an order.

**必要说明：** order 作动词时表示排序。 本次 TXT 无该部分讲解。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Deadlock prevention: Use transaction timestamps to order transactions.

**原文来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）

### construct a wait-for graph

**稳定ID：** c9c28325193c

**类别：** reading

**中文解释：** 构建等待图；deadlock detection 的课件说明。

**简单英文（整理解释）：** Build a graph of waiting dependencies.

**必要说明：** construct 是建立，不是检测结论本身。 本次 TXT 无该部分讲解。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）

### techniques used for …

**稳定ID：** 9675a9061e8c

**类别：** reading

**中文解释：** 处理死锁的三种技术：timeouts、prevention、detection。

**简单英文（整理解释）：** The three methods listed for dealing with deadlocks.

**必要说明：** 保留数量 three；课件不是说这些方法在所有系统中覆盖一切实现。 本次 TXT 无该部分讲解。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> How to handle deadlocks There are three techniques used for handling deadlocks.

**原文来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）

### obtain a timestamp at the start point

**稳定ID：** 48a3fa71c123

**类别：** reading

**中文解释：** 在开始时获得时间戳；不是等到 commit 时才获取。

**简单英文（整理解释）：** Get a timestamp when the transaction starts.

**必要说明：** each transaction 与 at the start point 都要保留。 Week9B所给TXT无该部分讲解（历史来源范围）。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> First, we obtained the timestamp for T1.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符14167–14206；搜索“First, we obtained the timestamp for T1.”

**补充语境：** obtain a timestamp＝获得时间戳；此处限定在事务开始时获得。

**补充说明：** stamp 此处作动词，不是邮票；increasing 修饰时间戳顺序。 Week9B所给TXT无该部分讲解（历史来源范围）。

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）

**补充语境：** Week10教师语境：在开始时获得时间戳；每个事务开始时获得，而非提交时才获得。

**补充说明：** 保留each transaction及start两个条件。TXT用obtained的例子说明，完整搭配来自PDF第13页。

**补充英文：** Get a timestamp when the transaction starts.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）；11IntroductionToTransactionProcessing_2.pdf · PDF第14页（幻灯片14）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符14167–14206；搜索“First, we obtained the timestamp for T1.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）；11IntroductionToTransactionProcessing_2.pdf · PDF第14页（幻灯片14）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符14167–14206；搜索“First, we obtained the timestamp for T1.”

### access is permitted in … order

**稳定ID：** 842916825703

**类别：** reading

**中文解释：** 允许按……顺序访问；本页规定 increasing order of timestamps。

**简单英文（整理解释）：** Access is allowed only in the stated order in this principle.

**必要说明：** permitted 表示被允许，不是一定已经执行。 本次 TXT 无该部分讲解。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）

### such + noun (referring back)

**稳定ID：** ca6ac35eb96c

**类别：** reading

**中文解释：** such + 名词：指前文提到的那类对象。这里such transaction指发出违规操作的那个事务，不是任意事务。

**简单英文（整理解释）：** The kind of thing just mentioned. Here it is the transaction that issued the operation.

**必要说明：** 不是中止任意事务或无条件中止所有事务。 本次 TXT 无该部分讲解。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第5页（幻灯片5）

### bug (in a program)

**稳定ID：** be4e11b5cfcc

**类别：** reading

**中文解释：** 程序中的缺陷或错误；这里bug不是昆虫。教师用它说明程序可能停止，进而使事务失败。

**简单英文（整理解释）：** A mistake or problem in a program.

**必要说明：** 未给出设备的正式定义；只解释本段背景用词。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写定位短句（未核对音频）

> some bugs

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**原文短句／描述：** 教师转写定位短句（未核对音频）

> power off

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**原文短句／描述：** 教师转写定位短句（未核对音频）

> hard disk drive

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**原文短句／描述：** 教师转写定位短句（未核对音频）

> SSD drive

**原文来源：** CSIT882_week9B--transcript.txt · TXT第2行

**全部来源：** CSIT882_week9B--transcript.txt · TXT第2行

### stamp data items / be stamped

**稳定ID：** cd7d59dc5293

**类别：** reading

**中文解释：** 给数据项加标记／被标记；TO原则中标记的是访问时间戳。stamp在这里是动词，不是“邮票”。

**简单英文（整理解释）：** Put a mark on data items; here the mark records access timestamps.

**必要说明：** stamp 此处作动词，不是邮票；increasing 修饰时间戳顺序。 本次 TXT 无该部分讲解。

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）
