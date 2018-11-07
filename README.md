# 使用React搭建个人博客
---

最近学习了React，所以想通过搭建博客进行React实战。  
首先先列一下主要用到的库，具体的可以查看package.json：
- react
- react-dom
- react-markdown  （用作解析mardown格式的内容）
- react-router-dom  （路由管理）
- redux
- react-redux
- redux-logger
- redux-thunk
- antd （蚂蚁金服的UI库，非常好用)

在创建项目的时候建议使用脚手架create-react-app，方便又快速。当然我是使用的webpack，只是我对webpack稍微有点了解就练习使用。

在UI设计方面主要就是使用Ant Design，文档全，而且样式非常的简洁，毕竟是蚂蚁金服都在用的UI。在过渡动画上同样选择了蚂蚁旗下的Ant Motion，第一次使用简直觉得太有逼格了，而且文档非常清晰，上手快。

启动项目前进行下载相关依赖

`npm i`

在启动server

`npm start`

预览效果:

http://blog.wshare.site
