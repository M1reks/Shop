import Styles from "./button.module.scss";

const button = ({ buttonText, ...props }) => {
  return (
    <button className={Styles.button} {...props}>
      {buttonText}
    </button>
  );
};

export default button;
