import { Button, Layout, Menu, Typography } from "antd";
import React, { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { GithubOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Header style={{ alignItems: "center", display: "flex" }}>
        <Typography.Title
          level={3}
          style={{
            color: "white",
            margin: 0,
            cursor: "pointer",
            marginRight: 10,
          }}
          onClick={() => navigate("/")}
        >
          Ethereum Online Tools
        </Typography.Title>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[]}
          items={[
            {
              key: "npm-packages",
              label: "npm packages",
            },
          ]}
          style={{ flex: 1 }}
          onClick={() => navigate("/npm-packages")}
        />
        <Button
          icon={<GithubOutlined />}
          onClick={() => window.open("https://github.com/0xcuonghx")}
        />
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
