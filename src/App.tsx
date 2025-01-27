// import { Layout, Menu, theme } from "antd";
// import { Content, Footer } from "antd/es/layout/layout";
// import Sider from "antd/es/layout/Sider";

// // const labels = [
// //   { key: "1", label: "Home" },
// //   { key: "2", label: "About" },
// //   { key: "3", label: "Contact" },
// // ];
// const labels = ["Home", "About", "Contact"];

// const items = labels.map((label, index) => ({
//   key: String(index + 1),
//   label: label,
// }));
// // const items = new Array(3).fill(null).map((_, index) => {
// //   const labels = ["Home", "About", "Contact"];
// //   return {
// //     key: String(index + 1),
// //     label: labels[index],
// //   };
// // });
// // const items = new Array(3).fill(null).map((_, index) => ({
// //   key: String(index + 1),
// //   label: `nav ${index + 1}`,
// // }));
// function App() {
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();
//   return (
//     <>
//       <Layout>
//         <Sider
//           className="nav-bar"
//           breakpoint="xxl"
//           collapsedWidth="0"
//           onBreakpoint={(broken) => {
//             console.log(broken);
//           }}
//           onCollapse={(collapsed, type) => {
//             console.log(collapsed, type);
//           }}
//         >
//           <div className="demo-logo-vertical" />
//           <Menu
//             theme="dark"
//             mode="inline"
//             defaultSelectedKeys={["4"]}
//             items={items}
//           />
//         </Sider>
//         <Layout>
//           <Content style={{ margin: "24px 16px 0" }}>
//             <div
//               style={{
//                 padding: 24,
//                 minHeight: 360,
//                 background: colorBgContainer,
//                 borderRadius: borderRadiusLG,
//               }}
//             >
//               content kaku
//             </div>
//           </Content>
//           <Footer style={{ textAlign: "center" }}>
//             Ant Design ©{new Date().getFullYear()} Created by Ant UED
//           </Footer>
//         </Layout>
//       </Layout>
//     </>
//   );
// }

// export default App;
