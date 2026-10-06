# CSIT985 Week7 词汇

由本周可读JSON自动生成。原文与整理说明分开；跨周条目保留全部来源和不同义项。原PDF及完整录音TXT不在网站中。

## 重要疑点与来源限制

**位置：** PDF页2

**说明：** Week7.pdf共81页，标题Network Addressing and Routing，CSIT985 Spring 2026；CSIT985_Lecture7-transcript.txt原始L2介绍addressing/routing并覆盖subnetting、RIP/OSPF/BGP，周次及内容对应。PDF页码与幻灯片编号相同。未访问资料内的网页、RFC或参考书，仅用本次指定PDF/TXT。

**位置：** PDF页7,10,11

**说明：** 第7页MAC是physical device唯一编号的简化表述，TXT原始L2明确可修改或虚拟化。第10页2^32及2^128是可能地址值，不是全部可分配给用户的地址数；TXT有4.3 billion/4.3 million自相矛盾的疑似转写。第11页KB/MB采用1024换算，只作为本页记法，不推广到所有单位约定。

**位置：** PDF页16,20

**说明：** 第20页172.16/12上界印为172.32.255.255。按本页prefix的12个network bits计算，应止于172.31.255.255；这是基于掩码的核对，不是另一份来源。原印刷值保留。第16页Class E止于255.255.255.254却列2^28个addresses，与第22页240.0.0.0/4及结束255.255.255.255不一致。Class A/B/C表是地址总量，不直接等于可用host数。

**位置：** PDF页19,22,23,31,32

**说明：** 第19页slash notion疑似slash notation。第22页把Route of last resort列为0.0.0.0/8；/8只覆盖以0开头的范围，不覆盖所有IPv4目的地址，不能按此表记默认路由。第22/23页loopback和link-local范围末端分别为.255与.254，且第23页loopback句中有o疑似to。第31页globally scoped止于238.255.255.255，而第32页图表含239.x可路由例子；不把第31页范围当作完整global分类。

**位置：** PDF页21,25,28

**说明：** 第21页dynamic NAT one-to-many与TXT原始L2的地址池说法及另列NAPT有差异。第25页源／目的地址一路不变，TXT说明NAT可在边界改地址。第28页directed broadcast定义写all networks on a specific ... network，疑似all hosts；本页具体172.16.4.255示例和TXT均指一个指定远程网络，原文保留。

**位置：** PDF页38,42,45,48

**说明：** 第38/41页把分配的192.35.40.0/24称为AS，但第9页AS是管理域／routing-policy实体；TXT原始L2说ASN与IP prefix不可混淆。第42页图中Address Identifier文字为192.35.40.0，二进制最后octet却为01111111（127）；标签不一致。第45页两组/25端点已视觉核对。第48页Devices/Subnet列留空，不补成原文已有答案。

**位置：** PDF页52,59,60,67,68,71,72

**说明：** 第52页EGP同时用作外部协议类别与同名旧协议，extinct不能用于整个类别。第59页default route混入source-based选择，route filtering与packet filtering混写并等同ACL；TXT原始L2明确区分。第60页aggregation说traffic，TXT说prefix汇总。第67/68页写transient traffic，语境疑似transit traffic。第71页OSPF criteria含traffic/reliability/security，TXT原始L2说明按cost且这些不是自动独立path criteria。第72页Internet hosts (ISPs)与AS范围表述不严谨；保留来源措辞与TXT差异。

**位置：** PDF页69,70,74,75,76

**说明：** RIP课件限制：最大可用15 hops、通常30秒更新；RIPv1不支持VLSM，RIPv2支持。NOT corporate grade是本讲评价而非标准定义。第74页旧推荐（最多2协议、1 IGP、从static/RIP开始）在第76页被课件自己称为largely redundant，不作为本次现行推荐。OAM&P中的Main疑似maintenance缩写，未在资料中完整展开。

**位置：** TXT

**说明：** TXT原始L2含SPF/PGP、rolling/road、sumnet/sub-19、limited broadcast错乱数字等疑似转写；规范术语和地址数字以PDF为主。保留必要原句及L/字符位置。本次未修改Week1–5旧词条；如旧简化说法需纠正，应先单独核对和说明。

## 专业英语

### MAC address (Media Access Control)

**稳定ID：** csit985-w7-0001

**类别：** 专业英语

**中文解释：** MAC 地址；课件说是 physical device 的唯一编号，用于 Layer 2 的 NIC-to-NIC 通信。TXT 补充可修改或虚拟化，不能理解为永远不可变。

**简单英文（整理解释）：** A layer-2 address used for local interface communication; the transcript notes that it can be changed or virtualized.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> MAC is the unique number of a physical device

**原文来源：** Week7.pdf · PDF页7 / 幻灯片7

**语境：** Week7 · MAC address (Media Access Control)

**语境英文：** A layer-2 address used for local interface communication; the transcript notes that it can be changed or virtualized.

**语境中文：** MAC 地址；课件说是 physical device 的唯一编号，用于 Layer 2 的 NIC-to-NIC 通信。TXT 补充可修改或虚拟化，不能理解为永远不可变。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> MAC is the unique number of a physical device

**语境原文来源：** Week7.pdf · PDF页7 / 幻灯片7

**语境来源：** Week7.pdf · PDF页7 / 幻灯片7

**全部来源：** Week7.pdf · PDF页7 / 幻灯片7

### NIC (Network Interface Card)

**稳定ID：** csit985-w2-9755877b36eaf0

**类别：** 专业英语

**中文解释：** 网络接口卡；与另一 NIC 在 Ethernet layer 通信。本页只展开缩写。

**简单英文（整理解释）：** Network Interface Card; the interface used in the local-link example.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> NIC: Network Interface Card

**原文来源：** Week7.pdf · PDF页7 / 幻灯片7

**语境：** Week7 · NIC (Network Interface Card)

**语境英文：** Network Interface Card; the interface used in the local-link example.

**语境中文：** 网络接口卡；与另一 NIC 在 Ethernet layer 通信。本页只展开缩写。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> NIC: Network Interface Card

**语境原文来源：** Week7.pdf · PDF页7 / 幻灯片7

**语境来源：** Week7.pdf · PDF页7 / 幻灯片7

**全部来源：** Week7.pdf · PDF页7 / 幻灯片7

### IP address / IPv4 / IPv6

**稳定ID：** csit985-w2-529d724fccaf46

**类别：** 专业英语

**中文解释：** IP 地址是网络设备的逻辑地址；IPv4 为32 bits（4 bytes），IPv6 为128 bits（16 bytes）。可能地址值不等于可分配给用户的数量。

**简单英文（整理解释）：** A logical address. IPv4 has 32 bits and IPv6 has 128 bits.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Is the logical address of a networking device

**原文来源：** Week7.pdf · PDF页7 / 幻灯片7

**语境：** Week7 · IP address / IPv4 / IPv6

**语境英文：** A logical address. IPv4 has 32 bits and IPv6 has 128 bits.

**语境中文：** IP 地址是网络设备的逻辑地址；IPv4 为32 bits（4 bytes），IPv6 为128 bits（16 bytes）。可能地址值不等于可分配给用户的数量。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Is the logical address of a networking device

**语境原文来源：** Week7.pdf · PDF页7 / 幻灯片7

**语境来源：** Week7.pdf · PDF页7 / 幻灯片7

**全部来源：** Week7.pdf · PDF页7 / 幻灯片7

### IANA (Internet Assigned Numbers Authority)

**稳定ID：** csit985-w7-0004

**类别：** 专业英语

**中文解释：** 互联网号码分配机构；本页列管理 DNS root zone、media types，并向五个 RIR 分配 global IP addresses 与 AS numbers。

**简单英文（整理解释）：** An authority that coordinates global address and AS-number allocation to five regional registries.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Internet Assigned Numbers Authority

**原文来源：** Week7.pdf · PDF页8 / 幻灯片8

**语境：** Week7 · IANA (Internet Assigned Numbers Authority)

**语境英文：** An authority that coordinates global address and AS-number allocation to five regional registries.

**语境中文：** 互联网号码分配机构；本页列管理 DNS root zone、media types，并向五个 RIR 分配 global IP addresses 与 AS numbers。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Internet Assigned Numbers Authority

**语境原文来源：** Week7.pdf · PDF页8 / 幻灯片8

**语境来源：** Week7.pdf · PDF页8 / 幻灯片8

**全部来源：** Week7.pdf · PDF页8 / 幻灯片8

### RIR (Regional Internet Registry) / APNIC

**稳定ID：** csit985-w7-0005

**类别：** 专业英语

**中文解释：** 区域互联网注册管理机构；第9页以 APNIC 为澳大利亚对应地区的例子。只使用课件，不访问其外部链接。

**简单英文（整理解释）：** A regional registry; APNIC is the example for Australia in these materials.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Regional Internet Registries (APNIC in Australia)

**原文来源：** Week7.pdf · PDF页9 / 幻灯片9

**语境：** Week7 · RIR (Regional Internet Registry) / APNIC

**语境英文：** A regional registry; APNIC is the example for Australia in these materials.

**语境中文：** 区域互联网注册管理机构；第9页以 APNIC 为澳大利亚对应地区的例子。只使用课件，不访问其外部链接。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Regional Internet Registries (APNIC in Australia)

**语境原文来源：** Week7.pdf · PDF页9 / 幻灯片9

**语境来源：** Week7.pdf · PDF页8,9 / 幻灯片8,9

**全部来源：** Week7.pdf · PDF页8,9 / 幻灯片8,9

### AS (Autonomous System)

**稳定ID：** csit985-w7-0006

**类别：** 专业英语

**中文解释：** 自治系统：一组相连的 IP routing prefixes，由一个或多个运营者代表同一管理实体控制，并对外呈现共同且明确的 routing policy。

**简单英文（整理解释）：** Connected IP routing prefixes under common administration and a clearly defined routing policy.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> An Autonomous System (AS) is a collection of connected Internet Protocol (IP) routing prefixes under the control of one or more network operators on behalf of a single administrative entity or domain that presents a common, clearly defined routing policy (RFC 1930).

**原文来源：** Week7.pdf · PDF页9 / 幻灯片9

**语境：** Week7 · AS (Autonomous System)

**语境英文：** Connected IP routing prefixes under common administration and a clearly defined routing policy.

**语境中文：** 自治系统：一组相连的 IP routing prefixes，由一个或多个运营者代表同一管理实体控制，并对外呈现共同且明确的 routing policy。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> An Autonomous System (AS) is a collection of connected Internet Protocol (IP) routing prefixes under the control of one or more network operators on behalf of a single administrative entity or domain that presents a common, clearly defined routing policy (RFC 1930).

**语境原文来源：** Week7.pdf · PDF页9 / 幻灯片9

**语境来源：** Week7.pdf · PDF页9 / 幻灯片9

**全部来源：** Week7.pdf · PDF页9 / 幻灯片9

### Bit / byte / octet

**稳定ID：** csit985-w7-0007

**类别：** 专业英语

**中文解释：** 位／字节／八位组；一个 bit 的值为0或1，本讲一个 byte 和一个 octet 均为8 bits。IPv4 有4个 octets。

**简单英文（整理解释）：** A bit is 0 or 1. A byte and an octet each have eight bits here.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> 1 octet = 8 bits = 1 byte

**原文来源：** Week7.pdf · PDF页12 / 幻灯片12

**语境：** Week7 · Bit / byte / octet

**语境英文：** A bit is 0 or 1. A byte and an octet each have eight bits here.

**语境中文：** 位／字节／八位组；一个 bit 的值为0或1，本讲一个 byte 和一个 octet 均为8 bits。IPv4 有4个 octets。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> 1 octet = 8 bits = 1 byte

**语境原文来源：** Week7.pdf · PDF页12 / 幻灯片12

**语境来源：** Week7.pdf · PDF页11,12 / 幻灯片11,12

**全部来源：** Week7.pdf · PDF页11,12 / 幻灯片11,12

### Binary / decimal / hexadecimal

**稳定ID：** csit985-w7-0008

**类别：** 专业英语

**中文解释：** 二进制／十进制／十六进制；表中 hexadecimal 用 A–F 表示十进制10–15。是地址表示法术语。

**简单英文（整理解释）：** Number representations; hexadecimal uses A to F for values ten to fifteen.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Hexadecimal

**原文来源：** Week7.pdf · PDF页11 / 幻灯片11

**语境：** Week7 · Binary / decimal / hexadecimal

**语境英文：** Number representations; hexadecimal uses A to F for values ten to fifteen.

**语境中文：** 二进制／十进制／十六进制；表中 hexadecimal 用 A–F 表示十进制10–15。是地址表示法术语。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Hexadecimal

**语境原文来源：** Week7.pdf · PDF页11 / 幻灯片11

**语境来源：** Week7.pdf · PDF页11 / 幻灯片11

**全部来源：** Week7.pdf · PDF页11 / 幻灯片11

### Dotted-decimal notation

**稳定ID：** csit985-w7-0009

**类别：** 专业英语

**中文解释：** 点分十进制表示法；IPv4 的四个 octets 用十进制写出并以点隔开，如193.32.216.9。

**简单英文（整理解释）：** Writing four decimal octets separated by dots.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> dotted-decimal notation

**原文来源：** Week7.pdf · PDF页12 / 幻灯片12

**语境：** Week7 · Dotted-decimal notation

**语境英文：** Writing four decimal octets separated by dots.

**语境中文：** 点分十进制表示法；IPv4 的四个 octets 用十进制写出并以点隔开，如193.32.216.9。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> dotted-decimal notation

**语境原文来源：** Week7.pdf · PDF页12 / 幻灯片12

**语境来源：** Week7.pdf · PDF页12,34 / 幻灯片12,34

**全部来源：** Week7.pdf · PDF页12,34 / 幻灯片12,34

### Private addresses / public addresses

**稳定ID：** csit985-w7-0010

**类别：** 专业英语

**中文解释：** 私有／公共地址；课件按是否经公共互联网路由区分。私有地址在内部使用，不能 globally routable；第20页范围有疑点。

**简单英文（整理解释）：** Private addresses are used internally and are not globally routed; public addresses are routed on the public Internet.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义；各来源语境分别保留

**资料原文：** 课件原文定义

> Network-layer addresses that are not routed through the public internet.

**原文来源：** Week7.pdf · PDF页14 / 幻灯片14

**资料原文：** 课件原文定义

> Network-layer addresses that are routed through the public internet

**原文来源：** Week7.pdf · PDF页14 / 幻灯片14

**语境：** Week7 · Private addresses / public addresses

**语境英文：** Private addresses are used internally and are not globally routed; public addresses are routed on the public Internet.

**语境中文：** 私有／公共地址；课件按是否经公共互联网路由区分。私有地址在内部使用，不能 globally routable；第20页范围有疑点。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Network-layer addresses that are not routed through the public internet.

**语境原文来源：** Week7.pdf · PDF页14 / 幻灯片14

**语境来源：** Week7.pdf · PDF页14,20 / 幻灯片14,20

**语境：** Week7 · Private addresses / public addresses

**语境英文：** Public addresses are network-layer addresses routed through the public Internet.

**语境中文：** 原文公共地址定义是经public internet路由的network-layer addresses；两类按route scope区分。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Network-layer addresses that are routed through the public internet

**语境原文来源：** Week7.pdf · PDF页14 / 幻灯片14

**语境来源：** Week7.pdf · PDF页14 / 幻灯片14

**全部来源：** Week7.pdf · PDF页14,20 / 幻灯片14,20；Week7.pdf · PDF页14 / 幻灯片14

### Temporary addresses / persistent addresses

**稳定ID：** csit985-w7-0011

**类别：** 专业英语

**中文解释：** 临时／持久地址；前者短期分配，通常通过 DHCP；后者长期分配或永久配置。与 private/public 是不同分类维度。

**简单英文（整理解释）：** Addresses assigned for a short time, or for a long time or permanent configuration.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义；各来源语境分别保留

**资料原文：** 课件原文定义

> Addresses that are assigned for a short duration.

**原文来源：** Week7.pdf · PDF页14 / 幻灯片14

**资料原文：** 课件原文说明／用法（非正式定义）

> Usually through DHCP (Dynamic Host Configuration Protocol)

**原文来源：** Week7.pdf · PDF页14 / 幻灯片14

**资料原文：** 课件原文定义

> Addresses that are assigned for a long duration time or permanently configured

**原文来源：** Week7.pdf · PDF页14 / 幻灯片14

**语境：** Week7 · Temporary addresses / persistent addresses

**语境英文：** Addresses assigned for a short time, or for a long time or permanent configuration.

**语境中文：** 临时／持久地址；前者短期分配，通常通过 DHCP；后者长期分配或永久配置。与 private/public 是不同分类维度。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Addresses that are assigned for a short duration.

**语境原文来源：** Week7.pdf · PDF页14 / 幻灯片14

**语境来源：** Week7.pdf · PDF页14 / 幻灯片14

**语境：** Week7 · Temporary addresses / persistent addresses

**语境英文：** Temporary addresses are usually assigned through DHCP, not necessarily always.

**语境中文：** 原文临时地址定义的下一句为Usually through DHCP；usual不是无例外条件。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Usually through DHCP (Dynamic Host Configuration Protocol)

**语境原文来源：** Week7.pdf · PDF页14 / 幻灯片14

**语境来源：** Week7.pdf · PDF页14 / 幻灯片14

**语境：** Week7 · Temporary addresses / persistent addresses

**语境英文：** Persistent addresses are assigned for a long time or permanently configured.

**语境中文：** 原文persistent定义：分配很长时间或永久配置；private/public与temporary/persistent仍是不同维度。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Addresses that are assigned for a long duration time or permanently configured

**语境原文来源：** Week7.pdf · PDF页14 / 幻灯片14

**语境来源：** Week7.pdf · PDF页14 / 幻灯片14

**全部来源：** Week7.pdf · PDF页14 / 幻灯片14

### DHCP (Dynamic Host Configuration Protocol)

**稳定ID：** csit985-w7-0012

**类别：** 专业英语

**中文解释：** 动态主机配置协议；本页说临时地址通常通过 DHCP 分配，没有给正式协议定义。

**简单英文（整理解释）：** A protocol commonly used to assign temporary addresses.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> DHCP (Dynamic Host Configuration Protocol)

**原文来源：** Week7.pdf · PDF页14 / 幻灯片14

**语境：** Week7 · DHCP (Dynamic Host Configuration Protocol)

**语境英文：** A protocol commonly used to assign temporary addresses.

**语境中文：** 动态主机配置协议；本页说临时地址通常通过 DHCP 分配，没有给正式协议定义。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> DHCP (Dynamic Host Configuration Protocol)

**语境原文来源：** Week7.pdf · PDF页14 / 幻灯片14

**语境来源：** Week7.pdf · PDF页14 / 幻灯片14

**全部来源：** Week7.pdf · PDF页14 / 幻灯片14

### Classful addressing

**稳定ID：** csit985-w7-0013

**类别：** 专业英语

**中文解释：** 有类编址：预定 mask lengths，按首 octet 判断 A–E 类；已被替代，但仍有历史影响。表中 class E 的范围与计数有疑点。

**简单英文（整理解释）：** A legacy system with fixed classes and mask lengths; it has been superseded.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Predetermined mask lengths

**原文来源：** Week7.pdf · PDF页15 / 幻灯片15

**语境：** Week7 · Classful addressing

**语境英文：** A legacy system with fixed classes and mask lengths; it has been superseded.

**语境中文：** 有类编址：预定 mask lengths，按首 octet 判断 A–E 类；已被替代，但仍有历史影响。表中 class E 的范围与计数有疑点。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Predetermined mask lengths

**语境原文来源：** Week7.pdf · PDF页15 / 幻灯片15

**语境来源：** Week7.pdf · PDF页15,16 / 幻灯片15,16

**全部来源：** Week7.pdf · PDF页15,16 / 幻灯片15,16

### CIDR (Classless Interdomain Routing)

**稳定ID：** csit985-w7-0014

**类别：** 专业英语

**中文解释：** 无类域间路由；network 与 host 的分界可在 octet 内部，所以须给出 mask/prefix length，不能只看首 bits。

**简单英文（整理解释）：** Classless addressing with a prefix boundary that can fall inside an octet.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Classless Interdomain Routing (CIDR – pronounced cider)

**原文来源：** Week7.pdf · PDF页17 / 幻灯片17

**语境：** Week7 · CIDR (Classless Interdomain Routing)

**语境英文：** Classless addressing with a prefix boundary that can fall inside an octet.

**语境中文：** 无类域间路由；network 与 host 的分界可在 octet 内部，所以须给出 mask/prefix length，不能只看首 bits。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Classless Interdomain Routing (CIDR – pronounced cider)

**语境原文来源：** Week7.pdf · PDF页17 / 幻灯片17

**语境来源：** Week7.pdf · PDF页17,18 / 幻灯片17,18

**全部来源：** Week7.pdf · PDF页17,18 / 幻灯片17,18

### Subnet mask / prefix length

**稳定ID：** csit985-w7-0015

**类别：** 专业英语

**中文解释：** 子网掩码／前缀长度；mask 区分 network 和 host bits，/n 表示左边 n 个 network bits。例如 /24 对应255.255.255.0。

**简单英文（整理解释）：** A subnet mask separates network and host bits. The prefix length counts the leading network bits.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> The leftmost 24 bits identify the network address

**原文来源：** Week7.pdf · PDF页36 / 幻灯片36

**语境：** Week7 · Subnet mask / prefix length

**语境英文：** A subnet mask separates network and host bits. The prefix length counts the leading network bits.

**语境中文：** 子网掩码／前缀长度；mask 区分 network 和 host bits，/n 表示左边 n 个 network bits。例如 /24 对应255.255.255.0。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> The leftmost 24 bits identify the network address

**语境原文来源：** Week7.pdf · PDF页36 / 幻灯片36

**语境来源：** Week7.pdf · PDF页19,35,36 / 幻灯片19,35,36

**全部来源：** Week7.pdf · PDF页19,35,36 / 幻灯片19,35,36

### Private IPv4 blocks

**稳定ID：** csit985-w7-0016

**类别：** 专业英语

**中文解释：** 私有 IPv4 地址块；课件列10/8、172.16/12、192.168/16。172.16/12 行上界写172.32.255.255，与 /12 不一致；不要按该上界记忆。

**简单英文（整理解释）：** Three private prefixes are listed; the written upper limit for 172.16/12 conflicts with its prefix length.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> 172.16/12

**原文来源：** Week7.pdf · PDF页20 / 幻灯片20

**语境：** Week7 · Private IPv4 blocks

**语境英文：** Three private prefixes are listed; the written upper limit for 172.16/12 conflicts with its prefix length.

**语境中文：** 私有 IPv4 地址块；课件列10/8、172.16/12、192.168/16。172.16/12 行上界写172.32.255.255，与 /12 不一致；不要按该上界记忆。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> 172.16/12

**语境原文来源：** Week7.pdf · PDF页20 / 幻灯片20

**语境来源：** Week7.pdf · PDF页20 / 幻灯片20

**全部来源：** Week7.pdf · PDF页20 / 幻灯片20

### NAT (Network Address Translation)

**稳定ID：** csit985-w6-0082

**类别：** 专业英语

**中文解释：** NAT 将私有地址转换为公共地址，并建立 bindings。TXT 把 dynamic 地址池与 NAPT 的端口共享区别开来，与课件 one-to-many 说法有差异。

**简单英文（整理解释）：** NAT translates between private and public addresses; the transcript distinguishes address-pool allocation from port translation.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> NAT (Network Address Translation) is used to translate the private address to the public address

**原文来源：** Week7.pdf · PDF页21 / 幻灯片21

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> select a public address from a pool

**原文来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符13322起；搜索“select a public address from a pool”

**语境：** Week7 · NAT (Network Address Translation)

**语境英文：** NAT translates between private and public addresses; the transcript distinguishes address-pool allocation from port translation.

**语境中文：** NAT 将私有地址转换为公共地址，并建立 bindings。TXT 把 dynamic 地址池与 NAPT 的端口共享区别开来，与课件 one-to-many 说法有差异。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> NAT (Network Address Translation) is used to translate the private address to the public address

**语境原文来源：** Week7.pdf · PDF页21 / 幻灯片21

**语境来源：** Week7.pdf · PDF页21 / 幻灯片21

**语境：** Week7 · NAT (Network Address Translation)

**语境英文：** Dynamic address allocation uses a pool; port translation is distinguished from it.

**语境中文：** TXT把dynamic NAT解释为从pool选public address；NAPT/PAT则用不同port区分internal connections，NAT不能代替firewall。与PDF one-to-many简化说法分别保留。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> select a public address from a pool

**语境原文来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符13322起；搜索“select a public address from a pool”

**语境来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符13322起；搜索“select a public address from a pool”

**全部来源：** Week7.pdf · PDF页21 / 幻灯片21；CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符13322起；搜索“select a public address from a pool”

### NAPT (Network Address Port Translation)

**稳定ID：** csit985-w7-0018

**类别：** 专业英语

**中文解释：** 网络地址端口转换；通过 address 和 port bindings 区分连接。不要只把它写成普通的地址转换。

**简单英文（整理解释）：** Translation that keeps address and port bindings.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Address and port bindings (Network Address Port Translation NAPT)

**原文来源：** Week7.pdf · PDF页21 / 幻灯片21

**语境：** Week7 · NAPT (Network Address Port Translation)

**语境英文：** Translation that keeps address and port bindings.

**语境中文：** 网络地址端口转换；通过 address 和 port bindings 区分连接。不要只把它写成普通的地址转换。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Address and port bindings (Network Address Port Translation NAPT)

**语境原文来源：** Week7.pdf · PDF页21 / 幻灯片21

**语境来源：** Week7.pdf · PDF页21 / 幻灯片21

**全部来源：** Week7.pdf · PDF页21 / 幻灯片21

### Loopback address (localhost)

**稳定ID：** csit985-w7-0019

**类别：** 专业英语

**中文解释：** 回环地址：主机给自己发送信息；本地 TCP/IP 应用可通信。常见地址127.0.0.1；课件两页的范围端点不一致。

**简单英文（整理解释）：** An address a host uses to communicate with itself.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> The address that hosts use to send information to itself.

**原文来源：** Week7.pdf · PDF页23 / 幻灯片23

**语境：** Week7 · Loopback address (localhost)

**语境英文：** An address a host uses to communicate with itself.

**语境中文：** 回环地址：主机给自己发送信息；本地 TCP/IP 应用可通信。常见地址127.0.0.1；课件两页的范围端点不一致。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> The address that hosts use to send information to itself.

**语境原文来源：** Week7.pdf · PDF页23 / 幻灯片23

**语境来源：** Week7.pdf · PDF页22,23 / 幻灯片22,23

**全部来源：** Week7.pdf · PDF页22,23 / 幻灯片22,23

### Link-local address

**稳定ID：** csit985-w7-0020

**类别：** 专业英语

**中文解释：** 链路本地地址：没有 IP 配置时由操作系统自动分配；不应在 Internet 上路由。两页端点有差异，范围原样保留于疑点。

**简单英文（整理解释）：** An address automatically assigned for local communication when normal IP configuration is unavailable.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Are automatically assigned to the local host by the operating system where no IP configuration is available (should not be routed on the Internet)

**原文来源：** Week7.pdf · PDF页23 / 幻灯片23

**语境：** Week7 · Link-local address

**语境英文：** An address automatically assigned for local communication when normal IP configuration is unavailable.

**语境中文：** 链路本地地址：没有 IP 配置时由操作系统自动分配；不应在 Internet 上路由。两页端点有差异，范围原样保留于疑点。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Are automatically assigned to the local host by the operating system where no IP configuration is available (should not be routed on the Internet)

**语境原文来源：** Week7.pdf · PDF页23 / 幻灯片23

**语境来源：** Week7.pdf · PDF页22,23 / 幻灯片22,23

**全部来源：** Week7.pdf · PDF页22,23 / 幻灯片22,23

### Test-net addresses

**稳定ID：** csit985-w7-0021

**类别：** 专业英语

**中文解释：** 测试网地址；课件说留作 teaching/learning，表列192.0.2.0/24。不是一般公共服务地址。

**简单英文（整理解释）：** Addresses set aside for examples, teaching, and learning.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Are set aside for teaching and learning purpose

**原文来源：** Week7.pdf · PDF页23 / 幻灯片23

**语境：** Week7 · Test-net addresses

**语境英文：** Addresses set aside for examples, teaching, and learning.

**语境中文：** 测试网地址；课件说留作 teaching/learning，表列192.0.2.0/24。不是一般公共服务地址。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Are set aside for teaching and learning purpose

**语境原文来源：** Week7.pdf · PDF页23 / 幻灯片23

**语境来源：** Week7.pdf · PDF页22,23 / 幻灯片22,23

**全部来源：** Week7.pdf · PDF页22,23 / 幻灯片22,23

### Experimental addresses

**稳定ID：** csit985-w7-0022

**类别：** 专业英语

**中文解释：** 实验地址；表中列240.0.0.0/4和240.0.0.0–255.255.255.255，未提供进一步使用规则。

**简单英文（整理解释）：** An experimental range listed in the slide; no further usage rule is defined.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Experimental addresses

**原文来源：** Week7.pdf · PDF页22 / 幻灯片22

**语境：** Week7 · Experimental addresses

**语境英文：** An experimental range listed in the slide; no further usage rule is defined.

**语境中文：** 实验地址；表中列240.0.0.0/4和240.0.0.0–255.255.255.255，未提供进一步使用规则。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Experimental addresses

**语境原文来源：** Week7.pdf · PDF页22 / 幻灯片22

**语境来源：** Week7.pdf · PDF页22 / 幻灯片22

**全部来源：** Week7.pdf · PDF页22 / 幻灯片22

### Unicast / Multicast / Broadcast

**稳定ID：** csit985-w2-fd4f2236d60319

**类别：** 专业英语

**中文解释：** 单播：从一个 host 向一个特定 host 发送。第25页称地址一路不变，TXT 说明 NAT 可在边界改地址，不能当作无例外规则。

**简单英文（整理解释）：** Sending a packet from one host to one individual host.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义；各来源语境分别保留

**资料原文：** 课件原文定义

> Unicast – sending a packet from one host to an individual host

**原文来源：** Week7.pdf · PDF页24 / 幻灯片24

**资料原文：** 课件原文定义

> Multicast – sending a packet to a selected group of hosts

**原文来源：** Week7.pdf · PDF页24 / 幻灯片24

**资料原文：** 课件原文定义

> Broadcast – sending a packet from one host to all hosts on the network

**原文来源：** Week7.pdf · PDF页24 / 幻灯片24

**语境：** Week7 · Unicast

**语境英文：** Sending a packet from one host to one individual host.

**语境中文：** 单播：从一个 host 向一个特定 host 发送。第25页称地址一路不变，TXT 说明 NAT 可在边界改地址，不能当作无例外规则。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Unicast – sending a packet from one host to an individual host

**语境原文来源：** Week7.pdf · PDF页24 / 幻灯片24

**语境来源：** Week7.pdf · PDF页24,25 / 幻灯片24,25

**语境：** Week7 · Multicast

**语境英文：** Sending traffic to a selected group; receivers join the relevant group.

**语境中文：** 组播：向选定的一组 hosts 发送；接收者须加入对应 multicast group，不是逐一发送给每个目的地。课件地址空间224.0.0.0–239.255.255.255。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Multicast – sending a packet to a selected group of hosts

**语境原文来源：** Week7.pdf · PDF页24 / 幻灯片24

**语境来源：** Week7.pdf · PDF页24,30 / 幻灯片24,30

**语境：** Week7 · Broadcast

**语境英文：** Sending to all hosts on the local network, normally without forwarding beyond the local router.

**语境中文：** 广播：向网络上的所有 hosts 发送；通常限于 local network，不经本地路由器继续转发。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Broadcast – sending a packet from one host to all hosts on the network

**语境原文来源：** Week7.pdf · PDF页24 / 幻灯片24

**语境来源：** Week7.pdf · PDF页24,26,27 / 幻灯片24,26,27

**全部来源：** Week7.pdf · PDF页24,25 / 幻灯片24,25；Week7.pdf · PDF页24,30 / 幻灯片24,30；Week7.pdf · PDF页24,26,27 / 幻灯片24,26,27

### ARP (Address Resolution Protocol)

**稳定ID：** csit985-w7-0024

**类别：** 专业英语

**中文解释：** 地址解析协议；本页作为把高层地址映射到低层地址时使用 broadcast 的例子，TXT 补充本地 IPv4 与 MAC 的对应。

**简单英文（整理解释）：** A protocol used in local address mapping; the transcript links IPv4 addresses to MAC addresses.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Address Resolution Protocol

**原文来源：** Week7.pdf · PDF页27 / 幻灯片27

**语境：** Week7 · ARP (Address Resolution Protocol)

**语境英文：** A protocol used in local address mapping; the transcript links IPv4 addresses to MAC addresses.

**语境中文：** 地址解析协议；本页作为把高层地址映射到低层地址时使用 broadcast 的例子，TXT 补充本地 IPv4 与 MAC 的对应。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Address Resolution Protocol

**语境原文来源：** Week7.pdf · PDF页27 / 幻灯片27

**语境来源：** Week7.pdf · PDF页27 / 幻灯片27

**全部来源：** Week7.pdf · PDF页27 / 幻灯片27

### Directed broadcast

**稳定ID：** csit985-w7-0025

**类别：** 专业英语

**中文解释：** 定向广播：目标是一个特定远程网络的所有 hosts。例172.16.4.0/24用172.16.4.255；routers 默认不转发，但可配置允许。原文 all networks 有疑点。

**简单英文（整理解释）：** A broadcast to hosts on a specific remote network; routers do not forward it by default.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> A directed broadcast is sent to all networks on a specific (non-local network) network

**原文来源：** Week7.pdf · PDF页28 / 幻灯片28

**资料原文：** 课件原文说明／用法（非正式定义）

> Routers, by default, don’t forward directed broadcasts but can be configured to do so

**原文来源：** Week7.pdf · PDF页28 / 幻灯片28

**语境：** Week7 · Directed broadcast

**语境英文：** A broadcast to hosts on a specific remote network; routers do not forward it by default.

**语境中文：** 定向广播：目标是一个特定远程网络的所有 hosts。例172.16.4.0/24用172.16.4.255；routers 默认不转发，但可配置允许。原文 all networks 有疑点。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> A directed broadcast is sent to all networks on a specific (non-local network) network

**语境原文来源：** Week7.pdf · PDF页28 / 幻灯片28

**语境来源：** Week7.pdf · PDF页28 / 幻灯片28

**语境：** Week7 · Directed broadcast

**语境英文：** Routers do not forward directed broadcasts by default but can be configured to do so.

**语境中文：** 原文还限制routers默认不forward directed broadcasts，但可configured允许。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Routers, by default, don’t forward directed broadcasts but can be configured to do so

**语境原文来源：** Week7.pdf · PDF页28 / 幻灯片28

**语境来源：** Week7.pdf · PDF页28 / 幻灯片28

**全部来源：** Week7.pdf · PDF页28 / 幻灯片28

### Limited broadcast

**稳定ID：** csit985-w7-0026

**类别：** 专业英语

**中文解释：** 受限广播：本地网络使用255.255.255.255，32 bits 全为1。

**简单英文（整理解释）：** A broadcast to the local network using 255.255.255.255.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> 255.255.255.255

**原文来源：** Week7.pdf · PDF页29 / 幻灯片29

**语境：** Week7 · Limited broadcast

**语境英文：** A broadcast to the local network using 255.255.255.255.

**语境中文：** 受限广播：本地网络使用255.255.255.255，32 bits 全为1。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> 255.255.255.255

**语境原文来源：** Week7.pdf · PDF页29 / 幻灯片29

**语境来源：** Week7.pdf · PDF页29 / 幻灯片29

**全部来源：** Week7.pdf · PDF页29 / 幻灯片29

### Reserved link-local multicast / globally scoped multicast

**稳定ID：** csit985-w7-0027

**类别：** 专业英语

**中文解释：** 保留的链路本地组播／全局范围组播；前者224.0.0.0–224.0.0.255不离开本地网络。后者本页写224.0.1.0–238.255.255.255；第32页另含239.x可路由例子，不当作完整全局分类。

**简单英文（整理解释）：** The slide distinguishes local-only multicast from wider-scope multicast; its wider range is not a complete classification.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Router will not forward these outside the local network

**原文来源：** Week7.pdf · PDF页31 / 幻灯片31

**语境：** Week7 · Reserved link-local multicast / globally scoped multicast

**语境英文：** The slide distinguishes local-only multicast from wider-scope multicast; its wider range is not a complete classification.

**语境中文：** 保留的链路本地组播／全局范围组播；前者224.0.0.0–224.0.0.255不离开本地网络。后者本页写224.0.1.0–238.255.255.255；第32页另含239.x可路由例子，不当作完整全局分类。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Router will not forward these outside the local network

**语境原文来源：** Week7.pdf · PDF页31 / 幻灯片31

**语境来源：** Week7.pdf · PDF页31 / 幻灯片31

**全部来源：** Week7.pdf · PDF页31 / 幻灯片31

### Network portion / host portion / network ID

**稳定ID：** csit985-w7-0028

**类别：** 专业英语

**中文解释：** 网络部分／主机部分／网络标识。mask 指出分界；本讲 subnetting 示例不把 network ID 或 broadcast address 分给主机。

**简单英文（整理解释）：** The address has network and host parts. The example reserves network and broadcast addresses.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> There are two addresses which cannot be used

**原文来源：** Week7.pdf · PDF页38 / 幻灯片38

**语境：** Week7 · Network portion / host portion / network ID

**语境英文：** The address has network and host parts. The example reserves network and broadcast addresses.

**语境中文：** 网络部分／主机部分／网络标识。mask 指出分界；本讲 subnetting 示例不把 network ID 或 broadcast address 分给主机。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> There are two addresses which cannot be used

**语境原文来源：** Week7.pdf · PDF页38 / 幻灯片38

**语境来源：** Week7.pdf · PDF页35,36,38 / 幻灯片35,36,38

**全部来源：** Week7.pdf · PDF页35,36,38 / 幻灯片35,36,38

### Bitwise AND (AND operator)

**稳定ID：** csit985-w7-0029

**类别：** 专业英语

**中文解释：** 按位与：把 IP address 与 subnet mask 的二进制位逐一做 AND，得到 network address。图示10.10.10.1与255.255.255.0得10.10.10.0。

**简单英文（整理解释）：** Combining address and mask bits with AND to find the network address.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> AND operator

**原文来源：** Week7.pdf · PDF页37 / 幻灯片37

**语境：** Week7 · Bitwise AND (AND operator)

**语境英文：** Combining address and mask bits with AND to find the network address.

**语境中文：** 按位与：把 IP address 与 subnet mask 的二进制位逐一做 AND，得到 network address。图示10.10.10.1与255.255.255.0得10.10.10.0。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> AND operator

**语境原文来源：** Week7.pdf · PDF页37 / 幻灯片37

**语境来源：** Week7.pdf · PDF页37 / 幻灯片37

**全部来源：** Week7.pdf · PDF页37 / 幻灯片37

### Subnetting

**稳定ID：** csit985-w7-0030

**类别：** 专业英语

**中文解释：** 子网划分；为组织内部 LAN 创建新 mask，外部分配的原 mask 不改变。示例把192.35.40.0/24划为两个 /25。原文把地址块称 AS，有概念疑点。

**简单英文（整理解释）：** Dividing an allocated prefix into smaller internal networks without changing the original external allocation.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> the new mask applies to internal address allocation of LANs

**原文来源：** Week7.pdf · PDF页41 / 幻灯片41

**语境：** Week7 · Subnetting

**语境英文：** Dividing an allocated prefix into smaller internal networks without changing the original external allocation.

**语境中文：** 子网划分；为组织内部 LAN 创建新 mask，外部分配的原 mask 不改变。示例把192.35.40.0/24划为两个 /25。原文把地址块称 AS，有概念疑点。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> the new mask applies to internal address allocation of LANs

**语境原文来源：** Week7.pdf · PDF页41 / 幻灯片41

**语境来源：** Week7.pdf · PDF页38,40,41 / 幻灯片38,40,41

**全部来源：** Week7.pdf · PDF页38,40,41 / 幻灯片38,40,41

### Borrow bits from the host portion

**稳定ID：** csit985-w7-0031

**类别：** 专业英语

**中文解释：** 从主机部分借位；把位加入 subnet mask。借1 bit 可得到2个 subnets，示例 mask 为255.255.255.128或 /25。

**简单英文（整理解释）：** Move host bits into the subnet mask to create more subnets.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> borrow 1 bit from the Host portion

**原文来源：** Week7.pdf · PDF页43 / 幻灯片43

**语境：** Week7 · Borrow bits from the host portion

**语境英文：** Move host bits into the subnet mask to create more subnets.

**语境中文：** 从主机部分借位；把位加入 subnet mask。借1 bit 可得到2个 subnets，示例 mask 为255.255.255.128或 /25。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> borrow 1 bit from the Host portion

**语境原文来源：** Week7.pdf · PDF页43 / 幻灯片43

**语境来源：** Week7.pdf · PDF页43,46 / 幻灯片43,46

**全部来源：** Week7.pdf · PDF页43,46 / 幻灯片43,46

### First usable / last usable / broadcast address

**稳定ID：** csit985-w7-0032

**类别：** 专业英语

**中文解释：** 第一个／最后一个可用地址／广播地址。图45的第一个 /25 是.1–.126，broadcast .127；第二个是.129–.254，broadcast .255。这些数值仅属本例。

**简单英文（整理解释）：** Usable host limits and the broadcast address in the two /25 example subnets.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 图表标签／说明（视觉核对，非正式定义）

> Last Usable address

**原文来源：** Week7.pdf · PDF页44,45 / 幻灯片44,45（图表）

**语境：** Week7 · First usable / last usable / broadcast address

**语境英文：** Usable host limits and the broadcast address in the two /25 example subnets.

**语境中文：** 第一个／最后一个可用地址／广播地址。图45的第一个 /25 是.1–.126，broadcast .127；第二个是.129–.254，broadcast .255。这些数值仅属本例。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 图表标签／说明（视觉核对，非正式定义）

> Last Usable address

**语境原文来源：** Week7.pdf · PDF页44,45 / 幻灯片44,45（图表）

**语境来源：** Week7.pdf · PDF页44,45 / 幻灯片44,45

**全部来源：** Week7.pdf · PDF页44,45 / 幻灯片44,45

### Mask size / number of subnets / devices per subnet

**稳定ID：** csit985-w7-0033

**类别：** 专业英语

**中文解释：** 掩码增加位数／子网数／每子网设备数；表以原 /24为起点，借1–6 bits对应 /25–/30及2–64 subnets。Devices/Subnet 列为空，不把空白解释成0。

**简单英文（整理解释）：** Table labels for borrowed bits, subnet counts, and host counts; the last column is blank.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 图表标签／说明（视觉核对，非正式定义）

> Devices/Subnet

**原文来源：** Week7.pdf · PDF页48 / 幻灯片48（图表）

**语境：** Week7 · Mask size / number of subnets / devices per subnet

**语境英文：** Table labels for borrowed bits, subnet counts, and host counts; the last column is blank.

**语境中文：** 掩码增加位数／子网数／每子网设备数；表以原 /24为起点，借1–6 bits对应 /25–/30及2–64 subnets。Devices/Subnet 列为空，不把空白解释成0。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 图表标签／说明（视觉核对，非正式定义）

> Devices/Subnet

**语境原文来源：** Week7.pdf · PDF页48 / 幻灯片48（图表）

**语境来源：** Week7.pdf · PDF页48 / 幻灯片48

**全部来源：** Week7.pdf · PDF页48 / 幻灯片48

### RIP / RIPv1 / RIPv2 / OSPF (Open Shortest Path First) / BGP (Border Gateway Protocol)

**稳定ID：** csit985-w2-eafe385fbea971

**类别：** 专业英语

**中文解释：** RIP用 hop count，最大可用15 hops，通常30秒更新。RIPv1只支持 classful、不支持VLSM；RIPv2支持CIDR/VLSM。小型、低层次网络较适用，收敛可慢。

**简单英文（整理解释）：** RIP uses hop count, with at most fifteen usable hops. Version 2 supports classless addressing and VLSM.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Max number of hops is 15.

**原文来源：** Week7.pdf · PDF页69 / 幻灯片69

**资料原文：** 课件原文说明／用法（非正式定义）

> Open Shortest Path First

**原文来源：** Week7.pdf · PDF页71 / 幻灯片71

**资料原文：** 课件原文说明／用法（非正式定义）

> BGP (Border Gateway Protocol)

**原文来源：** Week7.pdf · PDF页72 / 幻灯片72

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> The road metric is uh basically OSPF cost.

**原文来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符38267起；搜索“The road metric is uh basically OSPF cost.”

**语境：** Week7 · RIP / RIPv1 / RIPv2

**语境英文：** RIP uses hop count, with at most fifteen usable hops. Version 2 supports classless addressing and VLSM.

**语境中文：** RIP用 hop count，最大可用15 hops，通常30秒更新。RIPv1只支持 classful、不支持VLSM；RIPv2支持CIDR/VLSM。小型、低层次网络较适用，收敛可慢。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Max number of hops is 15.

**语境原文来源：** Week7.pdf · PDF页69 / 幻灯片69

**语境来源：** Week7.pdf · PDF页51,69,70 / 幻灯片51,69,70

**语境：** Week7 · OSPF (Open Shortest Path First)

**语境英文：** A link-state interior routing protocol that supports areas and hierarchy.

**语境中文：** 开放最短路径优先；link-state IGP，支持area abstraction及分层拓扑。PDF的多个路由criteria表述与TXT按cost说明有差异。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Open Shortest Path First

**语境原文来源：** Week7.pdf · PDF页71 / 幻灯片71

**语境来源：** Week7.pdf · PDF页71 / 幻灯片71

**语境：** Week7 · BGP (Border Gateway Protocol)

**语境英文：** A path-vector routing protocol used across autonomous systems, with policy control.

**语境中文：** 边界网关协议；path-vector-based，跨 AS，用属性与policies选路径。课件 Internet hosts (ISPs) 的hosts措辞有疑点。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> BGP (Border Gateway Protocol)

**语境原文来源：** Week7.pdf · PDF页72 / 幻灯片72

**语境来源：** Week7.pdf · PDF页72 / 幻灯片72

**语境：** Week7 · OSPF (Open Shortest Path First)

**语境英文：** The transcript explains OSPF path choice through configured cost.

**语境中文：** TXT说路由metric基本是OSPF cost，可按bandwidth配置interface costs；traffic/reliability/security并非自动独立criteria。与PDF第71页用词差异记录。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> The road metric is uh basically OSPF cost.

**语境原文来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符38267起；搜索“The road metric is uh basically OSPF cost.”

**语境来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符38267起；搜索“The road metric is uh basically OSPF cost.”

**全部来源：** Week7.pdf · PDF页51,69,70 / 幻灯片51,69,70；Week7.pdf · PDF页71 / 幻灯片71；Week7.pdf · PDF页72 / 幻灯片72；CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符38267起；搜索“The road metric is uh basically OSPF cost.”

### EIGRP / IGRP

**稳定ID：** csit985-w7-0035

**类别：** 专业英语

**中文解释：** 课件列 Cisco proprietary 协议，称 EIGRP 与 RIP 较接近、IGRP 已 extinct。只保留本讲说法，不把状态当作已核实的当前产品事实。

**简单英文（整理解释）：** Cisco-related routing protocols as described in these slides; no current product status is independently checked.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> IGRP is another Cisco protocol but is now extinct

**原文来源：** Week7.pdf · PDF页51 / 幻灯片51

**语境：** Week7 · EIGRP / IGRP

**语境英文：** Cisco-related routing protocols as described in these slides; no current product status is independently checked.

**语境中文：** 课件列 Cisco proprietary 协议，称 EIGRP 与 RIP 较接近、IGRP 已 extinct。只保留本讲说法，不把状态当作已核实的当前产品事实。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> IGRP is another Cisco protocol but is now extinct

**语境原文来源：** Week7.pdf · PDF页51 / 幻灯片51

**语境来源：** Week7.pdf · PDF页51 / 幻灯片51

**全部来源：** Week7.pdf · PDF页51 / 幻灯片51

### IGP (Interior Gateway Protocol)

**稳定ID：** csit985-w7-0036

**类别：** 专业英语

**中文解释：** 内部网关协议；用于一个 AS 内交换 routing information，例RIP、OSPF、EIGRP。

**简单英文（整理解释）：** A routing protocol used within an autonomous system.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Routing protocol within an Autonomous System (AS)

**原文来源：** Week7.pdf · PDF页52 / 幻灯片52

**语境：** Week7 · IGP (Interior Gateway Protocol)

**语境英文：** A routing protocol used within an autonomous system.

**语境中文：** 内部网关协议；用于一个 AS 内交换 routing information，例RIP、OSPF、EIGRP。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Routing protocol within an Autonomous System (AS)

**语境原文来源：** Week7.pdf · PDF页52 / 幻灯片52

**语境来源：** Week7.pdf · PDF页52,58 / 幻灯片52,58

**全部来源：** Week7.pdf · PDF页52,58 / 幻灯片52,58

### EGP (Exterior Gateway Protocol)

**稳定ID：** csit985-w7-0037

**类别：** 专业英语

**中文解释：** 外部网关协议类别；主要在 AS 之间传 routing information。第52页 EGP is extinct 指同名旧协议与类别混用，须区分。

**简单英文（整理解释）：** A category for routing between autonomous systems; the name also refers to an older protocol in the slide.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Exterior Gateway protocol (EGP) primarily used to pass routing information between autonomous systems

**原文来源：** Week7.pdf · PDF页58 / 幻灯片58

**语境：** Week7 · EGP (Exterior Gateway Protocol)

**语境英文：** A category for routing between autonomous systems; the name also refers to an older protocol in the slide.

**语境中文：** 外部网关协议类别；主要在 AS 之间传 routing information。第52页 EGP is extinct 指同名旧协议与类别混用，须区分。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Exterior Gateway protocol (EGP) primarily used to pass routing information between autonomous systems

**语境原文来源：** Week7.pdf · PDF页58 / 幻灯片58

**语境来源：** Week7.pdf · PDF页52,58 / 幻灯片52,58

**全部来源：** Week7.pdf · PDF页52,58 / 幻灯片52,58

### Routing flows

**稳定ID：** csit985-w7-0038

**类别：** 专业英语

**中文解释：** 路由流；以 flow specification 中识别的 flows 为基础，按网络区域和组组织。

**简单英文（整理解释）：** Traffic flows used as the basis for routing decisions.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Flows developed in the flow specification form the basis for routing flows

**原文来源：** Week7.pdf · PDF页53 / 幻灯片53

**语境：** Week7 · Routing flows

**语境英文：** Traffic flows used as the basis for routing decisions.

**语境中文：** 路由流；以 flow specification 中识别的 flows 为基础，按网络区域和组组织。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Flows developed in the flow specification form the basis for routing flows

**语境原文来源：** Week7.pdf · PDF页53 / 幻灯片53

**语境来源：** Week7.pdf · PDF页53 / 幻灯片53

**全部来源：** Week7.pdf · PDF页53 / 幻灯片53

### Functional areas (FAs) / workgroups (WGs)

**稳定ID：** csit985-w7-0039

**类别：** 专业英语

**中文解释：** 功能区域／工作组；FA 是功能相似的群体，WG 有共同位置、应用或工作重点。FA 通常用 routers 连接，WG 共用Ethernet LAN；边界可协商。

**简单英文（整理解释）：** Groups with similar functions, or shared locations, applications, and work focus.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义；各来源语境分别保留

**资料原文：** 课件原文定义

> groups within a systems that share similar functions

**原文来源：** Week7.pdf · PDF页53 / 幻灯片53

**资料原文：** 课件原文定义

> have common locations, applications, work focus, etc.

**原文来源：** Week7.pdf · PDF页53 / 幻灯片53

**语境：** Week7 · Functional areas (FAs) / workgroups (WGs)

**语境英文：** Groups with similar functions, or shared locations, applications, and work focus.

**语境中文：** 功能区域／工作组；FA 是功能相似的群体，WG 有共同位置、应用或工作重点。FA 通常用 routers 连接，WG 共用Ethernet LAN；边界可协商。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> groups within a systems that share similar functions

**语境原文来源：** Week7.pdf · PDF页53 / 幻灯片53

**语境来源：** Week7.pdf · PDF页53,56 / 幻灯片53,56

**语境：** Week7 · Functional areas (FAs) / workgroups (WGs)

**语境英文：** Workgroups share locations, applications, work focus, or similar features.

**语境中文：** 原文workgroup说明：有共同locations、applications、work focus等；不能只按功能来等同FA与WG。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> have common locations, applications, work focus, etc.

**语境原文来源：** Week7.pdf · PDF页53 / 幻灯片53

**语境来源：** Week7.pdf · PDF页53 / 幻灯片53

**全部来源：** Week7.pdf · PDF页53,56 / 幻灯片53,56；Week7.pdf · PDF页53 / 幻灯片53

### Routing boundaries

**稳定ID：** csit985-w7-0040

**类别：** 专业英语

**中文解释：** 路由边界：按网络需求作物理或逻辑分隔。物理例iLAN/DMZ/interfaces；逻辑例FA/WG/admin domains。

**简单英文（整理解释）：** Physical or logical separation based on network requirements.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Routing boundaries are physical or logical separation of a network, based on requirements for a network.

**原文来源：** Week7.pdf · PDF页54 / 幻灯片54

**语境：** Week7 · Routing boundaries

**语境英文：** Physical or logical separation based on network requirements.

**语境中文：** 路由边界：按网络需求作物理或逻辑分隔。物理例iLAN/DMZ/interfaces；逻辑例FA/WG/admin domains。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Routing boundaries are physical or logical separation of a network, based on requirements for a network.

**语境原文来源：** Week7.pdf · PDF页54 / 幻灯片54

**语境来源：** Week7.pdf · PDF页54 / 幻灯片54

**全部来源：** Week7.pdf · PDF页54 / 幻灯片54

### Hard boundary / soft boundary

**稳定ID：** csit985-w7-0041

**类别：** 专业英语

**中文解释：** 硬边界／软边界；本讲硬边界关联 AS 之间的 EGP，软边界关联 AS 内的 IGP。不是材质软硬。

**简单英文（整理解释）：** Boundaries between autonomous systems, or within one autonomous system.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Hard boundary

**原文来源：** Week7.pdf · PDF页58 / 幻灯片58

**语境：** Week7 · Hard boundary / soft boundary

**语境英文：** Boundaries between autonomous systems, or within one autonomous system.

**语境中文：** 硬边界／软边界；本讲硬边界关联 AS 之间的 EGP，软边界关联 AS 内的 IGP。不是材质软硬。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Hard boundary

**语境原文来源：** Week7.pdf · PDF页58 / 幻灯片58

**语境来源：** Week7.pdf · PDF页58 / 幻灯片58

**全部来源：** Week7.pdf · PDF页58 / 幻灯片58

### Default route

**稳定ID：** csit985-w7-0042

**类别：** 专业英语

**中文解释：** 默认路由；PDF把 source-based 选路也写在此节。TXT 说明普通默认路由用于无更具体匹配时，按source选路属于 policy-based routing。保留差异。

**简单英文（整理解释）：** A route used when no more specific route matches; source-based selection is distinguished in the transcript.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Routers can stipulate default routes to force all traffic or selected traffic

**原文来源：** Week7.pdf · PDF页59 / 幻灯片59

**语境：** Week7 · Default route

**语境英文：** A route used when no more specific route matches; source-based selection is distinguished in the transcript.

**语境中文：** 默认路由；PDF把 source-based 选路也写在此节。TXT 说明普通默认路由用于无更具体匹配时，按source选路属于 policy-based routing。保留差异。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Routers can stipulate default routes to force all traffic or selected traffic

**语境原文来源：** Week7.pdf · PDF页59 / 幻灯片59

**语境来源：** Week7.pdf · PDF页59 / 幻灯片59

**全部来源：** Week7.pdf · PDF页59 / 幻灯片59

### Route filtering

**稳定ID：** csit985-w7-0043

**类别：** 专业英语

**中文解释：** 路由过滤；第59页混写 packet actions 与 routing-table changes，并等同Cisco ACL。TXT明确区分 packet filtering 控制流量、route filtering 控制prefix，不能混为同一操作。

**简单英文（整理解释）：** Controlling routing information; the slide mixes it with packet filtering, which the transcript distinguishes.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Route filters add, delete, modify routes in the routing table

**原文来源：** Week7.pdf · PDF页59 / 幻灯片59

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> packet filters control traffic. Road filters control which prefix uh enter or leaves the rolling table.

**原文来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符33301起；搜索“packet filters control traffic.”

**语境：** Week7 · Route filtering

**语境英文：** Controlling routing information; the slide mixes it with packet filtering, which the transcript distinguishes.

**语境中文：** 路由过滤；第59页混写 packet actions 与 routing-table changes，并等同Cisco ACL。TXT明确区分 packet filtering 控制流量、route filtering 控制prefix，不能混为同一操作。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Route filters add, delete, modify routes in the routing table

**语境原文来源：** Week7.pdf · PDF页59 / 幻灯片59

**语境来源：** Week7.pdf · PDF页59 / 幻灯片59

**语境：** Week7 · Route filtering

**语境英文：** Route filters control routing information; packet filters control traffic.

**语境中文：** TXT区分packet filtering和route filtering：前者控traffic，后者控prefix进入／离开routing table。原文Road/rolling疑似转写，原片段保留。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> packet filters control traffic. Road filters control which prefix uh enter or leaves the rolling table.

**语境原文来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符33301起；搜索“packet filters control traffic.”

**语境来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符33301起；搜索“packet filters control traffic.”

**全部来源：** Week7.pdf · PDF页59 / 幻灯片59；CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符33301起；搜索“packet filters control traffic.”

### Route aggregation

**稳定ID：** csit985-w7-0044

**类别：** 专业英语

**中文解释：** 路由汇总；PDF写 aggregate traffic，TXT说明多个具体prefix合成一个summary prefix，以减少需存储和处理的routes。措辞差异保留。

**简单英文（整理解释）：** Combining more specific prefixes into a summary prefix, as explained in the transcript.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Applied at boundary routers between ISPs (for example) to aggregate traffic

**原文来源：** Week7.pdf · PDF页60 / 幻灯片60

**语境：** Week7 · Route aggregation

**语境英文：** Combining more specific prefixes into a summary prefix, as explained in the transcript.

**语境中文：** 路由汇总；PDF写 aggregate traffic，TXT说明多个具体prefix合成一个summary prefix，以减少需存储和处理的routes。措辞差异保留。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Applied at boundary routers between ISPs (for example) to aggregate traffic

**语境原文来源：** Week7.pdf · PDF页60 / 幻灯片60

**语境来源：** Week7.pdf · PDF页60 / 幻灯片60

**全部来源：** Week7.pdf · PDF页60 / 幻灯片60

### Routing policies

**稳定ID：** csit985-w7-0045

**类别：** 专业英语

**中文解释：** 路由策略；决策可考虑 AS number、cost、time of day、users 等，而非只看 route metrics。

**简单英文（整理解释）：** Rules that can select routes using factors beyond a single route metric.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> information other than route metrics such as time of day or preferred service provider

**原文来源：** Week7.pdf · PDF页61 / 幻灯片61

**语境：** Week7 · Routing policies

**语境英文：** Rules that can select routes using factors beyond a single route metric.

**语境中文：** 路由策略；决策可考虑 AS number、cost、time of day、users 等，而非只看 route metrics。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> information other than route metrics such as time of day or preferred service provider

**语境原文来源：** Week7.pdf · PDF页61 / 幻灯片61

**语境来源：** Week7.pdf · PDF页60,61 / 幻灯片60,61

**全部来源：** Week7.pdf · PDF页60,61 / 幻灯片60,61

### Hierarchy / interconnectivity (diversity)

**稳定ID：** csit985-w7-0046

**类别：** 专业英语

**中文解释：** 层次结构／互连程度（路径多样性）；层次是 levels，互连提供备选连接。两者增加会提高协议及routers的处理要求，不能只追求更多连接。

**简单英文（整理解释）：** Network levels and alternative connections; more complexity increases routing demands.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> As hierarchy and diversity increases greater demands are placed on the routing protocols

**原文来源：** Week7.pdf · PDF页63 / 幻灯片63

**语境：** Week7 · Hierarchy / interconnectivity (diversity)

**语境英文：** Network levels and alternative connections; more complexity increases routing demands.

**语境中文：** 层次结构／互连程度（路径多样性）；层次是 levels，互连提供备选连接。两者增加会提高协议及routers的处理要求，不能只追求更多连接。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> As hierarchy and diversity increases greater demands are placed on the routing protocols

**语境原文来源：** Week7.pdf · PDF页63 / 幻灯片63

**语境来源：** Week7.pdf · PDF页62,63,65 / 幻灯片62,63,65

**全部来源：** Week7.pdf · PDF页62,63,65 / 幻灯片62,63,65

### Convergence

**稳定ID：** csit985-w7-0047

**类别：** 专业英语

**中文解释：** 收敛：routers 对最优转发路由形成一致并完成 routing-table 更新的过程。

**简单英文（整理解释）：** Routers agreeing on routes and completing routing-table updates.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 课件给出原文定义

**资料原文：** 课件原文定义

> Convergence is the process of routers agreeing on optimal routes forwarding packets and thereby completing the updating of their routing tables.

**原文来源：** Week7.pdf · PDF页66 / 幻灯片66

**语境：** Week7 · Convergence

**语境英文：** Routers agreeing on routes and completing routing-table updates.

**语境中文：** 收敛：routers 对最优转发路由形成一致并完成 routing-table 更新的过程。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文定义

> Convergence is the process of routers agreeing on optimal routes forwarding packets and thereby completing the updating of their routing tables.

**语境原文来源：** Week7.pdf · PDF页66 / 幻灯片66

**语境来源：** Week7.pdf · PDF页66 / 幻灯片66

**全部来源：** Week7.pdf · PDF页66 / 幻灯片66

### Convergence time / protocol overhead / utilization

**稳定ID：** csit985-w7-0048

**类别：** 专业英语

**中文解释：** 收敛时间／协议开销／利用率；本讲用于评估routing protocols，分别考虑反应速度、额外资源和CPU/Memory占用。

**简单英文（整理解释）：** Measures used to evaluate routing protocols: update time, extra work, and resource use.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> CPU utilization

**原文来源：** Week7.pdf · PDF页62 / 幻灯片62

**语境：** Week7 · Convergence time / protocol overhead / utilization

**语境英文：** Measures used to evaluate routing protocols: update time, extra work, and resource use.

**语境中文：** 收敛时间／协议开销／利用率；本讲用于评估routing protocols，分别考虑反应速度、额外资源和CPU/Memory占用。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> CPU utilization

**语境原文来源：** Week7.pdf · PDF页62 / 幻灯片62

**语境来源：** Week7.pdf · PDF页62,66 / 幻灯片62,66

**全部来源：** Week7.pdf · PDF页62,66 / 幻灯片62,66

### Reachability

**稳定ID：** csit985-w7-0049

**类别：** 专业英语

**中文解释：** 可达性；router 学习哪些 host addresses 在网络内部或网络之间可到达。

**简单英文（整理解释）：** Whether an address can be reached through the network.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Routers learn about “reachability” of host addresses

**原文来源：** Week7.pdf · PDF页66 / 幻灯片66

**语境：** Week7 · Reachability

**语境英文：** Whether an address can be reached through the network.

**语境中文：** 可达性；router 学习哪些 host addresses 在网络内部或网络之间可到达。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Routers learn about “reachability” of host addresses

**语境原文来源：** Week7.pdf · PDF页66 / 幻灯片66

**语境来源：** Week7.pdf · PDF页66 / 幻灯片66

**全部来源：** Week7.pdf · PDF页66 / 幻灯片66

### Static routes

**稳定ID：** csit985-w7-0050

**类别：** 专业英语

**中文解释：** 静态路由；手动配置，减少动态更新的CPU和带宽开销；数量多或网络变化时更难维护。

**简单英文（整理解释）：** Configured routes that avoid dynamic updates but can be harder to maintain at scale.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Static routes have a performance benefit

**原文来源：** Week7.pdf · PDF页67 / 幻灯片67

**语境：** Week7 · Static routes

**语境英文：** Configured routes that avoid dynamic updates but can be harder to maintain at scale.

**语境中文：** 静态路由；手动配置，减少动态更新的CPU和带宽开销；数量多或网络变化时更难维护。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Static routes have a performance benefit

**语境原文来源：** Week7.pdf · PDF页67 / 幻灯片67

**语境来源：** Week7.pdf · PDF页67 / 幻灯片67

**全部来源：** Week7.pdf · PDF页67 / 幻灯片67

### Stub network / transit traffic

**稳定ID：** csit985-w7-0051

**类别：** 专业英语

**中文解释：** 末梢网络／过境流量；课件写 transient traffic，TXT解释不提供其他网络间的通路。不能把 transient（短暂的）当成这里已正式定义的 transit。

**简单英文（整理解释）：** A network that does not carry traffic between other networks in this example.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> there is no transient traffic

**原文来源：** Week7.pdf · PDF页67 / 幻灯片67

**语境：** Week7 · Stub network / transit traffic

**语境英文：** A network that does not carry traffic between other networks in this example.

**语境中文：** 末梢网络／过境流量；课件写 transient traffic，TXT解释不提供其他网络间的通路。不能把 transient（短暂的）当成这里已正式定义的 transit。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> there is no transient traffic

**语境原文来源：** Week7.pdf · PDF页67 / 幻灯片67

**语境来源：** Week7.pdf · PDF页67,68 / 幻灯片67,68

**全部来源：** Week7.pdf · PDF页67,68 / 幻灯片67,68

### Distance vector / hop count

**稳定ID：** csit985-w7-0052

**类别：** 专业英语

**中文解释：** 距离向量／跳数；RIP在routing table中用到目标router的 hops 数作度量，最多15 hops。

**简单英文（整理解释）：** A routing approach that uses distance information; RIP uses hop count.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> the number of “hops” to a particular router

**原文来源：** Week7.pdf · PDF页69 / 幻灯片69

**语境：** Week7 · Distance vector / hop count

**语境英文：** A routing approach that uses distance information; RIP uses hop count.

**语境中文：** 距离向量／跳数；RIP在routing table中用到目标router的 hops 数作度量，最多15 hops。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> the number of “hops” to a particular router

**语境原文来源：** Week7.pdf · PDF页69 / 幻灯片69

**语境来源：** Week7.pdf · PDF页69 / 幻灯片69

**全部来源：** Week7.pdf · PDF页69 / 幻灯片69

### OAM&P

**稳定ID：** csit985-w7-0053

**类别：** 专业英语

**中文解释：** Operation, Admin, Main and Provisioning；课件缩写如此展开，Main 疑似 maintenance 缩写。RIP运维较直接，OSPF/BGP较复杂，作为 trade-off 保留。

**简单英文（整理解释）：** A label for routing-operation work; the slide's shortened expansion has a noted ambiguity.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Operation, Admin, Main and Provisioning (OAM&P)

**原文来源：** Week7.pdf · PDF页69 / 幻灯片69

**语境：** Week7 · OAM&P

**语境英文：** A label for routing-operation work; the slide's shortened expansion has a noted ambiguity.

**语境中文：** Operation, Admin, Main and Provisioning；课件缩写如此展开，Main 疑似 maintenance 缩写。RIP运维较直接，OSPF/BGP较复杂，作为 trade-off 保留。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Operation, Admin, Main and Provisioning (OAM&P)

**语境原文来源：** Week7.pdf · PDF页69 / 幻灯片69

**语境来源：** Week7.pdf · PDF页69,71,72 / 幻灯片69,71,72

**全部来源：** Week7.pdf · PDF页69,71,72 / 幻灯片69,71,72

### VLSM (variable length subnet masking)

**稳定ID：** csit985-w7-0054

**类别：** 专业英语

**中文解释：** 可变长度子网掩码；RIPv1不支持，RIPv2支持并传 subnet mask length。

**简单英文（整理解释）：** Using different subnet-mask lengths; RIPv2 supports it and transmits the mask length.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> variable length subnet masking (VLSM)

**原文来源：** Week7.pdf · PDF页70 / 幻灯片70

**语境：** Week7 · VLSM (variable length subnet masking)

**语境英文：** Using different subnet-mask lengths; RIPv2 supports it and transmits the mask length.

**语境中文：** 可变长度子网掩码；RIPv1不支持，RIPv2支持并传 subnet mask length。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> variable length subnet masking (VLSM)

**语境原文来源：** Week7.pdf · PDF页70 / 幻灯片70

**语境来源：** Week7.pdf · PDF页70 / 幻灯片70

**全部来源：** Week7.pdf · PDF页70 / 幻灯片70

### Link-state algorithm / area abstraction

**稳定ID：** csit985-w7-0055

**类别：** 专业英语

**中文解释：** 链路状态算法／区域抽象；课件说前者使拓扑改变后的收敛较快，后者使层次能映射为拓扑。没有说任何环境必然更快。

**简单英文（整理解释）：** A routing algorithm and an area structure used to organize OSPF networks.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> area abstraction

**原文来源：** Week7.pdf · PDF页71 / 幻灯片71

**语境：** Week7 · Link-state algorithm / area abstraction

**语境英文：** A routing algorithm and an area structure used to organize OSPF networks.

**语境中文：** 链路状态算法／区域抽象；课件说前者使拓扑改变后的收敛较快，后者使层次能映射为拓扑。没有说任何环境必然更快。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> area abstraction

**语境原文来源：** Week7.pdf · PDF页71 / 幻灯片71

**语境来源：** Week7.pdf · PDF页71 / 幻灯片71

**全部来源：** Week7.pdf · PDF页71 / 幻灯片71

### Path vector

**稳定ID：** csit985-w7-0056

**类别：** 专业英语

**中文解释：** 路径向量；课件说与distance vector相似，但在AS之间工作。TXT补充AS path及其他attributes支持policy decisions。

**简单英文（整理解释）：** Routing information that describes paths across autonomous systems.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Path vector based

**原文来源：** Week7.pdf · PDF页72 / 幻灯片72

**语境：** Week7 · Path vector

**语境英文：** Routing information that describes paths across autonomous systems.

**语境中文：** 路径向量；课件说与distance vector相似，但在AS之间工作。TXT补充AS path及其他attributes支持policy decisions。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Path vector based

**语境原文来源：** Week7.pdf · PDF页72 / 幻灯片72

**语境来源：** Week7.pdf · PDF页72 / 幻灯片72

**全部来源：** Week7.pdf · PDF页72 / 幻灯片72

### iBGP / eBGP

**稳定ID：** csit985-w7-0057

**类别：** 专业英语

**中文解释：** 内部BGP／外部BGP；图中iBGP在AS100内部传BGP信息，eBGP连接不同AS。两者都是BGP，不把iBGP直接当成IGP。

**简单英文（整理解释）：** BGP sessions within one AS, or between different autonomous systems.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> iBGP and eBGP

**原文来源：** Week7.pdf · PDF页72 / 幻灯片72

**语境：** Week7 · iBGP / eBGP

**语境英文：** BGP sessions within one AS, or between different autonomous systems.

**语境中文：** 内部BGP／外部BGP；图中iBGP在AS100内部传BGP信息，eBGP连接不同AS。两者都是BGP，不把iBGP直接当成IGP。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> iBGP and eBGP

**语境原文来源：** Week7.pdf · PDF页72 / 幻灯片72

**语境来源：** Week7.pdf · PDF页72,73 / 幻灯片72,73

**全部来源：** Week7.pdf · PDF页72,73 / 幻灯片72,73

### ASN (Autonomous System Number)

**稳定ID：** csit985-w7-0085

**类别：** 专业英语

**中文解释：** 自治系统号；标识routing domain，IP prefix标识address block。不能把ASN与地址前缀混淆。

**简单英文（整理解释）：** A number identifying a routing domain, unlike a prefix identifying an address block.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> An ASN identifies the routing domain.

**原文来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符4462起；搜索“An ASN identifies the routing domain.”

**语境：** Week7 · ASN (Autonomous System Number)

**语境英文：** A number identifying a routing domain, unlike a prefix identifying an address block.

**语境中文：** 自治系统号；标识routing domain，IP prefix标识address block。不能把ASN与地址前缀混淆。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> An ASN identifies the routing domain.

**语境原文来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符4462起；搜索“An ASN identifies the routing domain.”

**语境来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符4462起；搜索“An ASN identifies the routing domain.”

**全部来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符4462起；搜索“An ASN identifies the routing domain.”

### Policy-based routing

**稳定ID：** csit985-w7-0086

**类别：** 专业英语

**中文解释：** 基于策略的路由；TXT把按source address等details选route与ordinary default route区分。

**简单英文（整理解释）：** Selecting a route using policy conditions beyond an ordinary destination match.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> policy-based routing, which is like more specific than an ordinary default road.

**原文来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符33147起；搜索“policy-based routing, which is”

**语境：** Week7 · Policy-based routing

**语境英文：** Selecting a route using policy conditions beyond an ordinary destination match.

**语境中文：** 基于策略的路由；TXT把按source address等details选route与ordinary default route区分。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> policy-based routing, which is like more specific than an ordinary default road.

**语境原文来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符33147起；搜索“policy-based routing, which is”

**语境来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符33147起；搜索“policy-based routing, which is”

**全部来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符33147起；搜索“policy-based routing, which is”

### Default gateway

**稳定ID：** csit985-w7-0087

**类别：** 专业英语

**中文解释：** 默认网关；当destination属于另一个subnet时，host把packet交给gateway。与default route不是同一个词条。

**简单英文（整理解释）：** A gateway used by a host to reach destinations outside its local subnet.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> its default gateway.

**原文来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符32179起；搜索“its default gateway. So here's”

**语境：** Week7 · Default gateway

**语境英文：** A gateway used by a host to reach destinations outside its local subnet.

**语境中文：** 默认网关；当destination属于另一个subnet时，host把packet交给gateway。与default route不是同一个词条。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> its default gateway.

**语境原文来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符32179起；搜索“its default gateway. So here's”

**语境来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符32179起；搜索“its default gateway. So here's”

**全部来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符32179起；搜索“its default gateway. So here's”

### Amplification attack

**稳定ID：** csit985-w7-0092

**类别：** 专业英语

**中文解释：** 放大攻击；TXT以它说明directed broadcast forwarding被默认限制，未给攻击步骤。

**简单英文（整理解释）：** An attack type mentioned as a reason to restrict directed broadcasts.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> abused in amplification attacks

**原文来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符18188起；搜索“abused in amplification attacks”

**语境：** Week7 · Amplification attack

**语境英文：** An attack type mentioned as a reason to restrict directed broadcasts.

**语境中文：** 放大攻击；TXT以它说明directed broadcast forwarding被默认限制，未给攻击步骤。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> abused in amplification attacks

**语境原文来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符18188起；搜索“abused in amplification attacks”

**语境来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符18188起；搜索“abused in amplification attacks”

**全部来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符18188起；搜索“abused in amplification attacks”

## 阅读词汇

### allocate ... to ...

**稳定ID：** csit985-w7-0058

**类别：** 阅读词汇

**中文解释：** 把……分配给……；这里IANA向RIR分配addresses和AS numbers。

**简单英文（整理解释）：** Give a resource to a person or group for use.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Allocates global IP addresses

**原文来源：** Week7.pdf · PDF页8 / 幻灯片8

**语境：** Week7 · allocate ... to ...

**语境英文：** Give a resource to a person or group for use.

**语境中文：** 把……分配给……；这里IANA向RIR分配addresses和AS numbers。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** allocate + resource + to + recipient

**语境原文：** 课件原文说明／用法（非正式定义）

> Allocates global IP addresses

**语境原文来源：** Week7.pdf · PDF页8 / 幻灯片8

**语境来源：** Week7.pdf · PDF页8 / 幻灯片8

**使用结构：** allocate + resource + to + recipient

**全部来源：** Week7.pdf · PDF页8 / 幻灯片8

### on behalf of

**稳定ID：** csit985-w7-0059

**类别：** 阅读词汇

**中文解释：** 代表……；一个或多个operators代表管理实体控制prefixes。

**简单英文（整理解释）：** Acting for another person or organization.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> on behalf of a single administrative entity

**原文来源：** Week7.pdf · PDF页9 / 幻灯片9

**语境：** Week7 · on behalf of

**语境英文：** Acting for another person or organization.

**语境中文：** 代表……；一个或多个operators代表管理实体控制prefixes。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** on behalf of + person / organization

**语境原文：** 课件原文说明／用法（非正式定义）

> on behalf of a single administrative entity

**语境原文来源：** Week7.pdf · PDF页9 / 幻灯片9

**语境来源：** Week7.pdf · PDF页9 / 幻灯片9

**使用结构：** on behalf of + person / organization

**全部来源：** Week7.pdf · PDF页9 / 幻灯片9

### persistent

**稳定ID：** csit985-w7-0060

**类别：** 阅读词汇

**中文解释：** 持续的、长期保持的；此处形容地址分配期限，不表示“顽固的”。

**简单英文（整理解释）：** Continuing for a long time.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Persistent addresses

**原文来源：** Week7.pdf · PDF页14 / 幻灯片14

**语境：** Week7 · persistent

**语境英文：** Continuing for a long time.

**语境中文：** 持续的、长期保持的；此处形容地址分配期限，不表示“顽固的”。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Persistent addresses

**语境原文来源：** Week7.pdf · PDF页14 / 幻灯片14

**语境来源：** Week7.pdf · PDF页14 / 幻灯片14

**全部来源：** Week7.pdf · PDF页14 / 幻灯片14

### predetermined

**稳定ID：** csit985-w7-0061

**类别：** 阅读词汇

**中文解释：** 预先确定的；classful addressing 的mask lengths由类别固定。

**简单英文（整理解释）：** Decided in advance.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Predetermined mask lengths

**原文来源：** Week7.pdf · PDF页15 / 幻灯片15

**语境：** Week7 · predetermined

**语境英文：** Decided in advance.

**语境中文：** 预先确定的；classful addressing 的mask lengths由类别固定。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Predetermined mask lengths

**语境原文来源：** Week7.pdf · PDF页15 / 幻灯片15

**语境来源：** Week7.pdf · PDF页15 / 幻灯片15

**全部来源：** Week7.pdf · PDF页15 / 幻灯片15

### be superseded

**稳定ID：** csit985-w7-0062

**类别：** 阅读词汇

**中文解释：** 被取代；有类编址已有替代方式，但历史影响仍在。

**简单英文（整理解释）：** Be replaced by something newer.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> has been superseded

**原文来源：** Week7.pdf · PDF页15 / 幻灯片15

**语境：** Week7 · be superseded

**语境英文：** Be replaced by something newer.

**语境中文：** 被取代；有类编址已有替代方式，但历史影响仍在。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** be superseded by + replacement

**语境原文：** 课件原文说明／用法（非正式定义）

> has been superseded

**语境原文来源：** Week7.pdf · PDF页15 / 幻灯片15

**语境来源：** Week7.pdf · PDF页15 / 幻灯片15

**使用结构：** be superseded by + replacement

**全部来源：** Week7.pdf · PDF页15 / 幻灯片15

### legacy implications

**稳定ID：** csit985-w7-0063

**类别：** 阅读词汇

**中文解释：** 历史机制留下的影响；不是说旧方式仍应全面使用。

**简单英文（整理解释）：** Effects left by an older system.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> legacy implications

**原文来源：** Week7.pdf · PDF页15 / 幻灯片15

**语境：** Week7 · legacy implications

**语境英文：** Effects left by an older system.

**语境中文：** 历史机制留下的影响；不是说旧方式仍应全面使用。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> legacy implications

**语境原文来源：** Week7.pdf · PDF页15 / 幻灯片15

**语境来源：** Week7.pdf · PDF页15 / 幻灯片15

**全部来源：** Week7.pdf · PDF页15 / 幻灯片15

### emerge out of the realization that

**稳定ID：** csit985-w7-0064

**类别：** 阅读词汇

**中文解释：** 从“意识到……”这一认识中产生；CIDR源于发现旧分类不能满足增长。

**简单英文（整理解释）：** Develop because people realize something.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> CIDR emerged out of the realization

**原文来源：** Week7.pdf · PDF页17 / 幻灯片17

**语境：** Week7 · emerge out of the realization that

**语境英文：** Develop because people realize something.

**语境中文：** 从“意识到……”这一认识中产生；CIDR源于发现旧分类不能满足增长。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** emerge out of + noun; realize that + clause

**语境原文：** 课件原文说明／用法（非正式定义）

> CIDR emerged out of the realization

**语境原文来源：** Week7.pdf · PDF页17 / 幻灯片17

**语境来源：** Week7.pdf · PDF页17 / 幻灯片17

**使用结构：** emerge out of + noun; realize that + clause

**全部来源：** Week7.pdf · PDF页17 / 幻灯片17

### imperative

**稳定ID：** csit985-w7-0065

**类别：** 阅读词汇

**中文解释：** 必不可少的；CIDR下必须同时给出mask。

**简单英文（整理解释）：** Very necessary.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> it is imperative to include the mask

**原文来源：** Week7.pdf · PDF页19 / 幻灯片19

**语境：** Week7 · imperative

**语境英文：** Very necessary.

**语境中文：** 必不可少的；CIDR下必须同时给出mask。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** it is imperative to + verb

**语境原文：** 课件原文说明／用法（非正式定义）

> it is imperative to include the mask

**语境原文来源：** Week7.pdf · PDF页19 / 幻灯片19

**语境来源：** Week7.pdf · PDF页19 / 幻灯片19

**使用结构：** it is imperative to + verb

**全部来源：** Week7.pdf · PDF页19 / 幻灯片19

### the prospect of running out of

**稳定ID：** csit985-w7-0066

**类别：** 阅读词汇

**中文解释：** 面临可能用完……的前景；run out of指资源耗尽。

**简单英文（整理解释）：** The possibility that no more of a resource will remain.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> the prospect of running out of IP addresses

**原文来源：** Week7.pdf · PDF页20 / 幻灯片20

**语境：** Week7 · the prospect of running out of

**语境英文：** The possibility that no more of a resource will remain.

**语境中文：** 面临可能用完……的前景；run out of指资源耗尽。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** run out of + resource

**语境原文：** 课件原文说明／用法（非正式定义）

> the prospect of running out of IP addresses

**语境原文来源：** Week7.pdf · PDF页20 / 幻灯片20

**语境来源：** Week7.pdf · PDF页20 / 幻灯片20

**使用结构：** run out of + resource

**全部来源：** Week7.pdf · PDF页20 / 幻灯片20

### be set aside for

**稳定ID：** csit985-w7-0067

**类别：** 阅读词汇

**中文解释：** 被专门留作……用途；这里test-net addresses留作教学。

**简单英文（整理解释）：** Be kept for a particular purpose.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Are set aside for teaching and learning purpose

**原文来源：** Week7.pdf · PDF页23 / 幻灯片23

**语境：** Week7 · be set aside for

**语境英文：** Be kept for a particular purpose.

**语境中文：** 被专门留作……用途；这里test-net addresses留作教学。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** set something aside for + purpose

**语境原文：** 课件原文说明／用法（非正式定义）

> Are set aside for teaching and learning purpose

**语境原文来源：** Week7.pdf · PDF页23 / 幻灯片23

**语境来源：** Week7.pdf · PDF页23 / 幻灯片23

**使用结构：** set something aside for + purpose

**全部来源：** Week7.pdf · PDF页23 / 幻灯片23

### discard ... if ...

**稳定ID：** csit985-w7-0068

**类别：** 阅读词汇

**中文解释：** 如果满足条件就丢弃……；目的IP不匹配时丢弃，必须保留IF条件。

**简单英文（整理解释）：** Throw away something when a stated condition is met.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> will discard it IF the destination address does not match its IP address.

**原文来源：** Week7.pdf · PDF页25 / 幻灯片25

**语境：** Week7 · discard ... if ...

**语境英文：** Throw away something when a stated condition is met.

**语境中文：** 如果满足条件就丢弃……；目的IP不匹配时丢弃，必须保留IF条件。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** discard + object + if + condition

**语境原文：** 课件原文说明／用法（非正式定义）

> will discard it IF the destination address does not match its IP address.

**语境原文来源：** Week7.pdf · PDF页25 / 幻灯片25

**语境来源：** Week7.pdf · PDF页25 / 幻灯片25

**使用结构：** discard + object + if + condition

**全部来源：** Week7.pdf · PDF页25 / 幻灯片25

### subscribe to

**稳定ID：** csit985-w7-0069

**类别：** 阅读词汇

**中文解释：** 加入／订阅；此处host加入multicast group才能接收其packets。

**简单英文（整理解释）：** Join a group to receive its traffic.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> subscribe to a multicast group

**原文来源：** Week7.pdf · PDF页30 / 幻灯片30

**语境：** Week7 · subscribe to

**语境英文：** Join a group to receive its traffic.

**语境中文：** 加入／订阅；此处host加入multicast group才能接收其packets。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** subscribe to + group / service

**语境原文：** 课件原文说明／用法（非正式定义）

> subscribe to a multicast group

**语境原文来源：** Week7.pdf · PDF页30 / 幻灯片30

**语境来源：** Week7.pdf · PDF页30 / 幻灯片30

**使用结构：** subscribe to + group / service

**全部来源：** Week7.pdf · PDF页30 / 幻灯片30

### proprietary

**稳定ID：** csit985-w2-7f51cd5f573bbf

**类别：** 阅读词汇

**中文解释：** 专有的；课件形容Cisco协议，保留本讲措辞。

**简单英文（整理解释）：** Owned or controlled by a company.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Cisco proprietary

**原文来源：** Week7.pdf · PDF页51 / 幻灯片51

**语境：** Week7 · proprietary

**语境英文：** Owned or controlled by a company.

**语境中文：** 专有的；课件形容Cisco协议，保留本讲措辞。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** proprietary + protocol / technology

**语境原文：** 课件原文说明／用法（非正式定义）

> Cisco proprietary

**语境原文来源：** Week7.pdf · PDF页51 / 幻灯片51

**语境来源：** Week7.pdf · PDF页51 / 幻灯片51

**使用结构：** proprietary + protocol / technology

**全部来源：** Week7.pdf · PDF页51 / 幻灯片51

### extinct

**稳定ID：** csit985-w7-0071

**类别：** 阅读词汇

**中文解释：** 已停止存在的；课件形容IGRP，不作为最新产品状态。

**简单英文（整理解释）：** No longer existing in the slide wording.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> is now extinct

**原文来源：** Week7.pdf · PDF页51 / 幻灯片51

**语境：** Week7 · extinct

**语境英文：** No longer existing in the slide wording.

**语境中文：** 已停止存在的；课件形容IGRP，不作为最新产品状态。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** be extinct

**语境原文：** 课件原文说明／用法（非正式定义）

> is now extinct

**语境原文来源：** Week7.pdf · PDF页51 / 幻灯片51

**语境来源：** Week7.pdf · PDF页51 / 幻灯片51

**使用结构：** be extinct

**全部来源：** Week7.pdf · PDF页51 / 幻灯片51

### negotiable

**稳定ID：** csit985-w7-0072

**类别：** 阅读词汇

**中文解释：** 可协商的；FA与WG边界可以讨论，但目标仍是hierarchical structure。

**简单英文（整理解释）：** Able to be agreed through discussion.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Boundaries between FAs and WGs are negotiable

**原文来源：** Week7.pdf · PDF页56 / 幻灯片56

**语境：** Week7 · negotiable

**语境英文：** Able to be agreed through discussion.

**语境中文：** 可协商的；FA与WG边界可以讨论，但目标仍是hierarchical structure。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Boundaries between FAs and WGs are negotiable

**语境原文来源：** Week7.pdf · PDF页56 / 幻灯片56

**语境来源：** Week7.pdf · PDF页56 / 幻灯片56

**全部来源：** Week7.pdf · PDF页56 / 幻灯片56

### stipulate

**稳定ID：** csit985-w7-0073

**类别：** 阅读词汇

**中文解释：** 明确规定；这里routers可以设定选用的route。

**简单英文（整理解释）：** State or set a requirement clearly.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Routers can stipulate default routes

**原文来源：** Week7.pdf · PDF页59 / 幻灯片59

**语境：** Week7 · stipulate

**语境英文：** State or set a requirement clearly.

**语境中文：** 明确规定；这里routers可以设定选用的route。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** stipulate + condition / rule

**语境原文：** 课件原文说明／用法（非正式定义）

> Routers can stipulate default routes

**语境原文来源：** Week7.pdf · PDF页59 / 幻灯片59

**语境来源：** Week7.pdf · PDF页59 / 幻灯片59

**使用结构：** stipulate + condition / rule

**全部来源：** Week7.pdf · PDF页59 / 幻灯片59

### on first blush

**稳定ID：** csit985-w7-0074

**类别：** 阅读词汇

**中文解释：** 乍看之下；课件用此表达引出技术指标与整体架构的联系不明显。保留课件措辞。

**简单英文（整理解释）：** At first sight, before closer thought.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> On first blush

**原文来源：** Week7.pdf · PDF页62 / 幻灯片62

**语境：** Week7 · on first blush

**语境英文：** At first sight, before closer thought.

**语境中文：** 乍看之下；课件用此表达引出技术指标与整体架构的联系不明显。保留课件措辞。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> On first blush

**语境原文来源：** Week7.pdf · PDF页62 / 幻灯片62

**语境来源：** Week7.pdf · PDF页62 / 幻灯片62

**全部来源：** Week7.pdf · PDF页62 / 幻灯片62

### be removed from

**稳定ID：** csit985-w7-0075

**类别：** 阅读词汇

**中文解释：** 与……距离较远／联系不直接；不是“从……删除”。原句form疑似from笔误。

**简单英文（整理解释）：** Be rather distant from an idea or concern.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> removed form overall network architecture

**原文来源：** Week7.pdf · PDF页62 / 幻灯片62

**语境：** Week7 · be removed from

**语境英文：** Be rather distant from an idea or concern.

**语境中文：** 与……距离较远／联系不直接；不是“从……删除”。原句form疑似from笔误。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** be removed from + concern / idea

**语境原文：** 课件原文说明／用法（非正式定义）

> removed form overall network architecture

**语境原文来源：** Week7.pdf · PDF页62 / 幻灯片62

**语境来源：** Week7.pdf · PDF页62 / 幻灯片62

**使用结构：** be removed from + concern / idea

**全部来源：** Week7.pdf · PDF页62 / 幻灯片62

### sophisticated

**稳定ID：** csit985-w7-0076

**类别：** 阅读词汇

**中文解释：** 复杂且精细的；描述复杂网络可能需要的routing protocols。

**简单英文（整理解释）：** More complex and advanced.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> more sophisticated routing protocols

**原文来源：** Week7.pdf · PDF页65 / 幻灯片65

**语境：** Week7 · sophisticated

**语境英文：** More complex and advanced.

**语境中文：** 复杂且精细的；描述复杂网络可能需要的routing protocols。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> more sophisticated routing protocols

**语境原文来源：** Week7.pdf · PDF页65 / 幻灯片65

**语境来源：** Week7.pdf · PDF页65 / 幻灯片65

**全部来源：** Week7.pdf · PDF页65 / 幻灯片65

### be better suited to / for

**稳定ID：** csit985-w7-0077

**类别：** 阅读词汇

**中文解释：** 更适合……；协议适合程度取决于层次和互连结构。

**简单英文（整理解释）：** Be more suitable for a particular situation.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> better suited to high degree of hierarchy

**原文来源：** Week7.pdf · PDF页66 / 幻灯片66

**语境：** Week7 · be better suited to / for

**语境英文：** Be more suitable for a particular situation.

**语境中文：** 更适合……；协议适合程度取决于层次和互连结构。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** be suited to / for + noun

**语境原文：** 课件原文说明／用法（非正式定义）

> better suited to high degree of hierarchy

**语境原文来源：** Week7.pdf · PDF页66 / 幻灯片66

**语境来源：** Week7.pdf · PDF页66 / 幻灯片66

**使用结构：** be suited to / for + noun

**全部来源：** Week7.pdf · PDF页66 / 幻灯片66

### merely

**稳定ID：** csit985-w7-0078

**类别：** 阅读词汇

**中文解释：** 仅仅；stub router仅需处理发往该网络的流量。

**简单英文（整理解释）：** Only; nothing more.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> the router merely needs to send traffic

**原文来源：** Week7.pdf · PDF页67 / 幻灯片67

**语境：** Week7 · merely

**语境英文：** Only; nothing more.

**语境中文：** 仅仅；stub router仅需处理发往该网络的流量。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> the router merely needs to send traffic

**语境原文来源：** Week7.pdf · PDF页67 / 幻灯片67

**语境来源：** Week7.pdf · PDF页67 / 幻灯片67

**全部来源：** Week7.pdf · PDF页67 / 幻灯片67

### straightforward

**稳定ID：** csit985-w7-0079

**类别：** 阅读词汇

**中文解释：** 简单明了、容易处理；课件用来描述RIP的OAM&P。

**简单英文（整理解释）：** Easy to understand or carry out.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> is straightforward

**原文来源：** Week7.pdf · PDF页69 / 幻灯片69

**语境：** Week7 · straightforward

**语境英文：** Easy to understand or carry out.

**语境中文：** 简单明了、容易处理；课件用来描述RIP的OAM&P。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> is straightforward

**语境原文来源：** Week7.pdf · PDF页69 / 幻灯片69

**语境来源：** Week7.pdf · PDF页69 / 幻灯片69

**全部来源：** Week7.pdf · PDF页69 / 幻灯片69

### re-evaluate prior decisions

**稳定ID：** csit985-w7-0080

**类别：** 阅读词汇

**中文解释：** 重新评估先前决定；复杂度增加时回头检查原选择。

**简单英文（整理解释）：** Check earlier decisions again as conditions change.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> re-evaluate prior decisions

**原文来源：** Week7.pdf · PDF页74 / 幻灯片74

**语境：** Week7 · re-evaluate prior decisions

**语境英文：** Check earlier decisions again as conditions change.

**语境中文：** 重新评估先前决定；复杂度增加时回头检查原选择。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> re-evaluate prior decisions

**语境原文来源：** Week7.pdf · PDF页74 / 幻灯片74

**语境来源：** Week7.pdf · PDF页74 / 幻灯片74

**全部来源：** Week7.pdf · PDF页74 / 幻灯片74

### redundant

**稳定ID：** csit985-w7-0081

**类别：** 阅读词汇

**中文解释：** 不再必要的；此处旧推荐无需硬背，不是备份设备的冗余。

**简单英文（整理解释）：** No longer needed.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Are largely redundant these days

**原文来源：** Week7.pdf · PDF页76 / 幻灯片76

**语境：** Week7 · redundant

**语境英文：** No longer needed.

**语境中文：** 不再必要的；此处旧推荐无需硬背，不是备份设备的冗余。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** be redundant

**语境原文：** 课件原文说明／用法（非正式定义）

> Are largely redundant these days

**语境原文来源：** Week7.pdf · PDF页76 / 幻灯片76

**语境来源：** Week7.pdf · PDF页76 / 幻灯片76

**使用结构：** be redundant

**全部来源：** Week7.pdf · PDF页76 / 幻灯片76

### commit ... to memory

**稳定ID：** csit985-w7-0082

**类别：** 阅读词汇

**中文解释：** 牢牢记住；第76页否定need，表示无需背旧推荐。

**简单英文（整理解释）：** Learn something so that it can be recalled.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> no need to commit to previous two slides to memory

**原文来源：** Week7.pdf · PDF页76 / 幻灯片76

**语境：** Week7 · commit ... to memory

**语境英文：** Learn something so that it can be recalled.

**语境中文：** 牢牢记住；第76页否定need，表示无需背旧推荐。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** commit something to memory

**语境原文：** 课件原文说明／用法（非正式定义）

> no need to commit to previous two slides to memory

**语境原文来源：** Week7.pdf · PDF页76 / 幻灯片76

**语境来源：** Week7.pdf · PDF页76 / 幻灯片76

**使用结构：** commit something to memory

**全部来源：** Week7.pdf · PDF页76 / 幻灯片76

### intrusive

**稳定ID：** csit985-w7-0083

**类别：** 阅读词汇

**中文解释：** 会介入并影响其他过程的；这里security mechanisms可能影响routing behaviour。

**简单英文（整理解释）：** Interfering with another process.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> Security mechanisms are intrusive

**原文来源：** Week7.pdf · PDF页79 / 幻灯片79

**语境：** Week7 · intrusive

**语境英文：** Interfering with another process.

**语境中文：** 会介入并影响其他过程的；这里security mechanisms可能影响routing behaviour。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**语境原文：** 课件原文说明／用法（非正式定义）

> Security mechanisms are intrusive

**语境原文来源：** Week7.pdf · PDF页79 / 幻灯片79

**语境来源：** Week7.pdf · PDF页79 / 幻灯片79

**全部来源：** Week7.pdf · PDF页79 / 幻灯片79

### complicate the task of

**稳定ID：** csit985-w7-0084

**类别：** 阅读词汇

**中文解释：** 使……工作更复杂；dynamic addressing增加security工作的复杂度。

**简单英文（整理解释）：** Make a task harder to carry out.

**说明依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 课件原文说明／用法（非正式定义）

> complicate the task of security

**原文来源：** Week7.pdf · PDF页79 / 幻灯片79

**语境：** Week7 · complicate the task of

**语境英文：** Make a task harder to carry out.

**语境中文：** 使……工作更复杂；dynamic addressing增加security工作的复杂度。

**语境依据：** 按本次指定PDF整理；中文及简单英文为整理解释

**使用结构：** complicate + task; the task of + noun / doing

**语境原文：** 课件原文说明／用法（非正式定义）

> complicate the task of security

**语境原文来源：** Week7.pdf · PDF页79 / 幻灯片79

**语境来源：** Week7.pdf · PDF页79 / 幻灯片79

**使用结构：** complicate + task; the task of + noun / doing

**全部来源：** Week7.pdf · PDF页79 / 幻灯片79

### obsolete

**稳定ID：** csit985-w7-0088

**类别：** 阅读词汇

**中文解释：** 已过时；教师用来说明classful addressing不再作为现代routing的常规方式。

**简单英文（整理解释）：** No longer used as the normal modern method.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> It's obsolete, it's not used anymore

**原文来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符8803起；搜索“It's obsolete, it's not used anymore”

**语境：** Week7 · obsolete

**语境英文：** No longer used as the normal modern method.

**语境中文：** 已过时；教师用来说明classful addressing不再作为现代routing的常规方式。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> It's obsolete, it's not used anymore

**语境原文来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符8803起；搜索“It's obsolete, it's not used anymore”

**语境来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符8803起；搜索“It's obsolete, it's not used anymore”

**全部来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符8803起；搜索“It's obsolete, it's not used anymore”

### inefficient allocation

**稳定ID：** csit985-w7-0089

**类别：** 阅读词汇

**中文解释：** 低效分配；fixed classes可能给组织过大或过小的address block。

**简单英文（整理解释）：** Allocation that wastes resources or does not match needs.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> inefficient allocations

**原文来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符8633起；搜索“inefficient allocations and because”

**语境：** Week7 · inefficient allocation

**语境英文：** Allocation that wastes resources or does not match needs.

**语境中文：** 低效分配；fixed classes可能给组织过大或过小的address block。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**使用结构：** inefficient + noun

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> inefficient allocations

**语境原文来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符8633起；搜索“inefficient allocations and because”

**语境来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符8633起；搜索“inefficient allocations and because”

**使用结构：** inefficient + noun

**全部来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符8633起；搜索“inefficient allocations and because”

### conserve

**稳定ID：** csit985-w7-0090

**类别：** 阅读词汇

**中文解释：** 节省、保留有限资源；这里通过NAT减少public IPv4 address用量。

**简单英文（整理解释）：** Use a limited resource carefully so that less is needed.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> conserve public IPV4 addresses.

**原文来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符13690起；搜索“conserve public IPV4 addresses.”

**语境：** Week7 · conserve

**语境英文：** Use a limited resource carefully so that less is needed.

**语境中文：** 节省、保留有限资源；这里通过NAT减少public IPv4 address用量。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**使用结构：** conserve + resource

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> conserve public IPV4 addresses.

**语境原文来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符13690起；搜索“conserve public IPV4 addresses.”

**语境来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符13690起；搜索“conserve public IPV4 addresses.”

**使用结构：** conserve + resource

**全部来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符13690起；搜索“conserve public IPV4 addresses.”

### advertise a prefix

**稳定ID：** csit985-w7-0091

**类别：** 阅读词汇

**中文解释：** 通告prefix；routing语境中是告诉其他routers某个prefix可达，不是商业广告。

**简单英文（整理解释）：** Announce routing information about a prefix.

**说明依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**定义状态：** 当前资料未给出正式定义；原文名称、用法或说明另列

**资料原文：** 教师用语（TXT原片段，非课件正式定义）

> advertise one aggregate prefix

**原文来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符10561起；搜索“advertise one aggregate prefix”

**语境：** Week7 · advertise a prefix

**语境英文：** Announce routing information about a prefix.

**语境中文：** 通告prefix；routing语境中是告诉其他routers某个prefix可达，不是商业广告。

**语境依据：** 按本周录音TXT的实际语境整理；疑似转写错误另行标注

**使用结构：** advertise + route / prefix

**语境原文：** 教师用语（TXT原片段，非课件正式定义）

> advertise one aggregate prefix

**语境原文来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符10561起；搜索“advertise one aggregate prefix”

**语境来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符10561起；搜索“advertise one aggregate prefix”

**使用结构：** advertise + route / prefix

**全部来源：** CSIT985_Lecture7-transcript.txt · TXT原始L2，本行字符10561起；搜索“advertise one aggregate prefix”
