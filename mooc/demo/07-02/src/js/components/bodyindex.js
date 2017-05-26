import React from 'react';
export default class BodyIndex extends React.Component{

  componentWillMount(){
    //组件刚要加载
    console.log('BodyIndex - componentWillMount');
  }

  componentDidMount(){
    //组件加载完了
    console.log('BodyIndex - componentDidMount');
  }

  render(){

    var userName = '柯文';
    var boolInput = false;

    var html = "<p>柯文 蔡曼曼</p>"

    // comments

    return (
      <div>
        <h1>这里body</h1>
        <p>{userName == '' ? '用户还没有登录' : '你好！'+userName}</p>
        <p><input type='button' value={userName} disabled={boolInput} /></p>
        {/*注释*/}
        <p>{html}</p>
        <p dangerouslySetInnerHTML={{__html : html}}></p>
      </div>
    )
  }
}