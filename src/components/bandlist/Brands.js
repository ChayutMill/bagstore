import React, { Component } from "react";
import { Row, Col } from "antd";
import './Brands.css'

import BrandLogo1 from "../../image/brand/Hermès-Logo.png";
import BrandLogo2 from "../../image/brand/michael kors-logo.png";
import BrandLogo3 from "../../image/brand/chanel-logo.png";
import BrandLogo4 from "../../image/brand/burberry-logo.png";
import BrandLogo5 from "../../image/brand/louis-vuitton-logo.png";
import BrandLogo6 from "../../image/brand/gucci-logo.png";

export class Brands extends Component {
  render() {
    return (
      <Row type="flex" justify="center">
        <Col
          span={8}
          className="borderBrand"
        >
          <Row>
            <a href="/products">
              <img
                className="pictureBrand"
                src={BrandLogo1}
                alt=""
              />
            </a>
          </Row>
        </Col>
        {/* ---------------------------------------------- */}
        <Col
          span={8}
          style={{
            padding: "3.33333vw",
            border: " 1px solid #EEE9E9"
          }}
        >
          <Row>
            <img
              style={{
                objectFit: "contain",
                width: "100%",
                height: "200px"
              }}
              src={BrandLogo2}
              alt=""
            />
          </Row>
        </Col>
        <Col
          span={8}
          style={{
            padding: "3.33333vw",
            border: " 1px solid #EEE9E9"
          }}
        >
          <Row>
            <img
              style={{
                objectFit: "contain",
                width: "100%",
                height: "200px"
              }}
              src={BrandLogo3}
              alt=""
            />
          </Row>
        </Col>
        <Col
          span={8}
          style={{
            padding: "3.33333vw",
            border: " 1px solid #EEE9E9"
          }}
        >
          <Row>
            <img
              style={{
                objectFit: "contain",
                width: "100%",
                height: "200px"
              }}
              src={BrandLogo4}
              alt=""
            />
          </Row>
        </Col>
        <Col
          span={8}
          style={{
            padding: "3.33333vw",
            border: " 1px solid #EEE9E9"
          }}
        >
          <Row>
            <img
              style={{
                objectFit: "contain",
                width: "100%",
                height: "200px"
              }}
              src={BrandLogo5}
              alt=""
            />
          </Row>
        </Col>
        <Col
          span={8}
          style={{
            padding: "3.33333vw",
            border: " 1px solid #EEE9E9"
          }}
        >
          <Row>
            <img
              style={{
                objectFit: "contain",
                width: "100%",
                height: "200px"
              }}
              src={BrandLogo6}
              alt=""
            />
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Brands;
