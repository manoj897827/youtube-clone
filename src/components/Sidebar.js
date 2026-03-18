function Sidebar({ onCategorySelect }) {

  const style = {
    padding: "12px 10px",   // slightly bigger for mobile taps
    cursor: "pointer",
    color: "white",
    fontSize: "16px"
  };

  return (
    <div
      style={{
        width: "200px",
        maxWidth: "100%",
        background: "#181818",
        minHeight: "100vh",  // full height of screen
        boxSizing: "border-box"
      }}
    >
      <div style={style} onClick={() => onCategorySelect("trending")}>
        Home
      </div>

      <div style={style} onClick={() => onCategorySelect("music")}>
        Music
      </div>

      <div style={style} onClick={() => onCategorySelect("gaming")}>
        Gaming
      </div>

      <div style={style} onClick={() => onCategorySelect("technology")}>
        Technology
      </div>
    </div>
  );
}

export default Sidebar;