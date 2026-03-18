import React, { useEffect, useState } from "react";
import youtube from "../api/youtube";

function RecommendedVideos() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {

    const fetchVideos = async () => {
      try {

        const response = await youtube.get("/search", {
          params: {
            q: "technology"
          }
        });

        setVideos(response.data.items);

      } catch (error) {
        console.log(error);
      }
    };

    fetchVideos();

  }, []);

  return (

    <div style={{
      width: "350px",
      padding: "20px",
      background: "#0f0f0f",
      color: "white"
    }}>

      <h3>Recommended</h3>

      {videos.map((video) => {

        if (!video.id.videoId) return null;

        return (

          <div key={video.id.videoId} style={{ marginBottom: "15px" }}>

            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >

              <img
                src={video.snippet.thumbnails.medium.url}
                alt="thumb"
                style={{ width: "100%" }}
              />

              <p>{video.snippet.title}</p>

            </a>

          </div>

        );

      })}

    </div>

  );

}

export default RecommendedVideos;