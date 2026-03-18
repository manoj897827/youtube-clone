import { useState, useEffect } from "react";
import { FaYoutube } from "react-icons/fa";

function Navbar({ onSearch }) {
  const [input, setInput] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearch = () => {
    if (input.trim() !== "") {
      onSearch(input);
    }
  };

  return (
    <div
      style={{
        padding: isMobile ? "8px 10px" : "10px 20px",
        background: "#202020",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        gap: isMobile ? "10px" : "20px",
      }}
    >
      {/* 🔴 LOGO */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: isMobile ? "18px" : "20px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        <FaYoutube color="red" size={isMobile ? 24 : 28} />
        <span style={{ marginLeft: "8px" }}>ManojTube</span>
      </div>

      {/* 🔍 SEARCH */}
      <div style={{ display: "flex", flex: 1, width: "100%" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          placeholder="Search"
          style={{
            flex: 1,
            padding: isMobile ? "8px" : "8px",
            border: "none",
            outline: "none",
            fontSize: isMobile ? "16px" : "14px",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: isMobile ? "8px 12px" : "6px 12px",
            fontSize: isMobile ? "16px" : "14px",
            marginLeft: "5px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Navbar;