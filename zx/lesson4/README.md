>  组件的状态

messageBox.setState({titleMessage: '柯文万岁'})  可以修改组件状态。
messageBox.state({isVisible: false})  不能直接立马修改状态 必须要加messageBox.forceUpdate()