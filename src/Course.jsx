import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { courseDes, courseDetails, courseID, courseImage, courseLoading, coursePrice, coursePub, courseTitle } from "./store/selectors/courseSL";
import { courseState } from "./store/atoms/course";


function Course() {
  const { courseId } = useParams();
  const setCourse = useSetRecoilState(courseState);
  const isLoading= useRecoilValue(courseLoading);
  const title = useRecoilValue(courseTitle);
  const des = useRecoilValue(courseDes);
  const price = useRecoilValue(coursePrice);
  const img = useRecoilValue(courseImage);


  useEffect(() => {
    const func= ()=>{
       axios.get(`http://localhost:3000/user/courses`,{
        headers: {"Authorization": `Bearer ${localStorage.getItem('token')}` }
      } ).then((res)=>{
      const foundCourse = res.data.find(course => course._id === courseId);
      if (foundCourse) {
        setCourse({
          isLoading:false,
          course:foundCourse});
      }});
    }
    func();
  }, [courseId]);
  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>

      <div style={{ display: "flex", justifyContent: 'space-around', marginTop:100 }}>
          <Typography variant='h5' style={{fontWeight:500, fontFamily:"helvetica"}}>{title+ " "}</Typography> <br />
          <Typography variant='h6' >{des}</Typography> <br /> <br />
          <Typography variant='h6' >Price: Rs {price}/-</Typography> 
          <br /> <br />
          <img style={{maxWidth:600}} src={img} alt="img not found" />
      </div>     
    </div>
  );
}





export default Course;
