import React, { Component } from "react";
import { Row, Col } from "antd";
import SignIn from "../components/signin/SignIn";
import Register from "../components/register/Register";
import { withRouter } from "react-router-dom";

export class SignInRegister extends Component {
  redirectTo = value => {
    this.props.history.push(value);
  };

  render() {
    return (
      <Row type="flex" justify="space-around">
        <Col span={6}>
          <SignIn redirectTo={this.redirectTo} />
        </Col>
        <Col span={8}>
          <Register />
        </Col>
      </Row>
    );
  }
}

export default withRouter(SignInRegister);
