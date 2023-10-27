import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Game from './games/Game';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/games/:id' element={<Game/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;