import React, { Component } from "react";
import { Row, Col, Form, Input, Button, Upload, Icon, Alert } from "antd";
import "./Brands.css";
import Axios from "axios";

const props = {
  // action: "http://localhost:8080/upload-photo",
  listType: "picture"
};

export class AddBrand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: "",
      array: [{ img: "", loading: false }],
      image: "",
      showOK: false
    };
    this.handdleAddBrand = this.handdleAddBrand.bind(this);
  }

  handleUploadImg = value => async info => {
    if (info.file.status === "uploading") {
      await this.setState(state => ({
        array: state.array.map((data, idx) => {
          if (idx === value) {
            return { loading: true, data: data.img };
          } else {
            return data;
          }
        })
      }));
      return;
    }
    if (info.file.status === "done") {
      console.log(info.file.response.data.name);
      this.setState(
        state => ({
          array: state.array.map((data, idx) => {
            if (idx === value) {
              return {
                img: "http://localhost:8080/" + info.file.response.data.name,
                loading: false
              };
            } else {
              return data;
            }
          })
        }),
        () => {
          console.log(this.state.array);
        }
      );
    }
    console.log(this.state.array);
    this.setState({ image: this.state.array[0].img });
  };

  handdleAddBrand = e => {
    e.preventDefault();
    let image = this.state.image;
    console.log(image);
    let name = this.state.nameValue;
    Axios.post("http://localhost:8080/add-brand", {
      name,
      image
    }).then(result => this.setState({ showOK: true }));
  };

  render() {
    return (
      <Row type="flex" justify="center">
        <Col span={18}>
          <h3>ADD BRAND</h3>
          {this.state.showOK ? (
            <Alert message="Success" type="success" />
          ) : (
            undefined
          )}
          <Form onSubmit={this.handdleAddBrand}>
            <Form.Item label="NAME" className="item">
              <Input
                onChange={e => this.setState({ nameValue: e.target.value })}
              />
            </Form.Item>
            <Form.Item label="ADD LOGO" className="item">
              <Upload
                {...props}
                name="photo"
                action="http://localhost:8080/upload-photo"
                onChange={this.handleUploadImg(0)}
              >
                <Button>
                  <Icon type="upload" /> Upload Picture
                </Button>
              </Upload>
            </Form.Item>
            <br />
            <Form.Item>
              <Row type="flex" justify="center">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="brand-button"
                >
                  SUBMIT
                </Button>
              </Row>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default AddBrand;
