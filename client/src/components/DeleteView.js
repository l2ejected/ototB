import React from "react";
import { useForm } from "react-hook-form";

export default function DeleteView() {
  const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
    const requestOptions = {
      method: 'DELETE',
      body: JSON.stringify(data)
    };
    fetch(`/api/contacts/delete/${data._id}`, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data.data))
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
        <div><button className="button is-link" type="submit">Delete</button></div>
      </form>
    </div>
  )
}