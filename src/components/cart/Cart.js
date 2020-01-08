import React, { Component } from "react";
import { Row, Col, Table, Statistic, Button } from "antd";
import "./Cart.css";
import { connect } from "react-redux";
import { deleteCart, decreaseTotal } from "../../redux/actions/actions";
import Axios from '../../config/axios.setup'

export class Cart extends Component {
  calculateTotalPrice = () => {
    let total = 0;
    this.props.cartList.map(product => {
      total += product.quantity * product.price;
    });
    return total;
  };

  // handleCheckout = () => {
  //   Axios.post()
  // };

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
        render: (text, cartList) => (
          <Button
            onClick={() => {
              this.props.decreaseTotal(cartList.quantity);
              this.props.deleteCart(cartList.id);
            }}
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
              <Statistic
                title="Total price"
                value={this.calculateTotalPrice()}
              />
            </Col>
          </Row>
          <Row type="flex" justify="end">
            <Col span={3}>
              <Button
                // onClick={() => this.handleCheckout()}
                className="cart-form-button"
                type="primary"
              >
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

const mapDispatchtoProps = {
  deleteCart: deleteCart,
  decreaseTotal: decreaseTotal
};

export default connect(mapStateToProps, mapDispatchtoProps)(Cart);
