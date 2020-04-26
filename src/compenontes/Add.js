import React, { Component } from "react";
import "./add.css";
import { Link } from "react-router-dom";
import store from "./store";
import { connect } from "react-redux";
class Add extends Component {
  state = {
    inputVal: "",
    val: "",
    vall: "",
    valw: "管理者",
    shi: false,
  };
  render() {
    const { inputVal, val, vall, valw, shi } = this.state;
    return (
      <div className="addye">
        {shi ? (
          <div className="yin">
            <div className="yin-box">
              <div>输入框不能为空</div>
              <button onClick={this.panduan2}>确定</button>
            </div>
          </div>
        ) : (
          ""
        )}
        <h2 className="title">添加新客户</h2>
        <div className="content">
          <div className="bianhao">
            <label htmlFor="m1">客户编号:</label>
            <input
              onChange={(event) => this.change("inputVal", event)}
              id="m1"
              value={inputVal}
              type="text"
            />
          </div>
          <div className="mingcheng">
            <label htmlFor="m2">客户名称:</label>
            <input
              onChange={(event) => this.change("val", event)}
              id="m2"
              value={val}
              type="text"
            />
          </div>
          <div className="miaoshu">
            <label htmlFor="m3">描述:</label>
            <input
              id="m3"
              onChange={(event) => this.change("vall", event)}
              value={vall}
              type="text"
            />
          </div>
          <div className="feipei">
            <label htmlFor="m5">用户分配：</label>
            <select
              id="m5"
              value={valw}
              onChange={this.handleChange.bind(this.event)}
            >
              <option value="管理者">管理员</option>
              <option value="Sherry">Sherry</option>
              <option value="Solar">Solar</option>
              <option value="Andy">Andy</option>
            </select>
          </div>
          <div className="btnbox">
            <button onClick={() => this.tijiao(inputVal, val, vall, valw)}>
              提交
            </button>
            <Link to="/customer">
              <button>取消</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  change = (inputVal, event) => {
    this.setState({
      [inputVal]: event.target.value,
    });
  };
  handleChange = (event) => {
    this.setState({
      valw: event.target.value,
    });
  };
  tijiao = (inputVal, val, vall, valw) => {
    if (inputVal.trim() && val.trim() && vall.trim() && valw.trim()) {
      store.dispatch({ type: "ADD", inputVal, val, vall, valw });
      this.props.history.push("/customer");
    } else {
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
const mapStoreToProps = (state) => {
  return {
    arr: state.arr,
  };
};
export default connect(mapStoreToProps)(Add);
