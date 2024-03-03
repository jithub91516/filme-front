"use client";

import PageContainer from "@/component/PageContainer";
import { Card } from "antd";

import dummyData from "@/assets/dummy.json";

export default function Home() {
  return (
    <PageContainer>
      {dummyData.map((data) => (
        <Card
          key={data.id}
          title={data.title}
          style={{ width: "100%", maxHeight: 300 }}
        >
          <p>{data.body}</p>
        </Card>
      ))}
    </PageContainer>
  );
}
