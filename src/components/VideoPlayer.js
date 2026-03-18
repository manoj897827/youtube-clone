import { useState, useEffect } from "react";

function VideoPlayer({ video, onBack }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!video || !video.id || !video.id.videoId) return null;

  const videoId = video.id.videoId;

  return (
    <div
      style={{
        padding: isMobile ? "10px" : "20px",
        color: "white",
      }}
    >
      <button
        onClick={onBack}
        style={{
          padding: isMobile ? "10px 12px" : "8px 16px",
          fontSize: isMobile ? "16px" : "14px",
          marginBottom: "10px",
          cursor: "pointer",
        }}
      >
        Back
      </button>

      <div
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "56.25%", // 16:9 aspect ratio
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
          title="video-player"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
        ></iframe>
      </div>
    </div>
  );
}

export default VideoPlayer;