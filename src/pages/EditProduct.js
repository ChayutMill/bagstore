import React, { Component } from "react";
import  ProductAdd  from "../components/products/ProductAdd";
import { Row, Col } from "antd";
import AddBrand from "../components/bandlist/AddBrand";

export class EditProduct extends Component {
  render() {
    return (
      <Row type="flex" justify="space-around">
        <Col span={6}>
          <h3>EDIT BRAND</h3>
          <AddBrand />
        </Col>
        <Col span={8}>
          <h3>EDIT PRODUCT</h3>
          <ProductAdd />
        </Col>
      </Row>
    );
  }
}

export default EditProduct;
