import { useParams } from "react-router-dom";

function Watch() {

  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>

      <iframe
        width="800"
        height="450"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allowFullScreen
      ></iframe>

    </div>
  );
}

export default Watch;