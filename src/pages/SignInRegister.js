import React, { Component } from "react";
import { Row, Col } from "antd";
import SignIn from "../components/signin/SignIn";
import Register from "../components/register/Register";

export class SignInRegister extends Component {
  render() {
    return (
      <Row>
        <Col span={12}>
          <SignIn />
        </Col>
        <Col span={12}>
          <Register />
        </Col>
      </Row>
    );
  }
}

export default SignInRegister;
