import React from "react";
import { Layout } from "antd";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import Navbar from "./components/navbar/Navbar";

import Home from "./pages/Home";
import SignInRegister from "./pages/SignInRegister";
import BrandList from "./pages/BrandList";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import ShoppingCart from "./pages/ShoppingCart";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

import "./App.css";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header className="App">
        <Navbar />
        <hr />
      </Header>
      <Content className="contentApp">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/brand" component={BrandList} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/cart" component={ShoppingCart} />
            <Route exact path="/register" component={SignInRegister} />
            <Route exact path="/addproduct" component={AddProduct} />
            <Route exact path="/editproduct" component={EditProduct} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </Content>
    </Layout>
  );
}

export default App;
