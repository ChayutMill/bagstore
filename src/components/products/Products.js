import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Badge, Icon } from "antd";
import Axios from "axios";
import "./Products.css";

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      brand: []
    };
  }

  componentDidMount() {
    // console.log(this.props.history)
    // console.log(this.props.history.location.search)
    // let targetBrand = this.props.history.location.search.slice(4);  // ตัด ?id= ออก
    // console.log(targetBrand)

    Axios.get("http://localhost:8080/products").then(result => {
      this.setState({
        product: result.data
      });
      localStorage.setItem("products", JSON.stringify(result.data));
    });

    let brand_list = localStorage.getItem("brands");
    let brand_list_json = JSON.parse(brand_list);
    this.setState({ brand: brand_list_json });
  }

  render() {
    let targetBrandID = this.props.history.location.search.slice(4);
    let targetProduct = this.state.product.filter(
      product => product.brand_id == targetBrandID
    );
    let targetBrand = this.state.brand.filter(
      brand => brand.id == targetBrandID
    );

    return (
      <Row>
        <Row type="flex" justify="center">
          <Col span={6} className="logoBrand">
            {targetBrand.map(brand => (
              <img
                key={brand.id}
                className="pictureBrand"
                src={brand.image}
                alt=""
              />
            ))}
          </Col>
        </Row>
        <Row>
          {targetProduct.map(product => (
            <Col key={product.id} span={8} className="productBox">
              <Row>
                <a href={`/product?id=${product.id}`}>
                  <img style={{ width: "100%" }} src={product.image1} alt="" />
                </a>
              </Row>
              <Row>
                <Col span={16}>{product.name}</Col>
                <Badge count={25}>
                    <a href="/cart" className="fontNavbar">
                      <Icon type="shopping-cart" />
                    </a>
                </Badge>
                <Col span={8}>฿{product.price}</Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Row>
    );
  }
}

export default withRouter(Products);
