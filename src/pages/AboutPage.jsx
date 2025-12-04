import React from 'react';
import { Container, Row, Col, Card, Button, Breadcrumb } from 'react-bootstrap';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const AboutPage = ({ setCurrentPage }) => {
  const stats = [
    {
      number: '10.5k',
      label: 'Vendeurs actifs sur notre site',
      icon: '🏪',
      color: 'light'
    },
    {
      number: '33k',
      label: 'Ventes de produits mensuelles',
      icon: '💰',
      color: 'danger'
    },
    {
      number: '45.5k',
      label: 'Clients actifs sur notre site',
      icon: '🛍️',
      color: 'light'
    },
    {
      number: '25k',
      label: 'Ventes brutes annuelles sur notre site',
      icon: '💵',
      color: 'light'
    }
  ];

  const team = [
    {
      name: 'Tom Cruise',
      role: 'Fondateur & Président',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
      twitter: '#',
      instagram: '#',
      linkedin: '#'
    },
    {
      name: 'Emma Watson',
      role: 'Directrice Générale',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      twitter: '#',
      instagram: '#',
      linkedin: '#'
    },
    {
      name: 'Will Smith',
      role: 'Designer Produit',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400',
      twitter: '#',
      instagram: '#',
      linkedin: '#'
    }
  ];

  return (
    <div className="bg-light min-vh-100">
      <Container className="py-5">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-5">
          <Breadcrumb.Item onClick={() => setCurrentPage?.('home')} style={{ cursor: 'pointer' }}>
            Accueil
          </Breadcrumb.Item>
          <Breadcrumb.Item active>À propos</Breadcrumb.Item>
        </Breadcrumb>

        {/* Our Story Section */}
        <Row className="align-items-center mb-5 pb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold mb-4">Notre Histoire</h1>
            <p className="mb-4">
              Lancée en 2015, Kya Fashion est la première marketplace de shopping en ligne d'Afrique de l'Ouest 
              avec une présence active au Togo. Soutenue par une large gamme de solutions marketing, 
              de données et de services sur mesure, Kya Fashion compte 10 500 vendeurs et 300 marques 
              et sert 3 millions de clients dans toute la région.
            </p>
            <p className="text-muted">
              Kya Fashion propose plus d'un million de produits, avec une croissance très rapide. 
              Kya Fashion offre un assortiment diversifié dans des catégories allant de la mode aux accessoires.
            </p>
          </Col>
          <Col lg={6}>
            <div className="position-relative">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600" 
                alt="Shopping"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </Col>
        </Row>

        {/* Statistics */}
        <Row className="g-4 mb-5 pb-5">
          {stats.map((stat, index) => (
            <Col key={index} sm={6} lg={3}>
              <Card 
                className={`border-0 shadow-sm h-100 text-center ${stat.color === 'danger' ? 'bg-danger text-white' : 'bg-white'}`}
              >
                <Card.Body className="p-4">
                  <div className={`rounded-circle d-inline-flex align-items-center justify-content-center mb-3 ${stat.color === 'danger' ? 'bg-white' : 'bg-secondary bg-opacity-25'}`} style={{ width: '80px', height: '80px' }}>
                    <span className="fs-1">{stat.icon}</span>
                  </div>
                  <h2 className="fw-bold mb-2">{stat.number}</h2>
                  <p className={`mb-0 ${stat.color === 'danger' ? 'text-white' : 'text-muted'}`}>
                    {stat.label}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Team Section */}
        <div className="mb-5">
          <h2 className="text-center fw-bold mb-5">Notre Équipe</h2>
          <Row className="g-4 justify-content-center">
            {team.map((member, index) => (
              <Col key={index} md={6} lg={4}>
                <Card className="border-0 shadow-sm h-100">
                  <div className="position-relative overflow-hidden" style={{ height: '400px' }}>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <Card.Body className="text-center">
                    <h5 className="fw-bold mb-2">{member.name}</h5>
                    <p className="text-muted mb-3">{member.role}</p>
                    <div className="d-flex justify-content-center gap-3">
                      <a href={member.twitter} className="text-dark">
                        <Twitter size={20} />
                      </a>
                      <a href={member.instagram} className="text-dark">
                        <Instagram size={20} />
                      </a>
                      <a href={member.linkedin} className="text-dark">
                        <Linkedin size={20} />
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Services Section */}
        <Row className="g-4 mt-5 pt-5">
          <Col md={4}>
            <Card className="border-0 text-center h-100">
              <Card.Body className="p-4">
                <div className="bg-secondary bg-opacity-25 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                  <span className="fs-1">🚚</span>
                </div>
                <h5 className="fw-bold mb-3">LIVRAISON GRATUITE ET RAPIDE</h5>
                <p className="text-muted mb-0">
                  Livraison gratuite pour toutes les commandes de plus de 30 000 FCFA
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 text-center h-100">
              <Card.Body className="p-4">
                <div className="bg-secondary bg-opacity-25 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                  <span className="fs-1">🎧</span>
                </div>
                <h5 className="fw-bold mb-3">SERVICE CLIENT 24/7</h5>
                <p className="text-muted mb-0">
                  Support client amical disponible 24h/24 et 7j/7
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 text-center h-100">
              <Card.Body className="p-4">
                <div className="bg-secondary bg-opacity-25 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                  <span className="fs-1">✅</span>
                </div>
                <h5 className="fw-bold mb-3">GARANTIE DE REMBOURSEMENT</h5>
                <p className="text-muted mb-0">
                  Nous vous remboursons dans les 30 jours
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;