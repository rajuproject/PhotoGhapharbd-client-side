import { Button, Toast } from 'flowbite-react';

import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import { AuthContext } from '../FireBase/UserContext';

const MyReview = () => {
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
          if(data.success){
            toast.success(data.message);
            setRefresh(!refresh);
          } else {
            toast.error(data.error);
          }
        }).catch(err => toast.error(err.message))
      };









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
        <div>


<div>
{
                user?.uid ?
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

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    {/* <thead>
                        <tr>

                            <th>Name</th>
                            <th>email</th>
                            <th>Review</th>
                            <th></th>
                        </tr>
                    </thead> */}

{
    comments?.map((comment)=>{ 
        return(
<tbody key = { comment.id}>

<tr>
    <td>
        <div className="flex items-center space-x-3">
            <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                    <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                </div>
            </div>
            <div>
                <div className="font-bold">{comment.userEmail}</div>
                <div className="text-sm opacity-50">{comment.userName
}</div>
            </div>
        </div>
    </td>
    <td>

        <br />
        <span className="badge badge-ghost  badge-sm">{comment.name}</span>
        <Button onClick={() => handleDelete(comment._id)}>Delete</Button>
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