// import Header from './components/Header';
import Home from './components/Home'
// import React from 'react';
// import necessary stuff for links and routing
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './components/SignUp';  


function App() {
  return (
    <div className="App">
      {/* <Home />   */}
      <SignUp/>    
    </div>
  );
}

export default App;