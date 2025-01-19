import { NavLink, Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div>
      <h1>Layout</h1>
      <nav className="flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create-video">Create Video</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
