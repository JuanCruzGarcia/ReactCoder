import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route, useParams, Link} from "react-router-dom"

function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home">
            <h2 className="titulos">Bienvenidos a Clothing Street</h2>
            <ItemListContainer/>
          </Route> 
          <Route exact path="/contacto">
            <h2 className="titulos">Estas en la seccion contacto</h2>
          </Route>
          <Route exact path="/carrito">
            <h2 className="titulos">Estas en tu carrito</h2>
          </Route>
        </Switch>
      </BrowserRouter>

      <ItemDetailContainer/> 
      
    </div>
   
  );
}

export default App;

