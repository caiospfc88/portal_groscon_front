import { useState } from "react";

import "./MenuPortal.css";
import { AiOutlineHome } from "react-icons/ai";
import { ItemMenu } from "../types/itemMenu";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const MenuPortal = () => {
  const [active, setActive] = useState<boolean>(false);

  const ToggleMode = () => {
    setActive(!active);
  };

  const pagesList: Array<ItemMenu> = [
    { name: "HOME", icon: <AiOutlineHome /> },
    { name: "SEGURO BRADESCO", icon: <AiOutlineSafetyCertificate /> },
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
              <li className="item">
                {item.icon} - {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MenuPortal;
