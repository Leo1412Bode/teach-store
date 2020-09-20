import React from "react";
import Title from "../Title";
import CartColumn from "./CartColumns";
import CartList from "./CartList";

import CartTotals from "./CartTotals";

export default function Cart() {
  return (
    <section className="py-5">
      {/* Title */}
      <div className="container">
        <Title title="Yor cart items" center />
      </div>
      {/* column */}
      <CartColumn />
      
      <CartList />
      <CartTotals />
    </section>
  );
}
