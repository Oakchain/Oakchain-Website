import React from 'react'
import { useEffect, useState } from 'react';

const LMS = () => {

  const [courseIdentifier, setcourseIdentifier] = useState([]);
  const [courseDetails, setcourseDetails] = useState([]);

  const courseData = () => {
    fetch('/Near')
    .then(res => res.json())
    .then(data => console.log(data[0]));
  }

  useEffect(() => {
    courseData();
  }, [])

  return (
    <header>
         LMS Display unit
      </header>
  )
}

export default LMS