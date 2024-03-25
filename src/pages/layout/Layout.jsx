import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";


const Layout = ({ children }) => {
  return (
    <div className=" h-screen">
      <Header />
      <Outlet context={children} />
    </div>
  );
};

export default Layout;
