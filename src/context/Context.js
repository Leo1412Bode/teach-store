import React, { Component } from "react";
import { linkData } from "./LinkData";
import { socialData } from "./socialData";

const ProductContext = React.createContext();

//Provider
class ProductProvider extends Component {
  state = {
    sideBarOpen: false,
    cartOpen: false,
    cartItems: 0,
    links: linkData,
    cart: [],
    social: socialData,
  };

  //Abrir y cerrar Side Bar
  handleSideBar = () => {
    this.setState({
      sideBarOpen: !this.state.sideBarOpen,
    });
  };

  //Abrir y cerrar Side Cart
  handleSideCart = () => {
    this.setState({
      cartOpen: !this.state.cartOpen,
    });
  };

  cartOpen = () => {
    this.setState({
      cartOpen: true,
    });
  };

  closeCart = () => {
    this.setState({
      cartOpen: false,
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSideBar: this.handleSideBar,
          handleSideCart: this.handleSideCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
