# CS-Vocabulary

按课程和周次维护 lecture 英语词汇。网站入口：<https://cp0330.github.io/CS-Vocabulary/>。

| 课程 | 网页 | 已有周次 | 有效词条（迁移时） |
|---|---|---|---|
| CSIT882 | [882](https://cp0330.github.io/CS-Vocabulary/882/) | Week9、Week9B、Week10 | 296 |
| CSIT985 | [985](https://cp0330.github.io/CS-Vocabulary/985/) | Week1–5 | 726 |

## 目录

```text
data/882/course.json            课程元信息、周清单、稳定ID和收藏键
data/882/weeks/Week9.json       可读的周词汇输入
data/882/weeks/Week9.md         自动生成的周词汇文档
data/985/                      985独立的数据与文档
web/882/                       882页面模板、样式、交互程序
web/985/                       985页面模板、样式、交互程序
scripts/build.py               固定合并程序、MD和网站生成
scripts/check.py               内容保留、来源、文件与链接检查
tests/                         合并、筛选、搜索、收藏、回忆等功能检查
rules/                         两门课程当前规则及882历史规则
migration/                     迁移记录和原内容字段哈希证据
.github/workflows/pages.yml    检查及Pages自动部署
_site/                         生成的发布文件；不提交Git
```

JSON按两类词汇维护。每周保存完整可读词条；跨周出现的条目可在多个周文件中保留完整记录。程序折叠完全相同的记录，合并相同词条的来源；不同义项、条件或用途保存为独立`meanings`（882）或`occurrences`（985）。`_order`只保持迁移前显示顺序；新条目可省略，不以它判断义项。

## 更新一个已有周次

1. 先读[维护规则](AGENTS.md)及对应课程规则：[882](rules/882.md)、[985](rules/985.md)。核对用户指定PDF和TXT，缺文件或周次未确认必须说明。
2. 编辑`data/课程号/weeks/WeekN.json`。保留原ID及`legacyIds`；不要按定义文字重新生成ID。只更新变化资料，不把另一个课程的数据混入。
3. 运行以下命令。Python和Node均使用标准库，无第三方依赖。

   ```sh
   python3 scripts/build.py
   python3 scripts/check.py
   python3 -m unittest discover -s tests
   node tests/run.cjs
   ```

4. 提交JSON、生成的MD及必要的课程元信息；不用编辑或上传整份HTML。
5. main提交后Actions再次合并和检查，通过后自动发布。只提交JSON时，Actions也会生成新版MD，并用GitHub Actions账户将有变化的MD保存回main；不会改动JSON。PR只检查，不发布、不回写。
6. 查看Actions实际结果和部署网址；失败时不能宣称完成。检查结果不是学习掌握记录。

## 加入一个新周次

- 新建`data/课程号/weeks/WeekN.json`，顶层至少有`schemaVersion: 1`、`course`、`week`、`entries`。其他课程不得混入882/985目录。
- 在该课程`course.json`的`weeks`中追加周次，并在`metadata.documents`（882）或`metadata.lectures`（985）登记课件名称、周次及已核对页数；不用登记本机路径。需要新增周次说明时保留旧说明与其原适用范围。
- 新词条使用固定ID，例如`csit882-w11-0001`或`csit985-w6-0001`，一经提交不变。已有同义词沿用旧ID。不同词形需明确合并时可设置`mergeKey`为目标类别和规范词语的键；在`stableIds`中声明规范ID。不要因为“英文相同”删除不同解释。
- 882条目采用当前`term/category/aliases/legacyIds/meanings/weeks/lectures`结构。`meanings`保留`zh/simpleEnglish/note/basis/references/definitions/excerpts/rawSources/lecture/week`，多个周次用`contexts`记录。原文定义与原文说明不得混标。
- 985条目采用当前`term/category/en/zh/basis/sources/originals/occurrences/weeks/lectures/topics/legacyIds`结构；原文及条件差异放入独立occurrence。依照现有条目补齐用于筛选的课件和主题信息。
- 资料疑点写入882周文件的`issues`（ID、标题、来源、说明、week），或985周文件的`notes`（pages、text）。新的原文必须附完整来源位置；没有正式定义时明确注明。
- 运行相同构建和检查。周JSON是维护输入，MD与`_site/`是输出，不以手改MD代替JSON。

## 稳定合并与保留检查

合并仅发生在单门课程内。规范化空格和大小写仅用于识别重复，原英文显示文字保留。程序优先使用课程声明的稳定ID，追加新旧ID兼容关系；882按完整解释与条件识别义项，985保留全部occurrences与原文。

迁移前字段哈希记录在`migration/*-baseline.json`。检查核对所有原词条ID、旧字段、定义、引用、来源、疑点、retiredEntries、legacyEntries及importMappings，并允许新增内容。`updated`日期不属于词汇保留证据。初次迁移生成的公开课程数据与原始公开数据逐字字段一致；882只移除了本机路径字段。

重要纠错不能通过任意重写baseline绕过。应保留旧文字与纠错来源，说明改动影响；需要改基线时单独审查其依据。[迁移说明](migration/README.md)记录原始提交与范围。

## 页面与收藏

两门课保留已有搜索、类别／周次／课件筛选、原文及说明折叠、英文提示回忆、字号和收藏功能；985另保留主题筛选、分页和旧收藏保留项。收藏表示需要复习，不代表掌握。

收藏键按课程分开，985仍使用原网站键；网站地址同源，因此旧985收藏可延续。882原页是本机离线页面，网站不能读取那个来源的浏览器记录，需先在旧页导出，再在882网站导入；导入合并，未知旧ID仍保留。

## 自动发布设置

首次启用时在仓库Settings → Pages将Source选为 **GitHub Actions**。工作流只发布`_site/`，不发布仓库全部目录。使用[GitHub官方Pages工作流](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)的configure、upload和deploy步骤。

原PDF、完整录音TXT、音视频、凭据、本机绝对路径、临时文件及浏览器配置禁止提交；构建检查也会扫描公开输出。网站资料核对只沿用课程原记录，不声称在此迁移中重新核对了原音频。
