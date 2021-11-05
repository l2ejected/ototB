import React from "react";
import { useForm } from "react-hook-form";

export default function GetView() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [data, setData] = React.useState(null);
  const [retrieved, setRetrieved] = React.useState(false);

  const onSubmit = data => {
    const requestOptions = {
      method: 'GET'
    };

    fetch(`/api/contacts/view/${data._id}`, requestOptions)
    .then(response => response.json())
    .then(data => {
      setData(data.data);
      setRetrieved(true);
    });
  };

  const renderContacts = () => {
    return (
      <div>
        Name: {data.name} | Email: {data.email} | Phone: {data.phone} | Gender: {data.gender}
      </div>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div>{!retrieved ? "No contact selected" : renderContacts()}</div>
        <div className="control">
              <input 
                type="text" 
                placeholder="id" 
                {...register("_id", {required: true})} />
        </div>
        <div><button className="button is-link" type="submit">Get</button></div>
      </form>
    </div>
  )
}