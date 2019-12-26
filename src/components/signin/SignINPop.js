import React, { Component } from "react";
import { Row, Col, Form, Input, Icon, Button } from "antd";
import "./SignIn.css";

export class SignINPop extends Component {
  render() {
    return (
      <Row type="flex" justify="center">
        <Col span={24}>
          <h2>SIGN IN</h2>
          <p>Sign in with your email and password.</p>
          <Form className="login-form">
            <Row>
              <Form.Item label="EMAIL ADDRESS" className="item">
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="E-mail"
                />
              </Form.Item>
            </Row>
            <Row>
              <Form.Item label="PASSWORD" className="item">
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
            </Row>

            <Form.Item
              style={{
                marginBottom: "0"
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                SIGN IN
              </Button>
              <Row type="flex" justify="center">
                <Col span={4}>
                  <i>OR</i>
                </Col>
              </Row>

              <Button
                type="primary"
                htmlType="submit"
                href="/register"
                className="login-form-button"
              >
                REGISTER
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default SignINPop;
