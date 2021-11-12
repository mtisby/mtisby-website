import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import ResumePg from "./pages/Resume";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/contactme" element={<ContactMe />} />
      <Route path="/resume" element={<ResumePg />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

