import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from './Pages/Blog'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog/>}/>
      </Routes>
    </Router>
  );
}

export default App;
