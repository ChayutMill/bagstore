import React, { Component } from "react";
import { Col, Row, Button } from "antd";
import './Products.css'
import Review1 from "../../image/products/product/hermes-product1.png";
import Review2 from "../../image/products/product/hermes-product2.png";
import Review3 from "../../image/products/product/hermes-product3.png";

export class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureList: [Review1, Review2, Review3],
      picture: Review1
    };
  }

  handleChangePic = x => {
    this.setState({
      picture: x
    });
  };

  render() {
    return (
      <Row style={{ height: "100vh" }}>
        <Col span={2} className="productDetailBox">
          <Row type="flex" justify="center">
            {this.state.pictureList.map(picbox => (
              <Col span={24}>
                <img
                  style={{ width: "100%" }}
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
            <h3>Kelly Classic wallet</h3>
            <p>$14,900</p>
          </Row>
          <Row type="flex" justify="center">
            <Button className="product-button" type="primary">
              Add to Cart
            </Button>
          </Row>
          <Row>
            <p
              style={{
                marginTop: 16
              }}
            >
              &nbsp; &nbsp; &nbsp; &nbsp; Hermes wallet in polished
              Mississippiensis alligator, gold plated Kelly closure 12 credit
              card slots, 2 pockets for bills, central zip purse for change with
              Kelly lock pull-tab Can also be worn as an evening clutch!
              Measures 7.8" long x 4.5" high
            </p>
          </Row>
        </Col>
      </Row>
    );
  }
}
export default ProductDetail;
