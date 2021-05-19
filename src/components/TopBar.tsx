import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


const TopBar = (): JSX.Element => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">GeoLayers</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link>
                    <Link to="/">Visualizar </Link>
                </Nav.Link>
                
                <Nav.Link>
                    <Link to="/upload">Nova Camada</Link>
                </Nav.Link>

                <Nav.Link>
                    <Link to="/tarefas">Fila</Link>
                </Nav.Link>
            </Nav>
        </Navbar>
    );
}


export default TopBar
