import React, { Component } from "react";
import { Row, Col } from "antd";
import Productnew from "../components/products/Productnew";
import PicHeader from "../image/header/updated_hermes_price.jpg";

export class Home extends Component {
  render() {
    return (
      <>
        <Row>
          <Col span={24}>
            <img
              style={{ height: "100%", width: "100%" }}
              src={PicHeader}
              alt=""
            />
          </Col>
        </Row>
        <Productnew />
      </>
    );
  }
}

export default Home;
