# CSIT985 Week6 词汇

由本周可读JSON自动生成。原文与整理说明分开；跨周条目保留全部来源和不同义项。原PDF及完整录音TXT不在网站中。

## 重要疑点与来源限制

**位置：** PDF页2

**说明：** 资料对应已核对：Week6a.pdf共49页（Network Architecture）、Week6b.pdf共52页（Security and Privacy Architecture）；两份均为CSIT985 Spring 2026。CSIT985_Lecture6_-transcript.txt原始L2先讲架构，再转安全与隐私，与两份课件对应；文件名中Lecture6后的下划线原样保留。以下PDF页码必须结合文件名；除特别注明外PDF页码与幻灯片编号相同。

**位置：** PDF页10,19

**说明：** Week6a.pdf第10页把In Depth合写为InDepth；第19页有may need to enforces和Polices等疑似拼写／语法笔误。按语境解释但原文保留，不把它们作为新的术语。

**位置：** PDF页33,34,35,36

**说明：** Week6a.pdf关于安全增加使性能下降、in-band管理与用户流竞争、routing/performance coupled或decoupled，是本讲架构权衡说明。TXT强调依需求选择位置与机制，不能推广为任何安全机制必定导致同样性能下降。

**位置：** PDF页20,24

**说明：** Week6b.pdf第20页威胁工作表示例：Effect A=Destructive、B=Disabling、C=Disruptive、D=No Impact；Likelihood A=Certain、B=Likely、C=Unlikely、D=Impossible。每格Effect/Likelihood两字母顺序必须保留，不能当作一个统一A–D风险分数。第24页open/closed network是策略哲学示例，资料没有说任一种总是正确。

**位置：** PDF页27,28,35

**说明：** Week6b.pdf第27页Authentication of identify疑似identity；第28页What data gets back up疑似backed up；第35页on the basic of疑似basis of。原文不默改。

**位置：** PDF页36,37

**说明：** Week6b.pdf第36页把Private key（举DES/triple DES）与PKI并列为两类，未解释二者的概念层次；第37页E/D性能下降15–85%未给环境、测试方法或依据。仅作为课件内容，不是当前安全算法推荐或普遍性能保证。

**位置：** PDF页38,39

**说明：** Week6b.pdf写Static NAT one-one、Dynamic NAT one-to-many，第39页示例同时改地址与端口；Week7.pdf第21页另列NAPT，Week7 TXT原始L2以地址池选择描述dynamic NAT。命名／层次有差异，NAT、dynamic映射和port translation不能默认为完全同义。

**位置：** TXT

**说明：** Week6 TXT原始L2有land/man/one、inbound、NIT、Integrated等疑似LAN/MAN/WAN、in-band、NAT、integrity转写。专业拼写按对应PDF保留，TXT原片段及字符锚点照录。未提供原音频，本次不声称核实发音。录音中的分组、提交、日期等只是历史学习资料，不是本次操作要求。

## 专业英语

### Network architecture / network design

**稳定ID：** csit985-w4-d9c0012752ba97

**类别：** 专业英语

**中文解释：** 网络架构／网络设计。架构侧重整体关系、范围较广且不依赖地点；设计侧重具体技术、深入细节并依赖地点。

**简单英文（整理解释）：** Architecture describes broad relationships. Design chooses detailed technologies for a location.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Scope

**原文来源：** Week6a.pdf · PDF页10 / 幻灯片10

**语境：** Week6 · Network architecture / network design

**语境英文：** Architecture describes broad relationships. Design chooses detailed technologies for a location.

**语境中文：** 网络架构／网络设计。架构侧重整体关系、范围较广且不依赖地点；设计侧重具体技术、深入细节并依赖地点。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Scope

**语境原文来源：** Week6a.pdf · PDF页10 / 幻灯片10

**语境来源：** Week6a.pdf · PDF页10 / 幻灯片10

**全部来源：** Week6a.pdf · PDF页10 / 幻灯片10

### Component architecture

**稳定ID：** csit985-w6-0002

**类别：** 专业英语

**中文解释：** 组件架构：由网络功能、实现机制和内部关系组成。只有技术清单还不够。

**简单英文（整理解释）：** A component architecture contains functions, mechanisms, and internal relationships.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Internal relationships

**原文来源：** Week6a.pdf · PDF页14 / 幻灯片14

**语境：** Week6 · Component architecture

**语境英文：** A component architecture contains functions, mechanisms, and internal relationships.

**语境中文：** 组件架构：由网络功能、实现机制和内部关系组成。只有技术清单还不够。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Internal relationships

**语境原文来源：** Week6a.pdf · PDF页14 / 幻灯片14

**语境来源：** Week6a.pdf · PDF页14,16,17 / 幻灯片14,16,17

**全部来源：** Week6a.pdf · PDF页14,16,17 / 幻灯片14,16,17

### Function

**稳定ID：** csit985-w6-0003

**类别：** 专业英语

**中文解释：** 网络功能：网络的一项主要能力，如 addressing/routing、management、performance 或 security。

**简单英文（整理解释）：** A function is a major capability of a network.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Major capability of network

**原文来源：** Week6a.pdf · PDF页16 / 幻灯片16

**语境：** Week6 · Function

**语境英文：** A function is a major capability of a network.

**语境中文：** 网络功能：网络的一项主要能力，如 addressing/routing、management、performance 或 security。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Major capability of network

**语境原文来源：** Week6a.pdf · PDF页16 / 幻灯片16

**语境来源：** Week6a.pdf · PDF页16 / 幻灯片16

**全部来源：** Week6a.pdf · PDF页16 / 幻灯片16

### Mechanism

**稳定ID：** csit985-w6-0004

**类别：** 专业英语

**中文解释：** 实现机制：帮助网络实现某项能力的硬件与软件。

**简单英文（整理解释）：** Hardware and software that help a network provide a capability.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Hardware and software that help a network achieve each capability

**原文来源：** Week6a.pdf · PDF页16 / 幻灯片16

**语境：** Week6 · Mechanism

**语境英文：** Hardware and software that help a network provide a capability.

**语境中文：** 实现机制：帮助网络实现某项能力的硬件与软件。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Hardware and software that help a network achieve each capability

**语境原文来源：** Week6a.pdf · PDF页16 / 幻灯片16

**语境来源：** Week6a.pdf · PDF页16 / 幻灯片16

**全部来源：** Week6a.pdf · PDF页16 / 幻灯片16

### Internal relationships

**稳定ID：** csit985-w6-0005

**类别：** 专业英语

**中文解释：** 内部关系：同一个组件架构内机制之间的 trade-offs、dependencies 和 constraints。

**简单英文（整理解释）：** Relationships between mechanisms inside one component architecture.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Tradeoffs and Dependencies

**原文来源：** Week6a.pdf · PDF页17 / 幻灯片17

**语境：** Week6 · Internal relationships

**语境英文：** Relationships between mechanisms inside one component architecture.

**语境中文：** 内部关系：同一个组件架构内机制之间的 trade-offs、dependencies 和 constraints。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Tradeoffs and Dependencies

**语境原文来源：** Week6a.pdf · PDF页17 / 幻灯片17

**语境来源：** Week6a.pdf · PDF页17 / 幻灯片17

**全部来源：** Week6a.pdf · PDF页17 / 幻灯片17

### Trade-offs

**稳定ID：** csit985-w6-0006

**类别：** 专业英语

**中文解释：** 权衡：用来排列优先级并决定采用哪些机制的决策点。不能只看一种收益。

**简单英文（整理解释）：** Decision points used to choose and prioritize mechanisms.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Decision points that are used to prioritise and decide which mechanisms are to be applied

**原文来源：** Week6a.pdf · PDF页17 / 幻灯片17

**语境：** Week6 · Trade-offs

**语境英文：** Decision points used to choose and prioritize mechanisms.

**语境中文：** 权衡：用来排列优先级并决定采用哪些机制的决策点。不能只看一种收益。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Decision points that are used to prioritise and decide which mechanisms are to be applied

**语境原文来源：** Week6a.pdf · PDF页17 / 幻灯片17

**语境来源：** Week6a.pdf · PDF页17 / 幻灯片17

**全部来源：** Week6a.pdf · PDF页17 / 幻灯片17

### Dependencies

**稳定ID：** csit985-w6-0007

**类别：** 专业英语

**中文解释：** 依赖关系：一个机制的运行需要另一个机制。

**简单英文（整理解释）：** One mechanism needs another mechanism to operate.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> When one mechanism relies on another mechanism for its operation

**原文来源：** Week6a.pdf · PDF页17 / 幻灯片17

**语境：** Week6 · Dependencies

**语境英文：** One mechanism needs another mechanism to operate.

**语境中文：** 依赖关系：一个机制的运行需要另一个机制。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> When one mechanism relies on another mechanism for its operation

**语境原文来源：** Week6a.pdf · PDF页17 / 幻灯片17

**语境来源：** Week6a.pdf · PDF页17 / 幻灯片17

**全部来源：** Week6a.pdf · PDF页17 / 幻灯片17

### Constraints

**稳定ID：** csit985-w4-9fe2eaff3aa352

**类别：** 专业英语

**中文解释：** 约束：一个机制对另一个机制施加的限制。例：易管理的 RIP 不适合大型分层拓扑。

**简单英文（整理解释）：** Restrictions that one mechanism places on another.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Restrictions one mechanism places on another

**原文来源：** Week6a.pdf · PDF页17 / 幻灯片17

**语境：** Week6 · Constraints

**语境英文：** Restrictions that one mechanism places on another.

**语境中文：** 约束：一个机制对另一个机制施加的限制。例：易管理的 RIP 不适合大型分层拓扑。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Restrictions one mechanism places on another

**语境原文来源：** Week6a.pdf · PDF页17 / 幻灯片17

**语境来源：** Week6a.pdf · PDF页17,20 / 幻灯片17,20

**全部来源：** Week6a.pdf · PDF页17,20 / 幻灯片17,20

### Centralized network management

**稳定ID：** csit985-w6-0009

**类别：** 专业英语

**中文解释：** 集中式网络管理；本页说实现和管理较容易，但比 distributed management 更容易受故障影响。

**简单英文（整理解释）：** Management from a central point is easier to administer but more prone to failure in this comparison.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Centralized network management

**原文来源：** Week6a.pdf · PDF页18 / 幻灯片18

**语境：** Week6 · Centralized network management

**语境英文：** Management from a central point is easier to administer but more prone to failure in this comparison.

**语境中文：** 集中式网络管理；本页说实现和管理较容易，但比 distributed management 更容易受故障影响。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Centralized network management

**语境原文来源：** Week6a.pdf · PDF页18 / 幻灯片18

**语境来源：** Week6a.pdf · PDF页18 / 幻灯片18

**全部来源：** Week6a.pdf · PDF页18 / 幻灯片18

### Distributed network management

**稳定ID：** csit985-w6-0010

**类别：** 专业英语

**中文解释：** 分布式网络管理；本页用它与 centralized management 比较，具体结构在后续周展开。

**简单英文（整理解释）：** Management spread across several components; compared with centralized management here.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Distributed network management

**原文来源：** Week6a.pdf · PDF页18 / 幻灯片18

**语境：** Week6 · Distributed network management

**语境英文：** Management spread across several components; compared with centralized management here.

**语境中文：** 分布式网络管理；本页用它与 centralized management 比较，具体结构在后续周展开。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Distributed network management

**语境原文来源：** Week6a.pdf · PDF页18 / 幻灯片18

**语境来源：** Week6a.pdf · PDF页18 / 幻灯片18

**全部来源：** Week6a.pdf · PDF页18 / 幻灯片18

### RIP (Routing Information Protocol)

**稳定ID：** csit985-w2-eafe385fbea971

**类别：** 专业英语

**中文解释：** 路由信息协议；本讲用它说明简单机制可能限制可支持的网络规模和层次。

**简单英文（整理解释）：** A routing protocol used here as an example of a scaling constraint.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> RIP: Routing Information Protocol

**原文来源：** Week6a.pdf · PDF页20 / 幻灯片20

**语境：** Week6 · RIP (Routing Information Protocol)

**语境英文：** A routing protocol used here as an example of a scaling constraint.

**语境中文：** 路由信息协议；本讲用它说明简单机制可能限制可支持的网络规模和层次。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> RIP: Routing Information Protocol

**语境原文来源：** Week6a.pdf · PDF页20 / 幻灯片20

**语境来源：** Week6a.pdf · PDF页20 / 幻灯片20

**全部来源：** Week6a.pdf · PDF页20 / 幻灯片20

### Requirements → flows → component architecture

**稳定ID：** csit985-w6-0012

**类别：** 专业英语

**中文解释：** 需求→流→组件架构。机制选择应能追溯到高优先级流及其需求。

**简单英文（整理解释）：** Requirements lead to flows, which guide component architecture choices.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> requirements → flows → component architecture

**原文来源：** Week6a.pdf · PDF页21 / 幻灯片21

**语境：** Week6 · Requirements → flows → component architecture

**语境英文：** Requirements lead to flows, which guide component architecture choices.

**语境中文：** 需求→流→组件架构。机制选择应能追溯到高优先级流及其需求。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> requirements → flows → component architecture

**语境原文来源：** Week6a.pdf · PDF页21 / 幻灯片21

**语境来源：** Week6a.pdf · PDF页21 / 幻灯片21

**全部来源：** Week6a.pdf · PDF页21 / 幻灯片21

### Addressing

**稳定ID：** csit985-w1-eea07a954d020c

**类别：** 专业英语

**中文解释：** 编址：在不同协议层为设备应用标识符。

**简单英文（整理解释）：** Applying identifiers to devices at different protocol layers.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Addressing is applying identifiers to devices at various protocol layers

**原文来源：** Week6a.pdf · PDF页23 / 幻灯片23

**语境：** Week6 · Addressing

**语境英文：** Applying identifiers to devices at different protocol layers.

**语境中文：** 编址：在不同协议层为设备应用标识符。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Addressing is applying identifiers to devices at various protocol layers

**语境原文来源：** Week6a.pdf · PDF页23 / 幻灯片23

**语境来源：** Week6a.pdf · PDF页23 / 幻灯片23

**全部来源：** Week6a.pdf · PDF页23 / 幻灯片23

### Routing

**稳定ID：** csit985-w2-a3c7c8a012da8d

**类别：** 专业英语

**中文解释：** 路由：了解网络内部及网络之间的连接信息，并据此把 IP packets 转发到目的地。

**简单英文（整理解释）：** Learning connectivity and using it to forward IP packets toward their destinations.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Routing is learning about the connectivity within and between networks and applying this connectivity information to forward IP packets toward their destinations.

**原文来源：** Week6a.pdf · PDF页23 / 幻灯片23

**语境：** Week6 · Routing

**语境英文：** Learning connectivity and using it to forward IP packets toward their destinations.

**语境中文：** 路由：了解网络内部及网络之间的连接信息，并据此把 IP packets 转发到目的地。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Routing is learning about the connectivity within and between networks and applying this connectivity information to forward IP packets toward their destinations.

**语境原文来源：** Week6a.pdf · PDF页23 / 幻灯片23

**语境来源：** Week6a.pdf · PDF页23 / 幻灯片23

**全部来源：** Week6a.pdf · PDF页23 / 幻灯片23

### Network management

**稳定ID：** csit985-w6-0015

**类别：** 专业英语

**中文解释：** 网络管理：控制、规划、分配、部署、协调和监测网络资源。

**简单英文（整理解释）：** Functions that control, plan, allocate, deploy, coordinate, and monitor network resources.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Providing functions to control, plan, allocate, deploy, coordinate, and monitor network resources.

**原文来源：** Week6a.pdf · PDF页24 / 幻灯片24

**语境：** Week6 · Network management

**语境英文：** Functions that control, plan, allocate, deploy, coordinate, and monitor network resources.

**语境中文：** 网络管理：控制、规划、分配、部署、协调和监测网络资源。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Providing functions to control, plan, allocate, deploy, coordinate, and monitor network resources.

**语境原文来源：** Week6a.pdf · PDF页24 / 幻灯片24

**语境来源：** Week6a.pdf · PDF页24 / 幻灯片24

**全部来源：** Week6a.pdf · PDF页24 / 幻灯片24

### FCAPS

**稳定ID：** csit985-w6-0016

**类别：** 专业英语

**中文解释：** 故障、配置、计费／核算、性能和安全五类管理；课件展开为 Fault, configuration, accounting, performance and security。

**简单英文（整理解释）：** Five areas of management: fault, configuration, accounting, performance, and security.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> FCAPS: Fault, configuration, accounting, performance and security

**原文来源：** Week6a.pdf · PDF页24 / 幻灯片24

**语境：** Week6 · FCAPS

**语境英文：** Five areas of management: fault, configuration, accounting, performance, and security.

**语境中文：** 故障、配置、计费／核算、性能和安全五类管理；课件展开为 Fault, configuration, accounting, performance and security。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> FCAPS: Fault, configuration, accounting, performance and security

**语境原文来源：** Week6a.pdf · PDF页24 / 幻灯片24

**语境来源：** Week6a.pdf · PDF页24 / 幻灯片24

**全部来源：** Week6a.pdf · PDF页24 / 幻灯片24

### MIB (Management Information Base)

**稳定ID：** csit985-w6-0017

**类别：** 专业英语

**中文解释：** 管理信息库；本页只展开缩写，没有详细定义。

**简单英文（整理解释）：** Management Information Base; only the expanded name is given here.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> MIB: Management Information Base

**原文来源：** Week6a.pdf · PDF页24 / 幻灯片24

**语境：** Week6 · MIB (Management Information Base)

**语境英文：** Management Information Base; only the expanded name is given here.

**语境中文：** 管理信息库；本页只展开缩写，没有详细定义。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> MIB: Management Information Base

**语境原文来源：** Week6a.pdf · PDF页24 / 幻灯片24

**语境来源：** Week6a.pdf · PDF页24 / 幻灯片24

**全部来源：** Week6a.pdf · PDF页24 / 幻灯片24

### OSS (Operations Support System)

**稳定ID：** csit985-w6-0018

**类别：** 专业英语

**中文解释：** 运营支持系统；本页只列缩写，未定义具体接口或系统结构。

**简单英文（整理解释）：** Operations Support System; no detailed structure is defined on this page.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> OSS: Operations Support System

**原文来源：** Week6a.pdf · PDF页24 / 幻灯片24

**语境：** Week6 · OSS (Operations Support System)

**语境英文：** Operations Support System; no detailed structure is defined on this page.

**语境中文：** 运营支持系统；本页只列缩写，未定义具体接口或系统结构。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> OSS: Operations Support System

**语境原文来源：** Week6a.pdf · PDF页24 / 幻灯片24

**语境来源：** Week6a.pdf · PDF页24 / 幻灯片24

**全部来源：** Week6a.pdf · PDF页24 / 幻灯片24

### Performance component architecture

**稳定ID：** csit985-w6-0019

**类别：** 专业英语

**中文解释：** 性能组件架构：描述网络资源如何分给用户流和管理流，支持 capacity、delay 和 RMA 需求。

**简单英文（整理解释）：** It describes how network resources are allocated to user and management flows.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> performance component architecture describes how network resources will be allocated to user and management traffic flows.

**原文来源：** Week6a.pdf · PDF页25 / 幻灯片25

**语境：** Week6 · Performance component architecture

**语境英文：** It describes how network resources are allocated to user and management flows.

**语境中文：** 性能组件架构：描述网络资源如何分给用户流和管理流，支持 capacity、delay 和 RMA 需求。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> performance component architecture describes how network resources will be allocated to user and management traffic flows.

**语境原文来源：** Week6a.pdf · PDF页25 / 幻灯片25

**语境来源：** Week6a.pdf · PDF页25 / 幻灯片25

**全部来源：** Week6a.pdf · PDF页25 / 幻灯片25

### Security

**稳定ID：** csit985-w3-b58d6150f1c242

**类别：** 专业英语

**中文解释：** 安全：保护用户、应用、设备和网络的信息与物理资源的 confidentiality、integrity、availability。课件原文使用 guarantee，是目标表述。

**简单英文（整理解释）：** Protecting the confidentiality, integrity, and availability of information and physical resources.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Is a requirement to guarantee the confidentiality, integrity, and availability of user, application, device, and network information and physical resources.

**原文来源：** Week6a.pdf · PDF页26 / 幻灯片26

**语境：** Week6 · Security

**语境英文：** Protecting the confidentiality, integrity, and availability of information and physical resources.

**语境中文：** 安全：保护用户、应用、设备和网络的信息与物理资源的 confidentiality、integrity、availability。课件原文使用 guarantee，是目标表述。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Is a requirement to guarantee the confidentiality, integrity, and availability of user, application, device, and network information and physical resources.

**语境原文来源：** Week6a.pdf · PDF页26 / 幻灯片26

**语境来源：** Week6a.pdf · PDF页26 / 幻灯片26

**全部来源：** Week6a.pdf · PDF页26 / 幻灯片26

### Reference architecture

**稳定ID：** csit985-w1-c23bb8edccbfea

**类别：** 专业英语

**中文解释：** 参考架构：完整网络架构的描述；合并考虑中的全部组件架构，并汇总内部和外部关系。

**简单英文（整理解释）：** A description of the complete network architecture and its relationships.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> A description of the complete network architecture

**原文来源：** Week6a.pdf · PDF页29 / 幻灯片29

**资料原文：** 课件原文说明／用法（非正式定义）

> All component architectures being considered

**原文来源：** Week6a.pdf · PDF页29 / 幻灯片29

**资料原文：** 课件原文说明／用法（非正式定义）

> Compilation of all internal and external relationships

**原文来源：** Week6a.pdf · PDF页29 / 幻灯片29

**语境：** Week6 · Reference architecture

**语境英文：** A description of the complete network architecture and its relationships.

**语境中文：** 参考架构：完整网络架构的描述；合并考虑中的全部组件架构，并汇总内部和外部关系。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> A description of the complete network architecture

**语境原文来源：** Week6a.pdf · PDF页29 / 幻灯片29

**语境来源：** Week6a.pdf · PDF页29,30 / 幻灯片29,30

**语境：** Week6 · Reference architecture

**语境英文：** It contains all component architectures under consideration and their internal and external relationships.

**语境中文：** 完整描述包含全部考虑中的component architectures及所有internal/external relationships。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> All component architectures being considered

**语境原文来源：** Week6a.pdf · PDF页29 / 幻灯片29

**语境来源：** Week6a.pdf · PDF页29 / 幻灯片29

**语境：** Week6 · Reference architecture

**语境英文：** It compiles both internal and external relationships.

**语境中文：** Reference architecture还汇总全部内部和外部关系，不是单一组件的清单。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Compilation of all internal and external relationships

**语境原文来源：** Week6a.pdf · PDF页29 / 幻灯片29

**语境来源：** Week6a.pdf · PDF页29 / 幻灯片29

**全部来源：** Week6a.pdf · PDF页29,30 / 幻灯片29,30；Week6a.pdf · PDF页29 / 幻灯片29

### External relationships

**稳定ID：** csit985-w6-0022

**类别：** 专业英语

**中文解释：** 外部关系：不同组件架构互相产生的影响；平衡取决于分析阶段的功能优先级和流的优先级。

**简单英文（整理解释）：** Effects that different component architectures have on each other.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Effects that architectures have on each other

**原文来源：** Week6a.pdf · PDF页31 / 幻灯片31

**语境：** Week6 · External relationships

**语境英文：** Effects that different component architectures have on each other.

**语境中文：** 外部关系：不同组件架构互相产生的影响；平衡取决于分析阶段的功能优先级和流的优先级。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Effects that architectures have on each other

**语境原文来源：** Week6a.pdf · PDF页31 / 幻灯片31

**语境来源：** Week6a.pdf · PDF页31 / 幻灯片31

**全部来源：** Week6a.pdf · PDF页31 / 幻灯片31

### Topological architectural model

**稳定ID：** csit985-w6-0023

**类别：** 专业英语

**中文解释：** 拓扑架构模型；本讲按地理规模（LAN/MAN/WAN）或功能（access/distribution/core）组织网络。

**简单英文（整理解释）：** A model based on geographical size or network function.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Based on geographical size

**原文来源：** Week6a.pdf · PDF页39 / 幻灯片39

**语境：** Week6 · Topological architectural model

**语境英文：** A model based on geographical size or network function.

**语境中文：** 拓扑架构模型；本讲按地理规模（LAN/MAN/WAN）或功能（access/distribution/core）组织网络。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Based on geographical size

**语境原文来源：** Week6a.pdf · PDF页39 / 幻灯片39

**语境来源：** Week6a.pdf · PDF页39,40 / 幻灯片39,40

**全部来源：** Week6a.pdf · PDF页39,40 / 幻灯片39,40

### LAN / MAN / WAN architectural model

**稳定ID：** csit985-w6-0024

**类别：** 专业英语

**中文解释：** 按地理规模组织的局域网／城域网／广域网架构模型。

**简单英文（整理解释）：** An architectural model organized by geographical size.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> LAN/MAN/WAN

**原文来源：** Week6a.pdf · PDF页39 / 幻灯片39

**语境：** Week6 · LAN / MAN / WAN architectural model

**语境英文：** An architectural model organized by geographical size.

**语境中文：** 按地理规模组织的局域网／城域网／广域网架构模型。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> LAN/MAN/WAN

**语境原文来源：** Week6a.pdf · PDF页39 / 幻灯片39

**语境来源：** Week6a.pdf · PDF页39,40 / 幻灯片39,40

**全部来源：** Week6a.pdf · PDF页39,40 / 幻灯片39,40

### Access (edge)

**稳定ID：** csit985-w6-0025

**类别：** 专业英语

**中文解释：** 接入层／边缘：大多数流在这里产生并终止。

**简单英文（整理解释）：** Where most traffic flows are generated and terminated.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Where most traffic flows are generated and terminated

**原文来源：** Week6a.pdf · PDF页41 / 幻灯片41

**语境：** Week6 · Access (edge)

**语境英文：** Where most traffic flows are generated and terminated.

**语境中文：** 接入层／边缘：大多数流在这里产生并终止。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Where most traffic flows are generated and terminated

**语境原文来源：** Week6a.pdf · PDF页41 / 幻灯片41

**语境来源：** Week6a.pdf · PDF页41 / 幻灯片41

**全部来源：** Week6a.pdf · PDF页41 / 幻灯片41

### Distribution

**稳定ID：** csit985-w6-0026

**类别：** 专业英语

**中文解释：** 汇聚层：大多数流汇聚并为公共服务在此终止。这里不是普通词“分发”的泛义。

**简单英文（整理解释）：** Where most flows are aggregated and terminated for common services.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Where most traffic flows are aggregated and terminated for common services

**原文来源：** Week6a.pdf · PDF页41 / 幻灯片41

**语境：** Week6 · Distribution

**语境英文：** Where most flows are aggregated and terminated for common services.

**语境中文：** 汇聚层：大多数流汇聚并为公共服务在此终止。这里不是普通词“分发”的泛义。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Where most traffic flows are aggregated and terminated for common services

**语境原文来源：** Week6a.pdf · PDF页41 / 幻灯片41

**语境来源：** Week6a.pdf · PDF页41 / 幻灯片41

**全部来源：** Week6a.pdf · PDF页41 / 幻灯片41

### Core (backbone)

**稳定ID：** csit985-w6-0027

**类别：** 专业英语

**中文解释：** 核心层／骨干：为汇聚后的流提供传输。

**简单英文（整理解释）：** The core transports aggregates of traffic flows.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Provides transport for aggregates of traffic flows

**原文来源：** Week6a.pdf · PDF页41 / 幻灯片41

**语境：** Week6 · Core (backbone)

**语境英文：** The core transports aggregates of traffic flows.

**语境中文：** 核心层／骨干：为汇聚后的流提供传输。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Provides transport for aggregates of traffic flows

**语境原文来源：** Week6a.pdf · PDF页41 / 幻灯片41

**语境来源：** Week6a.pdf · PDF页41 / 幻灯片41

**全部来源：** Week6a.pdf · PDF页41 / 幻灯片41

### DMZ (demilitarized zone) / external interface

**稳定ID：** csit985-w6-0028

**类别：** 专业英语

**中文解释：** 隔离区／外部接口：本页把它们列为网络外部流的汇聚点。Week6b 展示公开服务隔离示例。

**简单英文（整理解释）：** Aggregation points for traffic flows outside the network.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Aggregation points for traffic flows external to the network

**原文来源：** Week6a.pdf · PDF页41 / 幻灯片41

**语境：** Week6 · DMZ (demilitarized zone) / external interface

**语境英文：** Aggregation points for traffic flows outside the network.

**语境中文：** 隔离区／外部接口：本页把它们列为网络外部流的汇聚点。Week6b 展示公开服务隔离示例。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Aggregation points for traffic flows external to the network

**语境原文来源：** Week6a.pdf · PDF页41 / 幻灯片41

**语境来源：** Week6a.pdf · PDF页41 / 幻灯片41

**全部来源：** Week6a.pdf · PDF页41 / 幻灯片41

### Flow-based architectural models

**稳定ID：** csit985-w6-0029

**类别：** 专业英语

**中文解释：** 基于流的架构模型；列有 peer-to-peer、client-server、hierarchical client-server 和 distributed computing。

**简单英文（整理解释）：** Architectural models organized around traffic-flow patterns.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Peer-to-peer

**原文来源：** Week6a.pdf · PDF页42 / 幻灯片42

**语境：** Week6 · Flow-based architectural models

**语境英文：** Architectural models organized around traffic-flow patterns.

**语境中文：** 基于流的架构模型；列有 peer-to-peer、client-server、hierarchical client-server 和 distributed computing。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Peer-to-peer

**语境原文来源：** Week6a.pdf · PDF页42 / 幻灯片42

**语境来源：** Week6a.pdf · PDF页42,43 / 幻灯片42,43

**全部来源：** Week6a.pdf · PDF页42,43 / 幻灯片42,43

### Service-provider architectural model

**稳定ID：** csit985-w6-0030

**类别：** 专业英语

**中文解释：** 服务提供商架构模型；以隐私、安全和服务交付等服务商功能组织网络。

**简单英文（整理解释）：** A model based on service-provider functions such as privacy, security, and service delivery.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Service-provider architectural model is based on service provider functions

**原文来源：** Week6a.pdf · PDF页44 / 幻灯片44

**语境：** Week6 · Service-provider architectural model

**语境英文：** A model based on service-provider functions such as privacy, security, and service delivery.

**语境中文：** 服务提供商架构模型；以隐私、安全和服务交付等服务商功能组织网络。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Service-provider architectural model is based on service provider functions

**语境原文来源：** Week6a.pdf · PDF页44 / 幻灯片44

**语境来源：** Week6a.pdf · PDF页44 / 幻灯片44

**全部来源：** Week6a.pdf · PDF页44 / 幻灯片44

### Intranet / extranet architectural model

**稳定ID：** csit985-w6-0031

**类别：** 专业英语

**中文解释：** 内联网／外联网架构模型；按安全访问划分隐私、安全和网络隔离。课件未分别给出两者完整定义。

**简单英文（整理解释）：** A model that uses secure access to separate networks and protect privacy.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Privacy, security, separation based on secure access

**原文来源：** Week6a.pdf · PDF页45 / 幻灯片45

**语境：** Week6 · Intranet / extranet architectural model

**语境英文：** A model that uses secure access to separate networks and protect privacy.

**语境中文：** 内联网／外联网架构模型；按安全访问划分隐私、安全和网络隔离。课件未分别给出两者完整定义。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Privacy, security, separation based on secure access

**语境原文来源：** Week6a.pdf · PDF页45 / 幻灯片45

**语境来源：** Week6a.pdf · PDF页45 / 幻灯片45

**全部来源：** Week6a.pdf · PDF页45 / 幻灯片45

### End-to-end architectural model

**稳定ID：** csit985-w6-0032

**类别：** 专业英语

**中文解释：** 端到端架构模型：考虑端到端流路径上的所有组件。

**简单英文（整理解释）：** A model that includes every component along an end-to-end traffic path.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> End-to-end – includes all the components in the path of the end-end traffic flow

**原文来源：** Week6a.pdf · PDF页46 / 幻灯片46

**语境：** Week6 · End-to-end architectural model

**语境英文：** A model that includes every component along an end-to-end traffic path.

**语境中文：** 端到端架构模型：考虑端到端流路径上的所有组件。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> End-to-end – includes all the components in the path of the end-end traffic flow

**语境原文来源：** Week6a.pdf · PDF页46 / 幻灯片46

**语境来源：** Week6a.pdf · PDF页46 / 幻灯片46

**全部来源：** Week6a.pdf · PDF页46 / 幻灯片46

### Network security

**稳定ID：** csit985-w6-0049

**类别：** 专业英语

**中文解释：** 网络安全：保护网络及服务免受未经授权的修改、破坏、访问和披露。访问与披露也涉及 privacy。

**简单英文（整理解释）：** Protecting networks and services from unauthorized modification, destruction, access, and disclosure.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义；各来源语境分别保留

**资料原文：** 课件原文定义

> The protection of networks and their services from unauthorized

**原文来源：** Week6b.pdf · PDF页5 / 幻灯片5

**资料原文：** 课件原文定义

> Modification•Destruction•Access (this includes privacy)•Disclosure (this includes privacy)

**原文来源：** Week6b.pdf · PDF页5 / 幻灯片5

**语境：** Week6 · Network security

**语境英文：** Protecting networks and services from unauthorized modification, destruction, access, and disclosure.

**语境中文：** 网络安全：保护网络及服务免受未经授权的修改、破坏、访问和披露。访问与披露也涉及 privacy。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> The protection of networks and their services from unauthorized

**语境原文来源：** Week6b.pdf · PDF页5 / 幻灯片5

**语境来源：** Week6b.pdf · PDF页5 / 幻灯片5

**语境：** Week6 · Network security

**语境英文：** The definition covers modification, destruction, access, and disclosure; access and disclosure include privacy.

**语境中文：** 原文定义的保护范围还包括Modification、Destruction、Access及Disclosure；后两项均注明this includes privacy。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Modification•Destruction•Access (this includes privacy)•Disclosure (this includes privacy)

**语境原文来源：** Week6b.pdf · PDF页5 / 幻灯片5

**语境来源：** Week6b.pdf · PDF页5 / 幻灯片5

**全部来源：** Week6b.pdf · PDF页5 / 幻灯片5

### Network privacy

**稳定ID：** csit985-w6-0050

**类别：** 专业英语

**中文解释：** 网络隐私：network security 的子集，侧重防止未经授权的访问与披露。

**简单英文（整理解释）：** A subset of network security focused on unauthorized access and disclosure.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义；各来源语境分别保留

**资料原文：** 课件原文定义

> A subset of network security

**原文来源：** Week6b.pdf · PDF页6 / 幻灯片6

**资料原文：** 课件原文定义

> Focus on protection from unauthorized access and disclosure

**原文来源：** Week6b.pdf · PDF页6 / 幻灯片6

**语境：** Week6 · Network privacy

**语境英文：** A subset of network security focused on unauthorized access and disclosure.

**语境中文：** 网络隐私：network security 的子集，侧重防止未经授权的访问与披露。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> A subset of network security

**语境原文来源：** Week6b.pdf · PDF页6 / 幻灯片6

**语境来源：** Week6b.pdf · PDF页6 / 幻灯片6

**语境：** Week6 · Network privacy

**语境英文：** Privacy focuses on protection from unauthorized access and disclosure.

**语境中文：** 原文还把范围限定为unauthorized access and disclosure，不能等同于network security全部范围。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Focus on protection from unauthorized access and disclosure

**语境原文来源：** Week6b.pdf · PDF页6 / 幻灯片6

**语境来源：** Week6b.pdf · PDF页6 / 幻灯片6

**全部来源：** Week6b.pdf · PDF页6 / 幻灯片6

### CIA triangle

**稳定ID：** csit985-w6-0051

**类别：** 专业英语

**中文解释：** CIA 三角：confidentiality、integrity、availability 三种安全考虑。这里 CIA 不是机构名称。

**简单英文（整理解释）：** Three security goals: confidentiality, integrity, and availability.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> CIA triangle

**原文来源：** Week6b.pdf · PDF页7 / 幻灯片7

**语境：** Week6 · CIA triangle

**语境英文：** Three security goals: confidentiality, integrity, and availability.

**语境中文：** CIA 三角：confidentiality、integrity、availability 三种安全考虑。这里 CIA 不是机构名称。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> CIA triangle

**语境原文来源：** Week6b.pdf · PDF页7 / 幻灯片7

**语境来源：** Week6b.pdf · PDF页7 / 幻灯片7

**全部来源：** Week6b.pdf · PDF页7 / 幻灯片7

### Confidentiality / Integrity

**稳定ID：** csit985-w3-5a987ee44bffd7

**类别：** 专业英语

**中文解释：** 保密性：课件的通信例中，只有发送者和目标接收者能访问交换的信息。

**简单英文（整理解释）：** Only the sender and intended receiver can access exchanged messages in this example.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义；各来源语境分别保留

**资料原文：** 课件原文定义

> Confidentiality ensures that only the sender and targeted receiver can access to the exchanged messages

**原文来源：** Week6b.pdf · PDF页8 / 幻灯片8

**资料原文：** 课件原文定义

> Integrity: make sure that the message exchanged between Alice and Bob are not altered in transit.

**原文来源：** Week6b.pdf · PDF页9 / 幻灯片9

**语境：** Week6 · Confidentiality

**语境英文：** Only the sender and intended receiver can access exchanged messages in this example.

**语境中文：** 保密性：课件的通信例中，只有发送者和目标接收者能访问交换的信息。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Confidentiality ensures that only the sender and targeted receiver can access to the exchanged messages

**语境原文来源：** Week6b.pdf · PDF页8 / 幻灯片8

**语境来源：** Week6b.pdf · PDF页8 / 幻灯片8

**语境：** Week6 · Integrity

**语境英文：** The exchanged message is not changed in transit.

**语境中文：** 完整性：Alice 和 Bob 交换的信息在传输过程中未被更改。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Integrity: make sure that the message exchanged between Alice and Bob are not altered in transit.

**语境原文来源：** Week6b.pdf · PDF页9 / 幻灯片9

**语境来源：** Week6b.pdf · PDF页9 / 幻灯片9

**全部来源：** Week6b.pdf · PDF页8 / 幻灯片8；Week6b.pdf · PDF页9 / 幻灯片9

### Availability

**稳定ID：** csit985-w6-0053

**类别：** 专业英语

**中文解释：** 可用性：需要时数据可以使用；SYN flood、DoS 或物理攻击可能破坏它。

**简单英文（整理解释）：** Data are available when they are needed.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Availability: make sure that data are available when required

**原文来源：** Week6b.pdf · PDF页10 / 幻灯片10

**语境：** Week6 · Availability

**语境英文：** Data are available when they are needed.

**语境中文：** 可用性：需要时数据可以使用；SYN flood、DoS 或物理攻击可能破坏它。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Availability: make sure that data are available when required

**语境原文来源：** Week6b.pdf · PDF页10 / 幻灯片10

**语境来源：** Week6b.pdf · PDF页10 / 幻灯片10

**全部来源：** Week6b.pdf · PDF页10 / 幻灯片10

### DoS (denial of service)

**稳定ID：** csit985-w6-0054

**类别：** 专业英语

**中文解释：** 拒绝服务；使正常服务不能使用的威胁。本讲列为威胁类型，未给正式定义。

**简单英文（整理解释）：** A threat that makes a service unavailable to its users.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Denial of service

**原文来源：** Week6b.pdf · PDF页18 / 幻灯片18

**语境：** Week6 · DoS (denial of service)

**语境英文：** A threat that makes a service unavailable to its users.

**语境中文：** 拒绝服务；使正常服务不能使用的威胁。本讲列为威胁类型，未给正式定义。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Denial of service

**语境原文来源：** Week6b.pdf · PDF页18 / 幻灯片18

**语境来源：** Week6b.pdf · PDF页10,18 / 幻灯片10,18

**全部来源：** Week6b.pdf · PDF页10,18 / 幻灯片10,18

### SYN flood

**稳定ID：** csit985-w6-0055

**类别：** 专业英语

**中文解释：** SYN 洪泛；作为影响 availability 的攻击例子，PDF 未展开操作细节。

**简单英文（整理解释）：** An attack example that threatens availability; no detailed mechanism is defined here.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> SYN flood

**原文来源：** Week6b.pdf · PDF页10 / 幻灯片10

**语境：** Week6 · SYN flood

**语境英文：** An attack example that threatens availability; no detailed mechanism is defined here.

**语境中文：** SYN 洪泛；作为影响 availability 的攻击例子，PDF 未展开操作细节。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> SYN flood

**语境原文来源：** Week6b.pdf · PDF页10 / 幻灯片10

**语境来源：** Week6b.pdf · PDF页10 / 幻灯片10

**全部来源：** Week6b.pdf · PDF页10 / 幻灯片10

### Threat analysis

**稳定ID：** csit985-w6-0056

**类别：** 专业英语

**中文解释：** 威胁分析：识别需要保护的资产，以及资产面临的安全威胁类型。

**简单英文（整理解释）：** Identifying assets to protect and the threats to those assets.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义；各来源语境分别保留

**资料原文：** 课件原文定义

> Assets to be protected

**原文来源：** Week6b.pdf · PDF页16 / 幻灯片16

**资料原文：** 课件原文定义

> Types of security risks (threats) they need to be protected from

**原文来源：** Week6b.pdf · PDF页16 / 幻灯片16

**语境：** Week6 · Threat analysis

**语境英文：** Identifying assets to protect and the threats to those assets.

**语境中文：** 威胁分析：识别需要保护的资产，以及资产面临的安全威胁类型。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Assets to be protected

**语境原文来源：** Week6b.pdf · PDF页16 / 幻灯片16

**语境来源：** Week6b.pdf · PDF页16,17 / 幻灯片16,17

**语境：** Week6 · Threat analysis

**语境英文：** Threat analysis also identifies the types of risks assets need protection from.

**语境中文：** 原文定义还要求识别资产需要防范的security risks类型，不能只列资产名。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Types of security risks (threats) they need to be protected from

**语境原文来源：** Week6b.pdf · PDF页16 / 幻灯片16

**语境来源：** Week6b.pdf · PDF页16 / 幻灯片16

**全部来源：** Week6b.pdf · PDF页16,17 / 幻灯片16,17；Week6b.pdf · PDF页16 / 幻灯片16

### Assets

**稳定ID：** csit985-w6-0057

**类别：** 专业英语

**中文解释：** 资产：本讲安全分析中的硬件、服务器、特殊设备、网络设备、软件、服务及数据。

**简单英文（整理解释）：** Things that need protection, including devices, software, services, and data.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Assets may include

**原文来源：** Week6b.pdf · PDF页17 / 幻灯片17

**语境：** Week6 · Assets

**语境英文：** Things that need protection, including devices, software, services, and data.

**语境中文：** 资产：本讲安全分析中的硬件、服务器、特殊设备、网络设备、软件、服务及数据。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Assets may include

**语境原文来源：** Week6b.pdf · PDF页17 / 幻灯片17

**语境来源：** Week6b.pdf · PDF页17 / 幻灯片17

**全部来源：** Week6b.pdf · PDF页17 / 幻灯片17

### Unauthorized access / disclosure

**稳定ID：** csit985-w6-0058

**类别：** 专业英语

**中文解释：** 未经授权的访问／披露；访问是接触或使用，披露是把信息暴露出去。这里是安全威胁类型。

**简单英文（整理解释）：** Accessing or revealing information without permission.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Unauthorised disclosure of information

**原文来源：** Week6b.pdf · PDF页18 / 幻灯片18

**语境：** Week6 · Unauthorized access / disclosure

**语境英文：** Accessing or revealing information without permission.

**语境中文：** 未经授权的访问／披露；访问是接触或使用，披露是把信息暴露出去。这里是安全威胁类型。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Unauthorised disclosure of information

**语境原文来源：** Week6b.pdf · PDF页18 / 幻灯片18

**语境来源：** Week6b.pdf · PDF页18 / 幻灯片18

**全部来源：** Week6b.pdf · PDF页18 / 幻灯片18

### Viruses / worms / Trojan horses

**稳定ID：** csit985-w6-0059

**类别：** 专业英语

**中文解释：** 病毒／蠕虫／木马；课件把三者列为威胁，没有定义各自传播机制。

**简单英文（整理解释）：** Three threat types listed in the slides; their differences are not formally defined here.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Viruses, worms, Trojan horses

**原文来源：** Week6b.pdf · PDF页18 / 幻灯片18

**语境：** Week6 · Viruses / worms / Trojan horses

**语境英文：** Three threat types listed in the slides; their differences are not formally defined here.

**语境中文：** 病毒／蠕虫／木马；课件把三者列为威胁，没有定义各自传播机制。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Viruses, worms, Trojan horses

**语境原文来源：** Week6b.pdf · PDF页18 / 幻灯片18

**语境来源：** Week6b.pdf · PDF页18 / 幻灯片18

**全部来源：** Week6b.pdf · PDF页18 / 幻灯片18

### Threat analysis worksheet

**稳定ID：** csit985-w6-0060

**类别：** 专业英语

**中文解释：** 威胁分析工作表：把资产和威胁交叉列出，并记录 effect 与 likelihood。A–D 的含义依列而不同，不是统一分数。

**简单英文（整理解释）：** A worksheet that maps threats to assets and records effect and likelihood.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> threat analysis worksheet

**原文来源：** Week6b.pdf · PDF页19 / 幻灯片19

**语境：** Week6 · Threat analysis worksheet

**语境英文：** A worksheet that maps threats to assets and records effect and likelihood.

**语境中文：** 威胁分析工作表：把资产和威胁交叉列出，并记录 effect 与 likelihood。A–D 的含义依列而不同，不是统一分数。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> threat analysis worksheet

**语境原文来源：** Week6b.pdf · PDF页19 / 幻灯片19

**语境来源：** Week6b.pdf · PDF页19,20 / 幻灯片19,20

**全部来源：** Week6b.pdf · PDF页19,20 / 幻灯片19,20

### Risk assessment

**稳定ID：** csit985-w6-0061

**类别：** 专业英语

**中文解释：** 风险评估：对每个威胁与服务组合，考虑 probability 及 cost/damage。两者都高时，须制定策略把风险降到可接受程度。

**简单英文（整理解释）：** Considering the probability and damage of each threat to a service.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> If the probability and cost are high, we MUST develop a strategy to negate/reduce the risk to acceptable levels

**原文来源：** Week6b.pdf · PDF页21 / 幻灯片21

**语境：** Week6 · Risk assessment

**语境英文：** Considering the probability and damage of each threat to a service.

**语境中文：** 风险评估：对每个威胁与服务组合，考虑 probability 及 cost/damage。两者都高时，须制定策略把风险降到可接受程度。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> If the probability and cost are high, we MUST develop a strategy to negate/reduce the risk to acceptable levels

**语境原文来源：** Week6b.pdf · PDF页21 / 幻灯片21

**语境来源：** Week6b.pdf · PDF页21 / 幻灯片21

**全部来源：** Week6b.pdf · PDF页21 / 幻灯片21

### Security policies and procedures

**稳定ID：** csit985-w6-0062

**类别：** 专业英语

**中文解释：** 安全策略与流程：有关系统、网络、信息的访问和使用规则的正式陈述；解释威胁、降低风险的方法及不协助降低风险的后果。

**简单英文（整理解释）：** Formal rules for system, network, and information access and use.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Security policies and procedures are formal statements on rules for system, network and information access and use

**原文来源：** Week6b.pdf · PDF页23 / 幻灯片23

**语境：** Week6 · Security policies and procedures

**语境英文：** Formal rules for system, network, and information access and use.

**语境中文：** 安全策略与流程：有关系统、网络、信息的访问和使用规则的正式陈述；解释威胁、降低风险的方法及不协助降低风险的后果。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Security policies and procedures are formal statements on rules for system, network and information access and use

**语境原文来源：** Week6b.pdf · PDF页23 / 幻灯片23

**语境来源：** Week6b.pdf · PDF页23 / 幻灯片23

**全部来源：** Week6b.pdf · PDF页23 / 幻灯片23

### Open network / closed network philosophy

**稳定ID：** csit985-w6-0063

**类别：** 专业英语

**中文解释：** 开放／封闭网络策略思路。图中开放型拒绝指定流量、放行其余；封闭型放行指定流量、拒绝其余。

**简单英文（整理解释）：** An open policy denies selected traffic. A closed policy permits selected traffic and denies the rest.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 图表标签／说明（视觉核对，非正式定义）

> Deny Specifics/Accept Everything Else

**原文来源：** Week6b.pdf · PDF页24 / 幻灯片24（图表）

**语境：** Week6 · Open network / closed network philosophy

**语境英文：** An open policy denies selected traffic. A closed policy permits selected traffic and denies the rest.

**语境中文：** 开放／封闭网络策略思路。图中开放型拒绝指定流量、放行其余；封闭型放行指定流量、拒绝其余。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 图表标签／说明（视觉核对，非正式定义）

> Deny Specifics/Accept Everything Else

**语境原文来源：** Week6b.pdf · PDF页24 / 幻灯片24（图表）

**语境来源：** Week6b.pdf · PDF页24 / 幻灯片24

**全部来源：** Week6b.pdf · PDF页24 / 幻灯片24

### Accountability / auditing

**稳定ID：** csit985-w6-0064

**类别：** 专业英语

**中文解释：** 责任可追溯性／审计；策略应说明责任及审计要求，当前资料未细分审计方法。

**简单英文（整理解释）：** Responsibility for actions and checking those actions.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Responsibilities and auditing

**原文来源：** Week6b.pdf · PDF页25 / 幻灯片25

**语境：** Week6 · Accountability / auditing

**语境英文：** Responsibility for actions and checking those actions.

**语境中文：** 责任可追溯性／审计；策略应说明责任及审计要求，当前资料未细分审计方法。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Responsibilities and auditing

**语境原文来源：** Week6b.pdf · PDF页25 / 幻灯片25

**语境来源：** Week6b.pdf · PDF页25 / 幻灯片25

**全部来源：** Week6b.pdf · PDF页25 / 幻灯片25

### Authentication

**稳定ID：** csit985-w2-17a798963430c6

**类别：** 专业英语

**中文解释：** 身份验证：与密码及远程访问相关；核查身份。第27页 identify 疑似 identity 笔误，原文保留。

**简单英文（整理解释）：** Checking identity, for example through password rules.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Authentication of identify and use of passwords

**原文来源：** Week6b.pdf · PDF页27 / 幻灯片27

**语境：** Week6 · Authentication

**语境英文：** Checking identity, for example through password rules.

**语境中文：** 身份验证：与密码及远程访问相关；核查身份。第27页 identify 疑似 identity 笔误，原文保留。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Authentication of identify and use of passwords

**语境原文来源：** Week6b.pdf · PDF页27 / 幻灯片27

**语境来源：** Week6b.pdf · PDF页25,27 / 幻灯片25,27

**全部来源：** Week6b.pdf · PDF页25,27 / 幻灯片25,27

### Authorisation

**稳定ID：** csit985-w6-0066

**类别：** 专业英语

**中文解释：** 授权：允许谁使用系统；与核查身份的 authentication 区分。

**简单英文（整理解释）：** Permission to use a system.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Authorisation to use

**原文来源：** Week6b.pdf · PDF页27 / 幻灯片27

**语境：** Week6 · Authorisation

**语境英文：** Permission to use a system.

**语境中文：** 授权：允许谁使用系统；与核查身份的 authentication 区分。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Authorisation to use

**语境原文来源：** Week6b.pdf · PDF页27 / 幻灯片27

**语境来源：** Week6b.pdf · PDF页27 / 幻灯片27

**全部来源：** Week6b.pdf · PDF页27 / 幻灯片27

### Acceptable use statement

**稳定ID：** csit985-w6-0067

**类别：** 专业英语

**中文解释：** 可接受使用声明；说明系统怎样使用以及为什么设置这些规则。

**简单英文（整理解释）：** A statement about allowed use and its reasons.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Acceptable use statements

**原文来源：** Week6b.pdf · PDF页26 / 幻灯片26

**语境：** Week6 · Acceptable use statement

**语境英文：** A statement about allowed use and its reasons.

**语境中文：** 可接受使用声明；说明系统怎样使用以及为什么设置这些规则。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Acceptable use statements

**语境原文来源：** Week6b.pdf · PDF页26 / 幻灯片26

**语境来源：** Week6b.pdf · PDF页26 / 幻灯片26

**全部来源：** Week6b.pdf · PDF页26 / 幻灯片26

### Security incident handling procedures

**稳定ID：** csit985-w6-0068

**类别：** 专业英语

**中文解释：** 安全事件处理流程；此页列为策略实例，没有提供具体处置步骤。

**简单英文（整理解释）：** Procedures for dealing with security incidents; detailed steps are not supplied here.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Security incident handling procedures

**原文来源：** Week6b.pdf · PDF页26 / 幻灯片26

**语境：** Week6 · Security incident handling procedures

**语境英文：** Procedures for dealing with security incidents; detailed steps are not supplied here.

**语境中文：** 安全事件处理流程；此页列为策略实例，没有提供具体处置步骤。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Security incident handling procedures

**语境原文来源：** Week6b.pdf · PDF页26 / 幻灯片26

**语境来源：** Week6b.pdf · PDF页26 / 幻灯片26

**全部来源：** Week6b.pdf · PDF页26 / 幻灯片26

### Access control list (ACL)

**稳定ID：** csit985-w1-21cc49e1615a7a

**类别：** 专业英语

**中文解释：** 访问控制列表；按地址或端口等条件许可／拒绝访问。图中 ACL 是过滤流量的规则清单。

**简单英文（整理解释）：** A list of rules that permits or denies selected traffic.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Network access control lists

**原文来源：** Week6b.pdf · PDF页26 / 幻灯片26

**语境：** Week6 · Access control list (ACL)

**语境英文：** A list of rules that permits or denies selected traffic.

**语境中文：** 访问控制列表；按地址或端口等条件许可／拒绝访问。图中 ACL 是过滤流量的规则清单。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Network access control lists

**语境原文来源：** Week6b.pdf · PDF页26 / 幻灯片26

**语境来源：** Week6b.pdf · PDF页26,35 / 幻灯片26,35

**全部来源：** Week6b.pdf · PDF页26,35 / 幻灯片26,35

### CERT advisories

**稳定ID：** csit985-w6-0070

**类别：** 专业英语

**中文解释：** CERT 安全通告；课件要求策略考虑监测这类通告，但未展开 CERT 全称或提供具体通告。

**简单英文（整理解释）：** Security notices listed as information to monitor.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Monitoring CERT advisories

**原文来源：** Week6b.pdf · PDF页28 / 幻灯片28

**语境：** Week6 · CERT advisories

**语境英文：** Security notices listed as information to monitor.

**语境中文：** CERT 安全通告；课件要求策略考虑监测这类通告，但未展开 CERT 全称或提供具体通告。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Monitoring CERT advisories

**语境原文来源：** Week6b.pdf · PDF页28 / 幻灯片28

**语境来源：** Week6b.pdf · PDF页28 / 幻灯片28

**全部来源：** Week6b.pdf · PDF页28 / 幻灯片28

### Contingency computing plans

**稳定ID：** csit985-w6-0071

**类别：** 专业英语

**中文解释：** 应急计算计划；为系统不能正常运行等情况作准备。本页只列名称。

**简单英文（整理解释）：** Plans for computing when normal operation is disrupted.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Contingency computing plans

**原文来源：** Week6b.pdf · PDF页28 / 幻灯片28

**语境：** Week6 · Contingency computing plans

**语境英文：** Plans for computing when normal operation is disrupted.

**语境中文：** 应急计算计划；为系统不能正常运行等情况作准备。本页只列名称。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Contingency computing plans

**语境原文来源：** Week6b.pdf · PDF页28 / 幻灯片28

**语境来源：** Week6b.pdf · PDF页28 / 幻灯片28

**全部来源：** Week6b.pdf · PDF页28 / 幻灯片28

### Physical security

**稳定ID：** csit985-w6-0072

**类别：** 专业英语

**中文解释：** 物理安全：保护房间、设备、电力及存储环境；还要考虑自然灾害和用户意识。

**简单英文（整理解释）：** Protection of physical equipment, access, power, and the environment.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Access controlled rooms for servers and specialized devices

**原文来源：** Week6b.pdf · PDF页30 / 幻灯片30

**语境：** Week6 · Physical security

**语境英文：** Protection of physical equipment, access, power, and the environment.

**语境中文：** 物理安全：保护房间、设备、电力及存储环境；还要考虑自然灾害和用户意识。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Access controlled rooms for servers and specialized devices

**语境原文来源：** Week6b.pdf · PDF页30 / 幻灯片30

**语境来源：** Week6b.pdf · PDF页29,30,31 / 幻灯片29,30,31

**全部来源：** Week6b.pdf · PDF页29,30,31 / 幻灯片29,30,31

### Power conditioning

**稳定ID：** csit985-w6-0073

**类别：** 专业英语

**中文解释：** 电源调节／电力质量处理；与 back-up power sources 并列，课件没有具体技术定义。

**简单英文（整理解释）：** Managing power quality; no detailed method is defined here.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Back-up power sources and power conditioning

**原文来源：** Week6b.pdf · PDF页30 / 幻灯片30

**语境：** Week6 · Power conditioning

**语境英文：** Managing power quality; no detailed method is defined here.

**语境中文：** 电源调节／电力质量处理；与 back-up power sources 并列，课件没有具体技术定义。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Back-up power sources and power conditioning

**语境原文来源：** Week6b.pdf · PDF页30 / 幻灯片30

**语境来源：** Week6b.pdf · PDF页30 / 幻灯片30

**全部来源：** Week6b.pdf · PDF页30 / 幻灯片30

### IPSec

**稳定ID：** csit985-w6-0074

**类别：** 专业英语

**中文解释：** 在 Network Layer 提供设备间 authentication 和 encryption/decryption 的协议；有 transport 与 tunnelling 两种模式。

**简单英文（整理解释）：** A protocol for authentication and encryption between devices at the network layer.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> IPSec – protocol for providing authentication and encryption/decryption between devices at the Network Layer. Two modes of operation: Transport, tunnelling

**原文来源：** Week6b.pdf · PDF页32 / 幻灯片32

**语境：** Week6 · IPSec

**语境英文：** A protocol for authentication and encryption between devices at the network layer.

**语境中文：** 在 Network Layer 提供设备间 authentication 和 encryption/decryption 的协议；有 transport 与 tunnelling 两种模式。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> IPSec – protocol for providing authentication and encryption/decryption between devices at the Network Layer. Two modes of operation: Transport, tunnelling

**语境原文来源：** Week6b.pdf · PDF页32 / 幻灯片32

**语境来源：** Week6b.pdf · PDF页32 / 幻灯片32

**全部来源：** Week6b.pdf · PDF页32 / 幻灯片32

### IPSec transport mode

**稳定ID：** csit985-w6-0075

**类别：** 专业英语

**中文解释：** IPSec 传输模式；图示原 IP header 在外，ESP payload 的一部分被标为 Encrypted。不是把整个原 IP packet 都封装在新 IP packet 中。

**简单英文（整理解释）：** The diagram keeps the original IP header and protects the payload.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 图表标签／说明（视觉核对，非正式定义）

> Transport Mode

**原文来源：** Week6b.pdf · PDF页32 / 幻灯片32（图表）

**语境：** Week6 · IPSec transport mode

**语境英文：** The diagram keeps the original IP header and protects the payload.

**语境中文：** IPSec 传输模式；图示原 IP header 在外，ESP payload 的一部分被标为 Encrypted。不是把整个原 IP packet 都封装在新 IP packet 中。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 图表标签／说明（视觉核对，非正式定义）

> Transport Mode

**语境原文来源：** Week6b.pdf · PDF页32 / 幻灯片32（图表）

**语境来源：** Week6b.pdf · PDF页32 / 幻灯片32

**全部来源：** Week6b.pdf · PDF页32 / 幻灯片32

### IPSec tunnel mode

**稳定ID：** csit985-w6-0076

**类别：** 专业英语

**中文解释：** IPSec 隧道模式；图示原 IP packet 被保护并放到新的 IP packet 内，外层地址用于 VPN gateways。

**简单英文（整理解释）：** The original IP packet is carried inside a new IP packet in the diagram.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 图表标签／说明（视觉核对，非正式定义）

> Tunnel Mode

**原文来源：** Week6b.pdf · PDF页33 / 幻灯片33（图表）

**语境：** Week6 · IPSec tunnel mode

**语境英文：** The original IP packet is carried inside a new IP packet in the diagram.

**语境中文：** IPSec 隧道模式；图示原 IP packet 被保护并放到新的 IP packet 内，外层地址用于 VPN gateways。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 图表标签／说明（视觉核对，非正式定义）

> Tunnel Mode

**语境原文来源：** Week6b.pdf · PDF页33 / 幻灯片33（图表）

**语境来源：** Week6b.pdf · PDF页33 / 幻灯片33

**全部来源：** Week6b.pdf · PDF页33 / 幻灯片33

### SNMPv3 USM (User-based Security Model)

**稳定ID：** csit985-w6-0077

**类别：** 专业英语

**中文解释：** SNMPv3 的用户安全模型；课件列防护对象为信息修改、身份冒充、偷听披露和消息流修改。

**简单英文（整理解释）：** A security model that protects management messages against listed threats.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> USM (User-based Security Model)

**原文来源：** Week6b.pdf · PDF页34 / 幻灯片34

**语境：** Week6 · SNMPv3 USM (User-based Security Model)

**语境英文：** A security model that protects management messages against listed threats.

**语境中文：** SNMPv3 的用户安全模型；课件列防护对象为信息修改、身份冒充、偷听披露和消息流修改。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> USM (User-based Security Model)

**语境原文来源：** Week6b.pdf · PDF页34 / 幻灯片34

**语境来源：** Week6b.pdf · PDF页34 / 幻灯片34

**全部来源：** Week6b.pdf · PDF页34 / 幻灯片34

### Packet filtering

**稳定ID：** csit985-w6-0078

**类别：** 专业英语

**中文解释：** 包过滤：明确按照 IP addresses 或 port numbers 允许／拒绝 packets；原文 basic 疑似 basis 笔误。

**简单英文（整理解释）：** Permitting or denying packets based on IP addresses or port numbers.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Packet filtering – explicitly denies or permits packets access on the basic of IP addresses or port numbers (services)

**原文来源：** Week6b.pdf · PDF页35 / 幻灯片35

**语境：** Week6 · Packet filtering

**语境英文：** Permitting or denying packets based on IP addresses or port numbers.

**语境中文：** 包过滤：明确按照 IP addresses 或 port numbers 允许／拒绝 packets；原文 basic 疑似 basis 笔误。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Packet filtering – explicitly denies or permits packets access on the basic of IP addresses or port numbers (services)

**语境原文来源：** Week6b.pdf · PDF页35 / 幻灯片35

**语境来源：** Week6b.pdf · PDF页35 / 幻灯片35

**全部来源：** Week6b.pdf · PDF页35 / 幻灯片35

### Encryption / decryption (E/D)

**稳定ID：** csit985-w6-0079

**类别：** 专业英语

**中文解释：** 加密／解密：使信息不能被攻击者直接使用，再由获授权方恢复可用形式。第37页的15–85%性能下降只作为课件主张，未给测试条件。

**简单英文（整理解释）：** Making information unusable to an attacker and restoring it for authorized use.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Encryption/decryption (E/D) prevents information being usable to attacker

**原文来源：** Week6b.pdf · PDF页36 / 幻灯片36

**语境：** Week6 · Encryption / decryption (E/D)

**语境英文：** Making information unusable to an attacker and restoring it for authorized use.

**语境中文：** 加密／解密：使信息不能被攻击者直接使用，再由获授权方恢复可用形式。第37页的15–85%性能下降只作为课件主张，未给测试条件。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Encryption/decryption (E/D) prevents information being usable to attacker

**语境原文来源：** Week6b.pdf · PDF页36 / 幻灯片36

**语境来源：** Week6b.pdf · PDF页36,37 / 幻灯片36,37

**全部来源：** Week6b.pdf · PDF页36,37 / 幻灯片36,37

### Private key / DES / triple DES

**稳定ID：** csit985-w6-0080

**类别：** 专业英语

**中文解释：** 课件在 Private key 下列 DES 与 triple DES；只收录名称和本讲用法，不把这些例子当作当前安全推荐。

**简单英文（整理解释）：** Encryption examples listed under Private key; no current safety claim is made.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> DES (data encryption standard), triple DES

**原文来源：** Week6b.pdf · PDF页36 / 幻灯片36

**语境：** Week6 · Private key / DES / triple DES

**语境英文：** Encryption examples listed under Private key; no current safety claim is made.

**语境中文：** 课件在 Private key 下列 DES 与 triple DES；只收录名称和本讲用法，不把这些例子当作当前安全推荐。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> DES (data encryption standard), triple DES

**语境原文来源：** Week6b.pdf · PDF页36 / 幻灯片36

**语境来源：** Week6b.pdf · PDF页36 / 幻灯片36

**全部来源：** Week6b.pdf · PDF页36 / 幻灯片36

### PKI (public key infrastructure)

**稳定ID：** csit985-w6-0081

**类别：** 专业英语

**中文解释：** 公钥基础设施；第36页作为另一类列出，但未定义其组成或与算法的层次区别。

**简单英文（整理解释）：** Public key infrastructure; its components are not defined in these materials.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Public key infrastructure (PKI)

**原文来源：** Week6b.pdf · PDF页36 / 幻灯片36

**语境：** Week6 · PKI (public key infrastructure)

**语境英文：** Public key infrastructure; its components are not defined in these materials.

**语境中文：** 公钥基础设施；第36页作为另一类列出，但未定义其组成或与算法的层次区别。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Public key infrastructure (PKI)

**语境原文来源：** Week6b.pdf · PDF页36 / 幻灯片36

**语境来源：** Week6b.pdf · PDF页36 / 幻灯片36

**全部来源：** Week6b.pdf · PDF页36 / 幻灯片36

### NAT (Network Address Translation)

**稳定ID：** csit985-w6-0082

**类别：** 专业英语

**中文解释：** 网络地址转换；在 public 与 private addresses 之间建立 bindings。图39也转换端口；课件对 dynamic NAT 的命名有疑点。

**简单英文（整理解释）：** Creating address bindings between public and private networks; the diagram also translates ports.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> NAT is used to create bindings between public and private internet addresses

**原文来源：** Week6b.pdf · PDF页38 / 幻灯片38

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> private source address and a source port

**原文来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符38415起；搜索“private source address and a source port”

**语境：** Week6 · NAT (Network Address Translation)

**语境英文：** Creating address bindings between public and private networks; the diagram also translates ports.

**语境中文：** 网络地址转换；在 public 与 private addresses 之间建立 bindings。图39也转换端口；课件对 dynamic NAT 的命名有疑点。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> NAT is used to create bindings between public and private internet addresses

**语境原文来源：** Week6b.pdf · PDF页38 / 幻灯片38

**语境来源：** Week6b.pdf · PDF页38,39 / 幻灯片38,39

**语境：** Week6 · NAT (Network Address Translation)

**语境英文：** The example records address and port translations for return traffic.

**语境中文：** 录音补充图39同时改private source address与source port；translation table记录关系供reply mapping。这不等于所有dynamic NAT都是同一种映射。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> private source address and a source port

**语境原文来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符38415起；搜索“private source address and a source port”

**语境来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符38415起；搜索“private source address and a source port”

**全部来源：** Week6b.pdf · PDF页38,39 / 幻灯片38,39；CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符38415起；搜索“private source address and a source port”

### Static NAT / dynamic NAT

**稳定ID：** csit985-w6-0083

**类别：** 专业英语

**中文解释：** 静态／动态 NAT；课件写 static 为 one-one、dynamic 为 one-to-many。图39同时改端口，不能仅凭此把所有 dynamic NAT 都解释为同一映射形式。

**简单英文（整理解释）：** The slide contrasts one-to-one and one-to-many bindings; its terminology has a noted ambiguity.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Dynamic NAT – one-to-many address binding (generic devices)

**原文来源：** Week6b.pdf · PDF页38 / 幻灯片38

**语境：** Week6 · Static NAT / dynamic NAT

**语境英文：** The slide contrasts one-to-one and one-to-many bindings; its terminology has a noted ambiguity.

**语境中文：** 静态／动态 NAT；课件写 static 为 one-one、dynamic 为 one-to-many。图39同时改端口，不能仅凭此把所有 dynamic NAT 都解释为同一映射形式。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Dynamic NAT – one-to-many address binding (generic devices)

**语境原文来源：** Week6b.pdf · PDF页38 / 幻灯片38

**语境来源：** Week6b.pdf · PDF页38 / 幻灯片38

**全部来源：** Week6b.pdf · PDF页38 / 幻灯片38

### Network perimeter security

**稳定ID：** csit985-w6-0084

**类别：** 专业英语

**中文解释：** 网络边界安全；在外部接口与区域边界部署 NAT、firewall、packet filtering 等控制。

**简单英文（整理解释）：** Security controls at network interfaces and zone boundaries.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Network Perimeter Security

**原文来源：** Week6b.pdf · PDF页40 / 幻灯片40

**语境：** Week6 · Network perimeter security

**语境英文：** Security controls at network interfaces and zone boundaries.

**语境中文：** 网络边界安全；在外部接口与区域边界部署 NAT、firewall、packet filtering 等控制。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Network Perimeter Security

**语境原文来源：** Week6b.pdf · PDF页40 / 幻灯片40

**语境来源：** Week6b.pdf · PDF页40,41 / 幻灯片40,41

**全部来源：** Week6b.pdf · PDF页40,41 / 幻灯片40,41

### Firewall / DMZ / iLAN

**稳定ID：** csit985-w6-0085

**类别：** 专业英语

**中文解释：** 防火墙／隔离区／隔离 LAN；本讲列边界安全机制，图41把公开服务放在 DMZ。未分别给出完整正式定义。

**简单英文（整理解释）：** Perimeter-security mechanisms; the diagram places public services in a DMZ.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Firewalls, demilitarized zones (DMZs), isolation LANS (iLANs)

**原文来源：** Week6b.pdf · PDF页40 / 幻灯片40

**语境：** Week6 · Firewall / DMZ / iLAN

**语境英文：** Perimeter-security mechanisms; the diagram places public services in a DMZ.

**语境中文：** 防火墙／隔离区／隔离 LAN；本讲列边界安全机制，图41把公开服务放在 DMZ。未分别给出完整正式定义。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Firewalls, demilitarized zones (DMZs), isolation LANS (iLANs)

**语境原文来源：** Week6b.pdf · PDF页40 / 幻灯片40

**语境来源：** Week6b.pdf · PDF页40,41 / 幻灯片40,41

**全部来源：** Week6b.pdf · PDF页40,41 / 幻灯片40,41

### Application proxy / filtering gateway

**稳定ID：** csit985-w6-0086

**类别：** 专业英语

**中文解释：** 应用代理／过滤网关；图中 SMTP 和外部应用代理服务器属于 DMZ。课件未细化代理运行方式。

**简单英文（整理解释）：** Application-level intermediaries listed with filtering gateways.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Application proxies with filtering gateways

**原文来源：** Week6b.pdf · PDF页40 / 幻灯片40

**语境：** Week6 · Application proxy / filtering gateway

**语境英文：** Application-level intermediaries listed with filtering gateways.

**语境中文：** 应用代理／过滤网关；图中 SMTP 和外部应用代理服务器属于 DMZ。课件未细化代理运行方式。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Application proxies with filtering gateways

**语境原文来源：** Week6b.pdf · PDF页40 / 幻灯片40

**语境来源：** Week6b.pdf · PDF页40,41 / 幻灯片40,41

**全部来源：** Week6b.pdf · PDF页40,41 / 幻灯片40,41

### Embedded security zones / flatter security plan

**稳定ID：** csit985-w6-0087

**类别：** 专业英语

**中文解释：** 嵌套安全区域／较扁平的安全方案；前者区域包在区域内，后者在网络各处按组设置区域。没有一种模型自动适合所有网络。

**简单英文（整理解释）：** Security zones may be nested or spread across a flatter network.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> organize levels of security as embedded zones

**原文来源：** Week6b.pdf · PDF页44 / 幻灯片44

**语境：** Week6 · Embedded security zones / flatter security plan

**语境英文：** Security zones may be nested or spread across a flatter network.

**语境中文：** 嵌套安全区域／较扁平的安全方案；前者区域包在区域内，后者在网络各处按组设置区域。没有一种模型自动适合所有网络。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> organize levels of security as embedded zones

**语境原文来源：** Week6b.pdf · PDF页44 / 幻灯片44

**语境来源：** Week6b.pdf · PDF页44,45 / 幻灯片44,45

**全部来源：** Week6b.pdf · PDF页44,45 / 幻灯片44,45

### Out-of-band management

**稳定ID：** csit985-w6-0088

**类别：** 专业英语

**中文解释：** 带外管理；安全漏洞与 in-band management 相关时，课件说带外 NM 可能是必要的后备方案。不是保证任何故障下都可管理。

**简单英文（整理解释）：** An alternative management path that may be needed as a fallback.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Out of band NM may be a necessary fall back position

**原文来源：** Week6b.pdf · PDF页48 / 幻灯片48

**语境：** Week6 · Out-of-band management

**语境英文：** An alternative management path that may be needed as a fallback.

**语境中文：** 带外管理；安全漏洞与 in-band management 相关时，课件说带外 NM 可能是必要的后备方案。不是保证任何故障下都可管理。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Out of band NM may be a necessary fall back position

**语境原文来源：** Week6b.pdf · PDF页48 / 幻灯片48

**语境来源：** Week6b.pdf · PDF页48 / 幻灯片48

**全部来源：** Week6b.pdf · PDF页48 / 幻灯片48

### Trust boundary

**稳定ID：** csit985-w6-0119

**类别：** 专业英语

**中文解释：** 信任边界；从一个security zone进入另一个应有appropriate security decision。

**简单英文（整理解释）：** A boundary where moving between zones needs an appropriate security decision.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> trust boundaries. So moving from one zone to another should require an appropriate security decision.

**原文来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符40982起；搜索“trust boundaries. So moving”

**语境：** Week6 · Trust boundary

**语境英文：** A boundary where moving between zones needs an appropriate security decision.

**语境中文：** 信任边界；从一个security zone进入另一个应有appropriate security decision。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> trust boundaries. So moving from one zone to another should require an appropriate security decision.

**语境原文来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符40982起；搜索“trust boundaries. So moving”

**语境来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符40982起；搜索“trust boundaries. So moving”

**全部来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符40982起；搜索“trust boundaries. So moving”

## 阅读词汇

### payoff

**稳定ID：** csit985-w6-0033

**类别：** 阅读词汇

**中文解释：** 付出后得到的收益；这里问 requirement analysis 带来哪些实际好处。

**简单英文（整理解释）：** The useful result of earlier effort.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Requirement analysis payoff

**原文来源：** Week6a.pdf · PDF页5 / 幻灯片5

**语境：** Week6 · payoff

**语境英文：** The useful result of earlier effort.

**语境中文：** 付出后得到的收益；这里问 requirement analysis 带来哪些实际好处。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** the payoff from / of doing something

**语境原文：** 课件原文说明／用法（非正式定义）

> Requirement analysis payoff

**语境原文来源：** Week6a.pdf · PDF页5 / 幻灯片5

**语境来源：** Week6a.pdf · PDF页5 / 幻灯片5

**使用结构：** the payoff from / of doing something

**全部来源：** Week6a.pdf · PDF页5 / 幻灯片5

### informed choices

**稳定ID：** csit985-w3-f268a4047ffd50

**类别：** 阅读词汇

**中文解释：** 有依据的选择；选择前已有需求、用户和应用的信息。

**简单英文（整理解释）：** Choices based on useful information.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Objective, informed choices of network technologies and services

**原文来源：** Week6a.pdf · PDF页5 / 幻灯片5

**语境：** Week6 · informed choices

**语境英文：** Choices based on useful information.

**语境中文：** 有依据的选择；选择前已有需求、用户和应用的信息。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** make informed choices about something

**语境原文：** 课件原文说明／用法（非正式定义）

> Objective, informed choices of network technologies and services

**语境原文来源：** Week6a.pdf · PDF页5 / 幻灯片5

**语境来源：** Week6a.pdf · PDF页5 / 幻灯片5

**使用结构：** make informed choices about something

**全部来源：** Week6a.pdf · PDF页5 / 幻灯片5

### with the Big Picture in mind

**稳定ID：** csit985-w3-2cc575955a6027

**类别：** 阅读词汇

**中文解释：** 考虑整体；做局部权衡时仍记得整个网络的目标。

**简单英文（整理解释）：** Remembering the overall goals while making a smaller decision.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Tradeoffs made with the Big Picture in mind

**原文来源：** Week6a.pdf · PDF页5 / 幻灯片5

**语境：** Week6 · with the Big Picture in mind

**语境英文：** Remembering the overall goals while making a smaller decision.

**语境中文：** 考虑整体；做局部权衡时仍记得整个网络的目标。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** with something in mind

**语境原文：** 课件原文说明／用法（非正式定义）

> Tradeoffs made with the Big Picture in mind

**语境原文来源：** Week6a.pdf · PDF页5 / 幻灯片5

**语境来源：** Week6a.pdf · PDF页5 / 幻灯片5

**使用结构：** with something in mind

**全部来源：** Week6a.pdf · PDF页5 / 幻灯片5

### nonlinear problems

**稳定ID：** csit985-w6-0036

**类别：** 阅读词汇

**中文解释：** 非线性问题；这里说架构与设计不容易只按单一方向一步步解决。资料没有数学定义。

**简单英文（整理解释）：** Problems that are not described here as a simple straight sequence.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> attempts to solve nonlinear problems

**原文来源：** Week6a.pdf · PDF页6 / 幻灯片6

**语境：** Week6 · nonlinear problems

**语境英文：** Problems that are not described here as a simple straight sequence.

**语境中文：** 非线性问题；这里说架构与设计不容易只按单一方向一步步解决。资料没有数学定义。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> attempts to solve nonlinear problems

**语境原文来源：** Week6a.pdf · PDF页6 / 幻灯片6

**语境来源：** Week6a.pdf · PDF页6 / 幻灯片6

**全部来源：** Week6a.pdf · PDF页6 / 幻灯片6

### figure out where to begin

**稳定ID：** csit985-w6-0037

**类别：** 阅读词汇

**中文解释：** 弄清从哪里开始。figure out 表示通过思考找到答案。

**简单英文（整理解释）：** Work out where to start.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> figuring out where to begin can be difficult

**原文来源：** Week6a.pdf · PDF页6 / 幻灯片6

**语境：** Week6 · figure out where to begin

**语境英文：** Work out where to start.

**语境中文：** 弄清从哪里开始。figure out 表示通过思考找到答案。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** figure out + question word + to do

**语境原文：** 课件原文说明／用法（非正式定义）

> figuring out where to begin can be difficult

**语境原文来源：** Week6a.pdf · PDF页6 / 幻灯片6

**语境来源：** Week6a.pdf · PDF页6 / 幻灯片6

**使用结构：** figure out + question word + to do

**全部来源：** Week6a.pdf · PDF页6 / 幻灯片6

### multidimensional

**稳定ID：** csit985-w6-0038

**类别：** 阅读词汇

**中文解释：** 多维的；要同时考虑性能、安全、管理等多个方面。

**简单英文（整理解释）：** Having several connected aspects to consider.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> multidimensional problems

**原文来源：** Week6a.pdf · PDF页11 / 幻灯片11

**语境：** Week6 · multidimensional

**语境英文：** Having several connected aspects to consider.

**语境中文：** 多维的；要同时考虑性能、安全、管理等多个方面。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> multidimensional problems

**语境原文来源：** Week6a.pdf · PDF页11 / 幻灯片11

**语境来源：** Week6a.pdf · PDF页11 / 幻灯片11

**全部来源：** Week6a.pdf · PDF页11 / 幻灯片11

### systematic analysis

**稳定ID：** csit985-w6-0039

**类别：** 阅读词汇

**中文解释：** 有系统的分析；按有组织的方式分析，而不是随意选技术。

**简单英文（整理解释）：** Analysis done in an organized way.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> based on systematic analysis

**原文来源：** Week6a.pdf · PDF页11 / 幻灯片11

**语境：** Week6 · systematic analysis

**语境英文：** Analysis done in an organized way.

**语境中文：** 有系统的分析；按有组织的方式分析，而不是随意选技术。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** based on + noun

**语境原文：** 课件原文说明／用法（非正式定义）

> based on systematic analysis

**语境原文来源：** Week6a.pdf · PDF页11 / 幻灯片11

**语境来源：** Week6a.pdf · PDF页11 / 幻灯片11

**使用结构：** based on + noun

**全部来源：** Week6a.pdf · PDF页11 / 幻灯片11

### in depth

**稳定ID：** csit985-w6-0040

**类别：** 阅读词汇

**中文解释：** 深入；在表中形容 design 的细节层次。保留课件合写 InDepth 的疑点。

**简单英文（整理解释）：** In a detailed way.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> InDepth

**原文来源：** Week6a.pdf · PDF页10 / 幻灯片10

**语境：** Week6 · in depth

**语境英文：** In a detailed way.

**语境中文：** 深入；在表中形容 design 的细节层次。保留课件合写 InDepth 的疑点。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** study / examine something in depth

**语境原文：** 课件原文说明／用法（非正式定义）

> InDepth

**语境原文来源：** Week6a.pdf · PDF页10 / 幻灯片10

**语境来源：** Week6a.pdf · PDF页10 / 幻灯片10

**使用结构：** study / examine something in depth

**全部来源：** Week6a.pdf · PDF页10 / 幻灯片10

### be prone to failure

**稳定ID：** csit985-w6-0041

**类别：** 阅读词汇

**中文解释：** 容易发生故障；说风险倾向，不表示必然失败。

**简单英文（整理解释）：** Be likely to fail more easily.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> is more prone to failure.

**原文来源：** Week6a.pdf · PDF页18 / 幻灯片18

**语境：** Week6 · be prone to failure

**语境英文：** Be likely to fail more easily.

**语境中文：** 容易发生故障；说风险倾向，不表示必然失败。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** be prone to + noun

**语境原文：** 课件原文说明／用法（非正式定义）

> is more prone to failure.

**语境原文来源：** Week6a.pdf · PDF页18 / 幻灯片18

**语境来源：** Week6a.pdf · PDF页18 / 幻灯片18

**使用结构：** be prone to + noun

**全部来源：** Week6a.pdf · PDF页18 / 幻灯片18

### cope with

**稳定ID：** csit985-w4-r-00d9488c561e66

**类别：** 阅读词汇

**中文解释：** 应付、处理；这里指 RIP 能否处理大型分层拓扑。

**简单英文（整理解释）：** Deal successfully with something difficult.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> cope with large hierarchical network topologies

**原文来源：** Week6a.pdf · PDF页20 / 幻灯片20

**语境：** Week6 · cope with

**语境英文：** Deal successfully with something difficult.

**语境中文：** 应付、处理；这里指 RIP 能否处理大型分层拓扑。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** cope with + noun

**语境原文：** 课件原文说明／用法（非正式定义）

> cope with large hierarchical network topologies

**语境原文来源：** Week6a.pdf · PDF页20 / 幻灯片20

**语境来源：** Week6a.pdf · PDF页20 / 幻灯片20

**使用结构：** cope with + noun

**全部来源：** Week6a.pdf · PDF页20 / 幻灯片20

### transparent relationship

**稳定ID：** csit985-w6-0043

**类别：** 阅读词汇

**中文解释：** 清楚、可追溯的关系；这里指需求、流和架构之间的联系应当看得出来。

**简单英文（整理解释）：** A relationship that is clear and easy to trace.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> a transparent relationship

**原文来源：** Week6a.pdf · PDF页21 / 幻灯片21

**语境：** Week6 · transparent relationship

**语境英文：** A relationship that is clear and easy to trace.

**语境中文：** 清楚、可追溯的关系；这里指需求、流和架构之间的联系应当看得出来。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> a transparent relationship

**语境原文来源：** Week6a.pdf · PDF页21 / 幻灯片21

**语境来源：** Week6a.pdf · PDF页21 / 幻灯片21

**全部来源：** Week6a.pdf · PDF页21 / 幻灯片21

### robust and flexible

**稳定ID：** csit985-w6-0044

**类别：** 阅读词汇

**中文解释：** 稳健且灵活；用于描述设备间连接能力。课件没有量化标准。

**简单英文（整理解释）：** Able to work well and adapt to different needs.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> robust and flexible connectivity

**原文来源：** Week6a.pdf · PDF页22 / 幻灯片22

**语境：** Week6 · robust and flexible

**语境英文：** Able to work well and adapt to different needs.

**语境中文：** 稳健且灵活；用于描述设备间连接能力。课件没有量化标准。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> robust and flexible connectivity

**语境原文来源：** Week6a.pdf · PDF页22 / 幻灯片22

**语境来源：** Week6a.pdf · PDF页22 / 幻灯片22

**全部来源：** Week6a.pdf · PDF页22 / 幻灯片22

### as ... increase(s), ... decrease(s)

**稳定ID：** csit985-w6-0045

**类别：** 阅读词汇

**中文解释：** 随着……增加，……减少；这里描述 security mechanisms 增加时 performance 可能受影响。

**简单英文（整理解释）：** One thing changes as another thing changes.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> As security mechanisms increase

**原文来源：** Week6a.pdf · PDF页33 / 幻灯片33

**语境：** Week6 · as ... increase(s), ... decrease(s)

**语境英文：** One thing changes as another thing changes.

**语境中文：** 随着……增加，……减少；这里描述 security mechanisms 增加时 performance 可能受影响。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** as + clause, main clause

**语境原文：** 课件原文说明／用法（非正式定义）

> As security mechanisms increase

**语境原文来源：** Week6a.pdf · PDF页33 / 幻灯片33

**语境来源：** Week6a.pdf · PDF页33 / 幻灯片33

**使用结构：** as + clause, main clause

**全部来源：** Week6a.pdf · PDF页33 / 幻灯片33

### closely coupled

**稳定ID：** csit985-w6-0046

**类别：** 阅读词汇

**中文解释：** 紧密关联；这里routing与performance互相影响。

**简单英文（整理解释）：** Strongly linked to another process.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Performance can be closely coupled with routing.

**原文来源：** Week6a.pdf · PDF页36 / 幻灯片36

**语境：** Week6 · closely coupled

**语境英文：** Strongly linked to another process.

**语境中文：** 紧密关联；这里routing与performance互相影响。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** be coupled with + noun

**语境原文：** 课件原文说明／用法（非正式定义）

> Performance can be closely coupled with routing.

**语境原文来源：** Week6a.pdf · PDF页36 / 幻灯片36

**语境来源：** Week6a.pdf · PDF页36 / 幻灯片36

**使用结构：** be coupled with + noun

**全部来源：** Week6a.pdf · PDF页36 / 幻灯片36

### decoupled from

**稳定ID：** csit985-w6-0047

**类别：** 阅读词汇

**中文解释：** 解除紧密关联；routing简单性优先时，可用其他机制管理performance。

**简单英文（整理解释）：** Managed more separately from another process.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> performance may be decoupled from routing.

**原文来源：** Week6a.pdf · PDF页36 / 幻灯片36

**语境：** Week6 · decoupled from

**语境英文：** Managed more separately from another process.

**语境中文：** 解除紧密关联；routing简单性优先时，可用其他机制管理performance。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** be decoupled from + noun

**语境原文：** 课件原文说明／用法（非正式定义）

> performance may be decoupled from routing.

**语境原文来源：** Week6a.pdf · PDF页36 / 幻灯片36

**语境来源：** Week6a.pdf · PDF页36 / 幻灯片36

**使用结构：** be decoupled from + noun

**全部来源：** Week6a.pdf · PDF页36 / 幻灯片36

### draw on

**稳定ID：** csit985-w6-0048

**类别：** 阅读词汇

**中文解释：** 利用已有资料或工作；flow-based models 利用前面的需求收集工作。

**简单英文（整理解释）：** Use earlier work or knowledge.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> draw on requirements gathering work

**原文来源：** Week6a.pdf · PDF页42 / 幻灯片42

**语境：** Week6 · draw on

**语境英文：** Use earlier work or knowledge.

**语境中文：** 利用已有资料或工作；flow-based models 利用前面的需求收集工作。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** draw on + experience / information / work

**语境原文：** 课件原文说明／用法（非正式定义）

> draw on requirements gathering work

**语境原文来源：** Week6a.pdf · PDF页42 / 幻灯片42

**语境来源：** Week6a.pdf · PDF页42 / 幻灯片42

**使用结构：** draw on + experience / information / work

**全部来源：** Week6a.pdf · PDF页42 / 幻灯片42

### disclosure

**稳定ID：** csit985-w6-0089

**类别：** 阅读词汇

**中文解释：** 披露、泄露；这里指信息被未经授权地暴露，而不只是被修改。

**简单英文（整理解释）：** Making information known to someone.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Disclosure

**原文来源：** Week6b.pdf · PDF页5 / 幻灯片5

**语境：** Week6 · disclosure

**语境英文：** Making information known to someone.

**语境中文：** 披露、泄露；这里指信息被未经授权地暴露，而不只是被修改。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** unauthorized disclosure of information

**语境原文：** 课件原文说明／用法（非正式定义）

> Disclosure

**语境原文来源：** Week6b.pdf · PDF页5 / 幻灯片5

**语境来源：** Week6b.pdf · PDF页5,18 / 幻灯片5,18

**使用结构：** unauthorized disclosure of information

**全部来源：** Week6b.pdf · PDF页5,18 / 幻灯片5,18

### altered in transit

**稳定ID：** csit985-w6-0090

**类别：** 阅读词汇

**中文解释：** 在传输途中被更改；否定 not altered 必须一起理解。

**简单英文（整理解释）：** Changed while travelling between sender and receiver.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> not altered in transit.

**原文来源：** Week6b.pdf · PDF页9 / 幻灯片9

**语境：** Week6 · altered in transit

**语境英文：** Changed while travelling between sender and receiver.

**语境中文：** 在传输途中被更改；否定 not altered 必须一起理解。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** be altered in transit

**语境原文：** 课件原文说明／用法（非正式定义）

> not altered in transit.

**语境原文来源：** Week6b.pdf · PDF页9 / 幻灯片9

**语境来源：** Week6b.pdf · PDF页9 / 幻灯片9

**使用结构：** be altered in transit

**全部来源：** Week6b.pdf · PDF页9 / 幻灯片9

### when warranted

**稳定ID：** csit985-w6-0091

**类别：** 阅读词汇

**中文解释：** 有充分理由时；只有需求或风险支持增加复杂度，才逐步采用更复杂架构。

**简单英文（整理解释）：** When there is a good reason for it.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> when warranted

**原文来源：** Week6b.pdf · PDF页13 / 幻灯片13

**语境：** Week6 · when warranted

**语境英文：** When there is a good reason for it.

**语境中文：** 有充分理由时；只有需求或风险支持增加复杂度，才逐步采用更复杂架构。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** do something when warranted

**语境原文：** 课件原文说明／用法（非正式定义）

> when warranted

**语境原文来源：** Week6b.pdf · PDF页13 / 幻灯片13

**语境来源：** Week6b.pdf · PDF页13 / 幻灯片13

**使用结构：** do something when warranted

**全部来源：** Week6b.pdf · PDF页13 / 幻灯片13

### likelihood

**稳定ID：** csit985-w6-0092

**类别：** 阅读词汇

**中文解释：** 发生的可能性；这里评估每个 threat 的可能性。

**简单英文（整理解释）：** How likely something is to happen.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> The likelihood of each problem (threat)

**原文来源：** Week6b.pdf · PDF页14 / 幻灯片14

**语境：** Week6 · likelihood

**语境英文：** How likely something is to happen.

**语境中文：** 发生的可能性；这里评估每个 threat 的可能性。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** the likelihood of + noun / doing

**语境原文：** 课件原文说明／用法（非正式定义）

> The likelihood of each problem (threat)

**语境原文来源：** Week6b.pdf · PDF页14 / 幻灯片14

**语境来源：** Week6b.pdf · PDF页14 / 幻灯片14

**使用结构：** the likelihood of + noun / doing

**全部来源：** Week6b.pdf · PDF页14 / 幻灯片14

### bear in mind

**稳定ID：** csit985-w6-0093

**类别：** 阅读词汇

**中文解释：** 记住并在决策时考虑。这里提醒不同 groups 有不同安全需求。

**简单英文（整理解释）：** Remember something when making a decision.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Bear in mind that groups (FAs) have different security needs

**原文来源：** Week6b.pdf · PDF页14 / 幻灯片14

**语境：** Week6 · bear in mind

**语境英文：** Remember something when making a decision.

**语境中文：** 记住并在决策时考虑。这里提醒不同 groups 有不同安全需求。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** bear in mind that + clause

**语境原文：** 课件原文说明／用法（非正式定义）

> Bear in mind that groups (FAs) have different security needs

**语境原文来源：** Week6b.pdf · PDF页14 / 幻灯片14

**语境来源：** Week6b.pdf · PDF页14 / 幻灯片14

**使用结构：** bear in mind that + clause

**全部来源：** Week6b.pdf · PDF页14 / 幻灯片14

### subjective / subjectivity

**稳定ID：** csit985-w6-0094

**类别：** 阅读词汇

**中文解释：** 主观的／主观性；threat analysis 受参与者判断影响，加入不同群体可减少这种影响。

**简单英文（整理解释）：** Depending partly on personal judgement.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Threat analysis is subjective

**原文来源：** Week6b.pdf · PDF页19 / 幻灯片19

**语境：** Week6 · subjective / subjectivity

**语境英文：** Depending partly on personal judgement.

**语境中文：** 主观的／主观性；threat analysis 受参与者判断影响，加入不同群体可减少这种影响。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Threat analysis is subjective

**语境原文来源：** Week6b.pdf · PDF页19 / 幻灯片19

**语境来源：** Week6b.pdf · PDF页19 / 幻灯片19

**全部来源：** Week6b.pdf · PDF页19 / 幻灯片19

### periodically

**稳定ID：** csit985-w6-0095

**类别：** 阅读词汇

**中文解释：** 定期地；安全威胁会变，所以分析要重复。没有给出统一周期。

**简单英文（整理解释）：** At repeated times, not just once.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Repeat periodically

**原文来源：** Week6b.pdf · PDF页19 / 幻灯片19

**语境：** Week6 · periodically

**语境英文：** At repeated times, not just once.

**语境中文：** 定期地；安全威胁会变，所以分析要重复。没有给出统一周期。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Repeat periodically

**语境原文来源：** Week6b.pdf · PDF页19 / 幻灯片19

**语境来源：** Week6b.pdf · PDF页19 / 幻灯片19

**全部来源：** Week6b.pdf · PDF页19 / 幻灯片19

### to some extent

**稳定ID：** csit985-w6-0096

**类别：** 阅读词汇

**中文解释：** 在一定程度上；损害大小部分取决于网络目标。

**简单英文（整理解释）：** Partly, but not completely.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> depend to some extent on the goals of the network

**原文来源：** Week6b.pdf · PDF页21 / 幻灯片21

**语境：** Week6 · to some extent

**语境英文：** Partly, but not completely.

**语境中文：** 在一定程度上；损害大小部分取决于网络目标。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** depend to some extent on

**语境原文：** 课件原文说明／用法（非正式定义）

> depend to some extent on the goals of the network

**语境原文来源：** Week6b.pdf · PDF页21 / 幻灯片21

**语境来源：** Week6b.pdf · PDF页21 / 幻灯片21

**使用结构：** depend to some extent on

**全部来源：** Week6b.pdf · PDF页21 / 幻灯片21

### negate / reduce the risk

**稳定ID：** csit985-w6-0097

**类别：** 阅读词汇

**中文解释：** 消除／降低风险；原句要求在 probability 和 cost 都高时把风险降到 acceptable levels。

**简单英文（整理解释）：** Remove or lower a risk to an acceptable level.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> negate/reduce the risk to acceptable levels

**原文来源：** Week6b.pdf · PDF页21 / 幻灯片21

**语境：** Week6 · negate / reduce the risk

**语境英文：** Remove or lower a risk to an acceptable level.

**语境中文：** 消除／降低风险；原句要求在 probability 和 cost 都高时把风险降到 acceptable levels。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> negate/reduce the risk to acceptable levels

**语境原文来源：** Week6b.pdf · PDF页21 / 幻灯片21

**语境来源：** Week6b.pdf · PDF页21 / 幻灯片21

**全部来源：** Week6b.pdf · PDF页21 / 幻灯片21

### a double-edged sword

**稳定ID：** csit985-w6-0098

**类别：** 阅读词汇

**中文解释：** 双刃剑；安全控制能降低风险，但过度控制也会妨碍用户工作。

**简单英文（整理解释）：** Something with both benefits and harmful effects.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Security can be double-edged sword

**原文来源：** Week6b.pdf · PDF页22 / 幻灯片22

**语境：** Week6 · a double-edged sword

**语境英文：** Something with both benefits and harmful effects.

**语境中文：** 双刃剑；安全控制能降低风险，但过度控制也会妨碍用户工作。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Security can be double-edged sword

**语境原文来源：** Week6b.pdf · PDF页22 / 幻灯片22

**语境来源：** Week6b.pdf · PDF页22 / 幻灯片22

**全部来源：** Week6b.pdf · PDF页22 / 幻灯片22

### excessive control

**稳定ID：** csit985-w6-0099

**类别：** 阅读词汇

**中文解释：** 过度控制；控制强度超出支持组织目标所需的程度。

**简单英文（整理解释）：** More control than is useful or needed.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> excessive control over users and their actions

**原文来源：** Week6b.pdf · PDF页22 / 幻灯片22

**语境：** Week6 · excessive control

**语境英文：** More control than is useful or needed.

**语境中文：** 过度控制；控制强度超出支持组织目标所需的程度。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** excessive + noun

**语境原文：** 课件原文说明／用法（非正式定义）

> excessive control over users and their actions

**语境原文来源：** Week6b.pdf · PDF页22 / 幻灯片22

**语境来源：** Week6b.pdf · PDF页22 / 幻灯片22

**使用结构：** excessive + noun

**全部来源：** Week6b.pdf · PDF页22 / 幻灯片22

### risk exposure

**稳定ID：** csit985-w6-0100

**类别：** 阅读词汇

**中文解释：** 风险暴露；使用系统时面临风险的程度。

**简单英文（整理解释）：** How much risk someone or something faces.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> minimal risk exposure

**原文来源：** Week6b.pdf · PDF页23 / 幻灯片23

**语境：** Week6 · risk exposure

**语境英文：** How much risk someone or something faces.

**语境中文：** 风险暴露；使用系统时面临风险的程度。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** with minimal risk exposure

**语境原文：** 课件原文说明／用法（非正式定义）

> minimal risk exposure

**语境原文来源：** Week6b.pdf · PDF页23 / 幻灯片23

**语境来源：** Week6b.pdf · PDF页23 / 幻灯片23

**使用结构：** with minimal risk exposure

**全部来源：** Week6b.pdf · PDF页23 / 幻灯片23

### compliance

**稳定ID：** csit985-w1-a36c969935bf05

**类别：** 阅读词汇

**中文解释：** 遵守规定；这里指接受遵守安全规则的责任。

**简单英文（整理解释）：** Following rules or requirements.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> responsibility for compliance

**原文来源：** Week6b.pdf · PDF页27 / 幻灯片27

**语境：** Week6 · compliance

**语境英文：** Following rules or requirements.

**语境中文：** 遵守规定；这里指接受遵守安全规则的责任。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** compliance with + rules

**语境原文：** 课件原文说明／用法（非正式定义）

> responsibility for compliance

**语境原文来源：** Week6b.pdf · PDF页27 / 幻灯片27

**语境来源：** Week6b.pdf · PDF页27 / 幻灯片27

**使用结构：** compliance with + rules

**全部来源：** Week6b.pdf · PDF页27 / 幻灯片27

### patching

**稳定ID：** csit985-w6-0102

**类别：** 阅读词汇

**中文解释：** 给系统或应用安装修补更新；属于配置与管理工作的语境。

**简单英文（整理解释）：** Installing updates that fix software problems.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Patching operating systems and applications

**原文来源：** Week6b.pdf · PDF页28 / 幻灯片28

**语境：** Week6 · patching

**语境英文：** Installing updates that fix software problems.

**语境中文：** 给系统或应用安装修补更新；属于配置与管理工作的语境。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** patch + software / a system

**语境原文：** 课件原文说明／用法（非正式定义）

> Patching operating systems and applications

**语境原文来源：** Week6b.pdf · PDF页28 / 幻灯片28

**语境来源：** Week6b.pdf · PDF页28 / 幻灯片28

**使用结构：** patch + software / a system

**全部来源：** Week6b.pdf · PDF页28 / 幻灯片28

### off-site storage and archival

**稳定ID：** csit985-w6-0103

**类别：** 阅读词汇

**中文解释：** 异地存储与归档；off-site 表示在当前场所以外，不等于只在云上。

**简单英文（整理解释）：** Storing and keeping records at another location.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Off-site storage and archival

**原文来源：** Week6b.pdf · PDF页30 / 幻灯片30

**语境：** Week6 · off-site storage and archival

**语境英文：** Storing and keeping records at another location.

**语境中文：** 异地存储与归档；off-site 表示在当前场所以外，不等于只在云上。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Off-site storage and archival

**语境原文来源：** Week6b.pdf · PDF页30 / 幻灯片30

**语境来源：** Week6b.pdf · PDF页30 / 幻灯片30

**全部来源：** Week6b.pdf · PDF页30 / 幻灯片30

### masquerade

**稳定ID：** csit985-w6-0104

**类别：** 阅读词汇

**中文解释：** 冒充身份；此处是USM防护的威胁。

**简单英文（整理解释）：** Pretend to be another person or system.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Masquerades

**原文来源：** Week6b.pdf · PDF页34 / 幻灯片34

**语境：** Week6 · masquerade

**语境英文：** Pretend to be another person or system.

**语境中文：** 冒充身份；此处是USM防护的威胁。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** masquerade as + identity

**语境原文：** 课件原文说明／用法（非正式定义）

> Masquerades

**语境原文来源：** Week6b.pdf · PDF页34 / 幻灯片34

**语境来源：** Week6b.pdf · PDF页34 / 幻灯片34

**使用结构：** masquerade as + identity

**全部来源：** Week6b.pdf · PDF页34 / 幻灯片34

### eavesdropping

**稳定ID：** csit985-w6-0105

**类别：** 阅读词汇

**中文解释：** 偷听；原文写eaves dropping，与unauthorized disclosure相关。

**简单英文（整理解释）：** Secretly listen to information.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Disclosure (eaves dropping)

**原文来源：** Week6b.pdf · PDF页34 / 幻灯片34

**语境：** Week6 · eavesdropping

**语境英文：** Secretly listen to information.

**语境中文：** 偷听；原文写eaves dropping，与unauthorized disclosure相关。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** eavesdrop on + communication

**语境原文：** 课件原文说明／用法（非正式定义）

> Disclosure (eaves dropping)

**语境原文来源：** Week6b.pdf · PDF页34 / 幻灯片34

**语境来源：** Week6b.pdf · PDF页34 / 幻灯片34

**使用结构：** eavesdrop on + communication

**全部来源：** Week6b.pdf · PDF页34 / 幻灯片34

### be degraded by

**稳定ID：** csit985-w6-0106

**类别：** 阅读词汇

**中文解释：** 性能被降低某个幅度；15–85%是课件给出的范围，缺少环境与测试依据。

**简单英文（整理解释）：** Be reduced by a stated amount.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Network performance can be degraded by 15-85%

**原文来源：** Week6b.pdf · PDF页37 / 幻灯片37

**语境：** Week6 · be degraded by

**语境英文：** Be reduced by a stated amount.

**语境中文：** 性能被降低某个幅度；15–85%是课件给出的范围，缺少环境与测试依据。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** be degraded by + amount

**语境原文：** 课件原文说明／用法（非正式定义）

> Network performance can be degraded by 15-85%

**语境原文来源：** Week6b.pdf · PDF页37 / 幻灯片37

**语境来源：** Week6b.pdf · PDF页37 / 幻灯片37

**使用结构：** be degraded by + amount

**全部来源：** Week6b.pdf · PDF页37 / 幻灯片37

### work against

**稳定ID：** csit985-w6-0107

**类别：** 阅读词汇

**中文解释：** 对……不利、妨碍；动态地址使基于固定地址的措施及日志更难处理。

**简单英文（整理解释）：** Make another action or goal harder to achieve.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Dynamic address works against address – specific measures and logging

**原文来源：** Week6b.pdf · PDF页47 / 幻灯片47

**语境：** Week6 · work against

**语境英文：** Make another action or goal harder to achieve.

**语境中文：** 对……不利、妨碍；动态地址使基于固定地址的措施及日志更难处理。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** work against + noun

**语境原文：** 课件原文说明／用法（非正式定义）

> Dynamic address works against address – specific measures and logging

**语境原文来源：** Week6b.pdf · PDF页47 / 幻灯片47

**语境来源：** Week6b.pdf · PDF页47 / 幻灯片47

**使用结构：** work against + noun

**全部来源：** Week6b.pdf · PDF页47 / 幻灯片47

### fall back position

**稳定ID：** csit985-w6-0108

**类别：** 阅读词汇

**中文解释：** 后备方案；主方案受影响时可使用的替代办法。

**简单英文（整理解释）：** An alternative to use when the main approach has problems.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> fall back position

**原文来源：** Week6b.pdf · PDF页48 / 幻灯片48

**语境：** Week6 · fall back position

**语境英文：** An alternative to use when the main approach has problems.

**语境中文：** 后备方案；主方案受影响时可使用的替代办法。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> fall back position

**语境原文来源：** Week6b.pdf · PDF页48 / 幻灯片48

**语境来源：** Week6b.pdf · PDF页48 / 幻灯片48

**全部来源：** Week6b.pdf · PDF页48 / 幻灯片48

### be at odds

**稳定ID：** csit985-w6-0109

**类别：** 阅读词汇

**中文解释：** 相冲突；security与performance的目标可能产生张力。

**简单英文（整理解释）：** Be in conflict.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Security and performance are at odds

**原文来源：** Week6b.pdf · PDF页49 / 幻灯片49

**语境：** Week6 · be at odds

**语境英文：** Be in conflict.

**语境中文：** 相冲突；security与performance的目标可能产生张力。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** be at odds with + noun

**语境原文：** 课件原文说明／用法（非正式定义）

> Security and performance are at odds

**语境原文来源：** Week6b.pdf · PDF页49 / 幻灯片49

**语境来源：** Week6b.pdf · PDF页49 / 幻灯片49

**使用结构：** be at odds with + noun

**全部来源：** Week6b.pdf · PDF页49 / 幻灯片49

### selective application

**稳定ID：** csit985-w6-0110

**类别：** 阅读词汇

**中文解释：** 选择性应用；按需求只在适合的位置用security mechanisms。

**简单英文（整理解释）：** Apply controls only where they are needed.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> selective application of security

**原文来源：** Week6b.pdf · PDF页49 / 幻灯片49

**语境：** Week6 · selective application

**语境英文：** Apply controls only where they are needed.

**语境中文：** 选择性应用；按需求只在适合的位置用security mechanisms。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** selective application of + mechanism

**语境原文：** 课件原文说明／用法（非正式定义）

> selective application of security

**语境原文来源：** Week6b.pdf · PDF页49 / 幻灯片49

**语境来源：** Week6b.pdf · PDF页49 / 幻灯片49

**使用结构：** selective application of + mechanism

**全部来源：** Week6b.pdf · PDF页49 / 幻灯片49

### blanket application

**稳定ID：** csit985-w6-0111

**类别：** 阅读词汇

**中文解释：** 全面统一应用；不按区域差异选择的整体应用。

**简单英文（整理解释）：** Apply a control everywhere in the same way.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> blanket application

**原文来源：** Week6b.pdf · PDF页49 / 幻灯片49

**语境：** Week6 · blanket application

**语境英文：** Apply a control everywhere in the same way.

**语境中文：** 全面统一应用；不按区域差异选择的整体应用。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** blanket application of + rule

**语境原文：** 课件原文说明／用法（非正式定义）

> blanket application

**语境原文来源：** Week6b.pdf · PDF页49 / 幻灯片49

**语境来源：** Week6b.pdf · PDF页49 / 幻灯片49

**使用结构：** blanket application of + rule

**全部来源：** Week6b.pdf · PDF页49 / 幻灯片49

### preclude

**稳定ID：** csit985-w6-0112

**类别：** 阅读词汇

**中文解释：** 使……无法实现、排除可能性；强安全机制可能不只是限制，也可能阻止某种性能目标。

**简单英文（整理解释）：** Prevent something from being possible.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> restrict or preclude performance

**原文来源：** Week6b.pdf · PDF页50 / 幻灯片50

**语境：** Week6 · preclude

**语境英文：** Prevent something from being possible.

**语境中文：** 使……无法实现、排除可能性；强安全机制可能不只是限制，也可能阻止某种性能目标。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** preclude + noun / doing

**语境原文：** 课件原文说明／用法（非正式定义）

> restrict or preclude performance

**语境原文来源：** Week6b.pdf · PDF页50 / 幻灯片50

**语境来源：** Week6b.pdf · PDF页50 / 幻灯片50

**使用结构：** preclude + noun / doing

**全部来源：** Week6b.pdf · PDF页50 / 幻灯片50

### rationale

**稳定ID：** csit985-w6-0113

**类别：** 阅读词汇

**中文解释：** 依据、理由；解释从requirements到flows再到architecture choice的理由。

**简单英文（整理解释）：** The reasons behind a design choice.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> rationale Behind your design

**原文来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符10200起；搜索“rationale Behind your design”

**语境：** Week6 · rationale

**语境英文：** The reasons behind a design choice.

**语境中文：** 依据、理由；解释从requirements到flows再到architecture choice的理由。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**使用结构：** the rationale behind / for + choice

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> rationale Behind your design

**语境原文来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符10200起；搜索“rationale Behind your design”

**语境来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符10200起；搜索“rationale Behind your design”

**使用结构：** the rationale behind / for + choice

**全部来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符10200起；搜索“rationale Behind your design”

### interplay

**稳定ID：** csit985-w6-0114

**类别：** 阅读词汇

**中文解释：** 相互作用；说明不同机制如何一起发挥作用。

**简单英文（整理解释）：** The way different parts affect each other.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> interplay between them

**原文来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符6287起；搜索“interplay between them”

**语境：** Week6 · interplay

**语境英文：** The way different parts affect each other.

**语境中文：** 相互作用；说明不同机制如何一起发挥作用。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**使用结构：** the interplay between A and B

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> interplay between them

**语境原文来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符6287起；搜索“interplay between them”

**语境来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符6287起；搜索“interplay between them”

**使用结构：** the interplay between A and B

**全部来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符6287起；搜索“interplay between them”

### resilience

**稳定ID：** csit985-w6-0115

**类别：** 阅读词汇

**中文解释：** 应对故障并继续工作或恢复的能力；distributed management可改善它，但coordination可能更复杂。

**简单英文（整理解释）：** The ability to keep working or recover after problems.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> resilience, but it may be very complex to coordinate

**原文来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符8030起；搜索“resilience, but it may be”

**语境：** Week6 · resilience

**语境英文：** The ability to keep working or recover after problems.

**语境中文：** 应对故障并继续工作或恢复的能力；distributed management可改善它，但coordination可能更复杂。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> resilience, but it may be very complex to coordinate

**语境原文来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符8030起；搜索“resilience, but it may be”

**语境来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符8030起；搜索“resilience, but it may be”

**全部来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符8030起；搜索“resilience, but it may be”

### enforce

**稳定ID：** csit985-w6-0116

**类别：** 阅读词汇

**中文解释：** 使规则实际生效；没有机制执行SLA，承诺就没有实际作用。

**简单英文（整理解释）：** Make a rule or agreement take effect.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> mechanism to Enforce it

**原文来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符8904起；搜索“mechanism to Enforce it”

**语境：** Week6 · enforce

**语境英文：** Make a rule or agreement take effect.

**语境中文：** 使规则实际生效；没有机制执行SLA，承诺就没有实际作用。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**使用结构：** enforce + policy / rule / agreement

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> mechanism to Enforce it

**语境原文来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符8904起；搜索“mechanism to Enforce it”

**语境来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符8904起；搜索“mechanism to Enforce it”

**使用结构：** enforce + policy / rule / agreement

**全部来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符8904起；搜索“mechanism to Enforce it”

### sensitive information

**稳定ID：** csit985-w6-0117

**类别：** 阅读词汇

**中文解释：** 敏感信息；未经授权披露可能伤害个人或组织的信息。

**简单英文（整理解释）：** Information that needs careful protection.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> confidential and sensitive information

**原文来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符39802起；搜索“confidential and sensitive information”

**语境：** Week6 · sensitive information

**语境英文：** Information that needs careful protection.

**语境中文：** 敏感信息；未经授权披露可能伤害个人或组织的信息。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> confidential and sensitive information

**语境原文来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符39802起；搜索“confidential and sensitive information”

**语境来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符39802起；搜索“confidential and sensitive information”

**全部来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符39802起；搜索“confidential and sensitive information”

### appropriate balance

**稳定ID：** csit985-w6-0118

**类别：** 阅读词汇

**中文解释：** 合适的平衡；按requirements和risk为各zone选择security/performance程度。TXT写room，疑似zone相关转写，不默改。

**简单英文（整理解释）：** A balance that suits the requirements and risks.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> the appropriate balance for each room

**原文来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符43550起；搜索“the appropriate balance for each room”

**语境：** Week6 · appropriate balance

**语境英文：** A balance that suits the requirements and risks.

**语境中文：** 合适的平衡；按requirements和risk为各zone选择security/performance程度。TXT写room，疑似zone相关转写，不默改。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**使用结构：** strike / choose an appropriate balance

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> the appropriate balance for each room

**语境原文来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符43550起；搜索“the appropriate balance for each room”

**语境来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符43550起；搜索“the appropriate balance for each room”

**使用结构：** strike / choose an appropriate balance

**全部来源：** CSIT985_Lecture6_-transcript.txt · TXT原始L2，本行字符43550起；搜索“the appropriate balance for each room”
