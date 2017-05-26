var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import BodyIndex from './components/bodyindex';
import ComponentFooter from './components/footer';

class Index extends React.Component{


  componentWillMount(){
    //组件刚要加载
    console.log('Index - componentWillMount');
  }

  componentDidMount(){
    //组件加载完了
    console.log('Index - componentDidMount');
  }

  render(){
    var componentHeader = <ComponentHeader />;
    return (
      <div>
        <ComponentHeader />
        <BodyIndex />
        <ComponentFooter />
      </div>
    )
  }
}

ReactDOM.render(<Index />, 
  document.getElementById('example')
);
