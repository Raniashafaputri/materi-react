import React from "react";

const makanans = [
    {
      nama: "Bubur Ayam",
      harga: 10000,
    },
    {
      nama: "Mie Goreng",
      harga: 10000,
    },
    {
      nama: "Mie Level",
      harga: 10000,
    },
    {
      nama: "Nasi Bakar",
      harga: 10000,
    },
    {
        nama: "Nasi Kuning",
        harga: 10000,
    },
  ];

  // Reduce
  const total_bayar = makanans.reduce((total_harga, makanan) => total_harga + makanan.harga, 0);

  const Map = () => {
    return(
        <div style={{padding: "50px"}}>
            <h2>Daftar Makanan</h2>
            <table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{width: "20px"}}>No</th>
                        <th>Nama Makanan</th>
                        <th>Harga</th>
                    </tr>
                </thead>
                <tbody>
                    {makanans.filter((makanan) => makanan.harga < 11000).map((makanan, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{makanan.nama}</td>
                            <td>{makanan.harga}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h1>Total Harga Makanan : {total_bayar}</h1>
        </div>
    );
  };


  

  

  export default Map;