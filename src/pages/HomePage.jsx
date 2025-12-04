import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { Star, ArrowRight, Truck, Headphones, ShieldCheck } from 'lucide-react';
import { products } from '../data/products.jsx';

const HomePage = ({ setCurrentPage, setSelectedProduct }) => {
  const featuredProducts = products.slice(0, 4);
  const bestSellingProducts = products.slice(0, 8);
  
  // Compte à rebours Flash Sales
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const categories = [
    { name: 'Robes', icon: '👗' },
    { name: 'Hauts', icon: '👕' },
    { name: 'Pantalons', icon: '👖' },
    { name: 'Vestes', icon: '🧥' },
    { name: 'Accessoires', icon: '👜' },
    { name: 'Chaussures', icon: '👠' }
  ];

  return (
    <div className="bg-light">
      {/* Barre de promotion */}
      <div className="bg-dark text-white text-center py-2">
        <small>
          Promotion d'été sur tous les produits - Livraison gratuite - REMISE DE 50%! 
          <Button variant="link" className="text-white text-decoration-underline ms-2 p-0" size="sm">
            Acheter maintenant
          </Button>
        </small>
      </div>

      {/* Hero Section avec Carousel */}
      <section className="bg-white py-4">
        <Container fluid>
          <Row>
            {/* Menu latéral des catégories */}
            <Col md={2} className="d-none d-md-block">
              <Card className="border-0">
                <Card.Body className="p-0">
                  <h6 className="fw-bold mb-3 px-3 pt-3">Catégories</h6>
                  <div className="list-group list-group-flush">
                    {categories.map(cat => (
                      <button
                        key={cat.name}
                        className="list-group-item list-group-item-action border-0 d-flex align-items-center"
                        onClick={() => setCurrentPage('catalog')}
                      >
                        <span className="me-2">{cat.icon}</span>
                        <span>{cat.name}</span>
                      </button>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Carousel Hero */}
            <Col md={10}>
              <Carousel>
                <Carousel.Item>
                  <div className="bg-primary-gradient hero-section rounded d-flex align-items-center position-relative overflow-hidden">
                    <Container>
                      <Row className="align-items-center">
                        <Col md={6}>
                          <h1 className="display-3 fw-bold mb-4">
                            Nouvelle Collection
                          </h1>
                          <p className="lead fs-4 mb-5">
                            Jusqu'à 10% de réduction sur les bons d'achat
                          </p>
                          <Button 
                            variant="light" 
                            size="lg" 
                            className="rounded-pill px-5"
                            onClick={() => setCurrentPage('catalog')}
                          >
                            Acheter maintenant →
                          </Button>
                        </Col>
                        <Col md={6} className="text-center">
                          <img 
                            src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500" 
                            alt="Fashion Model"
                            className="img-fluid"
                            style={{ maxHeight: '400px', objectFit: 'contain' }}
                          />
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="bg-dark hero-section rounded d-flex align-items-center text-white position-relative overflow-hidden">
                    <Container>
                      <Row className="align-items-center">
                        <Col md={6}>
                          <h1 className="display-3 fw-bold mb-4">
                            Mode Tendance
                          </h1>
                          <p className="lead fs-4 mb-5">
                            Découvrez les dernières tendances mode
                          </p>
                          <Button 
                            variant="danger" 
                            size="lg" 
                            className="rounded-pill px-5"
                            onClick={() => setCurrentPage('catalog')}
                          >
                            Voir maintenant →
                          </Button>
                        </Col>
                        <Col md={6} className="text-center">
                          <img 
                            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500" 
                            alt="Fashion Collection"
                            className="img-fluid"
                            style={{ maxHeight: '400px', objectFit: 'contain' }}
                          />
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="hero-section rounded d-flex align-items-center text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                    <Container>
                      <Row className="align-items-center">
                        <Col md={6}>
                          <h1 className="display-3 fw-bold mb-4">
                            Style Unique
                          </h1>
                          <p className="lead fs-4 mb-5">
                            Exprimez votre personnalité avec nos créations
                          </p>
                          <Button 
                            variant="light" 
                            size="lg" 
                            className="rounded-pill px-5"
                            onClick={() => setCurrentPage('catalog')}
                          >
                            Explorer →
                          </Button>
                        </Col>
                        <Col md={6} className="text-center">
                          <img 
                            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500" 
                            alt="Fashion Style"
                            className="img-fluid"
                            style={{ maxHeight: '400px', objectFit: 'contain' }}
                          />
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Flash Sales avec compte à rebours */}
      <section className="py-5">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="fw-bold mb-0">
                <span className="text-danger me-3">⚡</span>
                Ventes Flash
              </h2>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <div className="text-center">
                <div className="bg-white rounded px-3 py-2 shadow-sm">
                  <div className="fw-bold fs-4">{String(timeLeft.days).padStart(2, '0')}</div>
                  <small className="text-muted">Jours</small>
                </div>
              </div>
              <span className="fw-bold">:</span>
              <div className="text-center">
                <div className="bg-white rounded px-3 py-2 shadow-sm">
                  <div className="fw-bold fs-4">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <small className="text-muted">Heures</small>
                </div>
              </div>
              <span className="fw-bold">:</span>
              <div className="text-center">
                <div className="bg-white rounded px-3 py-2 shadow-sm">
                  <div className="fw-bold fs-4">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <small className="text-muted">Minutes</small>
                </div>
              </div>
              <span className="fw-bold">:</span>
              <div className="text-center">
                <div className="bg-white rounded px-3 py-2 shadow-sm">
                  <div className="fw-bold fs-4">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <small className="text-muted">Secondes</small>
                </div>
              </div>
            </div>
          </div>

          <Row className="g-4">
            {featuredProducts.map(product => (
              <Col key={product.id} xs={12} sm={6} lg={3}>
                <Card className="product-card border-0 shadow-sm h-100">
                  <div className="position-relative">
                    <span className="badge bg-danger position-absolute top-0 start-0 m-3">-35%</span>
                    <Card.Img 
                      variant="top" 
                      src={product.image} 
                      alt={product.name}
                      className="product-image"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="h6">{product.name}</Card.Title>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="text-danger fw-bold fs-5">{product.price.toFixed(2)} €</span>
                      <span className="text-muted text-decoration-line-through small">
                        {(product.price * 1.5).toFixed(2)} €
                      </span>
                    </div>
                    <div className="d-flex align-items-center">
                      <Star className="text-warning" size={16} fill="currentColor" />
                      <span className="ms-1 small text-muted">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-4">
            <Button 
              variant="danger" 
              size="lg"
              onClick={() => setCurrentPage('catalog')}
            >
              Voir tous les produits
            </Button>
          </div>
        </Container>
      </section>

      {/* Browse by Category */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="fw-bold mb-4">
            <span className="text-danger me-3">📦</span>
            Parcourir par catégorie
          </h2>
          <Row className="g-4">
            {categories.map(cat => (
              <Col key={cat.name} xs={6} md={4} lg={2}>
                <Card 
                  className="category-card text-center border-0 shadow-sm h-100"
                  onClick={() => setCurrentPage('catalog')}
                >
                  <Card.Body className="p-4">
                    <div className="fs-1 mb-3">{cat.icon}</div>
                    <h6 className="fw-semibold mb-0">{cat.name}</h6>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Best Selling Products */}
      <section className="py-5">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold mb-0">
              <span className="text-danger me-3">🔥</span>
              Meilleurs ventes
            </h2>
            <Button 
              variant="danger"
              onClick={() => setCurrentPage('catalog')}
            >
              Voir tout
            </Button>
          </div>

          <Row className="g-4">
            {bestSellingProducts.map(product => (
              <Col key={product.id} xs={12} sm={6} lg={3}>
                <Card className="product-card border-0 shadow-sm h-100">
                  <Card.Img 
                    variant="top" 
                    src={product.image} 
                    alt={product.name}
                    className="product-image"
                  />
                  <Card.Body>
                    <Card.Title className="h6">{product.name}</Card.Title>
                    <div className="d-flex align-items-center mb-2">
                      <Star className="text-warning" size={16} fill="currentColor" />
                      <span className="ms-1 small text-muted">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                    <p className="text-danger fw-bold fs-5 mb-3">
                      {product.price.toFixed(2)} €
                    </p>
                    <Button 
                      variant="outline-dark" 
                      className="w-100"
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
      </section>

      {/* Featured Banner */}
      <section className="py-5 bg-white">
        <Container>
          <Card className="border-0 bg-dark text-white overflow-hidden">
            <Row className="g-0 align-items-center">
              <Col md={6}>
                <Card.Body className="p-5">
                  <small className="text-success fw-semibold">Catégories</small>
                  <h2 className="display-5 fw-bold my-4">
                    Améliorez votre expérience musicale
                  </h2>
                  <div className="d-flex gap-3 mb-4">
                    <div className="text-center bg-white text-dark rounded-circle p-3" style={{ width: '70px', height: '70px' }}>
                      <div className="fw-bold">23</div>
                      <small style={{ fontSize: '10px' }}>Heures</small>
                    </div>
                    <div className="text-center bg-white text-dark rounded-circle p-3" style={{ width: '70px', height: '70px' }}>
                      <div className="fw-bold">05</div>
                      <small style={{ fontSize: '10px' }}>Jours</small>
                    </div>
                    <div className="text-center bg-white text-dark rounded-circle p-3" style={{ width: '70px', height: '70px' }}>
                      <div className="fw-bold">59</div>
                      <small style={{ fontSize: '10px' }}>Minutes</small>
                    </div>
                    <div className="text-center bg-white text-dark rounded-circle p-3" style={{ width: '70px', height: '70px' }}>
                      <div className="fw-bold">35</div>
                      <small style={{ fontSize: '10px' }}>Secondes</small>
                    </div>
                  </div>
                  <Button variant="success" size="lg">
                    Acheter maintenant!
                  </Button>
                </Card.Body>
              </Col>
              <Col md={6}>
                <div className="p-5">
                  <img 
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" 
                    alt="Featured Product"
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </Card>
        </Container>
      </section>

      {/* New Arrival */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold mb-4">
            <span className="text-danger me-3">✨</span>
            Nouveautés
          </h2>
          <Row className="g-4">
            <Col md={6}>
              <Card className="border-0 bg-dark text-white overflow-hidden h-100" style={{ minHeight: '400px' }}>
                <Card.Body className="d-flex flex-column justify-content-end p-5">
                  <h3 className="fw-bold mb-3">Collection Femme</h3>
                  <p className="mb-4">Découvrez notre nouvelle collection exclusive pour femmes</p>
                  <Button variant="light" className="align-self-start">
                    Acheter maintenant
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Row className="g-4">
                <Col xs={12}>
                  <Card className="border-0 bg-secondary text-white overflow-hidden" style={{ minHeight: '190px' }}>
                    <Card.Body className="d-flex flex-column justify-content-end p-4">
                      <h5 className="fw-bold mb-2">Enceintes</h5>
                      <p className="mb-3 small">Amazon wireless speakers</p>
                      <Button variant="light" size="sm" className="align-self-start">
                        Acheter
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12}>
                  <Card className="border-0 bg-info text-white overflow-hidden" style={{ minHeight: '190px' }}>
                    <Card.Body className="d-flex flex-column justify-content-end p-4">
                      <h5 className="fw-bold mb-2">Parfums</h5>
                      <p className="mb-3 small">GUCCI INTENSE OUD EDP</p>
                      <Button variant="light" size="sm" className="align-self-start">
                        Acheter
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="g-4 text-center">
            <Col md={4}>
              <div className="mb-3">
                <div className="bg-secondary bg-opacity-25 rounded-circle d-inline-flex p-4 mb-3">
                  <Truck size={40} className="text-dark" />
                </div>
              </div>
              <h5 className="fw-bold">LIVRAISON GRATUITE ET RAPIDE</h5>
              <p className="text-muted">Livraison gratuite pour toutes les commandes de plus de 140€</p>
            </Col>
            <Col md={4}>
              <div className="mb-3">
                <div className="bg-secondary bg-opacity-25 rounded-circle d-inline-flex p-4 mb-3">
                  <Headphones size={40} className="text-dark" />
                </div>
              </div>
              <h5 className="fw-bold">SERVICE CLIENT 24/7</h5>
              <p className="text-muted">Support client amical 24/7</p>
            </Col>
            <Col md={4}>
              <div className="mb-3">
                <div className="bg-secondary bg-opacity-25 rounded-circle d-inline-flex p-4 mb-3">
                  <ShieldCheck size={40} className="text-dark" />
                </div>
              </div>
              <h5 className="fw-bold">GARANTIE DE REMBOURSEMENT</h5>
              <p className="text-muted">Nous vous remboursons sous 30 jours</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;