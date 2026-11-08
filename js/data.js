export const resumeData = {
    header: {
        name: "XX",
        title: "个人简历",
        intentions: "架构设计 | 后端开发 | 全栈开发 | 运维 | 技术管理",
        basicInfo: [
            { label: "出生年月", value: "2002年9月" },
            { label: "邮箱", value: "XX@foxmail.com" },
            { label: "手机号码", value: "177XXXX835" }
        ]
    },
    education: {
        school: "重庆对外经贸学院（本科）",
        major: "电子科学与技术",
        gpa: "4.08",
        rank: "1/44(班级) 10/328(专业)"
    },
    skills: [
        { category: "基础知识类", desc: "熟练掌握Java、JUC、内存模型、线程模型、IO模型、反射与代理、数据结构与算法、设计模式、线程池技术、编译原理、计算机网络及操作系统原理。熟悉操作系统内存分配和IO复用，了解Java AQS、ThreadPool、JVM内部机制，并熟悉MySQL的原理及优化技术，如反范式设计、执行计划、索引、BufferPool配置等。" },
        { category: "框架与中间件类", desc: "熟练使用Nginx、Docker和K8S，理解其核心原理；能够熟练使用并集成RabbitMQ、Minio、MySQL等常见中间件，掌握其工作机制与原理。" },
        { category: "开发与架构类", desc: "熟悉分布式开发、容器化开发，熟悉微信小程序、公众号、微信支付的开发，具备Kubernetes+DevOps实践经验,软硬件开发体系，以及Linux环境下的开发和部署能力。拥有从项目设计到开发、测试、部署的全流程项目经验。" }
    ],
    experience: [
        {
            date: "2025年7月~至今",
            company: "中铝数为（成都）科技有限责任公司（央企 全职）",
            role: "全栈开发",
            projects: [
                {
                    name: "IOT物联网监测",
                    responsibilities: "主要开发 | 硬件设备报文解析 | IO、网络处理 | GIS三维服务实现",
                    tech: "SpringBoot、Redis、MyBatis、SqlServer、Go、CesiumJs、MQTT、Netty等",
                    details: [
                        "拆分子服务分为采集子程序、采集管理程序、展示数据大屏程序，基于WebSocket的Stomp进行设备是否在线和最近采集情况服务之间的数据同步。",
                        "抽象为硬件、协议、采集箱、采集方式等，基于组合的设计模式进一步的解耦合。",
                        "基于quartz实现采集任务的自动执行,抽象采集任务为每种不同类型的任务进行单独开发。",
                        "基于Adapter设计模式处理多种传感器，入库时只需要考虑统一水位即可。",
                        "基于ApplicationEvent事件机制进行消息的消费和分发处理。",
                        "基于GO编写边缘网关采集设备系统，对IO流进行转发合并处理、端口桥接等。"
                    ]
                }
            ]
        },
        {
            date: "2024年9月~2025年7月",
            company: "重庆巴云科技有限公司（国企 全职实习）",
            role: "后端开发",
            projects: [
                {
                    name: "线上签约平台",
                    responsibilities: "数据清理和校验 | 动态表单和参数实现 | 跑批引擎编写 | 交易引擎优化",
                    tech: "SpringBoot、Redis、MySQL、MyBatisPlus、Dubbo、ZK、UniApp等",
                    details: [
                        "基于抽象工厂、代理等设计模式进行交易引擎的编写，实现业务种类组合。",
                        "基于表单动态渲染和数据库动态配置的方式，实现参数高度自定义化。",
                        "异步流式分发任务，多线程压缩校验计算，规范目录实现介质支持OSS。"
                    ]
                },
                {
                    name: "账务系统",
                    responsibilities: "出金入金 | 冻结解冻 | 跑批任务编写 | 权限认证",
                    tech: "Docker Compose、RSA/SM2加密算法",
                    details: [
                        "编写交易引擎实现流水处理和复式记账，对关键行摘要计算防篡改，使用Dubbo RPC解耦。",
                        "构建自动化脚本进行容器编排，基于网络隔离并引入健康检查。",
                        "设计动态权限设置，使用多种国密与国际算法进行数据加密和签名。"
                    ]
                }
            ]
        },
        {
            date: "2023年4月~2024年3月",
            company: "重庆讯研数字技术有限公司（民企 全职）",
            role: "全栈开发",
            projects: [
                {
                    name: "综合系统与运维",
                    responsibilities: "虫草系统开发 | 数据清洗 | DevOps搭建 | 团队管理",
                    tech: "SpringBoot3+Gradle, Liblinphone SDK, Aliyun",
                    details: [
                        "虫草信息化：代码重构编写、uni-app重构、统计模块优化。",
                        "数据清洗系统：Excel流式导入、数据库设计、支持Json扩展。",
                        "运维：DevOps平台搭建、网络架构规划、VPN服务搭建。",
                        "团队管理：撰写任务计划书、技术选型测试、使用甘特图管理进度。"
                    ]
                }
            ]
        }
    ],
    certificates: [
        { title: "职业技能证书", items: ["软考（中级）-软件设计师", "大数据应用开发高级证书"] },
        { title: "荣誉证书", items: ["校级一等奖学金", "国家励志奖学金", "校三好学生", "优良毕业生", "技能专家"] },
        { title: "竞赛获奖", items: ["巴渝工匠杯“商务软件解决方案”市一等奖", "中国软件杯 B1微服务架构 全国三等奖", "中国软件杯 B8芯片质检 全国一等奖"] },
        { title: "个人履历", items: ["社团技术负责人", "竞赛培训讲师", "实训代课助教"] }
    ],
    evaluation: [
        "本人专业技能良好，有良好的团队协同开发意识，有明确的职业规划。通过技能竞赛及社团负责人的经历，具备较强的心理素质。具有良好的编程习惯和数据库设计能力，有复杂高难度技术问题研究能力。",
        "具有系统研发全生命周期端到端交付能力。有充足的项目经历，具有项目从0-1的能力。具备软硬件，大型并发项目，融合分布式架构搭建能力。"
    ]
};