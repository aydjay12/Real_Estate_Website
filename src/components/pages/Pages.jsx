import Header from "../common/header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../common/footer/Footer";
import AnimatedRoutes from "./AnimatedRoutes";

const Pages = () => {
  return (
    <>
      <Router basename="/Real_Estate_Website">
        <Header />
        <AnimatedRoutes></AnimatedRoutes>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
