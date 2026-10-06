# CSIT985 Week3 词汇

由本周可读JSON自动生成。原文与整理说明分开；跨周条目保留全部来源和不同义项。原PDF及完整录音TXT不在网站中。

## 重要疑点与来源限制

**位置：** PDF页2

**说明：** Week3.pdf标题明确Lecture week 3，主题Strategic Network Design and Requirement Analysis Concepts，共80页。CSIT985_Lecture3-transcript.txt原始L2明确说week three，内容依次覆盖Part A和Part B。TXT无时间戳，共20行；专业讲解主要在L2、L8、L14，按原始行号、本行Unicode字符从1计并给原文锚点。

**位置：** PDF页27,28,29,30

**说明：** 四种策略是组织变革管理策略，不是网络协议；表中的人性假设及按阻力、人数、利害、时间等选择策略，是课件的简化框架，不作为所有组织都适用的定律。第30页依赖关系方向会影响谁的行动受限；相互依赖需要协商。

**位置：** PDF页43,45,58

**说明：** 原文保留语法或措辞疑点：第43页for network to successfully supports its，第45页lists and priorities requirements（priorities疑似应为动词prioritizes），第58页services they what they requested。整理解释按前后文及TXT说明表达，不把修正文句冒充原文。

**位置：** PDF页46,47,51,52

**说明：** 需求表和地图是示例，日期为2024，不代表2026课程的作业日期或真实网络配置。表的DB1最低5 Mbps per session、VIS相关up to 1Gbps及<50 ms round-trip delay、PAY1的100% availability按原值保留；地图写100% uptime active。可用性的统计时段和100%的实施条件未统一说明。地图同时写Fast Ethernet to BB与可视化1 Gb/s，不能据此声称整条路径满足需求。MAN在本表是Manufacturing用户来源标签，不能自动扩成Metropolitan Area Network。

**位置：** PDF页49,50,51

**说明：** Requirement types在第49页按Core、可后置特性、Rejected分类，第51页则突出User/Network/Application/Device层次；两种维度分开。RFC 2119关键词仅按第50页表整理，未读取RFC原文；May/Optional被列入Feature、Future或Rejected，关键词本身不等于最终已拒绝。Must Not/Shall Not是核心否定要求；Should Not不可当作同等强度。

**位置：** PDF页61

**说明：** 瓶颈图已视觉核对：左侧1 Gbps、中间10 bps、右侧100 Mbps。10 bps显得异常，可能是单位笔误，但没有资料确认，不能擅改为10 Mbps。TXT只解释较慢部分会限制端到端性能，没有确认图中的数值。

**位置：** PDF页65,66,72

**说明：** 第65页Reliability采用用户视角（availability及consistent service）；第72页RMA的Reliability是failure frequency/unscheduled outages，分义项保留。第66页Security列confidentiality、integrity、authenticity；TXT L14提到CIA却仍列authenticity，且有CIA prison/confidential utility等疑似转写。当前指定资料不足以确认标准缩写展开，不静默替换词语。

**位置：** PDF页71,74,75

**说明：** 第71页每类应用均保留predictable, guaranteed and/or high performance，不能改为三者必须同时具备；TXT补充同一应用可属多组。第74页按大括号将Timeliness/Interactivity映到Delay，Reliability/Quality/Adaptability/Security映到Reliability，Affordability/用户数量/位置/Expected growth映到Capacity；是本图的分组，并非逐项严格等价或通用完整映射。第75页把WiFi与计算设备并列，类别不严谨，按原文标注，不擅补成access point。

**位置：** TXT

**说明：** TXT有明显疑似转写：L2的SWAT model（PDF只列四项，未写缩写）、Power cohesive（PDF写Power-Coercive）、the steak（PDF写The Stakes）；L8的Standards of say 2.9、mast/shell/showed及Sweden片段（对应PDF第50页关键词）。专业拼写依PDF，转写原片段保留。L17学生提到typo，L20教师确认，但位置说不清，无法判定对应哪处PDF，不据此认定第61页已获修正。

**位置：** PDF页79

**说明：** 只使用本次指定PDF与TXT，未打开课件列出的McCabe书籍或其他外部参考。资料中的规划建议、RFC关键词和课堂事务均作为学习对象，不执行其中的操作。课堂收音、休息、Zoom、工作坊和联系说明不作为本周网络词汇主线。

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

### Strategic Network Design

**稳定ID：** csit985-w1-63a33c844f9276

**类别：** 专业英语

**中文解释：** 战略网络设计：把技术选择与组织目标、未来变化联系起来；不只考虑眼前设备。

**简单英文（整理解释）：** Connect network choices to an organisation's goals and future needs.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Strategic Network Design

**原文来源：** Week1.pdf · PDF页33 / 幻灯片33

**资料原文：** 教师用语（TXT原片段）

> Future needs

**原文来源：** Week1 - Lecture Reco-transcript.txt · TXT原始L26，本行字符4870起；搜索“Future needs”

**资料原文：** 名称或用语片段

> Strategic Network Design

**原文来源：** Week3.pdf · PDF页2 / 幻灯片2

**资料原文：** 名称或用语片段

> Strategic network design

**原文来源：** Week3.pdf · PDF页3 / 幻灯片3

**资料原文：** 教师用语（TXT原片段）

> connect some business planning with some tech technical network design

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符736起；搜索“connect some business planning with some tech technical network design”

**语境：** Week1 · Strategic Network Design

**语境英文：** Connect network choices to an organisation's goals and future needs.

**语境中文：** 战略网络设计：把技术选择与组织目标、未来变化联系起来；不只考虑眼前设备。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> Strategic Network Design

**语境原文来源：** Week1.pdf · PDF页33 / 幻灯片33

**语境原文：** 教师用语（TXT原片段）

> Future needs

**语境原文来源：** Week1 - Lecture Reco-transcript.txt · TXT原始L26，本行字符4870起；搜索“Future needs”

**语境来源：** Week1.pdf · PDF页33 / 幻灯片33；Week1.pdf · PDF页35 / 幻灯片35；Week1 - Lecture Reco-transcript.txt · TXT原始L26，本行字符4870起；搜索“Future needs”

**语境：** Week3 · Strategic Network Design

**语境英文：** Connect business planning with technical network needs. This week starts with purpose and people, then considers what the network must provide.

**语境中文：** 战略网络设计；本周把组织业务规划与网络技术需求联系起来，先明确方向和参与者，再识别网络必须提供什么。

**语境依据：** 按课件主题与TXT整理

**语境原文：** 名称或用语片段

> Strategic Network Design

**语境原文来源：** Week3.pdf · PDF页2 / 幻灯片2

**语境原文：** 名称或用语片段

> Strategic network design

**语境原文来源：** Week3.pdf · PDF页3 / 幻灯片3

**语境原文：** 教师用语（TXT原片段）

> connect some business planning with some tech technical network design

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符736起；搜索“connect some business planning with some tech technical network design”

**语境来源：** Week3.pdf · PDF页2 / 幻灯片2；Week3.pdf · PDF页3 / 幻灯片3；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符736起；搜索“connect some business planning with some tech technical network design”

**全部来源：** Week1.pdf · PDF页33 / 幻灯片33；Week1.pdf · PDF页35 / 幻灯片35；Week1 - Lecture Reco-transcript.txt · TXT原始L26，本行字符4870起；搜索“Future needs”；Week3.pdf · PDF页2 / 幻灯片2；Week3.pdf · PDF页3 / 幻灯片3；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符736起；搜索“connect some business planning with some tech technical network design”

### Network analysis

**稳定ID：** csit985-w1-3afcb73f889666

**类别：** 专业英语

**中文解释：** 网络分析；研究组件与输入输出，理解网络行为，并描述组件之间的关系。

**简单英文（整理解释）：** Study network components, inputs, outputs, behaviour, and relationships.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Study of network components and their inputs and outputs to understand network behaviour

**原文来源：** Week1.pdf · PDF页58 / 幻灯片58

**资料原文：** 名称或用语片段

> Network analysis

**原文来源：** Week1.pdf · PDF页57 / 幻灯片57

**资料原文：** 名称或用语片段

> Network Analysis

**原文来源：** Week3.pdf · PDF页5 / 幻灯片5

**语境：** Week1 · Network analysis

**语境英文：** Study network components, inputs, outputs, behaviour, and relationships.

**语境中文：** 网络分析；研究组件与输入输出，理解网络行为，并描述组件之间的关系。

**语境依据：** 整理解释

**语境原文：** 定义

> Study of network components and their inputs and outputs to understand network behaviour

**语境原文来源：** Week1.pdf · PDF页58 / 幻灯片58

**语境原文：** 名称或用语片段

> Network analysis

**语境原文来源：** Week1.pdf · PDF页57 / 幻灯片57

**语境来源：** Week1.pdf · PDF页57 / 幻灯片57；Week1.pdf · PDF页58 / 幻灯片58

**语境：** Week3 · Network analysis

**语境英文：** The network analysis stage follows scope definition and strategic planning. This week does not give a separate formal definition.

**语境中文：** 网络分析；第5页要求在开始分析前先定义范围、了解战略计划；后半讲通过需求分析理解系统和网络行为。本周没有单独给出此术语的正式定义。

**语境依据：** 按资料语境整理

**语境原文：** 名称或用语片段

> Network Analysis

**语境原文来源：** Week3.pdf · PDF页5 / 幻灯片5

**语境来源：** Week3.pdf · PDF页5 / 幻灯片5；Week3.pdf · PDF页44 / 幻灯片44

**全部来源：** Week1.pdf · PDF页57 / 幻灯片57；Week1.pdf · PDF页58 / 幻灯片58；Week3.pdf · PDF页5 / 幻灯片5；Week3.pdf · PDF页44 / 幻灯片44

### Scalability

**稳定ID：** csit985-w2-cdacb349a37e51

**类别：** 专业英语

**中文解释：** 可扩展性；教师说分布式设计可能改善扩展能力，未给测量公式。

**简单英文（整理解释）：** The ability to grow; the teacher says distributed design can help improve it.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语（TXT原片段）

> scalability and resilience

**原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符8290起；搜索“scalability and resilience”

**资料原文：** 教师用语（TXT原片段）

> we also talk about scalability

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符5423起；搜索“we also talk about scalability”

**语境：** Week2 · Scalability

**语境英文：** The ability to grow; the teacher says distributed design can help improve it.

**语境中文：** 可扩展性；教师说分布式设计可能改善扩展能力，未给测量公式。

**语境依据：** 教师补充

**语境原文：** 教师用语（TXT原片段）

> scalability and resilience

**语境原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符8290起；搜索“scalability and resilience”

**语境来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符8290起；搜索“scalability and resilience”

**语境：** Week3 · Scalability

**语境英文：** The ability to cope with growth in users, sites, and applications. The transcript gives no numerical limit.

**语境中文：** 可扩展性；教师在 future growth 中提到更多用户、站点和新应用时的扩展问题；未给具体扩展上限。

**语境依据：** 教师补充；本周未正式定义

**语境原文：** 教师用语（TXT原片段）

> we also talk about scalability

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符5423起；搜索“we also talk about scalability”

**语境来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符5423起；搜索“we also talk about scalability”

**全部来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符8290起；搜索“scalability and resilience”；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符5423起；搜索“we also talk about scalability”

### Strategic network plan

**稳定ID：** csit985-w3-c73a02a4283d90

**类别：** 专业英语

**中文解释：** 战略网络计划；说明组织未来希望网络支持什么。课件在开始网络分析前列出此项。

**简单英文（整理解释）：** A plan that connects the future needs of the organization with the network.

**说明依据：** 课件名称与教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Strategic network plan

**原文来源：** Week3.pdf · PDF页5 / 幻灯片5

**资料原文：** 名称或用语片段

> Strategic Network Plan

**原文来源：** Week3.pdf · PDF页7 / 幻灯片7

**资料原文：** 教师用语（TXT原片段）

> what the organization wants the network to support in the future

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符1734起；搜索“what the organization wants the network to support in the future”

**语境：** Week3 · Strategic network plan

**语境英文：** A plan that connects the future needs of the organization with the network.

**语境中文：** 战略网络计划；说明组织未来希望网络支持什么。课件在开始网络分析前列出此项。

**语境依据：** 课件名称与教师补充

**语境原文：** 名称或用语片段

> Strategic network plan

**语境原文来源：** Week3.pdf · PDF页5 / 幻灯片5

**语境原文：** 名称或用语片段

> Strategic Network Plan

**语境原文来源：** Week3.pdf · PDF页7 / 幻灯片7

**语境原文：** 教师用语（TXT原片段）

> what the organization wants the network to support in the future

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符1734起；搜索“what the organization wants the network to support in the future”

**语境来源：** Week3.pdf · PDF页5 / 幻灯片5；Week3.pdf · PDF页7 / 幻灯片7；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符1734起；搜索“what the organization wants the network to support in the future”

**全部来源：** Week3.pdf · PDF页5 / 幻灯片5；Week3.pdf · PDF页7 / 幻灯片7；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符1734起；搜索“what the organization wants the network to support in the future”

### Strategic planning

**稳定ID：** csit985-w3-4659075e239bea

**类别：** 专业英语

**中文解释：** 战略规划；持续思考和作出方向性决定的过程。计划永远不会完美或完全完成，也不是最终目的。

**简单英文（整理解释）：** An ongoing way of thinking about the future. The plan is never perfect or complete, and it is a tool to support the mission.

**说明依据：** 按资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 说明

> Strategic planning is a way of thinking, an ongoing process

**原文来源：** Week3.pdf · PDF页21 / 幻灯片21

**资料原文：** 限制

> The plan is never perfect or complete

**原文来源：** Week3.pdf · PDF页21 / 幻灯片21

**资料原文：** 限制

> Strategic planning is not an end in itself

**原文来源：** Week3.pdf · PDF页22 / 幻灯片22

**资料原文：** 教师用语（TXT原片段）

> an ongoing way of thinking

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符9037起；搜索“an ongoing way of thinking”

**语境：** Week3 · Strategic planning

**语境英文：** An ongoing way of thinking about the future. The plan is never perfect or complete, and it is a tool to support the mission.

**语境中文：** 战略规划；持续思考和作出方向性决定的过程。计划永远不会完美或完全完成，也不是最终目的。

**语境依据：** 按资料整理

**语境原文：** 说明

> Strategic planning is a way of thinking, an ongoing process

**语境原文来源：** Week3.pdf · PDF页21 / 幻灯片21

**语境原文：** 限制

> The plan is never perfect or complete

**语境原文来源：** Week3.pdf · PDF页21 / 幻灯片21

**语境原文：** 限制

> Strategic planning is not an end in itself

**语境原文来源：** Week3.pdf · PDF页22 / 幻灯片22

**语境原文：** 教师用语（TXT原片段）

> an ongoing way of thinking

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符9037起；搜索“an ongoing way of thinking”

**语境来源：** Week3.pdf · PDF页21 / 幻灯片21；Week3.pdf · PDF页22 / 幻灯片22；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符9037起；搜索“an ongoing way of thinking”

**全部来源：** Week3.pdf · PDF页21 / 幻灯片21；Week3.pdf · PDF页22 / 幻灯片22；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符9037起；搜索“an ongoing way of thinking”

### The Crouch Diagram

**稳定ID：** csit985-w3-7668818c910ff8

**类别：** 专业英语

**中文解释：** Crouch 规划图；用六个问题串起组织目的、做事方式、现状、目标、行动和结果确认。

**简单英文（整理解释）：** A planning diagram with six questions, from the purpose of the organization to checking the result.

**说明依据：** 按图表整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图中六个问题

> Why are we in business? How do we do business? Where are we now? Where do we want to be? How do we get there? How will we know we’ve arrived?

**原文来源：** Week3.pdf · PDF页11 / 幻灯片11

**资料原文：** 名称或用语片段

> The Crouch Diagram

**原文来源：** Week3.pdf · PDF页12 / 幻灯片12

**资料原文：** 名称或用语片段

> The Crouch Diagram

**原文来源：** Week3.pdf · PDF页13 / 幻灯片13

**资料原文：** 名称或用语片段

> The Crouch Diagram

**原文来源：** Week3.pdf · PDF页14 / 幻灯片14

**资料原文：** 名称或用语片段

> The Crouch Diagram

**原文来源：** Week3.pdf · PDF页15 / 幻灯片15

**资料原文：** 名称或用语片段

> The Crouch Diagram

**原文来源：** Week3.pdf · PDF页16 / 幻灯片16

**资料原文：** 名称或用语片段

> The Crouch Diagram

**原文来源：** Week3.pdf · PDF页17 / 幻灯片17

**资料原文：** 名称或用语片段

> The Crouch Diagram

**原文来源：** Week3.pdf · PDF页18 / 幻灯片18

**语境：** Week3 · The Crouch Diagram

**语境英文：** A planning diagram with six questions, from the purpose of the organization to checking the result.

**语境中文：** Crouch 规划图；用六个问题串起组织目的、做事方式、现状、目标、行动和结果确认。

**语境依据：** 按图表整理

**语境原文：** 图中六个问题

> Why are we in business? How do we do business? Where are we now? Where do we want to be? How do we get there? How will we know we’ve arrived?

**语境原文来源：** Week3.pdf · PDF页11 / 幻灯片11

**语境原文：** 名称或用语片段

> The Crouch Diagram

**语境原文来源：** Week3.pdf · PDF页12 / 幻灯片12

**语境原文：** 名称或用语片段

> The Crouch Diagram

**语境原文来源：** Week3.pdf · PDF页13 / 幻灯片13

**语境原文：** 名称或用语片段

> The Crouch Diagram

**语境原文来源：** Week3.pdf · PDF页14 / 幻灯片14

**语境原文：** 名称或用语片段

> The Crouch Diagram

**语境原文来源：** Week3.pdf · PDF页15 / 幻灯片15

**语境原文：** 名称或用语片段

> The Crouch Diagram

**语境原文来源：** Week3.pdf · PDF页16 / 幻灯片16

**语境原文：** 名称或用语片段

> The Crouch Diagram

**语境原文来源：** Week3.pdf · PDF页17 / 幻灯片17

**语境原文：** 名称或用语片段

> The Crouch Diagram

**语境原文来源：** Week3.pdf · PDF页18 / 幻灯片18

**语境来源：** Week3.pdf · PDF页11 / 幻灯片11；Week3.pdf · PDF页12 / 幻灯片12；Week3.pdf · PDF页13 / 幻灯片13；Week3.pdf · PDF页14 / 幻灯片14；Week3.pdf · PDF页15 / 幻灯片15；Week3.pdf · PDF页16 / 幻灯片16；Week3.pdf · PDF页17 / 幻灯片17；Week3.pdf · PDF页18 / 幻灯片18

**全部来源：** Week3.pdf · PDF页11 / 幻灯片11；Week3.pdf · PDF页12 / 幻灯片12；Week3.pdf · PDF页13 / 幻灯片13；Week3.pdf · PDF页14 / 幻灯片14；Week3.pdf · PDF页15 / 幻灯片15；Week3.pdf · PDF页16 / 幻灯片16；Week3.pdf · PDF页17 / 幻灯片17；Week3.pdf · PDF页18 / 幻灯片18

### Gap analysis

**稳定ID：** csit985-w3-6dc755576a7d80

**类别：** 专业英语

**中文解释：** 差距分析；图中连接“现在在哪里”“想到哪里”和“如何到达”。资料未展开具体分析方法。

**简单英文（整理解释）：** Compare the current position with the desired position, then consider how to close the gap.

**说明依据：** 按图表与教师讲解整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图表标签或原片段（视觉核对）

> GAP ANALYSIS

**原文来源：** Week3.pdf · PDF页17 / 幻灯片17（图表）

**资料原文：** 教师用语（TXT原片段）

> gap, gap analysis

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符7145起；搜索“gap, gap analysis”

**语境：** Week3 · Gap analysis

**语境英文：** Compare the current position with the desired position, then consider how to close the gap.

**语境中文：** 差距分析；图中连接“现在在哪里”“想到哪里”和“如何到达”。资料未展开具体分析方法。

**语境依据：** 按图表与教师讲解整理

**语境原文：** 图表标签或原片段（视觉核对）

> GAP ANALYSIS

**语境原文来源：** Week3.pdf · PDF页17 / 幻灯片17（图表）

**语境原文：** 教师用语（TXT原片段）

> gap, gap analysis

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符7145起；搜索“gap, gap analysis”

**语境来源：** Week3.pdf · PDF页17 / 幻灯片17（图表）；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符7145起；搜索“gap, gap analysis”

**全部来源：** Week3.pdf · PDF页17 / 幻灯片17（图表）；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符7145起；搜索“gap, gap analysis”

### Strategy

**稳定ID：** csit985-w3-84549dea9a8658

**类别：** 专业英语

**中文解释：** 战略；说明怎样实现目标，关注目标与手段的关系，以及如何部署可用资源。

**简单英文（整理解释）：** How an objective will be achieved. Strategy connects the desired result with the available means and deploys resources.

**说明依据：** 按课件定义整理

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Strategy, in general, refers to how a given objective will be achieved

**原文来源：** Week3.pdf · PDF页19 / 幻灯片19

**资料原文：** 说明

> Hence strategy in general is concerned with the relationships between ends and means

**原文来源：** Week3.pdf · PDF页19 / 幻灯片19

**资料原文：** 说明

> Strategy is concerned with deploying the resources at your disposal

**原文来源：** Week3.pdf · PDF页19 / 幻灯片19

**资料原文：** 名称或用语片段

> Strategy

**原文来源：** Week3.pdf · PDF页20 / 幻灯片20

**语境：** Week3 · Strategy

**语境英文：** How an objective will be achieved. Strategy connects the desired result with the available means and deploys resources.

**语境中文：** 战略；说明怎样实现目标，关注目标与手段的关系，以及如何部署可用资源。

**语境依据：** 按课件定义整理

**语境原文：** 定义

> Strategy, in general, refers to how a given objective will be achieved

**语境原文来源：** Week3.pdf · PDF页19 / 幻灯片19

**语境原文：** 说明

> Hence strategy in general is concerned with the relationships between ends and means

**语境原文来源：** Week3.pdf · PDF页19 / 幻灯片19

**语境原文：** 说明

> Strategy is concerned with deploying the resources at your disposal

**语境原文来源：** Week3.pdf · PDF页19 / 幻灯片19

**语境原文：** 名称或用语片段

> Strategy

**语境原文来源：** Week3.pdf · PDF页20 / 幻灯片20

**语境来源：** Week3.pdf · PDF页19 / 幻灯片19；Week3.pdf · PDF页20 / 幻灯片20

**全部来源：** Week3.pdf · PDF页19 / 幻灯片19；Week3.pdf · PDF页20 / 幻灯片20

### Tactics

**稳定ID：** csit985-w3-98a8723a995a34

**类别：** 专业英语

**中文解释：** 战术；为实现具体目标而采取行动，关注如何运用已部署的资源。课件将其与战略区分。

**简单英文（整理解释）：** Actions used to reach particular objectives. Tactics employ resources in specific situations.

**说明依据：** 按课件说明整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 说明

> Strategy and tactics are both concerned with formulating and then carrying out courses of action intended to attain particular objectives

**原文来源：** Week3.pdf · PDF页19 / 幻灯片19

**资料原文：** 说明

> Tactics is concerned with employing them

**原文来源：** Week3.pdf · PDF页19 / 幻灯片19

**资料原文：** 名称或用语片段

> Tactics

**原文来源：** Week3.pdf · PDF页20 / 幻灯片20

**资料原文：** 教师用语（TXT原片段）

> used in specific situations

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符7812起；搜索“used in specific situations”

**语境：** Week3 · Tactics

**语境英文：** Actions used to reach particular objectives. Tactics employ resources in specific situations.

**语境中文：** 战术；为实现具体目标而采取行动，关注如何运用已部署的资源。课件将其与战略区分。

**语境依据：** 按课件说明整理

**语境原文：** 说明

> Strategy and tactics are both concerned with formulating and then carrying out courses of action intended to attain particular objectives

**语境原文来源：** Week3.pdf · PDF页19 / 幻灯片19

**语境原文：** 说明

> Tactics is concerned with employing them

**语境原文来源：** Week3.pdf · PDF页19 / 幻灯片19

**语境原文：** 名称或用语片段

> Tactics

**语境原文来源：** Week3.pdf · PDF页20 / 幻灯片20

**语境原文：** 教师用语（TXT原片段）

> used in specific situations

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符7812起；搜索“used in specific situations”

**语境来源：** Week3.pdf · PDF页19 / 幻灯片19；Week3.pdf · PDF页20 / 幻灯片20；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符7812起；搜索“used in specific situations”

**全部来源：** Week3.pdf · PDF页19 / 幻灯片19；Week3.pdf · PDF页20 / 幻灯片20；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符7812起；搜索“used in specific situations”

### Rational-Empirical

**稳定ID：** csit985-w3-b487473aefe3b0

**类别：** 专业英语

**中文解释：** 理性—经验型变革策略；假设人按自身利益作理性选择，用信息沟通和激励推动改变。

**简单英文（整理解释）：** A change strategy based on information and incentives. It assumes that people are rational and follow self interest.

**说明依据：** 按课件表格整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 策略假设

> People are rational and follow self interest

**原文来源：** Week3.pdf · PDF页27 / 幻灯片27

**资料原文：** 机制说明

> change based on communication of information and offering incentives

**原文来源：** Week3.pdf · PDF页27 / 幻灯片27

**语境：** Week3 · Rational-Empirical

**语境英文：** A change strategy based on information and incentives. It assumes that people are rational and follow self interest.

**语境中文：** 理性—经验型变革策略；假设人按自身利益作理性选择，用信息沟通和激励推动改变。

**语境依据：** 按课件表格整理

**语境原文：** 策略假设

> People are rational and follow self interest

**语境原文来源：** Week3.pdf · PDF页27 / 幻灯片27

**语境原文：** 机制说明

> change based on communication of information and offering incentives

**语境原文来源：** Week3.pdf · PDF页27 / 幻灯片27

**语境来源：** Week3.pdf · PDF页27 / 幻灯片27

**全部来源：** Week3.pdf · PDF页27 / 幻灯片27

### Normative-Re-educative

**稳定ID：** csit985-w3-9add44f8416408

**类别：** 专业英语

**中文解释：** 规范—再教育型变革策略；假设人遵循社会规范，通过重释规范及建立对新规范的认同推动改变。

**简单英文（整理解释）：** A change strategy based on social norms. It changes how norms are understood and builds commitment to new norms.

**说明依据：** 按课件表格整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 策略假设

> People are social beings and follow social norms

**原文来源：** Week3.pdf · PDF页27 / 幻灯片27

**资料原文：** 机制说明

> change based on redefining and reinterpreting existing norms, & developing commitment to new norms

**原文来源：** Week3.pdf · PDF页27 / 幻灯片27（图表）

**语境：** Week3 · Normative-Re-educative

**语境英文：** A change strategy based on social norms. It changes how norms are understood and builds commitment to new norms.

**语境中文：** 规范—再教育型变革策略；假设人遵循社会规范，通过重释规范及建立对新规范的认同推动改变。

**语境依据：** 按课件表格整理

**语境原文：** 策略假设

> People are social beings and follow social norms

**语境原文来源：** Week3.pdf · PDF页27 / 幻灯片27

**语境原文：** 机制说明

> change based on redefining and reinterpreting existing norms, & developing commitment to new norms

**语境原文来源：** Week3.pdf · PDF页27 / 幻灯片27（图表）

**语境来源：** Week3.pdf · PDF页27 / 幻灯片27；Week3.pdf · PDF页27 / 幻灯片27（图表）

**全部来源：** Week3.pdf · PDF页27 / 幻灯片27；Week3.pdf · PDF页27 / 幻灯片27（图表）

### Power-Coercive

**稳定ID：** csit985-w3-a7a673338cf168

**类别：** 专业英语

**中文解释：** 权力—强制型变革策略；假设人多会服从指令，用权威和制裁推动改变。TXT 的 Power cohesive 疑似转写错误。

**简单英文（整理解释）：** A change strategy based on authority and sanctions. The slide assumes that people mostly do as they are told.

**说明依据：** 按课件表格整理；转写有疑点

**定义状态：** 当前资料未给出正式定义

**资料原文：** 策略假设

> People are mostly compliant, do as they’re told

**原文来源：** Week3.pdf · PDF页27 / 幻灯片27

**资料原文：** 机制说明

> change based on the exercise of authority and the imposition of sanctions

**原文来源：** Week3.pdf · PDF页27 / 幻灯片27

**资料原文：** 教师用语（TXT原片段）

> Power cohesive

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符12417起；搜索“Power cohesive”

**语境：** Week3 · Power-Coercive

**语境英文：** A change strategy based on authority and sanctions. The slide assumes that people mostly do as they are told.

**语境中文：** 权力—强制型变革策略；假设人多会服从指令，用权威和制裁推动改变。TXT 的 Power cohesive 疑似转写错误。

**语境依据：** 按课件表格整理；转写有疑点

**语境原文：** 策略假设

> People are mostly compliant, do as they’re told

**语境原文来源：** Week3.pdf · PDF页27 / 幻灯片27

**语境原文：** 机制说明

> change based on the exercise of authority and the imposition of sanctions

**语境原文来源：** Week3.pdf · PDF页27 / 幻灯片27

**语境原文：** 教师用语（TXT原片段）

> Power cohesive

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符12417起；搜索“Power cohesive”

**语境来源：** Week3.pdf · PDF页27 / 幻灯片27；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符12417起；搜索“Power cohesive”

**全部来源：** Week3.pdf · PDF页27 / 幻灯片27；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符12417起；搜索“Power cohesive”

### Environmental-Adaptive

**稳定ID：** csit985-w3-b75824fe0709f9

**类别：** 专业英语

**中文解释：** 环境—适应型变革策略；假设人反对损失或扰动，但容易适应；建立新组织，再逐渐转移人员。

**简单英文（整理解释）：** A change strategy that builds a new organization and gradually moves people to it. It assumes that people oppose loss but adapt readily.

**说明依据：** 按课件表格整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 策略假设

> People oppose loss/disruption but adapt readily

**原文来源：** Week3.pdf · PDF页27 / 幻灯片27

**资料原文：** 机制说明

> change based on building a new organisation and gradually transferring people to the new one

**原文来源：** Week3.pdf · PDF页27 / 幻灯片27（图表）

**语境：** Week3 · Environmental-Adaptive

**语境英文：** A change strategy that builds a new organization and gradually moves people to it. It assumes that people oppose loss but adapt readily.

**语境中文：** 环境—适应型变革策略；假设人反对损失或扰动，但容易适应；建立新组织，再逐渐转移人员。

**语境依据：** 按课件表格整理

**语境原文：** 策略假设

> People oppose loss/disruption but adapt readily

**语境原文来源：** Week3.pdf · PDF页27 / 幻灯片27

**语境原文：** 机制说明

> change based on building a new organisation and gradually transferring people to the new one

**语境原文来源：** Week3.pdf · PDF页27 / 幻灯片27（图表）

**语境来源：** Week3.pdf · PDF页27 / 幻灯片27；Week3.pdf · PDF页27 / 幻灯片27（图表）

**全部来源：** Week3.pdf · PDF页27 / 幻灯片27；Week3.pdf · PDF页27 / 幻灯片27（图表）

### Change management strategy

**稳定ID：** csit985-w3-08d2d8a552d81b

**类别：** 专业英语

**中文解释：** 变革管理策略；教师明确说上述四种策略讨论的是组织改变，不是网络协议。

**简单英文（整理解释）：** An approach to changing an organization. The four approaches here are about people and change.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语（TXT原片段）

> change management strategy

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符11941起；搜索“change management strategy”

**资料原文：** 教师用语（TXT原片段）

> network protocols

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符12006起；搜索“network protocols”

**语境：** Week3 · Change management strategy

**语境英文：** An approach to changing an organization. The four approaches here are about people and change.

**语境中文：** 变革管理策略；教师明确说上述四种策略讨论的是组织改变，不是网络协议。

**语境依据：** 教师补充

**语境原文：** 教师用语（TXT原片段）

> change management strategy

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符11941起；搜索“change management strategy”

**语境原文：** 教师用语（TXT原片段）

> network protocols

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符12006起；搜索“network protocols”

**语境来源：** Week3.pdf · PDF页27 / 幻灯片27；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符11941起；搜索“change management strategy”；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符12006起；搜索“network protocols”

**全部来源：** Week3.pdf · PDF页27 / 幻灯片27；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符11941起；搜索“change management strategy”；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符12006起；搜索“network protocols”

### Predictable service

**稳定ID：** csit985-w3-1e46df8f17f917

**类别：** 专业英语

**中文解释：** 可预测服务；本周要求判断它适用于网络哪些部分，没有说明可预测的范围或保证条件。

**简单英文（整理解释）：** A service type whose place in the network must be considered. This week gives no detailed conditions.

**说明依据：** 本周仅列名称

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语（TXT原片段）

> predictable and all guaranteed services needed

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符1791起；搜索“predictable and all guaranteed services needed”

**语境：** Week3 · Predictable service

**语境英文：** A service type whose place in the network must be considered. This week gives no detailed conditions.

**语境中文：** 可预测服务；本周要求判断它适用于网络哪些部分，没有说明可预测的范围或保证条件。

**语境依据：** 本周仅列名称

**语境原文：** 教师用语（TXT原片段）

> predictable and all guaranteed services needed

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符1791起；搜索“predictable and all guaranteed services needed”

**语境来源：** Week3.pdf · PDF页44 / 幻灯片44；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符1791起；搜索“predictable and all guaranteed services needed”

**全部来源：** Week3.pdf · PDF页44 / 幻灯片44；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符1791起；搜索“predictable and all guaranteed services needed”

### Guaranteed service

**稳定ID：** csit985-w3-a93c185078be70

**类别：** 专业英语

**中文解释：** 有保证的服务；本周列为服务类别，没有给出保证内容、数值或执行机制。

**简单英文（整理解释）：** A service type named in the analysis activities. This week does not state the guarantee or how it is enforced.

**说明依据：** 本周仅列名称

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> guaranteed service

**原文来源：** Week3.pdf · PDF页44 / 幻灯片44

**资料原文：** 教师用语（TXT原片段）

> predictable and all guaranteed services needed

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符1791起；搜索“predictable and all guaranteed services needed”

**语境：** Week3 · Guaranteed service

**语境英文：** A service type named in the analysis activities. This week does not state the guarantee or how it is enforced.

**语境中文：** 有保证的服务；本周列为服务类别，没有给出保证内容、数值或执行机制。

**语境依据：** 本周仅列名称

**语境原文：** 名称或用语片段

> guaranteed service

**语境原文来源：** Week3.pdf · PDF页44 / 幻灯片44

**语境原文：** 教师用语（TXT原片段）

> predictable and all guaranteed services needed

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符1791起；搜索“predictable and all guaranteed services needed”

**语境来源：** Week3.pdf · PDF页44 / 幻灯片44；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符1791起；搜索“predictable and all guaranteed services needed”

**全部来源：** Week3.pdf · PDF页44 / 幻灯片44；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符1791起；搜索“predictable and all guaranteed services needed”

### Requirement identifier (ID/Name)

**稳定ID：** csit985-w3-7fe48c33ab5824

**类别：** 专业英语

**中文解释：** 需求标识；示例表用 ID/Name 区分需求条目，方便跟踪和讨论。

**简单英文（整理解释）：** A label or number used to identify a requirement in the example table.

**说明依据：** 按图表与教师讲解整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图表标签或原片段（视觉核对）

> ID/Name

**原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**资料原文：** 教师用语（TXT原片段）

> Identifier ID

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符2491起；搜索“Identifier ID”

**语境：** Week3 · Requirement identifier (ID/Name)

**语境英文：** A label or number used to identify a requirement in the example table.

**语境中文：** 需求标识；示例表用 ID/Name 区分需求条目，方便跟踪和讨论。

**语境依据：** 按图表与教师讲解整理

**语境原文：** 图表标签或原片段（视觉核对）

> ID/Name

**语境原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**语境原文：** 教师用语（TXT原片段）

> Identifier ID

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符2491起；搜索“Identifier ID”

**语境来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符2491起；搜索“Identifier ID”

**全部来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符2491起；搜索“Identifier ID”

### Requirement type

**稳定ID：** csit985-w3-45e1bdf9a8ed6c

**类别：** 专业英语

**中文解释：** 需求类型；第51页突出 User、Network、Application、Device 等来源层次；第49页另按核心、可后置、拒绝分类。两种分类维度不同。

**简单英文（整理解释）：** A way to group requirements. The example table uses user, network, application, and device; another slide groups them by need and importance.

**说明依据：** 按图表整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图表标签或原片段（视觉核对）

> Type

**原文来源：** Week3.pdf · PDF页51 / 幻灯片51（图表）

**资料原文：** 名称或用语片段

> Requirement Type

**原文来源：** Week3.pdf · PDF页49 / 幻灯片49

**语境：** Week3 · Requirement type

**语境英文：** A way to group requirements. The example table uses user, network, application, and device; another slide groups them by need and importance.

**语境中文：** 需求类型；第51页突出 User、Network、Application、Device 等来源层次；第49页另按核心、可后置、拒绝分类。两种分类维度不同。

**语境依据：** 按图表整理

**语境原文：** 图表标签或原片段（视觉核对）

> Type

**语境原文来源：** Week3.pdf · PDF页51 / 幻灯片51（图表）

**语境原文：** 名称或用语片段

> Requirement Type

**语境原文来源：** Week3.pdf · PDF页49 / 幻灯片49

**语境来源：** Week3.pdf · PDF页51 / 幻灯片51（图表）；Week3.pdf · PDF页49 / 幻灯片49

**全部来源：** Week3.pdf · PDF页51 / 幻灯片51（图表）；Week3.pdf · PDF页49 / 幻灯片49

### Requirement status

**稳定ID：** csit985-w3-35f153b5adccb0

**类别：** 专业英语

**中文解释：** 需求状态；示例表用于记录 Info 或 TBD 等处理状态。状态和优先级是不同字段。

**简单英文（整理解释）：** The current state recorded for a requirement. It is separate from priority.

**说明依据：** 按图表与教师讲解整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图表标签或原片段（视觉核对）

> Status

**原文来源：** Week3.pdf · PDF页52 / 幻灯片52（图表）

**资料原文：** 教师用语（TXT原片段）

> under review

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符5726起；搜索“under review”

**语境：** Week3 · Requirement status

**语境英文：** The current state recorded for a requirement. It is separate from priority.

**语境中文：** 需求状态；示例表用于记录 Info 或 TBD 等处理状态。状态和优先级是不同字段。

**语境依据：** 按图表与教师讲解整理

**语境原文：** 图表标签或原片段（视觉核对）

> Status

**语境原文来源：** Week3.pdf · PDF页52 / 幻灯片52（图表）

**语境原文：** 教师用语（TXT原片段）

> under review

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符5726起；搜索“under review”

**语境来源：** Week3.pdf · PDF页52 / 幻灯片52（图表）；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符5726起；搜索“under review”

**全部来源：** Week3.pdf · PDF页52 / 幻灯片52（图表）；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符5726起；搜索“under review”

### Requirement priority

**稳定ID：** csit985-w3-f6cb36ad22db1c

**类别：** 专业英语

**中文解释：** 需求优先级；表示先处理或重视哪项需求。示例表的 Priority 列均为 TBD，尚未确定。

**简单英文（整理解释）：** How important a requirement is compared with others. The example priorities are still marked TBD.

**说明依据：** 按图表与教师讲解整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图表标签或原片段（视觉核对）

> Priority

**原文来源：** Week3.pdf · PDF页52 / 幻灯片52（图表）

**资料原文：** 教师用语（TXT原片段）

> status and priority

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符5617起；搜索“status and priority”

**语境：** Week3 · Requirement priority

**语境英文：** How important a requirement is compared with others. The example priorities are still marked TBD.

**语境中文：** 需求优先级；表示先处理或重视哪项需求。示例表的 Priority 列均为 TBD，尚未确定。

**语境依据：** 按图表与教师讲解整理

**语境原文：** 图表标签或原片段（视觉核对）

> Priority

**语境原文来源：** Week3.pdf · PDF页52 / 幻灯片52（图表）

**语境原文：** 教师用语（TXT原片段）

> status and priority

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符5617起；搜索“status and priority”

**语境来源：** Week3.pdf · PDF页52 / 幻灯片52（图表）；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符5617起；搜索“status and priority”

**全部来源：** Week3.pdf · PDF页52 / 幻灯片52（图表）；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符5617起；搜索“status and priority”

### Core requirements

**稳定ID：** csit985-w3-c484f8fa41aa80

**类别：** 专业英语

**中文解释：** 核心需求；被认为必要的特性，设计必须满足。

**简单英文（整理解释）：** Features considered necessary for the network. The design must meet them.

**说明依据：** 按课件定义与TXT整理

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Core requirements are features that are deemed necessary

**原文来源：** Week3.pdf · PDF页49 / 幻灯片49

**资料原文：** 教师用语（TXT原片段）

> the network we design must meet them

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符4076起；搜索“the network we design must meet them”

**语境：** Week3 · Core requirements

**语境英文：** Features considered necessary for the network. The design must meet them.

**语境中文：** 核心需求；被认为必要的特性，设计必须满足。

**语境依据：** 按课件定义与TXT整理

**语境原文：** 定义

> Core requirements are features that are deemed necessary

**语境原文来源：** Week3.pdf · PDF页49 / 幻灯片49

**语境原文：** 教师用语（TXT原片段）

> the network we design must meet them

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符4076起；搜索“the network we design must meet them”

**语境来源：** Week3.pdf · PDF页49 / 幻灯片49；Week3.pdf · PDF页50 / 幻灯片50；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符4076起；搜索“the network we design must meet them”

**全部来源：** Week3.pdf · PDF页49 / 幻灯片49；Week3.pdf · PDF页50 / 幻灯片50；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符4076起；搜索“the network we design must meet them”

### Feature requirements

**稳定ID：** csit985-w3-a8e2e6137a875a

**类别：** 专业英语

**中文解释：** 可取特性需求；有用且希望具备，但可晚些安装。本课件把它们与核心需求区分。

**简单英文（整理解释）：** Desirable features that can be installed later.

**说明依据：** 按课件说明整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 说明

> Features that are desirable but could be installed at a later date

**原文来源：** Week3.pdf · PDF页49 / 幻灯片49

**语境：** Week3 · Feature requirements

**语境英文：** Desirable features that can be installed later.

**语境中文：** 可取特性需求；有用且希望具备，但可晚些安装。本课件把它们与核心需求区分。

**语境依据：** 按课件说明整理

**语境原文：** 说明

> Features that are desirable but could be installed at a later date

**语境原文来源：** Week3.pdf · PDF页49 / 幻灯片49

**语境来源：** Week3.pdf · PDF页49 / 幻灯片49；Week3.pdf · PDF页50 / 幻灯片50

**全部来源：** Week3.pdf · PDF页49 / 幻灯片49；Week3.pdf · PDF页50 / 幻灯片50

### Future revisions/upgrades

**稳定ID：** csit985-w3-58ca4cd5915234

**类别：** 专业英语

**中文解释：** 未来修订或升级需求；分类图中为后续修改保留的一类需求。

**简单英文（整理解释）：** Requirements kept for future changes or upgrades.

**说明依据：** 按图表整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图表标签或原片段（视觉核对）

> Requirements for Future

**原文来源：** Week3.pdf · PDF页48 / 幻灯片48（图表）

**语境：** Week3 · Future revisions/upgrades

**语境英文：** Requirements kept for future changes or upgrades.

**语境中文：** 未来修订或升级需求；分类图中为后续修改保留的一类需求。

**语境依据：** 按图表整理

**语境原文：** 图表标签或原片段（视觉核对）

> Requirements for Future

**语境原文来源：** Week3.pdf · PDF页48 / 幻灯片48（图表）

**语境来源：** Week3.pdf · PDF页48 / 幻灯片48（图表）；Week3.pdf · PDF页50 / 幻灯片50

**全部来源：** Week3.pdf · PDF页48 / 幻灯片48（图表）；Week3.pdf · PDF页50 / 幻灯片50

### Rejected requirements

**稳定ID：** csit985-w3-3ddf58143d3c17

**类别：** 专业英语

**中文解释：** 被拒绝的需求；并非真正必要，或并不可取。原文是 either ... or ...，无需两者同时成立。

**简单英文（整理解释）：** Requirements that are either not really necessary or not desirable.

**说明依据：** 按课件定义整理

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Rejected requirements are either not really necessary or not desirable

**原文来源：** Week3.pdf · PDF页49 / 幻灯片49

**语境：** Week3 · Rejected requirements

**语境英文：** Requirements that are either not really necessary or not desirable.

**语境中文：** 被拒绝的需求；并非真正必要，或并不可取。原文是 either ... or ...，无需两者同时成立。

**语境依据：** 按课件定义整理

**语境原文：** 定义

> Rejected requirements are either not really necessary or not desirable

**语境原文来源：** Week3.pdf · PDF页49 / 幻灯片49

**语境来源：** Week3.pdf · PDF页49 / 幻灯片49；Week3.pdf · PDF页50 / 幻灯片50

**全部来源：** Week3.pdf · PDF页49 / 幻灯片49；Week3.pdf · PDF页50 / 幻灯片50

### Informational requirements

**稳定ID：** csit985-w3-aed0c8b7c794f1

**类别：** 专业英语

**中文解释：** 信息性需求；分类图中单独列出，示例表也出现 Info。资料未给出正式定义。

**简单英文（整理解释）：** A category named in the diagram. The example also has an Info status, but no formal definition is given.

**说明依据：** 本周仅列图表名称

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图表标签或原片段（视觉核对）

> Informational Requirements

**原文来源：** Week3.pdf · PDF页48 / 幻灯片48（图表）

**资料原文：** 图表标签或原片段（视觉核对）

> Info

**原文来源：** Week3.pdf · PDF页52 / 幻灯片52（图表）

**语境：** Week3 · Informational requirements

**语境英文：** A category named in the diagram. The example also has an Info status, but no formal definition is given.

**语境中文：** 信息性需求；分类图中单独列出，示例表也出现 Info。资料未给出正式定义。

**语境依据：** 本周仅列图表名称

**语境原文：** 图表标签或原片段（视觉核对）

> Informational Requirements

**语境原文来源：** Week3.pdf · PDF页48 / 幻灯片48（图表）

**语境原文：** 图表标签或原片段（视觉核对）

> Info

**语境原文来源：** Week3.pdf · PDF页52 / 幻灯片52（图表）

**语境来源：** Week3.pdf · PDF页48 / 幻灯片48（图表）；Week3.pdf · PDF页52 / 幻灯片52（图表）

**全部来源：** Week3.pdf · PDF页48 / 幻灯片48（图表）；Week3.pdf · PDF页52 / 幻灯片52（图表）

### RFC 2119 keywords

**稳定ID：** csit985-w3-a1d398d3a9ef22

**类别：** 专业英语

**中文解释：** RFC 2119 需求关键词；本课件用来表达需求的相对重要性。这里仅整理课件表格，未读取 RFC 原文。

**简单英文（整理解释）：** Keywords used by the lecture to show the relative importance of requirements.

**说明依据：** 按课件表格整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> RFC 2119 keywords

**原文来源：** Week3.pdf · PDF页50 / 幻灯片50

**语境：** Week3 · RFC 2119 keywords

**语境英文：** Keywords used by the lecture to show the relative importance of requirements.

**语境中文：** RFC 2119 需求关键词；本课件用来表达需求的相对重要性。这里仅整理课件表格，未读取 RFC 原文。

**语境依据：** 按课件表格整理

**语境原文：** 名称或用语片段

> RFC 2119 keywords

**语境原文来源：** Week3.pdf · PDF页50 / 幻灯片50

**语境来源：** Week3.pdf · PDF页50 / 幻灯片50

**全部来源：** Week3.pdf · PDF页50 / 幻灯片50

### Must / Shall / Required

**稳定ID：** csit985-w3-603d58970cada9

**类别：** 专业英语

**中文解释：** 必须／应当／必需；第50页归为 Core，表达必要要求。

**简单英文（整理解释）：** Words that the lecture places in the Core requirement group.

**说明依据：** 按课件表格整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 关键词及课件分类

> Must/Shall/Required Core

**原文来源：** Week3.pdf · PDF页50 / 幻灯片50

**语境：** Week3 · Must / Shall / Required

**语境英文：** Words that the lecture places in the Core requirement group.

**语境中文：** 必须／应当／必需；第50页归为 Core，表达必要要求。

**语境依据：** 按课件表格整理

**语境原文：** 关键词及课件分类

> Must/Shall/Required Core

**语境原文来源：** Week3.pdf · PDF页50 / 幻灯片50

**语境来源：** Week3.pdf · PDF页50 / 幻灯片50

**全部来源：** Week3.pdf · PDF页50 / 幻灯片50

### Must Not / Shall Not

**稳定ID：** csit985-w3-93991713cd00c5

**类别：** 专业英语

**中文解释：** 不得／禁止；仍属于 Core，是必须遵守的否定要求。

**简单英文（整理解释）：** Words for a required prohibition. The lecture places them in the Core group.

**说明依据：** 按课件表格整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 关键词及课件分类

> Must Not/Shall Not Core

**原文来源：** Week3.pdf · PDF页50 / 幻灯片50

**语境：** Week3 · Must Not / Shall Not

**语境英文：** Words for a required prohibition. The lecture places them in the Core group.

**语境中文：** 不得／禁止；仍属于 Core，是必须遵守的否定要求。

**语境依据：** 按课件表格整理

**语境原文：** 关键词及课件分类

> Must Not/Shall Not Core

**语境原文来源：** Week3.pdf · PDF页50 / 幻灯片50

**语境来源：** Week3.pdf · PDF页50 / 幻灯片50

**全部来源：** Week3.pdf · PDF页50 / 幻灯片50

### Should / Recommended

**稳定ID：** csit985-w3-472459432ef00a

**类别：** 专业英语

**中文解释：** 应该／建议；课件归为 Feature or Future。保留“建议”强度，不等同 Must。

**简单英文（整理解释）：** Words that the lecture places in the Feature or Future group.

**说明依据：** 按课件表格整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 关键词及课件分类

> Should/Recommended Feature or Future

**原文来源：** Week3.pdf · PDF页50 / 幻灯片50

**语境：** Week3 · Should / Recommended

**语境英文：** Words that the lecture places in the Feature or Future group.

**语境中文：** 应该／建议；课件归为 Feature or Future。保留“建议”强度，不等同 Must。

**语境依据：** 按课件表格整理

**语境原文：** 关键词及课件分类

> Should/Recommended Feature or Future

**语境原文来源：** Week3.pdf · PDF页50 / 幻灯片50

**语境来源：** Week3.pdf · PDF页50 / 幻灯片50

**全部来源：** Week3.pdf · PDF页50 / 幻灯片50

### Should Not / Not Recommended

**稳定ID：** csit985-w3-f3f6c73d359b68

**类别：** 专业英语

**中文解释：** 不应该／不建议；课件归为 Feature or Future。不是 Must Not 的同等强制禁止。

**简单英文（整理解释）：** Words advising against something. The lecture places them in Feature or Future.

**说明依据：** 按课件表格整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 关键词及课件分类

> Should Not/ Not Recommended Feature or Future

**原文来源：** Week3.pdf · PDF页50 / 幻灯片50

**语境：** Week3 · Should Not / Not Recommended

**语境英文：** Words advising against something. The lecture places them in Feature or Future.

**语境中文：** 不应该／不建议；课件归为 Feature or Future。不是 Must Not 的同等强制禁止。

**语境依据：** 按课件表格整理

**语境原文：** 关键词及课件分类

> Should Not/ Not Recommended Feature or Future

**语境原文来源：** Week3.pdf · PDF页50 / 幻灯片50

**语境来源：** Week3.pdf · PDF页50 / 幻灯片50

**全部来源：** Week3.pdf · PDF页50 / 幻灯片50

### May / Optional

**稳定ID：** csit985-w3-e5e4dcc1a14666

**类别：** 专业英语

**中文解释：** 可以／可选；课件列为 Feature、Future 或 Rejected，不能仅凭关键词断定实际已被拒绝。

**简单英文（整理解释）：** Words that the lecture places in Feature, Future, or Rejected. The word alone does not show the final decision.

**说明依据：** 按课件表格整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 关键词及课件分类

> May/Optional Feature, Future or Rejected

**原文来源：** Week3.pdf · PDF页50 / 幻灯片50

**语境：** Week3 · May / Optional

**语境英文：** Words that the lecture places in Feature, Future, or Rejected. The word alone does not show the final decision.

**语境中文：** 可以／可选；课件列为 Feature、Future 或 Rejected，不能仅凭关键词断定实际已被拒绝。

**语境依据：** 按课件表格整理

**语境原文：** 关键词及课件分类

> May/Optional Feature, Future or Rejected

**语境原文来源：** Week3.pdf · PDF页50 / 幻灯片50

**语境来源：** Week3.pdf · PDF页50 / 幻灯片50

**全部来源：** Week3.pdf · PDF页50 / 幻灯片50

### Network services

**稳定ID：** csit985-w3-3da14357d53e35

**类别：** 专业英语

**中文解释：** 网络服务；网络内部可以配置和管理的一组能力，体现提供的性能、功能，以及预期需求；要有效须端到端提供。

**简单英文（整理解释）：** Sets of network capabilities that can be configured and managed. Useful services must be provided end to end.

**说明依据：** 按课件定义整理

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Sets of network capabilities that can be configured and managed within the network

**原文来源：** Week3.pdf · PDF页57 / 幻灯片57

**资料原文：** 说明

> Levels of performance and function offered

**原文来源：** Week3.pdf · PDF页57 / 幻灯片57

**资料原文：** 说明

> Sets of requirements expected

**原文来源：** Week3.pdf · PDF页57 / 幻灯片57

**资料原文：** 必要条件

> For services to be useful and effective they need to be provisioned end-to-end

**原文来源：** Week3.pdf · PDF页57 / 幻灯片57

**资料原文：** 名称或用语片段

> Network Services

**原文来源：** Week3.pdf · PDF页58 / 幻灯片58

**资料原文：** 名称或用语片段

> Network Services

**原文来源：** Week3.pdf · PDF页59 / 幻灯片59

**资料原文：** 名称或用语片段

> Network Services

**原文来源：** Week3.pdf · PDF页60 / 幻灯片60

**语境：** Week3 · Network services

**语境英文：** Sets of network capabilities that can be configured and managed. Useful services must be provided end to end.

**语境中文：** 网络服务；网络内部可以配置和管理的一组能力，体现提供的性能、功能，以及预期需求；要有效须端到端提供。

**语境依据：** 按课件定义整理

**语境原文：** 定义

> Sets of network capabilities that can be configured and managed within the network

**语境原文来源：** Week3.pdf · PDF页57 / 幻灯片57

**语境原文：** 说明

> Levels of performance and function offered

**语境原文来源：** Week3.pdf · PDF页57 / 幻灯片57

**语境原文：** 说明

> Sets of requirements expected

**语境原文来源：** Week3.pdf · PDF页57 / 幻灯片57

**语境原文：** 必要条件

> For services to be useful and effective they need to be provisioned end-to-end

**语境原文来源：** Week3.pdf · PDF页57 / 幻灯片57

**语境原文：** 名称或用语片段

> Network Services

**语境原文来源：** Week3.pdf · PDF页58 / 幻灯片58

**语境原文：** 名称或用语片段

> Network Services

**语境原文来源：** Week3.pdf · PDF页59 / 幻灯片59

**语境原文：** 名称或用语片段

> Network Services

**语境原文来源：** Week3.pdf · PDF页60 / 幻灯片60

**语境来源：** Week3.pdf · PDF页57 / 幻灯片57；Week3.pdf · PDF页58 / 幻灯片58；Week3.pdf · PDF页59 / 幻灯片59；Week3.pdf · PDF页60 / 幻灯片60

**全部来源：** Week3.pdf · PDF页57 / 幻灯片57；Week3.pdf · PDF页58 / 幻灯片58；Week3.pdf · PDF页59 / 幻灯片59；Week3.pdf · PDF页60 / 幻灯片60

### End-to-end provisioning

**稳定ID：** csit985-w3-9159da978ac1d8

**类别：** 专业英语

**中文解释：** 端到端服务提供；服务需覆盖完整路径，单个部分性能强并不足够。

**简单英文（整理解释）：** Provide the service across the full path. A strong service in only one part is not enough.

**说明依据：** 按课件要求与TXT整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 必要条件

> Service offerings need to be configured end-to-end

**原文来源：** Week3.pdf · PDF页60 / 幻灯片60

**资料原文：** 教师用语（TXT原片段）

> a strong, very strong services in one

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符1100起；搜索“a strong, very strong services in one”

**语境：** Week3 · End-to-end provisioning

**语境英文：** Provide the service across the full path. A strong service in only one part is not enough.

**语境中文：** 端到端服务提供；服务需覆盖完整路径，单个部分性能强并不足够。

**语境依据：** 按课件要求与TXT整理

**语境原文：** 必要条件

> Service offerings need to be configured end-to-end

**语境原文来源：** Week3.pdf · PDF页60 / 幻灯片60

**语境原文：** 教师用语（TXT原片段）

> a strong, very strong services in one

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符1100起；搜索“a strong, very strong services in one”

**语境来源：** Week3.pdf · PDF页57 / 幻灯片57；Week3.pdf · PDF页60 / 幻灯片60；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符1100起；搜索“a strong, very strong services in one”

**全部来源：** Week3.pdf · PDF页57 / 幻灯片57；Week3.pdf · PDF页60 / 幻灯片60；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符1100起；搜索“a strong, very strong services in one”

### Accounting (network services)

**稳定ID：** csit985-w3-3ff277d4122c19

**类别：** 专业英语

**中文解释：** 网络服务核算／记录；课件用于确认用户实际得到所请求的服务，不是仅指财务记账；未给出具体机制。

**简单英文（整理解释）：** Keep information about the service so the requested and actual service can be compared.

**说明依据：** 按资料语境整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用途（原句有疑点）

> Ensure end users are getting the services they what they requested

**原文来源：** Week3.pdf · PDF页58 / 幻灯片58

**资料原文：** 名称

> Accounting

**原文来源：** Week3.pdf · PDF页58 / 幻灯片58

**资料原文：** 教师用语（TXT原片段）

> accounting and monitoring

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符243起；搜索“accounting and monitoring”

**资料原文：** 教师用语（TXT原片段）

> compare the actual service

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符313起；搜索“compare the actual service”

**语境：** Week3 · Accounting (network services)

**语境英文：** Keep information about the service so the requested and actual service can be compared.

**语境中文：** 网络服务核算／记录；课件用于确认用户实际得到所请求的服务，不是仅指财务记账；未给出具体机制。

**语境依据：** 按资料语境整理

**语境原文：** 用途（原句有疑点）

> Ensure end users are getting the services they what they requested

**语境原文来源：** Week3.pdf · PDF页58 / 幻灯片58

**语境原文：** 名称

> Accounting

**语境原文来源：** Week3.pdf · PDF页58 / 幻灯片58

**语境原文：** 教师用语（TXT原片段）

> accounting and monitoring

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符243起；搜索“accounting and monitoring”

**语境原文：** 教师用语（TXT原片段）

> compare the actual service

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符313起；搜索“compare the actual service”

**语境来源：** Week3.pdf · PDF页58 / 幻灯片58；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符243起；搜索“accounting and monitoring”；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符313起；搜索“compare the actual service”

**全部来源：** Week3.pdf · PDF页58 / 幻灯片58；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符243起；搜索“accounting and monitoring”；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符313起；搜索“compare the actual service”

### Network bottleneck

**稳定ID：** csit985-w3-91daa57d5de2ce

**类别：** 专业英语

**中文解释：** 网络瓶颈；服务不匹配可形成限制端到端性能的部分。图中速率为 1 Gbps、10 bps、100 Mbps，按原图保留。

**简单英文（整理解释）：** A part of the path that limits performance. The diagram prints 1 Gbps, 10 bps, and 100 Mbps; the middle value needs checking.

**说明依据：** 按课件图表与TXT整理；数值待核实

**定义状态：** 当前资料未给出正式定义

**资料原文：** 说明

> Mismatches in services can result in network bottlenecks

**原文来源：** Week3.pdf · PDF页61 / 幻灯片61

**资料原文：** 图中左侧数值

> 1 Gbps

**原文来源：** Week3.pdf · PDF页61 / 幻灯片61（图表）

**资料原文：** 图中间数值（疑似单位笔误）

> 10 bps

**原文来源：** Week3.pdf · PDF页61 / 幻灯片61（图表）

**资料原文：** 图中右侧数值

> 100 Mbps

**原文来源：** Week3.pdf · PDF页61 / 幻灯片61（图表）

**资料原文：** 图表标签或原片段（视觉核对）

> Network Bottleneck

**原文来源：** Week3.pdf · PDF页61 / 幻灯片61（图表）

**资料原文：** 教师用语（TXT原片段）

> the weakest part of the path

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符1668起；搜索“the weakest part of the path”

**语境：** Week3 · Network bottleneck

**语境英文：** A part of the path that limits performance. The diagram prints 1 Gbps, 10 bps, and 100 Mbps; the middle value needs checking.

**语境中文：** 网络瓶颈；服务不匹配可形成限制端到端性能的部分。图中速率为 1 Gbps、10 bps、100 Mbps，按原图保留。

**语境依据：** 按课件图表与TXT整理；数值待核实

**语境原文：** 说明

> Mismatches in services can result in network bottlenecks

**语境原文来源：** Week3.pdf · PDF页61 / 幻灯片61

**语境原文：** 图中左侧数值

> 1 Gbps

**语境原文来源：** Week3.pdf · PDF页61 / 幻灯片61（图表）

**语境原文：** 图中间数值（疑似单位笔误）

> 10 bps

**语境原文来源：** Week3.pdf · PDF页61 / 幻灯片61（图表）

**语境原文：** 图中右侧数值

> 100 Mbps

**语境原文来源：** Week3.pdf · PDF页61 / 幻灯片61（图表）

**语境原文：** 图表标签或原片段（视觉核对）

> Network Bottleneck

**语境原文来源：** Week3.pdf · PDF页61 / 幻灯片61（图表）

**语境原文：** 教师用语（TXT原片段）

> the weakest part of the path

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符1668起；搜索“the weakest part of the path”

**语境来源：** Week3.pdf · PDF页61 / 幻灯片61（图表）；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符1668起；搜索“the weakest part of the path”；Week3.pdf · PDF页61 / 幻灯片61

**全部来源：** Week3.pdf · PDF页61 / 幻灯片61（图表）；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符1668起；搜索“the weakest part of the path”；Week3.pdf · PDF页61 / 幻灯片61

### User requirements

**稳定ID：** csit985-w3-a0e92d74b7c067

**类别：** 专业英语

**中文解释：** 用户需求；从用户期待出发，技术性最低、主观性最强；还需了解用户数量和位置。

**简单英文（整理解释）：** What users need from the system. These are the least technical and most subjective requirements in the lecture.

**说明依据：** 按资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 必要补充

> We also need to know how many users are expected to use the system and their locations

**原文来源：** Week3.pdf · PDF页63 / 幻灯片63

**资料原文：** 名称或用语片段

> User Requirements

**原文来源：** Week3.pdf · PDF页69 / 幻灯片69

**语境：** Week3 · User requirements

**语境英文：** What users need from the system. These are the least technical and most subjective requirements in the lecture.

**语境中文：** 用户需求；从用户期待出发，技术性最低、主观性最强；还需了解用户数量和位置。

**语境依据：** 按资料整理

**语境原文：** 必要补充

> We also need to know how many users are expected to use the system and their locations

**语境原文来源：** Week3.pdf · PDF页63 / 幻灯片63

**语境原文：** 名称或用语片段

> User Requirements

**语境原文来源：** Week3.pdf · PDF页69 / 幻灯片69

**语境来源：** Week3.pdf · PDF页63 / 幻灯片63；Week3.pdf · PDF页69 / 幻灯片69；Week3.pdf · PDF页74 / 幻灯片74

**全部来源：** Week3.pdf · PDF页63 / 幻灯片63；Week3.pdf · PDF页69 / 幻灯片69；Week3.pdf · PDF页74 / 幻灯片74

### Application requirements

**稳定ID：** csit985-w3-b7fe5bed3dc66f

**类别：** 专业英语

**中文解释：** 应用需求；应用把用户和设备连接到网络，常覆盖端到端路径，决定很多网络设计需求。

**简单英文（整理解释）：** Needs of applications, which connect users and devices to the network. These needs often cover the full path.

**说明依据：** 按资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 说明

> Application needs determine many of the requirements of the network design

**原文来源：** Week3.pdf · PDF页70 / 幻灯片70

**资料原文：** 说明

> Applications couple users and devices to the network

**原文来源：** Week3.pdf · PDF页70 / 幻灯片70

**资料原文：** 说明

> Applications are often end-to-end à their requirements span the network

**原文来源：** Week3.pdf · PDF页70 / 幻灯片70

**资料原文：** 名称或用语片段

> Application Requirements

**原文来源：** Week3.pdf · PDF页71 / 幻灯片71

**语境：** Week3 · Application requirements

**语境英文：** Needs of applications, which connect users and devices to the network. These needs often cover the full path.

**语境中文：** 应用需求；应用把用户和设备连接到网络，常覆盖端到端路径，决定很多网络设计需求。

**语境依据：** 按资料整理

**语境原文：** 说明

> Application needs determine many of the requirements of the network design

**语境原文来源：** Week3.pdf · PDF页70 / 幻灯片70

**语境原文：** 说明

> Applications couple users and devices to the network

**语境原文来源：** Week3.pdf · PDF页70 / 幻灯片70

**语境原文：** 说明

> Applications are often end-to-end à their requirements span the network

**语境原文来源：** Week3.pdf · PDF页70 / 幻灯片70

**语境原文：** 名称或用语片段

> Application Requirements

**语境原文来源：** Week3.pdf · PDF页71 / 幻灯片71

**语境来源：** Week3.pdf · PDF页70 / 幻灯片70；Week3.pdf · PDF页71 / 幻灯片71

**全部来源：** Week3.pdf · PDF页70 / 幻灯片70；Week3.pdf · PDF页71 / 幻灯片71

### Host requirements / Device requirements

**稳定ID：** csit985-w3-bf0ea0fb6c5af5

**类别：** 专业英语

**中文解释：** 主机／设备需求；服务需求列表用 Host，后面以 Device 为标题展开终端、服务器及专用设备。

**简单英文（整理解释）：** Needs of end devices, servers, and specialized equipment. Host and device are the labels used in these slides.

**说明依据：** 按资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Host requirements

**原文来源：** Week3.pdf · PDF页62 / 幻灯片62

**资料原文：** 名称或用语片段

> Device Requirements

**原文来源：** Week3.pdf · PDF页75 / 幻灯片75

**资料原文：** 名称或用语片段

> Device Requirements

**原文来源：** Week3.pdf · PDF页76 / 幻灯片76

**资料原文：** 名称或用语片段

> Device Requirements

**原文来源：** Week3.pdf · PDF页77 / 幻灯片77

**语境：** Week3 · Host requirements / Device requirements

**语境英文：** Needs of end devices, servers, and specialized equipment. Host and device are the labels used in these slides.

**语境中文：** 主机／设备需求；服务需求列表用 Host，后面以 Device 为标题展开终端、服务器及专用设备。

**语境依据：** 按资料整理

**语境原文：** 名称或用语片段

> Host requirements

**语境原文来源：** Week3.pdf · PDF页62 / 幻灯片62

**语境原文：** 名称或用语片段

> Device Requirements

**语境原文来源：** Week3.pdf · PDF页75 / 幻灯片75

**语境原文：** 名称或用语片段

> Device Requirements

**语境原文来源：** Week3.pdf · PDF页76 / 幻灯片76

**语境原文：** 名称或用语片段

> Device Requirements

**语境原文来源：** Week3.pdf · PDF页77 / 幻灯片77

**语境来源：** Week3.pdf · PDF页62 / 幻灯片62；Week3.pdf · PDF页75 / 幻灯片75；Week3.pdf · PDF页76 / 幻灯片76；Week3.pdf · PDF页77 / 幻灯片77

**全部来源：** Week3.pdf · PDF页62 / 幻灯片62；Week3.pdf · PDF页75 / 幻灯片75；Week3.pdf · PDF页76 / 幻灯片76；Week3.pdf · PDF页77 / 幻灯片77

### Network requirements

**稳定ID：** csit985-w3-06c6f8698c188c

**类别：** 专业英语

**中文解释：** 网络需求；纳入现有网络的依赖、限制、互操作和老化问题。

**简单英文（整理解释）：** Needs and limits arising from the existing network, including dependencies, interoperability, and obsolescence.

**说明依据：** 按资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 必要条件

> We need to consider existing networks and include any dependencies and constraints in our design

**原文来源：** Week3.pdf · PDF页78 / 幻灯片78

**语境：** Week3 · Network requirements

**语境英文：** Needs and limits arising from the existing network, including dependencies, interoperability, and obsolescence.

**语境中文：** 网络需求；纳入现有网络的依赖、限制、互操作和老化问题。

**语境依据：** 按资料整理

**语境原文：** 必要条件

> We need to consider existing networks and include any dependencies and constraints in our design

**语境原文来源：** Week3.pdf · PDF页78 / 幻灯片78

**语境来源：** Week3.pdf · PDF页78 / 幻灯片78

**全部来源：** Week3.pdf · PDF页78 / 幻灯片78

### Timeliness

**稳定ID：** csit985-w3-a62e206c81a04f

**类别：** 专业英语

**中文解释：** 及时性；用户可在合理时间内传送、访问或修改信息。课件没有定义固定秒数。

**简单英文（整理解释）：** Users can transfer, access, or change information within a reasonable time. No fixed time limit is given here.

**说明依据：** 按课件定义整理

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> User able to transfer, access or modify information in a reasonable time

**原文来源：** Week3.pdf · PDF页64 / 幻灯片64

**资料原文：** 名称或用语片段

> Timeliness

**原文来源：** Week3.pdf · PDF页74 / 幻灯片74

**语境：** Week3 · Timeliness

**语境英文：** Users can transfer, access, or change information within a reasonable time. No fixed time limit is given here.

**语境中文：** 及时性；用户可在合理时间内传送、访问或修改信息。课件没有定义固定秒数。

**语境依据：** 按课件定义整理

**语境原文：** 定义

> User able to transfer, access or modify information in a reasonable time

**语境原文来源：** Week3.pdf · PDF页64 / 幻灯片64

**语境原文：** 名称或用语片段

> Timeliness

**语境原文来源：** Week3.pdf · PDF页74 / 幻灯片74

**语境来源：** Week3.pdf · PDF页64 / 幻灯片64；Week3.pdf · PDF页74 / 幻灯片74

**全部来源：** Week3.pdf · PDF页64 / 幻灯片64；Week3.pdf · PDF页74 / 幻灯片74

### Interactivity

**稳定ID：** csit985-w3-e7882e7659b738

**类别：** 专业英语

**中文解释：** 交互性；关注系统对使用者操作的响应。映射图把它与 Timeliness 一起对应 Delay。

**简单英文（整理解释）：** Focus on the response of the system during use. The map groups it with timeliness under delay.

**说明依据：** 按课件定义与图表整理

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Focus on the response of the system

**原文来源：** Week3.pdf · PDF页64 / 幻灯片64

**资料原文：** 名称或用语片段

> Interactivity

**原文来源：** Week3.pdf · PDF页74 / 幻灯片74

**语境：** Week3 · Interactivity

**语境英文：** Focus on the response of the system during use. The map groups it with timeliness under delay.

**语境中文：** 交互性；关注系统对使用者操作的响应。映射图把它与 Timeliness 一起对应 Delay。

**语境依据：** 按课件定义与图表整理

**语境原文：** 定义

> Focus on the response of the system

**语境原文来源：** Week3.pdf · PDF页64 / 幻灯片64

**语境原文：** 名称或用语片段

> Interactivity

**语境原文来源：** Week3.pdf · PDF页74 / 幻灯片74

**语境来源：** Week3.pdf · PDF页64 / 幻灯片64；Week3.pdf · PDF页74 / 幻灯片74

**全部来源：** Week3.pdf · PDF页64 / 幻灯片64；Week3.pdf · PDF页74 / 幻灯片74

### Reliability (user perspective)

**稳定ID：** csit985-w3-415be9373170c0

**类别：** 专业英语

**中文解释：** 用户视角的可靠性；课件解释为多数时候能访问系统，且服务水平一致。它与 RMA 的失效频率定义需按语境区分。

**简单英文（整理解释）：** From the user's view, the system is available most of the time and gives a consistent level of service.

**说明依据：** 按课件定义整理；区分义项

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Availability from the user perspective

**原文来源：** Week3.pdf · PDF页65 / 幻灯片65

**资料原文：** 定义续句

> User must have access to the system most of the time and level of service must be consistent

**原文来源：** Week3.pdf · PDF页65 / 幻灯片65

**资料原文：** 名称或用语片段

> Reliability

**原文来源：** Week3.pdf · PDF页72 / 幻灯片72

**资料原文：** 名称或用语片段

> Reliability

**原文来源：** Week3.pdf · PDF页74 / 幻灯片74

**语境：** Week3 · Reliability (user perspective)

**语境英文：** From the user's view, the system is available most of the time and gives a consistent level of service.

**语境中文：** 用户视角的可靠性；课件解释为多数时候能访问系统，且服务水平一致。它与 RMA 的失效频率定义需按语境区分。

**语境依据：** 按课件定义整理；区分义项

**语境原文：** 定义

> Availability from the user perspective

**语境原文来源：** Week3.pdf · PDF页65 / 幻灯片65

**语境原文：** 定义续句

> User must have access to the system most of the time and level of service must be consistent

**语境原文来源：** Week3.pdf · PDF页65 / 幻灯片65

**语境原文：** 名称或用语片段

> Reliability

**语境原文来源：** Week3.pdf · PDF页72 / 幻灯片72

**语境原文：** 名称或用语片段

> Reliability

**语境原文来源：** Week3.pdf · PDF页74 / 幻灯片74

**语境来源：** Week3.pdf · PDF页65 / 幻灯片65；Week3.pdf · PDF页72 / 幻灯片72；Week3.pdf · PDF页74 / 幻灯片74

**全部来源：** Week3.pdf · PDF页65 / 幻灯片65；Week3.pdf · PDF页72 / 幻灯片72；Week3.pdf · PDF页74 / 幻灯片74

### Presentation quality

**稳定ID：** csit985-w3-95e09d70249e45

**类别：** 专业英语

**中文解释：** 呈现质量；用户感受到的质量，例如音频与视频显示。

**简单英文（整理解释）：** The quality perceived by the user, for example in audio and video displays.

**说明依据：** 按课件定义整理

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> The user perception of quality (e.g. audio and video displays)

**原文来源：** Week3.pdf · PDF页65 / 幻灯片65

**语境：** Week3 · Presentation quality

**语境英文：** The quality perceived by the user, for example in audio and video displays.

**语境中文：** 呈现质量；用户感受到的质量，例如音频与视频显示。

**语境依据：** 按课件定义整理

**语境原文：** 定义

> The user perception of quality (e.g. audio and video displays)

**语境原文来源：** Week3.pdf · PDF页65 / 幻灯片65

**语境来源：** Week3.pdf · PDF页65 / 幻灯片65；Week3.pdf · PDF页74 / 幻灯片74

**全部来源：** Week3.pdf · PDF页65 / 幻灯片65；Week3.pdf · PDF页74 / 幻灯片74

### Adaptability

**稳定ID：** csit985-w3-bbad77f8986090

**类别：** 专业英语

**中文解释：** 适应性；系统适应用户需求的能力；例子是使用不受距离约束及移动性。

**简单英文（整理解释）：** The ability of the system to adapt to users' needs, including distance independence and mobility.

**说明依据：** 按课件定义整理

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Ability of the system to adapt to users needs

**原文来源：** Week3.pdf · PDF页66 / 幻灯片66

**资料原文：** 例子

> E.g. distance independence and mobility

**原文来源：** Week3.pdf · PDF页66 / 幻灯片66

**资料原文：** 名称或用语片段

> Adaptability

**原文来源：** Week3.pdf · PDF页74 / 幻灯片74

**语境：** Week3 · Adaptability

**语境英文：** The ability of the system to adapt to users' needs, including distance independence and mobility.

**语境中文：** 适应性；系统适应用户需求的能力；例子是使用不受距离约束及移动性。

**语境依据：** 按课件定义整理

**语境原文：** 定义

> Ability of the system to adapt to users needs

**语境原文来源：** Week3.pdf · PDF页66 / 幻灯片66

**语境原文：** 例子

> E.g. distance independence and mobility

**语境原文来源：** Week3.pdf · PDF页66 / 幻灯片66

**语境原文：** 名称或用语片段

> Adaptability

**语境原文来源：** Week3.pdf · PDF页74 / 幻灯片74

**语境来源：** Week3.pdf · PDF页66 / 幻灯片66；Week3.pdf · PDF页74 / 幻灯片74

**全部来源：** Week3.pdf · PDF页66 / 幻灯片66；Week3.pdf · PDF页74 / 幻灯片74

### Distance independence / Mobility

**稳定ID：** csit985-w3-75c2d2fd2a3b02

**类别：** 专业英语

**中文解释：** 距离独立性／移动性；课件把二者列为 Adaptability 的例子，没有给出实现方式或覆盖范围。

**简单英文（整理解释）：** Examples of adaptability: use across locations and while moving. The slides do not give an implementation or range.

**说明依据：** 按资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> distance independence

**原文来源：** Week3.pdf · PDF页66 / 幻灯片66

**语境：** Week3 · Distance independence / Mobility

**语境英文：** Examples of adaptability: use across locations and while moving. The slides do not give an implementation or range.

**语境中文：** 距离独立性／移动性；课件把二者列为 Adaptability 的例子，没有给出实现方式或覆盖范围。

**语境依据：** 按资料整理

**语境原文：** 名称或用语片段

> distance independence

**语境原文来源：** Week3.pdf · PDF页66 / 幻灯片66

**语境来源：** Week3.pdf · PDF页66 / 幻灯片66

**全部来源：** Week3.pdf · PDF页66 / 幻灯片66

### Security

**稳定ID：** csit985-w3-b58d6150f1c242

**类别：** 专业英语

**中文解释：** 安全性；本课件列 confidentiality、integrity、authenticity，保护用户信息和物理资源。TXT 的 CIA 表述有疑点。

**简单英文（整理解释）：** Protection of users' information and physical resources. This slide names confidentiality, integrity, and authenticity.

**说明依据：** 按课件定义整理；TXT缩写有疑点

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Guarantee of confidentiality, integrity and authenticity of users information and physical resources

**原文来源：** Week3.pdf · PDF页66 / 幻灯片66

**资料原文：** 教师用语（TXT原片段）

> CIA prison

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符4132起；搜索“CIA prison”

**语境：** Week3 · Security

**语境英文：** Protection of users' information and physical resources. This slide names confidentiality, integrity, and authenticity.

**语境中文：** 安全性；本课件列 confidentiality、integrity、authenticity，保护用户信息和物理资源。TXT 的 CIA 表述有疑点。

**语境依据：** 按课件定义整理；TXT缩写有疑点

**语境原文：** 定义

> Guarantee of confidentiality, integrity and authenticity of users information and physical resources

**语境原文来源：** Week3.pdf · PDF页66 / 幻灯片66

**语境原文：** 教师用语（TXT原片段）

> CIA prison

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符4132起；搜索“CIA prison”

**语境来源：** Week3.pdf · PDF页66 / 幻灯片66；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符4132起；搜索“CIA prison”

**全部来源：** Week3.pdf · PDF页66 / 幻灯片66；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符4132起；搜索“CIA prison”

### Confidentiality / Integrity / Authenticity

**稳定ID：** csit985-w3-5a987ee44bffd7

**类别：** 专业英语

**中文解释：** 保密性／完整性／真实性；第66页并列的安全属性。单项正式定义未给出；这里分别解释为不泄露、内容保持完整、对象或信息确为所称来源。

**简单英文（整理解释）：** Security properties named in the slide: keep information private, keep it complete, and check that it is what it claims to be. Individual definitions are not given.

**说明依据：** 必要基础释义；不扩写CIA

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> confidentiality

**原文来源：** Week3.pdf · PDF页66 / 幻灯片66

**资料原文：** 教师用语（TXT原片段）

> confidential utility, integrity, and, uh, and authenticity

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符4166起；搜索“confidential utility, integrity, and, uh, and authenticity”

**语境：** Week3 · Confidentiality / Integrity / Authenticity

**语境英文：** Security properties named in the slide: keep information private, keep it complete, and check that it is what it claims to be. Individual definitions are not given.

**语境中文：** 保密性／完整性／真实性；第66页并列的安全属性。单项正式定义未给出；这里分别解释为不泄露、内容保持完整、对象或信息确为所称来源。

**语境依据：** 必要基础释义；不扩写CIA

**语境原文：** 名称或用语片段

> confidentiality

**语境原文来源：** Week3.pdf · PDF页66 / 幻灯片66

**语境原文：** 教师用语（TXT原片段）

> confidential utility, integrity, and, uh, and authenticity

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符4166起；搜索“confidential utility, integrity, and, uh, and authenticity”

**语境来源：** Week3.pdf · PDF页66 / 幻灯片66；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符4166起；搜索“confidential utility, integrity, and, uh, and authenticity”

**全部来源：** Week3.pdf · PDF页66 / 幻灯片66；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符4166起；搜索“confidential utility, integrity, and, uh, and authenticity”

### Affordability

**稳定ID：** csit985-w3-f2ca89ca92de81

**类别：** 专业英语

**中文解释：** 可负担性；购买在预算内，课件明确说这一要求完全不是技术性的。

**简单英文（整理解释）：** Purchases fit within the available budget. The slide calls this completely non-technical.

**说明依据：** 按课件定义整理

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Purchases fit within a budget – completely NON-technical

**原文来源：** Week3.pdf · PDF页67 / 幻灯片67

**资料原文：** 名称或用语片段

> Affordability

**原文来源：** Week3.pdf · PDF页74 / 幻灯片74

**语境：** Week3 · Affordability

**语境英文：** Purchases fit within the available budget. The slide calls this completely non-technical.

**语境中文：** 可负担性；购买在预算内，课件明确说这一要求完全不是技术性的。

**语境依据：** 按课件定义整理

**语境原文：** 定义

> Purchases fit within a budget – completely NON-technical

**语境原文来源：** Week3.pdf · PDF页67 / 幻灯片67

**语境原文：** 名称或用语片段

> Affordability

**语境原文来源：** Week3.pdf · PDF页74 / 幻灯片74

**语境来源：** Week3.pdf · PDF页67 / 幻灯片67；Week3.pdf · PDF页74 / 幻灯片74

**全部来源：** Week3.pdf · PDF页67 / 幻灯片67；Week3.pdf · PDF页74 / 幻灯片74

### Functionality

**稳定ID：** csit985-w3-9bf42d48ed7bd0

**类别：** 专业英语

**中文解释：** 功能性；系统将执行哪些功能，常与所用应用相联系。

**简单英文（整理解释）：** The functions the system will perform, often tied to the applications used.

**说明依据：** 按课件定义整理

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Functions that the system will perform

**原文来源：** Week3.pdf · PDF页67 / 幻灯片67

**资料原文：** 说明

> Often tied to applications that will be used on the system

**原文来源：** Week3.pdf · PDF页67 / 幻灯片67

**语境：** Week3 · Functionality

**语境英文：** The functions the system will perform, often tied to the applications used.

**语境中文：** 功能性；系统将执行哪些功能，常与所用应用相联系。

**语境依据：** 按课件定义整理

**语境原文：** 定义

> Functions that the system will perform

**语境原文来源：** Week3.pdf · PDF页67 / 幻灯片67

**语境原文：** 说明

> Often tied to applications that will be used on the system

**语境原文来源：** Week3.pdf · PDF页67 / 幻灯片67

**语境来源：** Week3.pdf · PDF页67 / 幻灯片67

**全部来源：** Week3.pdf · PDF页67 / 幻灯片67

### Future growth

**稳定ID：** csit985-w3-318de628485aa2

**类别：** 专业英语

**中文解释：** 未来增长；依赖了解用户未来部署新应用等计划。图中 Expected growth 映射到 Capacity。

**简单英文（整理解释）：** Future changes based on users' plans, including new applications. Expected growth is grouped under capacity in the map.

**说明依据：** 按课件说明整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 说明

> Depends on knowledge of the users plans for future deployment of new applications etc.

**原文来源：** Week3.pdf · PDF页68 / 幻灯片68

**语境：** Week3 · Future growth

**语境英文：** Future changes based on users' plans, including new applications. Expected growth is grouped under capacity in the map.

**语境中文：** 未来增长；依赖了解用户未来部署新应用等计划。图中 Expected growth 映射到 Capacity。

**语境依据：** 按课件说明整理

**语境原文：** 说明

> Depends on knowledge of the users plans for future deployment of new applications etc.

**语境原文来源：** Week3.pdf · PDF页68 / 幻灯片68

**语境来源：** Week3.pdf · PDF页68 / 幻灯片68；Week3.pdf · PDF页74 / 幻灯片74

**全部来源：** Week3.pdf · PDF页68 / 幻灯片68；Week3.pdf · PDF页74 / 幻灯片74

### Performance requirements

**稳定ID：** csit985-w3-6d21099d5b494d

**类别：** 专业英语

**中文解释：** 性能需求；第74页图将用户服务需求归到 Delay、Reliability、Capacity 三组。本图不是逐项严格等价或完整指标体系。

**简单英文（整理解释）：** Technical performance needs. This map groups user needs under delay, reliability, and capacity.

**说明依据：** 按图表整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Performance Requirements

**原文来源：** Week3.pdf · PDF页74 / 幻灯片74

**资料原文：** 教师用语（TXT原片段）

> metric like capacity, delay or reliability

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符6323起；搜索“metric like capacity, delay or reliability”

**语境：** Week3 · Performance requirements

**语境英文：** Technical performance needs. This map groups user needs under delay, reliability, and capacity.

**语境中文：** 性能需求；第74页图将用户服务需求归到 Delay、Reliability、Capacity 三组。本图不是逐项严格等价或完整指标体系。

**语境依据：** 按图表整理

**语境原文：** 名称或用语片段

> Performance Requirements

**语境原文来源：** Week3.pdf · PDF页74 / 幻灯片74

**语境原文：** 教师用语（TXT原片段）

> metric like capacity, delay or reliability

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符6323起；搜索“metric like capacity, delay or reliability”

**语境来源：** Week3.pdf · PDF页74 / 幻灯片74；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符6323起；搜索“metric like capacity, delay or reliability”

**全部来源：** Week3.pdf · PDF页74 / 幻灯片74；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符6323起；搜索“metric like capacity, delay or reliability”

### Delay

**稳定ID：** csit985-w3-c2d9dc78024b85

**类别：** 专业英语

**中文解释：** 时延；映射图中 Timeliness 与 Interactivity 对应的性能项；本周没有正式定义或数值界限。

**简单英文（整理解释）：** A performance measure related to timeliness and interactivity in the map. This week gives no formal definition or limit.

**说明依据：** 按图表与语境整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> delay

**原文来源：** Week3.pdf · PDF页71 / 幻灯片71

**资料原文：** 名称或用语片段

> Delay

**原文来源：** Week3.pdf · PDF页74 / 幻灯片74

**语境：** Week3 · Delay

**语境英文：** A performance measure related to timeliness and interactivity in the map. This week gives no formal definition or limit.

**语境中文：** 时延；映射图中 Timeliness 与 Interactivity 对应的性能项；本周没有正式定义或数值界限。

**语境依据：** 按图表与语境整理

**语境原文：** 名称或用语片段

> delay

**语境原文来源：** Week3.pdf · PDF页71 / 幻灯片71

**语境原文：** 名称或用语片段

> Delay

**语境原文来源：** Week3.pdf · PDF页74 / 幻灯片74

**语境来源：** Week3.pdf · PDF页71 / 幻灯片71；Week3.pdf · PDF页74 / 幻灯片74

**全部来源：** Week3.pdf · PDF页71 / 幻灯片71；Week3.pdf · PDF页74 / 幻灯片74

### Application locations

**稳定ID：** csit985-w3-9fd45fea90fcf1

**类别：** 专业英语

**中文解释：** 应用位置；应用分类、分组后要确定在网络何处，位置会影响流量、链路容量和时延。

**简单英文（整理解释）：** Where applications are placed in the network. Location can change the traffic flow, capacity, and delay needs.

**说明依据：** 按资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Application Locations

**原文来源：** Week3.pdf · PDF页73 / 幻灯片73

**资料原文：** 教师用语（TXT原片段）

> where they are located

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符8507起；搜索“where they are located”

**资料原文：** 教师用语（TXT原片段）

> different network demands in very different locations

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符8760起；搜索“different network demands in very different locations”

**语境：** Week3 · Application locations

**语境英文：** Where applications are placed in the network. Location can change the traffic flow, capacity, and delay needs.

**语境中文：** 应用位置；应用分类、分组后要确定在网络何处，位置会影响流量、链路容量和时延。

**语境依据：** 按资料整理

**语境原文：** 名称或用语片段

> Application Locations

**语境原文来源：** Week3.pdf · PDF页73 / 幻灯片73

**语境原文：** 教师用语（TXT原片段）

> where they are located

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符8507起；搜索“where they are located”

**语境原文：** 教师用语（TXT原片段）

> different network demands in very different locations

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符8760起；搜索“different network demands in very different locations”

**语境来源：** Week3.pdf · PDF页73 / 幻灯片73；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符8507起；搜索“where they are located”；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符8760起；搜索“different network demands in very different locations”

**全部来源：** Week3.pdf · PDF页73 / 幻灯片73；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符8507起；搜索“where they are located”；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符8760起；搜索“different network demands in very different locations”

### Fast Ethernet / GigE / NICs / BB

**稳定ID：** csit985-w3-75191b097e02a5

**类别：** 专业英语

**中文解释：** 图表中的网络标签；课件正文将 Fast Ethernet 接到 backbone，图用 BB；GigE NICs 指千兆以太网接口卡。具体标准细节本周未定义。

**简单英文（整理解释）：** Network labels in the example: Fast Ethernet links to the backbone, GigE network interface cards, and BB for backbone. Detailed standards are not defined here.

**说明依据：** 图表标签与必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图表标签或原片段（视觉核对）

> GigE NICs

**原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**资料原文：** 图表标签或原片段（视觉核对）

> Fast Ethernet to BB

**原文来源：** Week3.pdf · PDF页47 / 幻灯片47（图表）

**语境：** Week3 · Fast Ethernet / GigE / NICs / BB

**语境英文：** Network labels in the example: Fast Ethernet links to the backbone, GigE network interface cards, and BB for backbone. Detailed standards are not defined here.

**语境中文：** 图表中的网络标签；课件正文将 Fast Ethernet 接到 backbone，图用 BB；GigE NICs 指千兆以太网接口卡。具体标准细节本周未定义。

**语境依据：** 图表标签与必要基础释义

**语境原文：** 图表标签或原片段（视觉核对）

> GigE NICs

**语境原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**语境原文：** 图表标签或原片段（视觉核对）

> Fast Ethernet to BB

**语境原文来源：** Week3.pdf · PDF页47 / 幻灯片47（图表）

**语境来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）；Week3.pdf · PDF页47 / 幻灯片47（图表）

**全部来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）；Week3.pdf · PDF页47 / 幻灯片47（图表）

### Application session

**稳定ID：** csit985-w3-8891de73dc2ec2

**类别：** 专业英语

**中文解释：** 应用会话；示例规定 DB1 每个会话至少 5 Mbps。session 在这里是一次应用使用或连接，不是课次。

**简单英文（整理解释）：** One use or connection of an application. DB1 in the example requires at least 5 Mbps per session.

**说明依据：** 按图表与必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 示例条件（图表）

> Database application (DB1) requires a minimum of 5 Mbps per session.

**原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**资料原文：** 图表标签或原片段（视觉核对）

> requires a minimum of 5 Mbps per session

**原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**语境：** Week3 · Application session

**语境英文：** One use or connection of an application. DB1 in the example requires at least 5 Mbps per session.

**语境中文：** 应用会话；示例规定 DB1 每个会话至少 5 Mbps。session 在这里是一次应用使用或连接，不是课次。

**语境依据：** 按图表与必要基础释义

**语境原文：** 示例条件（图表）

> Database application (DB1) requires a minimum of 5 Mbps per session.

**语境原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**语境原文：** 图表标签或原片段（视觉核对）

> requires a minimum of 5 Mbps per session

**语境原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**语境来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**全部来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

### Generic computing devices

**稳定ID：** csit985-w3-f469279e714b62

**类别：** 专业英语

**中文解释：** 通用计算设备；课件列台式机、笔记本、手持设备及 WiFi，通常单用户，并有端到端需求。WiFi 并非具体设备名称，原列举保留。

**简单英文（整理解释）：** Common computing devices listed by the slide. They are typically used by one user and have end-to-end needs.

**说明依据：** 按课件说明整理；列举有疑点

**定义状态：** 当前资料未给出正式定义

**资料原文：** 列项

> Desktops, laptops, handheld devices, WiFi

**原文来源：** Week3.pdf · PDF页75 / 幻灯片75

**资料原文：** 限定

> Typically single user

**原文来源：** Week3.pdf · PDF页75 / 幻灯片75

**资料原文：** 限定

> End-to-end requirements

**原文来源：** Week3.pdf · PDF页75 / 幻灯片75

**语境：** Week3 · Generic computing devices

**语境英文：** Common computing devices listed by the slide. They are typically used by one user and have end-to-end needs.

**语境中文：** 通用计算设备；课件列台式机、笔记本、手持设备及 WiFi，通常单用户，并有端到端需求。WiFi 并非具体设备名称，原列举保留。

**语境依据：** 按课件说明整理；列举有疑点

**语境原文：** 列项

> Desktops, laptops, handheld devices, WiFi

**语境原文来源：** Week3.pdf · PDF页75 / 幻灯片75

**语境原文：** 限定

> Typically single user

**语境原文来源：** Week3.pdf · PDF页75 / 幻灯片75

**语境原文：** 限定

> End-to-end requirements

**语境原文来源：** Week3.pdf · PDF页75 / 幻灯片75

**语境来源：** Week3.pdf · PDF页75 / 幻灯片75

**全部来源：** Week3.pdf · PDF页75 / 幻灯片75

### Server

**稳定ID：** csit985-w3-2bd8b5c6bf34aa

**类别：** 专业英语

**中文解释：** 服务器；为一个或更多用户提供服务，会影响信息流。

**简单英文（整理解释）：** A device providing services to one or more users. It affects information flow.

**说明依据：** 按课件说明整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 说明

> Provide service to one or more users

**原文来源：** Week3.pdf · PDF页76 / 幻灯片76

**资料原文：** 说明

> Impact on information flow

**原文来源：** Week3.pdf · PDF页76 / 幻灯片76

**语境：** Week3 · Server

**语境英文：** A device providing services to one or more users. It affects information flow.

**语境中文：** 服务器；为一个或更多用户提供服务，会影响信息流。

**语境依据：** 按课件说明整理

**语境原文：** 说明

> Provide service to one or more users

**语境原文来源：** Week3.pdf · PDF页76 / 幻灯片76

**语境原文：** 说明

> Impact on information flow

**语境原文来源：** Week3.pdf · PDF页76 / 幻灯片76

**语境来源：** Week3.pdf · PDF页76 / 幻灯片76

**全部来源：** Week3.pdf · PDF页76 / 幻灯片76

### Specialized equipment

**稳定ID：** csit985-w3-4261b5377b2254

**类别：** 专业英语

**中文解释：** 专用设备；课件举 supercomputers、mainframe、data gathering equipment，强调位置依赖。

**简单英文（整理解释）：** Equipment for special work, such as supercomputers, mainframes, and data-gathering equipment. Its location matters.

**说明依据：** 按课件说明整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 例子

> Supercomputers, mainframe, data gathering equipment

**原文来源：** Week3.pdf · PDF页76 / 幻灯片76

**资料原文：** 限定

> Location Dependent

**原文来源：** Week3.pdf · PDF页76 / 幻灯片76

**语境：** Week3 · Specialized equipment

**语境英文：** Equipment for special work, such as supercomputers, mainframes, and data-gathering equipment. Its location matters.

**语境中文：** 专用设备；课件举 supercomputers、mainframe、data gathering equipment，强调位置依赖。

**语境依据：** 按课件说明整理

**语境原文：** 例子

> Supercomputers, mainframe, data gathering equipment

**语境原文来源：** Week3.pdf · PDF页76 / 幻灯片76

**语境原文：** 限定

> Location Dependent

**语境原文来源：** Week3.pdf · PDF页76 / 幻灯片76

**语境来源：** Week3.pdf · PDF页76 / 幻灯片76

**全部来源：** Week3.pdf · PDF页76 / 幻灯片76

### Supercomputers / Mainframe / Data gathering equipment

**稳定ID：** csit985-w3-f8b00d06d5e3c7

**类别：** 专业英语

**中文解释：** 超级计算机／大型主机／数据采集设备；本周作为 Specialized equipment 的例子，未比较各自架构或具体性能。

**简单英文（整理解释）：** Three examples of specialized equipment. The lecture does not compare their architectures or exact performance.

**说明依据：** 课件列项与必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Supercomputers

**原文来源：** Week3.pdf · PDF页76 / 幻灯片76

**语境：** Week3 · Supercomputers / Mainframe / Data gathering equipment

**语境英文：** Three examples of specialized equipment. The lecture does not compare their architectures or exact performance.

**语境中文：** 超级计算机／大型主机／数据采集设备；本周作为 Specialized equipment 的例子，未比较各自架构或具体性能。

**语境依据：** 课件列项与必要基础释义

**语境原文：** 名称或用语片段

> Supercomputers

**语境原文来源：** Week3.pdf · PDF页76 / 幻灯片76

**语境来源：** Week3.pdf · PDF页76 / 幻灯片76

**全部来源：** Week3.pdf · PDF页76 / 幻灯片76

### Storage / Processor / Memory / Bus performance

**稳定ID：** csit985-w3-9819515901b911

**类别：** 专业英语

**中文解释：** 存储／处理器／内存／总线性能；设备性能的四组特征。课件对内存特别标注 access times，未给具体测量公式。

**简单英文（整理解释）：** Four device performance characteristics. Memory performance includes access times; no detailed formulas are given.

**说明依据：** 按课件列项整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 列项

> Storage performance Processor performance Memory performance (access times) Bus performance

**原文来源：** Week3.pdf · PDF页77 / 幻灯片77

**语境：** Week3 · Storage / Processor / Memory / Bus performance

**语境英文：** Four device performance characteristics. Memory performance includes access times; no detailed formulas are given.

**语境中文：** 存储／处理器／内存／总线性能；设备性能的四组特征。课件对内存特别标注 access times，未给具体测量公式。

**语境依据：** 按课件列项整理

**语境原文：** 列项

> Storage performance Processor performance Memory performance (access times) Bus performance

**语境原文来源：** Week3.pdf · PDF页77 / 幻灯片77

**语境来源：** Week3.pdf · PDF页77 / 幻灯片77

**全部来源：** Week3.pdf · PDF页77 / 幻灯片77

### CPU / GPU

**稳定ID：** csit985-w3-92c319cb0820a8

**类别：** 专业英语

**中文解释：** 中央处理器／图形处理器；教师在设备性能讲解中提到。缩写展开与基本中文名属必要基础释义，指定资料没有正式定义或性能参数。

**简单英文（整理解释）：** Processor names used by the teacher: central processing unit and graphics processing unit. The supplied material gives no formal definitions or specifications.

**说明依据：** 教师列项与必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语（TXT原片段）

> the CPU

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符10320起；搜索“the CPU”

**资料原文：** 教师用语（TXT原片段）

> GPU memory

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符10378起；搜索“GPU memory”

**语境：** Week3 · CPU / GPU

**语境英文：** Processor names used by the teacher: central processing unit and graphics processing unit. The supplied material gives no formal definitions or specifications.

**语境中文：** 中央处理器／图形处理器；教师在设备性能讲解中提到。缩写展开与基本中文名属必要基础释义，指定资料没有正式定义或性能参数。

**语境依据：** 教师列项与必要基础释义

**语境原文：** 教师用语（TXT原片段）

> the CPU

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符10320起；搜索“the CPU”

**语境原文：** 教师用语（TXT原片段）

> GPU memory

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符10378起；搜索“GPU memory”

**语境来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符10320起；搜索“the CPU”；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符10378起；搜索“GPU memory”

**全部来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符10320起；搜索“the CPU”；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符10378起；搜索“GPU memory”

### Scaling dependencies

**稳定ID：** csit985-w3-cd8a17f5c1d4bf

**类别：** 专业英语

**中文解释：** 规模扩展依赖；网络设计要考虑的依赖之一。资料没有单独定义或数值上限。

**简单英文（整理解释）：** Dependencies that matter when the network grows. The slide names them but gives no separate definition or limit.

**说明依据：** 按语境整理；本周未定义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Scaling dependencies

**原文来源：** Week3.pdf · PDF页78 / 幻灯片78

**语境：** Week3 · Scaling dependencies

**语境英文：** Dependencies that matter when the network grows. The slide names them but gives no separate definition or limit.

**语境中文：** 规模扩展依赖；网络设计要考虑的依赖之一。资料没有单独定义或数值上限。

**语境依据：** 按语境整理；本周未定义

**语境原文：** 名称或用语片段

> Scaling dependencies

**语境原文来源：** Week3.pdf · PDF页78 / 幻灯片78

**语境来源：** Week3.pdf · PDF页78 / 幻灯片78

**全部来源：** Week3.pdf · PDF页78 / 幻灯片78

### Location dependencies

**稳定ID：** csit985-w3-b6971f1e157d8e

**类别：** 专业英语

**中文解释：** 位置依赖；需求或选择受应用、设备、网络所在位置影响。

**简单英文（整理解释）：** Needs or design choices that depend on where applications, devices, or networks are located.

**说明依据：** 按资料语境整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> location dependencies

**原文来源：** Week3.pdf · PDF页45 / 幻灯片45

**资料原文：** 名称或用语片段

> Location dependencies

**原文来源：** Week3.pdf · PDF页78 / 幻灯片78

**语境：** Week3 · Location dependencies

**语境英文：** Needs or design choices that depend on where applications, devices, or networks are located.

**语境中文：** 位置依赖；需求或选择受应用、设备、网络所在位置影响。

**语境依据：** 按资料语境整理

**语境原文：** 名称或用语片段

> location dependencies

**语境原文来源：** Week3.pdf · PDF页45 / 幻灯片45

**语境原文：** 名称或用语片段

> Location dependencies

**语境原文来源：** Week3.pdf · PDF页78 / 幻灯片78

**语境来源：** Week3.pdf · PDF页45 / 幻灯片45；Week3.pdf · PDF页76 / 幻灯片76；Week3.pdf · PDF页78 / 幻灯片78

**全部来源：** Week3.pdf · PDF页45 / 幻灯片45；Week3.pdf · PDF页76 / 幻灯片76；Week3.pdf · PDF页78 / 幻灯片78

### Performance constraints

**稳定ID：** csit985-w3-ae1661b9eff123

**类别：** 专业英语

**中文解释：** 性能限制；现有网络可能限制设计可达到的性能。课件没有具体阈值。

**简单英文（整理解释）：** Limits on performance that the design must consider in existing networks.

**说明依据：** 按资料语境整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Performance constraints

**原文来源：** Week3.pdf · PDF页78 / 幻灯片78

**资料原文：** 教师用语（TXT原片段）

> performance constraints

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符10857起；搜索“performance constraints”

**语境：** Week3 · Performance constraints

**语境英文：** Limits on performance that the design must consider in existing networks.

**语境中文：** 性能限制；现有网络可能限制设计可达到的性能。课件没有具体阈值。

**语境依据：** 按资料语境整理

**语境原文：** 名称或用语片段

> Performance constraints

**语境原文来源：** Week3.pdf · PDF页78 / 幻灯片78

**语境原文：** 教师用语（TXT原片段）

> performance constraints

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符10857起；搜索“performance constraints”

**语境来源：** Week3.pdf · PDF页78 / 幻灯片78；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符10857起；搜索“performance constraints”

**全部来源：** Week3.pdf · PDF页78 / 幻灯片78；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符10857起；搜索“performance constraints”

### Network, system and support service dependencies

**稳定ID：** csit985-w3-455e8a6c6b3d44

**类别：** 专业英语

**中文解释：** 网络、系统和支持服务依赖；现有环境中的关联条件，设计时必须纳入；本周未展开各项定义。

**简单英文（整理解释）：** Dependencies involving the network, system, and support services. They must be included when considering existing networks.

**说明依据：** 按课件列项整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Network, system and support service dependencies

**原文来源：** Week3.pdf · PDF页78 / 幻灯片78

**语境：** Week3 · Network, system and support service dependencies

**语境英文：** Dependencies involving the network, system, and support services. They must be included when considering existing networks.

**语境中文：** 网络、系统和支持服务依赖；现有环境中的关联条件，设计时必须纳入；本周未展开各项定义。

**语境依据：** 按课件列项整理

**语境原文：** 名称或用语片段

> Network, system and support service dependencies

**语境原文来源：** Week3.pdf · PDF页78 / 幻灯片78

**语境来源：** Week3.pdf · PDF页78 / 幻灯片78

**全部来源：** Week3.pdf · PDF页78 / 幻灯片78

### Interoperability dependencies

**稳定ID：** csit985-w3-4201654f87c458

**类别：** 专业英语

**中文解释：** 互操作依赖；与不同网络或系统能否共同工作有关的设计条件。课件只列名称。

**简单英文（整理解释）：** Dependencies related to whether different systems can work together. The slide only names this item.

**说明依据：** 必要基础释义；本周未定义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Interoperability dependencies

**原文来源：** Week3.pdf · PDF页78 / 幻灯片78

**语境：** Week3 · Interoperability dependencies

**语境英文：** Dependencies related to whether different systems can work together. The slide only names this item.

**语境中文：** 互操作依赖；与不同网络或系统能否共同工作有关的设计条件。课件只列名称。

**语境依据：** 必要基础释义；本周未定义

**语境原文：** 名称或用语片段

> Interoperability dependencies

**语境原文来源：** Week3.pdf · PDF页78 / 幻灯片78

**语境来源：** Week3.pdf · PDF页78 / 幻灯片78

**全部来源：** Week3.pdf · PDF页78 / 幻灯片78

### Network obsolescence

**稳定ID：** csit985-w3-84e6aea0e64d1b

**类别：** 专业英语

**中文解释：** 网络老化／过时；现有网络设计需要考虑的项目。并非简单指设备年龄大，也不等于所有旧网络必须立即更换。

**简单英文（整理解释）：** The network becoming outdated. The slide lists this as a design consideration without giving a replacement rule.

**说明依据：** 必要基础释义；本周未定义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Network obsolescence

**原文来源：** Week3.pdf · PDF页78 / 幻灯片78

**语境：** Week3 · Network obsolescence

**语境英文：** The network becoming outdated. The slide lists this as a design consideration without giving a replacement rule.

**语境中文：** 网络老化／过时；现有网络设计需要考虑的项目。并非简单指设备年龄大，也不等于所有旧网络必须立即更换。

**语境依据：** 必要基础释义；本周未定义

**语境原文：** 名称或用语片段

> Network obsolescence

**语境原文来源：** Week3.pdf · PDF页78 / 幻灯片78

**语境来源：** Week3.pdf · PDF页78 / 幻灯片78

**全部来源：** Week3.pdf · PDF页78 / 幻灯片78

### Identity system / Access control / Encryption

**稳定ID：** csit985-w3-85fb1454699a1d

**类别：** 专业英语

**中文解释：** 身份系统／访问控制／加密；教师说安全需求可能影响这些方面。本周未给单项正式定义，分别是识别身份、限制访问、将信息转换为受保护形式。

**简单英文（整理解释）：** Ways to identify users, control access, and protect information by encryption. They are only named in this lecture.

**说明依据：** 教师列项与必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语（TXT原片段）

> identity system, access control, and encryption

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符4266起；搜索“identity system, access control, and encryption”

**语境：** Week3 · Identity system / Access control / Encryption

**语境英文：** Ways to identify users, control access, and protect information by encryption. They are only named in this lecture.

**语境中文：** 身份系统／访问控制／加密；教师说安全需求可能影响这些方面。本周未给单项正式定义，分别是识别身份、限制访问、将信息转换为受保护形式。

**语境依据：** 教师列项与必要基础释义

**语境原文：** 教师用语（TXT原片段）

> identity system, access control, and encryption

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符4266起；搜索“identity system, access control, and encryption”

**语境来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符4266起；搜索“identity system, access control, and encryption”

**全部来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符4266起；搜索“identity system, access control, and encryption”

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

### Constraint / limitation

**稳定ID：** csit985-w1-fc0c0bf8cd2f74

**类别：** 阅读词汇

**中文解释：** 约束／限制；这里是目标、设计和实施受到的限制。

**简单英文（整理解释）：** A limit that affects what can be done.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> constraint

**原文来源：** Week1.pdf · PDF页48 / 幻灯片48

**资料原文：** 教师用语（TXT原片段）

> constraints, risks

**原文来源：** Week 1 - Lecture Rec-transcript.txt · TXT原始L5，本行字符4442起；搜索“constraints, risks”

**资料原文：** 名称或用语片段

> Constraints

**原文来源：** Week3.pdf · PDF页14 / 幻灯片14

**资料原文：** 名称或用语片段

> constraints

**原文来源：** Week3.pdf · PDF页78 / 幻灯片78

**语境：** Week1 · Constraint / limitation

**语境英文：** A limit that affects what can be done.

**语境中文：** 约束／限制；这里是目标、设计和实施受到的限制。

**语境依据：** 必要基础释义

**使用结构：** constraints on; define constraints

**语境原文：** 名称或用语片段

> constraint

**语境原文来源：** Week1.pdf · PDF页48 / 幻灯片48

**语境原文：** 教师用语（TXT原片段）

> constraints, risks

**语境原文来源：** Week 1 - Lecture Rec-transcript.txt · TXT原始L5，本行字符4442起；搜索“constraints, risks”

**语境来源：** Week1.pdf · PDF页48 / 幻灯片48；Week 1 - Lecture Rec-transcript.txt · TXT原始L5，本行字符4442起；搜索“constraints, risks”

**语境：** Week3 · Constraints

**语境英文：** Conditions that limit what can be done.

**语境中文：** 约束条件；限制选择的条件，与 competition（竞争）并列分析现状。

**语境依据：** 按资料用法整理

**使用结构：** constraints on a design

**语境原文：** 名称或用语片段

> Constraints

**语境原文来源：** Week3.pdf · PDF页14 / 幻灯片14

**语境原文：** 名称或用语片段

> constraints

**语境原文来源：** Week3.pdf · PDF页78 / 幻灯片78

**语境来源：** Week3.pdf · PDF页14 / 幻灯片14；Week3.pdf · PDF页78 / 幻灯片78

**使用结构：** constraints on; define constraints

**全部来源：** Week1.pdf · PDF页48 / 幻灯片48；Week 1 - Lecture Rec-transcript.txt · TXT原始L5，本行字符4442起；搜索“constraints, risks”；Week3.pdf · PDF页14 / 幻灯片14；Week3.pdf · PDF页78 / 幻灯片78

### Coordination

**稳定ID：** csit985-w2-1ba8a60326655b

**类别：** 阅读词汇

**中文解释：** 协调；教师说分布式结构的协调可能很复杂。

**简单英文（整理解释）：** Organising parts to work together; this can be complex in a distributed network.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语（TXT原片段）

> coordination can be very complex

**原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符8330起；搜索“coordination can be very complex”

**资料原文：** 名称或用语片段

> Co-Ordination

**原文来源：** Week3.pdf · PDF页18 / 幻灯片18

**语境：** Week2 · Coordination

**语境英文：** Organising parts to work together; this can be complex in a distributed network.

**语境中文：** 协调；教师说分布式结构的协调可能很复杂。

**语境依据：** 教师补充

**使用结构：** complex coordination; coordination between + groups

**语境原文：** 教师用语（TXT原片段）

> coordination can be very complex

**语境原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符8330起；搜索“coordination can be very complex”

**语境来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符8330起；搜索“coordination can be very complex”

**语境：** Week3 · Co-Ordination

**语境英文：** Organize people and work so that they fit together.

**语境中文：** 协调；不同人和工作配合起来。保留课件 Co-Ordination 拼写；通常也写 coordination。

**语境依据：** 必要基础释义

**使用结构：** coordination of activities

**语境原文：** 名称或用语片段

> Co-Ordination

**语境原文来源：** Week3.pdf · PDF页18 / 幻灯片18

**语境来源：** Week3.pdf · PDF页18 / 幻灯片18

**使用结构：** complex coordination; coordination between + groups

**全部来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符8330起；搜索“coordination can be very complex”；Week3.pdf · PDF页18 / 幻灯片18

### Prior to

**稳定ID：** csit985-w3-35b09754f3934c

**类别：** 阅读词汇

**中文解释：** 在……之前；标题表示在 Network Analysis 开始前。

**简单英文（整理解释）：** Before something.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Prior to

**原文来源：** Week3.pdf · PDF页5 / 幻灯片5

**语境：** Week3 · Prior to

**语境英文：** Before something.

**语境中文：** 在……之前；标题表示在 Network Analysis 开始前。

**语境依据：** 必要基础释义

**使用结构：** prior to + noun / -ing

**语境原文：** 名称或用语片段

> Prior to

**语境原文来源：** Week3.pdf · PDF页5 / 幻灯片5

**语境来源：** Week3.pdf · PDF页5 / 幻灯片5

**使用结构：** prior to + noun / -ing

**全部来源：** Week3.pdf · PDF页5 / 幻灯片5

### optimize / expand / integrate with

**稳定ID：** csit985-w3-86cf6312b33fd1

**类别：** 阅读词汇

**中文解释：** 优化／扩展／与……整合；第6页对现有网络的三种不同操作，不是三个同义词。

**简单英文（整理解释）：** Improve performance; make something larger; connect parts into a working whole.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> optimize

**原文来源：** Week3.pdf · PDF页6 / 幻灯片6

**语境：** Week3 · optimize / expand / integrate with

**语境英文：** Improve performance; make something larger; connect parts into a working whole.

**语境中文：** 优化／扩展／与……整合；第6页对现有网络的三种不同操作，不是三个同义词。

**语境依据：** 按资料用法整理

**使用结构：** optimize a network; expand a network; integrate it with other networks

**语境原文：** 名称或用语片段

> optimize

**语境原文来源：** Week3.pdf · PDF页6 / 幻灯片6

**语境来源：** Week3.pdf · PDF页6 / 幻灯片6

**使用结构：** optimize a network; expand a network; integrate it with other networks

**全部来源：** Week3.pdf · PDF页6 / 幻灯片6

### be committed to

**稳定ID：** csit985-w3-1a0549b05ba433

**类别：** 阅读词汇

**中文解释：** 致力于／认真投入；不仅口头表示支持，还愿意付出时间和努力。

**简单英文（整理解释）：** Be willing to give serious time and effort to something.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Be committed to

**原文来源：** Week3.pdf · PDF页31 / 幻灯片31

**语境：** Week3 · be committed to

**语境英文：** Be willing to give serious time and effort to something.

**语境中文：** 致力于／认真投入；不仅口头表示支持，还愿意付出时间和努力。

**语境依据：** 按资料用法整理

**使用结构：** be committed to + noun / -ing

**语境原文：** 名称或用语片段

> Be committed to

**语境原文来源：** Week3.pdf · PDF页31 / 幻灯片31

**语境来源：** Week3.pdf · PDF页9 / 幻灯片9；Week3.pdf · PDF页31 / 幻灯片31

**使用结构：** be committed to + noun / -ing

**全部来源：** Week3.pdf · PDF页9 / 幻灯片9；Week3.pdf · PDF页31 / 幻灯片31

### personnel effort

**稳定ID：** csit985-w3-4b17382bc968dc

**类别：** 阅读词汇

**中文解释：** 人员付出的工作和精力；personnel 指员工或人员，不是 personal（个人的）。

**简单英文（整理解释）：** The work and effort contributed by staff.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> personnel effort

**原文来源：** Week3.pdf · PDF页9 / 幻灯片9

**语境：** Week3 · personnel effort

**语境英文：** The work and effort contributed by staff.

**语境中文：** 人员付出的工作和精力；personnel 指员工或人员，不是 personal（个人的）。

**语境依据：** 按资料用法整理

**使用结构：** personnel effort

**语境原文：** 名称或用语片段

> personnel effort

**语境原文来源：** Week3.pdf · PDF页9 / 幻灯片9

**语境来源：** Week3.pdf · PDF页9 / 幻灯片9

**使用结构：** personnel effort

**全部来源：** Week3.pdf · PDF页9 / 幻灯片9

### overriding crises / inhibit

**稳定ID：** csit985-w3-6bcb5bed97d67a

**类别：** 阅读词汇

**中文解释：** 压倒其他事项的危机／阻碍；问哪些重大危机会妨碍规划能力。

**简单英文（整理解释）：** Major urgent problems that can prevent or limit planning.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> overriding crises

**原文来源：** Week3.pdf · PDF页10 / 幻灯片10

**语境：** Week3 · overriding crises / inhibit

**语境英文：** Major urgent problems that can prevent or limit planning.

**语境中文：** 压倒其他事项的危机／阻碍；问哪些重大危机会妨碍规划能力。

**语境依据：** 按资料用法整理

**使用结构：** inhibit our ability to + verb

**语境原文：** 名称或用语片段

> overriding crises

**语境原文来源：** Week3.pdf · PDF页10 / 幻灯片10

**语境来源：** Week3.pdf · PDF页10 / 幻灯片10

**使用结构：** inhibit our ability to + verb

**全部来源：** Week3.pdf · PDF页10 / 幻灯片10

### serve a purpose

**稳定ID：** csit985-w3-133e4bf810adaf

**类别：** 阅读词汇

**中文解释：** 起某种作用／达到某种目的；课件倒装为 What purpose will ... serve?。

**简单英文（整理解释）：** Be useful for a particular reason.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法原句

> What purpose will the strategic plan serve?

**原文来源：** Week3.pdf · PDF页9 / 幻灯片9

**语境：** Week3 · serve a purpose

**语境英文：** Be useful for a particular reason.

**语境中文：** 起某种作用／达到某种目的；课件倒装为 What purpose will ... serve?。

**语境依据：** 按资料用法整理

**使用结构：** serve a purpose; What purpose will ... serve?

**语境原文：** 用法原句

> What purpose will the strategic plan serve?

**语境原文来源：** Week3.pdf · PDF页9 / 幻灯片9

**语境来源：** Week3.pdf · PDF页9 / 幻灯片9

**使用结构：** serve a purpose; What purpose will ... serve?

**全部来源：** Week3.pdf · PDF页9 / 幻灯片9

### Driving Force

**稳定ID：** csit985-w3-951d0cfc04ddb4

**类别：** 阅读词汇

**中文解释：** 推动力量；在规划图中与 Vision、Mission 并列，指推动组织前进的因素。

**简单英文（整理解释）：** Something that strongly motivates the organization or its direction.

**说明依据：** 按资料语境整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Driving Force

**原文来源：** Week3.pdf · PDF页12 / 幻灯片12

**语境：** Week3 · Driving Force

**语境英文：** Something that strongly motivates the organization or its direction.

**语境中文：** 推动力量；在规划图中与 Vision、Mission 并列，指推动组织前进的因素。

**语境依据：** 按资料语境整理

**使用结构：** a driving force

**语境原文：** 名称或用语片段

> Driving Force

**语境原文来源：** Week3.pdf · PDF页12 / 幻灯片12

**语境来源：** Week3.pdf · PDF页12 / 幻灯片12

**使用结构：** a driving force

**全部来源：** Week3.pdf · PDF页12 / 幻灯片12

### Vision / Mission

**稳定ID：** csit985-w3-bb4150fe39ace5

**类别：** 阅读词汇

**中文解释：** 愿景／使命；图中分别用于组织希望的未来和存在目的，不能都译成“目标”。资料没有分别给正式定义。

**简单英文（整理解释）：** The desired future; the purpose of the organization. The slides name both but do not formally define them.

**说明依据：** 必要语境释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Vision

**原文来源：** Week3.pdf · PDF页12 / 幻灯片12

**资料原文：** 名称或用语片段

> Vision

**原文来源：** Week3.pdf · PDF页38 / 幻灯片38

**语境：** Week3 · Vision / Mission

**语境英文：** The desired future; the purpose of the organization. The slides name both but do not formally define them.

**语境中文：** 愿景／使命；图中分别用于组织希望的未来和存在目的，不能都译成“目标”。资料没有分别给正式定义。

**语境依据：** 必要语境释义

**使用结构：** the organization's vision / mission

**语境原文：** 名称或用语片段

> Vision

**语境原文来源：** Week3.pdf · PDF页12 / 幻灯片12

**语境原文：** 名称或用语片段

> Vision

**语境原文来源：** Week3.pdf · PDF页38 / 幻灯片38

**语境来源：** Week3.pdf · PDF页12 / 幻灯片12；Week3.pdf · PDF页38 / 幻灯片38

**使用结构：** the organization's vision / mission

**全部来源：** Week3.pdf · PDF页12 / 幻灯片12；Week3.pdf · PDF页38 / 幻灯片38

### Value / Climate / Culture

**稳定ID：** csit985-w3-df9b239e4b830f

**类别：** 阅读词汇

**中文解释：** 价值观／组织氛围／文化；第13页解释组织如何做事。Climate 此处不是天气。

**简单英文（整理解释）：** What matters to the organization, the atmosphere of work, and shared ways of working.

**说明依据：** 按当前义项整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Value

**原文来源：** Week3.pdf · PDF页13 / 幻灯片13

**资料原文：** 教师用语（TXT原片段）

> value, the climate

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符4657起；搜索“value, the climate”

**语境：** Week3 · Value / Climate / Culture

**语境英文：** What matters to the organization, the atmosphere of work, and shared ways of working.

**语境中文：** 价值观／组织氛围／文化；第13页解释组织如何做事。Climate 此处不是天气。

**语境依据：** 按当前义项整理

**语境原文：** 名称或用语片段

> Value

**语境原文来源：** Week3.pdf · PDF页13 / 幻灯片13

**语境原文：** 教师用语（TXT原片段）

> value, the climate

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符4657起；搜索“value, the climate”

**语境来源：** Week3.pdf · PDF页13 / 幻灯片13；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符4657起；搜索“value, the climate”

**全部来源：** Week3.pdf · PDF页13 / 幻灯片13；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符4657起；搜索“value, the climate”

### Strengths / Weaknesses / Opportunities / Threats

**稳定ID：** csit985-w3-393351420ca2d1

**类别：** 阅读词汇

**中文解释：** 优势／弱点／机会／威胁；图中用于了解现状。TXT 写 SWAT，疑似转写，课件没有写出该缩写。

**简单英文（整理解释）：** Good points, weak points, possible benefits, and possible dangers in the current situation.

**说明依据：** 按图表义项整理；缩写不静默修正

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Strengths

**原文来源：** Week3.pdf · PDF页14 / 幻灯片14

**资料原文：** 教师用语（TXT原片段）

> SWAT, uh, model

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符5164起；搜索“SWAT, uh, model”

**语境：** Week3 · Strengths / Weaknesses / Opportunities / Threats

**语境英文：** Good points, weak points, possible benefits, and possible dangers in the current situation.

**语境中文：** 优势／弱点／机会／威胁；图中用于了解现状。TXT 写 SWAT，疑似转写，课件没有写出该缩写。

**语境依据：** 按图表义项整理；缩写不静默修正

**语境原文：** 名称或用语片段

> Strengths

**语境原文来源：** Week3.pdf · PDF页14 / 幻灯片14

**语境原文：** 教师用语（TXT原片段）

> SWAT, uh, model

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符5164起；搜索“SWAT, uh, model”

**语境来源：** Week3.pdf · PDF页14 / 幻灯片14；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符5164起；搜索“SWAT, uh, model”

**全部来源：** Week3.pdf · PDF页14 / 幻灯片14；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符5164起；搜索“SWAT, uh, model”

### Milestones

**稳定ID：** csit985-w3-86ae73d11d6722

**类别：** 阅读词汇

**中文解释：** 里程碑；用来检查计划推进到重要阶段的标志，不是每一个小任务。

**简单英文（整理解释）：** Important points used to check progress in a plan.

**说明依据：** 按资料语境整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Milestones

**原文来源：** Week3.pdf · PDF页18 / 幻灯片18

**资料原文：** 教师用语（TXT原片段）

> a milestone to check

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符6819起；搜索“a milestone to check”

**语境：** Week3 · Milestones

**语境英文：** Important points used to check progress in a plan.

**语境中文：** 里程碑；用来检查计划推进到重要阶段的标志，不是每一个小任务。

**语境依据：** 按资料语境整理

**使用结构：** reach a milestone

**语境原文：** 名称或用语片段

> Milestones

**语境原文来源：** Week3.pdf · PDF页18 / 幻灯片18

**语境原文：** 教师用语（TXT原片段）

> a milestone to check

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符6819起；搜索“a milestone to check”

**语境来源：** Week3.pdf · PDF页18 / 幻灯片18；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符6819起；搜索“a milestone to check”

**使用结构：** reach a milestone

**全部来源：** Week3.pdf · PDF页18 / 幻灯片18；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符6819起；搜索“a milestone to check”

### ends and means

**稳定ID：** csit985-w3-80c7a6997846f0

**类别：** 阅读词汇

**中文解释：** 目标与手段；ends 指想实现的结果，means 指用来实现结果的方式或资源。

**简单英文（整理解释）：** The results wanted and the methods or resources used to reach them.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> ends and means

**原文来源：** Week3.pdf · PDF页19 / 幻灯片19

**语境：** Week3 · ends and means

**语境英文：** The results wanted and the methods or resources used to reach them.

**语境中文：** 目标与手段；ends 指想实现的结果，means 指用来实现结果的方式或资源。

**语境依据：** 按资料用法整理

**使用结构：** the relationship between ends and means

**语境原文：** 名称或用语片段

> ends and means

**语境原文来源：** Week3.pdf · PDF页19 / 幻灯片19

**语境来源：** Week3.pdf · PDF页19 / 幻灯片19

**使用结构：** the relationship between ends and means

**全部来源：** Week3.pdf · PDF页19 / 幻灯片19

### formulate / carry out a course of action

**稳定ID：** csit985-w3-8dd85d5ed639fa

**类别：** 阅读词汇

**中文解释：** 制定／执行行动方案；保留 formulate 在先、carry out 在后的关系。

**简单英文（整理解释）：** Plan an approach, then put it into action.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法原句

> Strategy and tactics are both concerned with formulating and then carrying out courses of action intended to attain particular objectives

**原文来源：** Week3.pdf · PDF页19 / 幻灯片19

**语境：** Week3 · formulate / carry out a course of action

**语境英文：** Plan an approach, then put it into action.

**语境中文：** 制定／执行行动方案；保留 formulate 在先、carry out 在后的关系。

**语境依据：** 按资料用法整理

**使用结构：** formulate a course of action; carry out a course of action

**语境原文：** 用法原句

> Strategy and tactics are both concerned with formulating and then carrying out courses of action intended to attain particular objectives

**语境原文来源：** Week3.pdf · PDF页19 / 幻灯片19

**语境来源：** Week3.pdf · PDF页19 / 幻灯片19

**使用结构：** formulate a course of action; carry out a course of action

**全部来源：** Week3.pdf · PDF页19 / 幻灯片19

### attain an objective

**稳定ID：** csit985-w3-5152269ba806f7

**类别：** 阅读词汇

**中文解释：** 实现目标；attain 比 get 更正式。

**简单英文（整理解释）：** Reach a particular goal.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法原句

> Strategy and tactics are both concerned with formulating and then carrying out courses of action intended to attain particular objectives

**原文来源：** Week3.pdf · PDF页19 / 幻灯片19

**语境：** Week3 · attain an objective

**语境英文：** Reach a particular goal.

**语境中文：** 实现目标；attain 比 get 更正式。

**语境依据：** 按资料用法整理

**使用结构：** attain + objective / goal

**语境原文：** 用法原句

> Strategy and tactics are both concerned with formulating and then carrying out courses of action intended to attain particular objectives

**语境原文来源：** Week3.pdf · PDF页19 / 幻灯片19

**语境来源：** Week3.pdf · PDF页19 / 幻灯片19

**使用结构：** attain + objective / goal

**全部来源：** Week3.pdf · PDF页19 / 幻灯片19

### deploy / employ resources

**稳定ID：** csit985-w3-8810da567cc470

**类别：** 阅读词汇

**中文解释：** 部署／运用资源；第19–20页用这组差别解释 strategy 与 tactics。Employ 此处不是雇佣。

**简单英文（整理解释）：** Place or assign resources; use those resources.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> deploy

**原文来源：** Week3.pdf · PDF页19 / 幻灯片19

**资料原文：** 名称或用语片段

> Deploy

**原文来源：** Week3.pdf · PDF页20 / 幻灯片20

**语境：** Week3 · deploy / employ resources

**语境英文：** Place or assign resources; use those resources.

**语境中文：** 部署／运用资源；第19–20页用这组差别解释 strategy 与 tactics。Employ 此处不是雇佣。

**语境依据：** 按资料用法整理

**使用结构：** deploy resources; employ resources

**语境原文：** 名称或用语片段

> deploy

**语境原文来源：** Week3.pdf · PDF页19 / 幻灯片19

**语境原文：** 名称或用语片段

> Deploy

**语境原文来源：** Week3.pdf · PDF页20 / 幻灯片20

**语境来源：** Week3.pdf · PDF页19 / 幻灯片19；Week3.pdf · PDF页20 / 幻灯片20

**使用结构：** deploy resources; employ resources

**全部来源：** Week3.pdf · PDF页19 / 幻灯片19；Week3.pdf · PDF页20 / 幻灯片20

### at your disposal

**稳定ID：** csit985-w3-363d29460791b4

**类别：** 阅读词汇

**中文解释：** 可供你使用；这里指手中可调配的资源，不是“丢弃”。

**简单英文（整理解释）：** Available for you to use.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> at your disposal

**原文来源：** Week3.pdf · PDF页19 / 幻灯片19

**语境：** Week3 · at your disposal

**语境英文：** Available for you to use.

**语境中文：** 可供你使用；这里指手中可调配的资源，不是“丢弃”。

**语境依据：** 按资料用法整理

**使用结构：** resources at your disposal

**语境原文：** 名称或用语片段

> at your disposal

**语境原文来源：** Week3.pdf · PDF页19 / 幻灯片19

**语境来源：** Week3.pdf · PDF页19 / 幻灯片19

**使用结构：** resources at your disposal

**全部来源：** Week3.pdf · PDF页19 / 幻灯片19

### bridge the gap between

**稳定ID：** csit985-w3-8e3aff5f51da1a

**类别：** 阅读词汇

**中文解释：** 弥合……之间的差距／把两端联系起来；课件指目标与手段。

**简单英文（整理解释）：** Connect two things that are separated.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> bridge the gap between

**原文来源：** Week3.pdf · PDF页19 / 幻灯片19

**语境：** Week3 · bridge the gap between

**语境英文：** Connect two things that are separated.

**语境中文：** 弥合……之间的差距／把两端联系起来；课件指目标与手段。

**语境依据：** 按资料用法整理

**使用结构：** bridge the gap between A and B

**语境原文：** 名称或用语片段

> bridge the gap between

**语境原文来源：** Week3.pdf · PDF页19 / 幻灯片19

**语境来源：** Week3.pdf · PDF页19 / 幻灯片19

**使用结构：** bridge the gap between A and B

**全部来源：** Week3.pdf · PDF页19 / 幻灯片19

### narrowly focused / ongoing guidance

**稳定ID：** csit985-w3-184a87f38a2d73

**类别：** 阅读词汇

**中文解释：** 聚焦于小范围／持续的一般指导；表中前者对应 tactics，后者对应 strategy。

**简单英文（整理解释）：** Directed at a small, specific area; guidance that continues over time.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Narrowly Focused

**原文来源：** Week3.pdf · PDF页20 / 幻灯片20

**语境：** Week3 · narrowly focused / ongoing guidance

**语境英文：** Directed at a small, specific area; guidance that continues over time.

**语境中文：** 聚焦于小范围／持续的一般指导；表中前者对应 tactics，后者对应 strategy。

**语境依据：** 按资料用法整理

**使用结构：** narrowly focused action; ongoing guidance

**语境原文：** 名称或用语片段

> Narrowly Focused

**语境原文来源：** Week3.pdf · PDF页20 / 幻灯片20

**语境来源：** Week3.pdf · PDF页20 / 幻灯片20

**使用结构：** narrowly focused action; ongoing guidance

**全部来源：** Week3.pdf · PDF页20 / 幻灯片20

### adaptable / fluid / hastily changed

**稳定ID：** csit985-w3-905bf8760a9111

**类别：** 阅读词汇

**中文解释：** 能调整的／灵活变动的／仓促改变；战略可适应，但不宜仓促改；战术可快速调整。

**简单英文（整理解释）：** Able to adapt; able to change quickly; changed too quickly without enough care.

**说明依据：** 按资料用法整理；保留否定

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Adaptable

**原文来源：** Week3.pdf · PDF页20 / 幻灯片20

**语境：** Week3 · adaptable / fluid / hastily changed

**语境英文：** Able to adapt; able to change quickly; changed too quickly without enough care.

**语境中文：** 能调整的／灵活变动的／仓促改变；战略可适应，但不宜仓促改；战术可快速调整。

**语境依据：** 按资料用法整理；保留否定

**使用结构：** adaptable, but not hastily changed

**语境原文：** 名称或用语片段

> Adaptable

**语境原文来源：** Week3.pdf · PDF页20 / 幻灯片20

**语境来源：** Week3.pdf · PDF页20 / 幻灯片20

**使用结构：** adaptable, but not hastily changed

**全部来源：** Week3.pdf · PDF页20 / 幻灯片20

### manageable

**稳定ID：** csit985-w3-b3afbee7dcf6f2

**类别：** 阅读词汇

**中文解释：** 容易管理的／能控制的；规划要简洁且能执行，不表示内容可以随意省略。

**简单英文（整理解释）：** Possible to organize and control without too much difficulty.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> manageable

**原文来源：** Week3.pdf · PDF页21 / 幻灯片21

**语境：** Week3 · manageable

**语境英文：** Possible to organize and control without too much difficulty.

**语境中文：** 容易管理的／能控制的；规划要简洁且能执行，不表示内容可以随意省略。

**语境依据：** 按资料用法整理

**使用结构：** keep something simple and manageable

**语境原文：** 名称或用语片段

> manageable

**语境原文来源：** Week3.pdf · PDF页21 / 幻灯片21

**语境来源：** Week3.pdf · PDF页21 / 幻灯片21

**使用结构：** keep something simple and manageable

**全部来源：** Week3.pdf · PDF页21 / 幻灯片21

### consultants / support staff

**稳定ID：** csit985-w3-afa2979f9722c5

**类别：** 阅读词汇

**中文解释：** 顾问／支持人员；第21页说不要把规划任务交出去，不是说完全不能获得顾问帮助。第32页允许在缺乏经验时借助外部专业支持。

**简单英文（整理解释）：** Advisers and staff who support the main work. The slides allow outside help while keeping leaders involved.

**说明依据：** 按资料语境整理；保留例外

**定义状态：** 当前资料未给出正式定义

**资料原文：** 否定与条件

> Don't give away the planning task to support staff or consultants

**原文来源：** Week3.pdf · PDF页21 / 幻灯片21

**资料原文：** 允许帮助的条件

> If this is a first-time experience for everyone involved, outside expertise may be useful to provide an initial orientation or a jump start

**原文来源：** Week3.pdf · PDF页32 / 幻灯片32

**语境：** Week3 · consultants / support staff

**语境英文：** Advisers and staff who support the main work. The slides allow outside help while keeping leaders involved.

**语境中文：** 顾问／支持人员；第21页说不要把规划任务交出去，不是说完全不能获得顾问帮助。第32页允许在缺乏经验时借助外部专业支持。

**语境依据：** 按资料语境整理；保留例外

**语境原文：** 否定与条件

> Don't give away the planning task to support staff or consultants

**语境原文来源：** Week3.pdf · PDF页21 / 幻灯片21

**语境原文：** 允许帮助的条件

> If this is a first-time experience for everyone involved, outside expertise may be useful to provide an initial orientation or a jump start

**语境原文来源：** Week3.pdf · PDF页32 / 幻灯片32

**语境来源：** Week3.pdf · PDF页21 / 幻灯片21；Week3.pdf · PDF页32 / 幻灯片32

**全部来源：** Week3.pdf · PDF页21 / 幻灯片21；Week3.pdf · PDF页32 / 幻灯片32

### emphasize creativity, innovation, and imagination

**稳定ID：** csit985-w3-05b69f114e26e6

**类别：** 阅读词汇

**中文解释：** 重视创造力、创新和想象力；相对的是盲目按固定步骤走。

**简单英文（整理解释）：** Give special importance to new ideas and ways of thinking.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Emphasize creativity, innovation, and imagination

**原文来源：** Week3.pdf · PDF页22 / 幻灯片22

**语境：** Week3 · emphasize creativity, innovation, and imagination

**语境英文：** Give special importance to new ideas and ways of thinking.

**语境中文：** 重视创造力、创新和想象力；相对的是盲目按固定步骤走。

**语境依据：** 按资料用法整理

**使用结构：** emphasize + noun

**语境原文：** 名称或用语片段

> Emphasize creativity, innovation, and imagination

**语境原文来源：** Week3.pdf · PDF页22 / 幻灯片22

**语境来源：** Week3.pdf · PDF页22 / 幻灯片22

**使用结构：** emphasize + noun

**全部来源：** Week3.pdf · PDF页22 / 幻灯片22

### adopt / implement a strategy

**稳定ID：** csit985-w3-43a2a31ea96210

**类别：** 阅读词汇

**中文解释：** 采用／实施策略；选择策略前，要仔细考虑将如何落实。

**简单英文（整理解释）：** Choose a strategy; put that strategy into practice.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> adopt

**原文来源：** Week3.pdf · PDF页22 / 幻灯片22

**语境：** Week3 · adopt / implement a strategy

**语境英文：** Choose a strategy; put that strategy into practice.

**语境中文：** 采用／实施策略；选择策略前，要仔细考虑将如何落实。

**语境依据：** 按资料用法整理

**使用结构：** adopt a strategy; consider how it will be implemented

**语境原文：** 名称或用语片段

> adopt

**语境原文来源：** Week3.pdf · PDF页22 / 幻灯片22

**语境来源：** Week3.pdf · PDF页22 / 幻灯片22

**使用结构：** adopt a strategy; consider how it will be implemented

**全部来源：** Week3.pdf · PDF页22 / 幻灯片22

### not an end in itself

**稳定ID：** csit985-w3-a166aedc80004b

**类别：** 阅读词汇

**中文解释：** 本身不是最终目的；战略规划是帮助组织完成使命的工具。

**简单英文（整理解释）：** Something is useful because it helps reach another goal; it is not the final goal.

**说明依据：** 按资料用法整理；保留否定

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> not an end in itself

**原文来源：** Week3.pdf · PDF页22 / 幻灯片22

**语境：** Week3 · not an end in itself

**语境英文：** Something is useful because it helps reach another goal; it is not the final goal.

**语境中文：** 本身不是最终目的；战略规划是帮助组织完成使命的工具。

**语境依据：** 按资料用法整理；保留否定

**使用结构：** X is not an end in itself

**语境原文：** 名称或用语片段

> not an end in itself

**语境原文来源：** Week3.pdf · PDF页22 / 幻灯片22

**语境来源：** Week3.pdf · PDF页22 / 幻灯片22

**使用结构：** X is not an end in itself

**全部来源：** Week3.pdf · PDF页22 / 幻灯片22

### accomplish its mission

**稳定ID：** csit985-w3-28dc4e5c4c0b85

**类别：** 阅读词汇

**中文解释：** 完成其使命；accomplish 表示成功完成。

**简单英文（整理解释）：** Successfully do what the organization exists to do.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> accomplish its mission

**原文来源：** Week3.pdf · PDF页22 / 幻灯片22

**语境：** Week3 · accomplish its mission

**语境英文：** Successfully do what the organization exists to do.

**语境中文：** 完成其使命；accomplish 表示成功完成。

**语境依据：** 按资料用法整理

**使用结构：** accomplish + mission / task

**语境原文：** 名称或用语片段

> accomplish its mission

**语境原文来源：** Week3.pdf · PDF页22 / 幻灯片22

**语境来源：** Week3.pdf · PDF页22 / 幻灯片22

**使用结构：** accomplish + mission / task

**全部来源：** Week3.pdf · PDF页22 / 幻灯片22

### pitfalls

**稳定ID：** csit985-w3-7c3775de26fadb

**类别：** 阅读词汇

**中文解释：** 容易掉进去的陷阱／常见失误；这里指规划中看似合理却会出问题的做法。

**简单英文（整理解释）：** Common problems or mistakes that can cause failure.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Pitfalls

**原文来源：** Week3.pdf · PDF页23 / 幻灯片23

**资料原文：** 名称或用语片段

> Pitfalls

**原文来源：** Week3.pdf · PDF页24 / 幻灯片24

**资料原文：** 名称或用语片段

> Pitfalls

**原文来源：** Week3.pdf · PDF页25 / 幻灯片25

**资料原文：** 名称或用语片段

> Pitfalls

**原文来源：** Week3.pdf · PDF页26 / 幻灯片26

**语境：** Week3 · pitfalls

**语境英文：** Common problems or mistakes that can cause failure.

**语境中文：** 容易掉进去的陷阱／常见失误；这里指规划中看似合理却会出问题的做法。

**语境依据：** 按资料用法整理

**使用结构：** pitfalls of strategic planning

**语境原文：** 名称或用语片段

> Pitfalls

**语境原文来源：** Week3.pdf · PDF页23 / 幻灯片23

**语境原文：** 名称或用语片段

> Pitfalls

**语境原文来源：** Week3.pdf · PDF页24 / 幻灯片24

**语境原文：** 名称或用语片段

> Pitfalls

**语境原文来源：** Week3.pdf · PDF页25 / 幻灯片25

**语境原文：** 名称或用语片段

> Pitfalls

**语境原文来源：** Week3.pdf · PDF页26 / 幻灯片26

**语境来源：** Week3.pdf · PDF页23 / 幻灯片23；Week3.pdf · PDF页24 / 幻灯片24；Week3.pdf · PDF页25 / 幻灯片25；Week3.pdf · PDF页26 / 幻灯片26

**使用结构：** pitfalls of strategic planning

**全部来源：** Week3.pdf · PDF页23 / 幻灯片23；Week3.pdf · PDF页24 / 幻灯片24；Week3.pdf · PDF页25 / 幻灯片25；Week3.pdf · PDF页26 / 幻灯片26

### primarily on the basis of

**稳定ID：** csit985-w3-dee952f3752756

**类别：** 阅读词汇

**中文解释：** 主要依据……；陷阱是过度依靠统计和财务预测，不是完全禁止使用数据。

**简单英文（整理解释）：** Mainly using something as the reason for a decision.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> primarily on the basis of

**原文来源：** Week3.pdf · PDF页23 / 幻灯片23

**语境：** Week3 · primarily on the basis of

**语境英文：** Mainly using something as the reason for a decision.

**语境中文：** 主要依据……；陷阱是过度依靠统计和财务预测，不是完全禁止使用数据。

**语境依据：** 按资料用法整理

**使用结构：** primarily on the basis of + noun

**语境原文：** 名称或用语片段

> primarily on the basis of

**语境原文来源：** Week3.pdf · PDF页23 / 幻灯片23

**语境来源：** Week3.pdf · PDF页23 / 幻灯片23

**使用结构：** primarily on the basis of + noun

**全部来源：** Week3.pdf · PDF页23 / 幻灯片23

### projections / forecasts

**稳定ID：** csit985-w3-a702ba0d7f583d

**类别：** 阅读词汇

**中文解释：** 预测／推算；本句是统计和财务数据对未来的估计，不是投影图像。

**简单英文（整理解释）：** Estimates of what may happen in the future.

**说明依据：** 按当前义项整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> projections

**原文来源：** Week3.pdf · PDF页23 / 幻灯片23

**语境：** Week3 · projections / forecasts

**语境英文：** Estimates of what may happen in the future.

**语境中文：** 预测／推算；本句是统计和财务数据对未来的估计，不是投影图像。

**语境依据：** 按当前义项整理

**使用结构：** statistical and financial projections or forecasts

**语境原文：** 名称或用语片段

> projections

**语境原文来源：** Week3.pdf · PDF页23 / 幻灯片23

**语境来源：** Week3.pdf · PDF页23 / 幻灯片23

**使用结构：** statistical and financial projections or forecasts

**全部来源：** Week3.pdf · PDF页23 / 幻灯片23

### branch / corporate office

**稳定ID：** csit985-w3-7009a671b32de6

**类别：** 阅读词汇

**中文解释：** 分支机构／公司总部；规划资料被发往各分支，再回到总部。

**简单英文（整理解释）：** A local part of a company; the main company office.

**说明依据：** 按资料语境整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> branch

**原文来源：** Week3.pdf · PDF页23 / 幻灯片23

**语境：** Week3 · branch / corporate office

**语境英文：** A local part of a company; the main company office.

**语境中文：** 分支机构／公司总部；规划资料被发往各分支，再回到总部。

**语境依据：** 按资料语境整理

**语境原文：** 名称或用语片段

> branch

**语境原文来源：** Week3.pdf · PDF页23 / 幻灯片23

**语境来源：** Week3.pdf · PDF页23 / 幻灯片23

**全部来源：** Week3.pdf · PDF页23 / 幻灯片23

### business days

**稳定ID：** csit985-w3-95f654e75d3995

**类别：** 阅读词汇

**中文解释：** 工作日；原例要求 10 个工作日内返还表格，不是 10 个自然日。

**简单英文（整理解释）：** Working days, rather than every calendar day.

**说明依据：** 按资料用法整理；保留数量

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> business days

**原文来源：** Week3.pdf · PDF页23 / 幻灯片23

**语境：** Week3 · business days

**语境英文：** Working days, rather than every calendar day.

**语境中文：** 工作日；原例要求 10 个工作日内返还表格，不是 10 个自然日。

**语境依据：** 按资料用法整理；保留数量

**使用结构：** within 10 business days

**语境原文：** 名称或用语片段

> business days

**语境原文来源：** Week3.pdf · PDF页23 / 幻灯片23

**语境来源：** Week3.pdf · PDF页23 / 幻灯片23

**使用结构：** within 10 business days

**全部来源：** Week3.pdf · PDF页23 / 幻灯片23

### roll out

**稳定ID：** csit985-w3-c934f14b71d1c6

**类别：** 阅读词汇

**中文解释：** 推出／开始在组织内实施；原句为推出新的全公司长期规划流程。

**简单英文（整理解释）：** Introduce a new process or system for use.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法原句

> Rolling out a new company-wide, long-term planning process and leaving incentive packages tied to short-term results unchanged

**原文来源：** Week3.pdf · PDF页24 / 幻灯片24

**语境：** Week3 · roll out

**语境英文：** Introduce a new process or system for use.

**语境中文：** 推出／开始在组织内实施；原句为推出新的全公司长期规划流程。

**语境依据：** 按资料用法整理

**使用结构：** roll out a new process

**语境原文：** 用法原句

> Rolling out a new company-wide, long-term planning process and leaving incentive packages tied to short-term results unchanged

**语境原文来源：** Week3.pdf · PDF页24 / 幻灯片24

**语境来源：** Week3.pdf · PDF页24 / 幻灯片24

**使用结构：** roll out a new process

**全部来源：** Week3.pdf · PDF页24 / 幻灯片24

### incentive packages tied to short-term results

**稳定ID：** csit985-w3-2e7651d8f6daa7

**类别：** 阅读词汇

**中文解释：** 与短期结果挂钩的激励方案；课件指出长期规划上线，却保留短期奖励，可能相互冲突。

**简单英文（整理解释）：** Rewards that depend on short-term results, even while the company asks for long-term planning.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> incentive packages tied to short-term results

**原文来源：** Week3.pdf · PDF页24 / 幻灯片24

**语境：** Week3 · incentive packages tied to short-term results

**语境英文：** Rewards that depend on short-term results, even while the company asks for long-term planning.

**语境中文：** 与短期结果挂钩的激励方案；课件指出长期规划上线，却保留短期奖励，可能相互冲突。

**语境依据：** 按资料用法整理

**使用结构：** be tied to + noun

**语境原文：** 名称或用语片段

> incentive packages tied to short-term results

**语境原文来源：** Week3.pdf · PDF页24 / 幻灯片24

**语境来源：** Week3.pdf · PDF页24 / 幻灯片24

**使用结构：** be tied to + noun

**全部来源：** Week3.pdf · PDF页24 / 幻灯片24

### regulators / payers / sales force

**稳定ID：** csit985-w3-7c59a53eb82136

**类别：** 阅读词汇

**中文解释：** 监管者／付款方／销售队伍；列在“不要把差战略表现归咎于外部或其他群体”的例子中。

**简单英文（整理解释）：** Groups that regulate, pay, or sell. The slide warns against blaming these groups for poor strategy results.

**说明依据：** 必要语境释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> regulators

**原文来源：** Week3.pdf · PDF页24 / 幻灯片24

**语境：** Week3 · regulators / payers / sales force

**语境英文：** Groups that regulate, pay, or sell. The slide warns against blaming these groups for poor strategy results.

**语境中文：** 监管者／付款方／销售队伍；列在“不要把差战略表现归咎于外部或其他群体”的例子中。

**语境依据：** 必要语境释义

**语境原文：** 名称或用语片段

> regulators

**语境原文来源：** Week3.pdf · PDF页24 / 幻灯片24

**语境来源：** Week3.pdf · PDF页24 / 幻灯片24

**全部来源：** Week3.pdf · PDF页24 / 幻灯片24

### line managers / downsizing

**稳定ID：** csit985-w3-352cd121408ebb

**类别：** 阅读词汇

**中文解释：** 一线业务管理者／缩减组织或裁员；先训练管理者建设未来，再削减人员资源，是课件列出的陷阱。

**简单英文（整理解释）：** Managers responsible for everyday work; reducing the size or staff of an organization.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> line managers

**原文来源：** Week3.pdf · PDF页25 / 幻灯片25

**资料原文：** 教师用语（TXT原片段）

> when you do downsizing

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符10907起；搜索“when you do downsizing”

**语境：** Week3 · line managers / downsizing

**语境英文：** Managers responsible for everyday work; reducing the size or staff of an organization.

**语境中文：** 一线业务管理者／缩减组织或裁员；先训练管理者建设未来，再削减人员资源，是课件列出的陷阱。

**语境依据：** 按资料用法整理

**语境原文：** 名称或用语片段

> line managers

**语境原文来源：** Week3.pdf · PDF页25 / 幻灯片25

**语境原文：** 教师用语（TXT原片段）

> when you do downsizing

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符10907起；搜索“when you do downsizing”

**语境来源：** Week3.pdf · PDF页25 / 幻灯片25；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符10907起；搜索“when you do downsizing”

**全部来源：** Week3.pdf · PDF页25 / 幻灯片25；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符10907起；搜索“when you do downsizing”

### rival / acquisition

**稳定ID：** csit985-w3-28564a086c2262

**类别：** 阅读词汇

**中文解释：** 竞争对手／收购；从已收购的前竞争对手照搬策略。Acquisition 此处是企业收购。

**简单英文（整理解释）：** A competitor; buying another business.

**说明依据：** 按当前义项整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> rival

**原文来源：** Week3.pdf · PDF页25 / 幻灯片25

**语境：** Week3 · rival / acquisition

**语境英文：** A competitor; buying another business.

**语境中文：** 竞争对手／收购；从已收购的前竞争对手照搬策略。Acquisition 此处是企业收购。

**语境依据：** 按当前义项整理

**使用结构：** a former rival after an acquisition

**语境原文：** 名称或用语片段

> rival

**语境原文来源：** Week3.pdf · PDF页25 / 幻灯片25

**语境来源：** Week3.pdf · PDF页25 / 幻灯片25

**使用结构：** a former rival after an acquisition

**全部来源：** Week3.pdf · PDF页25 / 幻灯片25

### inspire / engage frontline staff

**稳定ID：** csit985-w3-79abc0ab680e3b

**类别：** 阅读词汇

**中文解释：** 激励／让一线员工投入；愿景若不能让实际执行工作的人员参与，就难发挥作用。

**简单英文（整理解释）：** Encourage staff and make them interested in taking part.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> inspire

**原文来源：** Week3.pdf · PDF页26 / 幻灯片26

**语境：** Week3 · inspire / engage frontline staff

**语境英文：** Encourage staff and make them interested in taking part.

**语境中文：** 激励／让一线员工投入；愿景若不能让实际执行工作的人员参与，就难发挥作用。

**语境依据：** 按资料用法整理

**使用结构：** inspire or engage the frontline staff

**语境原文：** 名称或用语片段

> inspire

**语境原文来源：** Week3.pdf · PDF页26 / 幻灯片26

**语境来源：** Week3.pdf · PDF页26 / 幻灯片26

**使用结构：** inspire or engage the frontline staff

**全部来源：** Week3.pdf · PDF页26 / 幻灯片26

### let go of the past

**稳定ID：** csit985-w3-796521f711f4f7

**类别：** 阅读词汇

**中文解释：** 放下对过去的执着；课件批评因为喜欢今天，就要求明天保持原样。不是叫人忘记经验。

**简单英文（整理解释）：** Stop holding too tightly to old ways so future changes are possible.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> let go of the past

**原文来源：** Week3.pdf · PDF页26 / 幻灯片26

**语境：** Week3 · let go of the past

**语境英文：** Stop holding too tightly to old ways so future changes are possible.

**语境中文：** 放下对过去的执着；课件批评因为喜欢今天，就要求明天保持原样。不是叫人忘记经验。

**语境依据：** 按资料用法整理

**使用结构：** refuse to let go of the past

**语境原文：** 名称或用语片段

> let go of the past

**语境原文来源：** Week3.pdf · PDF页26 / 幻灯片26

**语境来源：** Week3.pdf · PDF页26 / 幻灯片26

**使用结构：** refuse to let go of the past

**全部来源：** Week3.pdf · PDF页26 / 幻灯片26

### self interest / social norms

**稳定ID：** csit985-w3-1879e172e50476

**类别：** 阅读词汇

**中文解释：** 自身利益／社会规范；第27页前两种变革策略分别采用的假设。

**简单英文（整理解释）：** What benefits a person; shared rules about acceptable behavior.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> self interest

**原文来源：** Week3.pdf · PDF页27 / 幻灯片27

**语境：** Week3 · self interest / social norms

**语境英文：** What benefits a person; shared rules about acceptable behavior.

**语境中文：** 自身利益／社会规范；第27页前两种变革策略分别采用的假设。

**语境依据：** 按资料用法整理

**使用结构：** follow self interest; follow social norms

**语境原文：** 名称或用语片段

> self interest

**语境原文来源：** Week3.pdf · PDF页27 / 幻灯片27

**语境来源：** Week3.pdf · PDF页27 / 幻灯片27

**使用结构：** follow self interest; follow social norms

**全部来源：** Week3.pdf · PDF页27 / 幻灯片27

### redefine / reinterpret

**稳定ID：** csit985-w3-6d0946b82ef489

**类别：** 阅读词汇

**中文解释：** 重新定义／重新理解；原表说重释已有规范，并对新规范建立认同。

**简单英文（整理解释）：** Give a new definition; understand something in a new way.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> reinterpret

**原文来源：** Week3.pdf · PDF页27 / 幻灯片27

**语境：** Week3 · redefine / reinterpret

**语境英文：** Give a new definition; understand something in a new way.

**语境中文：** 重新定义／重新理解；原表说重释已有规范，并对新规范建立认同。

**语境依据：** 按资料用法整理

**使用结构：** redefine and reinterpret existing norms

**语境原文：** 名称或用语片段

> reinterpret

**语境原文来源：** Week3.pdf · PDF页27 / 幻灯片27

**语境来源：** Week3.pdf · PDF页27 / 幻灯片27

**使用结构：** redefine and reinterpret existing norms

**全部来源：** Week3.pdf · PDF页27 / 幻灯片27

### compliant / coercive

**稳定ID：** csit985-w3-cc37b409c0448b

**类别：** 阅读词汇

**中文解释：** 服从的／带强制性的；用于 Power-Coercive 策略的描述，不是课程在要求读者服从。

**简单英文（整理解释）：** Willing to obey; using pressure or authority to make people act.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> compliant

**原文来源：** Week3.pdf · PDF页27 / 幻灯片27

**语境：** Week3 · compliant / coercive

**语境英文：** Willing to obey; using pressure or authority to make people act.

**语境中文：** 服从的／带强制性的；用于 Power-Coercive 策略的描述，不是课程在要求读者服从。

**语境依据：** 按资料用法整理

**语境原文：** 名称或用语片段

> compliant

**语境原文来源：** Week3.pdf · PDF页27 / 幻灯片27

**语境来源：** Week3.pdf · PDF页27 / 幻灯片27

**全部来源：** Week3.pdf · PDF页27 / 幻灯片27

### the exercise of authority / the imposition of sanctions

**稳定ID：** csit985-w3-383ebb81cbd519

**类别：** 阅读词汇

**中文解释：** 行使权威／施加制裁；exercise 此处是“运用”，不是运动。sanctions 此处是惩罚或限制，不是批准。

**简单英文（整理解释）：** Using authority; applying penalties or restrictions.

**说明依据：** 按当前义项整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> the exercise of authority

**原文来源：** Week3.pdf · PDF页27 / 幻灯片27

**语境：** Week3 · the exercise of authority / the imposition of sanctions

**语境英文：** Using authority; applying penalties or restrictions.

**语境中文：** 行使权威／施加制裁；exercise 此处是“运用”，不是运动。sanctions 此处是惩罚或限制，不是批准。

**语境依据：** 按当前义项整理

**使用结构：** exercise authority; impose sanctions

**语境原文：** 名称或用语片段

> the exercise of authority

**语境原文来源：** Week3.pdf · PDF页27 / 幻灯片27

**语境来源：** Week3.pdf · PDF页27 / 幻灯片27

**使用结构：** exercise authority; impose sanctions

**全部来源：** Week3.pdf · PDF页27 / 幻灯片27

### oppose loss/disruption / adapt readily

**稳定ID：** csit985-w3-7fd518dc97c437

**类别：** 阅读词汇

**中文解释：** 反对损失或扰动／容易适应；Environmental-Adaptive 的两部分假设，必须一起保留。

**简单英文（整理解释）：** Resist loss or major change, but adjust easily to a new situation.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> oppose loss/disruption

**原文来源：** Week3.pdf · PDF页27 / 幻灯片27

**语境：** Week3 · oppose loss/disruption / adapt readily

**语境英文：** Resist loss or major change, but adjust easily to a new situation.

**语境中文：** 反对损失或扰动／容易适应；Environmental-Adaptive 的两部分假设，必须一起保留。

**语境依据：** 按资料用法整理

**使用结构：** oppose + noun; adapt readily

**语境原文：** 名称或用语片段

> oppose loss/disruption

**语境原文来源：** Week3.pdf · PDF页27 / 幻灯片27

**语境来源：** Week3.pdf · PDF页27 / 幻灯片27

**使用结构：** oppose + noun; adapt readily

**全部来源：** Week3.pdf · PDF页27 / 幻灯片27

### degree of resistance

**稳定ID：** csit985-w3-353da7ded34c81

**类别：** 阅读词汇

**中文解释：** 阻力程度；根据抵制改变的强弱，课件建议不同策略组合。

**简单英文（整理解释）：** How strongly people resist a change.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Degree of Resistance

**原文来源：** Week3.pdf · PDF页28 / 幻灯片28

**语境：** Week3 · degree of resistance

**语境英文：** How strongly people resist a change.

**语境中文：** 阻力程度；根据抵制改变的强弱，课件建议不同策略组合。

**语境依据：** 按资料用法整理

**使用结构：** a strong / weak degree of resistance

**语境原文：** 名称或用语片段

> Degree of Resistance

**语境原文来源：** Week3.pdf · PDF页28 / 幻灯片28

**语境来源：** Week3.pdf · PDF页28 / 幻灯片28

**使用结构：** a strong / weak degree of resistance

**全部来源：** Week3.pdf · PDF页28 / 幻灯片28

### target population

**稳定ID：** csit985-w3-85b66ccf9699e2

**类别：** 阅读词汇

**中文解释：** 目标人群；这里是策略要影响的人群，不是网络数据包的目的地址。

**简单英文（整理解释）：** The group of people a strategy is intended to affect.

**说明依据：** 按当前义项整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Target Population

**原文来源：** Week3.pdf · PDF页28 / 幻灯片28

**语境：** Week3 · target population

**语境英文：** The group of people a strategy is intended to affect.

**语境中文：** 目标人群；这里是策略要影响的人群，不是网络数据包的目的地址。

**语境依据：** 按当前义项整理

**使用结构：** a large target population

**语境原文：** 名称或用语片段

> Target Population

**语境原文来源：** Week3.pdf · PDF页28 / 幻灯片28

**语境来源：** Week3.pdf · PDF页28 / 幻灯片28

**使用结构：** a large target population

**全部来源：** Week3.pdf · PDF页28 / 幻灯片28

### the stakes / high stakes

**稳定ID：** csit985-w3-d601c70e593eb9

**类别：** 阅读词汇

**中文解释：** 利害程度／高风险、高重要性；失败或成功的后果很重要。TXT 的 steak 疑似同音转写。

**简单英文（整理解释）：** How much can be gained or lost; important consequences.

**说明依据：** 按资料用法整理；转写有疑点

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> The Stakes

**原文来源：** Week3.pdf · PDF页29 / 幻灯片29

**资料原文：** 教师用语（TXT原片段）

> the steak

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符13323起；搜索“the steak”

**语境：** Week3 · the stakes / high stakes

**语境英文：** How much can be gained or lost; important consequences.

**语境中文：** 利害程度／高风险、高重要性；失败或成功的后果很重要。TXT 的 steak 疑似同音转写。

**语境依据：** 按资料用法整理；转写有疑点

**使用结构：** high stakes; the stakes are high

**语境原文：** 名称或用语片段

> The Stakes

**语境原文来源：** Week3.pdf · PDF页29 / 幻灯片29

**语境原文：** 教师用语（TXT原片段）

> the steak

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符13323起；搜索“the steak”

**语境来源：** Week3.pdf · PDF页29 / 幻灯片29；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符13323起；搜索“the steak”

**使用结构：** high stakes; the stakes are high

**全部来源：** Week3.pdf · PDF页29 / 幻灯片29；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符13323起；搜索“the steak”

### leave nothing to chance

**稳定ID：** csit985-w3-6abe4ff712ffd2

**类别：** 阅读词汇

**中文解释：** 不让任何重要结果仅靠运气；课件对高利害情境建议四种策略混用。

**简单英文（整理解释）：** Plan carefully so important outcomes do not depend only on luck.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 课件用法

> High stakes need all four strategies in a mix ‘nothing left to chance’

**原文来源：** Week3.pdf · PDF页29 / 幻灯片29

**资料原文：** 教师用语（TXT原片段）

> we don't leave important outcomes to chance

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符13480起；搜索“we don't leave important outcomes to chance”

**语境：** Week3 · leave nothing to chance

**语境英文：** Plan carefully so important outcomes do not depend only on luck.

**语境中文：** 不让任何重要结果仅靠运气；课件对高利害情境建议四种策略混用。

**语境依据：** 按资料用法整理

**使用结构：** leave something / nothing to chance

**语境原文：** 课件用法

> High stakes need all four strategies in a mix ‘nothing left to chance’

**语境原文来源：** Week3.pdf · PDF页29 / 幻灯片29

**语境原文：** 教师用语（TXT原片段）

> we don't leave important outcomes to chance

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符13480起；搜索“we don't leave important outcomes to chance”

**语境来源：** Week3.pdf · PDF页29 / 幻灯片29；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符13480起；搜索“we don't leave important outcomes to chance”

**使用结构：** leave something / nothing to chance

**全部来源：** Week3.pdf · PDF页29 / 幻灯片29；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符13480起；搜索“we don't leave important outcomes to chance”

### time frame

**稳定ID：** csit985-w3-f8b04a3ee03ade

**类别：** 阅读词汇

**中文解释：** 时间范围／可用期限；时间短和较长时，课件建议的策略不同。

**简单英文（整理解释）：** The period available for an activity or change.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Time Frame

**原文来源：** Week3.pdf · PDF页29 / 幻灯片29

**语境：** Week3 · time frame

**语境英文：** The period available for an activity or change.

**语境中文：** 时间范围／可用期限；时间短和较长时，课件建议的策略不同。

**语境依据：** 按资料用法整理

**使用结构：** a short / longer time frame

**语境原文：** 名称或用语片段

> Time Frame

**语境原文来源：** Week3.pdf · PDF页29 / 幻灯片29

**语境来源：** Week3.pdf · PDF页29 / 幻灯片29

**使用结构：** a short / longer time frame

**全部来源：** Week3.pdf · PDF页29 / 幻灯片29

### expertise / Change Agents

**稳定ID：** csit985-w3-8bb90b9869d4d1

**类别：** 阅读词汇

**中文解释：** 专业经验与知识／推动变革的人；按变革推动者的专长选择策略组合。

**简单英文（整理解释）：** Special knowledge and experience; people who help bring about change.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Expertise

**原文来源：** Week3.pdf · PDF页30 / 幻灯片30

**语境：** Week3 · expertise / Change Agents

**语境英文：** Special knowledge and experience; people who help bring about change.

**语境中文：** 专业经验与知识／推动变革的人；按变革推动者的专长选择策略组合。

**语境依据：** 按资料用法整理

**使用结构：** according to the expertise of the Change Agents

**语境原文：** 名称或用语片段

> Expertise

**语境原文来源：** Week3.pdf · PDF页30 / 幻灯片30

**语境来源：** Week3.pdf · PDF页30 / 幻灯片30

**使用结构：** according to the expertise of the Change Agents

**全部来源：** Week3.pdf · PDF页30 / 幻灯片30

### mutual dependency / negotiation

**稳定ID：** csit985-w3-e2de9743585b5d

**类别：** 阅读词汇

**中文解释：** 相互依赖／协商；双方互相依赖时需要协商。谁依赖谁，会影响其控制或抵抗能力。

**简单英文（整理解释）：** Both sides depend on each other; they need to discuss and agree on a way forward.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 依赖方向

> If organisation is dependent on its people, managements ability to lead is limited

**原文来源：** Week3.pdf · PDF页30 / 幻灯片30

**资料原文：** 依赖方向

> If people are dependent on the organisation, their ability to resist or oppose is limited

**原文来源：** Week3.pdf · PDF页30 / 幻灯片30

**资料原文：** 条件

> Mutual dependency requires negotiation

**原文来源：** Week3.pdf · PDF页30 / 幻灯片30

**语境：** Week3 · mutual dependency / negotiation

**语境英文：** Both sides depend on each other; they need to discuss and agree on a way forward.

**语境中文：** 相互依赖／协商；双方互相依赖时需要协商。谁依赖谁，会影响其控制或抵抗能力。

**语境依据：** 按资料用法整理

**使用结构：** mutual dependency requires negotiation

**语境原文：** 依赖方向

> If organisation is dependent on its people, managements ability to lead is limited

**语境原文来源：** Week3.pdf · PDF页30 / 幻灯片30

**语境原文：** 依赖方向

> If people are dependent on the organisation, their ability to resist or oppose is limited

**语境原文来源：** Week3.pdf · PDF页30 / 幻灯片30

**语境原文：** 条件

> Mutual dependency requires negotiation

**语境原文来源：** Week3.pdf · PDF页30 / 幻灯片30

**语境来源：** Week3.pdf · PDF页30 / 幻灯片30

**使用结构：** mutual dependency requires negotiation

**全部来源：** Week3.pdf · PDF页30 / 幻灯片30

### call for

**稳定ID：** csit985-w3-8566b16d6b9eb0

**类别：** 阅读词汇

**中文解释：** 需要／要求；planning design calls for a small team 不是“打电话给团队”。

**简单英文（整理解释）：** Require something.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法原句

> The planning design frequently calls for a small team to direct efforts and develop the written document

**原文来源：** Week3.pdf · PDF页31 / 幻灯片31

**语境：** Week3 · call for

**语境英文：** Require something.

**语境中文：** 需要／要求；planning design calls for a small team 不是“打电话给团队”。

**语境依据：** 按资料用法整理

**使用结构：** call for + noun

**语境原文：** 用法原句

> The planning design frequently calls for a small team to direct efforts and develop the written document

**语境原文来源：** Week3.pdf · PDF页31 / 幻灯片31

**语境来源：** Week3.pdf · PDF页31 / 幻灯片31

**使用结构：** call for + noun

**全部来源：** Week3.pdf · PDF页31 / 幻灯片31

### input / have a stake in

**稳定ID：** csit985-w3-6119ec2e7a323d

**类别：** 阅读词汇

**中文解释：** 各方提供的意见／与……有利害关系；意见应来自整个组织，让成员关心过程和结果。

**简单英文（整理解释）：** Ideas contributed to planning; having an interest in the outcome.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Input

**原文来源：** Week3.pdf · PDF页31 / 幻灯片31

**语境：** Week3 · input / have a stake in

**语境英文：** Ideas contributed to planning; having an interest in the outcome.

**语境中文：** 各方提供的意见／与……有利害关系；意见应来自整个组织，让成员关心过程和结果。

**语境依据：** 按资料用法整理

**使用结构：** input from the entire organization; have a stake in + noun

**语境原文：** 名称或用语片段

> Input

**语境原文来源：** Week3.pdf · PDF页31 / 幻灯片31

**语境来源：** Week3.pdf · PDF页31 / 幻灯片31

**使用结构：** input from the entire organization; have a stake in + noun

**全部来源：** Week3.pdf · PDF页31 / 幻灯片31

### peers

**稳定ID：** csit985-w3-0b846a2d35ba5e

**类别：** 阅读词汇

**中文解释：** 同级同事／同行；团队成员要得到同伴尊重。这里不是 peer-to-peer 网络节点。

**简单英文（整理解释）：** People at a similar level or in a similar role.

**说明依据：** 按当前义项整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> peers

**原文来源：** Week3.pdf · PDF页31 / 幻灯片31

**语境：** Week3 · peers

**语境英文：** People at a similar level or in a similar role.

**语境中文：** 同级同事／同行；团队成员要得到同伴尊重。这里不是 peer-to-peer 网络节点。

**语境依据：** 按当前义项整理

**使用结构：** be respected by their peers

**语境原文：** 名称或用语片段

> peers

**语境原文来源：** Week3.pdf · PDF页31 / 幻灯片31

**语境来源：** Week3.pdf · PDF页31 / 幻灯片31

**使用结构：** be respected by their peers

**全部来源：** Week3.pdf · PDF页31 / 幻灯片31

### initial orientation / a jump start

**稳定ID：** csit985-w3-22bf6d1d094076

**类别：** 阅读词汇

**中文解释：** 初步引导／帮助快速起步；全员没有规划经验时，外部专业帮助可能有用。

**简单英文（整理解释）：** An introduction to the process; help that gets the work started quickly.

**说明依据：** 按资料用法整理；保留条件

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> initial orientation

**原文来源：** Week3.pdf · PDF页32 / 幻灯片32

**语境：** Week3 · initial orientation / a jump start

**语境英文：** An introduction to the process; help that gets the work started quickly.

**语境中文：** 初步引导／帮助快速起步；全员没有规划经验时，外部专业帮助可能有用。

**语境依据：** 按资料用法整理；保留条件

**使用结构：** provide an initial orientation or a jump start

**语境原文：** 名称或用语片段

> initial orientation

**语境原文来源：** Week3.pdf · PDF页32 / 幻灯片32

**语境来源：** Week3.pdf · PDF页32 / 幻灯片32

**使用结构：** provide an initial orientation or a jump start

**全部来源：** Week3.pdf · PDF页32 / 幻灯片32

### authorize / chief executive / board chair

**稳定ID：** csit985-w3-59ccb73b356660

**类别：** 阅读词汇

**中文解释：** 正式批准／最高执行负责人／董事会主席；前者是批准权，后两者是参与规划的领导角色。

**简单英文（整理解释）：** Give official approval; the top executive; the chair of the board.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> authorize

**原文来源：** Week3.pdf · PDF页33 / 幻灯片33

**资料原文：** 名称或用语片段

> chief executive

**原文来源：** Week3.pdf · PDF页34 / 幻灯片34

**语境：** Week3 · authorize / chief executive / board chair

**语境英文：** Give official approval; the top executive; the chair of the board.

**语境中文：** 正式批准／最高执行负责人／董事会主席；前者是批准权，后两者是参与规划的领导角色。

**语境依据：** 按资料用法整理

**使用结构：** authorize the document

**语境原文：** 名称或用语片段

> authorize

**语境原文来源：** Week3.pdf · PDF页33 / 幻灯片33

**语境原文：** 名称或用语片段

> chief executive

**语境原文来源：** Week3.pdf · PDF页34 / 幻灯片34

**语境来源：** Week3.pdf · PDF页33 / 幻灯片33；Week3.pdf · PDF页34 / 幻灯片34

**使用结构：** authorize the document

**全部来源：** Week3.pdf · PDF页33 / 幻灯片33；Week3.pdf · PDF页34 / 幻灯片34

### board of directors / executive committee

**稳定ID：** csit985-w3-f01211bbac7278

**类别：** 阅读词汇

**中文解释：** 董事会／执行委员会；董事会应参与战略规划，规划委员会常与执行委员会相同，但课件保留 often，不是必然。

**简单英文（整理解释）：** A group responsible for directing the organization; a smaller executive group.

**说明依据：** 按资料用法整理；保留频率限制

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> board of directors

**原文来源：** Week3.pdf · PDF页35 / 幻灯片35

**语境：** Week3 · board of directors / executive committee

**语境英文：** A group responsible for directing the organization; a smaller executive group.

**语境中文：** 董事会／执行委员会；董事会应参与战略规划，规划委员会常与执行委员会相同，但课件保留 often，不是必然。

**语境依据：** 按资料用法整理；保留频率限制

**使用结构：** often the same as the executive committee

**语境原文：** 名称或用语片段

> board of directors

**语境原文来源：** Week3.pdf · PDF页35 / 幻灯片35

**语境来源：** Week3.pdf · PDF页35 / 幻灯片35

**使用结构：** often the same as the executive committee

**全部来源：** Week3.pdf · PDF页35 / 幻灯片35

### compose / administrate the process

**稳定ID：** csit985-w3-cccef4386f9e4a

**类别：** 阅读词汇

**中文解释：** 撰写／管理流程；前者编写计划，后者安排会议、记录信息和跟进准备工作。

**简单英文（整理解释）：** Write the plan; organize and manage the planning process.

**说明依据：** 按当前义项整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> administrate the process

**原文来源：** Week3.pdf · PDF页37 / 幻灯片37

**语境：** Week3 · compose / administrate the process

**语境英文：** Write the plan; organize and manage the planning process.

**语境中文：** 撰写／管理流程；前者编写计划，后者安排会议、记录信息和跟进准备工作。

**语境依据：** 按当前义项整理

**使用结构：** compose the plan; administrate the process

**语境原文：** 名称或用语片段

> administrate the process

**语境原文来源：** Week3.pdf · PDF页37 / 幻灯片37

**语境来源：** Week3.pdf · PDF页37 / 幻灯片37

**使用结构：** compose the plan; administrate the process

**全部来源：** Week3.pdf · PDF页37 / 幻灯片37

### monitoring status of pre-work

**稳定ID：** csit985-w3-3548e13bf98586

**类别：** 阅读词汇

**中文解释：** 跟进前期准备工作的状态；不是网络监测数据的专门定义。

**简单英文（整理解释）：** Check how preparation work is progressing.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Monitoring status of pre-work

**原文来源：** Week3.pdf · PDF页37 / 幻灯片37

**语境：** Week3 · monitoring status of pre-work

**语境英文：** Check how preparation work is progressing.

**语境中文：** 跟进前期准备工作的状态；不是网络监测数据的专门定义。

**语境依据：** 按资料用法整理

**使用结构：** monitor the status of + noun

**语境原文：** 名称或用语片段

> Monitoring status of pre-work

**语境原文来源：** Week3.pdf · PDF页37 / 幻灯片37

**语境来源：** Week3.pdf · PDF页37 / 幻灯片37

**使用结构：** monitor the status of + noun

**全部来源：** Week3.pdf · PDF页37 / 幻灯片37

### address the issues / meet the goals

**稳定ID：** csit985-w3-6eced81884af68

**类别：** 阅读词汇

**中文解释：** 处理问题／实现目标；address 在这里是动词，不是地址。meet 不是“遇见”。

**简单英文（整理解释）：** Deal with the problems; reach the goals.

**说明依据：** 按当前义项整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> address the issues

**原文来源：** Week3.pdf · PDF页39 / 幻灯片39

**语境：** Week3 · address the issues / meet the goals

**语境英文：** Deal with the problems; reach the goals.

**语境中文：** 处理问题／实现目标；address 在这里是动词，不是地址。meet 不是“遇见”。

**语境依据：** 按当前义项整理

**使用结构：** address an issue; meet a goal

**语境原文：** 名称或用语片段

> address the issues

**语境原文来源：** Week3.pdf · PDF页39 / 幻灯片39

**语境来源：** Week3.pdf · PDF页39 / 幻灯片39

**使用结构：** address an issue; meet a goal

**全部来源：** Week3.pdf · PDF页39 / 幻灯片39

### derive requirements

**稳定ID：** csit985-w3-a36cab5feb2527

**类别：** 阅读词汇

**中文解释：** 推导需求；从用户信息或应用特性得出要求，与直接 gathered from（收集自）区分。

**简单英文（整理解释）：** Work out requirements from information, rather than only recording requests directly.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图表标签或原片段（视觉核对）

> Derived from Application

**原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**语境：** Week3 · derive requirements

**语境英文：** Work out requirements from information, rather than only recording requests directly.

**语境中文：** 推导需求；从用户信息或应用特性得出要求，与直接 gathered from（收集自）区分。

**语境依据：** 按资料用法整理

**使用结构：** derive something from something

**语境原文：** 图表标签或原片段（视觉核对）

> Derived from Application

**语境原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**语境来源：** Week3.pdf · PDF页44 / 幻灯片44；Week3.pdf · PDF页46 / 幻灯片46（图表）

**使用结构：** derive something from something

**全部来源：** Week3.pdf · PDF页44 / 幻灯片44；Week3.pdf · PDF页46 / 幻灯片46（图表）

### be deemed necessary / desirable

**稳定ID：** csit985-w3-fa3a90ca26d2b3

**类别：** 阅读词汇

**中文解释：** 被认为必要的／可取的、希望具备的；前者是核心需求，后者可较晚安装。

**简单英文（整理解释）：** Be considered needed; be useful or wanted.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> desirable

**原文来源：** Week3.pdf · PDF页49 / 幻灯片49

**语境：** Week3 · be deemed necessary / desirable

**语境英文：** Be considered needed; be useful or wanted.

**语境中文：** 被认为必要的／可取的、希望具备的；前者是核心需求，后者可较晚安装。

**语境依据：** 按资料用法整理

**使用结构：** be deemed + adjective; desirable but ...

**语境原文：** 名称或用语片段

> desirable

**语境原文来源：** Week3.pdf · PDF页49 / 幻灯片49

**语境来源：** Week3.pdf · PDF页49 / 幻灯片49

**使用结构：** be deemed + adjective; desirable but ...

**全部来源：** Week3.pdf · PDF页49 / 幻灯片49

### relative importance

**稳定ID：** csit985-w3-bc77d1b87cfb20

**类别：** 阅读词汇

**中文解释：** 相对重要性；比较各项要求的强度或重要程度。

**简单英文（整理解释）：** How important one item is compared with another.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> relative importance

**原文来源：** Week3.pdf · PDF页50 / 幻灯片50

**语境：** Week3 · relative importance

**语境英文：** How important one item is compared with another.

**语境中文：** 相对重要性；比较各项要求的强度或重要程度。

**语境依据：** 按资料用法整理

**使用结构：** describe relative importance

**语境原文：** 名称或用语片段

> relative importance

**语境原文来源：** Week3.pdf · PDF页50 / 幻灯片50

**语境来源：** Week3.pdf · PDF页50 / 幻灯片50

**使用结构：** describe relative importance

**全部来源：** Week3.pdf · PDF页50 / 幻灯片50

### be overlooked / no immediate payoff

**稳定ID：** csit985-w3-aaaf6c2898a7a1

**类别：** 阅读词汇

**中文解释：** 被忽视／没有立刻可见的回报；课件说需求分析常被忽略，而且“看起来”没有立即收益，不能理解为实际无价值。

**简单英文（整理解释）：** Be missed or ignored; appear to give no quick benefit.

**说明依据：** 按资料用法整理；保留 appears

**定义状态：** 当前资料未给出正式定义

**资料原文：** 说明

> Requirement analysis is often overlooked

**原文来源：** Week3.pdf · PDF页53 / 幻灯片53

**资料原文：** 可能性与数量

> Talking to N users MAY result in N+1 sets of requirements

**原文来源：** Week3.pdf · PDF页53 / 幻灯片53

**资料原文：** 表观判断

> Requirement analysis appears to have no immediate payoff

**原文来源：** Week3.pdf · PDF页53 / 幻灯片53

**语境：** Week3 · be overlooked / no immediate payoff

**语境英文：** Be missed or ignored; appear to give no quick benefit.

**语境中文：** 被忽视／没有立刻可见的回报；课件说需求分析常被忽略，而且“看起来”没有立即收益，不能理解为实际无价值。

**语境依据：** 按资料用法整理；保留 appears

**使用结构：** be overlooked; appear to have no immediate payoff

**语境原文：** 说明

> Requirement analysis is often overlooked

**语境原文来源：** Week3.pdf · PDF页53 / 幻灯片53

**语境原文：** 可能性与数量

> Talking to N users MAY result in N+1 sets of requirements

**语境原文来源：** Week3.pdf · PDF页53 / 幻灯片53

**语境原文：** 表观判断

> Requirement analysis appears to have no immediate payoff

**语境原文来源：** Week3.pdf · PDF页53 / 幻灯片53

**语境来源：** Week3.pdf · PDF页53 / 幻灯片53；Week3.pdf · PDF页55 / 幻灯片55

**使用结构：** be overlooked; appear to have no immediate payoff

**全部来源：** Week3.pdf · PDF页53 / 幻灯片53；Week3.pdf · PDF页55 / 幻灯片55

### objective / informed choices

**稳定ID：** csit985-w3-f268a4047ffd50

**类别：** 阅读词汇

**中文解释：** 客观的／基于充分信息的选择；objective 在第54–55页是形容词，第19页 an objective 则是名词“目标”。

**简单英文（整理解释）：** Choices based on requirements and information rather than personal preference.

**说明依据：** 按资料用法整理；区分义项

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> objective

**原文来源：** Week3.pdf · PDF页54 / 幻灯片54

**资料原文：** 名称或用语片段

> Objective

**原文来源：** Week3.pdf · PDF页55 / 幻灯片55

**资料原文：** 名称或用语片段

> objective

**原文来源：** Week3.pdf · PDF页19 / 幻灯片19

**语境：** Week3 · objective / informed choices

**语境英文：** Choices based on requirements and information rather than personal preference.

**语境中文：** 客观的／基于充分信息的选择；objective 在第54–55页是形容词，第19页 an objective 则是名词“目标”。

**语境依据：** 按资料用法整理；区分义项

**使用结构：** objective, informed choices; an objective

**语境原文：** 名称或用语片段

> objective

**语境原文来源：** Week3.pdf · PDF页54 / 幻灯片54

**语境原文：** 名称或用语片段

> Objective

**语境原文来源：** Week3.pdf · PDF页55 / 幻灯片55

**语境原文：** 名称或用语片段

> objective

**语境原文来源：** Week3.pdf · PDF页19 / 幻灯片19

**语境来源：** Week3.pdf · PDF页54 / 幻灯片54；Week3.pdf · PDF页55 / 幻灯片55；Week3.pdf · PDF页19 / 幻灯片19

**使用结构：** objective, informed choices; an objective

**全部来源：** Week3.pdf · PDF页54 / 幻灯片54；Week3.pdf · PDF页55 / 幻灯片55；Week3.pdf · PDF页19 / 幻灯片19

### be sized to

**稳定ID：** csit985-w3-502ae885df5d84

**类别：** 阅读词汇

**中文解释：** 根据……确定规模／容量；按用户和应用需要设定网络及元素大小，不是只量物理尺寸。

**简单英文（整理解释）：** Choose a suitable scale or capacity based on the needs.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法原句

> Networks and elements sized to users and applications

**原文来源：** Week3.pdf · PDF页55 / 幻灯片55

**语境：** Week3 · be sized to

**语境英文：** Choose a suitable scale or capacity based on the needs.

**语境中文：** 根据……确定规模／容量；按用户和应用需要设定网络及元素大小，不是只量物理尺寸。

**语境依据：** 按资料用法整理

**使用结构：** networks and elements sized to users and applications

**语境原文：** 用法原句

> Networks and elements sized to users and applications

**语境原文来源：** Week3.pdf · PDF页55 / 幻灯片55

**语境来源：** Week3.pdf · PDF页55 / 幻灯片55

**使用结构：** networks and elements sized to users and applications

**全部来源：** Week3.pdf · PDF页55 / 幻灯片55

### tradeoffs / with the Big Picture in mind

**稳定ID：** csit985-w3-2cc575955a6027

**类别：** 阅读词汇

**中文解释：** 权衡／把整体情况放在心上；决定某项选择时，要同时考虑整体目标和其他影响。

**简单英文（整理解释）：** Balance competing needs while considering the whole situation.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Tradeoffs

**原文来源：** Week3.pdf · PDF页55 / 幻灯片55

**资料原文：** 教师用语（TXT原片段）

> very sensible like trade-offs

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符7562起；搜索“very sensible like trade-offs”

**语境：** Week3 · tradeoffs / with the Big Picture in mind

**语境英文：** Balance competing needs while considering the whole situation.

**语境中文：** 权衡／把整体情况放在心上；决定某项选择时，要同时考虑整体目标和其他影响。

**语境依据：** 按资料用法整理

**使用结构：** make tradeoffs; with ... in mind

**语境原文：** 名称或用语片段

> Tradeoffs

**语境原文来源：** Week3.pdf · PDF页55 / 幻灯片55

**语境原文：** 教师用语（TXT原片段）

> very sensible like trade-offs

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符7562起；搜索“very sensible like trade-offs”

**语境来源：** Week3.pdf · PDF页55 / 幻灯片55；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符7562起；搜索“very sensible like trade-offs”

**使用结构：** make tradeoffs; with ... in mind

**全部来源：** Week3.pdf · PDF页55 / 幻灯片55；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符7562起；搜索“very sensible like trade-offs”

### configurable / measurable / verifiable

**稳定ID：** csit985-w3-c3a8215e7d61d9

**类别：** 阅读词汇

**中文解释：** 可配置／可测量／可验证；三个不同要求：能设置、能测性能、能检查是否满足需求。

**简单英文（整理解释）：** Can be set, measured, and checked against what was requested.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Configurable

**原文来源：** Week3.pdf · PDF页58 / 幻灯片58

**资料原文：** 教师用语（TXT原片段）

> configurable, measurable, and verifiable

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符8514起；搜索“configurable, measurable, and verifiable”

**语境：** Week3 · configurable / measurable / verifiable

**语境英文：** Can be set, measured, and checked against what was requested.

**语境中文：** 可配置／可测量／可验证；三个不同要求：能设置、能测性能、能检查是否满足需求。

**语境依据：** 按资料用法整理

**语境原文：** 名称或用语片段

> Configurable

**语境原文来源：** Week3.pdf · PDF页58 / 幻灯片58

**语境原文：** 教师用语（TXT原片段）

> configurable, measurable, and verifiable

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符8514起；搜索“configurable, measurable, and verifiable”

**语境来源：** Week3.pdf · PDF页58 / 幻灯片58；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符8514起；搜索“configurable, measurable, and verifiable”

**全部来源：** Week3.pdf · PDF页58 / 幻灯片58；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符8514起；搜索“configurable, measurable, and verifiable”

### hierarchical / entities

**稳定ID：** csit985-w3-24175ffd2ee407

**类别：** 阅读词汇

**中文解释：** 有层次的／实体；服务通常分层，各用户、应用、设备及网络等实体贡献需求。

**简单英文（整理解释）：** Arranged in levels; the different parts or participants in the network.

**说明依据：** 按资料语境整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> hierarchical

**原文来源：** Week3.pdf · PDF页59 / 幻灯片59

**语境：** Week3 · hierarchical / entities

**语境英文：** Arranged in levels; the different parts or participants in the network.

**语境中文：** 有层次的／实体；服务通常分层，各用户、应用、设备及网络等实体贡献需求。

**语境依据：** 按资料语境整理

**语境原文：** 名称或用语片段

> hierarchical

**语境原文来源：** Week3.pdf · PDF页59 / 幻灯片59

**语境来源：** Week3.pdf · PDF页59 / 幻灯片59

**全部来源：** Week3.pdf · PDF页59 / 幻灯片59

### service offerings / build on each other

**稳定ID：** csit985-w3-111b742461fa05

**类别：** 阅读词汇

**中文解释：** 提供的服务／在彼此基础上累积；从用户向网络深入时，需求层层增加。

**简单英文（整理解释）：** The services provided; requirements add to earlier requirements as the analysis moves toward the network.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Service offerings

**原文来源：** Week3.pdf · PDF页60 / 幻灯片60

**资料原文：** 教师用语（TXT原片段）

> requirements build on each other

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符963起；搜索“requirements build on each other”

**语境：** Week3 · service offerings / build on each other

**语境英文：** The services provided; requirements add to earlier requirements as the analysis moves toward the network.

**语境中文：** 提供的服务／在彼此基础上累积；从用户向网络深入时，需求层层增加。

**语境依据：** 按资料用法整理

**使用结构：** build on + noun; build on each other

**语境原文：** 名称或用语片段

> Service offerings

**语境原文来源：** Week3.pdf · PDF页60 / 幻灯片60

**语境原文：** 教师用语（TXT原片段）

> requirements build on each other

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符963起；搜索“requirements build on each other”

**语境来源：** Week3.pdf · PDF页60 / 幻灯片60；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符963起；搜索“requirements build on each other”

**使用结构：** build on + noun; build on each other

**全部来源：** Week3.pdf · PDF页60 / 幻灯片60；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符963起；搜索“requirements build on each other”

### mismatch / result in

**稳定ID：** csit985-w3-91e3a7bb329cf4

**类别：** 阅读词汇

**中文解释：** 不匹配／导致；服务能力不匹配可能导致瓶颈。保留 can，不是每次都必然发生。

**简单英文（整理解释）：** Parts do not fit well; cause a result. The slide says a mismatch can cause a bottleneck.

**说明依据：** 按资料用法整理；保留可能性

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Mismatch

**原文来源：** Week3.pdf · PDF页61 / 幻灯片61

**语境：** Week3 · mismatch / result in

**语境英文：** Parts do not fit well; cause a result. The slide says a mismatch can cause a bottleneck.

**语境中文：** 不匹配／导致；服务能力不匹配可能导致瓶颈。保留 can，不是每次都必然发生。

**语境依据：** 按资料用法整理；保留可能性

**使用结构：** mismatches in ... can result in ...

**语境原文：** 名称或用语片段

> Mismatch

**语境原文来源：** Week3.pdf · PDF页61 / 幻灯片61

**语境来源：** Week3.pdf · PDF页61 / 幻灯片61

**使用结构：** mismatches in ... can result in ...

**全部来源：** Week3.pdf · PDF页61 / 幻灯片61

### consistent / perception / subjective

**稳定ID：** csit985-w3-e3f22647999fed

**类别：** 阅读词汇

**中文解释：** 一致稳定的／感知／主观的；用户感受到的质量和要求，不等同于已测量的技术指标。

**简单英文（整理解释）：** Staying similar; how a user sees quality; based on personal experience or judgment.

**说明依据：** 按资料义项整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> consistent

**原文来源：** Week3.pdf · PDF页65 / 幻灯片65

**资料原文：** 名称或用语片段

> subjective

**原文来源：** Week3.pdf · PDF页69 / 幻灯片69

**语境：** Week3 · consistent / perception / subjective

**语境英文：** Staying similar; how a user sees quality; based on personal experience or judgment.

**语境中文：** 一致稳定的／感知／主观的；用户感受到的质量和要求，不等同于已测量的技术指标。

**语境依据：** 按资料义项整理

**语境原文：** 名称或用语片段

> consistent

**语境原文来源：** Week3.pdf · PDF页65 / 幻灯片65

**语境原文：** 名称或用语片段

> subjective

**语境原文来源：** Week3.pdf · PDF页69 / 幻灯片69

**语境来源：** Week3.pdf · PDF页65 / 幻灯片65；Week3.pdf · PDF页69 / 幻灯片69

**全部来源：** Week3.pdf · PDF页65 / 幻灯片65；Week3.pdf · PDF页69 / 幻灯片69

### fit within a budget / be tied to applications

**稳定ID：** csit985-w3-e147feec57b76e

**类别：** 阅读词汇

**中文解释：** 在预算之内／与应用相关；fit 和 tied to 均是完整用法，不按字面译为“塞入”“捆绑”。

**简单英文（整理解释）：** Stay within the money available; be closely connected with applications.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> fit within a budget

**原文来源：** Week3.pdf · PDF页67 / 幻灯片67

**语境：** Week3 · fit within a budget / be tied to applications

**语境英文：** Stay within the money available; be closely connected with applications.

**语境中文：** 在预算之内／与应用相关；fit 和 tied to 均是完整用法，不按字面译为“塞入”“捆绑”。

**语境依据：** 按资料用法整理

**使用结构：** fit within a budget; be tied to + noun

**语境原文：** 名称或用语片段

> fit within a budget

**语境原文来源：** Week3.pdf · PDF页67 / 幻灯片67

**语境来源：** Week3.pdf · PDF页67 / 幻灯片67

**使用结构：** fit within a budget; be tied to + noun

**全部来源：** Week3.pdf · PDF页67 / 幻灯片67

### the full range of mission scenarios

**稳定ID：** csit985-w3-4202adc1916a9e

**类别：** 阅读词汇

**中文解释：** 全部任务场景范围；支持性要覆盖客户描述的整个范围，不能只保留一两个正常场景。

**简单英文（整理解释）：** All the mission situations described by the customer.

**说明依据：** 按资料用法整理；保留范围

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> the full range of mission scenarios

**原文来源：** Week3.pdf · PDF页68 / 幻灯片68

**语境：** Week3 · the full range of mission scenarios

**语境英文：** All the mission situations described by the customer.

**语境中文：** 全部任务场景范围；支持性要覆盖客户描述的整个范围，不能只保留一两个正常场景。

**语境依据：** 按资料用法整理；保留范围

**使用结构：** through the full range of ...

**语境原文：** 名称或用语片段

> the full range of mission scenarios

**语境原文来源：** Week3.pdf · PDF页68 / 幻灯片68

**语境来源：** Week3.pdf · PDF页68 / 幻灯片68

**使用结构：** through the full range of ...

**全部来源：** Week3.pdf · PDF页68 / 幻灯片68

### couple ... to ... / span

**稳定ID：** csit985-w3-a692a3b9fbb6b5

**类别：** 阅读词汇

**中文解释：** 把……连接到……／跨越、覆盖；应用连接用户与设备到网络，端到端需求覆盖网络路径。

**简单英文（整理解释）：** Connect things; extend across the network.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> span

**原文来源：** Week3.pdf · PDF页70 / 幻灯片70

**语境：** Week3 · couple ... to ... / span

**语境英文：** Connect things; extend across the network.

**语境中文：** 把……连接到……／跨越、覆盖；应用连接用户与设备到网络，端到端需求覆盖网络路径。

**语境依据：** 按资料用法整理

**使用结构：** couple users and devices to the network; requirements span the network

**语境原文：** 名称或用语片段

> span

**语境原文来源：** Week3.pdf · PDF页70 / 幻灯片70

**语境来源：** Week3.pdf · PDF页70 / 幻灯片70

**使用结构：** couple users and devices to the network; requirements span the network

**全部来源：** Week3.pdf · PDF页70 / 幻灯片70

### and/or

**稳定ID：** csit985-w3-b559bcde3b4d00

**类别：** 阅读词汇

**中文解释：** 和／或；可符合其中一项，也可同时符合多项。第71页不能改成“三项全部要求”。

**简单英文（整理解释）：** One or more of the listed conditions can apply.

**说明依据：** 按资料用法整理；保留逻辑关系

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> and/or

**原文来源：** Week3.pdf · PDF页71 / 幻灯片71

**语境：** Week3 · and/or

**语境英文：** One or more of the listed conditions can apply.

**语境中文：** 和／或；可符合其中一项，也可同时符合多项。第71页不能改成“三项全部要求”。

**语境依据：** 按资料用法整理；保留逻辑关系

**使用结构：** predictable, guaranteed and/or high performance

**语境原文：** 名称或用语片段

> and/or

**语境原文来源：** Week3.pdf · PDF页71 / 幻灯片71

**语境来源：** Week3.pdf · PDF页71 / 幻灯片71

**使用结构：** predictable, guaranteed and/or high performance

**全部来源：** Week3.pdf · PDF页71 / 幻灯片71

### unscheduled outages / repair the fault

**稳定ID：** csit985-w3-3d825a772c40f1

**类别：** 阅读词汇

**中文解释：** 非计划停机／修复故障；与计划维护区分，repair 强调恢复故障设备或系统。

**简单英文（整理解释）：** Unexpected periods when the system is unavailable; fix the problem.

**说明依据：** 按资料用法整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> unscheduled outages

**原文来源：** Week3.pdf · PDF页72 / 幻灯片72

**语境：** Week3 · unscheduled outages / repair the fault

**语境英文：** Unexpected periods when the system is unavailable; fix the problem.

**语境中文：** 非计划停机／修复故障；与计划维护区分，repair 强调恢复故障设备或系统。

**语境依据：** 按资料用法整理

**使用结构：** unscheduled outages; repair a fault

**语境原文：** 名称或用语片段

> unscheduled outages

**语境原文来源：** Week3.pdf · PDF页72 / 幻灯片72

**语境来源：** Week3.pdf · PDF页72 / 幻灯片72

**使用结构：** unscheduled outages; repair a fault

**全部来源：** Week3.pdf · PDF页72 / 幻灯片72

### get back online

**稳定ID：** csit985-w3-bb7eb422ee6912

**类别：** 阅读词汇

**中文解释：** 恢复上线／恢复可用；第72页问故障后需要多久，不是指用户重新登录。

**简单英文（整理解释）：** Return to a working, connected state.

**说明依据：** 按当前义项整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> get back online

**原文来源：** Week3.pdf · PDF页72 / 幻灯片72

**语境：** Week3 · get back online

**语境英文：** Return to a working, connected state.

**语境中文：** 恢复上线／恢复可用；第72页问故障后需要多久，不是指用户重新登录。

**语境依据：** 按当前义项整理

**使用结构：** how long does it take to get back online?

**语境原文：** 名称或用语片段

> get back online

**语境原文来源：** Week3.pdf · PDF页72 / 幻灯片72

**语境来源：** Week3.pdf · PDF页72 / 幻灯片72

**使用结构：** how long does it take to get back online?

**全部来源：** Week3.pdf · PDF页72 / 幻灯片72

### the last foot

**稳定ID：** csit985-w3-55d1bd6c6b0390

**类别：** 阅读词汇

**中文解释：** 最后一小段连接；第75页引号中的比喻，强调靠近终端的接入，不是在给出精确一英尺长度。

**简单英文（整理解释）：** The final part close to the end device. It is a phrase in quotation marks, not an exact distance here.

**说明依据：** 按资料比喻整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法原句

> Can’t design for the “last foot”

**原文来源：** Week3.pdf · PDF页75 / 幻灯片75

**语境：** Week3 · the last foot

**语境英文：** The final part close to the end device. It is a phrase in quotation marks, not an exact distance here.

**语境中文：** 最后一小段连接；第75页引号中的比喻，强调靠近终端的接入，不是在给出精确一英尺长度。

**语境依据：** 按资料比喻整理

**使用结构：** design for the “last foot”

**语境原文：** 用法原句

> Can’t design for the “last foot”

**语境原文来源：** Week3.pdf · PDF页75 / 幻灯片75

**语境来源：** Week3.pdf · PDF页75 / 幻灯片75

**使用结构：** design for the “last foot”

**全部来源：** Week3.pdf · PDF页75 / 幻灯片75

### typically / one or more / tend to

**稳定ID：** csit985-w3-8a4b1b0f632940

**类别：** 阅读词汇

**中文解释：** 通常／一个或更多／往往；分别限制通用设备用户数、服务器服务人数及“易被忽略”的频率，不能改成绝对判断。

**简单英文（整理解释）：** Usually; at least one; often show a pattern. These expressions limit how strong the statements are.

**说明依据：** 按资料用法整理；保留数量与频率

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Typically

**原文来源：** Week3.pdf · PDF页75 / 幻灯片75

**资料原文：** 名称或用语片段

> one or more

**原文来源：** Week3.pdf · PDF页76 / 幻灯片76

**语境：** Week3 · typically / one or more / tend to

**语境英文：** Usually; at least one; often show a pattern. These expressions limit how strong the statements are.

**语境中文：** 通常／一个或更多／往往；分别限制通用设备用户数、服务器服务人数及“易被忽略”的频率，不能改成绝对判断。

**语境依据：** 按资料用法整理；保留数量与频率

**使用结构：** typically single user; one or more users; tend to be overlooked

**语境原文：** 名称或用语片段

> Typically

**语境原文来源：** Week3.pdf · PDF页75 / 幻灯片75

**语境原文：** 名称或用语片段

> one or more

**语境原文来源：** Week3.pdf · PDF页76 / 幻灯片76

**语境来源：** Week3.pdf · PDF页75 / 幻灯片75；Week3.pdf · PDF页76 / 幻灯片76

**使用结构：** typically single user; one or more users; tend to be overlooked

**全部来源：** Week3.pdf · PDF页75 / 幻灯片75；Week3.pdf · PDF页76 / 幻灯片76

### payroll / inventory / visualization

**稳定ID：** csit985-w3-5f16826e1ee757

**类别：** 阅读词汇

**中文解释：** 薪资核算／库存／可视化；图表中三个应用的工作内容，不是三种网络协议。

**简单英文（整理解释）：** Work involving wages, stock records, or visual displays of information.

**说明依据：** 按图表用词整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图表标签或原片段（视觉核对）

> Payroll applications

**原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**资料原文：** 图表标签或原片段（视觉核对）

> Inventory application

**原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**资料原文：** 图表标签或原片段（视觉核对）

> Visualization Application

**原文来源：** Week3.pdf · PDF页47 / 幻灯片47（图表）

**语境：** Week3 · payroll / inventory / visualization

**语境英文：** Work involving wages, stock records, or visual displays of information.

**语境中文：** 薪资核算／库存／可视化；图表中三个应用的工作内容，不是三种网络协议。

**语境依据：** 按图表用词整理

**语境原文：** 图表标签或原片段（视觉核对）

> Payroll applications

**语境原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**语境原文：** 图表标签或原片段（视觉核对）

> Inventory application

**语境原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**语境原文：** 图表标签或原片段（视觉核对）

> Visualization Application

**语境原文来源：** Week3.pdf · PDF页47 / 幻灯片47（图表）

**语境来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）；Week3.pdf · PDF页47 / 幻灯片47（图表）

**全部来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）；Week3.pdf · PDF页47 / 幻灯片47（图表）

### manufacturing / engineering / lobby area

**稳定ID：** csit985-w3-5ab1f78b15099f

**类别：** 阅读词汇

**中文解释：** 制造业务／工程业务／大堂区域；地图中的用户部门和地点标签。

**简单英文（整理解释）：** Departments and a location shown in the requirement map.

**说明依据：** 按图表用词整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图表标签或原片段（视觉核对）

> Manufacturing

**原文来源：** Week3.pdf · PDF页47 / 幻灯片47（图表）

**资料原文：** 图表标签或原片段（视觉核对）

> Engineering

**原文来源：** Week3.pdf · PDF页47 / 幻灯片47（图表）

**资料原文：** 图表标签或原片段（视觉核对）

> Lobby Area

**原文来源：** Week3.pdf · PDF页47 / 幻灯片47（图表）

**语境：** Week3 · manufacturing / engineering / lobby area

**语境英文：** Departments and a location shown in the requirement map.

**语境中文：** 制造业务／工程业务／大堂区域；地图中的用户部门和地点标签。

**语境依据：** 按图表用词整理

**语境原文：** 图表标签或原片段（视觉核对）

> Manufacturing

**语境原文来源：** Week3.pdf · PDF页47 / 幻灯片47（图表）

**语境原文：** 图表标签或原片段（视觉核对）

> Engineering

**语境原文来源：** Week3.pdf · PDF页47 / 幻灯片47（图表）

**语境原文：** 图表标签或原片段（视觉核对）

> Lobby Area

**语境原文来源：** Week3.pdf · PDF页47 / 幻灯片47（图表）

**语境来源：** Week3.pdf · PDF页47 / 幻灯片47（图表）

**全部来源：** Week3.pdf · PDF页47 / 幻灯片47（图表）

### a minimum of / up to / per session

**稳定ID：** csit985-w3-a528192f0d8de0

**类别：** 阅读词汇

**中文解释：** 至少／最高到／每个会话；示例分别要求每会话至少 5 Mbps，以及需支持最高到 1 Gbps 的容量需求。不能理解为整个网络最多只能有 1 Gbps。

**简单英文（整理解释）：** A minimum amount; as much as the stated amount; for each session. The example needs support for up to 1 Gbps, without setting a maximum for the whole network.

**说明依据：** 按图表用法整理；保留数量与口径

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图表标签或原片段（视觉核对）

> a minimum of 5 Mbps per session

**原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**资料原文：** 图表标签或原片段（视觉核对）

> up to 1Gbps capacity

**原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**语境：** Week3 · a minimum of / up to / per session

**语境英文：** A minimum amount; as much as the stated amount; for each session. The example needs support for up to 1 Gbps, without setting a maximum for the whole network.

**语境中文：** 至少／最高到／每个会话；示例分别要求每会话至少 5 Mbps，以及需支持最高到 1 Gbps 的容量需求。不能理解为整个网络最多只能有 1 Gbps。

**语境依据：** 按图表用法整理；保留数量与口径

**使用结构：** a minimum of + amount; up to + amount; per + unit

**语境原文：** 图表标签或原片段（视觉核对）

> a minimum of 5 Mbps per session

**语境原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**语境原文：** 图表标签或原片段（视觉核对）

> up to 1Gbps capacity

**语境原文来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**语境来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

**使用结构：** a minimum of + amount; up to + amount; per + unit

**全部来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

### on the shelf

**稳定ID：** csit985-w3-691442857fbcad

**类别：** 阅读词汇

**中文解释：** 搁置不用；教师说组织不支持或不用规划结果，计划就成了架子上的文档。

**简单英文（整理解释）：** A plan exists but is not used.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语（TXT原片段）

> a document on the shelf

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符3325起；搜索“a document on the shelf”

**语境：** Week3 · on the shelf

**语境英文：** A plan exists but is not used.

**语境中文：** 搁置不用；教师说组织不支持或不用规划结果，计划就成了架子上的文档。

**语境依据：** 教师补充

**使用结构：** a document on the shelf

**语境原文：** 教师用语（TXT原片段）

> a document on the shelf

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符3325起；搜索“a document on the shelf”

**语境来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符3325起；搜索“a document on the shelf”

**使用结构：** a document on the shelf

**全部来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符3325起；搜索“a document on the shelf”

### from a networking perspective

**稳定ID：** csit985-w3-f1a701dbe187e2

**类别：** 阅读词汇

**中文解释：** 从网络角度看；教师用它区分一般业务现状与容量、旧设备、安全等网络问题。

**简单英文（整理解释）：** Looking at the situation from the view of network needs.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语（TXT原片段）

> from a networking perspective

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符5583起；搜索“from a networking perspective”

**语境：** Week3 · from a networking perspective

**语境英文：** Looking at the situation from the view of network needs.

**语境中文：** 从网络角度看；教师用它区分一般业务现状与容量、旧设备、安全等网络问题。

**语境依据：** 教师补充

**使用结构：** from a ... perspective

**语境原文：** 教师用语（TXT原片段）

> from a networking perspective

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符5583起；搜索“from a networking perspective”

**语境来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符5583起；搜索“from a networking perspective”

**使用结构：** from a ... perspective

**全部来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符5583起；搜索“from a networking perspective”

### resort to

**稳定ID：** csit985-w3-baa0c7026a539d

**类别：** 阅读词汇

**中文解释：** 求助于／不得不借助；团队没人有规划经验时，可以寻求外部支持。

**简单英文（整理解释）：** Use a source of help when other options are limited.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语（TXT原片段）

> resort to some outside support

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符15155起；搜索“resort to some outside support”

**语境：** Week3 · resort to

**语境英文：** Use a source of help when other options are limited.

**语境中文：** 求助于／不得不借助；团队没人有规划经验时，可以寻求外部支持。

**语境依据：** 教师补充

**使用结构：** resort to + noun / -ing

**语境原文：** 教师用语（TXT原片段）

> resort to some outside support

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符15155起；搜索“resort to some outside support”

**语境来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符15155起；搜索“resort to some outside support”

**使用结构：** resort to + noun / -ing

**全部来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符15155起；搜索“resort to some outside support”

### take part in / contribute

**稳定ID：** csit985-w3-b5187471e1bbbc

**类别：** 阅读词汇

**中文解释：** 参与／提供意见或贡献；教师强调给成员贡献意见的机会有助于获得支持。

**简单英文（整理解释）：** Join an activity; add useful ideas or work.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语（TXT原片段）

> take part directly in planning

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符15578起；搜索“take part directly in planning”

**资料原文：** 教师用语（TXT原片段）

> a chance to, to, to contribute

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符14708起；搜索“a chance to, to, to contribute”

**语境：** Week3 · take part in / contribute

**语境英文：** Join an activity; add useful ideas or work.

**语境中文：** 参与／提供意见或贡献；教师强调给成员贡献意见的机会有助于获得支持。

**语境依据：** 教师补充

**使用结构：** take part in + noun; contribute to + noun

**语境原文：** 教师用语（TXT原片段）

> take part directly in planning

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符15578起；搜索“take part directly in planning”

**语境原文：** 教师用语（TXT原片段）

> a chance to, to, to contribute

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符14708起；搜索“a chance to, to, to contribute”

**语境来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符15578起；搜索“take part directly in planning”；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符14708起；搜索“a chance to, to, to contribute”

**使用结构：** take part in + noun; contribute to + noun

**全部来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符15578起；搜索“take part directly in planning”；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符14708起；搜索“a chance to, to, to contribute”

### under review

**稳定ID：** csit985-w3-31d23cc8600ae7

**类别：** 阅读词汇

**中文解释：** 正在审查、尚未完成判断；优先级高的需求也可能还在审查中。

**简单英文（整理解释）：** Still being checked before a final decision.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语（TXT原片段）

> very important, but still, still be some like under review

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符5680起；搜索“very important, but still, still be some like under review”

**语境：** Week3 · under review

**语境英文：** Still being checked before a final decision.

**语境中文：** 正在审查、尚未完成判断；优先级高的需求也可能还在审查中。

**语境依据：** 教师补充

**使用结构：** be under review

**语境原文：** 教师用语（TXT原片段）

> very important, but still, still be some like under review

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符5680起；搜索“very important, but still, still be some like under review”

**语境来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符5680起；搜索“very important, but still, still be some like under review”

**使用结构：** be under review

**全部来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符5680起；搜索“very important, but still, still be some like under review”

### reduce ambiguity

**稳定ID：** csit985-w3-5a3e325b6f7ab6

**类别：** 阅读词汇

**中文解释：** 减少歧义；认真且一致地使用需求关键词，减少多种理解。

**简单英文（整理解释）：** Make the meaning less open to different interpretations.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语（TXT原片段）

> reduce uh ambiguity

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符5175起；搜索“reduce uh ambiguity”

**资料原文：** 教师用语（TXT原片段）

> carefully and consistently

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符5229起；搜索“carefully and consistently”

**语境：** Week3 · reduce ambiguity

**语境英文：** Make the meaning less open to different interpretations.

**语境中文：** 减少歧义；认真且一致地使用需求关键词，减少多种理解。

**语境依据：** 教师补充

**使用结构：** reduce ambiguity; use words consistently

**语境原文：** 教师用语（TXT原片段）

> reduce uh ambiguity

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符5175起；搜索“reduce uh ambiguity”

**语境原文：** 教师用语（TXT原片段）

> carefully and consistently

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符5229起；搜索“carefully and consistently”

**语境来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符5175起；搜索“reduce uh ambiguity”；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符5229起；搜索“carefully and consistently”

**使用结构：** reduce ambiguity; use words consistently

**全部来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符5175起；搜索“reduce uh ambiguity”；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符5229起；搜索“carefully and consistently”

### comfort zone

**稳定ID：** csit985-w3-1d934d0b40b2a0

**类别：** 阅读词汇

**中文解释：** 舒适区；教师批评只凭个人熟悉偏好作设计，应依据证据和需求。

**简单英文（整理解释）：** A situation or choice that feels familiar and easy.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语（TXT原片段）

> personal comfort zone

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符7178起；搜索“personal comfort zone”

**语境：** Week3 · comfort zone

**语境英文：** A situation or choice that feels familiar and easy.

**语境中文：** 舒适区；教师批评只凭个人熟悉偏好作设计，应依据证据和需求。

**语境依据：** 教师补充

**使用结构：** in a comfort zone

**语境原文：** 教师用语（TXT原片段）

> personal comfort zone

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符7178起；搜索“personal comfort zone”

**语境来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符7178起；搜索“personal comfort zone”

**使用结构：** in a comfort zone

**全部来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符7178起；搜索“personal comfort zone”

### translate ... into measurable needs

**稳定ID：** csit985-w3-45c153206c6799

**类别：** 阅读词汇

**中文解释：** 把……转成可测需求；例如把“视频要清楚”的用户表达转为性能指标。translate 在这里不是把中文翻成英文。

**简单英文（整理解释）：** Turn a user's statement into requirements that can be measured.

**说明依据：** 教师补充；原片段保留

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语（TXT原片段）

> translate such a statement or intent or requirement to a very measurable needs

**原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符6221起；搜索“translate such a statement or intent or requirement to a very measurable needs”

**语境：** Week3 · translate ... into measurable needs

**语境英文：** Turn a user's statement into requirements that can be measured.

**语境中文：** 把……转成可测需求；例如把“视频要清楚”的用户表达转为性能指标。translate 在这里不是把中文翻成英文。

**语境依据：** 教师补充；原片段保留

**使用结构：** translate A into B；TXT实际用 to，整理结构用 into

**语境原文：** 教师用语（TXT原片段）

> translate such a statement or intent or requirement to a very measurable needs

**语境原文来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符6221起；搜索“translate such a statement or intent or requirement to a very measurable needs”

**语境来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符6221起；搜索“translate such a statement or intent or requirement to a very measurable needs”

**使用结构：** translate A into B；TXT实际用 to，整理结构用 into

**全部来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符6221起；搜索“translate such a statement or intent or requirement to a very measurable needs”

## 历史词组兼容说明

### Network analysis

**旧ID：** csit985-w3-4362e38a3cf8c7

**中文：** 网络分析；第5页要求在开始分析前先定义范围、了解战略计划；后半讲通过需求分析理解系统和网络行为。本周没有单独给出此术语的正式定义。

**简单英文：** The network analysis stage follows scope definition and strategic planning. This week does not give a separate formal definition.

**来源：** Week3.pdf · PDF页5 / 幻灯片5；Week3.pdf · PDF页44 / 幻灯片44

### Strategic Network Design

**旧ID：** csit985-w3-8a25fc789310fc

**中文：** 战略网络设计；本周把组织业务规划与网络技术需求联系起来，先明确方向和参与者，再识别网络必须提供什么。

**简单英文：** Connect business planning with technical network needs. This week starts with purpose and people, then considers what the network must provide.

**来源：** Week3.pdf · PDF页2 / 幻灯片2；Week3.pdf · PDF页3 / 幻灯片3；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符736起；搜索“connect some business planning with some tech technical network design”

### Design scope

**旧ID：** csit985-w3-a76145f17c3524

**中文：** 设计范围；先确定是新建网络，还是优化、扩展、整合现有网络。这会影响需要收集的信息。

**简单英文：** The boundary of the design work. Decide what kind of network work is included before collecting information.

**来源：** Week3.pdf · PDF页6 / 幻灯片6；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符1608起；搜索“what is inside the project”

### Green field (new) network

**旧ID：** csit985-w3-7889f4b3e39ec3

**中文：** 全新网络；本课件用 green field 表示新建，而非改造现有网络。新建仍可能受到业务和预算限制。

**简单英文：** A new network, rather than an improvement to an existing network. A new design can still have business and budget limits.

**来源：** Week3.pdf · PDF页6 / 幻灯片6；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符2073起；搜索“a green field design”；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符2428起；搜索“business or budget limits”

### Existing network

**旧ID：** csit985-w3-f56774d57ebaae

**中文：** 现有网络；设计时可能需要优化、扩展，或与外部网络整合。

**简单英文：** A network that is already in use. The design may improve it, expand it, or connect it to other networks.

**来源：** Week3.pdf · PDF页6 / 幻灯片6；Week3.pdf · PDF页78 / 幻灯片78

### Strategic network plan

**旧ID：** csit985-w3-c73a02a4283d90

**中文：** 战略网络计划；说明组织未来希望网络支持什么。课件在开始网络分析前列出此项。

**简单英文：** A plan that connects the future needs of the organization with the network.

**来源：** Week3.pdf · PDF页5 / 幻灯片5；Week3.pdf · PDF页7 / 幻灯片7；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符1734起；搜索“what the organization wants the network to support in the future”

### Strategic planning

**旧ID：** csit985-w3-4659075e239bea

**中文：** 战略规划；持续思考和作出方向性决定的过程。计划永远不会完美或完全完成，也不是最终目的。

**简单英文：** An ongoing way of thinking about the future. The plan is never perfect or complete, and it is a tool to support the mission.

**来源：** Week3.pdf · PDF页21 / 幻灯片21；Week3.pdf · PDF页22 / 幻灯片22；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符9037起；搜索“an ongoing way of thinking”

### The Crouch Diagram

**旧ID：** csit985-w3-7668818c910ff8

**中文：** Crouch 规划图；用六个问题串起组织目的、做事方式、现状、目标、行动和结果确认。

**简单英文：** A planning diagram with six questions, from the purpose of the organization to checking the result.

**来源：** Week3.pdf · PDF页11 / 幻灯片11；Week3.pdf · PDF页12 / 幻灯片12；Week3.pdf · PDF页13 / 幻灯片13；Week3.pdf · PDF页14 / 幻灯片14；Week3.pdf · PDF页15 / 幻灯片15；Week3.pdf · PDF页16 / 幻灯片16；Week3.pdf · PDF页17 / 幻灯片17；Week3.pdf · PDF页18 / 幻灯片18

### Gap analysis

**旧ID：** csit985-w3-6dc755576a7d80

**中文：** 差距分析；图中连接“现在在哪里”“想到哪里”和“如何到达”。资料未展开具体分析方法。

**简单英文：** Compare the current position with the desired position, then consider how to close the gap.

**来源：** Week3.pdf · PDF页17 / 幻灯片17（图表）；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符7145起；搜索“gap, gap analysis”

### Strategy

**旧ID：** csit985-w3-84549dea9a8658

**中文：** 战略；说明怎样实现目标，关注目标与手段的关系，以及如何部署可用资源。

**简单英文：** How an objective will be achieved. Strategy connects the desired result with the available means and deploys resources.

**来源：** Week3.pdf · PDF页19 / 幻灯片19；Week3.pdf · PDF页20 / 幻灯片20

### Tactics

**旧ID：** csit985-w3-98a8723a995a34

**中文：** 战术；为实现具体目标而采取行动，关注如何运用已部署的资源。课件将其与战略区分。

**简单英文：** Actions used to reach particular objectives. Tactics employ resources in specific situations.

**来源：** Week3.pdf · PDF页19 / 幻灯片19；Week3.pdf · PDF页20 / 幻灯片20；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符7812起；搜索“used in specific situations”

### Rational-Empirical

**旧ID：** csit985-w3-b487473aefe3b0

**中文：** 理性—经验型变革策略；假设人按自身利益作理性选择，用信息沟通和激励推动改变。

**简单英文：** A change strategy based on information and incentives. It assumes that people are rational and follow self interest.

**来源：** Week3.pdf · PDF页27 / 幻灯片27

### Normative-Re-educative

**旧ID：** csit985-w3-9add44f8416408

**中文：** 规范—再教育型变革策略；假设人遵循社会规范，通过重释规范及建立对新规范的认同推动改变。

**简单英文：** A change strategy based on social norms. It changes how norms are understood and builds commitment to new norms.

**来源：** Week3.pdf · PDF页27 / 幻灯片27；Week3.pdf · PDF页27 / 幻灯片27（图表）

### Power-Coercive

**旧ID：** csit985-w3-a7a673338cf168

**中文：** 权力—强制型变革策略；假设人多会服从指令，用权威和制裁推动改变。TXT 的 Power cohesive 疑似转写错误。

**简单英文：** A change strategy based on authority and sanctions. The slide assumes that people mostly do as they are told.

**来源：** Week3.pdf · PDF页27 / 幻灯片27；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符12417起；搜索“Power cohesive”

### Environmental-Adaptive

**旧ID：** csit985-w3-b75824fe0709f9

**中文：** 环境—适应型变革策略；假设人反对损失或扰动，但容易适应；建立新组织，再逐渐转移人员。

**简单英文：** A change strategy that builds a new organization and gradually moves people to it. It assumes that people oppose loss but adapt readily.

**来源：** Week3.pdf · PDF页27 / 幻灯片27；Week3.pdf · PDF页27 / 幻灯片27（图表）

### Change management strategy

**旧ID：** csit985-w3-08d2d8a552d81b

**中文：** 变革管理策略；教师明确说上述四种策略讨论的是组织改变，不是网络协议。

**简单英文：** An approach to changing an organization. The four approaches here are about people and change.

**来源：** Week3.pdf · PDF页27 / 幻灯片27；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符11941起；搜索“change management strategy”；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符12006起；搜索“network protocols”

### Requirement

**旧ID：** csit985-w3-7321e528e80640

**中文：** 需求；网络为支持用户、应用、设备而需要提供的功能和性能描述。

**简单英文：** A description of the network functions and performance needed to support users, applications, and devices.

**来源：** Week3.pdf · PDF页43 / 幻灯片43

### Requirement analysis

**旧ID：** csit985-w3-a0371bdeb96fe6

**中文：** 需求分析；识别、收集、推导并理解系统需求，建立性能阈值和限制，判断不同服务适用于哪里。

**简单英文：** Identify, gather, derive, and understand requirements. Set performance limits and decide where different services are needed.

**来源：** Week3.pdf · PDF页44 / 幻灯片44；Week3.pdf · PDF页42 / 幻灯片42

### Performance threshold

**旧ID：** csit985-w3-85104dfa9fdce7

**中文：** 性能阈值；需求分析要建立的性能判断界限。本周没有给出具体数值或公式。

**简单英文：** A performance boundary used when analyzing requirements. This week gives no numerical threshold or formula.

**来源：** Week3.pdf · PDF页44 / 幻灯片44

### Best-effort service

**旧ID：** csit985-w3-f659401104eeb3

**中文：** 尽力而为服务；本周只把它列为需要判断适用位置的一类服务，没有正式定义。

**简单英文：** One service type to consider during analysis. This week does not define its exact service behavior.

**来源：** Week3.pdf · PDF页44 / 幻灯片44；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符1732起；搜索“best effort, service”

### Predictable service

**旧ID：** csit985-w3-1e46df8f17f917

**中文：** 可预测服务；本周要求判断它适用于网络哪些部分，没有说明可预测的范围或保证条件。

**简单英文：** A service type whose place in the network must be considered. This week gives no detailed conditions.

**来源：** Week3.pdf · PDF页44 / 幻灯片44；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符1791起；搜索“predictable and all guaranteed services needed”

### Guaranteed service

**旧ID：** csit985-w3-a93c185078be70

**中文：** 有保证的服务；本周列为服务类别，没有给出保证内容、数值或执行机制。

**简单英文：** A service type named in the analysis activities. This week does not state the guarantee or how it is enforced.

**来源：** Week3.pdf · PDF页44 / 幻灯片44；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符1791起；搜索“predictable and all guaranteed services needed”

### Requirements specification

**旧ID：** csit985-w3-fadc47c0792887

**中文：** 需求规格说明；列出需求及其优先级的文档。第45页原句写 priorities，疑似把动词 prioritizes 写错；原文保留。

**简单英文：** A document that lists requirements and their priorities.

**来源：** Week3.pdf · PDF页45 / 幻灯片45；Week3.pdf · PDF页46 / 幻灯片46（图表）；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符2023起；搜索“lists the requirement and their, uh, priorities”

### Requirements map

**旧ID：** csit985-w3-3e991c78eaa53c

**中文：** 需求地图；展示应用和设备之间的位置依赖，用于 Flow analysis 和用户需求。

**简单英文：** A map showing location dependencies between applications and devices. It supports flow analysis and user requirements.

**来源：** Week3.pdf · PDF页45 / 幻灯片45；Week3.pdf · PDF页47 / 幻灯片47（图表）；Week3.pdf · PDF页73 / 幻灯片73

### Requirement identifier (ID/Name)

**旧ID：** csit985-w3-7fe48c33ab5824

**中文：** 需求标识；示例表用 ID/Name 区分需求条目，方便跟踪和讨论。

**简单英文：** A label or number used to identify a requirement in the example table.

**来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符2491起；搜索“Identifier ID”

### Requirement type

**旧ID：** csit985-w3-45e1bdf9a8ed6c

**中文：** 需求类型；第51页突出 User、Network、Application、Device 等来源层次；第49页另按核心、可后置、拒绝分类。两种分类维度不同。

**简单英文：** A way to group requirements. The example table uses user, network, application, and device; another slide groups them by need and importance.

**来源：** Week3.pdf · PDF页51 / 幻灯片51（图表）；Week3.pdf · PDF页49 / 幻灯片49

### Requirement status

**旧ID：** csit985-w3-35f153b5adccb0

**中文：** 需求状态；示例表用于记录 Info 或 TBD 等处理状态。状态和优先级是不同字段。

**简单英文：** The current state recorded for a requirement. It is separate from priority.

**来源：** Week3.pdf · PDF页52 / 幻灯片52（图表）；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符5726起；搜索“under review”

### Requirement priority

**旧ID：** csit985-w3-f6cb36ad22db1c

**中文：** 需求优先级；表示先处理或重视哪项需求。示例表的 Priority 列均为 TBD，尚未确定。

**简单英文：** How important a requirement is compared with others. The example priorities are still marked TBD.

**来源：** Week3.pdf · PDF页52 / 幻灯片52（图表）；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符5617起；搜索“status and priority”

### Core requirements

**旧ID：** csit985-w3-c484f8fa41aa80

**中文：** 核心需求；被认为必要的特性，设计必须满足。

**简单英文：** Features considered necessary for the network. The design must meet them.

**来源：** Week3.pdf · PDF页49 / 幻灯片49；Week3.pdf · PDF页50 / 幻灯片50；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符4076起；搜索“the network we design must meet them”

### Feature requirements

**旧ID：** csit985-w3-a8e2e6137a875a

**中文：** 可取特性需求；有用且希望具备，但可晚些安装。本课件把它们与核心需求区分。

**简单英文：** Desirable features that can be installed later.

**来源：** Week3.pdf · PDF页49 / 幻灯片49；Week3.pdf · PDF页50 / 幻灯片50

### Future revisions/upgrades

**旧ID：** csit985-w3-58ca4cd5915234

**中文：** 未来修订或升级需求；分类图中为后续修改保留的一类需求。

**简单英文：** Requirements kept for future changes or upgrades.

**来源：** Week3.pdf · PDF页48 / 幻灯片48（图表）；Week3.pdf · PDF页50 / 幻灯片50

### Rejected requirements

**旧ID：** csit985-w3-3ddf58143d3c17

**中文：** 被拒绝的需求；并非真正必要，或并不可取。原文是 either ... or ...，无需两者同时成立。

**简单英文：** Requirements that are either not really necessary or not desirable.

**来源：** Week3.pdf · PDF页49 / 幻灯片49；Week3.pdf · PDF页50 / 幻灯片50

### Informational requirements

**旧ID：** csit985-w3-aed0c8b7c794f1

**中文：** 信息性需求；分类图中单独列出，示例表也出现 Info。资料未给出正式定义。

**简单英文：** A category named in the diagram. The example also has an Info status, but no formal definition is given.

**来源：** Week3.pdf · PDF页48 / 幻灯片48（图表）；Week3.pdf · PDF页52 / 幻灯片52（图表）

### RFC 2119 keywords

**旧ID：** csit985-w3-a1d398d3a9ef22

**中文：** RFC 2119 需求关键词；本课件用来表达需求的相对重要性。这里仅整理课件表格，未读取 RFC 原文。

**简单英文：** Keywords used by the lecture to show the relative importance of requirements.

**来源：** Week3.pdf · PDF页50 / 幻灯片50

### Must / Shall / Required

**旧ID：** csit985-w3-603d58970cada9

**中文：** 必须／应当／必需；第50页归为 Core，表达必要要求。

**简单英文：** Words that the lecture places in the Core requirement group.

**来源：** Week3.pdf · PDF页50 / 幻灯片50

### Must Not / Shall Not

**旧ID：** csit985-w3-93991713cd00c5

**中文：** 不得／禁止；仍属于 Core，是必须遵守的否定要求。

**简单英文：** Words for a required prohibition. The lecture places them in the Core group.

**来源：** Week3.pdf · PDF页50 / 幻灯片50

### Should / Recommended

**旧ID：** csit985-w3-472459432ef00a

**中文：** 应该／建议；课件归为 Feature or Future。保留“建议”强度，不等同 Must。

**简单英文：** Words that the lecture places in the Feature or Future group.

**来源：** Week3.pdf · PDF页50 / 幻灯片50

### Should Not / Not Recommended

**旧ID：** csit985-w3-f3f6c73d359b68

**中文：** 不应该／不建议；课件归为 Feature or Future。不是 Must Not 的同等强制禁止。

**简单英文：** Words advising against something. The lecture places them in Feature or Future.

**来源：** Week3.pdf · PDF页50 / 幻灯片50

### May / Optional

**旧ID：** csit985-w3-e5e4dcc1a14666

**中文：** 可以／可选；课件列为 Feature、Future 或 Rejected，不能仅凭关键词断定实际已被拒绝。

**简单英文：** Words that the lecture places in Feature, Future, or Rejected. The word alone does not show the final decision.

**来源：** Week3.pdf · PDF页50 / 幻灯片50

### Flow analysis

**旧ID：** csit985-w3-7235ed5a62da01

**中文：** 流量分析；需求地图用于后续分析网络中的信息流。本周未讲具体分析算法。

**简单英文：** Analysis of information flows in the network. Requirement maps support it; the detailed method is not taught this week.

**来源：** Week3.pdf · PDF页45 / 幻灯片45；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符2304起；搜索“flow analysis and the network design”

### Network services

**旧ID：** csit985-w3-3da14357d53e35

**中文：** 网络服务；网络内部可以配置和管理的一组能力，体现提供的性能、功能，以及预期需求；要有效须端到端提供。

**简单英文：** Sets of network capabilities that can be configured and managed. Useful services must be provided end to end.

**来源：** Week3.pdf · PDF页57 / 幻灯片57；Week3.pdf · PDF页58 / 幻灯片58；Week3.pdf · PDF页59 / 幻灯片59；Week3.pdf · PDF页60 / 幻灯片60

### End-to-end provisioning

**旧ID：** csit985-w3-9159da978ac1d8

**中文：** 端到端服务提供；服务需覆盖完整路径，单个部分性能强并不足够。

**简单英文：** Provide the service across the full path. A strong service in only one part is not enough.

**来源：** Week3.pdf · PDF页57 / 幻灯片57；Week3.pdf · PDF页60 / 幻灯片60；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符1100起；搜索“a strong, very strong services in one”

### Accounting (network services)

**旧ID：** csit985-w3-3ff277d4122c19

**中文：** 网络服务核算／记录；课件用于确认用户实际得到所请求的服务，不是仅指财务记账；未给出具体机制。

**简单英文：** Keep information about the service so the requested and actual service can be compared.

**来源：** Week3.pdf · PDF页58 / 幻灯片58；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符243起；搜索“accounting and monitoring”；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符313起；搜索“compare the actual service”

### Backbone

**旧ID：** csit985-w3-516299644a884a

**中文：** 骨干网络；课件说通常在骨干提供一般服务，在靠近用户处提供具体服务。BB 是图中的缩写。

**简单英文：** The main part of the network. The lecture places general services there and more specific services near users.

**来源：** Week3.pdf · PDF页59 / 幻灯片59；Week3.pdf · PDF页47 / 幻灯片47（图表）

### Network bottleneck

**旧ID：** csit985-w3-91daa57d5de2ce

**中文：** 网络瓶颈；服务不匹配可形成限制端到端性能的部分。图中速率为 1 Gbps、10 bps、100 Mbps，按原图保留。

**简单英文：** A part of the path that limits performance. The diagram prints 1 Gbps, 10 bps, and 100 Mbps; the middle value needs checking.

**来源：** Week3.pdf · PDF页61 / 幻灯片61（图表）；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符1668起；搜索“the weakest part of the path”；Week3.pdf · PDF页61 / 幻灯片61

### User requirements

**旧ID：** csit985-w3-a0e92d74b7c067

**中文：** 用户需求；从用户期待出发，技术性最低、主观性最强；还需了解用户数量和位置。

**简单英文：** What users need from the system. These are the least technical and most subjective requirements in the lecture.

**来源：** Week3.pdf · PDF页63 / 幻灯片63；Week3.pdf · PDF页69 / 幻灯片69；Week3.pdf · PDF页74 / 幻灯片74

### Application requirements

**旧ID：** csit985-w3-b7fe5bed3dc66f

**中文：** 应用需求；应用把用户和设备连接到网络，常覆盖端到端路径，决定很多网络设计需求。

**简单英文：** Needs of applications, which connect users and devices to the network. These needs often cover the full path.

**来源：** Week3.pdf · PDF页70 / 幻灯片70；Week3.pdf · PDF页71 / 幻灯片71

### Host requirements / Device requirements

**旧ID：** csit985-w3-bf0ea0fb6c5af5

**中文：** 主机／设备需求；服务需求列表用 Host，后面以 Device 为标题展开终端、服务器及专用设备。

**简单英文：** Needs of end devices, servers, and specialized equipment. Host and device are the labels used in these slides.

**来源：** Week3.pdf · PDF页62 / 幻灯片62；Week3.pdf · PDF页75 / 幻灯片75；Week3.pdf · PDF页76 / 幻灯片76；Week3.pdf · PDF页77 / 幻灯片77

### Network requirements

**旧ID：** csit985-w3-06c6f8698c188c

**中文：** 网络需求；纳入现有网络的依赖、限制、互操作和老化问题。

**简单英文：** Needs and limits arising from the existing network, including dependencies, interoperability, and obsolescence.

**来源：** Week3.pdf · PDF页78 / 幻灯片78

### Timeliness

**旧ID：** csit985-w3-a62e206c81a04f

**中文：** 及时性；用户可在合理时间内传送、访问或修改信息。课件没有定义固定秒数。

**简单英文：** Users can transfer, access, or change information within a reasonable time. No fixed time limit is given here.

**来源：** Week3.pdf · PDF页64 / 幻灯片64；Week3.pdf · PDF页74 / 幻灯片74

### Interactivity

**旧ID：** csit985-w3-e7882e7659b738

**中文：** 交互性；关注系统对使用者操作的响应。映射图把它与 Timeliness 一起对应 Delay。

**简单英文：** Focus on the response of the system during use. The map groups it with timeliness under delay.

**来源：** Week3.pdf · PDF页64 / 幻灯片64；Week3.pdf · PDF页74 / 幻灯片74

### Reliability (user perspective)

**旧ID：** csit985-w3-415be9373170c0

**中文：** 用户视角的可靠性；课件解释为多数时候能访问系统，且服务水平一致。它与 RMA 的失效频率定义需按语境区分。

**简单英文：** From the user's view, the system is available most of the time and gives a consistent level of service.

**来源：** Week3.pdf · PDF页65 / 幻灯片65；Week3.pdf · PDF页72 / 幻灯片72；Week3.pdf · PDF页74 / 幻灯片74

### Presentation quality

**旧ID：** csit985-w3-95e09d70249e45

**中文：** 呈现质量；用户感受到的质量，例如音频与视频显示。

**简单英文：** The quality perceived by the user, for example in audio and video displays.

**来源：** Week3.pdf · PDF页65 / 幻灯片65；Week3.pdf · PDF页74 / 幻灯片74

### Adaptability

**旧ID：** csit985-w3-bbad77f8986090

**中文：** 适应性；系统适应用户需求的能力；例子是使用不受距离约束及移动性。

**简单英文：** The ability of the system to adapt to users' needs, including distance independence and mobility.

**来源：** Week3.pdf · PDF页66 / 幻灯片66；Week3.pdf · PDF页74 / 幻灯片74

### Distance independence / Mobility

**旧ID：** csit985-w3-75c2d2fd2a3b02

**中文：** 距离独立性／移动性；课件把二者列为 Adaptability 的例子，没有给出实现方式或覆盖范围。

**简单英文：** Examples of adaptability: use across locations and while moving. The slides do not give an implementation or range.

**来源：** Week3.pdf · PDF页66 / 幻灯片66

### Security

**旧ID：** csit985-w3-b58d6150f1c242

**中文：** 安全性；本课件列 confidentiality、integrity、authenticity，保护用户信息和物理资源。TXT 的 CIA 表述有疑点。

**简单英文：** Protection of users' information and physical resources. This slide names confidentiality, integrity, and authenticity.

**来源：** Week3.pdf · PDF页66 / 幻灯片66；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符4132起；搜索“CIA prison”

### Confidentiality / Integrity / Authenticity

**旧ID：** csit985-w3-5a987ee44bffd7

**中文：** 保密性／完整性／真实性；第66页并列的安全属性。单项正式定义未给出；这里分别解释为不泄露、内容保持完整、对象或信息确为所称来源。

**简单英文：** Security properties named in the slide: keep information private, keep it complete, and check that it is what it claims to be. Individual definitions are not given.

**来源：** Week3.pdf · PDF页66 / 幻灯片66；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符4166起；搜索“confidential utility, integrity, and, uh, and authenticity”

### Affordability

**旧ID：** csit985-w3-f2ca89ca92de81

**中文：** 可负担性；购买在预算内，课件明确说这一要求完全不是技术性的。

**简单英文：** Purchases fit within the available budget. The slide calls this completely non-technical.

**来源：** Week3.pdf · PDF页67 / 幻灯片67；Week3.pdf · PDF页74 / 幻灯片74

### Functionality

**旧ID：** csit985-w3-9bf42d48ed7bd0

**中文：** 功能性；系统将执行哪些功能，常与所用应用相联系。

**简单英文：** The functions the system will perform, often tied to the applications used.

**来源：** Week3.pdf · PDF页67 / 幻灯片67

### Supportability

**旧ID：** csit985-w3-ab166d6ab2e1e2

**中文：** 可支持性；网络在客户描述的全部任务场景范围内，继续运行得有多好；不是只问有无客服。

**简单英文：** How well the network can keep operating through the full range of the customer's mission scenarios.

**来源：** Week3.pdf · PDF页68 / 幻灯片68

### Future growth

**旧ID：** csit985-w3-318de628485aa2

**中文：** 未来增长；依赖了解用户未来部署新应用等计划。图中 Expected growth 映射到 Capacity。

**简单英文：** Future changes based on users' plans, including new applications. Expected growth is grouped under capacity in the map.

**来源：** Week3.pdf · PDF页68 / 幻灯片68；Week3.pdf · PDF页74 / 幻灯片74

### Performance requirements

**旧ID：** csit985-w3-6d21099d5b494d

**中文：** 性能需求；第74页图将用户服务需求归到 Delay、Reliability、Capacity 三组。本图不是逐项严格等价或完整指标体系。

**简单英文：** Technical performance needs. This map groups user needs under delay, reliability, and capacity.

**来源：** Week3.pdf · PDF页74 / 幻灯片74；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符6323起；搜索“metric like capacity, delay or reliability”

### Delay

**旧ID：** csit985-w3-c2d9dc78024b85

**中文：** 时延；映射图中 Timeliness 与 Interactivity 对应的性能项；本周没有正式定义或数值界限。

**简单英文：** A performance measure related to timeliness and interactivity in the map. This week gives no formal definition or limit.

**来源：** Week3.pdf · PDF页71 / 幻灯片71；Week3.pdf · PDF页74 / 幻灯片74

### Capacity

**旧ID：** csit985-w3-abaee16e8fcafb

**中文：** 容量；Rate Critical 关注的性能项。映射图把 Affordability、用户数量、位置及预期增长归入此组；本周未给正式定义。

**简单英文：** A performance measure emphasized by rate-critical applications. The map also connects it with cost, user numbers, locations, and growth.

**来源：** Week3.pdf · PDF页71 / 幻灯片71；Week3.pdf · PDF页74 / 幻灯片74

### Mission-critical applications

**旧ID：** csit985-w3-3cd90b060996a3

**中文：** 任务关键应用；要求可预测、有保证和／或高性能的 RMA。不是要求三者必须同时具备。

**简单英文：** Applications with predictable, guaranteed, and/or high-performance RMA needs.

**来源：** Week3.pdf · PDF页71 / 幻灯片71；Week3.pdf · PDF页46 / 幻灯片46（图表）

### Rate-critical applications

**旧ID：** csit985-w3-e3d3993d40ecd7

**中文：** 速率关键应用；关注可预测、有保证和／或高性能的容量需求。

**简单英文：** Applications with predictable, guaranteed, and/or high-performance capacity needs.

**来源：** Week3.pdf · PDF页71 / 幻灯片71

### Real-time and interactive applications

**旧ID：** csit985-w3-f45e286d60b696

**中文：** 实时和交互应用；关注可预测、有保证和／或高性能的时延需求。与前两类可以重叠。

**简单英文：** Applications with predictable, guaranteed, and/or high-performance delay needs. An application can belong to more than one group.

**来源：** Week3.pdf · PDF页71 / 幻灯片71；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符7544起；搜索“categorize it, categorize it into multiple groups”

### RMA (Reliability, Maintainability, Availability)

**旧ID：** csit985-w3-4b0714f64bbf36

**中文：** 可靠性、可维修性、可用性；Mission Critical 部分介绍的三个相关性能概念。本周没有 RMA 计算公式。

**简单英文：** Three related performance concepts used for mission-critical applications. This week gives no calculation formula.

**来源：** Week3.pdf · PDF页71 / 幻灯片71；Week3.pdf · PDF页72 / 幻灯片72；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符7711起；搜索“reliability, maintainability, and availability”

### Reliability (R)

**旧ID：** csit985-w3-b0d0d378523cf5

**中文：** RMA 中的可靠性；失效频率及非计划停机的统计度量，回答“多久坏一次”。

**简单英文：** A statistical measure of failure frequency and unscheduled outages: how often does it break?

**来源：** Week3.pdf · PDF页72 / 幻灯片72

### Maintainability (M)

**旧ID：** csit985-w3-638468481c52cb

**中文：** 可维修性；修复故障所需时间的统计度量，回答“坏了之后多久恢复上线”。

**简单英文：** A statistical measure of the time needed to repair a fault.

**来源：** Week3.pdf · PDF页72 / 幻灯片72

### Availability (A)

**旧ID：** csit985-w3-349e6b40a9eb39

**中文：** 可用性；第72页定义为 R 与 M 的关系。本周只给关系说明，没有给出公式或百分比算法。

**简单英文：** The relationship between reliability and maintainability. The slide gives no formula here.

**来源：** Week3.pdf · PDF页72 / 幻灯片72

### Application locations

**旧ID：** csit985-w3-9fd45fea90fcf1

**中文：** 应用位置；应用分类、分组后要确定在网络何处，位置会影响流量、链路容量和时延。

**简单英文：** Where applications are placed in the network. Location can change the traffic flow, capacity, and delay needs.

**来源：** Week3.pdf · PDF页73 / 幻灯片73；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符8507起；搜索“where they are located”；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符8760起；搜索“different network demands in very different locations”

### Fast Ethernet / GigE / NICs / BB

**旧ID：** csit985-w3-75191b097e02a5

**中文：** 图表中的网络标签；课件正文将 Fast Ethernet 接到 backbone，图用 BB；GigE NICs 指千兆以太网接口卡。具体标准细节本周未定义。

**简单英文：** Network labels in the example: Fast Ethernet links to the backbone, GigE network interface cards, and BB for backbone. Detailed standards are not defined here.

**来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）；Week3.pdf · PDF页47 / 幻灯片47（图表）

### Workstation

**旧ID：** csit985-w3-9dac7053cbf067

**中文：** 工作站；示例表指工程用户的设备，并列出 GigE NICs。不是课程为所有设备规定的配置。

**简单英文：** A computer used by engineering users in the example. It has GigE NICs in that example.

**来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

### Application session

**旧ID：** csit985-w3-8891de73dc2ec2

**中文：** 应用会话；示例规定 DB1 每个会话至少 5 Mbps。session 在这里是一次应用使用或连接，不是课次。

**简单英文：** One use or connection of an application. DB1 in the example requires at least 5 Mbps per session.

**来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

### Round-trip delay

**旧ID：** csit985-w3-d299555455cf79

**中文：** 往返时延；示例要求小于 50 ms。保留严格小于，不能改成小于等于；本周没有测量方法。

**简单英文：** Delay for a round trip. The example requires less than 50 ms, not 50 ms or less.

**来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

### 100% uptime (active)

**旧ID：** csit985-w3-83b254924aa63b

**中文：** 活动期间百分之百运行；图写 100% uptime active，表写 100% availability。二者的测量时段并未在本周统一说明。

**简单英文：** The map prints 100% uptime active, while the table prints 100% availability. Their measurement period is not specified here.

**来源：** Week3.pdf · PDF页47 / 幻灯片47（图表）；Week3.pdf · PDF页46 / 幻灯片46（图表）

### Generic computing devices

**旧ID：** csit985-w3-f469279e714b62

**中文：** 通用计算设备；课件列台式机、笔记本、手持设备及 WiFi，通常单用户，并有端到端需求。WiFi 并非具体设备名称，原列举保留。

**简单英文：** Common computing devices listed by the slide. They are typically used by one user and have end-to-end needs.

**来源：** Week3.pdf · PDF页75 / 幻灯片75

### Server

**旧ID：** csit985-w3-2bd8b5c6bf34aa

**中文：** 服务器；为一个或更多用户提供服务，会影响信息流。

**简单英文：** A device providing services to one or more users. It affects information flow.

**来源：** Week3.pdf · PDF页76 / 幻灯片76

### Specialized equipment

**旧ID：** csit985-w3-4261b5377b2254

**中文：** 专用设备；课件举 supercomputers、mainframe、data gathering equipment，强调位置依赖。

**简单英文：** Equipment for special work, such as supercomputers, mainframes, and data-gathering equipment. Its location matters.

**来源：** Week3.pdf · PDF页76 / 幻灯片76

### Supercomputers / Mainframe / Data gathering equipment

**旧ID：** csit985-w3-f8b00d06d5e3c7

**中文：** 超级计算机／大型主机／数据采集设备；本周作为 Specialized equipment 的例子，未比较各自架构或具体性能。

**简单英文：** Three examples of specialized equipment. The lecture does not compare their architectures or exact performance.

**来源：** Week3.pdf · PDF页76 / 幻灯片76

### Storage / Processor / Memory / Bus performance

**旧ID：** csit985-w3-9819515901b911

**中文：** 存储／处理器／内存／总线性能；设备性能的四组特征。课件对内存特别标注 access times，未给具体测量公式。

**简单英文：** Four device performance characteristics. Memory performance includes access times; no detailed formulas are given.

**来源：** Week3.pdf · PDF页77 / 幻灯片77

### CPU / GPU

**旧ID：** csit985-w3-92c319cb0820a8

**中文：** 中央处理器／图形处理器；教师在设备性能讲解中提到。缩写展开与基本中文名属必要基础释义，指定资料没有正式定义或性能参数。

**简单英文：** Processor names used by the teacher: central processing unit and graphics processing unit. The supplied material gives no formal definitions or specifications.

**来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符10320起；搜索“the CPU”；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符10378起；搜索“GPU memory”

### Scaling dependencies

**旧ID：** csit985-w3-cd8a17f5c1d4bf

**中文：** 规模扩展依赖；网络设计要考虑的依赖之一。资料没有单独定义或数值上限。

**简单英文：** Dependencies that matter when the network grows. The slide names them but gives no separate definition or limit.

**来源：** Week3.pdf · PDF页78 / 幻灯片78

### Location dependencies

**旧ID：** csit985-w3-b6971f1e157d8e

**中文：** 位置依赖；需求或选择受应用、设备、网络所在位置影响。

**简单英文：** Needs or design choices that depend on where applications, devices, or networks are located.

**来源：** Week3.pdf · PDF页45 / 幻灯片45；Week3.pdf · PDF页76 / 幻灯片76；Week3.pdf · PDF页78 / 幻灯片78

### Performance constraints

**旧ID：** csit985-w3-ae1661b9eff123

**中文：** 性能限制；现有网络可能限制设计可达到的性能。课件没有具体阈值。

**简单英文：** Limits on performance that the design must consider in existing networks.

**来源：** Week3.pdf · PDF页78 / 幻灯片78；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符10857起；搜索“performance constraints”

### Network, system and support service dependencies

**旧ID：** csit985-w3-455e8a6c6b3d44

**中文：** 网络、系统和支持服务依赖；现有环境中的关联条件，设计时必须纳入；本周未展开各项定义。

**简单英文：** Dependencies involving the network, system, and support services. They must be included when considering existing networks.

**来源：** Week3.pdf · PDF页78 / 幻灯片78

### Interoperability dependencies

**旧ID：** csit985-w3-4201654f87c458

**中文：** 互操作依赖；与不同网络或系统能否共同工作有关的设计条件。课件只列名称。

**简单英文：** Dependencies related to whether different systems can work together. The slide only names this item.

**来源：** Week3.pdf · PDF页78 / 幻灯片78

### Network obsolescence

**旧ID：** csit985-w3-84e6aea0e64d1b

**中文：** 网络老化／过时；现有网络设计需要考虑的项目。并非简单指设备年龄大，也不等于所有旧网络必须立即更换。

**简单英文：** The network becoming outdated. The slide lists this as a design consideration without giving a replacement rule.

**来源：** Week3.pdf · PDF页78 / 幻灯片78

### Scalability

**旧ID：** csit985-w3-a6888b31e60f00

**中文：** 可扩展性；教师在 future growth 中提到更多用户、站点和新应用时的扩展问题；未给具体扩展上限。

**简单英文：** The ability to cope with growth in users, sites, and applications. The transcript gives no numerical limit.

**来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符5423起；搜索“we also talk about scalability”

### Identity system / Access control / Encryption

**旧ID：** csit985-w3-85fb1454699a1d

**中文：** 身份系统／访问控制／加密；教师说安全需求可能影响这些方面。本周未给单项正式定义，分别是识别身份、限制访问、将信息转换为受保护形式。

**简单英文：** Ways to identify users, control access, and protect information by encryption. They are only named in this lecture.

**来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符4266起；搜索“identity system, access control, and encryption”

### Prior to

**旧ID：** csit985-w3-35b09754f3934c

**中文：** 在……之前；标题表示在 Network Analysis 开始前。

**简单英文：** Before something.

**来源：** Week3.pdf · PDF页5 / 幻灯片5

### optimize / expand / integrate with

**旧ID：** csit985-w3-86cf6312b33fd1

**中文：** 优化／扩展／与……整合；第6页对现有网络的三种不同操作，不是三个同义词。

**简单英文：** Improve performance; make something larger; connect parts into a working whole.

**来源：** Week3.pdf · PDF页6 / 幻灯片6

### be committed to

**旧ID：** csit985-w3-1a0549b05ba433

**中文：** 致力于／认真投入；不仅口头表示支持，还愿意付出时间和努力。

**简单英文：** Be willing to give serious time and effort to something.

**来源：** Week3.pdf · PDF页9 / 幻灯片9；Week3.pdf · PDF页31 / 幻灯片31

### in terms of

**旧ID：** csit985-w3-93c39d9a3196d6

**中文：** 从……方面衡量；本句问规划在时间和人力付出上的成本。

**简单英文：** When considering a particular kind of cost or measure.

**来源：** Week3.pdf · PDF页9 / 幻灯片9

### personnel effort

**旧ID：** csit985-w3-4b17382bc968dc

**中文：** 人员付出的工作和精力；personnel 指员工或人员，不是 personal（个人的）。

**简单英文：** The work and effort contributed by staff.

**来源：** Week3.pdf · PDF页9 / 幻灯片9

### overriding crises / inhibit

**旧ID：** csit985-w3-6bcb5bed97d67a

**中文：** 压倒其他事项的危机／阻碍；问哪些重大危机会妨碍规划能力。

**简单英文：** Major urgent problems that can prevent or limit planning.

**来源：** Week3.pdf · PDF页10 / 幻灯片10

### serve a purpose

**旧ID：** csit985-w3-133e4bf810adaf

**中文：** 起某种作用／达到某种目的；课件倒装为 What purpose will ... serve?。

**简单英文：** Be useful for a particular reason.

**来源：** Week3.pdf · PDF页9 / 幻灯片9

### Driving Force

**旧ID：** csit985-w3-951d0cfc04ddb4

**中文：** 推动力量；在规划图中与 Vision、Mission 并列，指推动组织前进的因素。

**简单英文：** Something that strongly motivates the organization or its direction.

**来源：** Week3.pdf · PDF页12 / 幻灯片12

### Vision / Mission

**旧ID：** csit985-w3-bb4150fe39ace5

**中文：** 愿景／使命；图中分别用于组织希望的未来和存在目的，不能都译成“目标”。资料没有分别给正式定义。

**简单英文：** The desired future; the purpose of the organization. The slides name both but do not formally define them.

**来源：** Week3.pdf · PDF页12 / 幻灯片12；Week3.pdf · PDF页38 / 幻灯片38

### Value / Climate / Culture

**旧ID：** csit985-w3-df9b239e4b830f

**中文：** 价值观／组织氛围／文化；第13页解释组织如何做事。Climate 此处不是天气。

**简单英文：** What matters to the organization, the atmosphere of work, and shared ways of working.

**来源：** Week3.pdf · PDF页13 / 幻灯片13；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符4657起；搜索“value, the climate”

### Strengths / Weaknesses / Opportunities / Threats

**旧ID：** csit985-w3-393351420ca2d1

**中文：** 优势／弱点／机会／威胁；图中用于了解现状。TXT 写 SWAT，疑似转写，课件没有写出该缩写。

**简单英文：** Good points, weak points, possible benefits, and possible dangers in the current situation.

**来源：** Week3.pdf · PDF页14 / 幻灯片14；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符5164起；搜索“SWAT, uh, model”

### Constraints

**旧ID：** csit985-w3-a80d6e67ad8197

**中文：** 约束条件；限制选择的条件，与 competition（竞争）并列分析现状。

**简单英文：** Conditions that limit what can be done.

**来源：** Week3.pdf · PDF页14 / 幻灯片14；Week3.pdf · PDF页78 / 幻灯片78

### Co-Ordination

**旧ID：** csit985-w3-d0eb12c4b220bf

**中文：** 协调；不同人和工作配合起来。保留课件 Co-Ordination 拼写；通常也写 coordination。

**简单英文：** Organize people and work so that they fit together.

**来源：** Week3.pdf · PDF页18 / 幻灯片18

### Milestones

**旧ID：** csit985-w3-86ae73d11d6722

**中文：** 里程碑；用来检查计划推进到重要阶段的标志，不是每一个小任务。

**简单英文：** Important points used to check progress in a plan.

**来源：** Week3.pdf · PDF页18 / 幻灯片18；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符6819起；搜索“a milestone to check”

### ends and means

**旧ID：** csit985-w3-80c7a6997846f0

**中文：** 目标与手段；ends 指想实现的结果，means 指用来实现结果的方式或资源。

**简单英文：** The results wanted and the methods or resources used to reach them.

**来源：** Week3.pdf · PDF页19 / 幻灯片19

### formulate / carry out a course of action

**旧ID：** csit985-w3-8dd85d5ed639fa

**中文：** 制定／执行行动方案；保留 formulate 在先、carry out 在后的关系。

**简单英文：** Plan an approach, then put it into action.

**来源：** Week3.pdf · PDF页19 / 幻灯片19

### attain an objective

**旧ID：** csit985-w3-5152269ba806f7

**中文：** 实现目标；attain 比 get 更正式。

**简单英文：** Reach a particular goal.

**来源：** Week3.pdf · PDF页19 / 幻灯片19

### deploy / employ resources

**旧ID：** csit985-w3-8810da567cc470

**中文：** 部署／运用资源；第19–20页用这组差别解释 strategy 与 tactics。Employ 此处不是雇佣。

**简单英文：** Place or assign resources; use those resources.

**来源：** Week3.pdf · PDF页19 / 幻灯片19；Week3.pdf · PDF页20 / 幻灯片20

### at your disposal

**旧ID：** csit985-w3-363d29460791b4

**中文：** 可供你使用；这里指手中可调配的资源，不是“丢弃”。

**简单英文：** Available for you to use.

**来源：** Week3.pdf · PDF页19 / 幻灯片19

### bridge the gap between

**旧ID：** csit985-w3-8e3aff5f51da1a

**中文：** 弥合……之间的差距／把两端联系起来；课件指目标与手段。

**简单英文：** Connect two things that are separated.

**来源：** Week3.pdf · PDF页19 / 幻灯片19

### narrowly focused / ongoing guidance

**旧ID：** csit985-w3-184a87f38a2d73

**中文：** 聚焦于小范围／持续的一般指导；表中前者对应 tactics，后者对应 strategy。

**简单英文：** Directed at a small, specific area; guidance that continues over time.

**来源：** Week3.pdf · PDF页20 / 幻灯片20

### adaptable / fluid / hastily changed

**旧ID：** csit985-w3-905bf8760a9111

**中文：** 能调整的／灵活变动的／仓促改变；战略可适应，但不宜仓促改；战术可快速调整。

**简单英文：** Able to adapt; able to change quickly; changed too quickly without enough care.

**来源：** Week3.pdf · PDF页20 / 幻灯片20

### manageable

**旧ID：** csit985-w3-b3afbee7dcf6f2

**中文：** 容易管理的／能控制的；规划要简洁且能执行，不表示内容可以随意省略。

**简单英文：** Possible to organize and control without too much difficulty.

**来源：** Week3.pdf · PDF页21 / 幻灯片21

### consultants / support staff

**旧ID：** csit985-w3-afa2979f9722c5

**中文：** 顾问／支持人员；第21页说不要把规划任务交出去，不是说完全不能获得顾问帮助。第32页允许在缺乏经验时借助外部专业支持。

**简单英文：** Advisers and staff who support the main work. The slides allow outside help while keeping leaders involved.

**来源：** Week3.pdf · PDF页21 / 幻灯片21；Week3.pdf · PDF页32 / 幻灯片32

### emphasize creativity, innovation, and imagination

**旧ID：** csit985-w3-05b69f114e26e6

**中文：** 重视创造力、创新和想象力；相对的是盲目按固定步骤走。

**简单英文：** Give special importance to new ideas and ways of thinking.

**来源：** Week3.pdf · PDF页22 / 幻灯片22

### adopt / implement a strategy

**旧ID：** csit985-w3-43a2a31ea96210

**中文：** 采用／实施策略；选择策略前，要仔细考虑将如何落实。

**简单英文：** Choose a strategy; put that strategy into practice.

**来源：** Week3.pdf · PDF页22 / 幻灯片22

### not an end in itself

**旧ID：** csit985-w3-a166aedc80004b

**中文：** 本身不是最终目的；战略规划是帮助组织完成使命的工具。

**简单英文：** Something is useful because it helps reach another goal; it is not the final goal.

**来源：** Week3.pdf · PDF页22 / 幻灯片22

### accomplish its mission

**旧ID：** csit985-w3-28dc4e5c4c0b85

**中文：** 完成其使命；accomplish 表示成功完成。

**简单英文：** Successfully do what the organization exists to do.

**来源：** Week3.pdf · PDF页22 / 幻灯片22

### pitfalls

**旧ID：** csit985-w3-7c3775de26fadb

**中文：** 容易掉进去的陷阱／常见失误；这里指规划中看似合理却会出问题的做法。

**简单英文：** Common problems or mistakes that can cause failure.

**来源：** Week3.pdf · PDF页23 / 幻灯片23；Week3.pdf · PDF页24 / 幻灯片24；Week3.pdf · PDF页25 / 幻灯片25；Week3.pdf · PDF页26 / 幻灯片26

### primarily on the basis of

**旧ID：** csit985-w3-dee952f3752756

**中文：** 主要依据……；陷阱是过度依靠统计和财务预测，不是完全禁止使用数据。

**简单英文：** Mainly using something as the reason for a decision.

**来源：** Week3.pdf · PDF页23 / 幻灯片23

### projections / forecasts

**旧ID：** csit985-w3-a702ba0d7f583d

**中文：** 预测／推算；本句是统计和财务数据对未来的估计，不是投影图像。

**简单英文：** Estimates of what may happen in the future.

**来源：** Week3.pdf · PDF页23 / 幻灯片23

### branch / corporate office

**旧ID：** csit985-w3-7009a671b32de6

**中文：** 分支机构／公司总部；规划资料被发往各分支，再回到总部。

**简单英文：** A local part of a company; the main company office.

**来源：** Week3.pdf · PDF页23 / 幻灯片23

### business days

**旧ID：** csit985-w3-95f654e75d3995

**中文：** 工作日；原例要求 10 个工作日内返还表格，不是 10 个自然日。

**简单英文：** Working days, rather than every calendar day.

**来源：** Week3.pdf · PDF页23 / 幻灯片23

### roll out

**旧ID：** csit985-w3-c934f14b71d1c6

**中文：** 推出／开始在组织内实施；原句为推出新的全公司长期规划流程。

**简单英文：** Introduce a new process or system for use.

**来源：** Week3.pdf · PDF页24 / 幻灯片24

### incentive packages tied to short-term results

**旧ID：** csit985-w3-2e7651d8f6daa7

**中文：** 与短期结果挂钩的激励方案；课件指出长期规划上线，却保留短期奖励，可能相互冲突。

**简单英文：** Rewards that depend on short-term results, even while the company asks for long-term planning.

**来源：** Week3.pdf · PDF页24 / 幻灯片24

### regulators / payers / sales force

**旧ID：** csit985-w3-7c59a53eb82136

**中文：** 监管者／付款方／销售队伍；列在“不要把差战略表现归咎于外部或其他群体”的例子中。

**简单英文：** Groups that regulate, pay, or sell. The slide warns against blaming these groups for poor strategy results.

**来源：** Week3.pdf · PDF页24 / 幻灯片24

### line managers / downsizing

**旧ID：** csit985-w3-352cd121408ebb

**中文：** 一线业务管理者／缩减组织或裁员；先训练管理者建设未来，再削减人员资源，是课件列出的陷阱。

**简单英文：** Managers responsible for everyday work; reducing the size or staff of an organization.

**来源：** Week3.pdf · PDF页25 / 幻灯片25；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符10907起；搜索“when you do downsizing”

### rival / acquisition

**旧ID：** csit985-w3-28564a086c2262

**中文：** 竞争对手／收购；从已收购的前竞争对手照搬策略。Acquisition 此处是企业收购。

**简单英文：** A competitor; buying another business.

**来源：** Week3.pdf · PDF页25 / 幻灯片25

### inspire / engage frontline staff

**旧ID：** csit985-w3-79abc0ab680e3b

**中文：** 激励／让一线员工投入；愿景若不能让实际执行工作的人员参与，就难发挥作用。

**简单英文：** Encourage staff and make them interested in taking part.

**来源：** Week3.pdf · PDF页26 / 幻灯片26

### let go of the past

**旧ID：** csit985-w3-796521f711f4f7

**中文：** 放下对过去的执着；课件批评因为喜欢今天，就要求明天保持原样。不是叫人忘记经验。

**简单英文：** Stop holding too tightly to old ways so future changes are possible.

**来源：** Week3.pdf · PDF页26 / 幻灯片26

### self interest / social norms

**旧ID：** csit985-w3-1879e172e50476

**中文：** 自身利益／社会规范；第27页前两种变革策略分别采用的假设。

**简单英文：** What benefits a person; shared rules about acceptable behavior.

**来源：** Week3.pdf · PDF页27 / 幻灯片27

### redefine / reinterpret

**旧ID：** csit985-w3-6d0946b82ef489

**中文：** 重新定义／重新理解；原表说重释已有规范，并对新规范建立认同。

**简单英文：** Give a new definition; understand something in a new way.

**来源：** Week3.pdf · PDF页27 / 幻灯片27

### compliant / coercive

**旧ID：** csit985-w3-cc37b409c0448b

**中文：** 服从的／带强制性的；用于 Power-Coercive 策略的描述，不是课程在要求读者服从。

**简单英文：** Willing to obey; using pressure or authority to make people act.

**来源：** Week3.pdf · PDF页27 / 幻灯片27

### the exercise of authority / the imposition of sanctions

**旧ID：** csit985-w3-383ebb81cbd519

**中文：** 行使权威／施加制裁；exercise 此处是“运用”，不是运动。sanctions 此处是惩罚或限制，不是批准。

**简单英文：** Using authority; applying penalties or restrictions.

**来源：** Week3.pdf · PDF页27 / 幻灯片27

### oppose loss/disruption / adapt readily

**旧ID：** csit985-w3-7fd518dc97c437

**中文：** 反对损失或扰动／容易适应；Environmental-Adaptive 的两部分假设，必须一起保留。

**简单英文：** Resist loss or major change, but adjust easily to a new situation.

**来源：** Week3.pdf · PDF页27 / 幻灯片27

### degree of resistance

**旧ID：** csit985-w3-353da7ded34c81

**中文：** 阻力程度；根据抵制改变的强弱，课件建议不同策略组合。

**简单英文：** How strongly people resist a change.

**来源：** Week3.pdf · PDF页28 / 幻灯片28

### target population

**旧ID：** csit985-w3-85b66ccf9699e2

**中文：** 目标人群；这里是策略要影响的人群，不是网络数据包的目的地址。

**简单英文：** The group of people a strategy is intended to affect.

**来源：** Week3.pdf · PDF页28 / 幻灯片28

### the stakes / high stakes

**旧ID：** csit985-w3-d601c70e593eb9

**中文：** 利害程度／高风险、高重要性；失败或成功的后果很重要。TXT 的 steak 疑似同音转写。

**简单英文：** How much can be gained or lost; important consequences.

**来源：** Week3.pdf · PDF页29 / 幻灯片29；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符13323起；搜索“the steak”

### leave nothing to chance

**旧ID：** csit985-w3-6abe4ff712ffd2

**中文：** 不让任何重要结果仅靠运气；课件对高利害情境建议四种策略混用。

**简单英文：** Plan carefully so important outcomes do not depend only on luck.

**来源：** Week3.pdf · PDF页29 / 幻灯片29；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符13480起；搜索“we don't leave important outcomes to chance”

### time frame

**旧ID：** csit985-w3-f8b04a3ee03ade

**中文：** 时间范围／可用期限；时间短和较长时，课件建议的策略不同。

**简单英文：** The period available for an activity or change.

**来源：** Week3.pdf · PDF页29 / 幻灯片29

### expertise / Change Agents

**旧ID：** csit985-w3-8bb90b9869d4d1

**中文：** 专业经验与知识／推动变革的人；按变革推动者的专长选择策略组合。

**简单英文：** Special knowledge and experience; people who help bring about change.

**来源：** Week3.pdf · PDF页30 / 幻灯片30

### mutual dependency / negotiation

**旧ID：** csit985-w3-e2de9743585b5d

**中文：** 相互依赖／协商；双方互相依赖时需要协商。谁依赖谁，会影响其控制或抵抗能力。

**简单英文：** Both sides depend on each other; they need to discuss and agree on a way forward.

**来源：** Week3.pdf · PDF页30 / 幻灯片30

### call for

**旧ID：** csit985-w3-8566b16d6b9eb0

**中文：** 需要／要求；planning design calls for a small team 不是“打电话给团队”。

**简单英文：** Require something.

**来源：** Week3.pdf · PDF页31 / 幻灯片31

### input / have a stake in

**旧ID：** csit985-w3-6119ec2e7a323d

**中文：** 各方提供的意见／与……有利害关系；意见应来自整个组织，让成员关心过程和结果。

**简单英文：** Ideas contributed to planning; having an interest in the outcome.

**来源：** Week3.pdf · PDF页31 / 幻灯片31

### peers

**旧ID：** csit985-w3-0b846a2d35ba5e

**中文：** 同级同事／同行；团队成员要得到同伴尊重。这里不是 peer-to-peer 网络节点。

**简单英文：** People at a similar level or in a similar role.

**来源：** Week3.pdf · PDF页31 / 幻灯片31

### initial orientation / a jump start

**旧ID：** csit985-w3-22bf6d1d094076

**中文：** 初步引导／帮助快速起步；全员没有规划经验时，外部专业帮助可能有用。

**简单英文：** An introduction to the process; help that gets the work started quickly.

**来源：** Week3.pdf · PDF页32 / 幻灯片32

### authorize / chief executive / board chair

**旧ID：** csit985-w3-59ccb73b356660

**中文：** 正式批准／最高执行负责人／董事会主席；前者是批准权，后两者是参与规划的领导角色。

**简单英文：** Give official approval; the top executive; the chair of the board.

**来源：** Week3.pdf · PDF页33 / 幻灯片33；Week3.pdf · PDF页34 / 幻灯片34

### board of directors / executive committee

**旧ID：** csit985-w3-f01211bbac7278

**中文：** 董事会／执行委员会；董事会应参与战略规划，规划委员会常与执行委员会相同，但课件保留 often，不是必然。

**简单英文：** A group responsible for directing the organization; a smaller executive group.

**来源：** Week3.pdf · PDF页35 / 幻灯片35

### stakeholders

**旧ID：** csit985-w3-75dd72050b50b0

**中文：** 利益相关者；受计划影响或能影响计划的人。课件要求尽可能广泛参与，但不是人人作出每项决定。

**简单英文：** People with an interest in or influence on the plan.

**来源：** Week3.pdf · PDF页36 / 幻灯片36；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符18628起；搜索“everybody kind of makes every decision”

### compose / administrate the process

**旧ID：** csit985-w3-cccef4386f9e4a

**中文：** 撰写／管理流程；前者编写计划，后者安排会议、记录信息和跟进准备工作。

**简单英文：** Write the plan; organize and manage the planning process.

**来源：** Week3.pdf · PDF页37 / 幻灯片37

### monitoring status of pre-work

**旧ID：** csit985-w3-3548e13bf98586

**中文：** 跟进前期准备工作的状态；不是网络监测数据的专门定义。

**简单英文：** Check how preparation work is progressing.

**来源：** Week3.pdf · PDF页37 / 幻灯片37

### address the issues / meet the goals

**旧ID：** csit985-w3-6eced81884af68

**中文：** 处理问题／实现目标；address 在这里是动词，不是地址。meet 不是“遇见”。

**简单英文：** Deal with the problems; reach the goals.

**来源：** Week3.pdf · PDF页39 / 幻灯片39

### derive requirements

**旧ID：** csit985-w3-a36cab5feb2527

**中文：** 推导需求；从用户信息或应用特性得出要求，与直接 gathered from（收集自）区分。

**简单英文：** Work out requirements from information, rather than only recording requests directly.

**来源：** Week3.pdf · PDF页44 / 幻灯片44；Week3.pdf · PDF页46 / 幻灯片46（图表）

### be deemed necessary / desirable

**旧ID：** csit985-w3-fa3a90ca26d2b3

**中文：** 被认为必要的／可取的、希望具备的；前者是核心需求，后者可较晚安装。

**简单英文：** Be considered needed; be useful or wanted.

**来源：** Week3.pdf · PDF页49 / 幻灯片49

### relative importance

**旧ID：** csit985-w3-bc77d1b87cfb20

**中文：** 相对重要性；比较各项要求的强度或重要程度。

**简单英文：** How important one item is compared with another.

**来源：** Week3.pdf · PDF页50 / 幻灯片50

### be overlooked / no immediate payoff

**旧ID：** csit985-w3-aaaf6c2898a7a1

**中文：** 被忽视／没有立刻可见的回报；课件说需求分析常被忽略，而且“看起来”没有立即收益，不能理解为实际无价值。

**简单英文：** Be missed or ignored; appear to give no quick benefit.

**来源：** Week3.pdf · PDF页53 / 幻灯片53；Week3.pdf · PDF页55 / 幻灯片55

### objective / informed choices

**旧ID：** csit985-w3-f268a4047ffd50

**中文：** 客观的／基于充分信息的选择；objective 在第54–55页是形容词，第19页 an objective 则是名词“目标”。

**简单英文：** Choices based on requirements and information rather than personal preference.

**来源：** Week3.pdf · PDF页54 / 幻灯片54；Week3.pdf · PDF页55 / 幻灯片55；Week3.pdf · PDF页19 / 幻灯片19

### vendor

**旧ID：** csit985-w3-7cb98703d49ed0

**中文：** 供应商；课件警告不要仅按某个供应商或熟悉的技术做设计。

**简单英文：** A company supplying a product or service.

**来源：** Week3.pdf · PDF页54 / 幻灯片54

### be sized to

**旧ID：** csit985-w3-502ae885df5d84

**中文：** 根据……确定规模／容量；按用户和应用需要设定网络及元素大小，不是只量物理尺寸。

**简单英文：** Choose a suitable scale or capacity based on the needs.

**来源：** Week3.pdf · PDF页55 / 幻灯片55

### tradeoffs / with the Big Picture in mind

**旧ID：** csit985-w3-2cc575955a6027

**中文：** 权衡／把整体情况放在心上；决定某项选择时，要同时考虑整体目标和其他影响。

**简单英文：** Balance competing needs while considering the whole situation.

**来源：** Week3.pdf · PDF页55 / 幻灯片55；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符7562起；搜索“very sensible like trade-offs”

### configurable / measurable / verifiable

**旧ID：** csit985-w3-c3a8215e7d61d9

**中文：** 可配置／可测量／可验证；三个不同要求：能设置、能测性能、能检查是否满足需求。

**简单英文：** Can be set, measured, and checked against what was requested.

**来源：** Week3.pdf · PDF页58 / 幻灯片58；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符8514起；搜索“configurable, measurable, and verifiable”

### hierarchical / entities

**旧ID：** csit985-w3-24175ffd2ee407

**中文：** 有层次的／实体；服务通常分层，各用户、应用、设备及网络等实体贡献需求。

**简单英文：** Arranged in levels; the different parts or participants in the network.

**来源：** Week3.pdf · PDF页59 / 幻灯片59

### service offerings / build on each other

**旧ID：** csit985-w3-111b742461fa05

**中文：** 提供的服务／在彼此基础上累积；从用户向网络深入时，需求层层增加。

**简单英文：** The services provided; requirements add to earlier requirements as the analysis moves toward the network.

**来源：** Week3.pdf · PDF页60 / 幻灯片60；CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符963起；搜索“requirements build on each other”

### mismatch / result in

**旧ID：** csit985-w3-91e3a7bb329cf4

**中文：** 不匹配／导致；服务能力不匹配可能导致瓶颈。保留 can，不是每次都必然发生。

**简单英文：** Parts do not fit well; cause a result. The slide says a mismatch can cause a bottleneck.

**来源：** Week3.pdf · PDF页61 / 幻灯片61

### consistent / perception / subjective

**旧ID：** csit985-w3-e3f22647999fed

**中文：** 一致稳定的／感知／主观的；用户感受到的质量和要求，不等同于已测量的技术指标。

**简单英文：** Staying similar; how a user sees quality; based on personal experience or judgment.

**来源：** Week3.pdf · PDF页65 / 幻灯片65；Week3.pdf · PDF页69 / 幻灯片69

### fit within a budget / be tied to applications

**旧ID：** csit985-w3-e147feec57b76e

**中文：** 在预算之内／与应用相关；fit 和 tied to 均是完整用法，不按字面译为“塞入”“捆绑”。

**简单英文：** Stay within the money available; be closely connected with applications.

**来源：** Week3.pdf · PDF页67 / 幻灯片67

### the full range of mission scenarios

**旧ID：** csit985-w3-4202adc1916a9e

**中文：** 全部任务场景范围；支持性要覆盖客户描述的整个范围，不能只保留一两个正常场景。

**简单英文：** All the mission situations described by the customer.

**来源：** Week3.pdf · PDF页68 / 幻灯片68

### couple ... to ... / span

**旧ID：** csit985-w3-a692a3b9fbb6b5

**中文：** 把……连接到……／跨越、覆盖；应用连接用户与设备到网络，端到端需求覆盖网络路径。

**简单英文：** Connect things; extend across the network.

**来源：** Week3.pdf · PDF页70 / 幻灯片70

### and/or

**旧ID：** csit985-w3-b559bcde3b4d00

**中文：** 和／或；可符合其中一项，也可同时符合多项。第71页不能改成“三项全部要求”。

**简单英文：** One or more of the listed conditions can apply.

**来源：** Week3.pdf · PDF页71 / 幻灯片71

### unscheduled outages / repair the fault

**旧ID：** csit985-w3-3d825a772c40f1

**中文：** 非计划停机／修复故障；与计划维护区分，repair 强调恢复故障设备或系统。

**简单英文：** Unexpected periods when the system is unavailable; fix the problem.

**来源：** Week3.pdf · PDF页72 / 幻灯片72

### get back online

**旧ID：** csit985-w3-bb7eb422ee6912

**中文：** 恢复上线／恢复可用；第72页问故障后需要多久，不是指用户重新登录。

**简单英文：** Return to a working, connected state.

**来源：** Week3.pdf · PDF页72 / 幻灯片72

### the last foot

**旧ID：** csit985-w3-55d1bd6c6b0390

**中文：** 最后一小段连接；第75页引号中的比喻，强调靠近终端的接入，不是在给出精确一英尺长度。

**简单英文：** The final part close to the end device. It is a phrase in quotation marks, not an exact distance here.

**来源：** Week3.pdf · PDF页75 / 幻灯片75

### typically / one or more / tend to

**旧ID：** csit985-w3-8a4b1b0f632940

**中文：** 通常／一个或更多／往往；分别限制通用设备用户数、服务器服务人数及“易被忽略”的频率，不能改成绝对判断。

**简单英文：** Usually; at least one; often show a pattern. These expressions limit how strong the statements are.

**来源：** Week3.pdf · PDF页75 / 幻灯片75；Week3.pdf · PDF页76 / 幻灯片76

### payroll / inventory / visualization

**旧ID：** csit985-w3-5f16826e1ee757

**中文：** 薪资核算／库存／可视化；图表中三个应用的工作内容，不是三种网络协议。

**简单英文：** Work involving wages, stock records, or visual displays of information.

**来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）；Week3.pdf · PDF页47 / 幻灯片47（图表）

### manufacturing / engineering / lobby area

**旧ID：** csit985-w3-5ab1f78b15099f

**中文：** 制造业务／工程业务／大堂区域；地图中的用户部门和地点标签。

**简单英文：** Departments and a location shown in the requirement map.

**来源：** Week3.pdf · PDF页47 / 幻灯片47（图表）

### a minimum of / up to / per session

**旧ID：** csit985-w3-a528192f0d8de0

**中文：** 至少／最高到／每个会话；示例分别要求每会话至少 5 Mbps，以及需支持最高到 1 Gbps 的容量需求。不能理解为整个网络最多只能有 1 Gbps。

**简单英文：** A minimum amount; as much as the stated amount; for each session. The example needs support for up to 1 Gbps, without setting a maximum for the whole network.

**来源：** Week3.pdf · PDF页46 / 幻灯片46（图表）

### TBD (to be determined)

**旧ID：** csit985-w3-2de1186ac10c7f

**中文：** 待确定；示例表大量使用 TBD，表示值尚未确定，不表示没有要求。缩写展开为必要基础释义，原表只写 TBD。

**简单英文：** Still to be decided. It does not mean that there is no requirement.

**来源：** Week3.pdf · PDF页52 / 幻灯片52（图表）

### on the shelf

**旧ID：** csit985-w3-691442857fbcad

**中文：** 搁置不用；教师说组织不支持或不用规划结果，计划就成了架子上的文档。

**简单英文：** A plan exists but is not used.

**来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符3325起；搜索“a document on the shelf”

### from a networking perspective

**旧ID：** csit985-w3-f1a701dbe187e2

**中文：** 从网络角度看；教师用它区分一般业务现状与容量、旧设备、安全等网络问题。

**简单英文：** Looking at the situation from the view of network needs.

**来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符5583起；搜索“from a networking perspective”

### resort to

**旧ID：** csit985-w3-baa0c7026a539d

**中文：** 求助于／不得不借助；团队没人有规划经验时，可以寻求外部支持。

**简单英文：** Use a source of help when other options are limited.

**来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符15155起；搜索“resort to some outside support”

### take part in / contribute

**旧ID：** csit985-w3-b5187471e1bbbc

**中文：** 参与／提供意见或贡献；教师强调给成员贡献意见的机会有助于获得支持。

**简单英文：** Join an activity; add useful ideas or work.

**来源：** CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符15578起；搜索“take part directly in planning”；CSIT985_Lecture3-transcript.txt · TXT原始L2，本行字符14708起；搜索“a chance to, to, to contribute”

### under review

**旧ID：** csit985-w3-31d23cc8600ae7

**中文：** 正在审查、尚未完成判断；优先级高的需求也可能还在审查中。

**简单英文：** Still being checked before a final decision.

**来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符5680起；搜索“very important, but still, still be some like under review”

### reduce ambiguity

**旧ID：** csit985-w3-5a3e325b6f7ab6

**中文：** 减少歧义；认真且一致地使用需求关键词，减少多种理解。

**简单英文：** Make the meaning less open to different interpretations.

**来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符5175起；搜索“reduce uh ambiguity”；CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符5229起；搜索“carefully and consistently”

### comfort zone

**旧ID：** csit985-w3-1d934d0b40b2a0

**中文：** 舒适区；教师批评只凭个人熟悉偏好作设计，应依据证据和需求。

**简单英文：** A situation or choice that feels familiar and easy.

**来源：** CSIT985_Lecture3-transcript.txt · TXT原始L8，本行字符7178起；搜索“personal comfort zone”

### translate ... into measurable needs

**旧ID：** csit985-w3-45c153206c6799

**中文：** 把……转成可测需求；例如把“视频要清楚”的用户表达转为性能指标。translate 在这里不是把中文翻成英文。

**简单英文：** Turn a user's statement into requirements that can be measured.

**来源：** CSIT985_Lecture3-transcript.txt · TXT原始L14，本行字符6221起；搜索“translate such a statement or intent or requirement to a very measurable needs”
