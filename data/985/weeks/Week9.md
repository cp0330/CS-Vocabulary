# CSIT985 Week9 词汇

由本周可读JSON自动生成。原文与整理说明分开；跨周条目保留全部来源和不同义项。原PDF及完整录音TXT不在网站中。

## 重要疑点与来源限制

**位置：** PDF页2

**说明：** Week9.pdf共76页，Network Management，CSIT985 Spring 2026；CSIT985_Lecture9-transcript.txt原始L2回顾Week8 performance后讲management，与课件对应。PDF页码与幻灯片编号相同。只用本次指定资料，不执行课件内ping等指令。

**位置：** PDF页8,10,24,27

**说明：** 第8页四类tasks把planning单列，第10页将monitoring分成event与trend，不再单列planning；是不同组织方式，不删除其中一种。第24页real word疑似real world。第27页VDU展开Virtual Display Unit，TXT原始L2说visual ... display unit（夹有停顿）；有措辞冲突，以显示屏语境解释并保留PDF原文。MIB与historical database须区分。

**位置：** PDF页31,33,35,36,37

**说明：** 第31页默认32 bytes为示例平台说法，不推广到所有Windows/Mac/Linux默认值。第33页100ms是图示threshold。第35页标题Event，第36/37页标题Trend Notification，但连续使用同一个实时轮询例。第37页720 polling intervals/day乘24 hours/day单位不一致，应与上方720/hour对照；不默改原公式。5秒平均1740800/5=348160bits/s，约348Kb/s；1.74Mb/s spike还需发送持续时长假设。30081024000bits约30.081Gb（课件约30.2Gb）；存储442368000 bytes约442MB及年161GB为十进制近似，不把bits和bytes混用。

**位置：** PDF页42,51,52,54,55,56,59,60

**说明：** Telnet/FTP/TFTP仅是课件列出的工具，TXT补充SSH/SFTP例子，未据此作当前使用推荐。Out-of-band写MOST events，不是ALL；若共享失效电源或设备本身无电，带外也可能不能恢复。Hybrid保留两种方案的成本与风险。TXT说centralized服务也可冗余、distributed并不自动能接管失败collector。第59页2–5%、>10%及每subnet一个monitor是课件规划建议，TXT明确为heuristics，非普遍要求；WAN-LAN monitor可兼顾已有LAN监测。

**位置：** PDF页61,62,64,65

**说明：** Counter可能rollover、restart reset或不更新；跨vendor数据须先核对口径再比较。archive与backup在TXT中用途不同，归档不替代恢复备份。图64的local每5分钟、archive每日示例不是固定周期；at night只是可能的低流量时段。metadata保留类型、单位、时间和来源等语境，不把孤立值当作可解释结果。

**位置：** PDF页68,72,74

**说明：** Northbound是架构朝service/business management方向，不是地理方向；第72页Management domain = autonomous domain与TXT原始L2明确not necessarily the same冲突。一个AS可有多个management domains，管理责任也可能跨AS；本次保留等式原文与录音差异，不把二者默合。带外网络仍需access control和保护，不自动安全。

**位置：** TXT

**说明：** TXT原始L2有ICNMP/SMNMP、IIB/RAB、pulling、rotor、visual ... display unit等疑似SNMP、MIB、polling、router及停顿转写；采用对应PDF规范拼写，保留必要原片段与字符锚点。未提供原音频，未核实发音或录音里的assessment日期与安排。

## 专业英语

### Network management

**稳定ID：** csit985-w6-0015

**类别：** 专业英语

**中文解释：** 网络管理：控制、规划、分配、部署、协调和监测network resources；还含provider的SLA/policy合规检查、主动监测和asset management。

**简单英文（整理解释）：** Controlling, planning, allocating, deploying, coordinating, and monitoring network resources.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Network management’s functions: control, plan, allocate, deploy, coordinate, and monitor network resources.

**原文来源：** Week9.pdf · PDF页5 / 幻灯片5

**语境：** Week9 · Network management

**语境英文：** Controlling, planning, allocating, deploying, coordinating, and monitoring network resources.

**语境中文：** 网络管理：控制、规划、分配、部署、协调和监测network resources；还含provider的SLA/policy合规检查、主动监测和asset management。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Network management’s functions: control, plan, allocate, deploy, coordinate, and monitor network resources.

**语境原文来源：** Week9.pdf · PDF页5 / 幻灯片5

**语境来源：** Week9.pdf · PDF页5 / 幻灯片5

**全部来源：** Week9.pdf · PDF页5 / 幻灯片5

### Business management

**稳定ID：** csit985-w9-0002

**类别：** 专业英语

**中文解释：** 业务管理层：budgets、resources、planning、agreements；在多层结构上方，较抽象。

**简单英文（整理解释）：** Management of budgets, resources, planning, and agreements.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Budgets, resources, planning, agreements

**原文来源：** Week9.pdf · PDF页7 / 幻灯片7

**语境：** Week9 · Business management

**语境英文：** Management of budgets, resources, planning, and agreements.

**语境中文：** 业务管理层：budgets、resources、planning、agreements；在多层结构上方，较抽象。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Budgets, resources, planning, agreements

**语境原文来源：** Week9.pdf · PDF页7 / 幻灯片7

**语境来源：** Week9.pdf · PDF页7 / 幻灯片7

**全部来源：** Week9.pdf · PDF页7 / 幻灯片7

### Service management

**稳定ID：** csit985-w9-0003

**类别：** 专业英语

**中文解释：** 服务管理层：access bandwidth、data storage、application delivery等用户收到的服务。

**简单英文（整理解释）：** Management of the services users receive.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Access bandwidth, data storage, application delivery

**原文来源：** Week9.pdf · PDF页7 / 幻灯片7

**语境：** Week9 · Service management

**语境英文：** Management of the services users receive.

**语境中文：** 服务管理层：access bandwidth、data storage、application delivery等用户收到的服务。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Access bandwidth, data storage, application delivery

**语境原文来源：** Week9.pdf · PDF页7 / 幻灯片7

**语境来源：** Week9.pdf · PDF页7 / 幻灯片7

**全部来源：** Week9.pdf · PDF页7 / 幻灯片7

### Network management layer

**稳定ID：** csit985-w9-0004

**类别：** 专业英语

**中文解释：** 网络管理层：看整个network的所有devices，与单device或同类devices管理不同。

**简单英文（整理解释）：** Management across all devices in the entire network.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> All devices across the entire network

**原文来源：** Week9.pdf · PDF页7 / 幻灯片7

**语境：** Week9 · Network management layer

**语境英文：** Management across all devices in the entire network.

**语境中文：** 网络管理层：看整个network的所有devices，与单device或同类devices管理不同。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> All devices across the entire network

**语境原文来源：** Week9.pdf · PDF页7 / 幻灯片7

**语境来源：** Week9.pdf · PDF页7 / 幻灯片7

**全部来源：** Week9.pdf · PDF页7 / 幻灯片7

### Element management / EMS

**稳定ID：** csit985-w9-0005

**类别：** 专业英语

**中文解释：** 元素管理／Element Management System；管理相似devices的集合，如access routers。图57每个local EMS有自己的management domain。

**简单英文（整理解释）：** Management of collections of similar devices; each local EMS may have its own domain.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Collections of similar network devices

**原文来源：** Week9.pdf · PDF页7 / 幻灯片7

**语境：** Week9 · Element management / EMS

**语境英文：** Management of collections of similar devices; each local EMS may have its own domain.

**语境中文：** 元素管理／Element Management System；管理相似devices的集合，如access routers。图57每个local EMS有自己的management domain。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Collections of similar network devices

**语境原文来源：** Week9.pdf · PDF页7 / 幻灯片7

**语境来源：** Week9.pdf · PDF页7 / 幻灯片7

**全部来源：** Week9.pdf · PDF页7 / 幻灯片7

### Network-element management

**稳定ID：** csit985-w9-0006

**类别：** 专业英语

**中文解释：** 网络元素管理：针对单个network device，例如single router。要与element management的集合范围区分。

**简单英文（整理解释）：** Management of one individual network device.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Individual network devices

**原文来源：** Week9.pdf · PDF页7 / 幻灯片7

**语境：** Week9 · Network-element management

**语境英文：** Management of one individual network device.

**语境中文：** 网络元素管理：针对单个network device，例如single router。要与element management的集合范围区分。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Individual network devices

**语境原文来源：** Week9.pdf · PDF页7 / 幻灯片7

**语境来源：** Week9.pdf · PDF页7 / 幻灯片7

**全部来源：** Week9.pdf · PDF页7 / 幻灯片7

### Transport of management information

**稳定ID：** csit985-w9-0007

**类别：** 专业英语

**中文解释：** 管理信息传输；跨network交换management data的功能，在此对应SNMP。

**简单英文（整理解释）：** Moving management information between devices and management systems.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Transport of management information across the network

**原文来源：** Week9.pdf · PDF页8 / 幻灯片8

**语境：** Week9 · Transport of management information

**语境英文：** Moving management information between devices and management systems.

**语境中文：** 管理信息传输；跨network交换management data的功能，在此对应SNMP。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Transport of management information across the network

**语境原文来源：** Week9.pdf · PDF页8 / 幻灯片8

**语境来源：** Week9.pdf · PDF页8,9 / 幻灯片8,9

**全部来源：** Week9.pdf · PDF页8,9 / 幻灯片8,9

### Management information elements

**稳定ID：** csit985-w9-0008

**类别：** 专业英语

**中文解释：** 管理信息元素；另一基本功能是定义／管理这些信息的含义，本讲用MIB承担结构化描述。

**简单英文（整理解释）：** The defined pieces of management information, described through MIBs.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Definition and Management of network management information elements

**原文来源：** Week9.pdf · PDF页9 / 幻灯片9

**语境：** Week9 · Management information elements

**语境英文：** The defined pieces of management information, described through MIBs.

**语境中文：** 管理信息元素；另一基本功能是定义／管理这些信息的含义，本讲用MIB承担结构化描述。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Definition and Management of network management information elements

**语境原文来源：** Week9.pdf · PDF页9 / 幻灯片9

**语境来源：** Week9.pdf · PDF页8,9 / 幻灯片8,9

**全部来源：** Week9.pdf · PDF页8,9 / 幻灯片8,9

### Network device

**稳定ID：** csit985-w9-0009

**类别：** 专业英语

**中文解释：** 网络设备：参与一个或多个protocol layers的独立network component，如end devices、routers、switches、hubs。

**简单英文（整理解释）：** An individual network component participating at one or more protocol layers.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> An individual component of the network that participates at one or more layers of the protocol

**原文来源：** Week9.pdf · PDF页12 / 幻灯片12

**语境：** Week9 · Network device

**语境英文：** An individual network component participating at one or more protocol layers.

**语境中文：** 网络设备：参与一个或多个protocol layers的独立network component，如end devices、routers、switches、hubs。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> An individual component of the network that participates at one or more layers of the protocol

**语境原文来源：** Week9.pdf · PDF页12 / 幻灯片12

**语境来源：** Week9.pdf · PDF页12 / 幻灯片12

**全部来源：** Week9.pdf · PDF页12 / 幻灯片12

### Per-element / per-link / per-network / end-to-end characteristics

**稳定ID：** csit985-w9-0010

**类别：** 专业英语

**中文解释：** 逐元素／逐链路／逐网络／端到端特征；测量范围不同。end-to-end结果接近用户体验，但单独结果不一定定位故障组件。

**简单英文（整理解释）：** Characteristics measured for one device, one link, a network, or an entire traffic path.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Network characteristics can be per element, per link, per network, or end-to-end.

**原文来源：** Week9.pdf · PDF页13 / 幻灯片13

**语境：** Week9 · Per-element / per-link / per-network / end-to-end characteristics

**语境英文：** Characteristics measured for one device, one link, a network, or an entire traffic path.

**语境中文：** 逐元素／逐链路／逐网络／端到端特征；测量范围不同。end-to-end结果接近用户体验，但单独结果不一定定位故障组件。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Network characteristics can be per element, per link, per network, or end-to-end.

**语境原文来源：** Week9.pdf · PDF页13 / 幻灯片13

**语境来源：** Week9.pdf · PDF页13,14,15 / 幻灯片13,14,15

**全部来源：** Week9.pdf · PDF页13,14,15 / 幻灯片13,14,15

### Propagation delay / link utilization

**稳定ID：** csit985-w9-0011

**类别：** 专业英语

**中文解释：** 传播时延／链路利用率；per-link指标例子。本页未给公式，不把每种delay都写成propagation delay。

**简单英文（整理解释）：** Examples of per-link measurements; no new formula is defined here.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Per link : Propagation delay, link utilization

**原文来源：** Week9.pdf · PDF页15 / 幻灯片15

**语境：** Week9 · Propagation delay / link utilization

**语境英文：** Examples of per-link measurements; no new formula is defined here.

**语境中文：** 传播时延／链路利用率；per-link指标例子。本页未给公式，不把每种delay都写成propagation delay。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Per link : Propagation delay, link utilization

**语境原文来源：** Week9.pdf · PDF页15 / 幻灯片15

**语境来源：** Week9.pdf · PDF页15 / 幻灯片15

**全部来源：** Week9.pdf · PDF页15 / 幻灯片15

### IP forwarding rate / buffer utilization

**稳定ID：** csit985-w9-0012

**类别：** 专业英语

**中文解释：** IP转发速率／buffer利用率；per-element指标例子，测device而非整个end-to-end path。

**简单英文（整理解释）：** Examples of measurements for individual devices.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Per element: IP forwarding rates, buffer utilization

**原文来源：** Week9.pdf · PDF页15 / 幻灯片15

**语境：** Week9 · IP forwarding rate / buffer utilization

**语境英文：** Examples of measurements for individual devices.

**语境中文：** IP转发速率／buffer利用率；per-element指标例子，测device而非整个end-to-end path。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Per element: IP forwarding rates, buffer utilization

**语境原文来源：** Week9.pdf · PDF页15 / 幻灯片15

**语境来源：** Week9.pdf · PDF页15 / 幻灯片15

**全部来源：** Week9.pdf · PDF页15 / 幻灯片15

### FCAPS

**稳定ID：** csit985-w6-0016

**类别：** 专业英语

**中文解释：** 故障、配置、核算、性能、安全管理五类。TXT说明fault找故障、configuration改设置、accounting看资源使用、performance看表现、security保护访问；一次事件可涉及多类。

**简单英文（整理解释）：** Five management areas that can overlap during one incident.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Fault management

**原文来源：** Week9.pdf · PDF页49 / 幻灯片49

**语境：** Week9 · FCAPS

**语境英文：** Five management areas that can overlap during one incident.

**语境中文：** 故障、配置、核算、性能、安全管理五类。TXT说明fault找故障、configuration改设置、accounting看资源使用、performance看表现、security保护访问；一次事件可涉及多类。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Fault management

**语境原文来源：** Week9.pdf · PDF页49 / 幻灯片49

**语境来源：** Week9.pdf · PDF页16,49 / 幻灯片16,49

**全部来源：** Week9.pdf · PDF页16,49 / 幻灯片16,49

### SNMP (Simple Network Management Protocol)

**稳定ID：** csit985-w2-6216ecc5e48baa

**类别：** 专业英语

**中文解释：** 简单网络管理协议；收集／配置device parameters，并用traps发主动event notifications。访问参数按MIB组织，不等于历史数据存储。

**简单英文（整理解释）：** A protocol for collecting and configuring parameters and sending event notifications.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Simple Network Management Protocol (SNMP)

**原文来源：** Week9.pdf · PDF页18 / 幻灯片18

**语境：** Week9 · SNMP (Simple Network Management Protocol)

**语境英文：** A protocol for collecting and configuring parameters and sending event notifications.

**语境中文：** 简单网络管理协议；收集／配置device parameters，并用traps发主动event notifications。访问参数按MIB组织，不等于历史数据存储。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Simple Network Management Protocol (SNMP)

**语境原文来源：** Week9.pdf · PDF页18 / 幻灯片18

**语境来源：** Week9.pdf · PDF页18,19 / 幻灯片18,19

**全部来源：** Week9.pdf · PDF页18,19 / 幻灯片18,19

### Trap (SNMP)

**稳定ID：** csit985-w9-0015

**类别：** 专业英语

**中文解释：** SNMP主动通知；device在event发生时发送，不需先等manager轮询请求。

**简单英文（整理解释）：** An unsolicited event notification from a managed device.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Unsolicited notification of events through traps

**原文来源：** Week9.pdf · PDF页19 / 幻灯片19

**语境：** Week9 · Trap (SNMP)

**语境英文：** An unsolicited event notification from a managed device.

**语境中文：** SNMP主动通知；device在event发生时发送，不需先等manager轮询请求。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Unsolicited notification of events through traps

**语境原文来源：** Week9.pdf · PDF页19 / 幻灯片19

**语境来源：** Week9.pdf · PDF页19 / 幻灯片19

**全部来源：** Week9.pdf · PDF页19 / 幻灯片19

### SNMPv3

**稳定ID：** csit985-w9-0016

**类别：** 专业英语

**中文解释：** SNMP版本3；课件列更安全的authentication、获取参数blocks、为多数parameters生成trap。TXT另提privacy/encryption，不把课件“更安全”当作无条件安全保证。

**简单英文（整理解释）：** SNMP version 3 with security-related capabilities described in these materials.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> More secure authentication

**原文来源：** Week9.pdf · PDF页19 / 幻灯片19

**语境：** Week9 · SNMPv3

**语境英文：** SNMP version 3 with security-related capabilities described in these materials.

**语境中文：** SNMP版本3；课件列更安全的authentication、获取参数blocks、为多数parameters生成trap。TXT另提privacy/encryption，不把课件“更安全”当作无条件安全保证。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> More secure authentication

**语境原文来源：** Week9.pdf · PDF页19 / 幻灯片19

**语境来源：** Week9.pdf · PDF页19 / 幻灯片19

**全部来源：** Week9.pdf · PDF页19 / 幻灯片19

### CMIP / CMOT

**稳定ID：** csit985-w9-0017

**类别：** 专业英语

**中文解释：** Common Management Information Protocol／CMIP Over TCP/IP；OSI管理相关协议，操作种类比SNMP多，课件说更复杂并作历史介绍。

**简单英文（整理解释）：** Management protocols presented as more complex historical alternatives; CMOT is CMIP over TCP/IP.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Including CMOT which is CMIP Over TCP/IP

**原文来源：** Week9.pdf · PDF页18 / 幻灯片18

**语境：** Week9 · CMIP / CMOT

**语境英文：** Management protocols presented as more complex historical alternatives; CMOT is CMIP over TCP/IP.

**语境中文：** Common Management Information Protocol／CMIP Over TCP/IP；OSI管理相关协议，操作种类比SNMP多，课件说更复杂并作历史介绍。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Including CMOT which is CMIP Over TCP/IP

**语境原文来源：** Week9.pdf · PDF页18 / 幻灯片18

**语境来源：** Week9.pdf · PDF页18,20 / 幻灯片18,20

**全部来源：** Week9.pdf · PDF页18,20 / 幻灯片18,20

### MIB (Management Information Base)

**稳定ID：** csit985-w6-0017

**类别：** 专业英语

**中文解释：** 管理信息库：包含managed resources的properties及agents所支持services的定义和信息。课件明确说不是database，TXT说明不是历史测量数据库；定义与收集后存储的值须区分。

**简单英文（整理解释）：** Definitions and information about managed properties and services, not a historical measurement database.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> An MIB contains definitions and information about the properties of managed resources and the services that the agents support.

**原文来源：** Week9.pdf · PDF页22 / 幻灯片22

**资料原文：** 课件原文说明／用法（非正式定义）

> MIB is not a database!

**原文来源：** Week9.pdf · PDF页24 / 幻灯片24

**语境：** Week9 · MIB (Management Information Base)

**语境英文：** Definitions and information about managed properties and services, not a historical measurement database.

**语境中文：** 管理信息库：包含managed resources的properties及agents所支持services的定义和信息。课件明确说不是database，TXT说明不是历史测量数据库；定义与收集后存储的值须区分。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> An MIB contains definitions and information about the properties of managed resources and the services that the agents support.

**语境原文来源：** Week9.pdf · PDF页22 / 幻灯片22

**语境来源：** Week9.pdf · PDF页22,24 / 幻灯片22,24

**语境：** Week9 · MIB (Management Information Base)

**语境英文：** The slide explicitly states that an MIB is not a database; historical values are stored by the monitoring system.

**语境中文：** 课件明确否定：MIB不是database。TXT进一步区分MIB定义与monitoring system保存的历史values；不把这句否定省略。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> MIB is not a database!

**语境原文来源：** Week9.pdf · PDF页24 / 幻灯片24

**语境来源：** Week9.pdf · PDF页24 / 幻灯片24

**全部来源：** Week9.pdf · PDF页22,24 / 幻灯片22,24；Week9.pdf · PDF页24 / 幻灯片24

### Managed objects / management variables

**稳定ID：** csit985-w9-0019

**类别：** 专业英语

**中文解释：** 受管理对象／管理变量；SNMP-compliant MIB所定义的可管理resource features，也简称objects/variables。

**简单英文（整理解释）：** Manageable resource features defined in an SNMP-compliant MIB.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> The manageable features of resources, as defined in an SNMP-compliant MIB, are called managed objects or management variables (or just objects or variables).

**原文来源：** Week9.pdf · PDF页22 / 幻灯片22

**语境：** Week9 · Managed objects / management variables

**语境英文：** Manageable resource features defined in an SNMP-compliant MIB.

**语境中文：** 受管理对象／管理变量；SNMP-compliant MIB所定义的可管理resource features，也简称objects/variables。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> The manageable features of resources, as defined in an SNMP-compliant MIB, are called managed objects or management variables (or just objects or variables).

**语境原文来源：** Week9.pdf · PDF页22 / 幻灯片22

**语境来源：** Week9.pdf · PDF页22 / 幻灯片22

**全部来源：** Week9.pdf · PDF页22 / 幻灯片22

### MIB-II

**稳定ID：** csit985-w9-0020

**类别：** 专业英语

**中文解释：** MIB-II；课件用其标准基础参数集合示范per-interface计数。各counter计的对象不同，不能互换bytes与packets。

**简单英文（整理解释）：** A standard set of management parameters illustrated through interface counters.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> the standard MIB-II

**原文来源：** Week9.pdf · PDF页23 / 幻灯片23

**语境：** Week9 · MIB-II

**语境英文：** A standard set of management parameters illustrated through interface counters.

**语境中文：** MIB-II；课件用其标准基础参数集合示范per-interface计数。各counter计的对象不同，不能互换bytes与packets。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> the standard MIB-II

**语境原文来源：** Week9.pdf · PDF页23 / 幻灯片23

**语境来源：** Week9.pdf · PDF页23 / 幻灯片23

**全部来源：** Week9.pdf · PDF页23 / 幻灯片23

### ifInOctets / ifOutOctets

**稳定ID：** csit985-w9-0021

**类别：** 专业英语

**中文解释：** 收到／发出的bytes数量；octet为8 bits，不是packet count。TXT可据counter变化计算rate，但还需time信息。

**简单英文（整理解释）：** Counters for bytes received and sent, not packet counts.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> ifInOctets Number of bytes received

**原文来源：** Week9.pdf · PDF页23 / 幻灯片23

**语境：** Week9 · ifInOctets / ifOutOctets

**语境英文：** Counters for bytes received and sent, not packet counts.

**语境中文：** 收到／发出的bytes数量；octet为8 bits，不是packet count。TXT可据counter变化计算rate，但还需time信息。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> ifInOctets Number of bytes received

**语境原文来源：** Week9.pdf · PDF页23 / 幻灯片23

**语境来源：** Week9.pdf · PDF页23 / 幻灯片23

**全部来源：** Week9.pdf · PDF页23 / 幻灯片23

### ifInUcastPkts / ifOutUcastPkts

**稳定ID：** csit985-w9-0022

**类别：** 专业英语

**中文解释：** 收到／发出的unicast packets数量；不是所有traffic packets的统一计数。

**简单英文（整理解释）：** Counters for received and sent unicast packets.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> ifInUcastPkts Number of unicast packets received

**原文来源：** Week9.pdf · PDF页23 / 幻灯片23

**语境：** Week9 · ifInUcastPkts / ifOutUcastPkts

**语境英文：** Counters for received and sent unicast packets.

**语境中文：** 收到／发出的unicast packets数量；不是所有traffic packets的统一计数。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> ifInUcastPkts Number of unicast packets received

**语境原文来源：** Week9.pdf · PDF页23 / 幻灯片23

**语境来源：** Week9.pdf · PDF页23 / 幻灯片23

**全部来源：** Week9.pdf · PDF页23 / 幻灯片23

### ifInNUcastPkts / ifOutNUcastPkts

**稳定ID：** csit985-w9-0023

**类别：** 专业英语

**中文解释：** 收到／发出的multicast/broadcast packets数量；课件把两种非unicast放在这一组。

**简单英文（整理解释）：** Counters for received and sent multicast or broadcast packets.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> ifInNUcastPkts Number of multicast/broadcast packets received

**原文来源：** Week9.pdf · PDF页23 / 幻灯片23

**语境：** Week9 · ifInNUcastPkts / ifOutNUcastPkts

**语境英文：** Counters for received and sent multicast or broadcast packets.

**语境中文：** 收到／发出的multicast/broadcast packets数量；课件把两种非unicast放在这一组。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> ifInNUcastPkts Number of multicast/broadcast packets received

**语境原文来源：** Week9.pdf · PDF页23 / 幻灯片23

**语境来源：** Week9.pdf · PDF页23 / 幻灯片23

**全部来源：** Week9.pdf · PDF页23 / 幻灯片23

### ifInErrors / ifOutErrors

**稳定ID：** csit985-w9-0024

**类别：** 专业英语

**中文解释：** 收到的错误packets／不能发送的packets数量；两项描述并非完全对称，不补成相同定义。

**简单英文（整理解释）：** Counters for erroneous incoming packets and packets that could not be sent.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> ifOutErrors Number of packets that could not be sent

**原文来源：** Week9.pdf · PDF页23 / 幻灯片23

**语境：** Week9 · ifInErrors / ifOutErrors

**语境英文：** Counters for erroneous incoming packets and packets that could not be sent.

**语境中文：** 收到的错误packets／不能发送的packets数量；两项描述并非完全对称，不补成相同定义。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> ifOutErrors Number of packets that could not be sent

**语境原文来源：** Week9.pdf · PDF页23 / 幻灯片23

**语境来源：** Week9.pdf · PDF页23 / 幻灯片23

**全部来源：** Week9.pdf · PDF页23 / 幻灯片23

### Monitoring mechanisms

**稳定ID：** csit985-w9-0025

**类别：** 专业英语

**中文解释：** 监测机制：收集、处理、显示及归档end-to-end或per-link/element的values。

**简单英文（整理解释）：** Mechanisms for collecting, processing, displaying, and keeping measured values.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Obtaining values for end-to-end, per link/element characteristics

**原文来源：** Week9.pdf · PDF页27 / 幻灯片27

**语境：** Week9 · Monitoring mechanisms

**语境英文：** Mechanisms for collecting, processing, displaying, and keeping measured values.

**语境中文：** 监测机制：收集、处理、显示及归档end-to-end或per-link/element的values。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Obtaining values for end-to-end, per link/element characteristics

**语境原文来源：** Week9.pdf · PDF页27 / 幻灯片27

**语境来源：** Week9.pdf · PDF页27 / 幻灯片27

**全部来源：** Week9.pdf · PDF页27 / 幻灯片27

### Polling

**稳定ID：** csit985-w9-0026

**类别：** 专业英语

**中文解释：** 轮询；主动探测devices取得数据。short intervals可更快发现event，但增加traffic和resource burden。

**简单英文（整理解释）：** Actively asking devices for information at intervals.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Collection (polling) – actively probing devices

**原文来源：** Week9.pdf · PDF页27 / 幻灯片27

**语境：** Week9 · Polling

**语境英文：** Actively asking devices for information at intervals.

**语境中文：** 轮询；主动探测devices取得数据。short intervals可更快发现event，但增加traffic和resource burden。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Collection (polling) – actively probing devices

**语境原文来源：** Week9.pdf · PDF页27 / 幻灯片27

**语境来源：** Week9.pdf · PDF页27 / 幻灯片27

**全部来源：** Week9.pdf · PDF页27 / 幻灯片27

### Event notification / trend analysis

**稳定ID：** csit985-w9-0027

**类别：** 专业英语

**中文解释：** 事件通知／趋势分析；前者关注需要注意的event，后者用随时间记录的数据看长期变化。同一measurement可用于两者。

**简单英文（整理解释）：** Noticing events now, or analysing changes over a longer time.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> trend analysis – data averaged over time

**原文来源：** Week9.pdf · PDF页27 / 幻灯片27

**语境：** Week9 · Event notification / trend analysis

**语境英文：** Noticing events now, or analysing changes over a longer time.

**语境中文：** 事件通知／趋势分析；前者关注需要注意的event，后者用随时间记录的数据看长期变化。同一measurement可用于两者。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> trend analysis – data averaged over time

**语境原文来源：** Week9.pdf · PDF页27 / 幻灯片27

**语境来源：** Week9.pdf · PDF页27,28 / 幻灯片27,28

**全部来源：** Week9.pdf · PDF页27,28 / 幻灯片27,28

### VDU

**稳定ID：** csit985-w9-0028

**类别：** 专业英语

**中文解释：** 显示终端；PDF展开为Virtual Display Unit，TXT说visual display unit，名称有冲突。此处指显示tables/graphs的screen，不默改PDF原文。

**简单英文（整理解释）：** A display screen in this context; the PDF and transcript use different expansions.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> VDU (Virtual Display Unit)

**原文来源：** Week9.pdf · PDF页27 / 幻灯片27

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> visual uh display unit.

**原文来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符16898起；搜索“visual uh display unit.”

**语境：** Week9 · VDU

**语境英文：** A display screen in this context; the PDF and transcript use different expansions.

**语境中文：** 显示终端；PDF展开为Virtual Display Unit，TXT说visual display unit，名称有冲突。此处指显示tables/graphs的screen，不默改PDF原文。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> VDU (Virtual Display Unit)

**语境原文来源：** Week9.pdf · PDF页27 / 幻灯片27

**语境来源：** Week9.pdf · PDF页27 / 幻灯片27

**语境：** Week9 · VDU

**语境英文：** A screen for displaying monitoring results; the expanded name differs between sources.

**语境中文：** TXT说visual display unit，夹有uh停顿；与PDF的Virtual展开不同，但都指display screen。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> visual uh display unit.

**语境原文来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符16898起；搜索“visual uh display unit.”

**语境来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符16898起；搜索“visual uh display unit.”

**全部来源：** Week9.pdf · PDF页27 / 幻灯片27；CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符16898起；搜索“visual uh display unit.”

### CLI (command line interface)

**稳定ID：** csit985-w9-0029

**类别：** 专业英语

**中文解释：** 命令行接口；通过direct access获取设备信息。资料中的操作示例只是学习内容，本次不执行。

**简单英文（整理解释）：** A text-command interface used for direct access to device information.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> CLI (command line interface)

**原文来源：** Week9.pdf · PDF页29 / 幻灯片29

**语境：** Week9 · CLI (command line interface)

**语境英文：** A text-command interface used for direct access to device information.

**语境中文：** 命令行接口；通过direct access获取设备信息。资料中的操作示例只是学习内容，本次不执行。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> CLI (command line interface)

**语境原文来源：** Week9.pdf · PDF页29 / 幻灯片29

**语境来源：** Week9.pdf · PDF页29 / 幻灯片29

**全部来源：** Week9.pdf · PDF页29 / 幻灯片29

### Nagios / Zabbix

**稳定ID：** csit985-w9-0030

**类别：** 专业英语

**中文解释：** 监测工具名称；用于把多来源information汇总，课件没有详细产品功能定义。

**简单英文（整理解释）：** Named monitoring tools for consolidating information; detailed features are not defined here.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Programs such as Nagios, Zabbix

**原文来源：** Week9.pdf · PDF页29 / 幻灯片29

**语境：** Week9 · Nagios / Zabbix

**语境英文：** Named monitoring tools for consolidating information; detailed features are not defined here.

**语境中文：** 监测工具名称；用于把多来源information汇总，课件没有详细产品功能定义。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Programs such as Nagios, Zabbix

**语境原文来源：** Week9.pdf · PDF页29 / 幻灯片29

**语境来源：** Week9.pdf · PDF页29 / 幻灯片29

**全部来源：** Week9.pdf · PDF页29 / 幻灯片29

### ICMP (Internet Control Message Protocol)

**稳定ID：** csit985-w9-0031

**类别：** 专业英语

**中文解释：** 互联网控制报文协议；与IP相关，用于error messages、test packets及informational messages。ping成功不等于测得link capacity。

**简单英文（整理解释）：** A protocol for IP-related control, error, and test messages.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Internet Control Message Protocol

**原文来源：** Week9.pdf · PDF页30 / 幻灯片30

**语境：** Week9 · ICMP (Internet Control Message Protocol)

**语境英文：** A protocol for IP-related control, error, and test messages.

**语境中文：** 互联网控制报文协议；与IP相关，用于error messages、test packets及informational messages。ping成功不等于测得link capacity。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Internet Control Message Protocol

**语境原文来源：** Week9.pdf · PDF页30 / 幻灯片30

**语境来源：** Week9.pdf · PDF页30 / 幻灯片30

**全部来源：** Week9.pdf · PDF页30 / 幻灯片30

### Ping

**稳定ID：** csit985-w4-ad953df41dab8d

**类别：** 专业英语

**中文解释：** 使用ICMP的连通性测试；示例32 bytes只作简单connectivity test，不能充分给链路加负荷。TXT指出不是bandwidth test；默认大小依平台，不能把32写成所有系统统一值。

**简单英文（整理解释）：** An ICMP-based connectivity test that does not measure link capacity by itself.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> simple connectivity tests

**原文来源：** Week9.pdf · PDF页31 / 幻灯片31

**语境：** Week9 · Ping

**语境英文：** An ICMP-based connectivity test that does not measure link capacity by itself.

**语境中文：** 使用ICMP的连通性测试；示例32 bytes只作简单connectivity test，不能充分给链路加负荷。TXT指出不是bandwidth test；默认大小依平台，不能把32写成所有系统统一值。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> simple connectivity tests

**语境原文来源：** Week9.pdf · PDF页31 / 幻灯片31

**语境来源：** Week9.pdf · PDF页30,31 / 幻灯片30,31

**全部来源：** Week9.pdf · PDF页30,31 / 幻灯片30,31

### Network event

**稳定ID：** csit985-w9-0033

**类别：** 专业英语

**中文解释：** 网络事件：值得注意的发生情况，如failure、threshold crossing或upgrade notification；短暂变化需要real-time analysis。

**简单英文（整理解释）：** Something in the network worth noticing, such as a failure or threshold crossing.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> An event is something that occurs in the network that is worth noticing

**原文来源：** Week9.pdf · PDF页32 / 幻灯片32

**语境：** Week9 · Network event

**语境英文：** Something in the network worth noticing, such as a failure or threshold crossing.

**语境中文：** 网络事件：值得注意的发生情况，如failure、threshold crossing或upgrade notification；短暂变化需要real-time analysis。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> An event is something that occurs in the network that is worth noticing

**语境原文来源：** Week9.pdf · PDF页32 / 幻灯片32

**语境来源：** Week9.pdf · PDF页32 / 幻灯片32

**全部来源：** Week9.pdf · PDF页32 / 幻灯片32

### Polling interval / threshold crossing

**稳定ID：** csit985-w9-0034

**类别：** 专业英语

**中文解释：** 轮询间隔／越过阈值；较短interval支持real-time analysis但消耗资源。图33的100ms threshold是示例，不是所有applications的统一界线。

**简单英文（整理解释）：** Time between polls and a measured value crossing a limit; the shown limit is an example.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Real-time analysis has short polling intervals

**原文来源：** Week9.pdf · PDF页32 / 幻灯片32

**语境：** Week9 · Polling interval / threshold crossing

**语境英文：** Time between polls and a measured value crossing a limit; the shown limit is an example.

**语境中文：** 轮询间隔／越过阈值；较短interval支持real-time analysis但消耗资源。图33的100ms threshold是示例，不是所有applications的统一界线。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Real-time analysis has short polling intervals

**语境原文来源：** Week9.pdf · PDF页32 / 幻灯片32

**语境来源：** Week9.pdf · PDF页32,33 / 幻灯片32,33

**全部来源：** Week9.pdf · PDF页32,33 / 幻灯片32,33

### Polling session / protocol overhead

**稳定ID：** csit985-w9-0035

**类别：** 专业英语

**中文解释：** 一次轮询／协议额外开销；示例100×4×8=3200项，每项8 bytes数据加60 bytes overhead，一次217600 bytes=1740800 bits。5秒平均348160bits/s；spike的时长未完整说明。

**简单英文（整理解释）：** One collection round and its protocol traffic; average rate depends on the polling interval.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> 60 bytes of protocol overhead

**原文来源：** Week9.pdf · PDF页36 / 幻灯片36

**语境：** Week9 · Polling session / protocol overhead

**语境英文：** One collection round and its protocol traffic; average rate depends on the polling interval.

**语境中文：** 一次轮询／协议额外开销；示例100×4×8=3200项，每项8 bytes数据加60 bytes overhead，一次217600 bytes=1740800 bits。5秒平均348160bits/s；spike的时长未完整说明。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> 60 bytes of protocol overhead

**语境原文来源：** Week9.pdf · PDF页36 / 幻灯片36

**语境来源：** Week9.pdf · PDF页35,36,37 / 幻灯片35,36,37

**全部来源：** Week9.pdf · PDF页35,36,37 / 幻灯片35,36,37

### Baseline establishment

**稳定ID：** csit985-w9-0036

**类别：** 专业英语

**中文解释：** 建立基线；用continuous、uninterrupted collection形成参照，再绘制长期trend behaviour。不是一次sample就构成可靠基线。

**简单英文（整理解释）：** Establishing a reference from continuous data collection for later trend comparison.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Continuous, uninterrupted data collection can be used for baseline establishment

**原文来源：** Week9.pdf · PDF页38 / 幻灯片38

**语境：** Week9 · Baseline establishment

**语境英文：** Establishing a reference from continuous data collection for later trend comparison.

**语境中文：** 建立基线；用continuous、uninterrupted collection形成参照，再绘制长期trend behaviour。不是一次sample就构成可靠基线。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Continuous, uninterrupted data collection can be used for baseline establishment

**语境原文来源：** Week9.pdf · PDF页38 / 幻灯片38

**语境来源：** Week9.pdf · PDF页38 / 幻灯片38

**全部来源：** Week9.pdf · PDF页38 / 幻灯片38

### Instrumentation

**稳定ID：** csit985-w9-0037

**类别：** 专业英语

**中文解释：** 监测与探测工具集；用于取得network management data，包含SNMP、monitoring tools和direct access。

**简单英文（整理解释）：** Tools and utilities for monitoring and probing management data.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Set of tools and utilities needed to monitor and probe the network for management data

**原文来源：** Week9.pdf · PDF页41 / 幻灯片41

**语境：** Week9 · Instrumentation

**语境英文：** Tools and utilities for monitoring and probing management data.

**语境中文：** 监测与探测工具集；用于取得network management data，包含SNMP、monitoring tools和direct access。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Set of tools and utilities needed to monitor and probe the network for management data

**语境原文来源：** Week9.pdf · PDF页41 / 幻灯片41

**语境来源：** Week9.pdf · PDF页41 / 幻灯片41

**全部来源：** Week9.pdf · PDF页41 / 幻灯片41

### TCPdump / traceroute

**稳定ID：** csit985-w9-0038

**类别：** 专业英语

**中文解释：** 网络工具名称；列为instrumentation utilities。课件未提供TCPdump操作或完整定义，不由工具名补编命令。

**简单英文（整理解释）：** Utilities listed for instrumentation; no commands or full definitions are supplied here.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Ping, traceroute, TCPdump

**原文来源：** Week9.pdf · PDF页42 / 幻灯片42

**语境：** Week9 · TCPdump / traceroute

**语境英文：** Utilities listed for instrumentation; no commands or full definitions are supplied here.

**语境中文：** 网络工具名称；列为instrumentation utilities。课件未提供TCPdump操作或完整定义，不由工具名补编命令。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Ping, traceroute, TCPdump

**语境原文来源：** Week9.pdf · PDF页42 / 幻灯片42

**语境来源：** Week9.pdf · PDF页42 / 幻灯片42

**全部来源：** Week9.pdf · PDF页42 / 幻灯片42

### Telnet / FTP / TFTP

**稳定ID：** csit985-w9-0039

**类别：** 专业英语

**中文解释：** direct access的协议／工具例；TFTP展开Trivial File Transfer Protocol。本页未给安全性或现行使用建议。

**简单英文（整理解释）：** Direct-access examples; TFTP means Trivial File Transfer Protocol.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> TFTP (Trivial File Transfer Protocol)

**原文来源：** Week9.pdf · PDF页42 / 幻灯片42

**语境：** Week9 · Telnet / FTP / TFTP

**语境英文：** Direct-access examples; TFTP means Trivial File Transfer Protocol.

**语境中文：** direct access的协议／工具例；TFTP展开Trivial File Transfer Protocol。本页未给安全性或现行使用建议。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> TFTP (Trivial File Transfer Protocol)

**语境原文来源：** Week9.pdf · PDF页42 / 幻灯片42

**语境来源：** Week9.pdf · PDF页42 / 幻灯片42

**全部来源：** Week9.pdf · PDF页42 / 幻灯片42

### Separation and replication

**稳定ID：** csit985-w9-0040

**类别：** 专业英语

**中文解释：** 分离与复制；instrumentation需dependable，课件列此机制但未给实施细则或保证级别。

**简单英文（整理解释）：** Separating and replicating components to support dependable monitoring.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Separation and replication

**原文来源：** Week9.pdf · PDF页43 / 幻灯片43

**语境：** Week9 · Separation and replication

**语境英文：** Separating and replicating components to support dependable monitoring.

**语境中文：** 分离与复制；instrumentation需dependable，课件列此机制但未给实施细则或保证级别。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Separation and replication

**语境原文来源：** Week9.pdf · PDF页43 / 幻灯片43

**语境来源：** Week9.pdf · PDF页43 / 幻灯片43

**全部来源：** Week9.pdf · PDF页43 / 幻灯片43

### Configuration mechanisms

**稳定ID：** csit985-w9-0041

**类别：** 专业英语

**中文解释：** 配置机制：为network device运行和控制设置parameters；方式包括direct access、remote access、downloading configuration files。

**简单英文（整理解释）：** Setting device parameters through direct access, remote access, or configuration files.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Setting parameters for operation and control of network device

**原文来源：** Week9.pdf · PDF页45 / 幻灯片45

**语境：** Week9 · Configuration mechanisms

**语境英文：** Setting device parameters through direct access, remote access, or configuration files.

**语境中文：** 配置机制：为network device运行和控制设置parameters；方式包括direct access、remote access、downloading configuration files。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Setting parameters for operation and control of network device

**语境原文来源：** Week9.pdf · PDF页45 / 幻灯片45

**语境来源：** Week9.pdf · PDF页45,46 / 幻灯片45,46

**全部来源：** Week9.pdf · PDF页45,46 / 幻灯片45,46

### In-band management

**稳定ID：** csit985-w9-0042

**类别：** 专业英语

**中文解释：** 带内管理；management data走与users/applications同样的network paths，不需独立网络，但也会受相同故障影响。

**简单英文（整理解释）：** Management using the same network paths as user traffic, with shared failure risks.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Network management data uses the same network paths as flows for users and their applications

**原文来源：** Week9.pdf · PDF页51 / 幻灯片51

**语境：** Week9 · In-band management

**语境英文：** Management using the same network paths as user traffic, with shared failure risks.

**语境中文：** 带内管理；management data走与users/applications同样的network paths，不需独立网络，但也会受相同故障影响。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Network management data uses the same network paths as flows for users and their applications

**语境原文来源：** Week9.pdf · PDF页51 / 幻灯片51

**语境来源：** Week9.pdf · PDF页51 / 幻灯片51

**全部来源：** Week9.pdf · PDF页51 / 幻灯片51

### Out-of-band management

**稳定ID：** csit985-w6-0088

**类别：** 专业英语

**中文解释：** 带外管理；提供alternative path，通常独立network，在MOST network events期间可继续监测。需额外费用、复杂度及保护，不能译成所有故障都可用。

**简单英文（整理解释）：** Management using an alternative path that can survive most, not all, network events.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> An alternative path is provided for network management data flows

**原文来源：** Week9.pdf · PDF页52 / 幻灯片52

**资料原文：** 课件原文说明／用法（非正式定义）

> Network management systems can continue to monitor network during MOST network events

**原文来源：** Week9.pdf · PDF页52 / 幻灯片52

**语境：** Week9 · Out-of-band management

**语境英文：** Management using an alternative path that can survive most, not all, network events.

**语境中文：** 带外管理；提供alternative path，通常独立network，在MOST network events期间可继续监测。需额外费用、复杂度及保护，不能译成所有故障都可用。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> An alternative path is provided for network management data flows

**语境原文来源：** Week9.pdf · PDF页52 / 幻灯片52

**语境来源：** Week9.pdf · PDF页52 / 幻灯片52

**语境：** Week9 · Out-of-band management

**语境英文：** An alternative path can survive most network events, but not every possible failure.

**语境中文：** 原文只说MOST network events期间可继续monitor，不是任何event都能存活。TXT说明共同power故障或device无电仍可能失效。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Network management systems can continue to monitor network during MOST network events

**语境原文来源：** Week9.pdf · PDF页52 / 幻灯片52

**语境来源：** Week9.pdf · PDF页52 / 幻灯片52

**全部来源：** Week9.pdf · PDF页52 / 幻灯片52

### POTS (Plain Old Telephone Service)

**稳定ID：** csit985-w9-0044

**类别：** 专业英语

**中文解释：** 普通传统电话服务；作为独立带外network的例子，不是带外管理唯一方式。

**简单英文（整理解释）：** A telephone-service example of an out-of-band network.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> POTS (Plain Old Telephone Service)

**原文来源：** Week9.pdf · PDF页52 / 幻灯片52

**语境：** Week9 · POTS (Plain Old Telephone Service)

**语境英文：** A telephone-service example of an out-of-band network.

**语境中文：** 普通传统电话服务；作为独立带外network的例子，不是带外管理唯一方式。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> POTS (Plain Old Telephone Service)

**语境原文来源：** Week9.pdf · PDF页52 / 幻灯片52

**语境来源：** Week9.pdf · PDF页52 / 幻灯片52

**全部来源：** Week9.pdf · PDF页52 / 幻灯片52

### Hybrid in-band / out-of-band management

**稳定ID：** csit985-w9-0045

**类别：** 专业英语

**中文解释：** 混合带内／带外管理；带内承担data-intensive tasks，带外在用户网络失败时保留basic monitoring，同时也承担两种方案的弱点。

**简单英文（整理解释）：** Combining normal high-volume management with alternative basic monitoring during failures.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> The weaknesses of both are also incurred

**原文来源：** Week9.pdf · PDF页54 / 幻灯片54

**语境：** Week9 · Hybrid in-band / out-of-band management

**语境英文：** Combining normal high-volume management with alternative basic monitoring during failures.

**语境中文：** 混合带内／带外管理；带内承担data-intensive tasks，带外在用户网络失败时保留basic monitoring，同时也承担两种方案的弱点。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> The weaknesses of both are also incurred

**语境原文来源：** Week9.pdf · PDF页54 / 幻灯片54

**语境来源：** Week9.pdf · PDF页54 / 幻灯片54

**全部来源：** Week9.pdf · PDF页54 / 幻灯片54

### Centralized network management

**稳定ID：** csit985-w6-0009

**类别：** 专业英语

**中文解释：** 集中式管理；single management system汇聚flows，架构较简单、成本较低，但有single-point-of-failure及congestion风险。TXT说明集中服务仍可有redundancy。

**简单英文（整理解释）：** Management concentrated in one system, with simpler control and possible traffic or failure concentration.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> All management data radiates from a single management system

**原文来源：** Week9.pdf · PDF页55 / 幻灯片55

**语境：** Week9 · Centralized network management

**语境英文：** Management concentrated in one system, with simpler control and possible traffic or failure concentration.

**语境中文：** 集中式管理；single management system汇聚flows，架构较简单、成本较低，但有single-point-of-failure及congestion风险。TXT说明集中服务仍可有redundancy。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> All management data radiates from a single management system

**语境原文来源：** Week9.pdf · PDF页55 / 幻灯片55

**语境来源：** Week9.pdf · PDF页55 / 幻灯片55

**全部来源：** Week9.pdf · PDF页55 / 幻灯片55

### Distributed network management

**稳定ID：** csit985-w6-0010

**类别：** 专业英语

**中文解释：** 分布式管理；多个strategically placed components或本地monitoring devices，流量本地化并可增加监测冗余，但成本增加。TXT说分布本身不自动保证可接管故障角色。

**简单英文（整理解释）：** Management spread across local components, with more coordination and cost.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Monitoring devices localize traffic

**原文来源：** Week9.pdf · PDF页56 / 幻灯片56

**语境：** Week9 · Distributed network management

**语境英文：** Management spread across local components, with more coordination and cost.

**语境中文：** 分布式管理；多个strategically placed components或本地monitoring devices，流量本地化并可增加监测冗余，但成本增加。TXT说分布本身不自动保证可接管故障角色。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Monitoring devices localize traffic

**语境原文来源：** Week9.pdf · PDF页56 / 幻灯片56

**语境来源：** Week9.pdf · PDF页56,57 / 幻灯片56,57

**全部来源：** Week9.pdf · PDF页56,57 / 幻灯片56,57

### Hierarchical management

**稳定ID：** csit985-w9-0048

**类别：** 专业英语

**中文解释：** 分层管理；不同functions分配到多platforms，本地collection、区域EMS、display、storage各承担职责。

**简单英文（整理解释）：** Management functions divided across levels and platforms.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Hierarchical management separates management into distinct functions that are distributed across multiple platforms.

**原文来源：** Week9.pdf · PDF页58 / 幻灯片58

**语境：** Week9 · Hierarchical management

**语境英文：** Management functions divided across levels and platforms.

**语境中文：** 分层管理；不同functions分配到多platforms，本地collection、区域EMS、display、storage各承担职责。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Hierarchical management separates management into distinct functions that are distributed across multiple platforms.

**语境原文来源：** Week9.pdf · PDF页58 / 幻灯片58

**语境来源：** Week9.pdf · PDF页58 / 幻灯片58

**全部来源：** Week9.pdf · PDF页58 / 幻灯片58

### Single point of failure / redundancy

**稳定ID：** csit985-w9-0049

**类别：** 专业英语

**中文解释：** 单点故障风险／冗余；centralized结构需考虑集中点失效，distributed结构可重复monitoring。但是否能接管仍取决于设计和配置。

**简单英文（整理解释）：** A failure at a central point, and extra components that may support continued operation.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Single point of failure

**原文来源：** Week9.pdf · PDF页55 / 幻灯片55

**语境：** Week9 · Single point of failure / redundancy

**语境英文：** A failure at a central point, and extra components that may support continued operation.

**语境中文：** 单点故障风险／冗余；centralized结构需考虑集中点失效，distributed结构可重复monitoring。但是否能接管仍取决于设计和配置。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Single point of failure

**语境原文来源：** Week9.pdf · PDF页55 / 幻灯片55

**语境来源：** Week9.pdf · PDF页55,56 / 幻灯片55,56

**全部来源：** Week9.pdf · PDF页55,56 / 幻灯片55,56

### Scaling network management traffic

**稳定ID：** csit985-w9-0050

**类别：** 专业英语

**中文解释：** 管理流量规模调整；LAN建议先一subnet一monitor，WAN再考虑WAN-LAN interfaces，可由同一个monitor兼顾；估算devices/interfaces/parameters/frequency。>10%时考虑减少，2–5%为课件LAN建议，不是普遍硬限制。

**简单英文（整理解释）：** Estimating and reducing management traffic as the network grows; the percentages are planning recommendations.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> For most standard LAN protocols aim for 2% to 5% of LAN capacity

**原文来源：** Week9.pdf · PDF页59 / 幻灯片59

**语境：** Week9 · Scaling network management traffic

**语境英文：** Estimating and reducing management traffic as the network grows; the percentages are planning recommendations.

**语境中文：** 管理流量规模调整；LAN建议先一subnet一monitor，WAN再考虑WAN-LAN interfaces，可由同一个monitor兼顾；估算devices/interfaces/parameters/frequency。>10%时考虑减少，2–5%为课件LAN建议，不是普遍硬限制。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> For most standard LAN protocols aim for 2% to 5% of LAN capacity

**语境原文来源：** Week9.pdf · PDF页59 / 幻灯片59

**语境来源：** Week9.pdf · PDF页59,60 / 幻灯片59,60

**全部来源：** Week9.pdf · PDF页59,60 / 幻灯片59,60

### Checks and balances

**稳定ID：** csit985-w9-0051

**类别：** 专业英语

**中文解释：** 交叉核对机制；重复measurement来verify/validate data，查记录错误、counter rollover或不动、MIB variable变化及vendor差异。

**简单英文（整理解释）：** Using another measurement or source to verify management data.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Methods to duplicate measurements in order to verify and validate network management data

**原文来源：** Week9.pdf · PDF页61 / 幻灯片61

**语境：** Week9 · Checks and balances

**语境英文：** Using another measurement or source to verify management data.

**语境中文：** 交叉核对机制；重复measurement来verify/validate data，查记录错误、counter rollover或不动、MIB variable变化及vendor差异。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Methods to duplicate measurements in order to verify and validate network management data

**语境原文来源：** Week9.pdf · PDF页61 / 幻灯片61

**语境来源：** Week9.pdf · PDF页61 / 幻灯片61

**全部来源：** Week9.pdf · PDF页61 / 幻灯片61

### Counter rollover

**稳定ID：** csit985-w9-0052

**类别：** 专业英语

**中文解释：** 计数器回绕；counter到上限后回到起点，使差值计算可能出错。TXT也提restart reset和停止更新，须核查后再判网络异常。

**简单英文（整理解释）：** A counter returning to its start value after reaching its limit.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Rollovers of counters (or non movement)

**原文来源：** Week9.pdf · PDF页61 / 幻灯片61

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> contents can wrap, wrap around, reset after the restart or stop updating.

**原文来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符40041起；搜索“contents can wrap, wrap around”

**语境：** Week9 · Counter rollover

**语境英文：** A counter returning to its start value after reaching its limit.

**语境中文：** 计数器回绕；counter到上限后回到起点，使差值计算可能出错。TXT也提restart reset和停止更新，须核查后再判网络异常。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Rollovers of counters (or non movement)

**语境原文来源：** Week9.pdf · PDF页61 / 幻灯片61

**语境来源：** Week9.pdf · PDF页61 / 幻灯片61

**语境：** Week9 · Counter rollover

**语境英文：** Counters may wrap, reset, or stop updating, so their changes need checking.

**语境中文：** TXT也提counter在restart后reset或停止更新；原文contents疑似counters，不能只把负差值当作traffic下降。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> contents can wrap, wrap around, reset after the restart or stop updating.

**语境原文来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符40041起；搜索“contents can wrap, wrap around”

**语境来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符40041起；搜索“contents can wrap, wrap around”

**全部来源：** Week9.pdf · PDF页61 / 幻灯片61；CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符40041起；搜索“contents can wrap, wrap around”

### Local storage / archival / data migration

**稳定ID：** csit985-w9-0053

**类别：** 专业英语

**中文解释：** 本地存储／归档／数据迁移；local供events与短期trends，archive供长期使用。可选择低traffic时迁移，at night只是示例；TXT说明archive与backup用途不同。

**简单英文（整理解释）：** Keeping recent data locally and moving selected data to longer-term storage during suitable periods.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Data stored locally can be downloaded to storage/archival when traffic is expected to be low

**原文来源：** Week9.pdf · PDF页64 / 幻灯片64

**语境：** Week9 · Local storage / archival / data migration

**语境英文：** Keeping recent data locally and moving selected data to longer-term storage during suitable periods.

**语境中文：** 本地存储／归档／数据迁移；local供events与短期trends，archive供长期使用。可选择低traffic时迁移，at night只是示例；TXT说明archive与backup用途不同。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Data stored locally can be downloaded to storage/archival when traffic is expected to be low

**语境原文来源：** Week9.pdf · PDF页64 / 幻灯片64

**语境来源：** Week9.pdf · PDF页62,63,64 / 幻灯片62,63,64

**全部来源：** Week9.pdf · PDF页62,63,64 / 幻灯片62,63,64

### Selective copying of data

**稳定ID：** csit985-w9-0054

**类别：** 专业英语

**中文解释：** 选择性复制；同一data用于event与trend时，可把定期parameter instances复制到独立database location作trend analysis。

**简单英文（整理解释）：** Copying regular readings to a separate location when needed for trend analysis.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> consider copying regular instances of parameter to a separate database location for trend analysis

**原文来源：** Week9.pdf · PDF页62 / 幻灯片62

**语境：** Week9 · Selective copying of data

**语境英文：** Copying regular readings to a separate location when needed for trend analysis.

**语境中文：** 选择性复制；同一data用于event与trend时，可把定期parameter instances复制到独立database location作trend analysis。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> consider copying regular instances of parameter to a separate database location for trend analysis

**语境原文来源：** Week9.pdf · PDF页62 / 幻灯片62

**语境来源：** Week9.pdf · PDF页62 / 幻灯片62

**全部来源：** Week9.pdf · PDF页62 / 幻灯片62

### Metadata

**稳定ID：** csit985-w9-0055

**类别：** 专业英语

**中文解释：** 元数据：关于collected data的附加信息，包括data types、生成时间的time stamps和与其他data的关联。

**简单英文（整理解释）：** Information that explains collected data, such as types, times, and references to other data.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Additional information about the collected data

**原文来源：** Week9.pdf · PDF页62 / 幻灯片62

**语境：** Week9 · Metadata

**语境英文：** Information that explains collected data, such as types, times, and references to other data.

**语境中文：** 元数据：关于collected data的附加信息，包括data types、生成时间的time stamps和与其他data的关联。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Additional information about the collected data

**语境原文来源：** Week9.pdf · PDF页62 / 幻灯片62

**语境来源：** Week9.pdf · PDF页62,65 / 幻灯片62,65

**全部来源：** Week9.pdf · PDF页62,65 / 幻灯片62,65

### MIB selection / enterprise-specific MIBs

**稳定ID：** csit985-w9-0056

**类别：** 专业英语

**中文解释：** MIB选择／企业专用MIB；根据basic network health、devices、SLA/policy参数或business processes需求选择，并确认device支持，不是MIB越多越好。

**简单英文（整理解释）：** Choosing MIBs according to monitoring questions and supported device features.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Are enterprise specific MIBs required?

**原文来源：** Week9.pdf · PDF页66 / 幻灯片66

**语境：** Week9 · MIB selection / enterprise-specific MIBs

**语境英文：** Choosing MIBs according to monitoring questions and supported device features.

**语境中文：** MIB选择／企业专用MIB；根据basic network health、devices、SLA/policy参数或business processes需求选择，并确认device支持，不是MIB越多越好。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Are enterprise specific MIBs required?

**语境原文来源：** Week9.pdf · PDF页66 / 幻灯片66

**语境来源：** Week9.pdf · PDF页66 / 幻灯片66

**全部来源：** Week9.pdf · PDF页66 / 幻灯片66

### OSS (Operations Support System)

**稳定ID：** csit985-w6-0018

**类别：** 专业英语

**中文解释：** 运营支持系统；NM需考虑与OSS集成，图列ordering、inventory、activation、provisioning、engineering、field service。

**简单英文（整理解释）：** An operations system that may integrate with network management.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> OSS (Operations Support System)

**原文来源：** Week9.pdf · PDF页68 / 幻灯片68

**语境：** Week9 · OSS (Operations Support System)

**语境英文：** An operations system that may integrate with network management.

**语境中文：** 运营支持系统；NM需考虑与OSS集成，图列ordering、inventory、activation、provisioning、engineering、field service。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> OSS (Operations Support System)

**语境原文来源：** Week9.pdf · PDF页68 / 幻灯片68

**语境来源：** Week9.pdf · PDF页68,69 / 幻灯片68,69

**全部来源：** Week9.pdf · PDF页68,69 / 幻灯片68,69

### Northbound interface

**稳定ID：** csit985-w9-0058

**类别：** 专业英语

**中文解释：** 北向接口；NM面向service/business management及OSS的接口。“北”是架构方向，不是地理北方；协议例CORBA、SNMP、HTTP。

**简单英文（整理解释）：** An interface toward higher-level service and business management.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> The interface from network management to OSS is often termed the northbound interface because it is in the direction of service and business management.

**原文来源：** Week9.pdf · PDF页68 / 幻灯片68

**语境：** Week9 · Northbound interface

**语境英文：** An interface toward higher-level service and business management.

**语境中文：** 北向接口；NM面向service/business management及OSS的接口。“北”是架构方向，不是地理北方；协议例CORBA、SNMP、HTTP。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> The interface from network management to OSS is often termed the northbound interface because it is in the direction of service and business management.

**语境原文来源：** Week9.pdf · PDF页68 / 幻灯片68

**语境来源：** Week9.pdf · PDF页68 / 幻灯片68

**全部来源：** Week9.pdf · PDF页68 / 幻灯片68

### CORBA (Common Object Request Broker Architecture)

**稳定ID：** csit985-w9-0059

**类别：** 专业英语

**中文解释：** 公共对象请求代理体系结构；在此作为northbound interface方式之一，仅列名称，不补实现。

**简单英文（整理解释）：** A named example of a northbound interface technology.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> CORBA (Common Object Request Broker Architecture)

**原文来源：** Week9.pdf · PDF页68 / 幻灯片68

**语境：** Week9 · CORBA (Common Object Request Broker Architecture)

**语境英文：** A named example of a northbound interface technology.

**语境中文：** 公共对象请求代理体系结构；在此作为northbound interface方式之一，仅列名称，不补实现。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> CORBA (Common Object Request Broker Architecture)

**语境原文来源：** Week9.pdf · PDF页68 / 幻灯片68

**语境来源：** Week9.pdf · PDF页68 / 幻灯片68

**全部来源：** Week9.pdf · PDF页68 / 幻灯片68

### Management domain / autonomous domain

**稳定ID：** csit985-w9-0060

**类别：** 专业英语

**中文解释：** 管理域／自治域；PDF写Management domain = autonomous domain，TXT明确不一定相同。前者按运维责任／控制，AS按routing policy，不能直接等同。

**简单英文（整理解释）：** An operational management domain is not necessarily the same as a routing-policy domain.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Management domain = autonomous domain

**原文来源：** Week9.pdf · PDF页72 / 幻灯片72

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> it's not necessarily the same as an. Autonomous demand.

**原文来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符47917起；搜索“it's not necessarily the same as an.”

**语境：** Week9 · Management domain / autonomous domain

**语境英文：** An operational management domain is not necessarily the same as a routing-policy domain.

**语境中文：** 管理域／自治域；PDF写Management domain = autonomous domain，TXT明确不一定相同。前者按运维责任／控制，AS按routing policy，不能直接等同。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Management domain = autonomous domain

**语境原文来源：** Week9.pdf · PDF页72 / 幻灯片72

**语境来源：** Week9.pdf · PDF页72 / 幻灯片72

**语境：** Week9 · Management domain / autonomous domain

**语境英文：** Management responsibility and routing-policy boundaries need not match.

**语境中文：** TXT说management domain不一定与autonomous domain相同；按运维责任划management，按routing policy划AS，可能一对多或跨AS。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> it's not necessarily the same as an. Autonomous demand.

**语境原文来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符47917起；搜索“it's not necessarily the same as an.”

**语境来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符47917起；搜索“it's not necessarily the same as an.”

**全部来源：** Week9.pdf · PDF页72 / 幻灯片72；CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符47917起；搜索“it's not necessarily the same as an.”

### OID (object identifier)

**稳定ID：** csit985-w9-0061

**类别：** 专业英语

**中文解释：** 对象标识符；TXT说在MIB结构中识别object；instance是具体出现，如某interface上的counter。转写后半段有断裂，不补具体编码规则。

**简单英文（整理解释）：** An identifier for an object in a MIB structure; an instance is a particular occurrence.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> an object identifier, uh, we call it OID

**原文来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符14252起；搜索“an object identifier, uh, we call it OID”

**语境：** Week9 · OID (object identifier)

**语境英文：** An identifier for an object in a MIB structure; an instance is a particular occurrence.

**语境中文：** 对象标识符；TXT说在MIB结构中识别object；instance是具体出现，如某interface上的counter。转写后半段有断裂，不补具体编码规则。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> an object identifier, uh, we call it OID

**语境原文来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符14252起；搜索“an object identifier, uh, we call it OID”

**语境来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符14252起；搜索“an object identifier, uh, we call it OID”

**全部来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符14252起；搜索“an object identifier, uh, we call it OID”

### Archive / backup

**稳定ID：** csit985-w9-0094

**类别：** 专业英语

**中文解释：** 归档／备份；archive供以后使用，backup帮助从loss/damage恢复，两者用途不同。TXT后句not replaceable有断裂，只保留可明确理解的区分。

**简单英文（整理解释）：** An archive keeps information for later use. A backup supports recovery from loss or damage.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> archive keeps information for later use. A backup helps recover from loss and damage.

**原文来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符41993起；搜索“archive keeps information for later use.”

**语境：** Week9 · Archive / backup

**语境英文：** An archive keeps information for later use. A backup supports recovery from loss or damage.

**语境中文：** 归档／备份；archive供以后使用，backup帮助从loss/damage恢复，两者用途不同。TXT后句not replaceable有断裂，只保留可明确理解的区分。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> archive keeps information for later use. A backup helps recover from loss and damage.

**语境原文来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符41993起；搜索“archive keeps information for later use.”

**语境来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符41993起；搜索“archive keeps information for later use.”

**全部来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符41993起；搜索“archive keeps information for later use.”

## 阅读词汇

### proactive monitoring

**稳定ID：** csit985-w9-0062

**类别：** 阅读词汇

**中文解释：** 主动提前监测；不只等收到用户complaint才找问题。

**简单英文（整理解释）：** Monitoring early to notice possible problems.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Proactive monitoring

**原文来源：** Week9.pdf · PDF页5 / 幻灯片5

**语境：** Week9 · proactive monitoring

**语境英文：** Monitoring early to notice possible problems.

**语境中文：** 主动提前监测；不只等收到用户complaint才找问题。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Proactive monitoring

**语境原文来源：** Week9.pdf · PDF页5 / 幻灯片5

**语境来源：** Week9.pdf · PDF页5 / 幻灯片5

**全部来源：** Week9.pdf · PDF页5 / 幻灯片5

### abstract

**稳定ID：** csit985-w9-0063

**类别：** 阅读词汇

**中文解释：** 抽象的；此处形容较上层的policies。

**简单英文（整理解释）：** Describing general ideas rather than specific devices.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Abstract

**原文来源：** Week9.pdf · PDF页7 / 幻灯片7

**语境：** Week9 · abstract

**语境英文：** Describing general ideas rather than specific devices.

**语境中文：** 抽象的；此处形容较上层的policies。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** abstract + policy / idea

**语境原文：** 课件原文说明／用法（非正式定义）

> Abstract

**语境原文来源：** Week9.pdf · PDF页7 / 幻灯片7

**语境来源：** Week9.pdf · PDF页7 / 幻灯片7

**使用结构：** abstract + policy / idea

**全部来源：** Week9.pdf · PDF页7 / 幻灯片7

### concrete

**稳定ID：** csit985-w9-0064

**类别：** 阅读词汇

**中文解释：** 具体的；此处形容device components/variables。

**简单英文（整理解释）：** Specific and directly connected to real components.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Concrete Components

**原文来源：** Week9.pdf · PDF页7 / 幻灯片7

**语境：** Week9 · concrete

**语境英文：** Specific and directly connected to real components.

**语境中文：** 具体的；此处形容device components/variables。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** concrete + detail / component

**语境原文：** 课件原文说明／用法（非正式定义）

> Concrete Components

**语境原文来源：** Week9.pdf · PDF页7 / 幻灯片7

**语境来源：** Week9.pdf · PDF页7 / 幻灯片7

**使用结构：** concrete + detail / component

**全部来源：** Week9.pdf · PDF页7 / 幻灯片7

### unsolicited notification

**稳定ID：** csit985-w9-0065

**类别：** 阅读词汇

**中文解释：** 未经请求而主动发出的通知；trap不是先收到poll才回复。

**简单英文（整理解释）：** A notification sent without a prior request.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Unsolicited notification of events

**原文来源：** Week9.pdf · PDF页19 / 幻灯片19

**语境：** Week9 · unsolicited notification

**语境英文：** A notification sent without a prior request.

**语境中文：** 未经请求而主动发出的通知；trap不是先收到poll才回复。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** unsolicited + message / notification

**语境原文：** 课件原文说明／用法（非正式定义）

> Unsolicited notification of events

**语境原文来源：** Week9.pdf · PDF页19 / 幻灯片19

**语境来源：** Week9.pdf · PDF页19 / 幻灯片19

**使用结构：** unsolicited + message / notification

**全部来源：** Week9.pdf · PDF页19 / 幻灯片19

### SNMP-compliant

**稳定ID：** csit985-w9-0066

**类别：** 阅读词汇

**中文解释：** 符合SNMP要求的；compliant描述符合规定，并不表示内容就是当前测量值。

**简单英文（整理解释）：** Following the requirements of SNMP.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> SNMP-compliant MIB

**原文来源：** Week9.pdf · PDF页22 / 幻灯片22

**语境：** Week9 · SNMP-compliant

**语境英文：** Following the requirements of SNMP.

**语境中文：** 符合SNMP要求的；compliant描述符合规定，并不表示内容就是当前测量值。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** be compliant with + standard

**语境原文：** 课件原文说明／用法（非正式定义）

> SNMP-compliant MIB

**语境原文来源：** Week9.pdf · PDF页22 / 幻灯片22

**语境来源：** Week9.pdf · PDF页22 / 幻灯片22

**使用结构：** be compliant with + standard

**全部来源：** Week9.pdf · PDF页22 / 幻灯片22

### an abstraction of

**稳定ID：** csit985-w9-0067

**类别：** 阅读词汇

**中文解释：** 对真实事物作抽象表示；原文real word疑似real world笔误。MIB描述可管理性质，不保存全部历史measurement。

**简单英文（整理解释）：** A simplified representation of something.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> an abstraction of the real word

**原文来源：** Week9.pdf · PDF页24 / 幻灯片24

**语境：** Week9 · an abstraction of

**语境英文：** A simplified representation of something.

**语境中文：** 对真实事物作抽象表示；原文real word疑似real world笔误。MIB描述可管理性质，不保存全部历史measurement。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** an abstraction of + system / reality

**语境原文：** 课件原文说明／用法（非正式定义）

> an abstraction of the real word

**语境原文来源：** Week9.pdf · PDF页24 / 幻灯片24

**语境来源：** Week9.pdf · PDF页24 / 幻灯片24

**使用结构：** an abstraction of + system / reality

**全部来源：** Week9.pdf · PDF页24 / 幻灯片24

### probe

**稳定ID：** csit985-w9-0068

**类别：** 阅读词汇

**中文解释：** 探测；polling通过主动查询取得device数据。

**简单英文（整理解释）：** Actively check something to obtain information.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> actively probing devices

**原文来源：** Week9.pdf · PDF页27 / 幻灯片27

**语境：** Week9 · probe

**语境英文：** Actively check something to obtain information.

**语境中文：** 探测；polling通过主动查询取得device数据。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** probe + device / network

**语境原文：** 课件原文说明／用法（非正式定义）

> actively probing devices

**语境原文来源：** Week9.pdf · PDF页27 / 幻灯片27

**语境来源：** Week9.pdf · PDF页27 / 幻灯片27

**使用结构：** probe + device / network

**全部来源：** Week9.pdf · PDF页27 / 幻灯片27

### derive ... from ...

**稳定ID：** csit985-w9-0069

**类别：** 阅读词汇

**中文解释：** 从已有数据推导……；一些characteristics不能直接读取，需要从gathered data计算。

**简单英文（整理解释）：** Work out a value from other data.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> derived from gathered data

**原文来源：** Week9.pdf · PDF页28 / 幻灯片28

**语境：** Week9 · derive ... from ...

**语境英文：** Work out a value from other data.

**语境中文：** 从已有数据推导……；一些characteristics不能直接读取，需要从gathered data计算。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** derive A from B

**语境原文：** 课件原文说明／用法（非正式定义）

> derived from gathered data

**语境原文来源：** Week9.pdf · PDF页28 / 幻灯片28

**语境来源：** Week9.pdf · PDF页28 / 幻灯片28

**使用结构：** derive A from B

**全部来源：** Week9.pdf · PDF页28 / 幻灯片28

### consolidate

**稳定ID：** csit985-w9-0070

**类别：** 阅读词汇

**中文解释：** 汇总；把来自不同devices的信息集中到一个view。

**简单英文（整理解释）：** Bring information from several places together.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> information can be consolidated

**原文来源：** Week9.pdf · PDF页29 / 幻灯片29

**语境：** Week9 · consolidate

**语境英文：** Bring information from several places together.

**语境中文：** 汇总；把来自不同devices的信息集中到一个view。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** consolidate + information

**语境原文：** 课件原文说明／用法（非正式定义）

> information can be consolidated

**语境原文来源：** Week9.pdf · PDF页29 / 幻灯片29

**语境来源：** Week9.pdf · PDF页29 / 幻灯片29

**使用结构：** consolidate + information

**全部来源：** Week9.pdf · PDF页29 / 幻灯片29

### short-lived

**稳定ID：** csit985-w9-0071

**类别：** 阅读词汇

**中文解释：** 短暂的；events可能只维持很短时间，所以需相应polling intervals。

**简单英文（整理解释）：** Lasting for a short time.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> short-lived changes

**原文来源：** Week9.pdf · PDF页32 / 幻灯片32

**语境：** Week9 · short-lived

**语境英文：** Lasting for a short time.

**语境中文：** 短暂的；events可能只维持很短时间，所以需相应polling intervals。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> short-lived changes

**语境原文来源：** Week9.pdf · PDF页32 / 幻灯片32

**语境来源：** Week9.pdf · PDF页32 / 幻灯片32

**全部来源：** Week9.pdf · PDF页32 / 幻灯片32

### cross a threshold

**稳定ID：** csit985-w9-0072

**类别：** 阅读词汇

**中文解释：** 超过／跨过阈值；值达到需要注意的水平。threshold依测量对象和需求而定。

**简单英文（整理解释）：** Pass a chosen limit.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Characteristics that cross thresholds

**原文来源：** Week9.pdf · PDF页32 / 幻灯片32

**语境：** Week9 · cross a threshold

**语境英文：** Pass a chosen limit.

**语境中文：** 超过／跨过阈值；值达到需要注意的水平。threshold依测量对象和需求而定。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** cross + threshold

**语境原文：** 课件原文说明／用法（非正式定义）

> Characteristics that cross thresholds

**语境原文来源：** Week9.pdf · PDF页32 / 幻灯片32

**语境来源：** Week9.pdf · PDF页32 / 幻灯片32

**使用结构：** cross + threshold

**全部来源：** Week9.pdf · PDF页32 / 幻灯片32

### issue an alarm

**稳定ID：** csit985-w9-0073

**类别：** 阅读词汇

**中文解释：** 发出警报；issue这里是动词，不是“问题”。

**简单英文（整理解释）：** Send or raise an alarm.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> By issuing an alarm

**原文来源：** Week9.pdf · PDF页34 / 幻灯片34

**语境：** Week9 · issue an alarm

**语境英文：** Send or raise an alarm.

**语境中文：** 发出警报；issue这里是动词，不是“问题”。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** issue + alarm / notice

**语境原文：** 课件原文说明／用法（非正式定义）

> By issuing an alarm

**语境原文来源：** Week9.pdf · PDF页34 / 幻灯片34

**语境来源：** Week9.pdf · PDF页34 / 幻灯片34

**使用结构：** issue + alarm / notice

**全部来源：** Week9.pdf · PDF页34 / 幻灯片34

### at best

**稳定ID：** csit985-w9-0074

**类别：** 阅读词汇

**中文解释：** 最好情况下；原例把poll traffic分散到5秒算平均rate。

**简单英文（整理解释）：** In the most favourable case.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> at best each polling interval

**原文来源：** Week9.pdf · PDF页37 / 幻灯片37

**语境：** Week9 · at best

**语境英文：** In the most favourable case.

**语境中文：** 最好情况下；原例把poll traffic分散到5秒算平均rate。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** at best + clause

**语境原文：** 课件原文说明／用法（非正式定义）

> at best each polling interval

**语境原文来源：** Week9.pdf · PDF页37 / 幻灯片37

**语境来源：** Week9.pdf · PDF页37 / 幻灯片37

**使用结构：** at best + clause

**全部来源：** Week9.pdf · PDF页37 / 幻灯片37

### if we assume the worst

**稳定ID：** csit985-w9-0075

**类别：** 阅读词汇

**中文解释：** 如果按最差情况假设；用于说明poll traffic集中发出的情况。

**简单英文（整理解释）：** In the least favourable case.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> If we assume the worst

**原文来源：** Week9.pdf · PDF页37 / 幻灯片37

**语境：** Week9 · if we assume the worst

**语境英文：** In the least favourable case.

**语境中文：** 如果按最差情况假设；用于说明poll traffic集中发出的情况。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** if we assume the worst

**语境原文：** 课件原文说明／用法（非正式定义）

> If we assume the worst

**语境原文来源：** Week9.pdf · PDF页37 / 幻灯片37

**语境来源：** Week9.pdf · PDF页37 / 幻灯片37

**使用结构：** if we assume the worst

**全部来源：** Week9.pdf · PDF页37 / 幻灯片37

### spike

**稳定ID：** csit985-w9-0076

**类别：** 阅读词汇

**中文解释：** 短时尖峰；poll集中发出时traffic可能突然升高。

**简单英文（整理解释）：** A sudden high peak.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> 1.74Mb/s spike

**原文来源：** Week9.pdf · PDF页37 / 幻灯片37

**语境：** Week9 · spike

**语境英文：** A sudden high peak.

**语境中文：** 短时尖峰；poll集中发出时traffic可能突然升高。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** a spike in + traffic

**语境原文：** 课件原文说明／用法（非正式定义）

> 1.74Mb/s spike

**语境原文来源：** Week9.pdf · PDF页37 / 幻灯片37

**语境来源：** Week9.pdf · PDF页37 / 幻灯片37

**使用结构：** a spike in + traffic

**全部来源：** Week9.pdf · PDF页37 / 幻灯片37

### continuous

**稳定ID：** csit985-w9-0077

**类别：** 阅读词汇

**中文解释：** 连续的；形容收集过程持续进行。

**简单英文（整理解释）：** Continuing over time.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Continuous, uninterrupted data collection

**原文来源：** Week9.pdf · PDF页38 / 幻灯片38

**语境：** Week9 · continuous

**语境英文：** Continuing over time.

**语境中文：** 连续的；形容收集过程持续进行。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** continuous + collection

**语境原文：** 课件原文说明／用法（非正式定义）

> Continuous, uninterrupted data collection

**语境原文来源：** Week9.pdf · PDF页38 / 幻灯片38

**语境来源：** Week9.pdf · PDF页38 / 幻灯片38

**使用结构：** continuous + collection

**全部来源：** Week9.pdf · PDF页38 / 幻灯片38

### uninterrupted

**稳定ID：** csit985-w9-0078

**类别：** 阅读词汇

**中文解释：** 不中断的；基线数据收集不出现break。

**简单英文（整理解释）：** Without a break.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Continuous, uninterrupted data collection

**原文来源：** Week9.pdf · PDF页38 / 幻灯片38

**语境：** Week9 · uninterrupted

**语境英文：** Without a break.

**语境中文：** 不中断的；基线数据收集不出现break。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** uninterrupted + process

**语境原文：** 课件原文说明／用法（非正式定义）

> Continuous, uninterrupted data collection

**语境原文来源：** Week9.pdf · PDF页38 / 幻灯片38

**语境来源：** Week9.pdf · PDF页38 / 幻灯片38

**使用结构：** uninterrupted + process

**全部来源：** Week9.pdf · PDF页38 / 幻灯片38

### dependable

**稳定ID：** csit985-w9-0079

**类别：** 阅读词汇

**中文解释：** 可靠、可依赖的；instrumentation需要持续取得可信数据。

**简单英文（整理解释）：** Able to be relied on.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Needs to be dependable

**原文来源：** Week9.pdf · PDF页43 / 幻灯片43

**语境：** Week9 · dependable

**语境英文：** Able to be relied on.

**语境中文：** 可靠、可依赖的；instrumentation需要持续取得可信数据。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Needs to be dependable

**语境原文来源：** Week9.pdf · PDF页43 / 幻灯片43

**语境来源：** Week9.pdf · PDF页43 / 幻灯片43

**全部来源：** Week9.pdf · PDF页43 / 幻灯片43

### should ... fail

**稳定ID：** csit985-w9-0080

**类别：** 阅读词汇

**中文解释：** 如果……发生故障；should在此是倒装条件，不是建议“应该失败”。

**简单英文（整理解释）：** If something fails.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> should the user data network fails

**原文来源：** Week9.pdf · PDF页54 / 幻灯片54

**语境：** Week9 · should ... fail

**语境英文：** If something fails.

**语境中文：** 如果……发生故障；should在此是倒装条件，不是建议“应该失败”。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** should + subject + base verb, main clause

**语境原文：** 课件原文说明／用法（非正式定义）

> should the user data network fails

**语境原文来源：** Week9.pdf · PDF页54 / 幻灯片54

**语境来源：** Week9.pdf · PDF页54 / 幻灯片54

**使用结构：** should + subject + base verb, main clause

**全部来源：** Week9.pdf · PDF页54 / 幻灯片54

### incur

**稳定ID：** csit985-w9-0081

**类别：** 阅读词汇

**中文解释：** 招致／承担；hybrid同时承担两种方法的weaknesses及cost。

**简单英文（整理解释）：** Experience a cost or disadvantage because of a choice.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> The weaknesses of both are also incurred

**原文来源：** Week9.pdf · PDF页54 / 幻灯片54

**语境：** Week9 · incur

**语境英文：** Experience a cost or disadvantage because of a choice.

**语境中文：** 招致／承担；hybrid同时承担两种方法的weaknesses及cost。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** incur + cost / loss / disadvantage

**语境原文：** 课件原文说明／用法（非正式定义）

> The weaknesses of both are also incurred

**语境原文来源：** Week9.pdf · PDF页54 / 幻灯片54

**语境来源：** Week9.pdf · PDF页54 / 幻灯片54

**使用结构：** incur + cost / loss / disadvantage

**全部来源：** Week9.pdf · PDF页54 / 幻灯片54

### radiate from

**稳定ID：** csit985-w9-0082

**类别：** 阅读词汇

**中文解释：** 从一点向外扩散；描述central management的信息方向。

**简单英文（整理解释）：** Spread outward from a point.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> radiates from a single management system

**原文来源：** Week9.pdf · PDF页55 / 幻灯片55

**语境：** Week9 · radiate from

**语境英文：** Spread outward from a point.

**语境中文：** 从一点向外扩散；描述central management的信息方向。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** radiate from + point

**语境原文：** 课件原文说明／用法（非正式定义）

> radiates from a single management system

**语境原文来源：** Week9.pdf · PDF页55 / 幻灯片55

**语境来源：** Week9.pdf · PDF页55 / 幻灯片55

**使用结构：** radiate from + point

**全部来源：** Week9.pdf · PDF页55 / 幻灯片55

### converge to

**稳定ID：** csit985-w9-0083

**类别：** 阅读词汇

**中文解释：** 向一点汇聚；management flows集中到一个point。

**简单英文（整理解释）：** Come together at a point.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> converge to a single point

**原文来源：** Week9.pdf · PDF页55 / 幻灯片55

**语境：** Week9 · converge to

**语境英文：** Come together at a point.

**语境中文：** 向一点汇聚；management flows集中到一个point。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** converge to / on + point

**语境原文：** 课件原文说明／用法（非正式定义）

> converge to a single point

**语境原文来源：** Week9.pdf · PDF页55 / 幻灯片55

**语境来源：** Week9.pdf · PDF页55 / 幻灯片55

**使用结构：** converge to / on + point

**全部来源：** Week9.pdf · PDF页55 / 幻灯片55

### strategically placed

**稳定ID：** csit985-w9-0084

**类别：** 阅读词汇

**中文解释：** 有策略地安排位置；按management需要放置components。

**简单英文（整理解释）：** Placed where they best support a purpose.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Strategically placed

**原文来源：** Week9.pdf · PDF页56 / 幻灯片56

**语境：** Week9 · strategically placed

**语境英文：** Placed where they best support a purpose.

**语境中文：** 有策略地安排位置；按management需要放置components。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** be strategically placed

**语境原文：** 课件原文说明／用法（非正式定义）

> Strategically placed

**语境原文来源：** Week9.pdf · PDF页56 / 幻灯片56

**语境来源：** Week9.pdf · PDF页56 / 幻灯片56

**使用结构：** be strategically placed

**全部来源：** Week9.pdf · PDF页56 / 幻灯片56

### localize

**稳定ID：** csit985-w9-0085

**类别：** 阅读词汇

**中文解释：** 使留在本地；local monitoring减少远程traffic。

**简单英文（整理解释）：** Keep activity close to its source.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Monitoring devices localize traffic

**原文来源：** Week9.pdf · PDF页56 / 幻灯片56

**语境：** Week9 · localize

**语境英文：** Keep activity close to its source.

**语境中文：** 使留在本地；local monitoring减少远程traffic。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** localize + traffic / activity

**语境原文：** 课件原文说明／用法（非正式定义）

> Monitoring devices localize traffic

**语境原文来源：** Week9.pdf · PDF页56 / 幻灯片56

**语境来源：** Week9.pdf · PDF页56 / 幻灯片56

**使用结构：** localize + traffic / activity

**全部来源：** Week9.pdf · PDF页56 / 幻灯片56

### reduce one or more of these variables

**稳定ID：** csit985-w9-0086

**类别：** 阅读词汇

**中文解释：** 降低这些变量中的一项或多项；不要求所有指标同时减少。

**简单英文（整理解释）：** Reduce at least one of the listed factors.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> reducing one or more of these variable

**原文来源：** Week9.pdf · PDF页59 / 幻灯片59

**语境：** Week9 · reduce one or more of these variables

**语境英文：** Reduce at least one of the listed factors.

**语境中文：** 降低这些变量中的一项或多项；不要求所有指标同时减少。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** one or more of + plural noun

**语境原文：** 课件原文说明／用法（非正式定义）

> reducing one or more of these variable

**语境原文来源：** Week9.pdf · PDF页59 / 幻灯片59

**语境来源：** Week9.pdf · PDF页59 / 幻灯片59

**使用结构：** one or more of + plural noun

**全部来源：** Week9.pdf · PDF页59 / 幻灯片59

### normalize data across vendors

**稳定ID：** csit985-w9-0087

**类别：** 阅读词汇

**中文解释：** 统一不同厂商数据的可比口径；相似名称不自动表示相同测量行为。

**简单英文（整理解释）：** Make data from different suppliers comparable.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Help normalise data across multiple vendors

**原文来源：** Week9.pdf · PDF页61 / 幻灯片61

**语境：** Week9 · normalize data across vendors

**语境英文：** Make data from different suppliers comparable.

**语境中文：** 统一不同厂商数据的可比口径；相似名称不自动表示相同测量行为。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Help normalise data across multiple vendors

**语境原文来源：** Week9.pdf · PDF页61 / 幻灯片61

**语境来源：** Week9.pdf · PDF页61 / 幻灯片61

**全部来源：** Week9.pdf · PDF页61 / 幻灯片61

### regular instances

**稳定ID：** csit985-w9-0088

**类别：** 阅读词汇

**中文解释：** 定期记录的参数值；instance此处是具体一次值，不是普通的“例子”。

**简单英文（整理解释）：** Particular readings collected at regular times.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> regular instances of parameter

**原文来源：** Week9.pdf · PDF页62 / 幻灯片62

**语境：** Week9 · regular instances

**语境英文：** Particular readings collected at regular times.

**语境中文：** 定期记录的参数值；instance此处是具体一次值，不是普通的“例子”。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> regular instances of parameter

**语境原文来源：** Week9.pdf · PDF页62 / 幻灯片62

**语境来源：** Week9.pdf · PDF页62 / 幻灯片62

**全部来源：** Week9.pdf · PDF页62 / 幻灯片62

### time stamp

**稳定ID：** csit985-w9-0089

**类别：** 阅读词汇

**中文解释：** 时间戳；记录data生成时间，有助于跨device比较，不只是给文件起日期名。

**简单英文（整理解释）：** A recorded time linked to a measurement.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> time stamps of when the data were generated

**原文来源：** Week9.pdf · PDF页65 / 幻灯片65

**语境：** Week9 · time stamp

**语境英文：** A recorded time linked to a measurement.

**语境中文：** 时间戳；记录data生成时间，有助于跨device比较，不只是给文件起日期名。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> time stamps of when the data were generated

**语境原文来源：** Week9.pdf · PDF页65 / 幻灯片65

**语境来源：** Week9.pdf · PDF页65 / 幻灯片65

**全部来源：** Week9.pdf · PDF页65 / 幻灯片65

### underlying

**稳定ID：** csit985-w2-043fe180d36644

**类别：** 阅读词汇

**中文解释：** 底层的、作为基础的；管理流有时依赖它要管理的同一个network。

**简单英文（整理解释）：** Supporting something from below or as its base.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> the underlying network

**原文来源：** Week9.pdf · PDF页70 / 幻灯片70

**语境：** Week9 · underlying

**语境英文：** Supporting something from below or as its base.

**语境中文：** 底层的、作为基础的；管理流有时依赖它要管理的同一个network。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> the underlying network

**语境原文来源：** Week9.pdf · PDF页70 / 幻灯片70

**语境来源：** Week9.pdf · PDF页70 / 幻灯片70

**全部来源：** Week9.pdf · PDF页70 / 幻灯片70

### burden

**稳定ID：** csit985-w9-0091

**类别：** 阅读词汇

**中文解释：** 负担；NM data flows在network上消耗capacity和processing。

**简单英文（整理解释）：** Extra work or resource use.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> the burden NM data flows place on the system

**原文来源：** Week9.pdf · PDF页73 / 幻灯片73

**语境：** Week9 · burden

**语境英文：** Extra work or resource use.

**语境中文：** 负担；NM data flows在network上消耗capacity和processing。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** place a burden on + system

**语境原文：** 课件原文说明／用法（非正式定义）

> the burden NM data flows place on the system

**语境原文来源：** Week9.pdf · PDF页73 / 幻灯片73

**语境来源：** Week9.pdf · PDF页73 / 幻灯片73

**使用结构：** place a burden on + system

**全部来源：** Week9.pdf · PDF页73 / 幻灯片73

### impede

**稳定ID：** csit985-w9-0092

**类别：** 阅读词汇

**中文解释：** 阻碍；security perimeters/policies可能妨碍合法NM data flow。

**简单英文（整理解释）：** Make progress or movement harder.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> may impede NM data flows

**原文来源：** Week9.pdf · PDF页74 / 幻灯片74

**语境：** Week9 · impede

**语境英文：** Make progress or movement harder.

**语境中文：** 阻碍；security perimeters/policies可能妨碍合法NM data flow。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** impede + process / flow

**语境原文：** 课件原文说明／用法（非正式定义）

> may impede NM data flows

**语境原文来源：** Week9.pdf · PDF页74 / 幻灯片74

**语境来源：** Week9.pdf · PDF页74 / 幻灯片74

**使用结构：** impede + process / flow

**全部来源：** Week9.pdf · PDF页74 / 幻灯片74

### pose a vulnerability

**稳定ID：** csit985-w9-0093

**类别：** 阅读词汇

**中文解释：** 带来安全弱点；pose在此表示造成／带来，不是摆姿势。

**简单英文（整理解释）：** Create or present a possible weakness.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> security vulnerabilities posed by network management

**原文来源：** Week9.pdf · PDF页74 / 幻灯片74

**语境：** Week9 · pose a vulnerability

**语境英文：** Create or present a possible weakness.

**语境中文：** 带来安全弱点；pose在此表示造成／带来，不是摆姿势。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** pose + risk / threat / problem

**语境原文：** 课件原文说明／用法（非正式定义）

> security vulnerabilities posed by network management

**语境原文来源：** Week9.pdf · PDF页74 / 幻灯片74

**语境来源：** Week9.pdf · PDF页74 / 幻灯片74

**使用结构：** pose + risk / threat / problem

**全部来源：** Week9.pdf · PDF页74 / 幻灯片74

### narrow down

**稳定ID：** csit985-w9-0095

**类别：** 阅读词汇

**中文解释：** 缩小排查范围；从end-to-end问题进一步检查links/devices。TXT前一句cost疑似cause，按清楚的issues片段记录。

**简单英文（整理解释）：** Reduce the range of possible problems.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> narrow down the issues.

**原文来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符9679起；搜索“narrow down the issues.”

**语境：** Week9 · narrow down

**语境英文：** Reduce the range of possible problems.

**语境中文：** 缩小排查范围；从end-to-end问题进一步检查links/devices。TXT前一句cost疑似cause，按清楚的issues片段记录。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**使用结构：** narrow down + cause / possibilities

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> narrow down the issues.

**语境原文来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符9679起；搜索“narrow down the issues.”

**语境来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符9679起；搜索“narrow down the issues.”

**使用结构：** narrow down + cause / possibilities

**全部来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符9679起；搜索“narrow down the issues.”

### consecutive

**稳定ID：** csit985-w9-0096

**类别：** 阅读词汇

**中文解释：** 连续相接的；可要求多个连续high readings再报警，避免短暂变化产生反复alerts。

**简单英文（整理解释）：** Following one after another without a gap.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> Consecutive high readings

**原文来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符21601起；搜索“Consecutive high readings”

**语境：** Week9 · consecutive

**语境英文：** Following one after another without a gap.

**语境中文：** 连续相接的；可要求多个连续high readings再报警，避免短暂变化产生反复alerts。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> Consecutive high readings

**语境原文来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符21601起；搜索“Consecutive high readings”

**语境来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符21601起；搜索“Consecutive high readings”

**全部来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符21601起；搜索“Consecutive high readings”

### fluctuations

**稳定ID：** csit985-w9-0097

**类别：** 阅读词汇

**中文解释：** 波动；数值短时升降，不一定就是需处理的持续问题。

**简单英文（整理解释）：** Repeated rises and falls in a value.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> very subtle fluctuations.

**原文来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符21674起；搜索“very subtle fluctuations.”

**语境：** Week9 · fluctuations

**语境英文：** Repeated rises and falls in a value.

**语境中文：** 波动；数值短时升降，不一定就是需处理的持续问题。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> very subtle fluctuations.

**语境原文来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符21674起；搜索“very subtle fluctuations.”

**语境来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符21674起；搜索“very subtle fluctuations.”

**全部来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符21674起；搜索“very subtle fluctuations.”

### catastrophic

**稳定ID：** csit985-w9-0098

**类别：** 阅读词汇

**中文解释：** 灾难性的、造成严重损失的；形容central failure可能产生的严重后果。

**简单英文（整理解释）：** Causing very serious damage or disruption.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> catastrophic, catastrophic, uh Issues.

**原文来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符34695起；搜索“catastrophic, catastrophic, uh Issues.”

**语境：** Week9 · catastrophic

**语境英文：** Causing very serious damage or disruption.

**语境中文：** 灾难性的、造成严重损失的；形容central failure可能产生的严重后果。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> catastrophic, catastrophic, uh Issues.

**语境原文来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符34695起；搜索“catastrophic, catastrophic, uh Issues.”

**语境来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符34695起；搜索“catastrophic, catastrophic, uh Issues.”

**全部来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符34695起；搜索“catastrophic, catastrophic, uh Issues.”

### data silo

**稳定ID：** csit985-w9-0099

**类别：** 阅读词汇

**中文解释：** 数据孤岛；各site只保留自己的观察而无法联系起来。是普通比喻用法，本讲未给正式数据架构定义。

**简单英文（整理解释）：** Information kept separately so that other groups cannot connect it.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> information in the data silo.

**原文来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符36808起；搜索“information in the data silo.”

**语境：** Week9 · data silo

**语境英文：** Information kept separately so that other groups cannot connect it.

**语境中文：** 数据孤岛；各site只保留自己的观察而无法联系起来。是普通比喻用法，本讲未给正式数据架构定义。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> information in the data silo.

**语境原文来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符36808起；搜索“information in the data silo.”

**语境来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符36808起；搜索“information in the data silo.”

**全部来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符36808起；搜索“information in the data silo.”

### retention policy

**稳定ID：** csit985-w9-0100

**类别：** 阅读词汇

**中文解释：** 保留策略；决定保留哪些data、多久及为何保留，兼顾cost与incident investigation。

**简单英文（整理解释）：** Rules about what data to keep, for how long, and for what purpose.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> retention policies. So what to, what do we keep and for how long and for what purpose?

**原文来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符40983起；搜索“retention policies. So what to”

**语境：** Week9 · retention policy

**语境英文：** Rules about what data to keep, for how long, and for what purpose.

**语境中文：** 保留策略；决定保留哪些data、多久及为何保留，兼顾cost与incident investigation。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> retention policies. So what to, what do we keep and for how long and for what purpose?

**语境原文来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符40983起；搜索“retention policies. So what to”

**语境来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符40983起；搜索“retention policies. So what to”

**全部来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符40983起；搜索“retention policies. So what to”

### heuristics

**稳定ID：** csit985-w9-0101

**类别：** 阅读词汇

**中文解释：** 经验指导规则；一monitor/subnet及percentage是planning参考，不是适用所有network的硬要求。

**简单英文（整理解释）：** Practical planning guides, rather than universal requirements.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> heuristics. Not some universal requirements.

**原文来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符38573起；搜索“heuristics. Not some universal requirements.”

**语境：** Week9 · heuristics

**语境英文：** Practical planning guides, rather than universal requirements.

**语境中文：** 经验指导规则；一monitor/subnet及percentage是planning参考，不是适用所有network的硬要求。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> heuristics. Not some universal requirements.

**语境原文来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符38573起；搜索“heuristics. Not some universal requirements.”

**语境来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符38573起；搜索“heuristics. Not some universal requirements.”

**全部来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符38573起；搜索“heuristics. Not some universal requirements.”

### be aligned

**稳定ID：** csit985-w9-0102

**类别：** 阅读词汇

**中文解释：** 对齐、保持一致；此处clocks需足够一致才能跨设备比较time information。

**简单英文（整理解释）：** Be consistent enough to compare information.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> aligned well enough for those analysis.

**原文来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符43501起；搜索“aligned well enough for those analysis.”

**语境：** Week9 · be aligned

**语境英文：** Be consistent enough to compare information.

**语境中文：** 对齐、保持一致；此处clocks需足够一致才能跨设备比较time information。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**使用结构：** align A with B; be aligned for + purpose

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> aligned well enough for those analysis.

**语境原文来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符43501起；搜索“aligned well enough for those analysis.”

**语境来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符43501起；搜索“aligned well enough for those analysis.”

**使用结构：** align A with B; be aligned for + purpose

**全部来源：** CSIT985_Lecture9-transcript.txt · TXT原始L2，本行字符43501起；搜索“aligned well enough for those analysis.”
