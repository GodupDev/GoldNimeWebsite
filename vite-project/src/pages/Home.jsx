import spyThumbnail from "../assets/images/thumbnails/spy-thumbnail.png";
import Thumbnail from "../components/ui/Thumbnail";
import Card from "../components/ui/Card";

const HomePage = (props) => {
  return (
    <div style={{ padding: "0 40px" }}>
      <div>
        <h1
          style={{
            color: "white",
            fontSize: "32px",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          Explore
        </h1>
        <p
          style={{
            color: "#5d626a",
            fontSize: "22px",
            margin: 0,
            paddingBottom: "15px",
          }}
        >
          What are you gonna watch today?
        </p>
      </div>
      <div onClick={() => props.setCurrentFilm(props.listFilm[3])}>
        <Thumbnail image={spyThumbnail} />
      </div>
      <div>
        <h2
          style={{
            color: "white",
            fontSize: "32px",
            fontWeight: "bold",
            margin: "30px 0 15px 0 ",
          }}
        >
          New Release
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        {props.listFilm.slice(0, 6).map((film) => (
          <div
            style={{
              width: "200px",
              height: "300px",
            }}
          >
            <Card
              justImage={false}
              image={film.image}
              film={film}
              setCurrentFilm={props.setCurrentFilm}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
