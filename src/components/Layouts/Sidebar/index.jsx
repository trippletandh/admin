import { useState } from "react";
import { FaThList, FaShoppingBag, FaUserFriends, FaBars } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/img/Logo.webp";
import "./Sidebar.css";

const menuItem = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaThList />,
  },
  {
    path: "/products",
    name: "Products",
    icon: <FaShoppingBag />,
  },
  {
    path: "/users",
    name: "Users",
    icon: <FaUserFriends />,
  },
  {
    path: "/orders",
    name: "Orders",
    icon: <MdOutlineAddShoppingCart />,
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <>
      {/* Container */}
      <div className="container">
        {/* Layout */}
        <div className="layout">
          <div className="top_section">
            {/* Logo */}
            <img className="logo" src={Logo} alt="" />
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassname="active"
            >
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))}
          <Link className="logout">
            <FiLogOut />
            <p> LogOut</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
