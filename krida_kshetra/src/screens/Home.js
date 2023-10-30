import React from 'react';
import './Home.css';
import userProfileIcon from '../assets/images/userProfileIcon.png';
import JoinWithCode from '../components/JoinWithCode';
import GameThumbnail from '../components/GameThumbnail';
import tictactoeThumbnail from '../assets/images/ticTacToeThumbnail.png';
import scribblesThumbnail from '../assets/images/scribblesThumbnail.png';
import bingoThumbnail from '../assets/images/bingoThumbnail.png';

const Home = ({username}) => {
  return (
    <>
      <header className='homeHeader'>
          <img src={userProfileIcon} alt={`user ${username}`} />
          <p>Hello, <br/> {username}</p>
      </header>
      <main>
        <JoinWithCode/>
        <p>Select games from below and share link to play with your friends</p>
        <div className='gameList'>
          <GameThumbnail thumbnailImage={tictactoeThumbnail} gameName='game1'/>
          <GameThumbnail thumbnailImage={scribblesThumbnail} gameName='game2'/>
          <GameThumbnail thumbnailImage={bingoThumbnail} />
          <GameThumbnail thumbnailImage={tictactoeThumbnail} />
        </div>
      </main>
    </>
  )
}

export default Home
