
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import TitleChange from '../TitleChange/TitleChange';

const ServiceAdd = () => {
    TitleChange('Service Added')

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const products = {
            name: e.target.name.value,
            price: parseInt(e.target.price.value),
            image: e.target.image.value,
            details:e.target.details.value

        }
        console.log(products)
        fetch("http://localhost:5000/service", {
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

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Service  Name</span>
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
                                 <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <input type="text" placeholder="Enter service details" name='details' className="input input-bordered" />
                                    <label className="label">

                                    </label>
                                </div> 
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Service Add</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceAdd;