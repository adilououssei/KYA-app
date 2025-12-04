import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Breadcrumb } from 'react-bootstrap';
import { Phone, Mail } from 'lucide-react';

const ContactPage = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé avec succès !');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-light min-vh-100">
      <Container className="py-5">
        {/* Breadcrumb */}
        <Breadcrumb>
          <Breadcrumb.Item onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
            Accueil
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Contact</Breadcrumb.Item>
        </Breadcrumb>

        <Row className="g-4 mt-3">
          {/* Informations de contact */}
          <Col lg={4}>
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body className="p-4">
                <div className="d-flex align-items-start mb-4">
                  <div className="bg-danger bg-opacity-10 rounded-circle p-3 me-3">
                    <Phone className="text-danger" size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-3">Appelez-nous</h5>
                    <p className="text-muted mb-2">
                      Nous sommes disponibles 24/7, 7 jours sur 7.
                    </p>
                    <p className="fw-semibold mb-0">Téléphone : +228 01611112222</p>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <div className="d-flex align-items-start">
                  <div className="bg-danger bg-opacity-10 rounded-circle p-3 me-3">
                    <Mail className="text-danger" size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-3">Écrivez-nous</h5>
                    <p className="text-muted mb-2">
                      Remplissez notre formulaire et nous vous contacterons sous 24 heures.
                    </p>
                    <p className="fw-semibold mb-2">
                      Email : customer@kyafashion.com
                    </p>
                    <p className="fw-semibold mb-0">
                      Email : support@kyafashion.com
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Formulaire de contact */}
          <Col lg={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-5">
                <Form onSubmit={handleSubmit}>
                  <Row className="g-3 mb-4">
                    <Col md={4}>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Votre nom *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="py-3"
                      />
                    </Col>
                    <Col md={4}>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Votre email *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="py-3"
                      />
                    </Col>
                    <Col md={4}>
                      <Form.Control
                        type="tel"
                        name="phone"
                        placeholder="Votre téléphone *"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="py-3"
                      />
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={8}
                      placeholder="Votre message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <div className="text-end">
                    <Button 
                      variant="danger" 
                      type="submit"
                      size="lg"
                      className="px-5 py-3"
                    >
                      Envoyer le message
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;