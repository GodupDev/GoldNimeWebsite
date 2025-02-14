import SearchBar from "./components/ui/SearchBar";
import "./App.css";
import Header from "./components/layout/Header";
import HomePage from "./pages/Home";
import { listFilm } from "./data";
import AnimeDetail from "./pages/AnimeDetail";
import { useState } from "react";

function App() {
  const [currentFilm, setCurrentFilm] = useState("None");

  return (
    <div style={{ padding: "0 40px" }}>
      <Header setCurrentFilm={setCurrentFilm} />
      {currentFilm === "None" ? (
        <HomePage
          listFilm={listFilm}
          currentFilm={currentFilm}
          setCurrentFilm={setCurrentFilm}
        />
      ) : (
        <AnimeDetail
          listFilm={listFilm}
          currentFilm={currentFilm}
          setCurrentFilm={setCurrentFilm}
        />
      )}
    </div>
  );
}

export default App;
