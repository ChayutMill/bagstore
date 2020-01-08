import React, { Component } from "react";
import { Row, Col, Button, Icon, Popconfirm, message } from "antd";
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
      localStorage.setItem("brands", JSON.stringify(result.data));
    });
  }

  handleUpdateBrand = id => {
    Axios.put(`http://localhost:8080/update-brand/${id}`).then(result => {
      console.log("success");
    });
  };

  handleDeleteBrand = id => {
    Axios.delete(`http://localhost:8080/delete-brand/${id}`).then(result => {
      message.success("Delete Success");
      this.componentDidMount(); //auto f5
    });
  };

  render() {
    return (
      <Row type="flex" justify="start">
        {this.state.brand.map(brand => (
          <Col key={brand.id} span={8} className="borderBrand">
            <Row>
              <a href={`/products?id=${brand.id}`}>
                <img className="pictureBrand" src={brand.image} alt="" />
              </a>
            </Row>
            <Row type="flex" justify="end" style={{ marginTop: "5px" }}>
              <Button
                // onClick={()=> this.handleUpdateBrand(brand_id)}
                href="/editproduct"
                type="default"
                shape="circle"
                style={{ marginRight: "5px" }}
              >
                <Icon type="edit" />
              </Button>
              <Popconfirm
                title="Are you sure delete this brand?"
                onConfirm={() => this.handleDeleteBrand(brand.id)}
                okText="Yes"
                cancelText="No"
              >
                <Button type="danger" shape="circle">
                  <Icon type="delete" />
                </Button>
              </Popconfirm>
            </Row>
          </Col>
        ))}
      </Row>
    );
  }
}

export default Brands;
