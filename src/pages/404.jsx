import React from "react";

import { Link } from "react-router-dom";

const NotFound = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginRight: 20 }}>This page is doesn't exist.</h1> Go&nbsp;
      <Link to="/" style={{ color: "hsl(206,100%,40%)" }}>
        home
      </Link>
    </div>
  );
};

export default NotFound;
