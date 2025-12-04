import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const SignUpPage = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Compte créé avec succès !');
    setCurrentPage('home');
  };

  const handleGoogleSignup = () => {
    alert('Inscription avec Google');
  };

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="g-0">
          {/* Image à gauche */}
          <Col lg={6} className="d-none d-lg-block">
            <div 
              className="h-100 d-flex align-items-center justify-content-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '700px'
              }}
            >
              <div className="text-white text-center p-5">
                <img 
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400" 
                  alt="Shopping"
                  className="img-fluid mb-4"
                  style={{ maxWidth: '300px' }}
                />
              </div>
            </div>
          </Col>

          {/* Formulaire d'inscription à droite */}
          <Col lg={6}>
            <Card className="border-0 shadow-lg h-100">
              <Card.Body className="p-5 d-flex flex-column justify-content-center">
                <div className="mb-5">
                  <h2 className="fw-bold mb-3">Créer un compte</h2>
                  <p className="text-muted">Entrez vos informations ci-dessous</p>
                </div>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Nom"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="py-3 border-bottom border-top-0 border-start-0 border-end-0 rounded-0 px-0"
                      style={{ boxShadow: 'none' }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email ou numéro de téléphone"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="py-3 border-bottom border-top-0 border-start-0 border-end-0 rounded-0 px-0"
                      style={{ boxShadow: 'none' }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Mot de passe"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="py-3 border-bottom border-top-0 border-start-0 border-end-0 rounded-0 px-0"
                      style={{ boxShadow: 'none' }}
                    />
                  </Form.Group>

                  <div className="d-grid gap-3 mb-4">
                    <Button 
                      variant="danger" 
                      type="submit"
                      size="lg"
                      className="py-3"
                    >
                      Créer un compte
                    </Button>

                    <Button 
                      variant="outline-dark" 
                      size="lg"
                      className="py-3"
                      onClick={handleGoogleSignup}
                    >
                      <img 
                        src="https://www.google.com/favicon.ico" 
                        alt="Google"
                        width="20"
                        className="me-2"
                      />
                      S'inscrire avec Google
                    </Button>
                  </div>
                </Form>

                <div className="text-center">
                  <p className="text-muted">
                    Vous avez déjà un compte?{' '}
                    <Button 
                      variant="link" 
                      className="text-dark text-decoration-underline p-0"
                      onClick={() => setCurrentPage('login')}
                    >
                      Se connecter
                    </Button>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUpPage;