import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className="container">
      <div className={style.footer}>
        <p className={style.text}>Copyright © 2024 «Name store» rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
