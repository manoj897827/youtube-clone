const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());

const API_KEY = "AIzaSyANyn_nV-HvaMeOb7vJx_la2VyUElSVGGg";

app.get("/videos", async (req, res) => {

  try {

    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/videos",
      {
        params: {
          part: "snippet,statistics",
          chart: "mostPopular",
          maxResults: 12,
          key: API_KEY
        }
      }
    );

    res.json(response.data);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "API error" });
  }

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});