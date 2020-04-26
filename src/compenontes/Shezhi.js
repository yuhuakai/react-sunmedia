import React, { Component } from "react";
import { Link } from "react-router-dom";
class Shezhi extends Component {
  render() {
    return (
      <div className="shezhi">
        <div className="shezhi-in">
          <h3>用户设置</h3>
          <div className="z1 clearfix">
            {" "}
            <label htmlFor="o1">用户名：</label>
            <input id="o1" type="text" />
          </div>
          <div className="z2 clearfix">
            {" "}
            <label htmlFor="o2">密码:</label>
            <input id="o2" type="text" />
          </div>
          <div className="z3 clearfix">
            <label htmlFor="o3">新密码：</label>
            <input id="o3" type="text" />
          </div>
          <div className="z4 clearfix">
            <label htmlFor="o4">确认新密码：</label>
            <input id="o4" type="text" />
          </div>
          <div className="z5 clearfix">
            {" "}
            <label htmlFor="o5">Email：</label>
            <input id="o5" type="text" />
          </div>
          <div className="z6 clearfix">
            {" "}
            <label htmlFor="o6">姓名：</label>
            <input id="o6" type="text" />
          </div>
          <div className="z7 clearfix">
            {" "}
            <label htmlFor="o7">电话：</label>
            <input id="o7" type="text" />
          </div>
          <div className="z8">
            <Link to="/header">
              {" "}
              <button>提交</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Shezhi;
