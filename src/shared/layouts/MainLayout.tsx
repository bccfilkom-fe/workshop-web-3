import { Layout } from "antd";
import NavbarLayouts from "../components/layouts/NavbarLayouts";
import FooterLayouts from "../components/layouts/FooterLayouts";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <NavbarLayouts />
      <Content className="p-5 min-h-[90vh] pt-20 bg-blue-50">
        <Outlet />
      </Content>
      <FooterLayouts />
    </Layout>
  );
};

export default MainLayout;
