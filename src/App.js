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

function App() {
  return (
    <>
      <HomePage />
      <AboutPage />
      <CartPage />
      <ContactPage />
      <DefaultPage />
      <ProductPage />
      <SingleProductPage />
      <h1>Hello from Cuba</h1>;
    </>
  );

}

export default App;
