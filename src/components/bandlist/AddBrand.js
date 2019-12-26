import React, { Component } from "react";
import { Row, Col, Form, Input, Button, Upload, Icon } from "antd";
import "./Brands.css";

const props = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  listType: "picture"
};

export class AddBrand extends Component {
  render() {
    return (
      <Row type="flex" justify="center">
        <Col span={18}>
          <h3>ADD BRAND</h3>

          <Form.Item label="NAME" className="item">
            <Input />
          </Form.Item>
          <Form.Item label="ADD LOGO" className="item">
            <Upload {...props}>
              <Button>
                <Icon type="upload" /> Upload Picture
              </Button>
            </Upload>
          </Form.Item>
          <br />
          <Form.Item>
            <Row type="flex" justify="center">
              <Button type="primary" htmlType="submit" className="brand-button">
                SUBMIT
              </Button>
            </Row>
          </Form.Item>
        </Col>
      </Row>
    );
  }
}

export default AddBrand;
