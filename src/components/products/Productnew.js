import React, { Component } from "react";
import { Row, Col } from "antd";
import BrandLogo from "../../image/brand/Hermès-Logo.png";
import ProductItem1 from "../../image/products/hermes-item1.png";
import ProductItem2 from "../../image/products/hermes-item2.png";
import ProductItem3 from "../../image/products/hermes-item3.png";
import "./Products.css";

export class Productnew extends Component {
  render() {
    return (
      <Row>
        <Row type="flex" justify="center">
          <Col span={6} className="logoBrand">
            <img src={BrandLogo} alt="" />
          </Col>
        </Row>
        <Row>
          <Col span={8} className="productBox">
            <Row>
              <img style={{ width: "100%" }} src={ProductItem1} alt="" />
            </Row>
            <Row>
              <Col span={16}>name</Col>
              <Col span={8}>price</Col>
            </Row>
          </Col>
          <Col span={8} className="productBox">
            <Row>
              <img style={{ width: "100%" }} src={ProductItem2} alt="" />
            </Row>
            <Row>
              <Col span={16}>name</Col>
              <Col span={8}>price</Col>
            </Row>
          </Col>
          <Col span={8} className="productBox">
            <Row>
              <img style={{ width: "100%" }} src={ProductItem3} alt="" />
            </Row>
            <Row>
              <Col span={16}>name</Col>
              <Col span={8}>price</Col>
            </Row>
          </Col>
        </Row>
      </Row>
    );
  }
}

export default Productnew;
