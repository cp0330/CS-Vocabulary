# CSIT985 Week4 词汇

由本周可读JSON自动生成。原文与整理说明分开；跨周条目保留全部来源和不同义项。原PDF及完整录音TXT不在网站中。

## 重要疑点与来源限制

**位置：** PDF页34

**说明：** Traceroute：PDF说可组合逐链路容量测量，TXT只说明路径和时延；容量测量能力待核实。PING的全称按课件保留，未核实其标准性。

**位置：** PDF页42,44

**说明：** 故障率相加后取倒数的适用模型没有说明。Availability公式按课件排除计划维护；不能据此当作所有日历时间的可用率。TXT出现MTDR、IMTBCF等疑似转写错误，采用PDF的MTTR、MTBCF，不引入新指标。

**位置：** PDF页46,47,51

**说明：** 停机表采用近似值，如99.99%约53分钟/年。第47页同时写每周1分钟与每月一次小中断，并非可互换的精确承诺；第51页强调必须说明周期及中断模式。‘Most systems operate at 99.99%’仅为课件说法，未作为当前普遍事实核实。

**位置：** PDF页53,54

**说明：** 原文‘INTD < HRT: Users do not perceive delay’与同页INTD为愿意等待10–30秒、HRT约100ms的说明关系不清。保留原式为待核实；不无声替换INTD，也不先给纠正答案。

**位置：** PDF页61

**说明：** Confidence首条定义在‘at the require’处残缺。词条依据同页后文和TXT解释可接受错误/丢失率；未猜测残缺原句。

**位置：** PDF页63

**说明：** 容量图中较小值一侧标High Performance，较大值一侧标Low Performance；与按容量直觉分类有疑点。保留原图标签，不据此断言高容量等于低性能；分组应看具体要求，标注待核实。

**位置：** PDF页70

**说明：** 只使用指定PDF/TXT；课件提到McCabe 2007和2010及阅读章节，仅保留出处线索，未打开书籍、网站或补充教材。

**位置：** TXT

**说明：** TXT含分组、测验、日期、通知及课程平台操作。它们仅是当时录音内容，不作为当前行动指令或最新安排；无原始音频可复核转写。

**位置：** PDF页16

**说明：** 原句“This has to traded off with the amount of time required to do this”缺少be等成分。保留原文片段；用法说明另标，不把补写语法当作课件原句。

## 专业英语

### Requirement

**稳定ID：** csit985-w4-b75163bf7f10d0

**类别：** 专业英语

**中文解释：** 需要或要求的事物，也可指必须满足的条件。

**简单英文（整理解释）：** Something that is needed or demanded. It can also be a condition that must be met.

**说明依据：** 课件明确

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> That which is required or needed; a want, need

**原文来源：** Week4.pdf · PDF页4 / 幻灯片4

**资料原文：** 定义

> That which is called for or demanded; a condition which must be complied with

**原文来源：** Week4.pdf · PDF页4 / 幻灯片4

**资料原文：** 定义（原句有语法疑点）

> Requirements are descriptions of network functions and performance that are needed for network to successfully supports its

**原文来源：** Week3.pdf · PDF页43 / 幻灯片43

**资料原文：** 定义续列

> Users, Applications, Devices

**原文来源：** Week3.pdf · PDF页43 / 幻灯片43

**语境：** Week4 · Requirement

**语境英文：** Something that is needed or demanded. It can also be a condition that must be met.

**语境中文：** 需要或要求的事物，也可指必须满足的条件。

**语境依据：** 课件明确

**语境原文：** 定义

> That which is required or needed; a want, need

**语境原文来源：** Week4.pdf · PDF页4 / 幻灯片4

**语境原文：** 定义

> That which is called for or demanded; a condition which must be complied with

**语境原文来源：** Week4.pdf · PDF页4 / 幻灯片4

**语境来源：** Week4.pdf · PDF页4 / 幻灯片4；Week4.pdf · PDF页4 / 幻灯片4

**语境：** Week3 · Requirement

**语境英文：** A description of the network functions and performance needed to support users, applications, and devices.

**语境中文：** 需求；网络为支持用户、应用、设备而需要提供的功能和性能描述。

**语境依据：** 按课件定义整理

**语境原文：** 定义（原句有语法疑点）

> Requirements are descriptions of network functions and performance that are needed for network to successfully supports its

**语境原文来源：** Week3.pdf · PDF页43 / 幻灯片43

**语境原文：** 定义续列

> Users, Applications, Devices

**语境原文来源：** Week3.pdf · PDF页43 / 幻灯片43

**语境来源：** Week3.pdf · PDF页43 / 幻灯片43

**全部来源：** Week4.pdf · PDF页4 / 幻灯片4；Week4.pdf · PDF页4 / 幻灯片4；Week3.pdf · PDF页43 / 幻灯片43

### Requirement Analysis Process

**稳定ID：** csit985-w4-de6341c005f384

**类别：** 专业英语

**中文解释：** 需求分析流程：收集需求→建立指标→描述行为→细化需求↔映射需求。并非总是单向线性进行。

**简单英文（整理解释）：** A process for gathering requirements, developing metrics, characterising behaviour, developing requirements, and mapping them.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 活动说明

> Gathering and deriving requirements in order to understand system and network behaviour

**原文来源：** Week3.pdf · PDF页44 / 幻灯片44

**资料原文：** 活动说明

> Identifying, gathering, deriving and understanding system requirements and their characteristics

**原文来源：** Week3.pdf · PDF页44 / 幻灯片44

**资料原文：** 活动说明

> Developing thresholds and limits for performance

**原文来源：** Week3.pdf · PDF页44 / 幻灯片44

**资料原文：** 活动说明

> Determining where best-effort, predictable and guaranteed services apply in the network

**原文来源：** Week3.pdf · PDF页44 / 幻灯片44

**资料原文：** 名称或用语片段

> Requirement Analysis

**原文来源：** Week3.pdf · PDF页42 / 幻灯片42

**语境：** Week4 · Requirement Analysis Process

**语境英文：** A process for gathering requirements, developing metrics, characterising behaviour, developing requirements, and mapping them.

**语境中文：** 需求分析流程：收集需求→建立指标→描述行为→细化需求↔映射需求。并非总是单向线性进行。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页5 / 幻灯片5；Week4_transcript.txt · TXT原始L2，本行字符3214起；搜索“two-way arrow”

**语境：** Week3 · Requirement analysis

**语境英文：** Identify, gather, derive, and understand requirements. Set performance limits and decide where different services are needed.

**语境中文：** 需求分析；识别、收集、推导并理解系统需求，建立性能阈值和限制，判断不同服务适用于哪里。

**语境依据：** 按资料整理

**语境原文：** 活动说明

> Gathering and deriving requirements in order to understand system and network behaviour

**语境原文来源：** Week3.pdf · PDF页44 / 幻灯片44

**语境原文：** 活动说明

> Identifying, gathering, deriving and understanding system requirements and their characteristics

**语境原文来源：** Week3.pdf · PDF页44 / 幻灯片44

**语境原文：** 活动说明

> Developing thresholds and limits for performance

**语境原文来源：** Week3.pdf · PDF页44 / 幻灯片44

**语境原文：** 活动说明

> Determining where best-effort, predictable and guaranteed services apply in the network

**语境原文来源：** Week3.pdf · PDF页44 / 幻灯片44

**语境原文：** 名称或用语片段

> Requirement Analysis

**语境原文来源：** Week3.pdf · PDF页42 / 幻灯片42

**语境来源：** Week3.pdf · PDF页44 / 幻灯片44；Week3.pdf · PDF页42 / 幻灯片42

**全部来源：** Week4.pdf · PDF页5 / 幻灯片5；Week4_transcript.txt · TXT原始L2，本行字符3214起；搜索“two-way arrow”；Week3.pdf · PDF页44 / 幻灯片44；Week3.pdf · PDF页42 / 幻灯片42

### Gather and List Requirements

**稳定ID：** csit985-w4-75600a512834d4

**类别：** 专业英语

**中文解释：** 收集并列出网络需求；此阶段先了解信息。

**简单英文（整理解释）：** Collect what the network must provide and write it down.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Gather and List Requirements

**语境英文：** Collect what the network must provide and write it down.

**语境中文：** 收集并列出网络需求；此阶段先了解信息。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页5,7 / 幻灯片5,7

**全部来源：** Week4.pdf · PDF页5,7 / 幻灯片5,7

### Service requirements

**稳定ID：** csit985-w4-05d4b0776184c1

**类别：** 专业英语

**中文解释：** 网络服务需求；来自初始条件及相关人员输入，再经分析细化。

**简单英文（整理解释）：** Requirements for the services the network must provide. They come from initial conditions and stakeholder input, then are refined.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Service requirements

**语境英文：** Requirements for the services the network must provide. They come from initial conditions and stakeholder input, then are refined.

**语境中文：** 网络服务需求；来自初始条件及相关人员输入，再经分析细化。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页7 / 幻灯片7

**全部来源：** Week4.pdf · PDF页7 / 幻灯片7

### Initial conditions

**稳定ID：** csit985-w4-39635e99aedb63

**类别：** 专业英语

**中文解释：** 初始条件：项目类型、范围、最初目标和已知外部影响；也可能形成约束。

**简单英文（整理解释）：** The starting situation, including project type, scope, goals, and known outside forces.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 说明

> These are the basis for the start of the analysis process

**原文来源：** Week4.pdf · PDF页8 / 幻灯片8

**语境：** Week4 · Initial conditions

**语境英文：** The starting situation, including project type, scope, goals, and known outside forces.

**语境中文：** 初始条件：项目类型、范围、最初目标和已知外部影响；也可能形成约束。

**语境依据：** 根据资料整理

**语境原文：** 说明

> These are the basis for the start of the analysis process

**语境原文来源：** Week4.pdf · PDF页8 / 幻灯片8

**语境来源：** Week4.pdf · PDF页8,9 / 幻灯片8,9；Week4.pdf · PDF页8 / 幻灯片8

**全部来源：** Week4.pdf · PDF页8,9 / 幻灯片8,9；Week4.pdf · PDF页8 / 幻灯片8

### Network architecture / network design

**稳定ID：** csit985-w4-d9c0012752ba97

**类别：** 专业英语

**中文解释：** 网络架构／网络设计；本周资料未正式定义二者区别，不自行补充。

**简单英文（整理解释）：** The network choices being planned. The supplied material uses these terms but does not define their full difference.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Network architecture / network design

**语境英文：** The network choices being planned. The supplied material uses these terms but does not define their full difference.

**语境中文：** 网络架构／网络设计；本周资料未正式定义二者区别，不自行补充。

**语境依据：** 资料未定义

**语境来源：** Week4.pdf · PDF页7,8,12 / 幻灯片7,8,12

**全部来源：** Week4.pdf · PDF页7,8,12 / 幻灯片7,8,12

### Project type

**稳定ID：** csit985-w4-7bdeb53648ae57

**类别：** 专业英语

**中文解释：** 项目类型；不同类型改变需要调查的问题。

**简单英文（整理解释）：** The kind of network work being done, such as a new network, modification, or upgrade.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Project type

**语境英文：** The kind of network work being done, such as a new network, modification, or upgrade.

**语境中文：** 项目类型；不同类型改变需要调查的问题。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页8,10 / 幻灯片8,10

**全部来源：** Week4.pdf · PDF页8,10 / 幻灯片8,10

### Project scope

**稳定ID：** csit985-w4-d1508cc449499d

**类别：** 专业英语

**中文解释：** 项目范围：网络规模、站点数、站点之间的距离。

**简单英文（整理解释）：** The extent of the project: network size, number of sites, and distances between sites.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 说明

> Network size

**原文来源：** Week4.pdf · PDF页11 / 幻灯片11

**资料原文：** 说明

> Number of sites

**原文来源：** Week4.pdf · PDF页11 / 幻灯片11

**资料原文：** 说明

> Distance between sites

**原文来源：** Week4.pdf · PDF页11 / 幻灯片11

**资料原文：** 名称或用语片段

> design scope

**原文来源：** Week3.pdf · PDF页6 / 幻灯片6

**资料原文：** 教师用语（TXT原片段）

> what is inside the project

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符1608起；搜索“what is inside the project”

**语境：** Week4 · Project scope

**语境英文：** The extent of the project: network size, number of sites, and distances between sites.

**语境中文：** 项目范围：网络规模、站点数、站点之间的距离。

**语境依据：** 根据资料整理

**语境原文：** 说明

> Network size

**语境原文来源：** Week4.pdf · PDF页11 / 幻灯片11

**语境原文：** 说明

> Number of sites

**语境原文来源：** Week4.pdf · PDF页11 / 幻灯片11

**语境原文：** 说明

> Distance between sites

**语境原文来源：** Week4.pdf · PDF页11 / 幻灯片11

**语境来源：** Week4.pdf · PDF页8,11 / 幻灯片8,11；Week4.pdf · PDF页11 / 幻灯片11

**语境：** Week3 · Design scope

**语境英文：** The boundary of the design work. Decide what kind of network work is included before collecting information.

**语境中文：** 设计范围；先确定是新建网络，还是优化、扩展、整合现有网络。这会影响需要收集的信息。

**语境依据：** 按资料整理

**使用结构：** design scope; define the scope

**语境原文：** 名称或用语片段

> design scope

**语境原文来源：** Week3.pdf · PDF页6 / 幻灯片6

**语境原文：** 教师用语（TXT原片段）

> what is inside the project

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符1608起；搜索“what is inside the project”

**语境来源：** Week3.pdf · PDF页6 / 幻灯片6；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符1608起；搜索“what is inside the project”

**全部来源：** Week4.pdf · PDF页8,11 / 幻灯片8,11；Week4.pdf · PDF页11 / 幻灯片11；Week3.pdf · PDF页6 / 幻灯片6；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符1608起；搜索“what is inside the project”

### New network

**稳定ID：** csit985-w4-66693541cbb961

**类别：** 专业英语

**中文解释：** 新建网络；相对于修改已有网络，通常约束较少，并非毫无约束。

**简单英文（整理解释）：** A project that builds a new network. It usually has fewer constraints than modifying an existing network.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 名称或用语片段

> new

**原文来源：** Week3.pdf · PDF页6 / 幻灯片6

**资料原文：** 教师用语（TXT原片段）

> a green field design

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符2073起；搜索“a green field design”

**资料原文：** 教师用语（TXT原片段）

> business or budget limits

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符2428起；搜索“business or budget limits”

**语境：** Week4 · New network

**语境英文：** A project that builds a new network. It usually has fewer constraints than modifying an existing network.

**语境中文：** 新建网络；相对于修改已有网络，通常约束较少，并非毫无约束。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页9,10 / 幻灯片9,10

**语境：** Week3 · Green field (new) network

**语境英文：** A new network, rather than an improvement to an existing network. A new design can still have business and budget limits.

**语境中文：** 全新网络；本课件用 green field 表示新建，而非改造现有网络。新建仍可能受到业务和预算限制。

**语境依据：** 课件名称与教师补充

**语境原文：** 名称或用语片段

> new

**语境原文来源：** Week3.pdf · PDF页6 / 幻灯片6

**语境原文：** 教师用语（TXT原片段）

> a green field design

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符2073起；搜索“a green field design”

**语境原文：** 教师用语（TXT原片段）

> business or budget limits

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符2428起；搜索“business or budget limits”

**语境来源：** Week3.pdf · PDF页6 / 幻灯片6；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符2073起；搜索“a green field design”；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符2428起；搜索“business or budget limits”

**全部来源：** Week4.pdf · PDF页9,10 / 幻灯片9,10；Week3.pdf · PDF页6 / 幻灯片6；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符2073起；搜索“a green field design”；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符2428起；搜索“business or budget limits”

### Modification of an existing network

**稳定ID：** csit985-w4-a8bc50ac173276

**类别：** 专业英语

**中文解释：** 修改现有网络；现有设备与服务可能限制选择。

**简单英文（整理解释）：** A project that changes a network already in use.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Modification of an existing network

**语境英文：** A project that changes a network already in use.

**语境中文：** 修改现有网络；现有设备与服务可能限制选择。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页9,10 / 幻灯片9,10；Week4_transcript.txt · TXT原始L2，本行字符5224起；搜索“current equipment”

**全部来源：** Week4.pdf · PDF页9,10 / 幻灯片9,10；Week4_transcript.txt · TXT原始L2，本行字符5224起；搜索“current equipment”

### Analysis of network problems

**稳定ID：** csit985-w4-15b2d94423d69a

**类别：** 专业英语

**中文解释：** 网络问题分析；课件列出的项目类型。

**简单英文（整理解释）：** A project that studies problems in a network.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Analysis of network problems

**语境英文：** A project that studies problems in a network.

**语境中文：** 网络问题分析；课件列出的项目类型。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页10 / 幻灯片10

**全部来源：** Week4.pdf · PDF页10 / 幻灯片10

### Initial architecture/design goals

**稳定ID：** csit985-w4-c6524579a1cdcc

**类别：** 专业英语

**中文解释：** 最初架构／设计目标：改善性能、安全、支持新用户／应用／设备或新能力等。

**简单英文（整理解释）：** Early aims, such as better performance, security, support for new users, or a new capability.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Initial architecture/design goals

**语境英文：** Early aims, such as better performance, security, support for new users, or a new capability.

**语境中文：** 最初架构／设计目标：改善性能、安全、支持新用户／应用／设备或新能力等。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页12 / 幻灯片12

**全部来源：** Week4.pdf · PDF页12 / 幻灯片12

### Constraints

**稳定ID：** csit985-w4-9fe2eaff3aa352

**类别：** 专业英语

**中文解释：** 约束；影响设计选择的限制，有些可解除，有些需接受并处理。

**简单英文（整理解释）：** Limits that affect design choices. Some can be removed; others must be worked with.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Constraints

**语境英文：** Limits that affect design choices. Some can be removed; others must be worked with.

**语境中文：** 约束；影响设计选择的限制，有些可解除，有些需接受并处理。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页9,14 / 幻灯片9,14

**全部来源：** Week4.pdf · PDF页9,14 / 幻灯片9,14

### Funding limitations / funding constraints

**稳定ID：** csit985-w4-d8efe2bdfb3531

**类别：** 专业英语

**中文解释：** 资金限制；方案必须符合预算，不是可选条件。

**简单英文（整理解释）：** Limits on money available. The solution must fit these limits.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Funding limitations / funding constraints

**语境英文：** Limits on money available. The solution must fit these limits.

**语境中文：** 资金限制；方案必须符合预算，不是可选条件。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页14 / 幻灯片14

**全部来源：** Week4.pdf · PDF页14 / 幻灯片14

### Organizational constraints

**稳定ID：** csit985-w4-cd22a5c064e4a9

**类别：** 专业英语

**中文解释：** 组织约束：合作对象与各组之间的互动方式。

**简单英文（整理解释）：** Limits related to whom you work with and how groups work together.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Organizational constraints

**语境英文：** Limits related to whom you work with and how groups work together.

**语境中文：** 组织约束：合作对象与各组之间的互动方式。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页14 / 幻灯片14

**全部来源：** Week4.pdf · PDF页14 / 幻灯片14

### Political constraints

**稳定ID：** csit985-w4-bcca1af43a53b5

**类别：** 专业英语

**中文解释：** 政治性约束：用户、管理层或员工的意愿和利益。

**简单英文（整理解释）：** Limits caused by the wishes or interests of users, managers, or staff.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Political constraints

**语境英文：** Limits caused by the wishes or interests of users, managers, or staff.

**语境中文：** 政治性约束：用户、管理层或员工的意愿和利益。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页14 / 幻灯片14

**全部来源：** Week4.pdf · PDF页14 / 幻灯片14

### Customized software

**稳定ID：** csit985-w4-2017efe242a90d

**类别：** 专业英语

**中文解释：** 定制软件；可能限制新技术的选择。基础词义。

**简单英文（整理解释）：** Software changed for a particular user's or organisation's needs.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Customized software

**语境英文：** Software changed for a particular user's or organisation's needs.

**语境中文：** 定制软件；可能限制新技术的选择。基础词义。

**语境依据：** 必要基础释义

**语境来源：** Week4.pdf · PDF页14 / 幻灯片14

**全部来源：** Week4.pdf · PDF页14 / 幻灯片14

### Red-flag user requirements

**稳定ID：** csit985-w4-6808686d99325f

**类别：** 专业英语

**中文解释：** 需求警示信号：滥用 real-time、仅给可用率百分比、无验证的 high-performance、反复不一致或不现实要求。

**简单英文（整理解释）：** Warning signs that requirements lack clear, precise meaning.

**说明依据：** 课件明确

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 说明

> Warning signals in the gathering process generally indicate that there is a lack of precision and clarity in requirements

**原文来源：** Week4.pdf · PDF页17 / 幻灯片17

**语境：** Week4 · Red-flag user requirements

**语境英文：** Warning signs that requirements lack clear, precise meaning.

**语境中文：** 需求警示信号：滥用 real-time、仅给可用率百分比、无验证的 high-performance、反复不一致或不现实要求。

**语境依据：** 课件明确

**语境原文：** 说明

> Warning signals in the gathering process generally indicate that there is a lack of precision and clarity in requirements

**语境原文来源：** Week4.pdf · PDF页17 / 幻灯片17

**语境来源：** Week4.pdf · PDF页17 / 幻灯片17；Week4.pdf · PDF页17 / 幻灯片17

**全部来源：** Week4.pdf · PDF页17 / 幻灯片17；Week4.pdf · PDF页17 / 幻灯片17

### Real-time

**稳定ID：** csit985-w4-e838621514a79b

**类别：** 专业英语

**中文解释：** 实时；课件未给统一时限。需具体说明可测指标与条件，不能仅靠该标签。

**简单英文（整理解释）：** A label listed as a warning when misused and as an indicator of special performance needs. No exact time limit is defined here.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Real-time

**语境英文：** A label listed as a warning when misused and as an indicator of special performance needs. No exact time limit is defined here.

**语境中文：** 实时；课件未给统一时限。需具体说明可测指标与条件，不能仅靠该标签。

**语境依据：** 资料未定义

**语境来源：** Week4.pdf · PDF页17,66 / 幻灯片17,66

**全部来源：** Week4.pdf · PDF页17,66 / 幻灯片17,66

### High-performance

**稳定ID：** csit985-w4-19e24ff1425fb9

**类别：** 专业英语

**中文解释：** 高性能；必须验证需要并明确指标，不能仅接受标签。

**简单英文（整理解释）：** A label for higher performance needs. Verify the need and define measurable targets.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · High-performance

**语境英文：** A label for higher performance needs. Verify the need and define measurable targets.

**语境中文：** 高性能；必须验证需要并明确指标，不能仅接受标签。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页17,18,66 / 幻灯片17,18,66

**全部来源：** Week4.pdf · PDF页17,18,66 / 幻灯片17,18,66

### Performance targets

**稳定ID：** csit985-w4-b2e0ed7b9c46fc

**类别：** 专业英语

**中文解释：** 性能目标；可能需要先测量才能确定。

**简单英文（整理解释）：** The performance levels the new network is expected to meet.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Performance targets

**语境英文：** The performance levels the new network is expected to meet.

**语境中文：** 性能目标；可能需要先测量才能确定。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页18,20 / 幻灯片18,20

**全部来源：** Week4.pdf · PDF页18,20 / 幻灯片18,20

### Multi-tier performance

**稳定ID：** csit985-w4-ba54d6ee05f81d

**类别：** 专业英语

**中文解释：** 多层性能；高低性能需求之间有明确分界。

**简单英文（整理解释）：** Performance needs form separate groups, with a clear threshold between lower and higher needs.

**说明依据：** 课件明确

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 说明

> Hard threshold between low and high performance

**原文来源：** Week4.pdf · PDF页18 / 幻灯片18

**语境：** Week4 · Multi-tier performance

**语境英文：** Performance needs form separate groups, with a clear threshold between lower and higher needs.

**语境中文：** 多层性能；高低性能需求之间有明确分界。

**语境依据：** 课件明确

**语境原文：** 说明

> Hard threshold between low and high performance

**语境原文来源：** Week4.pdf · PDF页18 / 幻灯片18

**语境来源：** Week4.pdf · PDF页18,19 / 幻灯片18,19；Week4.pdf · PDF页18 / 幻灯片18

**全部来源：** Week4.pdf · PDF页18,19 / 幻灯片18,19；Week4.pdf · PDF页18 / 幻灯片18

### Single-tier performance

**稳定ID：** csit985-w4-78f1df536c442e

**类别：** 专业英语

**中文解释：** 单层性能；没有独特的高性能组，没有明确分界。

**简单英文（整理解释）：** Performance needs do not form a distinct higher group; there is no clear threshold.

**说明依据：** 课件明确

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 说明

> No distinctive set

**原文来源：** Week4.pdf · PDF页18 / 幻灯片18

**资料原文：** 说明

> No threshold

**原文来源：** Week4.pdf · PDF页18 / 幻灯片18

**语境：** Week4 · Single-tier performance

**语境英文：** Performance needs do not form a distinct higher group; there is no clear threshold.

**语境中文：** 单层性能；没有独特的高性能组，没有明确分界。

**语境依据：** 课件明确

**语境原文：** 说明

> No distinctive set

**语境原文来源：** Week4.pdf · PDF页18 / 幻灯片18

**语境原文：** 说明

> No threshold

**语境原文来源：** Week4.pdf · PDF页18 / 幻灯片18

**语境来源：** Week4.pdf · PDF页18,19 / 幻灯片18,19；Week4.pdf · PDF页18 / 幻灯片18

**全部来源：** Week4.pdf · PDF页18,19 / 幻灯片18,19；Week4.pdf · PDF页18 / 幻灯片18

### Performance threshold

**稳定ID：** csit985-w4-e14c67775095a3

**类别：** 专业英语

**中文解释：** 性能阈值；图19标为 Performance Threshold。分组依据要有意义。

**简单英文（整理解释）：** A boundary used to separate performance groups.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 活动说明

> Developing thresholds and limits for performance

**原文来源：** Week3.pdf · PDF页44 / 幻灯片44

**语境：** Week4 · Performance threshold

**语境英文：** A boundary used to separate performance groups.

**语境中文：** 性能阈值；图19标为 Performance Threshold。分组依据要有意义。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页18,19 / 幻灯片18,19

**语境：** Week3 · Performance threshold

**语境英文：** A performance boundary used when analyzing requirements. This week gives no numerical threshold or formula.

**语境中文：** 性能阈值；需求分析要建立的性能判断界限。本周没有给出具体数值或公式。

**语境依据：** 按资料整理

**语境原文：** 活动说明

> Developing thresholds and limits for performance

**语境原文来源：** Week3.pdf · PDF页44 / 幻灯片44

**语境来源：** Week3.pdf · PDF页44 / 幻灯片44

**全部来源：** Week4.pdf · PDF页18,19 / 幻灯片18,19；Week3.pdf · PDF页44 / 幻灯片44

### Peak application and device performance

**稳定ID：** csit985-w4-2b658058004dfc

**类别：** 专业英语

**中文解释：** 应用／设备峰值性能；测量结果帮助判断当前性能下降及新网络容量需求。

**简单英文（整理解释）：** The highest performance level measured for applications or devices; it helps assess degradation and future capacity needs.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Peak application and device performance

**语境英文：** The highest performance level measured for applications or devices; it helps assess degradation and future capacity needs.

**语境中文：** 应用／设备峰值性能；测量结果帮助判断当前性能下降及新网络容量需求。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页20 / 幻灯片20

**全部来源：** Week4.pdf · PDF页20 / 幻灯片20

### Testbed network

**稳定ID：** csit985-w4-c5a290c94ffa63

**类别：** 专业英语

**中文解释：** 试验网络；用于检查新技术与组织应用的互动。

**简单英文（整理解释）：** A network used to study how new technology and the organisation's applications work together.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Testbed network

**语境英文：** A network used to study how new technology and the organisation's applications work together.

**语境中文：** 试验网络；用于检查新技术与组织应用的互动。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页21,50 / 幻灯片21,50

**全部来源：** Week4.pdf · PDF页21,50 / 幻灯片21,50

### Existing network

**稳定ID：** csit985-w4-76d3bb42cca211

**类别：** 专业英语

**中文解释：** 现有网络；可用于行为建模及验证已有性能问题。

**简单英文（整理解释）：** The network already in use; measurements can model behaviour and check reported performance problems.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 名称或用语片段

> existing network

**原文来源：** Week3.pdf · PDF页78 / 幻灯片78

**语境：** Week4 · Existing network

**语境英文：** The network already in use; measurements can model behaviour and check reported performance problems.

**语境中文：** 现有网络；可用于行为建模及验证已有性能问题。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页21 / 幻灯片21

**语境：** Week3 · Existing network

**语境英文：** A network that is already in use. The design may improve it, expand it, or connect it to other networks.

**语境中文：** 现有网络；设计时可能需要优化、扩展，或与外部网络整合。

**语境依据：** 按资料整理

**语境原文：** 名称或用语片段

> existing network

**语境原文来源：** Week3.pdf · PDF页78 / 幻灯片78

**语境来源：** Week3.pdf · PDF页6 / 幻灯片6；Week3.pdf · PDF页78 / 幻灯片78

**全部来源：** Week4.pdf · PDF页21 / 幻灯片21；Week3.pdf · PDF页6 / 幻灯片6；Week3.pdf · PDF页78 / 幻灯片78

### Requirements tracking / requirements management

**稳定ID：** csit985-w4-ddc1e49aeda86d

**类别：** 专业英语

**中文解释：** 需求追踪／管理：保持最新、让相关人员可访问、保留变更。

**简单英文（整理解释）：** Keeping requirements current and accessible, while recording changes.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Requirements tracking / requirements management

**语境英文：** Keeping requirements current and accessible, while recording changes.

**语境中文：** 需求追踪／管理：保持最新、让相关人员可访问、保留变更。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页22,23 / 幻灯片22,23

**全部来源：** Week4.pdf · PDF页22,23 / 幻灯片22,23

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

### Fast Ethernet / GigE

**稳定ID：** csit985-w4-cd45d3bc43faf9

**类别：** 专业英语

**中文解释：** 升级示例中的技术名；课件没有定义或列速度，不自行补充。

**简单英文（整理解释）：** Technology names in the upgrade example. The supplied material does not define them or give their speeds.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Fast Ethernet / GigE

**语境英文：** Technology names in the upgrade example. The supplied material does not define them or give their speeds.

**语境中文：** 升级示例中的技术名；课件没有定义或列速度，不自行补充。

**语境依据：** 资料未定义

**语境来源：** Week4.pdf · PDF页25,26 / 幻灯片25,26

**全部来源：** Week4.pdf · PDF页25,26 / 幻灯片25,26

### Workstation

**稳定ID：** csit985-w4-262cac7a42bcd8

**类别：** 专业英语

**中文解释：** 工作站；示例中为用户计算机，未给专门技术定义。

**简单英文（整理解释）：** A user's computer mentioned in the network upgrade example. No special technical definition is given.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 图表标签或原片段（视觉核对）

> workstations with GigE NICs

**原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**语境：** Week4 · Workstation

**语境英文：** A user's computer mentioned in the network upgrade example. No special technical definition is given.

**语境中文：** 工作站；示例中为用户计算机，未给专门技术定义。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页25 / 幻灯片25

**语境：** Week3 · Workstation

**语境英文：** A computer used by engineering users in the example. It has GigE NICs in that example.

**语境中文：** 工作站；示例表指工程用户的设备，并列出 GigE NICs。不是课程为所有设备规定的配置。

**语境依据：** 按图表语境整理

**语境原文：** 图表标签或原片段（视觉核对）

> workstations with GigE NICs

**语境原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**语境来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**全部来源：** Week4.pdf · PDF页25 / 幻灯片25；Week3.pdf · PDF页46 / 幻灯片46（图表）

### Backbone

**稳定ID：** csit985-w4-5ba188e0ca6f2e

**类别：** 专业英语

**中文解释：** 骨干网；需求表要求各区域连接它，未说明具体结构。

**简单英文（整理解释）：** A named part of the network to which building areas must connect. Its structure is not defined here.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 说明

> Services are generally hierarchical

**原文来源：** Week3.pdf · PDF页59 / 幻灯片59

**资料原文：** 说明

> General services in the backbone

**原文来源：** Week3.pdf · PDF页59 / 幻灯片59

**资料原文：** 说明

> Specific services close to users

**原文来源：** Week3.pdf · PDF页59 / 幻灯片59

**资料原文：** 图表标签或原片段（视觉核对）

> Fast Ethernet to BB

**原文来源：** Week3.pdf · PDF页47 / 幻灯片47（图表）

**语境：** Week4 · Backbone

**语境英文：** A named part of the network to which building areas must connect. Its structure is not defined here.

**语境中文：** 骨干网；需求表要求各区域连接它，未说明具体结构。

**语境依据：** 资料未定义

**语境来源：** Week4.pdf · PDF页26 / 幻灯片26

**语境：** Week3 · Backbone

**语境英文：** The main part of the network. The lecture places general services there and more specific services near users.

**语境中文：** 骨干网络；课件说通常在骨干提供一般服务，在靠近用户处提供具体服务。BB 是图中的缩写。

**语境依据：** 按资料语境整理

**语境原文：** 说明

> Services are generally hierarchical

**语境原文来源：** Week3.pdf · PDF页59 / 幻灯片59

**语境原文：** 说明

> General services in the backbone

**语境原文来源：** Week3.pdf · PDF页59 / 幻灯片59

**语境原文：** 说明

> Specific services close to users

**语境原文来源：** Week3.pdf · PDF页59 / 幻灯片59

**语境原文：** 图表标签或原片段（视觉核对）

> Fast Ethernet to BB

**语境原文来源：** Week3.pdf · PDF页47 / 幻灯片47（图表）

**语境来源：** Week3.pdf · PDF页59 / 幻灯片59；Week3.pdf · PDF页47 / 幻灯片47（图表）

**全部来源：** Week4.pdf · PDF页26 / 幻灯片26；Week3.pdf · PDF页59 / 幻灯片59；Week3.pdf · PDF页47 / 幻灯片47（图表）

### Database / Visualization / Manufacturing / Payroll applications

**稳定ID：** csit985-w4-3d0e0300062e2a

**类别：** 专业英语

**中文解释：** 数据库、可视化、制造、工资处理应用；该公司示例认定为关键任务应用，表中仍注明需要更多信息。

**简单英文（整理解释）：** Application categories listed as mission-critical in this company's example; more information is needed.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Database / Visualization / Manufacturing / Payroll applications

**语境英文：** Application categories listed as mission-critical in this company's example; more information is needed.

**语境中文：** 数据库、可视化、制造、工资处理应用；该公司示例认定为关键任务应用，表中仍注明需要更多信息。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页26 / 幻灯片26

**全部来源：** Week4.pdf · PDF页26 / 幻灯片26

### 100% uptime (while in operation)

**稳定ID：** csit985-w4-7af0248ed0e72f

**类别：** 专业英语

**中文解释：** 运行期间100%正常可用；仅指示例工资应用在财务部门与外部工资公司之间运行时的条件。

**简单英文（整理解释）：** The example payroll requirement asks for uninterrupted availability during operation between Finance and the outside payroll company.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 地图文字（范围待核实）

> 100% uptime active

**原文来源：** Week3.pdf · PDF页47 / 幻灯片47（图表）

**资料原文：** 示例条件（图表）

> Payroll application (PAY1) requires 100% availability.

**原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**资料原文：** 图表标签或原片段（视觉核对）

> 100% uptime active

**原文来源：** Week3.pdf · PDF页47 / 幻灯片47（图表）

**资料原文：** 图表标签或原片段（视觉核对）

> 100% availability

**原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**语境：** Week4 · 100% uptime (while in operation)

**语境英文：** The example payroll requirement asks for uninterrupted availability during operation between Finance and the outside payroll company.

**语境中文：** 运行期间100%正常可用；仅指示例工资应用在财务部门与外部工资公司之间运行时的条件。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页26 / 幻灯片26

**语境：** Week3 · 100% uptime (active)

**语境英文：** The map prints 100% uptime active, while the table prints 100% availability. Their measurement period is not specified here.

**语境中文：** 活动期间百分之百运行；图写 100% uptime active，表写 100% availability。二者的测量时段并未在本周统一说明。

**语境依据：** 按图表整理；计量范围待核实

**语境原文：** 地图文字（范围待核实）

> 100% uptime active

**语境原文来源：** Week3.pdf · PDF页47 / 幻灯片47（图表）

**语境原文：** 示例条件（图表）

> Payroll application (PAY1) requires 100% availability.

**语境原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**语境原文：** 图表标签或原片段（视觉核对）

> 100% uptime active

**语境原文来源：** Week3.pdf · PDF页47 / 幻灯片47（图表）

**语境原文：** 图表标签或原片段（视觉核对）

> 100% availability

**语境原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**语境来源：** Week3.pdf · PDF页47 / 幻灯片47（图表）；Week3.pdf · PDF页46 / 幻灯片46（图表）

**全部来源：** Week4.pdf · PDF页26 / 幻灯片26；Week3.pdf · PDF页47 / 幻灯片47（图表）；Week3.pdf · PDF页46 / 幻灯片46（图表）

### Service metrics

**稳定ID：** csit985-w4-1eadc6b99f34fd

**类别：** 专业英语

**中文解释：** 服务指标；用于验证包括外部供应商的网络是否兑现承诺，并区分性能等级。

**简单英文（整理解释）：** Measurements used to check promised service and distinguish performance levels.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 说明

> If the network (including external suppliers) is delivering what it promised

**原文来源：** Week4.pdf · PDF页29 / 幻灯片29

**语境：** Week4 · Service metrics

**语境英文：** Measurements used to check promised service and distinguish performance levels.

**语境中文：** 服务指标；用于验证包括外部供应商的网络是否兑现承诺，并区分性能等级。

**语境依据：** 根据资料整理

**语境原文：** 说明

> If the network (including external suppliers) is delivering what it promised

**语境原文来源：** Week4.pdf · PDF页29 / 幻灯片29

**语境来源：** Week4.pdf · PDF页28,29 / 幻灯片28,29；Week4.pdf · PDF页29 / 幻灯片29

**全部来源：** Week4.pdf · PDF页28,29 / 幻灯片28,29；Week4.pdf · PDF页29 / 幻灯片29

### Bytes in/out / IP packets in/out

**稳定ID：** csit985-w4-32226dbb3c0a3e

**类别：** 专业英语

**中文解释：** 进出字节数／IP数据包数；可描述设备中的测量变量。

**简单英文（整理解释）：** Counts of bytes or IP packets entering and leaving network devices.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Bytes in/out / IP packets in/out

**语境英文：** Counts of bytes or IP packets entering and leaving network devices.

**语境中文：** 进出字节数／IP数据包数；可描述设备中的测量变量。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页29 / 幻灯片29

**全部来源：** Week4.pdf · PDF页29 / 幻灯片29

### Dropped ICMP packets

**稳定ID：** csit985-w4-c789d77f46eb76

**类别：** 专业英语

**中文解释：** 被丢弃的ICMP包；课件列为服务测量变量，未定义ICMP协议全称或机制。

**简单英文（整理解释）：** ICMP packets that are not delivered; listed as a service measurement variable.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Dropped ICMP packets

**语境英文：** ICMP packets that are not delivered; listed as a service measurement variable.

**语境中文：** 被丢弃的ICMP包；课件列为服务测量变量，未定义ICMP协议全称或机制。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页29,61 / 幻灯片29,61

**全部来源：** Week4.pdf · PDF页29,61 / 幻灯片29,61

### SLA metrics

**稳定ID：** csit985-w4-73916e448e8e77

**类别：** 专业英语

**中文解释：** SLA指标；本周资料未展开缩写或正式定义，不补充合约内容。

**简单英文（整理解释）：** A named set of service metrics. SLA is not expanded or defined in the supplied material.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · SLA metrics

**语境英文：** A named set of service metrics. SLA is not expanded or defined in the supplied material.

**语境中文：** SLA指标；本周资料未展开缩写或正式定义，不补充合约内容。

**语境依据：** 资料未定义

**语境来源：** Week4.pdf · PDF页29 / 幻灯片29

**全部来源：** Week4.pdf · PDF页29 / 幻灯片29

### Capacity limits / burst tolerance

**稳定ID：** csit985-w4-d48a5dcb2756e7

**类别：** 专业英语

**中文解释：** 容量上限／突发容忍度；基础词义，课件未给容忍度公式。

**简单英文（整理解释）：** Limits on capacity and the amount of short, heavy traffic that can be handled; listed service variables.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Capacity limits / burst tolerance

**语境英文：** Limits on capacity and the amount of short, heavy traffic that can be handled; listed service variables.

**语境中文：** 容量上限／突发容忍度；基础词义，课件未给容忍度公式。

**语境依据：** 必要基础释义

**语境来源：** Week4.pdf · PDF页29,32 / 幻灯片29,32

**全部来源：** Week4.pdf · PDF页29,32 / 幻灯片29,32

### Capacity

**稳定ID：** csit985-w4-18807209cee7d5

**类别：** 专业英语

**中文解释：** 容量；本周用数据率、数据量、突发量及持续时间等描述。

**简单英文（整理解释）：** A performance measure described here through data rates, data sizes, and bursts.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 名称或用语片段

> capacity

**原文来源：** Week3.pdf · PDF页71 / 幻灯片71

**资料原文：** 名称或用语片段

> Capacity

**原文来源：** Week3.pdf · PDF页74 / 幻灯片74

**语境：** Week4 · Capacity

**语境英文：** A performance measure described here through data rates, data sizes, and bursts.

**语境中文：** 容量；本周用数据率、数据量、突发量及持续时间等描述。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页32,55,56 / 幻灯片32,55,56

**语境：** Week3 · Capacity

**语境英文：** A performance measure emphasized by rate-critical applications. The map also connects it with cost, user numbers, locations, and growth.

**语境中文：** 容量；Rate Critical 关注的性能项。映射图把 Affordability、用户数量、位置及预期增长归入此组；本周未给正式定义。

**语境依据：** 按图表与语境整理

**语境原文：** 名称或用语片段

> capacity

**语境原文来源：** Week3.pdf · PDF页71 / 幻灯片71

**语境原文：** 名称或用语片段

> Capacity

**语境原文来源：** Week3.pdf · PDF页74 / 幻灯片74

**语境来源：** Week3.pdf · PDF页71 / 幻灯片71；Week3.pdf · PDF页74 / 幻灯片74

**全部来源：** Week4.pdf · PDF页32,55,56 / 幻灯片32,55,56；Week3.pdf · PDF页71 / 幻灯片71；Week3.pdf · PDF页74 / 幻灯片74

### Peak data rate

**稳定ID：** csit985-w4-c863f5ae6bf781

**类别：** 专业英语

**中文解释：** 峰值数据率；最高需求或测量值。

**简单英文（整理解释）：** The highest data rate needed or measured.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Peak data rate

**语境英文：** The highest data rate needed or measured.

**语境中文：** 峰值数据率；最高需求或测量值。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页32,55 / 幻灯片32,55；Week4_transcript.txt · TXT原始L2，本行字符31529起；搜索“highest demand”

**全部来源：** Week4.pdf · PDF页32,55 / 幻灯片32,55；Week4_transcript.txt · TXT原始L2，本行字符31529起；搜索“highest demand”

### Sustained data rate

**稳定ID：** csit985-w4-90ca83810d9d79

**类别：** 专业英语

**中文解释：** 持续数据率；随时间持续保持的数据率。

**简单英文（整理解释）：** The data rate that continues over time.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Sustained data rate

**语境英文：** The data rate that continues over time.

**语境中文：** 持续数据率；随时间持续保持的数据率。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页32,55 / 幻灯片32,55；Week4_transcript.txt · TXT原始L2，本行字符31582起；搜索“continue over time”

**全部来源：** Week4.pdf · PDF页32,55 / 幻灯片32,55；Week4_transcript.txt · TXT原始L2，本行字符31582起；搜索“continue over time”

### Minimum data rate

**稳定ID：** csit985-w4-2c3808e2cc2002

**类别：** 专业英语

**中文解释：** 最低数据率；可接受运行所需的最低水平。

**简单英文（整理解释）：** The lowest data rate needed for acceptable operation.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Minimum data rate

**语境英文：** The lowest data rate needed for acceptable operation.

**语境中文：** 最低数据率；可接受运行所需的最低水平。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页32,55 / 幻灯片32,55；Week4_transcript.txt · TXT原始L2，本行字符31665起；搜索“acceptable operation”

**全部来源：** Week4.pdf · PDF页32,55 / 幻灯片32,55；Week4_transcript.txt · TXT原始L2，本行字符31665起；搜索“acceptable operation”

### Data size / burst size / burst duration

**稳定ID：** csit985-w4-65df516771574a

**类别：** 专业英语

**中文解释：** 数据量／突发数据量／突发持续时间；不能只看平均数据率。

**简单英文（整理解释）：** The amount of data, the amount sent in a burst, and how long that burst lasts.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Data size / burst size / burst duration

**语境英文：** The amount of data, the amount sent in a burst, and how long that burst lasts.

**语境中文：** 数据量／突发数据量／突发持续时间；不能只看平均数据率。

**语境依据：** 必要基础释义

**语境来源：** Week4.pdf · PDF页32 / 幻灯片32；Week4_transcript.txt · TXT原始L2，本行字符16695起；搜索“continuously send traffic”

**全部来源：** Week4.pdf · PDF页32 / 幻灯片32；Week4_transcript.txt · TXT原始L2，本行字符16695起；搜索“continuously send traffic”

### End-to-end delay

**稳定ID：** csit985-w4-088cd80e7feeaa

**类别：** 专业英语

**中文解释：** 端到端时延；从源到目的地的时间。

**简单英文（整理解释）：** The time taken to go from the source to the destination.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · End-to-end delay

**语境英文：** The time taken to go from the source to the destination.

**语境中文：** 端到端时延；从源到目的地的时间。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页33 / 幻灯片33；Week4_transcript.txt · TXT原始L2，本行字符17093起；搜索“source to destination”

**全部来源：** Week4.pdf · PDF页33 / 幻灯片33；Week4_transcript.txt · TXT原始L2，本行字符17093起；搜索“source to destination”

### Round trip delay

**稳定ID：** csit985-w4-dd650c7deedda6

**类别：** 专业英语

**中文解释：** 往返时延；包括返回路径，与单向时延不同。

**简单英文（整理解释）：** The time for traffic to go out and return.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 示例条件（图表）

> Requires up to 1Gbps capacity and <50 ms round-trip delay.

**原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**资料原文：** 图表标签或原片段（视觉核对）

> <50 ms round-trip delay

**原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**语境：** Week4 · Round trip delay

**语境英文：** The time for traffic to go out and return.

**语境中文：** 往返时延；包括返回路径，与单向时延不同。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页33 / 幻灯片33；Week4_transcript.txt · TXT原始L2，本行字符17198起；搜索“return path”

**语境：** Week3 · Round-trip delay

**语境英文：** Delay for a round trip. The example requires less than 50 ms, not 50 ms or less.

**语境中文：** 往返时延；示例要求小于 50 ms。保留严格小于，不能改成小于等于；本周没有测量方法。

**语境依据：** 按图表语境整理

**语境原文：** 示例条件（图表）

> Requires up to 1Gbps capacity and <50 ms round-trip delay.

**语境原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**语境原文：** 图表标签或原片段（视觉核对）

> <50 ms round-trip delay

**语境原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**语境来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**全部来源：** Week4.pdf · PDF页33 / 幻灯片33；Week4_transcript.txt · TXT原始L2，本行字符17198起；搜索“return path”；Week3.pdf · PDF页46 / 幻灯片46（图表）

### Latency

**稳定ID：** csit985-w4-bd8f1ea2822855

**类别：** 专业英语

**中文解释：** 时延／延迟；本讲作为一般延迟用语。

**简单英文（整理解释）：** A general term for delay in this lecture.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 名称或用语片段

> latency

**原文来源：** Week1.pdf · PDF页43 / 幻灯片43

**资料原文：** 教师用语（TXT原片段）

> if the latency

**原文来源：** Week 1 - Lecture Rec-transcript.txt · TXT原始L17，本行字符2745起；搜索“if the latency”

**语境：** Week4 · Latency

**语境英文：** A general term for delay in this lecture.

**语境中文：** 时延／延迟；本讲作为一般延迟用语。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页33 / 幻灯片33；Week4_transcript.txt · TXT原始L2，本行字符17235起；搜索“a very general term”

**语境：** Week1 · Latency

**语境英文：** Delay is a concern in core-layer design and prototype testing.

**语境中文：** 时延；核心层要求低时延。教师在原型测试中也关注它。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> latency

**语境原文来源：** Week1.pdf · PDF页43 / 幻灯片43

**语境原文：** 教师用语（TXT原片段）

> if the latency

**语境原文来源：** Week 1 - Lecture Rec-transcript.txt · TXT原始L17，本行字符2745起；搜索“if the latency”

**语境来源：** Week1.pdf · PDF页43 / 幻灯片43；Week 1 - Lecture Rec-transcript.txt · TXT原始L17，本行字符2745起；搜索“if the latency”

**全部来源：** Week4.pdf · PDF页33 / 幻灯片33；Week4_transcript.txt · TXT原始L2，本行字符17235起；搜索“a very general term”；Week1.pdf · PDF页43 / 幻灯片43；Week 1 - Lecture Rec-transcript.txt · TXT原始L17，本行字符2745起；搜索“if the latency”

### Delay variation (jitter)

**稳定ID：** csit985-w4-40504805ed71a9

**类别：** 专业英语

**中文解释：** 时延变化／抖动；语音、视频及时敏流量需要关注。

**简单英文（整理解释）：** Changes in delay; important for voice, video, and time-sensitive traffic.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 名称

> Delay variation (jitter)

**原文来源：** Week4.pdf · PDF页33 / 幻灯片33

**语境：** Week4 · Delay variation (jitter)

**语境英文：** Changes in delay; important for voice, video, and time-sensitive traffic.

**语境中文：** 时延变化／抖动；语音、视频及时敏流量需要关注。

**语境依据：** 根据资料整理

**语境原文：** 名称

> Delay variation (jitter)

**语境原文来源：** Week4.pdf · PDF页33 / 幻灯片33

**语境来源：** Week4.pdf · PDF页33 / 幻灯片33；Week4_transcript.txt · TXT原始L2，本行字符17468起；搜索“time sensitive traffic”；Week4.pdf · PDF页33 / 幻灯片33

**全部来源：** Week4.pdf · PDF页33 / 幻灯片33；Week4_transcript.txt · TXT原始L2，本行字符17468起；搜索“time sensitive traffic”；Week4.pdf · PDF页33 / 幻灯片33

### Management protocols / MIBs (Management Information Base)

**稳定ID：** csit985-w4-45175eb536ae44

**类别：** 专业英语

**中文解释：** 管理协议／管理信息库；资料提到可用于测量，未解释内部机制。

**简单英文（整理解释）：** Named sources of network measurements; MIB is expanded, but their internal operation is not defined.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Management protocols / MIBs (Management Information Base)

**语境英文：** Named sources of network measurements; MIB is expanded, but their internal operation is not defined.

**语境中文：** 管理协议／管理信息库；资料提到可用于测量，未解释内部机制。

**语境依据：** 资料未定义

**语境来源：** Week4.pdf · PDF页34 / 幻灯片34

**全部来源：** Week4.pdf · PDF页34 / 幻灯片34

### PING (Packet InterNet Groper)

**稳定ID：** csit985-w4-ad953df41dab8d

**类别：** 专业英语

**中文解释：** 可测时延与丢包的工具；全称按课件保留，不将其认定为已核实的标准名称。

**简单英文（整理解释）：** A named tool that can measure delay and packet loss. This expansion is the spelling given on the slide.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 名称

> PING (Packet InterNet Groper)

**原文来源：** Week4.pdf · PDF页34 / 幻灯片34

**资料原文：** 说明

> Can be used to measure delays and packet losses

**原文来源：** Week4.pdf · PDF页34 / 幻灯片34

**语境：** Week4 · PING (Packet InterNet Groper)

**语境英文：** A named tool that can measure delay and packet loss. This expansion is the spelling given on the slide.

**语境中文：** 可测时延与丢包的工具；全称按课件保留，不将其认定为已核实的标准名称。

**语境依据：** 根据资料整理

**语境原文：** 名称

> PING (Packet InterNet Groper)

**语境原文来源：** Week4.pdf · PDF页34 / 幻灯片34

**语境原文：** 说明

> Can be used to measure delays and packet losses

**语境原文来源：** Week4.pdf · PDF页34 / 幻灯片34

**语境来源：** Week4.pdf · PDF页34 / 幻灯片34；Week4_transcript.txt · TXT原始L2，本行字符18178起；搜索“one ping”；Week4.pdf · PDF页34 / 幻灯片34

**全部来源：** Week4.pdf · PDF页34 / 幻灯片34；Week4_transcript.txt · TXT原始L2，本行字符18178起；搜索“one ping”；Week4.pdf · PDF页34 / 幻灯片34

### Traceroute

**稳定ID：** csit985-w4-e0988c09ccda51

**类别：** 专业英语

**中文解释：** 路由追踪；课件含逐链路容量测量说法，TXT只补充路径与时延。容量能力待核实。

**简单英文（整理解释）：** The PDF says it combines delay, per-link capacity measurements, and path traces. The TXT discusses paths and delay; the capacity claim is not confirmed.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 说明

> Combines delay measurements, per link capacity measurements with path traces

**原文来源：** Week4.pdf · PDF页34 / 幻灯片34

**语境：** Week4 · Traceroute

**语境英文：** The PDF says it combines delay, per-link capacity measurements, and path traces. The TXT discusses paths and delay; the capacity claim is not confirmed.

**语境中文：** 路由追踪；课件含逐链路容量测量说法，TXT只补充路径与时延。容量能力待核实。

**语境依据：** 根据资料整理

**语境原文：** 说明

> Combines delay measurements, per link capacity measurements with path traces

**语境原文来源：** Week4.pdf · PDF页34 / 幻灯片34

**语境来源：** Week4.pdf · PDF页34 / 幻灯片34；Week4_transcript.txt · TXT原始L2，本行字符18090起；搜索“gives the lay information”；Week4.pdf · PDF页34 / 幻灯片34

**全部来源：** Week4.pdf · PDF页34 / 幻灯片34；Week4_transcript.txt · TXT原始L2，本行字符18090起；搜索“gives the lay information”；Week4.pdf · PDF页34 / 幻灯片34

### Packet loss / path trace / per-link capacity

**稳定ID：** csit985-w4-c00c3bba0c29f7

**类别：** 专业英语

**中文解释：** 丢包／路径追踪／逐链路容量；基础词义，不替课件验证工具能力。

**简单英文（整理解释）：** Packets not delivered, a record of the path followed, and capacity for each link. These are measurement expressions.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Packet loss / path trace / per-link capacity

**语境英文：** Packets not delivered, a record of the path followed, and capacity for each link. These are measurement expressions.

**语境中文：** 丢包／路径追踪／逐链路容量；基础词义，不替课件验证工具能力。

**语境依据：** 必要基础释义

**语境来源：** Week4.pdf · PDF页34 / 幻灯片34

**全部来源：** Week4.pdf · PDF页34 / 幻灯片34

### Characterising behaviour / Characterizing behavior

**稳定ID：** csit985-w4-2b369c34d8fa30

**类别：** 专业英语

**中文解释：** 描述用户和应用如何使用网络；英式／美式拼写同义。

**简单英文（整理解释）：** Describe how users and applications use the network. Both spellings appear in the material.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Characterising behaviour / Characterizing behavior

**语境英文：** Describe how users and applications use the network. Both spellings appear in the material.

**语境中文：** 描述用户和应用如何使用网络；英式／美式拼写同义。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页3,36 / 幻灯片3,36

**全部来源：** Week4.pdf · PDF页3,36 / 幻灯片3,36

### User behaviour / application behaviour / network behaviour

**稳定ID：** csit985-w4-153199a1aaa8d2

**类别：** 专业英语

**中文解释：** 用户行为／应用行为／网络行为；三类分析对象，PDF主要细化前两者。

**简单英文（整理解释）：** Three types of behaviour considered in analysis. The PDF names them; it gives detail mainly for users and applications.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · User behaviour / application behaviour / network behaviour

**语境英文：** Three types of behaviour considered in analysis. The PDF names them; it gives detail mainly for users and applications.

**语境中文：** 用户行为／应用行为／网络行为；三类分析对象，PDF主要细化前两者。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页36,38,40 / 幻灯片36,38,40

**全部来源：** Week4.pdf · PDF页36,38,40 / 幻灯片36,38,40

### Simulation / modelling

**稳定ID：** csit985-w4-3cf3a90b69edb4

**类别：** 专业英语

**中文解释：** 仿真／建模；预测需求及数据流，可从简单近似到复杂表示。

**简单英文（整理解释）：** Using a representation to predict requirements and flows. It can be a simple approximation or a complex model.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Simulation / modelling

**语境英文：** Using a representation to predict requirements and flows. It can be a simple approximation or a complex model.

**语境中文：** 仿真／建模；预测需求及数据流，可从简单近似到复杂表示。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页37 / 幻灯片37

**全部来源：** Week4.pdf · PDF页37 / 幻灯片37

### Frequency of usage / average length of usage session

**稳定ID：** csit985-w4-41a80fdac87711

**类别：** 专业英语

**中文解释：** 使用频率／平均会话时长；描述用户行为的两个维度。

**简单英文（整理解释）：** How often an application is used and how long a session lasts on average.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Frequency of usage / average length of usage session

**语境英文：** How often an application is used and how long a session lasts on average.

**语境中文：** 使用频率／平均会话时长；描述用户行为的两个维度。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页38 / 幻灯片38

**全部来源：** Week4.pdf · PDF页38 / 幻灯片38

### Simultaneous sessions / application sessions

**稳定ID：** csit985-w4-f33a6d05946cd8

**类别：** 专业英语

**中文解释：** 并发会话／应用会话；总注册用户数不等于同一时间使用应用的人数。

**简单英文（整理解释）：** Application sessions happening at the same time / periods of application use.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Simultaneous sessions / application sessions

**语境英文：** Application sessions happening at the same time / periods of application use.

**语境中文：** 并发会话／应用会话；总注册用户数不等于同一时间使用应用的人数。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页38,39 / 幻灯片38,39；Week4_transcript.txt · TXT原始L2，本行字符19977起；搜索“registered users”

**全部来源：** Week4.pdf · PDF页38,39 / 幻灯片38,39；Week4_transcript.txt · TXT原始L2，本行字符19977起；搜索“registered users”

### Heuristic for scaling expected performance

**稳定ID：** csit985-w4-3e9dd9a3d7691d

**类别：** 专业英语

**中文解释：** 估算性能规模的经验方法；用户行为数据可提供经验依据，不是精确保证。

**简单英文（整理解释）：** A practical guide for estimating how performance needs change with use. It is not an exact guarantee.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 说明

> Provides us with a heuristic for scaling expected performance

**原文来源：** Week4.pdf · PDF页38 / 幻灯片38

**语境：** Week4 · Heuristic for scaling expected performance

**语境英文：** A practical guide for estimating how performance needs change with use. It is not an exact guarantee.

**语境中文：** 估算性能规模的经验方法；用户行为数据可提供经验依据，不是精确保证。

**语境依据：** 必要基础释义

**语境原文：** 说明

> Provides us with a heuristic for scaling expected performance

**语境原文来源：** Week4.pdf · PDF页38 / 幻灯片38

**语境来源：** Week4.pdf · PDF页38 / 幻灯片38；Week4.pdf · PDF页38 / 幻灯片38

**全部来源：** Week4.pdf · PDF页38 / 幻灯片38；Week4.pdf · PDF页38 / 幻灯片38

### Peak concurrency

**稳定ID：** csit985-w4-68270c56d1dccb

**类别：** 专业英语

**中文解释：** 峰值并发量；教师强调应看同时活跃会话，不只看总使用量。

**简单英文（整理解释）：** The highest number of sessions active at the same time. The teacher uses it to explain capacity planning.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Peak concurrency

**语境英文：** The highest number of sessions active at the same time. The teacher uses it to explain capacity planning.

**语境中文：** 峰值并发量；教师强调应看同时活跃会话，不只看总使用量。

**语境依据：** 教师补充

**语境来源：** Week4_transcript.txt · TXT原始L2，本行字符20936起；搜索“peak concurrency”

**全部来源：** Week4_transcript.txt · TXT原始L2，本行字符20936起；搜索“peak concurrency”

### Traffic flow characteristics

**稳定ID：** csit985-w4-211dd6e12a0510

**类别：** 专业英语

**中文解释：** 流量特征；应用行为分析需考虑。

**简单英文（整理解释）：** Features of the traffic an application creates.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Traffic flow characteristics

**语境英文：** Features of the traffic an application creates.

**语境中文：** 流量特征；应用行为分析需考虑。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页40 / 幻灯片40

**全部来源：** Week4.pdf · PDF页40 / 幻灯片40

### Multicasting requirements

**稳定ID：** csit985-w4-485b8cc3c04fb7

**类别：** 专业英语

**中文解释：** 组播需求；课件列出名称，未解释机制。

**简单英文（整理解释）：** A named application requirement; the PDF does not define multicasting or its mechanism.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Multicasting requirements

**语境英文：** A named application requirement; the PDF does not define multicasting or its mechanism.

**语境中文：** 组播需求；课件列出名称，未解释机制。

**语境依据：** 资料未定义

**语境来源：** Week4.pdf · PDF页40 / 幻灯片40

**全部来源：** Week4.pdf · PDF页40 / 幻灯片40

### RMA (Reliability, Maintainability, Availability)

**稳定ID：** csit985-w4-0b087bf9cbf67b

**类别：** 专业英语

**中文解释：** 可靠性、可维护性、可用性；分别关注故障频率、恢复时间及两者关系。

**简单英文（整理解释）：** Three related performance concerns: failure frequency, time to restore service, and the relationship between them.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 名称或用语片段

> rma

**原文来源：** Week3.pdf · PDF页71 / 幻灯片71

**资料原文：** 名称或用语片段

> RMA

**原文来源：** Week3.pdf · PDF页72 / 幻灯片72

**资料原文：** 教师用语（TXT原片段）

> reliability, maintainability, and availability

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符7711起；搜索“reliability, maintainability, and availability”

**语境：** Week4 · RMA (Reliability, Maintainability, Availability)

**语境英文：** Three related performance concerns: failure frequency, time to restore service, and the relationship between them.

**语境中文：** 可靠性、可维护性、可用性；分别关注故障频率、恢复时间及两者关系。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页30,31,42,43,44 / 幻灯片30,31,42,43,44

**语境：** Week3 · RMA (Reliability, Maintainability, Availability)

**语境英文：** Three related performance concepts used for mission-critical applications. This week gives no calculation formula.

**语境中文：** 可靠性、可维修性、可用性；Mission Critical 部分介绍的三个相关性能概念。本周没有 RMA 计算公式。

**语境依据：** 按资料整理

**语境原文：** 名称或用语片段

> rma

**语境原文来源：** Week3.pdf · PDF页71 / 幻灯片71

**语境原文：** 名称或用语片段

> RMA

**语境原文来源：** Week3.pdf · PDF页72 / 幻灯片72

**语境原文：** 教师用语（TXT原片段）

> reliability, maintainability, and availability

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符7711起；搜索“reliability, maintainability, and availability”

**语境来源：** Week3.pdf · PDF页71 / 幻灯片71；Week3.pdf · PDF页72 / 幻灯片72；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符7711起；搜索“reliability, maintainability, and availability”

**全部来源：** Week4.pdf · PDF页30,31,42,43,44 / 幻灯片30,31,42,43,44；Week3.pdf · PDF页71 / 幻灯片71；Week3.pdf · PDF页72 / 幻灯片72；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符7711起；搜索“reliability, maintainability, and availability”

### Reliability (R)

**稳定ID：** csit985-w4-df0de429fbe7db

**类别：** 专业英语

**中文解释：** 可靠性；故障频率的统计指标。复杂系统中MTBCF更关注重要故障。

**简单英文（整理解释）：** A statistical indicator of how often failure occurs. For complex systems, MTBCF focuses on significant failures.

**说明依据：** 课件明确

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> A statistical indicator of the frequency of failure

**原文来源：** Week4.pdf · PDF页42 / 幻灯片42

**资料原文：** 名称或用语片段

> reliability

**原文来源：** Week1.pdf · PDF页43 / 幻灯片43

**资料原文：** 定义

> Reliability – statistical measure of frequency of failure; unscheduled outages

**原文来源：** Week3.pdf · PDF页72 / 幻灯片72

**资料原文：** 解释问句

> R - how often does it break?

**原文来源：** Week3.pdf · PDF页72 / 幻灯片72

**语境：** Week4 · Reliability (R)

**语境英文：** A statistical indicator of how often failure occurs. For complex systems, MTBCF focuses on significant failures.

**语境中文：** 可靠性；故障频率的统计指标。复杂系统中MTBCF更关注重要故障。

**语境依据：** 课件明确

**语境原文：** 定义

> A statistical indicator of the frequency of failure

**语境原文来源：** Week4.pdf · PDF页42 / 幻灯片42

**语境来源：** Week4.pdf · PDF页42 / 幻灯片42；Week4.pdf · PDF页42 / 幻灯片42

**语境：** Week1 · Reliability

**语境英文：** A desired property of the core layer. This week gives no measure or formula.

**语境中文：** 可靠性；本周列为核心层的特征，未给测量公式。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> reliability

**语境原文来源：** Week1.pdf · PDF页43 / 幻灯片43

**语境来源：** Week1.pdf · PDF页43 / 幻灯片43

**语境：** Week3 · Reliability (R)

**语境英文：** A statistical measure of failure frequency and unscheduled outages: how often does it break?

**语境中文：** RMA 中的可靠性；失效频率及非计划停机的统计度量，回答“多久坏一次”。

**语境依据：** 按课件定义整理

**语境原文：** 定义

> Reliability – statistical measure of frequency of failure; unscheduled outages

**语境原文来源：** Week3.pdf · PDF页72 / 幻灯片72

**语境原文：** 解释问句

> R - how often does it break?

**语境原文来源：** Week3.pdf · PDF页72 / 幻灯片72

**语境来源：** Week3.pdf · PDF页72 / 幻灯片72

**全部来源：** Week4.pdf · PDF页42 / 幻灯片42；Week4.pdf · PDF页42 / 幻灯片42；Week1.pdf · PDF页43 / 幻灯片43；Week3.pdf · PDF页72 / 幻灯片72

### MTBF (Mean Time Between Failures)

**稳定ID：** csit985-w4-efdf0f9e5e656f

**类别：** 专业英语

**中文解释：** 平均故障间隔时间。

**简单英文（整理解释）：** The mean time between failures.

**说明依据：** 课件明确

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 名称

> Mean time between failures (MTBF)

**原文来源：** Week4.pdf · PDF页30 / 幻灯片30

**语境：** Week4 · MTBF (Mean Time Between Failures)

**语境英文：** The mean time between failures.

**语境中文：** 平均故障间隔时间。

**语境依据：** 课件明确

**语境原文：** 名称

> Mean time between failures (MTBF)

**语境原文来源：** Week4.pdf · PDF页30 / 幻灯片30

**语境来源：** Week4.pdf · PDF页30,31,44 / 幻灯片30,31,44；Week4.pdf · PDF页30 / 幻灯片30

**全部来源：** Week4.pdf · PDF页30,31,44 / 幻灯片30,31,44；Week4.pdf · PDF页30 / 幻灯片30

### MTBCF (Mean Time between Mission-Critical Failures)

**稳定ID：** csit985-w4-614784d373a686

**类别：** 专业英语

**中文解释：** 平均关键任务故障间隔时间；复杂系统中用于聚焦重要故障。

**简单英文（整理解释）：** The mean time between failures of mission-critical service; useful for complex systems.

**说明依据：** 课件明确

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 名称

> Mean time between mission critical failures (MTBCF)

**原文来源：** Week4.pdf · PDF页30 / 幻灯片30

**语境：** Week4 · MTBCF (Mean Time between Mission-Critical Failures)

**语境英文：** The mean time between failures of mission-critical service; useful for complex systems.

**语境中文：** 平均关键任务故障间隔时间；复杂系统中用于聚焦重要故障。

**语境依据：** 课件明确

**语境原文：** 名称

> Mean time between mission critical failures (MTBCF)

**语境原文来源：** Week4.pdf · PDF页30 / 幻灯片30

**语境来源：** Week4.pdf · PDF页30,31,42,44 / 幻灯片30,31,42,44；Week4.pdf · PDF页30 / 幻灯片30

**全部来源：** Week4.pdf · PDF页30,31,42,44 / 幻灯片30,31,42,44；Week4.pdf · PDF页30 / 幻灯片30

### Failure rate / invert the sum

**稳定ID：** csit985-w4-1c9caccad20ecd

**类别：** 专业英语

**中文解释：** 故障率／总和取倒数；课件称常将故障率相加后取倒数，未说明适用模型，不当作所有系统通则。

**简单英文（整理解释）：** The rate of failures / take the inverse of their sum. The slide describes this as a way reliability is often calculated, without stating model assumptions.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Failure rate / invert the sum

**语境英文：** The rate of failures / take the inverse of their sum. The slide describes this as a way reliability is often calculated, without stating model assumptions.

**语境中文：** 故障率／总和取倒数；课件称常将故障率相加后取倒数，未说明适用模型，不当作所有系统通则。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页42 / 幻灯片42

**全部来源：** Week4.pdf · PDF页42 / 幻灯片42

### Maintainability (M)

**稳定ID：** csit985-w4-05260f3d104c52

**类别：** 专业英语

**中文解释：** 可维护性；恢复系统完全运行状态所需时间的统计衡量。

**简单英文（整理解释）：** A statistical measure of the time needed to restore a system to full operation.

**说明依据：** 课件明确

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Statistical measurement of the time taken to restore system to full operational status

**原文来源：** Week4.pdf · PDF页43 / 幻灯片43

**资料原文：** 定义

> Maintainability - statistical measure of the time it takes to repair the fault

**原文来源：** Week3.pdf · PDF页72 / 幻灯片72

**资料原文：** 解释问句

> M - when it does break, how long does it take to get back online?

**原文来源：** Week3.pdf · PDF页72 / 幻灯片72

**语境：** Week4 · Maintainability (M)

**语境英文：** A statistical measure of the time needed to restore a system to full operation.

**语境中文：** 可维护性；恢复系统完全运行状态所需时间的统计衡量。

**语境依据：** 课件明确

**语境原文：** 定义

> Statistical measurement of the time taken to restore system to full operational status

**语境原文来源：** Week4.pdf · PDF页43 / 幻灯片43

**语境来源：** Week4.pdf · PDF页43 / 幻灯片43；Week4.pdf · PDF页43 / 幻灯片43

**语境：** Week3 · Maintainability (M)

**语境英文：** A statistical measure of the time needed to repair a fault.

**语境中文：** 可维修性；修复故障所需时间的统计度量，回答“坏了之后多久恢复上线”。

**语境依据：** 按课件定义整理

**语境原文：** 定义

> Maintainability - statistical measure of the time it takes to repair the fault

**语境原文来源：** Week3.pdf · PDF页72 / 幻灯片72

**语境原文：** 解释问句

> M - when it does break, how long does it take to get back online?

**语境原文来源：** Week3.pdf · PDF页72 / 幻灯片72

**语境来源：** Week3.pdf · PDF页72 / 幻灯片72

**全部来源：** Week4.pdf · PDF页43 / 幻灯片43；Week4.pdf · PDF页43 / 幻灯片43；Week3.pdf · PDF页72 / 幻灯片72

### MTTR (Mean Time To Repair)

**稳定ID：** csit985-w4-4c4319b385f68b

**类别：** 专业英语

**中文解释：** 平均修复时间；可包含故障发现与隔离、零件送达、更换、测试和恢复服务。TXT的MTDR等疑似转写错误以PDF为准。

**简单英文（整理解释）：** The mean time needed for repair. Repair time may include finding the fault, obtaining parts, replacement, testing, and service restoration.

**说明依据：** 课件明确

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 名称

> Mean time to repair (MTTR)

**原文来源：** Week4.pdf · PDF页30 / 幻灯片30

**语境：** Week4 · MTTR (Mean Time To Repair)

**语境英文：** The mean time needed for repair. Repair time may include finding the fault, obtaining parts, replacement, testing, and service restoration.

**语境中文：** 平均修复时间；可包含故障发现与隔离、零件送达、更换、测试和恢复服务。TXT的MTDR等疑似转写错误以PDF为准。

**语境依据：** 课件明确

**语境原文：** 名称

> Mean time to repair (MTTR)

**语境原文来源：** Week4.pdf · PDF页30 / 幻灯片30

**语境来源：** Week4.pdf · PDF页30,31,43,44 / 幻灯片30,31,43,44；Week4.pdf · PDF页30 / 幻灯片30

**全部来源：** Week4.pdf · PDF页30,31,43,44 / 幻灯片30,31,43,44；Week4.pdf · PDF页30 / 幻灯片30

### Detection and isolation of the failure

**稳定ID：** csit985-w4-293a20cb53f821

**类别：** 专业英语

**中文解释：** 故障检测与隔离；修复时间中的步骤，资料未进一步定义隔离方法。

**简单英文（整理解释）：** Find a failure and locate or separate its cause as part of repair.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Detection and isolation of the failure

**语境英文：** Find a failure and locate or separate its cause as part of repair.

**语境中文：** 故障检测与隔离；修复时间中的步骤，资料未进一步定义隔离方法。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页43 / 幻灯片43

**全部来源：** Week4.pdf · PDF页43 / 幻灯片43

### Replacement of component / restoration of service

**稳定ID：** csit985-w4-a59a0c59f2d998

**类别：** 专业英语

**中文解释：** 部件更换／服务恢复；并非换完部件就完成全部修复。

**简单英文（整理解释）：** Change a faulty part / bring the service back into operation.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Replacement of component / restoration of service

**语境英文：** Change a faulty part / bring the service back into operation.

**语境中文：** 部件更换／服务恢复；并非换完部件就完成全部修复。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页43 / 幻灯片43

**全部来源：** Week4.pdf · PDF页43 / 幻灯片43

### Availability (A), RMA formula

**稳定ID：** csit985-w4-ad58f2a0da6df2

**类别：** 专业英语

**中文解释：** RMA可用性公式；按课件不含计划维护，不必然等于全部日历时间的运行百分比。两种公式的选用需看故障口径。

**简单英文（整理解释）：** The relationship between time between failures and repair time: A = MTBCF/(MTBCF+MTTR), or MTBF/(MTBF+MTTR). Scheduled maintenance is excluded here.

**说明依据：** 课件明确

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Relationship between frequency of mission critical failures and time to restore service

**原文来源：** Week4.pdf · PDF页44 / 幻灯片44

**资料原文：** 规则

> A = (MTBCF)/(MTBCF + MTTR)

**原文来源：** Week4.pdf · PDF页44 / 幻灯片44

**资料原文：** 规则

> A = (MTBF)/(MTBF+MTTR)

**原文来源：** Week4.pdf · PDF页44 / 幻灯片44

**资料原文：** 规则

> Scheduled maintenance is NOT included

**原文来源：** Week4.pdf · PDF页44 / 幻灯片44

**资料原文：** 名称或用语片段

> availability

**原文来源：** Week1.pdf · PDF页43 / 幻灯片43

**资料原文：** 名称或用语片段

> availability

**原文来源：** Week1.pdf · PDF页44 / 幻灯片44

**资料原文：** 名称或用语片段

> availability

**原文来源：** Week1.pdf · PDF页50 / 幻灯片50

**资料原文：** 定义

> Availability – the relationship between R and M

**原文来源：** Week3.pdf · PDF页72 / 幻灯片72

**语境：** Week4 · Availability (A), RMA formula

**语境英文：** The relationship between time between failures and repair time: A = MTBCF/(MTBCF+MTTR), or MTBF/(MTBF+MTTR). Scheduled maintenance is excluded here.

**语境中文：** RMA可用性公式；按课件不含计划维护，不必然等于全部日历时间的运行百分比。两种公式的选用需看故障口径。

**语境依据：** 课件明确

**语境原文：** 定义

> Relationship between frequency of mission critical failures and time to restore service

**语境原文来源：** Week4.pdf · PDF页44 / 幻灯片44

**语境原文：** 规则

> A = (MTBCF)/(MTBCF + MTTR)

**语境原文来源：** Week4.pdf · PDF页44 / 幻灯片44

**语境原文：** 规则

> A = (MTBF)/(MTBF+MTTR)

**语境原文来源：** Week4.pdf · PDF页44 / 幻灯片44

**语境原文：** 规则

> Scheduled maintenance is NOT included

**语境原文来源：** Week4.pdf · PDF页44 / 幻灯片44

**语境来源：** Week4.pdf · PDF页44 / 幻灯片44；Week4.pdf · PDF页44 / 幻灯片44

**语境：** Week1 · Availability

**语境英文：** A desired property of the core and access layers. No exact target is given.

**语境中文：** 可用性；核心层与接入层均要求高可用性，本周未给公式或具体百分比。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> availability

**语境原文来源：** Week1.pdf · PDF页43 / 幻灯片43

**语境原文：** 名称或用语片段

> availability

**语境原文来源：** Week1.pdf · PDF页44 / 幻灯片44

**语境原文：** 名称或用语片段

> availability

**语境原文来源：** Week1.pdf · PDF页50 / 幻灯片50

**语境来源：** Week1.pdf · PDF页43 / 幻灯片43；Week1.pdf · PDF页44 / 幻灯片44；Week1.pdf · PDF页50 / 幻灯片50

**语境：** Week3 · Availability (A)

**语境英文：** The relationship between reliability and maintainability. The slide gives no formula here.

**语境中文：** 可用性；第72页定义为 R 与 M 的关系。本周只给关系说明，没有给出公式或百分比算法。

**语境依据：** 按课件定义整理

**语境原文：** 定义

> Availability – the relationship between R and M

**语境原文来源：** Week3.pdf · PDF页72 / 幻灯片72

**语境来源：** Week3.pdf · PDF页72 / 幻灯片72

**全部来源：** Week4.pdf · PDF页44 / 幻灯片44；Week4.pdf · PDF页44 / 幻灯片44；Week1.pdf · PDF页43 / 幻灯片43；Week1.pdf · PDF页44 / 幻灯片44；Week1.pdf · PDF页50 / 幻灯片50；Week3.pdf · PDF页72 / 幻灯片72

### Scheduled maintenance

**稳定ID：** csit985-w4-781e2d6d00860e

**类别：** 专业英语

**中文解释：** 计划维护；课件公式不计入，可安排于不需关键功能时；预先换易故障部件可改善可靠性。

**简单英文（整理解释）：** Planned maintenance. The slide excludes it from its availability formula and says it can occur when critical functions are not needed.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Scheduled maintenance

**语境英文：** Planned maintenance. The slide excludes it from its availability formula and says it can occur when critical functions are not needed.

**语境中文：** 计划维护；课件公式不计入，可安排于不需关键功能时；预先换易故障部件可改善可靠性。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页44 / 幻灯片44

**全部来源：** Week4.pdf · PDF页44 / 幻灯片44

### Uptime / up-time

**稳定ID：** csit985-w4-7689edd00527ad

**类别：** 专业英语

**中文解释：** 正常可用时间；需说明是基本连接还是完整应用运行，并明确测量周期。

**简单英文（整理解释）：** Time when the system is available to a user, application, or device. Define whether this means connectivity or full application operation.

**说明依据：** 课件明确

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Uptime is the time when the system is available to the user/application/device

**原文来源：** Week4.pdf · PDF页45 / 幻灯片45

**语境：** Week4 · Uptime / up-time

**语境英文：** Time when the system is available to a user, application, or device. Define whether this means connectivity or full application operation.

**语境中文：** 正常可用时间；需说明是基本连接还是完整应用运行，并明确测量周期。

**语境依据：** 课件明确

**语境原文：** 定义

> Uptime is the time when the system is available to the user/application/device

**语境原文来源：** Week4.pdf · PDF页45 / 幻灯片45

**语境来源：** Week4.pdf · PDF页31,45,51 / 幻灯片31,45,51；Week4.pdf · PDF页45 / 幻灯片45

**全部来源：** Week4.pdf · PDF页31,45,51 / 幻灯片31,45,51；Week4.pdf · PDF页45 / 幻灯片45

### Downtime / down-time

**稳定ID：** csit985-w4-ae351e34407ee9

**类别：** 专业英语

**中文解释：** 不可用时间／停机时间；需定义服务、范围和周期，短暂故障也需计入适用口径。

**简单英文（整理解释）：** Time when the required service is unavailable. The scope and measurement period must be stated.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Downtime / down-time

**语境英文：** Time when the required service is unavailable. The scope and measurement period must be stated.

**语境中文：** 不可用时间／停机时间；需定义服务、范围和周期，短暂故障也需计入适用口径。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页31,45,49,51 / 幻灯片31,45,49,51

**全部来源：** Week4.pdf · PDF页31,45,49,51 / 幻灯片31,45,49,51

### Amount of allowed downtime / allowable downtime

**稳定ID：** csit985-w4-03dfe188983f74

**类别：** 专业英语

**中文解释：** 允许停机时长；由给定周期的正常可用率目标对应，不代表故障可任意集中发生。

**简单英文（整理解释）：** How much unavailable time an uptime target permits during a stated period.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Amount of allowed downtime / allowable downtime

**语境英文：** How much unavailable time an uptime target permits during a stated period.

**语境中文：** 允许停机时长；由给定周期的正常可用率目标对应，不代表故障可任意集中发生。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页45,46,51 / 幻灯片45,46,51

**全部来源：** Week4.pdf · PDF页45,46,51 / 幻灯片45,46,51

### Four-nines (99.99%) / five-nines (99.999%)

**稳定ID：** csit985-w4-7ef44a0d1fa576

**类别：** 专业英语

**中文解释：** 四个9／五个9；上述为课件近似值，需明确周期与测量点，不能只报百分比。

**简单英文（整理解释）：** Availability targets shown in the lecture. The table gives about 53 / 5.3 minutes per year and about 1 minute / 6 seconds per week.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Four-nines (99.99%) / five-nines (99.999%)

**语境英文：** Availability targets shown in the lecture. The table gives about 53 / 5.3 minutes per year and about 1 minute / 6 seconds per week.

**语境中文：** 四个9／五个9；上述为课件近似值，需明确周期与测量点，不能只报百分比。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页45,46,47,51 / 幻灯片45,46,47,51

**全部来源：** Week4.pdf · PDF页45,46,47,51 / 幻灯片45,46,47,51

### Transients / rerouting / congestion

**稳定ID：** csit985-w4-4f3082ea64da4b

**类别：** 专业英语

**中文解释：** 短暂现象／重新路由／拥塞；基础词义，课件列为可能持续几秒的短暂中断因素。

**简单英文（整理解释）：** Brief effects / changing a traffic route / traffic crowding. The slide names rerouting and congestion as examples of brief disruption.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Transients / rerouting / congestion

**语境英文：** Brief effects / changing a traffic route / traffic crowding. The slide names rerouting and congestion as examples of brief disruption.

**语境中文：** 短暂现象／重新路由／拥塞；基础词义，课件列为可能持续几秒的短暂中断因素。

**语境依据：** 必要基础释义

**语境来源：** Week4.pdf · PDF页47 / 幻灯片47

**全部来源：** Week4.pdf · PDF页47 / 幻灯片47

### System outage / minor interruption

**稳定ID：** csit985-w4-5581f551e3472f

**类别：** 专业英语

**中文解释：** 系统中断／小规模中断；即使应用只停顿几秒，也不能忽略。

**简单英文（整理解释）：** Loss of system service / a small interruption. Even a short outage must be counted in overall availability.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · System outage / minor interruption

**语境英文：** Loss of system service / a small interruption. Even a short outage must be counted in overall availability.

**语境中文：** 系统中断／小规模中断；即使应用只停顿几秒，也不能忽略。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页47,49 / 幻灯片47,49

**全部来源：** Week4.pdf · PDF页47,49 / 幻灯片47,49

### General reference thresholds

**稳定ID：** csit985-w4-3599a12edffd1b

**类别：** 专业英语

**中文解释：** 一般参考阈值；图50的范围是指导，教师强调不是普遍规律。

**简单英文（整理解释）：** Guide ranges for testbed, low-performance, and high-performance systems; not universal boundaries.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · General reference thresholds

**语境英文：** Guide ranges for testbed, low-performance, and high-performance systems; not universal boundaries.

**语境中文：** 一般参考阈值；图50的范围是指导，教师强调不是普遍规律。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页50 / 幻灯片50；Week4_transcript.txt · TXT原始L2，本行字符27990起；搜索“universal laws”

**全部来源：** Week4.pdf · PDF页50 / 幻灯片50；Week4_transcript.txt · TXT原始L2，本行字符27990起；搜索“universal laws”

### Availability measurement: when, where, how

**稳定ID：** csit985-w4-7140317ced8d9a

**类别：** 专业英语

**中文解释：** 可用性测量：何时、何地、如何。课件建议端到端计入系统各部分损失；也可选择特定用户／主机／网络，但须明确范围。

**简单英文（整理解释）：** State the period, measurement points, and method. Measure end-to-end; count loss in any part of the defined system, or explicitly name selected endpoints.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Availability measurement: when, where, how

**语境英文：** State the period, measurement points, and method. Measure end-to-end; count loss in any part of the defined system, or explicitly name selected endpoints.

**语境中文：** 可用性测量：何时、何地、如何。课件建议端到端计入系统各部分损失；也可选择特定用户／主机／网络，但须明确范围。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页51,52 / 幻灯片51,52

**全部来源：** Week4.pdf · PDF页51,52 / 幻灯片51,52

### Router interface / user device

**稳定ID：** csit985-w4-bd93afaa9084c5

**类别：** 专业英语

**中文解释：** 路由器接口／用户设备；示例99.99%每周在每个路由接口和用户设备测量。基础词义。

**简单英文（整理解释）：** A router's network connection point / a device used by a user; both are measurement points in the example.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Router interface / user device

**语境英文：** A router's network connection point / a device used by a user; both are measurement points in the example.

**语境中文：** 路由器接口／用户设备；示例99.99%每周在每个路由接口和用户设备测量。基础词义。

**语境依据：** 必要基础释义

**语境来源：** Week4.pdf · PDF页52 / 幻灯片52

**全部来源：** Week4.pdf · PDF页52 / 幻灯片52

### Server farm network / server NICs (network interface cards)

**稳定ID：** csit985-w4-b0a89cc258c2c2

**类别：** 专业英语

**中文解释：** 服务器群网络／服务器网络接口卡；99.999%示例每周在服务器群路由接口和NIC等指定点测量。

**简单英文（整理解释）：** The servers' network / their network interface cards. The example measures 99.999% weekly for server-farm access at named points.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Server farm network / server NICs (network interface cards)

**语境英文：** The servers' network / their network interface cards. The example measures 99.999% weekly for server-farm access at named points.

**语境中文：** 服务器群网络／服务器网络接口卡；99.999%示例每周在服务器群路由接口和NIC等指定点测量。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页52 / 幻灯片52

**全部来源：** Week4.pdf · PDF页52 / 幻灯片52

### LAN / user LAN / server LAN

**稳定ID：** csit985-w4-0f92aa9e1fd0d2

**类别：** 专业英语

**中文解释：** LAN／用户LAN／服务器LAN；课件未展开缩写。示例用应用ping测两端连接，维护停机不适用此要求。

**简单英文（整理解释）：** Network labels for the user side and server side of an application ping test. LAN is not expanded in the supplied lecture.

**说明依据：** 资料未定义

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> LAN covers a small geographical area (few kilometers).

**原文来源：** Week2.pdf · PDF页16 / 幻灯片16

**资料原文：** 名称或用语片段

> LAN

**原文来源：** Week2.pdf · PDF页15 / 幻灯片15

**语境：** Week4 · LAN / user LAN / server LAN

**语境英文：** Network labels for the user side and server side of an application ping test. LAN is not expanded in the supplied lecture.

**语境中文：** LAN／用户LAN／服务器LAN；课件未展开缩写。示例用应用ping测两端连接，维护停机不适用此要求。

**语境依据：** 资料未定义

**语境来源：** Week4.pdf · PDF页52,69 / 幻灯片52,69

**语境：** Week2 · LAN (Local Area Network)

**语境英文：** A network over a small area, mainly for sharing resources and managed by one person or organisation.

**语境中文：** 局域网；本页范围为较小地理区域，主要用于共享资源，由个人或单一组织管理。

**语境依据：** 整理解释

**语境原文：** 定义

> LAN covers a small geographical area (few kilometers).

**语境原文来源：** Week2.pdf · PDF页16 / 幻灯片16

**语境原文：** 名称或用语片段

> LAN

**语境原文来源：** Week2.pdf · PDF页15 / 幻灯片15

**语境来源：** Week2.pdf · PDF页15 / 幻灯片15；Week2.pdf · PDF页16 / 幻灯片16

**全部来源：** Week4.pdf · PDF页52,69 / 幻灯片52,69；Week2.pdf · PDF页15 / 幻灯片15；Week2.pdf · PDF页16 / 幻灯片16

### Application ping / connectivity

**稳定ID：** csit985-w4-84ad8c59210e3f

**类别：** 专业英语

**中文解释：** 应用ping／连通性；示例用于用户LAN与服务器LAN连接测试，未给完整应用测试流程。

**简单英文（整理解释）：** The named test of connection between each user LAN and the server LAN. The slide does not define a full application test procedure.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Application ping / connectivity

**语境英文：** The named test of connection between each user LAN and the server LAN. The slide does not define a full application test procedure.

**语境中文：** 应用ping／连通性；示例用于用户LAN与服务器LAN连接测试，未给完整应用测试流程。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页52 / 幻灯片52

**全部来源：** Week4.pdf · PDF页52 / 幻灯片52

### Interaction Delay (INTD)

**稳定ID：** csit985-w4-273a14d32f2ef3

**类别：** 专业英语

**中文解释：** 交互延迟；用户愿等待响应多久。课件建议10–30秒，教师强调取决于任务。

**简单英文（整理解释）：** How long a user is willing to wait for a response. The slide suggests aiming for 10–30 seconds; it is not a rule for every task.

**说明依据：** 课件明确

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> How long is the user willing to wait for a response

**原文来源：** Week4.pdf · PDF页53 / 幻灯片53

**资料原文：** 规则

> Aim for 10–30 seconds

**原文来源：** Week4.pdf · PDF页53 / 幻灯片53

**语境：** Week4 · Interaction Delay (INTD)

**语境英文：** How long a user is willing to wait for a response. The slide suggests aiming for 10–30 seconds; it is not a rule for every task.

**语境中文：** 交互延迟；用户愿等待响应多久。课件建议10–30秒，教师强调取决于任务。

**语境依据：** 课件明确

**语境原文：** 定义

> How long is the user willing to wait for a response

**语境原文来源：** Week4.pdf · PDF页53 / 幻灯片53

**语境原文：** 规则

> Aim for 10–30 seconds

**语境原文来源：** Week4.pdf · PDF页53 / 幻灯片53

**语境来源：** Week4.pdf · PDF页53,54 / 幻灯片53,54；Week4_transcript.txt · TXT原始L2，本行字符31072起；搜索“what the user is doing”；Week4.pdf · PDF页53 / 幻灯片53

**全部来源：** Week4.pdf · PDF页53,54 / 幻灯片53,54；Week4_transcript.txt · TXT原始L2，本行字符31072起；搜索“what the user is doing”；Week4.pdf · PDF页53 / 幻灯片53

### Human Response Time (HRT)

**稳定ID：** csit985-w4-e4884d77ce8d67

**类别：** 专业英语

**中文解释：** 人类感知响应时间阈值；课件约100毫秒。原文INTD < HRT有疑点，见问题记录。

**简单英文（整理解释）：** The boundary where users begin to notice delay; approximately 100 ms in the slide.

**说明依据：** 课件明确

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Time boundary when users begin to perceive delay

**原文来源：** Week4.pdf · PDF页53 / 幻灯片53

**资料原文：** 规则

> Approximately 100ms

**原文来源：** Week4.pdf · PDF页53 / 幻灯片53

**语境：** Week4 · Human Response Time (HRT)

**语境英文：** The boundary where users begin to notice delay; approximately 100 ms in the slide.

**语境中文：** 人类感知响应时间阈值；课件约100毫秒。原文INTD < HRT有疑点，见问题记录。

**语境依据：** 课件明确

**语境原文：** 定义

> Time boundary when users begin to perceive delay

**语境原文来源：** Week4.pdf · PDF页53 / 幻灯片53

**语境原文：** 规则

> Approximately 100ms

**语境原文来源：** Week4.pdf · PDF页53 / 幻灯片53

**语境来源：** Week4.pdf · PDF页53,54 / 幻灯片53,54；Week4.pdf · PDF页53 / 幻灯片53

**全部来源：** Week4.pdf · PDF页53,54 / 幻灯片53,54；Week4.pdf · PDF页53 / 幻灯片53

### INTD < HRT

**稳定ID：** csit985-w4-d01730a0c5a3be

**类别：** 专业英语

**中文解释：** 保留原不等式；与同页INTD定义／目标值关系不清，不能无声改为另一符号或当作已核实公式。

**简单英文（整理解释）：** The slide says users do not notice delay when INTD < HRT. Its use of INTD conflicts with the stated 10–30 second aim; clarification is needed.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 规则

> INTD < HRT : Users do not perceive delay

**原文来源：** Week4.pdf · PDF页53 / 幻灯片53

**语境：** Week4 · INTD < HRT

**语境英文：** The slide says users do not notice delay when INTD < HRT. Its use of INTD conflicts with the stated 10–30 second aim; clarification is needed.

**语境中文：** 保留原不等式；与同页INTD定义／目标值关系不清，不能无声改为另一符号或当作已核实公式。

**语境依据：** 资料未定义

**语境原文：** 规则

> INTD < HRT : Users do not perceive delay

**语境原文来源：** Week4.pdf · PDF页53 / 幻灯片53

**语境来源：** Week4.pdf · PDF页53 / 幻灯片53；Week4.pdf · PDF页53 / 幻灯片53

**全部来源：** Week4.pdf · PDF页53 / 幻灯片53；Week4.pdf · PDF页53 / 幻灯片53

### Network propagation delay

**稳定ID：** csit985-w4-77be7a7cae2490

**类别：** 专业英语

**中文解释：** 网络传播时延；取决于距离和技术，未给公式。

**简单英文（整理解释）：** A delay that depends on distance and technology. The material does not give a formula.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 说明

> Depends on distance and technology

**原文来源：** Week4.pdf · PDF页53 / 幻灯片53

**语境：** Week4 · Network propagation delay

**语境英文：** A delay that depends on distance and technology. The material does not give a formula.

**语境中文：** 网络传播时延；取决于距离和技术，未给公式。

**语境依据：** 根据资料整理

**语境原文：** 说明

> Depends on distance and technology

**语境原文来源：** Week4.pdf · PDF页53 / 幻灯片53

**语境来源：** Week4.pdf · PDF页53,54 / 幻灯片53,54；Week4.pdf · PDF页53 / 幻灯片53

**全部来源：** Week4.pdf · PDF页53,54 / 幻灯片53,54；Week4.pdf · PDF页53 / 幻灯片53

### Transmission characteristics / accuracy of estimation

**稳定ID：** csit985-w4-e9d0ab2c42038d

**类别：** 专业英语

**中文解释：** 传输特征／估计准确程度；影响容量估算。

**简单英文（整理解释）：** How an application sends data / how close an estimate needs to be. Both affect data-rate estimates.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Transmission characteristics / accuracy of estimation

**语境英文：** How an application sends data / how close an estimate needs to be. Both affect data-rate estimates.

**语境中文：** 传输特征／估计准确程度；影响容量估算。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页55 / 幻灯片55

**全部来源：** Week4.pdf · PDF页55 / 幻灯片55

### Task completion times (TCT)

**稳定ID：** csit985-w4-df6e2f56fcd9ee

**类别：** 专业英语

**中文解释：** 任务完成时间；可能由用户预期或应用规定。

**简单英文（整理解释）：** How long application tasks should take. Targets may come from users or from the application.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 说明

> May be based upon user expectations or be set by the application

**原文来源：** Week4.pdf · PDF页56 / 幻灯片56

**语境：** Week4 · Task completion times (TCT)

**语境英文：** How long application tasks should take. Targets may come from users or from the application.

**语境中文：** 任务完成时间；可能由用户预期或应用规定。

**语境依据：** 根据资料整理

**语境原文：** 说明

> May be based upon user expectations or be set by the application

**语境原文来源：** Week4.pdf · PDF页56 / 幻灯片56

**语境来源：** Week4.pdf · PDF页56 / 幻灯片56；Week4_transcript.txt · TXT原始L2，本行字符32081起；搜索“transfer to finish”；Week4.pdf · PDF页56 / 幻灯片56

**全部来源：** Week4.pdf · PDF页56 / 幻灯片56；Week4_transcript.txt · TXT原始L2，本行字符32081起；搜索“transfer to finish”；Week4.pdf · PDF页56 / 幻灯片56

### Supplemental performance requirements

**稳定ID：** csit985-w4-50f248a4236871

**类别：** 专业英语

**中文解释：** 补充性能要求：操作适合性、支持能力、数据交付可信度。

**简单英文（整理解释）：** Additional requirements: operational suitability, supportability, and confidence.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Supplemental performance requirements

**语境英文：** Additional requirements: operational suitability, supportability, and confidence.

**语境中文：** 补充性能要求：操作适合性、支持能力、数据交付可信度。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页57 / 幻灯片57

**全部来源：** Week4.pdf · PDF页57 / 幻灯片57

### Operational suitability

**稳定ID：** csit985-w4-c3a29dba9b6238

**类别：** 专业英语

**中文解释：** 操作适合性；客户是否能操作计划网络，取决于架构／设计及操作人员能力。

**简单英文（整理解释）：** Whether customers can operate the planned network; it depends on the architecture/design and the quality of human operators.

**说明依据：** 课件明确

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Operational Suitability ensures that customers can operate the planned network

**原文来源：** Week4.pdf · PDF页58 / 幻灯片58

**语境：** Week4 · Operational suitability

**语境英文：** Whether customers can operate the planned network; it depends on the architecture/design and the quality of human operators.

**语境中文：** 操作适合性；客户是否能操作计划网络，取决于架构／设计及操作人员能力。

**语境依据：** 课件明确

**语境原文：** 定义

> Operational Suitability ensures that customers can operate the planned network

**语境原文来源：** Week4.pdf · PDF页58 / 幻灯片58

**语境来源：** Week4.pdf · PDF页58 / 幻灯片58；Week4.pdf · PDF页58 / 幻灯片58

**全部来源：** Week4.pdf · PDF页58 / 幻灯片58；Week4.pdf · PDF页58 / 幻灯片58

### Supportability

**稳定ID：** csit985-w4-2fd0d712bb2a9c

**类别：** 专业英语

**中文解释：** 支持能力；不仅关注交付日性能，还关注持续运行。五因素：RMA、人员、程序与文档、工具、备件及维修件。

**简单英文（整理解释）：** What is needed to operate the design and support continued operation at the required performance level.

**说明依据：** 根据资料整理

**定义状态：** 课件给出原文定义；各周原句与疑点分别保留

**资料原文：** 说明

> What it takes to operate the design

**原文来源：** Week4.pdf · PDF页59 / 幻灯片59

**资料原文：** 说明

> What it takes to support continued operations

**原文来源：** Week4.pdf · PDF页59 / 幻灯片59

**资料原文：** 定义

> How well can the network keep operating through the full range of mission scenarios described by customer

**原文来源：** Week3.pdf · PDF页68 / 幻灯片68

**语境：** Week4 · Supportability

**语境英文：** What is needed to operate the design and support continued operation at the required performance level.

**语境中文：** 支持能力；不仅关注交付日性能，还关注持续运行。五因素：RMA、人员、程序与文档、工具、备件及维修件。

**语境依据：** 根据资料整理

**语境原文：** 说明

> What it takes to operate the design

**语境原文来源：** Week4.pdf · PDF页59 / 幻灯片59

**语境原文：** 说明

> What it takes to support continued operations

**语境原文来源：** Week4.pdf · PDF页59 / 幻灯片59

**语境来源：** Week4.pdf · PDF页59 / 幻灯片59；Week4.pdf · PDF页59 / 幻灯片59

**语境：** Week3 · Supportability

**语境英文：** How well the network can keep operating through the full range of the customer's mission scenarios.

**语境中文：** 可支持性；网络在客户描述的全部任务场景范围内，继续运行得有多好；不是只问有无客服。

**语境依据：** 按课件定义整理

**语境原文：** 定义

> How well can the network keep operating through the full range of mission scenarios described by customer

**语境原文来源：** Week3.pdf · PDF页68 / 幻灯片68

**语境来源：** Week3.pdf · PDF页68 / 幻灯片68

**全部来源：** Week4.pdf · PDF页59 / 幻灯片59；Week4.pdf · PDF页59 / 幻灯片59；Week3.pdf · PDF页68 / 幻灯片68

### System procedures / technical documentation

**稳定ID：** csit985-w4-d2eec4f8679706

**类别：** 专业英语

**中文解释：** 系统操作程序／技术文档；技术文档通常由厂商提供，描述系统和组件特性及零件。

**简单英文（整理解释）：** Instructions for system work / documents describing systems, components, and parts, usually supplied by vendors.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · System procedures / technical documentation

**语境英文：** Instructions for system work / documents describing systems, components, and parts, usually supplied by vendors.

**语境中文：** 系统操作程序／技术文档；技术文档通常由厂商提供，描述系统和组件特性及零件。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页59,60 / 幻灯片59,60

**全部来源：** Week4.pdf · PDF页59,60 / 幻灯片59,60

### Maintenance documentation / preventative maintenance

**稳定ID：** csit985-w4-04c8559bcd2694

**类别：** 专业英语

**中文解释：** 维护文档／预防性维护；说明周期性预防措施及维护时重新配置等流程。

**简单英文（整理解释）：** Documents describing regular work to prevent failures, including reconfiguration during scheduled maintenance.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Maintenance documentation / preventative maintenance

**语境英文：** Documents describing regular work to prevent failures, including reconfiguration during scheduled maintenance.

**语境中文：** 维护文档／预防性维护；说明周期性预防措施及维护时重新配置等流程。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页60 / 幻灯片60

**全部来源：** Week4.pdf · PDF页60 / 幻灯片60

### Casualty procedures

**稳定ID：** csit985-w4-443104e22cc58a

**类别：** 专业英语

**中文解释：** 故障应急处理程序；这里casualty不是日常“伤亡者”词义。

**简单英文（整理解释）：** Special procedures to follow when system faults occur so service can be restored quickly.

**说明依据：** 课件明确

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Describe the abnormal procedures to follow when system faults occur to allow service to be restored as soon as possible

**原文来源：** Week4.pdf · PDF页60 / 幻灯片60

**语境：** Week4 · Casualty procedures

**语境英文：** Special procedures to follow when system faults occur so service can be restored quickly.

**语境中文：** 故障应急处理程序；这里casualty不是日常“伤亡者”词义。

**语境依据：** 课件明确

**语境原文：** 定义

> Describe the abnormal procedures to follow when system faults occur to allow service to be restored as soon as possible

**语境原文来源：** Week4.pdf · PDF页60 / 幻灯片60

**语境来源：** Week4.pdf · PDF页60 / 幻灯片60；Week4.pdf · PDF页60 / 幻灯片60

**全部来源：** Week4.pdf · PDF页60 / 幻灯片60；Week4.pdf · PDF页60 / 幻灯片60

### Confidence

**稳定ID：** csit985-w4-411f635960dec7

**类别：** 专业英语

**中文解释：** 数据交付可信度；这里不是个人自信。PDF定义句尾残缺，后文与TXT说明需按应用容忍度规定错误／丢失率。

**简单英文（整理解释）：** A measure of delivering data without unacceptable error or loss. Acceptable rates depend on what the application can tolerate.

**说明依据：** 根据资料整理

**定义状态：** 课件原文定义残缺；见资料疑点

**资料原文：** 定义（原句残缺）

> Is a measure of the network’s ability to deliver data without error or loss at the require

**原文来源：** Week4.pdf · PDF页61 / 幻灯片61

**资料原文：** 说明

> Determine what is an acceptable error or loss rate according to the application’s ability to tolerate errors or data loss

**原文来源：** Week4.pdf · PDF页61 / 幻灯片61

**语境：** Week4 · Confidence

**语境英文：** A measure of delivering data without unacceptable error or loss. Acceptable rates depend on what the application can tolerate.

**语境中文：** 数据交付可信度；这里不是个人自信。PDF定义句尾残缺，后文与TXT说明需按应用容忍度规定错误／丢失率。

**语境依据：** 根据资料整理

**语境原文：** 定义（原句残缺）

> Is a measure of the network’s ability to deliver data without error or loss at the require

**语境原文来源：** Week4.pdf · PDF页61 / 幻灯片61

**语境原文：** 说明

> Determine what is an acceptable error or loss rate according to the application’s ability to tolerate errors or data loss

**语境原文来源：** Week4.pdf · PDF页61 / 幻灯片61

**语境来源：** Week4.pdf · PDF页61 / 幻灯片61；Week4_transcript.txt · TXT原始L2，本行字符34675起；搜索“Unacceptable error or loss”；Week4.pdf · PDF页61 / 幻灯片61

**全部来源：** Week4.pdf · PDF页61 / 幻灯片61；Week4_transcript.txt · TXT原始L2，本行字符34675起；搜索“Unacceptable error or loss”；Week4.pdf · PDF页61 / 幻灯片61

### Error and loss rates / acceptable error or loss rate

**稳定ID：** csit985-w4-0f710cae2ee881

**类别：** 专业英语

**中文解释：** 错误率／丢失率；可接受程度依应用对错误或数据丢失的容忍度。

**简单英文（整理解释）：** How often errors or losses happen / the rate an application can accept.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Error and loss rates / acceptable error or loss rate

**语境英文：** How often errors or losses happen / the rate an application can accept.

**语境中文：** 错误率／丢失率；可接受程度依应用对错误或数据丢失的容忍度。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页31,61 / 幻灯片31,61

**全部来源：** Week4.pdf · PDF页31,61 / 幻灯片31,61

### Application characteristics

**稳定ID：** csit985-w4-0f00fdda44f969

**类别：** 专业英语

**中文解释：** 应用特征；若能成组可设分界，若时延连续分布则阈值可能人为选定。

**简单英文（整理解释）：** Features such as capacity or delay that may help group applications and set thresholds.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Application characteristics

**语境英文：** Features such as capacity or delay that may help group applications and set thresholds.

**语境中文：** 应用特征；若能成组可设分界，若时延连续分布则阈值可能人为选定。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页63,64 / 幻灯片63,64

**全部来源：** Week4.pdf · PDF页63,64 / 幻灯片63,64

### Predictable performance / guaranteed performance

**稳定ID：** csit985-w4-45b04c54cd3961

**类别：** 专业英语

**中文解释：** 可预测性能／保证性能；需要额外流量支持，需写明确指标与条件。本周未给完整正式定义。

**简单英文（整理解释）：** Two service categories named in the material. They need extra flow support; their full formal definitions are not supplied.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Predictable performance / guaranteed performance

**语境英文：** Two service categories named in the material. They need extra flow support; their full formal definitions are not supplied.

**语境中文：** 可预测性能／保证性能；需要额外流量支持，需写明确指标与条件。本周未给完整正式定义。

**语境依据：** 资料未定义

**语境来源：** Week4.pdf · PDF页28,65,66 / 幻灯片28,65,66

**全部来源：** Week4.pdf · PDF页28,65,66 / 幻灯片28,65,66

### Best effort

**稳定ID：** csit985-w4-84b5edb36ff865

**类别：** 专业英语

**中文解释：** 尽力而为；Week4只用于对比服务类别，不能自行增加保证机制。

**简单英文（整理解释）：** A service category contrasted with predictable and guaranteed performance. Week4 does not give a full definition.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 名称或用语片段

> Best-effort service

**原文来源：** Week2.pdf · PDF页86 / 幻灯片86

**资料原文：** 教师用语（TXT原片段）

> best effort, service

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符1732起；搜索“best effort, service”

**语境：** Week4 · Best effort

**语境英文：** A service category contrasted with predictable and guaranteed performance. Week4 does not give a full definition.

**语境中文：** 尽力而为；Week4只用于对比服务类别，不能自行增加保证机制。

**语境依据：** 资料未定义

**语境来源：** Week4.pdf · PDF页65 / 幻灯片65；Week4_transcript.txt · TXT原始L2，本行字符14713起；搜索“best effort service”

**语境：** Week2 · Best-effort service

**语境英文：** A special service named in the slide; no formal definition is given this week.

**语境中文：** 尽力而为服务；本页称其为一种特殊服务，当前资料未给正式定义或精确保证。

**语境依据：** 资料未定义

**语境原文：** 名称或用语片段

> Best-effort service

**语境原文来源：** Week2.pdf · PDF页86 / 幻灯片86

**语境来源：** Week2.pdf · PDF页86 / 幻灯片86

**语境：** Week3 · Best-effort service

**语境英文：** One service type to consider during analysis. This week does not define its exact service behavior.

**语境中文：** 尽力而为服务；本周只把它列为需要判断适用位置的一类服务，没有正式定义。

**语境依据：** 本周仅列名称

**语境原文：** 教师用语（TXT原片段）

> best effort, service

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符1732起；搜索“best effort, service”

**语境来源：** Week3.pdf · PDF页44 / 幻灯片44；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符1732起；搜索“best effort, service”

**全部来源：** Week4.pdf · PDF页65 / 幻灯片65；Week4_transcript.txt · TXT原始L2，本行字符14713起；搜索“best effort service”；Week2.pdf · PDF页86 / 幻灯片86；Week3.pdf · PDF页44 / 幻灯片44；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符1732起；搜索“best effort, service”

### Mission-critical / rate-critical / interactive

**稳定ID：** csit985-w4-5d69187e9374ff

**类别：** 专业英语

**中文解释：** 关键任务／数据率关键／交互式；为需求提示词，未给统一指标或界限，需进一步量化。

**简单英文（整理解释）：** Labels for important business function, data-rate-sensitive service, and user interaction. They indicate needs to investigate; no exact limits are defined.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**资料原文：** 类别条件

> Predictable, guaranteed and/or high performance RMA requirements

**原文来源：** Week3.pdf · PDF页71 / 幻灯片71

**资料原文：** 图表标签或原片段（视觉核对）

> Payroll applications are considered mission-critical

**原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**资料原文：** 类别条件

> Predictable, guaranteed and/or high performance capacity requirements

**原文来源：** Week3.pdf · PDF页71 / 幻灯片71

**资料原文：** 类别条件

> Predictable, guaranteed and/or high performance delay requirements

**原文来源：** Week3.pdf · PDF页71 / 幻灯片71

**资料原文：** 教师用语（TXT原片段）

> categorize it, categorize it into multiple groups

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符7544起；搜索“categorize it, categorize it into multiple groups”

**语境：** Week4 · Mission-critical / rate-critical / interactive

**语境英文：** Labels for important business function, data-rate-sensitive service, and user interaction. They indicate needs to investigate; no exact limits are defined.

**语境中文：** 关键任务／数据率关键／交互式；为需求提示词，未给统一指标或界限，需进一步量化。

**语境依据：** 必要基础释义

**语境来源：** Week4.pdf · PDF页25,26,66 / 幻灯片25,26,66

**语境：** Week3 · Mission-critical applications

**语境英文：** Applications with predictable, guaranteed, and/or high-performance RMA needs.

**语境中文：** 任务关键应用；要求可预测、有保证和／或高性能的 RMA。不是要求三者必须同时具备。

**语境依据：** 按课件类别说明整理

**语境原文：** 类别条件

> Predictable, guaranteed and/or high performance RMA requirements

**语境原文来源：** Week3.pdf · PDF页71 / 幻灯片71

**语境原文：** 图表标签或原片段（视觉核对）

> Payroll applications are considered mission-critical

**语境原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**语境来源：** Week3.pdf · PDF页71 / 幻灯片71；Week3.pdf · PDF页46 / 幻灯片46（图表）

**语境：** Week3 · Rate-critical applications

**语境英文：** Applications with predictable, guaranteed, and/or high-performance capacity needs.

**语境中文：** 速率关键应用；关注可预测、有保证和／或高性能的容量需求。

**语境依据：** 按课件类别说明整理

**语境原文：** 类别条件

> Predictable, guaranteed and/or high performance capacity requirements

**语境原文来源：** Week3.pdf · PDF页71 / 幻灯片71

**语境来源：** Week3.pdf · PDF页71 / 幻灯片71

**语境：** Week3 · Real-time and interactive applications

**语境英文：** Applications with predictable, guaranteed, and/or high-performance delay needs. An application can belong to more than one group.

**语境中文：** 实时和交互应用；关注可预测、有保证和／或高性能的时延需求。与前两类可以重叠。

**语境依据：** 按课件类别说明与TXT整理

**语境原文：** 类别条件

> Predictable, guaranteed and/or high performance delay requirements

**语境原文来源：** Week3.pdf · PDF页71 / 幻灯片71

**语境原文：** 教师用语（TXT原片段）

> categorize it, categorize it into multiple groups

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符7544起；搜索“categorize it, categorize it into multiple groups”

**语境来源：** Week3.pdf · PDF页71 / 幻灯片71；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符7544起；搜索“categorize it, categorize it into multiple groups”

**全部来源：** Week4.pdf · PDF页25,26,66 / 幻灯片25,26,66；Week3.pdf · PDF页71 / 幻灯片71；Week3.pdf · PDF页46 / 幻灯片46（图表）；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符7544起；搜索“categorize it, categorize it into multiple groups”

### Mapping requirements / requirements map

**稳定ID：** csit985-w4-e77758394e4640

**类别：** 专业英语

**中文解释：** 需求映射／需求地图；把需求放入地理环境，含现有及可能位置。

**简单英文（整理解释）：** Place requirements on a geographical view, showing where devices and applications are or may be.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Mapping requirements / requirements map

**语境英文：** Place requirements on a geographical view, showing where devices and applications are or may be.

**语境中文：** 需求映射／需求地图；把需求放入地理环境，含现有及可能位置。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页67,68,69 / 幻灯片67,68,69

**全部来源：** Week4.pdf · PDF页67,68,69 / 幻灯片67,68,69

### Location map / geographical description

**稳定ID：** csit985-w4-bfb6382d01eaae

**类别：** 专业英语

**中文解释：** 位置图／地理描述；可采用建筑、校园、都市区域或广域尺度。

**简单英文（整理解释）：** A view of locations, such as a building, campus, metropolitan area, or wide area.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义；相关名称、说明或规则见课件原文

**语境：** Week4 · Location map / geographical description

**语境英文：** A view of locations, such as a building, campus, metropolitan area, or wide area.

**语境中文：** 位置图／地理描述；可采用建筑、校园、都市区域或广域尺度。

**语境依据：** 根据资料整理

**语境来源：** Week4.pdf · PDF页68 / 幻灯片68

**全部来源：** Week4.pdf · PDF页68 / 幻灯片68

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

## 阅读词汇

### stakeholders

**稳定ID：** csit985-w4-d0fcb629b76730

**类别：** 阅读词汇

**中文解释：** 项目相关人员或群体，包括用户、管理层等。

**简单英文（整理解释）：** People or groups with an interest in the project.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> other stakeholders

**原文来源：** Week4.pdf · PDF页7 / 幻灯片7

**资料原文：** 名称或用语片段

> stakeholders

**原文来源：** Week3.pdf · PDF页36 / 幻灯片36

**资料原文：** 教师用语（TXT原片段）

> everybody kind of makes every decision

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符18628起；搜索“everybody kind of makes every decision”

**语境：** Week4 · stakeholders

**语境英文：** People or groups with an interest in the project.

**语境中文：** 项目相关人员或群体，包括用户、管理层等。

**语境依据：** 整理解释

**语境原文：** 用法片段

> other stakeholders

**语境原文来源：** Week4.pdf · PDF页7 / 幻灯片7

**语境来源：** Week4.pdf · PDF页7 / 幻灯片7；Week4.pdf · PDF页7 / 幻灯片7

**语境：** Week3 · stakeholders

**语境英文：** People with an interest in or influence on the plan.

**语境中文：** 利益相关者；受计划影响或能影响计划的人。课件要求尽可能广泛参与，但不是人人作出每项决定。

**语境依据：** 按资料语境与TXT整理

**语境原文：** 名称或用语片段

> stakeholders

**语境原文来源：** Week3.pdf · PDF页36 / 幻灯片36

**语境原文：** 教师用语（TXT原片段）

> everybody kind of makes every decision

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符18628起；搜索“everybody kind of makes every decision”

**语境来源：** Week3.pdf · PDF页36 / 幻灯片36；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符18628起；搜索“everybody kind of makes every decision”

**全部来源：** Week4.pdf · PDF页7 / 幻灯片7；Week4.pdf · PDF页7 / 幻灯片7；Week3.pdf · PDF页36 / 幻灯片36；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符18628起；搜索“everybody kind of makes every decision”

### outsourcing

**稳定ID：** csit985-w4-af9efe9e4b5d5e

**类别：** 阅读词汇

**中文解释：** 把工作或服务交给外部组织处理；本页列作网络项目类型。

**简单英文（整理解释）：** Having an outside organisation do work or provide a service.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Outsourcing

**原文来源：** Week4.pdf · PDF页10 / 幻灯片10

**语境：** Week4 · outsourcing

**语境英文：** Having an outside organisation do work or provide a service.

**语境中文：** 把工作或服务交给外部组织处理；本页列作网络项目类型。

**语境依据：** 整理解释

**语境原文：** 用法片段

> Outsourcing

**语境原文来源：** Week4.pdf · PDF页10 / 幻灯片10

**语境来源：** Week4.pdf · PDF页10 / 幻灯片10；Week4.pdf · PDF页10 / 幻灯片10

**全部来源：** Week4.pdf · PDF页10 / 幻灯片10；Week4.pdf · PDF页10 / 幻灯片10

### consolidation

**稳定ID：** csit985-w4-99e8aeedf4e7cd

**类别：** 阅读词汇

**中文解释：** 整合原先分散的部分；本页列作网络项目类型，未给详细方法。

**简单英文（整理解释）：** Bringing separate parts together.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Consolidation

**原文来源：** Week4.pdf · PDF页10 / 幻灯片10

**语境：** Week4 · consolidation

**语境英文：** Bringing separate parts together.

**语境中文：** 整合原先分散的部分；本页列作网络项目类型，未给详细方法。

**语境依据：** 整理解释

**语境原文：** 用法片段

> Consolidation

**语境原文来源：** Week4.pdf · PDF页10 / 幻灯片10

**语境来源：** Week4.pdf · PDF页10 / 幻灯片10；Week4.pdf · PDF页10 / 幻灯片10

**全部来源：** Week4.pdf · PDF页10 / 幻灯片10；Week4.pdf · PDF页10 / 幻灯片10

### upgrade technology/vendor

**稳定ID：** csit985-w4-r-47519a7d491edd

**类别：** 阅读词汇

**中文解释：** 升级技术／调整供应商；课件只列此目标，未说明vendor如何upgrade。

**简单英文（整理解释）：** An early design goal; the exact change is not explained.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Upgrade technology/vendor

**原文来源：** Week4.pdf · PDF页12 / 幻灯片12

**语境：** Week4 · upgrade technology/vendor

**语境英文：** An early design goal; the exact change is not explained.

**语境中文：** 升级技术／调整供应商；课件只列此目标，未说明vendor如何upgrade。

**语境依据：** 整理解释

**语境原文：** 用法片段

> Upgrade technology/vendor

**语境原文来源：** Week4.pdf · PDF页12 / 幻灯片12

**语境来源：** Week4.pdf · PDF页10,12,25 / 幻灯片10,12,25；Week4.pdf · PDF页12 / 幻灯片12

**全部来源：** Week4.pdf · PDF页10,12,25 / 幻灯片10,12,25；Week4.pdf · PDF页12 / 幻灯片12

### site

**稳定ID：** csit985-w4-34a2bc789539f3

**类别：** 阅读词汇

**中文解释：** 网络项目包含的物理地点，此处不是网站。

**简单英文（整理解释）：** A location included in the network project.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> sites

**原文来源：** Week4.pdf · PDF页11 / 幻灯片11

**语境：** Week4 · site

**语境英文：** A location included in the network project.

**语境中文：** 网络项目包含的物理地点，此处不是网站。

**语境依据：** 整理解释

**语境原文：** 用法片段

> sites

**语境原文来源：** Week4.pdf · PDF页11 / 幻灯片11

**语境来源：** Week4.pdf · PDF页11 / 幻灯片11；Week4.pdf · PDF页11 / 幻灯片11

**全部来源：** Week4.pdf · PDF页11 / 幻灯片11；Week4.pdf · PDF页11 / 幻灯片11

### outside forces

**稳定ID：** csit985-w4-4e1f2c83504d53

**类别：** 阅读词汇

**中文解释：** 影响项目的外部因素，可能涉及政治、行政或财务。

**简单英文（整理解释）：** Influences from outside the technical work.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Outside Forces

**原文来源：** Week4.pdf · PDF页13 / 幻灯片13

**语境：** Week4 · outside forces

**语境英文：** Influences from outside the technical work.

**语境中文：** 影响项目的外部因素，可能涉及政治、行政或财务。

**语境依据：** 整理解释

**语境原文：** 用法片段

> Outside Forces

**语境原文来源：** Week4.pdf · PDF页13 / 幻灯片13

**语境来源：** Week4.pdf · PDF页13 / 幻灯片13；Week4.pdf · PDF页13 / 幻灯片13

**全部来源：** Week4.pdf · PDF页13 / 幻灯片13；Week4.pdf · PDF页13 / 幻灯片13

### user inertia

**稳定ID：** csit985-w4-911699ee7e2b9a

**类别：** 阅读词汇

**中文解释：** 用户保留原有做法、抗拒改变的惯性；可能限制设计。

**简单英文（整理解释）：** Users' tendency to keep their current way of working.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> User inertia

**原文来源：** Week4.pdf · PDF页14 / 幻灯片14

**语境：** Week4 · user inertia

**语境英文：** Users' tendency to keep their current way of working.

**语境中文：** 用户保留原有做法、抗拒改变的惯性；可能限制设计。

**语境依据：** 整理解释

**语境原文：** 用法片段

> User inertia

**语境原文来源：** Week4.pdf · PDF页14 / 幻灯片14

**语境来源：** Week4.pdf · PDF页14 / 幻灯片14；Week4_transcript.txt · TXT原始L2，本行字符7742起；搜索“users may resist change”；Week4.pdf · PDF页14 / 幻灯片14

**全部来源：** Week4.pdf · PDF页14 / 幻灯片14；Week4_transcript.txt · TXT原始L2，本行字符7742起；搜索“users may resist change”；Week4.pdf · PDF页14 / 幻灯片14

### customer expectations

**稳定ID：** csit985-w4-1542be98afc5fa

**类别：** 阅读词汇

**中文解释：** 客户对问题和预期结果的看法；必要时须调整。

**简单英文（整理解释）：** What customers expect the problem and result to be.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Customer Expectations

**原文来源：** Week4.pdf · PDF页15 / 幻灯片15

**语境：** Week4 · customer expectations

**语境英文：** What customers expect the problem and result to be.

**语境中文：** 客户对问题和预期结果的看法；必要时须调整。

**语境依据：** 整理解释

**语境原文：** 用法片段

> Customer Expectations

**语境原文来源：** Week4.pdf · PDF页15 / 幻灯片15

**语境来源：** Week4.pdf · PDF页15 / 幻灯片15；Week4.pdf · PDF页15 / 幻灯片15

**全部来源：** Week4.pdf · PDF页15 / 幻灯片15；Week4.pdf · PDF页15 / 幻灯片15

### one-on-one follow ups

**稳定ID：** csit985-w4-r-a3c1e034d0a899

**类别：** 阅读词汇

**中文解释：** 逐人后续访谈；在问卷后进一步跟进。

**简单英文（整理解释）：** Later talks with individual users.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> One-on-one follow ups

**原文来源：** Week4.pdf · PDF页16 / 幻灯片16

**语境：** Week4 · one-on-one follow ups

**语境英文：** Later talks with individual users.

**语境中文：** 逐人后续访谈；在问卷后进一步跟进。

**语境依据：** 整理解释

**语境原文：** 用法片段

> One-on-one follow ups

**语境原文来源：** Week4.pdf · PDF页16 / 幻灯片16

**语境来源：** Week4.pdf · PDF页16 / 幻灯片16；Week4.pdf · PDF页16 / 幻灯片16

**全部来源：** Week4.pdf · PDF页16 / 幻灯片16；Week4.pdf · PDF页16 / 幻灯片16

### whiteboard sessions

**稳定ID：** csit985-w4-r-c09e250f70f703

**类别：** 阅读词汇

**中文解释：** 使用白板讨论的会议；此处用于沟通用户需求。

**简单英文（整理解释）：** Discussions using a whiteboard.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Whiteboard sessions

**原文来源：** Week4.pdf · PDF页16 / 幻灯片16

**语境：** Week4 · whiteboard sessions

**语境英文：** Discussions using a whiteboard.

**语境中文：** 使用白板讨论的会议；此处用于沟通用户需求。

**语境依据：** 整理解释

**语境原文：** 用法片段

> Whiteboard sessions

**语境原文来源：** Week4.pdf · PDF页16 / 幻灯片16

**语境来源：** Week4.pdf · PDF页16 / 幻灯片16；Week4.pdf · PDF页16 / 幻灯片16

**全部来源：** Week4.pdf · PDF页16 / 幻灯片16；Week4.pdf · PDF页16 / 幻灯片16

### degradation

**稳定ID：** csit985-w4-610903f03c12fe

**类别：** 阅读词汇

**中文解释：** 性能下降／退化；此处指当前应用或设备性能受损。

**简单英文（整理解释）：** A fall in performance or quality.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> degradation

**原文来源：** Week4.pdf · PDF页20 / 幻灯片20

**语境：** Week4 · degradation

**语境英文：** A fall in performance or quality.

**语境中文：** 性能下降／退化；此处指当前应用或设备性能受损。

**语境依据：** 整理解释

**语境原文：** 用法片段

> degradation

**语境原文来源：** Week4.pdf · PDF页20 / 幻灯片20

**语境来源：** Week4.pdf · PDF页20 / 幻灯片20；Week4.pdf · PDF页20 / 幻灯片20

**全部来源：** Week4.pdf · PDF页20 / 幻灯片20；Week4.pdf · PDF页20 / 幻灯片20

### Track Changes

**稳定ID：** csit985-w4-r-b64fac9e10cffb

**类别：** 阅读词汇

**中文解释：** 文档修订追踪；留下增删改和被拒绝的尝试。

**简单英文（整理解释）：** A document feature that shows edits.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Track Changes

**原文来源：** Week4.pdf · PDF页23 / 幻灯片23

**语境：** Week4 · Track Changes

**语境英文：** A document feature that shows edits.

**语境中文：** 文档修订追踪；留下增删改和被拒绝的尝试。

**语境依据：** 整理解释

**语境原文：** 用法片段

> Track Changes

**语境原文来源：** Week4.pdf · PDF页23 / 幻灯片23

**语境来源：** Week4.pdf · PDF页23 / 幻灯片23；Week4.pdf · PDF页23 / 幻灯片23

**全部来源：** Week4.pdf · PDF页23 / 幻灯片23；Week4.pdf · PDF页23 / 幻灯片23

### tabular form

**稳定ID：** csit985-w4-r-3e46a50ccfe118

**类别：** 阅读词汇

**中文解释：** 表格形式；需求按表格记录。

**简单英文（整理解释）：** Information arranged in a table.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Tabular form

**原文来源：** Week4.pdf · PDF页23 / 幻灯片23

**语境：** Week4 · tabular form

**语境英文：** Information arranged in a table.

**语境中文：** 表格形式；需求按表格记录。

**语境依据：** 整理解释

**语境原文：** 用法片段

> Tabular form

**语境原文来源：** Week4.pdf · PDF页23 / 幻灯片23

**语境来源：** Week4.pdf · PDF页23 / 幻灯片23；Week4.pdf · PDF页23 / 幻灯片23

**全部来源：** Week4.pdf · PDF页23 / 幻灯片23；Week4.pdf · PDF页23 / 幻灯片23

### derived

**稳定ID：** csit985-w4-r-ff305d4d4c8833

**类别：** 阅读词汇

**中文解释：** 推导得到，而非直接从客户收集。

**简单英文（整理解释）：** Worked out from other information.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Derived

**原文来源：** Week4.pdf · PDF页26 / 幻灯片26

**语境：** Week4 · derived

**语境英文：** Worked out from other information.

**语境中文：** 推导得到，而非直接从客户收集。

**语境依据：** 整理解释

**语境原文：** 用法片段

> Derived

**语境原文来源：** Week4.pdf · PDF页26 / 幻灯片26

**语境来源：** Week4.pdf · PDF页26 / 幻灯片26；Week4.pdf · PDF页26 / 幻灯片26

**全部来源：** Week4.pdf · PDF页26 / 幻灯片26；Week4.pdf · PDF页26 / 幻灯片26

### TBD (to be determined)

**稳定ID：** csit985-w4-2dd417a9ac1aa9

**类别：** 阅读词汇

**中文解释：** 待确定；标识尚未落实的信息，不能猜填。

**简单英文（整理解释）：** Not decided yet.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> TBD

**原文来源：** Week4.pdf · PDF页25 / 幻灯片25

**资料原文：** 用法片段

> TBD

**原文来源：** Week4.pdf · PDF页26 / 幻灯片26

**资料原文：** 教师用语

> TBD

**原文来源：** Week4_transcript.txt · TXT原始L2，本行字符13968起；搜索“TBD”

**资料原文：** 图表标签或原片段（视觉核对）

> TBD

**原文来源：** Week3.pdf · PDF页52 / 幻灯片52（图表）

**语境：** Week4 · TBD (to be determined)

**语境英文：** Not decided yet.

**语境中文：** 待确定；标识尚未落实的信息，不能猜填。

**语境依据：** 整理解释

**语境原文：** 用法片段

> TBD

**语境原文来源：** Week4.pdf · PDF页25 / 幻灯片25

**语境原文：** 用法片段

> TBD

**语境原文来源：** Week4.pdf · PDF页26 / 幻灯片26

**语境原文：** 教师用语

> TBD

**语境原文来源：** Week4_transcript.txt · TXT原始L2，本行字符13968起；搜索“TBD”

**语境来源：** Week4.pdf · PDF页25,26 / 幻灯片25,26；Week4_transcript.txt · TXT原始L2，本行字符13961起；搜索“marked TBD”；Week4.pdf · PDF页25 / 幻灯片25；Week4.pdf · PDF页26 / 幻灯片26；Week4_transcript.txt · TXT原始L2，本行字符13968起；搜索“TBD”

**语境：** Week3 · TBD (to be determined)

**语境英文：** Still to be decided. It does not mean that there is no requirement.

**语境中文：** 待确定；示例表大量使用 TBD，表示值尚未确定，不表示没有要求。缩写展开为必要基础释义，原表只写 TBD。

**语境依据：** 图表缩写与必要基础释义

**语境原文：** 图表标签或原片段（视觉核对）

> TBD

**语境原文来源：** Week3.pdf · PDF页52 / 幻灯片52（图表）

**语境来源：** Week3.pdf · PDF页52 / 幻灯片52（图表）

**全部来源：** Week4.pdf · PDF页25,26 / 幻灯片25,26；Week4_transcript.txt · TXT原始L2，本行字符13961起；搜索“marked TBD”；Week4.pdf · PDF页25 / 幻灯片25；Week4.pdf · PDF页26 / 幻灯片26；Week4_transcript.txt · TXT原始L2，本行字符13968起；搜索“TBD”；Week3.pdf · PDF页52 / 幻灯片52（图表）

### spare and repair parts

**稳定ID：** csit985-w4-r-dcac11296497c0

**类别：** 阅读词汇

**中文解释：** 备用零件和维修所需零件；支持能力的因素。

**简单英文（整理解释）：** Parts kept ready or needed for repair.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Spare and repair parts

**原文来源：** Week4.pdf · PDF页59 / 幻灯片59

**语境：** Week4 · spare and repair parts

**语境英文：** Parts kept ready or needed for repair.

**语境中文：** 备用零件和维修所需零件；支持能力的因素。

**语境依据：** 整理解释

**语境原文：** 用法片段

> Spare and repair parts

**语境原文来源：** Week4.pdf · PDF页59 / 幻灯片59

**语境来源：** Week4.pdf · PDF页59 / 幻灯片59；Week4.pdf · PDF页59 / 幻灯片59

**全部来源：** Week4.pdf · PDF页59 / 幻灯片59；Week4.pdf · PDF页59 / 幻灯片59

### consumables

**稳定ID：** csit985-w4-r-4156da130c70d3

**类别：** 阅读词汇

**中文解释：** 消耗品；图中归在Operations栏。

**简单英文（整理解释）：** Items that get used up.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图表标签

> Consumables

**原文来源：** Week4.pdf · PDF页57 / 幻灯片57（图表）

**语境：** Week4 · consumables

**语境英文：** Items that get used up.

**语境中文：** 消耗品；图中归在Operations栏。

**语境依据：** 整理解释

**语境原文：** 图表标签

> Consumables

**语境原文来源：** Week4.pdf · PDF页57 / 幻灯片57（图表）

**语境来源：** Week4.pdf · PDF页57 / 幻灯片57；Week4.pdf · PDF页57 / 幻灯片57（图表）

**全部来源：** Week4.pdf · PDF页57 / 幻灯片57；Week4.pdf · PDF页57 / 幻灯片57（图表）

### leasing

**稳定ID：** csit985-w4-r-155b6a06254b1d

**类别：** 阅读词汇

**中文解释：** 租赁资源；图中Operations栏标签，未解释租赁安排。

**简单英文（整理解释）：** Renting resources for use.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图表标签

> Leasing

**原文来源：** Week4.pdf · PDF页57 / 幻灯片57（图表）

**语境：** Week4 · leasing

**语境英文：** Renting resources for use.

**语境中文：** 租赁资源；图中Operations栏标签，未解释租赁安排。

**语境依据：** 整理解释

**语境原文：** 图表标签

> Leasing

**语境原文来源：** Week4.pdf · PDF页57 / 幻灯片57（图表）

**语境来源：** Week4.pdf · PDF页57 / 幻灯片57；Week4.pdf · PDF页57 / 幻灯片57（图表）

**全部来源：** Week4.pdf · PDF页57 / 幻灯片57；Week4.pdf · PDF页57 / 幻灯片57（图表）

### facilities

**稳定ID：** csit985-w4-r-de839661834501

**类别：** 阅读词汇

**中文解释：** 用于开展工作的场所或设施；图中Operations栏标签。

**简单英文（整理解释）：** Places or equipment used for work.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图表标签

> Facilities

**原文来源：** Week4.pdf · PDF页57 / 幻灯片57（图表）

**语境：** Week4 · facilities

**语境英文：** Places or equipment used for work.

**语境中文：** 用于开展工作的场所或设施；图中Operations栏标签。

**语境依据：** 整理解释

**语境原文：** 图表标签

> Facilities

**语境原文来源：** Week4.pdf · PDF页57 / 幻灯片57（图表）

**语境来源：** Week4.pdf · PDF页57 / 幻灯片57；Week4.pdf · PDF页57 / 幻灯片57（图表）

**全部来源：** Week4.pdf · PDF页57 / 幻灯片57；Week4.pdf · PDF页57 / 幻灯片57（图表）

### refine

**稳定ID：** csit985-w4-r-d955fd192b1978

**类别：** 阅读词汇

**中文解释：** 使初版需求更清楚、更准确；不是完全换掉它。

**简单英文（整理解释）：** Make a requirement clearer or more exact.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> refined

**原文来源：** Week4.pdf · PDF页7 / 幻灯片7

**语境：** Week4 · refine

**语境英文：** Make a requirement clearer or more exact.

**语境中文：** 使初版需求更清楚、更准确；不是完全换掉它。

**语境依据：** 整理解释

**使用结构：** refine + requirements

**语境原文：** 用法片段

> refined

**语境原文来源：** Week4.pdf · PDF页7 / 幻灯片7

**语境来源：** Week4.pdf · PDF页7 / 幻灯片7；Week4.pdf · PDF页7 / 幻灯片7

**使用结构：** refine + requirements

**全部来源：** Week4.pdf · PDF页7 / 幻灯片7；Week4.pdf · PDF页7 / 幻灯片7

### input

**稳定ID：** csit985-w4-r-65b1535ebf90e0

**类别：** 阅读词汇

**中文解释：** 相关人员提供的信息或意见；此处不指键盘输入动作。

**简单英文（整理解释）：** Information or views supplied by people.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Input from the users

**原文来源：** Week4.pdf · PDF页7 / 幻灯片7

**语境：** Week4 · input

**语境英文：** Information or views supplied by people.

**语境中文：** 相关人员提供的信息或意见；此处不指键盘输入动作。

**语境依据：** 整理解释

**使用结构：** input from + people

**语境原文：** 用法片段

> Input from the users

**语境原文来源：** Week4.pdf · PDF页7 / 幻灯片7

**语境来源：** Week4.pdf · PDF页7 / 幻灯片7；Week4.pdf · PDF页7 / 幻灯片7

**使用结构：** input from + people

**全部来源：** Week4.pdf · PDF页7 / 幻灯片7；Week4.pdf · PDF页7 / 幻灯片7

### architectural choices

**稳定ID：** csit985-w4-r-e4b9366e6c0808

**类别：** 阅读词汇

**中文解释：** 与网络架构有关的选择。

**简单英文（整理解释）：** Decisions about the network architecture.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> architectural and design choices

**原文来源：** Week4.pdf · PDF页8 / 幻灯片8

**语境：** Week4 · architectural choices

**语境英文：** Decisions about the network architecture.

**语境中文：** 与网络架构有关的选择。

**语境依据：** 整理解释

**语境原文：** 用法片段

> architectural and design choices

**语境原文来源：** Week4.pdf · PDF页8 / 幻灯片8

**语境来源：** Week4.pdf · PDF页8 / 幻灯片8；Week4.pdf · PDF页8 / 幻灯片8

**全部来源：** Week4.pdf · PDF页8 / 幻灯片8；Week4.pdf · PDF页8 / 幻灯片8

### NOT exhaustive

**稳定ID：** csit985-w4-r-8db2dc38c0d780

**类别：** 阅读词汇

**中文解释：** 并未穷尽所有可能情况；列出的清单不是全部。

**简单英文（整理解释）：** Not including every possible item.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> NOT exhaustive

**原文来源：** Week4.pdf · PDF页9 / 幻灯片9

**语境：** Week4 · NOT exhaustive

**语境英文：** Not including every possible item.

**语境中文：** 并未穷尽所有可能情况；列出的清单不是全部。

**语境依据：** 整理解释

**语境原文：** 用法片段

> NOT exhaustive

**语境原文来源：** Week4.pdf · PDF页9 / 幻灯片9

**语境来源：** Week4.pdf · PDF页9 / 幻灯片9；Week4.pdf · PDF页9 / 幻灯片9

**全部来源：** Week4.pdf · PDF页9 / 幻灯片9；Week4.pdf · PDF页9 / 幻灯片9

### vendor

**稳定ID：** csit985-w4-r-42755e4e513f0b

**类别：** 阅读词汇

**中文解释：** 提供设备或产品的供应商／厂商。

**简单英文（整理解释）：** A supplier.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> vendor

**原文来源：** Week4.pdf · PDF页12 / 幻灯片12

**资料原文：** 名称或用语片段

> vendor

**原文来源：** Week3.pdf · PDF页54 / 幻灯片54

**语境：** Week4 · vendor

**语境英文：** A supplier.

**语境中文：** 提供设备或产品的供应商／厂商。

**语境依据：** 整理解释

**语境原文：** 用法片段

> vendor

**语境原文来源：** Week4.pdf · PDF页12 / 幻灯片12

**语境来源：** Week4.pdf · PDF页12 / 幻灯片12；Week4.pdf · PDF页12 / 幻灯片12

**语境：** Week3 · vendor

**语境英文：** A company supplying a product or service.

**语境中文：** 供应商；课件警告不要仅按某个供应商或熟悉的技术做设计。

**语境依据：** 按资料用法整理

**使用结构：** a particular vendor

**语境原文：** 名称或用语片段

> vendor

**语境原文来源：** Week3.pdf · PDF页54 / 幻灯片54

**语境来源：** Week3.pdf · PDF页54 / 幻灯片54

**全部来源：** Week4.pdf · PDF页12 / 幻灯片12；Week4.pdf · PDF页12 / 幻灯片12；Week3.pdf · PDF页54 / 幻灯片54

### perceived problems

**稳定ID：** csit985-w4-r-c71943d2f666ed

**类别：** 阅读词汇

**中文解释：** 被认为存在的问题；尚不等于已被测量验证的问题。

**简单英文（整理解释）：** Problems people believe exist.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> perceived problems

**原文来源：** Week4.pdf · PDF页12 / 幻灯片12

**语境：** Week4 · perceived problems

**语境英文：** Problems people believe exist.

**语境中文：** 被认为存在的问题；尚不等于已被测量验证的问题。

**语境依据：** 整理解释

**使用结构：** perceived + problems

**语境原文：** 用法片段

> perceived problems

**语境原文来源：** Week4.pdf · PDF页12 / 幻灯片12

**语境来源：** Week4.pdf · PDF页12 / 幻灯片12；Week4.pdf · PDF页12 / 幻灯片12

**使用结构：** perceived + problems

**全部来源：** Week4.pdf · PDF页12 / 幻灯片12；Week4.pdf · PDF页12 / 幻灯片12

### capability

**稳定ID：** csit985-w4-r-9d6308f91691b9

**类别：** 阅读词汇

**中文解释：** 系统能提供的能力或功能。

**简单英文（整理解释）：** An ability the system can provide.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> capability

**原文来源：** Week4.pdf · PDF页12 / 幻灯片12

**语境：** Week4 · capability

**语境英文：** An ability the system can provide.

**语境中文：** 系统能提供的能力或功能。

**语境依据：** 整理解释

**语境原文：** 用法片段

> capability

**语境原文来源：** Week4.pdf · PDF页12 / 幻灯片12

**语境来源：** Week4.pdf · PDF页12 / 幻灯片12；Week4.pdf · PDF页12 / 幻灯片12

**全部来源：** Week4.pdf · PDF页12 / 幻灯片12；Week4.pdf · PDF页12 / 幻灯片12

### administrative

**稳定ID：** csit985-w4-r-81e3a9af94aa58

**类别：** 阅读词汇

**中文解释：** 与组织行政管理有关的。

**简单英文（整理解释）：** Related to organisational administration.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Administrative

**原文来源：** Week4.pdf · PDF页13 / 幻灯片13

**语境：** Week4 · administrative

**语境英文：** Related to organisational administration.

**语境中文：** 与组织行政管理有关的。

**语境依据：** 整理解释

**语境原文：** 用法片段

> Administrative

**语境原文来源：** Week4.pdf · PDF页13 / 幻灯片13

**语境来源：** Week4.pdf · PDF页13 / 幻灯片13；Week4.pdf · PDF页13 / 幻灯片13

**全部来源：** Week4.pdf · PDF页13 / 幻灯片13；Week4.pdf · PDF页13 / 幻灯片13

### fit the funding constraints

**稳定ID：** csit985-w4-r-062787b3f19655

**类别：** 阅读词汇

**中文解释：** 符合资金限制；课件的MUST表示必须满足。

**简单英文（整理解释）：** Stay within the money limits.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> MUST fit the funding constraints

**原文来源：** Week4.pdf · PDF页14 / 幻灯片14

**语境：** Week4 · fit the funding constraints

**语境英文：** Stay within the money limits.

**语境中文：** 符合资金限制；课件的MUST表示必须满足。

**语境依据：** 整理解释

**使用结构：** fit + constraints

**语境原文：** 用法片段

> MUST fit the funding constraints

**语境原文来源：** Week4.pdf · PDF页14 / 幻灯片14

**语境来源：** Week4.pdf · PDF页14 / 幻灯片14；Week4.pdf · PDF页14 / 幻灯片14

**使用结构：** fit + constraints

**全部来源：** Week4.pdf · PDF页14 / 幻灯片14；Week4.pdf · PDF页14 / 幻灯片14

### realign expectations

**稳定ID：** csit985-w4-r-74c9234fdb10c9

**类别：** 阅读词汇

**中文解释：** 让预期重新符合实际情况；必要时才进行。

**简单英文（整理解释）：** Adjust expectations to fit the situation.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> realign the customers expectations

**原文来源：** Week4.pdf · PDF页15 / 幻灯片15

**语境：** Week4 · realign expectations

**语境英文：** Adjust expectations to fit the situation.

**语境中文：** 让预期重新符合实际情况；必要时才进行。

**语境依据：** 整理解释

**使用结构：** realign + expectations

**语境原文：** 用法片段

> realign the customers expectations

**语境原文来源：** Week4.pdf · PDF页15 / 幻灯片15

**语境来源：** Week4.pdf · PDF页15 / 幻灯片15；Week4.pdf · PDF页15 / 幻灯片15

**使用结构：** realign + expectations

**全部来源：** Week4.pdf · PDF页15 / 幻灯片15；Week4.pdf · PDF页15 / 幻灯片15

### trade off ... with ...

**稳定ID：** csit985-w4-r-b3b4b1d538c578

**类别：** 阅读词汇

**中文解释：** 在沟通用户的收益与耗时之间作权衡。原句缺be，保留疑点。

**简单英文（整理解释）：** Balance a benefit against a cost.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> traded off with

**原文来源：** Week4.pdf · PDF页16 / 幻灯片16

**语境：** Week4 · trade off ... with ...

**语境英文：** Balance a benefit against a cost.

**语境中文：** 在沟通用户的收益与耗时之间作权衡。原句缺be，保留疑点。

**语境依据：** 整理解释

**使用结构：** trade off + benefit + with + cost（使用结构；课件原句另列）

**语境原文：** 用法片段

> traded off with

**语境原文来源：** Week4.pdf · PDF页16 / 幻灯片16

**语境来源：** Week4.pdf · PDF页16 / 幻灯片16；Week4.pdf · PDF页16 / 幻灯片16

**使用结构：** trade off + benefit + with + cost（使用结构；课件原句另列）

**全部来源：** Week4.pdf · PDF页16 / 幻灯片16；Week4.pdf · PDF页16 / 幻灯片16

### lack of precision and clarity

**稳定ID：** csit985-w4-1c66f01b72b6f2

**类别：** 阅读词汇

**中文解释：** 缺少精确性和清晰度。

**简单英文（整理解释）：** Not being exact or clear enough.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> lack of precision and clarity

**原文来源：** Week4.pdf · PDF页17 / 幻灯片17

**语境：** Week4 · lack of precision and clarity

**语境英文：** Not being exact or clear enough.

**语境中文：** 缺少精确性和清晰度。

**语境依据：** 整理解释

**使用结构：** a lack of + noun

**语境原文：** 用法片段

> lack of precision and clarity

**语境原文来源：** Week4.pdf · PDF页17 / 幻灯片17

**语境来源：** Week4.pdf · PDF页17 / 幻灯片17；Week4.pdf · PDF页17 / 幻灯片17

**使用结构：** a lack of + noun

**全部来源：** Week4.pdf · PDF页17 / 幻灯片17；Week4.pdf · PDF页17 / 幻灯片17

### additions, deletions and modifications

**稳定ID：** csit985-w4-r-d48a69f10e7941

**类别：** 阅读词汇

**中文解释：** 新增、删除和修改；需求修订的三种变更。

**简单英文（整理解释）：** Things added, removed, or changed.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Additions, deletions and modifications

**原文来源：** Week4.pdf · PDF页23 / 幻灯片23

**语境：** Week4 · additions, deletions and modifications

**语境英文：** Things added, removed, or changed.

**语境中文：** 新增、删除和修改；需求修订的三种变更。

**语境依据：** 整理解释

**语境原文：** 用法片段

> Additions, deletions and modifications

**语境原文来源：** Week4.pdf · PDF页23 / 幻灯片23

**语境来源：** Week4.pdf · PDF页23 / 幻灯片23；Week4.pdf · PDF页23 / 幻灯片23

**全部来源：** Week4.pdf · PDF页23 / 幻灯片23；Week4.pdf · PDF页23 / 幻灯片23

### attempted and rejected

**稳定ID：** csit985-w4-r-1793d31a0c37ad

**类别：** 阅读词汇

**中文解释：** 尝试过但被拒绝；修订记录应保留这类历史。

**简单英文（整理解释）：** Tried but not accepted.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> attempted and rejected

**原文来源：** Week4.pdf · PDF页23 / 幻灯片23

**语境：** Week4 · attempted and rejected

**语境英文：** Tried but not accepted.

**语境中文：** 尝试过但被拒绝；修订记录应保留这类历史。

**语境依据：** 整理解释

**语境原文：** 用法片段

> attempted and rejected

**语境原文来源：** Week4.pdf · PDF页23 / 幻灯片23

**语境来源：** Week4.pdf · PDF页23 / 幻灯片23；Week4.pdf · PDF页23 / 幻灯片23

**全部来源：** Week4.pdf · PDF页23 / 幻灯片23；Week4.pdf · PDF页23 / 幻灯片23

### recurring

**稳定ID：** csit985-w4-r-c1d5aa780e9f97

**类别：** 阅读词汇

**中文解释：** 反复出现；示例中的应用性能问题。

**简单英文（整理解释）：** Happening repeatedly.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> recurring

**原文来源：** Week4.pdf · PDF页25 / 幻灯片25

**语境：** Week4 · recurring

**语境英文：** Happening repeatedly.

**语境中文：** 反复出现；示例中的应用性能问题。

**语境依据：** 整理解释

**语境原文：** 用法片段

> recurring

**语境原文来源：** Week4.pdf · PDF页25 / 幻灯片25

**语境来源：** Week4.pdf · PDF页25 / 幻灯片25；Week4.pdf · PDF页25 / 幻灯片25

**全部来源：** Week4.pdf · PDF页25 / 幻灯片25；Week4.pdf · PDF页25 / 幻灯片25

### distinguish between

**稳定ID：** csit985-w4-r-f1c5826de3b9e9

**类别：** 阅读词汇

**中文解释：** 区分不同性能级别或类别。

**简单英文（整理解释）：** Tell categories apart.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> distinguish between

**原文来源：** Week4.pdf · PDF页28 / 幻灯片28

**语境：** Week4 · distinguish between

**语境英文：** Tell categories apart.

**语境中文：** 区分不同性能级别或类别。

**语境依据：** 整理解释

**使用结构：** distinguish between + A and B

**语境原文：** 用法片段

> distinguish between

**语境原文来源：** Week4.pdf · PDF页28 / 幻灯片28

**语境来源：** Week4.pdf · PDF页28,29 / 幻灯片28,29；Week4.pdf · PDF页28 / 幻灯片28

**使用结构：** distinguish between + A and B

**全部来源：** Week4.pdf · PDF页28,29 / 幻灯片28,29；Week4.pdf · PDF页28 / 幻灯片28

### deliver what it promised

**稳定ID：** csit985-w4-r-14dbe8c86ab65f

**类别：** 阅读词汇

**中文解释：** 兑现先前承诺的服务；deliver不是递送包裹。

**简单英文（整理解释）：** Provide the service that was promised.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> delivering what it promised

**原文来源：** Week4.pdf · PDF页29 / 幻灯片29

**语境：** Week4 · deliver what it promised

**语境英文：** Provide the service that was promised.

**语境中文：** 兑现先前承诺的服务；deliver不是递送包裹。

**语境依据：** 整理解释

**语境原文：** 用法片段

> delivering what it promised

**语境原文来源：** Week4.pdf · PDF页29 / 幻灯片29

**语境来源：** Week4.pdf · PDF页28,29 / 幻灯片28,29；Week4.pdf · PDF页29 / 幻灯片29

**全部来源：** Week4.pdf · PDF页28,29 / 幻灯片28,29；Week4.pdf · PDF页29 / 幻灯片29

### in terms of

**稳定ID：** csit985-w4-r-381bef5e407723

**类别：** 阅读词汇

**中文解释：** 以所列指标／维度来描述。

**简单英文（整理解释）：** Using these measures or aspects.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> in terms of

**原文来源：** Week4.pdf · PDF页32 / 幻灯片32

**资料原文：** 名称或用语片段

> in terms of

**原文来源：** Week3.pdf · PDF页9 / 幻灯片9

**语境：** Week4 · in terms of

**语境英文：** Using these measures or aspects.

**语境中文：** 以所列指标／维度来描述。

**语境依据：** 整理解释

**使用结构：** in terms of + measures

**语境原文：** 用法片段

> in terms of

**语境原文来源：** Week4.pdf · PDF页32 / 幻灯片32

**语境来源：** Week4.pdf · PDF页32,34 / 幻灯片32,34；Week4.pdf · PDF页32 / 幻灯片32

**语境：** Week3 · in terms of

**语境英文：** When considering a particular kind of cost or measure.

**语境中文：** 从……方面衡量；本句问规划在时间和人力付出上的成本。

**语境依据：** 按资料用法整理

**使用结构：** in terms of time and personnel effort

**语境原文：** 名称或用语片段

> in terms of

**语境原文来源：** Week3.pdf · PDF页9 / 幻灯片9

**语境来源：** Week3.pdf · PDF页9 / 幻灯片9

**使用结构：** in terms of + measures

**全部来源：** Week4.pdf · PDF页32,34 / 幻灯片32,34；Week4.pdf · PDF页32 / 幻灯片32；Week3.pdf · PDF页9 / 幻灯片9

### statistical indicator

**稳定ID：** csit985-w4-r-80981816dd0982

**类别：** 阅读词汇

**中文解释：** 统计指标；不是对每次事件的保证。

**简单英文（整理解释）：** A measure based on statistics.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> statistical indicator

**原文来源：** Week4.pdf · PDF页42 / 幻灯片42

**语境：** Week4 · statistical indicator

**语境英文：** A measure based on statistics.

**语境中文：** 统计指标；不是对每次事件的保证。

**语境依据：** 整理解释

**语境原文：** 用法片段

> statistical indicator

**语境原文来源：** Week4.pdf · PDF页42 / 幻灯片42

**语境来源：** Week4.pdf · PDF页42,43 / 幻灯片42,43；Week4.pdf · PDF页42 / 幻灯片42

**全部来源：** Week4.pdf · PDF页42,43 / 幻灯片42,43；Week4.pdf · PDF页42 / 幻灯片42

### restore ... to full operational status

**稳定ID：** csit985-w4-r-3f5554cc68a549

**类别：** 阅读词汇

**中文解释：** 恢复系统完全运行状态，可能涉及多项修复步骤。

**简单英文（整理解释）：** Return the system to full working condition.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> restore system to full operational status

**原文来源：** Week4.pdf · PDF页43 / 幻灯片43

**语境：** Week4 · restore ... to full operational status

**语境英文：** Return the system to full working condition.

**语境中文：** 恢复系统完全运行状态，可能涉及多项修复步骤。

**语境依据：** 整理解释

**使用结构：** restore + system + to + status

**语境原文：** 用法片段

> restore system to full operational status

**语境原文来源：** Week4.pdf · PDF页43 / 幻灯片43

**语境来源：** Week4.pdf · PDF页42,43 / 幻灯片42,43；Week4.pdf · PDF页43 / 幻灯片43

**使用结构：** restore + system + to + status

**全部来源：** Week4.pdf · PDF页42,43 / 幻灯片42,43；Week4.pdf · PDF页43 / 幻灯片43

### does not necessarily reflect

**稳定ID：** csit985-w4-r-427a378ea6ecf9

**类别：** 阅读词汇

**中文解释：** 不必然反映；不能读成“绝对不反映”。

**简单英文（整理解释）：** Does not always show.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Does not necessarily reflect

**原文来源：** Week4.pdf · PDF页44 / 幻灯片44

**语境：** Week4 · does not necessarily reflect

**语境英文：** Does not always show.

**语境中文：** 不必然反映；不能读成“绝对不反映”。

**语境依据：** 整理解释

**使用结构：** does not necessarily + verb

**语境原文：** 用法片段

> Does not necessarily reflect

**语境原文来源：** Week4.pdf · PDF页44 / 幻灯片44

**语境来源：** Week4.pdf · PDF页44 / 幻灯片44；Week4.pdf · PDF页44 / 幻灯片44

**使用结构：** does not necessarily + verb

**全部来源：** Week4.pdf · PDF页44 / 幻灯片44；Week4.pdf · PDF页44 / 幻灯片44

### on a weekly/monthly/yearly basis

**稳定ID：** csit985-w4-r-adc9ed76af14df

**类别：** 阅读词汇

**中文解释：** 按周／月／年衡量；周期必须说明。

**简单英文（整理解释）：** Measured each week, month, or year.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> on a weekly/monthly/yearly basis

**原文来源：** Week4.pdf · PDF页45 / 幻灯片45

**语境：** Week4 · on a weekly/monthly/yearly basis

**语境英文：** Measured each week, month, or year.

**语境中文：** 按周／月／年衡量；周期必须说明。

**语境依据：** 整理解释

**使用结构：** on a ... basis

**语境原文：** 用法片段

> on a weekly/monthly/yearly basis

**语境原文来源：** Week4.pdf · PDF页45 / 幻灯片45

**语境来源：** Week4.pdf · PDF页45 / 幻灯片45；Week4.pdf · PDF页45 / 幻灯片45

**使用结构：** on a ... basis

**全部来源：** Week4.pdf · PDF页45 / 幻灯片45；Week4.pdf · PDF页45 / 幻灯片45

### consideration must be given to

**稳定ID：** csit985-w4-r-b9730523473e86

**类别：** 阅读词汇

**中文解释：** 必须考虑；容量估算中的要求。

**简单英文（整理解释）：** Must be considered.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Consideration must be given to

**原文来源：** Week4.pdf · PDF页56 / 幻灯片56

**语境：** Week4 · consideration must be given to

**语境英文：** Must be considered.

**语境中文：** 必须考虑；容量估算中的要求。

**语境依据：** 整理解释

**使用结构：** give consideration to + factor

**语境原文：** 用法片段

> Consideration must be given to

**语境原文来源：** Week4.pdf · PDF页56 / 幻灯片56

**语境来源：** Week4.pdf · PDF页55,56 / 幻灯片55,56；Week4.pdf · PDF页56 / 幻灯片56

**使用结构：** give consideration to + factor

**全部来源：** Week4.pdf · PDF页55,56 / 幻灯片55,56；Week4.pdf · PDF页56 / 幻灯片56

### periodic preventative maintenance

**稳定ID：** csit985-w4-r-b6bcd05a116e9f

**类别：** 阅读词汇

**中文解释：** 周期性的预防维护；用于减少故障风险。

**简单英文（整理解释）：** Regular work intended to prevent failures.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> periodic preventative maintenance

**原文来源：** Week4.pdf · PDF页60 / 幻灯片60

**语境：** Week4 · periodic preventative maintenance

**语境英文：** Regular work intended to prevent failures.

**语境中文：** 周期性的预防维护；用于减少故障风险。

**语境依据：** 整理解释

**语境原文：** 用法片段

> periodic preventative maintenance

**语境原文来源：** Week4.pdf · PDF页60 / 幻灯片60

**语境来源：** Week4.pdf · PDF页60 / 幻灯片60；Week4.pdf · PDF页60 / 幻灯片60

**全部来源：** Week4.pdf · PDF页60 / 幻灯片60；Week4.pdf · PDF页60 / 幻灯片60

### reconfiguring components

**稳定ID：** csit985-w4-r-d758e877bd0b07

**类别：** 阅读词汇

**中文解释：** 重新配置部件；示例发生在计划维护期间。

**简单英文（整理解释）：** Changing how components are configured.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> reconfiguring components

**原文来源：** Week4.pdf · PDF页60 / 幻灯片60

**语境：** Week4 · reconfiguring components

**语境英文：** Changing how components are configured.

**语境中文：** 重新配置部件；示例发生在计划维护期间。

**语境依据：** 整理解释

**语境原文：** 用法片段

> reconfiguring components

**语境原文来源：** Week4.pdf · PDF页60 / 幻灯片60

**语境来源：** Week4.pdf · PDF页60 / 幻灯片60；Week4.pdf · PDF页60 / 幻灯片60

**全部来源：** Week4.pdf · PDF页60 / 幻灯片60；Week4.pdf · PDF页60 / 幻灯片60

### abnormal procedures

**稳定ID：** csit985-w4-r-af17350f305bdc

**类别：** 阅读词汇

**中文解释：** 异常故障时应采用的处理程序，而非正常日常步骤。

**简单英文（整理解释）：** Special procedures for faults.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> abnormal procedures

**原文来源：** Week4.pdf · PDF页60 / 幻灯片60

**语境：** Week4 · abnormal procedures

**语境英文：** Special procedures for faults.

**语境中文：** 异常故障时应采用的处理程序，而非正常日常步骤。

**语境依据：** 整理解释

**语境原文：** 用法片段

> abnormal procedures

**语境原文来源：** Week4.pdf · PDF页60 / 幻灯片60

**语境来源：** Week4.pdf · PDF页60 / 幻灯片60；Week4.pdf · PDF页60 / 幻灯片60

**全部来源：** Week4.pdf · PDF页60 / 幻灯片60；Week4.pdf · PDF页60 / 幻灯片60

### not always perfectly linear

**稳定ID：** csit985-w4-c482d530daccd6

**类别：** 阅读词汇

**中文解释：** 流程并非总是完全线性；新信息可能使分析回到早期步骤。

**简单英文（整理解释）：** The process can return to an earlier step.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语

> not always perfectly linear

**原文来源：** Week4_transcript.txt · TXT原始L2，本行字符3417起；搜索“not always perfectly linear”

**语境：** Week4 · not always perfectly linear

**语境英文：** The process can return to an earlier step.

**语境中文：** 流程并非总是完全线性；新信息可能使分析回到早期步骤。

**语境依据：** 教师补充

**语境原文：** 教师用语

> not always perfectly linear

**语境原文来源：** Week4_transcript.txt · TXT原始L2，本行字符3417起；搜索“not always perfectly linear”

**语境来源：** Week4_transcript.txt · TXT原始L2，本行字符3417起；搜索“not always perfectly linear”

**全部来源：** Week4_transcript.txt · TXT原始L2，本行字符3417起；搜索“not always perfectly linear”

### allocate network resources

**稳定ID：** csit985-w4-r-6940d8e8638671

**类别：** 阅读词汇

**中文解释：** 决定网络资源怎样分配。

**简单英文（整理解释）：** Decide where network resources go.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语

> allocate network resources

**原文来源：** Week4_transcript.txt · TXT原始L2，本行字符10090起；搜索“allocate network resources”

**语境：** Week4 · allocate network resources

**语境英文：** Decide where network resources go.

**语境中文：** 决定网络资源怎样分配。

**语境依据：** 教师补充

**使用结构：** allocate + resources

**语境原文：** 教师用语

> allocate network resources

**语境原文来源：** Week4_transcript.txt · TXT原始L2，本行字符10090起；搜索“allocate network resources”

**语境来源：** Week4_transcript.txt · TXT原始L2，本行字符6757起；搜索“measured and, and tested”；Week4_transcript.txt · TXT原始L2，本行字符11107起；搜索“measurements give us evidence”；Week4_transcript.txt · TXT原始L2，本行字符10090起；搜索“allocate network resources”

**使用结构：** allocate + resources

**全部来源：** Week4_transcript.txt · TXT原始L2，本行字符6757起；搜索“measured and, and tested”；Week4_transcript.txt · TXT原始L2，本行字符11107起；搜索“measurements give us evidence”；Week4_transcript.txt · TXT原始L2，本行字符10090起；搜索“allocate network resources”

### duration

**稳定ID：** csit985-w4-r-2b988a9e6437fc

**类别：** 阅读词汇

**中文解释：** 持续时间；图中用于表示活跃会话持续多久。

**简单英文（整理解释）：** How long a session lasts.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Duration

**原文来源：** Week4.pdf · PDF页39 / 幻灯片39

**语境：** Week4 · duration

**语境英文：** How long a session lasts.

**语境中文：** 持续时间；图中用于表示活跃会话持续多久。

**语境依据：** 整理解释

**语境原文：** 用法片段

> Duration

**语境原文来源：** Week4.pdf · PDF页39 / 幻灯片39

**语境来源：** Week4.pdf · PDF页39 / 幻灯片39；Week4.pdf · PDF页39 / 幻灯片39

**全部来源：** Week4.pdf · PDF页39 / 幻灯片39；Week4.pdf · PDF页39 / 幻灯片39

### operations and support

**稳定ID：** csit985-w4-r-b78debdf9d02aa

**类别：** 阅读词汇

**中文解释：** 运行操作与支持；图中区分日常操作和支持资源。

**简单英文（整理解释）：** Work to operate and support a network.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图表标签

> Operations and Support

**原文来源：** Week4.pdf · PDF页57 / 幻灯片57（图表）

**语境：** Week4 · operations and support

**语境英文：** Work to operate and support a network.

**语境中文：** 运行操作与支持；图中区分日常操作和支持资源。

**语境依据：** 整理解释

**语境原文：** 图表标签

> Operations and Support

**语境原文来源：** Week4.pdf · PDF页57 / 幻灯片57（图表）

**语境来源：** Week4.pdf · PDF页57 / 幻灯片57；Week4.pdf · PDF页57 / 幻灯片57（图表）

**全部来源：** Week4.pdf · PDF页57 / 幻灯片57；Week4.pdf · PDF页57 / 幻灯片57（图表）

### workforce

**稳定ID：** csit985-w4-r-f4446374e5aa13

**类别：** 阅读词汇

**中文解释：** 人员队伍；此处为支持网络运行的人员。

**简单英文（整理解释）：** The people doing the work.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Workforce

**原文来源：** Week4.pdf · PDF页59 / 幻灯片59

**语境：** Week4 · workforce

**语境英文：** The people doing the work.

**语境中文：** 人员队伍；此处为支持网络运行的人员。

**语境依据：** 整理解释

**语境原文：** 用法片段

> Workforce

**语境原文来源：** Week4.pdf · PDF页59 / 幻灯片59

**语境来源：** Week4.pdf · PDF页59 / 幻灯片59；Week4.pdf · PDF页59 / 幻灯片59

**全部来源：** Week4.pdf · PDF页59 / 幻灯片59；Week4.pdf · PDF页59 / 幻灯片59

### staffing levels

**稳定ID：** csit985-w4-r-dc7647a01bfba4

**类别：** 阅读词汇

**中文解释：** 人员配备水平；影响持续运行的支持能力。

**简单英文（整理解释）：** The number and mix of staff.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> staffing levels

**原文来源：** Week4.pdf · PDF页59 / 幻灯片59

**语境：** Week4 · staffing levels

**语境英文：** The number and mix of staff.

**语境中文：** 人员配备水平；影响持续运行的支持能力。

**语境依据：** 整理解释

**语境原文：** 用法片段

> staffing levels

**语境原文来源：** Week4.pdf · PDF页59 / 幻灯片59

**语境来源：** Week4.pdf · PDF页59 / 幻灯片59；Week4.pdf · PDF页59 / 幻灯片59

**全部来源：** Week4.pdf · PDF页59 / 幻灯片59；Week4.pdf · PDF页59 / 幻灯片59

### be called for

**稳定ID：** csit985-w4-r-400ffff8c1f614

**类别：** 阅读词汇

**中文解释：** 被需要或被要求；requirement定义中的表达。

**简单英文（整理解释）：** Be needed or required.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> called for

**原文来源：** Week4.pdf · PDF页4 / 幻灯片4

**语境：** Week4 · be called for

**语境英文：** Be needed or required.

**语境中文：** 被需要或被要求；requirement定义中的表达。

**语境依据：** 整理解释

**使用结构：** be called for（被动表达）

**语境原文：** 用法片段

> called for

**语境原文来源：** Week4.pdf · PDF页4 / 幻灯片4

**语境来源：** Week4.pdf · PDF页4 / 幻灯片4；Week4.pdf · PDF页4 / 幻灯片4

**使用结构：** be called for（被动表达）

**全部来源：** Week4.pdf · PDF页4 / 幻灯片4；Week4.pdf · PDF页4 / 幻灯片4

### comply with

**稳定ID：** csit985-w4-r-a93c65321781ff

**类别：** 阅读词汇

**中文解释：** 遵守或满足条件；不是简单赞同。

**简单英文（整理解释）：** Meet a stated rule or condition.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> complied with

**原文来源：** Week4.pdf · PDF页4 / 幻灯片4

**语境：** Week4 · comply with

**语境英文：** Meet a stated rule or condition.

**语境中文：** 遵守或满足条件；不是简单赞同。

**语境依据：** 整理解释

**使用结构：** comply with + condition/rule

**语境原文：** 用法片段

> complied with

**语境原文来源：** Week4.pdf · PDF页4 / 幻灯片4

**语境来源：** Week4.pdf · PDF页4 / 幻灯片4；Week4.pdf · PDF页4 / 幻灯片4

**使用结构：** comply with + condition/rule

**全部来源：** Week4.pdf · PDF页4 / 幻灯片4；Week4.pdf · PDF页4 / 幻灯片4

### misuse

**稳定ID：** csit985-w4-r-dd8185c60fc765

**类别：** 阅读词汇

**中文解释：** 误用；课件说real-time可能被误用。

**简单英文（整理解释）：** Wrong use of a word or idea.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Misuse

**原文来源：** Week4.pdf · PDF页17 / 幻灯片17

**语境：** Week4 · misuse

**语境英文：** Wrong use of a word or idea.

**语境中文：** 误用；课件说real-time可能被误用。

**语境依据：** 整理解释

**语境原文：** 用法片段

> Misuse

**语境原文来源：** Week4.pdf · PDF页17 / 幻灯片17

**语境来源：** Week4.pdf · PDF页17 / 幻灯片17；Week4.pdf · PDF页17 / 幻灯片17

**全部来源：** Week4.pdf · PDF页17 / 幻灯片17；Week4.pdf · PDF页17 / 幻灯片17

### solely

**稳定ID：** csit985-w4-r-d82051a8892f87

**类别：** 阅读词汇

**中文解释：** 仅仅；只报百分比并不构成完整可用性要求。

**简单英文（整理解释）：** Only, without other information.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> solely

**原文来源：** Week4.pdf · PDF页17 / 幻灯片17

**语境：** Week4 · solely

**语境英文：** Only, without other information.

**语境中文：** 仅仅；只报百分比并不构成完整可用性要求。

**语境依据：** 整理解释

**语境原文：** 用法片段

> solely

**语境原文来源：** Week4.pdf · PDF页17 / 幻灯片17

**语境来源：** Week4.pdf · PDF页17 / 幻灯片17；Week4.pdf · PDF页17 / 幻灯片17

**全部来源：** Week4.pdf · PDF页17 / 幻灯片17；Week4.pdf · PDF页17 / 幻灯片17

### verification of need

**稳定ID：** csit985-w4-r-97786869527f1d

**类别：** 阅读词汇

**中文解释：** 验证确实存在该需要；不能只接受high-performance标签。

**简单英文（整理解释）：** Checking that a need is real.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> verification of need

**原文来源：** Week4.pdf · PDF页17 / 幻灯片17

**语境：** Week4 · verification of need

**语境英文：** Checking that a need is real.

**语境中文：** 验证确实存在该需要；不能只接受high-performance标签。

**语境依据：** 整理解释

**使用结构：** verification of + need

**语境原文：** 用法片段

> verification of need

**语境原文来源：** Week4.pdf · PDF页17 / 幻灯片17

**语境来源：** Week4.pdf · PDF页17 / 幻灯片17；Week4.pdf · PDF页17 / 幻灯片17

**使用结构：** verification of + need

**全部来源：** Week4.pdf · PDF页17 / 幻灯片17；Week4.pdf · PDF页17 / 幻灯片17

### highly variable

**稳定ID：** csit985-w4-r-11850de0aa45c7

**类别：** 阅读词汇

**中文解释：** 变化很大；描述不稳定的需求。

**简单英文（整理解释）：** Changing greatly.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Highly variable

**原文来源：** Week4.pdf · PDF页17 / 幻灯片17

**语境：** Week4 · highly variable

**语境英文：** Changing greatly.

**语境中文：** 变化很大；描述不稳定的需求。

**语境依据：** 整理解释

**语境原文：** 用法片段

> Highly variable

**语境原文来源：** Week4.pdf · PDF页17 / 幻灯片17

**语境来源：** Week4.pdf · PDF页17 / 幻灯片17；Week4.pdf · PDF页17 / 幻灯片17

**全部来源：** Week4.pdf · PDF页17 / 幻灯片17；Week4.pdf · PDF页17 / 幻灯片17

### inconsistent

**稳定ID：** csit985-w4-r-c3eed310e4a9a6

**类别：** 阅读词汇

**中文解释：** 前后不一致；描述互不吻合的需求。

**简单英文（整理解释）：** Not agreeing across statements.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> inconsistent

**原文来源：** Week4.pdf · PDF页17 / 幻灯片17

**语境：** Week4 · inconsistent

**语境英文：** Not agreeing across statements.

**语境中文：** 前后不一致；描述互不吻合的需求。

**语境依据：** 整理解释

**语境原文：** 用法片段

> inconsistent

**语境原文来源：** Week4.pdf · PDF页17 / 幻灯片17

**语境来源：** Week4.pdf · PDF页17 / 幻灯片17；Week4.pdf · PDF页17 / 幻灯片17

**全部来源：** Week4.pdf · PDF页17 / 幻灯片17；Week4.pdf · PDF页17 / 幻灯片17

### distinctive set

**稳定ID：** csit985-w4-r-14a133f2e5fc89

**类别：** 阅读词汇

**中文解释：** 有显著区别的一组；用来区分高性能需求组。

**简单英文（整理解释）：** A clearly different group.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> distinctive set

**原文来源：** Week4.pdf · PDF页18 / 幻灯片18

**语境：** Week4 · distinctive set

**语境英文：** A clearly different group.

**语境中文：** 有显著区别的一组；用来区分高性能需求组。

**语境依据：** 整理解释

**语境原文：** 用法片段

> distinctive set

**语境原文来源：** Week4.pdf · PDF页18 / 幻灯片18

**语境来源：** Week4.pdf · PDF页18 / 幻灯片18；Week4.pdf · PDF页18 / 幻灯片18

**全部来源：** Week4.pdf · PDF页18 / 幻灯片18；Week4.pdf · PDF页18 / 幻灯片18

### hard threshold

**稳定ID：** csit985-w4-r-c22a33bc98d673

**类别：** 阅读词汇

**中文解释：** 明确分界；hard不是物体坚硬的意思。

**简单英文（整理解释）：** A clear dividing boundary.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Hard threshold

**原文来源：** Week4.pdf · PDF页18 / 幻灯片18

**语境：** Week4 · hard threshold

**语境英文：** A clear dividing boundary.

**语境中文：** 明确分界；hard不是物体坚硬的意思。

**语境依据：** 整理解释

**语境原文：** 用法片段

> Hard threshold

**语境原文来源：** Week4.pdf · PDF页18 / 幻灯片18

**语境来源：** Week4.pdf · PDF页18 / 幻灯片18；Week4.pdf · PDF页18 / 幻灯片18

**全部来源：** Week4.pdf · PDF页18 / 幻灯片18；Week4.pdf · PDF页18 / 幻灯片18

### conduct measurements

**稳定ID：** csit985-w4-r-8db2eea4e67519

**类别：** 阅读词汇

**中文解释：** 开展测量；基础形用于理解原文conducted。

**简单英文（整理解释）：** Carry out measurements.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> conducted on

**原文来源：** Week4.pdf · PDF页21 / 幻灯片21

**语境：** Week4 · conduct measurements

**语境英文：** Carry out measurements.

**语境中文：** 开展测量；基础形用于理解原文conducted。

**语境依据：** 整理解释

**使用结构：** conduct + measurements（使用结构）

**语境原文：** 用法片段

> conducted on

**语境原文来源：** Week4.pdf · PDF页21 / 幻灯片21

**语境来源：** Week4.pdf · PDF页21 / 幻灯片21；Week4.pdf · PDF页21 / 幻灯片21

**使用结构：** conduct + measurements（使用结构）

**全部来源：** Week4.pdf · PDF页21 / 幻灯片21；Week4.pdf · PDF页21 / 幻灯片21

### suite of applications

**稳定ID：** csit985-w4-r-3b3b11e9c35c9d

**类别：** 阅读词汇

**中文解释：** 一组应用；suite不是酒店套房。

**简单英文（整理解释）：** A collection of applications.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> suite of applications

**原文来源：** Week4.pdf · PDF页21 / 幻灯片21

**语境：** Week4 · suite of applications

**语境英文：** A collection of applications.

**语境中文：** 一组应用；suite不是酒店套房。

**语境依据：** 整理解释

**语境原文：** 用法片段

> suite of applications

**语境原文来源：** Week4.pdf · PDF页21 / 幻灯片21

**语境来源：** Week4.pdf · PDF页21 / 幻灯片21；Week4.pdf · PDF页21 / 幻灯片21

**全部来源：** Week4.pdf · PDF页21 / 幻灯片21；Week4.pdf · PDF页21 / 幻灯片21

### validate

**稳定ID：** csit985-w4-r-e7eb582ee31fa3

**类别：** 阅读词汇

**中文解释：** 用证据验证；此处检查现有网络的性能问题。

**简单英文（整理解释）：** Check using evidence.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> validate performance problems

**原文来源：** Week4.pdf · PDF页21 / 幻灯片21

**语境：** Week4 · validate

**语境英文：** Check using evidence.

**语境中文：** 用证据验证；此处检查现有网络的性能问题。

**语境依据：** 整理解释

**使用结构：** validate + performance problems

**语境原文：** 用法片段

> validate performance problems

**语境原文来源：** Week4.pdf · PDF页21 / 幻灯片21

**语境来源：** Week4.pdf · PDF页21 / 幻灯片21；Week4.pdf · PDF页21 / 幻灯片21

**使用结构：** validate + performance problems

**全部来源：** Week4.pdf · PDF页21 / 幻灯片21；Week4.pdf · PDF页21 / 幻灯片21

### simplistic approximations

**稳定ID：** csit985-w4-r-a1f19d0acce670

**类别：** 阅读词汇

**中文解释：** 简化的近似；省略细节，不当作精确结果。

**简单英文（整理解释）：** Very simple models that leave detail out.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> simplistic approximations

**原文来源：** Week4.pdf · PDF页37 / 幻灯片37

**语境：** Week4 · simplistic approximations

**语境英文：** Very simple models that leave detail out.

**语境中文：** 简化的近似；省略细节，不当作精确结果。

**语境依据：** 整理解释

**语境原文：** 用法片段

> simplistic approximations

**语境原文来源：** Week4.pdf · PDF页37 / 幻灯片37

**语境来源：** Week4.pdf · PDF页37 / 幻灯片37；Week4.pdf · PDF页37 / 幻灯片37

**全部来源：** Week4.pdf · PDF页37 / 幻灯片37；Week4.pdf · PDF页37 / 幻灯片37

### complex representations

**稳定ID：** csit985-w4-r-64a2698f0c6984

**类别：** 阅读词汇

**中文解释：** 较复杂的表示；模型包含更多细节。

**简单英文（整理解释）：** Models with more detail.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> complex representations

**原文来源：** Week4.pdf · PDF页37 / 幻灯片37

**语境：** Week4 · complex representations

**语境英文：** Models with more detail.

**语境中文：** 较复杂的表示；模型包含更多细节。

**语境依据：** 整理解释

**语境原文：** 用法片段

> complex representations

**语境原文来源：** Week4.pdf · PDF页37 / 幻灯片37

**语境来源：** Week4.pdf · PDF页37 / 幻灯片37；Week4.pdf · PDF页37 / 幻灯片37

**全部来源：** Week4.pdf · PDF页37 / 幻灯片37；Week4.pdf · PDF页37 / 幻灯片37

### skyrocket

**稳定ID：** csit985-w4-r-e881e8e30a76c4

**类别：** 阅读词汇

**中文解释：** 猛增；此处说更高可用性的努力与成本。

**简单英文（整理解释）：** Rise very fast.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> skyrocket

**原文来源：** Week4.pdf · PDF页48 / 幻灯片48

**语境：** Week4 · skyrocket

**语境英文：** Rise very fast.

**语境中文：** 猛增；此处说更高可用性的努力与成本。

**语境依据：** 整理解释

**语境原文：** 用法片段

> skyrocket

**语境原文来源：** Week4.pdf · PDF页48 / 幻灯片48

**语境来源：** Week4.pdf · PDF页48 / 幻灯片48；Week4.pdf · PDF页48 / 幻灯片48

**全部来源：** Week4.pdf · PDF页48 / 幻灯片48；Week4.pdf · PDF页48 / 幻灯片48

### tolerate downtime

**稳定ID：** csit985-w4-r-29cc42aacca1bb

**类别：** 阅读词汇

**中文解释：** 容忍停机；有些应用在会话期间不能容忍任何停机。

**简单英文（整理解释）：** Accept unavailable time without unacceptable harm.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> cannot tolerate any downtime during session

**原文来源：** Week4.pdf · PDF页48 / 幻灯片48

**语境：** Week4 · tolerate downtime

**语境英文：** Accept unavailable time without unacceptable harm.

**语境中文：** 容忍停机；有些应用在会话期间不能容忍任何停机。

**语境依据：** 整理解释

**使用结构：** tolerate + downtime

**语境原文：** 用法片段

> cannot tolerate any downtime during session

**语境原文来源：** Week4.pdf · PDF页48 / 幻灯片48

**语境来源：** Week4.pdf · PDF页48 / 幻灯片48；Week4.pdf · PDF页48 / 幻灯片48

**使用结构：** tolerate + downtime

**全部来源：** Week4.pdf · PDF页48 / 幻灯片48；Week4.pdf · PDF页48 / 幻灯片48

### stall

**稳定ID：** csit985-w4-r-ae21b0abb994c4

**类别：** 阅读词汇

**中文解释：** 应用停顿、不能继续前进；不是停止运行的必然永久状态。

**简单英文（整理解释）：** Stop making progress for a time.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Applications stall

**原文来源：** Week4.pdf · PDF页49 / 幻灯片49

**语境：** Week4 · stall

**语境英文：** Stop making progress for a time.

**语境中文：** 应用停顿、不能继续前进；不是停止运行的必然永久状态。

**语境依据：** 整理解释

**语境原文：** 用法片段

> Applications stall

**语境原文来源：** Week4.pdf · PDF页49 / 幻灯片49

**语境来源：** Week4.pdf · PDF页49 / 幻灯片49；Week4.pdf · PDF页49 / 幻灯片49

**全部来源：** Week4.pdf · PDF页49 / 幻灯片49；Week4.pdf · PDF页49 / 幻灯片49

### be accounted for

**稳定ID：** csit985-w4-r-0dddcbd5cfa9fd

**类别：** 阅读词汇

**中文解释：** 被计入评估；短暂中断也必须计入overall availability。

**简单英文（整理解释）：** Be included in the assessment.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> accounted for in overall availability

**原文来源：** Week4.pdf · PDF页49 / 幻灯片49

**语境：** Week4 · be accounted for

**语境英文：** Be included in the assessment.

**语境中文：** 被计入评估；短暂中断也必须计入overall availability。

**语境依据：** 整理解释

**使用结构：** be accounted for in + assessment

**语境原文：** 用法片段

> accounted for in overall availability

**语境原文来源：** Week4.pdf · PDF页49 / 幻灯片49

**语境来源：** Week4.pdf · PDF页49 / 幻灯片49；Week4.pdf · PDF页49 / 幻灯片49

**使用结构：** be accounted for in + assessment

**全部来源：** Week4.pdf · PDF页49 / 幻灯片49；Week4.pdf · PDF页49 / 幻灯片49

### explicitly state

**稳定ID：** csit985-w4-r-2f486f381f516f

**类别：** 阅读词汇

**中文解释：** 明确说出；例如任何位置的停机是否计入。

**简单英文（整理解释）：** Say clearly.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> explicitly state

**原文来源：** Week4.pdf · PDF页51 / 幻灯片51

**语境：** Week4 · explicitly state

**语境英文：** Say clearly.

**语境中文：** 明确说出；例如任何位置的停机是否计入。

**语境依据：** 整理解释

**语境原文：** 用法片段

> explicitly state

**语境原文来源：** Week4.pdf · PDF页51 / 幻灯片51

**语境来源：** Week4.pdf · PDF页51 / 幻灯片51；Week4.pdf · PDF页51 / 幻灯片51

**全部来源：** Week4.pdf · PDF页51 / 幻灯片51；Week4.pdf · PDF页51 / 幻灯片51

### selectively

**稳定ID：** csit985-w4-r-3616573fab5774

**类别：** 阅读词汇

**中文解释：** 有选择地测量；必须说明所选端点／范围。

**简单英文（整理解释）：** For selected parts.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> selectively

**原文来源：** Week4.pdf · PDF页51 / 幻灯片51

**语境：** Week4 · selectively

**语境英文：** For selected parts.

**语境中文：** 有选择地测量；必须说明所选端点／范围。

**语境依据：** 整理解释

**语境原文：** 用法片段

> selectively

**语境原文来源：** Week4.pdf · PDF页51 / 幻灯片51

**语境来源：** Week4.pdf · PDF页51 / 幻灯片51；Week4.pdf · PDF页51 / 幻灯片51

**全部来源：** Week4.pdf · PDF页51 / 幻灯片51；Week4.pdf · PDF页51 / 幻灯片51

### cope with

**稳定ID：** csit985-w4-r-00d9488c561e66

**类别：** 阅读词汇

**中文解释：** 应对；一些小中断和一次大中断可能产生不同影响。

**简单英文（整理解释）：** Deal with a problem.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> cope with

**原文来源：** Week4.pdf · PDF页51 / 幻灯片51

**语境：** Week4 · cope with

**语境英文：** Deal with a problem.

**语境中文：** 应对；一些小中断和一次大中断可能产生不同影响。

**语境依据：** 整理解释

**使用结构：** cope with + outages

**语境原文：** 用法片段

> cope with

**语境原文来源：** Week4.pdf · PDF页51 / 幻灯片51

**语境来源：** Week4.pdf · PDF页51 / 幻灯片51；Week4.pdf · PDF页51 / 幻灯片51

**使用结构：** cope with + outages

**全部来源：** Week4.pdf · PDF页51 / 幻灯片51；Week4.pdf · PDF页51 / 幻灯片51

### do NOT apply to

**稳定ID：** csit985-w4-r-32a1f0c0b44a60

**类别：** 阅读词汇

**中文解释：** 不适用于；示例可用性要求排除计划维护停机。

**简单英文（整理解释）：** Do not cover the stated scope.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> do NOT apply to

**原文来源：** Week4.pdf · PDF页52 / 幻灯片52

**语境：** Week4 · do NOT apply to

**语境英文：** Do not cover the stated scope.

**语境中文：** 不适用于；示例可用性要求排除计划维护停机。

**语境依据：** 整理解释

**使用结构：** apply to + scope

**语境原文：** 用法片段

> do NOT apply to

**语境原文来源：** Week4.pdf · PDF页52 / 幻灯片52

**语境来源：** Week4.pdf · PDF页52,53 / 幻灯片52,53；Week4.pdf · PDF页52 / 幻灯片52

**使用结构：** apply to + scope

**全部来源：** Week4.pdf · PDF页52,53 / 幻灯片52,53；Week4.pdf · PDF页52 / 幻灯片52

### perceive delay

**稳定ID：** csit985-w4-r-ad4d4a4b49a440

**类别：** 阅读词汇

**中文解释：** 感知到延迟；与愿意等待多久不同。

**简单英文（整理解释）：** Notice a delay.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> perceive delay

**原文来源：** Week4.pdf · PDF页53 / 幻灯片53

**语境：** Week4 · perceive delay

**语境英文：** Notice a delay.

**语境中文：** 感知到延迟；与愿意等待多久不同。

**语境依据：** 整理解释

**使用结构：** perceive + delay

**语境原文：** 用法片段

> perceive delay

**语境原文来源：** Week4.pdf · PDF页53 / 幻灯片53

**语境来源：** Week4.pdf · PDF页52,53 / 幻灯片52,53；Week4.pdf · PDF页53 / 幻灯片53

**使用结构：** perceive + delay

**全部来源：** Week4.pdf · PDF页52,53 / 幻灯片52,53；Week4.pdf · PDF页53 / 幻灯片53

### supplemental

**稳定ID：** csit985-w4-r-2ab0cdce424155

**类别：** 阅读词汇

**中文解释：** 补充的；本页介绍其他性能要求。

**简单英文（整理解释）：** Extra or additional.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Supplemental

**原文来源：** Week4.pdf · PDF页57 / 幻灯片57

**资料原文：** 用法片段

> Supplemental

**原文来源：** Week4.pdf · PDF页59 / 幻灯片59

**语境：** Week4 · supplemental

**语境英文：** Extra or additional.

**语境中文：** 补充的；本页介绍其他性能要求。

**语境依据：** 整理解释

**语境原文：** 用法片段

> Supplemental

**语境原文来源：** Week4.pdf · PDF页57 / 幻灯片57

**语境原文：** 用法片段

> Supplemental

**语境原文来源：** Week4.pdf · PDF页59 / 幻灯片59

**语境来源：** Week4.pdf · PDF页57,59 / 幻灯片57,59；Week4.pdf · PDF页57 / 幻灯片57；Week4.pdf · PDF页59 / 幻灯片59

**全部来源：** Week4.pdf · PDF页57,59 / 幻灯片57,59；Week4.pdf · PDF页57 / 幻灯片57；Week4.pdf · PDF页59 / 幻灯片59

### driven by

**稳定ID：** csit985-w4-r-f7dfbb60981d22

**类别：** 阅读词汇

**中文解释：** 由所列因素影响；这里不是被驾驶。

**简单英文（整理解释）：** Affected by.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Driven by

**原文来源：** Week4.pdf · PDF页59 / 幻灯片59

**语境：** Week4 · driven by

**语境英文：** Affected by.

**语境中文：** 由所列因素影响；这里不是被驾驶。

**语境依据：** 整理解释

**使用结构：** be driven by + factors

**语境原文：** 用法片段

> Driven by

**语境原文来源：** Week4.pdf · PDF页59 / 幻灯片59

**语境来源：** Week4.pdf · PDF页57,59 / 幻灯片57,59；Week4.pdf · PDF页59 / 幻灯片59

**使用结构：** be driven by + factors

**全部来源：** Week4.pdf · PDF页57,59 / 幻灯片57,59；Week4.pdf · PDF页59 / 幻灯片59

### continued operations

**稳定ID：** csit985-w4-r-5edc69af86ac42

**类别：** 阅读词汇

**中文解释：** 持续运行；交付日以后还需要支持。

**简单英文（整理解释）：** Keeping the system working over time.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> continued operations

**原文来源：** Week4.pdf · PDF页59 / 幻灯片59

**语境：** Week4 · continued operations

**语境英文：** Keeping the system working over time.

**语境中文：** 持续运行；交付日以后还需要支持。

**语境依据：** 整理解释

**语境原文：** 用法片段

> continued operations

**语境原文来源：** Week4.pdf · PDF页59 / 幻灯片59

**语境来源：** Week4.pdf · PDF页57,59 / 幻灯片57,59；Week4.pdf · PDF页59 / 幻灯片59

**全部来源：** Week4.pdf · PDF页57,59 / 幻灯片57,59；Week4.pdf · PDF页59 / 幻灯片59

### arbitrary

**稳定ID：** csit985-w4-r-0d5440bdf5ccc8

**类别：** 阅读词汇

**中文解释：** 人为选定；时延连续分布时未必有自然分界。

**简单英文（整理解释）：** Chosen without a natural dividing point.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> arbitrary

**原文来源：** Week4.pdf · PDF页64 / 幻灯片64

**语境：** Week4 · arbitrary

**语境英文：** Chosen without a natural dividing point.

**语境中文：** 人为选定；时延连续分布时未必有自然分界。

**语境依据：** 整理解释

**语境原文：** 用法片段

> arbitrary

**语境原文来源：** Week4.pdf · PDF页64 / 幻灯片64

**语境来源：** Week4.pdf · PDF页64,66 / 幻灯片64,66；Week4.pdf · PDF页64 / 幻灯片64

**全部来源：** Week4.pdf · PDF页64,66 / 幻灯片64,66；Week4.pdf · PDF页64 / 幻灯片64

### continuous range

**稳定ID：** csit985-w4-r-e631737d30f9fd

**类别：** 阅读词汇

**中文解释：** 连续范围；各值之间没有清楚的分组空隙。

**简单英文（整理解释）：** Values without a clear gap.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> continuous range

**原文来源：** Week4.pdf · PDF页64 / 幻灯片64

**语境：** Week4 · continuous range

**语境英文：** Values without a clear gap.

**语境中文：** 连续范围；各值之间没有清楚的分组空隙。

**语境依据：** 整理解释

**语境原文：** 用法片段

> continuous range

**语境原文来源：** Week4.pdf · PDF页64 / 幻灯片64

**语境来源：** Week4.pdf · PDF页64,66 / 幻灯片64,66；Week4.pdf · PDF页64 / 幻灯片64

**全部来源：** Week4.pdf · PDF页64,66 / 幻灯片64,66；Week4.pdf · PDF页64 / 幻灯片64

### geographical

**稳定ID：** csit985-w4-r-85a97f19089797

**类别：** 阅读词汇

**中文解释：** 地理的；需求可以映射到物理环境。

**简单英文（整理解释）：** Related to locations.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> geographical

**原文来源：** Week4.pdf · PDF页68 / 幻灯片68

**语境：** Week4 · geographical

**语境英文：** Related to locations.

**语境中文：** 地理的；需求可以映射到物理环境。

**语境依据：** 整理解释

**语境原文：** 用法片段

> geographical

**语境原文来源：** Week4.pdf · PDF页68 / 幻灯片68

**语境来源：** Week4.pdf · PDF页68 / 幻灯片68；Week4.pdf · PDF页68 / 幻灯片68

**全部来源：** Week4.pdf · PDF页68 / 幻灯片68；Week4.pdf · PDF页68 / 幻灯片68

### metropolitan

**稳定ID：** csit985-w4-r-149813298a3420

**类别：** 阅读词汇

**中文解释：** 都市区域的；需求位置视图的一种尺度。

**简单英文（整理解释）：** Related to a city area.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> metropolitan

**原文来源：** Week4.pdf · PDF页68 / 幻灯片68

**语境：** Week4 · metropolitan

**语境英文：** Related to a city area.

**语境中文：** 都市区域的；需求位置视图的一种尺度。

**语境依据：** 整理解释

**语境原文：** 用法片段

> metropolitan

**语境原文来源：** Week4.pdf · PDF页68 / 幻灯片68

**语境来源：** Week4.pdf · PDF页68 / 幻灯片68；Week4.pdf · PDF页68 / 幻灯片68

**全部来源：** Week4.pdf · PDF页68 / 幻灯片68；Week4.pdf · PDF页68 / 幻灯片68

### wide-area

**稳定ID：** csit985-w4-r-7830733c702260

**类别：** 阅读词汇

**中文解释：** 广域的；覆盖较大的区域。

**简单英文（整理解释）：** Covering a large area.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> wide-area

**原文来源：** Week4.pdf · PDF页68 / 幻灯片68

**语境：** Week4 · wide-area

**语境英文：** Covering a large area.

**语境中文：** 广域的；覆盖较大的区域。

**语境依据：** 整理解释

**语境原文：** 用法片段

> wide-area

**语境原文来源：** Week4.pdf · PDF页68 / 幻灯片68

**语境来源：** Week4.pdf · PDF页68 / 幻灯片68；Week4.pdf · PDF页68 / 幻灯片68

**全部来源：** Week4.pdf · PDF页68 / 幻灯片68；Week4.pdf · PDF页68 / 幻灯片68

### cut-off date

**稳定ID：** csit985-w4-r-8e4a51acfc7b35

**类别：** 阅读词汇

**中文解释：** 截止日期；仅释当时录音通知用语。

**简单英文（整理解释）：** A final date.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语

> cut-off date

**原文来源：** Week4_transcript.txt · TXT原始L2，本行字符769起；搜索“cut-off date”

**语境：** Week4 · cut-off date

**语境英文：** A final date.

**语境中文：** 截止日期；仅释当时录音通知用语。

**语境依据：** 教师补充

**语境原文：** 教师用语

> cut-off date

**语境原文来源：** Week4_transcript.txt · TXT原始L2，本行字符769起；搜索“cut-off date”

**语境来源：** Week4_transcript.txt · TXT原始L2，本行字符769起；搜索“cut-off date”；Week4_transcript.txt · TXT原始L2，本行字符1348起；搜索“randomly assigned”；Week4_transcript.txt · TXT原始L2，本行字符39550起；搜索“touch base”

**全部来源：** Week4_transcript.txt · TXT原始L2，本行字符769起；搜索“cut-off date”；Week4_transcript.txt · TXT原始L2，本行字符1348起；搜索“randomly assigned”；Week4_transcript.txt · TXT原始L2，本行字符39550起；搜索“touch base”

### randomly assigned

**稳定ID：** csit985-w4-r-2939d816ca23f6

**类别：** 阅读词汇

**中文解释：** 被随机分配；当时指尚未组队学生的分组。

**简单英文（整理解释）：** Assigned by chance.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语

> randomly assigned

**原文来源：** Week4_transcript.txt · TXT原始L2，本行字符1348起；搜索“randomly assigned”

**语境：** Week4 · randomly assigned

**语境英文：** Assigned by chance.

**语境中文：** 被随机分配；当时指尚未组队学生的分组。

**语境依据：** 教师补充

**使用结构：** be randomly assigned

**语境原文：** 教师用语

> randomly assigned

**语境原文来源：** Week4_transcript.txt · TXT原始L2，本行字符1348起；搜索“randomly assigned”

**语境来源：** Week4_transcript.txt · TXT原始L2，本行字符769起；搜索“cut-off date”；Week4_transcript.txt · TXT原始L2，本行字符1348起；搜索“randomly assigned”；Week4_transcript.txt · TXT原始L2，本行字符39550起；搜索“touch base”

**使用结构：** be randomly assigned

**全部来源：** Week4_transcript.txt · TXT原始L2，本行字符769起；搜索“cut-off date”；Week4_transcript.txt · TXT原始L2，本行字符1348起；搜索“randomly assigned”；Week4_transcript.txt · TXT原始L2，本行字符39550起；搜索“touch base”

### touch base with

**稳定ID：** csit985-w4-r-5695d0d5cf0b6b

**类别：** 阅读词汇

**中文解释：** 与某人联系沟通；不是接触物理基地。

**简单英文（整理解释）：** Make contact with someone.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语

> touch base

**原文来源：** Week4_transcript.txt · TXT原始L2，本行字符39550起；搜索“touch base”

**语境：** Week4 · touch base with

**语境英文：** Make contact with someone.

**语境中文：** 与某人联系沟通；不是接触物理基地。

**语境依据：** 教师补充

**使用结构：** touch base with + person

**语境原文：** 教师用语

> touch base

**语境原文来源：** Week4_transcript.txt · TXT原始L2，本行字符39550起；搜索“touch base”

**语境来源：** Week4_transcript.txt · TXT原始L2，本行字符769起；搜索“cut-off date”；Week4_transcript.txt · TXT原始L2，本行字符1348起；搜索“randomly assigned”；Week4_transcript.txt · TXT原始L2，本行字符39550起；搜索“touch base”

**使用结构：** touch base with + person

**全部来源：** Week4_transcript.txt · TXT原始L2，本行字符769起；搜索“cut-off date”；Week4_transcript.txt · TXT原始L2，本行字符1348起；搜索“randomly assigned”；Week4_transcript.txt · TXT原始L2，本行字符39550起；搜索“touch base”

### scheduled conflict

**稳定ID：** csit985-w4-r-65ddcf6b8b0604

**类别：** 阅读词汇

**中文解释：** 时间安排冲突；按录音原词保留，不改写为另一搭配。

**简单英文（整理解释）：** A timetable clash.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语

> scheduled conflict

**原文来源：** Week4_transcript.txt · TXT原始L2，本行字符41431起；搜索“scheduled conflict”

**语境：** Week4 · scheduled conflict

**语境英文：** A timetable clash.

**语境中文：** 时间安排冲突；按录音原词保留，不改写为另一搭配。

**语境依据：** 教师补充

**语境原文：** 教师用语

> scheduled conflict

**语境原文来源：** Week4_transcript.txt · TXT原始L2，本行字符41431起；搜索“scheduled conflict”

**语境来源：** Week4_transcript.txt · TXT原始L2，本行字符41662起；搜索“in person”；Week4_transcript.txt · TXT原始L2，本行字符41431起；搜索“scheduled conflict”；Week4_transcript.txt · TXT原始L2，本行字符41704起；搜索“access code”；Week4_transcript.txt · TXT原始L2，本行字符43280起；搜索“double check”

**全部来源：** Week4_transcript.txt · TXT原始L2，本行字符41662起；搜索“in person”；Week4_transcript.txt · TXT原始L2，本行字符41431起；搜索“scheduled conflict”；Week4_transcript.txt · TXT原始L2，本行字符41704起；搜索“access code”；Week4_transcript.txt · TXT原始L2，本行字符43280起；搜索“double check”

### double-check

**稳定ID：** csit985-w4-r-dffc8d802e5334

**类别：** 阅读词汇

**中文解释：** 再次核对；原文转写为double check，未印连字符。

**简单英文（整理解释）：** Check again.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语

> double check

**原文来源：** Week4_transcript.txt · TXT原始L2，本行字符43280起；搜索“double check”

**语境：** Week4 · double-check

**语境英文：** Check again.

**语境中文：** 再次核对；原文转写为double check，未印连字符。

**语境依据：** 教师补充

**使用结构：** double-check + information（词形整理）

**语境原文：** 教师用语

> double check

**语境原文来源：** Week4_transcript.txt · TXT原始L2，本行字符43280起；搜索“double check”

**语境来源：** Week4_transcript.txt · TXT原始L2，本行字符41662起；搜索“in person”；Week4_transcript.txt · TXT原始L2，本行字符41431起；搜索“scheduled conflict”；Week4_transcript.txt · TXT原始L2，本行字符41704起；搜索“access code”；Week4_transcript.txt · TXT原始L2，本行字符43280起；搜索“double check”

**使用结构：** double-check + information（词形整理）

**全部来源：** Week4_transcript.txt · TXT原始L2，本行字符41662起；搜索“in person”；Week4_transcript.txt · TXT原始L2，本行字符41431起；搜索“scheduled conflict”；Week4_transcript.txt · TXT原始L2，本行字符41704起；搜索“access code”；Week4_transcript.txt · TXT原始L2，本行字符43280起；搜索“double check”

### spreadsheets

**稳定ID：** csit985-w4-r-3a5f062543f2a3

**类别：** 阅读词汇

**中文解释：** 电子表格；课件将其列为保存需求和变更的一种表格工具。

**简单英文（整理解释）：** Tables used to keep requirements and their changes.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> spreadsheets

**原文来源：** Week4.pdf · PDF页23 / 幻灯片23

**语境：** Week4 · spreadsheets

**语境英文：** Tables used to keep requirements and their changes.

**语境中文：** 电子表格；课件将其列为保存需求和变更的一种表格工具。

**语境依据：** 整理解释

**语境原文：** 用法片段

> spreadsheets

**语境原文来源：** Week4.pdf · PDF页23 / 幻灯片23

**语境来源：** Week4.pdf · PDF页23 / 幻灯片23；Week4.pdf · PDF页23 / 幻灯片23

**全部来源：** Week4.pdf · PDF页23 / 幻灯片23；Week4.pdf · PDF页23 / 幻灯片23

## 旧收藏保留项（不进入网页默认列表）

### Process

**稳定ID：** csit985-w4-cff8289b7e8b43

**类别：** 阅读词汇

**中文解释：** 一系列行动或事件。

**简单英文（整理解释）：** A series of actions or events.

**说明依据：** 课件明确

**定义状态：** 当前资料未给出正式定义

**全部来源：** Week4.pdf · PDF页4 / 幻灯片4

### Existing components

**稳定ID：** csit985-w4-7858ddfb1e7b53

**类别：** 阅读词汇

**中文解释：** 现有部件；可能成为新设计的约束。

**简单英文（整理解释）：** Parts already in the system that may limit a new design.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**全部来源：** Week4.pdf · PDF页14 / 幻灯片14

### Jira / Xebrio

**稳定ID：** csit985-w4-5efdcc629a9557

**类别：** 阅读词汇

**中文解释：** 课件列出的在线需求管理工具名；不补充产品功能。

**简单英文（整理解释）：** Named examples of online tools for managing requirements. Their detailed functions are not defined in the PDF.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义

**全部来源：** Week4.pdf · PDF页23 / 幻灯片23

### Project goals / problem evaluation and definition

**稳定ID：** csit985-w4-5f1fbec8d60be6

**类别：** 阅读词汇

**中文解释：** 模板字段：项目目标／问题评估与定义；区分目标和现有问题描述。

**简单英文（整理解释）：** Template fields for what the project aims to do and how the current problem is described and assessed.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**全部来源：** Week4.pdf · PDF页25 / 幻灯片25

### ID/Name / Date / Type / Description

**稳定ID：** csit985-w4-29e8eaf7b0b172

**类别：** 阅读词汇

**中文解释：** 需求表字段：标识／名称、日期、类型、描述。

**简单英文（整理解释）：** Fields that identify a requirement, its date, its category, and what it says.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**全部来源：** Week4.pdf · PDF页26 / 幻灯片26

### Locations / Status / Priority

**稳定ID：** csit985-w4-2c64249827ef2c

**类别：** 阅读词汇

**中文解释：** 需求表字段：位置、状态、优先级。

**简单英文（整理解释）：** Fields recording where a requirement applies, its current state, and its importance.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**全部来源：** Week4.pdf · PDF页26 / 幻灯片26

### Central Campus LAN / North Campus LAN / South Campus LAN

**稳定ID：** csit985-w4-b564a33a3d76f9

**类别：** 阅读词汇

**中文解释：** 中央／北／南校园LAN；图中地点标签，不代表通用网络分类。

**简单英文（整理解释）：** Labels for the three campus areas in the example map.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**全部来源：** Week4.pdf · PDF页69 / 幻灯片69

### Management / personnel / tools

**稳定ID：** csit985-w4-017b9fe627eaa5

**类别：** 阅读词汇

**中文解释：** 图57标签：管理、人员、工具；基础词义。

**简单英文（整理解释）：** Figure labels for managing work, people, and tools.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**全部来源：** Week4.pdf · PDF页57 / 幻灯片57

### Maintenance support / technical documentation / storage / supply support / modifications

**稳定ID：** csit985-w4-42f2e0d618ef70

**类别：** 阅读词汇

**中文解释：** 图57支持栏标签：维护支持、技术文档、存储、供应支持、修改；仅释标签。

**简单英文（整理解释）：** Support-column labels for maintenance help, technical documents, storage, supplies, and changes.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**全部来源：** Week4.pdf · PDF页57 / 幻灯片57

### focus your efforts / identify constraints

**稳定ID：** csit985-w4-1d88b2960893c7

**类别：** 阅读词汇

**中文解释：** 集中精力／识别约束。

**简单英文（整理解释）：** Put attention and work on the important parts / find the limits.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**全部来源：** Week4.pdf · PDF页9 / 幻灯片9

### up-to-date / have access to

**稳定ID：** csit985-w4-d582fb7cc3fbf1

**类别：** 阅读词汇

**中文解释：** 最新的／可以访问；需求表应让所有相关人员可读。

**简单英文（整理解释）：** Current / be able to read or use something.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**全部来源：** Week4.pdf · PDF页22 / 幻灯片22

### in operation / be considered / more information needed

**稳定ID：** csit985-w4-66002503e373c2

**类别：** 阅读词汇

**中文解释：** 运行期间／被认为／需要更多信息；需求表中的条件和未决信息。

**简单英文（整理解释）：** While working / be judged to be / further information is required.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**全部来源：** Week4.pdf · PDF页26 / 幻灯片26

### Availability reference-axis labels

**稳定ID：** csit985-w4-b89bf977673bce

**类别：** 阅读词汇

**中文解释：** 图50轴标99.0、99.5、99.9、99.95、99.98；仅一般可用性参考图，不作为普适服务等级边界。

**简单英文（整理解释）：** The axis shows 99.0, 99.5, 99.9, 99.95, and 99.98. These are guide values in an availability figure, not universal service-class rules.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**全部来源：** Week4.pdf · PDF页50 / 幻灯片50（图表）

## 历史词组兼容说明

### Requirement

**旧ID：** csit985-w4-b75163bf7f10d0

**中文：** 需要或要求的事物，也可指必须满足的条件。

**简单英文：** Something that is needed or demanded. It can also be a condition that must be met.

**来源：** Week4.pdf · PDF页4 / 幻灯片4

### Process

**旧ID：** csit985-w4-cff8289b7e8b43

**中文：** 一系列行动或事件。

**简单英文：** A series of actions or events.

**来源：** Week4.pdf · PDF页4 / 幻灯片4

### Requirement Analysis Process

**旧ID：** csit985-w4-de6341c005f384

**中文：** 需求分析流程：收集需求→建立指标→描述行为→细化需求↔映射需求。并非总是单向线性进行。

**简单英文：** A process for gathering requirements, developing metrics, characterising behaviour, developing requirements, and mapping them.

**来源：** Week4.pdf · PDF页5 / 幻灯片5；Week4_transcript.txt · TXT原始L2，本行字符3214起；搜索“two-way arrow”

### Gather and List Requirements

**旧ID：** csit985-w4-75600a512834d4

**中文：** 收集并列出网络需求；此阶段先了解信息。

**简单英文：** Collect what the network must provide and write it down.

**来源：** Week4.pdf · PDF页5,7 / 幻灯片5,7

### Service requirements

**旧ID：** csit985-w4-05d4b0776184c1

**中文：** 网络服务需求；来自初始条件及相关人员输入，再经分析细化。

**简单英文：** Requirements for the services the network must provide. They come from initial conditions and stakeholder input, then are refined.

**来源：** Week4.pdf · PDF页7 / 幻灯片7

### Initial conditions

**旧ID：** csit985-w4-39635e99aedb63

**中文：** 初始条件：项目类型、范围、最初目标和已知外部影响；也可能形成约束。

**简单英文：** The starting situation, including project type, scope, goals, and known outside forces.

**来源：** Week4.pdf · PDF页8,9 / 幻灯片8,9

### Network architecture / network design

**旧ID：** csit985-w4-d9c0012752ba97

**中文：** 网络架构／网络设计；本周资料未正式定义二者区别，不自行补充。

**简单英文：** The network choices being planned. The supplied material uses these terms but does not define their full difference.

**来源：** Week4.pdf · PDF页7,8,12 / 幻灯片7,8,12

### Stakeholders

**旧ID：** csit985-w4-d0fcb629b76730

**中文：** 利益相关者；此处包括用户、管理层及其他相关人员。基础词义，课件未正式定义。

**简单英文：** People or groups with an interest in the project, including users and management.

**来源：** Week4.pdf · PDF页7 / 幻灯片7

### Project type

**旧ID：** csit985-w4-7bdeb53648ae57

**中文：** 项目类型；不同类型改变需要调查的问题。

**简单英文：** The kind of network work being done, such as a new network, modification, or upgrade.

**来源：** Week4.pdf · PDF页8,10 / 幻灯片8,10

### Project scope

**旧ID：** csit985-w4-d1508cc449499d

**中文：** 项目范围：网络规模、站点数、站点之间的距离。

**简单英文：** The extent of the project: network size, number of sites, and distances between sites.

**来源：** Week4.pdf · PDF页8,11 / 幻灯片8,11

### New network

**旧ID：** csit985-w4-66693541cbb961

**中文：** 新建网络；相对于修改已有网络，通常约束较少，并非毫无约束。

**简单英文：** A project that builds a new network. It usually has fewer constraints than modifying an existing network.

**来源：** Week4.pdf · PDF页9,10 / 幻灯片9,10

### Modification of an existing network

**旧ID：** csit985-w4-a8bc50ac173276

**中文：** 修改现有网络；现有设备与服务可能限制选择。

**简单英文：** A project that changes a network already in use.

**来源：** Week4.pdf · PDF页9,10 / 幻灯片9,10；Week4_transcript.txt · TXT原始L2，本行字符5224起；搜索“current equipment”

### Analysis of network problems

**旧ID：** csit985-w4-15b2d94423d69a

**中文：** 网络问题分析；课件列出的项目类型。

**简单英文：** A project that studies problems in a network.

**来源：** Week4.pdf · PDF页10 / 幻灯片10

### Outsourcing

**旧ID：** csit985-w4-af9efe9e4b5d5e

**中文：** 外包；基础词义，资料只将其列为项目类型。

**简单英文：** Having an outside organisation provide a service or do work. Listed here as a project type.

**来源：** Week4.pdf · PDF页10 / 幻灯片10

### Consolidation

**旧ID：** csit985-w4-99e8aeedf4e7cd

**中文：** 整合／合并；课件仅列名称，没有说明具体整合方法。

**简单英文：** Bringing separate parts together. Listed here as a project type; the material gives no detailed procedure.

**来源：** Week4.pdf · PDF页10 / 幻灯片10

### Upgrade

**旧ID：** csit985-w4-55516ad8722d61

**中文：** 升级；本资料中指提升已有网络或技术。

**简单英文：** A change intended to improve an existing network, technology, or component.

**来源：** Week4.pdf · PDF页10,12,25 / 幻灯片10,12,25

### Site

**旧ID：** csit985-w4-34a2bc789539f3

**中文：** 站点；这里是地点，不是网站网页。

**简单英文：** A location included in the network project.

**来源：** Week4.pdf · PDF页11 / 幻灯片11

### Initial architecture/design goals

**旧ID：** csit985-w4-c6524579a1cdcc

**中文：** 最初架构／设计目标：改善性能、安全、支持新用户／应用／设备或新能力等。

**简单英文：** Early aims, such as better performance, security, support for new users, or a new capability.

**来源：** Week4.pdf · PDF页12 / 幻灯片12

### Outside forces

**旧ID：** csit985-w4-4e1f2c83504d53

**中文：** 外部影响；政治、行政、财务因素，起初可能尚不明确。

**简单英文：** Political, administrative, or financial influences on the project. Their details may not yet be known.

**来源：** Week4.pdf · PDF页13 / 幻灯片13

### Constraints

**旧ID：** csit985-w4-9fe2eaff3aa352

**中文：** 约束；影响设计选择的限制，有些可解除，有些需接受并处理。

**简单英文：** Limits that affect design choices. Some can be removed; others must be worked with.

**来源：** Week4.pdf · PDF页9,14 / 幻灯片9,14

### Funding limitations / funding constraints

**旧ID：** csit985-w4-d8efe2bdfb3531

**中文：** 资金限制；方案必须符合预算，不是可选条件。

**简单英文：** Limits on money available. The solution must fit these limits.

**来源：** Week4.pdf · PDF页14 / 幻灯片14

### Organizational constraints

**旧ID：** csit985-w4-cd22a5c064e4a9

**中文：** 组织约束：合作对象与各组之间的互动方式。

**简单英文：** Limits related to whom you work with and how groups work together.

**来源：** Week4.pdf · PDF页14 / 幻灯片14

### Political constraints

**旧ID：** csit985-w4-bcca1af43a53b5

**中文：** 政治性约束：用户、管理层或员工的意愿和利益。

**简单英文：** Limits caused by the wishes or interests of users, managers, or staff.

**来源：** Week4.pdf · PDF页14 / 幻灯片14

### Existing components

**旧ID：** csit985-w4-7858ddfb1e7b53

**中文：** 现有部件；可能成为新设计的约束。

**简单英文：** Parts already in the system that may limit a new design.

**来源：** Week4.pdf · PDF页14 / 幻灯片14

### User inertia

**旧ID：** csit985-w4-911699ee7e2b9a

**中文：** 用户惯性；倾向保留已有工作方式，可能约束设计。

**简单英文：** Users' tendency to keep the current way of working and resist change.

**来源：** Week4.pdf · PDF页14 / 幻灯片14；Week4_transcript.txt · TXT原始L2，本行字符7742起；搜索“users may resist change”

### Customized software

**旧ID：** csit985-w4-2017efe242a90d

**中文：** 定制软件；可能限制新技术的选择。基础词义。

**简单英文：** Software changed for a particular user's or organisation's needs.

**来源：** Week4.pdf · PDF页14 / 幻灯片14

### Customer expectations

**旧ID：** csit985-w4-1542be98afc5fa

**中文：** 客户预期；需核对问题定义及预期结果，必要时调整不现实预期。

**简单英文：** What customers believe the problem and the result should be. Check and realign these when needed.

**来源：** Week4.pdf · PDF页15 / 幻灯片15

### Surveys / one-on-one follow ups / whiteboard sessions

**旧ID：** csit985-w4-abe69152020079

**中文：** 问卷、逐人后续访谈、白板讨论；还有面对面会议和与用户相处交流。需权衡耗时。

**简单英文：** Ways of gathering user information: questions, individual follow-up talks, and group discussion using a whiteboard.

**来源：** Week4.pdf · PDF页16 / 幻灯片16

### Red-flag user requirements

**旧ID：** csit985-w4-6808686d99325f

**中文：** 需求警示信号：滥用 real-time、仅给可用率百分比、无验证的 high-performance、反复不一致或不现实要求。

**简单英文：** Warning signs that requirements lack clear, precise meaning.

**来源：** Week4.pdf · PDF页17 / 幻灯片17

### Real-time

**旧ID：** csit985-w4-e838621514a79b

**中文：** 实时；课件未给统一时限。需具体说明可测指标与条件，不能仅靠该标签。

**简单英文：** A label listed as a warning when misused and as an indicator of special performance needs. No exact time limit is defined here.

**来源：** Week4.pdf · PDF页17,66 / 幻灯片17,66

### High-performance

**旧ID：** csit985-w4-19e24ff1425fb9

**中文：** 高性能；必须验证需要并明确指标，不能仅接受标签。

**简单英文：** A label for higher performance needs. Verify the need and define measurable targets.

**来源：** Week4.pdf · PDF页17,18,66 / 幻灯片17,18,66

### Performance targets

**旧ID：** csit985-w4-b2e0ed7b9c46fc

**中文：** 性能目标；可能需要先测量才能确定。

**简单英文：** The performance levels the new network is expected to meet.

**来源：** Week4.pdf · PDF页18,20 / 幻灯片18,20

### Multi-tier performance

**旧ID：** csit985-w4-ba54d6ee05f81d

**中文：** 多层性能；高低性能需求之间有明确分界。

**简单英文：** Performance needs form separate groups, with a clear threshold between lower and higher needs.

**来源：** Week4.pdf · PDF页18,19 / 幻灯片18,19

### Single-tier performance

**旧ID：** csit985-w4-78f1df536c442e

**中文：** 单层性能；没有独特的高性能组，没有明确分界。

**简单英文：** Performance needs do not form a distinct higher group; there is no clear threshold.

**来源：** Week4.pdf · PDF页18,19 / 幻灯片18,19

### Performance threshold

**旧ID：** csit985-w4-e14c67775095a3

**中文：** 性能阈值；图19标为 Performance Threshold。分组依据要有意义。

**简单英文：** A boundary used to separate performance groups.

**来源：** Week4.pdf · PDF页18,19 / 幻灯片18,19

### Peak application and device performance

**旧ID：** csit985-w4-2b658058004dfc

**中文：** 应用／设备峰值性能；测量结果帮助判断当前性能下降及新网络容量需求。

**简单英文：** The highest performance level measured for applications or devices; it helps assess degradation and future capacity needs.

**来源：** Week4.pdf · PDF页20 / 幻灯片20

### Degradation

**旧ID：** csit985-w4-610903f03c12fe

**中文：** 性能下降／退化。

**简单英文：** A fall in performance or quality.

**来源：** Week4.pdf · PDF页20 / 幻灯片20

### Testbed network

**旧ID：** csit985-w4-c5a290c94ffa63

**中文：** 试验网络；用于检查新技术与组织应用的互动。

**简单英文：** A network used to study how new technology and the organisation's applications work together.

**来源：** Week4.pdf · PDF页21,50 / 幻灯片21,50

### Existing network

**旧ID：** csit985-w4-76d3bb42cca211

**中文：** 现有网络；可用于行为建模及验证已有性能问题。

**简单英文：** The network already in use; measurements can model behaviour and check reported performance problems.

**来源：** Week4.pdf · PDF页21 / 幻灯片21

### Requirements tracking / requirements management

**旧ID：** csit985-w4-ddc1e49aeda86d

**中文：** 需求追踪／管理：保持最新、让相关人员可访问、保留变更。

**简单英文：** Keeping requirements current and accessible, while recording changes.

**来源：** Week4.pdf · PDF页22,23 / 幻灯片22,23

### Paragraph form / Track Changes

**旧ID：** csit985-w4-73d5882a784a3e

**中文：** 段落形式／修订追踪；在原段落保留增删改，能看到尝试后被拒绝的变更。

**简单英文：** Keep edits in the original paragraph and show additions, deletions, and modifications, including attempts later rejected.

**来源：** Week4.pdf · PDF页23 / 幻灯片23

### Tabular form / spreadsheets

**旧ID：** csit985-w4-5004269a797bf4

**中文：** 表格形式／电子表格；保留原需求并记录变更。

**简单英文：** Keep the original requirements in a table and add their changes to it.

**来源：** Week4.pdf · PDF页23 / 幻灯片23

### Jira / Xebrio

**旧ID：** csit985-w4-5efdcc629a9557

**中文：** 课件列出的在线需求管理工具名；不补充产品功能。

**简单英文：** Named examples of online tools for managing requirements. Their detailed functions are not defined in the PDF.

**来源：** Week4.pdf · PDF页23 / 幻灯片23

### Requirements specification

**旧ID：** csit985-w4-2215f3add1bfa8

**中文：** 需求规格说明；示例含初始条件及需求清单，记录来源、状态等。

**简单英文：** An organised record of initial conditions and gathered or derived requirements.

**来源：** Week4.pdf · PDF页24,25,26 / 幻灯片24,25,26

### Project goals / problem evaluation and definition

**旧ID：** csit985-w4-5f1fbec8d60be6

**中文：** 模板字段：项目目标／问题评估与定义；区分目标和现有问题描述。

**简单英文：** Template fields for what the project aims to do and how the current problem is described and assessed.

**来源：** Week4.pdf · PDF页25 / 幻灯片25

### Gathered / derived

**旧ID：** csit985-w4-dface203f13bd8

**中文：** 收集得到／推导得到；基础词义，用于需求来源字段。

**简单英文：** Gathered information comes from a source; derived information is worked out from other information.

**来源：** Week4.pdf · PDF页26 / 幻灯片26

### ID/Name / Date / Type / Description

**旧ID：** csit985-w4-29e8eaf7b0b172

**中文：** 需求表字段：标识／名称、日期、类型、描述。

**简单英文：** Fields that identify a requirement, its date, its category, and what it says.

**来源：** Week4.pdf · PDF页26 / 幻灯片26

### Locations / Status / Priority

**旧ID：** csit985-w4-2c64249827ef2c

**中文：** 需求表字段：位置、状态、优先级。

**简单英文：** Fields recording where a requirement applies, its current state, and its importance.

**来源：** Week4.pdf · PDF页26 / 幻灯片26

### TBD (to be determined)

**旧ID：** csit985-w4-2dd417a9ac1aa9

**中文：** 待确定；早期可保留，但需明确尚未落实，不猜填。

**简单英文：** Not decided yet. It marks information that still needs to be found or agreed.

**来源：** Week4.pdf · PDF页25,26 / 幻灯片25,26；Week4_transcript.txt · TXT原始L2，本行字符13961起；搜索“marked TBD”

### Fast Ethernet / GigE

**旧ID：** csit985-w4-cd45d3bc43faf9

**中文：** 升级示例中的技术名；课件没有定义或列速度，不自行补充。

**简单英文：** Technology names in the upgrade example. The supplied material does not define them or give their speeds.

**来源：** Week4.pdf · PDF页25,26 / 幻灯片25,26

### Workstation

**旧ID：** csit985-w4-262cac7a42bcd8

**中文：** 工作站；示例中为用户计算机，未给专门技术定义。

**简单英文：** A user's computer mentioned in the network upgrade example. No special technical definition is given.

**来源：** Week4.pdf · PDF页25 / 幻灯片25

### Backbone

**旧ID：** csit985-w4-5ba188e0ca6f2e

**中文：** 骨干网；需求表要求各区域连接它，未说明具体结构。

**简单英文：** A named part of the network to which building areas must connect. Its structure is not defined here.

**来源：** Week4.pdf · PDF页26 / 幻灯片26

### Database / Visualization / Manufacturing / Payroll applications

**旧ID：** csit985-w4-3d0e0300062e2a

**中文：** 数据库、可视化、制造、工资处理应用；该公司示例认定为关键任务应用，表中仍注明需要更多信息。

**简单英文：** Application categories listed as mission-critical in this company's example; more information is needed.

**来源：** Week4.pdf · PDF页26 / 幻灯片26

### 100% uptime (while in operation)

**旧ID：** csit985-w4-7af0248ed0e72f

**中文：** 运行期间100%正常可用；仅指示例工资应用在财务部门与外部工资公司之间运行时的条件。

**简单英文：** The example payroll requirement asks for uninterrupted availability during operation between Finance and the outside payroll company.

**来源：** Week4.pdf · PDF页26 / 幻灯片26

### Service metrics

**旧ID：** csit985-w4-1eadc6b99f34fd

**中文：** 服务指标；用于验证包括外部供应商的网络是否兑现承诺，并区分性能等级。

**简单英文：** Measurements used to check promised service and distinguish performance levels.

**来源：** Week4.pdf · PDF页28,29 / 幻灯片28,29

### Bytes in/out / IP packets in/out

**旧ID：** csit985-w4-32226dbb3c0a3e

**中文：** 进出字节数／IP数据包数；可描述设备中的测量变量。

**简单英文：** Counts of bytes or IP packets entering and leaving network devices.

**来源：** Week4.pdf · PDF页29 / 幻灯片29

### Dropped ICMP packets

**旧ID：** csit985-w4-c789d77f46eb76

**中文：** 被丢弃的ICMP包；课件列为服务测量变量，未定义ICMP协议全称或机制。

**简单英文：** ICMP packets that are not delivered; listed as a service measurement variable.

**来源：** Week4.pdf · PDF页29,61 / 幻灯片29,61

### SLA metrics

**旧ID：** csit985-w4-73916e448e8e77

**中文：** SLA指标；本周资料未展开缩写或正式定义，不补充合约内容。

**简单英文：** A named set of service metrics. SLA is not expanded or defined in the supplied material.

**来源：** Week4.pdf · PDF页29 / 幻灯片29

### Capacity limits / burst tolerance

**旧ID：** csit985-w4-d48a5dcb2756e7

**中文：** 容量上限／突发容忍度；基础词义，课件未给容忍度公式。

**简单英文：** Limits on capacity and the amount of short, heavy traffic that can be handled; listed service variables.

**来源：** Week4.pdf · PDF页29,32 / 幻灯片29,32

### Capacity

**旧ID：** csit985-w4-18807209cee7d5

**中文：** 容量；本周用数据率、数据量、突发量及持续时间等描述。

**简单英文：** A performance measure described here through data rates, data sizes, and bursts.

**来源：** Week4.pdf · PDF页32,55,56 / 幻灯片32,55,56

### Peak data rate

**旧ID：** csit985-w4-c863f5ae6bf781

**中文：** 峰值数据率；最高需求或测量值。

**简单英文：** The highest data rate needed or measured.

**来源：** Week4.pdf · PDF页32,55 / 幻灯片32,55；Week4_transcript.txt · TXT原始L2，本行字符31529起；搜索“highest demand”

### Sustained data rate

**旧ID：** csit985-w4-90ca83810d9d79

**中文：** 持续数据率；随时间持续保持的数据率。

**简单英文：** The data rate that continues over time.

**来源：** Week4.pdf · PDF页32,55 / 幻灯片32,55；Week4_transcript.txt · TXT原始L2，本行字符31582起；搜索“continue over time”

### Minimum data rate

**旧ID：** csit985-w4-2c3808e2cc2002

**中文：** 最低数据率；可接受运行所需的最低水平。

**简单英文：** The lowest data rate needed for acceptable operation.

**来源：** Week4.pdf · PDF页32,55 / 幻灯片32,55；Week4_transcript.txt · TXT原始L2，本行字符31665起；搜索“acceptable operation”

### Data size / burst size / burst duration

**旧ID：** csit985-w4-65df516771574a

**中文：** 数据量／突发数据量／突发持续时间；不能只看平均数据率。

**简单英文：** The amount of data, the amount sent in a burst, and how long that burst lasts.

**来源：** Week4.pdf · PDF页32 / 幻灯片32；Week4_transcript.txt · TXT原始L2，本行字符16695起；搜索“continuously send traffic”

### End-to-end delay

**旧ID：** csit985-w4-088cd80e7feeaa

**中文：** 端到端时延；从源到目的地的时间。

**简单英文：** The time taken to go from the source to the destination.

**来源：** Week4.pdf · PDF页33 / 幻灯片33；Week4_transcript.txt · TXT原始L2，本行字符17093起；搜索“source to destination”

### Round trip delay

**旧ID：** csit985-w4-dd650c7deedda6

**中文：** 往返时延；包括返回路径，与单向时延不同。

**简单英文：** The time for traffic to go out and return.

**来源：** Week4.pdf · PDF页33 / 幻灯片33；Week4_transcript.txt · TXT原始L2，本行字符17198起；搜索“return path”

### Latency

**旧ID：** csit985-w4-bd8f1ea2822855

**中文：** 时延／延迟；本讲作为一般延迟用语。

**简单英文：** A general term for delay in this lecture.

**来源：** Week4.pdf · PDF页33 / 幻灯片33；Week4_transcript.txt · TXT原始L2，本行字符17235起；搜索“a very general term”

### Delay variation (jitter)

**旧ID：** csit985-w4-40504805ed71a9

**中文：** 时延变化／抖动；语音、视频及时敏流量需要关注。

**简单英文：** Changes in delay; important for voice, video, and time-sensitive traffic.

**来源：** Week4.pdf · PDF页33 / 幻灯片33；Week4_transcript.txt · TXT原始L2，本行字符17468起；搜索“time sensitive traffic”

### Management protocols / MIBs (Management Information Base)

**旧ID：** csit985-w4-45175eb536ae44

**中文：** 管理协议／管理信息库；资料提到可用于测量，未解释内部机制。

**简单英文：** Named sources of network measurements; MIB is expanded, but their internal operation is not defined.

**来源：** Week4.pdf · PDF页34 / 幻灯片34

### PING (Packet InterNet Groper)

**旧ID：** csit985-w4-ad953df41dab8d

**中文：** 可测时延与丢包的工具；全称按课件保留，不将其认定为已核实的标准名称。

**简单英文：** A named tool that can measure delay and packet loss. This expansion is the spelling given on the slide.

**来源：** Week4.pdf · PDF页34 / 幻灯片34；Week4_transcript.txt · TXT原始L2，本行字符18178起；搜索“one ping”

### Traceroute

**旧ID：** csit985-w4-e0988c09ccda51

**中文：** 路由追踪；课件含逐链路容量测量说法，TXT只补充路径与时延。容量能力待核实。

**简单英文：** The PDF says it combines delay, per-link capacity measurements, and path traces. The TXT discusses paths and delay; the capacity claim is not confirmed.

**来源：** Week4.pdf · PDF页34 / 幻灯片34；Week4_transcript.txt · TXT原始L2，本行字符18090起；搜索“gives the lay information”

### Packet loss / path trace / per-link capacity

**旧ID：** csit985-w4-c00c3bba0c29f7

**中文：** 丢包／路径追踪／逐链路容量；基础词义，不替课件验证工具能力。

**简单英文：** Packets not delivered, a record of the path followed, and capacity for each link. These are measurement expressions.

**来源：** Week4.pdf · PDF页34 / 幻灯片34

### Characterising behaviour / Characterizing behavior

**旧ID：** csit985-w4-2b369c34d8fa30

**中文：** 描述用户和应用如何使用网络；英式／美式拼写同义。

**简单英文：** Describe how users and applications use the network. Both spellings appear in the material.

**来源：** Week4.pdf · PDF页3,36 / 幻灯片3,36

### User behaviour / application behaviour / network behaviour

**旧ID：** csit985-w4-153199a1aaa8d2

**中文：** 用户行为／应用行为／网络行为；三类分析对象，PDF主要细化前两者。

**简单英文：** Three types of behaviour considered in analysis. The PDF names them; it gives detail mainly for users and applications.

**来源：** Week4.pdf · PDF页36,38,40 / 幻灯片36,38,40

### Simulation / modelling

**旧ID：** csit985-w4-3cf3a90b69edb4

**中文：** 仿真／建模；预测需求及数据流，可从简单近似到复杂表示。

**简单英文：** Using a representation to predict requirements and flows. It can be a simple approximation or a complex model.

**来源：** Week4.pdf · PDF页37 / 幻灯片37

### Frequency of usage / average length of usage session

**旧ID：** csit985-w4-41a80fdac87711

**中文：** 使用频率／平均会话时长；描述用户行为的两个维度。

**简单英文：** How often an application is used and how long a session lasts on average.

**来源：** Week4.pdf · PDF页38 / 幻灯片38

### Simultaneous sessions / application sessions

**旧ID：** csit985-w4-f33a6d05946cd8

**中文：** 并发会话／应用会话；总注册用户数不等于同一时间使用应用的人数。

**简单英文：** Application sessions happening at the same time / periods of application use.

**来源：** Week4.pdf · PDF页38,39 / 幻灯片38,39；Week4_transcript.txt · TXT原始L2，本行字符19977起；搜索“registered users”

### Heuristic for scaling expected performance

**旧ID：** csit985-w4-3e9dd9a3d7691d

**中文：** 估算性能规模的经验方法；用户行为数据可提供经验依据，不是精确保证。

**简单英文：** A practical guide for estimating how performance needs change with use. It is not an exact guarantee.

**来源：** Week4.pdf · PDF页38 / 幻灯片38

### Active / duration / frequency / time

**旧ID：** csit985-w4-8099092d52a440

**中文：** 图39标签：活跃、持续时间、频率、时间；同一竖线处可数同时活跃会话。

**简单英文：** Graph labels for a session in use, its length, how often it happens, and the time axis.

**来源：** Week4.pdf · PDF页39 / 幻灯片39

### Peak concurrency

**旧ID：** csit985-w4-68270c56d1dccb

**中文：** 峰值并发量；教师强调应看同时活跃会话，不只看总使用量。

**简单英文：** The highest number of sessions active at the same time. The teacher uses it to explain capacity planning.

**来源：** Week4_transcript.txt · TXT原始L2，本行字符20936起；搜索“peak concurrency”

### Traffic flow characteristics

**旧ID：** csit985-w4-211dd6e12a0510

**中文：** 流量特征；应用行为分析需考虑。

**简单英文：** Features of the traffic an application creates.

**来源：** Week4.pdf · PDF页40 / 幻灯片40

### Multicasting requirements

**旧ID：** csit985-w4-485b8cc3c04fb7

**中文：** 组播需求；课件列出名称，未解释机制。

**简单英文：** A named application requirement; the PDF does not define multicasting or its mechanism.

**来源：** Week4.pdf · PDF页40 / 幻灯片40

### RMA (Reliability, Maintainability, Availability)

**旧ID：** csit985-w4-0b087bf9cbf67b

**中文：** 可靠性、可维护性、可用性；分别关注故障频率、恢复时间及两者关系。

**简单英文：** Three related performance concerns: failure frequency, time to restore service, and the relationship between them.

**来源：** Week4.pdf · PDF页30,31,42,43,44 / 幻灯片30,31,42,43,44

### Reliability (R)

**旧ID：** csit985-w4-df0de429fbe7db

**中文：** 可靠性；故障频率的统计指标。复杂系统中MTBCF更关注重要故障。

**简单英文：** A statistical indicator of how often failure occurs. For complex systems, MTBCF focuses on significant failures.

**来源：** Week4.pdf · PDF页42 / 幻灯片42

### MTBF (Mean Time Between Failures)

**旧ID：** csit985-w4-efdf0f9e5e656f

**中文：** 平均故障间隔时间。

**简单英文：** The mean time between failures.

**来源：** Week4.pdf · PDF页30,31,44 / 幻灯片30,31,44

### MTBCF (Mean Time between Mission-Critical Failures)

**旧ID：** csit985-w4-614784d373a686

**中文：** 平均关键任务故障间隔时间；复杂系统中用于聚焦重要故障。

**简单英文：** The mean time between failures of mission-critical service; useful for complex systems.

**来源：** Week4.pdf · PDF页30,31,42,44 / 幻灯片30,31,42,44

### Failure rate / invert the sum

**旧ID：** csit985-w4-1c9caccad20ecd

**中文：** 故障率／总和取倒数；课件称常将故障率相加后取倒数，未说明适用模型，不当作所有系统通则。

**简单英文：** The rate of failures / take the inverse of their sum. The slide describes this as a way reliability is often calculated, without stating model assumptions.

**来源：** Week4.pdf · PDF页42 / 幻灯片42

### Maintainability (M)

**旧ID：** csit985-w4-05260f3d104c52

**中文：** 可维护性；恢复系统完全运行状态所需时间的统计衡量。

**简单英文：** A statistical measure of the time needed to restore a system to full operation.

**来源：** Week4.pdf · PDF页43 / 幻灯片43

### MTTR (Mean Time To Repair)

**旧ID：** csit985-w4-4c4319b385f68b

**中文：** 平均修复时间；可包含故障发现与隔离、零件送达、更换、测试和恢复服务。TXT的MTDR等疑似转写错误以PDF为准。

**简单英文：** The mean time needed for repair. Repair time may include finding the fault, obtaining parts, replacement, testing, and service restoration.

**来源：** Week4.pdf · PDF页30,31,43,44 / 幻灯片30,31,43,44

### Detection and isolation of the failure

**旧ID：** csit985-w4-293a20cb53f821

**中文：** 故障检测与隔离；修复时间中的步骤，资料未进一步定义隔离方法。

**简单英文：** Find a failure and locate or separate its cause as part of repair.

**来源：** Week4.pdf · PDF页43 / 幻灯片43

### Replacement of component / restoration of service

**旧ID：** csit985-w4-a59a0c59f2d998

**中文：** 部件更换／服务恢复；并非换完部件就完成全部修复。

**简单英文：** Change a faulty part / bring the service back into operation.

**来源：** Week4.pdf · PDF页43 / 幻灯片43

### Availability (A), RMA formula

**旧ID：** csit985-w4-ad58f2a0da6df2

**中文：** RMA可用性公式；按课件不含计划维护，不必然等于全部日历时间的运行百分比。两种公式的选用需看故障口径。

**简单英文：** The relationship between time between failures and repair time: A = MTBCF/(MTBCF+MTTR), or MTBF/(MTBF+MTTR). Scheduled maintenance is excluded here.

**来源：** Week4.pdf · PDF页44 / 幻灯片44

### Scheduled maintenance

**旧ID：** csit985-w4-781e2d6d00860e

**中文：** 计划维护；课件公式不计入，可安排于不需关键功能时；预先换易故障部件可改善可靠性。

**简单英文：** Planned maintenance. The slide excludes it from its availability formula and says it can occur when critical functions are not needed.

**来源：** Week4.pdf · PDF页44 / 幻灯片44

### Uptime / up-time

**旧ID：** csit985-w4-7689edd00527ad

**中文：** 正常可用时间；需说明是基本连接还是完整应用运行，并明确测量周期。

**简单英文：** Time when the system is available to a user, application, or device. Define whether this means connectivity or full application operation.

**来源：** Week4.pdf · PDF页31,45,51 / 幻灯片31,45,51

### Downtime / down-time

**旧ID：** csit985-w4-ae351e34407ee9

**中文：** 不可用时间／停机时间；需定义服务、范围和周期，短暂故障也需计入适用口径。

**简单英文：** Time when the required service is unavailable. The scope and measurement period must be stated.

**来源：** Week4.pdf · PDF页31,45,49,51 / 幻灯片31,45,49,51

### Amount of allowed downtime / allowable downtime

**旧ID：** csit985-w4-03dfe188983f74

**中文：** 允许停机时长；由给定周期的正常可用率目标对应，不代表故障可任意集中发生。

**简单英文：** How much unavailable time an uptime target permits during a stated period.

**来源：** Week4.pdf · PDF页45,46,51 / 幻灯片45,46,51

### Four-nines (99.99%) / five-nines (99.999%)

**旧ID：** csit985-w4-7ef44a0d1fa576

**中文：** 四个9／五个9；上述为课件近似值，需明确周期与测量点，不能只报百分比。

**简单英文：** Availability targets shown in the lecture. The table gives about 53 / 5.3 minutes per year and about 1 minute / 6 seconds per week.

**来源：** Week4.pdf · PDF页45,46,47,51 / 幻灯片45,46,47,51

### Transients / rerouting / congestion

**旧ID：** csit985-w4-4f3082ea64da4b

**中文：** 短暂现象／重新路由／拥塞；基础词义，课件列为可能持续几秒的短暂中断因素。

**简单英文：** Brief effects / changing a traffic route / traffic crowding. The slide names rerouting and congestion as examples of brief disruption.

**来源：** Week4.pdf · PDF页47 / 幻灯片47

### System outage / minor interruption

**旧ID：** csit985-w4-5581f551e3472f

**中文：** 系统中断／小规模中断；即使应用只停顿几秒，也不能忽略。

**简单英文：** Loss of system service / a small interruption. Even a short outage must be counted in overall availability.

**来源：** Week4.pdf · PDF页47,49 / 幻灯片47,49

### General reference thresholds

**旧ID：** csit985-w4-3599a12edffd1b

**中文：** 一般参考阈值；图50的范围是指导，教师强调不是普遍规律。

**简单英文：** Guide ranges for testbed, low-performance, and high-performance systems; not universal boundaries.

**来源：** Week4.pdf · PDF页50 / 幻灯片50；Week4_transcript.txt · TXT原始L2，本行字符27990起；搜索“universal laws”

### Availability measurement: when, where, how

**旧ID：** csit985-w4-7140317ced8d9a

**中文：** 可用性测量：何时、何地、如何。课件建议端到端计入系统各部分损失；也可选择特定用户／主机／网络，但须明确范围。

**简单英文：** State the period, measurement points, and method. Measure end-to-end; count loss in any part of the defined system, or explicitly name selected endpoints.

**来源：** Week4.pdf · PDF页51,52 / 幻灯片51,52

### Router interface / user device

**旧ID：** csit985-w4-bd93afaa9084c5

**中文：** 路由器接口／用户设备；示例99.99%每周在每个路由接口和用户设备测量。基础词义。

**简单英文：** A router's network connection point / a device used by a user; both are measurement points in the example.

**来源：** Week4.pdf · PDF页52 / 幻灯片52

### Server farm network / server NICs (network interface cards)

**旧ID：** csit985-w4-b0a89cc258c2c2

**中文：** 服务器群网络／服务器网络接口卡；99.999%示例每周在服务器群路由接口和NIC等指定点测量。

**简单英文：** The servers' network / their network interface cards. The example measures 99.999% weekly for server-farm access at named points.

**来源：** Week4.pdf · PDF页52 / 幻灯片52

### LAN / user LAN / server LAN

**旧ID：** csit985-w4-0f92aa9e1fd0d2

**中文：** LAN／用户LAN／服务器LAN；课件未展开缩写。示例用应用ping测两端连接，维护停机不适用此要求。

**简单英文：** Network labels for the user side and server side of an application ping test. LAN is not expanded in the supplied lecture.

**来源：** Week4.pdf · PDF页52,69 / 幻灯片52,69

### Application ping / connectivity

**旧ID：** csit985-w4-84ad8c59210e3f

**中文：** 应用ping／连通性；示例用于用户LAN与服务器LAN连接测试，未给完整应用测试流程。

**简单英文：** The named test of connection between each user LAN and the server LAN. The slide does not define a full application test procedure.

**来源：** Week4.pdf · PDF页52 / 幻灯片52

### Interaction Delay (INTD)

**旧ID：** csit985-w4-273a14d32f2ef3

**中文：** 交互延迟；用户愿等待响应多久。课件建议10–30秒，教师强调取决于任务。

**简单英文：** How long a user is willing to wait for a response. The slide suggests aiming for 10–30 seconds; it is not a rule for every task.

**来源：** Week4.pdf · PDF页53,54 / 幻灯片53,54；Week4_transcript.txt · TXT原始L2，本行字符31072起；搜索“what the user is doing”

### Human Response Time (HRT)

**旧ID：** csit985-w4-e4884d77ce8d67

**中文：** 人类感知响应时间阈值；课件约100毫秒。原文INTD < HRT有疑点，见问题记录。

**简单英文：** The boundary where users begin to notice delay; approximately 100 ms in the slide.

**来源：** Week4.pdf · PDF页53,54 / 幻灯片53,54

### INTD < HRT

**旧ID：** csit985-w4-d01730a0c5a3be

**中文：** 保留原不等式；与同页INTD定义／目标值关系不清，不能无声改为另一符号或当作已核实公式。

**简单英文：** The slide says users do not notice delay when INTD < HRT. Its use of INTD conflicts with the stated 10–30 second aim; clarification is needed.

**来源：** Week4.pdf · PDF页53 / 幻灯片53

### Network propagation delay

**旧ID：** csit985-w4-77be7a7cae2490

**中文：** 网络传播时延；取决于距离和技术，未给公式。

**简单英文：** A delay that depends on distance and technology. The material does not give a formula.

**来源：** Week4.pdf · PDF页53,54 / 幻灯片53,54

### Transmission characteristics / accuracy of estimation

**旧ID：** csit985-w4-e9d0ab2c42038d

**中文：** 传输特征／估计准确程度；影响容量估算。

**简单英文：** How an application sends data / how close an estimate needs to be. Both affect data-rate estimates.

**来源：** Week4.pdf · PDF页55 / 幻灯片55

### Task completion times (TCT)

**旧ID：** csit985-w4-df6e2f56fcd9ee

**中文：** 任务完成时间；可能由用户预期或应用规定。

**简单英文：** How long application tasks should take. Targets may come from users or from the application.

**来源：** Week4.pdf · PDF页56 / 幻灯片56；Week4_transcript.txt · TXT原始L2，本行字符32081起；搜索“transfer to finish”

### Supplemental performance requirements

**旧ID：** csit985-w4-50f248a4236871

**中文：** 补充性能要求：操作适合性、支持能力、数据交付可信度。

**简单英文：** Additional requirements: operational suitability, supportability, and confidence.

**来源：** Week4.pdf · PDF页57 / 幻灯片57

### Operational suitability

**旧ID：** csit985-w4-c3a29dba9b6238

**中文：** 操作适合性；客户是否能操作计划网络，取决于架构／设计及操作人员能力。

**简单英文：** Whether customers can operate the planned network; it depends on the architecture/design and the quality of human operators.

**来源：** Week4.pdf · PDF页58 / 幻灯片58

### Supportability

**旧ID：** csit985-w4-2fd0d712bb2a9c

**中文：** 支持能力；不仅关注交付日性能，还关注持续运行。五因素：RMA、人员、程序与文档、工具、备件及维修件。

**简单英文：** What is needed to operate the design and support continued operation at the required performance level.

**来源：** Week4.pdf · PDF页59 / 幻灯片59

### Workforce / training / staffing levels

**旧ID：** csit985-w4-bf15fad1e3914f

**中文：** 人员队伍／培训／人员配备水平；支持能力因素。

**简单英文：** The people doing the work / preparing their skills / the number and mix of staff.

**来源：** Week4.pdf · PDF页59 / 幻灯片59

### System procedures / technical documentation

**旧ID：** csit985-w4-d2eec4f8679706

**中文：** 系统操作程序／技术文档；技术文档通常由厂商提供，描述系统和组件特性及零件。

**简单英文：** Instructions for system work / documents describing systems, components, and parts, usually supplied by vendors.

**来源：** Week4.pdf · PDF页59,60 / 幻灯片59,60

### Maintenance documentation / preventative maintenance

**旧ID：** csit985-w4-04c8559bcd2694

**中文：** 维护文档／预防性维护；说明周期性预防措施及维护时重新配置等流程。

**简单英文：** Documents describing regular work to prevent failures, including reconfiguration during scheduled maintenance.

**来源：** Week4.pdf · PDF页60 / 幻灯片60

### Casualty procedures

**旧ID：** csit985-w4-443104e22cc58a

**中文：** 故障应急处理程序；这里casualty不是日常“伤亡者”词义。

**简单英文：** Special procedures to follow when system faults occur so service can be restored quickly.

**来源：** Week4.pdf · PDF页60 / 幻灯片60

### Standard and special tools / spare and repair parts

**旧ID：** csit985-w4-4180271d811f6d

**中文：** 标准／专用工具；备件／维修件；支持能力的两个因素。

**简单英文：** Ordinary and special-purpose tools / spare parts and parts needed for repair.

**来源：** Week4.pdf · PDF页59 / 幻灯片59

### Confidence

**旧ID：** csit985-w4-411f635960dec7

**中文：** 数据交付可信度；这里不是个人自信。PDF定义句尾残缺，后文与TXT说明需按应用容忍度规定错误／丢失率。

**简单英文：** A measure of delivering data without unacceptable error or loss. Acceptable rates depend on what the application can tolerate.

**来源：** Week4.pdf · PDF页61 / 幻灯片61；Week4_transcript.txt · TXT原始L2，本行字符34675起；搜索“Unacceptable error or loss”

### Error and loss rates / acceptable error or loss rate

**旧ID：** csit985-w4-0f710cae2ee881

**中文：** 错误率／丢失率；可接受程度依应用对错误或数据丢失的容忍度。

**简单英文：** How often errors or losses happen / the rate an application can accept.

**来源：** Week4.pdf · PDF页31,61 / 幻灯片31,61

### Application characteristics

**旧ID：** csit985-w4-0f00fdda44f969

**中文：** 应用特征；若能成组可设分界，若时延连续分布则阈值可能人为选定。

**简单英文：** Features such as capacity or delay that may help group applications and set thresholds.

**来源：** Week4.pdf · PDF页63,64 / 幻灯片63,64

### Predictable performance / guaranteed performance

**旧ID：** csit985-w4-45b04c54cd3961

**中文：** 可预测性能／保证性能；需要额外流量支持，需写明确指标与条件。本周未给完整正式定义。

**简单英文：** Two service categories named in the material. They need extra flow support; their full formal definitions are not supplied.

**来源：** Week4.pdf · PDF页28,65,66 / 幻灯片28,65,66

### Best effort

**旧ID：** csit985-w4-84b5edb36ff865

**中文：** 尽力而为；Week4只用于对比服务类别，不能自行增加保证机制。

**简单英文：** A service category contrasted with predictable and guaranteed performance. Week4 does not give a full definition.

**来源：** Week4.pdf · PDF页65 / 幻灯片65；Week4_transcript.txt · TXT原始L2，本行字符14713起；搜索“best effort service”

### Mission-critical / rate-critical / interactive

**旧ID：** csit985-w4-5d69187e9374ff

**中文：** 关键任务／数据率关键／交互式；为需求提示词，未给统一指标或界限，需进一步量化。

**简单英文：** Labels for important business function, data-rate-sensitive service, and user interaction. They indicate needs to investigate; no exact limits are defined.

**来源：** Week4.pdf · PDF页25,26,66 / 幻灯片25,26,66

### Mapping requirements / requirements map

**旧ID：** csit985-w4-e77758394e4640

**中文：** 需求映射／需求地图；把需求放入地理环境，含现有及可能位置。

**简单英文：** Place requirements on a geographical view, showing where devices and applications are or may be.

**来源：** Week4.pdf · PDF页67,68,69 / 幻灯片67,68,69

### Location map / geographical description

**旧ID：** csit985-w4-bfb6382d01eaae

**中文：** 位置图／地理描述；可采用建筑、校园、都市区域或广域尺度。

**简单英文：** A view of locations, such as a building, campus, metropolitan area, or wide area.

**来源：** Week4.pdf · PDF页68 / 幻灯片68

### Storage server / compute servers / digital video

**旧ID：** csit985-w4-2d0880c81ed27e

**中文：** 校园图标签：存储服务器、计算服务器、数字视频设备；仅基础词义，无进一步架构定义。

**简单英文：** Device labels in the campus map: servers for storage, servers for computing, and a digital-video device. No detailed architecture is defined.

**来源：** Week4.pdf · PDF页69 / 幻灯片69

### Central Campus LAN / North Campus LAN / South Campus LAN

**旧ID：** csit985-w4-b564a33a3d76f9

**中文：** 中央／北／南校园LAN；图中地点标签，不代表通用网络分类。

**简单英文：** Labels for the three campus areas in the example map.

**来源：** Week4.pdf · PDF页69 / 幻灯片69

### Operations and Support / operations / support

**旧ID：** csit985-w4-e9a28da0008e69

**中文：** 运维与支持／运行操作／支持；图57两栏分组，不扩展为额外模型。

**简单英文：** A figure groups items needed for operating and supporting a network; it does not define a detailed management model.

**来源：** Week4.pdf · PDF页57 / 幻灯片57

### Management / personnel / tools

**旧ID：** csit985-w4-017b9fe627eaa5

**中文：** 图57标签：管理、人员、工具；基础词义。

**简单英文：** Figure labels for managing work, people, and tools.

**来源：** Week4.pdf · PDF页57 / 幻灯片57

### Consumables / transportation / leasing / facilities

**旧ID：** csit985-w4-69ace0f354bab9

**中文：** 图57标签：消耗品、运输、租赁、设施；基础词义。

**简单英文：** Figure labels for items used up, moving items, renting resources, and places or equipment for work.

**来源：** Week4.pdf · PDF页57 / 幻灯片57

### Maintenance support / technical documentation / storage / supply support / modifications

**旧ID：** csit985-w4-42f2e0d618ef70

**中文：** 图57支持栏标签：维护支持、技术文档、存储、供应支持、修改；仅释标签。

**简单英文：** Support-column labels for maintenance help, technical documents, storage, supplies, and changes.

**来源：** Week4.pdf · PDF页57 / 幻灯片57

### Mb/s / ms / h / m / s

**旧ID：** csit985-w4-3ef661e5698de9

**中文：** 单位：兆比特每秒、毫秒、小时、分钟、秒；停机表m为分钟，不能与数据率单位混淆。

**简单英文：** Units in the slides: megabits per second, milliseconds, hours, minutes, and seconds. In the downtime table, m means minutes.

**来源：** Week4.pdf · PDF页46,53,63 / 幻灯片46,53,63

### be called for / be demanded / comply with

**旧ID：** csit985-w4-b37d695d26f196

**中文：** 被需要／被要求／遵守或满足；requirement定义中的完整表达。

**简单英文：** Be needed / be strongly asked for / meet a stated condition or rule.

**来源：** Week4.pdf · PDF页4 / 幻灯片4

### gather / refine / input

**旧ID：** csit985-w4-12ef297176f7c0

**中文：** 收集／细化／提供的意见或信息；input这里不是键盘输入动作。

**简单英文：** Collect / make clearer or more exact / information supplied by someone.

**来源：** Week4.pdf · PDF页7 / 幻灯片7

### basis / current state / architectural choices

**旧ID：** csit985-w4-c136a13e722606

**中文：** 基础／当前状态／架构选择。

**简单英文：** A starting foundation / the situation now / decisions about architecture.

**来源：** Week4.pdf · PDF页8 / 幻灯片8

### focus your efforts / identify constraints

**旧ID：** csit985-w4-1d88b2960893c7

**中文：** 集中精力／识别约束。

**简单英文：** Put attention and work on the important parts / find the limits.

**来源：** Week4.pdf · PDF页9 / 幻灯片9

### NOT exhaustive / may also act as constraints

**旧ID：** csit985-w4-7623fbd699806a

**中文：** 并不穷尽全部情况／也可能成为约束；保留NOT及may的力度。

**简单英文：** Not including every possible item / may themselves limit choices.

**来源：** Week4.pdf · PDF页9 / 幻灯片9

### vendor / perceived problems / capability

**旧ID：** csit985-w4-be84e072f40585

**中文：** 厂商／被认为存在的问题／能力；perceived不等于已验证。

**简单英文：** A supplier / problems people believe exist / an ability the system can provide.

**来源：** Week4.pdf · PDF页12 / 幻灯片12

### political / administrative / financial

**旧ID：** csit985-w4-22e8ad1f213c4a

**中文：** 政治或利益相关／行政相关／财务相关。

**简单英文：** Related to power or interests / organisational administration / money.

**来源：** Week4.pdf · PDF页13 / 幻灯片13

### fit the funding constraints / interact

**旧ID：** csit985-w4-919e5788ddc238

**中文：** 符合资金约束／相互作用或合作；MUST表示必须。

**简单英文：** Stay within money limits / affect or work with each other.

**来源：** Week4.pdf · PDF页14 / 幻灯片14

### realign expectations / unrealistic / if necessary

**旧ID：** csit985-w4-40ea26ae98f201

**中文：** 调整预期／不现实／必要时；不能省去条件。

**简单英文：** Adjust expectations to fit the situation / not possible as expected / when needed.

**来源：** Week4.pdf · PDF页15 / 幻灯片15

### follow-up / selected groups / trade off with

**旧ID：** csit985-w4-4845c1cc981ec4

**中文：** 后续跟进／选定群体／与另一成本权衡；此处需权衡沟通收益与耗时。

**简单英文：** A later check or talk / chosen groups / balance one benefit against a cost.

**来源：** Week4.pdf · PDF页16 / 幻灯片16

### lack of precision and clarity

**旧ID：** csit985-w4-1c66f01b72b6f2

**中文：** 缺少精确性和清晰度。

**简单英文：** Not being exact enough or easy enough to understand.

**来源：** Week4.pdf · PDF页17 / 幻灯片17

### misuse / solely / verification of need

**旧ID：** csit985-w4-e9ce5a42f055c7

**中文：** 误用／仅仅／验证是否确有需要。

**简单英文：** Use wrongly / only / checking that a need is real.

**来源：** Week4.pdf · PDF页17 / 幻灯片17

### highly variable / inconsistent

**旧ID：** csit985-w4-e9b1ce13bddaca

**中文：** 变化很大／不一致。

**简单英文：** Changing greatly / not agreeing with other statements or versions.

**来源：** Week4.pdf · PDF页17 / 幻灯片17

### distinctive set / hard threshold

**旧ID：** csit985-w4-9675612ec8f925

**中文：** 有显著区别的集合／明确分界。

**简单英文：** A group clearly different from others / a clear dividing boundary.

**来源：** Week4.pdf · PDF页18 / 幻灯片18

### conduct measurements / suite of applications / validate

**旧ID：** csit985-w4-898397b1a6dfaf

**中文：** 进行测量／一组应用／用证据验证。

**简单英文：** Carry out measurements / a collection of applications / check using evidence.

**来源：** Week4.pdf · PDF页21 / 幻灯片21

### up-to-date / have access to

**旧ID：** csit985-w4-d582fb7cc3fbf1

**中文：** 最新的／可以访问；需求表应让所有相关人员可读。

**简单英文：** Current / be able to read or use something.

**来源：** Week4.pdf · PDF页22 / 幻灯片22

### additions, deletions and modifications / attempted and rejected

**旧ID：** csit985-w4-10afd370ae10ea

**中文：** 新增、删除、修改／尝试后被拒绝；要保留变更历史。

**简单英文：** Things added, removed, or changed / tried but not accepted.

**来源：** Week4.pdf · PDF页23 / 幻灯片23

### recurring / recommending / approximately

**旧ID：** csit985-w4-7c74bcddf499f6

**中文：** 反复出现／建议／大约；示例约150人，不是精确上限。

**简单英文：** Happening repeatedly / suggesting / about, rather than exactly.

**来源：** Week4.pdf · PDF页25 / 幻灯片25

### in operation / be considered / more information needed

**旧ID：** csit985-w4-66002503e373c2

**中文：** 运行期间／被认为／需要更多信息；需求表中的条件和未决信息。

**简单英文：** While working / be judged to be / further information is required.

**来源：** Week4.pdf · PDF页26 / 幻灯片26

### distinguish between / deliver what it promised

**旧ID：** csit985-w4-ac5b173c4b867a

**中文：** 区分／兑现承诺；deliver此处指提供服务。

**简单英文：** Tell categories apart / provide the service that was promised.

**来源：** Week4.pdf · PDF页28,29 / 幻灯片28,29

### in terms of / in addition to / combines ... with ...

**旧ID：** csit985-w4-0fd869a84de2fa

**中文：** 以……衡量／除……以外还／把……与……结合。

**简单英文：** Using these measures / as well as / brings these things together.

**来源：** Week4.pdf · PDF页32,34 / 幻灯片32,34

### simplistic approximations / complex representations

**旧ID：** csit985-w4-bee97313dfd270

**中文：** 简化近似／复杂表示；不把近似当精确事实。

**简单英文：** Very simple models that leave detail out / models with more detail.

**来源：** Week4.pdf · PDF页37 / 幻灯片37

### statistical indicator / significant failures / restore to full operational status

**旧ID：** csit985-w4-f7c05a137461e4

**中文：** 统计指标／重要故障／恢复完全运行状态。

**简单英文：** A measure based on statistics / important failures / return to full working condition.

**来源：** Week4.pdf · PDF页42,43 / 幻灯片42,43

### does not necessarily reflect / tend to fail frequently

**旧ID：** csit985-w4-bca2329a7990e9

**中文：** 不必然反映／往往频繁故障；保留not necessarily，不改成绝对否定。

**简单英文：** Does not always show / often have failures.

**来源：** Week4.pdf · PDF页44 / 幻灯片44

### on a weekly/monthly/yearly basis / range from ... to ...

**旧ID：** csit985-w4-af77eb9383194c

**中文：** 按周／月／年／从……到……范围；测量周期与available的具体含义都要说明。

**简单英文：** Measured each week, month, or year / have meanings between two ends.

**来源：** Week4.pdf · PDF页45 / 幻灯片45

### skyrocket / tolerate / in advance

**旧ID：** csit985-w4-468c1e3dc14592

**中文：** 猛增／容忍／提前；提高可用性成本可快速增长。

**简单英文：** Rise very fast / accept without unacceptable harm / before the event.

**来源：** Week4.pdf · PDF页48 / 幻灯片48

### brief / stall / be accounted for

**旧ID：** csit985-w4-a8ebae3a6d34cb

**中文：** 短暂／停顿／被计入；应用短停顿也需计入。

**简单英文：** Short in time / stop making progress / be included in the calculation or assessment.

**来源：** Week4.pdf · PDF页49 / 幻灯片49

### explicitly state / selectively / particular / cope with

**旧ID：** csit985-w4-73c7cbb9b702a0

**中文：** 明确说明／有选择地／特定的／应对；测量范围及长短中断不能含糊。

**简单英文：** Say clearly / for chosen parts / specific / deal with.

**来源：** Week4.pdf · PDF页51 / 幻灯片51

### do NOT apply to / be willing to / perceive delay

**旧ID：** csit985-w4-c44e57d390dab0

**中文：** 不适用于／愿意／感知延迟；例52排除计划维护停机。

**简单英文：** Do not cover / be ready to accept / notice a delay.

**来源：** Week4.pdf · PDF页52,53 / 幻灯片52,53

### consideration must be given to / be based upon

**旧ID：** csit985-w4-d65980db693813

**中文：** 必须考虑／基于；容量估算有依据与条件。

**简单英文：** Must be considered / have this as the basis.

**来源：** Week4.pdf · PDF页55,56 / 幻灯片55,56

### supplemental / driven by / continued operations

**旧ID：** csit985-w4-74d7af5a85c5d6

**中文：** 补充的／由……影响／持续运行。

**简单英文：** Extra / affected by / keeping the system working over time.

**来源：** Week4.pdf · PDF页57,59 / 幻灯片57,59

### periodic / preventative / reconfiguring / abnormal / as soon as possible

**旧ID：** csit985-w4-03af0510537532

**中文：** 周期性的／预防性的／重新配置／异常的／尽快。

**简单英文：** Regular / intended to prevent problems / changing a configuration / not normal / without avoidable delay.

**来源：** Week4.pdf · PDF页60 / 幻灯片60

### arbitrary / continuous range / identified as

**旧ID：** csit985-w4-acab873358131d

**中文：** 人为选定／连续范围／被识别为；阈值不一定是数据自然形成的。

**简单英文：** Chosen without a natural dividing point / values without a clear gap / recognised or labelled as.

**来源：** Week4.pdf · PDF页64,66 / 幻灯片64,66

### likely to be / geographical / metropolitan / wide-area

**旧ID：** csit985-w4-07f2b61e7b6c46

**中文：** 可能位于／地理的／都市区域的／广域的；不能只列现有位置。

**简单英文：** May be expected at a place / related to locations / related to a city area / covering a large area.

**来源：** Week4.pdf · PDF页68 / 幻灯片68

### not always perfectly linear

**旧ID：** csit985-w4-c482d530daccd6

**中文：** 并非总是完全线性；新信息可能使分析回到较早步骤。

**简单英文：** The process may return to an earlier step when new information is found.

**来源：** Week4_transcript.txt · TXT原始L2，本行字符3417起；搜索“not always perfectly linear”

### measurable and tested / evidence / allocate resources

**旧ID：** csit985-w4-fe9b5e545ef298

**中文：** 可测且可检验／证据／分配资源；教师补充强调。

**简单英文：** Able to be measured and checked / information that supports a claim / decide where resources go.

**来源：** Week4_transcript.txt · TXT原始L2，本行字符6757起；搜索“measured and, and tested”；Week4_transcript.txt · TXT原始L2，本行字符11107起；搜索“measurements give us evidence”；Week4_transcript.txt · TXT原始L2，本行字符10090起；搜索“allocate network resources”

### team up / cut-off date / randomly assigned / touch base with

**旧ID：** csit985-w4-cdc09e39ae7aa5

**中文：** 组队／截止日期／随机分配／联系沟通；录音通知语言，不作为当前行动指令。

**简单英文：** Form a group / final date / put into a group by chance / make contact with.

**来源：** Week4_transcript.txt · TXT原始L2，本行字符769起；搜索“cut-off date”；Week4_transcript.txt · TXT原始L2，本行字符1348起；搜索“randomly assigned”；Week4_transcript.txt · TXT原始L2，本行字符39550起；搜索“touch base”

### in person / scheduled conflict / access code / double-check

**旧ID：** csit985-w4-0799c65a3d2599

**中文：** 到现场／时间冲突／访问码／再次核对；仅释当时课程通知。

**简单英文：** Attend physically / a timetable clash / a code for entry / check again.

**来源：** Week4_transcript.txt · TXT原始L2，本行字符41662起；搜索“in person”；Week4_transcript.txt · TXT原始L2，本行字符41431起；搜索“scheduled conflict”；Week4_transcript.txt · TXT原始L2，本行字符41704起；搜索“access code”；Week4_transcript.txt · TXT原始L2，本行字符43280起；搜索“double check”

### Availability reference-axis labels

**旧ID：** csit985-w4-b89bf977673bce

**中文：** 图50轴标99.0、99.5、99.9、99.95、99.98；仅一般可用性参考图，不作为普适服务等级边界。

**简单英文：** The axis shows 99.0, 99.5, 99.9, 99.95, and 99.98. These are guide values in an availability figure, not universal service-class rules.

**来源：** Week4.pdf · PDF页50 / 幻灯片50（图表）
