import React, { Component } from "react";
import { Row, Col, Input, Icon, Button, Popover, Badge } from "antd";
import "./Navbar.css";
import Logo from "../../image/LOGO.png";
import SignIn from "../signin/SignIn";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/actions";

const { Search } = Input;

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  setVisible = value => {
    this.setState({
      visible: value
    });
  };

  handleLogout = () => {
    console.log("logout");
    this.props.logout();
    window.location.reload(true);
  };

  render() {
    const content = this.props.user.name ? (
      <div>
        <Button
          type="primary"
          onClick={() => this.handleLogout()}
          className="login-form-button"
        >
          Logout
        </Button>
      </div>
    ) : (
      <div>
        <SignIn setVisibleNavbar={this.setVisible} />
        <Row type="flex" justify="center">
          <Col span={4}>
            <i>OR</i>
          </Col>
        </Row>

        <Button type="primary" href="/register" className="login-form-button">
          REGISTER
        </Button>
      </div>
    );

    return (
      <Row
        type="flex"
        style={{
          width: "100vw",
          height: "100%",
          backgroundColor: "#fff",
          padding: "0 0px"
        }}
      >
        <Col
          span={4}
          style={{ paddingLeft: "3.3333333333333335vw", paddingRight: "3rem" }}
        >
          <Button
            type="link"
            href="/"
            className="font"
            style={{ padding: "0 0" }}
          >
            <img style={{ width: "100%" }} src={Logo} alt="LOGO" />
          </Button>
        </Col>
        <Col span={12} style={{ display: "flex", alignItems: "center" }}>
          <Search
            placeholder="Product"
            onSearch={value => console.log(value)}
            style={{ width: "70%", height: "45px" }}
          />
        </Col>
        <Col span={8}>
          <Row style={{ height: "100%" }}>
            <Col span={6} style={{ height: "100%" }}>
              <Row
                type="flex"
                justify="center"
                align="middle"
                style={{ height: "100%" }}
              >
                <Button type="link" href="/" className="fontNavbar">
                  Home
                </Button>
              </Row>
            </Col>
            <Col span={6} style={{ height: "100%" }}>
              <Row
                type="flex"
                justify="center"
                align="middle"
                style={{ height: "100%" }}
              >
                <Button type="link" href="/Brand" className="fontNavbar">
                  Brand
                </Button>
              </Row>
            </Col>
            <Col span={4} style={{ height: "100%" }}>
              <Row
                type="flex"
                justify="center"
                align="middle"
                style={{ height: "100%" }}
              >
                <Badge count={this.props.total}>
                  <a href="/cart" className="fontNavbar">
                    <Icon type="shopping-cart" />
                  </a>
                </Badge>
              </Row>
            </Col>
            <Col span={8} style={{ height: "100%" }}>
              <Row
                type="flex"
                justify="center"
                align="middle"
                style={{ height: "100%" }}
              >
                <Popover
                  placement="bottomRight"
                  content={content}
                  trigger="click"
                  visible={this.state.visible}
                  onClick={() =>
                    this.setState({ visible: !this.state.visible })
                  }
                >
                  <Button type="link" className="fontNavbar">
                    {this.props.user.name}
                    {this.props.user.name ? (
                      <Icon type="setting" />
                    ) : (
                      <Icon type="user" />
                    )}
                  </Button>
                </Popover>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
const mapStateToProps = state => {
  return {
    total: state.total,
    user: state.user
  };
};

const mapDispatchToProps = {
  logout: logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
