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
        <div style={{ width: open ? "280px" : "50px" }} className="layout">
          <div className="top_section">
            {/* Logo */}
            <img
              style={{ display: open ? "block" : "none" }}
              className="logo"
              src={Logo}
              alt=""
            />
            <div style={{ marginLeft: open ? "20px" : "0px" }} className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassname="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: open ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
          <Link className="logout">
            <FiLogOut />
            <p style={{ display: open ? "block" : "none" }}> LogOut</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
