import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';

function Tampilan() {
  const [posts, setPosts] = useState([]);

  const getAll = () => {
    axios 
    .get('http://localhost:3030/products')
    .then((res) => {
     setPosts(res.data);
    })
    .catch((error) => {
        alert("terjadi kesalahan" + error);
    });
    };

 const getData = () => {
    var requestOptions ={
        method: "GET",
        redirect: "follow",   
    };

    fetch("http://localhost:3030/products", requestOptions)
    .then((response) => response.json())
    .then((result) => setPosts(result))
    .catch((error) => console.log("error", error));
   };

   useEffect(() => {
    getData();
   }, []);

  return (
    <div>
    <Image src="https://marketplace.canva.com/EAFT4iBtkRY/1/0/1600w/canva-beige-brown-minimalist-casual-style-banner-landscape-ZXRUHYBCsCU.jpg" className="img-fluid w-100 mb-5" />
         <section className="py-3 text-center">
        <h1 className="display-3">Selamat datang di toko korean style</h1>
        <p className="lead">Temukan produk luar biasa dan dapatkan penawaran terbaik.</p>
      </section>

      <section className="py-5">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="text-center">Contoh Baju</h2>
            </Col>
          </Row>
 <div className=""> 

          <Row xs={1} md={2} lg={3} xl={4} className="mb-4">
            {posts.map((post) => ( // Menggunakan "posts" sebagai variabel state
              <Col key={post.id}>
                <Card>
                  {post.img && (
                    <Card.Img
                      variant="top"
                      src={post.img} // Menggunakan "img" sebagai properti gambar
                      alt={post.nama} // Menggunakan "nama" sebagai properti nama
                      style={{ height: '300px', objectFit: 'cover' }}
                    />
                  )}
                  <Card.Body>
                    <Card.Title>{post.nama}</Card.Title> {/* Menggunakan "nama" sebagai properti nama */}
                    <Card.Text>Rp{post.price}</Card.Text> {/* Menggunakan "price" sebagai properti harga */}
                    <Button variant="primary">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        </Container>
      </section>


      <footer className="footer text-muted text-center py-3">
        <div className="container">
          <p className="m-0 small">© 2024 E-Courmace. Hak cipta dilindungi.</p>
        </div>
      </footer>
    </div>
  );
};

export default Tampilan;

