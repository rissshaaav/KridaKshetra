import React from 'react';
import { useParams } from 'react-router-dom';
import Game1 from './Game1/Game1';
import Game2 from './Game2/Game2';

const Game = ({username}) => {
    const {id} = useParams();
    let gameToRender;

    switch (id) {
        case 'game1':
            gameToRender = <Game1 username={username}/>;
            break;
        case 'game2':
            gameToRender = <Game2 username={username}/>;
            break;
        default:
            gameToRender = <div>Game not available</div>
            break;
    }
  return (
    <div>
      {gameToRender}
    </div>
  )
}

export default Game
