import React from "react";

const Filed = ({ filedName, type, handleValueChange }) => (
  <div>
    <span>{filedName}</span>
    <input
      type={type}
      name={filedName}
      onChange={event => handleValueChange(event, filedName)}
    />
  </div>
);

export default Filed;
