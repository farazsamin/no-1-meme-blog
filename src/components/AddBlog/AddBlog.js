import React from 'react';
import axios from 'axios';
import { useState } from 'react';
const AddBlog = () => {
    const [blogTitle, setBlogTitle] =useState('')
    const [blogContent, setBlogContent] =useState('')
    const [imageUrl,setImageUrl] = useState(null)

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'dadd1c340e709dfd345e92ae94e9f9ba')
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleAddPost = () => {
        axios.post('https://damp-eyrie-85760.herokuapp.com/addBlog', {
            blogTitle : blogTitle,
            blogContent : blogContent,
            imageUrl : imageUrl
        })
            .then((response) => {
                console.log(response)
            })
        // window.location.reload();
    }

    return (
        <div className="p-5 m-5 b-5">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Blog Title
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Title" onChange={(event)=> {setBlogTitle(event.target.value)}}/>
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Blog Content
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Content" onChange={(event)=> {setBlogContent(event.target.value)}}></input>
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Blog Image
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="file" placeholder="Image" onChange={handleImageUpload}></input>

            <button onClick={handleAddPost} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Add Post
            </button>
        </div>
    );
};

export default AddBlog;