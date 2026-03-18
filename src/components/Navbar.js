import { useState } from "react";
import { FaYoutube } from "react-icons/fa";

function Navbar({ onSearch }) {

  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() !== "") {
      onSearch(input);
    }
  };

  return (

    <div style={{
      padding: "10px 20px",
      background: "#202020",
      display: "flex",
      alignItems: "center",
      gap: "20px"
    }}>

      {/* 🔴 LOGO */}
      <div style={{
        display:"flex",
        alignItems:"center",
        fontSize:"20px",
        fontWeight:"bold",
        color:"white"
      }}>
        <FaYoutube color="red" size={28} />
        <span style={{ marginLeft:"8px" }}>
          ManojTube
        </span>
      </div>

      {/* 🔍 SEARCH */}
      <div style={{ display:"flex", flex:1 }}>

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e)=>{
            if(e.key==="Enter") handleSearch();
          }}
          placeholder="Search"
          style={{
            flex:1,
            padding:"8px",
            border:"none",
            outline:"none"
          }}
        />

        <button onClick={handleSearch}>
          Search
        </button>

      </div>

    </div>

  );

}

export default Navbar;