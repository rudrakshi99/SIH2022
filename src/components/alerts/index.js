import React from "react";

export const SuccessMsg = ({ msg }) => {
  return <div className="success-msg">{msg}</div>;
};

export const ErrorMsg = ({ msg }) => {
  return <div className="error-msg">{msg}</div>;
};
