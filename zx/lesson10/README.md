>  mixin

>  * 1、装载阶段 Mounting
componentWillMount
componentDidMount
2、更新阶段 Updating
3、卸载 Unmounting
componentWillUnmount

>  * componentDidMount -> componentDidMount -> componentDidMount -> render -> componentDidMount
>  * componentWillUnmount：componentWillMount中如果有setInterval，在componentWillUnmount是要清除setInterval即clearInterval(this.timer);还可以取消事件监听函数。
>  * componentWillMount数据每变化一次render重新渲染一次
>  * 更新数据时 doUpdate -> shouldComponentUpdate -> componentWillUpdate -> componentDidUpdate