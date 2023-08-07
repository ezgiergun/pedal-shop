import { NavLink } from "react-router-dom";

function SupportNav() {
  return (
    <nav className="grid h-9 grid-cols-2 grid-rows-1 items-center gap-40 bg-zinc-950 text-neutral-100">
      <div className="flex gap-3">
        <span className="ml-10 rounded-sm bg-blue-400 p-1 text-xs font-semibold text-zinc-950">
          Free Shipping
        </span>
        <span className="mt-1 text-xs">
          Free 3 Day domestic shipping on orders $50 and up!
        </span>
      </div>
      <div>
        <ul className="mr-5 flex items-center justify-end gap-3 text-xs ">
          <li>
            <NavLink to="/locator"> Find a Dealer </NavLink>
          </li>
          <li>
            <NavLink to="/support"> Get Support </NavLink>
          </li>
          |
          <li className=" font-semibold">
            <NavLink to="/login"> Sign In </NavLink>
          </li>
          or
          <li className=" font-semibold">
            <NavLink to="/register"> Register </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SupportNav;
