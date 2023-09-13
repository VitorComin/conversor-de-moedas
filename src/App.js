import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Header from './layout/Header';
import Home from './pages/home/Home';
import About from './pages/about/About'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/sobre" element={<About />}  />
      </Routes>
    </Router>
  );
}

export default App;
