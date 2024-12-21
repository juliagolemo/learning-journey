import React from "react";
import Sidebar from "./components/SideBar";
import Home from "./pages/Home";
import About from "./pages/About";
import HomeRedirect from "./hooks/HomeRedirect";
import NavigationTracker from './hooks/NavigationTracker';
import { Route, Routes } from "react-router-dom";
import Tutorial from "./pages/Tutorial";
import MarkdownPage from "./pages/MarkdownPage";
import Technologies from "./pages/Technologies";
import Excel from "./pages/skill_pages/Excel";
import Azure from "./pages/skill_pages/Azure";
import Git from "./pages/skill_pages/Git";
import GoLang from "./pages/skill_pages/GoLang";
import German from "./pages/skill_pages/German";
import WebDevelopment from "./pages/skill_pages/WebDevelopment";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <>
      <Sidebar />
      <NavigationTracker />
      <div className="home-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/about" element={<About />} />
          <Route path="/home/:company" element={<HomeRedirect />} />
          {/* Dynamic route for markdown files */}
          <Route path="/classes/:markdownName" element={<MarkdownPage />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          <Route path="/technologies/excel" element={<Excel />} />
          <Route path="/technologies/azure" element={<Azure />} />
          <Route path="/technologies/git" element={<Git />} />
          <Route path="/technologies/golang" element={<GoLang />} />
          <Route path="/technologies/german" element={<German />} />
          <Route path="/technologies/webdevelopment" element={<WebDevelopment />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
