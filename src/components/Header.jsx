import { NavLink } from "react-router";
import Button from "./Button.jsx";
export default function Header() {
  return (
    <header className="bg-[#65C8EF] text-white w-full h-24 border-b-4 border-[#2271d1] sticky top-0 z-50">
      <nav className="flex justify-between items-center w-full h-full px-10">
        <div>
          <img src="./Logo.svg" alt="Logo" className="h-10" />
        </div>
        <div className="flex gap-4">
          <NavLink to="/">
            <Button text="HOME" />
          </NavLink>
          <NavLink to="/create-video">
            <Button text="NUEVO VIDEO" />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
