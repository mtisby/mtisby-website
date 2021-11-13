import { render } from "react-dom";
import { HashRouter, Routes,Route } from 'react-router-dom';
import App from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import ResumePg from "./pages/Resume";


const rootElement = document.getElementById("root");
render(
    <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/resume" element={<ResumePg />} />
        </Routes>
    </HashRouter>,
  rootElement
    
);

/* <HashRouter basename="/calendar"/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/resume" element={<ResumePg />} />
    </Routes>,
  rootElement */