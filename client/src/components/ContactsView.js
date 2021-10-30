import React from "react";
import { useForm } from "react-hook-form";

export default function ContactsView() {
  const [data, setData] = React.useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  React.useEffect(() => {
    fetch("/api/contacts")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  const renderContacts = () => {
    return data.map((obj) => {
      return (
        <div className="contact" key={obj._id}>
          Name: {obj.name} | Email: {obj.email} | Phone: {obj.phone} | Gender: {obj.gender} | ID: {obj._id}
        </div>
      );
    });
  };

  const onSubmit = data => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch('/api/contacts', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <div>
      <div>{!data ? "Loading" : renderContacts()}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Add new contact below:</label>
          <div className="control">
            <input 
              type="text" 
              placeholder="name" 
              {...register("name", {required: true})} />
        </div>
        <div className="control">
            <input 
              type="text" 
              placeholder="email" 
              {...register("email", {required: true})} />
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
        <div><button className="button is-link" type="submit">Add new contact</button></div>
      </form>
    </div>
  );

}