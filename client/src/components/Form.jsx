import React from 'react'
import { useState } from 'react';
import NewCourse from './createNewCourse';
const Form = () => {
    const [data, setData] = useState({
        courseName:"",
        courseInstructor:"",
        courseId:""
    });

    

    const handleSubmit = e => {
        e.preventDefault()
        console.log(JSON.stringify(data))
    }
    
    const handleChange = e => {
        // const type = e.target.type

        const name = e.target.name

        const value = e.target.value;

        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }
    
    
    const canSave = data.courseId === "" || data.courseInstructor=== "" || data.courseName===""
    return (  
        <div className="flex flex-col justify-normal gap-10">
        <h2 className="text-3xl text-white text-left my-10">Add your course here </h2>
        <form className=" " onSubmit={handleSubmit} >
          
      <NewCourse data={data} handleChange={handleChange}/>

      <button type='submit' disabled={canSave} className="btn join-item rounded-full mt-10"  >
       Add this course
    </button>
        </form>
        </div>

    )

}

export default Form