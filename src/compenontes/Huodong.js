import React, { Component } from "react";
import Small from "./Small";
import store from "./store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Huodong extends Component {
  render() {
    const { arr } = this.props;
    const { id } = this.props.match.params;
    const arr1 = arr.filter((ele) => ele.id !== id)[0].huodong[0]
      .huodongcontent;
    return (
      <div className="huodongye">
        <div className="toubu">
          <Link to="/customer">活动集</Link>
          <span className="huo">活动</span>
        </div>
        <div className="op">
          以下为此活动集所包含的活动,点击相应的按钮以添加、编辑、删除等。
        </div>
        {arr1.length ? (
          arr1.map((ele) => (
            <Small
              endtime={ele.endtime}
              biegntime={ele.biegntime}
              num={ele.num}
              fangke={ele.fangke}
              zhuangtai={ele.zhuangtai}
              jiancedian={ele.jiancedian}
              miaoshu={ele.miaoshu}
              name={ele.name}
              leixing={ele.leixing}
              key={ele.id}
            />
          ))
        ) : (
          <span>请添加活动</span>
        )}
      </div>
    );
  }
}
const mapStoreToProps = (state) => {
  return {
    arr: state.arr,
  };
};
export default connect(mapStoreToProps)(Huodong);
