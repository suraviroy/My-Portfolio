import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home user={user} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
