import React, { useEffect, useState } from "react";
import youtube from "../api/youtube";
import VideoCard from "../components/VideoCard";
import VideoPlayer from "../components/VideoPlayer";

function Home({ searchTerm }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // 🔥 Fetch videos based ONLY on user search
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await youtube.get("/search", {
          params: {
            part: "snippet",
            maxResults: 12,
            q: searchTerm, // ✅ exact search
            type: "video",
            key: "AIzaSyAMMXD_MJHaYERGPeNzo301Mr0TCNGVGgE",
          },
        });

        setVideos(response.data.items || []);
      } catch (error) {
        console.log("API ERROR:", error);
      }
    };

    fetchVideos();
  }, [searchTerm]);

  return (
    <div style={{ background: "#0f0f0f", minHeight: "100vh" }}>
      
      {/* 🎬 Video Player */}
      {selectedVideo && (
        <VideoPlayer
          video={selectedVideo}
          onBack={() => setSelectedVideo(null)}
        />
      )}

      {/* 📺 Video Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {videos.map((video) => {
          if (!video.id.videoId) return null;

          return (
            <VideoCard
              key={video.id.videoId}
              video={video}
              onSelect={setSelectedVideo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;