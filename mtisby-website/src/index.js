import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./Home";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/contactme" element={<ContactMe />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

