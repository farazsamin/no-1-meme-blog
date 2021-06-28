import BlogPost from './components/BlogPost/BlogPost';
import Navbar from './components/Navbar/Navbar';
import AddBlog from './components/AddBlog/AddBlog';
import Login from './components/Login/Login';
import Home from './components/Home/Home'
import SingleBlogPost from './components/SingleBlogPost/SingleBlogPost';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';

export const UserContext =  createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
   
         <Router>
           <Switch>
           <Route exact path="/">
            <Login></Login>
          </Route>
           <Route  path="/home">
            <Navbar></Navbar>
            <Home></Home>
          </Route>
          <Route path="/add-blog">
            <Navbar></Navbar>
            <AddBlog></AddBlog>
          </Route>
          <Route path="/single-blog/:_id">
            <Navbar></Navbar>
           <SingleBlogPost></SingleBlogPost>
          </Route>
           </Switch>
         </Router>
         {/* <BlogPost></BlogPost>
         <BlogPost></BlogPost>
         <BlogPost></BlogPost>
         <BlogPost></BlogPost>
         <BlogPost></BlogPost>
         <BlogPost></BlogPost> */}

         
         </UserContext.Provider>
 
  );
}

export default App;
