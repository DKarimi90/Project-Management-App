
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import ProjectsList from "./components/ProjectsList";
import AddNewProject from "./components/AddNewProject";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element = {<LandingPage />}/>
          <Route path="/projectsList" element = {<ProjectsList />}/>
          <Route path="/add-new-project" element = {<AddNewProject/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
