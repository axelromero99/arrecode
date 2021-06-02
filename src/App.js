
import React, { useState, useEffect } from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import Projects from "./components/pages/Projects/Projects";
import AboutMe from "./components/pages/AboutMe/AboutMe";
import ContactMe from "./components/pages/ContactMe/ContactMe";
import Footer from "./components/pages/Footer/Footer";

import BeatLoader from "react-spinners/BeatLoader";

import { HashRouter } from 'react-router-dom'

library.add(fab, faCheckSquare, faCoffee);

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <BeatLoader size={30} color={"black"} loading={loading} />
        </div>
      ) : (
        <HashRouter>
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Projects"  component={Projects} />
            <Route path="/AboutMe"  component={AboutMe} />
            <Route path="/ContactMe"  component={ContactMe} />
          </Switch>
          <Footer />
        </HashRouter>
      )}
    </>
  );
}

export default App;
