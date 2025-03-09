import * as React from "react";
import DashBoard from "./DashBaord";
import Profile from "./Profile";
import MenuBar from "../component/MenuBar";
import { Context } from "../contexts/mainContext";
import { PAGES } from "../utils/Enums";



export default function Main() {
  const [page, setPage] = React.useState(PAGES.DASHBOARD);

  return (
    <Context.Provider value={{ page, setPage }}>
      <div className="main-container">
        <div className="menubar-area">
          <MenuBar />
        </div>

        <div className="pages-area">
          {page === PAGES.DASHBOARD && <DashBoard />}
          {page === PAGES.PROFILE && <Profile />}
        </div>
      </div>
    </Context.Provider>
  );
}
