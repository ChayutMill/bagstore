import React, { Component } from "react";
import { Form, Input, Select, Button, Row, Col } from "antd";
import TextArea from "antd/lib/input/TextArea";
import "./Register.css";
import Axios from "../../config/axios.setup";

const { Option } = Select;

export class Register extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  submitForm = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, value) => {
      if (!err) {
        Axios.post("http://localhost:8080/registerUser", {
          email: value.email,
          password: value.password,
          firstname: value.firstname,
          lastname: value.lastname,
          address: value.address,
          tel: value.tel
        })
          .then(result => {
            console.log(result);
          })
          .catch(err => {
            console.error(err);
          });
        this.props.form.resetFields();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "Mr."
    })(
      <Select style={{ width: 70 }}>
        <Option value="Mr.">Mr.</Option>
        <Option value="Ms">Ms.</Option>
        <Option value="Mrs">Mrs.</Option>
      </Select>
    );

    return (
      <Row type="flex" justify="start">
        <Col span={16}>
          <h3>REGISTER</h3>
          <p>Required</p>
          <Form onSubmit={this.submitForm}>
            <Row>
              <Form.Item label="E-MAIL" className="item">
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item className="item" label="PASSWORD" hasFeedback>
                {getFieldDecorator("password", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your password!"
                    },
                    {
                      validator: this.validateToNextPassword
                    }
                  ]
                })(<Input.Password />)}
              </Form.Item>
              <Form.Item className="item" label="CONFIRM PASSWORD" hasFeedback>
                {getFieldDecorator("confirm", {
                  rules: [
                    {
                      required: true,
                      message: "Please confirm your password!"
                    },
                    {
                      validator: this.compareToFirstPassword
                    }
                  ]
                })(<Input.Password onBlur={this.handleConfirmBlur} />)}
              </Form.Item>
              <Form.Item label="FIRSTNAME" className="item">
                {getFieldDecorator("firstname", {
                  rules: [
                    { required: true, message: "Please input your Firstname!" }
                  ]
                })(
                  <Input
                    addonBefore={prefixSelector}
                    style={{ width: "100%" }}
                  />
                )}
              </Form.Item>
              <Form.Item label="LASTNAME" className="item">
                {getFieldDecorator("lastname", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Lastname!",
                      whitespace: true
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="ADDRESS" className="item">
                {getFieldDecorator("address", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Address!",
                      whitespace: true
                    }
                  ]
                })(<TextArea />)}
              </Form.Item>
              <Form.Item label="PHONE NUMBER" className="item">
                {getFieldDecorator("tel", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your phone number!",
                      whitespace: true
                    }
                  ]
                })(<Input />)}
              </Form.Item>
            </Row>

            <Row>
              <Col>
                <Form.Item {...tailFormItemLayout}>
                  <Button
                    className="registerButton"
                    type="primary"
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(Register);

export default WrappedRegistrationForm;
