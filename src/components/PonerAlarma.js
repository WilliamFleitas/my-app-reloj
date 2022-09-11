import React from 'react';

export default function PonerAlarma (){
  
  

  
  const handleSubmit = function (evento){
    evento.preventDefault();
    console.log(evento.target.horaAlarma.value)
  }
 
  return (
     <div>
      <form onSubmit={handleSubmit}>
       <label>Hora de Alarma</label>
       <input className="horaAlarma"  type="datetime-local" name="horaAlarma" />
       {/* <div className="containter__controls"> */}
         <button  type="submit"  className="buttonPonerAlarma"> Poner Alarma</button>	
         
         {/* </div>  */}
      </form>
     </div>
  );
}

