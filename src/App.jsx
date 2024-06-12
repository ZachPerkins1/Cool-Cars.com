import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import './App.css';


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogin = (userData) => {
    sessionStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setUser(null);
  };

  return (
    <div>
      <NavBar user={user} onLogout={handleLogout} />
      <Outlet context={{ user, handleLogin }} />
    </div>
  );
};

export default App
