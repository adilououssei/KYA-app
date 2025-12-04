import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';

const CartPage = ({ setCurrentPage }) => {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const fraisLivraison = cart.length > 0 ? 5.99 : 0;
  const total = getCartTotal() + fraisLivraison;

  if (cart.length === 0) {
    return (
      <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
        <Container>
          <div className="text-center">
            <ShoppingCart size={64} className="text-secondary mb-4" />
            <h2 className="fw-bold mb-4">Votre panier est vide</h2>
            <Button 
              variant="primary" 
              size="lg"
              className="btn-primary-custom"
              onClick={() => setCurrentPage('catalog')}
            >
              Continuer vos achats
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-light min-vh-100">
      <Container className="py-5">
        <h1 className="fw-bold mb-4">Mon Panier</h1>

        <Row className="g-4">
          {/* Produits */}
          <Col lg={8}>
            <div className="d-flex flex-column gap-3">
              {cart.map(item => (
                <Card key={`${item.id}-${item.size}`} className="border-0 shadow-sm">
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col xs={3} md={2}>
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="img-fluid rounded"
                          style={{ width: '100%', height: '100px', objectFit: 'cover' }}
                        />
                      </Col>
                      <Col xs={6} md={5}>
                        <h5 className="mb-1">{item.name}</h5>
                        <p className="text-muted mb-1">Taille: {item.size}</p>
                        <p className="text-primary-custom fw-bold mb-0">
                          {item.price.toFixed(2)} €
                        </p>
                      </Col>
                      <Col xs={3} md={3}>
                        <div className="d-flex align-items-center justify-content-center gap-2">
                          <Button 
                            variant="outline-secondary" 
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          >
                            <Minus size={16} />
                          </Button>
                          <span className="fw-bold mx-2">{item.quantity}</span>
                          <Button 
                            variant="outline-secondary" 
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          >
                            <Plus size={16} />
                          </Button>
                        </div>
                      </Col>
                      <Col xs={12} md={2} className="text-end mt-3 mt-md-0">
                        <Button 
                          variant="outline-danger"
                          size="sm"
                          onClick={() => removeFromCart(item.id, item.size)}
                        >
                          <Trash2 size={18} />
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>

          {/* Résumé */}
          <Col lg={4}>
            <Card className="border-0 shadow-sm sticky-top" style={{ top: '100px' }}>
              <Card.Body className="p-4">
                <h4 className="fw-bold mb-4">Résumé</h4>
                <ListGroup variant="flush" className="mb-4">
                  <ListGroup.Item className="d-flex justify-content-between px-0 border-0">
                    <span>Sous-total</span>
                    <span>{getCartTotal().toFixed(2)} €</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between px-0 border-0">
                    <span>Livraison</span>
                    <span>{fraisLivraison.toFixed(2)} €</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between px-0 border-top pt-3">
                    <strong className="fs-5">Total</strong>
                    <strong className="fs-5 text-primary-custom">
                      {total.toFixed(2)} €
                    </strong>
                  </ListGroup.Item>
                </ListGroup>
                <div className="d-grid gap-3">
                  <Button 
                    variant="primary" 
                    size="lg"
                    className="btn-primary-custom fw-semibold"
                  >
                    Passer la commande
                  </Button>
                  <Button 
                    variant="outline-primary" 
                    size="lg"
                    className="btn-outline-primary-custom"
                    onClick={() => setCurrentPage('catalog')}
                  >
                    Continuer mes achats
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartPage;