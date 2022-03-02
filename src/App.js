import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartProvider';
import Form from './components/Form/Form';
import { LoremIpsum } from 'react-lorem-ipsum'
import Footer from './components/Footer/Footer'
import Contacto from './components/Contacto/Contacto';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import IMGPrincipal from '../src/Imagenes/Untitled.png'
import IMGContacto from '../src/Imagenes/contactUs.png'
import LogoPrincipal from '../src/Imagenes/PrincipalSC.png'
import Fondo from '../src/Imagenes/fondo.png'




function App() {
  return (
    
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
            <Switch>
              <Route exact path="/">              
                <img src={IMGPrincipal} alt="" className='imgPrincipal' />
                  <section className='fondo'>
                    <div className='este'>
                      <img src={LogoPrincipal} className='logoPrincipal'  />
                      <LoremIpsum />
                    </div>
                    <img src={Fondo} className='wave'/> 
                    <ItemListContainer />
                  </section>
              </Route>         
              <Route path='/category/:categoryName'>
                <section className='fondoID'>
                  <ItemListContainer/>
                </section>
              </Route>
              <Route exact path="/contacto">
                <img src={IMGContacto} className='imgPrincipal'/>
                <Contacto/>
              </Route>
              <Route path='/item/:itemId'>
              <ItemDetailContainer />
              </Route>
              <Route exact path="/carrito">
                <Cart/>
              </Route>
              <Route exact path="/formcompra">
              <Form />
            </Route>
            </Switch>
          </BrowserRouter>
        </CartProvider>
  
          <Footer/> 
        
    </div>
   
  );
}


export default App;
