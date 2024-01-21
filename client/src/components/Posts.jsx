import React from 'react';
import Post from './Post';
import jsonData from "../assets/indexed.json";
import { useNavigate, useParams, NavLink } from 'react-router-dom';

const Posts = () => {
  const id = useParams().id;
  const getCourseNameById = (courseId) => {
    const course = jsonData[courseId];
    return course ? course.title : "Course Not Found";
  };
  const courseName = getCourseNameById(id);
  const navigate = useNavigate();

  return (
    <div className='flex flex-col flex-nonwrap justify-start space-y-7 mt-5 items-center'>
      <div className="text-black text-4xl ml-1 mb-10 text-center items-center font-bold w-full">
        <div className='flex flex-row items-center'>
          <div>
            <NavLink to="/">
              <img
              src="https://upload.wikimedia.org/wikipedia/en/e/e1/International_Institute_of_Information_Technology%2C_Hyderabad_logo.png"
              alt="IIITH Logo"
              className="w-28 h-auto mr-5"></img>
            </NavLink>
          </div>
          <div>
            {id} - {courseName}
          </div>
          <div>
            <button
              className="btn btn-success ml-3 text"
              type="submit"
              onClick={() => navigate(`/reviewform/${id}`)}>
              + Add Review
            </button>
          </div>
        </div>
      </div>

      {/* Center the grid and display one block per row with animation effect */}
      <div className="grid grid-cols-1 gap-4 mx-auto">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-black rounded-md shadow-md transition-transform transform hover:scale-105"
            style={{ width: '800px', margin: '0 auto', marginBottom: '20px' }}
          >
            <Post />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
