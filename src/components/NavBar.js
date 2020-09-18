import React from "react";
import { ProductConsumer } from "../context/Context";
import { FaBars, FaCartPlus } from "react-icons/fa";
import logo from "../images/logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <ProductConsumer>
        {(value) => {
          const { cartItems, handleSideBar, handleSideCart } = value;

          return (
            <NavWrapper>
              <div className="nav-center">
                <FaBars className="nav-icon" onClick={handleSideBar} />
                <Link to="/">
                  <img src={logo} alt="tech store logo" />
                </Link>

                <div className="nav-cart">
                  <FaCartPlus className="nav-icon" onClick={handleSideCart} />
                  <div className="cart-items">{cartItems}</div>
                </div>
              </div>
            </NavWrapper>
          );
        }}
      </ProductConsumer>
    </>
  );
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  z-index: 1;
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1600px;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
  }
  img {
    cursor: pointer;
  }
  .cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }
`;
