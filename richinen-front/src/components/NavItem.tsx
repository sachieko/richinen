import { Link, useLocation } from "react-router-dom";

export type NavItemProps = {
  id: number;
  path: string;
  text: string;
  linkClass: string;
};

const NavItem = ({ id, path, text, linkClass}: NavItemProps) => {
  let location = useLocation();
  return (
    <Link key={id} to={path} className={location.pathname === path ? `selectedNavLink  ${linkClass}` : `navLink  ${linkClass}`} >
      <div className={"centerText"}>{text}</div>
    </Link>
  );
};

export default NavItem;
