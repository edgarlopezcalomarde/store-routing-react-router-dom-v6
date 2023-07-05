import { NavLink } from "react-router-dom";
import { routes } from "../helpers/routes";

function Nav() {
  return (
    <nav className="p-4 flex">
      <ul className="flex gap-2 w-[90rem] m-auto">
        {routes.map(({ label, path }) => (
          <li key={path} className={path === routes[3].path ? "ml-auto" : ""}>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "font-bold scale-105"
                  : isPending
                  ? "underline"
                  : "text-gray-400"
              }
              to={path}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
