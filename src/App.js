import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ChatRoom from './pages/ChatRoom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ChatRoom" element={<ChatRoom username="admin" />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
