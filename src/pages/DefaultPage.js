import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import defaultBcg from "../images/defaultBcg.jpeg";

export default function DefaultPage() {
  return (
    <>
      <Hero title="404" img={defaultBcg} max="true">
        <h2 className="text-uppercase">page not found</h2>
        <Link to="/" className="main-link" style={{ margin: "2rem" }} >
          Return Home
        </Link>
      </Hero>
    </>
  );
}
