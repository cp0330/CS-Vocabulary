# CSIT985 Week5 词汇

由本周可读JSON自动生成。原文与整理说明分开；跨周条目保留全部来源和不同义项。原PDF及完整录音TXT不在网站中。

## 重要疑点与来源限制

**位置：** PDF页21,29

**说明：** P1示例写100 Kb/s、100% reliability；是需求示例而非实际保证。图29的10 Mb/s、100%未完整注明100%指标或测量周期，不补填。

**位置：** PDF页47,48,49

**说明：** CF1的Reliability写99.95，未印百分号；其他行有%。保留99.95原样并标疑点。表中N/A具体表示不适用还是未提供并不明确，不当作0。预算币种及分配公式未给。

**位置：** PDF页47,48,49

**说明：** Week5可靠性列用百分比，Week4可靠性用MTBF/MTBCF等时间指标。资料没有转换规则，不跨语义合并为同一定义。

**位置：** PDF页52

**说明：** 图4.36的两部分/多部分类型写Stochastic，正文和TXT用predictable。资料未定义两者关系，分开记录，不当作已证明的同义词。

**位置：** PDF页55,56

**说明：** 正文说predictable capacities, delays and RMA are added，但图/标签指定容量求和、Dp minimum、Rp maximum，TXT强调最严格相关要求；不能把时延也算术相加。未给RMA不同指标统一排序的模型。Ri在TXT称reliability，邻页Rp称RMA，保留措辞差异。

**位置：** PDF页36

**说明：** ‘Currently the most generally applicable model’仅为课件叙述。本材料的client-server模型强调服务器到客户机主流，教师补充源/汇随请求与响应改变，不推广为所有应用的固定方向。

**位置：** PDF页57

**说明：** 只使用指定PDF/TXT。参考书及章节未另行查阅；未出现可执行代码，算法按课件图、符号与录音整理。

**位置：** TXT

**说明：** TXT先称个人essay为assessment 2，稍后看平台时改称assessment 3；编号冲突待核实。录音中的截止日期、密码及测验安排仅作为历史材料，不视作当前要求。

## 专业英语

### Requirements specification

**稳定ID：** csit985-w4-2215f3add1bfa8

**类别：** 专业英语

**中文解释：** 需求规格说明；示例含初始条件及需求清单，记录来源、状态等。

**简单英文（整理解释）：** An organised record of initial conditions and gathered or derived requirements.

**说明依据：** 根据资料整理

**定义状态：** 课件给出原文定义；各周原句与疑点分别保留

**资料原文：** 定义（疑似动词笔误）

> A document that lists and priorities requirements

**原文来源：** Week3.pdf · PDF页45 / 幻灯片45

**资料原文：** 图表标签或原片段（视觉核对）

> ID/Name

**原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**资料原文：** 教师用语（TXT原片段）

> lists the requirement and their, uh, priorities

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符2023起；搜索“lists the requirement and their, uh, priorities”

**语境：** Week4 · Requirements specification

**语境英文：** An organised record of initial conditions and gathered or derived requirements.

**语境中文：** 需求规格说明；示例含初始条件及需求清单，记录来源、状态等。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页24,25,26 / 幻灯片24,25,26

**语境：** Week5 · Requirements specification

**语境英文：** The input record of user, application, device, network, behaviour, location, and performance requirements.

**语境中文：** 需求规格说明；本讲把它当流识别的输入，不替代原需求记录。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页15,16 / 幻灯片15,16

**语境：** Week3 · Requirements specification

**语境英文：** A document that lists requirements and their priorities.

**语境中文：** 需求规格说明；列出需求及其优先级的文档。第45页原句写 priorities，疑似把动词 prioritizes 写错；原文保留。

**语境依据：** 按课件说明与TXT整理；原句有疑点

**语境原文：** 定义（疑似动词笔误）

> A document that lists and priorities requirements

**语境原文来源：** Week3.pdf · PDF页45 / 幻灯片45

**语境原文：** 图表标签或原片段（视觉核对）

> ID/Name

**语境原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**语境原文：** 教师用语（TXT原片段）

> lists the requirement and their, uh, priorities

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符2023起；搜索“lists the requirement and their, uh, priorities”

**语境来源：** Week3.pdf · PDF页45 / 幻灯片45；Week3.pdf · PDF页46 / 幻灯片46（图表）；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符2023起；搜索“lists the requirement and their, uh, priorities”

**全部来源：** Week4.pdf · PDF页24,25,26 / 幻灯片24,25,26；Week5.pdf · PDF页15,16 / 幻灯片15,16；Week3.pdf · PDF页45 / 幻灯片45；Week3.pdf · PDF页46 / 幻灯片46（图表）；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符2023起；搜索“lists the requirement and their, uh, priorities”

### Storage server / compute servers / digital video

**稳定ID：** csit985-w4-2d0880c81ed27e

**类别：** 专业英语

**中文解释：** 校园图标签：存储服务器、计算服务器、数字视频设备；仅基础词义，无进一步架构定义。

**简单英文（整理解释）：** Device labels in the campus map: servers for storage, servers for computing, and a digital-video device. No detailed architecture is defined.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Storage server / compute servers / digital video

**语境英文：** Device labels in the campus map: servers for storage, servers for computing, and a digital-video device. No detailed architecture is defined.

**语境中文：** 校园图标签：存储服务器、计算服务器、数字视频设备；仅基础词义，无进一步架构定义。

**语境依据：** 必要基础释义

**语境来源：** Week4.pdf · PDF页69 / 幻灯片69

**语境：** Week5 · Storage server / storage servers / compute servers / digital video

**语境英文：** Campus-map labels for storage systems, computing systems, and video equipment.

**语境中文：** 校园图中的存储服务器、计算服务器、数字视频标签；数量括号及位置属于示例。

**语境依据：** 必要基础释义

**语境来源：** Week5.pdf · PDF页19,20,21,28,29 / 幻灯片19,20,21,28,29（图表）

**全部来源：** Week4.pdf · PDF页69 / 幻灯片69；Week5.pdf · PDF页19,20,21,28,29 / 幻灯片19,20,21,28,29（图表）

### Mb/s / kb/s / Kb/s / ms / h / m / s / $K

**稳定ID：** csit985-w4-3ef661e5698de9

**类别：** 专业英语

**中文解释：** 单位：兆比特每秒、千比特每秒、毫秒、小时、分钟、秒；停机表m为分钟。课件K/k大小写有变化，$K为千元，未注明币种。

**简单英文（整理解释）：** Units in the slides: megabits per second, milliseconds, hours, minutes, and seconds. In the downtime table, m means minutes.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Mb/s / ms / h / m / s

**语境英文：** Units in the slides: megabits per second, milliseconds, hours, minutes, and seconds. In the downtime table, m means minutes.

**语境中文：** 单位：兆比特每秒、毫秒、小时、分钟、秒；停机表m为分钟，不能与数据率单位混淆。

**语境依据：** 必要基础释义

**语境来源：** Week4.pdf · PDF页46,53,63 / 幻灯片46,53,63

**语境：** Week5 · Mb/s / kb/s / Kb/s / ms / $K

**语境英文：** Data-rate and delay units, and money in thousands. The slide varies the case of K; the budgets do not name a currency.

**语境中文：** 兆比特每秒／千比特每秒／毫秒／千元；K/k大小写不一致，预算未注明币种，不推算字节率。

**语境依据：** 必要基础释义

**语境来源：** Week5.pdf · PDF页10,11,12,21,47,48,49 / 幻灯片10,11,12,21,47,48,49（图表）

**全部来源：** Week4.pdf · PDF页46,53,63 / 幻灯片46,53,63；Week5.pdf · PDF页10,11,12,21,47,48,49 / 幻灯片10,11,12,21,47,48,49（图表）

### Flow analysis

**稳定ID：** csit985-w5-6ebda3b34b03da

**类别：** 专业英语

**中文解释：** 流分析；描述流量、可能位置和所需性能，只重点研究影响最大的流，不画所有可能流。

**简单英文（整理解释）：** Characterising traffic flows, their likely locations, and their performance needs. Focus on those with the greatest impact, not every possible flow.

**说明依据：** 课件明确

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> The process of characterizing traffic flows

**原文来源：** Week5.pdf · PDF页5 / 幻灯片5

**资料原文：** 说明

> Where they are likely to occur

**原文来源：** Week5.pdf · PDF页5 / 幻灯片5

**资料原文：** 说明

> Levels of performance they will require

**原文来源：** Week5.pdf · PDF页5 / 幻灯片5

**资料原文：** 规则

> To NOT show every possible flow

**原文来源：** Week5.pdf · PDF页5 / 幻灯片5

**资料原文：** 规则

> Only those that will have the greatest impact

**原文来源：** Week5.pdf · PDF页5 / 幻灯片5

**资料原文：** 名称或用语片段

> Flow analysis

**原文来源：** Week3.pdf · PDF页45 / 幻灯片45

**资料原文：** 教师用语（TXT原片段）

> flow analysis and the network design

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符2304起；搜索“flow analysis and the network design”

**语境：** Week5 · Flow analysis

**语境英文：** Characterising traffic flows, their likely locations, and their performance needs. Focus on those with the greatest impact, not every possible flow.

**语境中文：** 流分析；描述流量、可能位置和所需性能，只重点研究影响最大的流，不画所有可能流。

**语境依据：** 课件明确

**语境原文：** 定义

> The process of characterizing traffic flows

**语境原文来源：** Week5.pdf · PDF页5 / 幻灯片5

**语境原文：** 说明

> Where they are likely to occur

**语境原文来源：** Week5.pdf · PDF页5 / 幻灯片5

**语境原文：** 说明

> Levels of performance they will require

**语境原文来源：** Week5.pdf · PDF页5 / 幻灯片5

**语境原文：** 规则

> To NOT show every possible flow

**语境原文来源：** Week5.pdf · PDF页5 / 幻灯片5

**语境原文：** 规则

> Only those that will have the greatest impact

**语境原文来源：** Week5.pdf · PDF页5 / 幻灯片5

**语境来源：** Week5.pdf · PDF页5 / 幻灯片5；Week5.pdf · PDF页5 / 幻灯片5

**语境：** Week3 · Flow analysis

**语境英文：** Analysis of information flows in the network. Requirement maps support it; the detailed method is not taught this week.

**语境中文：** 流量分析；需求地图用于后续分析网络中的信息流。本周未讲具体分析算法。

**语境依据：** 按资料整理

**语境原文：** 名称或用语片段

> Flow analysis

**语境原文来源：** Week3.pdf · PDF页45 / 幻灯片45

**语境原文：** 教师用语（TXT原片段）

> flow analysis and the network design

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符2304起；搜索“flow analysis and the network design”

**语境来源：** Week3.pdf · PDF页45 / 幻灯片45；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符2304起；搜索“flow analysis and the network design”

**全部来源：** Week5.pdf · PDF页5 / 幻灯片5；Week5.pdf · PDF页5 / 幻灯片5；Week3.pdf · PDF页45 / 幻灯片45；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符2304起；搜索“flow analysis and the network design”

### Flow / traffic flow / data flow

**稳定ID：** csit985-w5-634ea65cf9ad88

**类别：** 专业英语

**中文解释：** 流／流量／数据流；具有共同属性的一组网络流量，可含应用、协议或控制信息。

**简单英文（整理解释）：** A set of network traffic with common attributes. It may carry application, protocol, or control information.

**说明依据：** 课件明确

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Sets of network traffic that have common attributes

**原文来源：** Week5.pdf · PDF页6 / 幻灯片6

**资料原文：** 名称

> Flows are known as traffic flows or data flows

**原文来源：** Week5.pdf · PDF页6 / 幻灯片6

**语境：** Week5 · Flow / traffic flow / data flow

**语境英文：** A set of network traffic with common attributes. It may carry application, protocol, or control information.

**语境中文：** 流／流量／数据流；具有共同属性的一组网络流量，可含应用、协议或控制信息。

**语境依据：** 课件明确

**语境原文：** 定义

> Sets of network traffic that have common attributes

**语境原文来源：** Week5.pdf · PDF页6 / 幻灯片6

**语境原文：** 名称

> Flows are known as traffic flows or data flows

**语境原文来源：** Week5.pdf · PDF页6 / 幻灯片6

**语境来源：** Week5.pdf · PDF页6,7 / 幻灯片6,7；Week5.pdf · PDF页6 / 幻灯片6

**全部来源：** Week5.pdf · PDF页6,7 / 幻灯片6,7；Week5.pdf · PDF页6 / 幻灯片6

### Requirements map

**稳定ID：** csit985-w5-e829d724a980ee

**类别：** 专业英语

**中文解释：** 需求地图；已有需求确定后，用来判断流量可能在哪些位置通过。

**简单英文（整理解释）：** A map used as the basis for locating flows after requirements have been identified.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 说明

> Show location dependencies between applications and devices

**原文来源：** Week3.pdf · PDF页45 / 幻灯片45

**资料原文：** 用途

> Used in Flow analysis and User Requirements

**原文来源：** Week3.pdf · PDF页45 / 幻灯片45

**资料原文：** 图表标签或原片段（视觉核对）

> Equipment Room

**原文来源：** Week3.pdf · PDF页47 / 幻灯片47（图表）

**语境：** Week5 · Requirements map

**语境英文：** A map used as the basis for locating flows after requirements have been identified.

**语境中文：** 需求地图；已有需求确定后，用来判断流量可能在哪些位置通过。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页5,16 / 幻灯片5,16

**语境：** Week3 · Requirements map

**语境英文：** A map showing location dependencies between applications and devices. It supports flow analysis and user requirements.

**语境中文：** 需求地图；展示应用和设备之间的位置依赖，用于 Flow analysis 和用户需求。

**语境依据：** 按资料整理

**语境原文：** 说明

> Show location dependencies between applications and devices

**语境原文来源：** Week3.pdf · PDF页45 / 幻灯片45

**语境原文：** 用途

> Used in Flow analysis and User Requirements

**语境原文来源：** Week3.pdf · PDF页45 / 幻灯片45

**语境原文：** 图表标签或原片段（视觉核对）

> Equipment Room

**语境原文来源：** Week3.pdf · PDF页47 / 幻灯片47（图表）

**语境来源：** Week3.pdf · PDF页45 / 幻灯片45；Week3.pdf · PDF页47 / 幻灯片47（图表）；Week3.pdf · PDF页73 / 幻灯片73

**全部来源：** Week5.pdf · PDF页5,16 / 幻灯片5,16；Week3.pdf · PDF页45 / 幻灯片45；Week3.pdf · PDF页47 / 幻灯片47（图表）；Week3.pdf · PDF页73 / 幻灯片73

### End-to-end entity

**稳定ID：** csit985-w5-f2c26549f04eee

**类别：** 专业英语

**中文解释：** 端到端实体；把性能需求与位置结合，看整个源到目的过程。

**简单英文（整理解释）：** A flow considered across its source and destination, with requirements and location information together.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · End-to-end entity

**语境英文：** A flow considered across its source and destination, with requirements and location information together.

**语境中文：** 端到端实体；把性能需求与位置结合，看整个源到目的过程。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页8 / 幻灯片8

**全部来源：** Week5.pdf · PDF页8 / 幻灯片8

### Application information / protocol information / control information

**稳定ID：** csit985-w5-b4a1fa190eed8d

**类别：** 专业英语

**中文解释：** 应用信息／协议信息／控制信息；课件仅列类别，不定义报文结构。

**简单英文（整理解释）：** Three kinds of traffic named in the slide. Detailed protocol and control formats are not defined.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Application information / protocol information / control information

**语境英文：** Three kinds of traffic named in the slide. Detailed protocol and control formats are not defined.

**语境中文：** 应用信息／协议信息／控制信息；课件仅列类别，不定义报文结构。

**语境依据：** 资料未定义

**语境来源：** Week5.pdf · PDF页6 / 幻灯片6

**全部来源：** Week5.pdf · PDF页6 / 幻灯片6

### Source/destination addresses / port numbers / information type

**稳定ID：** csit985-w5-363aff6e067351

**类别：** 专业英语

**中文解释：** 图4.1中的端点地址、端口编号、信息类型；课件未定义地址或端口的技术机制。

**简单英文（整理解释）：** Endpoint addresses, port labels, and the kind of information; shown as flow attributes in Figure 4.1.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Source/destination addresses / port numbers / information type

**语境英文：** Endpoint addresses, port labels, and the kind of information; shown as flow attributes in Figure 4.1.

**语境中文：** 图4.1中的端点地址、端口编号、信息类型；课件未定义地址或端口的技术机制。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页6,7 / 幻灯片6,7（图表）

**全部来源：** Week5.pdf · PDF页6,7 / 幻灯片6,7（图表）

### Routing through network / QoS parameters

**稳定ID：** csit985-w5-1e4dec7c341a7c

**类别：** 专业英语

**中文解释：** 图4.1标签：网络内路由／QoS参数；未展开QoS缩写或给正式定义。

**简单英文（整理解释）：** Labels for the route through the network and QoS settings. QoS is not expanded or formally defined here.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Routing through network / QoS parameters

**语境英文：** Labels for the route through the network and QoS settings. QoS is not expanded or formally defined here.

**语境中文：** 图4.1标签：网络内路由／QoS参数；未展开QoS缩写或给正式定义。

**语境依据：** 资料未定义

**语境来源：** Week5.pdf · PDF页6 / 幻灯片6（图表）

**全部来源：** Week5.pdf · PDF页6 / 幻灯片6（图表）

### Capacity (e.g., Bandwidth) / Delay (e.g., Latency) / Reliability (e.g., Availability)

**稳定ID：** csit985-w5-1eb420099a14dc

**类别：** 专业英语

**中文解释：** 图4.2性能标签：容量（如带宽）、时延（如latency）、可靠性（如可用性）；括号例子不应当作严格同义定义。

**简单英文（整理解释）：** Performance labels in Figure 4.2. The parentheses give examples; the figure does not prove that each pair is identical.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Capacity (e.g., Bandwidth) / Delay (e.g., Latency) / Reliability (e.g., Availability)

**语境英文：** Performance labels in Figure 4.2. The parentheses give examples; the figure does not prove that each pair is identical.

**语境中文：** 图4.2性能标签：容量（如带宽）、时延（如latency）、可靠性（如可用性）；括号例子不应当作严格同义定义。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页9 / 幻灯片9（图表）

**全部来源：** Week5.pdf · PDF页9 / 幻灯片9（图表）

### Quality of Service Levels

**稳定ID：** csit985-w5-43cb03aceff58d

**类别：** 专业英语

**中文解释：** 服务质量等级；表中列名，未定义具体等级或保证。

**简单英文（整理解释）：** A performance category in the flow-characteristics table; no service classes or guarantees are defined here.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Quality of Service Levels

**语境英文：** A performance category in the flow-characteristics table; no service classes or guarantees are defined here.

**语境中文：** 服务质量等级；表中列名，未定义具体等级或保证。

**语境依据：** 资料未定义

**语境来源：** Week5.pdf · PDF页9 / 幻灯片9（图表）

**全部来源：** Week5.pdf · PDF页9 / 幻灯片9（图表）

### Protocols Used / Addresses/Ports / Security/Privacy Requirements

**稳定ID：** csit985-w5-c29f68533f16dd

**类别：** 专业英语

**中文解释：** 图4.2标签：所用协议、地址／端口、安全／隐私要求；未解释技术机制。

**简单英文（整理解释）：** Table labels for protocols, endpoint details, and security or privacy needs. Their technical mechanisms are not defined.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Protocols Used / Addresses/Ports / Security/Privacy Requirements

**语境英文：** Table labels for protocols, endpoint details, and security or privacy needs. Their technical mechanisms are not defined.

**语境中文：** 图4.2标签：所用协议、地址／端口、安全／隐私要求；未解释技术机制。

**语境依据：** 资料未定义

**语境来源：** Week5.pdf · PDF页9 / 幻灯片9（图表）

**全部来源：** Week5.pdf · PDF页9 / 幻灯片9（图表）

### Individual flow

**稳定ID：** csit985-w5-caf015579c46db

**类别：** 专业英语

**中文解释：** 个体流；某应用单次会话的基本流单位，可合并分析，但保证需求必须仍归该个体流。

**简单英文（整理解释）：** A flow for one session of one application. It is a basic unit and may be combined; a guaranteed requirement must stay with that flow.

**说明依据：** 课件明确

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Flow for a single session of an application

**原文来源：** Week5.pdf · PDF页10 / 幻灯片10

**资料原文：** 规则

> When individual flows have a guaranteed requirement, the requirements remain with THAT flow

**原文来源：** Week5.pdf · PDF页10 / 幻灯片10

**语境：** Week5 · Individual flow

**语境英文：** A flow for one session of one application. It is a basic unit and may be combined; a guaranteed requirement must stay with that flow.

**语境中文：** 个体流；某应用单次会话的基本流单位，可合并分析，但保证需求必须仍归该个体流。

**语境依据：** 课件明确

**语境原文：** 定义

> Flow for a single session of an application

**语境原文来源：** Week5.pdf · PDF页10 / 幻灯片10

**语境原文：** 规则

> When individual flows have a guaranteed requirement, the requirements remain with THAT flow

**语境原文来源：** Week5.pdf · PDF页10 / 幻灯片10

**语境来源：** Week5.pdf · PDF页10 / 幻灯片10；Week5.pdf · PDF页10 / 幻灯片10

**全部来源：** Week5.pdf · PDF页10 / 幻灯片10；Week5.pdf · PDF页10 / 幻灯片10

### Guaranteed capacity / 15 Mb/s Peak (Guaranteed)

**稳定ID：** csit985-w5-b1240af285077b

**类别：** 专业英语

**中文解释：** 保证容量；图4.4示例要求15 Mb/s峰值保证，不能隐藏在平均值中。

**简单英文（整理解释）：** The example individual flow has a guaranteed peak capacity of 15 Mb/s. Keep its guarantee explicit.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Guaranteed capacity / 15 Mb/s Peak (Guaranteed)

**语境英文：** The example individual flow has a guaranteed peak capacity of 15 Mb/s. Keep its guarantee explicit.

**语境中文：** 保证容量；图4.4示例要求15 Mb/s峰值保证，不能隐藏在平均值中。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页10 / 幻灯片10（图表）；Week5_transcript.txt · TXT原始L2，本行字符6677起；搜索“15 megabits per second”

**全部来源：** Week5.pdf · PDF页10 / 幻灯片10（图表）；Week5_transcript.txt · TXT原始L2，本行字符6677起；搜索“15 megabits per second”

### Composite flow

**稳定ID：** csit985-w5-80cf91cf5e6d2a

**类别：** 专业英语

**中文解释：** 复合流；多应用／个体流因共享链路、路径或网络而组合需求。

**简单英文（整理解释）：** Combined requirements of several applications or individual flows that share a link, path, or network.

**说明依据：** 课件明确

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Combination of requirements from multiple apps or individual flows that share the commonality (common link, path, or network)

**原文来源：** Week5.pdf · PDF页11 / 幻灯片11

**语境：** Week5 · Composite flow

**语境英文：** Combined requirements of several applications or individual flows that share a link, path, or network.

**语境中文：** 复合流；多应用／个体流因共享链路、路径或网络而组合需求。

**语境依据：** 课件明确

**语境原文：** 定义

> Combination of requirements from multiple apps or individual flows that share the commonality (common link, path, or network)

**语境原文来源：** Week5.pdf · PDF页11 / 幻灯片11

**语境来源：** Week5.pdf · PDF页11 / 幻灯片11；Week5.pdf · PDF页11 / 幻灯片11

**全部来源：** Week5.pdf · PDF页11 / 幻灯片11；Week5.pdf · PDF页11 / 幻灯片11

### Common link / common path / common network

**稳定ID：** csit985-w5-c98186c7c38c23

**类别：** 专业英语

**中文解释：** 公共链路／路径／网络；构成复合流的共同部分。

**简单英文（整理解释）：** The shared part that allows several flows to be treated together.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Common link / common path / common network

**语境英文：** The shared part that allows several flows to be treated together.

**语境中文：** 公共链路／路径／网络；构成复合流的共同部分。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页11 / 幻灯片11

**全部来源：** Week5.pdf · PDF页11 / 幻灯片11

### Critical flow

**稳定ID：** csit985-w5-f5f1af0847ae10

**类别：** 专业英语

**中文解释：** 关键流；因性能、严格要求或重要使用者等而优先；教师强调不必是容量最大的流。

**简单英文（整理解释）：** A flow treated as more important because of performance, strict requirements, or important users, applications, or devices.

**说明依据：** 课件明确

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 说明

> Some flows are more important than others

**原文来源：** Week5.pdf · PDF页13 / 幻灯片13

**资料原文：** 说明

> Strict requirements

**原文来源：** Week5.pdf · PDF页13 / 幻灯片13

**语境：** Week5 · Critical flow

**语境英文：** A flow treated as more important because of performance, strict requirements, or important users, applications, or devices.

**语境中文：** 关键流；因性能、严格要求或重要使用者等而优先；教师强调不必是容量最大的流。

**语境依据：** 课件明确

**语境原文：** 说明

> Some flows are more important than others

**语境原文来源：** Week5.pdf · PDF页13 / 幻灯片13

**语境原文：** 说明

> Strict requirements

**语境原文来源：** Week5.pdf · PDF页13 / 幻灯片13

**语境来源：** Week5.pdf · PDF页13 / 幻灯片13；Week5_transcript.txt · TXT原始L2，本行字符8145起；搜索“Critical does not always mean high capacity”；Week5.pdf · PDF页13 / 幻灯片13

**全部来源：** Week5.pdf · PDF页13 / 幻灯片13；Week5_transcript.txt · TXT原始L2，本行字符8145起；搜索“Critical does not always mean high capacity”；Week5.pdf · PDF页13 / 幻灯片13

### Upstream / downstream / bidirectional

**稳定ID：** csit985-w5-0e242816fcd545

**类别：** 专业英语

**中文解释：** 上行／下行／双向；要说明相对哪个端点。示例不同方向可有不同速率。

**简单英文（整理解释）：** Direction labels for traffic toward one side, traffic toward the other side, and traffic in both directions. Define the viewpoint.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Upstream / downstream / bidirectional

**语境英文：** Direction labels for traffic toward one side, traffic toward the other side, and traffic in both directions. Define the viewpoint.

**语境中文：** 上行／下行／双向；要说明相对哪个端点。示例不同方向可有不同速率。

**语境依据：** 必要基础释义

**语境来源：** Week5.pdf · PDF页11,12 / 幻灯片11,12（图表）

**全部来源：** Week5.pdf · PDF页11,12 / 幻灯片11,12（图表）

### One-way delay / round-trip delay / RT

**稳定ID：** csit985-w5-e3cb5379b2ed0f

**类别：** 专业英语

**中文解释：** 单向时延／往返时延；图11、12示例100ms，不能互换为同一指标。

**简单英文（整理解释）：** Delay in one direction / delay for an outward and return trip. RT is used as a round-trip label in the diagram.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · One-way delay / round-trip delay / RT

**语境英文：** Delay in one direction / delay for an outward and return trip. RT is used as a round-trip label in the diagram.

**语境中文：** 单向时延／往返时延；图11、12示例100ms，不能互换为同一指标。

**语境依据：** 必要基础释义

**语境来源：** Week5.pdf · PDF页11,12 / 幻灯片11,12（图表）

**全部来源：** Week5.pdf · PDF页11,12 / 幻灯片11,12（图表）

### 100% uptime

**稳定ID：** csit985-w5-28764874d9e31b

**类别：** 专业英语

**中文解释：** 复合流示例的100%可用时间要求；图未给周期或维护规则，不能假定无条件保证。

**简单英文（整理解释）：** An availability requirement in the composite-flow example; the figure gives no measurement period or maintenance rule.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · 100% uptime

**语境英文：** An availability requirement in the composite-flow example; the figure gives no measurement period or maintenance rule.

**语境中文：** 复合流示例的100%可用时间要求；图未给周期或维护规则，不能假定无条件保证。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页11 / 幻灯片11（图表）

**全部来源：** Week5.pdf · PDF页11 / 幻灯片11（图表）

### Performance profile

**稳定ID：** csit985-w5-eee584de26d013

**类别：** 专业英语

**中文解释：** 性能配置描述1；图12示例用profile名称引用性能要求，具体值该图未给。

**简单英文（整理解释）：** A reusable performance description referred to by name instead of writing every value beside a flow.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Performance Profile 1

**语境英文：** A reusable performance description referred to by name instead of writing every value beside a flow.

**语境中文：** 性能配置描述1；图12示例用profile名称引用性能要求，具体值该图未给。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页12,17,21 / 幻灯片12,17,21（图表）

**语境：** Week5 · Performance profile / developing a profile

**语境英文：** A shared description for flows with common performance needs. Keep its definition clear when reusing it.

**语境中文：** 性能profile／建立profile；共用需求描述，便于复用，必须保留明确值。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页17,21 / 幻灯片17,21；Week5_transcript.txt · TXT原始L2，本行字符12292起；搜索“profile definition very clear”

**全部来源：** Week5.pdf · PDF页12,17,21 / 幻灯片12,17,21（图表）；Week5.pdf · PDF页17,21 / 幻灯片17,21；Week5_transcript.txt · TXT原始L2，本行字符12292起；搜索“profile definition very clear”

### Identifying and developing flows

**稳定ID：** csit985-w5-cceaed5f67a645

**类别：** 专业英语

**中文解释：** 识别与建立流；依据需求规格、行为、位置及性能需要。

**简单英文（整理解释）：** Use the requirements specification, behaviour, locations, and performance needs to find and describe important flows.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Identifying and developing flows

**语境英文：** Use the requirements specification, behaviour, locations, and performance needs to find and describe important flows.

**语境中文：** 识别与建立流；依据需求规格、行为、位置及性能需要。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页15,16 / 幻灯片15,16

**全部来源：** Week5.pdf · PDF页15,16 / 幻灯片15,16

### P1 (Profile 1)

**稳定ID：** csit985-w5-95c8ac4f8efae9

**类别：** 专业英语

**中文解释：** 示例P1：六条流共用100 Kb/s容量、100%可靠性需求；不代表所有流都取此值，也不证明实际能达成。

**简单英文（整理解释）：** In the example, a profile for six flows with capacity 100 Kb/s and reliability 100%. This is an example requirement, not a universal profile.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 说明

> Capacity = 100Kb/s, reliability = 100%

**原文来源：** Week5.pdf · PDF页21 / 幻灯片21

**语境：** Week5 · P1 (Profile 1)

**语境英文：** In the example, a profile for six flows with capacity 100 Kb/s and reliability 100%. This is an example requirement, not a universal profile.

**语境中文：** 示例P1：六条流共用100 Kb/s容量、100%可靠性需求；不代表所有流都取此值，也不证明实际能达成。

**语境依据：** 根据资料整理

**语境原文：** 说明

> Capacity = 100Kb/s, reliability = 100%

**语境原文来源：** Week5.pdf · PDF页21 / 幻灯片21

**语境来源：** Week5.pdf · PDF页21 / 幻灯片21（图表）；Week5.pdf · PDF页21 / 幻灯片21

**全部来源：** Week5.pdf · PDF页21 / 幻灯片21（图表）；Week5.pdf · PDF页21 / 幻灯片21

### Top N applications

**稳定ID：** csit985-w5-486a10289bc9bb

**类别：** 专业英语

**中文解释：** 前N个应用；N可为3、5、10等示例，并非固定。按使用程度、用户／设备／服务器数或性能需求选择。

**简单英文（整理解释）：** Select N important applications, for example 3, 5, or 10. Criteria include usage, user/device/server counts, or performance needs.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Top N applications

**语境英文：** Select N important applications, for example 3, 5, or 10. Criteria include usage, user/device/server counts, or performance needs.

**语境中文：** 前N个应用；N可为3、5、10等示例，并非固定。按使用程度、用户／设备／服务器数或性能需求选择。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页17,22 / 幻灯片17,22

**全部来源：** Week5.pdf · PDF页17,22 / 幻灯片17,22

### Flow identification process

**稳定ID：** csit985-w5-56d8707ab2c34a

**类别：** 专业英语

**中文解释：** 流识别过程：识别流／需求／位置→定位源和汇→按需用模型→汇成流规格。

**简单英文（整理解释）：** Identify flows and their requirements and locations; locate sources and sinks; apply models where needed; combine requirements into flowspecs.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Flow identification process

**语境英文：** Identify flows and their requirements and locations; locate sources and sinks; apply models where needed; combine requirements into flowspecs.

**语境中文：** 流识别过程：识别流／需求／位置→定位源和汇→按需用模型→汇成流规格。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页18 / 幻灯片18（图表）

**全部来源：** Week5.pdf · PDF页18 / 幻灯片18（图表）

### Application-driven map / flows estimated between devices

**稳定ID：** csit985-w5-85737dce18ec33

**类别：** 专业英语

**中文解释：** 应用驱动位置图／设备间估计流；先定位组件，再加箭头表示流量。

**简单英文（整理解释）：** Locate the important application's devices, then add estimated traffic between them.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Application-driven map / flows estimated between devices

**语境英文：** Locate the important application's devices, then add estimated traffic between them.

**语境中文：** 应用驱动位置图／设备间估计流；先定位组件，再加箭头表示流量。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页19,20 / 幻灯片19,20（图表）

**全部来源：** Week5.pdf · PDF页19,20 / 幻灯片19,20（图表）

### Data source

**稳定ID：** csit985-w5-24bfcca58c71d0

**类别：** 专业英语

**中文解释：** 数据源；产生流量的设备或端点。

**简单英文（整理解释）：** A device or endpoint that generates a flow.

**说明依据：** 课件明确

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Data sources generate

**原文来源：** Week5.pdf · PDF页24 / 幻灯片24

**语境：** Week5 · Data source

**语境英文：** A device or endpoint that generates a flow.

**语境中文：** 数据源；产生流量的设备或端点。

**语境依据：** 课件明确

**语境原文：** 定义

> Data sources generate

**语境原文来源：** Week5.pdf · PDF页24 / 幻灯片24

**语境来源：** Week5.pdf · PDF页24 / 幻灯片24；Week5.pdf · PDF页24 / 幻灯片24

**全部来源：** Week5.pdf · PDF页24 / 幻灯片24；Week5.pdf · PDF页24 / 幻灯片24

### Data sink

**稳定ID：** csit985-w5-e2c273691c7b91

**类别：** 专业英语

**中文解释：** 数据汇／接收端；不是日常sink“水槽”。

**简单英文（整理解释）：** A device or endpoint that terminates a flow by receiving its data.

**说明依据：** 课件明确

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Data sinks terminate

**原文来源：** Week5.pdf · PDF页24 / 幻灯片24

**语境：** Week5 · Data sink

**语境英文：** A device or endpoint that terminates a flow by receiving its data.

**语境中文：** 数据汇／接收端；不是日常sink“水槽”。

**语境依据：** 课件明确

**语境原文：** 定义

> Data sinks terminate

**语境原文来源：** Week5.pdf · PDF页24 / 幻灯片24

**语境来源：** Week5.pdf · PDF页24 / 幻灯片24；Week5.pdf · PDF页24 / 幻灯片24

**全部来源：** Week5.pdf · PDF页24 / 幻灯片24；Week5.pdf · PDF页24 / 幻灯片24

### Source and sink roles

**稳定ID：** csit985-w5-6ccf73933caaeb

**类别：** 专业英语

**中文解释：** 源和汇角色；几乎所有设备可同时具备两种角色，取决于具体流。

**简单英文（整理解释）：** Almost all devices can be both sources and sinks. The role depends on the flow direction.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 说明

> Almost all devices on a network will act as data sources and sinks

**原文来源：** Week5.pdf · PDF页25 / 幻灯片25

**语境：** Week5 · Source and sink roles

**语境英文：** Almost all devices can be both sources and sinks. The role depends on the flow direction.

**语境中文：** 源和汇角色；几乎所有设备可同时具备两种角色，取决于具体流。

**语境依据：** 根据资料整理

**语境原文：** 说明

> Almost all devices on a network will act as data sources and sinks

**语境原文来源：** Week5.pdf · PDF页25 / 幻灯片25

**语境来源：** Week5.pdf · PDF页25 / 幻灯片25；Week5_transcript.txt · TXT原始L2，本行字符13808起；搜索“source of the request flow”；Week5.pdf · PDF页25 / 幻灯片25

**全部来源：** Week5.pdf · PDF页25 / 幻灯片25；Week5_transcript.txt · TXT原始L2，本行字符13808起；搜索“source of the request flow”；Week5.pdf · PDF页25 / 幻灯片25

### Source symbol / sink symbol

**稳定ID：** csit985-w5-4dc66366803afa

**类别：** 专业英语

**中文解释：** 源／汇符号；图24、28用圆点及星形标记区分方向，可在同一设备显示两者。

**简单英文（整理解释）：** The diagrams use a dot-in-circle for a source and a star-like mark in a circle for a sink.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Source symbol / sink symbol

**语境英文：** The diagrams use a dot-in-circle for a source and a star-like mark in a circle for a sink.

**语境中文：** 源／汇符号；图24、28用圆点及星形标记区分方向，可在同一设备显示两者。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页24,28 / 幻灯片24,28（图表）

**全部来源：** Week5.pdf · PDF页24,28 / 幻灯片24,28（图表）

### Application server / application data

**稳定ID：** csit985-w5-1db96d31ef47b9

**类别：** 专业英语

**中文解释：** 应用服务器／应用数据；数据源图中的对应标签。

**简单英文（整理解释）：** A server that provides application data / the data it sends. The source example labels these together.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Application server / application data

**语境英文：** A server that provides application data / the data it sends. The source example labels these together.

**语境中文：** 应用服务器／应用数据；数据源图中的对应标签。

**语境依据：** 必要基础释义

**语境来源：** Week5.pdf · PDF页25,26 / 幻灯片25,26（图表）

**全部来源：** Week5.pdf · PDF页25,26 / 幻灯片25,26（图表）

### Mainframe / parallel systems / clusters

**稳定ID：** csit985-w5-706ec478300dc7

**类别：** 专业英语

**中文解释：** 大型主机／并行系统／集群；列为数据源例子，未定义内部架构。

**简单英文（整理解释）：** Named examples of data sources that compute, process, or produce much data. The lecture does not define their architectures.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Mainframe / parallel systems / clusters

**语境英文：** Named examples of data sources that compute, process, or produce much data. The lecture does not define their architectures.

**语境中文：** 大型主机／并行系统／集群；列为数据源例子，未定义内部架构。

**语境依据：** 资料未定义

**语境来源：** Week5.pdf · PDF页25,26,43 / 幻灯片25,26,43（图表）

**全部来源：** Week5.pdf · PDF页25,26,43 / 幻灯片25,26,43（图表）

### Video device / telemetry/control data

**稳定ID：** csit985-w5-b4bac55f890f5f

**类别：** 专业英语

**中文解释：** 视频设备／遥测及控制数据；图26标签，未正式定义遥测。

**简单英文（整理解释）：** A video source / instrument data named in the source figure. Telemetry is not formally defined in this lecture.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Video device / telemetry/control data

**语境英文：** A video source / instrument data named in the source figure. Telemetry is not formally defined in this lecture.

**语境中文：** 视频设备／遥测及控制数据；图26标签，未正式定义遥测。

**语境依据：** 资料未定义

**语境来源：** Week5.pdf · PDF页26 / 幻灯片26（图表）

**全部来源：** Week5.pdf · PDF页26 / 幻灯片26（图表）

### Data storage / archival devices

**稳定ID：** csit985-w5-8038326c0a46bd

**类别：** 专业英语

**中文解释：** 数据存储／归档设备；典型数据汇。归档是为以后保留数据的基础词义。

**简单英文（整理解释）：** Devices that store data or keep it for later use; typical sinks.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Data storage / archival devices

**语境英文：** Devices that store data or keep it for later use; typical sinks.

**语境中文：** 数据存储／归档设备；典型数据汇。归档是为以后保留数据的基础词义。

**语境依据：** 必要基础释义

**语境来源：** Week5.pdf · PDF页27 / 幻灯片27

**全部来源：** Week5.pdf · PDF页27 / 幻灯片27

### Storage device / video editing / video display / user device

**稳定ID：** csit985-w5-c59f9754c955ba

**类别：** 专业英语

**中文解释：** 图27数据汇标签：存储设备、视频编辑、视频显示、用户设备。

**简单英文（整理解释）：** Sink-example labels: storing, editing, showing, or using incoming data.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Storage device / video editing / video display / user device

**语境英文：** Sink-example labels: storing, editing, showing, or using incoming data.

**语境中文：** 图27数据汇标签：存储设备、视频编辑、视频显示、用户设备。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页27 / 幻灯片27（图表）

**全部来源：** Week5.pdf · PDF页27 / 幻灯片27（图表）

### VoIP

**稳定ID：** csit985-w5-f2fc8ce594016a

**类别：** 专业英语

**中文解释：** 图27中的VoIP标签；资料未展开缩写或定义，不自行补充。

**简单英文（整理解释）：** A label in the data-sink figure. The lecture does not expand or define it.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · VoIP

**语境英文：** A label in the data-sink figure. The lecture does not expand or define it.

**语境中文：** 图27中的VoIP标签；资料未展开缩写或定义，不自行补充。

**语境依据：** 资料未定义

**语境来源：** Week5.pdf · PDF页27 / 幻灯片27（图表）

**全部来源：** Week5.pdf · PDF页27 / 幻灯片27（图表）

### Data migration application

**稳定ID：** csit985-w5-a90959a8b40948

**类别：** 专业英语

**中文解释：** 数据迁移应用；图28、29展示不同传送阶段的源／汇，未给详细迁移流程。

**简单英文（整理解释）：** An application moving data between locations; the maps show different source/sink roles for parts of the transfer.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Data migration application

**语境英文：** An application moving data between locations; the maps show different source/sink roles for parts of the transfer.

**语境中文：** 数据迁移应用；图28、29展示不同传送阶段的源／汇，未给详细迁移流程。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页28,29 / 幻灯片28,29

**全部来源：** Week5.pdf · PDF页28,29 / 幻灯片28,29

### Server-server flow / F4 / F5 / F6 / F7

**稳定ID：** csit985-w5-ebf07d7ce10af5

**类别：** 专业英语

**中文解释：** 服务器间流／F4–F7；仅示例编号。图29独立显示F4，旁标10 Mb/s、100%，后者具体指标口径未注明。

**简单英文（整理解释）：** Flows between servers / local flow labels in the maps. Figure 4.20 isolates F4 with 10 Mb/s and 100% beside it.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Server-server flow / F4 / F5 / F6 / F7

**语境英文：** Flows between servers / local flow labels in the maps. Figure 4.20 isolates F4 with 10 Mb/s and 100% beside it.

**语境中文：** 服务器间流／F4–F7；仅示例编号。图29独立显示F4，旁标10 Mb/s、100%，后者具体指标口径未注明。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页20,21,28,29,40 / 幻灯片20,21,28,29,40（图表）

**全部来源：** Week5.pdf · PDF页20,21,28,29,40 / 幻灯片20,21,28,29,40（图表）

### Flow model

**稳定ID：** csit985-w5-241b2138cf9f44

**类别：** 专业英语

**中文解释：** 流模型；具备特定且一致行为特征的一组流。

**简单英文（整理解释）：** A group of flows with specific, consistent behaviour characteristics.

**说明依据：** 课件明确

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Groups of flows that exhibit specific, consistent behaviour characteristics

**原文来源：** Week5.pdf · PDF页31 / 幻灯片31

**语境：** Week5 · Flow model

**语境英文：** A group of flows with specific, consistent behaviour characteristics.

**语境中文：** 流模型；具备特定且一致行为特征的一组流。

**语境依据：** 课件明确

**语境原文：** 定义

> Groups of flows that exhibit specific, consistent behaviour characteristics

**语境原文来源：** Week5.pdf · PDF页31 / 幻灯片31

**语境来源：** Week5.pdf · PDF页31 / 幻灯片31；Week5.pdf · PDF页31 / 幻灯片31

**全部来源：** Week5.pdf · PDF页31 / 幻灯片31；Week5.pdf · PDF页31 / 幻灯片31

### Directionality

**稳定ID：** csit985-w5-f484dc1429c53b

**类别：** 专业英语

**中文解释：** 方向性；某一方向需求较多的倾向，由源／汇帮助判断。

**简单英文（整理解释）：** A flow's tendency to have more requirements in one direction. Source and sink roles help show it.

**说明依据：** 课件明确

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Preference of a flow to have more requirements in one direction

**原文来源：** Week5.pdf · PDF页31 / 幻灯片31

**语境：** Week5 · Directionality

**语境英文：** A flow's tendency to have more requirements in one direction. Source and sink roles help show it.

**语境中文：** 方向性；某一方向需求较多的倾向，由源／汇帮助判断。

**语境依据：** 课件明确

**语境原文：** 定义

> Preference of a flow to have more requirements in one direction

**语境原文来源：** Week5.pdf · PDF页31 / 幻灯片31

**语境来源：** Week5.pdf · PDF页7,24,31 / 幻灯片7,24,31；Week5.pdf · PDF页31 / 幻灯片31

**全部来源：** Week5.pdf · PDF页7,24,31 / 幻灯片7,24,31；Week5.pdf · PDF页31 / 幻灯片31

### Hierarchy / interconnectivity

**稳定ID：** csit985-w5-1221c95fa62b1c

**类别：** 专业英语

**中文解释：** 层级／互连关系；用于分析流在哪汇合、成组或在同层设备间传送。

**简单英文（整理解释）：** Levels and connections used to see where flows combine, form groups, or pass between peers.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Hierarchy / interconnectivity

**语境英文：** Levels and connections used to see where flows combine, form groups, or pass between peers.

**语境中文：** 层级／互连关系；用于分析流在哪汇合、成组或在同层设备间传送。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页31 / 幻灯片31

**全部来源：** Week5.pdf · PDF页31 / 幻灯片31

### Peer flows / peers

**稳定ID：** csit985-w5-51b64035743fd6

**类别：** 专业英语

**中文解释：** 对等流／对等节点；同一层级设备之间的流。

**简单英文（整理解释）：** Flows between devices at the same hierarchy level / those devices.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Peer flows / peers

**语境英文：** Flows between devices at the same hierarchy level / those devices.

**语境中文：** 对等流／对等节点；同一层级设备之间的流。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页31,33 / 幻灯片31,33

**全部来源：** Week5.pdf · PDF页31,33 / 幻灯片31,33

### Peer-to-peer flow model (P2P)

**稳定ID：** csit985-w5-2b6962b96a0578

**类别：** 专业英语

**中文解释：** 对等流模型；同层行为相近，若不能区分重要性则全为关键或全非关键，不是对所有真实P2P流的绝对定律。

**简单英文（整理解释）：** Users and applications act at the same level and have similar flow behaviour. If flows cannot be distinguished, all or none are treated as critical.

**说明依据：** 课件明确

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 说明

> Act at the same level in hierarchy

**原文来源：** Week5.pdf · PDF页33 / 幻灯片33

**资料原文：** 条件

> Cannot distinguish between flows

**原文来源：** Week5.pdf · PDF页33 / 幻灯片33

**资料原文：** 规则（两种情况由OR连接）

> All flows are critical

**原文来源：** Week5.pdf · PDF页33 / 幻灯片33

**资料原文：** 连接词

> OR

**原文来源：** Week5.pdf · PDF页33 / 幻灯片33

**资料原文：** 规则（OR的另一种情况）

> No flows are critical

**原文来源：** Week5.pdf · PDF页33 / 幻灯片33

**语境：** Week5 · Peer-to-peer flow model (P2P)

**语境英文：** Users and applications act at the same level and have similar flow behaviour. If flows cannot be distinguished, all or none are treated as critical.

**语境中文：** 对等流模型；同层行为相近，若不能区分重要性则全为关键或全非关键，不是对所有真实P2P流的绝对定律。

**语境依据：** 课件明确

**语境原文：** 说明

> Act at the same level in hierarchy

**语境原文来源：** Week5.pdf · PDF页33 / 幻灯片33

**语境原文：** 条件

> Cannot distinguish between flows

**语境原文来源：** Week5.pdf · PDF页33 / 幻灯片33

**语境原文：** 规则（两种情况由OR连接）

> All flows are critical

**语境原文来源：** Week5.pdf · PDF页33 / 幻灯片33

**语境原文：** 连接词

> OR

**语境原文来源：** Week5.pdf · PDF页33 / 幻灯片33

**语境原文：** 规则（OR的另一种情况）

> No flows are critical

**语境原文来源：** Week5.pdf · PDF页33 / 幻灯片33

**语境来源：** Week5.pdf · PDF页32,33,34 / 幻灯片32,33,34；Week5.pdf · PDF页33 / 幻灯片33

**全部来源：** Week5.pdf · PDF页32,33,34 / 幻灯片32,33,34；Week5.pdf · PDF页33 / 幻灯片33

### Equivalent flows / single specification or profile

**稳定ID：** csit985-w5-ff5c6551ae3c63

**类别：** 专业英语

**中文解释：** 等效流／单一规格或profile；缺乏其他信息时课件建议可用peer模型。

**简单英文（整理解释）：** Flows treated alike and described by one shared specification or profile. Use the peer model when no other flow information is available.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Equivalent flows / single specification or profile

**语境英文：** Flows treated alike and described by one shared specification or profile. Use the peer model when no other flow information is available.

**语境中文：** 等效流／单一规格或profile；缺乏其他信息时课件建议可用peer模型。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页34 / 幻灯片34

**全部来源：** Week5.pdf · PDF页34 / 幻灯片34

### File sharing systems

**稳定ID：** csit985-w5-41abf6cb6e14f5

**类别：** 专业英语

**中文解释：** 早期互联网／文件共享系统；本讲P2P例子，不扩展为历史论断。

**简单英文（整理解释）：** Examples of the peer-to-peer flow model in this lecture.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Early Internet / file sharing systems

**语境英文：** Examples of the peer-to-peer flow model in this lecture.

**语境中文：** 早期互联网／文件共享系统；本讲P2P例子，不扩展为历史论断。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页35 / 幻灯片35

**全部来源：** Week5.pdf · PDF页35 / 幻灯片35

### FTP / Telnet

**稳定ID：** csit985-w5-cd0fa2af2634be

**类别：** 专业英语

**中文解释：** 早期互联网图中的协议名；资料未展开全称或定义，不增补机制。

**简单英文（整理解释）：** Protocol names shown in the early-Internet peer example; their full definitions are not supplied.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 名称或用语片段

> FTP

**原文来源：** Week2.pdf · PDF页59 / 幻灯片59

**资料原文：** 名称或用语片段

> FTP

**原文来源：** Week2.pdf · PDF页67 / 幻灯片67

**语境：** Week5 · FTP / Telnet

**语境英文：** Protocol names shown in the early-Internet peer example; their full definitions are not supplied.

**语境中文：** 早期互联网图中的协议名；资料未展开全称或定义，不增补机制。

**语境依据：** 资料未定义

**语境来源：** Week5.pdf · PDF页35 / 幻灯片35（图表）

**语境：** Week2 · FTP (File Transfer Protocol)

**语境英文：** An application-layer protocol for file services; listed with TCP port 21.

**语境中文：** 文件传输协议；第59页列为文件服务，端口表给TCP 21。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> FTP

**语境原文来源：** Week2.pdf · PDF页59 / 幻灯片59

**语境原文：** 名称或用语片段

> FTP

**语境原文来源：** Week2.pdf · PDF页67 / 幻灯片67

**语境来源：** Week2.pdf · PDF页59 / 幻灯片59；Week2.pdf · PDF页67 / 幻灯片67

**全部来源：** Week5.pdf · PDF页35 / 幻灯片35（图表）；Week2.pdf · PDF页59 / 幻灯片59；Week2.pdf · PDF页67 / 幻灯片67

### Client-server flow model

**稳定ID：** csit985-w5-318bd156ba6c09

**类别：** 专业英语

**中文解释：** 客户机—服务器流模型；课件重点是服务器到客户机的非对称主流。

**简单英文（整理解释）：** A model with hierarchy and directionality. The slide emphasises asymmetric flows toward clients, with servers as main sources.

**说明依据：** 课件明确

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 说明

> Has both directionality and hierarchy

**原文来源：** Week5.pdf · PDF页36 / 幻灯片36

**资料原文：** 说明

> Flows are asymmetric

**原文来源：** Week5.pdf · PDF页36 / 幻灯片36

**资料原文：** 说明

> Focused towards the client

**原文来源：** Week5.pdf · PDF页36 / 幻灯片36

**语境：** Week5 · Client-server flow model

**语境英文：** A model with hierarchy and directionality. The slide emphasises asymmetric flows toward clients, with servers as main sources.

**语境中文：** 客户机—服务器流模型；课件重点是服务器到客户机的非对称主流。

**语境依据：** 课件明确

**语境原文：** 说明

> Has both directionality and hierarchy

**语境原文来源：** Week5.pdf · PDF页36 / 幻灯片36

**语境原文：** 说明

> Flows are asymmetric

**语境原文来源：** Week5.pdf · PDF页36 / 幻灯片36

**语境原文：** 说明

> Focused towards the client

**语境原文来源：** Week5.pdf · PDF页36 / 幻灯片36

**语境来源：** Week5.pdf · PDF页32,36 / 幻灯片32,36；Week5.pdf · PDF页36 / 幻灯片36

**全部来源：** Week5.pdf · PDF页32,36 / 幻灯片32,36；Week5.pdf · PDF页36 / 幻灯片36

### Asymmetric flows

**稳定ID：** csit985-w5-7ad447e25cd027

**类别：** 专业英语

**中文解释：** 非对称流；两个方向的流量或需求不同，不能只数请求。

**简单英文（整理解释）：** Flows whose two directions have different traffic or performance needs.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Asymmetric flows

**语境英文：** Flows whose two directions have different traffic or performance needs.

**语境中文：** 非对称流；两个方向的流量或需求不同，不能只数请求。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页36 / 幻灯片36；Week5_transcript.txt · TXT原始L2，本行字符18977起；搜索“response may be much larger”

**全部来源：** Week5.pdf · PDF页36 / 幻灯片36；Week5_transcript.txt · TXT原始L2，本行字符18977起；搜索“response may be much larger”

### Request / response

**稳定ID：** csit985-w5-963599bbd646ba

**类别：** 专业英语

**中文解释：** 请求／响应；请求与响应对应不同方向，客户机发请求时也是源。

**简单英文（整理解释）：** Traffic asking a server for something / traffic sent back by the server.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Request / response

**语境英文：** Traffic asking a server for something / traffic sent back by the server.

**语境中文：** 请求／响应；请求与响应对应不同方向，客户机发请求时也是源。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页36,37 / 幻灯片36,37（图表）；Week5_transcript.txt · TXT原始L2，本行字符13808起；搜索“source of the request flow”

**全部来源：** Week5.pdf · PDF页36,37 / 幻灯片36,37（图表）；Week5_transcript.txt · TXT原始L2，本行字符13808起；搜索“source of the request flow”

### Predominant flows

**稳定ID：** csit985-w5-67c7ace25a0be7

**类别：** 专业英语

**中文解释：** 主导流；本讲客户机—服务器例子中来自服务器，是关键流。需结合实际应用。

**简单英文（整理解释）：** The main flows; in the lecture's client-server example these come from servers and are treated as critical.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Predominant flows

**语境英文：** The main flows; in the lecture's client-server example these come from servers and are treated as critical.

**语境中文：** 主导流；本讲客户机—服务器例子中来自服务器，是关键流。需结合实际应用。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页37 / 幻灯片37

**全部来源：** Week5.pdf · PDF页37 / 幻灯片37

### E-commerce / web applications

**稳定ID：** csit985-w5-9ca248f793b939

**类别：** 专业英语

**中文解释：** 电子商务／Web应用；客户机—服务器模型例子，基础词义。

**简单英文（整理解释）：** Online business / applications accessed through the web; examples of client-server flows.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · E-commerce / web applications

**语境英文：** Online business / applications accessed through the web; examples of client-server flows.

**语境中文：** 电子商务／Web应用；客户机—服务器模型例子，基础词义。

**语境依据：** 必要基础释义

**语境来源：** Week5.pdf · PDF页37 / 幻灯片37

**全部来源：** Week5.pdf · PDF页37 / 幻灯片37

### Video server / video storage / video editing station / request video file

**稳定ID：** csit985-w5-23cc819c3fab5d

**类别：** 专业英语

**中文解释：** 图37标签：视频服务器、视频存储、视频编辑站、请求视频文件；响应是Video File。

**简单英文（整理解释）：** Figure labels for serving video, storing it, editing it, and asking for a file.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Video server / video storage / video editing station / request video file

**语境英文：** Figure labels for serving video, storing it, editing it, and asking for a file.

**语境中文：** 图37标签：视频服务器、视频存储、视频编辑站、请求视频文件；响应是Video File。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页37 / 幻灯片37（图表）

**全部来源：** Week5.pdf · PDF页37 / 幻灯片37（图表）

### Hierarchical client-server flow model

**稳定ID：** csit985-w5-c84fc06b7ae308

**类别：** 专业英语

**中文解释：** 分层客户机—服务器流模型；增加服务器层和支撑服务器间流，服务器可为源、汇或两者。

**简单英文（整理解释）：** A client-server model with extra layers between servers and flows to support servers. A server can be a source, sink, or both.

**说明依据：** 课件明确

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 说明

> Layers or tiers are added to the client-server flow model

**原文来源：** Week5.pdf · PDF页38 / 幻灯片38

**资料原文：** 规则

> Servers may act as data sources or sinks or both

**原文来源：** Week5.pdf · PDF页38 / 幻灯片38

**语境：** Week5 · Hierarchical client-server flow model

**语境英文：** A client-server model with extra layers between servers and flows to support servers. A server can be a source, sink, or both.

**语境中文：** 分层客户机—服务器流模型；增加服务器层和支撑服务器间流，服务器可为源、汇或两者。

**语境依据：** 课件明确

**语境原文：** 说明

> Layers or tiers are added to the client-server flow model

**语境原文来源：** Week5.pdf · PDF页38 / 幻灯片38

**语境原文：** 规则

> Servers may act as data sources or sinks or both

**语境原文来源：** Week5.pdf · PDF页38 / 幻灯片38

**语境来源：** Week5.pdf · PDF页32,38 / 幻灯片32,38；Week5.pdf · PDF页38 / 幻灯片38

**全部来源：** Week5.pdf · PDF页32,38 / 幻灯片32,38；Week5.pdf · PDF页38 / 幻灯片38

### Layers / tiers / support servers

**稳定ID：** csit985-w5-cb0cab47d9b54d

**类别：** 专业英语

**中文解释：** 层／层级／支撑服务器；分层模型增加这些关系。

**简单英文（整理解释）：** Levels in the model / extra servers that support other servers.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Layers / tiers / support servers

**语境英文：** Levels in the model / extra servers that support other servers.

**语境中文：** 层／层级／支撑服务器；分层模型增加这些关系。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页38 / 幻灯片38

**全部来源：** Week5.pdf · PDF页38 / 幻灯片38

### Higher-level application

**稳定ID：** csit985-w5-b2f756cf0b8f5a

**类别：** 专业英语

**中文解释：** 高层应用；可管理多个客户机—服务器应用，是分层模型适用提示之一。

**简单英文（整理解释）：** An application that manages multiple client-server applications; one sign that a hierarchical model may fit.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Higher-level application

**语境英文：** An application that manages multiple client-server applications; one sign that a hierarchical model may fit.

**语境中文：** 高层应用；可管理多个客户机—服务器应用，是分层模型适用提示之一。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页39 / 幻灯片39

**全部来源：** Week5.pdf · PDF页39 / 幻灯片39

### Global server/controller / local server

**稳定ID：** csit985-w5-33832baf14a7a7

**类别：** 专业英语

**中文解释：** 全局服务器／控制器、局部服务器；图39的层级角色，未定义控制协议。

**简单英文（整理解释）：** The top server or controller / servers closer to clients in the hierarchy figure. The figure gives no control protocol.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Global server/controller / local server

**语境英文：** The top server or controller / servers closer to clients in the hierarchy figure. The figure gives no control protocol.

**语境中文：** 全局服务器／控制器、局部服务器；图39的层级角色，未定义控制协议。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页39 / 幻灯片39（图表）

**全部来源：** Week5.pdf · PDF页39 / 幻灯片39（图表）

### Critical flows in a hierarchical model

**稳定ID：** csit985-w5-e1e5bbe88a27e2

**类别：** 专业英语

**中文解释：** 分层模型关键流依赖应用行为；可能只有客户机—服务器流关键，也可能服务器间流同样关键。

**简单英文（整理解释）：** They depend on application behaviour. Client-server flows may be the only critical ones; server-server flows may also be critical.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Critical flows in a hierarchical model

**语境英文：** They depend on application behaviour. Client-server flows may be the only critical ones; server-server flows may also be critical.

**语境中文：** 分层模型关键流依赖应用行为；可能只有客户机—服务器流关键，也可能服务器间流同样关键。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页40 / 幻灯片40

**全部来源：** Week5.pdf · PDF页40 / 幻灯片40

### Common databases / sharing information / replication of web servers

**稳定ID：** csit985-w5-56bacb4ddf4b84

**类别：** 专业英语

**中文解释：** 共享数据库／共享信息／Web服务器复制；服务器间流可能关键的情形。

**简单英文（整理解释）：** Shared databases, information exchange, and making server copies; examples where server-server traffic can matter.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Common databases / sharing information / replication of web servers

**语境英文：** Shared databases, information exchange, and making server copies; examples where server-server traffic can matter.

**语境中文：** 共享数据库／共享信息／Web服务器复制；服务器间流可能关键的情形。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页40 / 幻灯片40

**全部来源：** Week5.pdf · PDF页40 / 幻灯片40

### Scientific visualization simulations

**稳定ID：** csit985-w5-a6c687bae026e1

**类别：** 专业英语

**中文解释：** 科学可视化仿真；列为分层模型例子，未进一步定义设计。

**简单英文（整理解释）：** A named hierarchical-flow example. The lecture gives no detailed simulation design.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Scientific visualization simulations

**语境英文：** A named hierarchical-flow example. The lecture gives no detailed simulation design.

**语境中文：** 科学可视化仿真；列为分层模型例子，未进一步定义设计。

**语境依据：** 资料未定义

**语境来源：** Week5.pdf · PDF页40 / 幻灯片40

**全部来源：** Week5.pdf · PDF页40 / 幻灯片40

### Regional server / web client / CDN / mirror

**稳定ID：** csit985-w5-89cb16848d4686

**类别：** 专业英语

**中文解释：** 图41区域服务器／Web客户机／CDN／镜像；教师提到镜像内容，CDN未展开或定义。

**简单英文（整理解释）：** Labels in the web-service hierarchy. Mirror indicates copied content in the teacher's explanation; CDN is not expanded or defined.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Regional server / web client / CDN / mirror

**语境英文：** Labels in the web-service hierarchy. Mirror indicates copied content in the teacher's explanation; CDN is not expanded or defined.

**语境中文：** 图41区域服务器／Web客户机／CDN／镜像；教师提到镜像内容，CDN未展开或定义。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页41 / 幻灯片41（图表）；Week5_transcript.txt · TXT原始L2，本行字符22180起；搜索“mirrored content”

**全部来源：** Week5.pdf · PDF页41 / 幻灯片41（图表）；Week5_transcript.txt · TXT原始L2，本行字符22180起；搜索“mirrored content”

### Distributed-computing flow model

**稳定ID：** csit985-w5-65d7c621471d41

**类别：** 专业英语

**中文解释：** 分布式计算流模型；可以呈客户机—服务器反向特征，也可混合P2P与客户机—服务器特征。

**简单英文（整理解释）：** A model that can be the inverse of client-server or a hybrid of peer-to-peer and client-server behaviour.

**说明依据：** 课件明确

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 说明

> Can have the inverse characteristics of client server

**原文来源：** Week5.pdf · PDF页42 / 幻灯片42

**资料原文：** 说明

> Can be a hybrid of peer-to-peer and client-server characteristics

**原文来源：** Week5.pdf · PDF页42 / 幻灯片42

**语境：** Week5 · Distributed-computing flow model

**语境英文：** A model that can be the inverse of client-server or a hybrid of peer-to-peer and client-server behaviour.

**语境中文：** 分布式计算流模型；可以呈客户机—服务器反向特征，也可混合P2P与客户机—服务器特征。

**语境依据：** 课件明确

**语境原文：** 说明

> Can have the inverse characteristics of client server

**语境原文来源：** Week5.pdf · PDF页42 / 幻灯片42

**语境原文：** 说明

> Can be a hybrid of peer-to-peer and client-server characteristics

**语境原文来源：** Week5.pdf · PDF页42 / 幻灯片42

**语境来源：** Week5.pdf · PDF页32,42 / 幻灯片32,42；Week5.pdf · PDF页42 / 幻灯片42

**全部来源：** Week5.pdf · PDF页32,42 / 幻灯片32,42；Week5.pdf · PDF页42 / 幻灯片42

### Task manager / task server / computing node

**稳定ID：** csit985-w5-8b3d786233e9c8

**类别：** 专业英语

**中文解释：** 任务管理者／任务服务器／计算节点；图42任务服务器可能为汇，计算节点可为源和汇。

**简单英文（整理解释）：** A manager assigning computing work / the server shown in the figure / a device doing part of the work.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Task manager / task server / computing node

**语境英文：** A manager assigning computing work / the server shown in the figure / a device doing part of the work.

**语境中文：** 任务管理者／任务服务器／计算节点；图42任务服务器可能为汇，计算节点可为源和汇。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页42,43 / 幻灯片42,43（图表）；Week5_transcript.txt · TXT原始L2，本行字符22913起；搜索“distributes work”

**全部来源：** Week5.pdf · PDF页42,43 / 幻灯片42,43（图表）；Week5_transcript.txt · TXT原始L2，本行字符22913起；搜索“distributes work”

### Computing-node interaction

**稳定ID：** csit985-w5-ca2d98a88a0abd

**类别：** 专业英语

**中文解释：** 计算节点间交互；图42标Interaction，教师强调也需分析节点间通信。

**简单英文（整理解释）：** Communication between computing nodes, not only their connections to the task server.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Computing-node interaction

**语境英文：** Communication between computing nodes, not only their connections to the task server.

**语境中文：** 计算节点间交互；图42标Interaction，教师强调也需分析节点间通信。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页42 / 幻灯片42（图表）；Week5_transcript.txt · TXT原始L2，本行字符24147起；搜索“communication between the nodes”

**全部来源：** Week5.pdf · PDF页42 / 幻灯片42（图表）；Week5_transcript.txt · TXT原始L2，本行字符24147起；搜索“communication between the nodes”

### Close coupling / loose coupling

**稳定ID：** csit985-w5-3996f0ea9ddc11

**类别：** 专业英语

**中文解释：** 紧密耦合／松散耦合；课件分别关联P2P流／客户机—服务器流，后者可能形成集群。

**简单英文（整理解释）：** Strong dependence between devices / weaker dependence. The slide links them to peer-to-peer / client-server flows respectively.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Close coupling / loose coupling

**语境英文：** Strong dependence between devices / weaker dependence. The slide links them to peer-to-peer / client-server flows respectively.

**语境中文：** 紧密耦合／松散耦合；课件分别关联P2P流／客户机—服务器流，后者可能形成集群。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页43 / 幻灯片43

**全部来源：** Week5.pdf · PDF页43 / 幻灯片43

### Task granularity

**稳定ID：** csit985-w5-f7f62ee366f293

**类别：** 专业英语

**中文解释：** 任务粒度；描述任务如何划分给设备。

**简单英文（整理解释）：** How work is divided among computing devices.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Task granularity

**语境英文：** How work is divided among computing devices.

**语境中文：** 任务粒度；描述任务如何划分给设备。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页43 / 幻灯片43

**全部来源：** Week5.pdf · PDF页43 / 幻灯片43

### Coarse granularity

**稳定ID：** csit985-w5-c982e184ff6001

**类别：** 专业英语

**中文解释：** 粗粒度；每个任务分配给一个计算设备。

**简单英文（整理解释）：** Each task is assigned to one computing device.

**说明依据：** 课件明确

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> each task is assigned to a computing device

**原文来源：** Week5.pdf · PDF页43 / 幻灯片43

**语境：** Week5 · Coarse granularity

**语境英文：** Each task is assigned to one computing device.

**语境中文：** 粗粒度；每个任务分配给一个计算设备。

**语境依据：** 课件明确

**语境原文：** 定义

> each task is assigned to a computing device

**语境原文来源：** Week5.pdf · PDF页43 / 幻灯片43

**语境来源：** Week5.pdf · PDF页43 / 幻灯片43；Week5.pdf · PDF页43 / 幻灯片43

**全部来源：** Week5.pdf · PDF页43 / 幻灯片43；Week5.pdf · PDF页43 / 幻灯片43

### Fine granularity

**稳定ID：** csit985-w5-38cb80197841b8

**类别：** 专业英语

**中文解释：** 细粒度；一个任务分给多个设备共同处理。

**简单英文（整理解释）：** A task is divided between several devices.

**说明依据：** 课件明确

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> task is subdivided between several devices

**原文来源：** Week5.pdf · PDF页43 / 幻灯片43

**语境：** Week5 · Fine granularity

**语境英文：** A task is divided between several devices.

**语境中文：** 细粒度；一个任务分给多个设备共同处理。

**语境依据：** 课件明确

**语境原文：** 定义

> task is subdivided between several devices

**语境原文来源：** Week5.pdf · PDF页43 / 幻灯片43

**语境来源：** Week5.pdf · PDF页43 / 幻灯片43；Week5.pdf · PDF页43 / 幻灯片43

**全部来源：** Week5.pdf · PDF页43 / 幻灯片43；Week5.pdf · PDF页43 / 幻灯片43

### Inflexible requirements / waiting for neighbour devices

**稳定ID：** csit985-w5-ca5f03857b9d68

**类别：** 专业英语

**中文解释：** 不易放宽的需求／等待相邻设备；分布式模型可能要求最严格，节点等信息时可能停止工作，并非所有模型都必然如此。

**简单英文（整理解释）：** Requirements with little room for change / stopping while waiting for information from other devices.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Inflexible requirements / waiting for neighbour devices

**语境英文：** Requirements with little room for change / stopping while waiting for information from other devices.

**语境中文：** 不易放宽的需求／等待相邻设备；分布式模型可能要求最严格，节点等信息时可能停止工作，并非所有模型都必然如此。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页44 / 幻灯片44

**全部来源：** Week5.pdf · PDF页44 / 幻灯片44

### Flow prioritization

**稳定ID：** csit985-w5-b6e7763cc823ac

**类别：** 专业英语

**中文解释：** 流优先级排序；决定哪些流先获得资源。

**简单英文（整理解释）：** Rank flows by importance to decide which get resources first.

**说明依据：** 课件明确

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Ranking of flows based upon their importance

**原文来源：** Week5.pdf · PDF页46 / 幻灯片46

**语境：** Week5 · Flow prioritization

**语境英文：** Rank flows by importance to decide which get resources first.

**语境中文：** 流优先级排序；决定哪些流先获得资源。

**语境依据：** 课件明确

**语境原文：** 定义

> Ranking of flows based upon their importance

**语境原文来源：** Week5.pdf · PDF页46 / 幻灯片46

**语境来源：** Week5.pdf · PDF页46 / 幻灯片46；Week5.pdf · PDF页46 / 幻灯片46

**全部来源：** Week5.pdf · PDF页46 / 幻灯片46；Week5.pdf · PDF页46 / 幻灯片46

### Prioritization criteria

**稳定ID：** csit985-w5-b8508a5821bae9

**类别：** 专业英语

**中文解释：** 排序准则；业务目标／影响、政治目标、性能、安全、服务用户／应用／设备数均可作为依据。

**简单英文（整理解释）：** Business impact, political aims, performance, security, or number of users, applications, and devices served.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Prioritization criteria

**语境英文：** Business impact, political aims, performance, security, or number of users, applications, and devices served.

**语境中文：** 排序准则；业务目标／影响、政治目标、性能、安全、服务用户／应用／设备数均可作为依据。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页46 / 幻灯片46

**全部来源：** Week5.pdf · PDF页46 / 幻灯片46

### FlowID / F1 / F2 / F3 / CF1 / CF2 / CF3

**稳定ID：** csit985-w5-a14e46b1b79d64

**类别：** 专业英语

**中文解释：** 流标识；示例F1–F3为个体流，CF1–CF3为复合流，不能把编号当成协议名。

**简单英文（整理解释）：** Flow identifiers in the example table. F labels individual flows; CF labels composite flows in the teacher's explanation.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · FlowID / F1 / F2 / F3 / CF1 / CF2 / CF3

**语境英文：** Flow identifiers in the example table. F labels individual flows; CF labels composite flows in the teacher's explanation.

**语境中文：** 流标识；示例F1–F3为个体流，CF1–CF3为复合流，不能把编号当成协议名。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页47,48,49 / 幻灯片47,48,49；Week5_transcript.txt · TXT原始L2，本行字符30156起；搜索“CF rep represents”

**全部来源：** Week5.pdf · PDF页47,48,49 / 幻灯片47,48,49；Week5_transcript.txt · TXT原始L2，本行字符30156起；搜索“CF rep represents”

### Reliability / capacity / delay requirements

**稳定ID：** csit985-w5-95d4df314ecb75

**类别：** 专业英语

**中文解释：** 性能表三列：可靠性、容量、时延。本表可靠性用百分比，Week4用故障间隔指标；资料未提供转换规则，不混为同一定义。

**简单英文（整理解释）：** The table's three performance columns. Reliability is shown as a percentage, unlike Week4's time-between-failure measures; no conversion rule is supplied.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Reliability / capacity / delay requirements

**语境英文：** The table's three performance columns. Reliability is shown as a percentage, unlike Week4's time-between-failure measures; no conversion rule is supplied.

**语境中文：** 性能表三列：可靠性、容量、时延。本表可靠性用百分比，Week4用故障间隔指标；资料未提供转换规则，不混为同一定义。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页47,48,49 / 幻灯片47,48,49

**全部来源：** Week5.pdf · PDF页47,48,49 / 幻灯片47,48,49

### Prioritization by number of users

**稳定ID：** csit985-w5-9b8fc334088a23

**类别：** 专业英语

**中文解释：** 按用户数排序；示例顺序CF2→CF1→F1→F2→F3→CF3，人数依次2100、1750、1200、550、100、50。

**简单英文（整理解释）：** The example ranks CF2, CF1, F1, F2, F3, then CF3 as user counts fall from 2100 to 50.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Prioritization by number of users

**语境英文：** The example ranks CF2, CF1, F1, F2, F3, then CF3 as user counts fall from 2100 to 50.

**语境中文：** 按用户数排序；示例顺序CF2→CF1→F1→F2→F3→CF3，人数依次2100、1750、1200、550、100、50。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页48 / 幻灯片48

**全部来源：** Week5.pdf · PDF页48 / 幻灯片48

### Prioritization by reliability

**稳定ID：** csit985-w5-502b0feadd536d

**类别：** 专业英语

**中文解释：** 按可靠性排序；CF1第一，F2/F3并列第二，未列可靠性值的三条流并列第三。CF1原值99.95缺百分号，需核实。

**简单英文（整理解释）：** CF1 is first; F2 and F3 share second place; F1, CF2, and CF3 share third because no reliability value is stated.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Prioritization by reliability

**语境英文：** CF1 is first; F2 and F3 share second place; F1, CF2, and CF3 share third because no reliability value is stated.

**语境中文：** 按可靠性排序；CF1第一，F2/F3并列第二，未列可靠性值的三条流并列第三。CF1原值99.95缺百分号，需核实。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页49 / 幻灯片49

**全部来源：** Week5.pdf · PDF页49 / 幻灯片49

### Flow specification (flowspec)

**稳定ID：** csit985-w5-c4d281077074e9

**类别：** 专业英语

**中文解释：** 流规格说明；汇总识别／定义／描述结果，列流及其要求，区分尽力而为、可预测、保证类别。

**简单英文（整理解释）：** A combined record describing flows and their requirements, including best-effort, predictable, and guaranteed categories.

**说明依据：** 课件明确

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Results of identifying, defining and describing flows are combined into a flow specification (flowspec)

**原文来源：** Week5.pdf · PDF页51 / 幻灯片51

**语境：** Week5 · Flow specification (flowspec)

**语境英文：** A combined record describing flows and their requirements, including best-effort, predictable, and guaranteed categories.

**语境中文：** 流规格说明；汇总识别／定义／描述结果，列流及其要求，区分尽力而为、可预测、保证类别。

**语境依据：** 课件明确

**语境原文：** 定义

> Results of identifying, defining and describing flows are combined into a flow specification (flowspec)

**语境原文来源：** Week5.pdf · PDF页51 / 幻灯片51

**语境来源：** Week5.pdf · PDF页51 / 幻灯片51；Week5.pdf · PDF页51 / 幻灯片51

**全部来源：** Week5.pdf · PDF页51 / 幻灯片51；Week5.pdf · PDF页51 / 幻灯片51

### Combine requirements for composite flows / a network section

**稳定ID：** csit985-w5-fbf590abc392ad

**类别：** 专业英语

**中文解释：** 合并复合流／网络区段需求；允许区段汇总，但不能隐去个体保证条件。

**简单英文（整理解释）：** Bring together performance needs for flows sharing a resource or for all flows in a section.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Combine requirements for composite flows / a network section

**语境英文：** Bring together performance needs for flows sharing a resource or for all flows in a section.

**语境中文：** 合并复合流／网络区段需求；允许区段汇总，但不能隐去个体保证条件。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页51,53 / 幻灯片51,53

**全部来源：** Week5.pdf · PDF页51,53 / 幻灯片51,53

### Best-effort flows

**稳定ID：** csit985-w5-e3592f0cc8ca8e

**类别：** 专业英语

**中文解释：** 尽力而为流；本讲算法仅使用其容量需求，不补充完整服务契约。

**简单英文（整理解释）：** In the lecture's flowspec calculation, these contribute only capacity requirements. The material does not define a full service contract.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 规则

> only use capacities in best effort calculations

**原文来源：** Week5.pdf · PDF页53 / 幻灯片53

**语境：** Week5 · Best-effort flows

**语境英文：** In the lecture's flowspec calculation, these contribute only capacity requirements. The material does not define a full service contract.

**语境中文：** 尽力而为流；本讲算法仅使用其容量需求，不补充完整服务契约。

**语境依据：** 根据资料整理

**语境原文：** 规则

> only use capacities in best effort calculations

**语境原文来源：** Week5.pdf · PDF页53 / 幻灯片53

**语境来源：** Week5.pdf · PDF页52,53,54 / 幻灯片52,53,54；Week5.pdf · PDF页53 / 幻灯片53

**全部来源：** Week5.pdf · PDF页52,53,54 / 幻灯片52,53,54；Week5.pdf · PDF页53 / 幻灯片53

### Predictable flows

**稳定ID：** csit985-w5-1827e47af06c32

**类别：** 专业英语

**中文解释：** 可预测流；合并已有性能要求，未给完整正式服务语义。

**简单英文（整理解释）：** A service category whose available performance requirements are combined. Full formal service semantics are not defined here.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 规则

> combine requirements for each characteristic to maximize overall performance

**原文来源：** Week5.pdf · PDF页53 / 幻灯片53

**语境：** Week5 · Predictable flows

**语境英文：** A service category whose available performance requirements are combined. Full formal service semantics are not defined here.

**语境中文：** 可预测流；合并已有性能要求，未给完整正式服务语义。

**语境依据：** 根据资料整理

**语境原文：** 规则

> combine requirements for each characteristic to maximize overall performance

**语境原文来源：** Week5.pdf · PDF页53 / 幻灯片53

**语境来源：** Week5.pdf · PDF页52,53,55 / 幻灯片52,53,55；Week5.pdf · PDF页53 / 幻灯片53

**全部来源：** Week5.pdf · PDF页52,53,55 / 幻灯片52,53,55；Week5.pdf · PDF页53 / 幻灯片53

### Guaranteed flows / guaranteed requirements

**稳定ID：** csit985-w5-88a3aec5ca6f7e

**类别：** 专业英语

**中文解释：** 保证流／保证需求；每条流各项需求必须单独保留，不能改为平均值。

**简单英文（整理解释）：** Requirements that must remain individually listed for each guaranteed flow.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 规则

> Guaranteed requirement flows need each individual requirement listed

**原文来源：** Week5.pdf · PDF页53 / 幻灯片53

**语境：** Week5 · Guaranteed flows / guaranteed requirements

**语境英文：** Requirements that must remain individually listed for each guaranteed flow.

**语境中文：** 保证流／保证需求；每条流各项需求必须单独保留，不能改为平均值。

**语境依据：** 根据资料整理

**语境原文：** 规则

> Guaranteed requirement flows need each individual requirement listed

**语境原文来源：** Week5.pdf · PDF页53 / 幻灯片53

**语境来源：** Week5.pdf · PDF页10,52,53,56 / 幻灯片10,52,53,56；Week5.pdf · PDF页53 / 幻灯片53

**全部来源：** Week5.pdf · PDF页10,52,53,56 / 幻灯片10,52,53,56；Week5.pdf · PDF页53 / 幻灯片53

### One-part flowspec

**稳定ID：** csit985-w5-308774b1fe2703

**类别：** 专业英语

**中文解释：** 单部分流规格；所有流为best effort，仅合并容量。

**简单英文（整理解释）：** A specification in which all flows are best effort. Combine capacities only.

**说明依据：** 课件明确

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 规则

> All flows are best effort

**原文来源：** Week5.pdf · PDF页52 / 幻灯片52

**语境：** Week5 · One-part flowspec

**语境英文：** A specification in which all flows are best effort. Combine capacities only.

**语境中文：** 单部分流规格；所有流为best effort，仅合并容量。

**语境依据：** 课件明确

**语境原文：** 规则

> All flows are best effort

**语境原文来源：** Week5.pdf · PDF页52 / 幻灯片52

**语境来源：** Week5.pdf · PDF页52,54 / 幻灯片52,54；Week5.pdf · PDF页52 / 幻灯片52

**语境：** Week5 · One-part calculation

**语境英文：** Combine the capacities of best-effort flows as Σ CBE.

**语境中文：** 单部分计算：best-effort容量求和。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页54 / 幻灯片54

**全部来源：** Week5.pdf · PDF页52,54 / 幻灯片52,54；Week5.pdf · PDF页52 / 幻灯片52；Week5.pdf · PDF页54 / 幻灯片54

### Two-part flowspec

**稳定ID：** csit985-w5-fb8b10fbf6c6dd

**类别：** 专业英语

**中文解释：** 两部分流规格；含predictable，可含best effort，但不是必须有两种流。

**简单英文（整理解释）：** A specification containing predictable flows; it may also contain best-effort flows.

**说明依据：** 课件明确

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 规则

> Contains flows that have predictable requirements

**原文来源：** Week5.pdf · PDF页52 / 幻灯片52

**资料原文：** 规则

> May contain best-effort flows

**原文来源：** Week5.pdf · PDF页52 / 幻灯片52

**语境：** Week5 · Two-part flowspec

**语境英文：** A specification containing predictable flows; it may also contain best-effort flows.

**语境中文：** 两部分流规格；含predictable，可含best effort，但不是必须有两种流。

**语境依据：** 课件明确

**语境原文：** 规则

> Contains flows that have predictable requirements

**语境原文来源：** Week5.pdf · PDF页52 / 幻灯片52

**语境原文：** 规则

> May contain best-effort flows

**语境原文来源：** Week5.pdf · PDF页52 / 幻灯片52

**语境来源：** Week5.pdf · PDF页52,55 / 幻灯片52,55；Week5.pdf · PDF页52 / 幻灯片52

**语境：** Week5 · Two-part calculation

**语境英文：** Keep Σ CBE; combine predictable capacities as Σ Cp subject to Dp minimum and Rp maximum. Do not simply add delays or average requirements.

**语境中文：** 两部分计算：保留Σ CBE，再有Σ Cp及Dp最小、Rp最大约束。正文added不能理解成所有指标算术相加。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页55 / 幻灯片55；Week5_transcript.txt · TXT原始L2，本行字符35613起；搜索“strictest relevant requirements”

**全部来源：** Week5.pdf · PDF页52,55 / 幻灯片52,55；Week5.pdf · PDF页52 / 幻灯片52；Week5.pdf · PDF页55 / 幻灯片55；Week5_transcript.txt · TXT原始L2，本行字符35613起；搜索“strictest relevant requirements”

### Multi-part flowspec

**稳定ID：** csit985-w5-28ad26aed96290

**类别：** 专业英语

**中文解释：** 多部分流规格；含guaranteed，可同时含另两种流，不要求三类全有。

**简单英文（整理解释）：** A specification containing guaranteed flows; it may also contain predictable and best-effort flows.

**说明依据：** 课件明确

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 规则

> Flows that have guaranteed requirements

**原文来源：** Week5.pdf · PDF页52 / 幻灯片52

**资料原文：** 规则

> May contain predictable and best-effort

**原文来源：** Week5.pdf · PDF页52 / 幻灯片52

**语境：** Week5 · Multi-part flowspec

**语境英文：** A specification containing guaranteed flows; it may also contain predictable and best-effort flows.

**语境中文：** 多部分流规格；含guaranteed，可同时含另两种流，不要求三类全有。

**语境依据：** 课件明确

**语境原文：** 规则

> Flows that have guaranteed requirements

**语境原文来源：** Week5.pdf · PDF页52 / 幻灯片52

**语境原文：** 规则

> May contain predictable and best-effort

**语境原文来源：** Week5.pdf · PDF页52 / 幻灯片52

**语境来源：** Week5.pdf · PDF页52,56 / 幻灯片52,56；Week5.pdf · PDF页52 / 幻灯片52

**语境：** Week5 · Multi-part calculation

**语境英文：** Use the two-part structure and add each guaranteed requirement separately as Ci, Ri, Di.

**语境中文：** 多部分计算：沿两部分结构再加入逐条Ci/Ri/Di保证条件。

**语境依据：** 根据资料整理

**语境来源：** Week5.pdf · PDF页56 / 幻灯片56

**全部来源：** Week5.pdf · PDF页52,56 / 幻灯片52,56；Week5.pdf · PDF页52 / 幻灯片52；Week5.pdf · PDF页56 / 幻灯片56

### Stochastic

**稳定ID：** csit985-w5-0b34441ce4fbe9

**类别：** 专业英语

**中文解释：** 随机性；必要基础词义。图4.36使用此词而正文用predictable，资料未明确两者关系，不直接合并同义。

**简单英文（整理解释）：** A word used in Figure 4.36 for the two-part and multi-part flow types. The supplied material does not define it or establish that it means predictable.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Stochastic

**语境英文：** A word used in Figure 4.36 for the two-part and multi-part flow types. The supplied material does not define it or establish that it means predictable.

**语境中文：** 随机性；必要基础词义。图4.36使用此词而正文用predictable，资料未明确两者关系，不直接合并同义。

**语境依据：** 必要基础释义

**语境来源：** Week5.pdf · PDF页52 / 幻灯片52（图表）

**全部来源：** Week5.pdf · PDF页52 / 幻灯片52（图表）

### Flowspec algorithm

**稳定ID：** csit985-w5-110bfe4ad9fa7b

**类别：** 专业英语

**中文解释：** 流规格算法；按三种类别的不同规则合并性能需求。资料没有给完整实现代码或证明。

**简单英文（整理解释）：** A mechanism for combining requirements to obtain optimal composite performance, using different rules for the three service categories.

**说明依据：** 课件明确

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> A mechanism for combining performance requirements for flows to give optimal composite performance

**原文来源：** Week5.pdf · PDF页53 / 幻灯片53

**语境：** Week5 · Flowspec algorithm

**语境英文：** A mechanism for combining requirements to obtain optimal composite performance, using different rules for the three service categories.

**语境中文：** 流规格算法；按三种类别的不同规则合并性能需求。资料没有给完整实现代码或证明。

**语境依据：** 课件明确

**语境原文：** 定义

> A mechanism for combining performance requirements for flows to give optimal composite performance

**语境原文来源：** Week5.pdf · PDF页53 / 幻灯片53

**语境来源：** Week5.pdf · PDF页53 / 幻灯片53；Week5.pdf · PDF页53 / 幻灯片53

**全部来源：** Week5.pdf · PDF页53 / 幻灯片53；Week5.pdf · PDF页53 / 幻灯片53

### CBE (best-effort capacity)

**稳定ID：** csit985-w5-e53c21444b70c9

**类别：** 专业英语

**中文解释：** 尽力而为容量；图54的CBE及其求和。

**简单英文（整理解释）：** The capacity needed for a best-effort flow; Σ CBE represents their combined capacity.

**说明依据：** 课件明确

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 名称

> CBE: best-effort capacity

**原文来源：** Week5.pdf · PDF页54 / 幻灯片54

**语境：** Week5 · CBE (best-effort capacity)

**语境英文：** The capacity needed for a best-effort flow; Σ CBE represents their combined capacity.

**语境中文：** 尽力而为容量；图54的CBE及其求和。

**语境依据：** 课件明确

**语境原文：** 名称

> CBE: best-effort capacity

**语境原文来源：** Week5.pdf · PDF页54 / 幻灯片54

**语境来源：** Week5.pdf · PDF页54,55,56 / 幻灯片54,55,56；Week5.pdf · PDF页54 / 幻灯片54

**全部来源：** Week5.pdf · PDF页54,55,56 / 幻灯片54,55,56；Week5.pdf · PDF页54 / 幻灯片54

### Σ (sum) / Σ CBE

**稳定ID：** csit985-w5-d373d88a6bb4e1

**类别：** 专业英语

**中文解释：** 求和符号／best-effort容量之和；只按本讲容量合并规则，不加入未给的额外统计假设。

**简单英文（整理解释）：** Add the listed values / add best-effort flow capacities in the lecture's calculation.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week5 · Σ (sum) / Σ CBE

**语境英文：** Add the listed values / add best-effort flow capacities in the lecture's calculation.

**语境中文：** 求和符号／best-effort容量之和；只按本讲容量合并规则，不加入未给的额外统计假设。

**语境依据：** 必要基础释义

**语境来源：** Week5.pdf · PDF页54,55,56 / 幻灯片54,55,56

**全部来源：** Week5.pdf · PDF页54,55,56 / 幻灯片54,55,56

### Cp / Σ Cp

**稳定ID：** csit985-w5-0134e2f0ddc09b

**类别：** 专业英语

**中文解释：** 可预测容量／可预测容量求和；与best effort的Σ CBE分部分表示。

**简单英文（整理解释）：** The capacity required for predictable flows / the combined predictable capacities.

**说明依据：** 课件明确

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 名称

> Cp = capacity required for predictable flows

**原文来源：** Week5.pdf · PDF页55 / 幻灯片55

**语境：** Week5 · Cp / Σ Cp

**语境英文：** The capacity required for predictable flows / the combined predictable capacities.

**语境中文：** 可预测容量／可预测容量求和；与best effort的Σ CBE分部分表示。

**语境依据：** 课件明确

**语境原文：** 名称

> Cp = capacity required for predictable flows

**语境原文来源：** Week5.pdf · PDF页55 / 幻灯片55

**语境来源：** Week5.pdf · PDF页55,56 / 幻灯片55,56；Week5.pdf · PDF页55 / 幻灯片55

**全部来源：** Week5.pdf · PDF页55,56 / 幻灯片55,56；Week5.pdf · PDF页55 / 幻灯片55

### Dp (predictable delay requirement, minimum)

**稳定ID：** csit985-w5-b3efae56286d1d

**类别：** 专业英语

**中文解释：** 可预测时延要求；取最小的要求值，而非把所有时延相加或取宽松平均。

**简单英文（整理解释）：** The minimum delay requirement used to protect the strictest predictable delay target.

**说明依据：** 课件明确

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 名称

> Dp = predictable delay requirement (minimum)

**原文来源：** Week5.pdf · PDF页55 / 幻灯片55

**语境：** Week5 · Dp (predictable delay requirement, minimum)

**语境英文：** The minimum delay requirement used to protect the strictest predictable delay target.

**语境中文：** 可预测时延要求；取最小的要求值，而非把所有时延相加或取宽松平均。

**语境依据：** 课件明确

**语境原文：** 名称

> Dp = predictable delay requirement (minimum)

**语境原文来源：** Week5.pdf · PDF页55 / 幻灯片55

**语境来源：** Week5.pdf · PDF页55 / 幻灯片55；Week5_transcript.txt · TXT原始L2，本行字符35613起；搜索“strictest relevant requirements”；Week5.pdf · PDF页55 / 幻灯片55

**全部来源：** Week5.pdf · PDF页55 / 幻灯片55；Week5_transcript.txt · TXT原始L2，本行字符35613起；搜索“strictest relevant requirements”；Week5.pdf · PDF页55 / 幻灯片55

### Rp (predictable RMA requirement, maximum)

**稳定ID：** csit985-w5-d52d867641284a

**类别：** 专业英语

**中文解释：** 可预测RMA要求；课件标maximum，未说明如何把MTTR等不同方向／单位的RMA指标统一排序，不扩展为所有指标取数值最大。

**简单英文（整理解释）：** The maximum predictable RMA requirement shown on the slide. How all RMA measures are converted to one ordered scale is not defined.

**说明依据：** 课件明确

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 名称

> Rp = predictable RMA requirement (maximum)

**原文来源：** Week5.pdf · PDF页55 / 幻灯片55

**语境：** Week5 · Rp (predictable RMA requirement, maximum)

**语境英文：** The maximum predictable RMA requirement shown on the slide. How all RMA measures are converted to one ordered scale is not defined.

**语境中文：** 可预测RMA要求；课件标maximum，未说明如何把MTTR等不同方向／单位的RMA指标统一排序，不扩展为所有指标取数值最大。

**语境依据：** 课件明确

**语境原文：** 名称

> Rp = predictable RMA requirement (maximum)

**语境原文来源：** Week5.pdf · PDF页55 / 幻灯片55

**语境来源：** Week5.pdf · PDF页55 / 幻灯片55；Week5.pdf · PDF页55 / 幻灯片55

**全部来源：** Week5.pdf · PDF页55 / 幻灯片55；Week5.pdf · PDF页55 / 幻灯片55

### Ci / Ri / Di

**稳定ID：** csit985-w5-a4f9a5ea31dfb4

**类别：** 专业英语

**中文解释：** 保证流i的容量、可靠性／RMA、时延；各条分别保留。TXT称Ri为reliability，邻页用RMA，记为来源用语差异。

**简单英文（整理解释）：** The individual guaranteed flow's capacity, reliability/RMA, and delay requirements, kept separately in a multi-part specification.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 名称

> Ci Ri Di

**原文来源：** Week5.pdf · PDF页56 / 幻灯片56

**语境：** Week5 · Ci / Ri / Di

**语境英文：** The individual guaranteed flow's capacity, reliability/RMA, and delay requirements, kept separately in a multi-part specification.

**语境中文：** 保证流i的容量、可靠性／RMA、时延；各条分别保留。TXT称Ri为reliability，邻页用RMA，记为来源用语差异。

**语境依据：** 根据资料整理

**语境原文：** 名称

> Ci Ri Di

**语境原文来源：** Week5.pdf · PDF页56 / 幻灯片56

**语境来源：** Week5.pdf · PDF页56 / 幻灯片56（图表）；Week5_transcript.txt · TXT原始L2，本行字符36932起；搜索“CI means”；Week5.pdf · PDF页56 / 幻灯片56

**全部来源：** Week5.pdf · PDF页56 / 幻灯片56（图表）；Week5_transcript.txt · TXT原始L2，本行字符36932起；搜索“CI means”；Week5.pdf · PDF页56 / 幻灯片56

## 阅读词汇

### N/A

**稳定ID：** csit985-w5-e3ede31803eb4a

**类别：** 阅读词汇

**中文解释：** 表格中不适用或未提供；各格具体含义不明，不等于0。

**简单英文（整理解释）：** Not applicable or not available; the table does not say which.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> N/A

**原文来源：** Week5.pdf · PDF页47 / 幻灯片47

**资料原文：** 用法片段

> N/A

**原文来源：** Week5.pdf · PDF页48 / 幻灯片48

**资料原文：** 用法片段

> N/A

**原文来源：** Week5.pdf · PDF页49 / 幻灯片49

**语境：** Week5 · N/A

**语境英文：** Not applicable or not available; the table does not say which.

**语境中文：** 表格中不适用或未提供；各格具体含义不明，不等于0。

**语境依据：** 整理解释

**语境原文：** 用法片段

> N/A

**语境原文来源：** Week5.pdf · PDF页47 / 幻灯片47

**语境原文：** 用法片段

> N/A

**语境原文来源：** Week5.pdf · PDF页48 / 幻灯片48

**语境原文：** 用法片段

> N/A

**语境原文来源：** Week5.pdf · PDF页49 / 幻灯片49

**语境来源：** Week5.pdf · PDF页47,48,49 / 幻灯片47,48,49；Week5_transcript.txt · TXT原始L2，本行字符30752起；搜索“not applicable or uh available”；Week5.pdf · PDF页47 / 幻灯片47；Week5.pdf · PDF页48 / 幻灯片48；Week5.pdf · PDF页49 / 幻灯片49

**全部来源：** Week5.pdf · PDF页47,48,49 / 幻灯片47,48,49；Week5_transcript.txt · TXT原始L2，本行字符30752起；搜索“not applicable or uh available”；Week5.pdf · PDF页47 / 幻灯片47；Week5.pdf · PDF页48 / 幻灯片48；Week5.pdf · PDF页49 / 幻灯片49

### as the basis for

**稳定ID：** csit985-w5-r-fe3ea48e16d5e4

**类别：** 阅读词汇

**中文解释：** 作为判断流量位置的依据。

**简单英文（整理解释）：** As a starting foundation.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> as the basis for

**原文来源：** Week5.pdf · PDF页5 / 幻灯片5

**语境：** Week5 · as the basis for

**语境英文：** As a starting foundation.

**语境中文：** 作为判断流量位置的依据。

**语境依据：** 整理解释

**使用结构：** as the basis for + noun

**语境原文：** 用法片段

> as the basis for

**语境原文来源：** Week5.pdf · PDF页5 / 幻灯片5

**语境来源：** Week5.pdf · PDF页5 / 幻灯片5；Week5.pdf · PDF页5 / 幻灯片5

**使用结构：** as the basis for + noun

**全部来源：** Week5.pdf · PDF页5 / 幻灯片5；Week5.pdf · PDF页5 / 幻灯片5

### associated with

**稳定ID：** csit985-w5-r-2699a69a5f0f6d

**类别：** 阅读词汇

**中文解释：** 与应用、设备、网络或用户有关联。

**简单英文（整理解释）：** Linked to.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> associated with

**原文来源：** Week5.pdf · PDF页8 / 幻灯片8

**语境：** Week5 · associated with

**语境英文：** Linked to.

**语境中文：** 与应用、设备、网络或用户有关联。

**语境依据：** 整理解释

**使用结构：** be associated with + noun

**语境原文：** 用法片段

> associated with

**语境原文来源：** Week5.pdf · PDF页8 / 幻灯片8

**语境来源：** Week5.pdf · PDF页6,7,8 / 幻灯片6,7,8；Week5.pdf · PDF页8 / 幻灯片8

**使用结构：** be associated with + noun

**全部来源：** Week5.pdf · PDF页6,7,8 / 幻灯片6,7,8；Week5.pdf · PDF页8 / 幻灯片8

### remain with THAT flow

**稳定ID：** csit985-w5-r-2c340d8f072c0d

**类别：** 阅读词汇

**中文解释：** 保证要求仍归那条特定流，不能藏入合并平均值。

**简单英文（整理解释）：** Stay attached to that exact flow.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> remain with THAT flow

**原文来源：** Week5.pdf · PDF页10 / 幻灯片10

**语境：** Week5 · remain with THAT flow

**语境英文：** Stay attached to that exact flow.

**语境中文：** 保证要求仍归那条特定流，不能藏入合并平均值。

**语境依据：** 整理解释

**使用结构：** remain with + entity

**语境原文：** 用法片段

> remain with THAT flow

**语境原文来源：** Week5.pdf · PDF页10 / 幻灯片10

**语境来源：** Week5.pdf · PDF页10 / 幻灯片10；Week5.pdf · PDF页10 / 幻灯片10

**使用结构：** remain with + entity

**全部来源：** Week5.pdf · PDF页10 / 幻灯片10；Week5.pdf · PDF页10 / 幻灯片10

### from an application perspective

**稳定ID：** csit985-w5-r-e368a8c1b3e2e1

**类别：** 阅读词汇

**中文解释：** 从应用视角考察流；不是另一个流模型名称。

**简单英文（整理解释）：** Viewed through applications.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> From an application perspective

**原文来源：** Week5.pdf · PDF页17 / 幻灯片17

**语境：** Week5 · from an application perspective

**语境英文：** Viewed through applications.

**语境中文：** 从应用视角考察流；不是另一个流模型名称。

**语境依据：** 整理解释

**语境原文：** 用法片段

> From an application perspective

**语境原文来源：** Week5.pdf · PDF页17 / 幻灯片17

**语境来源：** Week5.pdf · PDF页17 / 幻灯片17；Week5.pdf · PDF页17 / 幻灯片17

**全部来源：** Week5.pdf · PDF页17 / 幻灯片17；Week5.pdf · PDF页17 / 幻灯片17

### driving the architecture and design

**稳定ID：** csit985-w5-b9520da95fd036

**类别：** 阅读词汇

**中文解释：** 强烈影响／推动架构和设计决策；driving不是驾驶。

**简单英文（整理解释）：** Having a strong influence on design choices.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> driving the architecture and design

**原文来源：** Week5.pdf · PDF页19 / 幻灯片19

**资料原文：** 用法片段

> driving the architecture and design

**原文来源：** Week5.pdf · PDF页20 / 幻灯片20

**语境：** Week5 · driving the architecture and design

**语境英文：** Having a strong influence on design choices.

**语境中文：** 强烈影响／推动架构和设计决策；driving不是驾驶。

**语境依据：** 整理解释

**语境原文：** 用法片段

> driving the architecture and design

**语境原文来源：** Week5.pdf · PDF页19 / 幻灯片19

**语境原文：** 用法片段

> driving the architecture and design

**语境原文来源：** Week5.pdf · PDF页20 / 幻灯片20

**语境来源：** Week5.pdf · PDF页19,20 / 幻灯片19,20；Week5.pdf · PDF页19 / 幻灯片19；Week5.pdf · PDF页20 / 幻灯片20

**全部来源：** Week5.pdf · PDF页19,20 / 幻灯片19,20；Week5.pdf · PDF页19 / 幻灯片19；Week5.pdf · PDF页20 / 幻灯片20

### specialized

**稳定ID：** csit985-w5-r-a497a496a0d9fd

**类别：** 阅读词汇

**中文解释：** 专门用于特定用途的；本页说专用设备。

**简单英文（整理解释）：** Made for a particular purpose.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Specialized devices

**原文来源：** Week5.pdf · PDF页25 / 幻灯片25

**语境：** Week5 · specialized

**语境英文：** Made for a particular purpose.

**语境中文：** 专门用于特定用途的；本页说专用设备。

**语境依据：** 整理解释

**语境原文：** 用法片段

> Specialized devices

**语境原文来源：** Week5.pdf · PDF页25 / 幻灯片25

**语境来源：** Week5.pdf · PDF页25,27 / 幻灯片25,27；Week5.pdf · PDF页25 / 幻灯片25

**全部来源：** Week5.pdf · PDF页25,27 / 幻灯片25,27；Week5.pdf · PDF页25 / 幻灯片25

### predominant

**稳定ID：** csit985-w5-r-d39c7e355fc919

**类别：** 阅读词汇

**中文解释：** 占主导地位的；此模型示例的主导流来自服务器。

**简单英文（整理解释）：** Main or strongest.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Predominant flows

**原文来源：** Week5.pdf · PDF页37 / 幻灯片37

**语境：** Week5 · predominant

**语境英文：** Main or strongest.

**语境中文：** 占主导地位的；此模型示例的主导流来自服务器。

**语境依据：** 整理解释

**语境原文：** 用法片段

> Predominant flows

**语境原文来源：** Week5.pdf · PDF页37 / 幻灯片37

**语境来源：** Week5.pdf · PDF页36,37 / 幻灯片36,37；Week5.pdf · PDF页37 / 幻灯片37

**全部来源：** Week5.pdf · PDF页36,37 / 幻灯片36,37；Week5.pdf · PDF页37 / 幻灯片37

### objectives

**稳定ID：** csit985-w5-r-cc171fd39f4757

**类别：** 阅读词汇

**中文解释：** 希望达到的目标；不是“客观的”形容词义。

**简单英文（整理解释）：** Aims or goals.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Business objectives

**原文来源：** Week5.pdf · PDF页46 / 幻灯片46

**语境：** Week5 · objectives

**语境英文：** Aims or goals.

**语境中文：** 希望达到的目标；不是“客观的”形容词义。

**语境依据：** 整理解释

**语境原文：** 用法片段

> Business objectives

**语境原文来源：** Week5.pdf · PDF页46 / 幻灯片46

**语境来源：** Week5.pdf · PDF页46 / 幻灯片46；Week5.pdf · PDF页46 / 幻灯片46

**全部来源：** Week5.pdf · PDF页46 / 幻灯片46；Week5.pdf · PDF页46 / 幻灯片46

### served by a flow

**稳定ID：** csit985-w5-r-259fe6385f518b

**类别：** 阅读词汇

**中文解释：** 受到某条流支持的用户、应用或设备；serve不是端食物。

**简单英文（整理解释）：** Supported by a flow.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> served by a flow

**原文来源：** Week5.pdf · PDF页46 / 幻灯片46

**语境：** Week5 · served by a flow

**语境英文：** Supported by a flow.

**语境中文：** 受到某条流支持的用户、应用或设备；serve不是端食物。

**语境依据：** 整理解释

**语境原文：** 用法片段

> served by a flow

**语境原文来源：** Week5.pdf · PDF页46 / 幻灯片46

**语境来源：** Week5.pdf · PDF页46 / 幻灯片46；Week5.pdf · PDF页46 / 幻灯片46

**全部来源：** Week5.pdf · PDF页46 / 幻灯片46；Week5.pdf · PDF页46 / 幻灯片46

### subject to

**稳定ID：** csit985-w5-r-8a9afb36c4b6b5

**类别：** 阅读词汇

**中文解释：** 受到条件约束；不能只合并容量而忽略Dp、Rp。

**简单英文（整理解释）：** Under stated constraints.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语

> subject to

**原文来源：** Week5_transcript.txt · TXT原始L2，本行字符35872起；搜索“subject to”

**语境：** Week5 · subject to

**语境英文：** Under stated constraints.

**语境中文：** 受到条件约束；不能只合并容量而忽略Dp、Rp。

**语境依据：** 教师补充

**使用结构：** subject to + constraints

**语境原文：** 教师用语

> subject to

**语境原文来源：** Week5_transcript.txt · TXT原始L2，本行字符35872起；搜索“subject to”

**语境来源：** Week5.pdf · PDF页53,55 / 幻灯片53,55；Week5_transcript.txt · TXT原始L2，本行字符35872起；搜索“subject to”

**使用结构：** subject to + constraints

**全部来源：** Week5.pdf · PDF页53,55 / 幻灯片53,55；Week5_transcript.txt · TXT原始L2，本行字符35872起；搜索“subject to”

### a relaxed average

**稳定ID：** csit985-w5-r-e9c4d83336e288

**类别：** 阅读词汇

**中文解释：** 较宽松的平均要求；教师说不能用它取代最严格相关要求。

**简单英文（整理解释）：** An easier average requirement.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语

> a relaxed average

**原文来源：** Week5_transcript.txt · TXT原始L2，本行字符35667起；搜索“a relaxed average”

**语境：** Week5 · a relaxed average

**语境英文：** An easier average requirement.

**语境中文：** 较宽松的平均要求；教师说不能用它取代最严格相关要求。

**语境依据：** 教师补充

**语境原文：** 教师用语

> a relaxed average

**语境原文来源：** Week5_transcript.txt · TXT原始L2，本行字符35667起；搜索“a relaxed average”

**语境来源：** Week5_transcript.txt · TXT原始L2，本行字符35646起；搜索“not just calculating a relaxed average”；Week5_transcript.txt · TXT原始L2，本行字符35667起；搜索“a relaxed average”

**全部来源：** Week5_transcript.txt · TXT原始L2，本行字符35646起；搜索“not just calculating a relaxed average”；Week5_transcript.txt · TXT原始L2，本行字符35667起；搜索“a relaxed average”

### just a heads up

**稳定ID：** csit985-w5-r-6a319b2ae9eb47

**类别：** 阅读词汇

**中文解释：** 提前提醒一下；教师结束时的口语提示。

**简单英文（整理解释）：** A short warning in advance.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语

> just a heads up

**原文来源：** Week5_transcript.txt · TXT原始L2，本行字符37654起；搜索“just a heads up”

**语境：** Week5 · just a heads up

**语境英文：** A short warning in advance.

**语境中文：** 提前提醒一下；教师结束时的口语提示。

**语境依据：** 教师补充

**语境原文：** 教师用语

> just a heads up

**语境原文来源：** Week5_transcript.txt · TXT原始L2，本行字符37654起；搜索“just a heads up”

**语境来源：** Week5_transcript.txt · TXT原始L2，本行字符2890起；搜索“individual work”；Week5_transcript.txt · TXT原始L2，本行字符28189起；搜索“Teamwork”；Week5_transcript.txt · TXT原始L2，本行字符2921起；搜索“due”；Week5_transcript.txt · TXT原始L2，本行字符24668起；搜索“deadline”；Week5_transcript.txt · TXT原始L2，本行字符37654起；搜索“just a heads up”

**全部来源：** Week5_transcript.txt · TXT原始L2，本行字符2890起；搜索“individual work”；Week5_transcript.txt · TXT原始L2，本行字符28189起；搜索“Teamwork”；Week5_transcript.txt · TXT原始L2，本行字符2921起；搜索“due”；Week5_transcript.txt · TXT原始L2，本行字符24668起；搜索“deadline”；Week5_transcript.txt · TXT原始L2，本行字符37654起；搜索“just a heads up”

### common attributes

**稳定ID：** csit985-w5-23a0c7af7c2948

**类别：** 阅读词汇

**中文解释：** 共同属性／特征；用于把网络流量组成一条flow。

**简单英文（整理解释）：** Shared features of traffic.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> common attributes

**原文来源：** Week5.pdf · PDF页6 / 幻灯片6

**资料原文：** 用法片段

> Common attributes

**原文来源：** Week5.pdf · PDF页7 / 幻灯片7

**语境：** Week5 · common attributes

**语境英文：** Shared features of traffic.

**语境中文：** 共同属性／特征；用于把网络流量组成一条flow。

**语境依据：** 整理解释

**语境原文：** 用法片段

> common attributes

**语境原文来源：** Week5.pdf · PDF页6 / 幻灯片6

**语境原文：** 用法片段

> Common attributes

**语境原文来源：** Week5.pdf · PDF页7 / 幻灯片7

**语境来源：** Week5.pdf · PDF页6,7 / 幻灯片6,7；Week5.pdf · PDF页6 / 幻灯片6；Week5.pdf · PDF页7 / 幻灯片7

**全部来源：** Week5.pdf · PDF页6,7 / 幻灯片6,7；Week5.pdf · PDF页6 / 幻灯片6；Week5.pdf · PDF页7 / 幻灯片7

### medical instruments

**稳定ID：** csit985-w5-r-a3d6b768172fea

**类别：** 阅读词汇

**中文解释：** 医疗仪器；课件列为产生数据的专用设备例子。

**简单英文（整理解释）：** Equipment used for medical work.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> medical instruments

**原文来源：** Week5.pdf · PDF页25 / 幻灯片25

**语境：** Week5 · medical instruments

**语境英文：** Equipment used for medical work.

**语境中文：** 医疗仪器；课件列为产生数据的专用设备例子。

**语境依据：** 整理解释

**语境原文：** 用法片段

> medical instruments

**语境原文来源：** Week5.pdf · PDF页25 / 幻灯片25

**语境来源：** Week5.pdf · PDF页25,26 / 幻灯片25,26（图表）；Week5.pdf · PDF页25 / 幻灯片25

**全部来源：** Week5.pdf · PDF页25,26 / 幻灯片25,26（图表）；Week5.pdf · PDF页25 / 幻灯片25

### commonality

**稳定ID：** csit985-w5-r-f2704e7f9ca768

**类别：** 阅读词汇

**中文解释：** 共同点；复合流共享链路、路径或网络。

**简单英文（整理解释）：** A shared feature.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> commonality

**原文来源：** Week5.pdf · PDF页11 / 幻灯片11

**语境：** Week5 · commonality

**语境英文：** A shared feature.

**语境中文：** 共同点；复合流共享链路、路径或网络。

**语境依据：** 整理解释

**语境原文：** 用法片段

> commonality

**语境原文来源：** Week5.pdf · PDF页11 / 幻灯片11

**语境来源：** Week5.pdf · PDF页11,13 / 幻灯片11,13；Week5.pdf · PDF页11 / 幻灯片11

**全部来源：** Week5.pdf · PDF页11,13 / 幻灯片11,13；Week5.pdf · PDF页11 / 幻灯片11

### prioritize

**稳定ID：** csit985-w5-r-c592f0fcebd5dd

**类别：** 阅读词汇

**中文解释：** 按重要性确定先后顺序。

**简单英文（整理解释）：** Rank by importance.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> prioritize

**原文来源：** Week5.pdf · PDF页13 / 幻灯片13

**语境：** Week5 · prioritize

**语境英文：** Rank by importance.

**语境中文：** 按重要性确定先后顺序。

**语境依据：** 整理解释

**使用结构：** prioritize + flows

**语境原文：** 用法片段

> prioritize

**语境原文来源：** Week5.pdf · PDF页13 / 幻灯片13

**语境来源：** Week5.pdf · PDF页11,13 / 幻灯片11,13；Week5.pdf · PDF页13 / 幻灯片13

**使用结构：** prioritize + flows

**全部来源：** Week5.pdf · PDF页11,13 / 幻灯片11,13；Week5.pdf · PDF页13 / 幻灯片13

### criteria

**稳定ID：** csit985-w5-r-cfed999f648a38

**类别：** 阅读词汇

**中文解释：** 选择准则；criterion的复数。

**简单英文（整理解释）：** Standards used for a choice.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Criteria

**原文来源：** Week5.pdf · PDF页22 / 幻灯片22

**语境：** Week5 · criteria

**语境英文：** Standards used for a choice.

**语境中文：** 选择准则；criterion的复数。

**语境依据：** 整理解释

**语境原文：** 用法片段

> Criteria

**语境原文来源：** Week5.pdf · PDF页22 / 幻灯片22

**语境来源：** Week5.pdf · PDF页18,22 / 幻灯片18,22；Week5.pdf · PDF页22 / 幻灯片22

**全部来源：** Week5.pdf · PDF页18,22 / 幻灯片18,22；Week5.pdf · PDF页22 / 幻灯片22

### eliminated

**稳定ID：** csit985-w5-r-1937fe375e27ca

**类别：** 阅读词汇

**中文解释：** 被筛除；仍需问被排除应用的需求是否满足。

**简单英文（整理解释）：** Left out of a selected group.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> eliminated

**原文来源：** Week5.pdf · PDF页22 / 幻灯片22

**语境：** Week5 · eliminated

**语境英文：** Left out of a selected group.

**语境中文：** 被筛除；仍需问被排除应用的需求是否满足。

**语境依据：** 整理解释

**语境原文：** 用法片段

> eliminated

**语境原文来源：** Week5.pdf · PDF页22 / 幻灯片22

**语境来源：** Week5.pdf · PDF页18,22 / 幻灯片18,22；Week5.pdf · PDF页22 / 幻灯片22

**全部来源：** Week5.pdf · PDF页18,22 / 幻灯片18,22；Week5.pdf · PDF页22 / 幻灯片22

### requirements ... be met

**稳定ID：** csit985-w5-r-22c50310de4094

**类别：** 阅读词汇

**中文解释：** 要求得到满足；met不是遇见某人。

**简单英文（整理解释）：** Requirements are satisfied.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> be met

**原文来源：** Week5.pdf · PDF页22 / 幻灯片22

**语境：** Week5 · requirements ... be met

**语境英文：** Requirements are satisfied.

**语境中文：** 要求得到满足；met不是遇见某人。

**语境依据：** 整理解释

**使用结构：** meet + requirements；requirements + be met

**语境原文：** 用法片段

> be met

**语境原文来源：** Week5.pdf · PDF页22 / 幻灯片22

**语境来源：** Week5.pdf · PDF页18,22 / 幻灯片18,22；Week5.pdf · PDF页22 / 幻灯片22

**使用结构：** meet + requirements；requirements + be met

**全部来源：** Week5.pdf · PDF页18,22 / 幻灯片18,22；Week5.pdf · PDF页22 / 幻灯片22

### archival

**稳定ID：** csit985-w5-r-b7df9e455bf7f2

**类别：** 阅读词汇

**中文解释：** 用于归档、为以后保留数据的。

**简单英文（整理解释）：** For keeping data for later use.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> archival

**原文来源：** Week5.pdf · PDF页27 / 幻灯片27

**语境：** Week5 · archival

**语境英文：** For keeping data for later use.

**语境中文：** 用于归档、为以后保留数据的。

**语境依据：** 整理解释

**语境原文：** 用法片段

> archival

**语境原文来源：** Week5.pdf · PDF页27 / 幻灯片27

**语境来源：** Week5.pdf · PDF页24,27 / 幻灯片24,27；Week5.pdf · PDF页27 / 幻灯片27

**全部来源：** Week5.pdf · PDF页24,27 / 幻灯片24,27；Week5.pdf · PDF页27 / 幻灯片27

### manipulate

**稳定ID：** csit985-w5-r-b7bde3c2daa86c

**类别：** 阅读词汇

**中文解释：** 处理或改变大量数据；此处不是操纵人的意思。

**简单英文（整理解释）：** Process or change data.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> manipulate

**原文来源：** Week5.pdf · PDF页27 / 幻灯片27

**语境：** Week5 · manipulate

**语境英文：** Process or change data.

**语境中文：** 处理或改变大量数据；此处不是操纵人的意思。

**语境依据：** 整理解释

**使用结构：** manipulate + data

**语境原文：** 用法片段

> manipulate

**语境原文来源：** Week5.pdf · PDF页27 / 幻灯片27

**语境来源：** Week5.pdf · PDF页24,27 / 幻灯片24,27；Week5.pdf · PDF页27 / 幻灯片27

**使用结构：** manipulate + data

**全部来源：** Week5.pdf · PDF页24,27 / 幻灯片24,27；Week5.pdf · PDF页27 / 幻灯片27

### terminate

**稳定ID：** csit985-w5-r-445e823080b2e2

**类别：** 阅读词汇

**中文解释：** 成为流的接收终点；此处不是删除数据。

**简单英文（整理解释）：** Be the endpoint of received traffic.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> terminate

**原文来源：** Week5.pdf · PDF页24 / 幻灯片24

**语境：** Week5 · terminate

**语境英文：** Be the endpoint of received traffic.

**语境中文：** 成为流的接收终点；此处不是删除数据。

**语境依据：** 整理解释

**使用结构：** terminate + traffic（当前语境）

**语境原文：** 用法片段

> terminate

**语境原文来源：** Week5.pdf · PDF页24 / 幻灯片24

**语境来源：** Week5.pdf · PDF页24,27 / 幻灯片24,27；Week5.pdf · PDF页24 / 幻灯片24

**使用结构：** terminate + traffic（当前语境）

**全部来源：** Week5.pdf · PDF页24,27 / 幻灯片24,27；Week5.pdf · PDF页24 / 幻灯片24

### exhibit ... characteristics

**稳定ID：** csit985-w5-r-42591f6c7480f5

**类别：** 阅读词汇

**中文解释：** 表现出某些特征；exhibit不是展览品名词义。

**简单英文（整理解释）：** Show features.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> exhibit specific, consistent behaviour

**原文来源：** Week5.pdf · PDF页31 / 幻灯片31

**语境：** Week5 · exhibit ... characteristics

**语境英文：** Show features.

**语境中文：** 表现出某些特征；exhibit不是展览品名词义。

**语境依据：** 整理解释

**使用结构：** exhibit + characteristics

**语境原文：** 用法片段

> exhibit specific, consistent behaviour

**语境原文来源：** Week5.pdf · PDF页31 / 幻灯片31

**语境来源：** Week5.pdf · PDF页31 / 幻灯片31；Week5.pdf · PDF页31 / 幻灯片31

**使用结构：** exhibit + characteristics

**全部来源：** Week5.pdf · PDF页31 / 幻灯片31；Week5.pdf · PDF页31 / 幻灯片31

### consistent behaviour

**稳定ID：** csit985-w5-r-c1deed8b06eb00

**类别：** 阅读词汇

**中文解释：** 遵循一致模式的行为。

**简单英文（整理解释）：** Behaviour that follows a similar pattern.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> consistent behaviour

**原文来源：** Week5.pdf · PDF页31 / 幻灯片31

**语境：** Week5 · consistent behaviour

**语境英文：** Behaviour that follows a similar pattern.

**语境中文：** 遵循一致模式的行为。

**语境依据：** 整理解释

**语境原文：** 用法片段

> consistent behaviour

**语境原文来源：** Week5.pdf · PDF页31 / 幻灯片31

**语境来源：** Week5.pdf · PDF页31 / 幻灯片31；Week5.pdf · PDF页31 / 幻灯片31

**全部来源：** Week5.pdf · PDF页31 / 幻灯片31；Week5.pdf · PDF页31 / 幻灯片31

### preference

**稳定ID：** csit985-w5-r-1906b9257cbafd

**类别：** 阅读词汇

**中文解释：** 倾向；此处说一条流某方向需求较多的倾向。

**简单英文（整理解释）：** A tendency toward one direction.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Preference of a flow

**原文来源：** Week5.pdf · PDF页31 / 幻灯片31

**语境：** Week5 · preference

**语境英文：** A tendency toward one direction.

**语境中文：** 倾向；此处说一条流某方向需求较多的倾向。

**语境依据：** 整理解释

**语境原文：** 用法片段

> Preference of a flow

**语境原文来源：** Week5.pdf · PDF页31 / 幻灯片31

**语境来源：** Week5.pdf · PDF页31,33 / 幻灯片31,33；Week5.pdf · PDF页31 / 幻灯片31

**全部来源：** Week5.pdf · PDF页31,33 / 幻灯片31,33；Week5.pdf · PDF页31 / 幻灯片31

### throughout

**稳定ID：** csit985-w5-r-932ed12334b227

**类别：** 阅读词汇

**中文解释：** 遍及整个网络，而非仅某一点。

**简单英文（整理解释）：** Across the whole network.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> throughout network

**原文来源：** Week5.pdf · PDF页33 / 幻灯片33

**语境：** Week5 · throughout

**语境英文：** Across the whole network.

**语境中文：** 遍及整个网络，而非仅某一点。

**语境依据：** 整理解释

**使用结构：** throughout + network

**语境原文：** 用法片段

> throughout network

**语境原文来源：** Week5.pdf · PDF页33 / 幻灯片33

**语境来源：** Week5.pdf · PDF页31,33 / 幻灯片31,33；Week5.pdf · PDF页33 / 幻灯片33

**使用结构：** throughout + network

**全部来源：** Week5.pdf · PDF页31,33 / 幻灯片31,33；Week5.pdf · PDF页33 / 幻灯片33

### equivalent

**稳定ID：** csit985-w5-r-e5a9f61f02ffc6

**类别：** 阅读词汇

**中文解释：** 被视为等效／同等；模型中可用同一profile描述。

**简单英文（整理解释）：** Treated as alike.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> equivalent

**原文来源：** Week5.pdf · PDF页34 / 幻灯片34

**语境：** Week5 · equivalent

**语境英文：** Treated as alike.

**语境中文：** 被视为等效／同等；模型中可用同一profile描述。

**语境依据：** 整理解释

**语境原文：** 用法片段

> equivalent

**语境原文来源：** Week5.pdf · PDF页34 / 幻灯片34

**语境来源：** Week5.pdf · PDF页33,34 / 幻灯片33,34；Week5.pdf · PDF页34 / 幻灯片34

**全部来源：** Week5.pdf · PDF页33,34 / 幻灯片33,34；Week5.pdf · PDF页34 / 幻灯片34

### fairly consistent

**稳定ID：** csit985-w5-r-ec821d0ef9630e

**类别：** 阅读词汇

**中文解释：** 相当一致，但不是所有数值完全一样。

**简单英文（整理解释）：** Mostly following the same pattern.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> fairly consistent

**原文来源：** Week5.pdf · PDF页33 / 幻灯片33

**语境：** Week5 · fairly consistent

**语境英文：** Mostly following the same pattern.

**语境中文：** 相当一致，但不是所有数值完全一样。

**语境依据：** 整理解释

**语境原文：** 用法片段

> fairly consistent

**语境原文来源：** Week5.pdf · PDF页33 / 幻灯片33

**语境来源：** Week5.pdf · PDF页33,34 / 幻灯片33,34；Week5.pdf · PDF页33 / 幻灯片33

**全部来源：** Week5.pdf · PDF页33,34 / 幻灯片33,34；Week5.pdf · PDF页33 / 幻灯片33

### generally applicable

**稳定ID：** csit985-w5-r-72f4f10e8392c1

**类别：** 阅读词汇

**中文解释：** 普遍适用；currently只是课件措辞，不当作最新事实。

**简单英文（整理解释）：** Useful in many cases.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> generally applicable

**原文来源：** Week5.pdf · PDF页36 / 幻灯片36

**语境：** Week5 · generally applicable

**语境英文：** Useful in many cases.

**语境中文：** 普遍适用；currently只是课件措辞，不当作最新事实。

**语境依据：** 整理解释

**语境原文：** 用法片段

> generally applicable

**语境原文来源：** Week5.pdf · PDF页36 / 幻灯片36

**语境来源：** Week5.pdf · PDF页36 / 幻灯片36；Week5.pdf · PDF页36 / 幻灯片36

**全部来源：** Week5.pdf · PDF页36 / 幻灯片36；Week5.pdf · PDF页36 / 幻灯片36

### asymmetric

**稳定ID：** csit985-w5-r-e134e670421cc7

**类别：** 阅读词汇

**中文解释：** 两个方向不对称；此处流量或需求可不同。

**简单英文（整理解释）：** Unequal across directions.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> asymmetric

**原文来源：** Week5.pdf · PDF页36 / 幻灯片36

**语境：** Week5 · asymmetric

**语境英文：** Unequal across directions.

**语境中文：** 两个方向不对称；此处流量或需求可不同。

**语境依据：** 整理解释

**语境原文：** 用法片段

> asymmetric

**语境原文来源：** Week5.pdf · PDF页36 / 幻灯片36

**语境来源：** Week5.pdf · PDF页36 / 幻灯片36；Week5.pdf · PDF页36 / 幻灯片36

**全部来源：** Week5.pdf · PDF页36 / 幻灯片36；Week5.pdf · PDF页36 / 幻灯片36

### accomplish a task

**稳定ID：** csit985-w5-r-da70f1c207b097

**类别：** 阅读词汇

**中文解释：** 完成任务；多个应用可能为此共享信息。

**简单英文（整理解释）：** Complete work.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> accomplish a task

**原文来源：** Week5.pdf · PDF页39 / 幻灯片39

**语境：** Week5 · accomplish a task

**语境英文：** Complete work.

**语境中文：** 完成任务；多个应用可能为此共享信息。

**语境依据：** 整理解释

**语境原文：** 用法片段

> accomplish a task

**语境原文来源：** Week5.pdf · PDF页39 / 幻灯片39

**语境来源：** Week5.pdf · PDF页39,40 / 幻灯片39,40；Week5.pdf · PDF页39 / 幻灯片39

**全部来源：** Week5.pdf · PDF页39,40 / 幻灯片39,40；Week5.pdf · PDF页39 / 幻灯片39

### dependent upon

**稳定ID：** csit985-w5-r-7e4c7ec295d28b

**类别：** 阅读词汇

**中文解释：** 取决于；此处关键流取决于应用行为。

**简单英文（整理解释）：** Determined by.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> dependent upon

**原文来源：** Week5.pdf · PDF页40 / 幻灯片40

**语境：** Week5 · dependent upon

**语境英文：** Determined by.

**语境中文：** 取决于；此处关键流取决于应用行为。

**语境依据：** 整理解释

**使用结构：** dependent upon + factor

**语境原文：** 用法片段

> dependent upon

**语境原文来源：** Week5.pdf · PDF页40 / 幻灯片40

**语境来源：** Week5.pdf · PDF页39,40 / 幻灯片39,40；Week5.pdf · PDF页40 / 幻灯片40

**使用结构：** dependent upon + factor

**全部来源：** Week5.pdf · PDF页39,40 / 幻灯片39,40；Week5.pdf · PDF页40 / 幻灯片40

### inherently

**稳定ID：** csit985-w5-r-b37eda7f3cba36

**类别：** 阅读词汇

**中文解释：** 本身具有这种特征；此处形容应用的client-server性质。

**简单英文（整理解释）：** As part of its nature.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Inherently

**原文来源：** Week5.pdf · PDF页40 / 幻灯片40

**语境：** Week5 · inherently

**语境英文：** As part of its nature.

**语境中文：** 本身具有这种特征；此处形容应用的client-server性质。

**语境依据：** 整理解释

**语境原文：** 用法片段

> Inherently

**语境原文来源：** Week5.pdf · PDF页40 / 幻灯片40

**语境来源：** Week5.pdf · PDF页40 / 幻灯片40；Week5.pdf · PDF页40 / 幻灯片40

**全部来源：** Week5.pdf · PDF页40 / 幻灯片40；Week5.pdf · PDF页40 / 幻灯片40

### inverse characteristics

**稳定ID：** csit985-w5-r-9077df1fe8c6dd

**类别：** 阅读词汇

**中文解释：** 反向特征；本页说distributed computing可有这种特征。

**简单英文（整理解释）：** Features in the opposite direction.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> inverse characteristics

**原文来源：** Week5.pdf · PDF页42 / 幻灯片42

**语境：** Week5 · inverse characteristics

**语境英文：** Features in the opposite direction.

**语境中文：** 反向特征；本页说distributed computing可有这种特征。

**语境依据：** 整理解释

**语境原文：** 用法片段

> inverse characteristics

**语境原文来源：** Week5.pdf · PDF页42 / 幻灯片42

**语境来源：** Week5.pdf · PDF页42,43 / 幻灯片42,43；Week5.pdf · PDF页42 / 幻灯片42

**全部来源：** Week5.pdf · PDF页42,43 / 幻灯片42,43；Week5.pdf · PDF页42 / 幻灯片42

### hybrid

**稳定ID：** csit985-w5-r-c28bc90241705b

**类别：** 阅读词汇

**中文解释：** 不同类型的混合；此处可以混合两种flow model特征。

**简单英文（整理解释）：** A mix of types.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> hybrid

**原文来源：** Week5.pdf · PDF页42 / 幻灯片42

**语境：** Week5 · hybrid

**语境英文：** A mix of types.

**语境中文：** 不同类型的混合；此处可以混合两种flow model特征。

**语境依据：** 整理解释

**使用结构：** a hybrid of + A and B

**语境原文：** 用法片段

> hybrid

**语境原文来源：** Week5.pdf · PDF页42 / 幻灯片42

**语境来源：** Week5.pdf · PDF页42,43 / 幻灯片42,43；Week5.pdf · PDF页42 / 幻灯片42

**使用结构：** a hybrid of + A and B

**全部来源：** Week5.pdf · PDF页42,43 / 幻灯片42,43；Week5.pdf · PDF页42 / 幻灯片42

### distinctions

**稳定ID：** csit985-w5-r-5c4f15664ddd1d

**类别：** 阅读词汇

**中文解释：** 用来区别的差异；此处用于区分分布式模型。

**简单英文（整理解释）：** Differences used to tell things apart.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Distinctions

**原文来源：** Week5.pdf · PDF页43 / 幻灯片43

**语境：** Week5 · distinctions

**语境英文：** Differences used to tell things apart.

**语境中文：** 用来区别的差异；此处用于区分分布式模型。

**语境依据：** 整理解释

**语境原文：** 用法片段

> Distinctions

**语境原文来源：** Week5.pdf · PDF页43 / 幻灯片43

**语境来源：** Week5.pdf · PDF页42,43 / 幻灯片42,43；Week5.pdf · PDF页43 / 幻灯片43

**全部来源：** Week5.pdf · PDF页42,43 / 幻灯片42,43；Week5.pdf · PDF页43 / 幻灯片43

### subdivided between

**稳定ID：** csit985-w5-r-bc79200dcdda9e

**类别：** 阅读词汇

**中文解释：** 细分给多个设备；与整个任务交给一个设备不同。

**简单英文（整理解释）：** Split among several devices.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> subdivided between

**原文来源：** Week5.pdf · PDF页43 / 幻灯片43

**语境：** Week5 · subdivided between

**语境英文：** Split among several devices.

**语境中文：** 细分给多个设备；与整个任务交给一个设备不同。

**语境依据：** 整理解释

**使用结构：** subdivide + task + between + devices

**语境原文：** 用法片段

> subdivided between

**语境原文来源：** Week5.pdf · PDF页43 / 幻灯片43

**语境来源：** Week5.pdf · PDF页43,44 / 幻灯片43,44；Week5.pdf · PDF页43 / 幻灯片43

**使用结构：** subdivide + task + between + devices

**全部来源：** Week5.pdf · PDF页43,44 / 幻灯片43,44；Week5.pdf · PDF页43 / 幻灯片43

### inflexible

**稳定ID：** csit985-w5-r-306cbc657b00ef

**类别：** 阅读词汇

**中文解释：** 难以改变或放宽；形容性能需求。

**简单英文（整理解释）：** Difficult to change or relax.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> inflexible

**原文来源：** Week5.pdf · PDF页44 / 幻灯片44

**语境：** Week5 · inflexible

**语境英文：** Difficult to change or relax.

**语境中文：** 难以改变或放宽；形容性能需求。

**语境依据：** 整理解释

**语境原文：** 用法片段

> inflexible

**语境原文来源：** Week5.pdf · PDF页44 / 幻灯片44

**语境来源：** Week5.pdf · PDF页43,44 / 幻灯片43,44；Week5.pdf · PDF页44 / 幻灯片44

**全部来源：** Week5.pdf · PDF页43,44 / 幻灯片43,44；Week5.pdf · PDF页44 / 幻灯片44

### mechanism

**稳定ID：** csit985-w5-r-75dbe37ffe2789

**类别：** 阅读词汇

**中文解释：** 机制／方法；此处指合并flow要求的方法。

**简单英文（整理解释）：** A method for doing something.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> mechanism

**原文来源：** Week5.pdf · PDF页53 / 幻灯片53

**语境：** Week5 · mechanism

**语境英文：** A method for doing something.

**语境中文：** 机制／方法；此处指合并flow要求的方法。

**语境依据：** 整理解释

**语境原文：** 用法片段

> mechanism

**语境原文来源：** Week5.pdf · PDF页53 / 幻灯片53

**语境来源：** Week5.pdf · PDF页53,55 / 幻灯片53,55；Week5.pdf · PDF页53 / 幻灯片53

**全部来源：** Week5.pdf · PDF页53,55 / 幻灯片53,55；Week5.pdf · PDF页53 / 幻灯片53

### optimal

**稳定ID：** csit985-w5-r-37abd30b6e59a6

**类别：** 阅读词汇

**中文解释：** 作为目标的最优；资料没有给通用最优证明。

**简单英文（整理解释）：** The best result aimed for.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> optimal

**原文来源：** Week5.pdf · PDF页53 / 幻灯片53

**语境：** Week5 · optimal

**语境英文：** The best result aimed for.

**语境中文：** 作为目标的最优；资料没有给通用最优证明。

**语境依据：** 整理解释

**语境原文：** 用法片段

> optimal

**语境原文来源：** Week5.pdf · PDF页53 / 幻灯片53

**语境来源：** Week5.pdf · PDF页53,55 / 幻灯片53,55；Week5.pdf · PDF页53 / 幻灯片53

**全部来源：** Week5.pdf · PDF页53,55 / 幻灯片53,55；Week5.pdf · PDF页53 / 幻灯片53

### maximize

**稳定ID：** csit985-w5-r-fac0966dd60fd0

**类别：** 阅读词汇

**中文解释：** 使要求达到最强相关性能目标；不等于所有数字都取最大值。

**简单英文（整理解释）：** Make performance as strong as required.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> maximize

**原文来源：** Week5.pdf · PDF页53 / 幻灯片53

**语境：** Week5 · maximize

**语境英文：** Make performance as strong as required.

**语境中文：** 使要求达到最强相关性能目标；不等于所有数字都取最大值。

**语境依据：** 整理解释

**使用结构：** maximize + performance

**语境原文：** 用法片段

> maximize

**语境原文来源：** Week5.pdf · PDF页53 / 幻灯片53

**语境来源：** Week5.pdf · PDF页53,55 / 幻灯片53,55；Week5.pdf · PDF页53 / 幻灯片53

**使用结构：** maximize + performance

**全部来源：** Week5.pdf · PDF页53,55 / 幻灯片53,55；Week5.pdf · PDF页53 / 幻灯片53

### blind spots

**稳定ID：** csit985-w5-r-c3275b59900472

**类别：** 阅读词汇

**中文解释：** 分析盲点；筛选可能使需求被忽略。

**简单英文（整理解释）：** Needs missed by analysis.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语

> blind spots

**原文来源：** Week5_transcript.txt · TXT原始L2，本行字符13071起；搜索“blind spots”

**语境：** Week5 · blind spots

**语境英文：** Needs missed by analysis.

**语境中文：** 分析盲点；筛选可能使需求被忽略。

**语境依据：** 教师补充

**语境原文：** 教师用语

> blind spots

**语境原文来源：** Week5_transcript.txt · TXT原始L2，本行字符13071起；搜索“blind spots”

**语境来源：** Week5_transcript.txt · TXT原始L2，本行字符13071起；搜索“blind spots”；Week5_transcript.txt · TXT原始L2，本行字符32223起；搜索“not a permanent property”

**全部来源：** Week5_transcript.txt · TXT原始L2，本行字符13071起；搜索“blind spots”；Week5_transcript.txt · TXT原始L2，本行字符32223起；搜索“not a permanent property”

### not a permanent property

**稳定ID：** csit985-w5-r-ed527daa438d20

**类别：** 阅读词汇

**中文解释：** 不是固定不变的属性；优先级取决于项目目标。

**简单英文（整理解释）：** A property that can change.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语

> not a permanent property

**原文来源：** Week5_transcript.txt · TXT原始L2，本行字符32223起；搜索“not a permanent property”

**语境：** Week5 · not a permanent property

**语境英文：** A property that can change.

**语境中文：** 不是固定不变的属性；优先级取决于项目目标。

**语境依据：** 教师补充

**语境原文：** 教师用语

> not a permanent property

**语境原文来源：** Week5_transcript.txt · TXT原始L2，本行字符32223起；搜索“not a permanent property”

**语境来源：** Week5_transcript.txt · TXT原始L2，本行字符13071起；搜索“blind spots”；Week5_transcript.txt · TXT原始L2，本行字符32223起；搜索“not a permanent property”

**全部来源：** Week5_transcript.txt · TXT原始L2，本行字符13071起；搜索“blind spots”；Week5_transcript.txt · TXT原始L2，本行字符32223起；搜索“not a permanent property”

### transparent

**稳定ID：** csit985-w5-r-832d887f83cad1

**类别：** 阅读词汇

**中文解释：** 透明易理解；此处排序方法的依据清楚。

**简单英文（整理解释）：** Easy to see and understand.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语

> transparent

**原文来源：** Week5_transcript.txt · TXT原始L2，本行字符31237起；搜索“transparent”

**语境：** Week5 · transparent

**语境英文：** Easy to see and understand.

**语境中文：** 透明易理解；此处排序方法的依据清楚。

**语境依据：** 教师补充

**语境原文：** 教师用语

> transparent

**语境原文来源：** Week5_transcript.txt · TXT原始L2，本行字符31237起；搜索“transparent”

**语境来源：** Week5_transcript.txt · TXT原始L2，本行字符29728起；搜索“criterion”；Week5_transcript.txt · TXT原始L2，本行字符31237起；搜索“transparent”；Week5_transcript.txt · TXT原始L2，本行字符30571起；搜索“incomplete information”；Week5_transcript.txt · TXT原始L2，本行字符30689起；搜索“make up a number”

**全部来源：** Week5_transcript.txt · TXT原始L2，本行字符29728起；搜索“criterion”；Week5_transcript.txt · TXT原始L2，本行字符31237起；搜索“transparent”；Week5_transcript.txt · TXT原始L2，本行字符30571起；搜索“incomplete information”；Week5_transcript.txt · TXT原始L2，本行字符30689起；搜索“make up a number”

### incomplete information

**稳定ID：** csit985-w5-r-86a79f1fd47d9c

**类别：** 阅读词汇

**中文解释：** 信息不完整；缺失值应明确保留。

**简单英文（整理解释）：** Information with missing facts.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语

> incomplete information

**原文来源：** Week5_transcript.txt · TXT原始L2，本行字符30571起；搜索“incomplete information”

**语境：** Week5 · incomplete information

**语境英文：** Information with missing facts.

**语境中文：** 信息不完整；缺失值应明确保留。

**语境依据：** 教师补充

**语境原文：** 教师用语

> incomplete information

**语境原文来源：** Week5_transcript.txt · TXT原始L2，本行字符30571起；搜索“incomplete information”

**语境来源：** Week5_transcript.txt · TXT原始L2，本行字符29728起；搜索“criterion”；Week5_transcript.txt · TXT原始L2，本行字符31237起；搜索“transparent”；Week5_transcript.txt · TXT原始L2，本行字符30571起；搜索“incomplete information”；Week5_transcript.txt · TXT原始L2，本行字符30689起；搜索“make up a number”

**全部来源：** Week5_transcript.txt · TXT原始L2，本行字符29728起；搜索“criterion”；Week5_transcript.txt · TXT原始L2，本行字符31237起；搜索“transparent”；Week5_transcript.txt · TXT原始L2，本行字符30571起；搜索“incomplete information”；Week5_transcript.txt · TXT原始L2，本行字符30689起；搜索“make up a number”

### make up a number

**稳定ID：** csit985-w5-r-e2c53e25bfd5e0

**类别：** 阅读词汇

**中文解释：** 编造数值；不是计算得出。

**简单英文（整理解释）：** Invent a value.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语

> make up a number

**原文来源：** Week5_transcript.txt · TXT原始L2，本行字符30689起；搜索“make up a number”

**语境：** Week5 · make up a number

**语境英文：** Invent a value.

**语境中文：** 编造数值；不是计算得出。

**语境依据：** 教师补充

**使用结构：** make up + a number

**语境原文：** 教师用语

> make up a number

**语境原文来源：** Week5_transcript.txt · TXT原始L2，本行字符30689起；搜索“make up a number”

**语境来源：** Week5_transcript.txt · TXT原始L2，本行字符29728起；搜索“criterion”；Week5_transcript.txt · TXT原始L2，本行字符31237起；搜索“transparent”；Week5_transcript.txt · TXT原始L2，本行字符30571起；搜索“incomplete information”；Week5_transcript.txt · TXT原始L2，本行字符30689起；搜索“make up a number”

**使用结构：** make up + a number

**全部来源：** Week5_transcript.txt · TXT原始L2，本行字符29728起；搜索“criterion”；Week5_transcript.txt · TXT原始L2，本行字符31237起；搜索“transparent”；Week5_transcript.txt · TXT原始L2，本行字符30571起；搜索“incomplete information”；Week5_transcript.txt · TXT原始L2，本行字符30689起；搜索“make up a number”

### enrolled in

**稳定ID：** csit985-w5-r-38c8541451fc7b

**类别：** 阅读词汇

**中文解释：** 注册在某个课程／workshop；仅释录音通知。

**简单英文（整理解释）：** Registered for a class.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语

> enrolled in

**原文来源：** Week5_transcript.txt · TXT原始L2，本行字符26412起；搜索“enrolled in”

**语境：** Week5 · enrolled in

**语境英文：** Registered for a class.

**语境中文：** 注册在某个课程／workshop；仅释录音通知。

**语境依据：** 教师补充

**使用结构：** be enrolled in + class

**语境原文：** 教师用语

> enrolled in

**语境原文来源：** Week5_transcript.txt · TXT原始L2，本行字符26412起；搜索“enrolled in”

**语境来源：** Week5_transcript.txt · TXT原始L2，本行字符1883起；搜索“attend in person”；Week5_transcript.txt · TXT原始L2，本行字符26412起；搜索“enrolled in”；Week5_transcript.txt · TXT原始L2，本行字符1547起；搜索“preview quiz”；Week5_transcript.txt · TXT原始L2，本行字符27657起；搜索“multiple choice questions”

**使用结构：** be enrolled in + class

**全部来源：** Week5_transcript.txt · TXT原始L2，本行字符1883起；搜索“attend in person”；Week5_transcript.txt · TXT原始L2，本行字符26412起；搜索“enrolled in”；Week5_transcript.txt · TXT原始L2，本行字符1547起；搜索“preview quiz”；Week5_transcript.txt · TXT原始L2，本行字符27657起；搜索“multiple choice questions”

### multiple-choice questions

**稳定ID：** csit985-w5-r-7c4e4173779957

**类别：** 阅读词汇

**中文解释：** 选择题；录音写multiple choice，无连字符。

**简单英文（整理解释）：** Questions with answer options.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语

> multiple choice questions

**原文来源：** Week5_transcript.txt · TXT原始L2，本行字符27657起；搜索“multiple choice questions”

**语境：** Week5 · multiple-choice questions

**语境英文：** Questions with answer options.

**语境中文：** 选择题；录音写multiple choice，无连字符。

**语境依据：** 教师补充

**语境原文：** 教师用语

> multiple choice questions

**语境原文来源：** Week5_transcript.txt · TXT原始L2，本行字符27657起；搜索“multiple choice questions”

**语境来源：** Week5_transcript.txt · TXT原始L2，本行字符1883起；搜索“attend in person”；Week5_transcript.txt · TXT原始L2，本行字符26412起；搜索“enrolled in”；Week5_transcript.txt · TXT原始L2，本行字符1547起；搜索“preview quiz”；Week5_transcript.txt · TXT原始L2，本行字符27657起；搜索“multiple choice questions”

**全部来源：** Week5_transcript.txt · TXT原始L2，本行字符1883起；搜索“attend in person”；Week5_transcript.txt · TXT原始L2，本行字符26412起；搜索“enrolled in”；Week5_transcript.txt · TXT原始L2，本行字符1547起；搜索“preview quiz”；Week5_transcript.txt · TXT原始L2，本行字符27657起；搜索“multiple choice questions”

### generate / terminate traffic flows

**稳定ID：** csit985-w5-de123b6db07ea8

**类别：** 阅读词汇

**中文解释：** 产生流量／成为流量接收终点；保留课件的并列写法。

**简单英文（整理解释）：** Start sending traffic; receive it at its endpoint.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> generate/terminate traffic flows

**原文来源：** Week5.pdf · PDF页16 / 幻灯片16

**语境：** Week5 · generate / terminate traffic flows

**语境英文：** Start sending traffic; receive it at its endpoint.

**语境中文：** 产生流量／成为流量接收终点；保留课件的并列写法。

**语境依据：** 整理解释

**语境原文：** 用法片段

> generate/terminate traffic flows

**语境原文来源：** Week5.pdf · PDF页16 / 幻灯片16

**语境来源：** Week5.pdf · PDF页16,24 / 幻灯片16,24；Week5.pdf · PDF页16 / 幻灯片16

**全部来源：** Week5.pdf · PDF页16,24 / 幻灯片16,24；Week5.pdf · PDF页16 / 幻灯片16

## 旧收藏保留项（不进入网页默认列表）

### Importance/Priority Levels / Business/Enterprise/Provider / Political

**稳定ID：** csit985-w5-74b15959ead6ad

**类别：** 阅读词汇

**中文解释：** 图4.2重要性／优先级标签：业务、企业、提供方、政治因素；没有给固定排名公式。

**简单英文（整理解释）：** Importance labels in the table, based on business, enterprise, provider, or political concerns.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**全部来源：** Week5.pdf · PDF页9 / 幻灯片9（图表）

### Common sets of users, applications, devices / Scheduling (e.g., Time-of-Day)

**稳定ID：** csit985-w5-facf266ac5ac75

**类别：** 阅读词汇

**中文解释：** 图4.2其他属性：共同用户／应用／设备集合、调度（如一天中的时段）。

**简单英文（整理解释）：** Shared users, applications, or devices / when traffic is scheduled, such as its time of day.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**全部来源：** Week5.pdf · PDF页9 / 幻灯片9（图表）

### Application perspective / application group / function

**稳定ID：** csit985-w5-c44b596ae98fe5

**类别：** 阅读词汇

**中文解释：** 应用视角／应用组／功能；可选作流分析的关注对象。

**简单英文（整理解释）：** An application view / a set of applications / a task such as video conferencing or storage.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**全部来源：** Week5.pdf · PDF页17 / 幻灯片17

### Eliminated applications

**稳定ID：** csit985-w5-daabd6df05aa5d

**类别：** 阅读词汇

**中文解释：** 被筛除的应用；仍须检查设计是否满足它们的需求，不能自动忽略。

**简单英文（整理解释）：** Applications left out of the selected set. Check whether their requirements will still be met.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**全部来源：** Week5.pdf · PDF页22 / 幻灯片22

### Degree of usage / number of users, devices, servers

**稳定ID：** csit985-w5-d2b6fb5dac2648

**类别：** 阅读词汇

**中文解释：** 使用程度／用户、设备、服务器数量；Top N选择依据。

**简单英文（整理解释）：** Selection measures describing how much an application is used and how many users or systems it involves.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**全部来源：** Week5.pdf · PDF页22 / 幻灯片22

### Central Campus / North Campus / South Campus

**稳定ID：** csit985-w5-b9e7ff880ea0c0

**类别：** 阅读词汇

**中文解释：** 中央／北／南校园；示例地点名，不是通用网络类型。

**简单英文（整理解释）：** The three locations used in the campus-flow example.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**全部来源：** Week5.pdf · PDF页19,20,21,28,29 / 幻灯片19,20,21,28,29（图表）

### Number of users / budget / priority

**稳定ID：** csit985-w5-d8ed30fd367287

**类别：** 阅读词汇

**中文解释：** 用户数／预算／优先级；示例数值与选择准则相关，不代表唯一分配方法。

**简单英文（整理解释）：** Table columns for the users served, money assigned, and relative rank.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**全部来源：** Week5.pdf · PDF页47,48,49 / 幻灯片47,48,49

### specification / lists / network section

**稳定ID：** csit985-w5-394d92ae166947

**类别：** 阅读词汇

**中文解释：** 规格说明／列出／网络区段。

**简单英文（整理解释）：** A written description of requirements / records as entries / one part of the network.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**全部来源：** Week5.pdf · PDF页51 / 幻灯片51

### may contain / all flows are / keep them individual

**稳定ID：** csit985-w5-ccfdcfc6841e86

**类别：** 阅读词汇

**中文解释：** 可包含而非必须包含／所有流都是／各自保留；三类flowspec的条件必须保留。

**简单英文（整理解释）：** Can include, but need not / every included flow is / retain each separately.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**全部来源：** Week5.pdf · PDF页52,56 / 幻灯片52,56

### Composite-flow example labels

**稳定ID：** csit985-w5-113588c0920cee

**类别：** 阅读词汇

**中文解释：** 图11复合流示例：应用1上行100 Kb/s；应用2双向200 Kb/s、往返时延100ms；应用3为100%uptime。图未说明双向200是每向值还是合计，不自行补定。

**简单英文（整理解释）：** The figure lists Application 1: 100 Kb/s upstream; Application 2: 200 Kb/s bidirectional and 100 ms RT delay; Application 3: 100% uptime.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**全部来源：** Week5.pdf · PDF页11 / 幻灯片11（图表）

### Flow-example labels

**稳定ID：** csit985-w5-b48e26348529b9

**类别：** 阅读词汇

**中文解释：** 图12示例：100ms单向；100 Kb/s上行＋500 Kb/s下行；组合图中应用1上行500 Kb/s、应用2双向1 Mb/s、应用3往返100ms。不要跨示例合并条件。

**简单英文（整理解释）：** The figure shows 100 ms one-way delay; 100 Kb/s upstream with 500 Kb/s downstream; and a group with 500 Kb/s upstream, 1 Mb/s bidirectional, and 100 ms round-trip delay.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**全部来源：** Week5.pdf · PDF页12 / 幻灯片12（图表）

## 历史词组兼容说明

### Flow analysis

**旧ID：** csit985-w5-6ebda3b34b03da

**中文：** 流分析；描述流量、可能位置和所需性能，只重点研究影响最大的流，不画所有可能流。

**简单英文：** Characterising traffic flows, their likely locations, and their performance needs. Focus on those with the greatest impact, not every possible flow.

**来源：** Week5.pdf · PDF页5 / 幻灯片5

### Flow / traffic flow / data flow

**旧ID：** csit985-w5-634ea65cf9ad88

**中文：** 流／流量／数据流；具有共同属性的一组网络流量，可含应用、协议或控制信息。

**简单英文：** A set of network traffic with common attributes. It may carry application, protocol, or control information.

**来源：** Week5.pdf · PDF页6,7 / 幻灯片6,7

### Requirements map

**旧ID：** csit985-w5-e829d724a980ee

**中文：** 需求地图；已有需求确定后，用来判断流量可能在哪些位置通过。

**简单英文：** A map used as the basis for locating flows after requirements have been identified.

**来源：** Week5.pdf · PDF页5,16 / 幻灯片5,16

### End-to-end entity

**旧ID：** csit985-w5-f2c26549f04eee

**中文：** 端到端实体；把性能需求与位置结合，看整个源到目的过程。

**简单英文：** A flow considered across its source and destination, with requirements and location information together.

**来源：** Week5.pdf · PDF页8 / 幻灯片8

### Application information / protocol information / control information

**旧ID：** csit985-w5-b4a1fa190eed8d

**中文：** 应用信息／协议信息／控制信息；课件仅列类别，不定义报文结构。

**简单英文：** Three kinds of traffic named in the slide. Detailed protocol and control formats are not defined.

**来源：** Week5.pdf · PDF页6 / 幻灯片6

### Common attributes

**旧ID：** csit985-w5-23a0c7af7c2948

**中文：** 共同属性；例如源／目的地址、信息类型及方向。

**简单英文：** Shared features used to group traffic into a flow, such as addresses, information type, and directionality.

**来源：** Week5.pdf · PDF页6,7 / 幻灯片6,7

### Source/destination addresses / port numbers / information type

**旧ID：** csit985-w5-363aff6e067351

**中文：** 图4.1中的端点地址、端口编号、信息类型；课件未定义地址或端口的技术机制。

**简单英文：** Endpoint addresses, port labels, and the kind of information; shown as flow attributes in Figure 4.1.

**来源：** Week5.pdf · PDF页6,7 / 幻灯片6,7（图表）

### Routing through network / QoS parameters

**旧ID：** csit985-w5-1e4dec7c341a7c

**中文：** 图4.1标签：网络内路由／QoS参数；未展开QoS缩写或给正式定义。

**简单英文：** Labels for the route through the network and QoS settings. QoS is not expanded or formally defined here.

**来源：** Week5.pdf · PDF页6 / 幻灯片6（图表）

### Capacity (e.g., Bandwidth) / Delay (e.g., Latency) / Reliability (e.g., Availability)

**旧ID：** csit985-w5-1eb420099a14dc

**中文：** 图4.2性能标签：容量（如带宽）、时延（如latency）、可靠性（如可用性）；括号例子不应当作严格同义定义。

**简单英文：** Performance labels in Figure 4.2. The parentheses give examples; the figure does not prove that each pair is identical.

**来源：** Week5.pdf · PDF页9 / 幻灯片9（图表）

### Quality of Service Levels

**旧ID：** csit985-w5-43cb03aceff58d

**中文：** 服务质量等级；表中列名，未定义具体等级或保证。

**简单英文：** A performance category in the flow-characteristics table; no service classes or guarantees are defined here.

**来源：** Week5.pdf · PDF页9 / 幻灯片9（图表）

### Importance/Priority Levels / Business/Enterprise/Provider / Political

**旧ID：** csit985-w5-74b15959ead6ad

**中文：** 图4.2重要性／优先级标签：业务、企业、提供方、政治因素；没有给固定排名公式。

**简单英文：** Importance labels in the table, based on business, enterprise, provider, or political concerns.

**来源：** Week5.pdf · PDF页9 / 幻灯片9（图表）

### Common sets of users, applications, devices / Scheduling (e.g., Time-of-Day)

**旧ID：** csit985-w5-facf266ac5ac75

**中文：** 图4.2其他属性：共同用户／应用／设备集合、调度（如一天中的时段）。

**简单英文：** Shared users, applications, or devices / when traffic is scheduled, such as its time of day.

**来源：** Week5.pdf · PDF页9 / 幻灯片9（图表）

### Protocols Used / Addresses/Ports / Security/Privacy Requirements

**旧ID：** csit985-w5-c29f68533f16dd

**中文：** 图4.2标签：所用协议、地址／端口、安全／隐私要求；未解释技术机制。

**简单英文：** Table labels for protocols, endpoint details, and security or privacy needs. Their technical mechanisms are not defined.

**来源：** Week5.pdf · PDF页9 / 幻灯片9（图表）

### Individual flow

**旧ID：** csit985-w5-caf015579c46db

**中文：** 个体流；某应用单次会话的基本流单位，可合并分析，但保证需求必须仍归该个体流。

**简单英文：** A flow for one session of one application. It is a basic unit and may be combined; a guaranteed requirement must stay with that flow.

**来源：** Week5.pdf · PDF页10 / 幻灯片10

### Guaranteed capacity / 15 Mb/s Peak (Guaranteed)

**旧ID：** csit985-w5-b1240af285077b

**中文：** 保证容量；图4.4示例要求15 Mb/s峰值保证，不能隐藏在平均值中。

**简单英文：** The example individual flow has a guaranteed peak capacity of 15 Mb/s. Keep its guarantee explicit.

**来源：** Week5.pdf · PDF页10 / 幻灯片10（图表）；Week5_transcript.txt · TXT原始L2，本行字符6677起；搜索“15 megabits per second”

### Composite flow

**旧ID：** csit985-w5-80cf91cf5e6d2a

**中文：** 复合流；多应用／个体流因共享链路、路径或网络而组合需求。

**简单英文：** Combined requirements of several applications or individual flows that share a link, path, or network.

**来源：** Week5.pdf · PDF页11 / 幻灯片11

### Common link / common path / common network

**旧ID：** csit985-w5-c98186c7c38c23

**中文：** 公共链路／路径／网络；构成复合流的共同部分。

**简单英文：** The shared part that allows several flows to be treated together.

**来源：** Week5.pdf · PDF页11 / 幻灯片11

### Critical flow

**旧ID：** csit985-w5-f5f1af0847ae10

**中文：** 关键流；因性能、严格要求或重要使用者等而优先；教师强调不必是容量最大的流。

**简单英文：** A flow treated as more important because of performance, strict requirements, or important users, applications, or devices.

**来源：** Week5.pdf · PDF页13 / 幻灯片13；Week5_transcript.txt · TXT原始L2，本行字符8145起；搜索“Critical does not always mean high capacity”

### Upstream / downstream / bidirectional

**旧ID：** csit985-w5-0e242816fcd545

**中文：** 上行／下行／双向；要说明相对哪个端点。示例不同方向可有不同速率。

**简单英文：** Direction labels for traffic toward one side, traffic toward the other side, and traffic in both directions. Define the viewpoint.

**来源：** Week5.pdf · PDF页11,12 / 幻灯片11,12（图表）

### One-way delay / round-trip delay / RT

**旧ID：** csit985-w5-e3cb5379b2ed0f

**中文：** 单向时延／往返时延；图11、12示例100ms，不能互换为同一指标。

**简单英文：** Delay in one direction / delay for an outward and return trip. RT is used as a round-trip label in the diagram.

**来源：** Week5.pdf · PDF页11,12 / 幻灯片11,12（图表）

### 100% uptime

**旧ID：** csit985-w5-28764874d9e31b

**中文：** 复合流示例的100%可用时间要求；图未给周期或维护规则，不能假定无条件保证。

**简单英文：** An availability requirement in the composite-flow example; the figure gives no measurement period or maintenance rule.

**来源：** Week5.pdf · PDF页11 / 幻灯片11（图表）

### Performance Profile 1

**旧ID：** csit985-w5-eee584de26d013

**中文：** 性能配置描述1；图12示例用profile名称引用性能要求，具体值该图未给。

**简单英文：** A reusable performance description referred to by name instead of writing every value beside a flow.

**来源：** Week5.pdf · PDF页12,17,21 / 幻灯片12,17,21（图表）

### Identifying and developing flows

**旧ID：** csit985-w5-cceaed5f67a645

**中文：** 识别与建立流；依据需求规格、行为、位置及性能需要。

**简单英文：** Use the requirements specification, behaviour, locations, and performance needs to find and describe important flows.

**来源：** Week5.pdf · PDF页15,16 / 幻灯片15,16

### Requirements specification

**旧ID：** csit985-w5-bd77c5696d91bf

**中文：** 需求规格说明；本讲把它当流识别的输入，不替代原需求记录。

**简单英文：** The input record of user, application, device, network, behaviour, location, and performance requirements.

**来源：** Week5.pdf · PDF页15,16 / 幻灯片15,16

### Generate / terminate traffic flows

**旧ID：** csit985-w5-de123b6db07ea8

**中文：** 产生／终止流量；用于确认相关应用或设备。

**简单英文：** Start sending traffic / be the endpoint where that traffic is received.

**来源：** Week5.pdf · PDF页16,24 / 幻灯片16,24

### Application perspective / application group / function

**旧ID：** csit985-w5-c44b596ae98fe5

**中文：** 应用视角／应用组／功能；可选作流分析的关注对象。

**简单英文：** An application view / a set of applications / a task such as video conferencing or storage.

**来源：** Week5.pdf · PDF页17 / 幻灯片17

### Performance profile / developing a profile

**旧ID：** csit985-w5-4188cbcff693c3

**中文：** 性能profile／建立profile；共用需求描述，便于复用，必须保留明确值。

**简单英文：** A shared description for flows with common performance needs. Keep its definition clear when reusing it.

**来源：** Week5.pdf · PDF页17,21 / 幻灯片17,21；Week5_transcript.txt · TXT原始L2，本行字符12292起；搜索“profile definition very clear”

### P1 (Profile 1)

**旧ID：** csit985-w5-95c8ac4f8efae9

**中文：** 示例P1：六条流共用100 Kb/s容量、100%可靠性需求；不代表所有流都取此值，也不证明实际能达成。

**简单英文：** In the example, a profile for six flows with capacity 100 Kb/s and reliability 100%. This is an example requirement, not a universal profile.

**来源：** Week5.pdf · PDF页21 / 幻灯片21（图表）

### Top N applications

**旧ID：** csit985-w5-486a10289bc9bb

**中文：** 前N个应用；N可为3、5、10等示例，并非固定。按使用程度、用户／设备／服务器数或性能需求选择。

**简单英文：** Select N important applications, for example 3, 5, or 10. Criteria include usage, user/device/server counts, or performance needs.

**来源：** Week5.pdf · PDF页17,22 / 幻灯片17,22

### Eliminated applications

**旧ID：** csit985-w5-daabd6df05aa5d

**中文：** 被筛除的应用；仍须检查设计是否满足它们的需求，不能自动忽略。

**简单英文：** Applications left out of the selected set. Check whether their requirements will still be met.

**来源：** Week5.pdf · PDF页22 / 幻灯片22

### Flow identification process

**旧ID：** csit985-w5-56d8707ab2c34a

**中文：** 流识别过程：识别流／需求／位置→定位源和汇→按需用模型→汇成流规格。

**简单英文：** Identify flows and their requirements and locations; locate sources and sinks; apply models where needed; combine requirements into flowspecs.

**来源：** Week5.pdf · PDF页18 / 幻灯片18（图表）

### Degree of usage / number of users, devices, servers

**旧ID：** csit985-w5-d2b6fb5dac2648

**中文：** 使用程度／用户、设备、服务器数量；Top N选择依据。

**简单英文：** Selection measures describing how much an application is used and how many users or systems it involves.

**来源：** Week5.pdf · PDF页22 / 幻灯片22

### Application-driven map / flows estimated between devices

**旧ID：** csit985-w5-85737dce18ec33

**中文：** 应用驱动位置图／设备间估计流；先定位组件，再加箭头表示流量。

**简单英文：** Locate the important application's devices, then add estimated traffic between them.

**来源：** Week5.pdf · PDF页19,20 / 幻灯片19,20（图表）

### Data source

**旧ID：** csit985-w5-24bfcca58c71d0

**中文：** 数据源；产生流量的设备或端点。

**简单英文：** A device or endpoint that generates a flow.

**来源：** Week5.pdf · PDF页24 / 幻灯片24

### Data sink

**旧ID：** csit985-w5-e2c273691c7b91

**中文：** 数据汇／接收端；不是日常sink“水槽”。

**简单英文：** A device or endpoint that terminates a flow by receiving its data.

**来源：** Week5.pdf · PDF页24 / 幻灯片24

### Source and sink roles

**旧ID：** csit985-w5-6ccf73933caaeb

**中文：** 源和汇角色；几乎所有设备可同时具备两种角色，取决于具体流。

**简单英文：** Almost all devices can be both sources and sinks. The role depends on the flow direction.

**来源：** Week5.pdf · PDF页25 / 幻灯片25；Week5_transcript.txt · TXT原始L2，本行字符13808起；搜索“source of the request flow”

### Source symbol / sink symbol

**旧ID：** csit985-w5-4dc66366803afa

**中文：** 源／汇符号；图24、28用圆点及星形标记区分方向，可在同一设备显示两者。

**简单英文：** The diagrams use a dot-in-circle for a source and a star-like mark in a circle for a sink.

**来源：** Week5.pdf · PDF页24,28 / 幻灯片24,28（图表）

### Application server / application data

**旧ID：** csit985-w5-1db96d31ef47b9

**中文：** 应用服务器／应用数据；数据源图中的对应标签。

**简单英文：** A server that provides application data / the data it sends. The source example labels these together.

**来源：** Week5.pdf · PDF页25,26 / 幻灯片25,26（图表）

### Mainframe / parallel systems / clusters

**旧ID：** csit985-w5-706ec478300dc7

**中文：** 大型主机／并行系统／集群；列为数据源例子，未定义内部架构。

**简单英文：** Named examples of data sources that compute, process, or produce much data. The lecture does not define their architectures.

**来源：** Week5.pdf · PDF页25,26,43 / 幻灯片25,26,43（图表）

### Specialized devices / medical instruments

**旧ID：** csit985-w5-0ffd1d60a4e788

**中文：** 专用设备／医疗仪器；列为数据源例子。

**简单英文：** Devices for particular tasks, including cameras, video-production equipment, and medical instruments.

**来源：** Week5.pdf · PDF页25,26 / 幻灯片25,26（图表）

### Video device / telemetry/control data

**旧ID：** csit985-w5-b4bac55f890f5f

**中文：** 视频设备／遥测及控制数据；图26标签，未正式定义遥测。

**简单英文：** A video source / instrument data named in the source figure. Telemetry is not formally defined in this lecture.

**来源：** Week5.pdf · PDF页26 / 幻灯片26（图表）

### Data storage / archival devices

**旧ID：** csit985-w5-8038326c0a46bd

**中文：** 数据存储／归档设备；典型数据汇。归档是为以后保留数据的基础词义。

**简单英文：** Devices that store data or keep it for later use; typical sinks.

**来源：** Week5.pdf · PDF页27 / 幻灯片27

### Storage device / video editing / video display / user device

**旧ID：** csit985-w5-c59f9754c955ba

**中文：** 图27数据汇标签：存储设备、视频编辑、视频显示、用户设备。

**简单英文：** Sink-example labels: storing, editing, showing, or using incoming data.

**来源：** Week5.pdf · PDF页27 / 幻灯片27（图表）

### VoIP

**旧ID：** csit985-w5-f2fc8ce594016a

**中文：** 图27中的VoIP标签；资料未展开缩写或定义，不自行补充。

**简单英文：** A label in the data-sink figure. The lecture does not expand or define it.

**来源：** Week5.pdf · PDF页27 / 幻灯片27（图表）

### Data migration application

**旧ID：** csit985-w5-a90959a8b40948

**中文：** 数据迁移应用；图28、29展示不同传送阶段的源／汇，未给详细迁移流程。

**简单英文：** An application moving data between locations; the maps show different source/sink roles for parts of the transfer.

**来源：** Week5.pdf · PDF页28,29 / 幻灯片28,29

### Server-server flow / F4 / F5 / F6 / F7

**旧ID：** csit985-w5-ebf07d7ce10af5

**中文：** 服务器间流／F4–F7；仅示例编号。图29独立显示F4，旁标10 Mb/s、100%，后者具体指标口径未注明。

**简单英文：** Flows between servers / local flow labels in the maps. Figure 4.20 isolates F4 with 10 Mb/s and 100% beside it.

**来源：** Week5.pdf · PDF页20,21,28,29,40 / 幻灯片20,21,28,29,40（图表）

### Storage server / storage servers / compute servers / digital video

**旧ID：** csit985-w5-6e9c5852403e30

**中文：** 校园图中的存储服务器、计算服务器、数字视频标签；数量括号及位置属于示例。

**简单英文：** Campus-map labels for storage systems, computing systems, and video equipment.

**来源：** Week5.pdf · PDF页19,20,21,28,29 / 幻灯片19,20,21,28,29（图表）

### Central Campus / North Campus / South Campus

**旧ID：** csit985-w5-b9e7ff880ea0c0

**中文：** 中央／北／南校园；示例地点名，不是通用网络类型。

**简单英文：** The three locations used in the campus-flow example.

**来源：** Week5.pdf · PDF页19,20,21,28,29 / 幻灯片19,20,21,28,29（图表）

### Flow model

**旧ID：** csit985-w5-241b2138cf9f44

**中文：** 流模型；具备特定且一致行为特征的一组流。

**简单英文：** A group of flows with specific, consistent behaviour characteristics.

**来源：** Week5.pdf · PDF页31 / 幻灯片31

### Directionality

**旧ID：** csit985-w5-f484dc1429c53b

**中文：** 方向性；某一方向需求较多的倾向，由源／汇帮助判断。

**简单英文：** A flow's tendency to have more requirements in one direction. Source and sink roles help show it.

**来源：** Week5.pdf · PDF页7,24,31 / 幻灯片7,24,31

### Hierarchy / interconnectivity

**旧ID：** csit985-w5-1221c95fa62b1c

**中文：** 层级／互连关系；用于分析流在哪汇合、成组或在同层设备间传送。

**简单英文：** Levels and connections used to see where flows combine, form groups, or pass between peers.

**来源：** Week5.pdf · PDF页31 / 幻灯片31

### Peer flows / peers

**旧ID：** csit985-w5-51b64035743fd6

**中文：** 对等流／对等节点；同一层级设备之间的流。

**简单英文：** Flows between devices at the same hierarchy level / those devices.

**来源：** Week5.pdf · PDF页31,33 / 幻灯片31,33

### Peer-to-peer flow model (P2P)

**旧ID：** csit985-w5-2b6962b96a0578

**中文：** 对等流模型；同层行为相近，若不能区分重要性则全为关键或全非关键，不是对所有真实P2P流的绝对定律。

**简单英文：** Users and applications act at the same level and have similar flow behaviour. If flows cannot be distinguished, all or none are treated as critical.

**来源：** Week5.pdf · PDF页32,33,34 / 幻灯片32,33,34

### Equivalent flows / single specification or profile

**旧ID：** csit985-w5-ff5c6551ae3c63

**中文：** 等效流／单一规格或profile；缺乏其他信息时课件建议可用peer模型。

**简单英文：** Flows treated alike and described by one shared specification or profile. Use the peer model when no other flow information is available.

**来源：** Week5.pdf · PDF页34 / 幻灯片34

### Early Internet / file sharing systems

**旧ID：** csit985-w5-41abf6cb6e14f5

**中文：** 早期互联网／文件共享系统；本讲P2P例子，不扩展为历史论断。

**简单英文：** Examples of the peer-to-peer flow model in this lecture.

**来源：** Week5.pdf · PDF页35 / 幻灯片35

### FTP / Telnet

**旧ID：** csit985-w5-cd0fa2af2634be

**中文：** 早期互联网图中的协议名；资料未展开全称或定义，不增补机制。

**简单英文：** Protocol names shown in the early-Internet peer example; their full definitions are not supplied.

**来源：** Week5.pdf · PDF页35 / 幻灯片35（图表）

### Client-server flow model

**旧ID：** csit985-w5-318bd156ba6c09

**中文：** 客户机—服务器流模型；课件重点是服务器到客户机的非对称主流。

**简单英文：** A model with hierarchy and directionality. The slide emphasises asymmetric flows toward clients, with servers as main sources.

**来源：** Week5.pdf · PDF页32,36 / 幻灯片32,36

### Asymmetric flows

**旧ID：** csit985-w5-7ad447e25cd027

**中文：** 非对称流；两个方向的流量或需求不同，不能只数请求。

**简单英文：** Flows whose two directions have different traffic or performance needs.

**来源：** Week5.pdf · PDF页36 / 幻灯片36；Week5_transcript.txt · TXT原始L2，本行字符18977起；搜索“response may be much larger”

### Request / response

**旧ID：** csit985-w5-963599bbd646ba

**中文：** 请求／响应；请求与响应对应不同方向，客户机发请求时也是源。

**简单英文：** Traffic asking a server for something / traffic sent back by the server.

**来源：** Week5.pdf · PDF页36,37 / 幻灯片36,37（图表）；Week5_transcript.txt · TXT原始L2，本行字符13808起；搜索“source of the request flow”

### Predominant flows

**旧ID：** csit985-w5-67c7ace25a0be7

**中文：** 主导流；本讲客户机—服务器例子中来自服务器，是关键流。需结合实际应用。

**简单英文：** The main flows; in the lecture's client-server example these come from servers and are treated as critical.

**来源：** Week5.pdf · PDF页37 / 幻灯片37

### E-commerce / web applications

**旧ID：** csit985-w5-9ca248f793b939

**中文：** 电子商务／Web应用；客户机—服务器模型例子，基础词义。

**简单英文：** Online business / applications accessed through the web; examples of client-server flows.

**来源：** Week5.pdf · PDF页37 / 幻灯片37

### Video server / video storage / video editing station / request video file

**旧ID：** csit985-w5-23cc819c3fab5d

**中文：** 图37标签：视频服务器、视频存储、视频编辑站、请求视频文件；响应是Video File。

**简单英文：** Figure labels for serving video, storing it, editing it, and asking for a file.

**来源：** Week5.pdf · PDF页37 / 幻灯片37（图表）

### Hierarchical client-server flow model

**旧ID：** csit985-w5-c84fc06b7ae308

**中文：** 分层客户机—服务器流模型；增加服务器层和支撑服务器间流，服务器可为源、汇或两者。

**简单英文：** A client-server model with extra layers between servers and flows to support servers. A server can be a source, sink, or both.

**来源：** Week5.pdf · PDF页32,38 / 幻灯片32,38

### Layers / tiers / support servers

**旧ID：** csit985-w5-cb0cab47d9b54d

**中文：** 层／层级／支撑服务器；分层模型增加这些关系。

**简单英文：** Levels in the model / extra servers that support other servers.

**来源：** Week5.pdf · PDF页38 / 幻灯片38

### Higher-level application

**旧ID：** csit985-w5-b2f756cf0b8f5a

**中文：** 高层应用；可管理多个客户机—服务器应用，是分层模型适用提示之一。

**简单英文：** An application that manages multiple client-server applications; one sign that a hierarchical model may fit.

**来源：** Week5.pdf · PDF页39 / 幻灯片39

### Global server/controller / local server

**旧ID：** csit985-w5-33832baf14a7a7

**中文：** 全局服务器／控制器、局部服务器；图39的层级角色，未定义控制协议。

**简单英文：** The top server or controller / servers closer to clients in the hierarchy figure. The figure gives no control protocol.

**来源：** Week5.pdf · PDF页39 / 幻灯片39（图表）

### Critical flows in a hierarchical model

**旧ID：** csit985-w5-e1e5bbe88a27e2

**中文：** 分层模型关键流依赖应用行为；可能只有客户机—服务器流关键，也可能服务器间流同样关键。

**简单英文：** They depend on application behaviour. Client-server flows may be the only critical ones; server-server flows may also be critical.

**来源：** Week5.pdf · PDF页40 / 幻灯片40

### Common databases / sharing information / replication of web servers

**旧ID：** csit985-w5-56bacb4ddf4b84

**中文：** 共享数据库／共享信息／Web服务器复制；服务器间流可能关键的情形。

**简单英文：** Shared databases, information exchange, and making server copies; examples where server-server traffic can matter.

**来源：** Week5.pdf · PDF页40 / 幻灯片40

### Scientific visualization simulations

**旧ID：** csit985-w5-a6c687bae026e1

**中文：** 科学可视化仿真；列为分层模型例子，未进一步定义设计。

**简单英文：** A named hierarchical-flow example. The lecture gives no detailed simulation design.

**来源：** Week5.pdf · PDF页40 / 幻灯片40

### Regional server / web client / CDN / mirror

**旧ID：** csit985-w5-89cb16848d4686

**中文：** 图41区域服务器／Web客户机／CDN／镜像；教师提到镜像内容，CDN未展开或定义。

**简单英文：** Labels in the web-service hierarchy. Mirror indicates copied content in the teacher's explanation; CDN is not expanded or defined.

**来源：** Week5.pdf · PDF页41 / 幻灯片41（图表）；Week5_transcript.txt · TXT原始L2，本行字符22180起；搜索“mirrored content”

### Distributed-computing flow model

**旧ID：** csit985-w5-65d7c621471d41

**中文：** 分布式计算流模型；可以呈客户机—服务器反向特征，也可混合P2P与客户机—服务器特征。

**简单英文：** A model that can be the inverse of client-server or a hybrid of peer-to-peer and client-server behaviour.

**来源：** Week5.pdf · PDF页32,42 / 幻灯片32,42

### Task manager / task server / computing node

**旧ID：** csit985-w5-8b3d786233e9c8

**中文：** 任务管理者／任务服务器／计算节点；图42任务服务器可能为汇，计算节点可为源和汇。

**简单英文：** A manager assigning computing work / the server shown in the figure / a device doing part of the work.

**来源：** Week5.pdf · PDF页42,43 / 幻灯片42,43（图表）；Week5_transcript.txt · TXT原始L2，本行字符22913起；搜索“distributes work”

### Computing-node interaction

**旧ID：** csit985-w5-ca2d98a88a0abd

**中文：** 计算节点间交互；图42标Interaction，教师强调也需分析节点间通信。

**简单英文：** Communication between computing nodes, not only their connections to the task server.

**来源：** Week5.pdf · PDF页42 / 幻灯片42（图表）；Week5_transcript.txt · TXT原始L2，本行字符24147起；搜索“communication between the nodes”

### Close coupling / loose coupling

**旧ID：** csit985-w5-3996f0ea9ddc11

**中文：** 紧密耦合／松散耦合；课件分别关联P2P流／客户机—服务器流，后者可能形成集群。

**简单英文：** Strong dependence between devices / weaker dependence. The slide links them to peer-to-peer / client-server flows respectively.

**来源：** Week5.pdf · PDF页43 / 幻灯片43

### Task granularity

**旧ID：** csit985-w5-f7f62ee366f293

**中文：** 任务粒度；描述任务如何划分给设备。

**简单英文：** How work is divided among computing devices.

**来源：** Week5.pdf · PDF页43 / 幻灯片43

### Coarse granularity

**旧ID：** csit985-w5-c982e184ff6001

**中文：** 粗粒度；每个任务分配给一个计算设备。

**简单英文：** Each task is assigned to one computing device.

**来源：** Week5.pdf · PDF页43 / 幻灯片43

### Fine granularity

**旧ID：** csit985-w5-38cb80197841b8

**中文：** 细粒度；一个任务分给多个设备共同处理。

**简单英文：** A task is divided between several devices.

**来源：** Week5.pdf · PDF页43 / 幻灯片43

### Inflexible requirements / waiting for neighbour devices

**旧ID：** csit985-w5-ca5f03857b9d68

**中文：** 不易放宽的需求／等待相邻设备；分布式模型可能要求最严格，节点等信息时可能停止工作，并非所有模型都必然如此。

**简单英文：** Requirements with little room for change / stopping while waiting for information from other devices.

**来源：** Week5.pdf · PDF页44 / 幻灯片44

### Flow prioritization

**旧ID：** csit985-w5-b6e7763cc823ac

**中文：** 流优先级排序；决定哪些流先获得资源。

**简单英文：** Rank flows by importance to decide which get resources first.

**来源：** Week5.pdf · PDF页46 / 幻灯片46

### Prioritization criteria

**旧ID：** csit985-w5-b8508a5821bae9

**中文：** 排序准则；业务目标／影响、政治目标、性能、安全、服务用户／应用／设备数均可作为依据。

**简单英文：** Business impact, political aims, performance, security, or number of users, applications, and devices served.

**来源：** Week5.pdf · PDF页46 / 幻灯片46

### FlowID / F1 / F2 / F3 / CF1 / CF2 / CF3

**旧ID：** csit985-w5-a14e46b1b79d64

**中文：** 流标识；示例F1–F3为个体流，CF1–CF3为复合流，不能把编号当成协议名。

**简单英文：** Flow identifiers in the example table. F labels individual flows; CF labels composite flows in the teacher's explanation.

**来源：** Week5.pdf · PDF页47,48,49 / 幻灯片47,48,49；Week5_transcript.txt · TXT原始L2，本行字符30156起；搜索“CF rep represents”

### Reliability / capacity / delay requirements

**旧ID：** csit985-w5-95d4df314ecb75

**中文：** 性能表三列：可靠性、容量、时延。本表可靠性用百分比，Week4用故障间隔指标；资料未提供转换规则，不混为同一定义。

**简单英文：** The table's three performance columns. Reliability is shown as a percentage, unlike Week4's time-between-failure measures; no conversion rule is supplied.

**来源：** Week5.pdf · PDF页47,48,49 / 幻灯片47,48,49

### Number of users / budget / priority

**旧ID：** csit985-w5-d8ed30fd367287

**中文：** 用户数／预算／优先级；示例数值与选择准则相关，不代表唯一分配方法。

**简单英文：** Table columns for the users served, money assigned, and relative rank.

**来源：** Week5.pdf · PDF页47,48,49 / 幻灯片47,48,49

### Prioritization by number of users

**旧ID：** csit985-w5-9b8fc334088a23

**中文：** 按用户数排序；示例顺序CF2→CF1→F1→F2→F3→CF3，人数依次2100、1750、1200、550、100、50。

**简单英文：** The example ranks CF2, CF1, F1, F2, F3, then CF3 as user counts fall from 2100 to 50.

**来源：** Week5.pdf · PDF页48 / 幻灯片48

### Prioritization by reliability

**旧ID：** csit985-w5-502b0feadd536d

**中文：** 按可靠性排序；CF1第一，F2/F3并列第二，未列可靠性值的三条流并列第三。CF1原值99.95缺百分号，需核实。

**简单英文：** CF1 is first; F2 and F3 share second place; F1, CF2, and CF3 share third because no reliability value is stated.

**来源：** Week5.pdf · PDF页49 / 幻灯片49

### N/A

**旧ID：** csit985-w5-e3ede31803eb4a

**中文：** 不适用／未提供；表格各格具体含义不明，不能当作0或自行猜值。

**简单英文：** A marker for a value not available or not applicable. The table does not state which meaning each cell has; it is not zero.

**来源：** Week5.pdf · PDF页47,48,49 / 幻灯片47,48,49；Week5_transcript.txt · TXT原始L2，本行字符30752起；搜索“not applicable or uh available”

### Mb/s / kb/s / Kb/s / ms / $K

**旧ID：** csit985-w5-e491bdfa5812f8

**中文：** 兆比特每秒／千比特每秒／毫秒／千元；K/k大小写不一致，预算未注明币种，不推算字节率。

**简单英文：** Data-rate and delay units, and money in thousands. The slide varies the case of K; the budgets do not name a currency.

**来源：** Week5.pdf · PDF页10,11,12,21,47,48,49 / 幻灯片10,11,12,21,47,48,49（图表）

### Flow specification (flowspec)

**旧ID：** csit985-w5-c4d281077074e9

**中文：** 流规格说明；汇总识别／定义／描述结果，列流及其要求，区分尽力而为、可预测、保证类别。

**简单英文：** A combined record describing flows and their requirements, including best-effort, predictable, and guaranteed categories.

**来源：** Week5.pdf · PDF页51 / 幻灯片51

### Combine requirements for composite flows / a network section

**旧ID：** csit985-w5-fbf590abc392ad

**中文：** 合并复合流／网络区段需求；允许区段汇总，但不能隐去个体保证条件。

**简单英文：** Bring together performance needs for flows sharing a resource or for all flows in a section.

**来源：** Week5.pdf · PDF页51,53 / 幻灯片51,53

### Best-effort flows

**旧ID：** csit985-w5-e3592f0cc8ca8e

**中文：** 尽力而为流；本讲算法仅使用其容量需求，不补充完整服务契约。

**简单英文：** In the lecture's flowspec calculation, these contribute only capacity requirements. The material does not define a full service contract.

**来源：** Week5.pdf · PDF页52,53,54 / 幻灯片52,53,54

### Predictable flows

**旧ID：** csit985-w5-1827e47af06c32

**中文：** 可预测流；合并已有性能要求，未给完整正式服务语义。

**简单英文：** A service category whose available performance requirements are combined. Full formal service semantics are not defined here.

**来源：** Week5.pdf · PDF页52,53,55 / 幻灯片52,53,55

### Guaranteed flows / guaranteed requirements

**旧ID：** csit985-w5-88a3aec5ca6f7e

**中文：** 保证流／保证需求；每条流各项需求必须单独保留，不能改为平均值。

**简单英文：** Requirements that must remain individually listed for each guaranteed flow.

**来源：** Week5.pdf · PDF页10,52,53,56 / 幻灯片10,52,53,56

### One-part flowspec

**旧ID：** csit985-w5-308774b1fe2703

**中文：** 单部分流规格；所有流为best effort，仅合并容量。

**简单英文：** A specification in which all flows are best effort. Combine capacities only.

**来源：** Week5.pdf · PDF页52,54 / 幻灯片52,54

### Two-part flowspec

**旧ID：** csit985-w5-fb8b10fbf6c6dd

**中文：** 两部分流规格；含predictable，可含best effort，但不是必须有两种流。

**简单英文：** A specification containing predictable flows; it may also contain best-effort flows.

**来源：** Week5.pdf · PDF页52,55 / 幻灯片52,55

### Multi-part flowspec

**旧ID：** csit985-w5-28ad26aed96290

**中文：** 多部分流规格；含guaranteed，可同时含另两种流，不要求三类全有。

**简单英文：** A specification containing guaranteed flows; it may also contain predictable and best-effort flows.

**来源：** Week5.pdf · PDF页52,56 / 幻灯片52,56

### Stochastic

**旧ID：** csit985-w5-0b34441ce4fbe9

**中文：** 随机性；必要基础词义。图4.36使用此词而正文用predictable，资料未明确两者关系，不直接合并同义。

**简单英文：** A word used in Figure 4.36 for the two-part and multi-part flow types. The supplied material does not define it or establish that it means predictable.

**来源：** Week5.pdf · PDF页52 / 幻灯片52（图表）

### Flowspec algorithm

**旧ID：** csit985-w5-110bfe4ad9fa7b

**中文：** 流规格算法；按三种类别的不同规则合并性能需求。资料没有给完整实现代码或证明。

**简单英文：** A mechanism for combining requirements to obtain optimal composite performance, using different rules for the three service categories.

**来源：** Week5.pdf · PDF页53 / 幻灯片53

### CBE (best-effort capacity)

**旧ID：** csit985-w5-e53c21444b70c9

**中文：** 尽力而为容量；图54的CBE及其求和。

**简单英文：** The capacity needed for a best-effort flow; Σ CBE represents their combined capacity.

**来源：** Week5.pdf · PDF页54,55,56 / 幻灯片54,55,56

### Σ (sum) / Σ CBE

**旧ID：** csit985-w5-d373d88a6bb4e1

**中文：** 求和符号／best-effort容量之和；只按本讲容量合并规则，不加入未给的额外统计假设。

**简单英文：** Add the listed values / add best-effort flow capacities in the lecture's calculation.

**来源：** Week5.pdf · PDF页54,55,56 / 幻灯片54,55,56

### Cp / Σ Cp

**旧ID：** csit985-w5-0134e2f0ddc09b

**中文：** 可预测容量／可预测容量求和；与best effort的Σ CBE分部分表示。

**简单英文：** The capacity required for predictable flows / the combined predictable capacities.

**来源：** Week5.pdf · PDF页55,56 / 幻灯片55,56

### Dp (predictable delay requirement, minimum)

**旧ID：** csit985-w5-b3efae56286d1d

**中文：** 可预测时延要求；取最小的要求值，而非把所有时延相加或取宽松平均。

**简单英文：** The minimum delay requirement used to protect the strictest predictable delay target.

**来源：** Week5.pdf · PDF页55 / 幻灯片55；Week5_transcript.txt · TXT原始L2，本行字符35613起；搜索“strictest relevant requirements”

### Rp (predictable RMA requirement, maximum)

**旧ID：** csit985-w5-d52d867641284a

**中文：** 可预测RMA要求；课件标maximum，未说明如何把MTTR等不同方向／单位的RMA指标统一排序，不扩展为所有指标取数值最大。

**简单英文：** The maximum predictable RMA requirement shown on the slide. How all RMA measures are converted to one ordered scale is not defined.

**来源：** Week5.pdf · PDF页55 / 幻灯片55

### Ci / Ri / Di

**旧ID：** csit985-w5-a4f9a5ea31dfb4

**中文：** 保证流i的容量、可靠性／RMA、时延；各条分别保留。TXT称Ri为reliability，邻页用RMA，记为来源用语差异。

**简单英文：** The individual guaranteed flow's capacity, reliability/RMA, and delay requirements, kept separately in a multi-part specification.

**来源：** Week5.pdf · PDF页56 / 幻灯片56（图表）；Week5_transcript.txt · TXT原始L2，本行字符36932起；搜索“CI means”

### One-part calculation

**旧ID：** csit985-w5-649ae27377e590

**中文：** 单部分计算：best-effort容量求和。

**简单英文：** Combine the capacities of best-effort flows as Σ CBE.

**来源：** Week5.pdf · PDF页54 / 幻灯片54

### Two-part calculation

**旧ID：** csit985-w5-cea06b9f71ffba

**中文：** 两部分计算：保留Σ CBE，再有Σ Cp及Dp最小、Rp最大约束。正文added不能理解成所有指标算术相加。

**简单英文：** Keep Σ CBE; combine predictable capacities as Σ Cp subject to Dp minimum and Rp maximum. Do not simply add delays or average requirements.

**来源：** Week5.pdf · PDF页55 / 幻灯片55；Week5_transcript.txt · TXT原始L2，本行字符35613起；搜索“strictest relevant requirements”

### Multi-part calculation

**旧ID：** csit985-w5-e7c0b7f37f833e

**中文：** 多部分计算：沿两部分结构再加入逐条Ci/Ri/Di保证条件。

**简单英文：** Use the two-part structure and add each guaranteed requirement separately as Ci, Ri, Di.

**来源：** Week5.pdf · PDF页56 / 幻灯片56

### as the basis for / likely to occur / greatest impact

**旧ID：** csit985-w5-6cb8e6e56aba0c

**中文：** 作为依据／可能出现／最大影响；flow analysis只重点覆盖高影响流。

**简单英文：** As a starting foundation / expected to happen / the largest effect.

**来源：** Week5.pdf · PDF页5 / 幻灯片5

### sets of / common attributes / associated with

**旧ID：** csit985-w5-5f0f1ffbbc3318

**中文：** 若干集合／共同属性／与……关联；set并不意味着只有一条包。

**简单英文：** Groups of / shared features / linked to.

**来源：** Week5.pdf · PDF页6,7,8 / 幻灯片6,7,8

### basic unit / remain with THAT flow

**旧ID：** csit985-w5-55b095e6c90934

**中文：** 基本单位／仍归该条特定流；THAT强调不能转移或隐藏个体保证。

**简单英文：** The smallest working unit here / stay attached to that exact flow.

**来源：** Week5.pdf · PDF页10 / 幻灯片10

### commonality / strict requirements / prioritize

**旧ID：** csit985-w5-ae9cd3371154eb

**中文：** 共同点／严格要求／确定优先顺序。

**简单英文：** A shared feature / requirements with little room to relax / decide relative importance.

**来源：** Week5.pdf · PDF页11,13 / 幻灯片11,13

### from an application perspective / focus on

**旧ID：** csit985-w5-1c6f4ac57b52ed

**中文：** 从应用视角／关注；可选应用、应用组、设备或功能。

**简单英文：** Viewed through applications / give attention to.

**来源：** Week5.pdf · PDF页17 / 幻灯片17

### driving the architecture and design

**旧ID：** csit985-w5-b9520da95fd036

**中文：** 推动／决定架构和设计方向；driving这里不是驾驶。

**简单英文：** Having a strong influence on architecture and design choices.

**来源：** Week5.pdf · PDF页19,20 / 幻灯片19,20

### where needed / criteria / eliminated / be met

**旧ID：** csit985-w5-1327db28e12cdb

**中文：** 按需／准则／被筛除／得到满足；Top N不免除其他应用需求。

**简单英文：** When useful or necessary / standards for choice / left out / be satisfied.

**来源：** Week5.pdf · PDF页18,22 / 幻灯片18,22

### almost all / typical / specialized

**旧ID：** csit985-w5-fbc87ff20fca6e

**中文：** 几乎全部／典型的／专用的；保留almost，不能改成所有。

**简单英文：** Nearly all, but not every one / common examples / made for a particular purpose.

**来源：** Week5.pdf · PDF页25,27 / 幻灯片25,27

### archival / manipulate / display / terminate

**旧ID：** csit985-w5-77a1fed94cb815

**中文：** 归档的／处理或操作／显示／终止；terminate此处是流终点，不是删除数据。

**简单英文：** For long-term keeping / process or change / show / be the receiving endpoint here.

**来源：** Week5.pdf · PDF页24,27 / 幻灯片24,27

### exhibit / specific, consistent behaviour

**旧ID：** csit985-w5-0d440cd2bd8272

**中文：** 表现出／特定且一致的行为。

**简单英文：** Show / particular behaviour that follows a similar pattern.

**来源：** Week5.pdf · PDF页31 / 幻灯片31

### preference / at the same level / throughout

**旧ID：** csit985-w5-601ce11fe23aac

**中文：** 倾向／同层级／遍及；directionality不只是画箭头。

**简单英文：** A tendency toward one choice / at equal rank / across the whole area.

**来源：** Week5.pdf · PDF页31,33 / 幻灯片31,33

### cannot distinguish / equivalent / fairly consistent

**旧ID：** csit985-w5-78df32b2947d25

**中文：** 无法区分／等效／相当一致；不是每个数值必须完全相等。

**简单英文：** Cannot tell meaningful differences / treated as alike / mostly following the same pattern.

**来源：** Week5.pdf · PDF页33,34 / 幻灯片33,34

### generally applicable / asymmetric / focused towards

**旧ID：** csit985-w5-b536f99cd0eaae

**中文：** 普遍适用／非对称／主要朝向；“currently”是课件说法，不当作已验证现状。

**简单英文：** Useful in many cases / unequal across directions / mainly directed toward.

**来源：** Week5.pdf · PDF页36 / 幻灯片36

### predominant / therefore / acts as

**旧ID：** csit985-w5-2a481fa403204a

**中文：** 主导的／因此／充当；source/sink为具体流的角色。

**简单英文：** Main or strongest / as a result / has the role of.

**来源：** Week5.pdf · PDF页36,37 / 幻灯片36,37

### accomplish a task / managed by / dependent upon

**旧ID：** csit985-w5-3bb22b510c4235

**中文：** 完成任务／由……管理／取决于。

**简单英文：** Complete work / controlled or coordinated by / determined by.

**来源：** Week5.pdf · PDF页39,40 / 幻灯片39,40

### inherently / supporting multiple sessions / replication

**旧ID：** csit985-w5-729052dc3a812d

**中文：** 内在地／支持多个会话／复制。

**简单英文：** As part of its nature / serving several sessions / making copies.

**来源：** Week5.pdf · PDF页40 / 幻灯片40

### inverse characteristics / hybrid / distinctions

**旧ID：** csit985-w5-95e65f868d76df

**中文：** 反向特征／混合／分类差异。

**简单英文：** Opposite-direction features / a mix of types / differences used to classify.

**来源：** Week5.pdf · PDF页42,43 / 幻灯片42,43

### assigned to / subdivided between / inflexible

**旧ID：** csit985-w5-3648f6ca9994a2

**中文：** 分配给／细分给多个对象／难以放宽。

**简单英文：** Given to do / split among / difficult to change or relax.

**来源：** Week5.pdf · PDF页43,44 / 幻灯片43,44

### ranking / objectives / resources first

**旧ID：** csit985-w5-6bc7c9c8f01d73

**中文：** 排序／目标／先获得资源。

**简单英文：** Putting in order / aims / receiving available resources before other flows.

**来源：** Week5.pdf · PDF页46 / 幻灯片46

### one or more / served by a flow / based upon importance

**旧ID：** csit985-w5-f3a3d08b8d559f

**中文：** 一个或多个／由流服务的／依据重要性。

**简单英文：** At least one / supported by a flow / using importance as the basis.

**来源：** Week5.pdf · PDF页46 / 幻灯片46

### specification / lists / network section

**旧ID：** csit985-w5-394d92ae166947

**中文：** 规格说明／列出／网络区段。

**简单英文：** A written description of requirements / records as entries / one part of the network.

**来源：** Week5.pdf · PDF页51 / 幻灯片51

### may contain / all flows are / keep them individual

**旧ID：** csit985-w5-ccfdcfc6841e86

**中文：** 可包含而非必须包含／所有流都是／各自保留；三类flowspec的条件必须保留。

**简单英文：** Can include, but need not / every included flow is / retain each separately.

**来源：** Week5.pdf · PDF页52,56 / 幻灯片52,56

### mechanism / optimal composite performance / maximize

**旧ID：** csit985-w5-8ee8dc2e686582

**中文：** 机制／最优组合性能目标／最大化；未给通用最优证明。

**简单英文：** A method / the best combined performance aimed for / make as strong as required.

**来源：** Week5.pdf · PDF页53,55 / 幻灯片53,55

### all available requirements / each characteristic / subject to

**旧ID：** csit985-w5-0309f63f029ce2

**中文：** 所有已有要求／每类特征／受……约束；不同指标使用不同合并规则。

**简单英文：** Every requirement supplied / each performance aspect / under these constraints.

**来源：** Week5.pdf · PDF页53,55 / 幻灯片53,55；Week5_transcript.txt · TXT原始L2，本行字符35872起；搜索“subject to”

### not just calculating a relaxed average

**旧ID：** csit985-w5-c28aa139a55bc2

**中文：** 不能只算较宽松的平均值；教师说明predictable合并要保护最严格相关要求。

**简单英文：** Do not replace stricter requirements with an easier average.

**来源：** Week5_transcript.txt · TXT原始L2，本行字符35646起；搜索“not just calculating a relaxed average”

### blind spots / not a permanent property

**旧ID：** csit985-w5-d5fae9a6449bd1

**中文：** 分析盲点／不是固定属性；教师强调筛选不能遗漏需求，优先级随项目目标变。

**简单英文：** Needs missed by the analysis / a value that can change with project goals.

**来源：** Week5_transcript.txt · TXT原始L2，本行字符13071起；搜索“blind spots”；Week5_transcript.txt · TXT原始L2，本行字符32223起；搜索“not a permanent property”

### criterion / transparent / incomplete information / make up a number

**旧ID：** csit985-w5-3db768427b7604

**中文：** 单个准则／透明易懂／信息不完整／编造数值；criterion单数，criteria复数。

**简单英文：** One selection rule / easy to see and understand / missing facts / invent a value.

**来源：** Week5_transcript.txt · TXT原始L2，本行字符29728起；搜索“criterion”；Week5_transcript.txt · TXT原始L2，本行字符31237起；搜索“transparent”；Week5_transcript.txt · TXT原始L2，本行字符30571起；搜索“incomplete information”；Week5_transcript.txt · TXT原始L2，本行字符30689起；搜索“make up a number”

### attend in person / enrolled in / preview quiz / multiple-choice questions

**旧ID：** csit985-w5-88f4925bc40b07

**中文：** 到现场／已注册在／预览测验／选择题；仅释录音通知语言，不当当前安排。

**简单英文：** Be physically present / registered for / see the quiz entry before starting / questions with answer options.

**来源：** Week5_transcript.txt · TXT原始L2，本行字符1883起；搜索“attend in person”；Week5_transcript.txt · TXT原始L2，本行字符26412起；搜索“enrolled in”；Week5_transcript.txt · TXT原始L2，本行字符1547起；搜索“preview quiz”；Week5_transcript.txt · TXT原始L2，本行字符27657起；搜索“multiple choice questions”

### individual work / teamwork / due / deadline / just a heads up

**旧ID：** csit985-w5-9173e893e31c9e

**中文：** 个人作业／团队作业／到期／截止时间／提前提醒；录音作业编号先2后3有冲突，需核实。

**简单英文：** Work by one person / group work / must be submitted by / final time / a short warning in advance.

**来源：** Week5_transcript.txt · TXT原始L2，本行字符2890起；搜索“individual work”；Week5_transcript.txt · TXT原始L2，本行字符28189起；搜索“Teamwork”；Week5_transcript.txt · TXT原始L2，本行字符2921起；搜索“due”；Week5_transcript.txt · TXT原始L2，本行字符24668起；搜索“deadline”；Week5_transcript.txt · TXT原始L2，本行字符37654起；搜索“just a heads up”

### Composite-flow example labels

**旧ID：** csit985-w5-113588c0920cee

**中文：** 图11复合流示例：应用1上行100 Kb/s；应用2双向200 Kb/s、往返时延100ms；应用3为100%uptime。图未说明双向200是每向值还是合计，不自行补定。

**简单英文：** The figure lists Application 1: 100 Kb/s upstream; Application 2: 200 Kb/s bidirectional and 100 ms RT delay; Application 3: 100% uptime.

**来源：** Week5.pdf · PDF页11 / 幻灯片11（图表）

### Flow-example labels

**旧ID：** csit985-w5-b48e26348529b9

**中文：** 图12示例：100ms单向；100 Kb/s上行＋500 Kb/s下行；组合图中应用1上行500 Kb/s、应用2双向1 Mb/s、应用3往返100ms。不要跨示例合并条件。

**简单英文：** The figure shows 100 ms one-way delay; 100 Kb/s upstream with 500 Kb/s downstream; and a group with 500 Kb/s upstream, 1 Mb/s bidirectional, and 100 ms round-trip delay.

**来源：** Week5.pdf · PDF页12 / 幻灯片12（图表）
