"use client";

// dayjs
import dayjs from "dayjs";
import "dayjs/locale/ko";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localeData from "dayjs/plugin/localeData";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import timeZone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import weekOfYear from "dayjs/plugin/weekOfYear";
import weekYear from "dayjs/plugin/weekYear";
import weekday from "dayjs/plugin/weekday";

import AntdProvider from "./AntdProvider";

dayjs.locale("ko");
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
dayjs.extend(utc);
dayjs.extend(timeZone);
dayjs.tz.setDefault("Asia/Seoul");

export default function ConfigProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AntdProvider>{children}</AntdProvider>;
}
