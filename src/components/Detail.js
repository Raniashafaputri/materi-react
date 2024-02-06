import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Detail = () => {
  return (
    <div>
      <section className="py-5 text-center">
        <h1 className="display-4">Selamat datang di toko korean style</h1>
        <p className="lead">Temukan produk luar biasa dan dapatkan penawaran terbaik.</p>
      </section>

      <section className="py-5">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="text-center">Baju Wanita</h2>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mb-4">
              <Card>
                  <Card.Img 
                    variant="top" 
                    src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//91/MTA-42091452/no_brand_atasan_blouse_cillaris_import-blouse_cotton_korean_style-baju_wanita_cantik_unik_full02_1b9bfb35.jpg" 
                  />
                  <Card.Body>
                  <Card.Title>Blouse Cotton Korean Style</Card.Title>
                  <Card.Text>
                  Rp287.000
                  </Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
            <Card>
              <Card.Img 
                variant="top" 
                src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/101/MTA-114177566/no_brand_cod_model_menyatu-dress_korean_style_wanita-dress-dress_korea-dress_wanita-dress_korean_style-dress_vintage_korea-dress_putih-baju_korean_style_wanita_full01_jlz25vob.jpg" 
              />
              <Card.Body>
                <Card.Title>dress korean style</Card.Title>
                <Card.Text>
                Rp300.000
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>

            <Col md={4} className="mb-4">
              <Card>
                  <Card.Img 
                    variant="top" 
                    src="https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/12/16/4af6c08f-2403-496d-bd5d-29bc94471fc8.jpg?ect=4g" 
                  />
                  <Card.Body>
                  <Card.Title>Kemeja atasan korean style</Card.Title>
                  <Card.Text>
                  Rp298.000
                  </Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="text-center">Baju Pria</h2>
            </Col>
          </Row>

          <Row>
              <Col md={4} className="mb-4">
                <Card>
                  <Card.Img variant="top" src="https://img.ws.mms.shopee.co.id/832996764ef0672b9593b272d8761c18" />
                  <Card.Body>
                    <Card.Title>Sweater Rajut korean style</Card.Title>
                    <Card.Text>
                    Rp190.000
                    </Card.Text>
                    <Button variant="primary">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>

            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="https://img.ws.mms.shopee.co.id/e0e37202c9d1777b4d6d4bf564f65f97" />
                <Card.Body>
                  <Card.Title>Sweater korean style</Card.Title>
                  <Card.Text>
                  Rp268.800
                  </Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/5/20/bb435f59-6d29-4a4a-84f1-70747302960b.jpg" />
              <Card.Body>
                <Card.Title>Kemeja hitam korean style</Card.Title>
                <Card.Text>
                Rp298.000
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="text-center">Baju Anak Cwe</h2>
            </Col>
          </Row>

          <Row>
              <Col md={4} className="mb-4">
                <Card>
                <Card.Img variant="top" src="https://down-id.img.susercontent.com/file/a06d1d0e8121114401ae5669b306fc71" />
                  <Card.Body>
                    <Card.Title>Baju anak cwe korean style</Card.Title>
                    <Card.Text>
                    Rp198.000
                    </Card.Text>
                    <Button variant="primary">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>

            <Col md={4} className="mb-4">
              <Card>
              <Card.Img variant="top" src="https://down-id.img.susercontent.com/file/608d2ec7e1ee857ad2e833ade91c2859" />
                  <Card.Body>
                  <Card.Title>Baju anak cwe korean style</Card.Title>
                  <Card.Text>
                  Rp217.000
                  </Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
            <Card>
            <Card.Img 
              variant="top" 
              src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/97/MTA-132914644/no-brand_no-brand_full01.jpg" 
            />
              <Card.Body>
                <Card.Title>Baju anak cwe korean style</Card.Title>
                <Card.Text>
                Rp153.800
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="text-center">Baju Anak Cwo</h2>
            </Col>
          </Row>

          <Row>
              <Col md={4} className="mb-4">
                <Card>
                <Card.Img 
                  variant="top" 
                  src="https://images.tokopedia.net/img/cache/700/VqbcmM/2021/6/17/1d95f0b1-7842-44fd-a191-6a1a4d2318c9.jpg" 
                />
                  <Card.Body>
                    <Card.Title>Baju anak korean style</Card.Title>
                    <Card.Text>
                    Rp150.800
                    </Card.Text>
                    <Button variant="primary">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>

            <Col md={4} className="mb-4">
              <Card>
              <Card.Img 
                  variant="top" 
                  src="https://down-id.img.susercontent.com/file/b23f5b694928dd1c39d6bf43ad394661_tn" 
                />
                  <Card.Body>
                  <Card.Title>Baju anak korean style</Card.Title>
                  <Card.Text>
                  Rp173.800
                </Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
            <Card>
            <Card.Img 
                variant="top" 
                src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//107/MTA-48825296/no_brand_bajukiddie_gent_set_baju_setelan_sport_casual_anak_cowok_korea_import_full01_ge4rjlpy.jpg" 
              />
              <Card.Body>
                <Card.Title>Baju anak korean style</Card.Title>
                <Card.Text>
                  Rp349.100
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Detail;
