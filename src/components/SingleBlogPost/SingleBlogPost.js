import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const SingleBlogPost = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [blogs, setBlogs] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false)

    let { _id } = useParams();
    useEffect(() => {
        axios.get(`https://damp-eyrie-85760.herokuapp.com/single-blog/${_id}`).then((response) => {
            setBlogs(response.data[0])
            // setLoading(false)
        })
    }, [])
    const { blogTitle, blogContent, imageUrl } = blogs;

    const handleDeleteBlog = (id) => {
        axios.delete(`https://damp-eyrie-85760.herokuapp.com/delete/${id}`, {
        })
    }

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

        <div className="row">
            <div className="col-md-6 mx-auto">
                <span className="mb-3" style={{fontSize : "40px", fontWeight : "bold"}}>{blogTitle}</span>
                {isAdmin ? <button className="ml-5 btn btn-danger mb-3" onClick={() => handleDeleteBlog(_id)}>Delete</button> : ''}
                <img src={imageUrl} alt="" />
                <p>{blogContent}</p>
            </div>



        </div>
    );
};

export default SingleBlogPost;