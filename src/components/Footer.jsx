import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert('Merci pour votre inscription !');
      setEmail('');
    }
  };

  return (
    <footer className="footer-dark py-5">
      <Container>
        <Row className="mb-5">
          <Col md={3} className="mb-4">
            <h5 className="fw-bold mb-3 text-white">Kya Fashion</h5>
            <h6 className="mb-3 text-white">Abonnez-vous</h6>
            <p className="mb-3" style={{ color: '#d1d5db' }}>
              Obtenez 10% de réduction sur votre première commande
            </p>
            <Form onSubmit={handleSubscribe}>
              <InputGroup>
                <Form.Control
                  type="email"
                  placeholder="Entrez votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-dark text-white border-white"
                  style={{ borderRight: 'none' }}
                />
                <Button variant="dark" type="submit" className="border-white" style={{ borderLeft: 'none' }}>
                  <Send size={18} className="text-white" />
                </Button>
              </InputGroup>
            </Form>
          </Col>
          
          <Col md={2} className="mb-4">
            <h6 className="fw-bold mb-3 text-white">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <small style={{ color: '#d1d5db' }}>
                  111 Bijoy sarani, Dhaka,<br />
                  DH 1515, Bangladesh.
                </small>
              </li>
              <li className="mb-2">
                <a href="mailto:exclusive@gmail.com" style={{ color: '#d1d5db', textDecoration: 'none' }}>
                  exclusive@gmail.com
                </a>
              </li>
              <li className="mb-2">
                <a href="tel:+88015-88888-9999" style={{ color: '#d1d5db', textDecoration: 'none' }}>
                  +88015-88888-9999
                </a>
              </li>
            </ul>
          </Col>
          
          <Col md={2} className="mb-4">
            <h6 className="fw-bold mb-3 text-white">Compte</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); setCurrentPage?.('login'); }}
                  style={{ color: '#d1d5db', textDecoration: 'none' }}
                  onMouseOver={(e) => e.target.style.color = 'white'}
                  onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                >
                  Mon Compte
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); setCurrentPage?.('signup'); }}
                  style={{ color: '#d1d5db', textDecoration: 'none' }}
                  onMouseOver={(e) => e.target.style.color = 'white'}
                  onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                >
                  Connexion / Inscription
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); setCurrentPage?.('cart'); }}
                  style={{ color: '#d1d5db', textDecoration: 'none' }}
                  onMouseOver={(e) => e.target.style.color = 'white'}
                  onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                >
                  Panier
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); setCurrentPage?.('catalog'); }}
                  style={{ color: '#d1d5db', textDecoration: 'none' }}
                  onMouseOver={(e) => e.target.style.color = 'white'}
                  onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                >
                  Boutique
                </a>
              </li>
            </ul>
          </Col>

          <Col md={2} className="mb-4">
            <h6 className="fw-bold mb-3 text-white">Liens rapides</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a 
                  href="#politique"
                  style={{ color: '#d1d5db', textDecoration: 'none' }}
                  onMouseOver={(e) => e.target.style.color = 'white'}
                  onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                >
                  Politique de confidentialité
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="#conditions"
                  style={{ color: '#d1d5db', textDecoration: 'none' }}
                  onMouseOver={(e) => e.target.style.color = 'white'}
                  onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                >
                  Conditions d'utilisation
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="#faq"
                  style={{ color: '#d1d5db', textDecoration: 'none' }}
                  onMouseOver={(e) => e.target.style.color = 'white'}
                  onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                >
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); setCurrentPage?.('contact'); }}
                  style={{ color: '#d1d5db', textDecoration: 'none' }}
                  onMouseOver={(e) => e.target.style.color = 'white'}
                  onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                >
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          
          <Col md={3} className="mb-4">
            <h6 className="fw-bold mb-3 text-white">Télécharger l'application</h6>
            <p className="small mb-3" style={{ color: '#d1d5db' }}>
              Économisez 3€ avec l'application pour nouveaux utilisateurs
            </p>
            <div className="mb-3">
              <div className="d-flex gap-3 align-items-start">
                <div className="bg-white p-2 rounded">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" 
                    alt="QR Code"
                    style={{ width: '80px', height: '80px' }}
                  />
                </div>
                <div className="d-flex flex-column gap-2">
                  <Button 
                    variant="dark" 
                    size="sm" 
                    className="text-start border border-white text-white"
                    style={{ minWidth: '120px' }}
                  >
                    <small style={{ color: '#d1d5db' }}>Télécharger sur</small><br />
                    <strong className="text-white">Google Play</strong>
                  </Button>
                  <Button 
                    variant="dark" 
                    size="sm" 
                    className="text-start border border-white text-white"
                    style={{ minWidth: '120px' }}
                  >
                    <small style={{ color: '#d1d5db' }}>Disponible sur</small><br />
                    <strong className="text-white">App Store</strong>
                  </Button>
                </div>
              </div>
            </div>
            <div className="d-flex gap-3 mt-4">
              <a href="#facebook" className="text-white">
                <Facebook size={24} />
              </a>
              <a href="#twitter" className="text-white">
                <Twitter size={24} />
              </a>
              <a href="#instagram" className="text-white">
                <Instagram size={24} />
              </a>
              <a href="#linkedin" className="text-white">
                <Linkedin size={24} />
              </a>
            </div>
          </Col>
        </Row>
        
        <Row className="border-top pt-4 mt-4" style={{ borderColor: '#4b5563 !important' }}>
          <Col className="text-center">
            <p className="mb-0" style={{ color: '#9ca3af' }}>
              <small>&copy; Copyright Rimel 2022. Tous droits réservés</small>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;