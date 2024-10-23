import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const sidebarNavArray = [
  { name: "Dashboard", icon: <BsGrid1X2Fill className="icon" />, path: "/" },
  { name: "Products", icon: <BsFillArchiveFill className="icon" />, path: "/products" },
  { name: "Categories", icon: <BsFillGrid3X3GapFill className="icon" />, path: "/categories" },
  { name: "Customers", icon: <BsPeopleFill className="icon" />, path: "/customers" },
  { name: "Inventory", icon: <BsListCheck className="icon" />, path: "/inventory" },
  { name: "Reports", icon: <BsMenuButtonWideFill className="icon" />, path: "/reports" },
  { name: "Setting", icon: <BsFillGearFill className="icon" />, path: "/settings" },
];

export const sidebarNavListLink = (name, icon, path, navigate) => {
  return (
    <li className="sidebar-list-item" key={name} onClick={() => navigate(path)}>
      <a href="#">
        {icon} {name}
      </a>
    </li>
  );
};

const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
  const navigate = useNavigate(); 

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        {sidebarNavArray.map((item) =>
          sidebarNavListLink(item.name, item.icon, item.path, navigate)
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
