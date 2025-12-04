import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import { Star, Heart } from 'lucide-react';
import { products } from '../data/products.jsx';

const CatalogPage = ({ setCurrentPage, setSelectedProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const categories = ['Tous', 'Robes', 'Hauts', 'Pantalons', 'Vestes', 'Jupes'];

  const filteredProducts = selectedCategory === 'Tous' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-light min-vh-100">
      <Container className="py-5">
        <h1 className="fw-bold mb-4">Notre Catalogue</h1>

        {/* Filtres */}
        <div className="mb-5">
          <h5 className="fw-semibold mb-3">Catégories</h5>
          <div className="d-flex flex-wrap gap-2">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'primary' : 'outline-secondary'}
                className={selectedCategory === cat ? 'btn-primary-custom' : ''}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Produits */}
        <Row className="g-4">
          {filteredProducts.map(product => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="product-card border-0 shadow-sm h-100">
                <div className="position-relative">
                  <Card.Img 
                    variant="top" 
                    src={product.image} 
                    alt={product.name}
                    className="product-image"
                  />
                  <Button 
                    variant="light" 
                    className="position-absolute top-0 end-0 m-3 rounded-circle p-2"
                    style={{ width: '40px', height: '40px' }}
                  >
                    <Heart size={20} className="text-primary-custom" />
                  </Button>
                </div>
                <Card.Body>
                  <small className="text-muted text-uppercase">
                    {product.category}
                  </small>
                  <Card.Title className="h6 mt-2">{product.name}</Card.Title>
                  <div className="d-flex align-items-center mb-2">
                    <Star className="text-warning" size={16} fill="currentColor" />
                    <span className="ms-1 small text-muted">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  <p className="text-primary-custom fw-bold fs-5 mb-3">
                    {product.price.toFixed(2)} €
                  </p>
                  <Button 
                    variant="primary" 
                    className="btn-primary-custom w-100"
                    onClick={() => {
                      setSelectedProduct(product);
                      setCurrentPage('product');
                    }}
                  >
                    Voir détails
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CatalogPage;