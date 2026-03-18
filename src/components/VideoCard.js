function VideoCard({ video, onSelect }) {
  if (!video || !video.id || !video.id.videoId) return null;

  const isMobile = window.innerWidth <= 768;

  return (
    <div
      onClick={() => onSelect(video)}
      style={{
        cursor: "pointer",
        color: "white",
        transition: "transform 0.2s",
        marginBottom: "15px",
      }}
      onMouseEnter={e => {
        if (!isMobile) e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseLeave={e => {
        if (!isMobile) e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        style={{
          width: "100%",
          borderRadius: "8px",
          aspectRatio: "16/9",
        }}
      />

      <h4 style={{ fontSize: isMobile ? "14px" : "16px", margin: "5px 0 3px 0" }}>
        {video.snippet.title}
      </h4>

      <p style={{ color: "#aaa", fontSize: isMobile ? "12px" : "14px", margin: "0" }}>
        {video.snippet.channelTitle}
      </p>

      <p style={{ color: "#aaa", fontSize: isMobile ? "10px" : "12px", margin: "0" }}>
        {new Date(video.snippet.publishedAt).toDateString()}
      </p>
    </div>
  );
}

export default VideoCard;