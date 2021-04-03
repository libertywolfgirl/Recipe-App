import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = '30b936b2';
  const APP_KEY = 'b6620d739a8e9522405f2ac84bbafa16';
  
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const proxyUrl = 'https://secret-ocean-49799.herokuapp.com/';
    const response = await fetch(
      `${proxyUrl}https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
