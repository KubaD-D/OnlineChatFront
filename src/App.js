import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ChatRoom from './pages/ChatRoom';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import { AuthProvider, useAuth } from './context/AuthContext';
import { useEffect } from 'react';
import { refreshRequest } from './utils/AuthSerivce';
import NavBar from './components/NavBar';

function App() {
  const { setUsername } = useAuth();

  useEffect(() => {

    const refresh = async () => {
      const newUsername = await refreshRequest();

      if(newUsername == null) {
        console.log("Error refreshing token!");
        return;
      }

      setUsername(newUsername);
    } 

    refresh();

  }, [])

  return (
    <>
      <BrowserRouter>

      <div className="d-flex flex-column vh-100">
        <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ChatRoom" element={<ChatRoom />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Logout" element={<Logout />} />
          </Routes>

        </div>

      </BrowserRouter>

    </>
  );
}

export default App;
