function VideoPlayer({ video, onBack }) {

  if (!video || !video.id || !video.id.videoId) return null;

  const videoId = video.id.videoId;

  return (

    <div style={{ padding: "20px", color: "white" }}>

      <button onClick={onBack}>Back</button>

      <iframe
        width="100%"
        height="450"
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
      ></iframe>

    </div>

  );

}

export default VideoPlayer;
