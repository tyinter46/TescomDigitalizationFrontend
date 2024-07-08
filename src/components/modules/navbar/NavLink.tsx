import { Link, useLocation } from "react-router-dom";
import type { ReactNode } from "react";

interface Props {
  to: string;
  children: ReactNode;
}

const NavLink = ({ to, children }: Props) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={to}
      className={`${
        pathname === to ? "hidden text-primary" : "text-green hover:text-white"
      } pb-px px-1`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
