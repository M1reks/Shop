import { forwardRef } from "react";

import Styles from "./Label.module.scss";

// eslint-disable-next-line react/prop-types,react/display-name
const Label = forwardRef(({ labelText, errors, ...props }, ref) => {
  return (
    <label className={Styles.label}>
      {labelText}
      <div className={Styles.label__list}>
        <input ref={ref} className={Styles.label__input} {...props} />
        {/* eslint-disable-next-line react/prop-types */}
        <div className={Styles.label__error}>{<p>{errors?.login?.message}</p>}</div>
      </div>
    </label>
  );
});

export default Label;
