import "./App.scss";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import NewEducation from "./pages/NewEducation";
import EditEducation from "./pages/EditEducation";
import NewLanguages from "./pages/newLanguages";
import NewHabilities from "./pages/newHabilities";
import EditHabilities from "./pages/EditHabilities"
import EditLanguages from "./pages/EditLanguages";
import NewExperience from "./pages/NewExperience";
import EditExperience from "./pages/EditExperience";
import EditHero from "./pages/EditHero";



function App() {
  return (
    <div className="app">
      <Router>
        <nav>
          <NavLink  to="/">HOME</NavLink>
          <NavLink  to="/newEducation">EDUCATION</NavLink>
          <NavLink  to="/newExperience">EXPERIENCES</NavLink>
          <NavLink to="/newLanguages">LANGUAGES</NavLink>
          <NavLink to="/newHabilities">SKILLS</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newEducation" element={<NewEducation />} />
          <Route path="/editEducation/:id" element={<EditEducation />} />
          <Route path="/newExperience" element={<NewExperience />} />
          <Route path="/editExperience/:id" element={<EditExperience />} />
          <Route path="/newLanguages" element={<NewLanguages />} />
          <Route path="/editLanguages/:id" element={<EditLanguages />} />
          <Route path="/newHabilities" element={<NewHabilities />} />
          <Route path="/editHabilities/:id" element={<EditHabilities />} />
          <Route path="/editHero/:id" element={<EditHero />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
