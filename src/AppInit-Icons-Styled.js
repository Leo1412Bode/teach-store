import React from "react";

import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaApple } from "react-icons/fa";
import styled from "styled-components";

function App() {
  return (
    <div>
      <h1>
        Hello from Cuba <FaApple />
      </h1>
      <Button large>Hello</Button>
    </div>
  );
}
const color = "#f15025";
const Button = styled.button`
  color: white;
  background: ${color};
  font-size: ${(props) => (props.large ? "3rem" : "1rem")};
`;

export default App;
