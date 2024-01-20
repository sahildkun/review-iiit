
import React, { useState } from 'react'

const NewCourse = ({ data, handleChange }) => {




  return (
    <div className='flex flex-col gap-5 text-white items-center' >
    <input
      id="courseName"
      name="courseName"
      className="input input-bordered join-item w-3/4"
      placeholder="Enter your course name"
    
      value={data.courseName}
      onChange={handleChange}
    />
          <input
      type="text"
      id="courseId"
      name="courseId"
      className="input input-bordered join-item w-3/4"
      placeholder="Enter your course id"
    
      value={data.courseId}
      onChange={handleChange}
      />
      <input
      id="courseInstructor"
      name="courseInstructor"
      className="input input-bordered join-item w-3/4"
      placeholder="Add the name of the instructor"
    
     
      onChange={handleChange}
      value={data.courseInstructor}
    />
    </div>
  
   
  
  )
}

export default NewCourse