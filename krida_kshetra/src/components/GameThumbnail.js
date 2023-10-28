import React from 'react';
import {Link} from 'react-router-dom';

const GameThumbnail = ({thumbnailImage, color, gameName}) => {
    const gameThumbnailStyle = {
        'width': '48%',
        'height': '175px',
        // 'backgroundColor': color,
        'backgroundImage': `url(${thumbnailImage})`,
        'backgroundPosition': 'center',
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'contain',
        // 'borderRadius': '40px',
        'marginTop': '10px'
    };
  return (
    <Link to={`/games/${gameName}`} style={gameThumbnailStyle}>
      
    </Link>
  )
}

export default GameThumbnail
