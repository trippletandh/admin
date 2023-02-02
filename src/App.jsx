import Logo from "./assets/Logo.webp";
import { FiMenu } from "react-icons/fi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidbar";
import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Products";
import Users from "./Pages/Users";
import Orders from "./Pages/Orders";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
