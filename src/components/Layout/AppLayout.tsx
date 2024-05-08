import { Layout } from "antd";
import React, { PropsWithChildren } from "react";

const { Header, Content, Footer } = Layout;
const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout>
      <Header></Header>
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
