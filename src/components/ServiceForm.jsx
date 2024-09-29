import React, { useState } from "react";
import "../App.css";
const ServiceForm = ({
  editService,
  updateService,
  sethandleEditservice,
  addService,
  services,
}) => {
  const [newService, setNewService] = useState({
    id: null,
    name: "",
    description: "",
    price: "",
  });
  const [error ,seterror]=useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editService) {
      if (!editService.name || !editService.description || !editService.price) {
        
        seterror("please fill all fieds")
        setTimeout(() => {
          seterror(null)          
        }, 5000);
        return;
      }
      updateService(editService);
      sethandleEditservice(null);
      return;
    }

    if (!newService.name || !newService.description || !newService.price) {
      seterror("please fill all fieds")
        setTimeout(() => {
          seterror(null)          
        }, 5000);
      return;
    }

    addService({ ...newService, id: services[services.length - 1].id + 1 });
    setNewService({ name: "", description: "", price: "" });
  };

  return (
    <form
      className="border mt-4 p-4 bg-white rounded-lg"
      onSubmit={handleSubmit}
    >
      <p className="text-xl font-bold mb-4">Add New Services</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Service Name"
            value={editService ? editService.name : newService.name}
            className="border w-full bg-blue-50 p-2 rounded-md"
            onChange={(e) =>
              editService
                ? sethandleEditservice({ ...editService, name: e.target.value })
                : setNewService({ ...newService, name: e.target.value })
            }
          />
        </div>

        <div className="lg:row-span-2 space-y-1">
          <label className="label" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            className="border w-full bg-blue-50 p-2 rounded-md"
            placeholder="Service Description"
            value={
              editService ? editService.description : newService.description
            }
            onChange={(e) =>
              editService
                ? sethandleEditservice({
                    ...editService,
                    description: e.target.value,
                  })
                : setNewService({ ...newService, description: e.target.value })
            }
            rows="5"
          />
        </div>

        <div className="space-y-1">
          <label className="label" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            placeholder="Service Price"
            className="border w-full bg-blue-50 p-2 rounded-md"
            value={editService ? editService.price : newService.price}
            onChange={(e) =>
              editService
                ? sethandleEditservice({
                    ...editService,
                    price: e.target.value,
                  })
                : setNewService({
                    ...newService,
                    price: parseFloat(e.target.value),
                  })
            }
          />
        </div>
          <p className="text-red-500 font-bold text-md">{error}</p>
        <div className="lg:col-span-2 mt-2 flex gap-2 justify-end">
          {editService ? <button className=" p-2 border-blue-500 hover:bg-blue-100  rounded-lg border " onClick={()=>{sethandleEditservice(null)}}>
            Cancel
          </button> :""}
          <button
            className="bg-blue-400 hover:bg-blue-300 rounded-lg border border-blue-500 py-2 px-4 text-white"
            type="submit"
          >
            {editService ? "Update Service" : "Add Service"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ServiceForm;
