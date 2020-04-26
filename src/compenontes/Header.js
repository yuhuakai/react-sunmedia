import React, { Component } from "react";
import "./header.css";
import logo from "../img/u2_normal.gif";
import { Link, withRouter } from "react-router-dom";

class Header extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { pathname } = this.props.location;
    return (
      <div className="header">
        <div className="toubu">
          <div>
            <Link to="/header">
              <img src={logo} alt="" />
            </Link>
            <span>广告管理监测系统 - 用户中心</span>
          </div>

          <div className="nav clearfix">
            <div>yhkdeyx@163.com </div>
            <Link to="/shezhi">用户设置</Link>
            <Link to="/helpcenter">帮助中心</Link>
            <Link to="/callme">联系我们</Link>
            {this.props.location.pathname === "/" ? (
              ""
            ) : (
              <Link to="/">
                <button onClick={this.tui}>退出登录</button>
              </Link>
            )}
          </div>
        </div>
        {pathname === "/header" ||
        pathname.indexOf("/huodongguanli") !== -1 ||
        pathname === "/shezhi" ||
        pathname === "/bianji" ||
        pathname === "/add" ||
        pathname === "/addhuodong" ||
        pathname === "/customer" ? (
          <div className="downnav">
            <Link
              className={pathname === "/customer" ? "active" : ""}
              to="/customer"
            >
              客户管理
            </Link>
            <span
              className={pathname === "/huodongguanli" ? "active" : ""}
              to="/huodongguanli"
            >
              活动管理
            </span>
            <span>查看报告</span>
          </div>
        ) : (
          ""
        )}
        <div className="shouye">
          <Link to="/header">
            <span>首页</span>
          </Link>{" "}
          {pathname === "/helpcenter" ? (
            <span>帮助中心</span>
          ) : pathname === "/customer" ? (
            <span>客户管理</span>
          ) : pathname === "/add" ? (
            <span>添加新用户</span>
          ) : pathname === "/bianji" ? (
            <span>编辑客户</span>
          ) : pathname.indexOf("/huodongguanli") !== -1 ? (
            <span>客户</span>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
  tui = () => {
    localStorage.clear();
  };
  one = () => {
    console.log(21343254);
  };
}
export default withRouter(Header);
