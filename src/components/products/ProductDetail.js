import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Col, Row, Button } from "antd";
import "./Products.css";
import Axios from "../../config/axios.setup";
import { connect } from "react-redux";
import { addCart } from "../../redux/actions/actions";
import { addTotal } from "../../redux/actions/actions";

export class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      pictureList: [],
      picture: ""
    };
  }

  componentWillMount() {
    let targetProductID = this.props.history.location.search.slice(4);
    Axios.get(`/get-product-detail?productId=${targetProductID}`).then(
      result => {
        this.setState({
          product: result.data,
          pictureList: [
            result.data.image1,
            result.data.image2,
            result.data.image3
          ],
          picture: [result.data.image1]
        });
      }
    );
  }

  handleChangePic = picView => {
    this.setState({
      picture: picView
    });
  };

  handleAddToCart = product => {
    this.props.addCart(product, 1);
    this.props.addTotal(1);
  };

  render() {
    return (
      <Row style={{ height: "100vh" }}>
        <Col span={2} className="productDetailBox">
          <Row type="flex" justify="center">
            {this.state.pictureList.map(picbox => (
              <Col key={picbox} span={24}>
                <img
                  style={{ width: "100%", cursor: "pointer" }}
                  alt=""
                  src={picbox}
                  onClick={() => this.handleChangePic(picbox)}
                />
              </Col>
            ))}
          </Row>
        </Col>

        <Col span={12} className="productDetailBox">
          <Row>
            <img
              src={this.state.picture}
              style={{ width: "100%", maxWidth: "600px", padding: "3.3333vw" }}
              alt=""
            />
          </Row>
        </Col>
        <Col span={10} className="box-detail">
          <Row>
            <h3>{this.state.product.name}</h3>
            <p>฿{this.state.product.price}</p>
          </Row>
          <Row type="flex" justify="center">
            <Button
              onClick={() => this.handleAddToCart(this.state.product)}
              className="product-button"
              type="primary"
            >
              Add to Cart
            </Button>
          </Row>
          <Row>
            <p
              style={{
                marginTop: 16
              }}
            >
              &nbsp; &nbsp; &nbsp; &nbsp; {this.state.product.description}
            </p>
          </Row>
        </Col>
      </Row>
    );
  }
}

const mapDispatchToProps = {
  addCart: addCart,
  addTotal: addTotal
};

export default connect(null, mapDispatchToProps)(withRouter(ProductDetail));
