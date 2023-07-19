import React , {useState}from "react";

const StateObject = () => {
  const[person,setPerson]=useState({
    name:"Antonio",
age:29,
saluto:"Salve",
  });
  const cambiaValue = () =>{
    setPerson({
      ...person,age:30,saluto:'sono vecchio'
    })
  }
  return <div className="text-left item shadow">
    <h3>{person.name}</h3>
    <h5>{person.age}</h5>
    <h6>{person.saluto}</h6>
<button className="button btn-secondary" onClick={cambiaValue}>Cambia card</button>
  </div>;
};

export default StateObject;
