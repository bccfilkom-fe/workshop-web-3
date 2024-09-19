import { Layout, Menu, MenuProps } from "antd";
import BCCLogo from "../../../assets/BCC.png";
import { useLocation, useNavigate } from "react-router-dom";

const NavbarLayouts = () => {
  const { Header } = Layout;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  
  const selectedKey = pathname.includes("products") ? "products" : "articles";

  const items: MenuProps["items"] = [
    {
      key: "articles",
      label: "Articles",
      onClick: () => navigate("/articles"),
    },
    {
      key: "products",
      label: "Products",
      onClick: () => navigate("/products"),
    },
  ];

  return (
    <Header className="flex items-center fixed z-50 w-full bg-white p-0 border-b shadow">
      <img className="w-28" src={BCCLogo} />
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[selectedKey]}
        items={items}
        className="flex w-fit min-w-56 p-0"
      />
    </Header>
  );
};

export default NavbarLayouts;
