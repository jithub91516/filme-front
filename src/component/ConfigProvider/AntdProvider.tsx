"use client";

import React, { type PropsWithChildren, useState } from "react";

import { useServerInsertedHTML } from "next/navigation";

import {
  StyleProvider as AntdStyleProvider,
  createCache,
  extractStyle,
} from "@ant-design/cssinjs";
import { ConfigProvider as AntdConfigProvider, theme } from "antd";
import { ThemeConfig } from "antd/lib/config-provider/context";
import enUS from "antd/lib/locale/en_US";
import koKR from "antd/lib/locale/ko_KR";

const token = {
  colorPrimary: "#FFA6A6",
  colorPrimaryBg: "#FFA6A6",
  colorLink: "#FFA6A6",
  colorBgHeader: "#FFF",
};

const customTheme: ThemeConfig = {
  algorithm: [theme.defaultAlgorithm],
  components: {
    Layout: {
      headerBg: token.colorBgHeader,
      fontSize: 16,
    },
    Button: {
      defaultColor: token.colorPrimary,
    },
    Table: {
      rowSelectedBg: "rgba(58, 143, 150, 0.18)", // table row select background color
    },
  },
  token: { ...token },
};

const AntdProvider = ({
  locale = "ko",
  children,
}: { locale?: "ko" | "us" } & PropsWithChildren) => {
  const [cache] = useState(() => createCache());
  useServerInsertedHTML(() => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `<script>${extractStyle(cache)}</script>`,
        }}
      />
    );
  });
  return (
    <AntdStyleProvider cache={cache}>
      <AntdConfigProvider
        locale={locale === "ko" ? koKR : enUS}
        theme={customTheme}
      >
        {children}
      </AntdConfigProvider>
    </AntdStyleProvider>
  );
};

export default AntdProvider;
