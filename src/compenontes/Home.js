import React, { Component } from "react";
class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="one">
          <h4>SunMedia监测系统已正式上线，感谢您的使用！</h4>
          <p>
            经过精心的研发，SunMedia采用最新的国际化监测理念研发成功的监测系统已正式上线，在此过程中您如果遇到任何问题或有任何意见或建议，请随时点击最上方的“联系我们”或点击这里来给我们留言。
          </p>
        </div>
        <div className="two">
          <h4>[通知]您有些帐户还没有添加任何监测点。</h4>
          <p>
            系统检测到您的如下客户还没有添加任何监测点：DELL Computers，Volvo
            Cars ，您可以点击链接直接进入活动管理以便添加。
          </p>
        </div>
        <div className="three">
          <div className="left">
            <h5>您的帐户信息:</h5>
            <div>jdchen2006@126.com</div>
            <div>进入用户设置</div>
            <div>您上次登陆是在2007-5-10 18:55:20</div>
            <div>最后一次登陆IP为 202.114.88.10</div>
            <div>点此了解如何保障帐户的安全</div>
            <div>您是管理员，您下面有三个标准用户:</div>
            <div>Sherry, Lisa, Andy</div>
          </div>
          <div className="right">
            <h5>您的客户：</h5>
            <div>DELL Computers (5个活动) 查看列表</div>
            <div>最后访问的活动：Q2 Promotion 查看报告</div>
            <div>Volvo Cars (2个活动) 查看列表</div>
            <div>最后访问的活动：S80上市会 查看报告</div>
            <div>Epson (1个活动) 最后访问的活动： 查看报告</div>
            <div>最后访问的活动：SPC Minisite 查看报告</div>
          </div>
        </div>
        <div className="four">
          <h4>帮助中心</h4>
          <p>
            如果您是第一次登陆或对某些地方不了解，请点击最上面的“帮助中心”或直接访问以下几个快捷链接：
            [术语解释] [使用教程] [录像演示]
          </p>
        </div>
      </div>
    );
  }
}
export default Home;
