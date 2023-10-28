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
          <GameThumbnail thumbnailImage={tictactoeThumbnail} color='#45EBA5' gameName='game1'/>
          <GameThumbnail thumbnailImage={scribblesThumbnail} color='white'  gameName='game2'/>
          <GameThumbnail thumbnailImage={bingoThumbnail} color='#45EBA5'/>
          <GameThumbnail thumbnailImage={tictactoeThumbnail} color='#45EBA5'/>
        </div>
      </main>
    </>
  )
}

export default Home
