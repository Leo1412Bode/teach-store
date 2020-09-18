import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/HomePage/Services";
import Features from "../components/HomePage/Features";
export default function HomePage() {
  return (
    <>
      <Hero title="Awesome Gadgets" max="true">
        <Link className="main-link" to="/products" style={{ margin: "2rem" }}>
          Our Products
        </Link>
      </Hero>
      <Services />
      <Features />
    </>
  );
}
