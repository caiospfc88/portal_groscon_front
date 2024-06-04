import { useState } from "react";

import "./MenuPortal.css";

const MenuPortal = () => {
  const [active, setActive] = useState<boolean>(false);

  const ToggleMode = () => {
    setActive(!active);
  };

  const pagesList: Array<string> = [
    "HOME",
    "SEGURO BRADESCO",
    "BI",
    "COMISSÃO",
    "RELATÓRIOS NEWCON",
    "MURAL DE DADOS",
  ];

  return (
    <div className="MenuPortal">
      <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
        <div className="hamburguer hamburguerIcon"></div>
      </div>
      <div className={active ? "menu menuOpen" : "menu menuClosed"}>
        <div className="list">
          <ul className="listItems">
            {pagesList.map((item) => (
              <li className="item">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MenuPortal;
