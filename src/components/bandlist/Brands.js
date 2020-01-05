import React, { Component } from "react";
import { Row, Col, Button, Icon } from "antd";
import Axios from "axios";
import "./Brands.css";

export class Brands extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: []
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:8080/brands").then(result => {
      this.setState({
        brand: result.data
      });
    });
  }

  handleDeleteBrand = id => {
    Axios.delete(`http://localhost:8080/delete-brand/${id}`).then(result => {
      console.log("success");
    });
  };
  render() {
    return (
      <Row type="flex" justify="start">
        {this.state.brand.map(brand => (
          <Col key={brand.id} span={8} className="borderBrand">
            <Row>
              <a href="/products">
                <img className="pictureBrand" src={brand.image} alt="" />
              </a>
            </Row>
            <Row type="flex" justify="end" style={{ marginTop: "5px" }}>
              <Button
                type="default"
                shape="circle"
                style={{ marginRight: "5px" }}
              >
                <Icon type="edit" />
              </Button>
              <Button
                onClick={() => this.handleDeleteBrand(brand.id)}
                type="danger"
                shape="circle"
              >
                <Icon type="delete" />
              </Button>
            </Row>
          </Col>
        ))}
      </Row>
    );
  }
}

export default Brands;
