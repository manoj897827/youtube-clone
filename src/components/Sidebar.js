function Sidebar({ onCategorySelect }) {

  const style = {
    padding: "10px",
    cursor: "pointer",
    color: "white"
  };

  return (

    <div style={{
      width: "200px",
      background: "#181818"
    }}>

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