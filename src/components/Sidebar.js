import { useState } from "react";
import { FaHome, FaMusic, FaGamepad, FaLaptop } from "react-icons/fa";

function Sidebar({ onCategorySelect }) {
  const [active, setActive] = useState("trending");

  const handleClick = (category) => {
    setActive(category);
    onCategorySelect(category);
  };

  const baseStyle = {
    padding: "12px 15px",
    cursor: "pointer",
    color: "white",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    transition: "0.2s",
  };

  const getStyle = (category) => ({
    ...baseStyle,
    background: active === category ? "#303030" : "transparent",
  });

  return (
    <div
      style={{
        width: "200px",
        maxWidth: "100%",
        background: "#181818",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {/* HOME */}
      <div
        style={getStyle("trending")}
        onClick={() => handleClick("trending")}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#303030")}
        onMouseLeave={(e) =>
          (e.currentTarget.style.background =
            active === "trending" ? "#303030" : "transparent")
        }
      >
        <FaHome /> Home
      </div>

      {/* MUSIC */}
      <div
        style={getStyle("music")}
        onClick={() => handleClick("music")}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#303030")}
        onMouseLeave={(e) =>
          (e.currentTarget.style.background =
            active === "music" ? "#303030" : "transparent")
        }
      >
        <FaMusic /> Music
      </div>

      {/* GAMING */}
      <div
        style={getStyle("gaming")}
        onClick={() => handleClick("gaming")}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#303030")}
        onMouseLeave={(e) =>
          (e.currentTarget.style.background =
            active === "gaming" ? "#303030" : "transparent")
        }
      >
        <FaGamepad /> Gaming
      </div>

      {/* TECHNOLOGY */}
      <div
        style={getStyle("technology")}
        onClick={() => handleClick("technology")}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#303030")}
        onMouseLeave={(e) =>
          (e.currentTarget.style.background =
            active === "technology" ? "#303030" : "transparent")
        }
      >
        <FaLaptop /> Technology
      </div>
    </div>
  );
}

export default Sidebar;