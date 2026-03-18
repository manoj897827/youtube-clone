function VideoCard({ video, onSelect }) {

  if (!video || !video.id || !video.id.videoId) return null;

  return (

    <div
      onClick={() => onSelect(video)}
      style={{
  cursor:"pointer",
  color:"white",
  transition:"transform 0.2s"
}}
onMouseEnter={e => e.currentTarget.style.transform="scale(1.05)"}
onMouseLeave={e => e.currentTarget.style.transform="scale(1)"}
    >

      <img
        src={video.snippet.thumbnails.medium.url}
        alt="thumbnail"
        style={{
          width: "100%",
          borderRadius: "8px",
          aspectRatio: "16/9"
        }}
      />

      <h4>{video.snippet.title}</h4>

      <p style={{ color:"#aaa" }}>
        {video.snippet.channelTitle}
      </p>

      {/* ✅ ADD THIS LINE HERE */}
      <p style={{ color:"#aaa", fontSize:"12px" }}>
        {new Date(video.snippet.publishedAt).toDateString()}
      </p>

    </div>

  );

}

export default VideoCard;