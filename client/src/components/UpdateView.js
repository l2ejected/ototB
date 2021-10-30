import React from "react";
import { useForm } from "react-hook-form";

export default function UpdateView() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    const _id = data._id;
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch(`/api/contacts/update/${_id}`, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data.data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="control">
              <input 
                type="text" 
                placeholder="id" 
                {...register("_id", {required: true})} />
        </div>
        <div className="control">
            <input 
              type="text" 
              placeholder="name" 
              {...register("name", {required: false})} />
        </div>
        <div className="control">
            <input 
              type="text" 
              placeholder="email" 
              {...register("email", {required: false})} />
        </div>
        <div className="control">
            <input 
              type="text" 
              placeholder="phone" 
              {...register("phone", {required: false})} />
        </div>
        <div className="control">
            <input 
              type="text" 
              placeholder="gender" 
              {...register("gender", {required: false})} />
          </div>
        <div><button className="button is-link" type="submit">Update</button></div>
      </form>
    </div>
  )
}