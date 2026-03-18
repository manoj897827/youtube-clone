import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  const [searchTerm, setSearchTerm] = useState("trending");
  const [isMobile, setIsMobile] = useState(false);

  // Detect if screen is mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        minHeight: "100vh",
      }}
    >
      {/* Show Sidebar only on desktop */}
      {!isMobile && <Sidebar onCategorySelect={setSearchTerm} />}

      <div style={{ flex: 1 }}>
        <Navbar onSearch={setSearchTerm} />
        <Home searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;