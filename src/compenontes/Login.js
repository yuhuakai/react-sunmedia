import React, { Component } from "react";
import "./login.css";

import { Link } from "react-router-dom";
class Login extends Component {
  state = {
    val: "",
    val2: "",
    shi: false,
  };
  render() {
    const { val, val2, shi } = this.state;

    return (
      <div className="login">
        {shi ? (
          <div className="yin">
            <div className="yin-box">
              <div>账号或者密码错误</div>
              <button onClick={this.panduan2}>确定</button>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="xinxi">
          <h3>最新信息</h3>
          <h5>SunMedia广告监测系统全面上线</h5>
          <h5>广告监测领域的执着者, 诚信就是一切</h5>
          <h5>SunMedia与国家统计局合作打造诚信监测</h5>
        </div>
        <div className="fuwu">
          <h3>服务展示</h3>
          <h5>可口可乐公司使用本监测系统案例介绍 唐</h5>
          <h5>师傳使用本监测系统案例介绍</h5>
        </div>
        <div className="center">
          <h4>用户中心</h4>
          <div className="zhangbox">
            {" "}
            <label htmlFor="zhang">账号:</label>
            <input
              onChange={(event) => this.change(event)}
              value={val}
              id="zhang"
              type="text"
            />
          </div>
          <div className="mimabox">
            {" "}
            <label htmlFor="mima">密码:</label>
            <input
              onChange={(event) => this.change2(event)}
              value={val2}
              id="mima"
              type="password"
            />
          </div>
          <div className="loginbtnbox">
            <Link to={val === "1" && val2 === "1" ? "/header" : "/"}>
              <button onClick={this.panduan} className="loginbtn">
                登录
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  change = (event) => {
    this.setState({
      val: event.target.value,
    });
  };
  change2 = (event) => {
    this.setState({
      val2: event.target.value,
    });
  };
  panduan = () => {
    const { val, val2 } = this.state;
    if (!(val === "1" && val2 === "1")) {
      this.setState({
        shi: true,
      });
    }
  };
  panduan2 = () => {
    this.setState({
      shi: false,
    });
  };
}
export default Login;
