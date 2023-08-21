import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

export const Page1Routes = [
  {
    path: "/page1",
    childern: <Page1 />
  },
  {
    path: "/page1/DetailA",
    childern: <Page1DetailA />
  },
  {
    path: "/page1/DetailB",
    childern: <Page1DetailB />
  }
];
