import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page2 } from "../Page2";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
import { Route, Routes } from "react-router-dom";
import "../styles.css";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";
import { Page404 } from "./Page404";
export const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/page1">
        {Page1Routes.map((ele) => {
          return <Route index path={ele.path} element={ele.childern} />;
        })}
      </Route>
      <Route path="/page2">
        {Page2Routes.map((ele) => {
          return <Route index path={ele.path} element={ele.childern} />;
        })}
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
