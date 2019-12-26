import React, { Component } from "react";
import { Row, Col, Table, Statistic, Button } from "antd";
import "./Cart.css";

export class Cart extends Component {
  render() {
    return (
      <Row>
        <Col style={{ margin: "3.33333vw" }}>
          <h3>CART</h3>
          <p>You have 3 items in your cart.</p>
          <Row>
            <Table />
          </Row>
          <Row type="flex" justify="end">
            <Col
              span={3}
              style={{
                marginTop: 16
              }}
            >
              <Statistic title="Total price" value="$35,000.00" />
            </Col>
          </Row>
          <Row type="flex" justify="end">
            <Col span={3}>
              <Button className="cart-form-button" type="primary">
                Check out
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Cart;
