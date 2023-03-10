# single-spa

# 微前端架构实战

如何实现多个应用之间的资源共享？

之前比较多的处理方式是`npm`包形式抽离和引用，比如多个应用项目之间，可能有某业务逻辑模块或者其他可复用的，便抽离出来以`npm`包的形式进行管理和使用。但这样带来了一下几个问题：

- 发布效率底下。如果需要迭代`npm`包内的业务逻辑，需要先发布`npm`包之后，在每个使用了该`npm`包的应用都更新一次`npm`包版本，再各自构建发布一次，过程繁琐。如果涉及到的应用更多的话，花费的人力和精力就更多了。
- 多团队协作容易不规范。包含通用模块的`npm`包作为共享资产，每个人都拥有它，但在实践中，这通常意味着没有人拥有它。它很快就会充满杂乱的风格不一致的代码，没有明确的约定和技术愿景。

这些问题让我们意识到，扩展前端开发规模以便于多个团队可以同时开发一个大型且复杂的产品是一个重要但又棘手的问题。因此早在2016年，微前端的概念就诞生了。

### 第一章 什么是微前端

https://micro-frontends.org/官网定义了微前端的概念：

> Techniques, strategies and recipes for building a **modern web app** with **multiple teams** that can **ship features independently**.
>
> 用于构建具有多个可以独立发布功能的现代 Web 应用程序的技术、策略和方法。

从Micro Frontends官网可以了解到，微前端的概念是从微服务概念扩展而来的，摒弃大型单体方式，将前端整体分解为小而简单的块，这些块可以独立开发、测试和部署，同时仍然聚合为一个产品出现在客户面前。可以理解微前端是一种将多个可独立交付的小型前端应用聚合为一个整体的架构风格。

值得留意的几个点：

- 微前端不是一门具体的技术，而是整合了技术、策略和方法，可能会以脚手架、辅助插件和规范约束这种生态圈形式展现出来，是一种宏观上的架构。这种架构目前有多种方案，都有利弊之处，但只要适用当前业务场景的就是好方案。
- 微前端并没有技术栈的约束。每一套微前端方案的设计，都是基于实际需求出发。如果是多团队统一使用了`react`技术栈

。。。



#### 微前端框架`single-spa`

在`single-spa`框架中有三种类型的微前端应用：

1. `single-spa-application/parcel`：微前端架构中的微应用，可以使用`vue`，`react`，`angular`等框架
2. `single-spa root config`：创建微前端容器应用
3. `utility modules`：公共模块应用，非渲染组件，用于跨应用共享`JavaScript`逻辑的微应用

。。。