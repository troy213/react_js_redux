import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import ongkir from '../home/lib/JNE';

const Ongkir = () => {
  const [data, setData] = useState(ongkir);
  const [count, setCount] = useState(0);
  const [cari, setCari] = useState("");

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

  const cariData = (e) => {
    e.preventDefault();
    if (cari === "") {
      setData(ongkir);
      setCount(0);
    } else {
      const newData = ongkir.filter((value) => value.kota.toLowerCase() == cari.toLowerCase());
      setData(newData);
      setCount(0);
    }
  }

  return(
    <>
      <h1>Ongkir</h1>
      <input
        type="text"
        placeholder="cari"
        value={cari}
        onChange={(e) => setCari(e.target.value)}
      />
      <button onClick={cariData}>Cari</button>
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
        (count <= 0) || (count >= (data.length - 10)) ? (
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
    </>
  );
}

export default Ongkir;
