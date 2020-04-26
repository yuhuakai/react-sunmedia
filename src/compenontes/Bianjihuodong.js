import React, { Component } from "react";
import { Link } from "react-router-dom";
import store from "./store";
import { connect } from "react-redux";
class Bianjihuodong extends Component {
  state = {
    c1: "FY2007",
    c2: "2017年活动集合",
    shi: false,
  };
  render() {
    const { c1, c2, shi } = this.state;
    const { id } = this.props.match.params;
    return (
      <div className="bianjihuodong">
        {" "}
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
        <h3 className="title">添加新活动集</h3>
        <div className="content">
          <div>
            <label htmlFor="c1">活动名称:</label>
            <input
              onChange={(event) => this.ca(event)}
              value={c1}
              id="c1"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="c2">活动描述:</label>
            <input
              onChange={(event) => this.cb(event)}
              value={c2}
              id="c2"
              type="text"
            />
          </div>
          <div>
            <button onClick={this.add}>提交</button>

            <Link to={`/huodongguanli/${id}`}>
              <button>取消</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  add = () => {
    const { c1, c2 } = this.state;
    const id4 = this.props.match.params.id;
    if (c1.trim() && c2.trim()) {
      this.props.history.push(`/huodongguanli/${id4}`);
    } else {
      this.setState({
        shi: true,
      });
    }
  };
  ca = (event) => {
    this.setState({
      c1: event.target.value,
    });
  };
  cb = (event) => {
    this.setState({
      c2: event.target.value,
    });
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
export default connect(mapStoreToProps)(Bianjihuodong);
