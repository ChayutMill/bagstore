import React, { Component } from "react";
import { Row, Col, Table, Statistic, Button } from "antd";
import "./Cart.css";
import Axios from "../../config/axios.setup";
import { connect } from "react-redux";

export class Cart extends Component {
  render() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name"
      },
      {
        title: "Price",
        dataIndex: "price"
      },
      {
        title: "Amount",
        dataIndex: "quantity"
      },
      {
        title: "Action",
        dataIndex: "",
        render: (text, cartItem) => (
          <Button
            onClick={() =>
              this.props.handleClickDeleteProductInCart(cartItem.uid)
            }
          >
            Delete
          </Button>
        )
      }
    ];

    return (
      <Row>
        <Col style={{ margin: "3.33333vw" }}>
          <h3>CART</h3>
          <p>You have {this.props.total} items in your cart.</p>
          <Row>
            <Table
              columns={columns}
              dataSource={this.props.cartList}
              bordered
            />
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

const mapStateToProps = state => {
  return {
    cartList: state.cartList,
    total: state.total
  };
};

export default connect(mapStateToProps, null)(Cart);
