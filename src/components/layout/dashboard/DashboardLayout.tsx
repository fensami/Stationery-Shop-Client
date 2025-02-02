import { Layout, Menu, theme } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Link, Outlet } from "react-router-dom";
// import { adminPaths } from "../../../routes/admin.routes";
import {
  ItemType,
  sidebarItemsGenerator,
} from "../../../utils/sidebarItemsGenerator";
import { useAppSelector } from "../../../redux/hooks";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { userPaths } from "../../../routes/user.routes";
import { adminPaths } from "../../../routes/admin.routes";
import { MenuItemType } from "antd/es/menu/interface";

// const sidebarItems = sidebarItemsGenerator(adminPaths, "admin");
const DashboardLayout = () => {
  const user = useAppSelector(selectCurrentUser);
  let sidebarItems;
  switch (user!.role) {
    case "admin":
      sidebarItems = sidebarItemsGenerator(adminPaths, "admin");
      break;
    case "user":
      sidebarItems = sidebarItemsGenerator(userPaths, "user");
      break;

    default:
      break;
  }
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={sidebarItems as ItemType<MenuItemType>[]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Link to="/" className="btn-primary">
              GO Back TO Home Page
            </Link>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {/* content */}
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashboardLayout;
