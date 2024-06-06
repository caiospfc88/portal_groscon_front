import { ReactElement } from "react";
import { TfiHome } from "react-icons/tfi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GrHelpBook } from "react-icons/gr";
import { BsClipboardData } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";
import { GrPieChart } from "react-icons/gr";
import { FaRegHandshake } from "react-icons/fa";
import { SlDocs } from "react-icons/sl";

export type ItemMenu = {
  id: number;
  page: string;
  icon: ReactElement;
  path: string;
};

export const pagesList: Array<ItemMenu> = [
  { id: 1, page: "Home", icon: <TfiHome />, path: "/" },
  {
    id: 7,
    page: "Seguro Bradesco",
    icon: <AiOutlineSafetyCertificate />,
    path: "/seguro-bradesco",
  },
  {
    id: 4,
    page: "Wiki Groscon",
    icon: <GrHelpBook />,
    path: "https://192.168.201.115:8000/login",
  },
  {
    id: 2,
    page: "Mural de dados",
    icon: <BsClipboardData />,
    path: "/mural-de-dados",
  },
  { id: 3, page: "Comissões", icon: <GiPayMoney />, path: "/comissoes" },
  { id: 5, page: "BI", icon: <GrPieChart />, path: "/bi" },
  {
    id: 6,
    page: "GSCON",
    icon: <FaRegHandshake />,
    path: "http://www.gscon.com.br/",
  },
  {
    id: 10,
    page: "Relatórios Newcon",
    icon: <SlDocs />,
    path: "/relatorios-newcon",
  },
];
