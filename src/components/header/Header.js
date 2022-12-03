import { Container, Navbar, Nav } from 'react-bootstrap';
import { TODOAppState } from '../../store/Context';

const Header = () => {
    const { setState } = TODOAppState() || { setState: function () { } };

    return (<Navbar aria-label='tv show header' data-testid="header" bg='dark' variant='dark' className='app-header'>
        <Container>
            <Navbar.Brand className='flex-header--item-left'>
                <span>TODO APP</span>
            </Navbar.Brand>
            <Navbar.Brand className='flex-header--item-right'>
                <button data-testid="header-btn" onClick={() => setState({ isAddToDoShow: true })} className='button'>Add TODO</button>
            </Navbar.Brand>
        </Container>
        <Nav></Nav>
    </Navbar>);
}

export default Header;