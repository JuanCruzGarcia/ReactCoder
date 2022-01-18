import React, {useState}  from 'react';
import AddOn from '../CartWidget/AddOn';

const ItemCount = ({stock, inicial, nombre}) => {

    const [contador, setContador] = useState(stock <= 0 ? 0 : inicial);
    const Suma = () => setContador(contador < stock ? contador + 1 : contador);
    const Resta = () => setContador(contador > inicial ? contador - 1 : inicial);
    const StockControl = stock <= 0 ? 'Sin Stock' : contador;
    const ClickAddOn = () => stock <= 0 ? alert('Sin Stock') : AddOn({nombre, contador}); 
    
    return (
   <>
      <div className="card text-center card text-white bg-dark mb-3">

         <div className="card-body">
               <h1 className='card-title'>{nombre}</h1>  

            <div class="btn-group" role="group" aria-label="Basic example">
               <button onClick={Resta} className="btn btn-outline-danger btn-sm"> - </button>
               <h3>  {StockControl}  </h3> 
               <button onClick={Suma} className="btn btn-outline-success btn-sm"> + </button>
            </div> 
              
            <div>
               <button onClick={ClickAddOn} className="btn btn-outline-info btn-sm btn-block">Agregar al Carrito</button>
            </div>
         </div>
      </div>
   </>
    )
}

export default ItemCount

