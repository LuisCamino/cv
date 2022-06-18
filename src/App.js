import "./App.css";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import NewEducation from "./pages/NewEducation";
import EditEducation from "./pages/EditEducation";
import NewLanguages from "./pages/newLanguages";
import NewHabilities from "./pages/newHabilities";
import EditHabilities from "./pages/EditHabilities"
import EditLanguages from "./pages/EditLanguages";
import NewExperience from "./pages/NewExperience";


function App() {
  return (
    <div className="app">
      <Router>
        <nav>
          <NavLink  to="/">Home</NavLink>
          <NavLink  to="/newEducation">New education</NavLink>
          <NavLink  to="/newExperience">New expererience</NavLink>
          <NavLink to="/newLanguages">New languages</NavLink>
          <NavLink to="/newHabilities">New habilities</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newEducation" element={<NewEducation />} />
          <Route path="/editEducation/:id" element={<EditEducation />} />
          <Route path="/newExperience" element={<NewExperience />} />
          <Route path="/newLanguages" element={<NewLanguages />} />
          <Route path="/editLanguages/:id" element={<EditLanguages />} />
          <Route path="/newHabilities" element={<NewHabilities />} />
          <Route path="/editHabilities/:id" element={<EditHabilities />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
