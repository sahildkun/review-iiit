import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AutocompleteComponent from './components/AutoCompleteComponent'
import {  RouterProvider, createBrowserRouter} from 'react-router-dom';
import Avatar from './components/Avatar'
import Post from './components/Post'
import PostLoading from './components/PostLoading'
import Posts from './components/Posts'
import Sunny from './components/Sunny'
import Rain from './components/Rain'
import ReviewForm from './components/ReviewForm'
import Navbar from './components/Navbar'
import Register from './components/Register'
import LoginForm from './components/LoginForm'
import Form from './components/Form'
import Loader from './components/Loader'
import NewCourse from './components/createNewCourse'


// fetch('/api/v1/test').then( (res) => res.json()).then((data) => console.log(data));

const router = createBrowserRouter([
  {
    path: '/',
    element:<Navbar/>,
    children: [  
      {
        index: true,
        element:(
          <div className='flex flex-col'>
    
            <AutocompleteComponent/>
    
          </div>
        ),
      },
      {
        path:'add-course',
        element: <Form/>
      }
    ]
  },
  {
    path: '/register',
    element: (
      <Register />
    )
  },
  
  {
    path: '/login',
    element: (
      <LoginForm />
    )
  },
  {
    path: '/posts/:id',
    element: (
      <Posts />
    )
  },
  {
    path: '/reviewform/:id',
    element: (
      <ReviewForm />
    )
  },
]);

function App() {
  return (
     <RouterProvider  router={router}/>
    )
}

export default App
