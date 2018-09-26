import React, { Component } from 'react';
import './css/Content.css';
import ModalEdit from './Modals/ModalEdit'
import ModalDelete from './Modals/ModalDelete'
import { Button, Col, Row, Grid, Thumbnail, FormGroup, Form, ControlLabel, FormControl} from 'react-bootstrap';
class Content extends Component {
 
  componentDidMount(){
    var temp = [];

    if (typeof localStorage["Cells"] !== "undefined"){
        temp = JSON.parse(localStorage.getItem("Cells"));
    }
    else{
      localStorage.setItem("Cells", JSON.stringify([
        {idCell: new Date().getTime(), name: "Iphone Xs Max", screen: "6.3", memo: "64Gb, 256GB y 512GB", bat: "3000", ram:"2Gb"}
    ]));
        temp = JSON.parse(localStorage.getItem("Cells"));
    }
    this.setState({Cellphones:temp});
}
  constructor(props, context) {
    super(props, context);  
    this.state = {
      Cellphones: [],
      dlShow: false,
      lgShow: false,
      idCell: 0,
      name: '',
      screen : '',
      memo : '',
      bat : '',
      ram : '',
    };
    
    }

  deleteHandler(e,id){
        var localStorageContent = [];
        var NewLocalStorage = [];
        var Cellphone = [];
        localStorageContent = JSON.parse(localStorage.getItem("Cells"));
        for(var i = 0; i < localStorageContent.length; i++){
            if(localStorageContent[i].idCell !== id){
              NewLocalStorage.unshift(localStorageContent[i]);
            }
        }

        NewLocalStorage = JSON.stringify(NewLocalStorage);
        localStorage.setItem('Cells', NewLocalStorage);
        Cellphone = JSON.parse(localStorage.getItem("Cells"));

        if(Cellphone.length === 0){
            alert('No hay telefonos para eliminar');
        }
        else{
            this.setState({ Cellphones: Cellphone });
        }
        e.preventDefault();
      }

   editHandler(idCell,name,screen,memo,bat,ram){
    this.setState({ lgShow: true }) 
    this.setState({ idCell: idCell });
    this.setState({ name: name });
    this.setState({ screen: screen });
    this.setState({ memo: memo });
    this.setState({ bat: bat });
    this.setState({ ram: ram });
   }
  render() {
    let lgClose = () => this.setState({ lgShow: false });
    let dlClose = () => this.setState({ dlShow: false });
    const CellsList = this.state.Cellphones;
    const requiredItem = this.state.idCell;
    let modalData = CellsList[requiredItem];
    return (
      <div className="Content">  
      <Grid>
      <Row>
             <Col xs={5}>
            {CellsList.map((CellsList, idCell) => (
            <Thumbnail key={CellsList.idCell} id={CellsList.idCell} src="" >
                <h3>{CellsList.name}</h3>
                <Form horizontal>
                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={3}>
                     Pantalla
                    </Col>
                    <Col sm={9}>
                      <FormControl type="text" placeholder="Tamaño Pantalla" value={CellsList.screen} disabled/>
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={3}>
                      Capacidad
                    </Col>
                    <Col sm={9}>
                      <FormControl type="text" placeholder="Capacidad"  value={CellsList.memo} disabled/>
                    </Col>
                  </FormGroup>

                   <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={3}>
                      Bateria
                    </Col>
                    <Col sm={9}>
                      <FormControl type="text" placeholder="Bateria"  value={CellsList.bat} disabled/>
                    </Col>
                  </FormGroup>

                   <FormGroup controlId="formHorizontalRam">
                    <Col componentClass={ControlLabel} sm={3}>
                      Ram
                    </Col>
                    <Col sm={9}>
                      <FormControl type="text" placeholder="Memoria Ram"  value={CellsList.ram} disabled/>
                    </Col>
                  </FormGroup>
                  </Form>
                  <p>
                  <Button bsStyle="primary" onClick={() => this.editHandler(CellsList.idCell, CellsList.name, CellsList.screen,
                    CellsList.memo, CellsList.bat,CellsList.ram)}>Editar</Button>
                  &nbsp;
                  <Button bsStyle="default" onClick={(e) =>this.deleteHandler(e,CellsList.idCell)}>Eliminar</Button>
                 </p>                
              </Thumbnail>))}
              </Col>
              </Row>
          <ModalEdit 
          idCell={this.state.idCell}
          name={this.state.name} 
          screen={this.state.screen}
          memo={this.state.memo}
          bat={this.state.bat}
          ram={this.state.ram} 
          show={this.state.lgShow} 
          onHide={lgClose} />
          <ModalDelete show={this.state.dlShow} onHide={dlClose} /> 
          </Grid>       
          </div>
    );
  }
}

export default Content;
