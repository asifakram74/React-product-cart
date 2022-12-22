import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { BsCartDash } from 'react-icons/bs'

const NavScrollExample = ({ setShow, size }) => {


    return (
        <Navbar expand="lg" className='Navbar'>
            <Container>
                <Navbar.Brand href="#" className='logo' onClick={() => setShow(true)}>Website</Navbar.Brand>
                <Navbar.Collapse id="navbarScroll" onClick={() => setShow(false)}>
                    <Form className="d-flex navbarBtn" >
                        <span><BsCartDash /></span>
                        <span>{size}</span>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;