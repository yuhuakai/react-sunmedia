import React, { Component } from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Shezhi from "./Shezhi";
import Helpcenter from "./Helpcenter";
import Callme from "./Callme";
import Customer from "./Customer";
import Add from "./Add";
import Bianji from "./Bianji";
import Huodongguanli from "./Huodongguanli";
import Addhuodong from "./Addhuodong";
import Bianjihuodong from "./Bianjihuodong";
import Huodong from "./Huodong";
class Mian extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={Login} />
        <Route path="/react-sunmedia/react-sunmedia/header" component={Home} />
        <Route
          path="/react-sunmedia/react-sunmedia/shezhi"
          component={Shezhi}
        />
        <Route path="react-sunmedia/helpcenter" component={Helpcenter} />
        <Route path="react-sunmedia/callme" component={Callme} />
        <Route path="react-sunmedia/customer" component={Customer} />
        <Route path="react-sunmedia/add" component={Add} />
        <Route path="react-sunmedia/bianji" component={Bianji} />
        <Route path="react-sunmedia/activities/:id" component={Huodongguanli} />
        <Route path="react-sunmedia/addhuodong/:id" component={Addhuodong} />
        <Route
          path="react-sunmedia/bianjihuodong/:id"
          component={Bianjihuodong}
        />
        <Route path="react-sunmedia/huodong/:id" component={Huodong} />
      </Router>
    );
  }
}
export default Mian;
