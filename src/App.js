import React, { Fragment } from "react";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/sevices/Services";
import Blue from "./pages/blueSection/Blue";
import Articles from "./pages/articles/Articles";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <About/>
      <Services/>
      <Blue/>
      <Articles/>
      <Contact/>
      <Footer/>
    </Fragment>
  );
}

export default App;
