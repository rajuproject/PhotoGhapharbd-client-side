import { Card } from 'flowbite-react';
import { comment } from 'postcss';

import React, { useContext, useEffect, useState } from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../FireBase/UserContext';
import TitleChange from '../TitleChange/TitleChange';




const SingleService = () => {
    TitleChange('Details')
    
    const {user} = useContext(AuthContext);




    const router = useParams();
    const [product, setProduct] = useState({});

    const [comment, setComment] = useState({});
    console.log(comment)

    const { id } = router;
    const navigate = useNavigate();

    // const handleDetails = (e) => {
    //     e.preventDefault();
    //     const products = {
    //         comment: e.target.name.value

        
           
           
    //     }
        
    const handleSubmit = (e) => {
        e.preventDefault();
        const products = {
            name: e.target.name.value,
            serviceId: id,
            userName:user.displayName,
            userEmail:user.email,
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

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setProduct(data.data);
                } else {
                    toast.error(data.error);
                }
            })
            .catch((err) => toast.error(err.message));
    }, [id]);


    useEffect(() => {
        fetch(`http://localhost:5000/comment/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.success) {
                    setComment(data.data);
                } else {
                    toast.error(data.error);
                
                }
            })
            .catch((err) => toast.error(err.message));
    }, [id]);

   


    



    return (
        <div>
            <Card className='container mx-auto'
                key={product._id}>
                <img className="" src={product.image} alt={product.name} />


                <a href="#">

                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {product.details}
                    </h5>
                </a>
                <div className="mt-2.5 mb-5 flex items-center">
                    <svg
                        className="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                        className="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                        className="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                        className="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                        className="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                        5.0
                    </span>
                </div>
                <div className="flex items-center justify-start">
                    <span className="mr-10 text-3xl font-bold text-gray-900 dark:text-white">
                        ${product.price}
                    </span>
                    <button
                        className=" rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <Link to="/allProduct">ALL SERVICE</Link>
                    </button>
                </div>
            </Card>


            <div className='container mx-auto flex my-10'>
                <img className="mask mask-squircle w-12 mr-4" src="https://placeimg.com/160/160/arch" />
                <div>
                    <h3>{user?.displayName}</h3>
                    <p>{comment?.name}</p>
                </div>
            </div>
{
    user?.uid?
    <>
<form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Comment</span>
                                    </label>
                                    <input type="text" placeholder="Name" name='name' className="input w-96 input-bordered" />
                                </div>


       
                                <div className="form-control mt-6">
                                    <button className="btn w-96 btn-primary">Comment Add</button>
                                </div>

                                
                            </form>
    </>
    :
    <>
    <p> Please Log in for Comment <Link to="/signIn">Log in</Link> </p>
    </>
}
                

            </div>

        // </div>
    );
};


export default SingleService;


// onClick={() => handleDetails(product._id)}
// {
//     user?.uid ?
//     <>
//        <form >
// <div className="form-control">
// <label className="label">
//     <span className="label-text">Name</span>
// </label>
// <input type="text" placeholder="Enter your comment"  name='name' className="input input-bordered w-96" />
// <button onClick={handleDetails} className="btn w-32 btn-primary">Comment</button>
// </div>

// <div className="form-control mt-6">
// </div>
// </form>
//     </>
//     :
//     <>
//     <p>Please log in for comment</p> <Link to='/signIn' className='btn'>Log in</Link>
//     </>
// }
