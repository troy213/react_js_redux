import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import menuMakanan from './lib/Food';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      daftar: "state daftar",
      daftarList: this.props.list,
      title: "Menu Makanan",
      title2: "Menu Minuman",
      inputNama: "",
      inputHarga: "",
      rendCond: false,
      food: menuMakanan,
      count: menuMakanan.length + 1
    }
    this.handlePesan = this.handlePesan.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.rubahData = this.rubahData.bind(this);
    this.rubahRender = this.rubahRender.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.addData = this.addData.bind(this);
  }

  handlePesan(value, e){
    e.preventDefault();
    alert(value);
    console.log(this.state.food);
  }

  handleChange(value, e){
    const eventTarget = e.target.value;
    this.setState({
      [value]: eventTarget
    });
  }

  rubahData(){
    this.setState((state,props) => {
      return({
        title: state.title2,
        title2: state.title
      });
    });
  }

  rubahRender(){
    this.setState({
      rendCond: !this.state.rendCond
    });
  }

  removeItem(id){
    let newItem = this.state.food.filter((value) => value.id !== id);
    this.setState({
      food: newItem
    });
  }

  checkId(){
    this.setState({
      count: this.state.count + 1
    });
    return this.state.count;
  }

  addData(e){
    const makanan = { id: this.checkId(),nama: this.state.inputNama, harga: Number(this.state.inputHarga) }
    if (makanan.nama && makanan.harga) {
      this.setState({
        food: [...this.state.food, makanan]
      });
    } else {
      e.preventDefault();
      alert("Data masih ada yang kosong!");
    }
  }

  componentDidMount(){
    console.log("componentDidMount berjalan");
  }

  render(){
    return(
      <>
        { this.state.rendCond === true ? (
          <>
            <p>{this.state.daftar}</p>
            <a href="/" onClick={e => this.handlePesan(this.props.list, e)}>
              <p>{this.state.daftarList}</p>
            </a>
            <h3>{this.state.title}</h3>
            <h3>{this.state.title2}</h3>
            <Button variant="primary" onClick={this.rubahData}>Rubah Data</Button>
            <br />
            <br />
            <input
              type="text"
              placeholder="Input Nama"
              value={this.state.inputNama}
              onChange={e => this.handleChange("inputNama",e)}
            />
            <input
              type="text"
              placeholder="Input Harga"
              value={this.state.inputHarga}
              onChange={e => this.handleChange("inputHarga",e)}
            />
            <br />
            <br />
            <Button variant="secondary" onClick={this.addData}>Tambah</Button>
            <br />
            <br />
            { this.state.food.length === 0 ? (
              <p>Table Empty!</p>
            ):(
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Hapus</th>
                  </tr>
                </thead>
                <tbody>
                  { this.state.food.map((value,index) => {
                    const {id, nama, harga} = value;
                    return(
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{nama}</td>
                        <td>{harga}</td>
                        <td><button variant="secondary" onClick={() => this.removeItem(id)}>Remove</button></td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            )}
          </>
        ):(
          <>
            <h3>Silahkan Klik Rubah Render</h3>
          </>
        )}
        <Button variant="primary" onClick={this.rubahRender}>Rubah Render</Button>
      </>
    );
  }
}

export default Main;
