import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const TopBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">GeoLayers</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">
                    <Link to="/">Visualizar </Link>
                </Nav.Link>
                
                <Nav.Link href="#features">
                    <Link to="/import">Nova Camada</Link>
                </Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default TopBar
