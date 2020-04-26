import React, { Component } from "react";
import { Link } from "react-router-dom";
class Callme extends Component {
  render() {
    return (
      <div className="callme">
        <div className="title">
          请在下面留下您的任何意见、建议、想法或投诉，我们会本着服务至上的原则尽快处理：
        </div>
        <div className="callcontent">
          <div className="clearfix">
            {" "}
            <label htmlFor="b1"> 您的姓名：</label>{" "}
            <input id="b1" type="text" />
          </div>
          <div className="clearfix">
            {" "}
            <label htmlFor="b2">您的Email：</label>
            <input id="b2" type="text" />
          </div>
          <div className="clearfix">
            {" "}
            <label htmlFor="b3">您的电话：</label> <input id="b3" type="text" />
          </div>
          <div className="clearfix">
            {" "}
            <label htmlFor="b4">您的留言：</label>{" "}
            <textarea name="" id="b4" cols="30" rows="10"></textarea>
          </div>
        </div>
        <div className="btnbox">
          <Link to="/header">
            {" "}
            <button>提交</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Callme;
