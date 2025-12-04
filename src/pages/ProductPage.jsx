import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import { Star, Plus, Minus, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';
import { products } from '../data/products.jsx';

const ProductPage = ({ product, setCurrentPage }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Veuillez sélectionner une taille');
      return;
    }
    addToCart({ ...product, size: selectedSize }, quantity);
    alert('Produit ajouté au panier !');
  };

  const similarProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-light min-vh-100">
      <Container className="py-5">
        <Button 
          variant="link" 
          className="text-primary-custom text-decoration-none mb-4 p-0"
          onClick={() => setCurrentPage('catalog')}
        >
          ← Retour au catalogue
        </Button>

        <Row className="g-4">
          {/* Image */}
          <Col md={6}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-3">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-image-detail"
                />
              </Card.Body>
            </Card>
          </Col>

          {/* Détails */}
          <Col md={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <small className="text-muted text-uppercase">
                  {product.category}
                </small>
                <h1 className="h2 fw-bold mt-2 mb-3">{product.name}</h1>
                
                <div className="d-flex align-items-center mb-3">
                  <Star className="text-warning" size={20} fill="currentColor" />
                  <span className="ms-2">
                    {product.rating} ({product.reviews} avis)
                  </span>
                </div>

                <p className="text-primary-custom fw-bold display-6 mb-4">
                  {product.price.toFixed(2)} €
                </p>

                <p className="text-muted mb-4">{product.description}</p>

                {/* Taille */}
                <div className="mb-4">
                  <h5 className="fw-semibold mb-3">Taille</h5>
                  <div className="d-flex flex-wrap gap-2">
                    {product.sizes.map(size => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? 'primary' : 'outline-secondary'}
                        className={`size-btn ${selectedSize === size ? 'btn-primary-custom' : ''}`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Quantité */}
                <div className="mb-4">
                  <h5 className="fw-semibold mb-3">Quantité</h5>
                  <div className="quantity-control">
                    <Button 
                      variant="outline-secondary"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus size={20} />
                    </Button>
                    <span className="quantity-value">{quantity}</span>
                    <Button 
                      variant="outline-secondary"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus size={20} />
                    </Button>
                  </div>
                </div>

                {/* Boutons */}
                <div className="d-grid gap-3">
                  <Button 
                    variant="primary" 
                    size="lg"
                    className="btn-primary-custom fw-semibold"
                    onClick={handleAddToCart}
                  >
                    Ajouter au panier
                  </Button>
                  <Button 
                    variant="outline-primary" 
                    size="lg"
                    className="btn-outline-primary-custom fw-semibold"
                  >
                    <Heart size={20} className="me-2" />
                    Ajouter aux favoris
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Produits similaires */}
        {similarProducts.length > 0 && (
          <div className="mt-5">
            <h2 className="fw-bold mb-4">Produits similaires</h2>
            <Row className="g-4">
              {similarProducts.map(p => (
                <Col key={p.id} xs={12} sm={6} md={3}>
                  <Card className="product-card border-0 shadow-sm h-100">
                    <Card.Img 
                      variant="top" 
                      src={p.image} 
                      alt={p.name}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <Card.Title className="h6">{p.name}</Card.Title>
                      <p className="text-primary-custom fw-bold">
                        {p.price.toFixed(2)} €
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductPage;