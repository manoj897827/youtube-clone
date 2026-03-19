import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  const [searchTerm, setSearchTerm] = useState(() => {
    // Load last search from localStorage or default to trending
    return localStorage.getItem("lastSearch") || "trending";
  });
  const [isMobile, setIsMobile] = useState(false);

  // Detect if screen is mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Save last search term to localStorage
  const handleSearch = (term) => {
    setSearchTerm(term);
    localStorage.setItem("lastSearch", term);

    // Save full history as array
    let history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    if (!history.includes(term)) {
      history.unshift(term);
      if (history.length > 10) history.pop(); // Keep last 10 searches
      localStorage.setItem("searchHistory", JSON.stringify(history));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        minHeight: "100vh",
      }}
    >
      {!isMobile && <Sidebar onCategorySelect={handleSearch} />}

      <div style={{ flex: 1 }}>
        <Navbar onSearch={handleSearch} />
        <Home searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;