import React from 'react'
import Post from './Post'
import jsonData from "../assets/indexed.json";
import { useNavigate, useParams } from 'react-router-dom';

const Posts = () => {
  const id = useParams().id;
  const getCourseNameById = (courseId) => {
    const course = jsonData[courseId];
    return course ? course.title : "Course Not Found";
  };
  const courseName = getCourseNameById(id);
  const navigate = useNavigate();
  return (
    <>
    <div className='flex flex-col  justify-start space-y-7   mt-3 ml-4'>
      <div className="font-semibold text-white text-3xl text-left flex flex-row justify-between">  {id} - {courseName}
      <button className="btn  btn-success ml-3/4 text" type="submit" onClick={()=>navigate(`/reviewform/${id}`)}>
          +Post
      </button>
      </div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
        
    </>
  )
}

export default Posts