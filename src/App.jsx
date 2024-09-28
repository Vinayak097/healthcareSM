import React, { useState } from 'react';
import ServiceList from './components/ServiceList';
import ServiceForm from './components/ServiceForm';
import './App.css';

const App = () => {
  const [editService ,setEditservice]=useState(null);
  const [services, setServices] = useState([{
    id:0,
    name:"Routine Check-up",
    description:"A comprehensive physical examination to assess your overall health.",
    price:200.00
  },{
    id:1,
    name:"Flu Vaccination",
    description:"Get your annual flu shot to protect yourself and your loved ones.",
    price:300.00
  },{
    id:3,
    name:"Dental Cleaning",
    description:"Professional teeth cleaning to maintain good oral hygiene.",
    price:100.00
  }]);

  
  const addService = (newService) => {
    setServices([...services, newService]);
  };

  
  const updateService = (updatedService) => {
    const updatedServices = services.map((service) =>
      service.id === updatedService.id ? updatedService : service
    );
    setServices(updatedServices);
  };

  
  const deleteService = (id) => {
    console.log("dlete servide ", id)
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <div className="bg-blue-100 flex flex-col items-center justify-center font-serif">
      <div>

      
      <div className='p-5  shadow-sm '>
          <h1 className='text-2xl font-bold  lg:text-5xl md:text-3xl '>HelthCare</h1>
      </div>
      
      
      <ServiceList
        services={services}
        
        deleteService={deleteService}
        setEditservice={setEditservice}
      />

      <ServiceForm editService={editService} setEditservice={setEditservice} updateService={updateService} services={services} addService={addService} />
    </div>
    </div>
  );
};

export default App;
