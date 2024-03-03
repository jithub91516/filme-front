"use client";

import React from "react";
import Layout from "@/component/Layout";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
