import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


const ItemList = [
	{ nombre: 'Inicio', enlace: '/' },
	{ nombre: 'Productos', enlace: '/productos' },
	{ nombre: 'Contacto', enlace: '/contacto' },
]

const arrayProductos = [
  {nombre:'Remera', stock:'3'},
  {nombre:'Pantalon', stock:'5'},
  {nombre:'Hoodie', stock:'4'},
]

const inicial=(1)

function App() {

  return (
    <>
    <NavBar data={ItemList} />
    <ItemListContainer greeting="Estamos Trabajando en la Pagina" arrayProductos={arrayProductos} inicial={inicial}/>
    
    </>
    
  );
}

export default App;
