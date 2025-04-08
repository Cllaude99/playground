import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="mx-auto my-0 max-w-[480px] h-screen">
      <Outlet />
    </div>
  );
}
