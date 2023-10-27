import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      This is home page.
      <br/>
      Link to game1 <Link to='/games/game1'>GAME1</Link>
      <br/>
      Link to game2 <Link to='/games/game2'>GAME2</Link>
    </div>
  )
}

export default Home
