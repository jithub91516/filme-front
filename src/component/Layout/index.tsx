"use client";

import React from "react";
import { Layout as BasicLayout } from "antd";

const { Header, Footer, Content } = BasicLayout;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <BasicLayout
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <Header style={{ textAlign: "center" }}>FILME</Header>
      <Content style={{ height: "100%", background: "#EEEEEE" }}>
        {children}
      </Content>
      <Footer style={{ background: "#fff", textAlign: "center" }}>
        Footer
      </Footer>
    </BasicLayout>
  );
}
