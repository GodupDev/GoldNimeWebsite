import blankVideo from "../assets/images/blankVideo.png";
import { Image } from "antd";
import Card from "../components/ui/Card";

const itemStyle = {
  display: "flex",
  alignItems: "flex-start",
};

const labelStyle = {
  color: "white",
  fontWeight: "bold",
  width: "80px",
  marginRight: "10px",
};

const valueStyle = {
  color: "#5d626a",
};

const InfoItem = ({ label, value }) => (
  <div style={itemStyle}>
    <p style={labelStyle}>{label}</p>
    <p style={valueStyle}>{value}</p>
  </div>
);
const AnimeDetail = (props) => {
  const currentFilm = props.currentFilm;
  console.log(currentFilm);
  return (
    <div style={{ padding: "0 40px", display: "flex", gap: "20px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "60%",
          alignItems: "flex-start", // Align items to the left
          boxSizing: "border-box", // Include padding and border in width
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "32px",
            fontWeight: "initial",
            margin: 0,
            paddingBottom: "30px",
          }}
        >
          {currentFilm.movieName} - Episode {currentFilm.episode}
        </h1>
        <Image src={blankVideo} preview={false} style={{ width: "100%" }} />
        <div style={{ paddingTop: "30px", display: "flex" }}>
          <div width="300px">
            <Card image={currentFilm.image} justImage={true} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "20px",
              paddingTop: 0,
            }}
          >
            <InfoItem label="Type:" value="Tv" />
            <InfoItem label="Status :" value="Ongoing" />
            <InfoItem label="Studios" value="Toei Animation" />
            <InfoItem label="Duration" value="24 Min" />
            <InfoItem label="Genres" value="Action, Adventure, Fantasy" />
          </div>
        </div>
        <div>
          <p
            style={{ color: "white", fontWeight: "bold", margin: "20px 0 0 0" }}
          >
            Sypnosis:
          </p>
          <p
            style={{
              color: "#5d626a",
              margin: "10px 0 0 0",
              textAlign: "justify",
            }}
          >
            {currentFilm.description}
          </p>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "flex-start", // Align items to the left
            boxSizing: "border-box", // Include padding and border in width
          }}
        >
          {" "}
          <h1
            style={{
              color: "white",
              fontSize: "32px",
              fontWeight: "initial",
              margin: 0,
              paddingBottom: "30px",
            }}
          >
            Popular Anime
          </h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
            }}
          >
            {props.listFilm
              .filter((film) => film.id !== currentFilm.id)
              .map((film) => (
                <div
                  style={{
                    width: "200px",
                    height: "300px",
                  }}
                >
                  <Card
                    key={film.id}
                    image={film.image}
                    justImage={true}
                    setCurrentFilm={props.setCurrentFilm}
                    film={film}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;
