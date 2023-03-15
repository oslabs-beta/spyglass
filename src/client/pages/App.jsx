import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import '../styles/App.css';

function App() {
  return (
    <Routes>
      <Route path="/home/*" element={<Home />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
