import React, { useState } from "react";

function ServiceList({deleteService, services,sethandleEditservice }) {
  
 
  
  return (
    <div className="border bg-white rounded-lg p-4">

    
    <p className="py-2">Service Lists</p>
    <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-6 ">
      {services.map((service) => (
        <div key={service.id} className="bg-blue-50 p-4 w-72 border flex flex-col gap-4 justify-between rounded-lg">
          <div className="">
            <p className="font-bold text-xl">{service.name}</p>
            <p className="mt-2">{service.description}</p>
          </div>

          <div className="flex justify-between mb-1 ">
            <p>{service.price}.rs</p>
            <div className="flex gap-2">
              <button onClick={()=>{sethandleEditservice(service)}} className="py-2 border-blue-300 hover:bg-blue-300 px-3 border rounded-full">Edit</button>
              <button onClick={()=>{deleteService(service.id)}} className="py-2 px-3 border-blue-300 hover:bg-blue-300 rounded-lg bg-white border">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default ServiceList;
