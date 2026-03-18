import React, { useEffect, useState } from "react";
import youtube from "../api/youtube";

function RecommendedVideos() {
  const [videos, setVideos] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await youtube.get("/search", {
          params: { q: "technology" },
        });
        setVideos(response.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "10px",
        background: "#0f0f0f",
        color: "white",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "15px",
      }}
    >
      {videos.map((video) => {
        if (!video.id.videoId) return null;
        return (
          <a
            key={video.id.videoId}
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              style={{ width: "100%", borderRadius: "6px" }}
            />
            <p style={{ marginTop: "5px", fontSize: isMobile ? "14px" : "16px" }}>
              {video.snippet.title}
            </p>
          </a>
        );
      })}
    </div>
  );
}

export default RecommendedVideos;