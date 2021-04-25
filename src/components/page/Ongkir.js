<<<<<<< HEAD
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import ongkir from '../home/lib/JNE';

const Ongkir = () => {
  const [data, setData] = useState(ongkir);
  const [count, setCount] = useState(0);

  const prevPage = (e) => {
    if (count <= 0) {
      e.preventDefault();
      alert("sudah mentok!");
    } else {
      setCount(count - 10);
    }
  }

  const nextPage = (e) => {
    if (data.length - count === 10) {
      e.preventDefault();
      alert("sudah mentok!");
    } else {
      setCount(count + 10);
    }
  }

  return(
    <>
      <h1>Ongkir</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Provinsi</th>
            <th>Kota</th>
            <th>Kecamatan</th>
            <th>Kelurahan</th>
            <th>Kode Pos</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
        {
          data.slice((count), (count + 10)).map((value, index) => {
            const {id, provinsi, kota, kecamatan, kelurahan, kodePos, harga} = value;
            return(
              <tr key={id}>
                <td>{id}</td>
                <td>{provinsi}</td>
                <td>{kota}</td>
                <td>{kecamatan}</td>
                <td>{kelurahan}</td>
                <td>{kodePos}</td>
                <td>Rp {harga}</td>
              </tr>
            );
          })
        }
        </tbody>
      </Table>
      {
        (count <= 0) || (count >= 9990) ? (
          count <= 0 ? (
            <>
              <button onClick={nextPage}>Next</button>
            </>
          ):(
            <>
              <button onClick={prevPage}>Prev</button>
            </>
          )
        ):(
          <>
            <button onClick={prevPage}>Prev</button>
            <button onClick={nextPage}>Next</button>
          </>
        )
      }
=======
import React from 'react';
import ongkir from '../home/lib/JNE';

const Ongkir = () => {
  return(
    <>
      <h1>Ongkir</h1>
>>>>>>> main
    </>
  );
}

export default Ongkir;
