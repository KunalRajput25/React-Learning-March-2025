//1 import area
import React from "react";

import { createRoot } from "react-dom/client";

//2 function declaration area

//using function component
function A(props) {
  return (
    <span>
      hello kunal {props.surname}
      <B>pal</B> <br />
      <C>Akash</C>
    </span>
  );
}

//using fat arrow function component

const B = (props) => {
  return <span>Ankit {props.children}</span>;
};

//using class component
class C extends React.Component {
  //properties

  address = "";
  //constructor

  constructor() {
    super();
    this.address = "Indore";
  }

  //methods
  render() {
    return (
      <span>
        hello {this.props.children} from {this.props.address}
      </span>
    );
  }
}

createRoot(document.getElementById("root")).render(
  <A
    surname="Rajput
  "
  />
);

//export area
