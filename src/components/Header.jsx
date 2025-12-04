import React from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { ShoppingCart, Search, User, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';

const Header = ({ currentPage, setCurrentPage }) => {
  const { getCartCount } = useCart();

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm sticky-top">
      <Container>
        <Navbar.Brand 
          onClick={() => setCurrentPage('home')} 
          style={{ cursor: 'pointer' }}
          className="fw-bold"
        >
          Kya Fashion
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link 
              onClick={() => setCurrentPage('home')}
              active={currentPage === 'home'}
              className="fw-semibold"
            >
              Accueil
            </Nav.Link>
            <Nav.Link 
              onClick={() => setCurrentPage('about')}
              active={currentPage === 'about'}
              className="fw-semibold"
            >
              À propos
            </Nav.Link>
            <Nav.Link 
              onClick={() => setCurrentPage('catalog')}
              active={currentPage === 'catalog'}
              className="fw-semibold"
            >
              Catalogue
            </Nav.Link>
            <Nav.Link 
              onClick={() => setCurrentPage('contact')}
              active={currentPage === 'contact'}
              className="fw-semibold"
            >
              Contact
            </Nav.Link>
            
          </Nav>
          
          <Nav className="ms-auto d-flex align-items-center gap-3">
            <Nav.Link className="d-none d-lg-block">
              <Search size={24} />
            </Nav.Link>
            <Nav.Link className="d-none d-lg-block position-relative">
              <Heart size={24} />
              <Badge 
                bg="danger" 
                pill 
                className="position-absolute top-0 start-100 translate-middle"
                style={{ fontSize: '10px' }}
              >
                0
              </Badge>
            </Nav.Link>
            <Nav.Link 
              onClick={() => setCurrentPage('cart')}
              className="position-relative"
            >
              <ShoppingCart size={24} />
              {getCartCount() > 0 && (
                <Badge 
                  bg="danger" 
                  pill 
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {getCartCount()}
                </Badge>
              )}
            </Nav.Link>
            <Nav.Link 
              onClick={() => setCurrentPage('login')}
              className="d-none d-lg-block"
            >
              <User size={24} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;