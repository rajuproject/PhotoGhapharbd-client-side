
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductsAdd = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const products = {
            name: e.target.name.value,
            price: parseInt(e.target.price.value),
            image: e.target.image.value,

        }
        console.log(products)
        fetch("http://localhost:5000/product", {
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(products)
        }).then(res => res.json())
            .then(data =>{
                if(data.success){
                    toast.success(data.message)
                    navigate("/allproduct")
                }
                else{
                    toast.error(data.error);
                }
            })
            .catch(err =>{
                toast.error(err.message)
            })


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
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" name='name' className="input input-bordered" />
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
                                    <input type="text" placeholder="Please Link url" name='image' className="input input-bordered" />
                                    <label className="label">

                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Product Add</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsAdd;