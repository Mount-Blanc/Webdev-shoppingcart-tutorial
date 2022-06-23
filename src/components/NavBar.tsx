import {Container, Nav, Navbar as NavbarBs} from "react-bootstrap"

export function NavBar () {
    return (
    <NavbarBs sticky='top' className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className="me-auto">
                <Nav.Link to='/' as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to='/store' as={NavLink}>
                    Store
                </Nav.Link> <Nav.Link to='/about' as={NavLink}>
                    About
                </Nav.Link>
            </Nav>
            <Button>
                <div className='rounded-circle bg-danger d-flex justify-content-center
                align-items-center'
                 style={{ color:'white'}}></div>
            </Button>
        </Container>
     </NavbarBs>
    )
}