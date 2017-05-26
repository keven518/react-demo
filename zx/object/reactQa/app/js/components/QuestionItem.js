var React = require('react');

module.exports = React.createClass({
  render:function(){
    return (
      <div className="media">
        <div className="media-left">
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-chevron-up"></span>
            <span className="vote-count">22</span>
          </button>
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-chevron-down"></span>
          </button>
        </div>
        <div className="media-body">
          <h4 className="media-heading">产品经理与程序员矛盾的本质是什么？</h4>
          <p>理性探讨，请勿撕逼。产品经理的主要工作职责是产品设计。接受来自其他部门的需求，经过设计后交付研发。但这里有好些职责不清楚的地方。</p>
        </div>
      </div>
    )
  }
})