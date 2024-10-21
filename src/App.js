// import Navbar from "./Navbar"
// import Sidebar from "./SiteBar"
// import Pricing from "./pages/Pricing"
// import Home from "./pages/Home"
// import About from "./pages/About"
// import { Route, Routes } from "react-router-dom"
// import Classes from "./pages/Classes"
// import MarkdownPage from './MarkdownPage';
// import Technologies from './pages/Technologies';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/classes" element={<Classes />} />
//           <Route path="/sth" element={<Home />} />
//           <Route path="/pricing" element={<Pricing />} />
//           <Route path="/about" element={<About />} />
//           {/* Now we handle markdown files with a dynamic route */}
//           <Route path="/classes/:markdownName" element={<MarkdownPage />} /> {/* Dynamic route */}
//           <Route path="/technologies" element={<Technologies />} /> {/* Technologies page */}
//         </Routes>
//       </div>
//     </>
//   )
// }

// export default App


import React from "react";
import Sidebar from "./SiteBar"; // Upewnij się, że ścieżka jest poprawna
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Classes from "./pages/Classes";
import MarkdownPage from "./MarkdownPage";
import Technologies from "./pages/Technologies";
import './SiteBar.css';

function App() {
  return (
    <>
      <Sidebar />
      <div className="home-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/sth" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          {/* Dynamic route for markdown files */}
          <Route path="/classes/:markdownName" element={<MarkdownPage />} />
          <Route path="/technologies" element={<Technologies />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
