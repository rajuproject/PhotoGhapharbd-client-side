import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditProduct = () => {


    const router = useParams();
    const [comment, setComment] = useState({});
    const { id } = router;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/comment/${id}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              setComment(data.data);
            } else {
              toast.error(data.error);
            }
          })
          .catch((err) => toast.error(err.message));
      }, [id]);

      const handleSubmit = async (e) => {
        e.preventDefault();
        const product = {
          name: e.target.name.value,
          price: e.target.price.value,
          image: e.target.image.value
        }
    
        fetch(`http://localhost:5000/comment/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(product)
        }).then(res => res.json())
        .then(data => {
          if(data.success){
            toast.success(data.message);
            navigate("/myReview")
          } else {
            toast.err(data.error)
          }
        })
        .catch(err => toast.error(err.message))
      }
      
      

      

    return (
        <div>
   <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Service Name</span>
                                    </label>
                                    <input type="text" placeholder=" Service Name" defaultValue={comment?.name} name='name' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" placeholder="Price" name='price' className="input input-bordered" />
                                    <label className="label">

                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="text" placeholder="Please Link url"  name='image'defaultValue={comment?.image} className="input input-bordered" />
                                    <label className="label">

                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Comment Update</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;