# CSIT882 Week9 词汇

由本周可读JSON自动生成。原文与整理说明分开；跨周条目保留全部来源和不同义项。原PDF及完整录音TXT不在网站中。

## 重要疑点与来源限制

## 专业英语

### inline view

**稳定ID：** 28ae87f67977

**类别：** technical

**中文解释：** 内联视图：放在括号内，并用于另一个查询 FROM 子句的 SELECT 语句；可以有名称，也可以没有。

**简单英文（整理解释）：** A SELECT statement in parentheses, used in the FROM clause of another query. Its name is optional.

**必要说明：** 限定位置是另一个查询的 FROM；名称 optional（可选），不是必需。

**说明依据：** 课件术语

**课件原文定义：** 课件原文定义

> An inline view is a SELECT statement enclosed in ( and ) and used in the FROM clause of another query. It may be followed by an optional inline view name.

**定义来源：** Views.pdf · PDF第3页（幻灯片3）

**全部来源：** Views.pdf · PDF第3页（幻灯片3）

### view name

**稳定ID：** 94a98d86d5e4

**类别：** technical

**中文解释：** 视图名称：本页指执行 SELECT 时产生的临时关系表的名称。名称能在该 SELECT 内可使用表名的位置使用。

**简单英文（整理解释）：** A name used for the temporary relational table created while the SELECT statement is processed.

**必要说明：** 第3页语境是 inline view；不能把临时存在时间套用到保存的 relational view 定义。

**说明依据：** 课件术语

**课件原文定义：** 课件原文定义

> A view name is a name of a temporary relational table created while SELECT statement is processed

**定义来源：** Views.pdf · PDF第3页（幻灯片3）

**全部来源：** Views.pdf · PDF第3页（幻灯片3）

### temporary relational table

**稳定ID：** 7df67884acc2

**类别：** technical

**中文解释：** 临时关系表：这里只在包含该 inline view 的 SELECT 执行期间存在。不要据此等同于所有其他形式的临时表。

**简单英文（整理解释）：** A relational table that exists only while the SELECT statement containing the inline view is processed.

**必要说明：** only 限制临时结果存在时间；本页没有定义所有其他形式的临时表。

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> A temporary relational table is created only for a period of time when SELECT statement, that contains inline view is processed

**原文来源：** Views.pdf · PDF第3页（幻灯片3）

**全部来源：** Views.pdf · PDF第3页（幻灯片3）

### query

**稳定ID：** 8b397487fd34

**类别：** technical

**中文解释：** 查询：这里用于查找需要的数据。

**简单英文（整理解释）：** A statement used to find the required data.

**必要说明：**

**说明依据：** 辅助释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Inline views A query find the chair people of departments, that offer more than one course can be decomposed into the following queries Find the total number of courses offered by a department Find the chair people of departments, such that the total number of courses offered by a department is greater than one ( SELECT count(*) FROM COURSE WHERE COURSE.offered_by = ...

**原文来源：** Views.pdf · PDF第5页（幻灯片5）

**全部来源：** Views.pdf · PDF第5页（幻灯片5）；Views.pdf · PDF第6页（幻灯片6）；Views.pdf · PDF第7页（幻灯片7）；Views.pdf · PDF第8页（幻灯片8）

### statement / clause

**稳定ID：** 9c525f067aed

**类别：** technical

**中文解释：** 语句／子句：如 SELECT statement 是完整语句，FROM clause 是其中的一部分。这是基础阅读释义。

**简单英文（整理解释）：** A statement is a complete instruction; a clause is a part of it.

**必要说明：**

**说明依据：** 辅助释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Inline views An inline view is a SELECT statement enclosed in ( and ) and used in the FROM clause of another query.

**原文来源：** Views.pdf · PDF第3页（幻灯片3）

**全部来源：** Views.pdf · PDF第3页（幻灯片3）；Views.pdf · PDF第8页（幻灯片8）

### subquery / nested query

**稳定ID：** aa3794f6bbf1

**类别：** technical

**中文解释：** 子查询／嵌套查询：出现在另一个语句内部的查询。当前 PDF 用示例展示，未给完整定义。

**简单英文（整理解释）：** A query used inside another statement.

**必要说明：**

**说明依据：** 辅助释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> ) Scalar subquery that counts courses offered by a department ( SELECT chair, ( SELECT COUNT(*) FROM COURSE WHERE COURSE.offered_by = DEPARTMENT.name ) AS TOTALC FROM DEPARTMENT ) CHAIRTOTAL Query that calculates the total number of courses per department 7/26

**原文来源：** Views.pdf · PDF第7页（幻灯片7）

**全部来源：** Views.pdf · PDF第7页（幻灯片7）；Advanced DDL and DML statements.pdf · PDF第12页（幻灯片12）；Advanced DDL and DML statements.pdf · PDF第13页（幻灯片13）；Advanced DDL and DML statements.pdf · PDF第14页（幻灯片14）；Advanced DDL and DML statements.pdf · PDF第15页（幻灯片15）；Advanced DDL and DML statements.pdf · PDF第16页（幻灯片16）；Advanced DDL and DML statements.pdf · PDF第17页（幻灯片17）

### scalar subquery

**稳定ID：** ea342cf79415

**类别：** technical

**中文解释：** 标量子查询：V7 中返回某个系的一个课程数量值。课件没有完整讨论它的所有限制。

**简单英文（整理解释）：** In this example, the subquery returns one course count for a department.

**必要说明：**

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> ) Scalar subquery that counts courses offered by a department ( SELECT chair, ( SELECT COUNT(*) FROM COURSE WHERE COURSE.offered_by = DEPARTMENT.name ) AS TOTALC FROM DEPARTMENT ) CHAIRTOTAL Query that calculates the total number of courses per department 7/26

**原文来源：** Views.pdf · PDF第7页（幻灯片7）

**全部来源：** Views.pdf · PDF第7页（幻灯片7）

### WITH clause

**稳定ID：** 863d62387a4c

**类别：** technical

**中文解释：** WITH 子句：先给查询结果取名，再供后面的查询使用。

**简单英文（整理解释）：** A clause that defines temporary named query results for use in the following query.

**必要说明：** WITH 查询定义和保存的 relational view 要分开；最后一个定义后不加逗号（V11–12）。

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> A query definition in a WITH clause creates a temporary named result, similar to an inline view, with the name specified before the SELECT statement.

**原文来源：** Views.pdf · PDF第10页（幻灯片10）

**全部来源：** Views.pdf · PDF第10页（幻灯片10）；Views.pdf · PDF第11页（幻灯片11）；Views.pdf · PDF第12页（幻灯片12）

### query definition

**稳定ID：** a251bcbfbb07

**类别：** technical

**中文解释：** 查询定义：WITH 内的“名称 AS (SELECT…)”；后面的定义可以引用前面的定义。

**简单英文（整理解释）：** A named SELECT definition inside the WITH clause.

**必要说明：**

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> A query definition in a WITH clause creates a temporary named result, similar to an inline view, with the name specified before the SELECT statement.

**原文来源：** Views.pdf · PDF第10页（幻灯片10）

**补充语境：** 有名称的临时结果：课件用它描述 WITH 中的查询定义产生的结果。

**补充说明：**

**补充来源：** Views.pdf · PDF第10页（幻灯片10）

**全部来源：** Views.pdf · PDF第10页（幻灯片10）；Views.pdf · PDF第11页（幻灯片11）

### relational view / virtual relational table / derived relational table

**稳定ID：** 8145b3b22745

**类别：** technical

**中文解释：** 关系视图／虚拟关系表／派生关系表：不持久保存结果数据；使用时重新计算。但保存名称与定义它的 SELECT。后三种表述在本页描述同一个概念。

**简单英文（整理解释）：** A virtual table whose result data is not stored persistently and is computed each time it is used in a SELECT statement. Its name and defining SELECT statement are stored.

**必要说明：** 不持久保存结果数据，但保存名称与 SELECT 定义。每次 SELECT 使用时重新计算；定义替换名称，成为 inline view。

**说明依据：** 课件术语

**课件原文定义：** 课件原文定义

> A relational view is a virtual relational table (derived relational table), that occupies no persistent storage and it is computed from very beginning every time it is used in SELECT statement

**定义来源：** Views.pdf · PDF第19页（幻灯片19）

**原文短句／描述：** 原文说明

> A relational view is stored by a database management system as a pair (name of a view, SELECT statement that defines the structure and contents of the view)

**原文来源：** Views.pdf · PDF第19页（幻灯片19）

**原文短句／描述：** 原文说明

> Each time a name of a relational view is used in SELECT statement, its definition replaces the name of a view and it becomes an inline view

**原文来源：** Views.pdf · PDF第20页（幻灯片20）

**原文短句／描述：** 教师转写原句

> doesn't store actual data

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第23行

**补充语境：** 虚拟的；这里结果能像表一样使用，却不持久保存结果数据。

**补充说明：**

**补充来源：** Views.pdf · PDF第19页（幻灯片19）

**全部来源：** Views.pdf · PDF第19页（幻灯片19）；Views.pdf · PDF第20页（幻灯片20）；CSIT882 Week9 LectA-transcript.txt · TXT第23行

### persistent storage

**稳定ID：** 7d92f0c9f501

**类别：** technical

**中文解释：** 持久存储：用于长期保留数据的存储。本页未重新给完整定义；这里重点是区分保存查询定义与保存查询结果。

**简单英文（整理解释）：** Storage in which data is kept beyond the temporary processing of a query.

**必要说明：** 不要把“不保存结果数据”理解成“不保存定义”。完整存储机制当前资料未说明。

**说明依据：** 辅助释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文语境

> A relational view is a virtual relational table (derived relational table), that occupies no persistent storage and it is computed from very beginning every time it is used in SELECT statement

**原文来源：** Views.pdf · PDF第19页（幻灯片19）

**全部来源：** Views.pdf · PDF第19页（幻灯片19）；Advanced DDL and DML statements.pdf · PDF第3页（幻灯片3）

### CREATE VIEW

**稳定ID：** 7db2fa8c55a7

**类别：** technical

**中文解释：** 创建视图语句：给 SELECT 定义建立一个视图名称，也可以指定视图列名。

**简单英文（整理解释）：** A statement that creates a named view from a SELECT definition.

**必要说明：** VDEPT(name, total_courses) 指定视图的列名，不修改原表列名。资料用代码展示，没有单独正式定义 CREATE VIEW。

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件代码片段

> CREATE VIEW VDEPT( name, total_courses ) AS

**原文来源：** Views.pdf · PDF第21页（幻灯片21）

**全部来源：** Views.pdf · PDF第21页（幻灯片21）；Views.pdf · PDF第24页（幻灯片24）；Views.pdf · PDF第25页（幻灯片25）

### LEFT OUTER JOIN

**稳定ID：** 7bb0c54830fd

**类别：** technical

**中文解释：** 左外连接：本例保留所有系，包括没有课程的系。完整一般定义不是本页提供的。

**简单英文（整理解释）：** In this example, it keeps every department, including departments with no courses.

**必要说明：** 本例保留无课程的部门。原文 inlude 为拼写问题；简单释义写 include。当前资料未给完整一般定义。

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> Note, that LEFT OUTER JOIN operation is used to join the relational tables DEPARTMENT and COURSE to inlude all names of departments no matter if a department offers a course or not

**原文来源：** Views.pdf · PDF第21页（幻灯片21）

**全部来源：** Views.pdf · PDF第10页（幻灯片10）；Views.pdf · PDF第21页（幻灯片21）

### GROUP BY / HAVING

**稳定ID：** 054578d4bf47

**类别：** technical

**中文解释：** 分组／分组后的条件筛选：例子按系分组，再用 HAVING 筛选课程数量符合条件的组。

**简单英文（整理解释）：** The examples group courses by department and keep groups that meet a condition.

**必要说明：** 视图查询用 WHERE total_courses > 1；直接分组用 HAVING count(cnum) > 1。两者筛选条件相同，课件直接写法还输出计数列。 来源疑点：T9第83行说less than one course，与PDF的>1及T9第65行greater than one冲突；按PDF讲大于1，不能确定是口误还是转写错误。

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件代码片段

> GROUP BY name HAVING count(cnum) > 1;

**原文来源：** Views.pdf · PDF第22页（幻灯片22）

**原文短句／描述：** 转写疑点：与PDF条件冲突

> less than one course

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第83行

**全部来源：** Views.pdf · PDF第6页（幻灯片6）；Views.pdf · PDF第22页（幻灯片22）；CSIT882 Week9 LectA-transcript.txt · TXT第83行

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

### intersection

**稳定ID：** ef6395df6519

**类别：** technical

**中文解释：** 交集：同时出现在两个结果中的名称。本例是同时开设 6 和 12 学分课程的系。这里只解释本例，不添加 SQL 去重规则。

**简单英文（整理解释）：** The names present in both results.

**必要说明：** 本例 both 要求部门开设两类课程；VNAME 输出部门名称，VCHAIR 输出负责人。当前材料没有在此说明去重规则。

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> VNAME: Find the names of departments included in bothV6andV12

**原文来源：** Views.pdf · PDF第23页（幻灯片23）

**全部来源：** Views.pdf · PDF第23页（幻灯片23）；Views.pdf · PDF第24页（幻灯片24）

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

### Data Definition Language (DDL)

**稳定ID：** 08741a8989e8

**类别：** technical

**中文解释：** 数据定义语言：本节把 TRUNCATE TABLE、带子查询的 CREATE TABLE 归入 DDL，并说这些操作不能撤销；这不是本页给出的完整类别定义。

**简单英文（整理解释）：** The category used here for TRUNCATE TABLE and CREATE TABLE with a subquery.

**必要说明：** 课件按本节操作说明 DDL 不能撤销；当前资料未列出全部系统及事务条件，不外推成所有环境规则。

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> TRUNCATE TABLE statement is a Data Definition Language (DDL) statement and because of that it cannot be reversed (in the future we shall learn how to reverse DML statements)

**原文来源：** Advanced DDL and DML statements.pdf · PDF第3页（幻灯片3）

**全部来源：** Advanced DDL and DML statements.pdf · PDF第3页（幻灯片3）；Advanced DDL and DML statements.pdf · PDF第6页（幻灯片6）

### Data Manipulation Language (DML)

**稳定ID：** 5415dfcd3923

**类别：** technical

**中文解释：** 数据操纵语言：本页将带子查询的 INSERT 归入 DML，并说可以用 ROLLBACK 撤销。全部适用前提在当前资料中未说明。

**简单英文（整理解释）：** The category used here for INSERT with a subquery; its action can be reversed with ROLLBACK according to this lecture.

**必要说明：** 原文 Manipluation、an 是拼写/语法问题，释义使用 Manipulation。当前资料未列出所有 ROLLBACK 适用前提。

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> INSERT statement with subquery is Data Manipluation Language (DML) statement an because of that its actions can be reversed with ROLLBACK statement

**原文来源：** Advanced DDL and DML statements.pdf · PDF第9页（幻灯片9）

**全部来源：** Advanced DDL and DML statements.pdf · PDF第9页（幻灯片9）

### TRUNCATE TABLE

**稳定ID：** 6ec2df0a9c66

**类别：** technical

**中文解释：** 清空表语句：删除全部行，没有 WHERE，不能选取部分行；课件说会归还未用存储空间。教师补充：表结构仍保留。

**简单英文（整理解释）：** A statement that permanently deletes all rows, has no WHERE clause, and returns unused storage to the free storage pool.

**必要说明：** 没有 WHERE，只能删除全部行；课件说不能撤销、较 DELETE 快并归还未用存储。表结构保留为此前教师 TXT 补充，已重新核对T9；未核对音频。原文 permamenetly 为笔误。

**说明依据：** 课件术语

**课件原文定义：** 课件原文定义

> TRUNCATE TABLE statement permamenetly deletes all rows from a relational table

**定义来源：** Advanced DDL and DML statements.pdf · PDF第3页（幻灯片3）

**原文短句／描述：** 原文说明

> TRUNCATE TABLE statement does not have WHERE clause and because of that it can only delete ALL rows from a relational table

**原文来源：** Advanced DDL and DML statements.pdf · PDF第3页（幻灯片3）

**原文短句／描述：** 教师转写原句

> truncate doesn't remove entire table structure of the table

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第329行

**全部来源：** Advanced DDL and DML statements.pdf · PDF第3页（幻灯片3）；CSIT882 Week9 LectA-transcript.txt · TXT第329行

### rollback information

**稳定ID：** a1907f7f06a2

**类别：** technical

**中文解释：** 回滚信息：用于撤销操作的信息。课件说 TRUNCATE 不需要保存它，因此删除全部行比 DELETE 快。

**简单英文（整理解释）：** Information saved to allow an action to be reversed.

**必要说明：**

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> TRUNCATE TABLE statement deletes all rows much faster than DELETE statement because a database system does not need to save rollback information

**原文来源：** Advanced DDL and DML statements.pdf · PDF第3页（幻灯片3）

**全部来源：** Advanced DDL and DML statements.pdf · PDF第3页（幻灯片3）

### pool of free persistent storage

**稳定ID：** 74eb39fd6eac

**类别：** technical

**中文解释：** 空闲持久存储池：可重新分配使用的存储空间。

**简单英文（整理解释）：** Persistent storage available for reuse.

**必要说明：**

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> TRUNCATE TABLE statement returns unused persistent storage to a pool of free persistent storage while DELETE statement does not do that

**原文来源：** Advanced DDL and DML statements.pdf · PDF第3页（幻灯片3）

**全部来源：** Advanced DDL and DML statements.pdf · PDF第3页（幻灯片3）

### CREATE TABLE with a subquery

**稳定ID：** 36b1a765dba6

**类别：** technical

**中文解释：** 带子查询的建表语句：新建表，并把 SELECT 的结果保存进去。

**简单英文（整理解释）：** A statement that creates a table and stores the result of a SELECT statement in it.

**必要说明：** 本方式创建表并保存结果；课件说除 NULL/NOT NULL 外不施加其他约束，可之后 ALTER TABLE 添加。

**说明依据：** 课件术语

**课件原文定义：** 课件原文定义

> CREATE TABLE statement with subquery creates a relational table and saves in the table the results of a given SELECT statement

**定义来源：** Advanced DDL and DML statements.pdf · PDF第6页（幻灯片6）

**全部来源：** Advanced DDL and DML statements.pdf · PDF第6页（幻灯片6）

### consistency constraint

**稳定ID：** acae5b713bf2

**类别：** technical

**中文解释：** 一致性约束：数据必须满足的规则。课件说上述建表方式除 NULL/NOT NULL 外不施加其他一致性约束；可以之后添加。

**简单英文（整理解释）：** A rule that the data must meet.

**必要说明：** except NULL/NOT NULL 是明确例外。TXT “except not null and not null constraint” 疑似转写错误，未核对音频。

**说明依据：** 辅助释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> A relational table created by CREATE TABLE statement with subquery does not have any consistency constraints enforced except NULL/NOT NULL constraint

**原文来源：** Advanced DDL and DML statements.pdf · PDF第6页（幻灯片6）

**全部来源：** Advanced DDL and DML statements.pdf · PDF第6页（幻灯片6）；Advanced DDL and DML statements.pdf · PDF第7页（幻灯片7）

### NULL / NOT NULL constraint

**稳定ID：** 76127bfc1667

**类别：** technical

**中文解释：** NULL／NOT NULL 约束：列允许或不允许 NULL。当前 PDF 未给 NULL 的完整语义定义；不能把它随意理解为数字 0。

**简单英文（整理解释）：** The examples allow or disallow NULL in a column.

**必要说明：** 当前课件未给 NULL 的完整语义定义；不能将 NULL 随意理解为数字0。

**说明依据：** 辅助释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> A relational table created by CREATE TABLE statement with subquery does not have any consistency constraints enforced except NULL/NOT NULL constraint

**原文来源：** Advanced DDL and DML statements.pdf · PDF第6页（幻灯片6）

**全部来源：** Views.pdf · PDF第4页（幻灯片4）；Advanced DDL and DML statements.pdf · PDF第6页（幻灯片6）；Advanced DDL and DML statements.pdf · PDF第9页（幻灯片9）

### alias name

**稳定ID：** 0e28b344f03e

**类别：** technical

**中文解释：** 别名：给列或函数结果指定的名字，例如 COUNT(cnum) 的 totc。建表时它可成为新列名。

**简单英文（整理解释）：** Another name attached to a column or function result.

**必要说明：**

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> The names of columns in a new relational table are taken from the names of columns in SELECT clause or from alias names attached to the columns names or functions

**原文来源：** Advanced DDL and DML statements.pdf · PDF第7页（幻灯片7）

**全部来源：** Advanced DDL and DML statements.pdf · PDF第7页（幻灯片7）；Advanced DDL and DML statements.pdf · PDF第10页（幻灯片10）

### ALTER TABLE

**稳定ID：** f8e9868e81f9

**类别：** technical

**中文解释：** 修改表语句：本例用于给已有表增加约束或列。

**简单英文（整理解释）：** A statement used to add constraints or a column to an existing table.

**必要说明：**

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> The consistency constraints can be enforced with ALTER TABLE statements

**原文来源：** Advanced DDL and DML statements.pdf · PDF第7页（幻灯片7）

**全部来源：** Advanced DDL and DML statements.pdf · PDF第7页（幻灯片7）；Advanced DDL and DML statements.pdf · PDF第17页（幻灯片17）

### PRIMARY KEY constraint

**稳定ID：** 411fc7b316de

**类别：** technical

**中文解释：** 主键约束：本例把 DCNT.name 指定为主键。当前三份 PDF 未重新给主键的完整定义。

**简单英文（整理解释）：** A constraint placed on name in the DCNT example.

**必要说明：** 资料给出 PRIMARY KEY(name) 例子，当前三份 PDF 未重述主键完整定义。

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件代码片段

> ALTER TABLE DCNT ADD CONSTRAINT DCNT_pkey PRIMARY KEY(name);

**原文来源：** Advanced DDL and DML statements.pdf · PDF第7页（幻灯片7）

**全部来源：** Advanced DDL and DML statements.pdf · PDF第7页（幻灯片7）；Advanced DDL and DML statements.pdf · PDF第9页（幻灯片9）

### FOREIGN KEY / REFERENCES

**稳定ID：** 6afeacdee88c

**类别：** technical

**中文解释：** 外键／引用：本例 DCNT 中出现的系名须在 DEPARTMENT 中存在。完整外键定义并未在本页重新提供。

**简单英文（整理解释）：** A constraint linking DCNT.name to DEPARTMENT.name in this example.

**必要说明：** 完整外键定义未在本页提供；本例约束关系及中文说明含此前教师解释。

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件代码片段

> ALTER TABLE DCNT ADD CONSTRAINT DCNT_fkey FOREIGN KEY (name) REFERENCES DEPARTMENT(name);

**原文来源：** Advanced DDL and DML statements.pdf · PDF第7页（幻灯片7）

**原文短句／描述：** 教师转写原句

> any department exists in DCNT should exist in department as well

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第518行

**全部来源：** Advanced DDL and DML statements.pdf · PDF第7页（幻灯片7）；Advanced DDL and DML statements.pdf · PDF第9页（幻灯片9）；CSIT882 Week9 LectA-transcript.txt · TXT第518行

### INSERT with a subquery

**稳定ID：** 5bc01a1822b7

**类别：** technical

**中文解释：** 带子查询的插入语句：把 SELECT 返回的行插入已有表。区别于新建表后保存结果的 CREATE TABLE。

**简单英文（整理解释）：** A statement that inserts the rows returned by SELECT into a table.

**必要说明：** 插入已有表，不是创建表；A10 不需要 COUNT(cnum) 后的列别名。原文 retrived 为拼写问题。

**说明依据：** 课件术语

**课件原文定义：** 课件原文定义

> INSERT statement with subquery inserts into a relational table the rows retrived by a given SELECT statement

**定义来源：** Advanced DDL and DML statements.pdf · PDF第9页（幻灯片9）

**原文短句／描述：** 原文说明

> Note, that in this case there is no need for an alias name following COUNT(cnum)

**原文来源：** Advanced DDL and DML statements.pdf · PDF第10页（幻灯片10）

**全部来源：** Advanced DDL and DML statements.pdf · PDF第9页（幻灯片9）；Advanced DDL and DML statements.pdf · PDF第10页（幻灯片10）

### DELETE with a subquery

**稳定ID：** d4c1cd47fc4b

**类别：** technical

**中文解释：** 带子查询的删除语句：删除所有满足 WHERE 条件的行，其中条件包含子查询。

**简单英文（整理解释）：** A statement that deletes all rows meeting a WHERE condition that includes a subquery.

**必要说明：**

**说明依据：** 课件术语

**课件原文定义：** 课件原文定义

> DELETE statement with subquery deletes from a relational table all rows that satisfy WHERE condition WHERE condition includes a subquery

**定义来源：** Advanced DDL and DML statements.pdf · PDF第12页（幻灯片12）

**全部来源：** Advanced DDL and DML statements.pdf · PDF第12页（幻灯片12）；Advanced DDL and DML statements.pdf · PDF第13页（幻灯片13）

### correlated nested query

**稳定ID：** 44a97ded46f9

**类别：** technical

**中文解释：** 关联嵌套查询：本例内层查询引用外层的 DEPARTMENT.name。课件使用了这个术语，但未重述完整定义。

**简单英文（整理解释）：** In this example, the inner query refers to DEPARTMENT.name from the outer DELETE.

**必要说明：** 本例引用外层 DEPARTMENT.name；原文 correleated 为拼写问题。当前资料未重述完整定义。

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> It is the same reference to a relational table DEPARTMENT as in a correleated nested query

**原文来源：** Advanced DDL and DML statements.pdf · PDF第13页（幻灯片13）

**全部来源：** Advanced DDL and DML statements.pdf · PDF第13页（幻灯片13）

### EXISTS / NOT EXISTS / negated existential quantifier

**稳定ID：** a609ad40c38e

**类别：** technical

**中文解释：** EXISTS／NOT EXISTS／被否定的存在量词：本例 NOT EXISTS 检查“找不到属于该系的课程”。课件图注使用 negated existential quantifier，不应只翻成普通的“存在”。

**简单英文（整理解释）：** In this example, NOT EXISTS selects departments for which no matching course is found.

**必要说明：** NOT EXISTS 找不到匹配课程的部门；不能漏掉 NOT。课件图注称 negated existential quantifier。

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件代码片段

> WHERE NOT EXISTS ( SELECT 'whatever' FROM COURSE WHERE COURSE.offered_by = DEPARTMENT.name );

**原文来源：** Advanced DDL and DML statements.pdf · PDF第13页（幻灯片13）

**补充语境：** 被否定的；本节对应 NOT EXISTS。

**补充说明：**

**补充来源：** Advanced DDL and DML statements.pdf · PDF第13页（幻灯片13）

**补充语境：** 与“是否存在”有关的。

**补充说明：**

**补充来源：** Advanced DDL and DML statements.pdf · PDF第13页（幻灯片13）

**补充语境：** 量词；本页用于指存在性判断。

**补充说明：**

**补充来源：** Advanced DDL and DML statements.pdf · PDF第13页（幻灯片13）

**全部来源：** Advanced DDL and DML statements.pdf · PDF第13页（幻灯片13）

### UPDATE with a subquery

**稳定ID：** 4f92c19763a7

**类别：** technical

**中文解释：** 带子查询的更新语句：WHERE 决定哪些行满足条件，SET 决定改成什么值；子查询可在 WHERE、SET 或两者中出现。

**简单英文（整理解释）：** A statement that changes rows meeting WHERE, using values determined by SET. A subquery can occur in WHERE, SET, or both.

**必要说明：** 子查询可以在 WHERE、SET 或两者中出现。不要把 or in both 简化成只能二选一。

**说明依据：** 课件术语

**课件原文定义：** 课件原文定义

> UPDATE statement with subquery updates in a relational table all rows that satisfy WHERE condition with the values determined in SET clause

**定义来源：** Advanced DDL and DML statements.pdf · PDF第15页（幻灯片15）

**原文短句／描述：** 原文说明

> UPDATE statement with subquery can use a subquery in SET clause or in both WHERE and SET clauses

**原文来源：** Advanced DDL and DML statements.pdf · PDF第16页（幻灯片16）

**全部来源：** Advanced DDL and DML statements.pdf · PDF第15页（幻灯片15）；Advanced DDL and DML statements.pdf · PDF第16页（幻灯片16）；Advanced DDL and DML statements.pdf · PDF第17页（幻灯片17）

### SET clause

**稳定ID：** a9eeca2e04e6

**类别：** technical

**中文解释：** SET 子句：UPDATE 中决定新值的部分。区别于服务器变量的 SET statement。

**简单英文（整理解释）：** The part of UPDATE that determines the new values.

**必要说明：** 本页是 UPDATE 的 SET clause；R13 是修改变量的 SET statement，语境不同。

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> UPDATE statement with subquery updates in a relational table all rows that satisfy WHERE condition with the values determined in SET clause

**原文来源：** Advanced DDL and DML statements.pdf · PDF第15页（幻灯片15）

**全部来源：** Advanced DDL and DML statements.pdf · PDF第15页（幻灯片15）；Advanced DDL and DML statements.pdf · PDF第16页（幻灯片16）；Advanced DDL and DML statements.pdf · PDF第17页（幻灯片17）；Architecture of Relational Database Server.pdf · PDF第13页（幻灯片13）

### IN condition

**稳定ID：** f80aa49c9a15

**类别：** technical

**中文解释：** IN 条件：本例判断一个值是否在子查询返回的值中。

**简单英文（整理解释）：** The examples test whether a value is among values returned by a subquery.

**必要说明：**

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件代码片段

> WHERE name IN ( SELECT offered_by FROM COURSE GROUP BY offered_by HAVING COUNT(cnum) > 20 );

**原文来源：** Advanced DDL and DML statements.pdf · PDF第17页（幻灯片17）

**全部来源：** Advanced DDL and DML statements.pdf · PDF第12页（幻灯片12）；Advanced DDL and DML statements.pdf · PDF第17页（幻灯片17）

### attribute

**稳定ID：** e472fcee44d2

**类别：** technical

**中文解释：** 属性：本例图注用 attribute 指新增的 total_courses 列。

**简单英文（整理解释）：** The example calls the added total_courses column an attribute.

**必要说明：**

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件图注

> ALTER TABLE statement that adds an attribute

**原文来源：** Advanced DDL and DML statements.pdf · PDF第17页（幻灯片17）

**全部来源：** Advanced DDL and DML statements.pdf · PDF第17页（幻灯片17）

### client-server architecture

**稳定ID：** 441f0e653746

**类别：** technical

**中文解释：** 客户端—服务器架构：多个客户端通过局域或广域网络连接数据库服务器。

**简单英文（整理解释）：** An arrangement in which clients connect to a database server over a local or wide-area network.

**必要说明：** 原文 connects 搭配问题保留在引用中；简单释义使用自然英语。

**说明依据：** 课件术语

**课件原文定义：** 课件原文定义

> A client-server architecture means, that a number of clients connects to a database server over a local or wide-area network

**定义来源：** Architecture of Relational Database Server.pdf · PDF第3页（幻灯片3）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第3页（幻灯片3）

### client / database server

**稳定ID：** 6a06a0741e18

**类别：** technical

**中文解释：** 客户端／数据库服务器：客户端连接服务器；服务器处理连接、语句及数据存取。

**简单英文（整理解释）：** Clients connect to the server; the server handles connections, processes statements, and accesses stored data.

**必要说明：**

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> More than one client can be connected to a database server at the same time.

**原文来源：** Architecture of Relational Database Server.pdf · PDF第5页（幻灯片5）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第3页（幻灯片3）；Architecture of Relational Database Server.pdf · PDF第4页（幻灯片4）；Architecture of Relational Database Server.pdf · PDF第5页（幻灯片5）

### local network / wide-area network

**稳定ID：** 9b2519a44ad5

**类别：** technical

**中文解释：** 局域网络／广域网络：本页只列出两种连接范围，未给详细网络定义。

**简单英文（整理解释）：** Networks used for local connections or connections over a wider area.

**必要说明：**

**说明依据：** 辅助释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文语境

> over a local or wide-area network

**原文来源：** Architecture of Relational Database Server.pdf · PDF第3页（幻灯片3）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第3页（幻灯片3）

### layer

**稳定ID：** 31ba18460b56

**类别：** technical

**中文解释：** 层：架构中承担某类工作的一部分；课件正文归纳为三层。

**简单英文（整理解释）：** One part of the server architecture with a particular role.

**必要说明：**

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> A database server is implemented over three layers:

**原文来源：** Architecture of Relational Database Server.pdf · PDF第4页（幻灯片4）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第4页（幻灯片4）

### connection and thread handler

**稳定ID：** eb3e71c71d5b

**类别：** technical

**中文解释：** 连接与线程处理组件。

**简单英文（整理解释）：** The diagram component that handles client connections and their threads.

**必要说明：** PDF 提供图中名称，功能解释含此前教师 TXT 补充；已重新核对T9第578行；未核对音频。未给正式定义。

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句

> Connection and thread handler

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第578行

**全部来源：** Architecture of Relational Database Server.pdf · PDF第3页（幻灯片3）；CSIT882 Week9 LectA-transcript.txt · TXT第578行

### thread

**稳定ID：** 43d21fc29918

**类别：** technical

**中文解释：** 线程：通常每个客户端连接有自己的处理线程，由操作系统安排到 CPU 核心运行。这里是课件描述，不是完整线程定义。

**简单英文（整理解释）：** Each client connection is typically handled by its own thread; the operating system schedules it on a CPU core.

**必要说明：** typically = 通常，不是每个连接在所有情况下必定如此。

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> Each client connection is typically handled by its own thread within the database server

**原文来源：** Architecture of Relational Database Server.pdf · PDF第5页（幻灯片5）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第5页（幻灯片5）

### operating system / CPU core

**稳定ID：** 275add9bc56d

**类别：** technical

**中文解释：** 操作系统／CPU 核心：本页说明两者在线程运行中的关系，没有解释 CPU 缩写全称或硬件细节。

**简单英文（整理解释）：** The operating system schedules a thread to run on a CPU core.

**必要说明：**

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> A thread is scheduled by the operating system to run on a CPU core.

**原文来源：** Architecture of Relational Database Server.pdf · PDF第5页（幻灯片5）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第5页（幻灯片5）

### authentication

**稳定ID：** 9216d8b98057

**类别：** technical

**中文解释：** 身份认证：确认客户端身份，依据用户名、来源主机和密码。

**简单英文（整理解释）：** Checking who the client is, using username, originating host, and password.

**必要说明：** 认证依据 username、originating host、password；连接后仍要核查 privileges。

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> Authentication is based on the username, originating host, and password.

**原文来源：** Architecture of Relational Database Server.pdf · PDF第5页（幻灯片5）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第5页（幻灯片5）；CSIT882 Week9 LectA-transcript.txt · TXT第578行

### originating host

**稳定ID：** 568daa340e95

**类别：** technical

**中文解释：** 来源主机：客户端从哪台主机发起连接。

**简单英文（整理解释）：** The host from which the client connects.

**必要说明：**

**说明依据：** 辅助释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文术语

> originating host

**原文来源：** Architecture of Relational Database Server.pdf · PDF第5页（幻灯片5）

**补充语境：** 来自……的；originating host 是来源主机。

**补充说明：**

**补充来源：** Architecture of Relational Database Server.pdf · PDF第5页（幻灯片5）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第5页（幻灯片5）；CSIT882 Week9 LectA-transcript.txt · TXT第578行

### privilege

**稳定ID：** a22c826bda31

**类别：** technical

**中文解释：** 权限：允许访问表或执行某种操作。认证身份后，还要检查权限。

**简单英文（整理解释）：** Permission to access a table or perform an action.

**必要说明：**

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> Once a client is connected, the server verifies whether it has the privileges to access the relational tables in a database

**原文来源：** Architecture of Relational Database Server.pdf · PDF第5页（幻灯片5）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第5页（幻灯片5）；Architecture of Relational Database Server.pdf · PDF第18页（幻灯片18）；Architecture of Relational Database Server.pdf · PDF第20页（幻灯片20）

### parser and access control handler

**稳定ID：** 9188bb004e15

**类别：** technical

**中文解释：** 解析与访问控制组件：教师说明它检查查询语法、查询含义及运行权限。PDF 只有图中名称。

**简单英文（整理解释）：** The diagram component for understanding the query and checking permission to run it.

**必要说明：** 图中名称及教师的语法、含义、权限解释；不是课件正文完整定义。已按新提供T9复核；未核对音频。

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句

> syntax is correct or not

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第578行

**全部来源：** Architecture of Relational Database Server.pdf · PDF第3页（幻灯片3）；CSIT882 Week9 LectA-transcript.txt · TXT第578行

### query optimizer / optimization

**稳定ID：** 92cd8cea4445

**类别：** technical

**中文解释：** 查询优化器／优化：考虑怎样更有效地运行查询。课件没有要求在此展开优化方法。

**简单英文（整理解释）：** The component or process that considers how to run the query more efficiently.

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文语境

> DDL and DML processing like query processing, analysis, optimization, caching, and all built-in functions, data entry, data modification, creating database structures, etc

**原文来源：** Architecture of Relational Database Server.pdf · PDF第4页（幻灯片4）

**原文短句／描述：** 教师转写原句

> faster and more efficient

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第578行

**全部来源：** Architecture of Relational Database Server.pdf · PDF第3页（幻灯片3）；Architecture of Relational Database Server.pdf · PDF第4页（幻灯片4）；CSIT882 Week9 LectA-transcript.txt · TXT第578行

### query processor / query processing

**稳定ID：** f58f6c7fe814

**类别：** technical

**中文解释：** 查询处理器／查询处理：处理和运行查询，并返回结果。

**简单英文（整理解释）：** The component or work involved in processing and running the query.

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文语境

> DDL and DML processing like query processing, analysis, optimization, caching, and all built-in functions, data entry, data modification, creating database structures, etc

**原文来源：** Architecture of Relational Database Server.pdf · PDF第4页（幻灯片4）

**原文短句／描述：** 教师转写原句

> query processor can return the result

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第578行

**全部来源：** Architecture of Relational Database Server.pdf · PDF第3页（幻灯片3）；Architecture of Relational Database Server.pdf · PDF第4页（幻灯片4）；CSIT882 Week9 LectA-transcript.txt · TXT第578行

### data buffer cache / caching

**稳定ID：** e3f83de807a5

**类别：** technical

**中文解释：** 数据缓冲缓存／缓存处理：图中位于查询处理器和存储引擎之间；教师解释可更快读取其中的数据。不要把它与 relational view 自动保存结果混为一谈。

**简单英文（整理解释）：** The diagram shows a cache between the processor and storage engines; the teacher says data there can be accessed faster.

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文语境

> DDL and DML processing like query processing, analysis, optimization, caching, and all built-in functions, data entry, data modification, creating database structures, etc

**原文来源：** Architecture of Relational Database Server.pdf · PDF第4页（幻灯片4）

**原文短句／描述：** 教师转写原句

> Data can be in the cache

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第578行

**全部来源：** Architecture of Relational Database Server.pdf · PDF第3页（幻灯片3）；Architecture of Relational Database Server.pdf · PDF第4页（幻灯片4）；CSIT882 Week9 LectA-transcript.txt · TXT第578行

### database engine / storage engine

**稳定ID：** 46ceaf470e3a

**类别：** technical

**中文解释：** 数据库引擎／存储引擎：负责存储和取回数据的组件。

**简单英文（整理解释）：** A component responsible for storing and retrieving data.

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> Database (storage) engines responsible for storing and retrieving data, e.g. InnoDB, MyISAM, MEMORY, CSV, etc

**原文来源：** Architecture of Relational Database Server.pdf · PDF第4页（幻灯片4）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第4页（幻灯片4）

### built-in function

**稳定ID：** 2322e8d98c00

**类别：** technical

**中文解释：** 内置函数：系统本身提供的函数。本页只列出这个类别。

**简单英文（整理解释）：** A function already provided by the system.

**必要说明：**

**说明依据：** 辅助释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文语境

> DDL and DML processing like query processing, analysis, optimization, caching, and all built-in functions, data entry, data modification, creating database structures, etc

**原文来源：** Architecture of Relational Database Server.pdf · PDF第4页（幻灯片4）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第4页（幻灯片4）

### data entry / data modification

**稳定ID：** f2c1109a551a

**类别：** technical

**中文解释：** 数据录入／数据修改：服务器第二层涉及的工作。

**简单英文（整理解释）：** Entering data / changing data.

**必要说明：**

**说明依据：** 辅助释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文语境

> DDL and DML processing like query processing, analysis, optimization, caching, and all built-in functions, data entry, data modification, creating database structures, etc

**原文来源：** Architecture of Relational Database Server.pdf · PDF第4页（幻灯片4）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第4页（幻灯片4）

### command-line interface / shell

**稳定ID：** e0e47bea71af

**类别：** technical

**中文解释：** 命令行界面／shell：课件中输入管理命令的接口。没有执行这些命令。

**简单英文（整理解释）：** The interface through which the examples start, stop, and check the server.

**必要说明：**

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> A database server can be started through the operating system's command-line interface (shell)

**原文来源：** Architecture of Relational Database Server.pdf · PDF第7页（幻灯片7）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第7页（幻灯片7）

### system initialization variable

**稳定ID：** 2daf0d6164b8

**类别：** technical

**中文解释：** 系统初始化变量：服务器启动时读取，用于决定服务器的功能或行为。

**简单英文（整理解释）：** A variable read at server startup that helps determine server behaviour.

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> The system initialization variables determine the functionality of a database server

**原文来源：** Architecture of Relational Database Server.pdf · PDF第9页（幻灯片9）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第9页（幻灯片9）

### system configuration file

**稳定ID：** 3165a334d282

**类别：** technical

**中文解释：** 系统配置文件：保存系统初始化变量的文件。

**简单英文（整理解释）：** A file containing system initialization variables.

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> The system initialization variables are included in the system configuration files

**原文来源：** Architecture of Relational Database Server.pdf · PDF第10页（幻灯片10）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第10页（幻灯片10）；Architecture of Relational Database Server.pdf · PDF第11页（幻灯片11）

### GLOBAL variable

**稳定ID：** 870986dfc39e

**类别：** technical

**中文解释：** 全局变量：课件在这里把它描述为新连接使用的参数。

**简单英文（整理解释）：** A variable setting described here as a parameter for new connections.

**必要说明：** GLOBAL 在本课件指 new connections（新连接）的参数。R12 的487仅是课件示例数量。

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文限制

> (parameters for new connections)

**原文来源：** Architecture of Relational Database Server.pdf · PDF第12页（幻灯片12）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第12页（幻灯片12）

### LOCAL / SESSION variable

**稳定ID：** 0bdae75a6e3a

**类别：** technical

**中文解释：** 本地／会话变量：当前连接的参数。

**简单英文（整理解释）：** A variable setting for the current connection.

**必要说明：** LOCAL/SESSION 在本课件指 current connection（当前连接）的参数。R12 的501/487存在展示差别，不当作所有环境固定值。

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文限制

> (parameters for the current connection)

**原文来源：** Architecture of Relational Database Server.pdf · PDF第12页（幻灯片12）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第12页（幻灯片12）

### dynamic variable

**稳定ID：** 4c0bab126a47

**类别：** technical

**中文解释：** 动态变量：可以用 SET 修改值的系统初始化变量。

**简单英文（整理解释）：** A system initialization variable whose value can be changed with SET.

**必要说明：**

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> To change a value of dynamic system initialization variables we use set statement

**原文来源：** Architecture of Relational Database Server.pdf · PDF第13页（幻灯片13）

**补充语境：** 本节指可以在运行时修改的。

**补充说明：**

**补充来源：** Architecture of Relational Database Server.pdf · PDF第13页（幻灯片13）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第13页（幻灯片13）

### non-dynamic / read-only variable

**稳定ID：** 7416fca0c356

**类别：** technical

**中文解释：** 非动态／只读变量：课件中的 lower_case_table_names 示例不能用 SET 改，要修改配置文件并重启。不要把所有上下文中的 read-only 都等同于这个特定情况。

**简单英文（整理解释）：** A variable that cannot be changed with SET; the lecture says to change the configuration file and restart the server.

**必要说明：** 不能用 SET 修改；课件要求 stop server → change configuration → start server。

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> For example, a variable lower_case_table_names is not dynamic and it cannot be changed with set

**原文来源：** Architecture of Relational Database Server.pdf · PDF第13页（幻灯片13）

**原文短句／描述：** 原文句式

> it cannot be changed with set

**原文来源：** Architecture of Relational Database Server.pdf · PDF第13页（幻灯片13）

**补充语境：** 只读的；本例不能通过 SET 修改。

**补充说明：**

**补充来源：** Architecture of Relational Database Server.pdf · PDF第13页（幻灯片13）

**补充语境：** 不能用 SET 修改；本例是 lower_case_table_names。不能扩大为所有变量都不能修改。

**补充说明：** 本例 lower_case_table_names 不能用 SET 修改，不是所有变量都不能修改。

**补充来源：** Architecture of Relational Database Server.pdf · PDF第13页（幻灯片13）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第13页（幻灯片13）

### SET statement

**稳定ID：** 373f7b82e083

**类别：** technical

**中文解释：** SET 语句：此处用于修改动态系统变量；与 UPDATE 里的 SET 子句作用不同。

**简单英文（整理解释）：** A statement used here to change a dynamic system variable.

**必要说明：**

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件代码片段

> set sql_safe_updates=0

**原文来源：** Architecture of Relational Database Server.pdf · PDF第13页（幻灯片13）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第13页（幻灯片13）

### root user

**稳定ID：** bd3dc0129c14

**类别：** technical

**中文解释：** root 用户：本节的 MySQL 管理用户。MySQL root 与操作系统 root 不是同一个用户。

**简单英文（整理解释）：** The MySQL user discussed for database administration; it is different from the operating system root user.

**必要说明：** MySQL root 与操作系统 root 是两种不同用户，不因名字相同就混用。

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> Finally, we must remember, that MySQL root user is completely different from an operating system user root !

**原文来源：** Architecture of Relational Database Server.pdf · PDF第16页（幻灯片16）

**原文短句／描述：** 教师转写原句

> Root is the administrator

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第584行

**全部来源：** Architecture of Relational Database Server.pdf · PDF第15页（幻灯片15）；Architecture of Relational Database Server.pdf · PDF第16页（幻灯片16）；CSIT882 Week9 LectA-transcript.txt · TXT第584行

### localhost

**稳定ID：** efcc7e86927d

**类别：** technical

**中文解释：** 本地主机：教师例子中客户端与服务器在同一台机器上。

**简单英文（整理解释）：** In the teacher's example, the client and server are on the same machine.

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件代码片段

> ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';

**原文来源：** Architecture of Relational Database Server.pdf · PDF第15页（幻灯片15）

**原文短句／描述：** 教师转写原句

> on the same machine as server

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第584行

**全部来源：** Architecture of Relational Database Server.pdf · PDF第15页（幻灯片15）；CSIT882 Week9 LectA-transcript.txt · TXT第584行

### authentication_string / HEX

**稳定ID：** a65a325c5207

**类别：** technical

**中文解释：** 认证信息字符串／HEX：PDF 示例用 HEX 显示 authentication_string；教师说明不是直接展示明文密码。具体存储和认证机制未展开。

**简单英文（整理解释）：** The example displays authentication information in hexadecimal form.

**必要说明：** HEX/authentication_string 的解释含此前 TXT；当前资料没有完整讨论密码存储机制，不添加外部细节。

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件代码片段

> SELECT user, host, HEX(authentication_string) FROM mysql.user;

**原文来源：** Architecture of Relational Database Server.pdf · PDF第15页（幻灯片15）

**原文短句／描述：** 教师转写原句

> converted to hexadecimal format

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第584行

**全部来源：** Architecture of Relational Database Server.pdf · PDF第15页（幻灯片15）；CSIT882 Week9 LectA-transcript.txt · TXT第584行

### data dictionary / information_schema

**稳定ID：** 0423bd8e478f

**类别：** technical

**中文解释：** 数据字典／information_schema：保存表、列、约束等信息的数据库。不是另一个装着同样业务数据的表。

**简单英文（整理解释）：** A database containing information about tables, columns, constraints, and related items.

**必要说明：** R16 的 data dictionary 描述 information_schema；V19 图同样出现 DATA DICTIONARY。词表不据此扩展物理存放机制。

**说明依据：** 课件术语

**课件原文定义：** 课件原文定义

> A database information_schema is commonly called as a data dictionary and it contains information about the relational tables, columns, constraints, etc

**定义来源：** Architecture of Relational Database Server.pdf · PDF第16页（幻灯片16）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第16页（幻灯片16）；Architecture of Relational Database Server.pdf · PDF第17页（幻灯片17）

### user_privileges / GRANTEE / PRIVILEGE_TYPE / IS_GRANTABLE

**稳定ID：** 31bbb44ce160

**类别：** technical

**中文解释：** 用户权限表／受权者／权限类型／是否可再授予：R18 是输出列名；教师补充 YES/NO 表示能否把权限授予其他用户。

**简单英文（整理解释）：** The example lists who receives a privilege, its type, and whether that user can grant it to someone else.

**必要说明：** GRANTEE 是获授权账户；PRIVILEGE_TYPE 是权限类型；IS_GRANTABLE 是否可再授权含此前教师解释。

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> For example, we access a relational table user_privileges to find what privileges are granted to the users

**原文来源：** Architecture of Relational Database Server.pdf · PDF第17页（幻灯片17）

**原文短句／描述：** 教师转写原句

> allowed to grant this.

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第590行

**补充语境：** 被授予权限的用户／账户。

**补充说明：**

**补充来源：** Architecture of Relational Database Server.pdf · PDF第18页（幻灯片18）

**补充语境：** 本例指能否把权限再授予其他用户。

**补充说明：**

**补充来源：** Architecture of Relational Database Server.pdf · PDF第18页（幻灯片18）；CSIT882 Week9 LectA-transcript.txt · TXT第590行

**全部来源：** Architecture of Relational Database Server.pdf · PDF第17页（幻灯片17）；Architecture of Relational Database Server.pdf · PDF第18页（幻灯片18）；CSIT882 Week9 LectA-transcript.txt · TXT第590行

### CREATE DATABASE / DROP DATABASE privilege

**稳定ID：** b9d6d4a0f588

**类别：** technical

**中文解释：** 创建／删除数据库权限：课件强调执行相关语句必须具有相应权限。

**简单英文（整理解释）：** Permission required to create / drop a database.

**必要说明：**

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> To be able to create a database a user must have CREATE DATABASE privilege and to drop a database a user must have DROP DATABASE privileges

**原文来源：** Architecture of Relational Database Server.pdf · PDF第20页（幻灯片20）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第20页（幻灯片20）

### default database

**稳定ID：** 9789b6ef1fd7

**类别：** technical

**中文解释：** 默认数据库：用 USE 选中的数据库，同一时间只能有一个默认数据库。

**简单英文（整理解释）：** The database selected with USE. Only one can be the default at a time.

**必要说明：** 同一时间只能有一个默认数据库；使用数据库名前缀仍可访问多个数据库。

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> Only one database can be a default on at a time, after processing of use statement

**原文来源：** Architecture of Relational Database Server.pdf · PDF第22页（幻灯片22）

**原文短句／描述：** 原文条件

> Only one database can be a default on at a time, after processing of use statement

**原文来源：** Architecture of Relational Database Server.pdf · PDF第22页（幻灯片22）

**补充语境：** 在同一时间；only one at a time 是同一时间只能一个。

**补充说明：**

**补充来源：** Architecture of Relational Database Server.pdf · PDF第22页（幻灯片22）

**补充语境：** 同一时间只能有一个；本页限制的是默认数据库，不能理解为只能访问一个数据库。

**补充说明：** only one 限制 default database，不限制可访问数据库的数量。原文 default on 疑似笔误，未默默修改引用。

**补充来源：** Architecture of Relational Database Server.pdf · PDF第22页（幻灯片22）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第20页（幻灯片20）；Architecture of Relational Database Server.pdf · PDF第21页（幻灯片21）；Architecture of Relational Database Server.pdf · PDF第22页（幻灯片22）

### database-name prefix

**稳定ID：** 23a47f53e583

**类别：** technical

**中文解释：** 数据库名前缀：用“数据库名.表名”指定表所在的数据库，可访问当前默认数据库之外的表。

**简单英文（整理解释）：** A database name placed before the table name, as in university.COURSE.

**必要说明：**

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> A user can access many databases at a time through prefixing the names of relational tables located in the other databases with an appropriate database name

**原文来源：** Architecture of Relational Database Server.pdf · PDF第22页（幻灯片22）

**补充语境：** 前缀／在名称前加……

**补充说明：**

**补充来源：** Architecture of Relational Database Server.pdf · PDF第21页（幻灯片21）；Architecture of Relational Database Server.pdf · PDF第22页（幻灯片22）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第21页（幻灯片21）；Architecture of Relational Database Server.pdf · PDF第22页（幻灯片22）

### SHOW DATABASES / SHOW TABLES / SHOW VARIABLES

**稳定ID：** 5b3b0d9fc3d4

**类别：** technical

**中文解释：** 显示数据库／表／变量：课件中的查看语句；SHOW GLOBAL VARIABLES 查看全局参数。

**简单英文（整理解释）：** Statements used to list databases, tables, or variable values.

**必要说明：**

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件代码片段

> show tables;

**原文来源：** Architecture of Relational Database Server.pdf · PDF第17页（幻灯片17）

**原文短句／描述：** 课件代码片段

> show databases;

**原文来源：** Architecture of Relational Database Server.pdf · PDF第20页（幻灯片20）

**原文短句／描述：** 课件代码片段

> show variables like '%update%';

**原文来源：** Architecture of Relational Database Server.pdf · PDF第12页（幻灯片12）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第12页（幻灯片12）；Architecture of Relational Database Server.pdf · PDF第16页（幻灯片16）；Architecture of Relational Database Server.pdf · PDF第17页（幻灯片17）；Architecture of Relational Database Server.pdf · PDF第20页（幻灯片20）

### ALTER USER

**稳定ID：** 86597cc35b07

**类别：** technical

**中文解释：** 修改用户语句：本例用于设置 root 密码。

**简单英文（整理解释）：** The statement used in this example to set the root user's password.

**必要说明：**

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件代码片段

> ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';

**原文来源：** Architecture of Relational Database Server.pdf · PDF第15页（幻灯片15）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第15页（幻灯片15）

### InnoDB / MyISAM / MEMORY / CSV

**稳定ID：** affcbd7ad9ff

**类别：** technical

**中文解释：** 存储引擎名称：当前 PDF 仅列举，没有说明各自特性，也没有展开名称或缩写。不补入优缺点。

**简单英文（整理解释）：** Names listed as examples of storage engines.

**必要说明：** 本页只列出引擎名称，当前资料未分别说明各自机制。

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文列举

> InnoDB, MyISAM, MEMORY, CSV, etc

**原文来源：** Architecture of Relational Database Server.pdf · PDF第4页（幻灯片4）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第4页（幻灯片4）

### aggregate

**稳定ID：** bbf5bfaa8f87

**类别：** technical

**中文解释：** 汇总；本例按系把结果汇总并计数。

**简单英文（整理解释）：** combine results into grouped totals

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> aggregate the results from the first query over the names of departments and count the total number of courses offered by each department - - WITH DEPT_COURSE AS ( SELECT name, cnum FROM DEPARTMENT LEFT OUTER JOIN COURSE ON DEPARTMENT.name = COURSE.offered_by ), WITH clause with a query definition 10/26

**原文来源：** Views.pdf · PDF第10页（幻灯片10）

**全部来源：** Views.pdf · PDF第10页（幻灯片10）

### keyword

**稳定ID：** e37970a851c2

**类别：** technical

**中文解释：** 关键字；本例是 AS。

**简单英文（整理解释）：** a word with a special role in the language

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Views.pdf · PDF第11页（幻灯片11）

### architecture (of a database server)

**稳定ID：** 3344f6d2576d

**类别：** technical

**中文解释：** 架构：系统主要部分的组织方式。

**简单英文（整理解释）：** how the main parts of a system are arranged

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> CSIT115 - Database Management Systems CSIT882 - Data Management Systems Architecture of Relational Database Server Dr Behnaz Soltani School of Computing and Information Technology - University of Wollongong

**原文来源：** Architecture of Relational Database Server.pdf · PDF第1页（幻灯片1）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第1页（幻灯片1）；Architecture of Relational Database Server.pdf · PDF第3页（幻灯片3）

### metadata

**稳定ID：** 4e6b809e1f04

**类别：** technical

**中文解释：** 元数据；本段指information_schema中关于表、列、约束的信息。

**简单英文（整理解释）：** Information about data.

**必要说明：** 教师用语释义，未作为PDF正式定义。元数据；本段指information_schema中关于表、列、约束的信息。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句

> It's like a metadata

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第590行

**全部来源：** CSIT882 Week9 LectA-transcript.txt · TXT第590行

### socket

**稳定ID：** 7e8fee8b50f2

**类别：** technical

**中文解释：** 本例为同一台机器上客户端与服务器连接所用的socket；不是完整网络定义。

**简单英文（整理解释）：** A way for a client and server on the same machine to connect, in this example.

**必要说明：** 教师用语释义，未作为PDF正式定义。本例为同一台机器上客户端与服务器连接所用的socket；不是完整网络定义。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句

> connect through the socket

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第584行

**全部来源：** CSIT882 Week9 LectA-transcript.txt · TXT第584行

### port

**稳定ID：** 6e864af4de4c

**类别：** technical

**中文解释：** 端口；教师例子为3306，不据此推断用户当前环境。

**简单英文（整理解释）：** The port used for a remote connection; the example gives 3306.

**必要说明：** 教师用语释义，未作为PDF正式定义。端口；教师例子为3306，不据此推断用户当前环境。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句

> this is the port 3306

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第584行

**全部来源：** CSIT882 Week9 LectA-transcript.txt · TXT第584行

### datadir / data directory

**稳定ID：** a2402b5a9630

**类别：** technical

**中文解释：** 数据文件目录；转写写direction of the data files，释义按文件位置语境整理，未核对音频。

**简单英文（整理解释）：** The location of the data files, in this example.

**必要说明：** 教师用语释义，未作为PDF正式定义。数据文件目录；转写写direction of the data files，释义按文件位置语境整理，未核对音频。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句

> direction of the data files

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第584行

**全部来源：** CSIT882 Week9 LectA-transcript.txt · TXT第584行

### autocommit

**稳定ID：** 8bff9335a9fe

**类别：** technical

**中文解释：** 自动提交；教师用自动保存修改说明ON，完整事务条件未在本段列出。

**简单英文（整理解释）：** A setting described here as saving changes automatically when it is ON.

**必要说明：** 教师用语释义，未作为PDF正式定义。自动提交；教师用自动保存修改说明ON，完整事务条件未在本段列出。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句

> automatically commit any changes

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第584行

**全部来源：** CSIT882 Week9 LectA-transcript.txt · TXT第584行

### max_user_connections

**稳定ID：** 371fe9fff8bd

**类别：** technical

**中文解释：** 每个用户的连接数量设置；教师本段说0表示未指定限制，不扩展到其他环境。

**简单英文（整理解释）：** A setting for how many connections each user can have.

**必要说明：** 教师用语释义，未作为PDF正式定义。每个用户的连接数量设置；教师本段说0表示未指定限制，不扩展到其他环境。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句

> how many connections each user can have

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第584行

**全部来源：** CSIT882 Week9 LectA-transcript.txt · TXT第584行

### underlying tables

**稳定ID：** c53abfb6d8f8

**类别：** technical

**中文解释：** 底层表；视图定义查询所依赖的表。数据改变后，重新计算的结果可能变化。

**简单英文（整理解释）：** The tables used by the view's defining query.

**必要说明：** 教师用语释义，未作为PDF正式定义。底层表；视图定义查询所依赖的表。数据改变后，重新计算的结果可能变化。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句

> data of the underlying tables

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第23行

**全部来源：** CSIT882 Week9 LectA-transcript.txt · TXT第23行

### runtime / run time

**稳定ID：** 4f9234d71a2f

**类别：** technical

**中文解释：** 运行时；用于区分SET修改与停止服务器后改配置。

**简单英文（整理解释）：** The time while the server is running.

**必要说明：** 教师用语释义，未作为PDF正式定义。运行时；用于区分SET修改与停止服务器后改配置。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句

> during the runtime

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第584行

**全部来源：** CSIT882 Week9 LectA-transcript.txt · TXT第584行

### case-sensitive

**稳定ID：** 9e998ef6fb13

**类别：** technical

**中文解释：** 区分大小写的；本段未完整列出lower_case_table_names各值规则。

**简单英文（整理解释）：** Treating uppercase and lowercase as different, in this explanation.

**必要说明：** 教师用语释义，未作为PDF正式定义。区分大小写的；本段未完整列出lower_case_table_names各值规则。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句

> case sensitive

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第584行

**全部来源：** CSIT882 Week9 LectA-transcript.txt · TXT第584行

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

### column

**稳定ID：** eb6d188ef9f1

**类别：** technical

**中文解释：** 列：关系表中有名称的数据部分；例如name、cnum。当前资料未重新给出完整定义。

**简单英文（整理解释）：** A named part of a table, such as name or cnum in the examples.

**必要说明：**

**说明依据：** 辅助释义

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Views.pdf · PDF第4页（幻灯片4）；Views.pdf · PDF第19页（幻灯片19）；Advanced DDL and DML statements.pdf · PDF第7页（幻灯片7）

### CHAR

**稳定ID：** 784fdf4dcb31

**类别：** technical

**中文解释：** 字符类型名称；课件示例为CHAR(7)。

**简单英文（整理解释）：** A type name or constraint expression used in the table definitions. No full definition is given here.

**必要说明：** 当前资料仅使用这些关键词；不补入资料未说明的参数及实现规则。

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Views.pdf · PDF第4页（幻灯片4）；Advanced DDL and DML statements.pdf · PDF第9页（幻灯片9）

### VARCHAR

**稳定ID：** d8aaa22cbf47

**类别：** technical

**中文解释：** 字符类型名称；课件示例为VARCHAR(200)等。

**简单英文（整理解释）：** A type name or constraint expression used in the table definitions. No full definition is given here.

**必要说明：** 当前资料仅使用这些关键词；不补入资料未说明的参数及实现规则。

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Views.pdf · PDF第4页（幻灯片4）；Advanced DDL and DML statements.pdf · PDF第9页（幻灯片9）

### DECIMAL

**稳定ID：** fc69c84f354f

**类别：** technical

**中文解释：** 数值类型名称；课件示例为DECIMAL(2)。

**简单英文（整理解释）：** A type name or constraint expression used in the table definitions. No full definition is given here.

**必要说明：** 当前资料仅使用这些关键词；不补入资料未说明的参数及实现规则。

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Views.pdf · PDF第4页（幻灯片4）；Advanced DDL and DML statements.pdf · PDF第9页（幻灯片9）

### UNIQUE

**稳定ID：** ac27402560d1

**类别：** technical

**中文解释：** 唯一性约束关键词；本组资料未展开完整规则。

**简单英文（整理解释）：** A type name or constraint expression used in the table definitions. No full definition is given here.

**必要说明：** 当前资料仅使用这些关键词；不补入资料未说明的参数及实现规则。

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Views.pdf · PDF第4页（幻灯片4）；Advanced DDL and DML statements.pdf · PDF第9页（幻灯片9）

### CHECK

**稳定ID：** 82b26f87fd10

**类别：** technical

**中文解释：** 检查约束关键词；本组资料未展开完整规则。

**简单英文（整理解释）：** A type name or constraint expression used in the table definitions. No full definition is given here.

**必要说明：** 当前资料仅使用这些关键词；不补入资料未说明的参数及实现规则。

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Views.pdf · PDF第4页（幻灯片4）；Advanced DDL and DML statements.pdf · PDF第9页（幻灯片9）

### ON DELETE CASCADE

**稳定ID：** 53e2f6424817

**类别：** technical

**中文解释：** 删除时级联的语法表达；本组资料未展开具体级联行为。

**简单英文（整理解释）：** A type name or constraint expression used in the table definitions. No full definition is given here.

**必要说明：** 当前资料仅使用这些关键词；不补入资料未说明的参数及实现规则。

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Views.pdf · PDF第4页（幻灯片4）；Advanced DDL and DML statements.pdf · PDF第9页（幻灯片9）

## 阅读词汇

### at boot-up time / at startup time

**稳定ID：** bda356b4f5fe

**类别：** reading

**中文解释：** 启动时：R7 的 boot-up 指操作系统启动；R9 的 startup 指数据库服务器启动。

**简单英文（整理解释）：** The time when the operating system or database server starts.

**必要说明：** R7 的 Springatically 异常拼写不作为正常词背诵；启动时点的说明沿用已核对教师解释，未核对音频。

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> At startup time a database server reads the system initialization variables

**原文来源：** Architecture of Relational Database Server.pdf · PDF第9页（幻灯片9）

**原文短句／描述：** 教师转写原句

> This is a typo error.

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第578行

**全部来源：** Architecture of Relational Database Server.pdf · PDF第7页（幻灯片7）；Architecture of Relational Database Server.pdf · PDF第9页（幻灯片9）；CSIT882 Week9 LectA-transcript.txt · TXT第578行

### post installation

**稳定ID：** 0396b6b44690

**类别：** reading

**中文解释：** 安装后处理：本节讨论安装后设置 root 密码、查看用户等。

**简单英文（整理解释）：** The steps taken just after installation.

**必要说明：** “刚安装只有 root”与随后多用户列表涉及不同阶段；用户建立过程当前资料未完整说明。

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文说明

> Just after installation there is only one user root available on the installed system

**原文来源：** Architecture of Relational Database Server.pdf · PDF第15页（幻灯片15）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第15页（幻灯片15）；Architecture of Relational Database Server.pdf · PDF第16页（幻灯片16）；Architecture of Relational Database Server.pdf · PDF第17页（幻灯片17）；Architecture of Relational Database Server.pdf · PDF第18页（幻灯片18）

### be enclosed in …

**稳定ID：** 4c3903e49afa

**类别：** reading

**中文解释：** 放在……里面；enclosed in ( and ) 指放在括号中。

**简单英文（整理解释）：** put inside

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Views.pdf · PDF第3页（幻灯片3）

### optional

**稳定ID：** 470cb5fa769d

**类别：** reading

**中文解释：** 可选的，不是必须的。

**简单英文（整理解释）：** not required

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> It may be followed by an optional inline view name.

**原文来源：** Views.pdf · PDF第3页（幻灯片3）

**全部来源：** Views.pdf · PDF第3页（幻灯片3）

### be followed by

**稳定ID：** d54cc76eeb29

**类别：** reading

**中文解释：** 后面接着……

**简单英文（整理解释）：** have something after it

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> It may be followed by an optional inline view name.

**原文来源：** Views.pdf · PDF第3页（幻灯片3）

**全部来源：** Views.pdf · PDF第3页（幻灯片3）

### chair / chairperson (of a department)

**稳定ID：** ff4608f80e0b

**类别：** reading

**中文解释：** 本例指系负责人，不是椅子；chair people 指多位负责人。

**简单英文（整理解释）：** the person in charge of a department

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Inline views A query find the chair people of departments, that offer more than one course can be decomposed into the following queries Find the total number of courses offered by a department Find the chair people of departments, such that the total number of courses offered by a department is greater than one ( SELECT count(*) FROM COURSE WHERE COURSE.offered_by = ...

**原文来源：** Views.pdf · PDF第5页（幻灯片5）

**全部来源：** Views.pdf · PDF第5页（幻灯片5）；Views.pdf · PDF第6页（幻灯片6）；Views.pdf · PDF第7页（幻灯片7）；Views.pdf · PDF第8页（幻灯片8）；Views.pdf · PDF第23页（幻灯片23）；Views.pdf · PDF第24页（幻灯片24）；Views.pdf · PDF第25页（幻灯片25）

### offer a course / offered by

**稳定ID：** 95efc656727f

**类别：** reading

**中文解释：** 开设课程／由某个系开设。

**简单英文（整理解释）：** provide a course / provided by

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Views.pdf · PDF第5页（幻灯片5）；Views.pdf · PDF第6页（幻灯片6）；Views.pdf · PDF第7页（幻灯片7）；Views.pdf · PDF第8页（幻灯片8）

### credit point

**稳定ID：** 745b28d731e3

**类别：** reading

**中文解释：** 学分；本例有 6 和 12 学分课程。具体学分制度未说明。

**简单英文（整理解释）：** a unit used for course credits

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Views.pdf · PDF第13页（幻灯片13）；Views.pdf · PDF第14页（幻灯片14）；Views.pdf · PDF第15页（幻灯片15）；Views.pdf · PDF第16页（幻灯片16）；Views.pdf · PDF第17页（幻灯片17）

### budget

**稳定ID：** bf835d477e18

**类别：** reading

**中文解释：** 预算；DEPARTMENT 的列名。

**简单英文（整理解释）：** money available for a purpose

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Views.pdf · PDF第4页（幻灯片4）

### decompose … into …

**稳定ID：** d0e5c701a742

**类别：** reading

**中文解释：** 把……拆成……；本节把复杂查询拆成几个查询。

**简单英文（整理解释）：** divide something into smaller parts

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Views.pdf · PDF第5页（幻灯片5）；Views.pdf · PDF第6页（幻灯片6）；Views.pdf · PDF第7页（幻灯片7）；Views.pdf · PDF第10页（幻灯片10）；Views.pdf · PDF第13页（幻灯片13）

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

### greater than / more than

**稳定ID：** 937a6474631f

**类别：** reading

**中文解释：** 大于／多于；不包括恰好等于。

**简单英文（整理解释）：** larger than

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Inline views A query find the chair people of departments, that offer more than one course can be decomposed into the following queries Find the total number of courses offered by a department Find the chair people of departments, such that the total number of courses offered by a department is greater than one ( SELECT count(*) FROM COURSE WHERE COURSE.offered_by = ...

**原文来源：** Views.pdf · PDF第5页（幻灯片5）

**全部来源：** Views.pdf · PDF第5页（幻灯片5）；Views.pdf · PDF第6页（幻灯片6）；Views.pdf · PDF第7页（幻灯片7）；Views.pdf · PDF第8页（幻灯片8）；Advanced DDL and DML statements.pdf · PDF第17页（幻灯片17）

### together with

**稳定ID：** 6d05d422c05e

**类别：** reading

**中文解释：** 连同／以及；这里要求同时返回名称和数量。

**简单英文（整理解释）：** along with

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Inline views A query that finds the chairpersons of departments that offer more than one course, together with the total number of courses offered by each department can be decomposed into the following steps.

**原文来源：** Views.pdf · PDF第7页（幻灯片7）

**全部来源：** Views.pdf · PDF第7页（幻灯片7）；Views.pdf · PDF第10页（幻灯片10）；Views.pdf · PDF第21页（幻灯片21）

### indent

**稳定ID：** 9483b997f34b

**类别：** reading

**中文解释：** 缩进，使内外层查询更容易区分。

**简单英文（整理解释）：** move a line to the right

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Inline views Find the chair people of departments, that offer more than one course and the total number of courses offered by each department It is quite important to indent the clauses of the respective SELECT statements in a way, that shows which SELECT, FROM and WHERE clauses belong to the same SELECT statement SELECT chair, TOTALC FROM ( SELECT chair, ( SELECT count(*) FROM COURSE WHERE COURSE.offered_by = DEPARTMENT.name ) TOTALC FROM DEPARTMENT ) CHAIRTOTAL WHERE CHAIRTOTAL.TOTALC > 1; Inline view with the chairpersons and the total number of courses offered by each department 8/26

**原文来源：** Views.pdf · PDF第8页（幻灯片8）

**全部来源：** Views.pdf · PDF第8页（幻灯片8）

### respective

**稳定ID：** d1683ae6841d

**类别：** reading

**中文解释：** 各自的；the respective SELECT statements 是各条 SELECT 语句。

**简单英文（整理解释）：** relating to each separate item

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Inline views Find the chair people of departments, that offer more than one course and the total number of courses offered by each department It is quite important to indent the clauses of the respective SELECT statements in a way, that shows which SELECT, FROM and WHERE clauses belong to the same SELECT statement SELECT chair, TOTALC FROM ( SELECT chair, ( SELECT count(*) FROM COURSE WHERE COURSE.offered_by = DEPARTMENT.name ) TOTALC FROM DEPARTMENT ) CHAIRTOTAL WHERE CHAIRTOTAL.TOTALC > 1; Inline view with the chairpersons and the total number of courses offered by each department 8/26

**原文来源：** Views.pdf · PDF第8页（幻灯片8）

**全部来源：** Views.pdf · PDF第8页（幻灯片8）

### specified (a name or value)

**稳定ID：** da79f638a1c8

**类别：** reading

**中文解释：** 已指定的。

**简单英文（整理解释）：** clearly stated

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Queries with WITH clause Consider a query, that finds the names of all departments together with the total number of courses offered by each department, include the departments that offer no courses The query can be decomposed into the following two queries: The first query can be implemented as a query definitionDEPT_COURSE within WITH clause A query definition in a WITH clause creates a temporary named result, similar to an inline view, with the name specified before the SELECT statement.

**原文来源：** Views.pdf · PDF第10页（幻灯片10）

**全部来源：** Views.pdf · PDF第10页（幻灯片10）

### reference … / refer to …

**稳定ID：** 35b06f183f55

**类别：** reading

**中文解释：** 引用；后面的查询定义引用前面的定义。

**简单英文（整理解释）：** refer to or use something already named

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Views.pdf · PDF第11页（幻灯片11）；Advanced DDL and DML statements.pdf · PDF第13页（幻灯片13）

### appended to

**稳定ID：** 0cf232e54f83

**类别：** reading

**中文解释：** 追加在……末尾。

**简单英文（整理解释）：** added at the end of

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Queries with WITH clause The final query is implemented as SELECT statement appended to a query definition DC_COUNT within WITH clause Note, that there is no comma after the last query definitionDC_COUNT WITH DEPT_COURSE AS ( SELECT name, cnum FROM DEPARTMENT LEFT OUTER JOIN COURSE ON DEPARTMENT.name = COURSE.offered_by ), DC_COUNT AS ( SELECT name, COUNT(cnum) total_courses FROM DEPT_COURSE GROUP BY name ) SELECT name, total_courses FROM DC_COUNT); WITH clause with two query definitions and SELECT statement 12/26

**原文来源：** Views.pdf · PDF第12页（幻灯片12）

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> T2 appends to the timestamp.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符15684–15711；搜索“T2 appends to the timestamp.”

**补充语境：** Week10教师语境：把……追加到……之后；图中把t2追加到t1后。

**补充说明：** 结构append A to B；此处说明图中的时间戳顺序，不是完整实现。

**补充英文：** Add something after what is already there.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第14页（幻灯片14）；11IntroductionToTransactionProcessing_2.pdf · PDF第15页（幻灯片15）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符15684–15711；搜索“T2 appends to the timestamp.”

**全部来源：** Views.pdf · PDF第12页（幻灯片12）；Views.pdf · PDF第14页（幻灯片14）；Views.pdf · PDF第15页（幻灯片15）；Views.pdf · PDF第16页（幻灯片16）；Views.pdf · PDF第17页（幻灯片17）；11IntroductionToTransactionProcessing_2.pdf · PDF第14页（幻灯片14）；11IntroductionToTransactionProcessing_2.pdf · PDF第15页（幻灯片15）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符15684–15711；搜索“T2 appends to the timestamp.”

### implementation

**稳定ID：** a44becab3e65

**类别：** reading

**中文解释：** 实现／写出来的具体做法；这里指怎样写查询。

**简单英文（整理解释）：** putting a plan into a working form

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Views.pdf · PDF第13页（幻灯片13）；Views.pdf · PDF第22页（幻灯片22）

### derived (as in derived relational table)

**稳定ID：** 6b9597f5c905

**类别：** reading

**中文解释：** 从其他内容得出的／派生的。

**简单英文（整理解释）：** produced from something else

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Relational views A relational view is a virtual relational table (derived relational table), that occupies no persistent storage and it is computed from very beginning every time it is used in SELECT statement A relational view is stored by a database management system as a pair (name of a view, SELECT statement that defines the structure and contents of the view) 19/26

**原文来源：** Views.pdf · PDF第19页（幻灯片19）

**全部来源：** Views.pdf · PDF第19页（幻灯片19）

### occupy storage

**稳定ID：** cc1f44ea3dde

**类别：** reading

**中文解释：** 占用；occupy storage 指占用存储空间。

**简单英文（整理解释）：** use or take up

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Views.pdf · PDF第19页（幻灯片19）

### compute

**稳定ID：** 808aa1bcbe06

**类别：** reading

**中文解释：** 计算／求出结果。

**简单英文（整理解释）：** calculate or produce a result

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Relational views A relational view is a virtual relational table (derived relational table), that occupies no persistent storage and it is computed from very beginning every time it is used in SELECT statement A relational view is stored by a database management system as a pair (name of a view, SELECT statement that defines the structure and contents of the view) 19/26

**原文来源：** Views.pdf · PDF第19页（幻灯片19）

**全部来源：** Views.pdf · PDF第19页（幻灯片19）

### structure and contents (of a view)

**稳定ID：** c5fcae1546fc

**类别：** reading

**中文解释：** 内容／结构。

**简单英文（整理解释）：** what is inside / how it is arranged

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Relational views A relational view is a virtual relational table (derived relational table), that occupies no persistent storage and it is computed from very beginning every time it is used in SELECT statement A relational view is stored by a database management system as a pair (name of a view, SELECT statement that defines the structure and contents of the view) 19/26

**原文来源：** Views.pdf · PDF第19页（幻灯片19）

**全部来源：** Views.pdf · PDF第19页（幻灯片19）

### no matter if … or not

**稳定ID：** 05c925fd8bf8

**类别：** reading

**中文解释：** 无论是否……；这里保留无论有没有课程的系。

**简单英文（整理解释）：** whether … or not

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Views.pdf · PDF第21页（幻灯片21）

### split … over …

**稳定ID：** 1b2d3426e504

**类别：** reading

**中文解释：** 把……分到几个部分；把查询复杂程度分到两条较简单语句。

**简单英文（整理解释）：** divide something among parts

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Views.pdf · PDF第22页（幻灯片22）

### reverse / be reversed

**稳定ID：** 7faa364cf9f6

**类别：** reading

**中文解释：** 撤销／被撤销；这里不是把行顺序倒过来。

**简单英文（整理解释）：** undo / be undone

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Advanced DDL and DML statements.pdf · PDF第3页（幻灯片3）；Advanced DDL and DML statements.pdf · PDF第6页（幻灯片6）；Advanced DDL and DML statements.pdf · PDF第9页（幻灯片9）

### return storage to …

**稳定ID：** 03b42814db34

**类别：** reading

**中文解释：** 把……归还给……；这里是归还存储空间。

**简单英文（整理解释）：** give something back to

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Advanced DDL and DML statements.pdf · PDF第3页（幻灯片3）

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

### enforce constraints

**稳定ID：** 18d17c15d86d

**类别：** reading

**中文解释：** 强制实施／使规则生效；enforce constraints 是施加约束。

**简单英文（整理解释）：** make a rule apply

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Advanced DDL and DML statements.pdf · PDF第6页（幻灯片6）；Advanced DDL and DML statements.pdf · PDF第7页（幻灯片7）；Advanced DDL and DML statements.pdf · PDF第9页（幻灯片9）

### be attached to …

**稳定ID：** 6d8a17221dc4

**类别：** reading

**中文解释：** 附在……上／加在……后。

**简单英文（整理解释）：** added or connected to

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Advanced DDL and DML statements.pdf · PDF第7页（幻灯片7）

### be loaded with data

**稳定ID：** 6189570cc11f

**类别：** reading

**中文解释：** 已装入数据。

**简单英文（整理解释）：** filled with data

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Advanced DDL and DML statements.pdf · PDF第7页（幻灯片7）；Advanced DDL and DML statements.pdf · PDF第10页（幻灯片10）

### retrieve data

**稳定ID：** fa513a233214

**类别：** reading

**中文解释：** 取回／检索数据。

**简单英文（整理解释）：** get data back

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Advanced DDL and DML statements.pdf · PDF第9页（幻灯片9）；Architecture of Relational Database Server.pdf · PDF第4页（幻灯片4）

### ordinary (a CREATE TABLE statement)

**稳定ID：** 83956915f181

**类别：** reading

**中文解释：** 普通的／常规的；这里区别于带子查询的建表方式。

**简单英文（整理解释）：** usual, without the special form discussed

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> INSERT statement with subquery INSERT statement with subquery inserts into a relational table the rows retrived by a given SELECT statement INSERT statement with subquery is Data Manipluation Language (DML) statement an because of that its actions can be reversed with ROLLBACK statement For example, to enforce the consistency constraints first, we create a relational table DCNT with ordinary CREATE TABLE statement CREATE TABLE DCNT( name VARCHAR(50) NOT NULL, total_courses DECIMAL(2) NOT NULL, CONSTRAINT DCNT_pkey PRIMARY KEY(name), CONSTRAINT DCNT_fkey FOREIGN KEY (name) REFERENCES DEPARTMENT(name) ); CREATE TABLE statement 9/18

**原文来源：** Advanced DDL and DML statements.pdf · PDF第9页（幻灯片9）

**全部来源：** Advanced DDL and DML statements.pdf · PDF第9页（幻灯片9）

### satisfy a condition

**稳定ID：** c31cbf692259

**类别：** reading

**中文解释：** 满足条件；不是“让条件满意”。

**简单英文（整理解释）：** meet a condition

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Advanced DDL and DML statements.pdf · PDF第12页（幻灯片12）；Advanced DDL and DML statements.pdf · PDF第15页（幻灯片15）

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

### a number of

**稳定ID：** bacb283ff6a0

**类别：** reading

**中文解释：** 若干／多个；不等于 the number of“……的数量”。

**简单英文（整理解释）：** several

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Client-Server Architecture A client-server architecture means, that a number of clients connects to a database server over a local or wide-area network 3/23

**原文来源：** Architecture of Relational Database Server.pdf · PDF第3页（幻灯片3）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第3页（幻灯片3）

### connect over a network

**稳定ID：** db2ed4bb80b4

**类别：** reading

**中文解释：** 通过网络。

**简单英文（整理解释）：** through a network

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Architecture of Relational Database Server.pdf · PDF第3页（幻灯片3）

### implemented over three layers

**稳定ID：** d2d06e208dce

**类别：** reading

**中文解释：** 按三层实现；这里的 over 不是“超过三层”。

**简单英文（整理解释）：** organised in three layers

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Client-Server Architecture A database server is implemented over three layers: Services not unique to MySQL like: network based client/server tools for connection handling, authentication, security, etc DDL and DML processing like query processing, analysis, optimization, caching, and all built-in functions, data entry, data modification, creating database structures, etc Database (storage) engines responsible for storing and retrieving data, e.g.

**原文来源：** Architecture of Relational Database Server.pdf · PDF第4页（幻灯片4）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第4页（幻灯片4）

### unique to

**稳定ID：** 0be4c3bfc40d

**类别：** reading

**中文解释：** ……所独有的；not unique to MySQL 指不是 MySQL 独有。

**简单英文（整理解释）：** found only in

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Client-Server Architecture A database server is implemented over three layers: Services not unique to MySQL like: network based client/server tools for connection handling, authentication, security, etc DDL and DML processing like query processing, analysis, optimization, caching, and all built-in functions, data entry, data modification, creating database structures, etc Database (storage) engines responsible for storing and retrieving data, e.g.

**原文来源：** Architecture of Relational Database Server.pdf · PDF第4页（幻灯片4）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第4页（幻灯片4）

### handling / handler

**稳定ID：** 0d48651bb5ef

**类别：** reading

**中文解释：** 处理／处理组件；图中涉及连接、线程和访问控制。

**简单英文（整理解释）：** managing something / a component doing that work

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Architecture of Relational Database Server.pdf · PDF第3页（幻灯片3）；Architecture of Relational Database Server.pdf · PDF第4页（幻灯片4）

### analysis

**稳定ID：** ba37858738dc

**类别：** reading

**中文解释：** 分析。

**简单英文（整理解释）：** examining something to understand it

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Client-Server Architecture A database server is implemented over three layers: Services not unique to MySQL like: network based client/server tools for connection handling, authentication, security, etc DDL and DML processing like query processing, analysis, optimization, caching, and all built-in functions, data entry, data modification, creating database structures, etc Database (storage) engines responsible for storing and retrieving data, e.g.

**原文来源：** Architecture of Relational Database Server.pdf · PDF第4页（幻灯片4）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第4页（幻灯片4）

### typically

**稳定ID：** ebd503e1bfff

**类别：** reading

**中文解释：** 通常；不是必定。

**简单英文（整理解释）：** usually

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Each client connection is typically handled by its own thread within the database server A thread is scheduled by the operating system to run on a CPU core.

**原文来源：** Architecture of Relational Database Server.pdf · PDF第5页（幻灯片5）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第5页（幻灯片5）

### scheduled (a thread)

**稳定ID：** 56af721d0f47

**类别：** reading

**中文解释：** 被调度／被安排运行。

**简单英文（整理解释）：** arranged to run at a particular time

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Each client connection is typically handled by its own thread within the database server A thread is scheduled by the operating system to run on a CPU core.

**原文来源：** Architecture of Relational Database Server.pdf · PDF第5页（幻灯片5）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第5页（幻灯片5）

### once …, …

**稳定ID：** 8d4dc46bfffc

**类别：** reading

**中文解释：** 一旦／……之后；这里不是“一次”。

**简单英文（整理解释）：** after something has happened

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Architecture of Relational Database Server.pdf · PDF第5页（幻灯片5）

### verify whether

**稳定ID：** 91d418721ac0

**类别：** reading

**中文解释：** 检查是否……

**简单英文（整理解释）：** check if

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> verify whether there is a circle in the graph.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符1070–1115；搜索“verify whether there is a circle in the graph.”

**补充语境：** Week10教师语境：核实是否……；教师核查图中是否有环。

**补充说明：** whether后接待核实的陈述；不是先假定有环。

**补充英文：** Check carefully whether something is true.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）；11IntroductionToTransactionProcessing_2.pdf · PDF第4页（幻灯片4）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符1070–1115；搜索“verify whether there is a circle in the graph.”

**全部来源：** Architecture of Relational Database Server.pdf · PDF第5页（幻灯片5）；11IntroductionToTransactionProcessing_2.pdf · PDF第3页（幻灯片3）；11IntroductionToTransactionProcessing_2.pdf · PDF第4页（幻灯片4）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符1070–1115；搜索“verify whether there is a circle in the graph.”

### access data / a database

**稳定ID：** 7f216e8c2734

**类别：** reading

**中文解释：** 访问数据或系统。

**简单英文（整理解释）：** reach or use data or a system

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> try to access data V which has been locked by transaction T2.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符7433–7493；搜索“try to access data V which has been locked by transaction T2.”

**补充语境：** Week10教师语境：访问数据；当前语境包括读取或写入，被锁住时可能需要等待。

**补充说明：** access是及物动词，直接接数据对象；不是accidentally等相近字形。

**补充英文：** Read or write data in this context.

**补充来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第8页（幻灯片8）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符7433–7493；搜索“try to access data V which has been locked by transaction T2.”

**全部来源：** Architecture of Relational Database Server.pdf · PDF第5页（幻灯片5）；Architecture of Relational Database Server.pdf · PDF第17页（幻灯片17）；Architecture of Relational Database Server.pdf · PDF第21页（幻灯片21）；Architecture of Relational Database Server.pdf · PDF第22页（幻灯片22）；11IntroductionToTransactionProcessing_2.pdf · PDF第8页（幻灯片8）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符7433–7493；搜索“try to access data V which has been locked by transaction T2.”

### server status

**稳定ID：** e1413e32a2c0

**类别：** reading

**中文解释：** 当前状态；如服务器是否运行。

**简单英文（整理解释）：** the current state

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Architecture of Relational Database Server.pdf · PDF第7页（幻灯片7）

### functionality

**稳定ID：** 39b463481480

**类别：** reading

**中文解释：** 系统具有的功能。

**简单英文（整理解释）：** what a system can do

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Initialization Variables At startup time a database server reads the system initialization variables The system initialization variables determine the functionality of a database server For example, see below some of the system initalization variables of MySQL database server +-------------------------------+--------------------------+ | Variable_name | Value | +-------------------------------+--------------------------+ | auto_increment_increment | 1 | | auto_increment_offset | 1 | | autocommit | ON | | Springatic_sp_privileges | ON | | avoid_temporal_upgrade | ...

**原文来源：** Architecture of Relational Database Server.pdf · PDF第9页（幻灯片9）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第9页（幻灯片9）

### configuration

**稳定ID：** 1fd1702c0ff9

**类别：** reading

**中文解释：** 配置。

**简单英文（整理解释）：** settings controlling how a system works

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Initialization Variables The system initialization variables are included in the system configuration files To find the locations of system configuration files we may process the following commands through command line interface to an operating system Typically the configuration files are located at In our case a file mysqld.cnf with the system initialization variables is located at mysql --help | grep "Default options" -A 1 Listing location of system configuration files /etc/my.cnf /etc/mysql/my.cnf ~/.my.cnf Location of system configuration files /etc/mysql/mysql.conf.d/ Location of system configuration files 10/23

**原文来源：** Architecture of Relational Database Server.pdf · PDF第10页（幻灯片10）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第10页（幻灯片10）；Architecture of Relational Database Server.pdf · PDF第11页（幻灯片11）

### evident

**稳定ID：** 795f7c289567

**类别：** reading

**中文解释：** 明显的。

**简单英文（整理解释）：** clear or easy to see

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Architecture of Relational Database Server.pdf · PDF第15页（幻灯片15）

### security risk

**稳定ID：** 9727650325e2

**类别：** reading

**中文解释：** 安全风险；本例是无密码的 root 用户。

**简单英文（整理解释）：** a situation that may cause a security problem

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Architecture of Relational Database Server.pdf · PDF第15页（幻灯片15）

### must be performed

**稳定ID：** 248c4afc06d2

**类别：** reading

**中文解释：** 必须执行／完成。

**简单英文（整理解释）：** has to be done

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Post Installation After a password to a user root is changed, any future connection as a user root must be performed as follows Finally, we must remember, that MySQL root user is completely different from an operating system user root !

**原文来源：** Architecture of Relational Database Server.pdf · PDF第16页（幻灯片16）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第16页（幻灯片16）

### grant privileges / be granted …

**稳定ID：** a79b4637acd6

**类别：** reading

**中文解释：** 授予／已授予；grant privileges 是授予权限。

**简单英文（整理解释）：** give permission / permission has been given

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**全部来源：** Architecture of Relational Database Server.pdf · PDF第17页（幻灯片17）；Architecture of Relational Database Server.pdf · PDF第18页（幻灯片18）

### appropriate

**稳定ID：** 7f5010baf9eb

**类别：** reading

**中文解释：** 合适的／与该表所在数据库相对应的。

**简单英文（整理解释）：** suitable for the situation

**必要说明：**

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 课件原文语境（非正式定义）

> Databases Only one database can be a default on at a time, after processing of use statement A user can access many databases at a time through prefixing the names of relational tables located in the other databases with an appropriate database name A database can be dropped with DROP DATABASE database-name; Dropping a database 22/23

**原文来源：** Architecture of Relational Database Server.pdf · PDF第22页（幻灯片22）

**全部来源：** Architecture of Relational Database Server.pdf · PDF第22页（幻灯片22）

### X replaces Y

**稳定ID：** c3905fa83eef

**类别：** reading

**中文解释：** 用 X 替换 Y。课件中是 definition replaces the name；定义进入原本使用名称的位置。X/Y 是整理句式的占位符。

**简单英文（整理解释）：** X is used in the place of Y.

**必要说明：** X replaces Y：用 X 替换 Y。这里 X=definition，Y=view name；主语是用来替换的内容。

**说明依据：** 示例归纳

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文句式

> its definition replaces the name of a view and it becomes an inline view

**原文来源：** Views.pdf · PDF第20页（幻灯片20）

**补充语境：** 替换；X replaces Y = 用 X 替换 Y。定义替换查询中的名称，不能反过来。

**补充说明：** X replaces Y：用 X 替换 Y。这里 X=definition，Y=view name；主语是用来替换的内容。

**补充来源：** Views.pdf · PDF第20页（幻灯片20）

**全部来源：** Views.pdf · PDF第20页（幻灯片20）

### reduce the complexity of …

**稳定ID：** 6dcb77d068a4

**类别：** reading

**中文解释：** 降低……的复杂程度；本例把一个复杂查询拆为若干较简单的查询。它说明优点，不能替代保存方式的定义。

**简单英文（整理解释）：** Make something less complex.

**必要说明：** 这是视图的用途，不是其保存方式；选项即使本身正确，也必须回答题干。

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文句式

> A relational view can be used to reduce the complexity of SELECT statements

**原文来源：** Views.pdf · PDF第23页（幻灯片23）

**补充语境：** 复杂程度。

**补充说明：**

**补充来源：** Views.pdf · PDF第13页（幻灯片13）；Views.pdf · PDF第22页（幻灯片22）；Views.pdf · PDF第23页（幻灯片23）

**补充语境：** 减少；reduce the complexity 是降低复杂程度。

**补充说明：**

**补充来源：** Views.pdf · PDF第13页（幻灯片13）；Views.pdf · PDF第23页（幻灯片23）

**全部来源：** Views.pdf · PDF第23页（幻灯片23）；Views.pdf · PDF第22页（幻灯片22）；Views.pdf · PDF第13页（幻灯片13）

### no comma after the last query definition

**稳定ID：** 8665dfe767ef

**类别：** reading

**中文解释：** WITH 中最后一个查询定义后没有逗号；保留 no 和 last 两个限制。

**简单英文（整理解释）：** Do not put a comma after the final definition.

**必要说明：** 保留 no 与 last 两个条件；不是说任何查询定义后都不能有逗号。原文 definion 为拼写问题。

**说明依据：** 课件术语

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 原文条件

> The last query definion included in WITH clause does not have a comma following it

**原文来源：** Views.pdf · PDF第11页（幻灯片11）

**全部来源：** Views.pdf · PDF第11页（幻灯片11）；Views.pdf · PDF第12页（幻灯片12）

### administrator

**稳定ID：** 073a703ae69a

**类别：** reading

**中文解释：** 管理员；本段用于解释MySQL root，不是完整权限清单。

**简单英文（整理解释）：** A user with high privileges.

**必要说明：** 教师用语释义，未作为PDF正式定义。管理员；本段用于解释MySQL root，不是完整权限清单。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句

> Root is the administrator

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第584行

**全部来源：** CSIT882 Week9 LectA-transcript.txt · TXT第584行

### readable

**稳定ID：** 998afda2afc7

**类别：** reading

**中文解释：** 易读的；本例是用视图名称代替重复书写查询的优点。

**简单英文（整理解释）：** Easy to read.

**必要说明：** 教师用语释义，未作为PDF正式定义。易读的；本例是用视图名称代替重复书写查询的优点。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句

> more readable and easier to understand

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第23行

**全部来源：** CSIT882 Week9 LectA-transcript.txt · TXT第23行

### redundancy

**稳定ID：** 43b8aaf6380a

**类别：** reading

**中文解释：** 本例指重复书写相同查询，不扩展到数据库设计中的其他冗余问题。

**简单英文（整理解释）：** Unnecessary repetition, in this example.

**必要说明：** 教师用语释义，未作为PDF正式定义。本例指重复书写相同查询，不扩展到数据库设计中的其他冗余问题。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句

> avoid any redundancy

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第293行

**全部来源：** CSIT882 Week9 LectA-transcript.txt · TXT第293行

### from scratch

**稳定ID：** a10954efd3e0

**类别：** reading

**中文解释：** 从头开始；转写中有from a scratch等异常表达，此处使用整理后的规范词形。

**简单英文（整理解释）：** From the beginning, without using an existing version.

**必要说明：** 教师用语释义，未作为PDF正式定义。从头开始；转写中有from a scratch等异常表达，此处使用整理后的规范词形。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句

> scratch, from department

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第83行

**补充语境：** 从头开始。

**补充说明：**

**补充来源：** Views.pdf · PDF第19页（幻灯片19）

**全部来源：** CSIT882 Week9 LectA-transcript.txt · TXT第83行；Views.pdf · PDF第19页（幻灯片19）

### apply changes

**稳定ID：** b4b1dbc86a90

**类别：** reading

**中文解释：** 使修改生效；本段为改配置后重启服务器。

**简单英文（整理解释）：** Make the changes take effect.

**必要说明：** 教师用语释义，未作为PDF正式定义。使修改生效；本段为改配置后重启服务器。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句

> apply those changes

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第584行

**全部来源：** CSIT882 Week9 LectA-transcript.txt · TXT第584行

### remotely

**稳定ID：** 544c0160e5a2

**类别：** reading

**中文解释：** 远程地；与在同一台机器上的连接对照。

**简单英文（整理解释）：** From another machine through a network, in this context.

**必要说明：** 教师用语释义，未作为PDF正式定义。远程地；与在同一台机器上的连接对照。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句

> locally or remotely

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第584行

**全部来源：** CSIT882 Week9 LectA-transcript.txt · TXT第584行

### accidental updates

**稳定ID：** 237a15b22ab2

**类别：** reading

**中文解释：** 意外更新；教师提到sql_safe_updates时使用，完整保护条件本段未列出。

**简单英文（整理解释）：** Updates made by mistake.

**必要说明：** 教师用语释义，未作为PDF正式定义。意外更新；教师提到sql_safe_updates时使用，完整保护条件本段未列出。

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** 教师转写原句

> accidental updates

**原文来源：** CSIT882 Week9 LectA-transcript.txt · TXT第584行

**全部来源：** CSIT882 Week9 LectA-transcript.txt · TXT第584行

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
