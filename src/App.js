import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  //const APP_ID = 'dceb7501';
  //const APP_KEY = '150a19f05e09caac72a633e8f428c806';

  useEffect( () => {
    
  }, []);
  
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`);
    const data = await response.json();
    console.log(data);
  }

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
