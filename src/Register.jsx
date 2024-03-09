import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import axios from 'axios';
import { Lander } from './Landing';
import { useSetRecoilState } from 'recoil';
import { userState } from './store/atoms/user';
import { useNavigate } from 'react-router-dom';

function Login(){
  const setUser= useSetRecoilState(userState);
  const [username, setTitle] = useState("");
  const [password, setDes] = useState("");
  const navigate= useNavigate();

    return (
      <>
        <div style={{height:'100vh'}}>
          <div style={{display:"flex", justifyContent:"space-around", paddingTop:100}}>
            
            <Lander />
            <div> 
              <Card sx={{ minWidth: 600 , padding:2}}>
                <CardContent>
                  <TextField id="outlined-basic" label="username" variant="outlined" style={{width:'100%', marginBottom: '20px'}}  onChange={(e)=>{setTitle(e.target.value)}}/>
                  <br/>
                  <TextField id="outlined-basic" label="password" variant="outlined" style={{width:'100%'}} onChange={(e)=>{setDes(e.target.value)}}/>
                </CardContent>
                <CardActions style={{ flexDirection: 'column' }}>
                  <Button style={{width:'96%', margin:10}} variant="contained" size="small" onClick= {async ()=>{
                    const res= await axios.post('http://localhost:3000/user/signup', {username:username, password:password});
                    if (res.data.token){
                      localStorage.setItem('token', res.data.token);
                      setUser({
                        username:res.data.username,
                        isLoading:false
                      });
                      navigate('/home');
                    }
                    }}>Register</Button>
                </CardActions>
              </Card>
            </div>
          </div>
        </div>
      </>
    )
}

export default Login