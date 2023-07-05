import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function Layout() {
  return (
    <main>
      <Nav />
      <div className="w-full p-4 2xl:p-0 2xl:w-[90rem] m-auto">
        <Outlet />
      </div>
    </main>
  );
}

export default Layout;
