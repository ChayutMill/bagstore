import React, { Component } from "react";
import { Row, Col, Input, Icon, Button, Popover } from "antd";
import "./Navbar.css";
import SignINPop from "../signin/SignINPop";
import Logo from "../../image/LOGO.png"
const { Search } = Input;
const content = (
  <div>
    <SignINPop />
  </div>
);

export class Navbar extends Component {
  render() {
    return (
      <Row
        type="flex"
        style={{width:"100vw", height: "100%", backgroundColor: "#fff", padding: "0 0px" }}
      >
        <Col
          span={4}
          style={{ paddingLeft: "3.3333333333333335vw", paddingRight: "3rem" }}
        >
          <Button type="link" href="/" className="font" style={{padding:"0 0"}}>
          <img style={{ width: "100%" }} src={Logo} alt="LOGO" />

                </Button>
        </Col>
        <Col span={12} style={{ display: "flex", alignItems: "center" }}>
          <Search
            placeholder="Product"
            onSearch={value => console.log(value)}
            style={{ width: "70%", height: "45px" }}
          />
        </Col>
        <Col span={8}>
          <Row style={{ height: "100%" }}>
            <Col span={6} style={{ height: "100%" }}>
              <Row
                type="flex"
                justify="center"
                align="middle"
                style={{ height: "100%" }}
              >
                <Button type="link" href="/" className="fontNavbar">
                  Home
                </Button>
              </Row>
            </Col>
            <Col span={6} style={{ height: "100%" }}>
              <Row
                type="flex"
                justify="center"
                align="middle"
                style={{ height: "100%" }}
              >
                <Button type="link" href="/Brand" className="fontNavbar">
                  Brand
                </Button>
              </Row>
            </Col>
            <Col span={6} style={{ height: "100%" }}>
              <Row
                type="flex"
                justify="center"
                align="middle"
                style={{ height: "100%" }}
              >
                <Button type="link" href="/cart" className="fontNavbar">
                  <Icon type="shopping-cart" />
                </Button>
              </Row>
            </Col>
            <Col span={6} style={{ height: "100%" }}>
              <Row
                type="flex"
                justify="center"
                align="middle"
                style={{ height: "100%" }}
              >
                <Popover
                  placement="bottomRight"
                  content={content}
                  trigger="click"
                >
                  <Button type="link" href="/register" className="fontNavbar">
                    <Icon type="user" />
                  </Button>
                </Popover>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Navbar;
