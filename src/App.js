import React from "react";
import Tweet from './Tweet';

function App() {
  
  return (
    <div className='app'>
      <Tweet name="Dev ED" message="This is a random tweet" likes="506"/>
      <Tweet name="John Snow" message="I am the true king" likes=""/>
      <Tweet name="Traversy Media" message="700k my dudes"/>
      <Tweet name="Mosh" message="My new course is available"/>
    </div>
  );
}

export default App;
