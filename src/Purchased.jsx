import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import * as React from 'react';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border:'none',
}));

const ImageWrapper = styled('div')({
  flex: '0 0 auto',
  width: '40%',  
  marginRight: '1rem',
});

const TextWrapper = styled('div')({
  flex: '1 1 auto',
});

const Image = styled('img')({
  width: '100%',
  borderRadius: '8px',
  objectFit: 'cover',
});

function Purchased() {

  return (
    <>
      <TodosDiv />
    </>
  )
}


export function Todos(props) {
    const navigate = useNavigate();
  return (
    <div style={{ marginBottom: 20, padding: '1rem', borderRadius: 8, display: 'flex', alignItems: 'center' }}>
      <ImageWrapper>
        <img src={props.link} alt={props.title} style={{ borderRadius: 8, width: '100%', height: 'auto', objectFit: 'cover' }} />
      </ImageWrapper>
      <TextWrapper>
        <Typography variant='h5' style={{ fontWeight: 700, fontFamily: 'helvetica', marginBottom: 10 }}>{props.title}</Typography>
        <Typography variant='body1' style={{ marginBottom: 10 }}>{props.description}</Typography>
        <Typography variant='body2'>Price: Rs {props.price}/-</Typography>
        <Button variant="contained" style={{ color: 'black', backgroundColor: 'white' }} onClick={()=>{navigate(`/${props.id}`)}}>View</Button>
      </TextWrapper>
    </div>
  );
}

function TodosDiv() {
  const [purchasedCourses, setpurchasedCourses] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:3000/user/purchasedCourses', {
        headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
      });
      console.log(res.data.purchasedCourses);
      setpurchasedCourses(res.data.purchasedCourses);
    };
    fetchData();

  }, []);

  return (
    <div style={{ display: "flex", padding: 50, justifyContent: "space-around", flexWrap: "wrap" }}>
      <Grid container spacing={2}>
        {purchasedCourses.length > 0 ? (
          purchasedCourses.map((course) => (
            <Grid item xs={12} key={course._id}>
              <Item>
                <Link to={`/${course._id}`} style={{ textDecoration: 'none' }}>
                  <Card >
                    <CardContent>
                      <Todos title={course.title} description={course.description} price={course.price} link={course.imgageLink} id={course._id} />
                    </CardContent>
                  </Card>
                </Link>
              </Item>
            </Grid>
          ))
        ) : (
          <Typography variant="body1">No purchased courses available.</Typography>
        )}
      </Grid>
    </div>
  );
}




export default Purchased;
