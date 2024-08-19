import BannerNav from "./components/BannerNav";
import { Outlet } from "react-router";

const App = () => {

  return (
    <>
      <BannerNav />
      <Outlet />
    </>
  );
};

export default App;
