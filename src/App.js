import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Switch>
            <Route exact path="/">
              <h2 className="titulos">Bienvenidos a Street Clothing </h2>
              <ItemListContainer/>
            </Route>         
            <Route path='/category/:categoryName'>
              <ItemListContainer/>
            </Route>
            <Route exact path="/contacto">
              <h2 className="titulos">Estas en la seccion contacto</h2>
            </Route>
             <Route path='/item/:itemId'>
            <ItemDetailContainer />
            </Route>
            <Route exact path="/carrito">
              <h2 className="titulos">Estas en tu carrito</h2>
            </Route>
          </Switch>
        </BrowserRouter>
      
    </div>
   
  );
}

export default App;
