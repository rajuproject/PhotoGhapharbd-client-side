import { Button, Toast } from 'flowbite-react';

import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import { AuthContext } from '../FireBase/UserContext';
import TitleChange from '../TitleChange/TitleChange';

const MyReview = () => {
    TitleChange('My review')
    const router = useParams();
    const [comments, setComment] = useState([])
    const { user, logOut } = useContext(AuthContext);
    const [refresh, setRefresh] = useState(false)
    const { id } = router;

  

    // verify jwt ...........



    
    useEffect(() => {
        fetch("https://server-side-rajuproject.vercel.app/comment")
            .then((res) => res.json())
            .then((data) => {
                
                if (data.success) {
                    setComment(data.data);
                } else {
                    toast.error(data.error);

                }
            })
            .catch((err) => toast.error(err.message));
    }, [refresh]);



    // delete commnet ..................

    const handleDelete = (id) => {
        fetch(`https://server-side-rajuproject.vercel.app/comment/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message);

                    setRefresh(!refresh);
                } else {
                    toast.error(data.error);
                }
            }).catch(err => toast.error(err.message))
    };


    const navigate = useNavigate();
    const handleDetails = (id) => {
        navigate(`/comment/${id}`)
    }



    // all comment get ............................



    return (
        <div className='container mx-auto'>


            <div className="overflow-x-auto w-full  ">
                <table className="table w-full ">

                    {
                        comments?.map((comment) => {
                            return (
                                <tbody className='border-2 border-indigo-600 mt-3'
                                    key={comment.id}>

                                    <tr>
                                        <td className=' mb-10  sm:w-96  rounded '>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12 ">
                                                        <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>

                                                    <div className="text-sm bg-white mb-1 p-2 rounded"> Name: {comment.userName}</div>
                                                    <div className="font-bold bg-white p-2 rounded ">Email: {comment.userEmail}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>

                                            <br />
                                            <span className="badge badge-ghost md:w-full sm:w-96 h-24 badge-sm">{comment.name}</span>
                                            <div className='flex items-end'>
                                                <Button className='mt-2 mr-6' onClick={() => handleDelete(comment._id)}>Delete</Button>
                                                <Button onClick={() => handleDetails(comment._id)}> Comment Edit</Button>

                                            </div>

                                        </td>

                                    </tr>

                                </tbody>
                            )
                        })
                    }



                </table>
                
            </div>
            {
                comments.length === 0 && <h1> No Review found</h1>
            }
          
        </div>
    );
};

export default MyReview;