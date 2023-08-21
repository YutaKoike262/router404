import { Children } from "react";
import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const Page2Routes = [
  {
    path: "/page2",
    childern: <Page2 />
  },
  {
    path: "/page2/:id",
    childern: <UrlParameter />
  }
];
