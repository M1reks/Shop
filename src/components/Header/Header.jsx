import Styles from "./Header.module.scss";
import HeaderNavigation from "./components/HeaderNavigation/HeaderNavigation.jsx";
import HeaderPerson from "./components/HeaderPerson/HeaderPersone.jsx";

const Header = () => {
  return (
    <div className="container">
      <div className={Styles.header}>
        <HeaderNavigation />
        <HeaderPerson />
      </div>
    </div>
  );
};
export default Header;
