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
    const { user } = useContext(AuthContext);
    const [refresh, setRefresh] = useState(false)
    const { id } = router;


    const handleSubmit = (e) => {
        e.preventDefault();
        const products = {
            name: e.target.name.value,
            serviceId: id,
            userName: user.displayName,
            userEmail: user.email,
            userPhoto: user.photoURL,


        }




        fetch("http://localhost:5000/comment", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message)
                    // navigate("/allproduct")
                }
                else {
                    toast.error(data.error);
                }
            })
            .catch(err => {
                toast.error(err.message)
            })

    }




    const handleDelete = (id) => {
        fetch(`http://localhost:5000/comment/${id}`, {
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





    useEffect(() => {
        fetch("http://localhost:5000/comment")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.success) {
                    setComment(data.data);
                } else {
                    toast.error(data.error);

                }
            })
            .catch((err) => Toast.error(err.message));
    }, []);

    return (
        <div className='container mx-auto'>
            <div>
                {
                    user?.uid ?
                        <>
                            <form className='' onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Comment</span>
                                    </label>
                                    <input type="text" placeholder="Enter your review" name='name' className="input w-96 input-bordered" />
                                </div>



                                <div className="form-control mt-6">
                                    <button className="btn w-48 btn-primary">Comment Add</button>
                                </div>


                            </form>
                        </>
                        :
                        <>
                            <p> Please Log in for Comment <Link to="/signIn"><Button>Log in</Button></Link> </p>
                        </>
                }
            </div>

            <div className="overflow-x-auto w-full  ">
                <table className="table w-full ">

                    {
                        comments?.map((comment) => {
                            return (
                                <tbody className='' 
                                key={comment.id}>

                                    <tr>
                                        <td className='bg-gray-600 mb-10 border-y-8 sm:w-96  rounded '>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
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
                                            <span className="badge badge-ghost md:w-full sm:w-96  badge-sm">{comment.name}</span>
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
        </div>
    );
};

export default MyReview;