"use client";

import React from "react";

import { Layout } from "antd";

const { Content } = Layout;

export default function PublicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Layout
      style={{
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </Content>
    </Layout>
  );
}
