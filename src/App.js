import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ChatRoom from './pages/ChatRoom';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ChatRoom" element={<ChatRoom username="admin" />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Logout" element={<Logout />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
