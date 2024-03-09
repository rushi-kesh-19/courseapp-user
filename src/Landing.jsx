import React from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Landing() {
    return (
        <div style={{ height: '100vh', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Lander />
        </div>
    );
}

export function Lander() {
    const navigate= useNavigate();
    return (
        <div style={{ textAlign: 'center', maxWidth: 800 }}>
            <Typography variant='h2' style={{ fontWeight: 700, fontFamily: "helvetica", marginBottom: 20 }}>LEARNERA</Typography>
            
            <Typography color="text.secondary" variant='h5' style={{ fontWeight: 500 }}>Unlock Your Potential: Empowering Learning, Anytime, Anywhere with LEARNERA</Typography>

            <Button variant="contained" style={{ color: 'black', backgroundColor: 'white' }} onClick={()=>{navigate('/home')}}>View Courses</Button>
        </div>
    );
}

export default Landing;
