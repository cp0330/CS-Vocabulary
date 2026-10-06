# CSIT882 Week10 词汇

由本周可读JSON自动生成。原文与整理说明分开；跨周条目保留全部来源和不同义项。原PDF及完整录音TXT不在网站中。

## 重要疑点与来源限制

### Week10周次与课件对应依据

**位置：** TXT开场／全文；P2第1–16页

**说明：** 本次新提供TXT，没有另附Week10 PDF。录音中的SGT、2PL、死锁及TO图例与此前指定的第二份事务课件第3–15页对应，因此复用该PDF；正文无Week10标签，周次依用户指定，不能仅靠文件名确认。

### serializability与图形词的异常转写

**位置：** TXT第2行，开场至SGT段；P2第3–5页

**说明：** 稿中有sterilizable、sterillizable、sterilization graph、real sterilizable、note、row、aroma、Tiwan、Taiwan等异常形式；PDF提供serializability、serialization graph及T1/T2等规范拼写。节点／箭头按图核对，原句保留；没有音频，无法断言每处都是转写错误。real sterilizable的确切原词未确认。

### 2PL中途释放锁与结束时释放的范围

**位置：** TXT第2行，搜索“Until, uh, we finish the processing”；P2第7–9页

**说明：** TXT先说不能释放直到处理结束，随后又解释T2中途unlock(v)，并用normally／most of the case说结束时释放。PDF第7页原则是释放任一锁前已获取全部所需锁，第8–9页在commit前有unlock；不把“等结束”当作基本2PL必要条件，不自行加入未指定的变体名称。

### 锁种类与inclusive log未确认

**位置：** TXT第2行，搜索“inclusive log”及“exclusive log”；P2第8–10页

**说明：** 教师明确图例简化为一种锁，不区分read/write；随后关于实际系统的reed/red/right/log及inclusive log等词形异常。read lock和write lock的说明仅按教师语境整理，exclusive log疑似exclusive lock；inclusive log原词无法确认，不默默改成shared lock，也不补完整兼容规则。“multiple transactions”持锁需条件，不能概括为所有锁可共享。

### 超时例子的时限和判断限制

**位置：** TXT第2行，搜索“wait for 30 seconds”及“takes longer time”；P2第11页

**说明：** 30秒是教师例子，课件只规定系统设定等待锁时间段。等待超时可能只是另一事务耗时更久，不证明存在死锁；月末利息处理数小时同样是例子。检测后选择一个事务中止的规则没有给出。

### TO的简化说明及deadlock用词

**位置：** TXT第2行，搜索“It may cause the bad luck”；P2第13–14页

**说明：** 教师说TO不等待并用于避免死锁，但在y:t2:t1递减例子又说“may cause the bad luck”，疑似deadlock或其他词的转写／口误。PDF只显示违反访问顺序并abort，不把递减顺序本身叫死锁。资料未给完整TO算法。机器时间加random number generator只是教师举例，没有实现规则。

### 重复访问与时间戳标记的简化

**位置：** TXT第2行，搜索“repeat the same time stamp”；P2第13–15页

**说明：** 第13页原则说每次读写访问都给数据项加标记；TXT和图示在同事务再次访问x时不重复打印相同t1。可理解为演示省略重复标记，不能据此删去每次访问条件或推成完整内部存储表示。第14页write(x,a-10)与第15页write(x,x-10)的差异仍按原PDF保留。

### 级联中止的必要依赖条件

**位置：** TXT第2行，搜索“read data X which written”；P2第15页

**说明：** T2读到T1的更新，T1后来失败回滚，所以T2被强制中止；不能写成任何T1失败必然让任意T2中止。教师用dirty描述此例，但当前资料未给dirty read的正式定义；不增补外部隔离级别理论。

## 专业英语

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

### directed graph

**稳定ID：** 640b1ca09ada

**类别：** technical

**中文解释：** 有向图；边有方向，判断环时必须沿方向。

**简单英文（整理解释）：** A graph whose arrows have a direction.

**必要说明：** 根据教师例子整理；当前资料未给出正式定义。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> that's a directed graph

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符2588–2610；搜索“that's a directed graph”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第4页（幻灯片4）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符2588–2610；搜索“that's a directed graph”

### expanding phase / acquiring phase

**稳定ID：** 9bbcbe0380b5

**类别：** technical

**中文解释：** 扩展阶段／获取阶段；不断获取所需锁，此阶段不释放锁。

**简单英文（整理解释）：** The transaction gets locks and does not release any yet.

**必要说明：** 这两个名称来自TXT；PDF第7页只给原则，没有单独命名这两个阶段。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> One is called expanding phase or acquiring phase.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符4109–4157；搜索“One is called expanding phase or acquiring phase.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第7页（幻灯片7）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符4109–4157；搜索“One is called expanding phase or acquiring phase.”

### shrinking phase

**稳定ID：** 28ca56bd95f7

**类别：** technical

**中文解释：** 收缩阶段；释放锁，不能再获取新锁。

**简单英文（整理解释）：** The transaction releases locks and does not get new ones.

**必要说明：** 阶段名称来自TXT；保留do not add more这一否定条件。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> A shrinking phase means, uh, we just release the logs and we don't add more logs on the data.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符4842–4934；搜索“A shrinking phase means, uh, we just release the logs and we don't add more logs on the data.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第7页（幻灯片7）；11IntroductionToTransactionProcessing_2.pdf · PDF第9页（幻灯片9）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符4842–4934；搜索“A shrinking phase means, uh, we just release the logs and we don't add more logs on the data.”

### read lock (TXT: reed lock / red lock)

**稳定ID：** 8045a44f3698

**类别：** technical

**中文解释：** 读锁；教师说其他事务仍可能读取该数据，但没有给出完整兼容规则。

**简单英文（整理解释）：** A lock used for reading. The teacher says other reads may still be allowed.

**必要说明：** 只做教师说明的必要拼写整理；TXT有reed/red/inclusive log等异常词。PDF未命名这种锁，不补入shared lock正式定义。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> the reed lock usually allowed people to read.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符6314–6358；搜索“the reed lock usually allowed people to read.”

**全部来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符6314–6358；搜索“the reed lock usually allowed people to read.”

### write lock / exclusive lock (TXT: exclusive log)

**稳定ID：** 7e8fa4228013

**类别：** technical

**中文解释：** 写锁／排他锁；教师说其他事务通常要等它释放后才能访问。

**简单英文（整理解释）：** The teacher describes a write lock as exclusive: other transactions usually wait for its release.

**必要说明：** 保留usually/normally限定；exclusive log疑似exclusive lock的转写，PDF只写lock，未给完整锁兼容矩阵。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> right log, then normally, uh, it's like an exclusive log.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符6381–6437；搜索“right log, then normally, uh, it's like an exclusive log.”

**全部来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符6381–6437；搜索“right log, then normally, uh, it's like an exclusive log.”

### decreasing order of timestamps

**稳定ID：** b1f2e731b9c0

**类别：** technical

**中文解释：** 时间戳递减顺序；示例中的y:t2:t1，后访问的事务时间戳反而更早。

**简单英文（整理解释）：** A later timestamp is followed by an earlier one.

**必要说明：** 根据PDF示例及TXT整理；不要把递减顺序本身称作死锁。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> the T2 to T1, that's decreasing.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符15050–15081；搜索“the T2 to T1, that's decreasing.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第14页（幻灯片14）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符15050–15081；搜索“the T2 to T1, that's decreasing.”

### machine time

**稳定ID：** a08727607fa2

**类别：** technical

**中文解释：** 机器时间；教师提到它可作为DBMS生成时间戳的依据之一。

**简单英文（整理解释）：** The computer’s time, mentioned as a possible source for a timestamp.

**必要说明：** 教师用can/something等不确定表达；PDF没有给出实现规定。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> according to the machine time

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符13360–13388；搜索“according to the machine time”

**全部来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符13360–13388；搜索“according to the machine time”

### random number generator

**稳定ID：** bf84b53a7676

**类别：** technical

**中文解释：** 随机数生成器；教师列为可能与机器时间结合的组件。

**简单英文（整理解释）：** A component that produces random numbers; only mentioned as a possible part of generation.

**必要说明：** 当前资料未给出正式定义、算法或它如何保证时间戳顺序，不能推成必须随机。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> random number generator or something.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符13477–13513；搜索“random number generator or something.”

**全部来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符13477–13513；搜索“random number generator or something.”

### dirty data (teacher expression)

**稳定ID：** a07dde0bb1f6

**类别：** technical

**中文解释：** 教师所说的“脏”数据；T2读到T1写入、后来因T1失败而失效的更新。

**简单英文（整理解释）：** The update read by T2 becomes invalid when T1 fails and rolls back.

**必要说明：** 只按这一例解释dirty；当前资料未给出dirty read的正式定义，不扩展全部隔离级别。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> transaction T2 read data X which written by transaction T1 and this Is something dirty.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符16117–16203；搜索“transaction T2 read data X which written by transaction T1 and this Is something dirty.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第15页（幻灯片15）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符16117–16203；搜索“transaction T2 read data X which written by transaction T1 and this Is something dirty.”

## 阅读词汇

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

### apply a lock on …

**稳定ID：** 1d90700f2688

**类别：** reading

**中文解释：** 在……上加锁；apply在这里不是申请工作或涂抹。

**简单英文（整理解释）：** Put a lock on a data item.

**必要说明：** 结构apply a lock on + 数据项；TXT有apply lock省略冠词的用法。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> apply lock on data U

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符9690–9709；搜索“apply lock on data U”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第10页（幻灯片10）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符9690–9709；搜索“apply lock on data U”

### be locked by …

**稳定ID：** df9c62c2ffbf

**类别：** reading

**中文解释：** 被……锁住；by后说明持有该锁的事务。

**简单英文（整理解释）：** A transaction holds the lock on that item.

**必要说明：** 被动表达be locked by + transaction；与logged误写区分。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> has been locked by transaction T2.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符7460–7493；搜索“has been locked by transaction T2.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第8页（幻灯片8）；11IntroductionToTransactionProcessing_2.pdf · PDF第10页（幻灯片10）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符7460–7493；搜索“has been locked by transaction T2.”

### broadcast to … / inform … that …

**稳定ID：** be9a66762029

**类别：** reading

**中文解释：** 向……广播／通知……；教师说锁释放后系统通知等待事务。

**简单英文（整理解释）：** Send a message to waiting transactions that the lock has been released.

**必要说明：** broadcast to + 接收者；inform + 对象 + 信息。只保留教师例子，不当作所有DBMS的内部实现规定。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> it will broadcast to the uh by the DBMS system

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符7964–8009；搜索“it will broadcast to the uh by the DBMS system”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第8页（幻灯片8）；11IntroductionToTransactionProcessing_2.pdf · PDF第9页（幻灯片9）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符7964–8009；搜索“it will broadcast to the uh by the DBMS system”

### be informed by …

**稳定ID：** 337ea1a748ba

**类别：** reading

**中文解释：** 被……通知；事务收到DBMS的锁释放通知后可继续。

**简单英文（整理解释）：** Receive information from someone or a system.

**必要说明：** 被动结构be informed by + 通知者。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> has been informed by The DBMS system

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符8223–8258；搜索“has been informed by The DBMS system”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第8页（幻灯片8）；11IntroductionToTransactionProcessing_2.pdf · PDF第9页（幻灯片9）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符8223–8258；搜索“has been informed by The DBMS system”

### be in conflict with …

**稳定ID：** 68253ea1ae06

**类别：** reading

**中文解释：** 与……冲突；in conflict with描述关系，conflict with为动词用法。

**简单英文（整理解释）：** Have operations that cannot be freely reordered with the other operations.

**必要说明：** 教师第10页例子此时访问不同数据项，所以说not in conflict；保留否定。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> these two transactions are not in conflict with each other.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符9425–9483；搜索“these two transactions are not in conflict with each other.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第10页（幻灯片10）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符9425–9483；搜索“these two transactions are not in conflict with each other.”

### consume resources

**稳定ID：** 728f95ac99e2

**类别：** reading

**中文解释：** 消耗资源；教师用于评价deadlock prevention。

**简单英文（整理解释）：** Use computing resources.

**必要说明：** resources是系统资源，不是自然资源；本讲未量化比较。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> consume more resources.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符12531–12553；搜索“consume more resources.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符12531–12553；搜索“consume more resources.”

### take longer to finish / longer time to finish

**稳定ID：** 2dd4b940ae95

**类别：** reading

**中文解释：** 需要更长时间才完成；长事务使其他事务等待，不一定有死锁。

**简单英文（整理解释）：** Need more time to finish.

**必要说明：** longer是比较，不是无限等待；说明timeout可能错误中止仍能完成的事务。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> the other transaction takes longer time to finish

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符11733–11781；搜索“the other transaction takes longer time to finish”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符11733–11781；搜索“the other transaction takes longer time to finish”

### not really caused by …

**稳定ID：** acdc39753fb6

**类别：** reading

**中文解释：** 其实并非由……导致；教师说这次等待太久只是另一事务运行很慢。

**简单英文（整理解释）：** In this example, it has a different cause.

**必要说明：** be caused by表示由……导致；保留not really，不能把等待太久直接解释为死锁。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> It's not really caused by the deadlock, just because the other transaction takes longer time.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符12403–12495；搜索“It's not really caused by the deadlock, just because the other transaction takes longer time.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符12403–12495；搜索“It's not really caused by the deadlock, just because the other transaction takes longer time.”

### restart again and again

**稳定ID：** 20c3e6890837

**类别：** reading

**中文解释：** 一再重启；教师说明超时会让等待长事务的其他事务反复中止、重启。

**简单英文（整理解释）：** Start the transaction again many times.

**必要说明：** again and again强调反复；并不证明每次发生真正死锁。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> restart again and again and again.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符12359–12392；搜索“restart again and again and again.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第11页（幻灯片11）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符12359–12392；搜索“restart again and again and again.”

### according to …

**稳定ID：** d81de651c3ed

**类别：** reading

**中文解释：** 依据／按照……；此处按机器时间或访问顺序。

**简单英文（整理解释）：** Use something as the basis for a decision or order.

**必要说明：** 保留完整搭配，按当前语境解释，不是“据某人所说”。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> according to the machine time

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符13360–13388；搜索“according to the machine time”

**全部来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符13360–13388；搜索“according to the machine time”

### be generated automatically

**稳定ID：** cd66638072d6

**类别：** reading

**中文解释：** 被自动生成；教师说时间戳可由DBMS自动产生。

**简单英文（整理解释）：** The system makes it without a person making each one.

**必要说明：** 结构be generated + automatically，can be表示可如此，并非唯一实现规定。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> the timestamp can be generated automatically by the DBMS system

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符13296–13358；搜索“the timestamp can be generated automatically by the DBMS system”

**全部来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符13296–13358；搜索“the timestamp can be generated automatically by the DBMS system”

### efficient / not very efficient

**稳定ID：** 6d5cb54f0276

**类别：** reading

**中文解释：** 高效的／效率不高；教师用它评价等待消耗时间。

**简单英文（整理解释）：** Work well without wasting much time or resources.

**必要说明：** 本段评价是not very efficient；不据此断言所有等待均无益或提供性能保证。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> because weight is not very efficient.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符12992–13028；搜索“because weight is not very efficient.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第13页（幻灯片13）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符12992–13028；搜索“because weight is not very efficient.”

### adjust the schedule

**稳定ID：** 2f5c40ac4355

**类别：** reading

**中文解释：** 调整调度顺序；教师说加锁等待可以改变事务操作的执行安排。

**简单英文（整理解释）：** Change when transaction operations can run.

**必要说明：** adjust + 对象；不是修改事务中的计算内容。原稿有重复词。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> Adjust the schedule of the transactions

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符5223–5261；搜索“Adjust the schedule of the transactions”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第8页（幻灯片8）；11IntroductionToTransactionProcessing_2.pdf · PDF第9页（幻灯片9）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符5223–5261；搜索“Adjust the schedule of the transactions”

### in most cases / normally

**稳定ID：** 34d869b1b1e9

**类别：** reading

**中文解释：** 多数情况下／通常；教师用这些限定词谈在事务末尾释放锁。

**简单英文（整理解释）：** This happens often, but it is not required in every case.

**必要说明：** 词条按搭配整理，原稿为In most of the case；这些限定不能改成always或基本2PL必要条件。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> In most of the case, we may release the logs at the end of the transaction

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符8816–8889；搜索“In most of the case, we may release the logs at the end of the transaction”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第7页（幻灯片7）；11IntroductionToTransactionProcessing_2.pdf · PDF第8页（幻灯片8）；11IntroductionToTransactionProcessing_2.pdf · PDF第9页（幻灯片9）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符8816–8889；搜索“In most of the case, we may release the logs at the end of the transaction”

### terminate a transaction accidentally

**稳定ID：** 949b25468228

**类别：** reading

**中文解释：** 意外终止事务；教师列为事务失败的一种原因。

**简单英文（整理解释）：** End a transaction by accident.

**必要说明：** terminate + 对象；accidentally表示非故意，不是系统主动中止的唯一原因。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> the user just uh terminates the transaction accidentally

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符15854–15909；搜索“the user just uh terminates the transaction accidentally”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第15页（幻灯片15）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符15854–15909；搜索“the user just uh terminates the transaction accidentally”

### hardware failure / power off

**稳定ID：** be15bdfe7d38

**类别：** reading

**中文解释：** 硬件故障／断电；教师列为事务失败的可能原因。

**简单英文（整理解释）：** A hardware problem or loss of power can stop the transaction.

**必要说明：** 原稿为hardware fail及the power off，词条按名词用法整理并保留原句；非正式术语定义。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> the computer fail, the power off, or, uh, sometimes the hardware fail.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符15914–15983；搜索“the computer fail, the power off, or, uh, sometimes the hardware fail.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第15页（幻灯片15）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符15914–15983；搜索“the computer fail, the power off, or, uh, sometimes the hardware fail.”

### be forced to abort

**稳定ID：** 49c91b3a0261

**类别：** reading

**中文解释：** 被迫中止；T2因为读了已失效更新而被DBMS要求中止。

**简单英文（整理解释）：** Have to abort because the system requires it.

**必要说明：** 被动结构be forced to + 动词；不是用户主动取消。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> be forced to abort.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符16081–16099；搜索“be forced to abort.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第15页（幻灯片15）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符16081–16099；搜索“be forced to abort.”

### invalid (an update / data)

**稳定ID：** a04153583ae7

**类别：** reading

**中文解释：** 无效的；T1回滚后，其先前更新不能继续作为T2计算的有效依据。

**简单英文（整理解释）：** The update cannot be used as valid data after the rollback.

**必要说明：** invalid在此不是格式错误，也不是残疾含义；保留失败回滚条件。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> this update on the data X, it's invalid.

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符16355–16394；搜索“this update on the data X, it's invalid.”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第15页（幻灯片15）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符16355–16394；搜索“this update on the data X, it's invalid.”

### roll back to …

**稳定ID：** b6e943d60d56

**类别：** reading

**中文解释：** 回滚到……；教师说回到事务开始前的状态。

**简单英文（整理解释）：** Return to the earlier state by removing the failed transaction’s changes.

**必要说明：** rolled back to + 状态；不是重启本身。beginning status按教师语境理解。

**说明依据：** 教师补充／根据资料整理

**定义状态：** 当前资料未给出正式定义；原文原则／描述另列。

**原文短句／描述：** Week10教师转写短句（未核对音频；非课件正式定义）

> it's rolled back to the beginning status

**原文来源：** CSIT882_week10-full.-transcript.txt · TXT第2行，字符16308–16347；搜索“it's rolled back to the beginning status”

**全部来源：** 11IntroductionToTransactionProcessing_2.pdf · PDF第15页（幻灯片15）；CSIT882_week10-full.-transcript.txt · TXT第2行，字符16308–16347；搜索“it's rolled back to the beginning status”
