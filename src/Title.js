import React from "react";

function Title(props) {
  return <div style={{ color: props.color }}>{props.children}</div>;
}
export default Title;
