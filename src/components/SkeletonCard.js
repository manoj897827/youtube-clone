function SkeletonCard() {
  const isMobile = window.innerWidth <= 768;

  return (
    <div
      style={{
        width: "100%",
        maxWidth: isMobile ? "100%" : "300px",
        margin: "10px auto",
        background: "#202020",
        height: isMobile ? "150px" : "200px",
        borderRadius: "8px",
        animation: "pulse 1.5s infinite",
      }}
    ></div>
  );
}

export default SkeletonCard;