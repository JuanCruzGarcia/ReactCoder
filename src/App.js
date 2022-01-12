import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


const ItemList = [
	{ nombre: 'Inicio', enlace: '/' },
	{ nombre: 'Productos', enlace: '/productos' },
	{ nombre: 'Contacto', enlace: '/contacto' },
]

function App() {
  return (
    <>
    <NavBar data={ItemList} />
    <ItemListContainer greeting="Estamos Trabajando en la Pagina"/>
    </>
    
  );
}

export default App;
