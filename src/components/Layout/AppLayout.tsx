import { Layout, Typography } from "antd";
import React, { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Header style={{ alignItems: "center", display: "flex" }}>
        <Typography.Title
          level={3}
          style={{ color: "white", margin: 0, cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Ethereum Online Tools
        </Typography.Title>
      </Header>
      <Content>
        <div
          style={{
            padding: 30,
            minHeight: "calc(100vh - 145px)",
          }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ethereum Tools ©{new Date().getFullYear()} Created by 0xcuonghx
      </Footer>
    </Layout>
  );
};

export default AppLayout;
