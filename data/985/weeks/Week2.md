# CSIT985 Week2 词汇

由本周可读JSON自动生成。原文与整理说明分开；跨周条目保留全部来源和不同义项。原PDF及完整录音TXT不在网站中。

## 重要疑点与来源限制

**位置：** PDF页2

**说明：** PDF标题明确Lecture week 2: Networking Fundamentals。三份TXT按主题衔接：网络元素至消息时序、投递选项至运输层、网络层至物理层；文件名的(1)/(2)不是时间戳。

**位置：** PDF页12,17,18,29,30,33

**说明：** 无线介质距离/方向/穿透、MAN范围、WAN通常较慢、mesh最常用于MAN，以及拓扑可靠性等均是本课件的概括，不当作所有网络的无条件事实。tree页优缺点与mesh页高度相似；TXT补充高处故障可影响整条分支。简单ring故障说明不能外推到所有带冗余的ring。

**位置：** PDF页8,41,59,61,62,67,74

**说明：** 明显疑似拼写或转写：PDF41 covert（疑似convert）、62 Dose、74 an output ones、61“logical communication processes”疑似缺between；DNS全称PDF写Domain Name Service。保留原文，整理说明另列。TXT将HTTP端口写880、将demultiplexing写multiplexing、将NIC写internet interface card，均以PDF为准。 对应TXT位置：Week 2 - Lecture Rec-transcript (1).txt原始L26（HTTP880、multiplexing名称）；Week 2 - Lecture Rec-transcript (2).txt原始L26（internet interface card）。精确行内字符见对应词条。

**位置：** PDF页52,53,61

**说明：** PDU表52列Transport为Segment/Datagram，61页简写segment；TXT说明TCP segment与UDP datagram。图53又将Network单元称Datagram，因此datagram需按层次和协议解释，不能只绑定UDP。

**位置：** PDF页64,65

**说明：** 图64是应用对丢失、吞吐量、时效的需求表；标题TCP services并不表示每一行都必须用TCP。图65多次用typically，表示通常而非永远。图中速率、协议组合仅按课件例子保留，未核实为当前全部应用行为。

**位置：** PDF页75,76,78

**说明：** 逻辑集中控制不等于只有一台物理控制器（TXT补充可由不同物理系统实现）。算法使用全局知识的centralized分类，也不能直接等同SDN的控制器架构。

**位置：** PDF页81,82,83

**说明：** TXT中的OSPF全称和若干协议名转写不清，使用PDF的OSPF/RIP/BGP名称；TXT中清楚的routing information protocol、border gateway protocol仅作为教师片段保留，未凭不清文本补全OSPF。

**位置：** PDF页84,85,86,88,90

**说明：** 图84为IPv4头部，85为4000-byte数据报、1500-byte Link MTU的分片例子。服务列表86与88没有保证每个网络/链路都具备全部服务；best-effort未在本周正式定义。参考书及CCNA模块只记课件引用，不读取其他来源。

**位置：** TXT

**说明：** TXT课程问答只作为词语语境，不执行其中的联系、提交、分组、阅读或平台操作要求；不将当时安排作为当前确认的要求。所有TXT位置按原始行号与该行Unicode字符从1计，均有原文锚点。

## 专业英语

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

### WAN (Wide Area Network)

**稳定ID：** csit985-w1-a3389736df2fe5

**类别：** 专业英语

**中文解释：** 广域网；连接跨较大地理区域的 LAN，可用公用、租用或私有通信设施，通常组合使用。

**简单英文（整理解释）：** A network connecting LANs across a large area, using public, leased, or private facilities.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 名称或用语片段

> WAN

**原文来源：** Week1.pdf · PDF页44 / 幻灯片44

**资料原文：** 定义

> A WAN interconnect LANs that span a wide geographical area.

**原文来源：** Week2.pdf · PDF页18 / 幻灯片18

**资料原文：** 名称或用语片段

> WAN

**原文来源：** Week2.pdf · PDF页15 / 幻灯片15

**语境：** Week1 · WAN

**语境英文：** A network service named on the slide; the acronym is not expanded this week.

**语境中文：** WAN；第44页列为网络接入服务，没有在本周展开缩写或定义。

**语境依据：** 资料未定义

**语境原文：** 名称或用语片段

> WAN

**语境原文来源：** Week1.pdf · PDF页44 / 幻灯片44

**语境来源：** Week1.pdf · PDF页44 / 幻灯片44

**语境：** Week2 · WAN (Wide Area Network)

**语境英文：** A network connecting LANs across a large area, using public, leased, or private facilities.

**语境中文：** 广域网；连接跨较大地理区域的 LAN，可用公用、租用或私有通信设施，通常组合使用。

**语境依据：** 整理解释

**语境原文：** 定义

> A WAN interconnect LANs that span a wide geographical area.

**语境原文来源：** Week2.pdf · PDF页18 / 幻灯片18

**语境原文：** 名称或用语片段

> WAN

**语境原文来源：** Week2.pdf · PDF页15 / 幻灯片15

**语境来源：** Week2.pdf · PDF页15 / 幻灯片15；Week2.pdf · PDF页18 / 幻灯片18

**全部来源：** Week1.pdf · PDF页44 / 幻灯片44；Week2.pdf · PDF页15 / 幻灯片15；Week2.pdf · PDF页18 / 幻灯片18

### Network topology

**稳定ID：** csit985-w1-a34af313ff4a33

**类别：** 专业英语

**中文解释：** 网络拓扑；网络元素相互连接的方式。

**简单英文（整理解释）：** The way network elements are connected to each other.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 名称或用语片段

> network topology

**原文来源：** Week1.pdf · PDF页50 / 幻灯片50

**资料原文：** 定义

> The term “topology” refers to the approach in which network elements are interconnected.

**原文来源：** Week2.pdf · PDF页28 / 幻灯片28

**语境：** Week1 · Network topology

**语境英文：** A network structure chosen during design; this week gives no formal definition.

**语境中文：** 网络拓扑；本周作为网络结构与连接方案的设计选择，详细定义见后续 Week2。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> network topology

**语境原文来源：** Week1.pdf · PDF页50 / 幻灯片50

**语境来源：** Week1.pdf · PDF页40 / 幻灯片40；Week1.pdf · PDF页50 / 幻灯片50

**语境：** Week2 · Network topology

**语境英文：** The way network elements are connected to each other.

**语境中文：** 网络拓扑；网络元素相互连接的方式。

**语境依据：** 整理解释

**语境原文：** 定义

> The term “topology” refers to the approach in which network elements are interconnected.

**语境原文来源：** Week2.pdf · PDF页28 / 幻灯片28

**语境来源：** Week2.pdf · PDF页28 / 幻灯片28

**全部来源：** Week1.pdf · PDF页40 / 幻灯片40；Week1.pdf · PDF页50 / 幻灯片50；Week2.pdf · PDF页28 / 幻灯片28

### Resilience

**稳定ID：** csit985-w1-c9da65091731e5

**类别：** 专业英语

**中文解释：** 恢复／应对故障的能力；教师用两条独立链路说明可提高 resilience，但同时提高成本。

**简单英文（整理解释）：** Two independent links can improve resilience but also increase cost.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语（TXT原片段）

> improve the resilience

**原文来源：** Week 1 - Lecture Rec-transcript.txt · TXT原始L17，本行字符1388起；搜索“improve the resilience”

**资料原文：** 教师用语（TXT原片段）

> scalability and resilience

**原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符8290起；搜索“scalability and resilience”

**语境：** Week1 · Resilience

**语境英文：** Two independent links can improve resilience but also increase cost.

**语境中文：** 恢复／应对故障的能力；教师用两条独立链路说明可提高 resilience，但同时提高成本。

**语境依据：** 教师补充

**语境原文：** 教师用语（TXT原片段）

> improve the resilience

**语境原文来源：** Week 1 - Lecture Rec-transcript.txt · TXT原始L17，本行字符1388起；搜索“improve the resilience”

**语境来源：** Week 1 - Lecture Rec-transcript.txt · TXT原始L17，本行字符1388起；搜索“improve the resilience”

**语境：** Week2 · Resilience

**语境英文：** The ability to handle faults; the teacher says distributed design can help improve it.

**语境中文：** 应对故障的能力；教师说分布式设计可能改善此属性，未给测量公式。

**语境依据：** 教师补充

**语境原文：** 教师用语（TXT原片段）

> scalability and resilience

**语境原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符8290起；搜索“scalability and resilience”

**语境来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符8290起；搜索“scalability and resilience”

**全部来源：** Week 1 - Lecture Rec-transcript.txt · TXT原始L17，本行字符1388起；搜索“improve the resilience”；Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符8290起；搜索“scalability and resilience”

### Computer network

**稳定ID：** csit985-w2-c2d20f7ba66cc6

**类别：** 专业英语

**中文解释：** 计算机网络；两个或更多终端，通过有线或无线连接相连。

**简单英文（整理解释）：** Two or more end devices connected by wired or wireless links.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Two or more end devices connected to each other via wired or wireless connection form a computer network.

**原文来源：** Week2.pdf · PDF页5 / 幻灯片5

**语境：** Week2 · Computer network

**语境英文：** Two or more end devices connected by wired or wireless links.

**语境中文：** 计算机网络；两个或更多终端，通过有线或无线连接相连。

**语境依据：** 整理解释

**语境原文：** 定义

> Two or more end devices connected to each other via wired or wireless connection form a computer network.

**语境原文来源：** Week2.pdf · PDF页5 / 幻灯片5

**语境来源：** Week2.pdf · PDF页5 / 幻灯片5

**全部来源：** Week2.pdf · PDF页5 / 幻灯片5

### Host / end device / end system

**稳定ID：** csit985-w2-4f721c28a74962

**类别：** 专业英语

**中文解释：** 主机／终端／端系统；消息从这里发出或在这里接收。

**简单英文（整理解释）：** A device where a message starts or is received.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> An end device is where a message originates from or where it is received. Data originates with an end device, flows through the network, and arrives at an end device

**原文来源：** Week2.pdf · PDF页6 / 幻灯片6

**资料原文：** 名称或用语片段

> end system

**原文来源：** Week2.pdf · PDF页55 / 幻灯片55

**语境：** Week2 · Host / end device / end system

**语境英文：** A device where a message starts or is received.

**语境中文：** 主机／终端／端系统；消息从这里发出或在这里接收。

**语境依据：** 整理解释

**语境原文：** 定义

> An end device is where a message originates from or where it is received. Data originates with an end device, flows through the network, and arrives at an end device

**语境原文来源：** Week2.pdf · PDF页6 / 幻灯片6

**语境原文：** 名称或用语片段

> end system

**语境原文来源：** Week2.pdf · PDF页55 / 幻灯片55

**语境来源：** Week2.pdf · PDF页6 / 幻灯片6；Week2.pdf · PDF页55 / 幻灯片55

**全部来源：** Week2.pdf · PDF页6 / 幻灯片6；Week2.pdf · PDF页55 / 幻灯片55

### Networking devices / intermediate devices

**稳定ID：** csit985-w2-050e5bd653708e

**类别：** 专业英语

**中文解释：** 联网设备／中间设备；使已连接设备之间能够通信和交互。

**简单英文（整理解释）：** Devices between end devices that enable communication.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Networking devices are intermediate devices in a computer network. They enable the communication and interaction between connected device within the network.

**原文来源：** Week2.pdf · PDF页7 / 幻灯片7

**语境：** Week2 · Networking devices / intermediate devices

**语境英文：** Devices between end devices that enable communication.

**语境中文：** 联网设备／中间设备；使已连接设备之间能够通信和交互。

**语境依据：** 整理解释

**语境原文：** 定义

> Networking devices are intermediate devices in a computer network. They enable the communication and interaction between connected device within the network.

**语境原文来源：** Week2.pdf · PDF页7 / 幻灯片7

**语境来源：** Week2.pdf · PDF页7 / 幻灯片7

**全部来源：** Week2.pdf · PDF页7 / 幻灯片7

### Switch

**稳定ID：** csit985-w2-4db76c276601fb

**类别：** 专业英语

**中文解释：** 交换机；教师说明它连接本地网络中的设备。

**简单英文（整理解释）：** A device that connects devices within a local network.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> switch

**原文来源：** Week2.pdf · PDF页7 / 幻灯片7

**资料原文：** 教师用语（TXT原片段）

> it connects devices within local network

**原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L14，本行字符3341起；搜索“it connects devices within local network”

**语境：** Week2 · Switch

**语境英文：** A device that connects devices within a local network.

**语境中文：** 交换机；教师说明它连接本地网络中的设备。

**语境依据：** 教师补充

**语境原文：** 名称或用语片段

> switch

**语境原文来源：** Week2.pdf · PDF页7 / 幻灯片7

**语境原文：** 教师用语（TXT原片段）

> it connects devices within local network

**语境原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L14，本行字符3341起；搜索“it connects devices within local network”

**语境来源：** Week2.pdf · PDF页7 / 幻灯片7；Week 2 - Lecture Rec-transcript.txt · TXT原始L14，本行字符3341起；搜索“it connects devices within local network”

**全部来源：** Week2.pdf · PDF页7 / 幻灯片7；Week 2 - Lecture Rec-transcript.txt · TXT原始L14，本行字符3341起；搜索“it connects devices within local network”

### Router

**稳定ID：** csit985-w2-a2660498aa486f

**类别：** 专业英语

**中文解释：** 路由器；教师说明它连接不同网络并作转发决定。第71页分为四个组件。

**简单英文（整理解释）：** A device connecting networks and making forwarding decisions.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> router

**原文来源：** Week2.pdf · PDF页7 / 幻灯片7

**资料原文：** 名称或用语片段

> Router

**原文来源：** Week2.pdf · PDF页71 / 幻灯片71

**资料原文：** 教师用语（TXT原片段）

> a router connects different networks

**原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L14，本行字符3386起；搜索“a router connects different networks”

**语境：** Week2 · Router

**语境英文：** A device connecting networks and making forwarding decisions.

**语境中文：** 路由器；教师说明它连接不同网络并作转发决定。第71页分为四个组件。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> router

**语境原文来源：** Week2.pdf · PDF页7 / 幻灯片7

**语境原文：** 名称或用语片段

> Router

**语境原文来源：** Week2.pdf · PDF页71 / 幻灯片71

**语境原文：** 教师用语（TXT原片段）

> a router connects different networks

**语境原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L14，本行字符3386起；搜索“a router connects different networks”

**语境来源：** Week2.pdf · PDF页7 / 幻灯片7；Week2.pdf · PDF页71 / 幻灯片71；Week 2 - Lecture Rec-transcript.txt · TXT原始L14，本行字符3386起；搜索“a router connects different networks”

**全部来源：** Week2.pdf · PDF页7 / 幻灯片7；Week2.pdf · PDF页71 / 幻灯片71；Week 2 - Lecture Rec-transcript.txt · TXT原始L14，本行字符3386起；搜索“a router connects different networks”

### Hub / bridge / gateway / modem / repeater / access point

**稳定ID：** csit985-w2-4b742b20ec561b

**类别：** 专业英语

**中文解释：** 集线器／网桥／网关／调制解调器／中继器／接入点；第7页列举设备名，未逐个解释其机制。

**简单英文（整理解释）：** Names of networking devices; this page does not explain each device's operation.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> access point

**原文来源：** Week2.pdf · PDF页7 / 幻灯片7

**资料原文：** 名称或用语片段

> repeater

**原文来源：** Week2.pdf · PDF页33 / 幻灯片33

**语境：** Week2 · Hub / bridge / gateway / modem / repeater / access point

**语境英文：** Names of networking devices; this page does not explain each device's operation.

**语境中文：** 集线器／网桥／网关／调制解调器／中继器／接入点；第7页列举设备名，未逐个解释其机制。

**语境依据：** 必要基础释义

**语境原文：** 名称或用语片段

> access point

**语境原文来源：** Week2.pdf · PDF页7 / 幻灯片7

**语境原文：** 名称或用语片段

> repeater

**语境原文来源：** Week2.pdf · PDF页33 / 幻灯片33

**语境来源：** Week2.pdf · PDF页7 / 幻灯片7；Week2.pdf · PDF页33 / 幻灯片33

**全部来源：** Week2.pdf · PDF页7 / 幻灯片7；Week2.pdf · PDF页33 / 幻灯片33

### IP address / IPv4 / IPv6

**稳定ID：** csit985-w2-529d724fccaf46

**类别：** 专业英语

**中文解释：** IP地址／IPv4／IPv6；第8页给出两种地址示例。教师说明地址用于识别主机或接口。

**简单英文（整理解释）：** Addresses used to identify a device or interface at the network layer.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> IPv4

**原文来源：** Week2.pdf · PDF页8 / 幻灯片8

**资料原文：** 教师用语（TXT原片段）

> allow a device uh or interface to be identified

**原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L14，本行字符4281起；搜索“allow a device uh or interface to be identified”

**语境：** Week2 · IP address / IPv4 / IPv6

**语境英文：** Addresses used to identify a device or interface at the network layer.

**语境中文：** IP地址／IPv4／IPv6；第8页给出两种地址示例。教师说明地址用于识别主机或接口。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> IPv4

**语境原文来源：** Week2.pdf · PDF页8 / 幻灯片8

**语境原文：** 教师用语（TXT原片段）

> allow a device uh or interface to be identified

**语境原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L14，本行字符4281起；搜索“allow a device uh or interface to be identified”

**语境来源：** Week2.pdf · PDF页8 / 幻灯片8；Week 2 - Lecture Rec-transcript.txt · TXT原始L14，本行字符4281起；搜索“allow a device uh or interface to be identified”

**全部来源：** Week2.pdf · PDF页8 / 幻灯片8；Week 2 - Lecture Rec-transcript.txt · TXT原始L14，本行字符4281起；搜索“allow a device uh or interface to be identified”

### Transmission media / medium

**稳定ID：** csit985-w2-353b483b1748a3

**类别：** 专业英语

**中文解释：** 传输介质；提供设备通信的路径，分有线与无线。media 是 medium 的复数。

**简单英文（整理解释）：** The media through which network devices communicate.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Transmission Media

**原文来源：** Week2.pdf · PDF页9 / 幻灯片9

**资料原文：** 名称或用语片段

> medium

**原文来源：** Week2.pdf · PDF页89 / 幻灯片89

**资料原文：** 教师用语（TXT原片段）

> transmission media, transmission media

**原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符69起；搜索“transmission media, transmission media”

**语境：** Week2 · Transmission media / medium

**语境英文：** The media through which network devices communicate.

**语境中文：** 传输介质；提供设备通信的路径，分有线与无线。media 是 medium 的复数。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> Transmission Media

**语境原文来源：** Week2.pdf · PDF页9 / 幻灯片9

**语境原文：** 名称或用语片段

> medium

**语境原文来源：** Week2.pdf · PDF页89 / 幻灯片89

**语境原文：** 教师用语（TXT原片段）

> transmission media, transmission media

**语境原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符69起；搜索“transmission media, transmission media”

**语境来源：** Week2.pdf · PDF页9 / 幻灯片9；Week2.pdf · PDF页89 / 幻灯片89；Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符69起；搜索“transmission media, transmission media”

**全部来源：** Week2.pdf · PDF页9 / 幻灯片9；Week2.pdf · PDF页89 / 幻灯片89；Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符69起；搜索“transmission media, transmission media”

### Wired / wireless transmission media

**稳定ID：** csit985-w2-27e606941dc78c

**类别：** 专业英语

**中文解释：** 有线／无线传输介质；第9页分为这两类，物理连接也可以是无线。

**简单英文（整理解释）：** Two types of transmission media: wired and wireless.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Wireless transmission media

**原文来源：** Week2.pdf · PDF页9 / 幻灯片9

**资料原文：** 名称或用语片段

> wired

**原文来源：** Week2.pdf · PDF页89 / 幻灯片89

**语境：** Week2 · Wired / wireless transmission media

**语境英文：** Two types of transmission media: wired and wireless.

**语境中文：** 有线／无线传输介质；第9页分为这两类，物理连接也可以是无线。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> Wireless transmission media

**语境原文来源：** Week2.pdf · PDF页9 / 幻灯片9

**语境原文：** 名称或用语片段

> wired

**语境原文来源：** Week2.pdf · PDF页89 / 幻灯片89

**语境来源：** Week2.pdf · PDF页9 / 幻灯片9；Week2.pdf · PDF页89 / 幻灯片89

**全部来源：** Week2.pdf · PDF页9 / 幻灯片9；Week2.pdf · PDF页89 / 幻灯片89

### Twisted pair / coaxial cables / optical fiber

**稳定ID：** csit985-w2-f96c4081c54b73

**类别：** 专业英语

**中文解释：** 双绞线／同轴电缆／光纤；课件列铜线类别与光纤，教师说光纤用光传信息。

**简单英文（整理解释）：** Named wired media; optical fiber carries information using light.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Coaxial cables

**原文来源：** Week2.pdf · PDF页10 / 幻灯片10

**资料原文：** 教师用语（TXT原片段）

> it carry information using light

**原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符881起；搜索“it carry information using light”

**语境：** Week2 · Twisted pair / coaxial cables / optical fiber

**语境英文：** Named wired media; optical fiber carries information using light.

**语境中文：** 双绞线／同轴电缆／光纤；课件列铜线类别与光纤，教师说光纤用光传信息。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> Coaxial cables

**语境原文来源：** Week2.pdf · PDF页10 / 幻灯片10

**语境原文：** 教师用语（TXT原片段）

> it carry information using light

**语境原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符881起；搜索“it carry information using light”

**语境来源：** Week2.pdf · PDF页10 / 幻灯片10；Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符881起；搜索“it carry information using light”

**全部来源：** Week2.pdf · PDF页10 / 幻灯片10；Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符881起；搜索“it carry information using light”

### Restricted Proximity Network

**稳定ID：** csit985-w2-7050610f021f79

**类别：** 专业英语

**中文解释：** 近距离受限网络；本页描述为同时包含无线和固定设备的 LAN。

**简单英文（整理解释）：** A LAN combining wireless and fixed devices in this slide's classification.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Restricted Proximity Network: it involves LANs with a combination of wireless and fixed devices.

**原文来源：** Week2.pdf · PDF页11 / 幻灯片11

**语境：** Week2 · Restricted Proximity Network

**语境英文：** A LAN combining wireless and fixed devices in this slide's classification.

**语境中文：** 近距离受限网络；本页描述为同时包含无线和固定设备的 LAN。

**语境依据：** 整理解释

**语境原文：** 定义

> Restricted Proximity Network: it involves LANs with a combination of wireless and fixed devices.

**语境原文来源：** Week2.pdf · PDF页11 / 幻灯片11

**语境来源：** Week2.pdf · PDF页11 / 幻灯片11

**全部来源：** Week2.pdf · PDF页11 / 幻灯片11

### Intermediate/Extended Network

**稳定ID：** csit985-w2-16bb5a8cb3c3eb

**类别：** 专业英语

**中文解释：** 中间／扩展网络；两个固定 LAN 通过一个无线部分连接。

**简单英文（整理解释）：** Two fixed LANs joined by a wireless element.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Intermediate/Extended Network: it is made of two fixed LAN joining together by a wireless element.

**原文来源：** Week2.pdf · PDF页11 / 幻灯片11

**语境：** Week2 · Intermediate/Extended Network

**语境英文：** Two fixed LANs joined by a wireless element.

**语境中文：** 中间／扩展网络；两个固定 LAN 通过一个无线部分连接。

**语境依据：** 整理解释

**语境原文：** 定义

> Intermediate/Extended Network: it is made of two fixed LAN joining together by a wireless element.

**语境原文来源：** Week2.pdf · PDF页11 / 幻灯片11

**语境来源：** Week2.pdf · PDF页11 / 幻灯片11

**全部来源：** Week2.pdf · PDF页11 / 幻灯片11

### Mobile Network / base station

**稳定ID：** csit985-w2-c1cebde8c5e594

**类别：** 专业英语

**中文解释：** 移动网络／基站；用基站为陆地区域提供无线电网络。

**简单英文（整理解释）：** A network using a base station to provide radio coverage over land areas.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Mobile Network: the network uses a base station to provide a radio network over land areas.

**原文来源：** Week2.pdf · PDF页11 / 幻灯片11

**语境：** Week2 · Mobile Network / base station

**语境英文：** A network using a base station to provide radio coverage over land areas.

**语境中文：** 移动网络／基站；用基站为陆地区域提供无线电网络。

**语境依据：** 整理解释

**语境原文：** 定义

> Mobile Network: the network uses a base station to provide a radio network over land areas.

**语境原文来源：** Week2.pdf · PDF页11 / 幻灯片11

**语境来源：** Week2.pdf · PDF页11 / 幻灯片11

**全部来源：** Week2.pdf · PDF页11 / 幻灯片11

### Infrared wave

**稳定ID：** csit985-w2-076654333abb5d

**类别：** 专业英语

**中文解释：** 红外波；本页说它携带编码指令，使用视线传播。

**简单英文（整理解释）：** An electromagnetic wave carrying coded instructions with line-of-sight propagation.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Infrared wave is the electromagnetic wave that carries coded instructions exchanged between network elements. It uses line-of-sight propagation.

**原文来源：** Week2.pdf · PDF页12 / 幻灯片12

**语境：** Week2 · Infrared wave

**语境英文：** An electromagnetic wave carrying coded instructions with line-of-sight propagation.

**语境中文：** 红外波；本页说它携带编码指令，使用视线传播。

**语境依据：** 整理解释

**语境原文：** 定义

> Infrared wave is the electromagnetic wave that carries coded instructions exchanged between network elements. It uses line-of-sight propagation.

**语境原文来源：** Week2.pdf · PDF页12 / 幻灯片12

**语境来源：** Week2.pdf · PDF页12 / 幻灯片12

**全部来源：** Week2.pdf · PDF页12 / 幻灯片12

### High-Frequency Radio (RF) wave

**稳定ID：** csit985-w2-7579ea32115456

**类别：** 专业英语

**中文解释：** 高频无线电波；本页称其距离比红外更远，并受干扰和雨影响。RF 全称按本页保留，措辞待核实。

**简单英文（整理解释）：** A radio medium described as having a longer range than infrared and being affected by interference and rain.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 说明

> High-Frequency Radio (RF) wave is the high-frequency electromagnetic radio wave. Its range is greater than that of infrared wave. The RF transmission is good for long distances, but it is affected by interferences and rains.

**原文来源：** Week2.pdf · PDF页12 / 幻灯片12

**语境：** Week2 · High-Frequency Radio (RF) wave

**语境英文：** A radio medium described as having a longer range than infrared and being affected by interference and rain.

**语境中文：** 高频无线电波；本页称其距离比红外更远，并受干扰和雨影响。RF 全称按本页保留，措辞待核实。

**语境依据：** 根据资料整理

**语境原文：** 说明

> High-Frequency Radio (RF) wave is the high-frequency electromagnetic radio wave. Its range is greater than that of infrared wave. The RF transmission is good for long distances, but it is affected by interferences and rains.

**语境原文来源：** Week2.pdf · PDF页12 / 幻灯片12

**语境来源：** Week2.pdf · PDF页12 / 幻灯片12

**全部来源：** Week2.pdf · PDF页12 / 幻灯片12

### Microwave / parabolic antennas

**稳定ID：** csit985-w2-c64fbe88ad9b42

**类别：** 专业英语

**中文解释：** 微波／抛物面天线；本页说使用一对天线、单向且不能穿过建筑物；教师没有细化适用条件。

**简单英文（整理解释）：** A wireless medium described with a pair of parabolic antennas; the slide's conditions are not developed.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 说明

> Microwave is a higher version of radio wave. It uses a pair of parabolic antennas. It is unidirectional and do not go through buildings.

**原文来源：** Week2.pdf · PDF页12 / 幻灯片12

**语境：** Week2 · Microwave / parabolic antennas

**语境英文：** A wireless medium described with a pair of parabolic antennas; the slide's conditions are not developed.

**语境中文：** 微波／抛物面天线；本页说使用一对天线、单向且不能穿过建筑物；教师没有细化适用条件。

**语境依据：** 根据资料整理

**语境原文：** 说明

> Microwave is a higher version of radio wave. It uses a pair of parabolic antennas. It is unidirectional and do not go through buildings.

**语境原文来源：** Week2.pdf · PDF页12 / 幻灯片12

**语境来源：** Week2.pdf · PDF页12 / 幻灯片12

**全部来源：** Week2.pdf · PDF页12 / 幻灯片12

### Laser light / line-of-sight propagation

**稳定ID：** csit985-w2-c809723569748a

**类别：** 专业英语

**中文解释：** 激光／视线传播；本页激光传输要求视线中无障碍。

**简单英文（整理解释）：** Laser transmission is described as requiring no obstacles in the line of sight.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 说明

> The restriction is that it works in the context of no obstacles in the line of sight.

**原文来源：** Week2.pdf · PDF页12 / 幻灯片12

**语境：** Week2 · Laser light / line-of-sight propagation

**语境英文：** Laser transmission is described as requiring no obstacles in the line of sight.

**语境中文：** 激光／视线传播；本页激光传输要求视线中无障碍。

**语境依据：** 根据资料整理

**语境原文：** 说明

> The restriction is that it works in the context of no obstacles in the line of sight.

**语境原文来源：** Week2.pdf · PDF页12 / 幻灯片12

**语境来源：** Week2.pdf · PDF页12 / 幻灯片12

**全部来源：** Week2.pdf · PDF页12 / 幻灯片12

### PAN (Personal Area Network)

**稳定ID：** csit985-w2-c66ea3c6234131

**类别：** 专业英语

**中文解释：** 个人区域网络；表中范围为几米，用于个人设备通信。

**简单英文（整理解释）：** A network for personal devices, over a few metres in the table.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> PAN

**原文来源：** Week2.pdf · PDF页15 / 幻灯片15

**语境：** Week2 · PAN (Personal Area Network)

**语境英文：** A network for personal devices, over a few metres in the table.

**语境中文：** 个人区域网络；表中范围为几米，用于个人设备通信。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> PAN

**语境原文来源：** Week2.pdf · PDF页15 / 幻灯片15

**语境来源：** Week2.pdf · PDF页15 / 幻灯片15

**全部来源：** Week2.pdf · PDF页15 / 幻灯片15

### WLAN (Wireless LAN)

**稳定ID：** csit985-w2-b835b59e075c9e

**类别：** 专业英语

**中文解释：** 无线局域网；表中用于建筑／校园内的 Wi-Fi 本地接入。

**简单英文（整理解释）：** A wireless LAN for local Wi-Fi access.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> WLAN

**原文来源：** Week2.pdf · PDF页15 / 幻灯片15

**语境：** Week2 · WLAN (Wireless LAN)

**语境英文：** A wireless LAN for local Wi-Fi access.

**语境中文：** 无线局域网；表中用于建筑／校园内的 Wi-Fi 本地接入。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> WLAN

**语境原文来源：** Week2.pdf · PDF页15 / 幻灯片15

**语境来源：** Week2.pdf · PDF页15 / 幻灯片15

**全部来源：** Week2.pdf · PDF页15 / 幻灯片15

### CAN (Campus Area Network)

**稳定ID：** csit985-w2-9a94c20c1ba19f

**类别：** 专业英语

**中文解释：** 校园区域网络；连接同一校园内多个建筑。

**简单英文（整理解释）：** A network connecting several buildings across a campus.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> CAN

**原文来源：** Week2.pdf · PDF页15 / 幻灯片15

**语境：** Week2 · CAN (Campus Area Network)

**语境英文：** A network connecting several buildings across a campus.

**语境中文：** 校园区域网络；连接同一校园内多个建筑。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> CAN

**语境原文来源：** Week2.pdf · PDF页15 / 幻灯片15

**语境来源：** Week2.pdf · PDF页15 / 幻灯片15

**全部来源：** Week2.pdf · PDF页15 / 幻灯片15

### MAN (Metropolitan Area Network)

**稳定ID：** csit985-w2-2e7ed16cba1f6a

**类别：** 专业英语

**中文解释：** 城域网；覆盖城市，PDF给10km到数百km的范围，仅为本资料说法。

**简单英文（整理解释）：** A network covering a city, with a greater scope than a LAN.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> The MAN is design for covering an entire city.

**原文来源：** Week2.pdf · PDF页17 / 幻灯片17

**资料原文：** 名称或用语片段

> MAN

**原文来源：** Week2.pdf · PDF页15 / 幻灯片15

**语境：** Week2 · MAN (Metropolitan Area Network)

**语境英文：** A network covering a city, with a greater scope than a LAN.

**语境中文：** 城域网；覆盖城市，PDF给10km到数百km的范围，仅为本资料说法。

**语境依据：** 整理解释

**语境原文：** 定义

> The MAN is design for covering an entire city.

**语境原文来源：** Week2.pdf · PDF页17 / 幻灯片17

**语境原文：** 名称或用语片段

> MAN

**语境原文来源：** Week2.pdf · PDF页15 / 幻灯片15

**语境来源：** Week2.pdf · PDF页15 / 幻灯片15；Week2.pdf · PDF页17 / 幻灯片17

**全部来源：** Week2.pdf · PDF页15 / 幻灯片15；Week2.pdf · PDF页17 / 幻灯片17

### SAN (Storage Area Network)

**稳定ID：** csit985-w2-9631e1b04e5ab0

**类别：** 专业英语

**中文解释：** 存储区域网络；表中用于数据中心的存储系统联网。

**简单英文（整理解释）：** A network for storage systems in a data centre.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> SAN

**原文来源：** Week2.pdf · PDF页15 / 幻灯片15

**语境：** Week2 · SAN (Storage Area Network)

**语境英文：** A network for storage systems in a data centre.

**语境中文：** 存储区域网络；表中用于数据中心的存储系统联网。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> SAN

**语境原文来源：** Week2.pdf · PDF页15 / 幻灯片15

**语境来源：** Week2.pdf · PDF页15 / 幻灯片15

**全部来源：** Week2.pdf · PDF页15 / 幻灯片15

### VPN (Virtual Private Network)

**稳定ID：** csit985-w2-65eb79d08a5390

**类别：** 专业英语

**中文解释：** 虚拟专用网络；表中是经 Internet 的虚拟网络，用于通过公用网络安全访问。

**简单英文（整理解释）：** A virtual network for secure access over public networks.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> VPN

**原文来源：** Week2.pdf · PDF页15 / 幻灯片15

**语境：** Week2 · VPN (Virtual Private Network)

**语境英文：** A virtual network for secure access over public networks.

**语境中文：** 虚拟专用网络；表中是经 Internet 的虚拟网络，用于通过公用网络安全访问。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> VPN

**语境原文来源：** Week2.pdf · PDF页15 / 幻灯片15

**语境来源：** Week2.pdf · PDF页15 / 幻灯片15

**全部来源：** Week2.pdf · PDF页15 / 幻灯片15

### Internet

**稳定ID：** csit985-w2-13974bf02a9f65

**类别：** 专业英语

**中文解释：** 互联网；本页说明 LAN 经 WAN 互连，多个机构参与标准和资源协调，不归单一个人或组织拥有。

**简单英文（整理解释）：** Interconnected networks whose standards and resources are coordinated by several organisations.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Internet

**原文来源：** Week2.pdf · PDF页18 / 幻灯片18

**资料原文：** 名称或用语片段

> Internet

**原文来源：** Week2.pdf · PDF页19 / 幻灯片19

**资料原文：** 教师用语（TXT原片段）

> not owned by one person or one organization

**原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符5380起；搜索“not owned by one person or one organization”

**语境：** Week2 · Internet

**语境英文：** Interconnected networks whose standards and resources are coordinated by several organisations.

**语境中文：** 互联网；本页说明 LAN 经 WAN 互连，多个机构参与标准和资源协调，不归单一个人或组织拥有。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> Internet

**语境原文来源：** Week2.pdf · PDF页18 / 幻灯片18

**语境原文：** 名称或用语片段

> Internet

**语境原文来源：** Week2.pdf · PDF页19 / 幻灯片19

**语境原文：** 教师用语（TXT原片段）

> not owned by one person or one organization

**语境原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符5380起；搜索“not owned by one person or one organization”

**语境来源：** Week2.pdf · PDF页18 / 幻灯片18；Week2.pdf · PDF页19 / 幻灯片19；Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符5380起；搜索“not owned by one person or one organization”

**全部来源：** Week2.pdf · PDF页18 / 幻灯片18；Week2.pdf · PDF页19 / 幻灯片19；Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符5380起；搜索“not owned by one person or one organization”

### IETF / ICANN / IAB

**稳定ID：** csit985-w2-aa9195cbea670b

**类别：** 专业英语

**中文解释：** 互联网协调机构：IETF制定标准；ICANN涉及域名系统与地址分配管理；IAB监督标准及协议演进。只按课件范围解释。

**简单英文（整理解释）：** Organisations named for Internet standards, names and addresses, and the development of standards and protocols.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 课件说明与全称

> IETF (Internet Engineering Task Force) develops Internet standards.

**原文来源：** Week2.pdf · PDF页19 / 幻灯片19

**资料原文：** 课件说明与全称

> ICANN (Internet Corporation For Assigned Names and Numbers) for managing domain name system and allocating IP addresses.

**原文来源：** Week2.pdf · PDF页19 / 幻灯片19

**资料原文：** 课件说明与全称

> IAB (Internet Architecture Board) oversees the evolution of the Internet standards and protocols.

**原文来源：** Week2.pdf · PDF页19 / 幻灯片19

**语境：** Week2 · IETF / ICANN / IAB

**语境英文：** Organisations named for Internet standards, names and addresses, and the development of standards and protocols.

**语境中文：** 互联网协调机构：IETF制定标准；ICANN涉及域名系统与地址分配管理；IAB监督标准及协议演进。只按课件范围解释。

**语境依据：** 根据资料整理

**语境原文：** 课件说明与全称

> IETF (Internet Engineering Task Force) develops Internet standards.

**语境原文来源：** Week2.pdf · PDF页19 / 幻灯片19

**语境原文：** 课件说明与全称

> ICANN (Internet Corporation For Assigned Names and Numbers) for managing domain name system and allocating IP addresses.

**语境原文来源：** Week2.pdf · PDF页19 / 幻灯片19

**语境原文：** 课件说明与全称

> IAB (Internet Architecture Board) oversees the evolution of the Internet standards and protocols.

**语境原文来源：** Week2.pdf · PDF页19 / 幻灯片19

**语境来源：** Week2.pdf · PDF页19 / 幻灯片19

**全部来源：** Week2.pdf · PDF页19 / 幻灯片19

### Broadband / leased lines / Metro Ethernet

**稳定ID：** csit985-w2-8219f39fd86995

**类别：** 专业英语

**中文解释：** 宽带／租用线路／城域以太网；第19页列为互联网接入方式，未给速率或详细定义。

**简单英文（整理解释）：** Named ways to connect to the Internet; no exact speeds are given.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Metro Ethernet

**原文来源：** Week2.pdf · PDF页19 / 幻灯片19

**语境：** Week2 · Broadband / leased lines / Metro Ethernet

**语境英文：** Named ways to connect to the Internet; no exact speeds are given.

**语境中文：** 宽带／租用线路／城域以太网；第19页列为互联网接入方式，未给速率或详细定义。

**语境依据：** 必要基础释义

**语境原文：** 名称或用语片段

> Metro Ethernet

**语境原文来源：** Week2.pdf · PDF页19 / 幻灯片19

**语境来源：** Week2.pdf · PDF页19 / 幻灯片19

**全部来源：** Week2.pdf · PDF页19 / 幻灯片19

### Centralized network / master / surrogates

**稳定ID：** csit985-w2-9bd9699aaa2903

**类别：** 专业英语

**中文解释：** 集中式网络／主控计算机／从属计算机；本页结构是一个 master 和依赖它的 surrogates。

**简单英文（整理解释）：** A network with a central master computer and dependent surrogate computers.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> A centralized network includes: One central computer called master Dependent computers called surrogates

**原文来源：** Week2.pdf · PDF页21 / 幻灯片21

**语境：** Week2 · Centralized network / master / surrogates

**语境英文：** A network with a central master computer and dependent surrogate computers.

**语境中文：** 集中式网络／主控计算机／从属计算机；本页结构是一个 master 和依赖它的 surrogates。

**语境依据：** 整理解释

**语境原文：** 定义

> A centralized network includes: One central computer called master Dependent computers called surrogates

**语境原文来源：** Week2.pdf · PDF页21 / 幻灯片21

**语境来源：** Week2.pdf · PDF页21 / 幻灯片21

**全部来源：** Week2.pdf · PDF页21 / 幻灯片21

### Client-server network / client / server

**稳定ID：** csit985-w2-0b76a9e8fe9947

**类别：** 专业英语

**中文解释：** 客户机—服务器网络／客户机／服务器；client 请求信息，server 向终端提供信息。

**简单英文（整理解释）：** Clients request information; servers provide it.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> A server is a computer which give information to the hosts or ends devices, e.g. file server, web server, or email server, etc.

**原文来源：** Week2.pdf · PDF页22 / 幻灯片22

**资料原文：** 定义

> A client is a computer which sends requests to the server to get information

**原文来源：** Week2.pdf · PDF页22 / 幻灯片22

**资料原文：** 名称或用语片段

> Client

**原文来源：** Week2.pdf · PDF页54 / 幻灯片54

**语境：** Week2 · Client-server network / client / server

**语境英文：** Clients request information; servers provide it.

**语境中文：** 客户机—服务器网络／客户机／服务器；client 请求信息，server 向终端提供信息。

**语境依据：** 整理解释

**语境原文：** 定义

> A server is a computer which give information to the hosts or ends devices, e.g. file server, web server, or email server, etc.

**语境原文来源：** Week2.pdf · PDF页22 / 幻灯片22

**语境原文：** 定义

> A client is a computer which sends requests to the server to get information

**语境原文来源：** Week2.pdf · PDF页22 / 幻灯片22

**语境原文：** 名称或用语片段

> Client

**语境原文来源：** Week2.pdf · PDF页54 / 幻灯片54

**语境来源：** Week2.pdf · PDF页22 / 幻灯片22；Week2.pdf · PDF页54 / 幻灯片54

**全部来源：** Week2.pdf · PDF页22 / 幻灯片22；Week2.pdf · PDF页54 / 幻灯片54

### Cloud-based network

**稳定ID：** csit985-w2-2a7c543c866cdb

**类别：** 专业英语

**中文解释：** 基于云的网络；资源、处理和数据在远程云服务器上，通过 Internet 访问。

**简单英文（整理解释）：** Resources, processing, and data are on remote cloud servers and accessed over the Internet.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Resources, processing, and data are hosted on remote servers on the cloud and accessed over the Internet.

**原文来源：** Week2.pdf · PDF页23 / 幻灯片23

**语境：** Week2 · Cloud-based network

**语境英文：** Resources, processing, and data are on remote cloud servers and accessed over the Internet.

**语境中文：** 基于云的网络；资源、处理和数据在远程云服务器上，通过 Internet 访问。

**语境依据：** 整理解释

**语境原文：** 定义

> Resources, processing, and data are hosted on remote servers on the cloud and accessed over the Internet.

**语境原文来源：** Week2.pdf · PDF页23 / 幻灯片23

**语境来源：** Week2.pdf · PDF页23 / 幻灯片23

**全部来源：** Week2.pdf · PDF页23 / 幻灯片23

### SaaS applications

**稳定ID：** csit985-w2-a090ddea422a60

**类别：** 专业英语

**中文解释：** SaaS 应用；作为云网络的常见用途出现。当前 PDF 未展开缩写或定义服务模型。

**简单英文（整理解释）：** Applications named as a common cloud use; the acronym is not expanded here.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> SaaS applications

**原文来源：** Week2.pdf · PDF页23 / 幻灯片23

**语境：** Week2 · SaaS applications

**语境英文：** Applications named as a common cloud use; the acronym is not expanded here.

**语境中文：** SaaS 应用；作为云网络的常见用途出现。当前 PDF 未展开缩写或定义服务模型。

**语境依据：** 资料未定义

**语境原文：** 名称或用语片段

> SaaS applications

**语境原文来源：** Week2.pdf · PDF页23 / 幻灯片23

**语境来源：** Week2.pdf · PDF页23 / 幻灯片23

**全部来源：** Week2.pdf · PDF页23 / 幻灯片23

### Distributed network

**稳定ID：** csit985-w2-eb6754385c0b0b

**类别：** 专业英语

**中文解释：** 分布式网络；计算机可能有本地资源，并能独立工作，may 不等于每台都必须如此。

**简单英文（整理解释）：** Computers may have their own resources and work on their own.

**说明依据：** 整理解释

**定义状态：** 当前资料未给出正式定义

**资料原文：** 说明

> Computers may own their local resources

**原文来源：** Week2.pdf · PDF页24 / 幻灯片24

**资料原文：** 说明

> Computers in the network can work as stand alone

**原文来源：** Week2.pdf · PDF页24 / 幻灯片24

**语境：** Week2 · Distributed network

**语境英文：** Computers may have their own resources and work on their own.

**语境中文：** 分布式网络；计算机可能有本地资源，并能独立工作，may 不等于每台都必须如此。

**语境依据：** 整理解释

**语境原文：** 说明

> Computers may own their local resources

**语境原文来源：** Week2.pdf · PDF页24 / 幻灯片24

**语境原文：** 说明

> Computers in the network can work as stand alone

**语境原文来源：** Week2.pdf · PDF页24 / 幻灯片24

**语境来源：** Week2.pdf · PDF页24 / 幻灯片24

**全部来源：** Week2.pdf · PDF页24 / 幻灯片24

### Peer-to-peer network (P2P)

**稳定ID：** csit985-w2-44bbffa4b17113

**类别：** 专业英语

**中文解释：** 对等网络；设备地位相等，无中心服务器。本页称适合小网络，不能直接当作所有P2P系统的规模上限。

**简单英文（整理解释）：** A network with equal-status devices and no central server in this model.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> In a peer-to-peer network, all devices have equal status and have no central server.

**原文来源：** Week2.pdf · PDF页25 / 幻灯片25

**语境：** Week2 · Peer-to-peer network (P2P)

**语境英文：** A network with equal-status devices and no central server in this model.

**语境中文：** 对等网络；设备地位相等，无中心服务器。本页称适合小网络，不能直接当作所有P2P系统的规模上限。

**语境依据：** 整理解释

**语境原文：** 定义

> In a peer-to-peer network, all devices have equal status and have no central server.

**语境原文来源：** Week2.pdf · PDF页25 / 幻灯片25

**语境来源：** Week2.pdf · PDF页25 / 幻灯片25；Week2.pdf · PDF页54 / 幻灯片54

**全部来源：** Week2.pdf · PDF页25 / 幻灯片25；Week2.pdf · PDF页54 / 幻灯片54

### Hybrid network / authentication

**稳定ID：** csit985-w2-17a798963430c6

**类别：** 专业英语

**中文解释：** 混合网络／身份认证；组合客户机—服务器、P2P或其他架构。例如中心服务器认证，对等设备直接共享数据。

**简单英文（整理解释）：** A network combining architectures; central servers may authenticate users while peers share data directly.

**说明依据：** 根据资料整理

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Combine features of both client-server and peer-to-peer or other architectures.

**原文来源：** Week2.pdf · PDF页26 / 幻灯片26

**资料原文：** 教师用语（TXT原片段）

> authentication purpose

**原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符9096起；搜索“authentication purpose”

**语境：** Week2 · Hybrid network / authentication

**语境英文：** A network combining architectures; central servers may authenticate users while peers share data directly.

**语境中文：** 混合网络／身份认证；组合客户机—服务器、P2P或其他架构。例如中心服务器认证，对等设备直接共享数据。

**语境依据：** 根据资料整理

**语境原文：** 定义

> Combine features of both client-server and peer-to-peer or other architectures.

**语境原文来源：** Week2.pdf · PDF页26 / 幻灯片26

**语境原文：** 教师用语（TXT原片段）

> authentication purpose

**语境原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符9096起；搜索“authentication purpose”

**语境来源：** Week2.pdf · PDF页26 / 幻灯片26；Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符9096起；搜索“authentication purpose”

**全部来源：** Week2.pdf · PDF页26 / 幻灯片26；Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符9096起；搜索“authentication purpose”

### Mesh network

**稳定ID：** csit985-w2-58b1a0e8c565c5

**类别：** 专业英语

**中文解释：** 网状网络；设备之间有多个连接。课件列可靠、易定位隔离故障，也列布线和I/O端口成本高。

**简单英文（整理解释）：** A topology with multiple links between devices, offering reliability at higher cabling and port cost.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Mesh Network

**原文来源：** Week2.pdf · PDF页29 / 幻灯片29

**资料原文：** 名称或用语片段

> mesh network

**原文来源：** Week2.pdf · PDF页34 / 幻灯片34

**语境：** Week2 · Mesh network

**语境英文：** A topology with multiple links between devices, offering reliability at higher cabling and port cost.

**语境中文：** 网状网络；设备之间有多个连接。课件列可靠、易定位隔离故障，也列布线和I/O端口成本高。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> Mesh Network

**语境原文来源：** Week2.pdf · PDF页29 / 幻灯片29

**语境原文：** 名称或用语片段

> mesh network

**语境原文来源：** Week2.pdf · PDF页34 / 幻灯片34

**语境来源：** Week2.pdf · PDF页29 / 幻灯片29；Week2.pdf · PDF页34 / 幻灯片34

**全部来源：** Week2.pdf · PDF页29 / 幻灯片29；Week2.pdf · PDF页34 / 幻灯片34

### Tree network / root / child-parent relationship

**稳定ID：** csit985-w2-1a500aeeb5cd06

**类别：** 专业英语

**中文解释：** 树形网络／根／父子关系；层次结构。高处故障可能影响整条分支，不能把本页高可靠性视为无条件结论。

**简单英文（整理解释）：** A hierarchical topology with a root and parent-child links; a high-level failure can affect a whole branch.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> child-parent relationship

**原文来源：** Week2.pdf · PDF页30 / 幻灯片30

**资料原文：** 教师用语（TXT原片段）

> entire branch

**原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符1121起；搜索“entire branch”

**语境：** Week2 · Tree network / root / child-parent relationship

**语境英文：** A hierarchical topology with a root and parent-child links; a high-level failure can affect a whole branch.

**语境中文：** 树形网络／根／父子关系；层次结构。高处故障可能影响整条分支，不能把本页高可靠性视为无条件结论。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> child-parent relationship

**语境原文来源：** Week2.pdf · PDF页30 / 幻灯片30

**语境原文：** 教师用语（TXT原片段）

> entire branch

**语境原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符1121起；搜索“entire branch”

**语境来源：** Week2.pdf · PDF页30 / 幻灯片30；Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符1121起；搜索“entire branch”

**全部来源：** Week2.pdf · PDF页30 / 幻灯片30；Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符1121起；搜索“entire branch”

### Bus network / multipoint / backbone

**稳定ID：** csit985-w2-53fc55f73d9f66

**类别：** 专业英语

**中文解释：** 总线网络／多点／骨干；一条长电缆作为骨干连接所有设备，设备共享总线。

**简单英文（整理解释）：** A topology in which devices share one long backbone cable.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> One long cable acts a backbone connecting all devices in a network

**原文来源：** Week2.pdf · PDF页31 / 幻灯片31

**语境：** Week2 · Bus network / multipoint / backbone

**语境英文：** A topology in which devices share one long backbone cable.

**语境中文：** 总线网络／多点／骨干；一条长电缆作为骨干连接所有设备，设备共享总线。

**语境依据：** 整理解释

**语境原文：** 定义

> One long cable acts a backbone connecting all devices in a network

**语境原文来源：** Week2.pdf · PDF页31 / 幻灯片31

**语境来源：** Week2.pdf · PDF页31 / 幻灯片31

**全部来源：** Week2.pdf · PDF页31 / 幻灯片31

### Star network / central node

**稳定ID：** csit985-w2-b1c114c9e2659b

**类别：** 专业英语

**中文解释：** 星形网络／中心节点；设备连到中心。普通设备故障不影响全网，但中心节点故障可使全网失败。

**简单英文（整理解释）：** Devices connect to a central node; its failure affects the whole network.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 说明

> The central hub failure causes the failure of the entire network

**原文来源：** Week2.pdf · PDF页32 / 幻灯片32

**资料原文：** 教师用语（TXT原片段）

> central device in the star can be normally a switch

**原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符2369起；搜索“central device in the star can be normally a switch”

**语境：** Week2 · Star network / central node

**语境英文：** Devices connect to a central node; its failure affects the whole network.

**语境中文：** 星形网络／中心节点；设备连到中心。普通设备故障不影响全网，但中心节点故障可使全网失败。

**语境依据：** 根据资料整理

**语境原文：** 说明

> The central hub failure causes the failure of the entire network

**语境原文来源：** Week2.pdf · PDF页32 / 幻灯片32

**语境原文：** 教师用语（TXT原片段）

> central device in the star can be normally a switch

**语境原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符2369起；搜索“central device in the star can be normally a switch”

**语境来源：** Week2.pdf · PDF页32 / 幻灯片32；Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符2369起；搜索“central device in the star can be normally a switch”

**全部来源：** Week2.pdf · PDF页32 / 幻灯片32；Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符2369起；搜索“central device in the star can be normally a switch”

### Ring network / terminators

**稳定ID：** csit985-w2-2287991532ddb1

**类别：** 专业英语

**中文解释：** 环形网络／终端匹配器；本页说每设备有中继器、不需terminators；简单环断开或增删设备会中断网络。

**简单英文（整理解释）：** Devices form a ring; the slide describes failure and disruption in a simple ring.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 说明

> A break in the ring will stop the transmission of the entire network

**原文来源：** Week2.pdf · PDF页33 / 幻灯片33

**资料原文：** 教师用语（TXT原片段）

> very simple ring

**原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符2900起；搜索“very simple ring”

**语境：** Week2 · Ring network / terminators

**语境英文：** Devices form a ring; the slide describes failure and disruption in a simple ring.

**语境中文：** 环形网络／终端匹配器；本页说每设备有中继器、不需terminators；简单环断开或增删设备会中断网络。

**语境依据：** 根据资料整理

**语境原文：** 说明

> A break in the ring will stop the transmission of the entire network

**语境原文来源：** Week2.pdf · PDF页33 / 幻灯片33

**语境原文：** 教师用语（TXT原片段）

> very simple ring

**语境原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符2900起；搜索“very simple ring”

**语境来源：** Week2.pdf · PDF页33 / 幻灯片33；Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符2900起；搜索“very simple ring”

**全部来源：** Week2.pdf · PDF页33 / 幻灯片33；Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符2900起；搜索“very simple ring”

### Fault identification / fault isolation

**稳定ID：** csit985-w2-b66a9c941fdf8e

**类别：** 专业英语

**中文解释：** 故障识别／故障隔离；课件列为 mesh、tree 或 ring 的优点，但未说明具体检测方法。

**简单英文（整理解释）：** Finding a fault / separating it; named topology benefits without a detailed method.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> fault identification

**原文来源：** Week2.pdf · PDF页29 / 幻灯片29

**资料原文：** 名称或用语片段

> fault identification

**原文来源：** Week2.pdf · PDF页30 / 幻灯片30

**资料原文：** 名称或用语片段

> Fault isolation

**原文来源：** Week2.pdf · PDF页33 / 幻灯片33

**语境：** Week2 · Fault identification / fault isolation

**语境英文：** Finding a fault / separating it; named topology benefits without a detailed method.

**语境中文：** 故障识别／故障隔离；课件列为 mesh、tree 或 ring 的优点，但未说明具体检测方法。

**语境依据：** 必要基础释义

**语境原文：** 名称或用语片段

> fault identification

**语境原文来源：** Week2.pdf · PDF页29 / 幻灯片29

**语境原文：** 名称或用语片段

> fault identification

**语境原文来源：** Week2.pdf · PDF页30 / 幻灯片30

**语境原文：** 名称或用语片段

> Fault isolation

**语境原文来源：** Week2.pdf · PDF页33 / 幻灯片33

**语境来源：** Week2.pdf · PDF页29 / 幻灯片29；Week2.pdf · PDF页30 / 幻灯片30；Week2.pdf · PDF页33 / 幻灯片33

**全部来源：** Week2.pdf · PDF页29 / 幻灯片29；Week2.pdf · PDF页30 / 幻灯片30；Week2.pdf · PDF页33 / 幻灯片33

### I/O ports

**稳定ID：** csit985-w2-2888dd42e80421

**类别：** 专业英语

**中文解释：** 输入／输出端口；网状、树形网络的端口需求出现在成本说明中，不能与运输层端口号混同。

**简单英文（整理解释）：** Device input/output ports listed as a topology cost concern.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> I/O ports

**原文来源：** Week2.pdf · PDF页29 / 幻灯片29

**资料原文：** 名称或用语片段

> I/O ports

**原文来源：** Week2.pdf · PDF页30 / 幻灯片30

**语境：** Week2 · I/O ports

**语境英文：** Device input/output ports listed as a topology cost concern.

**语境中文：** 输入／输出端口；网状、树形网络的端口需求出现在成本说明中，不能与运输层端口号混同。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> I/O ports

**语境原文来源：** Week2.pdf · PDF页29 / 幻灯片29

**语境原文：** 名称或用语片段

> I/O ports

**语境原文来源：** Week2.pdf · PDF页30 / 幻灯片30

**语境来源：** Week2.pdf · PDF页29 / 幻灯片29；Week2.pdf · PDF页30 / 幻灯片30

**全部来源：** Week2.pdf · PDF页29 / 幻灯片29；Week2.pdf · PDF页30 / 幻灯片30

### Protocol / network protocol

**稳定ID：** csit985-w2-4537bc7fd10a86

**类别：** 专业英语

**中文解释：** 协议／网络协议；规定通信消息的格式、顺序，以及发送、接收或其他事件发生时应采取的动作。

**简单英文（整理解释）：** Rules for message formats, order, and actions when messages or other events occur.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> A protocol defines the format and the order of messages exchanged between two or more communicating entities, as well as the actions taken on the transmission and/or receipt of a message or other event.

**原文来源：** Week2.pdf · PDF页36 / 幻灯片36

**资料原文：** 名称或用语片段

> Network Protocol

**原文来源：** Week2.pdf · PDF页37 / 幻灯片37

**语境：** Week2 · Protocol / network protocol

**语境英文：** Rules for message formats, order, and actions when messages or other events occur.

**语境中文：** 协议／网络协议；规定通信消息的格式、顺序，以及发送、接收或其他事件发生时应采取的动作。

**语境依据：** 整理解释

**语境原文：** 定义

> A protocol defines the format and the order of messages exchanged between two or more communicating entities, as well as the actions taken on the transmission and/or receipt of a message or other event.

**语境原文来源：** Week2.pdf · PDF页36 / 幻灯片36

**语境原文：** 名称或用语片段

> Network Protocol

**语境原文来源：** Week2.pdf · PDF页37 / 幻灯片37

**语境来源：** Week2.pdf · PDF页36 / 幻灯片36；Week2.pdf · PDF页37 / 幻灯片37

**全部来源：** Week2.pdf · PDF页36 / 幻灯片36；Week2.pdf · PDF页37 / 幻灯片37

### Communication / security / routing / service discovery protocols

**稳定ID：** csit985-w2-b695f2834d4da7

**类别：** 专业英语

**中文解释：** 通信／安全／路由／服务发现协议；四类用途名称，不是一个协议包办所有功能。

**简单英文（整理解释）：** Protocol purposes listed on the slide; no single protocol performs every network function.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> communication

**原文来源：** Week2.pdf · PDF页37 / 幻灯片37

**资料原文：** 教师用语（TXT原片段）

> no single protocol performs every network function

**原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符5603起；搜索“no single protocol performs every network function”

**语境：** Week2 · Communication / security / routing / service discovery protocols

**语境英文：** Protocol purposes listed on the slide; no single protocol performs every network function.

**语境中文：** 通信／安全／路由／服务发现协议；四类用途名称，不是一个协议包办所有功能。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> communication

**语境原文来源：** Week2.pdf · PDF页37 / 幻灯片37

**语境原文：** 教师用语（TXT原片段）

> no single protocol performs every network function

**语境原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符5603起；搜索“no single protocol performs every network function”

**语境来源：** Week2.pdf · PDF页37 / 幻灯片37；Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符5603起；搜索“no single protocol performs every network function”

**全部来源：** Week2.pdf · PDF页37 / 幻灯片37；Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符5603起；搜索“no single protocol performs every network function”

### Source / destination / communication path

**稳定ID：** csit985-w2-ed9e740849597d

**类别：** 专业英语

**中文解释：** 源／目的地／通信路径；指数据从哪里发出、发往哪里，以及经过的路径。

**简单英文（整理解释）：** The sender, receiver, and path used for communication.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Communication path

**原文来源：** Week2.pdf · PDF页38 / 幻灯片38

**资料原文：** 名称或用语片段

> Destination

**原文来源：** Week2.pdf · PDF页39 / 幻灯片39

**语境：** Week2 · Source / destination / communication path

**语境英文：** The sender, receiver, and path used for communication.

**语境中文：** 源／目的地／通信路径；指数据从哪里发出、发往哪里，以及经过的路径。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> Communication path

**语境原文来源：** Week2.pdf · PDF页38 / 幻灯片38

**语境原文：** 名称或用语片段

> Destination

**语境原文来源：** Week2.pdf · PDF页39 / 幻灯片39

**语境来源：** Week2.pdf · PDF页38 / 幻灯片38；Week2.pdf · PDF页39 / 幻灯片39

**全部来源：** Week2.pdf · PDF页38 / 幻灯片38；Week2.pdf · PDF页39 / 幻灯片39

### Message encoding / decoding

**稳定ID：** csit985-w2-5f6ecd04873236

**类别：** 专业英语

**中文解释：** 消息编码／解码；把信息转为适合传输的形式，再反向解释。第41页把 convert 疑似误写为 covert，原句保留。

**简单英文（整理解释）：** Change information into a form for transmission, then reverse the process to interpret it.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义，但原句有疑似笔误或缺词；见资料疑点

**资料原文：** 定义（疑似笔误）

> Encoding is to covert information into another acceptable form for transmission

**原文来源：** Week2.pdf · PDF页41 / 幻灯片41

**资料原文：** 定义

> Decoding is to reverse this process to interpret the information

**原文来源：** Week2.pdf · PDF页41 / 幻灯片41

**语境：** Week2 · Message encoding / decoding

**语境英文：** Change information into a form for transmission, then reverse the process to interpret it.

**语境中文：** 消息编码／解码；把信息转为适合传输的形式，再反向解释。第41页把 convert 疑似误写为 covert，原句保留。

**语境依据：** 整理解释

**语境原文：** 定义（疑似笔误）

> Encoding is to covert information into another acceptable form for transmission

**语境原文来源：** Week2.pdf · PDF页41 / 幻灯片41

**语境原文：** 定义

> Decoding is to reverse this process to interpret the information

**语境原文来源：** Week2.pdf · PDF页41 / 幻灯片41

**语境来源：** Week2.pdf · PDF页41 / 幻灯片41；Week2.pdf · PDF页43 / 幻灯片43

**全部来源：** Week2.pdf · PDF页41 / 幻灯片41；Week2.pdf · PDF页43 / 幻灯片43

### Message formatting / encapsulation

**稳定ID：** csit985-w2-11fa1a37bc3832

**类别：** 专业英语

**中文解释：** 消息格式化／封装；消息须有规定格式。封装过程在图53与录音中表现为逐层添加头部。

**简单英文（整理解释）：** Use a specific message structure; add layer information as data moves down the stack.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Message formatting

**原文来源：** Week2.pdf · PDF页42 / 幻灯片42

**资料原文：** 图表标签（视觉核对）

> Message

**原文来源：** Week2.pdf · PDF页53 / 幻灯片53（图表）

**资料原文：** 教师用语（TXT原片段）

> add some transport information

**原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符1335起；搜索“add some transport information”

**语境：** Week2 · Message formatting / encapsulation

**语境英文：** Use a specific message structure; add layer information as data moves down the stack.

**语境中文：** 消息格式化／封装；消息须有规定格式。封装过程在图53与录音中表现为逐层添加头部。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> Message formatting

**语境原文来源：** Week2.pdf · PDF页42 / 幻灯片42

**语境原文：** 图表标签（视觉核对）

> Message

**语境原文来源：** Week2.pdf · PDF页53 / 幻灯片53（图表）

**语境原文：** 教师用语（TXT原片段）

> add some transport information

**语境原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符1335起；搜索“add some transport information”

**语境来源：** Week2.pdf · PDF页42 / 幻灯片42；Week2.pdf · PDF页53 / 幻灯片53（图表）；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符1335起；搜索“add some transport information”

**全部来源：** Week2.pdf · PDF页42 / 幻灯片42；Week2.pdf · PDF页53 / 幻灯片53（图表）；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符1335起；搜索“add some transport information”

### Message size / message timing / delivery options

**稳定ID：** csit985-w2-c8496e5c4b5892

**类别：** 专业英语

**中文解释：** 消息大小／消息时序／投递方式；协议需求中的三个维度。

**简单英文（整理解释）：** Requirements about message size, timing, and delivery.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> delivery options

**原文来源：** Week2.pdf · PDF页40 / 幻灯片40

**资料原文：** 名称或用语片段

> Message size

**原文来源：** Week2.pdf · PDF页43 / 幻灯片43

**资料原文：** 名称或用语片段

> Message timing

**原文来源：** Week2.pdf · PDF页44 / 幻灯片44

**资料原文：** 名称或用语片段

> delivery options

**原文来源：** Week2.pdf · PDF页45 / 幻灯片45

**语境：** Week2 · Message size / message timing / delivery options

**语境英文：** Requirements about message size, timing, and delivery.

**语境中文：** 消息大小／消息时序／投递方式；协议需求中的三个维度。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> delivery options

**语境原文来源：** Week2.pdf · PDF页40 / 幻灯片40

**语境原文：** 名称或用语片段

> Message size

**语境原文来源：** Week2.pdf · PDF页43 / 幻灯片43

**语境原文：** 名称或用语片段

> Message timing

**语境原文来源：** Week2.pdf · PDF页44 / 幻灯片44

**语境原文：** 名称或用语片段

> delivery options

**语境原文来源：** Week2.pdf · PDF页45 / 幻灯片45

**语境来源：** Week2.pdf · PDF页40 / 幻灯片40；Week2.pdf · PDF页43 / 幻灯片43；Week2.pdf · PDF页44 / 幻灯片44；Week2.pdf · PDF页45 / 幻灯片45

**全部来源：** Week2.pdf · PDF页40 / 幻灯片40；Week2.pdf · PDF页43 / 幻灯片43；Week2.pdf · PDF页44 / 幻灯片44；Week2.pdf · PDF页45 / 幻灯片45

### Flow Control

**稳定ID：** csit985-w2-bdf847abf6d40c

**类别：** 专业英语

**中文解释：** 流量控制；管理发送速率以及可以发送的信息量。

**简单英文（整理解释）：** Manage how much data can be sent and how fast.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Flow Control – to manage the rate of data transmission and define how much information could be sent and the speed at which it could be delivered.

**原文来源：** Week2.pdf · PDF页44 / 幻灯片44

**资料原文：** 名称或用语片段

> flow control

**原文来源：** Week2.pdf · PDF页63 / 幻灯片63

**语境：** Week2 · Flow Control

**语境英文：** Manage how much data can be sent and how fast.

**语境中文：** 流量控制；管理发送速率以及可以发送的信息量。

**语境依据：** 整理解释

**语境原文：** 定义

> Flow Control – to manage the rate of data transmission and define how much information could be sent and the speed at which it could be delivered.

**语境原文来源：** Week2.pdf · PDF页44 / 幻灯片44

**语境原文：** 名称或用语片段

> flow control

**语境原文来源：** Week2.pdf · PDF页63 / 幻灯片63

**语境来源：** Week2.pdf · PDF页44 / 幻灯片44；Week2.pdf · PDF页63 / 幻灯片63

**全部来源：** Week2.pdf · PDF页44 / 幻灯片44；Week2.pdf · PDF页63 / 幻灯片63

### Response Timeout

**稳定ID：** csit985-w2-ee20a56a283e73

**类别：** 专业英语

**中文解释：** 响应超时；管理未收到目的地响应时设备等待多久。

**简单英文（整理解释）：** Manage how long a device waits without a response.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Response Timeout – to manage how long a device need to wait when it does not hear a response from the destination.

**原文来源：** Week2.pdf · PDF页44 / 幻灯片44

**语境：** Week2 · Response Timeout

**语境英文：** Manage how long a device waits without a response.

**语境中文：** 响应超时；管理未收到目的地响应时设备等待多久。

**语境依据：** 整理解释

**语境原文：** 定义

> Response Timeout – to manage how long a device need to wait when it does not hear a response from the destination.

**语境原文来源：** Week2.pdf · PDF页44 / 幻灯片44

**语境来源：** Week2.pdf · PDF页44 / 幻灯片44

**全部来源：** Week2.pdf · PDF页44 / 幻灯片44

### Access method / collisions

**稳定ID：** csit985-w2-716db6de43b353

**类别：** 专业英语

**中文解释：** 访问方法／冲突；决定何时发送。本页冲突指多设备同时发送，消息受损。

**简单英文（整理解释）：** Rules for when to send; a collision occurs when simultaneous traffic corrupts messages.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Access method – to determine when someone can send a message.

**原文来源：** Week2.pdf · PDF页44 / 幻灯片44

**资料原文：** 定义

> This is when more than one device sends traffic at the same time and the messages become corrupt.

**原文来源：** Week2.pdf · PDF页44 / 幻灯片44

**语境：** Week2 · Access method / collisions

**语境英文：** Rules for when to send; a collision occurs when simultaneous traffic corrupts messages.

**语境中文：** 访问方法／冲突；决定何时发送。本页冲突指多设备同时发送，消息受损。

**语境依据：** 整理解释

**语境原文：** 定义

> Access method – to determine when someone can send a message.

**语境原文来源：** Week2.pdf · PDF页44 / 幻灯片44

**语境原文：** 定义

> This is when more than one device sends traffic at the same time and the messages become corrupt.

**语境原文来源：** Week2.pdf · PDF页44 / 幻灯片44

**语境来源：** Week2.pdf · PDF页44 / 幻灯片44

**全部来源：** Week2.pdf · PDF页44 / 幻灯片44

### Unicast / multicast / broadcast

**稳定ID：** csit985-w2-fd4f2236d60319

**类别：** 专业英语

**中文解释：** 单播／组播／广播；一对一／一对多但通常非全部／一对全部。

**简单英文（整理解释）：** One-to-one / one-to-many, typically not all / one-to-all communication.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Unicast – one to one communication

**原文来源：** Week2.pdf · PDF页45 / 幻灯片45

**资料原文：** 定义

> Multicast – one to many, typically not all

**原文来源：** Week2.pdf · PDF页45 / 幻灯片45

**资料原文：** 定义

> Broadcast – one to all

**原文来源：** Week2.pdf · PDF页45 / 幻灯片45

**语境：** Week2 · Unicast / multicast / broadcast

**语境英文：** One-to-one / one-to-many, typically not all / one-to-all communication.

**语境中文：** 单播／组播／广播；一对一／一对多但通常非全部／一对全部。

**语境依据：** 整理解释

**语境原文：** 定义

> Unicast – one to one communication

**语境原文来源：** Week2.pdf · PDF页45 / 幻灯片45

**语境原文：** 定义

> Multicast – one to many, typically not all

**语境原文来源：** Week2.pdf · PDF页45 / 幻灯片45

**语境原文：** 定义

> Broadcast – one to all

**语境原文来源：** Week2.pdf · PDF页45 / 幻灯片45

**语境来源：** Week2.pdf · PDF页45 / 幻灯片45

**全部来源：** Week2.pdf · PDF页45 / 幻灯片45

### Protocol stack / protocol suite / layered model

**稳定ID：** csit985-w2-81eaa133811c76

**类别：** 专业英语

**中文解释：** 协议栈／协议族／分层模型；本周用分层说明不同协议如何一起完成通信。名称有关联，但资料未正式定义三者区别。

**简单英文（整理解释）：** A layered view of protocols working together; their exact differences are not formally defined here.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Protocol Suite

**原文来源：** Week2.pdf · PDF页47 / 幻灯片47

**资料原文：** 名称或用语片段

> Protocol stack

**原文来源：** Week2.pdf · PDF页51 / 幻灯片51

**资料原文：** 教师用语（TXT原片段）

> each layer, uh, provides services

**原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L8，本行字符552起；搜索“each layer, uh, provides services”

**语境：** Week2 · Protocol stack / protocol suite / layered model

**语境英文：** A layered view of protocols working together; their exact differences are not formally defined here.

**语境中文：** 协议栈／协议族／分层模型；本周用分层说明不同协议如何一起完成通信。名称有关联，但资料未正式定义三者区别。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> Protocol Suite

**语境原文来源：** Week2.pdf · PDF页47 / 幻灯片47

**语境原文：** 名称或用语片段

> Protocol stack

**语境原文来源：** Week2.pdf · PDF页51 / 幻灯片51

**语境原文：** 教师用语（TXT原片段）

> each layer, uh, provides services

**语境原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L8，本行字符552起；搜索“each layer, uh, provides services”

**语境来源：** Week2.pdf · PDF页47 / 幻灯片47；Week2.pdf · PDF页51 / 幻灯片51；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L8，本行字符552起；搜索“each layer, uh, provides services”

**全部来源：** Week2.pdf · PDF页47 / 幻灯片47；Week2.pdf · PDF页51 / 幻灯片51；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L8，本行字符552起；搜索“each layer, uh, provides services”

### TCP/IP model / Internet Protocol Suite

**稳定ID：** csit985-w2-3f1e6f73cf6c0a

**类别：** 专业英语

**中文解释：** TCP/IP模型／互联网协议族；本页采用四层：Application、Transport、Internet、Network Access。

**简单英文（整理解释）：** A four-layer model in this lecture: application, transport, Internet, and network access.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Internet Protocol Suite

**原文来源：** Week2.pdf · PDF页47 / 幻灯片47

**资料原文：** 名称或用语片段

> Internet Protocol Suite

**原文来源：** Week2.pdf · PDF页48 / 幻灯片48

**资料原文：** 名称或用语片段

> TCP/IP model

**原文来源：** Week2.pdf · PDF页50 / 幻灯片50

**资料原文：** 名称或用语片段

> TCP/IP Model

**原文来源：** Week2.pdf · PDF页51 / 幻灯片51

**语境：** Week2 · TCP/IP model / Internet Protocol Suite

**语境英文：** A four-layer model in this lecture: application, transport, Internet, and network access.

**语境中文：** TCP/IP模型／互联网协议族；本页采用四层：Application、Transport、Internet、Network Access。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> Internet Protocol Suite

**语境原文来源：** Week2.pdf · PDF页47 / 幻灯片47

**语境原文：** 名称或用语片段

> Internet Protocol Suite

**语境原文来源：** Week2.pdf · PDF页48 / 幻灯片48

**语境原文：** 名称或用语片段

> TCP/IP model

**语境原文来源：** Week2.pdf · PDF页50 / 幻灯片50

**语境原文：** 名称或用语片段

> TCP/IP Model

**语境原文来源：** Week2.pdf · PDF页51 / 幻灯片51

**语境来源：** Week2.pdf · PDF页47 / 幻灯片47；Week2.pdf · PDF页48 / 幻灯片48；Week2.pdf · PDF页50 / 幻灯片50；Week2.pdf · PDF页51 / 幻灯片51

**全部来源：** Week2.pdf · PDF页47 / 幻灯片47；Week2.pdf · PDF页48 / 幻灯片48；Week2.pdf · PDF页50 / 幻灯片50；Week2.pdf · PDF页51 / 幻灯片51

### OSI (Open Systems Interconnection) model

**稳定ID：** csit985-w2-6fdba86fc27a8a

**类别：** 专业英语

**中文解释：** 开放系统互连模型；有七层。Application/Presentation/Session对应此处TCP/IP的Application；Data Link/Physical对应Network Access。

**简单英文（整理解释）：** A seven-layer model whose functions are grouped into four layers in the TCP/IP view.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Open Systems Interconnection

**原文来源：** Week2.pdf · PDF页49 / 幻灯片49

**资料原文：** 名称或用语片段

> OSI model

**原文来源：** Week2.pdf · PDF页50 / 幻灯片50

**资料原文：** 名称或用语片段

> OSI Model

**原文来源：** Week2.pdf · PDF页51 / 幻灯片51

**语境：** Week2 · OSI (Open Systems Interconnection) model

**语境英文：** A seven-layer model whose functions are grouped into four layers in the TCP/IP view.

**语境中文：** 开放系统互连模型；有七层。Application/Presentation/Session对应此处TCP/IP的Application；Data Link/Physical对应Network Access。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> Open Systems Interconnection

**语境原文来源：** Week2.pdf · PDF页49 / 幻灯片49

**语境原文：** 名称或用语片段

> OSI model

**语境原文来源：** Week2.pdf · PDF页50 / 幻灯片50

**语境原文：** 名称或用语片段

> OSI Model

**语境原文来源：** Week2.pdf · PDF页51 / 幻灯片51

**语境来源：** Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页50 / 幻灯片50；Week2.pdf · PDF页51 / 幻灯片51

**全部来源：** Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页50 / 幻灯片50；Week2.pdf · PDF页51 / 幻灯片51

### AppleTalk / Novell NetWare

**稳定ID：** csit985-w2-aab41e662bd641

**类别：** 专业英语

**中文解释：** 课件列出的其他协议模型名称；本周未解释其运行方式，不补充历史或当前使用情况。

**简单英文（整理解释）：** Other protocol model names listed without explanation.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Novell NetWare

**原文来源：** Week2.pdf · PDF页47 / 幻灯片47

**语境：** Week2 · AppleTalk / Novell NetWare

**语境英文：** Other protocol model names listed without explanation.

**语境中文：** 课件列出的其他协议模型名称；本周未解释其运行方式，不补充历史或当前使用情况。

**语境依据：** 资料未定义

**语境原文：** 名称或用语片段

> Novell NetWare

**语境原文来源：** Week2.pdf · PDF页47 / 幻灯片47

**语境来源：** Week2.pdf · PDF页47 / 幻灯片47

**全部来源：** Week2.pdf · PDF页47 / 幻灯片47

### Application layer

**稳定ID：** csit985-w2-5d4067533cfb80

**类别：** 专业英语

**中文解释：** 应用层；为通信应用和底层网络提供接口。OSI表写进程到进程通信协议，TCP/IP表还包含表示和对话控制。

**简单英文（整理解释）：** A layer between communication applications and the underlying network.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Provides an interface between the applications used to communicate and the underlying network

**原文来源：** Week2.pdf · PDF页54 / 幻灯片54

**资料原文：** 名称或用语片段

> application layer

**原文来源：** Week2.pdf · PDF页49 / 幻灯片49

**资料原文：** 名称或用语片段

> Application Layer

**原文来源：** Week2.pdf · PDF页55 / 幻灯片55

**资料原文：** 名称或用语片段

> Application Layer

**原文来源：** Week2.pdf · PDF页58 / 幻灯片58

**语境：** Week2 · Application layer

**语境英文：** A layer between communication applications and the underlying network.

**语境中文：** 应用层；为通信应用和底层网络提供接口。OSI表写进程到进程通信协议，TCP/IP表还包含表示和对话控制。

**语境依据：** 整理解释

**语境原文：** 定义

> Provides an interface between the applications used to communicate and the underlying network

**语境原文来源：** Week2.pdf · PDF页54 / 幻灯片54

**语境原文：** 名称或用语片段

> application layer

**语境原文来源：** Week2.pdf · PDF页49 / 幻灯片49

**语境原文：** 名称或用语片段

> Application Layer

**语境原文来源：** Week2.pdf · PDF页55 / 幻灯片55

**语境原文：** 名称或用语片段

> Application Layer

**语境原文来源：** Week2.pdf · PDF页58 / 幻灯片58

**语境来源：** Week2.pdf · PDF页48 / 幻灯片48；Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页54 / 幻灯片54；Week2.pdf · PDF页55 / 幻灯片55；Week2.pdf · PDF页58 / 幻灯片58

**全部来源：** Week2.pdf · PDF页48 / 幻灯片48；Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页54 / 幻灯片54；Week2.pdf · PDF页55 / 幻灯片55；Week2.pdf · PDF页58 / 幻灯片58

### Presentation layer

**稳定ID：** csit985-w2-89d3d07209219c

**类别：** 专业英语

**中文解释：** 表示层；OSI第6层，为应用层服务之间传输的数据提供共同表示。

**简单英文（整理解释）：** OSI layer 6, providing a common representation of data.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Provides for common representation of the data transferred between application layer services.

**原文来源：** Week2.pdf · PDF页49 / 幻灯片49（图表）

**资料原文：** 名称或用语片段

> presentation layer

**原文来源：** Week2.pdf · PDF页49 / 幻灯片49

**语境：** Week2 · Presentation layer

**语境英文：** OSI layer 6, providing a common representation of data.

**语境中文：** 表示层；OSI第6层，为应用层服务之间传输的数据提供共同表示。

**语境依据：** 整理解释

**语境原文：** 定义

> Provides for common representation of the data transferred between application layer services.

**语境原文来源：** Week2.pdf · PDF页49 / 幻灯片49（图表）

**语境原文：** 名称或用语片段

> presentation layer

**语境原文来源：** Week2.pdf · PDF页49 / 幻灯片49

**语境来源：** Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页50 / 幻灯片50；Week2.pdf · PDF页49 / 幻灯片49（图表）

**全部来源：** Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页50 / 幻灯片50；Week2.pdf · PDF页49 / 幻灯片49（图表）

### Session layer

**稳定ID：** csit985-w2-eb2e50154a62aa

**类别：** 专业英语

**中文解释：** 会话层；OSI第5层，支持表示层并管理数据交换。

**简单英文（整理解释）：** OSI layer 5, supporting the presentation layer and managing data exchange.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Provides services to the presentation layer and to manage data exchange.

**原文来源：** Week2.pdf · PDF页49 / 幻灯片49

**语境：** Week2 · Session layer

**语境英文：** OSI layer 5, supporting the presentation layer and managing data exchange.

**语境中文：** 会话层；OSI第5层，支持表示层并管理数据交换。

**语境依据：** 整理解释

**语境原文：** 定义

> Provides services to the presentation layer and to manage data exchange.

**语境原文来源：** Week2.pdf · PDF页49 / 幻灯片49

**语境来源：** Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页50 / 幻灯片50

**全部来源：** Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页50 / 幻灯片50

### Transport layer

**稳定ID：** csit985-w2-20fdbec64b16ea

**类别：** 专业英语

**中文解释：** 传输层；支持不同主机上的进程之间的逻辑通信；OSI表另列分段、传输与重组。第61页原句似缺少 between。

**简单英文（整理解释）：** A layer providing logical communication between processes on different hosts.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义，但原句有疑似笔误或缺词；见资料疑点

**资料原文：** 定义（疑似缺词）

> A transport-layer protocol provides for logical communication processes running on different hosts.

**原文来源：** Week2.pdf · PDF页61 / 幻灯片61

**资料原文：** 说明

> Defines services to segment, transfer, and reassemble the data for individual communications.

**原文来源：** Week2.pdf · PDF页49 / 幻灯片49（图表）

**语境：** Week2 · Transport layer

**语境英文：** A layer providing logical communication between processes on different hosts.

**语境中文：** 传输层；支持不同主机上的进程之间的逻辑通信；OSI表另列分段、传输与重组。第61页原句似缺少 between。

**语境依据：** 整理解释

**语境原文：** 定义（疑似缺词）

> A transport-layer protocol provides for logical communication processes running on different hosts.

**语境原文来源：** Week2.pdf · PDF页61 / 幻灯片61

**语境原文：** 说明

> Defines services to segment, transfer, and reassemble the data for individual communications.

**语境原文来源：** Week2.pdf · PDF页49 / 幻灯片49（图表）

**语境来源：** Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页61 / 幻灯片61；Week2.pdf · PDF页49 / 幻灯片49（图表）

**全部来源：** Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页61 / 幻灯片61；Week2.pdf · PDF页49 / 幻灯片49（图表）

### Internet / Network layer

**稳定ID：** csit985-w2-4348b42302557d

**类别：** 专业英语

**中文解释：** 互联网层／网络层；把包从发送者送到接收者，涉及转发与路由。

**简单英文（整理解释）：** A layer moving packets from sender to receiver, with forwarding and routing functions.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Primary role is to move packets from a sender to a receiver

**原文来源：** Week2.pdf · PDF页69 / 幻灯片69

**资料原文：** 名称或用语片段

> Internet

**原文来源：** Week2.pdf · PDF页48 / 幻灯片48

**语境：** Week2 · Internet / Network layer

**语境英文：** A layer moving packets from sender to receiver, with forwarding and routing functions.

**语境中文：** 互联网层／网络层；把包从发送者送到接收者，涉及转发与路由。

**语境依据：** 整理解释

**语境原文：** 定义

> Primary role is to move packets from a sender to a receiver

**语境原文来源：** Week2.pdf · PDF页69 / 幻灯片69

**语境原文：** 名称或用语片段

> Internet

**语境原文来源：** Week2.pdf · PDF页48 / 幻灯片48

**语境来源：** Week2.pdf · PDF页48 / 幻灯片48；Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页69 / 幻灯片69

**全部来源：** Week2.pdf · PDF页48 / 幻灯片48；Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页69 / 幻灯片69

### Network Access layer

**稳定ID：** csit985-w2-4a0ac48a10b28c

**类别：** 专业英语

**中文解释：** 网络接入层；TCP/IP本页中控制组成网络的硬件和介质，对应OSI的Data Link与Physical。

**简单英文（整理解释）：** The TCP/IP layer controlling network hardware and media in this model.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Controls the hardware devices and media that make up the network.

**原文来源：** Week2.pdf · PDF页48 / 幻灯片48

**资料原文：** 名称或用语片段

> network access layer

**原文来源：** Week2.pdf · PDF页50 / 幻灯片50

**资料原文：** 名称或用语片段

> Network Access Layer

**原文来源：** Week2.pdf · PDF页51 / 幻灯片51

**语境：** Week2 · Network Access layer

**语境英文：** The TCP/IP layer controlling network hardware and media in this model.

**语境中文：** 网络接入层；TCP/IP本页中控制组成网络的硬件和介质，对应OSI的Data Link与Physical。

**语境依据：** 整理解释

**语境原文：** 定义

> Controls the hardware devices and media that make up the network.

**语境原文来源：** Week2.pdf · PDF页48 / 幻灯片48

**语境原文：** 名称或用语片段

> network access layer

**语境原文来源：** Week2.pdf · PDF页50 / 幻灯片50

**语境原文：** 名称或用语片段

> Network Access Layer

**语境原文来源：** Week2.pdf · PDF页51 / 幻灯片51

**语境来源：** Week2.pdf · PDF页48 / 幻灯片48；Week2.pdf · PDF页50 / 幻灯片50；Week2.pdf · PDF页51 / 幻灯片51

**全部来源：** Week2.pdf · PDF页48 / 幻灯片48；Week2.pdf · PDF页50 / 幻灯片50；Week2.pdf · PDF页51 / 幻灯片51

### Data Link layer / link layer

**稳定ID：** csit985-w2-f3642a74617081

**类别：** 专业英语

**中文解释：** 数据链路层／链路层；OSI第2层，在相邻节点之间的链路上交换frames。

**简单英文（整理解释）：** OSI layer 2, exchanging frames over links between adjacent nodes.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Describes methods for exchanging data frames over a common media.

**原文来源：** Week2.pdf · PDF页49 / 幻灯片49

**资料原文：** 说明

> Links are communication channels connecting adjacent nodes

**原文来源：** Week2.pdf · PDF页87 / 幻灯片87

**资料原文：** 名称或用语片段

> Data Link layer

**原文来源：** Week2.pdf · PDF页88 / 幻灯片88

**语境：** Week2 · Data Link layer / link layer

**语境英文：** OSI layer 2, exchanging frames over links between adjacent nodes.

**语境中文：** 数据链路层／链路层；OSI第2层，在相邻节点之间的链路上交换frames。

**语境依据：** 整理解释

**语境原文：** 定义

> Describes methods for exchanging data frames over a common media.

**语境原文来源：** Week2.pdf · PDF页49 / 幻灯片49

**语境原文：** 说明

> Links are communication channels connecting adjacent nodes

**语境原文来源：** Week2.pdf · PDF页87 / 幻灯片87

**语境原文：** 名称或用语片段

> Data Link layer

**语境原文来源：** Week2.pdf · PDF页88 / 幻灯片88

**语境来源：** Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页87 / 幻灯片87；Week2.pdf · PDF页88 / 幻灯片88

**全部来源：** Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页87 / 幻灯片87；Week2.pdf · PDF页88 / 幻灯片88

### Physical layer

**稳定ID：** csit985-w2-6f2132df5b6959

**类别：** 专业英语

**中文解释：** 物理层；OSI第1层，建立和维持物理连接，通过实际介质传输bits或symbols。物理连接可以无线。

**简单英文（整理解释）：** OSI layer 1, dealing with physical connections and sending bits over the medium.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Describes the means to activate, maintain, and de-activate physical connections.

**原文来源：** Week2.pdf · PDF页49 / 幻灯片49（图表）

**资料原文：** 名称或用语片段

> Physical layer

**原文来源：** Week2.pdf · PDF页89 / 幻灯片89

**资料原文：** 教师用语（TXT原片段）

> transmits the bits or symbols

**原文来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符3064起；搜索“transmits the bits or symbols”

**语境：** Week2 · Physical layer

**语境英文：** OSI layer 1, dealing with physical connections and sending bits over the medium.

**语境中文：** 物理层；OSI第1层，建立和维持物理连接，通过实际介质传输bits或symbols。物理连接可以无线。

**语境依据：** 整理解释

**语境原文：** 定义

> Describes the means to activate, maintain, and de-activate physical connections.

**语境原文来源：** Week2.pdf · PDF页49 / 幻灯片49（图表）

**语境原文：** 名称或用语片段

> Physical layer

**语境原文来源：** Week2.pdf · PDF页89 / 幻灯片89

**语境原文：** 教师用语（TXT原片段）

> transmits the bits or symbols

**语境原文来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符3064起；搜索“transmits the bits or symbols”

**语境来源：** Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页89 / 幻灯片89；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符3064起；搜索“transmits the bits or symbols”；Week2.pdf · PDF页49 / 幻灯片49（图表）

**全部来源：** Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页89 / 幻灯片89；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符3064起；搜索“transmits the bits or symbols”；Week2.pdf · PDF页49 / 幻灯片49（图表）

### PDU (Protocol Data Unit)

**稳定ID：** csit985-w2-a93ec03edca239

**类别：** 专业英语

**中文解释：** 协议数据单元；不同层用不同名称：Data、Segment/Datagram、Packet、Frame、Bit/Symbol。

**简单英文（整理解释）：** The name for a unit of data at a protocol layer.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> PDU

**原文来源：** Week2.pdf · PDF页52 / 幻灯片52

**资料原文：** 教师用语（TXT原片段）

> protocol data

**原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符4911起；搜索“protocol data”

**语境：** Week2 · PDU (Protocol Data Unit)

**语境英文：** The name for a unit of data at a protocol layer.

**语境中文：** 协议数据单元；不同层用不同名称：Data、Segment/Datagram、Packet、Frame、Bit/Symbol。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> PDU

**语境原文来源：** Week2.pdf · PDF页52 / 幻灯片52

**语境原文：** 教师用语（TXT原片段）

> protocol data

**语境原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符4911起；搜索“protocol data”

**语境来源：** Week2.pdf · PDF页52 / 幻灯片52；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符4911起；搜索“protocol data”

**全部来源：** Week2.pdf · PDF页52 / 幻灯片52；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符4911起；搜索“protocol data”

### Message / data

**稳定ID：** csit985-w2-388ecfd48e8578

**类别：** 专业英语

**中文解释：** 消息／数据；Application层的数据单元，表52还将Presentation和Session标为Data。

**简单英文（整理解释）：** Data-unit labels for the upper layers in this lecture.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Data

**原文来源：** Week2.pdf · PDF页52 / 幻灯片52

**资料原文：** 名称或用语片段

> message

**原文来源：** Week2.pdf · PDF页55 / 幻灯片55

**语境：** Week2 · Message / data

**语境英文：** Data-unit labels for the upper layers in this lecture.

**语境中文：** 消息／数据；Application层的数据单元，表52还将Presentation和Session标为Data。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> Data

**语境原文来源：** Week2.pdf · PDF页52 / 幻灯片52

**语境原文：** 名称或用语片段

> message

**语境原文来源：** Week2.pdf · PDF页55 / 幻灯片55

**语境来源：** Week2.pdf · PDF页52 / 幻灯片52；Week2.pdf · PDF页55 / 幻灯片55

**全部来源：** Week2.pdf · PDF页52 / 幻灯片52；Week2.pdf · PDF页55 / 幻灯片55

### Segment / datagram

**稳定ID：** csit985-w2-c0171833abb26e

**类别：** 专业英语

**中文解释：** 段／数据报；表52传输层两种名称，录音说明TCP用segment、UDP用datagram；图53的network层也写datagram，需按层次辨认。

**简单英文（整理解释）：** TCP uses segments and UDP uses datagrams; the network-layer figure also uses the word datagram.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Datagram

**原文来源：** Week2.pdf · PDF页52 / 幻灯片52

**资料原文：** 图表标签（视觉核对）

> Datagram

**原文来源：** Week2.pdf · PDF页53 / 幻灯片53（图表）

**资料原文：** 教师用语（TXT原片段）

> in TCP we call

**原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符4883起；搜索“in TCP we call”

**语境：** Week2 · Segment / datagram

**语境英文：** TCP uses segments and UDP uses datagrams; the network-layer figure also uses the word datagram.

**语境中文：** 段／数据报；表52传输层两种名称，录音说明TCP用segment、UDP用datagram；图53的network层也写datagram，需按层次辨认。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> Datagram

**语境原文来源：** Week2.pdf · PDF页52 / 幻灯片52

**语境原文：** 图表标签（视觉核对）

> Datagram

**语境原文来源：** Week2.pdf · PDF页53 / 幻灯片53（图表）

**语境原文：** 教师用语（TXT原片段）

> in TCP we call

**语境原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符4883起；搜索“in TCP we call”

**语境来源：** Week2.pdf · PDF页52 / 幻灯片52；Week2.pdf · PDF页53 / 幻灯片53（图表）；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符4883起；搜索“in TCP we call”

**全部来源：** Week2.pdf · PDF页52 / 幻灯片52；Week2.pdf · PDF页53 / 幻灯片53（图表）；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符4883起；搜索“in TCP we call”

### Packet / frame / bit / symbol

**稳定ID：** csit985-w2-e06d37b384bfa3

**类别：** 专业英语

**中文解释：** 包／帧／比特／符号；表52分别对应Network、Data Link、Physical。不要把不同层名称混用。

**简单英文（整理解释）：** Data units for network, data link, and physical layers in the table.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Packet

**原文来源：** Week2.pdf · PDF页52 / 幻灯片52

**资料原文：** 名称或用语片段

> packet

**原文来源：** Week2.pdf · PDF页69 / 幻灯片69

**资料原文：** 名称或用语片段

> frame

**原文来源：** Week2.pdf · PDF页87 / 幻灯片87

**资料原文：** 名称或用语片段

> bit

**原文来源：** Week2.pdf · PDF页89 / 幻灯片89

**语境：** Week2 · Packet / frame / bit / symbol

**语境英文：** Data units for network, data link, and physical layers in the table.

**语境中文：** 包／帧／比特／符号；表52分别对应Network、Data Link、Physical。不要把不同层名称混用。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> Packet

**语境原文来源：** Week2.pdf · PDF页52 / 幻灯片52

**语境原文：** 名称或用语片段

> packet

**语境原文来源：** Week2.pdf · PDF页69 / 幻灯片69

**语境原文：** 名称或用语片段

> frame

**语境原文来源：** Week2.pdf · PDF页87 / 幻灯片87

**语境原文：** 名称或用语片段

> bit

**语境原文来源：** Week2.pdf · PDF页89 / 幻灯片89

**语境来源：** Week2.pdf · PDF页52 / 幻灯片52；Week2.pdf · PDF页69 / 幻灯片69；Week2.pdf · PDF页87 / 幻灯片87；Week2.pdf · PDF页89 / 幻灯片89

**全部来源：** Week2.pdf · PDF页52 / 幻灯片52；Week2.pdf · PDF页69 / 幻灯片69；Week2.pdf · PDF页87 / 幻灯片87；Week2.pdf · PDF页89 / 幻灯片89

### Header / M / Ht / Hn / Hl

**稳定ID：** csit985-w2-c9052549fecdb5

**类别：** 专业英语

**中文解释：** 头部／应用数据M／传输层、网络层、链路层头部；图53用下标表示各层添加的控制信息。

**简单英文（整理解释）：** The figure shows application data M with headers for transport, network, and link layers.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图表标签（视觉核对）

> M

**原文来源：** Week2.pdf · PDF页53 / 幻灯片53（图表）

**资料原文：** 教师用语（TXT原片段）

> this HT

**原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符1370起；搜索“this HT”

**语境：** Week2 · Header / M / Ht / Hn / Hl

**语境英文：** The figure shows application data M with headers for transport, network, and link layers.

**语境中文：** 头部／应用数据M／传输层、网络层、链路层头部；图53用下标表示各层添加的控制信息。

**语境依据：** 根据资料整理

**语境原文：** 图表标签（视觉核对）

> M

**语境原文来源：** Week2.pdf · PDF页53 / 幻灯片53（图表）

**语境原文：** 教师用语（TXT原片段）

> this HT

**语境原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符1370起；搜索“this HT”

**语境来源：** Week2.pdf · PDF页53 / 幻灯片53（图表）；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符1370起；搜索“this HT”

**全部来源：** Week2.pdf · PDF页53 / 幻灯片53（图表）；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符1370起；搜索“this HT”

### Process / sending process / receiving process

**稳定ID：** csit985-w2-ff4bb2ddcce089

**类别：** 专业英语

**中文解释：** 进程／发送进程／接收进程；process 在这里是端系统中正在运行的程序，不是一般工作流程。

**简单英文（整理解释）：** A program running in an end system; processes send or receive messages.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> A process can be thought of as a program that is running within an end system

**原文来源：** Week2.pdf · PDF页55 / 幻灯片55

**语境：** Week2 · Process / sending process / receiving process

**语境英文：** A program running in an end system; processes send or receive messages.

**语境中文：** 进程／发送进程／接收进程；process 在这里是端系统中正在运行的程序，不是一般工作流程。

**语境依据：** 整理解释

**语境原文：** 定义

> A process can be thought of as a program that is running within an end system

**语境原文来源：** Week2.pdf · PDF页55 / 幻灯片55

**语境来源：** Week2.pdf · PDF页55 / 幻灯片55

**全部来源：** Week2.pdf · PDF页55 / 幻灯片55

### Socket / API (Application Programming Interface)

**稳定ID：** csit985-w2-1f0bcf8c5bea6b

**类别：** 专业英语

**中文解释：** 套接字／应用程序编程接口；进程经此虚拟接口向网络发送或从网络接收消息。图57区分应用开发者与操作系统的控制范围。

**简单英文（整理解释）：** A virtual interface through which a process sends and receives network messages.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Socket is a virtual interface enabling the process of sending messages into and receiving messages from the network

**原文来源：** Week2.pdf · PDF页56 / 幻灯片56

**资料原文：** 图表标签（视觉核对）

> Socket

**原文来源：** Week2.pdf · PDF页57 / 幻灯片57（图表）

**语境：** Week2 · Socket / API (Application Programming Interface)

**语境英文：** A virtual interface through which a process sends and receives network messages.

**语境中文：** 套接字／应用程序编程接口；进程经此虚拟接口向网络发送或从网络接收消息。图57区分应用开发者与操作系统的控制范围。

**语境依据：** 整理解释

**语境原文：** 定义

> Socket is a virtual interface enabling the process of sending messages into and receiving messages from the network

**语境原文来源：** Week2.pdf · PDF页56 / 幻灯片56

**语境原文：** 图表标签（视觉核对）

> Socket

**语境原文来源：** Week2.pdf · PDF页57 / 幻灯片57（图表）

**语境来源：** Week2.pdf · PDF页56 / 幻灯片56；Week2.pdf · PDF页57 / 幻灯片57（图表）

**全部来源：** Week2.pdf · PDF页56 / 幻灯片56；Week2.pdf · PDF页57 / 幻灯片57（图表）

### Syntax / semantics / message fields

**稳定ID：** csit985-w2-2de23e21d1f1d4

**类别：** 专业英语

**中文解释：** 语法结构／语义／消息字段；协议规定字段怎样划分、含义是什么，以及何时怎样收发消息。

**简单英文（整理解释）：** The structure, meaning, and parts of a message defined by a protocol.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Semantics

**原文来源：** Week2.pdf · PDF页58 / 幻灯片58

**语境：** Week2 · Syntax / semantics / message fields

**语境英文：** The structure, meaning, and parts of a message defined by a protocol.

**语境中文：** 语法结构／语义／消息字段；协议规定字段怎样划分、含义是什么，以及何时怎样收发消息。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> Semantics

**语境原文来源：** Week2.pdf · PDF页58 / 幻灯片58

**语境来源：** Week2.pdf · PDF页58 / 幻灯片58

**全部来源：** Week2.pdf · PDF页58 / 幻灯片58

### DNS (Domain Name Service)

**稳定ID：** csit985-w2-470cf22d14567f

**类别：** 专业英语

**中文解释：** DNS；全称按第59页保留为Domain Name Service。图65列Name translation，录音讲域名解析。两种措辞并列，不私自改写全称。

**简单英文（整理解释）：** An application-layer service associated with domain names and name translation in these sources.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 课件全称（措辞待核实）

> DNS (Domain Name Service)

**原文来源：** Week2.pdf · PDF页59 / 幻灯片59

**资料原文：** 图表标签（视觉核对）

> DNS

**原文来源：** Week2.pdf · PDF页65 / 幻灯片65（图表）

**资料原文：** 教师用语（TXT原片段）

> domain name, uh, resolution

**原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符4400起；搜索“domain name, uh, resolution”

**语境：** Week2 · DNS (Domain Name Service)

**语境英文：** An application-layer service associated with domain names and name translation in these sources.

**语境中文：** DNS；全称按第59页保留为Domain Name Service。图65列Name translation，录音讲域名解析。两种措辞并列，不私自改写全称。

**语境依据：** 根据资料整理

**语境原文：** 课件全称（措辞待核实）

> DNS (Domain Name Service)

**语境原文来源：** Week2.pdf · PDF页59 / 幻灯片59

**语境原文：** 图表标签（视觉核对）

> DNS

**语境原文来源：** Week2.pdf · PDF页65 / 幻灯片65（图表）

**语境原文：** 教师用语（TXT原片段）

> domain name, uh, resolution

**语境原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符4400起；搜索“domain name, uh, resolution”

**语境来源：** Week2.pdf · PDF页59 / 幻灯片59；Week2.pdf · PDF页65 / 幻灯片65（图表）；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符4400起；搜索“domain name, uh, resolution”

**全部来源：** Week2.pdf · PDF页59 / 幻灯片59；Week2.pdf · PDF页65 / 幻灯片65（图表）；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符4400起；搜索“domain name, uh, resolution”

### HTTP / HTTPS

**稳定ID：** csit985-w2-fdb712a172a22c

**类别：** 专业英语

**中文解释：** 超文本传输协议／安全超文本传输协议；web服务协议，端口表给TCP 80／443；TXT把HTTP端口写成880，疑似转写错误，以PDF为准。

**简单英文（整理解释）：** Application-layer web protocols listed with TCP ports 80 and 443.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 课件全称

> HTTP (Hypertext Transfer Protocol) and HTTPS (Hypertext Transfer Protocol Secure)

**原文来源：** Week2.pdf · PDF页59 / 幻灯片59

**资料原文：** 名称或用语片段

> HTTP

**原文来源：** Week2.pdf · PDF页60 / 幻灯片60

**资料原文：** 名称或用语片段

> HTTPS

**原文来源：** Week2.pdf · PDF页67 / 幻灯片67

**资料原文：** 教师用语（TXT原片段）

> HTTP, uh, this protocol normally use port 880

**原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L26，本行字符1646起；搜索“HTTP, uh, this protocol normally use port 880”

**语境：** Week2 · HTTP / HTTPS

**语境英文：** Application-layer web protocols listed with TCP ports 80 and 443.

**语境中文：** 超文本传输协议／安全超文本传输协议；web服务协议，端口表给TCP 80／443；TXT把HTTP端口写成880，疑似转写错误，以PDF为准。

**语境依据：** 根据资料整理

**语境原文：** 课件全称

> HTTP (Hypertext Transfer Protocol) and HTTPS (Hypertext Transfer Protocol Secure)

**语境原文来源：** Week2.pdf · PDF页59 / 幻灯片59

**语境原文：** 名称或用语片段

> HTTP

**语境原文来源：** Week2.pdf · PDF页60 / 幻灯片60

**语境原文：** 名称或用语片段

> HTTPS

**语境原文来源：** Week2.pdf · PDF页67 / 幻灯片67

**语境原文：** 教师用语（TXT原片段）

> HTTP, uh, this protocol normally use port 880

**语境原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L26，本行字符1646起；搜索“HTTP, uh, this protocol normally use port 880”

**语境来源：** Week2.pdf · PDF页59 / 幻灯片59；Week2.pdf · PDF页60 / 幻灯片60；Week2.pdf · PDF页67 / 幻灯片67；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L26，本行字符1646起；搜索“HTTP, uh, this protocol normally use port 880”

**全部来源：** Week2.pdf · PDF页59 / 幻灯片59；Week2.pdf · PDF页60 / 幻灯片60；Week2.pdf · PDF页67 / 幻灯片67；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L26，本行字符1646起；搜索“HTTP, uh, this protocol normally use port 880”

### SMTP / POP / IMAP

**稳定ID：** csit985-w2-7ec462d53ef914

**类别：** 专业英语

**中文解释：** 简单邮件传输协议／邮局协议／互联网消息访问协议；课件列为邮件协议。第67页另外列POP3 email端口TCP 110。

**简单英文（整理解释）：** Email protocols named on the slides; POP3 is listed with TCP port 110.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 课件全称

> SMTP (Simple Mail Transfer Protocol)

**原文来源：** Week2.pdf · PDF页59 / 幻灯片59

**资料原文：** 课件全称

> POP (Post Office Protocol) & IMAP (Internet Message Access Protocol)

**原文来源：** Week2.pdf · PDF页59 / 幻灯片59

**资料原文：** 名称或用语片段

> POP

**原文来源：** Week2.pdf · PDF页67 / 幻灯片67

**资料原文：** 教师用语（TXT原片段）

> Email sending

**原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符4458起；搜索“Email sending”

**语境：** Week2 · SMTP / POP / IMAP

**语境英文：** Email protocols named on the slides; POP3 is listed with TCP port 110.

**语境中文：** 简单邮件传输协议／邮局协议／互联网消息访问协议；课件列为邮件协议。第67页另外列POP3 email端口TCP 110。

**语境依据：** 根据资料整理

**语境原文：** 课件全称

> SMTP (Simple Mail Transfer Protocol)

**语境原文来源：** Week2.pdf · PDF页59 / 幻灯片59

**语境原文：** 课件全称

> POP (Post Office Protocol) & IMAP (Internet Message Access Protocol)

**语境原文来源：** Week2.pdf · PDF页59 / 幻灯片59

**语境原文：** 名称或用语片段

> POP

**语境原文来源：** Week2.pdf · PDF页67 / 幻灯片67

**语境原文：** 教师用语（TXT原片段）

> Email sending

**语境原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符4458起；搜索“Email sending”

**语境来源：** Week2.pdf · PDF页59 / 幻灯片59；Week2.pdf · PDF页67 / 幻灯片67；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符4458起；搜索“Email sending”

**全部来源：** Week2.pdf · PDF页59 / 幻灯片59；Week2.pdf · PDF页67 / 幻灯片67；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符4458起；搜索“Email sending”

### Web application / application-layer protocol

**稳定ID：** csit985-w2-efd2a565402ad4

**类别：** 专业英语

**中文解释：** Web应用／应用层协议；Web应用还包含文档格式、浏览器和服务器，不能把整个应用等同HTTP。

**简单英文（整理解释）：** A web application includes document formats, browsers, servers, and a protocol such as HTTP.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> application-layer protocol

**原文来源：** Week2.pdf · PDF页60 / 幻灯片60

**语境：** Week2 · Web application / application-layer protocol

**语境英文：** A web application includes document formats, browsers, servers, and a protocol such as HTTP.

**语境中文：** Web应用／应用层协议；Web应用还包含文档格式、浏览器和服务器，不能把整个应用等同HTTP。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> application-layer protocol

**语境原文来源：** Week2.pdf · PDF页60 / 幻灯片60

**语境来源：** Week2.pdf · PDF页60 / 幻灯片60

**全部来源：** Week2.pdf · PDF页60 / 幻灯片60

### HTML

**稳定ID：** csit985-w2-4a1049d7ac7b00

**类别：** 专业英语

**中文解释：** 文档格式标准的示例；资料没有展开缩写或说明标签语法。

**简单英文（整理解释）：** A document-format standard named as a web application component.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> HTML

**原文来源：** Week2.pdf · PDF页60 / 幻灯片60

**语境：** Week2 · HTML

**语境英文：** A document-format standard named as a web application component.

**语境中文：** 文档格式标准的示例；资料没有展开缩写或说明标签语法。

**语境依据：** 资料未定义

**语境原文：** 名称或用语片段

> HTML

**语境原文来源：** Week2.pdf · PDF页60 / 幻灯片60

**语境来源：** Week2.pdf · PDF页60 / 幻灯片60

**全部来源：** Week2.pdf · PDF页60 / 幻灯片60

### UDP (User Datagram Protocol)

**稳定ID：** csit985-w2-3247ae604a071a

**类别：** 专业英语

**中文解释：** 用户数据报协议；无连接，不保证到达且完整，不提供其自身的拥塞控制，发送前不进行TCP式握手。

**简单英文（整理解释）：** A connectionless protocol that does not guarantee intact delivery or provide its own congestion control.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 说明

> Provides unreliable and connectionless services

**原文来源：** Week2.pdf · PDF页62 / 幻灯片62

**资料原文：** 说明

> Does not guarantee that data sent by one process will arrive intact to the destination process

**原文来源：** Week2.pdf · PDF页62 / 幻灯片62

**资料原文：** 说明

> Dose not support congestion control mechanism

**原文来源：** Week2.pdf · PDF页62 / 幻灯片62

**资料原文：** 名称或用语片段

> UDP

**原文来源：** Week2.pdf · PDF页61 / 幻灯片61

**资料原文：** 教师用语（TXT原片段）

> UDP is

**原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符5461起；搜索“UDP is”

**语境：** Week2 · UDP (User Datagram Protocol)

**语境英文：** A connectionless protocol that does not guarantee intact delivery or provide its own congestion control.

**语境中文：** 用户数据报协议；无连接，不保证到达且完整，不提供其自身的拥塞控制，发送前不进行TCP式握手。

**语境依据：** 根据资料整理

**语境原文：** 说明

> Provides unreliable and connectionless services

**语境原文来源：** Week2.pdf · PDF页62 / 幻灯片62

**语境原文：** 说明

> Does not guarantee that data sent by one process will arrive intact to the destination process

**语境原文来源：** Week2.pdf · PDF页62 / 幻灯片62

**语境原文：** 说明

> Dose not support congestion control mechanism

**语境原文来源：** Week2.pdf · PDF页62 / 幻灯片62

**语境原文：** 名称或用语片段

> UDP

**语境原文来源：** Week2.pdf · PDF页61 / 幻灯片61

**语境原文：** 教师用语（TXT原片段）

> UDP is

**语境原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符5461起；搜索“UDP is”

**语境来源：** Week2.pdf · PDF页61 / 幻灯片61；Week2.pdf · PDF页62 / 幻灯片62；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符5461起；搜索“UDP is”

**全部来源：** Week2.pdf · PDF页61 / 幻灯片61；Week2.pdf · PDF页62 / 幻灯片62；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符5461起；搜索“UDP is”

### TCP (Transmission Control Protocol)

**稳定ID：** csit985-w2-8aa401c2a87cf9

**类别：** 专业英语

**中文解释：** 传输控制协议；可靠、面向连接；用流量控制、序号、确认和计时器，实现正确、按序传输，并提供拥塞控制。

**简单英文（整理解释）：** A reliable, connection-oriented protocol using control mechanisms for correct, ordered delivery.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 说明

> Provides reliable and connection-oriented services

**原文来源：** Week2.pdf · PDF页63 / 幻灯片63

**资料原文：** 说明

> Uses flow control, sequence numbers, acknowledgements, and timers

**原文来源：** Week2.pdf · PDF页63 / 幻灯片63

**资料原文：** 名称或用语片段

> TCP

**原文来源：** Week2.pdf · PDF页61 / 幻灯片61

**语境：** Week2 · TCP (Transmission Control Protocol)

**语境英文：** A reliable, connection-oriented protocol using control mechanisms for correct, ordered delivery.

**语境中文：** 传输控制协议；可靠、面向连接；用流量控制、序号、确认和计时器，实现正确、按序传输，并提供拥塞控制。

**语境依据：** 根据资料整理

**语境原文：** 说明

> Provides reliable and connection-oriented services

**语境原文来源：** Week2.pdf · PDF页63 / 幻灯片63

**语境原文：** 说明

> Uses flow control, sequence numbers, acknowledgements, and timers

**语境原文来源：** Week2.pdf · PDF页63 / 幻灯片63

**语境原文：** 名称或用语片段

> TCP

**语境原文来源：** Week2.pdf · PDF页61 / 幻灯片61

**语境来源：** Week2.pdf · PDF页61 / 幻灯片61；Week2.pdf · PDF页63 / 幻灯片63

**全部来源：** Week2.pdf · PDF页61 / 幻灯片61；Week2.pdf · PDF页63 / 幻灯片63

### Connectionless / connection-oriented / handshaking

**稳定ID：** csit985-w2-ea91755d1ee5c0

**类别：** 专业英语

**中文解释：** 无连接／面向连接／握手；这里用于对比UDP与TCP的服务及发送前的准备。

**简单英文（整理解释）：** Service types and connection setup terms used to compare UDP and TCP.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> connectionless

**原文来源：** Week2.pdf · PDF页62 / 幻灯片62

**资料原文：** 名称或用语片段

> connection-oriented

**原文来源：** Week2.pdf · PDF页63 / 幻灯片63

**语境：** Week2 · Connectionless / connection-oriented / handshaking

**语境英文：** Service types and connection setup terms used to compare UDP and TCP.

**语境中文：** 无连接／面向连接／握手；这里用于对比UDP与TCP的服务及发送前的准备。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> connectionless

**语境原文来源：** Week2.pdf · PDF页62 / 幻灯片62

**语境原文：** 名称或用语片段

> connection-oriented

**语境原文来源：** Week2.pdf · PDF页63 / 幻灯片63

**语境来源：** Week2.pdf · PDF页62 / 幻灯片62；Week2.pdf · PDF页63 / 幻灯片63

**全部来源：** Week2.pdf · PDF页62 / 幻灯片62；Week2.pdf · PDF页63 / 幻灯片63

### Sequence numbers / acknowledgements / timers

**稳定ID：** csit985-w2-0a3e111ff0230f

**类别：** 专业英语

**中文解释：** 序列号／确认／计时器；TCP使用的机制名称，当前资料没有逐一解释算法。

**简单英文（整理解释）：** Mechanisms named as part of TCP; detailed algorithms are not given.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> sequence numbers

**原文来源：** Week2.pdf · PDF页63 / 幻灯片63

**语境：** Week2 · Sequence numbers / acknowledgements / timers

**语境英文：** Mechanisms named as part of TCP; detailed algorithms are not given.

**语境中文：** 序列号／确认／计时器；TCP使用的机制名称，当前资料没有逐一解释算法。

**语境依据：** 资料未定义

**语境原文：** 名称或用语片段

> sequence numbers

**语境原文来源：** Week2.pdf · PDF页63 / 幻灯片63

**语境来源：** Week2.pdf · PDF页63 / 幻灯片63；Week2.pdf · PDF页39 / 幻灯片39

**全部来源：** Week2.pdf · PDF页63 / 幻灯片63；Week2.pdf · PDF页39 / 幻灯片39

### Congestion control

**稳定ID：** csit985-w2-b97aa016226989

**类别：** 专业英语

**中文解释：** 拥塞控制；课件对比TCP提供、UDP不提供。不要与Flow Control完全等同。

**简单英文（整理解释）：** A control mechanism provided by TCP and not by UDP in this lecture.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> congestion control

**原文来源：** Week2.pdf · PDF页62 / 幻灯片62

**资料原文：** 名称或用语片段

> congestion control

**原文来源：** Week2.pdf · PDF页63 / 幻灯片63

**语境：** Week2 · Congestion control

**语境英文：** A control mechanism provided by TCP and not by UDP in this lecture.

**语境中文：** 拥塞控制；课件对比TCP提供、UDP不提供。不要与Flow Control完全等同。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> congestion control

**语境原文来源：** Week2.pdf · PDF页62 / 幻灯片62

**语境原文：** 名称或用语片段

> congestion control

**语境原文来源：** Week2.pdf · PDF页63 / 幻灯片63

**语境来源：** Week2.pdf · PDF页62 / 幻灯片62；Week2.pdf · PDF页63 / 幻灯片63

**全部来源：** Week2.pdf · PDF页62 / 幻灯片62；Week2.pdf · PDF页63 / 幻灯片63

### Demultiplexing

**稳定ID：** csit985-w2-6768e5ea74353b

**类别：** 专业英语

**中文解释：** 分用；将收到的传输层segment交付给正确socket。录音第一次把名称写成multiplexing，按PDF保留差异。

**简单英文（整理解释）：** Deliver a received transport-layer segment to the correct socket.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Delivering the data in a transport-layer segment to the correct socket is called demultiplexing.

**原文来源：** Week2.pdf · PDF页66 / 幻灯片66

**资料原文：** 教师用语（TXT原片段）

> multiplexing is the delivery of a received segments

**原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L26，本行字符1030起；搜索“multiplexing is the delivery of a received segments”

**语境：** Week2 · Demultiplexing

**语境英文：** Deliver a received transport-layer segment to the correct socket.

**语境中文：** 分用；将收到的传输层segment交付给正确socket。录音第一次把名称写成multiplexing，按PDF保留差异。

**语境依据：** 整理解释

**语境原文：** 定义

> Delivering the data in a transport-layer segment to the correct socket is called demultiplexing.

**语境原文来源：** Week2.pdf · PDF页66 / 幻灯片66

**语境原文：** 教师用语（TXT原片段）

> multiplexing is the delivery of a received segments

**语境原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L26，本行字符1030起；搜索“multiplexing is the delivery of a received segments”

**语境来源：** Week2.pdf · PDF页66 / 幻灯片66；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L26，本行字符1030起；搜索“multiplexing is the delivery of a received segments”

**全部来源：** Week2.pdf · PDF页66 / 幻灯片66；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L26，本行字符1030起；搜索“multiplexing is the delivery of a received segments”

### Multiplexing

**稳定ID：** csit985-w2-b3d3c7109e2160

**类别：** 专业英语

**中文解释：** 复用；从不同socket收集数据，加头部形成segments，再交给network层。

**简单英文（整理解释）：** Gather data from different sockets, add headers, create segments, and pass them to the network layer.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> The job of gathering data chunks at the source host from different sockets, encapsulating each data chunk with header information (that will later be used in demultiplexing) to create segments, and passing the segments to the network layer is called multiplexing.

**原文来源：** Week2.pdf · PDF页66 / 幻灯片66

**资料原文：** 教师用语（TXT原片段）

> gathering the data from different sockets

**原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L26，本行字符1152起；搜索“gathering the data from different sockets”

**语境：** Week2 · Multiplexing

**语境英文：** Gather data from different sockets, add headers, create segments, and pass them to the network layer.

**语境中文：** 复用；从不同socket收集数据，加头部形成segments，再交给network层。

**语境依据：** 整理解释

**语境原文：** 定义

> The job of gathering data chunks at the source host from different sockets, encapsulating each data chunk with header information (that will later be used in demultiplexing) to create segments, and passing the segments to the network layer is called multiplexing.

**语境原文来源：** Week2.pdf · PDF页66 / 幻灯片66

**语境原文：** 教师用语（TXT原片段）

> gathering the data from different sockets

**语境原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L26，本行字符1152起；搜索“gathering the data from different sockets”

**语境来源：** Week2.pdf · PDF页66 / 幻灯片66；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L26，本行字符1152起；搜索“gathering the data from different sockets”

**全部来源：** Week2.pdf · PDF页66 / 幻灯片66；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L26，本行字符1152起；搜索“gathering the data from different sockets”

### Socket identifier / source and destination port number

**稳定ID：** csit985-w2-27d7f4b39928c4

**类别：** 专业英语

**中文解释：** 套接字标识／源和目的端口号；用于分用和复用，端口号是16位，范围0–65535。

**简单英文（整理解释）：** Information used for multiplexing and demultiplexing; port numbers are 16-bit values.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 数量限制

> 16-bit number, ranging from 0-65535

**原文来源：** Week2.pdf · PDF页67 / 幻灯片67

**资料原文：** 名称或用语片段

> Source and Destination Port number

**原文来源：** Week2.pdf · PDF页66 / 幻灯片66

**语境：** Week2 · Socket identifier / source and destination port number

**语境英文：** Information used for multiplexing and demultiplexing; port numbers are 16-bit values.

**语境中文：** 套接字标识／源和目的端口号；用于分用和复用，端口号是16位，范围0–65535。

**语境依据：** 根据资料整理

**语境原文：** 数量限制

> 16-bit number, ranging from 0-65535

**语境原文来源：** Week2.pdf · PDF页67 / 幻灯片67

**语境原文：** 名称或用语片段

> Source and Destination Port number

**语境原文来源：** Week2.pdf · PDF页66 / 幻灯片66

**语境来源：** Week2.pdf · PDF页66 / 幻灯片66；Week2.pdf · PDF页67 / 幻灯片67

**全部来源：** Week2.pdf · PDF页66 / 幻灯片66；Week2.pdf · PDF页67 / 幻灯片67

### Well-known / registered / private port numbers

**稳定ID：** csit985-w2-196e11f64d3b30

**类别：** 专业英语

**中文解释：** 熟知／注册／私有端口号；课件范围分别为0–1023、1024–49151、49152–65535。名称按课件，不扩展标准细分。

**简单英文（整理解释）：** Port ranges listed in the lecture: 0–1023, 1024–49151, and 49152–65535.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 数量限制

> Registered port number ranging from 1024 – 49151

**原文来源：** Week2.pdf · PDF页67 / 幻灯片67

**资料原文：** 数量限制

> Remaining port numbers are private ones (49152 - 65535)

**原文来源：** Week2.pdf · PDF页67 / 幻灯片67

**资料原文：** 数量限制

> Well-known port number ranging from 0-1023

**原文来源：** Week2.pdf · PDF页67 / 幻灯片67

**语境：** Week2 · Well-known / registered / private port numbers

**语境英文：** Port ranges listed in the lecture: 0–1023, 1024–49151, and 49152–65535.

**语境中文：** 熟知／注册／私有端口号；课件范围分别为0–1023、1024–49151、49152–65535。名称按课件，不扩展标准细分。

**语境依据：** 根据资料整理

**语境原文：** 数量限制

> Registered port number ranging from 1024 – 49151

**语境原文来源：** Week2.pdf · PDF页67 / 幻灯片67

**语境原文：** 数量限制

> Remaining port numbers are private ones (49152 - 65535)

**语境原文来源：** Week2.pdf · PDF页67 / 幻灯片67

**语境原文：** 数量限制

> Well-known port number ranging from 0-1023

**语境原文来源：** Week2.pdf · PDF页67 / 幻灯片67

**语境来源：** Week2.pdf · PDF页67 / 幻灯片67

**全部来源：** Week2.pdf · PDF页67 / 幻灯片67

### Throughput / loss-tolerant / time-sensitive / elastic

**稳定ID：** csit985-w2-95cb877f835bec

**类别：** 专业英语

**中文解释：** 吞吐量／可容忍丢失的／时间敏感的／弹性的；图64是应用需求表，Elastic未给正式定义或精确阈值。

**简单英文（整理解释）：** Labels for application requirements in the figure; elastic is not formally defined.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图表标签（视觉核对）

> Throughput

**原文来源：** Week2.pdf · PDF页64 / 幻灯片64（图表）

**资料原文：** 图表标签（视觉核对）

> Loss-tolerant

**原文来源：** Week2.pdf · PDF页64 / 幻灯片64（图表）

**资料原文：** 图表标签（视觉核对）

> Time-Sensitive

**原文来源：** Week2.pdf · PDF页64 / 幻灯片64（图表）

**资料原文：** 图表标签（视觉核对）

> Elastic

**原文来源：** Week2.pdf · PDF页64 / 幻灯片64（图表）

**语境：** Week2 · Throughput / loss-tolerant / time-sensitive / elastic

**语境英文：** Labels for application requirements in the figure; elastic is not formally defined.

**语境中文：** 吞吐量／可容忍丢失的／时间敏感的／弹性的；图64是应用需求表，Elastic未给正式定义或精确阈值。

**语境依据：** 根据资料整理

**语境原文：** 图表标签（视觉核对）

> Throughput

**语境原文来源：** Week2.pdf · PDF页64 / 幻灯片64（图表）

**语境原文：** 图表标签（视觉核对）

> Loss-tolerant

**语境原文来源：** Week2.pdf · PDF页64 / 幻灯片64（图表）

**语境原文：** 图表标签（视觉核对）

> Time-Sensitive

**语境原文来源：** Week2.pdf · PDF页64 / 幻灯片64（图表）

**语境原文：** 图表标签（视觉核对）

> Elastic

**语境原文来源：** Week2.pdf · PDF页64 / 幻灯片64（图表）

**语境来源：** Week2.pdf · PDF页64 / 幻灯片64（图表）

**全部来源：** Week2.pdf · PDF页64 / 幻灯片64（图表）

### Telnet / NFS / SNMP

**稳定ID：** csit985-w2-6216ecc5e48baa

**类别：** 专业英语

**中文解释：** 图65列：Telnet用于remote terminal access，NFS用于remote file server，SNMP用于network management。图示分别为TCP、typically UDP、typically UDP。

**简单英文（整理解释）：** Protocols named in the application/transport table; the word typically limits the UDP claims.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图表标签（视觉核对）

> Telnet

**原文来源：** Week2.pdf · PDF页65 / 幻灯片65（图表）

**资料原文：** 图表标签（视觉核对）

> NFS

**原文来源：** Week2.pdf · PDF页65 / 幻灯片65（图表）

**资料原文：** 图表标签（视觉核对）

> SNMP

**原文来源：** Week2.pdf · PDF页65 / 幻灯片65（图表）

**语境：** Week2 · Telnet / NFS / SNMP

**语境英文：** Protocols named in the application/transport table; the word typically limits the UDP claims.

**语境中文：** 图65列：Telnet用于remote terminal access，NFS用于remote file server，SNMP用于network management。图示分别为TCP、typically UDP、typically UDP。

**语境依据：** 根据资料整理

**语境原文：** 图表标签（视觉核对）

> Telnet

**语境原文来源：** Week2.pdf · PDF页65 / 幻灯片65（图表）

**语境原文：** 图表标签（视觉核对）

> NFS

**语境原文来源：** Week2.pdf · PDF页65 / 幻灯片65（图表）

**语境原文：** 图表标签（视觉核对）

> SNMP

**语境原文来源：** Week2.pdf · PDF页65 / 幻灯片65（图表）

**语境来源：** Week2.pdf · PDF页65 / 幻灯片65（图表）

**全部来源：** Week2.pdf · PDF页65 / 幻灯片65（图表）

### Forwarding / switching / data plane

**稳定ID：** csit985-w2-f67ec59111d4bb

**类别：** 专业英语

**中文解释：** 转发／交换／数据平面；本地动作，把包从输入接口送到输出接口。

**简单英文（整理解释）：** A local data-plane action moving a packet from an input interface to an output interface.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Forwarding/Switching in data plane : move a packet from an input link interface to an output link interface

**原文来源：** Week2.pdf · PDF页69 / 幻灯片69

**资料原文：** 图表标签（视觉核对）

> Data plane

**原文来源：** Week2.pdf · PDF页70 / 幻灯片70（图表）

**语境：** Week2 · Forwarding / switching / data plane

**语境英文：** A local data-plane action moving a packet from an input interface to an output interface.

**语境中文：** 转发／交换／数据平面；本地动作，把包从输入接口送到输出接口。

**语境依据：** 整理解释

**语境原文：** 定义

> Forwarding/Switching in data plane : move a packet from an input link interface to an output link interface

**语境原文来源：** Week2.pdf · PDF页69 / 幻灯片69

**语境原文：** 图表标签（视觉核对）

> Data plane

**语境原文来源：** Week2.pdf · PDF页70 / 幻灯片70（图表）

**语境来源：** Week2.pdf · PDF页69 / 幻灯片69；Week2.pdf · PDF页70 / 幻灯片70（图表）

**全部来源：** Week2.pdf · PDF页69 / 幻灯片69；Week2.pdf · PDF页70 / 幻灯片70（图表）

### Routing / control plane

**稳定ID：** csit985-w2-a3c7c8a012da8d

**类别：** 专业英语

**中文解释：** 路由／控制平面；决定端到端路径，而非每个包的本地输出动作。

**简单英文（整理解释）：** A control-plane function determining the end-to-end path.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Routing in control plane : determine an end-to-end route/path for forwarding a packet from source to destination

**原文来源：** Week2.pdf · PDF页69 / 幻灯片69

**资料原文：** 图表标签（视觉核对）

> Control plane

**原文来源：** Week2.pdf · PDF页70 / 幻灯片70（图表）

**语境：** Week2 · Routing / control plane

**语境英文：** A control-plane function determining the end-to-end path.

**语境中文：** 路由／控制平面；决定端到端路径，而非每个包的本地输出动作。

**语境依据：** 整理解释

**语境原文：** 定义

> Routing in control plane : determine an end-to-end route/path for forwarding a packet from source to destination

**语境原文来源：** Week2.pdf · PDF页69 / 幻灯片69

**语境原文：** 图表标签（视觉核对）

> Control plane

**语境原文来源：** Week2.pdf · PDF页70 / 幻灯片70（图表）

**语境来源：** Week2.pdf · PDF页69 / 幻灯片69；Week2.pdf · PDF页70 / 幻灯片70（图表）

**全部来源：** Week2.pdf · PDF页69 / 幻灯片69；Week2.pdf · PDF页70 / 幻灯片70（图表）

### Input ports / output ports

**稳定ID：** csit985-w2-a1058cffb9fb8e

**类别：** 专业英语

**中文解释：** 路由器输入／输出端口；输入端执行物理层与链路层功能，输出端存包并经出链路发送。不同于应用端口号。

**简单英文（整理解释）：** Router components handling incoming and outgoing links and their physical/link-layer work.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Output ports

**原文来源：** Week2.pdf · PDF页71 / 幻灯片71

**资料原文：** 名称或用语片段

> Input ports

**原文来源：** Week2.pdf · PDF页72 / 幻灯片72

**资料原文：** 名称或用语片段

> Output ports

**原文来源：** Week2.pdf · PDF页73 / 幻灯片73

**语境：** Week2 · Input ports / output ports

**语境英文：** Router components handling incoming and outgoing links and their physical/link-layer work.

**语境中文：** 路由器输入／输出端口；输入端执行物理层与链路层功能，输出端存包并经出链路发送。不同于应用端口号。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> Output ports

**语境原文来源：** Week2.pdf · PDF页71 / 幻灯片71

**语境原文：** 名称或用语片段

> Input ports

**语境原文来源：** Week2.pdf · PDF页72 / 幻灯片72

**语境原文：** 名称或用语片段

> Output ports

**语境原文来源：** Week2.pdf · PDF页73 / 幻灯片73

**语境来源：** Week2.pdf · PDF页71 / 幻灯片71；Week2.pdf · PDF页72 / 幻灯片72；Week2.pdf · PDF页73 / 幻灯片73

**全部来源：** Week2.pdf · PDF页71 / 幻灯片71；Week2.pdf · PDF页72 / 幻灯片72；Week2.pdf · PDF页73 / 幻灯片73

### Switching fabric / switch fabric

**稳定ID：** csit985-w2-9051772b540cdc

**类别：** 专业英语

**中文解释：** 交换结构；路由器内部连接输入和输出端口。课件两种名称均保留。

**简单英文（整理解释）：** The internal router component connecting input ports to output ports.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义，但原句有疑似笔误或缺词；见资料疑点

**资料原文：** 定义（疑似笔误）

> Connecting the router input ports an output ones

**原文来源：** Week2.pdf · PDF页74 / 幻灯片74

**资料原文：** 名称或用语片段

> Switching fabric

**原文来源：** Week2.pdf · PDF页71 / 幻灯片71

**语境：** Week2 · Switching fabric / switch fabric

**语境英文：** The internal router component connecting input ports to output ports.

**语境中文：** 交换结构；路由器内部连接输入和输出端口。课件两种名称均保留。

**语境依据：** 整理解释

**语境原文：** 定义（疑似笔误）

> Connecting the router input ports an output ones

**语境原文来源：** Week2.pdf · PDF页74 / 幻灯片74

**语境原文：** 名称或用语片段

> Switching fabric

**语境原文来源：** Week2.pdf · PDF页71 / 幻灯片71

**语境来源：** Week2.pdf · PDF页71 / 幻灯片71；Week2.pdf · PDF页74 / 幻灯片74

**全部来源：** Week2.pdf · PDF页71 / 幻灯片71；Week2.pdf · PDF页74 / 幻灯片74

### Routing processor

**稳定ID：** csit985-w2-f6c04c00ea09ad

**类别：** 专业英语

**中文解释：** 路由处理器；执行控制平面工作。传统路由器运行协议、维护状态并计算转发表；SDN中与控制器通信。

**简单英文（整理解释）：** The router component performing control-plane functions.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Routing processor

**原文来源：** Week2.pdf · PDF页75 / 幻灯片75

**语境：** Week2 · Routing processor

**语境英文：** The router component performing control-plane functions.

**语境中文：** 路由处理器；执行控制平面工作。传统路由器运行协议、维护状态并计算转发表；SDN中与控制器通信。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> Routing processor

**语境原文来源：** Week2.pdf · PDF页75 / 幻灯片75

**语境来源：** Week2.pdf · PDF页75 / 幻灯片75

**全部来源：** Week2.pdf · PDF页75 / 幻灯片75

### Routing table / forwarding table / flow table

**稳定ID：** csit985-w2-d6b5aae45b187d

**类别：** 专业英语

**中文解释：** 路由表／转发表／流表；课件讨论其计算及分发。资料没有完整定义三者差别。

**简单英文（整理解释）：** Tables used in routing and forwarding; their full differences are not defined here.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> forwarding table

**原文来源：** Week2.pdf · PDF页75 / 幻灯片75

**资料原文：** 名称或用语片段

> Forwarding table

**原文来源：** Week2.pdf · PDF页76 / 幻灯片76

**资料原文：** 名称或用语片段

> Routing table

**原文来源：** Week2.pdf · PDF页82 / 幻灯片82

**语境：** Week2 · Routing table / forwarding table / flow table

**语境英文：** Tables used in routing and forwarding; their full differences are not defined here.

**语境中文：** 路由表／转发表／流表；课件讨论其计算及分发。资料没有完整定义三者差别。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> forwarding table

**语境原文来源：** Week2.pdf · PDF页75 / 幻灯片75

**语境原文：** 名称或用语片段

> Forwarding table

**语境原文来源：** Week2.pdf · PDF页76 / 幻灯片76

**语境原文：** 名称或用语片段

> Routing table

**语境原文来源：** Week2.pdf · PDF页82 / 幻灯片82

**语境来源：** Week2.pdf · PDF页75 / 幻灯片75；Week2.pdf · PDF页76 / 幻灯片76；Week2.pdf · PDF页82 / 幻灯片82

**全部来源：** Week2.pdf · PDF页75 / 幻灯片75；Week2.pdf · PDF页76 / 幻灯片76；Week2.pdf · PDF页82 / 幻灯片82

### SDN (Software-defined Network) / controller

**稳定ID：** csit985-w2-85d3944e140bd3

**类别：** 专业英语

**中文解释：** 软件定义网络／控制器；PDF用此全称，录音说software-defined networking。逻辑中心控制器可计算并分发表项。

**简单英文（整理解释）：** A network design using a controller to compute and distribute forwarding information.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> SDN

**原文来源：** Week2.pdf · PDF页75 / 幻灯片75

**资料原文：** 名称或用语片段

> controller

**原文来源：** Week2.pdf · PDF页76 / 幻灯片76

**资料原文：** 教师用语（TXT原片段）

> logically centralized control

**原文来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L8，本行字符3217起；搜索“logically centralized control”

**语境：** Week2 · SDN (Software-defined Network) / controller

**语境英文：** A network design using a controller to compute and distribute forwarding information.

**语境中文：** 软件定义网络／控制器；PDF用此全称，录音说software-defined networking。逻辑中心控制器可计算并分发表项。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> SDN

**语境原文来源：** Week2.pdf · PDF页75 / 幻灯片75

**语境原文：** 名称或用语片段

> controller

**语境原文来源：** Week2.pdf · PDF页76 / 幻灯片76

**语境原文：** 教师用语（TXT原片段）

> logically centralized control

**语境原文来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L8，本行字符3217起；搜索“logically centralized control”

**语境来源：** Week2.pdf · PDF页75 / 幻灯片75；Week2.pdf · PDF页76 / 幻灯片76；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L8，本行字符3217起；搜索“logically centralized control”

**全部来源：** Week2.pdf · PDF页75 / 幻灯片75；Week2.pdf · PDF页76 / 幻灯片76；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L8，本行字符3217起；搜索“logically centralized control”

### Per-router control

**稳定ID：** csit985-w2-2c3c01500ee5e7

**类别：** 专业英语

**中文解释：** 逐路由器控制；每个路由器运行路由算法，路由与转发功能均在路由器内。

**简单英文（整理解释）：** Each router runs a routing algorithm and includes routing and forwarding functions.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Per-router control: when each router runs a routing algorithm, both forwarding and routing function are included in the router

**原文来源：** Week2.pdf · PDF页76 / 幻灯片76

**语境：** Week2 · Per-router control

**语境英文：** Each router runs a routing algorithm and includes routing and forwarding functions.

**语境中文：** 逐路由器控制；每个路由器运行路由算法，路由与转发功能均在路由器内。

**语境依据：** 整理解释

**语境原文：** 定义

> Per-router control: when each router runs a routing algorithm, both forwarding and routing function are included in the router

**语境原文来源：** Week2.pdf · PDF页76 / 幻灯片76

**语境来源：** Week2.pdf · PDF页76 / 幻灯片76

**全部来源：** Week2.pdf · PDF页76 / 幻灯片76

### Logically centralized control

**稳定ID：** csit985-w2-1db6ab8e8302c5

**类别：** 专业英语

**中文解释：** 逻辑集中控制；一个逻辑中心计算并分发转发表。教师说它可由不同物理系统实现，以支持resilience。

**简单英文（整理解释）：** A logically central controller computes and distributes forwarding tables; it may use several physical systems.

**说明依据：** 根据资料整理

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Logical centralized control: a logically centralized controller computes and distributes the forwarding tables to be used by every router.

**原文来源：** Week2.pdf · PDF页76 / 幻灯片76

**资料原文：** 教师用语（TXT原片段）

> implemented using different physical systems

**原文来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L8，本行字符3529起；搜索“implemented using different physical systems”

**语境：** Week2 · Logically centralized control

**语境英文：** A logically central controller computes and distributes forwarding tables; it may use several physical systems.

**语境中文：** 逻辑集中控制；一个逻辑中心计算并分发转发表。教师说它可由不同物理系统实现，以支持resilience。

**语境依据：** 根据资料整理

**语境原文：** 定义

> Logical centralized control: a logically centralized controller computes and distributes the forwarding tables to be used by every router.

**语境原文来源：** Week2.pdf · PDF页76 / 幻灯片76

**语境原文：** 教师用语（TXT原片段）

> implemented using different physical systems

**语境原文来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L8，本行字符3529起；搜索“implemented using different physical systems”

**语境来源：** Week2.pdf · PDF页76 / 幻灯片76；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L8，本行字符3529起；搜索“implemented using different physical systems”

**全部来源：** Week2.pdf · PDF页76 / 幻灯片76；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L8，本行字符3529起；搜索“implemented using different physical systems”

### Routing algorithm / least-cost path

**稳定ID：** csit985-w2-1e19cb69f792c1

**类别：** 专业英语

**中文解释：** 路由算法／最小代价路径；课件以least cost说明good path，教师提醒cost不只指金钱。

**简单英文（整理解释）：** An algorithm choosing paths using a cost measure; cost is not necessarily money.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Routing algorithm

**原文来源：** Week2.pdf · PDF页77 / 幻灯片77

**资料原文：** 教师用语（TXT原片段）

> cost doesn't always mean

**原文来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L8，本行字符4193起；搜索“cost doesn't always mean”

**语境：** Week2 · Routing algorithm / least-cost path

**语境英文：** An algorithm choosing paths using a cost measure; cost is not necessarily money.

**语境中文：** 路由算法／最小代价路径；课件以least cost说明good path，教师提醒cost不只指金钱。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> Routing algorithm

**语境原文来源：** Week2.pdf · PDF页77 / 幻灯片77

**语境原文：** 教师用语（TXT原片段）

> cost doesn't always mean

**语境原文来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L8，本行字符4193起；搜索“cost doesn't always mean”

**语境来源：** Week2.pdf · PDF页77 / 幻灯片77；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L8，本行字符4193起；搜索“cost doesn't always mean”

**全部来源：** Week2.pdf · PDF页77 / 幻灯片77；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L8，本行字符4193起；搜索“cost doesn't always mean”

### Centralized / Link-State (LS) algorithm

**稳定ID：** csit985-w2-85b48de92c1b41

**类别：** 专业英语

**中文解释：** 集中式／链路状态算法；使用完整的全网节点和链路信息计算最小代价路径。

**简单英文（整理解释）：** Compute least-cost paths using complete global knowledge of nodes and links.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Computes least-cost path using complete, global knowledge about the network

**原文来源：** Week2.pdf · PDF页78 / 幻灯片78

**语境：** Week2 · Centralized / Link-State (LS) algorithm

**语境英文：** Compute least-cost paths using complete global knowledge of nodes and links.

**语境中文：** 集中式／链路状态算法；使用完整的全网节点和链路信息计算最小代价路径。

**语境依据：** 整理解释

**语境原文：** 定义

> Computes least-cost path using complete, global knowledge about the network

**语境原文来源：** Week2.pdf · PDF页78 / 幻灯片78

**语境来源：** Week2.pdf · PDF页78 / 幻灯片78

**全部来源：** Week2.pdf · PDF页78 / 幻灯片78

### Decentralized / distance-vector (DV) algorithm

**稳定ID：** csit985-w2-b1fc8f9298cdef

**类别：** 专业英语

**中文解释：** 分散式／距离向量算法；路由器交互计算，各节点维护到其他节点的代价估计向量。

**简单英文（整理解释）：** Routers compute paths through distributed interaction and keep estimates of costs to destinations.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Computes least-cost path using an interactive, distributed manner by the routers

**原文来源：** Week2.pdf · PDF页79 / 幻灯片79

**资料原文：** 说明

> each node maintains a vector of estimates of the costs (distance) to all other nodes in the network.

**原文来源：** Week2.pdf · PDF页79 / 幻灯片79

**语境：** Week2 · Decentralized / distance-vector (DV) algorithm

**语境英文：** Routers compute paths through distributed interaction and keep estimates of costs to destinations.

**语境中文：** 分散式／距离向量算法；路由器交互计算，各节点维护到其他节点的代价估计向量。

**语境依据：** 整理解释

**语境原文：** 定义

> Computes least-cost path using an interactive, distributed manner by the routers

**语境原文来源：** Week2.pdf · PDF页79 / 幻灯片79

**语境原文：** 说明

> each node maintains a vector of estimates of the costs (distance) to all other nodes in the network.

**语境原文来源：** Week2.pdf · PDF页79 / 幻灯片79

**语境来源：** Week2.pdf · PDF页79 / 幻灯片79

**全部来源：** Week2.pdf · PDF页79 / 幻灯片79

### Static routing algorithm

**稳定ID：** csit985-w2-ebbc7015f87824

**类别：** 专业英语

**中文解释：** 静态路由算法；路由随时间变化很慢，需要人工干预，如手动改链路代价。

**简单英文（整理解释）：** Routes change slowly and need human intervention.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Routes change very slowly over time

**原文来源：** Week2.pdf · PDF页80 / 幻灯片80

**资料原文：** 说明

> Needs human intervention, e.g. manually editing a link costs

**原文来源：** Week2.pdf · PDF页80 / 幻灯片80

**语境：** Week2 · Static routing algorithm

**语境英文：** Routes change slowly and need human intervention.

**语境中文：** 静态路由算法；路由随时间变化很慢，需要人工干预，如手动改链路代价。

**语境依据：** 整理解释

**语境原文：** 定义

> Routes change very slowly over time

**语境原文来源：** Week2.pdf · PDF页80 / 幻灯片80

**语境原文：** 说明

> Needs human intervention, e.g. manually editing a link costs

**语境原文来源：** Week2.pdf · PDF页80 / 幻灯片80

**语境来源：** Week2.pdf · PDF页80 / 幻灯片80

**全部来源：** Week2.pdf · PDF页80 / 幻灯片80

### Dynamic routing algorithm

**稳定ID：** csit985-w2-ab5faf9fd86a3a

**类别：** 专业英语

**中文解释：** 动态路由算法；流量负载或拓扑改变时调整路径，对网络变化响应更快。

**简单英文（整理解释）：** Change routing paths when traffic loads or topology change.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Changes the routing paths as network traffic loads or topology change

**原文来源：** Week2.pdf · PDF页80 / 幻灯片80

**语境：** Week2 · Dynamic routing algorithm

**语境英文：** Change routing paths when traffic loads or topology change.

**语境中文：** 动态路由算法；流量负载或拓扑改变时调整路径，对网络变化响应更快。

**语境依据：** 整理解释

**语境原文：** 定义

> Changes the routing paths as network traffic loads or topology change

**语境原文来源：** Week2.pdf · PDF页80 / 幻灯片80

**语境来源：** Week2.pdf · PDF页80 / 幻灯片80

**全部来源：** Week2.pdf · PDF页80 / 幻灯片80

### Load-sensitive routing algorithm

**稳定ID：** csit985-w2-fe69c7ca4825f9

**类别：** 专业英语

**中文解释：** 负载敏感路由算法；链路代价随拥塞动态改变，高拥塞代价使算法倾向绕行。

**简单英文（整理解释）：** Link costs reflect congestion, so the algorithm tends to avoid costly congested links.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Link costs vary dynamically to reflect the current level of congestion in the underlying link

**原文来源：** Week2.pdf · PDF页81 / 幻灯片81

**语境：** Week2 · Load-sensitive routing algorithm

**语境英文：** Link costs reflect congestion, so the algorithm tends to avoid costly congested links.

**语境中文：** 负载敏感路由算法；链路代价随拥塞动态改变，高拥塞代价使算法倾向绕行。

**语境依据：** 整理解释

**语境原文：** 定义

> Link costs vary dynamically to reflect the current level of congestion in the underlying link

**语境原文来源：** Week2.pdf · PDF页81 / 幻灯片81

**语境来源：** Week2.pdf · PDF页81 / 幻灯片81

**全部来源：** Week2.pdf · PDF页81 / 幻灯片81

### Load-insensitive routing algorithm

**稳定ID：** csit985-w2-436b19009ac651

**类别：** 专业英语

**中文解释：** 负载不敏感路由算法；链路代价不明确反映当前拥塞水平，不等于完全忽略一切网络条件。

**简单英文（整理解释）：** A link's cost does not explicitly reflect its current congestion.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> A link’s cost does not explicitly reflect its current level of congestion

**原文来源：** Week2.pdf · PDF页81 / 幻灯片81

**语境：** Week2 · Load-insensitive routing algorithm

**语境英文：** A link's cost does not explicitly reflect its current congestion.

**语境中文：** 负载不敏感路由算法；链路代价不明确反映当前拥塞水平，不等于完全忽略一切网络条件。

**语境依据：** 整理解释

**语境原文：** 定义

> A link’s cost does not explicitly reflect its current level of congestion

**语境原文来源：** Week2.pdf · PDF页81 / 幻灯片81

**语境来源：** Week2.pdf · PDF页81 / 幻灯片81

**全部来源：** Week2.pdf · PDF页81 / 幻灯片81

### Link-state / shortest-path-first protocols

**稳定ID：** csit985-w2-7dc2ce229422e4

**类别：** 专业英语

**中文解释：** 链路状态／最短路径优先协议；路由器记录邻居、全网拓扑与路由表，向其他路由器发送自身链路状态更新。

**简单英文（整理解释）：** Protocols distributing link-state information to build a topology view and choose paths.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 说明

> Link state protocols or called as shortest-path-first-protocols

**原文来源：** Week2.pdf · PDF页82 / 幻灯片82

**语境：** Week2 · Link-state / shortest-path-first protocols

**语境英文：** Protocols distributing link-state information to build a topology view and choose paths.

**语境中文：** 链路状态／最短路径优先协议；路由器记录邻居、全网拓扑与路由表，向其他路由器发送自身链路状态更新。

**语境依据：** 根据资料整理

**语境原文：** 说明

> Link state protocols or called as shortest-path-first-protocols

**语境原文来源：** Week2.pdf · PDF页82 / 幻灯片82

**语境来源：** Week2.pdf · PDF页82 / 幻灯片82

**全部来源：** Week2.pdf · PDF页82 / 幻灯片82

### Distance-Vector protocols / hop count

**稳定ID：** csit985-w2-8436acd74fdce0

**类别：** 专业英语

**中文解释：** 距离向量协议／跳数；课件说向邻居传递完整路由表，RIP以跳数选路。

**简单英文（整理解释）：** Protocols sharing route information with neighbours; RIP uses hop count in this slide.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Distance-Vector protocols

**原文来源：** Week2.pdf · PDF页83 / 幻灯片83

**语境：** Week2 · Distance-Vector protocols / hop count

**语境英文：** Protocols sharing route information with neighbours; RIP uses hop count in this slide.

**语境中文：** 距离向量协议／跳数；课件说向邻居传递完整路由表，RIP以跳数选路。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> Distance-Vector protocols

**语境原文来源：** Week2.pdf · PDF页83 / 幻灯片83

**语境来源：** Week2.pdf · PDF页83 / 幻灯片83

**全部来源：** Week2.pdf · PDF页83 / 幻灯片83

### OSPF / RIP / BGP / ARPAnet

**稳定ID：** csit985-w2-eafe385fbea971

**类别：** 专业英语

**中文解释：** 课件中的协议／网络名称：OSPF为link-state例子，RIP为distance-vector例子，前三者在81页列为load-insensitive；ARPAnet列为load-sensitive例子。

**简单英文（整理解释）：** Names used to illustrate routing classifications; the transcribed full names are partly unclear.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> ARPAnet

**原文来源：** Week2.pdf · PDF页81 / 幻灯片81

**资料原文：** 名称或用语片段

> OSPF

**原文来源：** Week2.pdf · PDF页82 / 幻灯片82

**资料原文：** 名称或用语片段

> RIP

**原文来源：** Week2.pdf · PDF页83 / 幻灯片83

**资料原文：** 教师用语（TXT原片段）

> routing information protocol

**原文来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L20，本行字符5起；搜索“routing information protocol”

**资料原文：** 教师用语（TXT原片段）

> border gateway protocol

**原文来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L14，本行字符1144起；搜索“border gateway protocol”

**语境：** Week2 · OSPF / RIP / BGP / ARPAnet

**语境英文：** Names used to illustrate routing classifications; the transcribed full names are partly unclear.

**语境中文：** 课件中的协议／网络名称：OSPF为link-state例子，RIP为distance-vector例子，前三者在81页列为load-insensitive；ARPAnet列为load-sensitive例子。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> ARPAnet

**语境原文来源：** Week2.pdf · PDF页81 / 幻灯片81

**语境原文：** 名称或用语片段

> OSPF

**语境原文来源：** Week2.pdf · PDF页82 / 幻灯片82

**语境原文：** 名称或用语片段

> RIP

**语境原文来源：** Week2.pdf · PDF页83 / 幻灯片83

**语境原文：** 教师用语（TXT原片段）

> routing information protocol

**语境原文来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L20，本行字符5起；搜索“routing information protocol”

**语境原文：** 教师用语（TXT原片段）

> border gateway protocol

**语境原文来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L14，本行字符1144起；搜索“border gateway protocol”

**语境来源：** Week2.pdf · PDF页81 / 幻灯片81；Week2.pdf · PDF页82 / 幻灯片82；Week2.pdf · PDF页83 / 幻灯片83；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L20，本行字符5起；搜索“routing information protocol”；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L14，本行字符1144起；搜索“border gateway protocol”

**全部来源：** Week2.pdf · PDF页81 / 幻灯片81；Week2.pdf · PDF页82 / 幻灯片82；Week2.pdf · PDF页83 / 幻灯片83；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L20，本行字符5起；搜索“routing information protocol”；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L14，本行字符1144起；搜索“border gateway protocol”

### IP (Internet Protocol)

**稳定ID：** csit985-w2-b830b427252a2f

**类别：** 专业英语

**中文解释：** 互联网协议；提供网络层编址和跨互连网络的包交付，头部含源、目的地址等控制信息。

**简单英文（整理解释）：** A protocol for network-layer addressing and packet delivery across interconnected networks.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Internet Protocol

**原文来源：** Week2.pdf · PDF页8 / 幻灯片8

**资料原文：** 名称或用语片段

> Internet Protocol

**原文来源：** Week2.pdf · PDF页84 / 幻灯片84

**资料原文：** 名称或用语片段

> Internet Protocol

**原文来源：** Week2.pdf · PDF页85 / 幻灯片85

**资料原文：** 教师用语（TXT原片段）

> it provides network layer addressing

**原文来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符106起；搜索“it provides network layer addressing”

**语境：** Week2 · IP (Internet Protocol)

**语境英文：** A protocol for network-layer addressing and packet delivery across interconnected networks.

**语境中文：** 互联网协议；提供网络层编址和跨互连网络的包交付，头部含源、目的地址等控制信息。

**语境依据：** 教师补充

**语境原文：** 名称或用语片段

> Internet Protocol

**语境原文来源：** Week2.pdf · PDF页8 / 幻灯片8

**语境原文：** 名称或用语片段

> Internet Protocol

**语境原文来源：** Week2.pdf · PDF页84 / 幻灯片84

**语境原文：** 名称或用语片段

> Internet Protocol

**语境原文来源：** Week2.pdf · PDF页85 / 幻灯片85

**语境原文：** 教师用语（TXT原片段）

> it provides network layer addressing

**语境原文来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符106起；搜索“it provides network layer addressing”

**语境来源：** Week2.pdf · PDF页8 / 幻灯片8；Week2.pdf · PDF页84 / 幻灯片84；Week2.pdf · PDF页85 / 幻灯片85；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符106起；搜索“it provides network layer addressing”

**全部来源：** Week2.pdf · PDF页8 / 幻灯片8；Week2.pdf · PDF页84 / 幻灯片84；Week2.pdf · PDF页85 / 幻灯片85；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符106起；搜索“it provides network layer addressing”

### IPv4 datagram format

**稳定ID：** csit985-w2-95662fb3b24d54

**类别：** 专业英语

**中文解释：** IPv4数据报格式；图84列头部、源／目的IP地址、可选Options和Data；不把此图当IPv6格式。

**简单英文（整理解释）：** The IPv4 datagram format shown in the figure, including header fields and data.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图表标签（视觉核对）

> IPv4 datagram format

**原文来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**语境：** Week2 · IPv4 datagram format

**语境英文：** The IPv4 datagram format shown in the figure, including header fields and data.

**语境中文：** IPv4数据报格式；图84列头部、源／目的IP地址、可选Options和Data；不把此图当IPv6格式。

**语境依据：** 根据资料整理

**语境原文：** 图表标签（视觉核对）

> IPv4 datagram format

**语境原文来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**语境来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**全部来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

### Version / header length / type of service / datagram length

**稳定ID：** csit985-w2-3f50d6d7913556

**类别：** 专业英语

**中文解释：** 版本／头部长度／服务类型／数据报长度；IPv4图中的字段，长度字段标bytes，图未逐个定义作用。

**简单英文（整理解释）：** IPv4 fields shown in the figure; datagram length is labelled in bytes.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图表标签（视觉核对）

> Version

**原文来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**资料原文：** 图表标签（视觉核对）

> Header length

**原文来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**资料原文：** 图表标签（视觉核对）

> Type of service

**原文来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**资料原文：** 图表标签（视觉核对）

> Datagram length (bytes)

**原文来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**语境：** Week2 · Version / header length / type of service / datagram length

**语境英文：** IPv4 fields shown in the figure; datagram length is labelled in bytes.

**语境中文：** 版本／头部长度／服务类型／数据报长度；IPv4图中的字段，长度字段标bytes，图未逐个定义作用。

**语境依据：** 根据资料整理

**语境原文：** 图表标签（视觉核对）

> Version

**语境原文来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**语境原文：** 图表标签（视觉核对）

> Header length

**语境原文来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**语境原文：** 图表标签（视觉核对）

> Type of service

**语境原文来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**语境原文：** 图表标签（视觉核对）

> Datagram length (bytes)

**语境原文来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**语境来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**全部来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

### Identifier / flags / fragmentation offset

**稳定ID：** csit985-w2-5d3aadc6617c4f

**类别：** 专业英语

**中文解释：** 标识／标志／分片偏移；图84分别标16-bit identifier、Flags、13-bit fragmentation offset，当前资料未解释位含义。

**简单英文（整理解释）：** IPv4 fields with 16-bit identifier and 13-bit fragmentation offset shown in the figure.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图表标签（视觉核对）

> 16-bit identifier

**原文来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**资料原文：** 图表标签（视觉核对）

> Flags

**原文来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**资料原文：** 图表标签（视觉核对）

> 13-bit fragmentation offset

**原文来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**语境：** Week2 · Identifier / flags / fragmentation offset

**语境英文：** IPv4 fields with 16-bit identifier and 13-bit fragmentation offset shown in the figure.

**语境中文：** 标识／标志／分片偏移；图84分别标16-bit identifier、Flags、13-bit fragmentation offset，当前资料未解释位含义。

**语境依据：** 根据资料整理

**语境原文：** 图表标签（视觉核对）

> 16-bit identifier

**语境原文来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**语境原文：** 图表标签（视觉核对）

> Flags

**语境原文来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**语境原文：** 图表标签（视觉核对）

> 13-bit fragmentation offset

**语境原文来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**语境来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**全部来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

### Time-to-live / upper-layer protocol / header checksum

**稳定ID：** csit985-w2-e6655f2c5e2dc4

**类别：** 专业英语

**中文解释：** 生存时间／上层协议／头部校验和；IPv4头部标签，图中未定义各字段行为。

**简单英文（整理解释）：** Named IPv4 header fields; their detailed behaviour is not defined here.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图表标签（视觉核对）

> Time-to-live

**原文来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**资料原文：** 图表标签（视觉核对）

> Upper-layer protocol

**原文来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**资料原文：** 图表标签（视觉核对）

> Header checksum

**原文来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**语境：** Week2 · Time-to-live / upper-layer protocol / header checksum

**语境英文：** Named IPv4 header fields; their detailed behaviour is not defined here.

**语境中文：** 生存时间／上层协议／头部校验和；IPv4头部标签，图中未定义各字段行为。

**语境依据：** 资料未定义

**语境原文：** 图表标签（视觉核对）

> Time-to-live

**语境原文来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**语境原文：** 图表标签（视觉核对）

> Upper-layer protocol

**语境原文来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**语境原文：** 图表标签（视觉核对）

> Header checksum

**语境原文来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**语境来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**全部来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

### Source / destination IP address

**稳定ID：** csit985-w2-76db5b9fe91ac1

**类别：** 专业英语

**中文解释：** 源／目的IP地址；图84的IPv4字段均标32-bit，说明从哪来、往哪去。

**简单英文（整理解释）：** IPv4 source and destination address fields, each labelled 32-bit.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图表标签（视觉核对）

> 32-bit Source IP address

**原文来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**资料原文：** 图表标签（视觉核对）

> 32-bit Destination IP address

**原文来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**资料原文：** 教师用语（TXT原片段）

> your source IP address

**原文来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符514起；搜索“your source IP address”

**语境：** Week2 · Source / destination IP address

**语境英文：** IPv4 source and destination address fields, each labelled 32-bit.

**语境中文：** 源／目的IP地址；图84的IPv4字段均标32-bit，说明从哪来、往哪去。

**语境依据：** 根据资料整理

**语境原文：** 图表标签（视觉核对）

> 32-bit Source IP address

**语境原文来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**语境原文：** 图表标签（视觉核对）

> 32-bit Destination IP address

**语境原文来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

**语境原文：** 教师用语（TXT原片段）

> your source IP address

**语境原文来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符514起；搜索“your source IP address”

**语境来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符514起；搜索“your source IP address”

**全部来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符514起；搜索“your source IP address”

### Fragmentation / reassembly / MTU

**稳定ID：** csit985-w2-985d1c4565c464

**类别：** 专业英语

**中文解释：** 分片／重组／MTU；图85例子将4000-byte数据报经1500-byte Link MTU拆为3个较小数据报，再合成一个。图未展开MTU缩写或给一般算法。

**简单英文（整理解释）：** The figure splits one 4,000-byte datagram into three and reassembles them; the link MTU is 1,500 bytes.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图表标签（视觉核对）

> Fragmentation

**原文来源：** Week2.pdf · PDF页85 / 幻灯片85（图表）

**资料原文：** 图表标签（视觉核对）

> Reassembly

**原文来源：** Week2.pdf · PDF页85 / 幻灯片85（图表）

**资料原文：** 图表标签（视觉核对）

> Link MTU: 1,500 bytes

**原文来源：** Week2.pdf · PDF页85 / 幻灯片85（图表）

**语境：** Week2 · Fragmentation / reassembly / MTU

**语境英文：** The figure splits one 4,000-byte datagram into three and reassembles them; the link MTU is 1,500 bytes.

**语境中文：** 分片／重组／MTU；图85例子将4000-byte数据报经1500-byte Link MTU拆为3个较小数据报，再合成一个。图未展开MTU缩写或给一般算法。

**语境依据：** 根据资料整理

**语境原文：** 图表标签（视觉核对）

> Fragmentation

**语境原文来源：** Week2.pdf · PDF页85 / 幻灯片85（图表）

**语境原文：** 图表标签（视觉核对）

> Reassembly

**语境原文来源：** Week2.pdf · PDF页85 / 幻灯片85（图表）

**语境原文：** 图表标签（视觉核对）

> Link MTU: 1,500 bytes

**语境原文来源：** Week2.pdf · PDF页85 / 幻灯片85（图表）

**语境来源：** Week2.pdf · PDF页85 / 幻灯片85（图表）

**全部来源：** Week2.pdf · PDF页85 / 幻灯片85（图表）

### Network service model

**稳定ID：** csit985-w2-311aea6d3cc600

**类别：** 专业英语

**中文解释：** 网络服务模型；规定发送者与接收者间端到端包交付的特征。

**简单英文（整理解释）：** Characteristics of end-to-end packet delivery between senders and receivers.

**说明依据：** 整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 定义

> Define characteristics of end-to-end delivery of packets between senders and receivers

**原文来源：** Week2.pdf · PDF页86 / 幻灯片86

**语境：** Week2 · Network service model

**语境英文：** Characteristics of end-to-end packet delivery between senders and receivers.

**语境中文：** 网络服务模型；规定发送者与接收者间端到端包交付的特征。

**语境依据：** 整理解释

**语境原文：** 定义

> Define characteristics of end-to-end delivery of packets between senders and receivers

**语境原文来源：** Week2.pdf · PDF页86 / 幻灯片86

**语境来源：** Week2.pdf · PDF页86 / 幻灯片86

**全部来源：** Week2.pdf · PDF页86 / 幻灯片86

### Guaranteed delivery / bounded delay / in-order packet delivery

**稳定ID：** csit985-w2-751ff8380b04df

**类别：** 专业英语

**中文解释：** 保证交付／有界时延／按序交付；第86页列出的可能服务。列出这些不表示每种网络都保证它们。

**简单英文（整理解释）：** Possible network services: delivery guarantees, a delay bound, and delivery in order.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> In-order packet delivery

**原文来源：** Week2.pdf · PDF页86 / 幻灯片86

**语境：** Week2 · Guaranteed delivery / bounded delay / in-order packet delivery

**语境英文：** Possible network services: delivery guarantees, a delay bound, and delivery in order.

**语境中文：** 保证交付／有界时延／按序交付；第86页列出的可能服务。列出这些不表示每种网络都保证它们。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> In-order packet delivery

**语境原文来源：** Week2.pdf · PDF页86 / 幻灯片86

**语境来源：** Week2.pdf · PDF页86 / 幻灯片86

**全部来源：** Week2.pdf · PDF页86 / 幻灯片86

### Guaranteed minimal bandwidth / security

**稳定ID：** csit985-w2-a90c72eb90a92c

**类别：** 专业英语

**中文解释：** 保证最低带宽／安全；网络服务模型的可能服务标签，当前资料未给数值或实现细节。

**简单英文（整理解释）：** Possible services named without exact limits or implementation details.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Guaranteed minimal bandwidth

**原文来源：** Week2.pdf · PDF页86 / 幻灯片86

**语境：** Week2 · Guaranteed minimal bandwidth / security

**语境英文：** Possible services named without exact limits or implementation details.

**语境中文：** 保证最低带宽／安全；网络服务模型的可能服务标签，当前资料未给数值或实现细节。

**语境依据：** 资料未定义

**语境原文：** 名称或用语片段

> Guaranteed minimal bandwidth

**语境原文来源：** Week2.pdf · PDF页86 / 幻灯片86

**语境来源：** Week2.pdf · PDF页86 / 幻灯片86

**全部来源：** Week2.pdf · PDF页86 / 幻灯片86

### NIC (network interface card)

**稳定ID：** csit985-w2-9755877b36eaf0

**类别：** 专业英语

**中文解释：** 网络接口卡；设备连接网络需要NIC，一个设备可以有一个或多个。TXT的internet interface card疑似转写错误，以PDF为准。

**简单英文（整理解释）：** A card needed to connect a device to a network; a device may have one or more.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 说明

> A device needs a NIC (network interface card) to connect to a network

**原文来源：** Week2.pdf · PDF页87 / 幻灯片87

**资料原文：** 说明

> One device may have one or multiple NICs

**原文来源：** Week2.pdf · PDF页87 / 幻灯片87

**资料原文：** 教师用语（TXT原片段）

> internet interface card

**原文来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符2357起；搜索“internet interface card”

**语境：** Week2 · NIC (network interface card)

**语境英文：** A card needed to connect a device to a network; a device may have one or more.

**语境中文：** 网络接口卡；设备连接网络需要NIC，一个设备可以有一个或多个。TXT的internet interface card疑似转写错误，以PDF为准。

**语境依据：** 根据资料整理

**语境原文：** 说明

> A device needs a NIC (network interface card) to connect to a network

**语境原文来源：** Week2.pdf · PDF页87 / 幻灯片87

**语境原文：** 说明

> One device may have one or multiple NICs

**语境原文来源：** Week2.pdf · PDF页87 / 幻灯片87

**语境原文：** 教师用语（TXT原片段）

> internet interface card

**语境原文来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符2357起；搜索“internet interface card”

**语境来源：** Week2.pdf · PDF页87 / 幻灯片87；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符2357起；搜索“internet interface card”

**全部来源：** Week2.pdf · PDF页87 / 幻灯片87；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符2357起；搜索“internet interface card”

### Framing / link access / reliable delivery

**稳定ID：** csit985-w2-2293dcfbe57a97

**类别：** 专业英语

**中文解释：** 成帧／链路访问／可靠交付；第88页列为链路层服务，未说明所有链路协议是否都提供全部服务。

**简单英文（整理解释）：** Named link-layer services; the slide does not say every link protocol provides all of them.

**说明依据：** 根据资料整理

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Reliable delivery

**原文来源：** Week2.pdf · PDF页88 / 幻灯片88

**语境：** Week2 · Framing / link access / reliable delivery

**语境英文：** Named link-layer services; the slide does not say every link protocol provides all of them.

**语境中文：** 成帧／链路访问／可靠交付；第88页列为链路层服务，未说明所有链路协议是否都提供全部服务。

**语境依据：** 根据资料整理

**语境原文：** 名称或用语片段

> Reliable delivery

**语境原文来源：** Week2.pdf · PDF页88 / 幻灯片88

**语境来源：** Week2.pdf · PDF页88 / 幻灯片88

**全部来源：** Week2.pdf · PDF页88 / 幻灯片88

### Error detection / correction

**稳定ID：** csit985-w2-385f78d6683059

**类别：** 专业英语

**中文解释：** 差错检测／纠正；链路层服务名称，资料未给算法。

**简单英文（整理解释）：** Link-layer services for detecting and correcting errors; no algorithm is given.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Error detection

**原文来源：** Week2.pdf · PDF页88 / 幻灯片88

**语境：** Week2 · Error detection / correction

**语境英文：** Link-layer services for detecting and correcting errors; no algorithm is given.

**语境中文：** 差错检测／纠正；链路层服务名称，资料未给算法。

**语境依据：** 资料未定义

**语境原文：** 名称或用语片段

> Error detection

**语境原文来源：** Week2.pdf · PDF页88 / 幻灯片88

**语境来源：** Week2.pdf · PDF页88 / 幻灯片88

**全部来源：** Week2.pdf · PDF页88 / 幻灯片88

### Single-mode fiber optics

**稳定ID：** csit985-w2-8209ac547bd484

**类别：** 专业英语

**中文解释：** 单模光纤；第89页举的实际传输介质例子，没有解释模式含义。

**简单英文（整理解释）：** An example of a physical transmission medium, without a definition of the mode.

**说明依据：** 资料未定义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> single-mode fiber optics

**原文来源：** Week2.pdf · PDF页89 / 幻灯片89

**语境：** Week2 · Single-mode fiber optics

**语境英文：** An example of a physical transmission medium, without a definition of the mode.

**语境中文：** 单模光纤；第89页举的实际传输介质例子，没有解释模式含义。

**语境依据：** 资料未定义

**语境原文：** 名称或用语片段

> single-mode fiber optics

**语境原文来源：** Week2.pdf · PDF页89 / 幻灯片89

**语境来源：** Week2.pdf · PDF页89 / 幻灯片89

**全部来源：** Week2.pdf · PDF页89 / 幻灯片89

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

## 阅读词汇

### Originate from

**稳定ID：** csit985-w2-79aad1bcb559d4

**类别：** 阅读词汇

**中文解释：** 起源于、从……发出；消息在终端产生。

**简单英文（整理解释）：** Start from a place or source.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> where a message originates from or where it is received

**原文来源：** Week2.pdf · PDF页6 / 幻灯片6

**语境：** Week2 · Originate from

**语境英文：** Start from a place or source.

**语境中文：** 起源于、从……发出；消息在终端产生。

**语境依据：** 必要基础释义

**使用结构：** originate from + source; originate with + source

**语境原文：** 用法片段

> where a message originates from or where it is received

**语境原文来源：** Week2.pdf · PDF页6 / 幻灯片6

**语境来源：** Week2.pdf · PDF页6 / 幻灯片6

**使用结构：** originate from + source; originate with + source

**全部来源：** Week2.pdf · PDF页6 / 幻灯片6

### Intermediate

**稳定ID：** csit985-w2-8074b5fb737038

**类别：** 阅读词汇

**中文解释：** 中间的；在这里指位于终端之间的联网设备。

**简单英文（整理解释）：** Between two ends or stages.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> intermediate

**原文来源：** Week2.pdf · PDF页7 / 幻灯片7

**语境：** Week2 · Intermediate

**语境英文：** Between two ends or stages.

**语境中文：** 中间的；在这里指位于终端之间的联网设备。

**语境依据：** 必要基础释义

**使用结构：** intermediate + device / stage

**语境原文：** 名称或用语片段

> intermediate

**语境原文来源：** Week2.pdf · PDF页7 / 幻灯片7

**语境来源：** Week2.pdf · PDF页7 / 幻灯片7

**使用结构：** intermediate + device / stage

**全部来源：** Week2.pdf · PDF页7 / 幻灯片7

### Enable communication / interaction

**稳定ID：** csit985-w2-10f87d9e936790

**类别：** 阅读词汇

**中文解释：** 使通信／交互成为可能；enable 表示让某事能够发生。

**简单英文（整理解释）：** Make communication or interaction possible.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> interaction

**原文来源：** Week2.pdf · PDF页7 / 幻灯片7

**语境：** Week2 · Enable communication / interaction

**语境英文：** Make communication or interaction possible.

**语境中文：** 使通信／交互成为可能；enable 表示让某事能够发生。

**语境依据：** 必要基础释义

**使用结构：** enable + noun; enable someone to + verb

**语境原文：** 名称或用语片段

> interaction

**语境原文来源：** Week2.pdf · PDF页7 / 幻灯片7

**语境来源：** Week2.pdf · PDF页7 / 幻灯片7

**使用结构：** enable + noun; enable someone to + verb

**全部来源：** Week2.pdf · PDF页7 / 幻灯片7

### Play a vital role in

**稳定ID：** csit985-w2-7d397f393e0e2f

**类别：** 阅读词汇

**中文解释：** 在……中起至关重要的作用；介质影响网络性能。

**简单英文（整理解释）：** Be very important in something.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> play a vital role in

**原文来源：** Week2.pdf · PDF页9 / 幻灯片9

**语境：** Week2 · Play a vital role in

**语境英文：** Be very important in something.

**语境中文：** 在……中起至关重要的作用；介质影响网络性能。

**语境依据：** 必要基础释义

**使用结构：** play a vital role in + noun

**语境原文：** 名称或用语片段

> play a vital role in

**语境原文来源：** Week2.pdf · PDF页9 / 幻灯片9

**语境来源：** Week2.pdf · PDF页9 / 幻灯片9

**使用结构：** play a vital role in + noun

**全部来源：** Week2.pdf · PDF页9 / 幻灯片9

### Restricted / proximity / extended

**稳定ID：** csit985-w2-1644e0346adbe9

**类别：** 阅读词汇

**中文解释：** 受限的／距离接近／扩展的；出现在无线网络类别标签中，分别解释普通词义。

**简单英文（整理解释）：** Limited / nearness / made larger or longer.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Restricted

**原文来源：** Week2.pdf · PDF页11 / 幻灯片11

**语境：** Week2 · Restricted / proximity / extended

**语境英文：** Limited / nearness / made larger or longer.

**语境中文：** 受限的／距离接近／扩展的；出现在无线网络类别标签中，分别解释普通词义。

**语境依据：** 必要基础释义

**使用结构：** restricted proximity; an extended network

**语境原文：** 名称或用语片段

> Restricted

**语境原文来源：** Week2.pdf · PDF页11 / 幻灯片11

**语境来源：** Week2.pdf · PDF页11 / 幻灯片11

**使用结构：** restricted proximity; an extended network

**全部来源：** Week2.pdf · PDF页11 / 幻灯片11

### Propagation / obstacle / line of sight

**稳定ID：** csit985-w2-a2f1cd7e3f2a7a

**类别：** 阅读词汇

**中文解释：** 传播／障碍物／视线；本页把无视线障碍作为激光传输条件。

**简单英文（整理解释）：** Movement of a signal / something in the way / a clear straight view.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> line of sight

**原文来源：** Week2.pdf · PDF页12 / 幻灯片12

**语境：** Week2 · Propagation / obstacle / line of sight

**语境英文：** Movement of a signal / something in the way / a clear straight view.

**语境中文：** 传播／障碍物／视线；本页把无视线障碍作为激光传输条件。

**语境依据：** 必要基础释义

**使用结构：** line-of-sight propagation; obstacles in the line of sight

**语境原文：** 名称或用语片段

> line of sight

**语境原文来源：** Week2.pdf · PDF页12 / 幻灯片12

**语境来源：** Week2.pdf · PDF页12 / 幻灯片12

**使用结构：** line-of-sight propagation; obstacles in the line of sight

**全部来源：** Week2.pdf · PDF页12 / 幻灯片12

### Unidirectional / interference

**稳定ID：** csit985-w2-9fcd8d6b34cd13

**类别：** 阅读词汇

**中文解释：** 单向的／干扰；第12页用在无线传输描述中。

**简单英文（整理解释）：** Moving in one direction / unwanted effects on a signal.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> unidirectional

**原文来源：** Week2.pdf · PDF页12 / 幻灯片12

**语境：** Week2 · Unidirectional / interference

**语境英文：** Moving in one direction / unwanted effects on a signal.

**语境中文：** 单向的／干扰；第12页用在无线传输描述中。

**语境依据：** 必要基础释义

**使用结构：** unidirectional + transmission; affected by interference

**语境原文：** 名称或用语片段

> unidirectional

**语境原文来源：** Week2.pdf · PDF页12 / 幻灯片12

**语境来源：** Week2.pdf · PDF页12 / 幻灯片12

**使用结构：** unidirectional + transmission; affected by interference

**全部来源：** Week2.pdf · PDF页12 / 幻灯片12

### Be categorized based on

**稳定ID：** csit985-w2-c6516b8d6aba57

**类别：** 阅读词汇

**中文解释：** 按……分类；本页依据规模、范围、所有权和功能分类。

**简单英文（整理解释）：** Be put into groups using certain features.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> The network is categorized based on

**原文来源：** Week2.pdf · PDF页14 / 幻灯片14

**语境：** Week2 · Be categorized based on

**语境英文：** Be put into groups using certain features.

**语境中文：** 按……分类；本页依据规模、范围、所有权和功能分类。

**语境依据：** 必要基础释义

**使用结构：** be categorized based on + criterion

**语境原文：** 用法片段

> The network is categorized based on

**语境原文来源：** Week2.pdf · PDF页14 / 幻灯片14

**语境来源：** Week2.pdf · PDF页14 / 幻灯片14

**使用结构：** be categorized based on + criterion

**全部来源：** Week2.pdf · PDF页14 / 幻灯片14

### Geographic scope / ownership / functionalities

**稳定ID：** csit985-w2-3b51c69f59d4d3

**类别：** 阅读词汇

**中文解释：** 地理覆盖范围／所有权／功能；scope 在这里指覆盖范围。

**简单英文（整理解释）：** The area covered / who owns it / what it can do.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Geographic scope

**原文来源：** Week2.pdf · PDF页14 / 幻灯片14

**语境：** Week2 · Geographic scope / ownership / functionalities

**语境英文：** The area covered / who owns it / what it can do.

**语境中文：** 地理覆盖范围／所有权／功能；scope 在这里指覆盖范围。

**语境依据：** 必要基础释义

**使用结构：** geographic scope; network ownership

**语境原文：** 名称或用语片段

> Geographic scope

**语境原文来源：** Week2.pdf · PDF页14 / 幻灯片14

**语境来源：** Week2.pdf · PDF页14 / 幻灯片14；Week2.pdf · PDF页17 / 幻灯片17

**使用结构：** geographic scope; network ownership

**全部来源：** Week2.pdf · PDF页14 / 幻灯片14；Week2.pdf · PDF页17 / 幻灯片17

### Administer / share resources

**稳定ID：** csit985-w2-f72136e779918b

**类别：** 阅读词汇

**中文解释：** 管理／共享资源；LAN可由个人或单一组织管理，主要用于资源共享。

**简单英文（整理解释）：** Manage something / let several users use resources.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> administer

**原文来源：** Week2.pdf · PDF页16 / 幻灯片16

**语境：** Week2 · Administer / share resources

**语境英文：** Manage something / let several users use resources.

**语境中文：** 管理／共享资源；LAN可由个人或单一组织管理，主要用于资源共享。

**语境依据：** 必要基础释义

**使用结构：** be managed and administered by; resource sharing

**语境原文：** 名称或用语片段

> administer

**语境原文来源：** Week2.pdf · PDF页16 / 幻灯片16

**语境来源：** Week2.pdf · PDF页16 / 幻灯片16

**使用结构：** be managed and administered by; resource sharing

**全部来源：** Week2.pdf · PDF页16 / 幻灯片16

### In comparison with

**稳定ID：** csit985-w2-1161f3f5b03b7b

**类别：** 阅读词汇

**中文解释：** 与……相比；课件用MAN与LAN比较范围。

**简单英文（整理解释）：** Compared with something else.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> in comparison with

**原文来源：** Week2.pdf · PDF页17 / 幻灯片17

**语境：** Week2 · In comparison with

**语境英文：** Compared with something else.

**语境中文：** 与……相比；课件用MAN与LAN比较范围。

**语境依据：** 必要基础释义

**使用结构：** in comparison with + noun

**语境原文：** 名称或用语片段

> in comparison with

**语境原文来源：** Week2.pdf · PDF页17 / 幻灯片17

**语境来源：** Week2.pdf · PDF页17 / 幻灯片17

**使用结构：** in comparison with + noun

**全部来源：** Week2.pdf · PDF页17 / 幻灯片17

### Interconnect / span / leased

**稳定ID：** csit985-w2-3759de4c12e4c0

**类别：** 阅读词汇

**中文解释：** 互连／横跨、覆盖／租用的；WAN连接LAN并覆盖较广区域。

**简单英文（整理解释）：** Connect networks / extend across an area / rented.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> interconnect

**原文来源：** Week2.pdf · PDF页18 / 幻灯片18

**语境：** Week2 · Interconnect / span / leased

**语境英文：** Connect networks / extend across an area / rented.

**语境中文：** 互连／横跨、覆盖／租用的；WAN连接LAN并覆盖较广区域。

**语境依据：** 必要基础释义

**使用结构：** interconnect + networks; span + area; leased + line

**语境原文：** 名称或用语片段

> interconnect

**语境原文来源：** Week2.pdf · PDF页18 / 幻灯片18

**语境来源：** Week2.pdf · PDF页18 / 幻灯片18

**使用结构：** interconnect + networks; span + area; leased + line

**全部来源：** Week2.pdf · PDF页18 / 幻灯片18

### Allocate / oversee the evolution of

**稳定ID：** csit985-w2-ef54494de8362d

**类别：** 阅读词汇

**中文解释：** 分配／监督……的演变；课件分别用于IP地址管理和标准演进。

**简单英文（整理解释）：** Assign resources / watch and guide how something develops.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> allocating IP addresses

**原文来源：** Week2.pdf · PDF页19 / 幻灯片19

**资料原文：** 用法片段

> oversees the evolution of the Internet standards and protocols.

**原文来源：** Week2.pdf · PDF页19 / 幻灯片19

**语境：** Week2 · Allocate / oversee the evolution of

**语境英文：** Assign resources / watch and guide how something develops.

**语境中文：** 分配／监督……的演变；课件分别用于IP地址管理和标准演进。

**语境依据：** 必要基础释义

**使用结构：** allocate + resource; oversee the evolution of + system

**语境原文：** 用法片段

> allocating IP addresses

**语境原文来源：** Week2.pdf · PDF页19 / 幻灯片19

**语境原文：** 用法片段

> oversees the evolution of the Internet standards and protocols.

**语境原文来源：** Week2.pdf · PDF页19 / 幻灯片19

**语境来源：** Week2.pdf · PDF页19 / 幻灯片19

**使用结构：** allocate + resource; oversee the evolution of + system

**全部来源：** Week2.pdf · PDF页19 / 幻灯片19

### Dependent / surrogate

**稳定ID：** csit985-w2-3c4fffbe55cc61

**类别：** 阅读词汇

**中文解释：** 依赖的／代替者；在集中式网络页是从属计算机标签，不自动扩展成正式通用标准名。

**简单英文（整理解释）：** Relying on another / something acting in another's place.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Dependent

**原文来源：** Week2.pdf · PDF页21 / 幻灯片21

**语境：** Week2 · Dependent / surrogate

**语境英文：** Relying on another / something acting in another's place.

**语境中文：** 依赖的／代替者；在集中式网络页是从属计算机标签，不自动扩展成正式通用标准名。

**语境依据：** 必要基础释义

**使用结构：** dependent on; surrogate + computer

**语境原文：** 名称或用语片段

> Dependent

**语境原文来源：** Week2.pdf · PDF页21 / 幻灯片21

**语境来源：** Week2.pdf · PDF页21 / 幻灯片21

**使用结构：** dependent on; surrogate + computer

**全部来源：** Week2.pdf · PDF页21 / 幻灯片21

### Retrieve / be hosted on

**稳定ID：** csit985-w2-17dad5f510f269

**类别：** 阅读词汇

**中文解释：** 获取、取回／托管在……；客户机获取数据，云资源在远程服务器托管。

**简单英文（整理解释）：** Get stored information / be stored or run on a server.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Retrieving emails from an email server

**原文来源：** Week2.pdf · PDF页22 / 幻灯片22

**资料原文：** 用法片段

> Resources, processing, and data are hosted on remote servers on the cloud and accessed over the Internet.

**原文来源：** Week2.pdf · PDF页23 / 幻灯片23

**语境：** Week2 · Retrieve / be hosted on

**语境英文：** Get stored information / be stored or run on a server.

**语境中文：** 获取、取回／托管在……；客户机获取数据，云资源在远程服务器托管。

**语境依据：** 必要基础释义

**使用结构：** retrieve + information; be hosted on + server

**语境原文：** 用法片段

> Retrieving emails from an email server

**语境原文来源：** Week2.pdf · PDF页22 / 幻灯片22

**语境原文：** 用法片段

> Resources, processing, and data are hosted on remote servers on the cloud and accessed over the Internet.

**语境原文来源：** Week2.pdf · PDF页23 / 幻灯片23

**语境来源：** Week2.pdf · PDF页22 / 幻灯片22；Week2.pdf · PDF页23 / 幻灯片23

**使用结构：** retrieve + information; be hosted on + server

**全部来源：** Week2.pdf · PDF页22 / 幻灯片22；Week2.pdf · PDF页23 / 幻灯片23

### Stand alone / equal status

**稳定ID：** csit985-w2-2c3f614313d0b5

**类别：** 阅读词汇

**中文解释：** 独立运行／地位相等；分布式计算机可独立，对等设备地位相等。

**简单英文（整理解释）：** Work independently / have the same position or rights in this model.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> stand alone

**原文来源：** Week2.pdf · PDF页24 / 幻灯片24

**资料原文：** 名称或用语片段

> equal status

**原文来源：** Week2.pdf · PDF页25 / 幻灯片25

**语境：** Week2 · Stand alone / equal status

**语境英文：** Work independently / have the same position or rights in this model.

**语境中文：** 独立运行／地位相等；分布式计算机可独立，对等设备地位相等。

**语境依据：** 必要基础释义

**使用结构：** work as stand alone; have equal status

**语境原文：** 名称或用语片段

> stand alone

**语境原文来源：** Week2.pdf · PDF页24 / 幻灯片24

**语境原文：** 名称或用语片段

> equal status

**语境原文来源：** Week2.pdf · PDF页25 / 幻灯片25

**语境来源：** Week2.pdf · PDF页24 / 幻灯片24；Week2.pdf · PDF页25 / 幻灯片25

**使用结构：** work as stand alone; have equal status

**全部来源：** Week2.pdf · PDF页24 / 幻灯片24；Week2.pdf · PDF页25 / 幻灯片25

### Robust / predominant / reconfiguration

**稳定ID：** csit985-w2-8ebc8d8b3852cd

**类别：** 阅读词汇

**中文解释：** 稳健的／占主导的／重新配置；用于拓扑的优缺点与树根结构。

**简单英文（整理解释）：** Able to handle problems / most important / changing a configuration.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Robust

**原文来源：** Week2.pdf · PDF页29 / 幻灯片29

**资料原文：** 名称或用语片段

> predominant

**原文来源：** Week2.pdf · PDF页30 / 幻灯片30

**资料原文：** 名称或用语片段

> Reconfiguration

**原文来源：** Week2.pdf · PDF页31 / 幻灯片31

**语境：** Week2 · Robust / predominant / reconfiguration

**语境英文：** Able to handle problems / most important / changing a configuration.

**语境中文：** 稳健的／占主导的／重新配置；用于拓扑的优缺点与树根结构。

**语境依据：** 必要基础释义

**使用结构：** a robust network; the predominant element; reconfiguration

**语境原文：** 名称或用语片段

> Robust

**语境原文来源：** Week2.pdf · PDF页29 / 幻灯片29

**语境原文：** 名称或用语片段

> predominant

**语境原文来源：** Week2.pdf · PDF页30 / 幻灯片30

**语境原文：** 名称或用语片段

> Reconfiguration

**语境原文来源：** Week2.pdf · PDF页31 / 幻灯片31

**语境来源：** Week2.pdf · PDF页29 / 幻灯片29；Week2.pdf · PDF页30 / 幻灯片30；Week2.pdf · PDF页31 / 幻灯片31

**使用结构：** a robust network; the predominant element; reconfiguration

**全部来源：** Week2.pdf · PDF页29 / 幻灯片29；Week2.pdf · PDF页30 / 幻灯片30；Week2.pdf · PDF页31 / 幻灯片31

### Disrupt / diagnose

**稳定ID：** csit985-w2-52216f23f1d701

**类别：** 阅读词汇

**中文解释：** 中断或扰乱／诊断问题；环中增删设备可能扰乱全网，星形易诊断故障。

**简单英文（整理解释）：** Interrupt normal work / find the cause of a problem.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> diagnose

**原文来源：** Week2.pdf · PDF页32 / 幻灯片32

**资料原文：** 名称或用语片段

> disrupt

**原文来源：** Week2.pdf · PDF页33 / 幻灯片33

**语境：** Week2 · Disrupt / diagnose

**语境英文：** Interrupt normal work / find the cause of a problem.

**语境中文：** 中断或扰乱／诊断问题；环中增删设备可能扰乱全网，星形易诊断故障。

**语境依据：** 必要基础释义

**使用结构：** disrupt + network; diagnose + fault

**语境原文：** 名称或用语片段

> diagnose

**语境原文来源：** Week2.pdf · PDF页32 / 幻灯片32

**语境原文：** 名称或用语片段

> disrupt

**语境原文来源：** Week2.pdf · PDF页33 / 幻灯片33

**语境来源：** Week2.pdf · PDF页32 / 幻灯片32；Week2.pdf · PDF页33 / 幻灯片33

**使用结构：** disrupt + network; diagnose + fault

**全部来源：** Week2.pdf · PDF页32 / 幻灯片32；Week2.pdf · PDF页33 / 幻灯片33

### Be referred to as / be dependent on

**稳定ID：** csit985-w2-0e01fbe8eec4af

**类别：** 阅读词汇

**中文解释：** 被称为／取决于；课件32页写referred as（疑似漏to），解释中给完整用法，原片段仍保留。

**简单英文（整理解释）：** Be called / depend on a condition.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段（疑似漏词）

> The central point is referred as a hub.

**原文来源：** Week2.pdf · PDF页32 / 幻灯片32

**资料原文：** 用法片段

> The choice of network topologies is dependent on transmission medium, reliability of the network, the network size, and prediction of the future growth.

**原文来源：** Week2.pdf · PDF页34 / 幻灯片34（图表）

**语境：** Week2 · Be referred to as / be dependent on

**语境英文：** Be called / depend on a condition.

**语境中文：** 被称为／取决于；课件32页写referred as（疑似漏to），解释中给完整用法，原片段仍保留。

**语境依据：** 必要基础释义

**使用结构：** be referred to as + name; be dependent on + condition

**语境原文：** 用法片段（疑似漏词）

> The central point is referred as a hub.

**语境原文来源：** Week2.pdf · PDF页32 / 幻灯片32

**语境原文：** 用法片段

> The choice of network topologies is dependent on transmission medium, reliability of the network, the network size, and prediction of the future growth.

**语境原文来源：** Week2.pdf · PDF页34 / 幻灯片34（图表）

**语境来源：** Week2.pdf · PDF页32 / 幻灯片32；Week2.pdf · PDF页34 / 幻灯片34；Week2.pdf · PDF页34 / 幻灯片34（图表）

**使用结构：** be referred to as + name; be dependent on + condition

**全部来源：** Week2.pdf · PDF页32 / 幻灯片32；Week2.pdf · PDF页34 / 幻灯片34；Week2.pdf · PDF页34 / 幻灯片34（图表）

### Communicating entities / transmission / receipt

**稳定ID：** csit985-w2-0a44a5013b647e

**类别：** 阅读词汇

**中文解释：** 通信实体／传输／接收；receipt 此处是收到消息，不是购物收据。

**简单英文（整理解释）：** Things communicating / sending / receiving.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> communicating entities

**原文来源：** Week2.pdf · PDF页36 / 幻灯片36

**语境：** Week2 · Communicating entities / transmission / receipt

**语境英文：** Things communicating / sending / receiving.

**语境中文：** 通信实体／传输／接收；receipt 此处是收到消息，不是购物收据。

**语境依据：** 必要基础释义

**使用结构：** on the transmission and/or receipt of + message

**语境原文：** 名称或用语片段

> communicating entities

**语境原文来源：** Week2.pdf · PDF页36 / 幻灯片36

**语境来源：** Week2.pdf · PDF页36 / 幻灯片36

**使用结构：** on the transmission and/or receipt of + message

**全部来源：** Week2.pdf · PDF页36 / 幻灯片36

### Interpret / reverse a process

**稳定ID：** csit985-w2-658cbb409231c8

**类别：** 阅读词汇

**中文解释：** 理解其含义／逆向进行过程；解码要解释收到的信息。

**简单英文（整理解释）：** Understand the meaning / do the process in the opposite direction.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> interpret

**原文来源：** Week2.pdf · PDF页41 / 幻灯片41

**资料原文：** 名称或用语片段

> interpret

**原文来源：** Week2.pdf · PDF页43 / 幻灯片43

**语境：** Week2 · Interpret / reverse a process

**语境英文：** Understand the meaning / do the process in the opposite direction.

**语境中文：** 理解其含义／逆向进行过程；解码要解释收到的信息。

**语境依据：** 必要基础释义

**使用结构：** interpret + information; reverse + process

**语境原文：** 名称或用语片段

> interpret

**语境原文来源：** Week2.pdf · PDF页41 / 幻灯片41

**语境原文：** 名称或用语片段

> interpret

**语境原文来源：** Week2.pdf · PDF页43 / 幻灯片43

**语境来源：** Week2.pdf · PDF页41 / 幻灯片41；Week2.pdf · PDF页43 / 幻灯片43

**使用结构：** interpret + information; reverse + process

**全部来源：** Week2.pdf · PDF页41 / 幻灯片41；Week2.pdf · PDF页43 / 幻灯片43

### Corrupt / proactive / reactive / recovery

**稳定ID：** csit985-w2-530ffa627da580

**类别：** 阅读词汇

**中文解释：** 受损的／主动预防的／事后反应的／恢复；本页对比冲突前预防与冲突后恢复。

**简单英文（整理解释）：** Damaged / acting before a problem / acting after it / returning to a working state.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> proactive

**原文来源：** Week2.pdf · PDF页44 / 幻灯片44

**语境：** Week2 · Corrupt / proactive / reactive / recovery

**语境英文：** Damaged / acting before a problem / acting after it / returning to a working state.

**语境中文：** 受损的／主动预防的／事后反应的／恢复；本页对比冲突前预防与冲突后恢复。

**语境依据：** 必要基础释义

**使用结构：** messages become corrupt; prevent a problem; recovery after a collision

**语境原文：** 名称或用语片段

> proactive

**语境原文来源：** Week2.pdf · PDF页44 / 幻灯片44

**语境来源：** Week2.pdf · PDF页44 / 幻灯片44

**使用结构：** messages become corrupt; prevent a problem; recovery after a collision

**全部来源：** Week2.pdf · PDF页44 / 幻灯片44

### Diverse / representation / underlying

**稳定ID：** csit985-w2-043fe180d36644

**类别：** 阅读词汇

**中文解释：** 多样的／表示方式／底层的；表48说跨不同网络，表49说共同数据表示。

**简单英文（整理解释）：** Varied / a form used to show data / supporting something from below.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> diverse

**原文来源：** Week2.pdf · PDF页48 / 幻灯片48

**资料原文：** 名称或用语片段

> representation

**原文来源：** Week2.pdf · PDF页49 / 幻灯片49

**资料原文：** 名称或用语片段

> underlying

**原文来源：** Week2.pdf · PDF页54 / 幻灯片54

**语境：** Week2 · Diverse / representation / underlying

**语境英文：** Varied / a form used to show data / supporting something from below.

**语境中文：** 多样的／表示方式／底层的；表48说跨不同网络，表49说共同数据表示。

**语境依据：** 必要基础释义

**使用结构：** diverse networks; representation of data; underlying network

**语境原文：** 名称或用语片段

> diverse

**语境原文来源：** Week2.pdf · PDF页48 / 幻灯片48

**语境原文：** 名称或用语片段

> representation

**语境原文来源：** Week2.pdf · PDF页49 / 幻灯片49

**语境原文：** 名称或用语片段

> underlying

**语境原文来源：** Week2.pdf · PDF页54 / 幻灯片54

**语境来源：** Week2.pdf · PDF页48 / 幻灯片48；Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页54 / 幻灯片54

**使用结构：** diverse networks; representation of data; underlying network

**全部来源：** Week2.pdf · PDF页48 / 幻灯片48；Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页54 / 幻灯片54

### Segment / reassemble (verbs)

**稳定ID：** csit985-w2-725739177491aa

**类别：** 阅读词汇

**中文解释：** 分成小段／重新组装；表49描述transport服务。这条解释动词用法，segment名词另见专业英语。

**简单英文（整理解释）：** Divide into parts / put the parts together again.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> reassemble

**原文来源：** Week2.pdf · PDF页49 / 幻灯片49

**语境：** Week2 · Segment / reassemble (verbs)

**语境英文：** Divide into parts / put the parts together again.

**语境中文：** 分成小段／重新组装；表49描述transport服务。这条解释动词用法，segment名词另见专业英语。

**语境依据：** 必要基础释义

**使用结构：** segment and reassemble + data

**语境原文：** 名称或用语片段

> reassemble

**语境原文来源：** Week2.pdf · PDF页49 / 幻灯片49

**语境来源：** Week2.pdf · PDF页49 / 幻灯片49

**使用结构：** segment and reassemble + data

**全部来源：** Week2.pdf · PDF页49 / 幻灯片49

### Delineate

**稳定ID：** csit985-w2-9a4bc9416b63dc

**类别：** 阅读词汇

**中文解释：** 划定、清楚区分；协议规定消息字段如何分界。

**简单英文（整理解释）：** Mark clearly where something starts and ends.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> delineate

**原文来源：** Week2.pdf · PDF页58 / 幻灯片58

**语境：** Week2 · Delineate

**语境英文：** Mark clearly where something starts and ends.

**语境中文：** 划定、清楚区分；协议规定消息字段如何分界。

**语境依据：** 必要基础释义

**使用结构：** how fields are delineated

**语境原文：** 名称或用语片段

> delineate

**语境原文来源：** Week2.pdf · PDF页58 / 幻灯片58

**语境来源：** Week2.pdf · PDF页58 / 幻灯片58

**使用结构：** how fields are delineated

**全部来源：** Week2.pdf · PDF页58 / 幻灯片58

### Analogy

**稳定ID：** csit985-w2-60ac505b914f2a

**类别：** 阅读词汇

**中文解释：** 类比；用房屋的门说明socket，用住址和住户名说明地址与端口。

**简单英文（整理解释）：** A comparison used to explain an idea.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> analogy

**原文来源：** Week2.pdf · PDF页56 / 幻灯片56

**资料原文：** 名称或用语片段

> analogy

**原文来源：** Week2.pdf · PDF页68 / 幻灯片68

**资料原文：** 教师用语（TXT原片段）

> street address

**原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L26，本行字符2314起；搜索“street address”

**语境：** Week2 · Analogy

**语境英文：** A comparison used to explain an idea.

**语境中文：** 类比；用房屋的门说明socket，用住址和住户名说明地址与端口。

**语境依据：** 必要基础释义

**使用结构：** an analogy for; use an analogy

**语境原文：** 名称或用语片段

> analogy

**语境原文来源：** Week2.pdf · PDF页56 / 幻灯片56

**语境原文：** 名称或用语片段

> analogy

**语境原文来源：** Week2.pdf · PDF页68 / 幻灯片68

**语境原文：** 教师用语（TXT原片段）

> street address

**语境原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L26，本行字符2314起；搜索“street address”

**语境来源：** Week2.pdf · PDF页56 / 幻灯片56；Week2.pdf · PDF页68 / 幻灯片68；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L26，本行字符2314起；搜索“street address”

**使用结构：** an analogy for; use an analogy

**全部来源：** Week2.pdf · PDF页56 / 幻灯片56；Week2.pdf · PDF页68 / 幻灯片68；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L26，本行字符2314起；搜索“street address”

### Intact / guarantee / in order

**稳定ID：** csit985-w2-ebb13662ef1138

**类别：** 阅读词汇

**中文解释：** 完整无损的／保证／按顺序；UDP不保证完整到达，TCP提供按序可靠服务。

**简单英文（整理解释）：** Not damaged / promise a result / in the correct sequence.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> guarantee

**原文来源：** Week2.pdf · PDF页62 / 幻灯片62

**资料原文：** 名称或用语片段

> in order

**原文来源：** Week2.pdf · PDF页63 / 幻灯片63

**语境：** Week2 · Intact / guarantee / in order

**语境英文：** Not damaged / promise a result / in the correct sequence.

**语境中文：** 完整无损的／保证／按顺序；UDP不保证完整到达，TCP提供按序可靠服务。

**语境依据：** 必要基础释义

**使用结构：** arrive intact; does not guarantee that; correctly and in order

**语境原文：** 名称或用语片段

> guarantee

**语境原文来源：** Week2.pdf · PDF页62 / 幻灯片62

**语境原文：** 名称或用语片段

> in order

**语境原文来源：** Week2.pdf · PDF页63 / 幻灯片63

**语境来源：** Week2.pdf · PDF页62 / 幻灯片62；Week2.pdf · PDF页63 / 幻灯片63

**使用结构：** arrive intact; does not guarantee that; correctly and in order

**全部来源：** Week2.pdf · PDF页62 / 幻灯片62；Week2.pdf · PDF页63 / 幻灯片63

### Encapsulate / data chunks

**稳定ID：** csit985-w2-a6a10b1d6b0989

**类别：** 阅读词汇

**中文解释：** 封装／数据块；这里收集各socket的数据，并加入头部。

**简单英文（整理解释）：** Put data inside a structured unit / pieces of data.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> data chunks

**原文来源：** Week2.pdf · PDF页66 / 幻灯片66

**语境：** Week2 · Encapsulate / data chunks

**语境英文：** Put data inside a structured unit / pieces of data.

**语境中文：** 封装／数据块；这里收集各socket的数据，并加入头部。

**语境依据：** 必要基础释义

**使用结构：** encapsulate each data chunk with + header information

**语境原文：** 名称或用语片段

> data chunks

**语境原文来源：** Week2.pdf · PDF页66 / 幻灯片66

**语境来源：** Week2.pdf · PDF页66 / 幻灯片66

**使用结构：** encapsulate each data chunk with + header information

**全部来源：** Week2.pdf · PDF页66 / 幻灯片66

### Ranging from … to … / remaining

**稳定ID：** csit985-w2-901a20217b8688

**类别：** 阅读词汇

**中文解释：** 范围从……到……／剩余的；端口范围不能省略上下界。

**简单英文（整理解释）：** Having a range between two limits / left after the other parts.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Remaining

**原文来源：** Week2.pdf · PDF页67 / 幻灯片67

**语境：** Week2 · Ranging from … to … / remaining

**语境英文：** Having a range between two limits / left after the other parts.

**语境中文：** 范围从……到……／剩余的；端口范围不能省略上下界。

**语境依据：** 必要基础释义

**使用结构：** ranging from A to B; remaining + noun

**语境原文：** 名称或用语片段

> Remaining

**语境原文来源：** Week2.pdf · PDF页67 / 幻灯片67

**语境来源：** Week2.pdf · PDF页67 / 幻灯片67

**使用结构：** ranging from A to B; remaining + noun

**全部来源：** Week2.pdf · PDF页67 / 幻灯片67

### Elastic / proprietary / typically

**稳定ID：** csit985-w2-7f51cd5f573bbf

**类别：** 阅读词汇

**中文解释：** 弹性的／专有的／通常；图64的Elastic指需求标签但未定义，图65的typically不表示永远。

**简单英文（整理解释）：** Flexible / owned or controlled by a provider / usually, with possible exceptions.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 图表标签（视觉核对）

> Elastic

**原文来源：** Week2.pdf · PDF页64 / 幻灯片64（图表）

**资料原文：** 图表标签（视觉核对）

> proprietary

**原文来源：** Week2.pdf · PDF页65 / 幻灯片65（图表）

**资料原文：** 图表标签（视觉核对）

> Typically UDP

**原文来源：** Week2.pdf · PDF页65 / 幻灯片65（图表）

**语境：** Week2 · Elastic / proprietary / typically

**语境英文：** Flexible / owned or controlled by a provider / usually, with possible exceptions.

**语境中文：** 弹性的／专有的／通常；图64的Elastic指需求标签但未定义，图65的typically不表示永远。

**语境依据：** 必要基础释义

**使用结构：** typically + description; proprietary + protocol

**语境原文：** 图表标签（视觉核对）

> Elastic

**语境原文来源：** Week2.pdf · PDF页64 / 幻灯片64（图表）

**语境原文：** 图表标签（视觉核对）

> proprietary

**语境原文来源：** Week2.pdf · PDF页65 / 幻灯片65（图表）

**语境原文：** 图表标签（视觉核对）

> Typically UDP

**语境原文来源：** Week2.pdf · PDF页65 / 幻灯片65（图表）

**语境来源：** Week2.pdf · PDF页64 / 幻灯片64（图表）；Week2.pdf · PDF页65 / 幻灯片65（图表）

**使用结构：** typically + description; proprietary + protocol

**全部来源：** Week2.pdf · PDF页64 / 幻灯片64（图表）；Week2.pdf · PDF页65 / 幻灯片65（图表）

### Incoming / outgoing / bidirectional

**稳定ID：** csit985-w2-533fd64447830f

**类别：** 阅读词汇

**中文解释：** 入向的／出向的／双向的；相对于路由器和链路方向解释。

**简单英文（整理解释）：** Coming in / going out / moving in both directions.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> incoming

**原文来源：** Week2.pdf · PDF页72 / 幻灯片72

**资料原文：** 名称或用语片段

> bidirectional

**原文来源：** Week2.pdf · PDF页73 / 幻灯片73

**语境：** Week2 · Incoming / outgoing / bidirectional

**语境英文：** Coming in / going out / moving in both directions.

**语境中文：** 入向的／出向的／双向的；相对于路由器和链路方向解释。

**语境依据：** 必要基础释义

**使用结构：** incoming link; outgoing link; bidirectional link

**语境原文：** 名称或用语片段

> incoming

**语境原文来源：** Week2.pdf · PDF页72 / 幻灯片72

**语境原文：** 名称或用语片段

> bidirectional

**语境原文来源：** Week2.pdf · PDF页73 / 幻灯片73

**语境来源：** Week2.pdf · PDF页72 / 幻灯片72；Week2.pdf · PDF页73 / 幻灯片73

**使用结构：** incoming link; outgoing link; bidirectional link

**全部来源：** Week2.pdf · PDF页72 / 幻灯片72；Week2.pdf · PDF页73 / 幻灯片73

### Terminate / interoperate / execute / maintain

**稳定ID：** csit985-w2-c1d051b0489a74

**类别：** 阅读词汇

**中文解释：** 终接／互操作／执行／维护；输入端终接物理链路，处理器执行协议并维护表。

**简单英文（整理解释）：** End a physical link / work with another system / run / keep updated.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Maintain

**原文来源：** Week2.pdf · PDF页75 / 幻灯片75

**语境：** Week2 · Terminate / interoperate / execute / maintain

**语境英文：** End a physical link / work with another system / run / keep updated.

**语境中文：** 终接／互操作／执行／维护；输入端终接物理链路，处理器执行协议并维护表。

**语境依据：** 必要基础释义

**使用结构：** terminate a link; interoperate with; execute a protocol; maintain a table

**语境原文：** 名称或用语片段

> Maintain

**语境原文来源：** Week2.pdf · PDF页75 / 幻灯片75

**语境来源：** Week2.pdf · PDF页72 / 幻灯片72；Week2.pdf · PDF页75 / 幻灯片75

**使用结构：** terminate a link; interoperate with; execute a protocol; maintain a table

**全部来源：** Week2.pdf · PDF页72 / 幻灯片72；Week2.pdf · PDF页75 / 幻灯片75

### Human intervention / responsive to

**稳定ID：** csit985-w2-4b42525f1a4a0e

**类别：** 阅读词汇

**中文解释：** 人工干预／对……响应快；静态路由需人工修改，动态路由对变化响应更快。

**简单英文（整理解释）：** Action by a person / able to react to changes.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> human intervention

**原文来源：** Week2.pdf · PDF页80 / 幻灯片80

**语境：** Week2 · Human intervention / responsive to

**语境英文：** Action by a person / able to react to changes.

**语境中文：** 人工干预／对……响应快；静态路由需人工修改，动态路由对变化响应更快。

**语境依据：** 必要基础释义

**使用结构：** need human intervention; responsive to + changes

**语境原文：** 名称或用语片段

> human intervention

**语境原文来源：** Week2.pdf · PDF页80 / 幻灯片80

**语境来源：** Week2.pdf · PDF页80 / 幻灯片80

**使用结构：** need human intervention; responsive to + changes

**全部来源：** Week2.pdf · PDF页80 / 幻灯片80

### Vary dynamically / explicitly reflect / tend to

**稳定ID：** csit985-w2-288d2b7b304442

**类别：** 阅读词汇

**中文解释：** 动态变化／明确反映／倾向于；负载敏感算法倾向避开拥塞链路，不是保证永不经过。

**简单英文（整理解释）：** Change with conditions / show directly / often do something, without a guarantee.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> explicitly reflect

**原文来源：** Week2.pdf · PDF页81 / 幻灯片81

**语境：** Week2 · Vary dynamically / explicitly reflect / tend to

**语境英文：** Change with conditions / show directly / often do something, without a guarantee.

**语境中文：** 动态变化／明确反映／倾向于；负载敏感算法倾向避开拥塞链路，不是保证永不经过。

**语境依据：** 必要基础释义

**使用结构：** vary dynamically; explicitly reflect + condition; tend to + verb

**语境原文：** 名称或用语片段

> explicitly reflect

**语境原文来源：** Week2.pdf · PDF页81 / 幻灯片81

**语境来源：** Week2.pdf · PDF页81 / 幻灯片81

**使用结构：** vary dynamically; explicitly reflect + condition; tend to + verb

**全部来源：** Week2.pdf · PDF页81 / 幻灯片81

### Keep track of / adjacent

**稳定ID：** csit985-w2-cb2980bee5cb0b

**类别：** 阅读词汇

**中文解释：** 跟踪掌握／相邻的；分别用于邻居记录与链路连接的节点。

**简单英文（整理解释）：** Keep updated information about / next to something.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Keep track of

**原文来源：** Week2.pdf · PDF页82 / 幻灯片82

**资料原文：** 名称或用语片段

> adjacent

**原文来源：** Week2.pdf · PDF页87 / 幻灯片87

**语境：** Week2 · Keep track of / adjacent

**语境英文：** Keep updated information about / next to something.

**语境中文：** 跟踪掌握／相邻的；分别用于邻居记录与链路连接的节点。

**语境依据：** 必要基础释义

**使用结构：** keep track of + neighbours; adjacent + nodes

**语境原文：** 名称或用语片段

> Keep track of

**语境原文来源：** Week2.pdf · PDF页82 / 幻灯片82

**语境原文：** 名称或用语片段

> adjacent

**语境原文来源：** Week2.pdf · PDF页87 / 幻灯片87

**语境来源：** Week2.pdf · PDF页82 / 幻灯片82；Week2.pdf · PDF页87 / 幻灯片87

**使用结构：** keep track of + neighbours; adjacent + nodes

**全部来源：** Week2.pdf · PDF页82 / 幻灯片82；Week2.pdf · PDF页87 / 幻灯片87

### Bounded / minimal / guaranteed

**稳定ID：** csit985-w2-060e6484aa393b

**类别：** 阅读词汇

**中文解释：** 有上限的／最低的／得到保证的；本页描述可能的网络服务，不能省略限制。

**简单英文（整理解释）：** Limited by a bound / the smallest allowed / promised.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 名称或用语片段

> Guaranteed

**原文来源：** Week2.pdf · PDF页86 / 幻灯片86

**语境：** Week2 · Bounded / minimal / guaranteed

**语境英文：** Limited by a bound / the smallest allowed / promised.

**语境中文：** 有上限的／最低的／得到保证的；本页描述可能的网络服务，不能省略限制。

**语境依据：** 必要基础释义

**使用结构：** bounded delay; guaranteed minimal bandwidth

**语境原文：** 名称或用语片段

> Guaranteed

**语境原文来源：** Week2.pdf · PDF页86 / 幻灯片86

**语境来源：** Week2.pdf · PDF页86 / 幻灯片86

**使用结构：** bounded delay; guaranteed minimal bandwidth

**全部来源：** Week2.pdf · PDF页86 / 幻灯片86

### Establish a connection

**稳定ID：** csit985-w2-e685a389b983c5

**类别：** 阅读词汇

**中文解释：** 建立连接；物理连接必须在网络通信前建立，可以是有线或无线。

**简单英文（整理解释）：** Set up a connection before communication.

**说明依据：** 必要基础释义

**定义状态：** 当前资料未给出正式定义

**资料原文：** 用法片段

> Physical connection must be established before any network communication occurs

**原文来源：** Week2.pdf · PDF页89 / 幻灯片89

**语境：** Week2 · Establish a connection

**语境英文：** Set up a connection before communication.

**语境中文：** 建立连接；物理连接必须在网络通信前建立，可以是有线或无线。

**语境依据：** 必要基础释义

**使用结构：** establish + connection

**语境原文：** 用法片段

> Physical connection must be established before any network communication occurs

**语境原文来源：** Week2.pdf · PDF页89 / 幻灯片89

**语境来源：** Week2.pdf · PDF页89 / 幻灯片89

**使用结构：** establish + connection

**全部来源：** Week2.pdf · PDF页89 / 幻灯片89

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

### Precise / vague

**稳定ID：** csit985-w2-8fe5d060745e7c

**类别：** 阅读词汇

**中文解释：** 精确明确的／含糊的；教师要求机器通信规则精确。

**简单英文（整理解释）：** Clear and exact / not clear or exact.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语（TXT原片段）

> very precise

**原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符5038起；搜索“very precise”

**资料原文：** 教师用语（TXT原片段）

> very vague

**原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符5073起；搜索“very vague”

**语境：** Week2 · Precise / vague

**语境英文：** Clear and exact / not clear or exact.

**语境中文：** 精确明确的／含糊的；教师要求机器通信规则精确。

**语境依据：** 教师补充

**使用结构：** precise rules; vague requirements

**语境原文：** 教师用语（TXT原片段）

> very precise

**语境原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符5038起；搜索“very precise”

**语境原文：** 教师用语（TXT原片段）

> very vague

**语境原文来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符5073起；搜索“very vague”

**语境来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符5038起；搜索“very precise”；Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符5073起；搜索“very vague”

**使用结构：** precise rules; vague requirements

**全部来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符5038起；搜索“very precise”；Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符5073起；搜索“very vague”

### In isolation / subtle difference

**稳定ID：** csit985-w2-e4d4ad14ee621b

**类别：** 阅读词汇

**中文解释：** 孤立地／细微差别；协议一起工作，分层模型之间仍可能有细微差别。

**简单英文（整理解释）：** Alone, without others / a small difference that matters.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语（TXT原片段）

> isolation

**原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L8，本行字符1起；搜索“isolation”

**资料原文：** 教师用语（TXT原片段）

> subtle difference

**原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L8，本行字符2235起；搜索“subtle difference”

**语境：** Week2 · In isolation / subtle difference

**语境英文：** Alone, without others / a small difference that matters.

**语境中文：** 孤立地／细微差别；协议一起工作，分层模型之间仍可能有细微差别。

**语境依据：** 教师补充

**使用结构：** operate in isolation; a subtle difference between

**语境原文：** 教师用语（TXT原片段）

> isolation

**语境原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L8，本行字符1起；搜索“isolation”

**语境原文：** 教师用语（TXT原片段）

> subtle difference

**语境原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L8，本行字符2235起；搜索“subtle difference”

**语境来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L8，本行字符1起；搜索“isolation”；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L8，本行字符2235起；搜索“subtle difference”

**使用结构：** operate in isolation; a subtle difference between

**全部来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L8，本行字符1起；搜索“isolation”；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L8，本行字符2235起；搜索“subtle difference”

### Canonical / adaptive

**稳定ID：** csit985-w2-ae7f99990f745c

**类别：** 阅读词汇

**中文解释：** 典型、被认可为标准的／能适应变化的；这是教师形容模型与动态路由的表达，不是技术标准认证。

**简单英文（整理解释）：** Accepted as a standard example / able to change with conditions.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语（TXT原片段）

> canonical

**原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L8，本行字符1172起；搜索“canonical”

**资料原文：** 教师用语（TXT原片段）

> more adaptive

**原文来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L14，本行字符29起；搜索“more adaptive”

**语境：** Week2 · Canonical / adaptive

**语境英文：** Accepted as a standard example / able to change with conditions.

**语境中文：** 典型、被认可为标准的／能适应变化的；这是教师形容模型与动态路由的表达，不是技术标准认证。

**语境依据：** 教师补充

**使用结构：** a canonical model; an adaptive system

**语境原文：** 教师用语（TXT原片段）

> canonical

**语境原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L8，本行字符1172起；搜索“canonical”

**语境原文：** 教师用语（TXT原片段）

> more adaptive

**语境原文来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L14，本行字符29起；搜索“more adaptive”

**语境来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L8，本行字符1172起；搜索“canonical”；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L14，本行字符29起；搜索“more adaptive”

**使用结构：** a canonical model; an adaptive system

**全部来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L8，本行字符1172起；搜索“canonical”；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L14，本行字符29起；搜索“more adaptive”

### Digest / encounter / look into

**稳定ID：** csit985-w2-88fe594409d7fe

**类别：** 阅读词汇

**中文解释：** 理解并吸收／遇到／进一步查看；教师说不必一次消化所有概念，可在遇到问题时查阅。

**简单英文（整理解释）：** Understand gradually / meet a problem / examine something further.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语（TXT原片段）

> digest everything

**原文来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符4187起；搜索“digest everything”

**资料原文：** 教师用语（TXT原片段）

> encounter

**原文来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符4437起；搜索“encounter”

**资料原文：** 教师用语（TXT原片段）

> look into

**原文来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符4705起；搜索“look into”

**语境：** Week2 · Digest / encounter / look into

**语境英文：** Understand gradually / meet a problem / examine something further.

**语境中文：** 理解并吸收／遇到／进一步查看；教师说不必一次消化所有概念，可在遇到问题时查阅。

**语境依据：** 教师补充

**使用结构：** digest + information; encounter + problem; look into + concept

**语境原文：** 教师用语（TXT原片段）

> digest everything

**语境原文来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符4187起；搜索“digest everything”

**语境原文：** 教师用语（TXT原片段）

> encounter

**语境原文来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符4437起；搜索“encounter”

**语境原文：** 教师用语（TXT原片段）

> look into

**语境原文来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符4705起；搜索“look into”

**语境来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符4187起；搜索“digest everything”；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符4437起；搜索“encounter”；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符4705起；搜索“look into”

**使用结构：** digest + information; encounter + problem; look into + concept

**全部来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符4187起；搜索“digest everything”；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符4437起；搜索“encounter”；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符4705起；搜索“look into”

### Mandatory / recommended / assuming

**稳定ID：** csit985-w2-7da9c80b7c4756

**类别：** 阅读词汇

**中文解释：** 强制的／推荐的／假定……；录音区分讲座推荐参加、workshop不可缺，并说明slides足够的判断假定已有基础。仅作当时课堂语境。

**简单英文（整理解释）：** Required / advised / taking something as true for the statement.

**说明依据：** 教师补充

**定义状态：** 当前资料未给出正式定义

**资料原文：** 教师用语（TXT原片段）

> mandatory

**原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L56，本行字符2907起；搜索“mandatory”

**资料原文：** 教师用语（TXT原片段）

> recommended

**原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L56，本行字符3001起；搜索“recommended”

**资料原文：** 教师用语（TXT原片段）

> assuming you have

**原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L56，本行字符1264起；搜索“assuming you have”

**语境：** Week2 · Mandatory / recommended / assuming

**语境英文：** Required / advised / taking something as true for the statement.

**语境中文：** 强制的／推荐的／假定……；录音区分讲座推荐参加、workshop不可缺，并说明slides足够的判断假定已有基础。仅作当时课堂语境。

**语境依据：** 教师补充

**使用结构：** be mandatory; be recommended; assuming + clause

**语境原文：** 教师用语（TXT原片段）

> mandatory

**语境原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L56，本行字符2907起；搜索“mandatory”

**语境原文：** 教师用语（TXT原片段）

> recommended

**语境原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L56，本行字符3001起；搜索“recommended”

**语境原文：** 教师用语（TXT原片段）

> assuming you have

**语境原文来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L56，本行字符1264起；搜索“assuming you have”

**语境来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L56，本行字符2907起；搜索“mandatory”；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L56，本行字符3001起；搜索“recommended”；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L56，本行字符1264起；搜索“assuming you have”

**使用结构：** be mandatory; be recommended; assuming + clause

**全部来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L56，本行字符2907起；搜索“mandatory”；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L56，本行字符3001起；搜索“recommended”；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L56，本行字符1264起；搜索“assuming you have”

## 历史词组兼容说明

### Computer network

**旧ID：** csit985-w2-c2d20f7ba66cc6

**中文：** 计算机网络；两个或更多终端，通过有线或无线连接相连。

**简单英文：** Two or more end devices connected by wired or wireless links.

**来源：** Week2.pdf · PDF页5 / 幻灯片5

### Host / end device / end system

**旧ID：** csit985-w2-4f721c28a74962

**中文：** 主机／终端／端系统；消息从这里发出或在这里接收。

**简单英文：** A device where a message starts or is received.

**来源：** Week2.pdf · PDF页6 / 幻灯片6；Week2.pdf · PDF页55 / 幻灯片55

### Networking devices / intermediate devices

**旧ID：** csit985-w2-050e5bd653708e

**中文：** 联网设备／中间设备；使已连接设备之间能够通信和交互。

**简单英文：** Devices between end devices that enable communication.

**来源：** Week2.pdf · PDF页7 / 幻灯片7

### Switch

**旧ID：** csit985-w2-4db76c276601fb

**中文：** 交换机；教师说明它连接本地网络中的设备。

**简单英文：** A device that connects devices within a local network.

**来源：** Week2.pdf · PDF页7 / 幻灯片7；Week 2 - Lecture Rec-transcript.txt · TXT原始L14，本行字符3341起；搜索“it connects devices within local network”

### Router

**旧ID：** csit985-w2-a2660498aa486f

**中文：** 路由器；教师说明它连接不同网络并作转发决定。第71页分为四个组件。

**简单英文：** A device connecting networks and making forwarding decisions.

**来源：** Week2.pdf · PDF页7 / 幻灯片7；Week2.pdf · PDF页71 / 幻灯片71；Week 2 - Lecture Rec-transcript.txt · TXT原始L14，本行字符3386起；搜索“a router connects different networks”

### Hub / bridge / gateway / modem / repeater / access point

**旧ID：** csit985-w2-4b742b20ec561b

**中文：** 集线器／网桥／网关／调制解调器／中继器／接入点；第7页列举设备名，未逐个解释其机制。

**简单英文：** Names of networking devices; this page does not explain each device's operation.

**来源：** Week2.pdf · PDF页7 / 幻灯片7；Week2.pdf · PDF页33 / 幻灯片33

### IP address / IPv4 / IPv6

**旧ID：** csit985-w2-529d724fccaf46

**中文：** IP地址／IPv4／IPv6；第8页给出两种地址示例。教师说明地址用于识别主机或接口。

**简单英文：** Addresses used to identify a device or interface at the network layer.

**来源：** Week2.pdf · PDF页8 / 幻灯片8；Week 2 - Lecture Rec-transcript.txt · TXT原始L14，本行字符4281起；搜索“allow a device uh or interface to be identified”

### Transmission media / medium

**旧ID：** csit985-w2-353b483b1748a3

**中文：** 传输介质；提供设备通信的路径，分有线与无线。media 是 medium 的复数。

**简单英文：** The media through which network devices communicate.

**来源：** Week2.pdf · PDF页9 / 幻灯片9；Week2.pdf · PDF页89 / 幻灯片89；Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符69起；搜索“transmission media, transmission media”

### Wired / wireless transmission media

**旧ID：** csit985-w2-27e606941dc78c

**中文：** 有线／无线传输介质；第9页分为这两类，物理连接也可以是无线。

**简单英文：** Two types of transmission media: wired and wireless.

**来源：** Week2.pdf · PDF页9 / 幻灯片9；Week2.pdf · PDF页89 / 幻灯片89

### Twisted pair / coaxial cables / optical fiber

**旧ID：** csit985-w2-f96c4081c54b73

**中文：** 双绞线／同轴电缆／光纤；课件列铜线类别与光纤，教师说光纤用光传信息。

**简单英文：** Named wired media; optical fiber carries information using light.

**来源：** Week2.pdf · PDF页10 / 幻灯片10；Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符881起；搜索“it carry information using light”

### Restricted Proximity Network

**旧ID：** csit985-w2-7050610f021f79

**中文：** 近距离受限网络；本页描述为同时包含无线和固定设备的 LAN。

**简单英文：** A LAN combining wireless and fixed devices in this slide's classification.

**来源：** Week2.pdf · PDF页11 / 幻灯片11

### Intermediate/Extended Network

**旧ID：** csit985-w2-16bb5a8cb3c3eb

**中文：** 中间／扩展网络；两个固定 LAN 通过一个无线部分连接。

**简单英文：** Two fixed LANs joined by a wireless element.

**来源：** Week2.pdf · PDF页11 / 幻灯片11

### Mobile Network / base station

**旧ID：** csit985-w2-c1cebde8c5e594

**中文：** 移动网络／基站；用基站为陆地区域提供无线电网络。

**简单英文：** A network using a base station to provide radio coverage over land areas.

**来源：** Week2.pdf · PDF页11 / 幻灯片11

### Infrared wave

**旧ID：** csit985-w2-076654333abb5d

**中文：** 红外波；本页说它携带编码指令，使用视线传播。

**简单英文：** An electromagnetic wave carrying coded instructions with line-of-sight propagation.

**来源：** Week2.pdf · PDF页12 / 幻灯片12

### High-Frequency Radio (RF) wave

**旧ID：** csit985-w2-7579ea32115456

**中文：** 高频无线电波；本页称其距离比红外更远，并受干扰和雨影响。RF 全称按本页保留，措辞待核实。

**简单英文：** A radio medium described as having a longer range than infrared and being affected by interference and rain.

**来源：** Week2.pdf · PDF页12 / 幻灯片12

### Microwave / parabolic antennas

**旧ID：** csit985-w2-c64fbe88ad9b42

**中文：** 微波／抛物面天线；本页说使用一对天线、单向且不能穿过建筑物；教师没有细化适用条件。

**简单英文：** A wireless medium described with a pair of parabolic antennas; the slide's conditions are not developed.

**来源：** Week2.pdf · PDF页12 / 幻灯片12

### Laser light / line-of-sight propagation

**旧ID：** csit985-w2-c809723569748a

**中文：** 激光／视线传播；本页激光传输要求视线中无障碍。

**简单英文：** Laser transmission is described as requiring no obstacles in the line of sight.

**来源：** Week2.pdf · PDF页12 / 幻灯片12

### PAN (Personal Area Network)

**旧ID：** csit985-w2-c66ea3c6234131

**中文：** 个人区域网络；表中范围为几米，用于个人设备通信。

**简单英文：** A network for personal devices, over a few metres in the table.

**来源：** Week2.pdf · PDF页15 / 幻灯片15

### LAN (Local Area Network)

**旧ID：** csit985-w2-60ceddd08998b8

**中文：** 局域网；本页范围为较小地理区域，主要用于共享资源，由个人或单一组织管理。

**简单英文：** A network over a small area, mainly for sharing resources and managed by one person or organisation.

**来源：** Week2.pdf · PDF页15 / 幻灯片15；Week2.pdf · PDF页16 / 幻灯片16

### WLAN (Wireless LAN)

**旧ID：** csit985-w2-b835b59e075c9e

**中文：** 无线局域网；表中用于建筑／校园内的 Wi-Fi 本地接入。

**简单英文：** A wireless LAN for local Wi-Fi access.

**来源：** Week2.pdf · PDF页15 / 幻灯片15

### CAN (Campus Area Network)

**旧ID：** csit985-w2-9a94c20c1ba19f

**中文：** 校园区域网络；连接同一校园内多个建筑。

**简单英文：** A network connecting several buildings across a campus.

**来源：** Week2.pdf · PDF页15 / 幻灯片15

### MAN (Metropolitan Area Network)

**旧ID：** csit985-w2-2e7ed16cba1f6a

**中文：** 城域网；覆盖城市，PDF给10km到数百km的范围，仅为本资料说法。

**简单英文：** A network covering a city, with a greater scope than a LAN.

**来源：** Week2.pdf · PDF页15 / 幻灯片15；Week2.pdf · PDF页17 / 幻灯片17

### WAN (Wide Area Network)

**旧ID：** csit985-w2-b3ddea2d734197

**中文：** 广域网；连接跨较大地理区域的 LAN，可用公用、租用或私有通信设施，通常组合使用。

**简单英文：** A network connecting LANs across a large area, using public, leased, or private facilities.

**来源：** Week2.pdf · PDF页15 / 幻灯片15；Week2.pdf · PDF页18 / 幻灯片18

### SAN (Storage Area Network)

**旧ID：** csit985-w2-9631e1b04e5ab0

**中文：** 存储区域网络；表中用于数据中心的存储系统联网。

**简单英文：** A network for storage systems in a data centre.

**来源：** Week2.pdf · PDF页15 / 幻灯片15

### VPN (Virtual Private Network)

**旧ID：** csit985-w2-65eb79d08a5390

**中文：** 虚拟专用网络；表中是经 Internet 的虚拟网络，用于通过公用网络安全访问。

**简单英文：** A virtual network for secure access over public networks.

**来源：** Week2.pdf · PDF页15 / 幻灯片15

### Internet

**旧ID：** csit985-w2-13974bf02a9f65

**中文：** 互联网；本页说明 LAN 经 WAN 互连，多个机构参与标准和资源协调，不归单一个人或组织拥有。

**简单英文：** Interconnected networks whose standards and resources are coordinated by several organisations.

**来源：** Week2.pdf · PDF页18 / 幻灯片18；Week2.pdf · PDF页19 / 幻灯片19；Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符5380起；搜索“not owned by one person or one organization”

### IETF / ICANN / IAB

**旧ID：** csit985-w2-aa9195cbea670b

**中文：** 互联网协调机构：IETF制定标准；ICANN涉及域名系统与地址分配管理；IAB监督标准及协议演进。只按课件范围解释。

**简单英文：** Organisations named for Internet standards, names and addresses, and the development of standards and protocols.

**来源：** Week2.pdf · PDF页19 / 幻灯片19

### Broadband / leased lines / Metro Ethernet

**旧ID：** csit985-w2-8219f39fd86995

**中文：** 宽带／租用线路／城域以太网；第19页列为互联网接入方式，未给速率或详细定义。

**简单英文：** Named ways to connect to the Internet; no exact speeds are given.

**来源：** Week2.pdf · PDF页19 / 幻灯片19

### Centralized network / master / surrogates

**旧ID：** csit985-w2-9bd9699aaa2903

**中文：** 集中式网络／主控计算机／从属计算机；本页结构是一个 master 和依赖它的 surrogates。

**简单英文：** A network with a central master computer and dependent surrogate computers.

**来源：** Week2.pdf · PDF页21 / 幻灯片21

### Client-server network / client / server

**旧ID：** csit985-w2-0b76a9e8fe9947

**中文：** 客户机—服务器网络／客户机／服务器；client 请求信息，server 向终端提供信息。

**简单英文：** Clients request information; servers provide it.

**来源：** Week2.pdf · PDF页22 / 幻灯片22；Week2.pdf · PDF页54 / 幻灯片54

### Cloud-based network

**旧ID：** csit985-w2-2a7c543c866cdb

**中文：** 基于云的网络；资源、处理和数据在远程云服务器上，通过 Internet 访问。

**简单英文：** Resources, processing, and data are on remote cloud servers and accessed over the Internet.

**来源：** Week2.pdf · PDF页23 / 幻灯片23

### SaaS applications

**旧ID：** csit985-w2-a090ddea422a60

**中文：** SaaS 应用；作为云网络的常见用途出现。当前 PDF 未展开缩写或定义服务模型。

**简单英文：** Applications named as a common cloud use; the acronym is not expanded here.

**来源：** Week2.pdf · PDF页23 / 幻灯片23

### Distributed network

**旧ID：** csit985-w2-eb6754385c0b0b

**中文：** 分布式网络；计算机可能有本地资源，并能独立工作，may 不等于每台都必须如此。

**简单英文：** Computers may have their own resources and work on their own.

**来源：** Week2.pdf · PDF页24 / 幻灯片24

### Peer-to-peer network (P2P)

**旧ID：** csit985-w2-44bbffa4b17113

**中文：** 对等网络；设备地位相等，无中心服务器。本页称适合小网络，不能直接当作所有P2P系统的规模上限。

**简单英文：** A network with equal-status devices and no central server in this model.

**来源：** Week2.pdf · PDF页25 / 幻灯片25；Week2.pdf · PDF页54 / 幻灯片54

### Hybrid network / authentication

**旧ID：** csit985-w2-17a798963430c6

**中文：** 混合网络／身份认证；组合客户机—服务器、P2P或其他架构。例如中心服务器认证，对等设备直接共享数据。

**简单英文：** A network combining architectures; central servers may authenticate users while peers share data directly.

**来源：** Week2.pdf · PDF页26 / 幻灯片26；Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符9096起；搜索“authentication purpose”

### Network topology

**旧ID：** csit985-w2-ac72d7bfcdf4dc

**中文：** 网络拓扑；网络元素相互连接的方式。

**简单英文：** The way network elements are connected to each other.

**来源：** Week2.pdf · PDF页28 / 幻灯片28

### Mesh network

**旧ID：** csit985-w2-58b1a0e8c565c5

**中文：** 网状网络；设备之间有多个连接。课件列可靠、易定位隔离故障，也列布线和I/O端口成本高。

**简单英文：** A topology with multiple links between devices, offering reliability at higher cabling and port cost.

**来源：** Week2.pdf · PDF页29 / 幻灯片29；Week2.pdf · PDF页34 / 幻灯片34

### Tree network / root / child-parent relationship

**旧ID：** csit985-w2-1a500aeeb5cd06

**中文：** 树形网络／根／父子关系；层次结构。高处故障可能影响整条分支，不能把本页高可靠性视为无条件结论。

**简单英文：** A hierarchical topology with a root and parent-child links; a high-level failure can affect a whole branch.

**来源：** Week2.pdf · PDF页30 / 幻灯片30；Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符1121起；搜索“entire branch”

### Bus network / multipoint / backbone

**旧ID：** csit985-w2-53fc55f73d9f66

**中文：** 总线网络／多点／骨干；一条长电缆作为骨干连接所有设备，设备共享总线。

**简单英文：** A topology in which devices share one long backbone cable.

**来源：** Week2.pdf · PDF页31 / 幻灯片31

### Star network / central node

**旧ID：** csit985-w2-b1c114c9e2659b

**中文：** 星形网络／中心节点；设备连到中心。普通设备故障不影响全网，但中心节点故障可使全网失败。

**简单英文：** Devices connect to a central node; its failure affects the whole network.

**来源：** Week2.pdf · PDF页32 / 幻灯片32；Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符2369起；搜索“central device in the star can be normally a switch”

### Ring network / terminators

**旧ID：** csit985-w2-2287991532ddb1

**中文：** 环形网络／终端匹配器；本页说每设备有中继器、不需terminators；简单环断开或增删设备会中断网络。

**简单英文：** Devices form a ring; the slide describes failure and disruption in a simple ring.

**来源：** Week2.pdf · PDF页33 / 幻灯片33；Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符2900起；搜索“very simple ring”

### Fault identification / fault isolation

**旧ID：** csit985-w2-b66a9c941fdf8e

**中文：** 故障识别／故障隔离；课件列为 mesh、tree 或 ring 的优点，但未说明具体检测方法。

**简单英文：** Finding a fault / separating it; named topology benefits without a detailed method.

**来源：** Week2.pdf · PDF页29 / 幻灯片29；Week2.pdf · PDF页30 / 幻灯片30；Week2.pdf · PDF页33 / 幻灯片33

### I/O ports

**旧ID：** csit985-w2-2888dd42e80421

**中文：** 输入／输出端口；网状、树形网络的端口需求出现在成本说明中，不能与运输层端口号混同。

**简单英文：** Device input/output ports listed as a topology cost concern.

**来源：** Week2.pdf · PDF页29 / 幻灯片29；Week2.pdf · PDF页30 / 幻灯片30

### Protocol / network protocol

**旧ID：** csit985-w2-4537bc7fd10a86

**中文：** 协议／网络协议；规定通信消息的格式、顺序，以及发送、接收或其他事件发生时应采取的动作。

**简单英文：** Rules for message formats, order, and actions when messages or other events occur.

**来源：** Week2.pdf · PDF页36 / 幻灯片36；Week2.pdf · PDF页37 / 幻灯片37

### Communication / security / routing / service discovery protocols

**旧ID：** csit985-w2-b695f2834d4da7

**中文：** 通信／安全／路由／服务发现协议；四类用途名称，不是一个协议包办所有功能。

**简单英文：** Protocol purposes listed on the slide; no single protocol performs every network function.

**来源：** Week2.pdf · PDF页37 / 幻灯片37；Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符5603起；搜索“no single protocol performs every network function”

### Source / destination / communication path

**旧ID：** csit985-w2-ed9e740849597d

**中文：** 源／目的地／通信路径；指数据从哪里发出、发往哪里，以及经过的路径。

**简单英文：** The sender, receiver, and path used for communication.

**来源：** Week2.pdf · PDF页38 / 幻灯片38；Week2.pdf · PDF页39 / 幻灯片39

### Message encoding / decoding

**旧ID：** csit985-w2-5f6ecd04873236

**中文：** 消息编码／解码；把信息转为适合传输的形式，再反向解释。第41页把 convert 疑似误写为 covert，原句保留。

**简单英文：** Change information into a form for transmission, then reverse the process to interpret it.

**来源：** Week2.pdf · PDF页41 / 幻灯片41；Week2.pdf · PDF页43 / 幻灯片43

### Message formatting / encapsulation

**旧ID：** csit985-w2-11fa1a37bc3832

**中文：** 消息格式化／封装；消息须有规定格式。封装过程在图53与录音中表现为逐层添加头部。

**简单英文：** Use a specific message structure; add layer information as data moves down the stack.

**来源：** Week2.pdf · PDF页42 / 幻灯片42；Week2.pdf · PDF页53 / 幻灯片53（图表）；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符1335起；搜索“add some transport information”

### Message size / message timing / delivery options

**旧ID：** csit985-w2-c8496e5c4b5892

**中文：** 消息大小／消息时序／投递方式；协议需求中的三个维度。

**简单英文：** Requirements about message size, timing, and delivery.

**来源：** Week2.pdf · PDF页40 / 幻灯片40；Week2.pdf · PDF页43 / 幻灯片43；Week2.pdf · PDF页44 / 幻灯片44；Week2.pdf · PDF页45 / 幻灯片45

### Flow Control

**旧ID：** csit985-w2-bdf847abf6d40c

**中文：** 流量控制；管理发送速率以及可以发送的信息量。

**简单英文：** Manage how much data can be sent and how fast.

**来源：** Week2.pdf · PDF页44 / 幻灯片44；Week2.pdf · PDF页63 / 幻灯片63

### Response Timeout

**旧ID：** csit985-w2-ee20a56a283e73

**中文：** 响应超时；管理未收到目的地响应时设备等待多久。

**简单英文：** Manage how long a device waits without a response.

**来源：** Week2.pdf · PDF页44 / 幻灯片44

### Access method / collisions

**旧ID：** csit985-w2-716db6de43b353

**中文：** 访问方法／冲突；决定何时发送。本页冲突指多设备同时发送，消息受损。

**简单英文：** Rules for when to send; a collision occurs when simultaneous traffic corrupts messages.

**来源：** Week2.pdf · PDF页44 / 幻灯片44

### Unicast / multicast / broadcast

**旧ID：** csit985-w2-fd4f2236d60319

**中文：** 单播／组播／广播；一对一／一对多但通常非全部／一对全部。

**简单英文：** One-to-one / one-to-many, typically not all / one-to-all communication.

**来源：** Week2.pdf · PDF页45 / 幻灯片45

### Protocol stack / protocol suite / layered model

**旧ID：** csit985-w2-81eaa133811c76

**中文：** 协议栈／协议族／分层模型；本周用分层说明不同协议如何一起完成通信。名称有关联，但资料未正式定义三者区别。

**简单英文：** A layered view of protocols working together; their exact differences are not formally defined here.

**来源：** Week2.pdf · PDF页47 / 幻灯片47；Week2.pdf · PDF页51 / 幻灯片51；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L8，本行字符552起；搜索“each layer, uh, provides services”

### TCP/IP model / Internet Protocol Suite

**旧ID：** csit985-w2-3f1e6f73cf6c0a

**中文：** TCP/IP模型／互联网协议族；本页采用四层：Application、Transport、Internet、Network Access。

**简单英文：** A four-layer model in this lecture: application, transport, Internet, and network access.

**来源：** Week2.pdf · PDF页47 / 幻灯片47；Week2.pdf · PDF页48 / 幻灯片48；Week2.pdf · PDF页50 / 幻灯片50；Week2.pdf · PDF页51 / 幻灯片51

### OSI (Open Systems Interconnection) model

**旧ID：** csit985-w2-6fdba86fc27a8a

**中文：** 开放系统互连模型；有七层。Application/Presentation/Session对应此处TCP/IP的Application；Data Link/Physical对应Network Access。

**简单英文：** A seven-layer model whose functions are grouped into four layers in the TCP/IP view.

**来源：** Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页50 / 幻灯片50；Week2.pdf · PDF页51 / 幻灯片51

### AppleTalk / Novell NetWare

**旧ID：** csit985-w2-aab41e662bd641

**中文：** 课件列出的其他协议模型名称；本周未解释其运行方式，不补充历史或当前使用情况。

**简单英文：** Other protocol model names listed without explanation.

**来源：** Week2.pdf · PDF页47 / 幻灯片47

### Application layer

**旧ID：** csit985-w2-5d4067533cfb80

**中文：** 应用层；为通信应用和底层网络提供接口。OSI表写进程到进程通信协议，TCP/IP表还包含表示和对话控制。

**简单英文：** A layer between communication applications and the underlying network.

**来源：** Week2.pdf · PDF页48 / 幻灯片48；Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页54 / 幻灯片54；Week2.pdf · PDF页55 / 幻灯片55；Week2.pdf · PDF页58 / 幻灯片58

### Presentation layer

**旧ID：** csit985-w2-89d3d07209219c

**中文：** 表示层；OSI第6层，为应用层服务之间传输的数据提供共同表示。

**简单英文：** OSI layer 6, providing a common representation of data.

**来源：** Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页50 / 幻灯片50；Week2.pdf · PDF页49 / 幻灯片49（图表）

### Session layer

**旧ID：** csit985-w2-eb2e50154a62aa

**中文：** 会话层；OSI第5层，支持表示层并管理数据交换。

**简单英文：** OSI layer 5, supporting the presentation layer and managing data exchange.

**来源：** Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页50 / 幻灯片50

### Transport layer

**旧ID：** csit985-w2-20fdbec64b16ea

**中文：** 传输层；支持不同主机上的进程之间的逻辑通信；OSI表另列分段、传输与重组。第61页原句似缺少 between。

**简单英文：** A layer providing logical communication between processes on different hosts.

**来源：** Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页61 / 幻灯片61；Week2.pdf · PDF页49 / 幻灯片49（图表）

### Internet / Network layer

**旧ID：** csit985-w2-4348b42302557d

**中文：** 互联网层／网络层；把包从发送者送到接收者，涉及转发与路由。

**简单英文：** A layer moving packets from sender to receiver, with forwarding and routing functions.

**来源：** Week2.pdf · PDF页48 / 幻灯片48；Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页69 / 幻灯片69

### Network Access layer

**旧ID：** csit985-w2-4a0ac48a10b28c

**中文：** 网络接入层；TCP/IP本页中控制组成网络的硬件和介质，对应OSI的Data Link与Physical。

**简单英文：** The TCP/IP layer controlling network hardware and media in this model.

**来源：** Week2.pdf · PDF页48 / 幻灯片48；Week2.pdf · PDF页50 / 幻灯片50；Week2.pdf · PDF页51 / 幻灯片51

### Data Link layer / link layer

**旧ID：** csit985-w2-f3642a74617081

**中文：** 数据链路层／链路层；OSI第2层，在相邻节点之间的链路上交换frames。

**简单英文：** OSI layer 2, exchanging frames over links between adjacent nodes.

**来源：** Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页87 / 幻灯片87；Week2.pdf · PDF页88 / 幻灯片88

### Physical layer

**旧ID：** csit985-w2-6f2132df5b6959

**中文：** 物理层；OSI第1层，建立和维持物理连接，通过实际介质传输bits或symbols。物理连接可以无线。

**简单英文：** OSI layer 1, dealing with physical connections and sending bits over the medium.

**来源：** Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页89 / 幻灯片89；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符3064起；搜索“transmits the bits or symbols”；Week2.pdf · PDF页49 / 幻灯片49（图表）

### PDU (Protocol Data Unit)

**旧ID：** csit985-w2-a93ec03edca239

**中文：** 协议数据单元；不同层用不同名称：Data、Segment/Datagram、Packet、Frame、Bit/Symbol。

**简单英文：** The name for a unit of data at a protocol layer.

**来源：** Week2.pdf · PDF页52 / 幻灯片52；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符4911起；搜索“protocol data”

### Message / data

**旧ID：** csit985-w2-388ecfd48e8578

**中文：** 消息／数据；Application层的数据单元，表52还将Presentation和Session标为Data。

**简单英文：** Data-unit labels for the upper layers in this lecture.

**来源：** Week2.pdf · PDF页52 / 幻灯片52；Week2.pdf · PDF页55 / 幻灯片55

### Segment / datagram

**旧ID：** csit985-w2-c0171833abb26e

**中文：** 段／数据报；表52传输层两种名称，录音说明TCP用segment、UDP用datagram；图53的network层也写datagram，需按层次辨认。

**简单英文：** TCP uses segments and UDP uses datagrams; the network-layer figure also uses the word datagram.

**来源：** Week2.pdf · PDF页52 / 幻灯片52；Week2.pdf · PDF页53 / 幻灯片53（图表）；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符4883起；搜索“in TCP we call”

### Packet / frame / bit / symbol

**旧ID：** csit985-w2-e06d37b384bfa3

**中文：** 包／帧／比特／符号；表52分别对应Network、Data Link、Physical。不要把不同层名称混用。

**简单英文：** Data units for network, data link, and physical layers in the table.

**来源：** Week2.pdf · PDF页52 / 幻灯片52；Week2.pdf · PDF页69 / 幻灯片69；Week2.pdf · PDF页87 / 幻灯片87；Week2.pdf · PDF页89 / 幻灯片89

### Header / M / Ht / Hn / Hl

**旧ID：** csit985-w2-c9052549fecdb5

**中文：** 头部／应用数据M／传输层、网络层、链路层头部；图53用下标表示各层添加的控制信息。

**简单英文：** The figure shows application data M with headers for transport, network, and link layers.

**来源：** Week2.pdf · PDF页53 / 幻灯片53（图表）；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符1370起；搜索“this HT”

### Process / sending process / receiving process

**旧ID：** csit985-w2-ff4bb2ddcce089

**中文：** 进程／发送进程／接收进程；process 在这里是端系统中正在运行的程序，不是一般工作流程。

**简单英文：** A program running in an end system; processes send or receive messages.

**来源：** Week2.pdf · PDF页55 / 幻灯片55

### Socket / API (Application Programming Interface)

**旧ID：** csit985-w2-1f0bcf8c5bea6b

**中文：** 套接字／应用程序编程接口；进程经此虚拟接口向网络发送或从网络接收消息。图57区分应用开发者与操作系统的控制范围。

**简单英文：** A virtual interface through which a process sends and receives network messages.

**来源：** Week2.pdf · PDF页56 / 幻灯片56；Week2.pdf · PDF页57 / 幻灯片57（图表）

### Syntax / semantics / message fields

**旧ID：** csit985-w2-2de23e21d1f1d4

**中文：** 语法结构／语义／消息字段；协议规定字段怎样划分、含义是什么，以及何时怎样收发消息。

**简单英文：** The structure, meaning, and parts of a message defined by a protocol.

**来源：** Week2.pdf · PDF页58 / 幻灯片58

### FTP (File Transfer Protocol)

**旧ID：** csit985-w2-a8ae8fff4cfc0f

**中文：** 文件传输协议；第59页列为文件服务，端口表给TCP 21。

**简单英文：** An application-layer protocol for file services; listed with TCP port 21.

**来源：** Week2.pdf · PDF页59 / 幻灯片59；Week2.pdf · PDF页67 / 幻灯片67

### DNS (Domain Name Service)

**旧ID：** csit985-w2-470cf22d14567f

**中文：** DNS；全称按第59页保留为Domain Name Service。图65列Name translation，录音讲域名解析。两种措辞并列，不私自改写全称。

**简单英文：** An application-layer service associated with domain names and name translation in these sources.

**来源：** Week2.pdf · PDF页59 / 幻灯片59；Week2.pdf · PDF页65 / 幻灯片65（图表）；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符4400起；搜索“domain name, uh, resolution”

### HTTP / HTTPS

**旧ID：** csit985-w2-fdb712a172a22c

**中文：** 超文本传输协议／安全超文本传输协议；web服务协议，端口表给TCP 80／443；TXT把HTTP端口写成880，疑似转写错误，以PDF为准。

**简单英文：** Application-layer web protocols listed with TCP ports 80 and 443.

**来源：** Week2.pdf · PDF页59 / 幻灯片59；Week2.pdf · PDF页60 / 幻灯片60；Week2.pdf · PDF页67 / 幻灯片67；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L26，本行字符1646起；搜索“HTTP, uh, this protocol normally use port 880”

### SMTP / POP / IMAP

**旧ID：** csit985-w2-7ec462d53ef914

**中文：** 简单邮件传输协议／邮局协议／互联网消息访问协议；课件列为邮件协议。第67页另外列POP3 email端口TCP 110。

**简单英文：** Email protocols named on the slides; POP3 is listed with TCP port 110.

**来源：** Week2.pdf · PDF页59 / 幻灯片59；Week2.pdf · PDF页67 / 幻灯片67；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符4458起；搜索“Email sending”

### Web application / application-layer protocol

**旧ID：** csit985-w2-efd2a565402ad4

**中文：** Web应用／应用层协议；Web应用还包含文档格式、浏览器和服务器，不能把整个应用等同HTTP。

**简单英文：** A web application includes document formats, browsers, servers, and a protocol such as HTTP.

**来源：** Week2.pdf · PDF页60 / 幻灯片60

### HTML

**旧ID：** csit985-w2-4a1049d7ac7b00

**中文：** 文档格式标准的示例；资料没有展开缩写或说明标签语法。

**简单英文：** A document-format standard named as a web application component.

**来源：** Week2.pdf · PDF页60 / 幻灯片60

### UDP (User Datagram Protocol)

**旧ID：** csit985-w2-3247ae604a071a

**中文：** 用户数据报协议；无连接，不保证到达且完整，不提供其自身的拥塞控制，发送前不进行TCP式握手。

**简单英文：** A connectionless protocol that does not guarantee intact delivery or provide its own congestion control.

**来源：** Week2.pdf · PDF页61 / 幻灯片61；Week2.pdf · PDF页62 / 幻灯片62；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L14，本行字符5461起；搜索“UDP is”

### TCP (Transmission Control Protocol)

**旧ID：** csit985-w2-8aa401c2a87cf9

**中文：** 传输控制协议；可靠、面向连接；用流量控制、序号、确认和计时器，实现正确、按序传输，并提供拥塞控制。

**简单英文：** A reliable, connection-oriented protocol using control mechanisms for correct, ordered delivery.

**来源：** Week2.pdf · PDF页61 / 幻灯片61；Week2.pdf · PDF页63 / 幻灯片63

### Connectionless / connection-oriented / handshaking

**旧ID：** csit985-w2-ea91755d1ee5c0

**中文：** 无连接／面向连接／握手；这里用于对比UDP与TCP的服务及发送前的准备。

**简单英文：** Service types and connection setup terms used to compare UDP and TCP.

**来源：** Week2.pdf · PDF页62 / 幻灯片62；Week2.pdf · PDF页63 / 幻灯片63

### Sequence numbers / acknowledgements / timers

**旧ID：** csit985-w2-0a3e111ff0230f

**中文：** 序列号／确认／计时器；TCP使用的机制名称，当前资料没有逐一解释算法。

**简单英文：** Mechanisms named as part of TCP; detailed algorithms are not given.

**来源：** Week2.pdf · PDF页63 / 幻灯片63；Week2.pdf · PDF页39 / 幻灯片39

### Congestion control

**旧ID：** csit985-w2-b97aa016226989

**中文：** 拥塞控制；课件对比TCP提供、UDP不提供。不要与Flow Control完全等同。

**简单英文：** A control mechanism provided by TCP and not by UDP in this lecture.

**来源：** Week2.pdf · PDF页62 / 幻灯片62；Week2.pdf · PDF页63 / 幻灯片63

### Demultiplexing

**旧ID：** csit985-w2-6768e5ea74353b

**中文：** 分用；将收到的传输层segment交付给正确socket。录音第一次把名称写成multiplexing，按PDF保留差异。

**简单英文：** Deliver a received transport-layer segment to the correct socket.

**来源：** Week2.pdf · PDF页66 / 幻灯片66；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L26，本行字符1030起；搜索“multiplexing is the delivery of a received segments”

### Multiplexing

**旧ID：** csit985-w2-b3d3c7109e2160

**中文：** 复用；从不同socket收集数据，加头部形成segments，再交给network层。

**简单英文：** Gather data from different sockets, add headers, create segments, and pass them to the network layer.

**来源：** Week2.pdf · PDF页66 / 幻灯片66；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L26，本行字符1152起；搜索“gathering the data from different sockets”

### Socket identifier / source and destination port number

**旧ID：** csit985-w2-27d7f4b39928c4

**中文：** 套接字标识／源和目的端口号；用于分用和复用，端口号是16位，范围0–65535。

**简单英文：** Information used for multiplexing and demultiplexing; port numbers are 16-bit values.

**来源：** Week2.pdf · PDF页66 / 幻灯片66；Week2.pdf · PDF页67 / 幻灯片67

### Well-known / registered / private port numbers

**旧ID：** csit985-w2-196e11f64d3b30

**中文：** 熟知／注册／私有端口号；课件范围分别为0–1023、1024–49151、49152–65535。名称按课件，不扩展标准细分。

**简单英文：** Port ranges listed in the lecture: 0–1023, 1024–49151, and 49152–65535.

**来源：** Week2.pdf · PDF页67 / 幻灯片67

### Throughput / loss-tolerant / time-sensitive / elastic

**旧ID：** csit985-w2-95cb877f835bec

**中文：** 吞吐量／可容忍丢失的／时间敏感的／弹性的；图64是应用需求表，Elastic未给正式定义或精确阈值。

**简单英文：** Labels for application requirements in the figure; elastic is not formally defined.

**来源：** Week2.pdf · PDF页64 / 幻灯片64（图表）

### Telnet / NFS / SNMP

**旧ID：** csit985-w2-6216ecc5e48baa

**中文：** 图65列：Telnet用于remote terminal access，NFS用于remote file server，SNMP用于network management。图示分别为TCP、typically UDP、typically UDP。

**简单英文：** Protocols named in the application/transport table; the word typically limits the UDP claims.

**来源：** Week2.pdf · PDF页65 / 幻灯片65（图表）

### Forwarding / switching / data plane

**旧ID：** csit985-w2-f67ec59111d4bb

**中文：** 转发／交换／数据平面；本地动作，把包从输入接口送到输出接口。

**简单英文：** A local data-plane action moving a packet from an input interface to an output interface.

**来源：** Week2.pdf · PDF页69 / 幻灯片69；Week2.pdf · PDF页70 / 幻灯片70（图表）

### Routing / control plane

**旧ID：** csit985-w2-a3c7c8a012da8d

**中文：** 路由／控制平面；决定端到端路径，而非每个包的本地输出动作。

**简单英文：** A control-plane function determining the end-to-end path.

**来源：** Week2.pdf · PDF页69 / 幻灯片69；Week2.pdf · PDF页70 / 幻灯片70（图表）

### Input ports / output ports

**旧ID：** csit985-w2-a1058cffb9fb8e

**中文：** 路由器输入／输出端口；输入端执行物理层与链路层功能，输出端存包并经出链路发送。不同于应用端口号。

**简单英文：** Router components handling incoming and outgoing links and their physical/link-layer work.

**来源：** Week2.pdf · PDF页71 / 幻灯片71；Week2.pdf · PDF页72 / 幻灯片72；Week2.pdf · PDF页73 / 幻灯片73

### Switching fabric / switch fabric

**旧ID：** csit985-w2-9051772b540cdc

**中文：** 交换结构；路由器内部连接输入和输出端口。课件两种名称均保留。

**简单英文：** The internal router component connecting input ports to output ports.

**来源：** Week2.pdf · PDF页71 / 幻灯片71；Week2.pdf · PDF页74 / 幻灯片74

### Routing processor

**旧ID：** csit985-w2-f6c04c00ea09ad

**中文：** 路由处理器；执行控制平面工作。传统路由器运行协议、维护状态并计算转发表；SDN中与控制器通信。

**简单英文：** The router component performing control-plane functions.

**来源：** Week2.pdf · PDF页75 / 幻灯片75

### Routing table / forwarding table / flow table

**旧ID：** csit985-w2-d6b5aae45b187d

**中文：** 路由表／转发表／流表；课件讨论其计算及分发。资料没有完整定义三者差别。

**简单英文：** Tables used in routing and forwarding; their full differences are not defined here.

**来源：** Week2.pdf · PDF页75 / 幻灯片75；Week2.pdf · PDF页76 / 幻灯片76；Week2.pdf · PDF页82 / 幻灯片82

### SDN (Software-defined Network) / controller

**旧ID：** csit985-w2-85d3944e140bd3

**中文：** 软件定义网络／控制器；PDF用此全称，录音说software-defined networking。逻辑中心控制器可计算并分发表项。

**简单英文：** A network design using a controller to compute and distribute forwarding information.

**来源：** Week2.pdf · PDF页75 / 幻灯片75；Week2.pdf · PDF页76 / 幻灯片76；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L8，本行字符3217起；搜索“logically centralized control”

### Per-router control

**旧ID：** csit985-w2-2c3c01500ee5e7

**中文：** 逐路由器控制；每个路由器运行路由算法，路由与转发功能均在路由器内。

**简单英文：** Each router runs a routing algorithm and includes routing and forwarding functions.

**来源：** Week2.pdf · PDF页76 / 幻灯片76

### Logically centralized control

**旧ID：** csit985-w2-1db6ab8e8302c5

**中文：** 逻辑集中控制；一个逻辑中心计算并分发转发表。教师说它可由不同物理系统实现，以支持resilience。

**简单英文：** A logically central controller computes and distributes forwarding tables; it may use several physical systems.

**来源：** Week2.pdf · PDF页76 / 幻灯片76；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L8，本行字符3529起；搜索“implemented using different physical systems”

### Routing algorithm / least-cost path

**旧ID：** csit985-w2-1e19cb69f792c1

**中文：** 路由算法／最小代价路径；课件以least cost说明good path，教师提醒cost不只指金钱。

**简单英文：** An algorithm choosing paths using a cost measure; cost is not necessarily money.

**来源：** Week2.pdf · PDF页77 / 幻灯片77；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L8，本行字符4193起；搜索“cost doesn't always mean”

### Centralized / Link-State (LS) algorithm

**旧ID：** csit985-w2-85b48de92c1b41

**中文：** 集中式／链路状态算法；使用完整的全网节点和链路信息计算最小代价路径。

**简单英文：** Compute least-cost paths using complete global knowledge of nodes and links.

**来源：** Week2.pdf · PDF页78 / 幻灯片78

### Decentralized / distance-vector (DV) algorithm

**旧ID：** csit985-w2-b1fc8f9298cdef

**中文：** 分散式／距离向量算法；路由器交互计算，各节点维护到其他节点的代价估计向量。

**简单英文：** Routers compute paths through distributed interaction and keep estimates of costs to destinations.

**来源：** Week2.pdf · PDF页79 / 幻灯片79

### Static routing algorithm

**旧ID：** csit985-w2-ebbc7015f87824

**中文：** 静态路由算法；路由随时间变化很慢，需要人工干预，如手动改链路代价。

**简单英文：** Routes change slowly and need human intervention.

**来源：** Week2.pdf · PDF页80 / 幻灯片80

### Dynamic routing algorithm

**旧ID：** csit985-w2-ab5faf9fd86a3a

**中文：** 动态路由算法；流量负载或拓扑改变时调整路径，对网络变化响应更快。

**简单英文：** Change routing paths when traffic loads or topology change.

**来源：** Week2.pdf · PDF页80 / 幻灯片80

### Load-sensitive routing algorithm

**旧ID：** csit985-w2-fe69c7ca4825f9

**中文：** 负载敏感路由算法；链路代价随拥塞动态改变，高拥塞代价使算法倾向绕行。

**简单英文：** Link costs reflect congestion, so the algorithm tends to avoid costly congested links.

**来源：** Week2.pdf · PDF页81 / 幻灯片81

### Load-insensitive routing algorithm

**旧ID：** csit985-w2-436b19009ac651

**中文：** 负载不敏感路由算法；链路代价不明确反映当前拥塞水平，不等于完全忽略一切网络条件。

**简单英文：** A link's cost does not explicitly reflect its current congestion.

**来源：** Week2.pdf · PDF页81 / 幻灯片81

### Link-state / shortest-path-first protocols

**旧ID：** csit985-w2-7dc2ce229422e4

**中文：** 链路状态／最短路径优先协议；路由器记录邻居、全网拓扑与路由表，向其他路由器发送自身链路状态更新。

**简单英文：** Protocols distributing link-state information to build a topology view and choose paths.

**来源：** Week2.pdf · PDF页82 / 幻灯片82

### Distance-Vector protocols / hop count

**旧ID：** csit985-w2-8436acd74fdce0

**中文：** 距离向量协议／跳数；课件说向邻居传递完整路由表，RIP以跳数选路。

**简单英文：** Protocols sharing route information with neighbours; RIP uses hop count in this slide.

**来源：** Week2.pdf · PDF页83 / 幻灯片83

### OSPF / RIP / BGP / ARPAnet

**旧ID：** csit985-w2-eafe385fbea971

**中文：** 课件中的协议／网络名称：OSPF为link-state例子，RIP为distance-vector例子，前三者在81页列为load-insensitive；ARPAnet列为load-sensitive例子。

**简单英文：** Names used to illustrate routing classifications; the transcribed full names are partly unclear.

**来源：** Week2.pdf · PDF页81 / 幻灯片81；Week2.pdf · PDF页82 / 幻灯片82；Week2.pdf · PDF页83 / 幻灯片83；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L20，本行字符5起；搜索“routing information protocol”；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L14，本行字符1144起；搜索“border gateway protocol”

### IP (Internet Protocol)

**旧ID：** csit985-w2-b830b427252a2f

**中文：** 互联网协议；提供网络层编址和跨互连网络的包交付，头部含源、目的地址等控制信息。

**简单英文：** A protocol for network-layer addressing and packet delivery across interconnected networks.

**来源：** Week2.pdf · PDF页8 / 幻灯片8；Week2.pdf · PDF页84 / 幻灯片84；Week2.pdf · PDF页85 / 幻灯片85；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符106起；搜索“it provides network layer addressing”

### IPv4 datagram format

**旧ID：** csit985-w2-95662fb3b24d54

**中文：** IPv4数据报格式；图84列头部、源／目的IP地址、可选Options和Data；不把此图当IPv6格式。

**简单英文：** The IPv4 datagram format shown in the figure, including header fields and data.

**来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

### Version / header length / type of service / datagram length

**旧ID：** csit985-w2-3f50d6d7913556

**中文：** 版本／头部长度／服务类型／数据报长度；IPv4图中的字段，长度字段标bytes，图未逐个定义作用。

**简单英文：** IPv4 fields shown in the figure; datagram length is labelled in bytes.

**来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

### Identifier / flags / fragmentation offset

**旧ID：** csit985-w2-5d3aadc6617c4f

**中文：** 标识／标志／分片偏移；图84分别标16-bit identifier、Flags、13-bit fragmentation offset，当前资料未解释位含义。

**简单英文：** IPv4 fields with 16-bit identifier and 13-bit fragmentation offset shown in the figure.

**来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

### Time-to-live / upper-layer protocol / header checksum

**旧ID：** csit985-w2-e6655f2c5e2dc4

**中文：** 生存时间／上层协议／头部校验和；IPv4头部标签，图中未定义各字段行为。

**简单英文：** Named IPv4 header fields; their detailed behaviour is not defined here.

**来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）

### Source / destination IP address

**旧ID：** csit985-w2-76db5b9fe91ac1

**中文：** 源／目的IP地址；图84的IPv4字段均标32-bit，说明从哪来、往哪去。

**简单英文：** IPv4 source and destination address fields, each labelled 32-bit.

**来源：** Week2.pdf · PDF页84 / 幻灯片84（图表）；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符514起；搜索“your source IP address”

### Fragmentation / reassembly / MTU

**旧ID：** csit985-w2-985d1c4565c464

**中文：** 分片／重组／MTU；图85例子将4000-byte数据报经1500-byte Link MTU拆为3个较小数据报，再合成一个。图未展开MTU缩写或给一般算法。

**简单英文：** The figure splits one 4,000-byte datagram into three and reassembles them; the link MTU is 1,500 bytes.

**来源：** Week2.pdf · PDF页85 / 幻灯片85（图表）

### Network service model

**旧ID：** csit985-w2-311aea6d3cc600

**中文：** 网络服务模型；规定发送者与接收者间端到端包交付的特征。

**简单英文：** Characteristics of end-to-end packet delivery between senders and receivers.

**来源：** Week2.pdf · PDF页86 / 幻灯片86

### Guaranteed delivery / bounded delay / in-order packet delivery

**旧ID：** csit985-w2-751ff8380b04df

**中文：** 保证交付／有界时延／按序交付；第86页列出的可能服务。列出这些不表示每种网络都保证它们。

**简单英文：** Possible network services: delivery guarantees, a delay bound, and delivery in order.

**来源：** Week2.pdf · PDF页86 / 幻灯片86

### Guaranteed minimal bandwidth / security

**旧ID：** csit985-w2-a90c72eb90a92c

**中文：** 保证最低带宽／安全；网络服务模型的可能服务标签，当前资料未给数值或实现细节。

**简单英文：** Possible services named without exact limits or implementation details.

**来源：** Week2.pdf · PDF页86 / 幻灯片86

### Best-effort service

**旧ID：** csit985-w2-f807f6e33df75f

**中文：** 尽力而为服务；本页称其为一种特殊服务，当前资料未给正式定义或精确保证。

**简单英文：** A special service named in the slide; no formal definition is given this week.

**来源：** Week2.pdf · PDF页86 / 幻灯片86

### NIC (network interface card)

**旧ID：** csit985-w2-9755877b36eaf0

**中文：** 网络接口卡；设备连接网络需要NIC，一个设备可以有一个或多个。TXT的internet interface card疑似转写错误，以PDF为准。

**简单英文：** A card needed to connect a device to a network; a device may have one or more.

**来源：** Week2.pdf · PDF页87 / 幻灯片87；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符2357起；搜索“internet interface card”

### Framing / link access / reliable delivery

**旧ID：** csit985-w2-2293dcfbe57a97

**中文：** 成帧／链路访问／可靠交付；第88页列为链路层服务，未说明所有链路协议是否都提供全部服务。

**简单英文：** Named link-layer services; the slide does not say every link protocol provides all of them.

**来源：** Week2.pdf · PDF页88 / 幻灯片88

### Error detection / correction

**旧ID：** csit985-w2-385f78d6683059

**中文：** 差错检测／纠正；链路层服务名称，资料未给算法。

**简单英文：** Link-layer services for detecting and correcting errors; no algorithm is given.

**来源：** Week2.pdf · PDF页88 / 幻灯片88

### Single-mode fiber optics

**旧ID：** csit985-w2-8209ac547bd484

**中文：** 单模光纤；第89页举的实际传输介质例子，没有解释模式含义。

**简单英文：** An example of a physical transmission medium, without a definition of the mode.

**来源：** Week2.pdf · PDF页89 / 幻灯片89

### Scalability

**旧ID：** csit985-w2-cdacb349a37e51

**中文：** 可扩展性；教师说分布式设计可能改善扩展能力，未给测量公式。

**简单英文：** The ability to grow; the teacher says distributed design can help improve it.

**来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符8290起；搜索“scalability and resilience”

### Resilience

**旧ID：** csit985-w2-2075c0e0d27089

**中文：** 应对故障的能力；教师说分布式设计可能改善此属性，未给测量公式。

**简单英文：** The ability to handle faults; the teacher says distributed design can help improve it.

**来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符8290起；搜索“scalability and resilience”

### Originate from

**旧ID：** csit985-w2-79aad1bcb559d4

**中文：** 起源于、从……发出；消息在终端产生。

**简单英文：** Start from a place or source.

**来源：** Week2.pdf · PDF页6 / 幻灯片6

### Intermediate

**旧ID：** csit985-w2-8074b5fb737038

**中文：** 中间的；在这里指位于终端之间的联网设备。

**简单英文：** Between two ends or stages.

**来源：** Week2.pdf · PDF页7 / 幻灯片7

### Enable communication / interaction

**旧ID：** csit985-w2-10f87d9e936790

**中文：** 使通信／交互成为可能；enable 表示让某事能够发生。

**简单英文：** Make communication or interaction possible.

**来源：** Week2.pdf · PDF页7 / 幻灯片7

### Play a vital role in

**旧ID：** csit985-w2-7d397f393e0e2f

**中文：** 在……中起至关重要的作用；介质影响网络性能。

**简单英文：** Be very important in something.

**来源：** Week2.pdf · PDF页9 / 幻灯片9

### Restricted / proximity / extended

**旧ID：** csit985-w2-1644e0346adbe9

**中文：** 受限的／距离接近／扩展的；出现在无线网络类别标签中，分别解释普通词义。

**简单英文：** Limited / nearness / made larger or longer.

**来源：** Week2.pdf · PDF页11 / 幻灯片11

### Propagation / obstacle / line of sight

**旧ID：** csit985-w2-a2f1cd7e3f2a7a

**中文：** 传播／障碍物／视线；本页把无视线障碍作为激光传输条件。

**简单英文：** Movement of a signal / something in the way / a clear straight view.

**来源：** Week2.pdf · PDF页12 / 幻灯片12

### Unidirectional / interference

**旧ID：** csit985-w2-9fcd8d6b34cd13

**中文：** 单向的／干扰；第12页用在无线传输描述中。

**简单英文：** Moving in one direction / unwanted effects on a signal.

**来源：** Week2.pdf · PDF页12 / 幻灯片12

### Be categorized based on

**旧ID：** csit985-w2-c6516b8d6aba57

**中文：** 按……分类；本页依据规模、范围、所有权和功能分类。

**简单英文：** Be put into groups using certain features.

**来源：** Week2.pdf · PDF页14 / 幻灯片14

### Geographic scope / ownership / functionalities

**旧ID：** csit985-w2-3b51c69f59d4d3

**中文：** 地理覆盖范围／所有权／功能；scope 在这里指覆盖范围。

**简单英文：** The area covered / who owns it / what it can do.

**来源：** Week2.pdf · PDF页14 / 幻灯片14；Week2.pdf · PDF页17 / 幻灯片17

### Administer / share resources

**旧ID：** csit985-w2-f72136e779918b

**中文：** 管理／共享资源；LAN可由个人或单一组织管理，主要用于资源共享。

**简单英文：** Manage something / let several users use resources.

**来源：** Week2.pdf · PDF页16 / 幻灯片16

### In comparison with

**旧ID：** csit985-w2-1161f3f5b03b7b

**中文：** 与……相比；课件用MAN与LAN比较范围。

**简单英文：** Compared with something else.

**来源：** Week2.pdf · PDF页17 / 幻灯片17

### Interconnect / span / leased

**旧ID：** csit985-w2-3759de4c12e4c0

**中文：** 互连／横跨、覆盖／租用的；WAN连接LAN并覆盖较广区域。

**简单英文：** Connect networks / extend across an area / rented.

**来源：** Week2.pdf · PDF页18 / 幻灯片18

### Allocate / oversee the evolution of

**旧ID：** csit985-w2-ef54494de8362d

**中文：** 分配／监督……的演变；课件分别用于IP地址管理和标准演进。

**简单英文：** Assign resources / watch and guide how something develops.

**来源：** Week2.pdf · PDF页19 / 幻灯片19

### Dependent / surrogate

**旧ID：** csit985-w2-3c4fffbe55cc61

**中文：** 依赖的／代替者；在集中式网络页是从属计算机标签，不自动扩展成正式通用标准名。

**简单英文：** Relying on another / something acting in another's place.

**来源：** Week2.pdf · PDF页21 / 幻灯片21

### Retrieve / be hosted on

**旧ID：** csit985-w2-17dad5f510f269

**中文：** 获取、取回／托管在……；客户机获取数据，云资源在远程服务器托管。

**简单英文：** Get stored information / be stored or run on a server.

**来源：** Week2.pdf · PDF页22 / 幻灯片22；Week2.pdf · PDF页23 / 幻灯片23

### Stand alone / equal status

**旧ID：** csit985-w2-2c3f614313d0b5

**中文：** 独立运行／地位相等；分布式计算机可独立，对等设备地位相等。

**简单英文：** Work independently / have the same position or rights in this model.

**来源：** Week2.pdf · PDF页24 / 幻灯片24；Week2.pdf · PDF页25 / 幻灯片25

### Robust / predominant / reconfiguration

**旧ID：** csit985-w2-8ebc8d8b3852cd

**中文：** 稳健的／占主导的／重新配置；用于拓扑的优缺点与树根结构。

**简单英文：** Able to handle problems / most important / changing a configuration.

**来源：** Week2.pdf · PDF页29 / 幻灯片29；Week2.pdf · PDF页30 / 幻灯片30；Week2.pdf · PDF页31 / 幻灯片31

### Disrupt / diagnose

**旧ID：** csit985-w2-52216f23f1d701

**中文：** 中断或扰乱／诊断问题；环中增删设备可能扰乱全网，星形易诊断故障。

**简单英文：** Interrupt normal work / find the cause of a problem.

**来源：** Week2.pdf · PDF页32 / 幻灯片32；Week2.pdf · PDF页33 / 幻灯片33

### Be referred to as / be dependent on

**旧ID：** csit985-w2-0e01fbe8eec4af

**中文：** 被称为／取决于；课件32页写referred as（疑似漏to），解释中给完整用法，原片段仍保留。

**简单英文：** Be called / depend on a condition.

**来源：** Week2.pdf · PDF页32 / 幻灯片32；Week2.pdf · PDF页34 / 幻灯片34；Week2.pdf · PDF页34 / 幻灯片34（图表）

### Communicating entities / transmission / receipt

**旧ID：** csit985-w2-0a44a5013b647e

**中文：** 通信实体／传输／接收；receipt 此处是收到消息，不是购物收据。

**简单英文：** Things communicating / sending / receiving.

**来源：** Week2.pdf · PDF页36 / 幻灯片36

### Interpret / reverse a process

**旧ID：** csit985-w2-658cbb409231c8

**中文：** 理解其含义／逆向进行过程；解码要解释收到的信息。

**简单英文：** Understand the meaning / do the process in the opposite direction.

**来源：** Week2.pdf · PDF页41 / 幻灯片41；Week2.pdf · PDF页43 / 幻灯片43

### Corrupt / proactive / reactive / recovery

**旧ID：** csit985-w2-530ffa627da580

**中文：** 受损的／主动预防的／事后反应的／恢复；本页对比冲突前预防与冲突后恢复。

**简单英文：** Damaged / acting before a problem / acting after it / returning to a working state.

**来源：** Week2.pdf · PDF页44 / 幻灯片44

### Diverse / representation / underlying

**旧ID：** csit985-w2-043fe180d36644

**中文：** 多样的／表示方式／底层的；表48说跨不同网络，表49说共同数据表示。

**简单英文：** Varied / a form used to show data / supporting something from below.

**来源：** Week2.pdf · PDF页48 / 幻灯片48；Week2.pdf · PDF页49 / 幻灯片49；Week2.pdf · PDF页54 / 幻灯片54

### Segment / reassemble (verbs)

**旧ID：** csit985-w2-725739177491aa

**中文：** 分成小段／重新组装；表49描述transport服务。这条解释动词用法，segment名词另见专业英语。

**简单英文：** Divide into parts / put the parts together again.

**来源：** Week2.pdf · PDF页49 / 幻灯片49

### Delineate

**旧ID：** csit985-w2-9a4bc9416b63dc

**中文：** 划定、清楚区分；协议规定消息字段如何分界。

**简单英文：** Mark clearly where something starts and ends.

**来源：** Week2.pdf · PDF页58 / 幻灯片58

### Analogy

**旧ID：** csit985-w2-60ac505b914f2a

**中文：** 类比；用房屋的门说明socket，用住址和住户名说明地址与端口。

**简单英文：** A comparison used to explain an idea.

**来源：** Week2.pdf · PDF页56 / 幻灯片56；Week2.pdf · PDF页68 / 幻灯片68；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L26，本行字符2314起；搜索“street address”

### Intact / guarantee / in order

**旧ID：** csit985-w2-ebb13662ef1138

**中文：** 完整无损的／保证／按顺序；UDP不保证完整到达，TCP提供按序可靠服务。

**简单英文：** Not damaged / promise a result / in the correct sequence.

**来源：** Week2.pdf · PDF页62 / 幻灯片62；Week2.pdf · PDF页63 / 幻灯片63

### Encapsulate / data chunks

**旧ID：** csit985-w2-a6a10b1d6b0989

**中文：** 封装／数据块；这里收集各socket的数据，并加入头部。

**简单英文：** Put data inside a structured unit / pieces of data.

**来源：** Week2.pdf · PDF页66 / 幻灯片66

### Ranging from … to … / remaining

**旧ID：** csit985-w2-901a20217b8688

**中文：** 范围从……到……／剩余的；端口范围不能省略上下界。

**简单英文：** Having a range between two limits / left after the other parts.

**来源：** Week2.pdf · PDF页67 / 幻灯片67

### Elastic / proprietary / typically

**旧ID：** csit985-w2-7f51cd5f573bbf

**中文：** 弹性的／专有的／通常；图64的Elastic指需求标签但未定义，图65的typically不表示永远。

**简单英文：** Flexible / owned or controlled by a provider / usually, with possible exceptions.

**来源：** Week2.pdf · PDF页64 / 幻灯片64（图表）；Week2.pdf · PDF页65 / 幻灯片65（图表）

### Incoming / outgoing / bidirectional

**旧ID：** csit985-w2-533fd64447830f

**中文：** 入向的／出向的／双向的；相对于路由器和链路方向解释。

**简单英文：** Coming in / going out / moving in both directions.

**来源：** Week2.pdf · PDF页72 / 幻灯片72；Week2.pdf · PDF页73 / 幻灯片73

### Terminate / interoperate / execute / maintain

**旧ID：** csit985-w2-c1d051b0489a74

**中文：** 终接／互操作／执行／维护；输入端终接物理链路，处理器执行协议并维护表。

**简单英文：** End a physical link / work with another system / run / keep updated.

**来源：** Week2.pdf · PDF页72 / 幻灯片72；Week2.pdf · PDF页75 / 幻灯片75

### Human intervention / responsive to

**旧ID：** csit985-w2-4b42525f1a4a0e

**中文：** 人工干预／对……响应快；静态路由需人工修改，动态路由对变化响应更快。

**简单英文：** Action by a person / able to react to changes.

**来源：** Week2.pdf · PDF页80 / 幻灯片80

### Vary dynamically / explicitly reflect / tend to

**旧ID：** csit985-w2-288d2b7b304442

**中文：** 动态变化／明确反映／倾向于；负载敏感算法倾向避开拥塞链路，不是保证永不经过。

**简单英文：** Change with conditions / show directly / often do something, without a guarantee.

**来源：** Week2.pdf · PDF页81 / 幻灯片81

### Keep track of / adjacent

**旧ID：** csit985-w2-cb2980bee5cb0b

**中文：** 跟踪掌握／相邻的；分别用于邻居记录与链路连接的节点。

**简单英文：** Keep updated information about / next to something.

**来源：** Week2.pdf · PDF页82 / 幻灯片82；Week2.pdf · PDF页87 / 幻灯片87

### Bounded / minimal / guaranteed

**旧ID：** csit985-w2-060e6484aa393b

**中文：** 有上限的／最低的／得到保证的；本页描述可能的网络服务，不能省略限制。

**简单英文：** Limited by a bound / the smallest allowed / promised.

**来源：** Week2.pdf · PDF页86 / 幻灯片86

### Establish a connection

**旧ID：** csit985-w2-e685a389b983c5

**中文：** 建立连接；物理连接必须在网络通信前建立，可以是有线或无线。

**简单英文：** Set up a connection before communication.

**来源：** Week2.pdf · PDF页89 / 幻灯片89

### Coordination

**旧ID：** csit985-w2-1ba8a60326655b

**中文：** 协调；教师说分布式结构的协调可能很复杂。

**简单英文：** Organising parts to work together; this can be complex in a distributed network.

**来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L20，本行字符8330起；搜索“coordination can be very complex”

### Precise / vague

**旧ID：** csit985-w2-8fe5d060745e7c

**中文：** 精确明确的／含糊的；教师要求机器通信规则精确。

**简单英文：** Clear and exact / not clear or exact.

**来源：** Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符5038起；搜索“very precise”；Week 2 - Lecture Rec-transcript.txt · TXT原始L32，本行字符5073起；搜索“very vague”

### In isolation / subtle difference

**旧ID：** csit985-w2-e4d4ad14ee621b

**中文：** 孤立地／细微差别；协议一起工作，分层模型之间仍可能有细微差别。

**简单英文：** Alone, without others / a small difference that matters.

**来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L8，本行字符1起；搜索“isolation”；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L8，本行字符2235起；搜索“subtle difference”

### Canonical / adaptive

**旧ID：** csit985-w2-ae7f99990f745c

**中文：** 典型、被认可为标准的／能适应变化的；这是教师形容模型与动态路由的表达，不是技术标准认证。

**简单英文：** Accepted as a standard example / able to change with conditions.

**来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L8，本行字符1172起；搜索“canonical”；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L14，本行字符29起；搜索“more adaptive”

### Digest / encounter / look into

**旧ID：** csit985-w2-88fe594409d7fe

**中文：** 理解并吸收／遇到／进一步查看；教师说不必一次消化所有概念，可在遇到问题时查阅。

**简单英文：** Understand gradually / meet a problem / examine something further.

**来源：** Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符4187起；搜索“digest everything”；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符4437起；搜索“encounter”；Week 2 - Lecture Rec-transcript (2).txt · TXT原始L26，本行字符4705起；搜索“look into”

### Mandatory / recommended / assuming

**旧ID：** csit985-w2-7da9c80b7c4756

**中文：** 强制的／推荐的／假定……；录音区分讲座推荐参加、workshop不可缺，并说明slides足够的判断假定已有基础。仅作当时课堂语境。

**简单英文：** Required / advised / taking something as true for the statement.

**来源：** Week 2 - Lecture Rec-transcript (1).txt · TXT原始L56，本行字符2907起；搜索“mandatory”；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L56，本行字符3001起；搜索“recommended”；Week 2 - Lecture Rec-transcript (1).txt · TXT原始L56，本行字符1264起；搜索“assuming you have”
