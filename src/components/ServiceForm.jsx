import React, { useState } from "react";
import "../App.css";
const ServiceForm = ({editService,updateService,setEditservice, addService ,services }) => {
  const [newService, setNewService] = useState({
    id:null,
    name: "",
    description: "",
    price: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newService.name || !newService.description || !newService.price) {
      alert("Please fill all fields.");
      return;
    }

    addService({...newService,id:services[services.length-1].id+1 });
    setNewService({ name: "", description: "", price: "" });
  };

  return (
    <form className="border mt-4 p-4 bg-white rounded-lg" onSubmit={ editService ? updateService(editService)  : handleSubmit}>
      <p className=" text-xl font-bold">Add new Services</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 ">
        <div>
          <p className="label" htmlFor="">Name</p>

          <input
            type="text"
            placeholder="Service Name"
            value={editService? editService.name :newService.name}
            className="border  w-full  bg-blue-50 p-2 rounded-md"
            onChange={(e) => editService? setEditservice({...editService,name:e.target.value}):
              setNewService({ ...newService, name: e.target.value })
            }
          />
        </div>
        

        <div className="row-span-2 ">
          <p htmlFor=""  className="label  ">Description</p>

          <textarea
            type="text"
            className="border   bg-blue-50 h-full w-full   p-2 rounded-md"
            placeholder="Service Description"
            value={editService? editService.description :newService.description}
            onChange={(e) => editService? setEditservice({...editService,description:e.target.value}):
              setNewService({ ...newService, description: e.target.value })
            }
          />
        </div>
        <div>
          <p htmlFor=""  className="label">Price</p>
          <input
            type="number"
            placeholder="Service Price"
            className="border   w-full  bg-blue-50   p-2 rounded-md"
            value={ editService ? editService.price :newService.price}
            onChange={(e) => editService? setEditservice({...editService,price:e.target.value}):
              setNewService({
                ...newService,
                price: parseFloat(e.target.value),
              })
            }
          />
        </div> 
        <div className="col-span-2 ">
        <button className="mt-2 float-end bg-blue-400 hover:bg-blue-300 rounded-lg     border border-blue-500 py-2 px-4 text-white" type="submit"> {editService? "Update service":"Add Service"}</button>
      </div>
      </div>
      
      
    </form>
  );
};

export default ServiceForm;
