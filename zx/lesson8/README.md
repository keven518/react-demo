>  双向数据流

>  * react-with-addons.js 引入脚步文件
>  * 加上mixins: [ React.addons.LinkedStateMixin ],这行代码
>  * checkedLink 和 onChange共存 (If you want to use checked or onChange, you probably don't want to use checkedLink)
>  * messageLink={this.props.messageLink} likeLink={this.props.likeLink} 可以用{...this.props}代替，当组件被使用赋予属性时他的props就生成了。console.log(this.props)  ==  bjectlikeLink: ReactLink,messageLink: ReactLink,如果{[11,22,333]}  console.log(this.props)  ==  0:11,1:22,2:333