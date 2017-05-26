# 组件生命周期详解

>  * 什么是生命周期
>  * 初始化阶段介绍
>  1、getDefaultProps             获取实例的默认属性
>  2、getInitialState             获取实例的初始化状态
>  3、componentWillMount          组件即将被装载，也就是说组件即将被渲染到页面上
>  4、render                      渲染，生成虚拟的dom节点jsx，由react把虚拟的dom节点渲染成真正的dom节点
>  5、componentDidMount           组件被装载之后调用的
>  * 运行中阶段介绍
>  componetWillReceiveProps       组件将要接受到属性的时候被调用
>  shouldComponentUpdate          当组件接收到新属性或状态时就会触发这个函数，字面意思是组件是否要被更新
>  componentWillUpdate            将要更新
>  render                         渲染
>  componentDidUpdate             已经更新
>  * 销毁阶段介绍
>  componentWillUnmount           在销毁操作真正执行之前调研，给开发者最后的机会来进行清理操作。