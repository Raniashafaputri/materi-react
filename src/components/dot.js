// Dot.js

import React from "react";

const makanans = [
  {
    nama: "Bubur Ayam",
    harga: 7000,
  },
  {
    nama: "Mie Goreng",
    harga: 5000,
  },
  {
    nama: "Mie Level",
    harga: 3000,
  },
  
];

const Dot = () => {
  return (
    <div style={{ padding: "50px" }}>
      <h2>Daftar Makanan di bawah 10000</h2>
      <table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: "20px" }}>No</th>
            <th>Nama Makanan</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          {makanans
            .filter((makanan) => makanan.harga < 11000)
            .map((makanan, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{makanan.nama}</td>
                <td>{makanan.harga}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <h1>Total Harga Makanan : {makanans.reduce((total_harga, makanan) => total_harga + makanan.harga, 0)}</h1>
    </div>
  );
};

export default Dot;
