import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pagesList } from "../types/itemMenu";

import "./MenuPortal.css";

const MenuPortal = () => {
  const [active, setActive] = useState<boolean>(false);

  const navigate = useNavigate();

  const ToggleMode = () => {
    setActive(!active);
  };

  return (
    <div className="MenuPortal">
      <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
        <div className="hamburguer hamburguerIcon"></div>
      </div>
      <div className={active ? "menu menuOpen" : "menu menuClosed"}>
        <div className="list">
          <ul className="listItems">
            {pagesList.map((item) => (
              <li
                className="item"
                key={item.id}
                onClick={() => navigate(item.path)}
              >
                {item.icon} - {item.page}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MenuPortal;
