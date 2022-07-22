import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Breadceumbs() {
  return (
    <Breadcrumb>
    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
    <Breadcrumb.Item active>Shopping cart</Breadcrumb.Item>
  </Breadcrumb>
  );
}

export default Breadceumbs;
