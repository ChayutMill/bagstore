import React, { Component } from "react";
import { Row, Col } from "antd";
import SignIn from "../components/signin/SignIn";
import Register from "../components/register/Register";

export class SignInRegister extends Component {
  render() {
    return (
      <Row type="flex" justify="space-around">
        <Col span={6}>
          <SignIn />
        </Col>
        <Col span={8}>
          <Register />
        </Col>
      </Row>
    );
  }
}

export default SignInRegister;
