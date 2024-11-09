import React from "react";
import Sidebar from "./SiteBar";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import About from "./pages/About";
import HomeRedirect from "./pages/HomeRedirect";
import NavigationTracker from './pages/NavigationTracker';
import { Route, Routes } from "react-router-dom";
import Tutorial from "./pages/Tutorial";
import MarkdownPage from "./MarkdownPage";
import Technologies from "./pages/Technologies";
import './SiteBar.css';
import Excel from "./pages/skill_pages/Excel";
import Azure from "./pages/skill_pages/Azure";
import Git from "./pages/skill_pages/Git";
import GoLang from "./pages/skill_pages/GoLang";
import German from "./pages/skill_pages/German";
import WebDevelopment from "./pages/skill_pages/WebDevelopment";

function App() {
  return (
    <>
      <Sidebar />
      <NavigationTracker />
      <div className="home-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/home/:company" element={<HomeRedirect />} />
          {/* Dynamic route for markdown files */}
          <Route path="/classes/:markdownName" element={<MarkdownPage />} />
          <Route path="/technologies" element={<Technologies />} />
          
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
