import React, { Component } from "react";
import { Button, Row } from "antd";

export class ChangeBG extends Component {
  state = {
    picList: [
      "https://waymagazine.org/wp-content/uploads/2018/08/vdo-img-bg.jpg",
      "https://pss-colorguide.com/wp-content/uploads/2015/12/SP-Color-bg.jpg",
      "https://www.mitihoon.com/wp-content/uploads/2018/06/BG.jpg"
    ],
    pic: "https://waymagazine.org/wp-content/uploads/2018/08/vdo-img-bg.jpg"
  };

  handleChangBG = e => {
    this.setState({
      pic: this.state.picList[e.target.value]
    });
  };

  render() {
    return (
      <Row
        type="flex"
        justify="center"
        align="bottom"
        style={{ height: "100vh", backgroundImage: `url(${this.state.pic})` }}
      >
        {this.state.picList.map((picc, idx) => (
          <Button onClick={this.handleChangBG} value={idx}>
            {++idx}
          </Button>
        ))}
        {/* <Button onClick={this.handleChangBG} value="0">
          1
        </Button>
        <Button onClick={this.handleChangBG} value="1">
          2
        </Button> */}
      </Row>
    );
  }
}

export default ChangeBG;
