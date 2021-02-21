import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import menuMakanan from './lib/Food';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      daftar: "state Daftar",
      daftarList: this.props.list,
      title: "Menu Makanan",
      title2: "Menu Minuman",
      inputValue: "",
      inputKota: "",
      rendCond: false
    }
    this.handlePesan = this.handlePesan.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.rubahData = this.rubahData.bind(this);
    this.rubahRender = this.rubahRender.bind(this);
  }

  handlePesan(value, e){
    e.preventDefault();
    alert(value);
  }

  handleChange(value, e){
    const eventTarget = e.target.value;
    this.setState({
      [value]: eventTarget
    });
    console.log(eventTarget);
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

  componentDidMount(){
    console.log("componentDidMount Berjalan");
  }

  render(){
    return(
      <>
        { this.state.rendCond === true ? (
          <>
            <p>{this.state.daftar}</p>
            <a href="/" onClick={e => this.handlePesan(this.state.daftarList,e)}>
              <p>{this.state.daftarList}</p>
            </a>
            <h3>{this.state.title}</h3>
            <h3>{this.state.title2}</h3>
            <Button variant="primary" onClick={this.rubahData}>Rubah Data</Button>
            <br />
            <input
              type="text"
              placeholder="Input Nama"
              value={this.state.inputValue}
              onChange={e => this.handleChange("inputValue",e)}
            />
            <input
              type="text"
              placeholder="Input Kota"
              value={this.state.inputKota}
              onChange={e => this.handleChange("inputKota",e)}
            />
            { menuMakanan.map((value,index) => {
              return(
                <div key={index}>
                  <p>No: {index+1}</p>
                  <p>Nama: {value.nama}</p>
                  <p>Harga: {value.harga}</p>
                </div>
              );
            })}
          </>
        ):(
          <>
            <h3>Silahkan Klik Tombol Rubah Render</h3>
          </>
        )}
        <Button variant="primary" onClick={this.rubahRender}>Rubah Render</Button>
      </>
    );
  }
}

export default Main;
