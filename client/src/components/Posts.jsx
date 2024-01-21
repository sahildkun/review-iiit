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
    <div className='flex flex-col items-center space-y-7 mt-5'>
      <div className="flex items-center justify-between w-full px-4">
        {/* Left section with image */}
        <div className="flex items-center">
          <NavLink to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/e/e1/International_Institute_of_Information_Technology%2C_Hyderabad_logo.png"
              alt="IIITH Logo"
              className="w-28 h-auto mr-5"
            />
          </NavLink>
        </div>

        {/* Middle section with id - courseName */}
        <div className="text-black text-4xl font-bold text-center">
          {id} - {courseName}
        </div>

        {/* Right section with Add Review button */}
        <div>
          <button
            className="btn btn-success text"
            type="submit"
            onClick={() => navigate(`/reviewform/${id}`)}
          >
            + Add Review
          </button>
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
