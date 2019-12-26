import React, { Component } from "react";
import { Form, Row, Col, Input, Icon, Button } from "antd";
import './SignIn.css'

export class SignIn extends Component {
  render() {
    return (
      <Row type="flex" justify="center">
        <Col span={12}>
          <h3>SIGN IN</h3>
          <p>
            Sign in with your email and password.
          </p>
          <Form className="login-form">
            <Row>
              <Form.Item label="EMAIL ADDRESS" className="item" >
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="E-mail"
                />
              </Form.Item>
            </Row>
            <Row>
              <Form.Item label="PASSWORD" className="item" >
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
            </Row>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                SIGN IN
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default SignIn;
