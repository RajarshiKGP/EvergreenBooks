import React from "react";
import MainPage from "./MainPage";
import Navbar from "./navbar";
import DetectiveStories from "./DetectiveStories";
import HorrorStories from "./HorrorStories";
import RomanticPoems from "./RomanticPoems";
import RomanticStories from "./RomanticStories";
import TextBooksEngineering from "./TextBooksEngineering";
import TextBooksCommerce from "./TextBooksCommerce";
import Mythology from "./Mythology";
import Science from "./Science";
import Technology from "./Technology";
import ArtLiterature from "./ArtLiterature";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Content">
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/detective" element={<DetectiveStories />} />
            <Route exact path="/horror" element={<HorrorStories />} />
            <Route exact path="/poem" element={<RomanticPoems />} />
            <Route exact path="/romantic_stories" element={<RomanticStories />} />
            <Route exact path="/engineering" element={<TextBooksEngineering />} />
            <Route exact path="/commerce" element={<TextBooksCommerce />} />
            <Route exact path="/mythology" element={<Mythology />} />
            <Route exact path="/science" element={<Science />} />
            <Route exact path="/technology" element={<Technology />} />
            <Route exact path="/art_literature" element={<ArtLiterature />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
