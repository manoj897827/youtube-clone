import React, { useEffect, useState } from "react";
import youtube from "../api/youtube";
import VideoCard from "../components/VideoCard";
import VideoPlayer from "../components/VideoPlayer";

function Home({ searchTerm }) {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {

    const fetchVideos = async () => {

      try {

        const response = await youtube.get("/search", {
          params: {
            part: "snippet",
            q: searchTerm,
            maxResults: 12,
            type: "video",
            key: process.env.REACT_APP_YOUTUBE_API_KEY
          }
        });

        setVideos(response.data.items);

      } catch (error) {
        console.log("API ERROR:", error);
      }

    };

    fetchVideos();

  }, [searchTerm]);



  return (

    <div style={{ background: "#0f0f0f", minHeight: "100vh" }}>

      {selectedVideo && (
        <VideoPlayer
          video={selectedVideo}
          onBack={() => setSelectedVideo(null)}
        />
      )}

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
        gap: "20px",
        padding: "20px"
      }}>

        {videos.map(video => (
          <VideoCard
            key={video.id.videoId}
            video={video}
            onSelect={setSelectedVideo}
          />
        ))}

      </div>

    </div>

  );

}

export default Home;