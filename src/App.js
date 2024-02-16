import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ChatRoom from './pages/ChatRoom';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import Profile from './pages/Profile';
import { useAuth } from './context/AuthContext';
import { useEffect } from 'react';
import { refreshRequest } from './utils/AuthSerivce';

function App() {
  const { setUsername } = useAuth();

  useEffect(() => {

    const refresh = async () => {
      const newUsername = await refreshRequest();

      if(!newUsername) {
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
        <div className="container-fluid">

            <Routes>
              <Route path="/" element={<ChatRoom />} />
              <Route path="/ChatRoom" element={<ChatRoom />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Logout" element={<Logout />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Profile" element={<Profile />} />
            </Routes>

          </div>
        </div>

      </BrowserRouter>

    </>
  );
}

export default App;
