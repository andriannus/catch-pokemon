import MainRoutes from "pages/main.routes";
import Navbar from "shared/components/navbar";

const Main = () => {
  return (
    <>
      <Navbar />

      <div id="Main" className="container has-background-white">
        <MainRoutes />
      </div>
    </>
  );
};

export default Main;
