# CSIT985 Week8 词汇

由本周可读JSON自动生成。原文与整理说明分开；跨周条目保留全部来源和不同义项。原PDF及完整录音TXT不在网站中。

## 重要疑点与来源限制

**位置：** PDF页2

**说明：** Week8.pdf共64页，Network Performance，CSIT985 Spring 2026；CSIT985_Lecture8-transcript.txt原始L2覆盖performance、QoS、resource control、SLAs与policies，内容对应。PDF第52页内部幻灯片号为67；其他本次引用页的编号与PDF页相同。

**位置：** PDF页18,24,25,26,36,37

**说明：** 第18页the only other option is to overbuild是简化说明，TXT原始L2还讨论admission control等手段。第24页MPLS is an ethernet based technology，TXT补充not limited to Ethernet。第25页及第36/37页关于部署普及、all routers、scalability等为课件表述，未独立核实当前产品或部署状态。TXT强调加label或class marking不自动提供端到端保证，仍需资源和配置。

**位置：** PDF页27,28,33,63

**说明：** 第27页将RSVP request写为RESP；TXT原始L2写sender pass message（疑似PATH转写）及receiver返回reservation request，不能默认为PDF原文已写PATH/RESV。第28页写Works at Layer Transport Layer，TXT说operates over IP；层次表述有冲突。第33页DiffServ引用写RFC2745，末页列2474、2475；本次不外查RFC修订，也不悄悄改引用号。

**位置：** PDF页41,42,44

**说明：** 课件按nominal flow列classification→metering→shaping→dropping，TXT补充配置未必用齐或遵循唯一顺序。第44页从average 10ms delay推出100 packets/sec，缺少departure spacing假设；TXT强调只对每个packet加相同delay不能减少持续rate，须控制离开间隔。200×1500×8=2.4Mb/s、100×1500×8=1.2Mb/s算术正确；TMP/TXT的millimeters和megabytes疑似milliseconds/megabits转写，原文不改。

**位置：** PDF页46,49,52

**说明：** 第46页RED展开为Random Early Detect且未解释RED/WRED算法，不补编。第49页round robin每class一个packet须if available；不同packet长度下相同packet数不代表相同bandwidth。第52页SLA示例的Gold/Platinum delay有Between Specified Points，Platinum有99.999% uptime（User-Server），未给统计周期；这是示例而非服务保证。

**位置：** PDF页62

**说明：** 第62页Results in reduced capacity, delays措辞含混；TXT描述inspection/encryption需要processing time，不把delays解释成delay被减少。安全开销取决于设备、traffic与配置，不据此删安全机制。

**位置：** TXT

**说明：** TXT原始L2把QoS、DiffServ、IntServ、MPLS、DSCP等多次转写为近音词（如QS/QRS、devs servers、interconnection service、MPS、DSAP）。专业显示采用PDF拼写；录音原片段照录，不以疑似转写补编全称。未核对原音频。录音中的测验和late submission说明只是资料内容。

## 专业英语

### Performance

**稳定ID：** csit985-w8-0001

**类别：** 专业英语

**中文解释：** 性能：network 中capacity、delay、RMA的水平；可为所有流或选定用户／应用／设备组优化，不只指链路快慢。

**简单英文（整理解释）：** The levels of capacity, delay, and RMA, optimized for all flows or selected groups.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Performance is the set of levels for capacity, delay, and RMA in a network. It is usually desirable to optimize these levels, either for all (user, application, and device) traffic flows in the network, or for one or more sets of traffic flows, based on groups of users, applications, and/or devices.

**原文来源：** Week8.pdf · PDF页8 / 幻灯片8

**语境：** Week8 · Performance

**语境英文：** The levels of capacity, delay, and RMA, optimized for all flows or selected groups.

**语境中文：** 性能：network 中capacity、delay、RMA的水平；可为所有流或选定用户／应用／设备组优化，不只指链路快慢。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Performance is the set of levels for capacity, delay, and RMA in a network. It is usually desirable to optimize these levels, either for all (user, application, and device) traffic flows in the network, or for one or more sets of traffic flows, based on groups of users, applications, and/or devices.

**语境原文来源：** Week8.pdf · PDF页8 / 幻灯片8

**语境来源：** Week8.pdf · PDF页8 / 幻灯片8

**全部来源：** Week8.pdf · PDF页8 / 幻灯片8

### RMA (Reliability, Maintainability, Availability)

**稳定ID：** csit985-w4-0b087bf9cbf67b

**类别：** 专业英语

**中文解释：** 可靠性、可维护性、可用性；本页用RMA作为performance维度，TXT展开全称。没有在此给出新的计算公式。

**简单英文（整理解释）：** Reliability, maintainability, and availability; one dimension of performance.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> capacity, delay, and RMA

**原文来源：** Week8.pdf · PDF页8 / 幻灯片8

**语境：** Week8 · RMA (Reliability, Maintainability, Availability)

**语境英文：** Reliability, maintainability, and availability; one dimension of performance.

**语境中文：** 可靠性、可维护性、可用性；本页用RMA作为performance维度，TXT展开全称。没有在此给出新的计算公式。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> capacity, delay, and RMA

**语境原文来源：** Week8.pdf · PDF页8 / 幻灯片8

**语境来源：** Week8.pdf · PDF页8 / 幻灯片8

**全部来源：** Week8.pdf · PDF页8 / 幻灯片8

### Measurable performance goals / link capacity

**稳定ID：** csit985-w8-0003

**类别：** 专业英语

**中文解释：** 可测量的性能目标／链路容量；要明确改善谁的response time或throughput。网络不能支持超过link capacity的持续流量需求。

**简单英文（整理解释）：** Goals that can be measured; traffic demand cannot be supported beyond link capacity.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> the network can not support traffic demands beyond link capacity

**原文来源：** Week8.pdf · PDF页6 / 幻灯片6

**语境：** Week8 · Measurable performance goals / link capacity

**语境英文：** Goals that can be measured; traffic demand cannot be supported beyond link capacity.

**语境中文：** 可测量的性能目标／链路容量；要明确改善谁的response time或throughput。网络不能支持超过link capacity的持续流量需求。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> the network can not support traffic demands beyond link capacity

**语境原文来源：** Week8.pdf · PDF页6 / 幻灯片6

**语境来源：** Week8.pdf · PDF页4,6 / 幻灯片4,6

**全部来源：** Week8.pdf · PDF页4,6 / 幻灯片4,6

### Admission and rate controls

**稳定ID：** csit985-w8-0004

**类别：** 专业英语

**中文解释：** 准入与速率控制；通过限制进入network的流量影响performance。不是增加物理容量。

**简单英文（整理解释）：** Controls on whether traffic enters and at what rate.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> admission and rate controls

**原文来源：** Week8.pdf · PDF页9 / 幻灯片9

**语境：** Week8 · Admission and rate controls

**语境英文：** Controls on whether traffic enters and at what rate.

**语境中文：** 准入与速率控制；通过限制进入network的流量影响performance。不是增加物理容量。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> admission and rate controls

**语境原文来源：** Week8.pdf · PDF页9 / 幻灯片9

**语境来源：** Week8.pdf · PDF页9,10 / 幻灯片9,10

**全部来源：** Week8.pdf · PDF页9,10 / 幻灯片9,10

### Traffic engineering / capacity engineering

**稳定ID：** csit985-w8-0005

**类别：** 专业英语

**中文解释：** 流量工程／容量工程；用于调整network baseline performance。当前资料未细分两种工程的方法。

**简单英文（整理解释）：** Changing baseline network performance through traffic or capacity planning.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> traffic or capacity engineering

**原文来源：** Week8.pdf · PDF页9 / 幻灯片9

**语境：** Week8 · Traffic engineering / capacity engineering

**语境英文：** Changing baseline network performance through traffic or capacity planning.

**语境中文：** 流量工程／容量工程；用于调整network baseline performance。当前资料未细分两种工程的方法。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> traffic or capacity engineering

**语境原文来源：** Week8.pdf · PDF页9 / 幻灯片9

**语境来源：** Week8.pdf · PDF页9,10 / 幻灯片9,10

**全部来源：** Week8.pdf · PDF页9,10 / 幻灯片9,10

### Feedback loop

**稳定ID：** csit985-w8-0006

**类别：** 专业英语

**中文解释：** 反馈环路；measure结果后向users、applications、devices及management反馈，按需修改控制。

**简单英文（整理解释）：** Use measured results to adjust network controls when needed.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> implementing a feedback loop

**原文来源：** Week8.pdf · PDF页9 / 幻灯片9

**语境：** Week8 · Feedback loop

**语境英文：** Use measured results to adjust network controls when needed.

**语境中文：** 反馈环路；measure结果后向users、applications、devices及management反馈，按需修改控制。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> implementing a feedback loop

**语境原文来源：** Week8.pdf · PDF页9 / 幻灯片9

**语境来源：** Week8.pdf · PDF页9,10 / 幻灯片9,10

**全部来源：** Week8.pdf · PDF页9,10 / 幻灯片9,10

### Single-tier performance

**稳定ID：** csit985-w4-78f1df536c442e

**类别：** 专业英语

**中文解释：** 单层性能方案：为所有traffic flows优化capacity、delay、RMA。

**简单英文（整理解释）：** Optimizing performance for all traffic flows.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Single tier performance where capacity, delay and RMA, are optimized for all traffic flows

**原文来源：** Week8.pdf · PDF页17 / 幻灯片17

**语境：** Week8 · Single-tier performance

**语境英文：** Optimizing performance for all traffic flows.

**语境中文：** 单层性能方案：为所有traffic flows优化capacity、delay、RMA。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Single tier performance where capacity, delay and RMA, are optimized for all traffic flows

**语境原文来源：** Week8.pdf · PDF页17 / 幻灯片17

**语境来源：** Week8.pdf · PDF页17 / 幻灯片17

**全部来源：** Week8.pdf · PDF页17 / 幻灯片17

### Multi-tier performance

**稳定ID：** csit985-w4-ba54d6ee05f81d

**类别：** 专业英语

**中文解释：** 多层性能方案：为一个或多个流群体优化capacity、delay、RMA，允许组间服务水平不同。

**简单英文（整理解释）：** Optimizing performance for one or more groups of flows.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Multi-tier where capacity, delay and RMA are optimized for one or more groups of flows

**原文来源：** Week8.pdf · PDF页17 / 幻灯片17

**语境：** Week8 · Multi-tier performance

**语境英文：** Optimizing performance for one or more groups of flows.

**语境中文：** 多层性能方案：为一个或多个流群体优化capacity、delay、RMA，允许组间服务水平不同。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Multi-tier where capacity, delay and RMA are optimized for one or more groups of flows

**语境原文来源：** Week8.pdf · PDF页17 / 幻灯片17

**语境来源：** Week8.pdf · PDF页17 / 幻灯片17

**全部来源：** Week8.pdf · PDF页17 / 幻灯片17

### QoS (Quality of Service)

**稳定ID：** csit985-w8-0009

**类别：** 专业英语

**中文解释：** 服务质量；本讲定义为确定、设置并按traffic flows的priority levels采取行动。QoS并不创造额外link capacity。

**简单英文（整理解释）：** Determining and acting on traffic priorities; it does not create extra link capacity.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Determining, setting and acting on priority levels for traffic flows

**原文来源：** Week8.pdf · PDF页22 / 幻灯片22

**语境：** Week8 · QoS (Quality of Service)

**语境英文：** Determining and acting on traffic priorities; it does not create extra link capacity.

**语境中文：** 服务质量；本讲定义为确定、设置并按traffic flows的priority levels采取行动。QoS并不创造额外link capacity。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Determining, setting and acting on priority levels for traffic flows

**语境原文来源：** Week8.pdf · PDF页22 / 幻灯片22

**语境来源：** Week8.pdf · PDF页18,22 / 幻灯片18,22

**全部来源：** Week8.pdf · PDF页18,22 / 幻灯片18,22

### ToS (Type of Service)

**稳定ID：** csit985-w8-0010

**类别：** 专业英语

**中文解释：** 服务类型；IPv4 header中与优先处理有关的字段。课件以ToS byte说明DiffServ标记，IPv6对应traffic class。

**简单英文（整理解释）：** A header field used in the slide's explanation of traffic markings.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Type of Service (ToS)

**原文来源：** Week8.pdf · PDF页22 / 幻灯片22

**语境：** Week8 · ToS (Type of Service)

**语境英文：** A header field used in the slide's explanation of traffic markings.

**语境中文：** 服务类型；IPv4 header中与优先处理有关的字段。课件以ToS byte说明DiffServ标记，IPv6对应traffic class。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Type of Service (ToS)

**语境原文来源：** Week8.pdf · PDF页22 / 幻灯片22

**语境来源：** Week8.pdf · PDF页22,30,31 / 幻灯片22,30,31

**全部来源：** Week8.pdf · PDF页22,30,31 / 幻灯片22,30,31

### CoS (Class of Service) / CIR (Committed Information Rate)

**稳定ID：** csit985-w8-0011

**类别：** 专业英语

**中文解释：** 服务类别／承诺信息速率；课件分别列ATM CoS和Frame Relay CIR，仅作为QoS相关机制例子。

**简单英文（整理解释）：** QoS-related examples from ATM and Frame Relay; only the names are given here.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Frame Relay Committed Information Rate (CIR)

**原文来源：** Week8.pdf · PDF页22 / 幻灯片22

**语境：** Week8 · CoS (Class of Service) / CIR (Committed Information Rate)

**语境英文：** QoS-related examples from ATM and Frame Relay; only the names are given here.

**语境中文：** 服务类别／承诺信息速率；课件分别列ATM CoS和Frame Relay CIR，仅作为QoS相关机制例子。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Frame Relay Committed Information Rate (CIR)

**语境原文来源：** Week8.pdf · PDF页22 / 幻灯片22

**语境来源：** Week8.pdf · PDF页22 / 幻灯片22

**全部来源：** Week8.pdf · PDF页22 / 幻灯片22

### DiffServ (Differentiated Services)

**稳定ID：** csit985-w8-0012

**类别：** 专业英语

**中文解释：** 区分服务；把flows汇成classes，各hop/device分别处理，scalability较好。与IntServ的per-flow/end-to-end支持不同，不能只凭标记保证端到端目标。

**简单英文（整理解释）：** Aggregating flows into classes for per-hop treatment, with good scalability.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Aggregation of traffic flows on a per-hop basis

**原文来源：** Week8.pdf · PDF页23 / 幻灯片23

**语境：** Week8 · DiffServ (Differentiated Services)

**语境英文：** Aggregating flows into classes for per-hop treatment, with good scalability.

**语境中文：** 区分服务；把flows汇成classes，各hop/device分别处理，scalability较好。与IntServ的per-flow/end-to-end支持不同，不能只凭标记保证端到端目标。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Aggregation of traffic flows on a per-hop basis

**语境原文来源：** Week8.pdf · PDF页23 / 幻灯片23

**语境来源：** Week8.pdf · PDF页23,29,30,32,37 / 幻灯片23,29,30,32,37

**全部来源：** Week8.pdf · PDF页23,29,30,32,37 / 幻灯片23,29,30,32,37

### IntServ

**稳定ID：** csit985-w8-0013

**类别：** 专业英语

**中文解释：** IntServ；本讲用于单独流的end-to-end资源支持，per-flow状态和signaling带来扩展负担。当前PDF没有展开全称，TXT近音转写不用于补编全称。

**简单英文（整理解释）：** End-to-end support for individual flows, requiring more per-flow information.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> End-to-end support for individual flows

**原文来源：** Week8.pdf · PDF页23 / 幻灯片23

**语境：** Week8 · IntServ

**语境英文：** End-to-end support for individual flows, requiring more per-flow information.

**语境中文：** IntServ；本讲用于单独流的end-to-end资源支持，per-flow状态和signaling带来扩展负担。当前PDF没有展开全称，TXT近音转写不用于补编全称。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> End-to-end support for individual flows

**语境原文来源：** Week8.pdf · PDF页23 / 幻灯片23

**语境来源：** Week8.pdf · PDF页23,27,29,37 / 幻灯片23,27,29,37

**全部来源：** Week8.pdf · PDF页23,27,29,37 / 幻灯片23,27,29,37

### MPLS (Multiprotocol Label Switching)

**稳定ID：** csit985-w8-0014

**类别：** 专业英语

**中文解释：** 多协议标签交换；按labels转发并支持traffic engineering/QoS。PDF称ethernet based，TXT补充不局限Ethernet；加label本身不自动保证performance。

**简单英文（整理解释）：** Label-based forwarding that can support QoS when resources and controls are correctly configured.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> MPLS – Multiprotocol label Switching

**原文来源：** Week8.pdf · PDF页24 / 幻灯片24

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> not limited to Ethernet.

**原文来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符11901起；搜索“not limited to Ethernet.”

**语境：** Week8 · MPLS (Multiprotocol Label Switching)

**语境英文：** Label-based forwarding that can support QoS when resources and controls are correctly configured.

**语境中文：** 多协议标签交换；按labels转发并支持traffic engineering/QoS。PDF称ethernet based，TXT补充不局限Ethernet；加label本身不自动保证performance。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> MPLS – Multiprotocol label Switching

**语境原文来源：** Week8.pdf · PDF页24 / 幻灯片24

**语境来源：** Week8.pdf · PDF页24,25 / 幻灯片24,25

**语境：** Week8 · MPLS (Multiprotocol Label Switching)

**语境英文：** MPLS is not limited to Ethernet in the transcript, and a label alone does not guarantee performance.

**语境中文：** TXT说不局限Ethernet，label本身不自动保证性能；还需provision resources和traffic treatment。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> not limited to Ethernet.

**语境原文来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符11901起；搜索“not limited to Ethernet.”

**语境来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符11901起；搜索“not limited to Ethernet.”

**全部来源：** Week8.pdf · PDF页24,25 / 幻灯片24,25；CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符11901起；搜索“not limited to Ethernet.”

### MPLS header

**稳定ID：** csit985-w8-0015

**类别：** 专业英语

**中文解释：** MPLS头；LER附在IP packet上，LSR使用它转发。课件未提供完整字段表。

**简单英文（整理解释）：** A header added to an IP packet and used inside the MPLS network.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> A MPLS header is attached to an IP packet

**原文来源：** Week8.pdf · PDF页26 / 幻灯片26

**语境：** Week8 · MPLS header

**语境英文：** A header added to an IP packet and used inside the MPLS network.

**语境中文：** MPLS头；LER附在IP packet上，LSR使用它转发。课件未提供完整字段表。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> A MPLS header is attached to an IP packet

**语境原文来源：** Week8.pdf · PDF页26 / 幻灯片26

**语境来源：** Week8.pdf · PDF页26 / 幻灯片26

**全部来源：** Week8.pdf · PDF页26 / 幻灯片26

### LER (Label Edge Router)

**稳定ID：** csit985-w8-0016

**类别：** 专业英语

**中文解释：** 标签边缘路由器；定义MPLS network的入口和出口。

**简单英文（整理解释）：** A router at an MPLS network's entry or exit.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> The entry and exit points of an MPLS network are defined by LERs.

**原文来源：** Week8.pdf · PDF页26 / 幻灯片26

**语境：** Week8 · LER (Label Edge Router)

**语境英文：** A router at an MPLS network's entry or exit.

**语境中文：** 标签边缘路由器；定义MPLS network的入口和出口。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> The entry and exit points of an MPLS network are defined by LERs.

**语境原文来源：** Week8.pdf · PDF页26 / 幻灯片26

**语境来源：** Week8.pdf · PDF页26 / 幻灯片26

**全部来源：** Week8.pdf · PDF页26 / 幻灯片26

### LSR (Label Switch Router)

**稳定ID：** csit985-w8-0017

**类别：** 专业英语

**中文解释：** 标签交换路由器；位于LER之间，根据MPLS header转发。

**简单英文（整理解释）：** An internal router that uses the MPLS header to forward packets.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Routers in between are called Label Switch Routers (LSR) which use the MPLS header to route packets

**原文来源：** Week8.pdf · PDF页26 / 幻灯片26

**语境：** Week8 · LSR (Label Switch Router)

**语境英文：** An internal router that uses the MPLS header to forward packets.

**语境中文：** 标签交换路由器；位于LER之间，根据MPLS header转发。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Routers in between are called Label Switch Routers (LSR) which use the MPLS header to route packets

**语境原文来源：** Week8.pdf · PDF页26 / 幻灯片26

**语境来源：** Week8.pdf · PDF页26 / 幻灯片26

**全部来源：** Week8.pdf · PDF页26 / 幻灯片26

### VLSI (Very Large Scale Integration)

**稳定ID：** csit985-w8-0018

**类别：** 专业英语

**中文解释：** 超大规模集成；本页用于说明硬件利用MPLS header作决策，与CPU和lookup tables对比。只是本讲说明，不保证所有设备采用同一方式。

**简单英文（整理解释）：** Hardware technology mentioned in the MPLS processing example.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> VLSI (Very Large Scale Integration)

**原文来源：** Week8.pdf · PDF页26 / 幻灯片26

**语境：** Week8 · VLSI (Very Large Scale Integration)

**语境英文：** Hardware technology mentioned in the MPLS processing example.

**语境中文：** 超大规模集成；本页用于说明硬件利用MPLS header作决策，与CPU和lookup tables对比。只是本讲说明，不保证所有设备采用同一方式。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> VLSI (Very Large Scale Integration)

**语境原文来源：** Week8.pdf · PDF页26 / 幻灯片26

**语境来源：** Week8.pdf · PDF页26 / 幻灯片26

**全部来源：** Week8.pdf · PDF页26 / 幻灯片26

### RSVP (Resource ReSerVation Protocol)

**稳定ID：** csit985-w8-0019

**类别：** 专业英语

**中文解释：** 资源预留协议；signal routers为实时传输预留bandwidth。PDF写RESP和Transport Layer；TXT说在IP上运行，并描述sender的pass message（疑似PATH转写）、receiver返回reservation request，有来源冲突。

**简单英文（整理解释）：** A signaling protocol for reserving resources; several slide details conflict with the transcript.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> A communications protocol that signals a router to reserve bandwidth for real-time transmission.

**原文来源：** Week8.pdf · PDF页28 / 幻灯片28

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> it operates over IP and carries control information

**原文来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符14374起；搜索“it operates over IP and carries”

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> The receiver then sends a reservation request back towards the sender.

**原文来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符14014起；搜索“The receiver then sends a reservation request”

**语境：** Week8 · RSVP (Resource ReSerVation Protocol)

**语境英文：** A signaling protocol for reserving resources; several slide details conflict with the transcript.

**语境中文：** 资源预留协议；signal routers为实时传输预留bandwidth。PDF写RESP和Transport Layer；TXT说在IP上运行，并描述sender的pass message（疑似PATH转写）、receiver返回reservation request，有来源冲突。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> A communications protocol that signals a router to reserve bandwidth for real-time transmission.

**语境原文来源：** Week8.pdf · PDF页28 / 幻灯片28

**语境来源：** Week8.pdf · PDF页27,28 / 幻灯片27,28

**语境：** Week8 · RSVP (Resource ReSerVation Protocol)

**语境英文：** The transcript describes RSVP as control signaling over IP, following routes provided by routing.

**语境中文：** TXT说RSVP在IP上运行并携带control information，不传应用voice/video data，也不自行选route。与PDF层次措辞分开记录。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> it operates over IP and carries control information

**语境原文来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符14374起；搜索“it operates over IP and carries”

**语境来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符14374起；搜索“it operates over IP and carries”

**语境：** Week8 · RSVP (Resource ReSerVation Protocol)

**语境英文：** The receiver requests a reservation, and routers may refuse it if resources are unavailable.

**语境中文：** TXT描述receiver向sender方向返回reservation request，routers检查资源，可拒绝请求；不能把request等于无条件已保证。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> The receiver then sends a reservation request back towards the sender.

**语境原文来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符14014起；搜索“The receiver then sends a reservation request”

**语境来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符14014起；搜索“The receiver then sends a reservation request”

**全部来源：** Week8.pdf · PDF页27,28 / 幻灯片27,28；CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符14374起；搜索“it operates over IP and carries”；CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符14014起；搜索“The receiver then sends a reservation request”

### RSVP-TE

**稳定ID：** csit985-w8-0020

**类别：** 专业英语

**中文解释：** 用于MPLS traffic engineering的RSVP扩展；PDF说RSVP被重新用于MPLS，TXT补充为traffic-engineered paths服务。

**简单英文（整理解释）：** An RSVP extension used for traffic-engineered MPLS paths.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> see RSVP-TE

**原文来源：** Week8.pdf · PDF页36 / 幻灯片36

**语境：** Week8 · RSVP-TE

**语境英文：** An RSVP extension used for traffic-engineered MPLS paths.

**语境中文：** 用于MPLS traffic engineering的RSVP扩展；PDF说RSVP被重新用于MPLS，TXT补充为traffic-engineered paths服务。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> see RSVP-TE

**语境原文来源：** Week8.pdf · PDF页36 / 幻灯片36

**语境来源：** Week8.pdf · PDF页36 / 幻灯片36

**全部来源：** Week8.pdf · PDF页36 / 幻灯片36

### Best effort / AF / EF

**稳定ID：** csit985-w8-0021

**类别：** 专业英语

**中文解释：** 尽力而为／Assured Forwarding／Expedited Forwarding；DiffServ三种主要处理类别。TXT分别说明无特殊保证、类别及丢弃优先级、配置充分时低delay/low loss；不是统一服务保证。

**简单英文（整理解释）：** DiffServ traffic treatments; their actual service depends on configuration and resources.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Expedited Forwarding (EF)

**原文来源：** Week8.pdf · PDF页30 / 幻灯片30

**语境：** Week8 · Best effort / AF / EF

**语境英文：** DiffServ traffic treatments; their actual service depends on configuration and resources.

**语境中文：** 尽力而为／Assured Forwarding／Expedited Forwarding；DiffServ三种主要处理类别。TXT分别说明无特殊保证、类别及丢弃优先级、配置充分时低delay/low loss；不是统一服务保证。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Expedited Forwarding (EF)

**语境原文来源：** Week8.pdf · PDF页30 / 幻灯片30

**语境来源：** Week8.pdf · PDF页30,32 / 幻灯片30,32

**全部来源：** Week8.pdf · PDF页30,32 / 幻灯片30,32

### DSCP (Differentiated Services Code Point)

**稳定ID：** csit985-w8-0022

**类别：** 专业英语

**中文解释：** 区分服务代码点；用于标明期望的转发类别，设备须配置规则来识别并处理。TXT说six-bit，PDF只展开名称。

**简单英文（整理解释）：** A packet marking used to select a forwarding treatment.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Differentiated Services Code Point (DSCP)

**原文来源：** Week8.pdf · PDF页32 / 幻灯片32

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> a six-bit, uh, value that identifies, uh, the intended forwarding treatment.

**原文来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符16538起；搜索“a six-bit, uh, value”

**语境：** Week8 · DSCP (Differentiated Services Code Point)

**语境英文：** A packet marking used to select a forwarding treatment.

**语境中文：** 区分服务代码点；用于标明期望的转发类别，设备须配置规则来识别并处理。TXT说six-bit，PDF只展开名称。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Differentiated Services Code Point (DSCP)

**语境原文来源：** Week8.pdf · PDF页32 / 幻灯片32

**语境来源：** Week8.pdf · PDF页32 / 幻灯片32

**语境：** Week8 · DSCP (Differentiated Services Code Point)

**语境英文：** A six-bit marking indicating the intended treatment, with device rules still required.

**语境中文：** TXT补充DSCP是six-bit value，标识intended forwarding treatment；设备需配置解释与处理，不能只有标记。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> a six-bit, uh, value that identifies, uh, the intended forwarding treatment.

**语境原文来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符16538起；搜索“a six-bit, uh, value”

**语境来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符16538起；搜索“a six-bit, uh, value”

**全部来源：** Week8.pdf · PDF页32 / 幻灯片32；CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符16538起；搜索“a six-bit, uh, value”

### DiffServ domain / boundary nodes

**稳定ID：** csit985-w8-0023

**类别：** 专业英语

**中文解释：** DiffServ域／边界节点；域由指定为boundary nodes的routers定义。课件把引用写RFC2745，末页另列2474/2475，保留疑点。

**简单英文（整理解释）：** A coordinated DiffServ domain with routers at its boundaries.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> DiffServ operates over a DiffServ domain that is defined by routers designated as “boundary nodes”

**原文来源：** Week8.pdf · PDF页33 / 幻灯片33

**语境：** Week8 · DiffServ domain / boundary nodes

**语境英文：** A coordinated DiffServ domain with routers at its boundaries.

**语境中文：** DiffServ域／边界节点；域由指定为boundary nodes的routers定义。课件把引用写RFC2745，末页另列2474/2475，保留疑点。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> DiffServ operates over a DiffServ domain that is defined by routers designated as “boundary nodes”

**语境原文来源：** Week8.pdf · PDF页33 / 幻灯片33

**语境来源：** Week8.pdf · PDF页33 / 幻灯片33

**全部来源：** Week8.pdf · PDF页33 / 幻灯片33

### Per-hop / per-flow / end-to-end control

**稳定ID：** csit985-w8-0024

**类别：** 专业英语

**中文解释：** 逐跳／逐流／端到端控制；DiffServ按device/hop处理classes，IntServ沿flow路径提供支持。控制粒度与范围是不同维度。

**简单英文（整理解释）：** Control at each hop, for each flow, or along the entire path.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Per Network Device (Per-Hop)

**原文来源：** Week8.pdf · PDF页37 / 幻灯片37

**语境：** Week8 · Per-hop / per-flow / end-to-end control

**语境英文：** Control at each hop, for each flow, or along the entire path.

**语境中文：** 逐跳／逐流／端到端控制；DiffServ按device/hop处理classes，IntServ沿flow路径提供支持。控制粒度与范围是不同维度。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Per Network Device (Per-Hop)

**语境原文来源：** Week8.pdf · PDF页37 / 幻灯片37

**语境来源：** Week8.pdf · PDF页37 / 幻灯片37

**全部来源：** Week8.pdf · PDF页37 / 幻灯片37

### Resource control

**稳定ID：** csit985-w8-0025

**类别：** 专业英语

**中文解释：** 资源控制；包括prioritization、traffic management、scheduling和queuing。

**简单英文（整理解释）：** Controls that prioritize traffic, manage admission and conditioning, and choose how packets wait and leave.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Traffic management

**原文来源：** Week8.pdf · PDF页39 / 幻灯片39

**语境：** Week8 · Resource control

**语境英文：** Controls that prioritize traffic, manage admission and conditioning, and choose how packets wait and leave.

**语境中文：** 资源控制；包括prioritization、traffic management、scheduling和queuing。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Traffic management

**语境原文来源：** Week8.pdf · PDF页39 / 幻灯片39

**语境来源：** Week8.pdf · PDF页39 / 幻灯片39

**全部来源：** Week8.pdf · PDF页39 / 幻灯片39

### Prioritization

**稳定ID：** csit985-w8-0026

**类别：** 专业英语

**中文解释：** 优先级排序：按相对重要性和紧急程度排列users、applications、devices、flows和connections。优先级应在requirements/flow analysis确定。

**简单英文（整理解释）：** Ranking network entities by relative importance and urgency.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> A ranking based upon importance and urgency relative to other network entities

**原文来源：** Week8.pdf · PDF页40 / 幻灯片40

**语境：** Week8 · Prioritization

**语境英文：** Ranking network entities by relative importance and urgency.

**语境中文：** 优先级排序：按相对重要性和紧急程度排列users、applications、devices、flows和connections。优先级应在requirements/flow analysis确定。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> A ranking based upon importance and urgency relative to other network entities

**语境原文来源：** Week8.pdf · PDF页40 / 幻灯片40

**语境来源：** Week8.pdf · PDF页40 / 幻灯片40

**全部来源：** Week8.pdf · PDF页40 / 幻灯片40

### Admission control

**稳定ID：** csit985-w8-0027

**类别：** 专业英语

**中文解释：** 准入控制：可以拒绝access，并按priority level改变准入行为。TXT用“还能否支持一个新call”说明。

**简单英文（整理解释）：** Deciding whether new traffic can enter without harming required service.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Ability to refuse access

**原文来源：** Week8.pdf · PDF页41 / 幻灯片41

**语境：** Week8 · Admission control

**语境英文：** Deciding whether new traffic can enter without harming required service.

**语境中文：** 准入控制：可以拒绝access，并按priority level改变准入行为。TXT用“还能否支持一个新call”说明。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Ability to refuse access

**语境原文来源：** Week8.pdf · PDF页41 / 幻灯片41

**语境来源：** Week8.pdf · PDF页41 / 幻灯片41

**全部来源：** Week8.pdf · PDF页41 / 幻灯片41

### Traffic conditioning

**稳定ID：** csit985-w8-0028

**类别：** 专业英语

**中文解释：** 流量调节：改变flows得到的performance；课件按nominal flow列classification、metering、shaping、dropping。TXT说每个配置未必都按此顺序用完四项。

**简单英文（整理解释）：** Mechanisms that change traffic treatment, using classification, metering, shaping, and dropping as needed.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Set of mechanisms that increase or decrease performance to traffic flows

**原文来源：** Week8.pdf · PDF页42 / 幻灯片42

**语境：** Week8 · Traffic conditioning

**语境英文：** Mechanisms that change traffic treatment, using classification, metering, shaping, and dropping as needed.

**语境中文：** 流量调节：改变flows得到的performance；课件按nominal flow列classification、metering、shaping、dropping。TXT说每个配置未必都按此顺序用完四项。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Set of mechanisms that increase or decrease performance to traffic flows

**语境原文来源：** Week8.pdf · PDF页42 / 幻灯片42

**语境来源：** Week8.pdf · PDF页41,42 / 幻灯片41,42

**全部来源：** Week8.pdf · PDF页41,42 / 幻灯片41,42

### Classification

**稳定ID：** csit985-w8-0029

**类别：** 专业英语

**中文解释：** 流量分类；packets可标DSCP来区分Best Effort、AF、EF。

**简单英文（整理解释）：** Identifying traffic classes, possibly using DSCP markings.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Packets can be marked with Differentiated Services Code Points (DSCPs)

**原文来源：** Week8.pdf · PDF页43 / 幻灯片43

**语境：** Week8 · Classification

**语境英文：** Identifying traffic classes, possibly using DSCP markings.

**语境中文：** 流量分类；packets可标DSCP来区分Best Effort、AF、EF。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Packets can be marked with Differentiated Services Code Points (DSCPs)

**语境原文来源：** Week8.pdf · PDF页43 / 幻灯片43

**语境来源：** Week8.pdf · PDF页43 / 幻灯片43

**全部来源：** Week8.pdf · PDF页43 / 幻灯片43

### Metering

**稳定ID：** csit985-w8-0030

**类别：** 专业英语

**中文解释：** 流量计量；在routers测traffic rates或burst sizes等时间特征，并与SLA traffic profile比较。

**简单英文（整理解释）：** Measuring traffic rates or burst sizes and comparing them with an agreed profile.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Temporal characteristics of traffic flow (traffic rates or burst sizes) are measured

**原文来源：** Week8.pdf · PDF页43 / 幻灯片43

**语境：** Week8 · Metering

**语境英文：** Measuring traffic rates or burst sizes and comparing them with an agreed profile.

**语境中文：** 流量计量；在routers测traffic rates或burst sizes等时间特征，并与SLA traffic profile比较。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Temporal characteristics of traffic flow (traffic rates or burst sizes) are measured

**语境原文来源：** Week8.pdf · PDF页43 / 幻灯片43

**语境来源：** Week8.pdf · PDF页43 / 幻灯片43

**全部来源：** Week8.pdf · PDF页43 / 幻灯片43

### Shaping

**稳定ID：** csit985-w8-0031

**类别：** 专业英语

**中文解释：** 流量整形：延迟不符合profile的traffic，使发送符合要求。例200×1500×8=2.4Mb/s，按100 packets/sec发出为1.2Mb/s；统一加10ms延迟不足以推出速率减半，TXT强调departure spacing。

**简单英文（整理解释）：** Buffering and spacing departures to meet a traffic profile; equal extra delay alone does not halve a sustained rate.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Delaying non-conforming traffic to match performance characteristics

**原文来源：** Week8.pdf · PDF页41 / 幻灯片41

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> simply adding the same delay to every packet will not reduce a sustained traffic races.

**原文来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符22774起；搜索“simply adding the same delay to every packet”

**语境：** Week8 · Shaping

**语境英文：** Buffering and spacing departures to meet a traffic profile; equal extra delay alone does not halve a sustained rate.

**语境中文：** 流量整形：延迟不符合profile的traffic，使发送符合要求。例200×1500×8=2.4Mb/s，按100 packets/sec发出为1.2Mb/s；统一加10ms延迟不足以推出速率减半，TXT强调departure spacing。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Delaying non-conforming traffic to match performance characteristics

**语境原文来源：** Week8.pdf · PDF页41 / 幻灯片41

**语境来源：** Week8.pdf · PDF页41,44 / 幻灯片41,44

**语境：** Week8 · Shaping

**语境英文：** Shaping controls departures; equal added delay alone does not lower a sustained traffic rate.

**语境中文：** TXT强调控制departure spacing；对每个packet加相同delay不能减少sustained traffic rate。录音中的millimeters/megabytes等保留为转写疑点。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> simply adding the same delay to every packet will not reduce a sustained traffic races.

**语境原文来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符22774起；搜索“simply adding the same delay to every packet”

**语境来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符22774起；搜索“simply adding the same delay to every packet”

**全部来源：** Week8.pdf · PDF页41,44 / 幻灯片41,44；CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符22774起；搜索“simply adding the same delay to every packet”

### Dropping

**稳定ID：** csit985-w8-0032

**类别：** 专业英语

**中文解释：** 丢弃packets；与shaping的暂存延后不同。

**简单英文（整理解释）：** Discarding packets rather than delaying them.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Dropping – Packets are discarded

**原文来源：** Week8.pdf · PDF页44 / 幻灯片44

**语境：** Week8 · Dropping

**语境英文：** Discarding packets rather than delaying them.

**语境中文：** 丢弃packets；与shaping的暂存延后不同。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Dropping – Packets are discarded

**语境原文来源：** Week8.pdf · PDF页44 / 幻灯片44

**语境来源：** Week8.pdf · PDF页44 / 幻灯片44

**全部来源：** Week8.pdf · PDF页44 / 幻灯片44

### Scheduling

**稳定ID：** csit985-w8-0033

**类别：** 专业英语

**中文解释：** 调度：确定traffic被处理和传输的顺序，可在network各处应用。

**简单英文（整理解释）：** Determining the order in which traffic is processed for transmission.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Determines the order in which traffic is processed for transmission

**原文来源：** Week8.pdf · PDF页45 / 幻灯片45

**语境：** Week8 · Scheduling

**语境英文：** Determining the order in which traffic is processed for transmission.

**语境中文：** 调度：确定traffic被处理和传输的顺序，可在network各处应用。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Determines the order in which traffic is processed for transmission

**语境原文来源：** Week8.pdf · PDF页45 / 幻灯片45

**语境来源：** Week8.pdf · PDF页45 / 幻灯片45

**全部来源：** Week8.pdf · PDF页45 / 幻灯片45

### Queuing

**稳定ID：** csit985-w8-0034

**类别：** 专业英语

**中文解释：** 排队：packets、cells或frames在等待处理期间存储。TXT强调等待增加delay，queue满后可能drop。

**简单英文（整理解释）：** Storing packets while they wait for processing.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Storing packets (cell/frames etc.) while they wait for processing

**原文来源：** Week8.pdf · PDF页46 / 幻灯片46

**语境：** Week8 · Queuing

**语境英文：** Storing packets while they wait for processing.

**语境中文：** 排队：packets、cells或frames在等待处理期间存储。TXT强调等待增加delay，queue满后可能drop。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Storing packets (cell/frames etc.) while they wait for processing

**语境原文来源：** Week8.pdf · PDF页46 / 幻灯片46

**语境来源：** Week8.pdf · PDF页46 / 幻灯片46

**全部来源：** Week8.pdf · PDF页46 / 幻灯片46

### CBQ (Class Based Queuing)

**稳定ID：** csit985-w8-0035

**类别：** 专业英语

**中文解释：** 基于类别排队；只在机制清单中列名称，没有给出完整算法。

**简单英文（整理解释）：** A class-based queue mechanism named in the slides; no full algorithm is defined.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Class Based Queuing (CBQ)

**原文来源：** Week8.pdf · PDF页46 / 幻灯片46

**语境：** Week8 · CBQ (Class Based Queuing)

**语境英文：** A class-based queue mechanism named in the slides; no full algorithm is defined.

**语境中文：** 基于类别排队；只在机制清单中列名称，没有给出完整算法。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Class Based Queuing (CBQ)

**语境原文来源：** Week8.pdf · PDF页46 / 幻灯片46

**语境来源：** Week8.pdf · PDF页46 / 幻灯片46

**全部来源：** Week8.pdf · PDF页46 / 幻灯片46

### FIFO (First In First Out)

**稳定ID：** csit985-w8-0036

**类别：** 专业英语

**中文解释：** 先进先出；按到达queue的顺序发送。简单，但不区分应用优先级。

**简单英文（整理解释）：** Sending packets in their order of arrival.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> FIFO (first in first out) scheduling: send in order of arrival to queue

**原文来源：** Week8.pdf · PDF页47 / 幻灯片47

**语境：** Week8 · FIFO (First In First Out)

**语境英文：** Sending packets in their order of arrival.

**语境中文：** 先进先出；按到达queue的顺序发送。简单，但不区分应用优先级。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> FIFO (first in first out) scheduling: send in order of arrival to queue

**语境原文来源：** Week8.pdf · PDF页47 / 幻灯片47

**语境来源：** Week8.pdf · PDF页47 / 幻灯片47

**全部来源：** Week8.pdf · PDF页47 / 幻灯片47

### Priority scheduling

**稳定ID：** csit985-w8-0037

**类别：** 专业英语

**中文解释：** 优先级调度；发送排队中priority最高的packet，classes可由marking、IP或port等决定。TXT补充低优先级流可能starve。

**简单英文（整理解释）：** Serving the highest-priority waiting packet; lower classes may wait too long.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Priority scheduling: transmit highest priority queued packet

**原文来源：** Week8.pdf · PDF页48 / 幻灯片48

**语境：** Week8 · Priority scheduling

**语境英文：** Serving the highest-priority waiting packet; lower classes may wait too long.

**语境中文：** 优先级调度；发送排队中priority最高的packet，classes可由marking、IP或port等决定。TXT补充低优先级流可能starve。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Priority scheduling: transmit highest priority queued packet

**语境原文来源：** Week8.pdf · PDF页48 / 幻灯片48

**语境来源：** Week8.pdf · PDF页48 / 幻灯片48

**全部来源：** Week8.pdf · PDF页48 / 幻灯片48

### Round robin scheduling

**稳定ID：** csit985-w8-0038

**类别：** 专业英语

**中文解释：** 轮询调度；循环访问各class queue，如果有packet就各服务一个。必须保留if available条件。

**简单英文（整理解释）：** Cyclically serving one packet from each class when a packet is available.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> cyclically scan class queues, serving one from each class (if available)

**原文来源：** Week8.pdf · PDF页49 / 幻灯片49

**语境：** Week8 · Round robin scheduling

**语境英文：** Cyclically serving one packet from each class when a packet is available.

**语境中文：** 轮询调度；循环访问各class queue，如果有packet就各服务一个。必须保留if available条件。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> cyclically scan class queues, serving one from each class (if available)

**语境原文来源：** Week8.pdf · PDF页49 / 幻灯片49

**语境来源：** Week8.pdf · PDF页49 / 幻灯片49

**全部来源：** Week8.pdf · PDF页49 / 幻灯片49

### WFQ (Weighted Fair Queuing)

**稳定ID：** csit985-w8-0039

**类别：** 专业英语

**中文解释：** 加权公平排队；generalized round robin，每个class每个cycle得到按weight分配的service。TXT提醒同样packet个数不等于同样bandwidth。

**简单英文（整理解释）：** Giving each class a weighted share of service in each cycle.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> each class gets weighted amount of service in each cycle

**原文来源：** Week8.pdf · PDF页49 / 幻灯片49

**语境：** Week8 · WFQ (Weighted Fair Queuing)

**语境英文：** Giving each class a weighted share of service in each cycle.

**语境中文：** 加权公平排队；generalized round robin，每个class每个cycle得到按weight分配的service。TXT提醒同样packet个数不等于同样bandwidth。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> each class gets weighted amount of service in each cycle

**语境原文来源：** Week8.pdf · PDF页49 / 幻灯片49

**语境来源：** Week8.pdf · PDF页49 / 幻灯片49

**全部来源：** Week8.pdf · PDF页49 / 幻灯片49

### RED / WRED

**稳定ID：** csit985-w8-0040

**类别：** 专业英语

**中文解释：** Random Early Detect／Weighted RED；课件这样列名称但未解释算法。RED原文Detect与常见术语写法可能有差异，本次不据外部资料补算法。

**简单英文（整理解释）：** Queue-related names listed without a formal algorithm definition.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Random Early Detect (RED)

**原文来源：** Week8.pdf · PDF页46 / 幻灯片46

**语境：** Week8 · RED / WRED

**语境英文：** Queue-related names listed without a formal algorithm definition.

**语境中文：** Random Early Detect／Weighted RED；课件这样列名称但未解释算法。RED原文Detect与常见术语写法可能有差异，本次不据外部资料补算法。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Random Early Detect (RED)

**语境原文来源：** Week8.pdf · PDF页46 / 幻灯片46

**语境来源：** Week8.pdf · PDF页46 / 幻灯片46

**全部来源：** Week8.pdf · PDF页46 / 幻灯片46

### SLA (Service Level Agreement)

**稳定ID：** csit985-w8-0041

**类别：** 专业英语

**中文解释：** 服务级别协议；通常是provider和user之间的正式合同，规定责任和accountability。可含data rate、burst tolerance、up/downstream、delay和RMA。

**简单英文（整理解释）：** An agreement defining service targets and the provider's responsibilities.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Typically formal contracts between a provider and a user

**原文来源：** Week8.pdf · PDF页51 / 幻灯片51

**语境：** Week8 · SLA (Service Level Agreement)

**语境英文：** An agreement defining service targets and the provider's responsibilities.

**语境中文：** 服务级别协议；通常是provider和user之间的正式合同，规定责任和accountability。可含data rate、burst tolerance、up/downstream、delay和RMA。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Typically formal contracts between a provider and a user

**语境原文来源：** Week8.pdf · PDF页51 / 幻灯片51

**语境来源：** Week8.pdf · PDF页51 / 幻灯片51

**全部来源：** Week8.pdf · PDF页51 / 幻灯片51

### Burst tolerance / upstream / downstream

**稳定ID：** csit985-w8-0042

**类别：** 专业英语

**中文解释：** 突发容许范围／上行／下行；SLA可分别规定两个方向的performance，不能只给一个无方向的rate。

**简单英文（整理解释）：** SLA terms for bursts and for traffic in each direction.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Burst tolerance

**原文来源：** Week8.pdf · PDF页51 / 幻灯片51

**语境：** Week8 · Burst tolerance / upstream / downstream

**语境英文：** SLA terms for bursts and for traffic in each direction.

**语境中文：** 突发容许范围／上行／下行；SLA可分别规定两个方向的performance，不能只给一个无方向的rate。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Burst tolerance

**语境原文来源：** Week8.pdf · PDF页51 / 幻灯片51

**语境来源：** Week8.pdf · PDF页51 / 幻灯片51

**全部来源：** Week8.pdf · PDF页51 / 幻灯片51

### Basic / Silver / Gold / Platinum service

**稳定ID：** csit985-w8-0043

**类别：** 专业英语

**中文解释：** 基础／银／金／白金服务；图52的服务层级示例，内部标号67。Basic为Best Effort；Gold含指定点间max100ms round-trip；Platinum max40ms及99.999% uptime（user-server）。未给测量周期。

**简单英文（整理解释）：** Example service tiers; the delay targets specify points, and the uptime example does not state its measurement period.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 图表标签／说明（视觉核对，非正式定义）

> Max 100-ms Round-Trip (Between Specified Points)

**原文来源：** Week8.pdf · PDF页52 / 幻灯片67（图表）

**资料原文：** 图表标签／说明（视觉核对，非正式定义）

> 1.5 Mb/s (Bidirectional)

**原文来源：** Week8.pdf · PDF页52 / 幻灯片67（图表）

**资料原文：** 图表标签／说明（视觉核对，非正式定义）

> 10 Mb/s (Bidirectional) (Burst to 100 Mb/s)

**原文来源：** Week8.pdf · PDF页52 / 幻灯片67（图表）

**资料原文：** 图表标签／说明（视觉核对，非正式定义）

> 100/10 Mb/s Up/Down (Burst to 1 Gb/s)

**原文来源：** Week8.pdf · PDF页52 / 幻灯片67（图表）

**语境：** Week8 · Basic / Silver / Gold / Platinum service

**语境英文：** Example service tiers; the delay targets specify points, and the uptime example does not state its measurement period.

**语境中文：** 基础／银／金／白金服务；图52的服务层级示例，内部标号67。Basic为Best Effort；Gold含指定点间max100ms round-trip；Platinum max40ms及99.999% uptime（user-server）。未给测量周期。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 图表标签／说明（视觉核对，非正式定义）

> Max 100-ms Round-Trip (Between Specified Points)

**语境原文来源：** Week8.pdf · PDF页52 / 幻灯片67（图表）

**语境来源：** Week8.pdf · PDF页52 / 幻灯片67

**语境：** Week8 · Basic / Silver / Gold / Platinum service

**语境英文：** Basic uses available capacity. Silver has a 1.5 Mb/s bidirectional capacity example, with best-effort delay and reliability.

**语境中文：** 图52补充完整容量示例：Basic按available capacity（Best Effort）；Silver为1.5Mb/s bidirectional，delay/reliability仍Best Effort。都是本例，未给统一测量周期。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 图表标签／说明（视觉核对，非正式定义）

> 1.5 Mb/s (Bidirectional)

**语境原文来源：** Week8.pdf · PDF页52 / 幻灯片67（图表）

**语境来源：** Week8.pdf · PDF页52 / 幻灯片67

**语境：** Week8 · Basic / Silver / Gold / Platinum service

**语境英文：** Gold lists 10 Mb/s bidirectional capacity, a burst to 100 Mb/s, and at most 100 ms round-trip delay between specified points.

**语境中文：** Gold示例为10Mb/s bidirectional、burst to100Mb/s，指定点间max100ms round-trip；reliability仍Best Effort。burst不是持续承诺rate。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 图表标签／说明（视觉核对，非正式定义）

> 10 Mb/s (Bidirectional) (Burst to 100 Mb/s)

**语境原文来源：** Week8.pdf · PDF页52 / 幻灯片67（图表）

**语境来源：** Week8.pdf · PDF页52 / 幻灯片67

**语境：** Week8 · Basic / Silver / Gold / Platinum service

**语境英文：** Platinum lists 100/10 Mb/s Up/Down, a burst to 1 Gb/s, at most 40 ms round-trip delay, and 99.999% user-server uptime.

**语境中文：** Platinum示例为100/10Mb/s Up/Down、burst to1Gb/s，指定点间max40ms round-trip及99.999% uptime（User-Server）。原文Up/Down的顺序保留，统计周期未给。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 图表标签／说明（视觉核对，非正式定义）

> 100/10 Mb/s Up/Down (Burst to 1 Gb/s)

**语境原文来源：** Week8.pdf · PDF页52 / 幻灯片67（图表）

**语境来源：** Week8.pdf · PDF页52 / 幻灯片67

**全部来源：** Week8.pdf · PDF页52 / 幻灯片67

### Performance policies

**稳定ID：** csit985-w8-0044

**类别：** 专业英语

**中文解释：** 性能策略；把high-level management对performance的要求、device上的QoS机制、SLA feedback loops连接起来；规定资源、可用时间及访问者。

**简单英文（整理解释）：** Rules linking management goals, device mechanisms, and SLA feedback.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Policies complete the framework for performance for a network by coupling the high-level management view of how the network should perform with mechanisms to implement at the network devices (QoS) and feedback loops using SLAs.

**原文来源：** Week8.pdf · PDF页55 / 幻灯片55

**语境：** Week8 · Performance policies

**语境英文：** Rules linking management goals, device mechanisms, and SLA feedback.

**语境中文：** 性能策略；把high-level management对performance的要求、device上的QoS机制、SLA feedback loops连接起来；规定资源、可用时间及访问者。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Policies complete the framework for performance for a network by coupling the high-level management view of how the network should perform with mechanisms to implement at the network devices (QoS) and feedback loops using SLAs.

**语境原文来源：** Week8.pdf · PDF页55 / 幻灯片55

**语境来源：** Week8.pdf · PDF页55,56 / 幻灯片55,56

**全部来源：** Week8.pdf · PDF页55,56 / 幻灯片55,56

### Individual flows / aggregate flows

**稳定ID：** csit985-w8-0045

**类别：** 专业英语

**中文解释：** 单独流／汇聚流；接入区较可能适合individual控制，外部接口较可能适合aggregate控制。课件用more likely，不是固定分层规则。

**简单英文（整理解释）：** Separate flows or groups of flows; the suitable treatment depends on where and how traffic appears.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> traffic flows are more likely to aggregate

**原文来源：** Week8.pdf · PDF页59 / 幻灯片59

**语境：** Week8 · Individual flows / aggregate flows

**语境英文：** Separate flows or groups of flows; the suitable treatment depends on where and how traffic appears.

**语境中文：** 单独流／汇聚流；接入区较可能适合individual控制，外部接口较可能适合aggregate控制。课件用more likely，不是固定分层规则。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> traffic flows are more likely to aggregate

**语境原文来源：** Week8.pdf · PDF页59 / 幻灯片59

**语境来源：** Week8.pdf · PDF页59,60 / 幻灯片59,60

**全部来源：** Week8.pdf · PDF页59,60 / 幻灯片59,60

### Starvation

**稳定ID：** csit985-w8-0046

**类别：** 专业英语

**中文解释：** 饥饿：持续有高优先级traffic时，低优先级traffic可能等很久。这里是packet scheduling术语，不是人挨饿。

**简单英文（整理解释）：** Lower-priority traffic waiting too long because higher-priority traffic keeps arriving.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> we call this starvation

**原文来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符24903起；搜索“we call this starvation”

**语境：** Week8 · Starvation

**语境英文：** Lower-priority traffic waiting too long because higher-priority traffic keeps arriving.

**语境中文：** 饥饿：持续有高优先级traffic时，低优先级traffic可能等很久。这里是packet scheduling术语，不是人挨饿。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> we call this starvation

**语境原文来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符24903起；搜索“we call this starvation”

**语境来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符24903起；搜索“we call this starvation”

**全部来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符24903起；搜索“we call this starvation”

### Push / swap / pop (MPLS labels)

**稳定ID：** csit985-w8-0047

**类别：** 专业英语

**中文解释：** 添加／更换／移除MPLS label；入口添加、内部常更换、离开label-switched path时移除。TXT中的SAP疑似swap转写，PDF没有这组动作定义。

**简单英文（整理解释）：** Add, replace, and remove MPLS labels along the label-switched path.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> like push, swap, and pop

**原文来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符12812起；搜索“like push, swap, and pop”

**语境：** Week8 · Push / swap / pop (MPLS labels)

**语境英文：** Add, replace, and remove MPLS labels along the label-switched path.

**语境中文：** 添加／更换／移除MPLS label；入口添加、内部常更换、离开label-switched path时移除。TXT中的SAP疑似swap转写，PDF没有这组动作定义。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> like push, swap, and pop

**语境原文来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符12812起；搜索“like push, swap, and pop”

**语境来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符12812起；搜索“like push, swap, and pop”

**全部来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符12812起；搜索“like push, swap, and pop”

## 阅读词汇

### resource allocation

**稳定ID：** csit985-w8-0048

**类别：** 阅读词汇

**中文解释：** 资源分配；在此指把网络资源分给用户或应用以支持核算、计费和管理。

**简单英文（整理解释）：** Giving resources to users or uses.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Control resource allocation

**原文来源：** Week8.pdf · PDF页4 / 幻灯片4

**语境：** Week8 · resource allocation

**语境英文：** Giving resources to users or uses.

**语境中文：** 资源分配；在此指把网络资源分给用户或应用以支持核算、计费和管理。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** allocation of + resource; allocate ... to ...

**语境原文：** 课件原文说明／用法（非正式定义）

> Control resource allocation

**语境原文来源：** Week8.pdf · PDF页4 / 幻灯片4

**语境来源：** Week8.pdf · PDF页4 / 幻灯片4

**使用结构：** allocation of + resource; allocate ... to ...

**全部来源：** Week8.pdf · PDF页4 / 幻灯片4

### give priority to ... over ...

**稳定ID：** csit985-w8-0049

**类别：** 阅读词汇

**中文解释：** 优先处理……而不是……；例audio相对FTP获得优先处理。

**简单英文（整理解释）：** Treat one thing as more urgent than another.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> give priority to audio over FTP

**原文来源：** Week8.pdf · PDF页5 / 幻灯片5

**语境：** Week8 · give priority to ... over ...

**语境英文：** Treat one thing as more urgent than another.

**语境中文：** 优先处理……而不是……；例audio相对FTP获得优先处理。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** give priority to A over B

**语境原文：** 课件原文说明／用法（非正式定义）

> give priority to audio over FTP

**语境原文来源：** Week8.pdf · PDF页5 / 幻灯片5

**语境来源：** Week8.pdf · PDF页5 / 幻灯片5

**使用结构：** give priority to A over B

**全部来源：** Week8.pdf · PDF页5 / 幻灯片5

### beyond

**稳定ID：** csit985-w8-0050

**类别：** 阅读词汇

**中文解释：** 超过……限度；这里beyond link capacity指超过链路可承载量。

**简单英文（整理解释）：** Past a stated limit.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> beyond link capacity

**原文来源：** Week8.pdf · PDF页6 / 幻灯片6

**语境：** Week8 · beyond

**语境英文：** Past a stated limit.

**语境中文：** 超过……限度；这里beyond link capacity指超过链路可承载量。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** beyond + limit / capacity

**语境原文：** 课件原文说明／用法（非正式定义）

> beyond link capacity

**语境原文来源：** Week8.pdf · PDF页6 / 幻灯片6

**语境来源：** Week8.pdf · PDF页6 / 幻灯片6

**使用结构：** beyond + limit / capacity

**全部来源：** Week8.pdf · PDF页6 / 幻灯片6

### necessary

**稳定ID：** csit985-w8-0051

**类别：** 阅读词汇

**中文解释：** 必要的；采用mechanism需有实际理由。

**简单英文（整理解释）：** Needed for a real reason.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> necessary & sufficient to meet the goals set

**原文来源：** Week8.pdf · PDF页12 / 幻灯片12

**语境：** Week8 · necessary

**语境英文：** Needed for a real reason.

**语境中文：** 必要的；采用mechanism需有实际理由。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** necessary for + goal

**语境原文：** 课件原文说明／用法（非正式定义）

> necessary & sufficient to meet the goals set

**语境原文来源：** Week8.pdf · PDF页12 / 幻灯片12

**语境来源：** Week8.pdf · PDF页12,13 / 幻灯片12,13

**使用结构：** necessary for + goal

**全部来源：** Week8.pdf · PDF页12,13 / 幻灯片12,13

### sufficient

**稳定ID：** csit985-w8-0052

**类别：** 阅读词汇

**中文解释：** 足够的；机制必须能满足requirements，priority不能创造capacity。

**简单英文（整理解释）：** Enough to meet the stated requirement.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> necessary & sufficient to meet the goals set

**原文来源：** Week8.pdf · PDF页12 / 幻灯片12

**语境：** Week8 · sufficient

**语境英文：** Enough to meet the stated requirement.

**语境中文：** 足够的；机制必须能满足requirements，priority不能创造capacity。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** sufficient to + verb

**语境原文：** 课件原文说明／用法（非正式定义）

> necessary & sufficient to meet the goals set

**语境原文来源：** Week8.pdf · PDF页12 / 幻灯片12

**语境来源：** Week8.pdf · PDF页12,13 / 幻灯片12,13

**使用结构：** sufficient to + verb

**全部来源：** Week8.pdf · PDF页12,13 / 幻灯片12,13

### work towards

**稳定ID：** csit985-w8-0053

**类别：** 阅读词汇

**中文解释：** 逐步朝……努力；从简单架构开始，有需要再增加复杂度。

**简单英文（整理解释）：** Move gradually toward a goal.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> work towards a more complex architecture

**原文来源：** Week8.pdf · PDF页14 / 幻灯片14

**语境：** Week8 · work towards

**语境英文：** Move gradually toward a goal.

**语境中文：** 逐步朝……努力；从简单架构开始，有需要再增加复杂度。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** work towards + goal

**语境原文：** 课件原文说明／用法（非正式定义）

> work towards a more complex architecture

**语境原文来源：** Week8.pdf · PDF页14 / 幻灯片14

**语境来源：** Week8.pdf · PDF页14 / 幻灯片14

**使用结构：** work towards + goal

**全部来源：** Week8.pdf · PDF页14 / 幻灯片14

### constantly maintained

**稳定ID：** csit985-w8-0054

**类别：** 阅读词汇

**中文解释：** 持续维护；机制部署后仍需配置、监测和排错。

**简单英文（整理解释）：** Kept working through continuing care.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> constantly maintained

**原文来源：** Week8.pdf · PDF页15 / 幻灯片15

**语境：** Week8 · constantly maintained

**语境英文：** Kept working through continuing care.

**语境中文：** 持续维护；机制部署后仍需配置、监测和排错。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** be maintained; maintain + system

**语境原文：** 课件原文说明／用法（非正式定义）

> constantly maintained

**语境原文来源：** Week8.pdf · PDF页15 / 幻灯片15

**语境来源：** Week8.pdf · PDF页15 / 幻灯片15

**使用结构：** be maintained; maintain + system

**全部来源：** Week8.pdf · PDF页15 / 幻灯片15

### cost center

**稳定ID：** csit985-w8-0055

**类别：** 阅读词汇

**中文解释：** 成本中心；课件以它描述network原有的业务定位。

**简单英文（整理解释）：** A part of an organization treated as a source of costs.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> a cost center

**原文来源：** Week8.pdf · PDF页16 / 幻灯片16

**语境：** Week8 · cost center

**语境英文：** A part of an organization treated as a source of costs.

**语境中文：** 成本中心；课件以它描述network原有的业务定位。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** a cost center

**语境原文：** 课件原文说明／用法（非正式定义）

> a cost center

**语境原文来源：** Week8.pdf · PDF页16 / 幻灯片16

**语境来源：** Week8.pdf · PDF页16 / 幻灯片16

**使用结构：** a cost center

**全部来源：** Week8.pdf · PDF页16 / 幻灯片16

### profitability

**稳定ID：** csit985-w8-0056

**类别：** 阅读词汇

**中文解释：** 盈利能力；性能架构可能支持它，但不保证结果。

**简单英文（整理解释）：** The ability to make a profit.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> profitability

**原文来源：** Week8.pdf · PDF页16 / 幻灯片16

**语境：** Week8 · profitability

**语境英文：** The ability to make a profit.

**语境中文：** 盈利能力；性能架构可能支持它，但不保证结果。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** improve profitability

**语境原文：** 课件原文说明／用法（非正式定义）

> profitability

**语境原文来源：** Week8.pdf · PDF页16 / 幻灯片16

**语境来源：** Week8.pdf · PDF页16 / 幻灯片16

**使用结构：** improve profitability

**全部来源：** Week8.pdf · PDF页16 / 幻灯片16

### differentiate

**稳定ID：** csit985-w8-0057

**类别：** 阅读词汇

**中文解释：** 区分并提供不同待遇；这里为不同customers提供不同service levels。

**简单英文（整理解释）：** Make differences between groups and their services.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Differentiating customers for multiple levels of service

**原文来源：** Week8.pdf · PDF页16 / 幻灯片16

**语境：** Week8 · differentiate

**语境英文：** Make differences between groups and their services.

**语境中文：** 区分并提供不同待遇；这里为不同customers提供不同service levels。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** differentiate A from B; differentiate customers

**语境原文：** 课件原文说明／用法（非正式定义）

> Differentiating customers for multiple levels of service

**语境原文来源：** Week8.pdf · PDF页16 / 幻灯片16

**语境来源：** Week8.pdf · PDF页16 / 幻灯片16

**使用结构：** differentiate A from B; differentiate customers

**全部来源：** Week8.pdf · PDF页16 / 幻灯片16

### blip

**稳定ID：** csit985-w8-0058

**类别：** 阅读词汇

**中文解释：** 短暂异常或中断；本页形容实时voice/video的小卡顿。

**简单英文（整理解释）：** A short interruption or small fault.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> annoying blips

**原文来源：** Week8.pdf · PDF页18 / 幻灯片18

**语境：** Week8 · blip

**语境英文：** A short interruption or small fault.

**语境中文：** 短暂异常或中断；本页形容实时voice/video的小卡顿。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** a blip in + service

**语境原文：** 课件原文说明／用法（非正式定义）

> annoying blips

**语境原文来源：** Week8.pdf · PDF页18 / 幻灯片18

**语境来源：** Week8.pdf · PDF页18 / 幻灯片18

**使用结构：** a blip in + service

**全部来源：** Week8.pdf · PDF页18 / 幻灯片18

### overbuild

**稳定ID：** csit985-w8-0059

**类别：** 阅读词汇

**中文解释：** 超额建设；此处多建network capacity以保持bandwidth够用。

**简单英文（整理解释）：** Build more capacity than ordinary demand needs.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> overbuild the network

**原文来源：** Week8.pdf · PDF页18 / 幻灯片18

**语境：** Week8 · overbuild

**语境英文：** Build more capacity than ordinary demand needs.

**语境中文：** 超额建设；此处多建network capacity以保持bandwidth够用。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** overbuild + network

**语境原文：** 课件原文说明／用法（非正式定义）

> overbuild the network

**语境原文来源：** Week8.pdf · PDF页18 / 幻灯片18

**语境来源：** Week8.pdf · PDF页18 / 幻灯片18

**使用结构：** overbuild + network

**全部来源：** Week8.pdf · PDF页18 / 幻灯片18

### make its presence felt

**稳定ID：** csit985-w8-0060

**类别：** 阅读词汇

**中文解释：** 开始产生明显影响；用于课件对MPLS进入corporate environments的描述。只作为本讲用法，不是最新市场判断。

**简单英文（整理解释）：** Become noticeable and influential.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> making its presence felt

**原文来源：** Week8.pdf · PDF页24 / 幻灯片24

**语境：** Week8 · make its presence felt

**语境英文：** Become noticeable and influential.

**语境中文：** 开始产生明显影响；用于课件对MPLS进入corporate environments的描述。只作为本讲用法，不是最新市场判断。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** make one's / its presence felt

**语境原文：** 课件原文说明／用法（非正式定义）

> making its presence felt

**语境原文来源：** Week8.pdf · PDF页24 / 幻灯片24

**语境来源：** Week8.pdf · PDF页24 / 幻灯片24

**使用结构：** make one's / its presence felt

**全部来源：** Week8.pdf · PDF页24 / 幻灯片24

### fine-grained

**稳定ID：** csit985-w8-0061

**类别：** 阅读词汇

**中文解释：** 细粒度；IntServ按individual flow处理。

**简单英文（整理解释）：** Controlling small individual units.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> “fine-grained” QoS system

**原文来源：** Week8.pdf · PDF页29 / 幻灯片29

**语境：** Week8 · fine-grained

**语境英文：** Controlling small individual units.

**语境中文：** 细粒度；IntServ按individual flow处理。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** fine-grained + control

**语境原文：** 课件原文说明／用法（非正式定义）

> “fine-grained” QoS system

**语境原文来源：** Week8.pdf · PDF页29 / 幻灯片29

**语境来源：** Week8.pdf · PDF页29 / 幻灯片29

**使用结构：** fine-grained + control

**全部来源：** Week8.pdf · PDF页29 / 幻灯片29

### coarse-grained

**稳定ID：** csit985-w8-0062

**类别：** 阅读词汇

**中文解释：** 粗粒度；DiffServ按classes处理汇聚flows。

**简单英文（整理解释）：** Controlling larger groups.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> “coarse-grained” control system

**原文来源：** Week8.pdf · PDF页29 / 幻灯片29

**语境：** Week8 · coarse-grained

**语境英文：** Controlling larger groups.

**语境中文：** 粗粒度；DiffServ按classes处理汇聚flows。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** coarse-grained + control

**语境原文：** 课件原文说明／用法（非正式定义）

> “coarse-grained” control system

**语境原文来源：** Week8.pdf · PDF页29 / 幻灯片29

**语境来源：** Week8.pdf · PDF页29 / 幻灯片29

**使用结构：** coarse-grained + control

**全部来源：** Week8.pdf · PDF页29 / 幻灯片29

### be invoked

**稳定ID：** csit985-w8-0063

**类别：** 阅读词汇

**中文解释：** 被启用或调用；此处packets被标记后可启用DiffServ处理。

**简单英文（整理解释）：** Be brought into use.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Can be invoked when IP packets are marked

**原文来源：** Week8.pdf · PDF页30 / 幻灯片30

**语境：** Week8 · be invoked

**语境英文：** Be brought into use.

**语境中文：** 被启用或调用；此处packets被标记后可启用DiffServ处理。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** invoke + mechanism; be invoked when + clause

**语境原文：** 课件原文说明／用法（非正式定义）

> Can be invoked when IP packets are marked

**语境原文来源：** Week8.pdf · PDF页30 / 幻灯片30

**语境来源：** Week8.pdf · PDF页30 / 幻灯片30

**使用结构：** invoke + mechanism; be invoked when + clause

**全部来源：** Week8.pdf · PDF页30 / 幻灯片30

### precedence

**稳定ID：** csit985-w8-0064

**类别：** 阅读词汇

**中文解释：** 优先顺序；DSCP用于指定处理class。这里不是“先例”。

**简单英文（整理解释）：** The order of priority.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> specify precedence “class”

**原文来源：** Week8.pdf · PDF页32 / 幻灯片32

**语境：** Week8 · precedence

**语境英文：** The order of priority.

**语境中文：** 优先顺序；DSCP用于指定处理class。这里不是“先例”。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> specify precedence “class”

**语境原文来源：** Week8.pdf · PDF页32 / 幻灯片32

**语境来源：** Week8.pdf · PDF页32 / 幻灯片32

**全部来源：** Week8.pdf · PDF页32 / 幻灯片32

### designated as

**稳定ID：** csit985-w8-0065

**类别：** 阅读词汇

**中文解释：** 被指定为；部分routers被指定为boundary nodes。

**简单英文（整理解释）：** Given a particular role or name.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> designated as “boundary nodes”

**原文来源：** Week8.pdf · PDF页33 / 幻灯片33

**语境：** Week8 · designated as

**语境英文：** Given a particular role or name.

**语境中文：** 被指定为；部分routers被指定为boundary nodes。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** designate A as B

**语境原文：** 课件原文说明／用法（非正式定义）

> designated as “boundary nodes”

**语境原文来源：** Week8.pdf · PDF页33 / 幻灯片33

**语境来源：** Week8.pdf · PDF页33 / 幻灯片33

**使用结构：** designate A as B

**全部来源：** Week8.pdf · PDF页33 / 幻灯片33

### be re-purposed

**稳定ID：** csit985-w8-0066

**类别：** 阅读词汇

**中文解释：** 被改作其他用途；课件说RSVP被用于MPLS。

**简单英文（整理解释）：** Be adapted for a different use.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> has been re-purposed

**原文来源：** Week8.pdf · PDF页36 / 幻灯片36

**语境：** Week8 · be re-purposed

**语境英文：** Be adapted for a different use.

**语境中文：** 被改作其他用途；课件说RSVP被用于MPLS。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** repurpose something for / to + purpose

**语境原文：** 课件原文说明／用法（非正式定义）

> has been re-purposed

**语境原文来源：** Week8.pdf · PDF页36 / 幻灯片36

**语境来源：** Week8.pdf · PDF页36 / 幻灯片36

**使用结构：** repurpose something for / to + purpose

**全部来源：** Week8.pdf · PDF页36 / 幻灯片36

### temporal characteristics

**稳定ID：** csit985-w8-0067

**类别：** 阅读词汇

**中文解释：** 时间方面的特征；例如traffic rate和burst size等随时间衡量的性质。

**简单英文（整理解释）：** Features related to time.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Temporal characteristics of traffic flow

**原文来源：** Week8.pdf · PDF页43 / 幻灯片43

**语境：** Week8 · temporal characteristics

**语境英文：** Features related to time.

**语境中文：** 时间方面的特征；例如traffic rate和burst size等随时间衡量的性质。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Temporal characteristics of traffic flow

**语境原文来源：** Week8.pdf · PDF页43 / 幻灯片43

**语境来源：** Week8.pdf · PDF页43 / 幻灯片43

**全部来源：** Week8.pdf · PDF页43 / 幻灯片43

### non-conforming

**稳定ID：** csit985-w8-0068

**类别：** 阅读词汇

**中文解释：** 不符合要求的；flow超过SLA profile。

**简单英文（整理解释）：** Not matching the agreed profile.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> This non-conforming flow

**原文来源：** Week8.pdf · PDF页44 / 幻灯片44

**语境：** Week8 · non-conforming

**语境英文：** Not matching the agreed profile.

**语境中文：** 不符合要求的；flow超过SLA profile。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** non-conforming + traffic

**语境原文：** 课件原文说明／用法（非正式定义）

> This non-conforming flow

**语境原文来源：** Week8.pdf · PDF页44 / 幻灯片44

**语境来源：** Week8.pdf · PDF页44 / 幻灯片44

**使用结构：** non-conforming + traffic

**全部来源：** Week8.pdf · PDF页44 / 幻灯片44

### conform to

**稳定ID：** csit985-w8-0069

**类别：** 阅读词汇

**中文解释：** 符合……；在此flow满足规定的profile。

**简单英文（整理解释）：** Match an agreed rule or profile.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> until flow conforms

**原文来源：** Week8.pdf · PDF页44 / 幻灯片44

**语境：** Week8 · conform to

**语境英文：** Match an agreed rule or profile.

**语境中文：** 符合……；在此flow满足规定的profile。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** conform to + rule / profile

**语境原文：** 课件原文说明／用法（非正式定义）

> until flow conforms

**语境原文来源：** Week8.pdf · PDF页44 / 幻灯片44

**语境来源：** Week8.pdf · PDF页44 / 幻灯片44

**使用结构：** conform to + rule / profile

**全部来源：** Week8.pdf · PDF页44 / 幻灯片44

### subsequently

**稳定ID：** csit985-w8-0070

**类别：** 阅读词汇

**中文解释：** 随后；量出超限flow后再送到shaper queue。

**简单英文（整理解释）：** After that, as the next step.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> subsequently forwarded

**原文来源：** Week8.pdf · PDF页44 / 幻灯片44

**语境：** Week8 · subsequently

**语境英文：** After that, as the next step.

**语境中文：** 随后；量出超限flow后再送到shaper queue。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> subsequently forwarded

**语境原文来源：** Week8.pdf · PDF页44 / 幻灯片44

**语境来源：** Week8.pdf · PDF页44 / 幻灯片44

**全部来源：** Week8.pdf · PDF页44 / 幻灯片44

### cyclically

**稳定ID：** csit985-w8-0071

**类别：** 阅读词汇

**中文解释：** 循环地；round robin重复访问各queue。

**简单英文（整理解释）：** In a repeated cycle.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> cyclically scan class queues

**原文来源：** Week8.pdf · PDF页49 / 幻灯片49

**语境：** Week8 · cyclically

**语境英文：** In a repeated cycle.

**语境中文：** 循环地；round robin重复访问各queue。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** cyclically + verb

**语境原文：** 课件原文说明／用法（非正式定义）

> cyclically scan class queues

**语境原文来源：** Week8.pdf · PDF页49 / 幻灯片49

**语境来源：** Week8.pdf · PDF页49 / 幻灯片49

**使用结构：** cyclically + verb

**全部来源：** Week8.pdf · PDF页49 / 幻灯片49

### if available

**稳定ID：** csit985-w8-0072

**类别：** 阅读词汇

**中文解释：** 如果有可服务的packet；是轮询调度的限制条件。

**简单英文（整理解释）：** Only when an item is ready.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> serving one from each class (if available)

**原文来源：** Week8.pdf · PDF页49 / 幻灯片49

**语境：** Week8 · if available

**语境英文：** Only when an item is ready.

**语境中文：** 如果有可服务的packet；是轮询调度的限制条件。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** if + condition

**语境原文：** 课件原文说明／用法（非正式定义）

> serving one from each class (if available)

**语境原文来源：** Week8.pdf · PDF页49 / 幻灯片49

**语境来源：** Week8.pdf · PDF页49 / 幻灯片49

**使用结构：** if + condition

**全部来源：** Week8.pdf · PDF页49 / 幻灯片49

### extent of accountability

**稳定ID：** csit985-w8-0073

**类别：** 阅读词汇

**中文解释：** 应负责到什么程度；SLA说明provider对user承担的责任范围。

**简单英文（整理解释）：** How far responsibility extends.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> extent of accountability

**原文来源：** Week8.pdf · PDF页51 / 幻灯片51

**语境：** Week8 · extent of accountability

**语境英文：** How far responsibility extends.

**语境中文：** 应负责到什么程度；SLA说明provider对user承担的责任范围。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** the extent of + noun

**语境原文：** 课件原文说明／用法（非正式定义）

> extent of accountability

**语境原文来源：** Week8.pdf · PDF页51 / 幻灯片51

**语境来源：** Week8.pdf · PDF页51 / 幻灯片51

**使用结构：** the extent of + noun

**全部来源：** Week8.pdf · PDF页51 / 幻灯片51

### couple ... with ...

**稳定ID：** csit985-w8-0074

**类别：** 阅读词汇

**中文解释：** 把……与……联结；把management目标和device机制及feedback联系起来。

**简单英文（整理解释）：** Connect one part with another.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> coupling the high-level management view

**原文来源：** Week8.pdf · PDF页55 / 幻灯片55

**语境：** Week8 · couple ... with ...

**语境英文：** Connect one part with another.

**语境中文：** 把……与……联结；把management目标和device机制及feedback联系起来。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** couple A with B

**语境原文：** 课件原文说明／用法（非正式定义）

> coupling the high-level management view

**语境原文来源：** Week8.pdf · PDF页55 / 幻灯片55

**语境来源：** Week8.pdf · PDF页55 / 幻灯片55

**使用结构：** couple A with B

**全部来源：** Week8.pdf · PDF页55 / 幻灯片55

### verify and bill for

**稳定ID：** csit985-w8-0075

**类别：** 阅读词汇

**中文解释：** 核实并计费；NM需检查实际performance并支持收费。

**简单英文（整理解释）：** Check service results and charge for them.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> verify and bill for performance

**原文来源：** Week8.pdf · PDF页61 / 幻灯片61

**语境：** Week8 · verify and bill for

**语境英文：** Check service results and charge for them.

**语境中文：** 核实并计费；NM需检查实际performance并支持收费。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** verify + object; bill for + service

**语境原文：** 课件原文说明／用法（非正式定义）

> verify and bill for performance

**语境原文来源：** Week8.pdf · PDF页61 / 幻灯片61

**语境来源：** Week8.pdf · PDF页61 / 幻灯片61

**使用结构：** verify + object; bill for + service

**全部来源：** Week8.pdf · PDF页61 / 幻灯片61

### compensate for

**稳定ID：** csit985-w8-0076

**类别：** 阅读词汇

**中文解释：** 弥补；课件说capacity下降可补偿，但delay较难处理。

**简单英文（整理解释）：** Make up for a loss or disadvantage.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Capacity can be compensated for but delay is more difficult

**原文来源：** Week8.pdf · PDF页62 / 幻灯片62

**语境：** Week8 · compensate for

**语境英文：** Make up for a loss or disadvantage.

**语境中文：** 弥补；课件说capacity下降可补偿，但delay较难处理。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** compensate for + problem / loss

**语境原文：** 课件原文说明／用法（非正式定义）

> Capacity can be compensated for but delay is more difficult

**语境原文来源：** Week8.pdf · PDF页62 / 幻灯片62

**语境来源：** Week8.pdf · PDF页62 / 幻灯片62

**使用结构：** compensate for + problem / loss

**全部来源：** Week8.pdf · PDF页62 / 幻灯片62

### tolerate

**稳定ID：** csit985-w8-0077

**类别：** 阅读词汇

**中文解释：** 容忍、承受；file transfer通常能承受一些waiting，live conversation更敏感。

**简单英文（整理解释）：** Accept some delay without a serious problem.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> tolerate some waiting.

**原文来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符3155起；搜索“tolerate some waiting.”

**语境：** Week8 · tolerate

**语境英文：** Accept some delay without a serious problem.

**语境中文：** 容忍、承受；file transfer通常能承受一些waiting，live conversation更敏感。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**使用结构：** tolerate + noun / doing

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> tolerate some waiting.

**语境原文来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符3155起；搜索“tolerate some waiting.”

**语境来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符3155起；搜索“tolerate some waiting.”

**使用结构：** tolerate + noun / doing

**全部来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符3155起；搜索“tolerate some waiting.”

### less forgiving

**稳定ID：** csit985-w8-0078

**类别：** 阅读词汇

**中文解释：** 对问题容忍度更低；形容实时conversation对delay的容忍，不是人“不原谅”。

**简单英文（整理解释）：** Less able to tolerate errors or delay.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> much less forgiving.

**原文来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符3225起；搜索“much less forgiving.”

**语境：** Week8 · less forgiving

**语境英文：** Less able to tolerate errors or delay.

**语境中文：** 对问题容忍度更低；形容实时conversation对delay的容忍，不是人“不原谅”。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**使用结构：** be less forgiving of + problem

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> much less forgiving.

**语境原文来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符3225起；搜索“much less forgiving.”

**语境来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符3225起；搜索“much less forgiving.”

**使用结构：** be less forgiving of + problem

**全部来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符3225起；搜索“much less forgiving.”

### tempting

**稳定ID：** csit985-w8-0079

**类别：** 阅读词汇

**中文解释：** 很诱人的；新feature看起来想用，但仍要问满足了哪项requirement。

**简单英文（整理解释）：** Attractive enough to make someone want to use it.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> tempting to use a feature

**原文来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符7402起；搜索“tempting to use a feature”

**语境：** Week8 · tempting

**语境英文：** Attractive enough to make someone want to use it.

**语境中文：** 很诱人的；新feature看起来想用，但仍要问满足了哪项requirement。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**使用结构：** it is tempting to + verb

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> tempting to use a feature

**语境原文来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符7402起；搜索“tempting to use a feature”

**语境来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符7402起；搜索“tempting to use a feature”

**使用结构：** it is tempting to + verb

**全部来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符7402起；搜索“tempting to use a feature”

### fall short

**稳定ID：** csit985-w8-0080

**类别：** 阅读词汇

**中文解释：** 没有达到目标；SLA测得performance不足时需要调查并调整。

**简单英文（整理解释）：** Fail to reach an expected level.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> the performance falls short

**原文来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符27815起；搜索“the performance falls short”

**语境：** Week8 · fall short

**语境英文：** Fail to reach an expected level.

**语境中文：** 没有达到目标；SLA测得performance不足时需要调查并调整。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**使用结构：** fall short of + target

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> the performance falls short

**语境原文来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符27815起；搜索“the performance falls short”

**语境来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符27815起；搜索“the performance falls short”

**使用结构：** fall short of + target

**全部来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符27815起；搜索“the performance falls short”

### undermine

**稳定ID：** csit985-w8-0081

**类别：** 阅读词汇

**中文解释：** 削弱、损害；一种配置不应削弱另一种配置的效果。

**简单英文（整理解释）：** Make another part less effective.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> does not undermine another.

**原文来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符29333起；搜索“does not undermine another.”

**语境：** Week8 · undermine

**语境英文：** Make another part less effective.

**语境中文：** 削弱、损害；一种配置不应削弱另一种配置的效果。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**使用结构：** undermine + policy / effort / result

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> does not undermine another.

**语境原文来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符29333起；搜索“does not undermine another.”

**语境来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符29333起；搜索“does not undermine another.”

**使用结构：** undermine + policy / effort / result

**全部来源：** CSIT985_Lecture8-transcript.txt · TXT原始L2，本行字符29333起；搜索“does not undermine another.”
