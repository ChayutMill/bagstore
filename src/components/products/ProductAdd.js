import React, { Component } from "react";
import { Input, Form, Select, Row, Col, Upload, Button, Icon } from "antd";
import "./Products.css";

const { Option } = Select;
const { TextArea } = Input;

const props = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  listType: "picture"
};

export class ProductAdd extends Component {
  render() {
    return (
      <Row type="flex" justify="center">
        <Col span={24}>
          <h3>ADD PRODUCT</h3>
          <Form.Item label="BRAND" className="item">
            <Select defaultValue="Hermes" style={{ width: "100%" }}>
              <Option value="Hermes">Hermes</Option>
              <Option value="Michael">Michael</Option>
              <Option value="Chanel">Chanel</Option>
              <Option value="Burbery">Burbery</Option>
            </Select>
          </Form.Item>

          <Form.Item label="NAME" className="item">
            <Input />
          </Form.Item>
          <Form.Item label="PRICE" className="item">
            <Input prefix="฿" suffix="THB" />
          </Form.Item>

          <Form.Item label="DETAIL" className="item">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="ADD PRODUCT PICTURE" className="item">
            <Upload {...props}>
              <Button>
                <Icon type="upload" /> Upload Picture
              </Button>
            </Upload>
          </Form.Item>
          <br />
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="addProduct-Button"
            >
              SUBMIT
            </Button>
          </Form.Item>
        </Col>
      </Row>
    );
  }
}

export default ProductAdd;
