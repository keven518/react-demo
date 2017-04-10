>  ref

>  * ref可以写在dom对象上，他们他就代表这个dom对象；也可以写在组件上，他就代表这个组件。
>  * this.refs获取页面所以ref对象
>  * this.refs[refName].getDOMNode获取refs[refName]的原生dom对象
>  * React.findDOMNode(this.refs[refName])获取refs[refName]的原生dom对象
> ref1:在dom对象上绑定ref，并如何获取通过ref获取dom对象
> ref2：如何在radio和checkbox上进行数据双向绑定，并且做成小组件。
> ref3：在ref上写上函数