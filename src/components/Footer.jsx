import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="footer-dark py-5">
      <Container>
        <Row className="mb-4">
          <Col md={3} className="mb-4">
            <h5 className="fw-bold mb-3">Kya Fashion</h5>
            <h6 className="mb-3">Abonnez-vous</h6>
            <p className="text-muted mb-3">
              Obtenez 10% de réduction sur votre première commande
            </p>
            <InputGroup>
              <Form.Control
                type="email"
                placeholder="Entrez votre email"
                className="bg-transparent text-white border-white"
              />
              <Button variant="outline-light">
                <Send size={18} />
              </Button>
            </InputGroup>
          </Col>
          
          <Col md={2} className="mb-4">
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <small>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</small>
              </li>
              <li className="mb-2">
                <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
              </li>
              <li className="mb-2">
                <a href="tel:+88015-88888-9999">+88015-88888-9999</a>
              </li>
            </ul>
          </Col>
          
          <Col md={2} className="mb-4">
            <h6 className="fw-bold mb-3">Compte</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage?.('login'); }}>
                  Mon Compte
                </a>
              </li>
              <li className="mb-2">
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage?.('login'); }}>
                  Connexion / Inscription
                </a>
              </li>
              <li className="mb-2">
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage?.('cart'); }}>
                  Panier
                </a>
              </li>
              <li className="mb-2">
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage?.('catalog'); }}>
                  Boutique
                </a>
              </li>
            </ul>
          </Col>

          <Col md={2} className="mb-4">
            <h6 className="fw-bold mb-3">Liens rapides</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#politique">Politique de confidentialité</a>
              </li>
              <li className="mb-2">
                <a href="#conditions">Conditions d'utilisation</a>
              </li>
              <li className="mb-2">
                <a href="#faq">FAQ</a>
              </li>
              <li className="mb-2">
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage?.('contact'); }}>
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          
          <Col md={3} className="mb-4">
            <h6 className="fw-bold mb-3">Télécharger l'application</h6>
            <p className="text-muted small mb-3">
              Économisez 3€ avec l'application pour nouveaux utilisateurs
            </p>
            <div className="mb-3">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" 
                alt="QR Code"
                style={{ width: '80px', height: '80px', background: 'white', padding: '5px' }}
                className="mb-2"
              />
              <div className="d-flex flex-column gap-2">
                <Button variant="dark" size="sm" className="text-start">
                  <small>Télécharger sur</small><br />
                  <strong>Google Play</strong>
                </Button>
                <Button variant="dark" size="sm" className="text-start">
                  <small>Disponible sur</small><br />
                  <strong>App Store</strong>
                </Button>
              </div>
            </div>
            <div className="d-flex gap-3 mt-3">
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
        
        <Row className="border-top pt-4 mt-4">
          <Col className="text-center">
            <p className="text-muted mb-0">
              <small>&copy; Copyright Rimel 2025. Tous droits réservés</small>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;