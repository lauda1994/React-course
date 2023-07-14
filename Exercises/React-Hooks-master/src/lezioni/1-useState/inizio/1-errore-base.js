import React from "react";
//Far vedere che il componente non si riaggiorna ma la variabile si
//Spiegare che cosa è un React Fragment e che è possibile abbreviarlo
const ErroreBase = () => {
  let titolo="Hello World";
  const cambiaTitolo=()=>{
    titolo="Forza Napoli";
    console.log(titolo);
  }
  return <React.Fragment>
  <h2>{titolo}</h2>
  <button className="btn btn-info my-3" onClick={cambiaTitolo}>Cambia Titolo</button>
  </React.Fragment>;
};

export default ErroreBase;
