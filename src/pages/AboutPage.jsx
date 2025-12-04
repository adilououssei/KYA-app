import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <div className="bg-light min-vh-100">
      <Container className="py-5">
        <h1 className="text-center fw-bold mb-5">À propos de Kya Fashion</h1>

        <Card className="border-0 shadow-sm mb-4">
          <Card.Body className="p-4">
            <h3 className="fw-bold mb-3">Notre Histoire</h3>
            <p className="text-muted mb-3">
              Kya Fashion est née d'une passion pour la mode accessible et tendance. 
              Depuis notre création, nous nous efforçons d'offrir à nos clients des 
              vêtements de qualité qui reflètent les dernières tendances tout en 
              restant abordables.
            </p>
            <p className="text-muted mb-0">
              Notre équipe de designers travaille sans relâche pour créer des 
              collections qui inspirent et permettent à chacun d'exprimer sa 
              personnalité unique à travers son style vestimentaire.
            </p>
          </Card.Body>
        </Card>

        <Row className="g-4 mb-4">
          <Col md={4}>
            <Card className="border-0 shadow-sm text-center h-100">
              <Card.Body className="p-4">
                <div className="fs-1 mb-3">🌟</div>
                <h5 className="fw-bold mb-3">Qualité Premium</h5>
                <p className="text-muted mb-0">
                  Des matériaux soigneusement sélectionnés pour un confort optimal
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 shadow-sm text-center h-100">
              <Card.Body className="p-4">
                <div className="fs-1 mb-3">🚚</div>
                <h5 className="fw-bold mb-3">Livraison Rapide</h5>
                <p className="text-muted mb-0">
                  Recevez vos commandes en 3-5 jours ouvrés
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 shadow-sm text-center h-100">
              <Card.Body className="p-4">
                <div className="fs-1 mb-3">♻️</div>
                <h5 className="fw-bold mb-3">Éco-responsable</h5>
                <p className="text-muted mb-0">
                  Nous nous engageons pour une mode durable
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Card className="border-0 shadow-sm mb-4">
          <Card.Body className="p-4">
            <h3 className="fw-bold mb-4">Nos Valeurs</h3>
            <Row>
              <Col md={6} className="mb-3">
                <div className="d-flex align-items-start">
                  <span className="text-primary-custom fw-bold me-3 fs-5">✓</span>
                  <div>
                    <strong>Accessibilité :</strong> Mode de qualité accessible à tous
                  </div>
                </div>
              </Col>
              <Col md={6} className="mb-3">
                <div className="d-flex align-items-start">
                  <span className="text-primary-custom fw-bold me-3 fs-5">✓</span>
                  <div>
                    <strong>Innovation :</strong> Toujours à la pointe des tendances
                  </div>
                </div>
              </Col>
              <Col md={6} className="mb-3">
                <div className="d-flex align-items-start">
                  <span className="text-primary-custom fw-bold me-3 fs-5">✓</span>
                  <div>
                    <strong>Durabilité :</strong> Engagement pour l'environnement
                  </div>
                </div>
              </Col>
              <Col md={6} className="mb-3">
                <div className="d-flex align-items-start">
                  <span className="text-primary-custom fw-bold me-3 fs-5">✓</span>
                  <div>
                    <strong>Service client :</strong> Votre satisfaction est notre priorité
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card className="border-0 shadow-sm bg-primary-gradient text-white text-center">
          <Card.Body className="p-5">
            <h3 className="fw-bold mb-3">Rejoignez-nous !</h3>
            <p className="mb-4 fs-5">
              Inscrivez-vous à notre newsletter pour recevoir nos offres exclusives
            </p>
            <Button 
              variant="light" 
              size="lg"
              className="rounded-pill px-5 fw-semibold"
            >
              S'inscrire
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default AboutPage;