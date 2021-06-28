import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import SingleBlogPost from '../SingleBlogPost/SingleBlogPost';
const BlogPost = (props) => {
    const {_id,blogTitle, blogContent,imageUrl} = props.name;
    // console.log(imageUrl)
    
    const history = useHistory()
    const handleSingleBlog =(_id)=>{
           history.push(`/single-blog/${_id}`)
    }
    
    return (
        <div>
           
            <div  class="flex justify-center mt-5 ">
           
                <div onClick={()=>handleSingleBlog(_id)} class="hover:shadow-2xl rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">
                    <div class="w-full flex justify-between p-3">
                        <div class="flex">

                            <span  style={{fontSize : "40px", fontWeight : "bold"}} class="mb-3 pt-1 ml-2 font-bold text-sm">{blogTitle}</span>
                        </div>
                        <span class="px-2 hover:bg-gray-300 cursor-pointer rounded"><i class="fas fa-ellipsis-h pt-2 text-lg"></i></span>
                    </div>
                    <img class="w-full bg-cover" src={imageUrl} />
                    <div class="px-3 pb-2">
                        <div class="pt-2">
                            <i class="far fa-heart cursor-pointer"></i>

                        </div>
                        <div class="pt-1">
                            <div class="mb-2 text-sm">
                               {blogContent}
                            </div>
                        </div>


                    </div>
                   
                </div>
                
            </div>
        </div>
    );
};

export default BlogPost;