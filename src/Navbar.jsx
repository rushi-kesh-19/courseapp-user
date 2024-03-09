import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from './store/atoms/user.js';

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    window.location='/';
  };

  return (
    <div style={{ backgroundColor: 'black' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
        <Link to='/'>
          <Typography variant='h5' style={{ fontWeight: 700, fontFamily: "helvetica", color: 'white', textDecoration: 'none' }}>LEARNERA</Typography>
        </Link>
        <div>
          {!user.isLoading ? (
            <>
              <Link to="/purchased">
                <Button style={{ color: 'white', marginRight: 10 }}>Purchased Courses</Button>
              </Link>
              <Button variant="contained" style={{ color: 'black', backgroundColor: 'white' }} onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button style={{ color: 'white', marginRight: 10 }}>Login</Button>
              </Link>
              <Link to="/register">
                <Button style={{ color: 'white' }}>Register</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
