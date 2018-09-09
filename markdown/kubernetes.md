# Kubernetes基本概念及部署方式
---

### 参考
>[kubernetes官方文档](https://kubernetes.io/docs/concepts/)


### 一、 Kubernetes是什么？

Kubernetes是容器集群管理系统，是一个开源的平台，可以实现容器集群的自动化部署、自动扩缩容、维护等功能。它是基于Google15年的在生产环境运行容器的经验，结合了社区的最佳实践。  
Kubernetes 特点：
- 可移植: 支持公有云，私有云，混合云，多重云（multi-cloud）
- 可扩展: 模块化, 插件化, 可挂载, 可组合
- 自动化: 自动部署，自动重启，自动复制，自动伸缩/扩展
  
  
### 二、为什么需要Kubernetes
只使用Docker存在以下问题：
- 不容易伸缩
    - 加机器，装Docker
    - 需要修改配置文件，部署
- 资源分配不灵活：特定机器跑特定的服务，要么不够用，要么浪费，由于每个服务的波峰波谷都不一样，所以会导致资源的浪费。
- 难以实现零宕机时间更新，必须保证新容器是健康的才能继续更新下一台
- 实现跨机器网络的通信比较复杂和困难

### 三、使用Kubernetes的优点
- 易于伸缩，一条命令就可以，甚至可以按CPU等指标自动伸缩
- 灵活的资源分配，把整个集群当作一个资源池，不需要考虑哪个服务跑在哪台机器上，资源利用率更高
- 内置的完整的零宕机时间更新机制
- 内置的DNS服务器和容器网络支持，服务发现和注册非常方便

### 四、组件介绍

- Master组件：
    - etcd：用来作为Kubernetes数据库的一致和高可用的KV存储，kubernetes所有信息全部存在这个里面
    - kube-apiserver：暴露kubernetesAPI
    - kube-scheduler：监听新创建但还没有分配node的pod，选择一个node运行。
    - kube-controller-manager：内含多个控制器，每个负责一类资源

- Slaver组件
    - kubelet：运行在每个node上的agent，真正负责运行pod
    - kube-proxy：通过在host上维护网络规则和执行连接转发来实现Service抽象
    - container runtime：主要是Docker

### 五、什么是kubernetes的Objects

> A Kubernetes object is a “record of intent”–once you create the object, the Kubernetes system will constantly work to ensure that object exists. By creating an object, you’re effectively telling the Kubernetes system what you want your cluster’s workload to look like; this is your cluster’s desired state. 

引用官方文档的定义，可以理解为Objects就是用来描述你想要做的记录。通过定义object，kubernetes将会通过objects自动帮你完成你所描述的任务。
其中Object主要的核心对象包括以下几个
- Namespace
    - 用来防止命名冲突
    - 对资源分组，方便管理
    - 可按照Namespace设置资源配额、网络隔离等
  
- Pod
    - 是Kubernetes可创建和部署的最小、最简单的但愿
    - 封装一个或多个容器、存储资源、唯一的IP和其他一些运行参数

- Deployment
    - 描述一个期望的状态，Deployment的controller会负责以一定频率做必要的变更来达到这个歌状态
    - 是一个管理Pod的高层次的逻辑抽象
  
当然包括其他的一些对象如Service、Volume等在后续会进行一个说明

### 六、部署模型

传统的升级更新，是先将服务全部下线，业务停止后再更新版本和配置，然后重新启动并提供服务。这样的模式已经完全不能满足“时代的需要”了。在并发化、高可用系统普及的今天，服务的升级更新至少要做到“业务不中断”。所以有如下几个部署模式
- 滚动更新（Rolling Update）    
  动更新就是针对多实例服务的一种不中断服务的更新升级方式。一般情况，对于多实例服务，滚动更新采用对各个实例逐个进行单独更新而非同一时刻对所有实例进行全部更新的方式。
    - 优点： 简单，节省资源，较安全
    - 缺点： 新旧版本同时存在，服务间版本可能不匹配

- 蓝绿部署（Blue-Green）   
  蓝绿部署是不停老版本，部署新版本然后进行测试，确认OK，将流量切到新版本，然后老版本同时也升级到新版本。
    - 优点： 可以避免版本冲突，更安全
    - 需要更多资源

- 灰度发布/金丝雀部署（Canary Release）     
灰度发布是指在黑与白之间，能够平滑过渡的一种发布方式。AB test就是一种灰度发布方式，让一部分用户继续用A，一部分用户开始用B，如果用户对B没有什么反对意见，那么逐步扩大范围，把所有用户都迁移到B上面来。灰度发布可以保证整体系统的稳定，在初始灰度的时候就可以发现、调整问题，以保证其影响度，而我们平常所说的金丝雀部署也就是灰度发布的一种方式。

关于以上几个模型的详细介绍可参考：[微服务部署模型](https://www.jianshu.com/p/022685baba7d)