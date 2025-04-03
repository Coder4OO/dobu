import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import "./App.css";

import Home from "./Home.jsx";
import About from "./About.jsx";
import OurStaff from "./OurStaff.jsx";
import ContactUs from "./ContactUs.jsx";
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";

import LightLogo from "./assets/DobuLightLogo.png";
import DarkLogo from "./assets/DobuDarkLogo.png";

let logo = LightLogo;

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function App() {
  const [currentPage, setPage] = useState(getCookie("currentPage") || "Home");
  const [currentTheme, setTheme] = useState(
    getCookie("favouriteTheme") || "light"
  );
  document.cookie = "favouriteTheme=" + currentTheme;
  document.cookie = "currentPage=" + currentPage;

  const updatePage = (page) => setPage(page);

  const updateTheme = () =>
    setTheme(currentTheme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.style.backgroundColor =
      currentTheme === "dark" ? "rgb(50, 50, 50)" : "rgb(240, 240, 240)";
    document.title = currentPage;
  }, [currentTheme, currentPage]);

  const determineContent = (page) => {
    const contentMap = {
      Home: <Home currentTheme={currentTheme} />,
      About: <About currentTheme={currentTheme} />,
      "Our Staff": <OurStaff currentTheme={currentTheme} />,
      "Contact Us": <ContactUs currentTheme={currentTheme} />,
      Login: <Login currentTheme={currentTheme} />,
      "Sign Up": <SignUp currentTheme={currentTheme} />,
    };
    return contentMap[page] || null;
  };

  const logo = currentTheme === "light" ? LightLogo : DarkLogo;

  return (
    <>
      <Navbar
        expand="lg"
        data-bs-theme={currentTheme}
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand>
            <img
              className="logo"
              onClick={() => updatePage("Home")}
              src={logo}
              alt="Logo"
            />
            {getCookie("username") && (
              <div className="greeting">
                Hello, {getCookie("username") + "!"}
              </div>
            )}
            Dobu Martial Arts
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {[
                "Home",
                "About",
                "Our Staff",
                "Contact Us",
                "Login",
                "Sign Up",
              ].map((page) => (
                <Nav.Link key={page} onClick={() => updatePage(page)}>
                  {page.replace(/([A-Z])/g, " $1").trim()}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="home-title">
        <h1 className={currentTheme === "dark" ? "dark-text" : "light-text"}>
          Dobu Martial Arts
        </h1>
      </div>
      <Button
        className="change-theme"
        onClick={updateTheme}
        variant={currentTheme === "light" ? "dark" : "light"}
      >
        {currentTheme === "light" ? "Dark Theme" : "Light Theme"}
      </Button>
      {determineContent(currentPage)}
    </>
  );
}

export default App;
