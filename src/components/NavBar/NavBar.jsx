import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Navbar, Nav, Container } from 'react-bootstrap'

const NavBar = ({ data }) => {
	return (
		<>
			<Navbar bg='dark' expand='lg'  variant="dark">
				<Container>
					<Navbar.Brand href='#home'>Clothing Street</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							{data.map((item) => {
                                return <Nav.Link href={item.enlace}>{ item.nombre}</Nav.Link>
							})}
						</Nav>
                        <Nav className="justify-content-end">
                            <CartWidget/>
                        </Nav>
					</Navbar.Collapse>
                    
				</Container>
                
			</Navbar>
		</>
	)
}

export default NavBar

   