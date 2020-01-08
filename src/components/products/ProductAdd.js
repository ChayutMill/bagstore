import React, { Component } from "react";
import {
  Input,
  Form,
  Select,
  Row,
  Col,
  Upload,
  Button,
  Icon,
  message
} from "antd";
import "./Products.css";
import Axios from "../../config/axios.setup";

const { Option } = Select;
const { TextArea } = Input;

// const props = {
//   action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
//   listType: "picture"
// };

class ProductAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brandList: [],
      array: [
        { img: "", loading: false },
        { img: "", loading: false },
        { img: "", loading: false }
      ],
      image1: "",
      image2: "",
      image3: "",
      brand_id: ""
    };
    this.handdleAddProduct = this.handdleAddProduct.bind(this);
  }

  componentDidMount() {
    let brand_list = localStorage.getItem("brands");
    // sessionStorage.getItem();
    let brand_list_json = JSON.parse(brand_list);
    this.setState({ brandList: brand_list_json });
  }
  uploadButton(loading) {
    return (
      <div>
        <Icon type={loading ? "loading" : "plus"} />
      </div>
    );
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
    this.setState({
      image1: this.state.array[0].img,
      image2: this.state.array[1].img,
      image3: this.state.array[2].img
    });
  };

  handdleAddProduct = e => {
    e.preventDefault();
    console.log(this.state.brand_id);

    this.props.form.validateFieldsAndScroll((err, value) => {
      if (!err) {
        Axios.post("http://localhost:8080/add-product", {
          brand_id: this.state.brand_id,
          name: value.name,
          price: value.price,
          amount: value.amount,
          description: value.description,
          image1: this.state.image1,
          image2: this.state.image2,
          image3: this.state.image3
        })
          .then(result => message.success("Success"))
          .catch(err => {
            console.error(err);
          });
        this.props.form.resetFields();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Row type="flex" justify="center">
        <Col span={24}>
          <Form onSubmit={this.handdleAddProduct}>
            <Form.Item label="BRAND" className="item">
              <Select
                defaultValue="Hermes"
                style={{ width: "100%" }}
                onChange={value => this.setState({ brand_id: value })}
              >
                {this.state.brandList.map(item => {
                  return (
                    <Option value={item.id} key={item.id}>
                      {item.name}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>

            <Form.Item label="NAME" className="item">
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "กรุณากรอกชื่อสินค้า",
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item label="PRICE" className="item">
              {getFieldDecorator("price", {
                rules: [
                  {
                    required: true,
                    message: "กรุณากรอกราคาสินค้า",
                    whitespace: true
                  }
                ]
              })(<Input prefix="฿" suffix="THB" />)}
            </Form.Item>

            <Form.Item label="AMOUNT" className="item">
              {getFieldDecorator("amount", {
                rules: [
                  {
                    required: true,
                    message: "กรุณากรอกจำนวน",
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item label="DETAIL" className="item">
              {getFieldDecorator("description", {
                rules: [
                  {
                    required: true,
                    message: "กรุณากรอกรายละเอียดสินค้า",
                    whitespace: true
                  }
                ]
              })(<TextArea rows={4} />)}
            </Form.Item>

            {/* <Form.Item label="ADD PRODUCT PICTURE" className="item">
            <Upload {...props}>
              <Button>
                <Icon type="upload" /> Upload Picture
              </Button>
            </Upload>
          </Form.Item> */}
            <Row>
              <Col span={8}>
                <Form.Item>
                  <Upload
                    name="photo"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="http://localhost:8080/upload-photo"
                    // beforeUpload={beforeUpload}
                    onChange={this.handleUploadImg(0)}
                  >
                    {this.state.array[0].img ? (
                      <img
                        alt=""
                        src={this.state.array[0].img}
                        style={{ width: "100%" }}
                      />
                    ) : (
                      <div>
                        {this.uploadButton(this.state.array[0].loading)}
                        <div style={{ marginTop: "10px" }}>front bag</div>
                      </div>
                    )}
                  </Upload>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item>
                  <Upload
                    name="photo"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="http://localhost:8080/upload-photo"
                    // beforeUpload={beforeUpload}
                    onChange={this.handleUploadImg(1)}
                  >
                    {this.state.array[0].img ? (
                      <img
                        alt=""
                        src={this.state.array[1].img}
                        style={{ width: "100%" }}
                      />
                    ) : (
                      <div>
                        {this.uploadButton(this.state.array[1].loading)}
                        <div style={{ marginTop: "10px" }}>in bag</div>
                      </div>
                    )}
                  </Upload>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item>
                  <Upload
                    name="photo"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="http://localhost:8080/upload-photo"
                    // beforeUpload={beforeUpload}
                    onChange={this.handleUploadImg(2)}
                  >
                    {this.state.array[0].img ? (
                      <img
                        alt=""
                        src={this.state.array[2].img}
                        style={{ width: "100%" }}
                      />
                    ) : (
                      <div>
                        {this.uploadButton(this.state.array[2].loading)}
                        <div style={{ marginTop: "10px" }}>back bag</div>
                      </div>
                    )}
                  </Upload>
                </Form.Item>
              </Col>
            </Row>

            <br />
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="addProduct-Button"
              >
                SUBMIT
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}
const ProductAddForm = Form.create({ name: "product" })(ProductAdd);
export default ProductAddForm;
