import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "30b936b2";
  const APP_KEY = "b6620d739a8e9522405f2ac84bbafa16";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const proxyUrl = "https://secret-ocean-49799.herokuapp.com/";
    const response = await fetch(
      `${proxyUrl}https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  
  const updateSearch = e => {
    setSearch(e.target.value);
  }
  
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form  onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default App;
