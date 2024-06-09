import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Hobbies from './components/Hobbies';
import Work from './components/Work';

function App() {
  let [currentTab, setCurrentTab] = useState(); //usestate keeps current state

  const getColor = (tab) => {
      if(currentTab === tab) {
        return 'rgb(67, 255, 170)';
      }else {
          return 'white';
      }
  }
  return (
      <Router>
          <div className="App">
              <nav>
                  <ul>
                      <li><Link to="/" style={{color: getColor(1)}}>Home</Link></li>
                      <li><Link to="/work" style={{color: getColor(2)}}>Work</Link></li>
                      <li><Link to="/hobbies" style={{color: getColor(3)}}>Hobby</Link></li>
                  </ul>
              </nav>
              <Routes>
                  <Route path="/" element={<Home setCurrentTab={setCurrentTab} />} />
                  <Route path="/work" element={<Work setCurrentTab={setCurrentTab} />} />
                  <Route path="/hobbies" element={<Hobbies setCurrentTab={setCurrentTab} />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;