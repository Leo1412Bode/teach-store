import React from "react";

import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import DefaultPage from "./pages/DefaultPage";
import ProductPage from "./pages/ProductPage";
import SingleProductPage from "./pages/SingleProductPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* navbar sidebar cart footer */}
      <NavBar />
      <SideBar />
      <SideCart />

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/products" exact component={ProductPage} />
        <Route path="/products/:id" component={SingleProductPage} />
        <Route component={DefaultPage} />
      </Switch>
      <Footer /> 
    </>
  );
}

export default App;
