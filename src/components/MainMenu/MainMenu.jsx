import React from "react";

import Styles from "./MainMenu.module.scss";
import Catalog from "./components/Catalog/Catalog.jsx";
import FilterCatalog from "./components/FilterCatalog/FilterCatalog.jsx";

const MainMenu = () => {
  return (
    <div className="container">
      <div className={Styles.Menu}>
        <FilterCatalog />
        <Catalog />
      </div>
    </div>
  );
};

export default MainMenu;
