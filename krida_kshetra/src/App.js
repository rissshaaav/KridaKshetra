import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Game from './games/Game';
import { useEffect, useState } from 'react';
import UserName from './screens/UserName';

function App() {
  const [username, setUsername] = useState('');

  useEffect(()=>{
    const storedUsername = localStorage.getItem('kridaKshetraUsername');
    if(storedUsername){
      setUsername(storedUsername);
      // <Navigate to='/' />
    }
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          {username?
            <>
              <Route path='/' element={<Home username={username}/>} />
              <Route path='/games/:id' element={<Game username={username}/>} />
            </>
            :
            <>
              <Route path='/' element={<UserName setUsername={setUsername}/>} />
            </>
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;