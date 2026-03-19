import React, { useEffect, useState } from "react";
import youtube from "../api/youtube";

function RecommendedVideos() {
  const [videos, setVideos] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // 📱 Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const history = JSON.parse(localStorage.getItem("searchHistory")) || [];

        let queries = [];

        if (history.length > 0) {
          // 🔥 Count frequency of search terms
          const freqMap = {};
          history.forEach(term => {
            freqMap[term] = (freqMap[term] || 0) + 1;
          });

          // 🔥 Sort by most frequent
          queries = Object.keys(freqMap)
            .sort((a, b) => freqMap[b] - freqMap[a])
            .slice(0, 3); // top 3 searches
        } else {
          queries = ["trending"];
        }

        let combinedVideos = [];

        // 🔥 Fetch videos for each top query
        for (let term of queries) {
          const response = await youtube.get("/search", {
            params: {
              part: "snippet",
              q: term,
              maxResults: 4,
              type: "video",
              key: process.env.REACT_APP_YOUTUBE_API_KEY
            }
          });

          combinedVideos = [...combinedVideos, ...response.data.items];
        }

        setVideos(combinedVideos);

      } catch (error) {
        console.log("API ERROR:", error);
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
        gridTemplateColumns: isMobile
          ? "1fr"
          : "repeat(auto-fill, minmax(250px, 1fr))",
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