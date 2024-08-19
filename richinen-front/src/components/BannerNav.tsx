import NavItem from "./NavItem";
import "./BannerNav.scss";

const BannerNav = () => {
  return (
    <div className="Nav">
      <NavItem id={1} path="/" text="Home" linkClass="homeLink" />
      <NavItem id={2} path="/menu" text="Menu" linkClass="menuLink" />
      <NavItem id={3} path="/contact" text="Contact" linkClass="contactLink" />
    </div>
  );
};

export default BannerNav;
