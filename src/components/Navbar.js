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
    const term = input.trim();
    if (term !== "") {
      const history =
        JSON.parse(localStorage.getItem("searchHistory")) || [];

      history.push(term);
      localStorage.setItem("searchHistory", JSON.stringify(history));

      onSearch(term);
      setInput("");
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
      <div style={{ display: "flex", alignItems: "center", color: "white" }}>
        <FaYoutube color="red" size={24} />
        <span style={{ marginLeft: "8px" }}>ManojTube</span>
      </div>

      <div style={{ display: "flex", flex: 1, width: "100%" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search"
          style={{ flex: 1, padding: "8px" }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default Navbar;