import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import home
import Home from './components/Blog';
function App() {
  return (
    <Router>
      <Home />
      {/* <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </Router>
  );
}

export default App;