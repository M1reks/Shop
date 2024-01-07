import React from "react";

import Styles from "./Input.module.scss";

// eslint-disable-next-line react/prop-types
const Input = ({ placeholder, ...props }) => {
  return <input {...props} placeholder={placeholder} className={Styles.input} />;
};

export default Input;
