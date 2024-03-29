import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import Home from "./pages/Home";
import Projects from "./pages/Projects";
// import Project from "./pages/Project";
import Contacts from "./pages/Contacts";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* <Route path="/portfolio-alex-kultin/" element={<Home />} /> */}
          <Route path="/portfolio-alex-kultin/" element={<Projects />} />
          {/* <Route path="/portfolio-alex-kultin/project/:id" element={<Project />} /> */}
          <Route path="/portfolio-alex-kultin/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;