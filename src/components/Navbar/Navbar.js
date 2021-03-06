import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { UserContext } from '../../App';
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    axios.post('https://damp-eyrie-85760.herokuapp.com/isAdmin', {
      email: loggedInUser.email
    })
      .then((response) => {
        setIsAdmin(response.data)

      })
      .then((err) => {
        console.log(err)
      })
  }, [])

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-indigo-500 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            to="/home"
          >
            Blogs
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {isAdmin ? <li className="nav-item">
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                to="/add-blog"
              >
                <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Add Blogs</span>
              </Link>
            </li> : ''}
            <li className="nav-item">
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                to="/"
              >
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Log Out</span>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;