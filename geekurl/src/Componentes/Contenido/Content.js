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
            {idCell: 1, name: "Iphone Xs Max", screen: "6.3", memo: "64Gb, 256GB y 512GB", bat: "3000", ram:"2Gb"},
            {idCell: 2, name: "Iphone Xs Max", screen: "6.3", memo: "64Gb, 256GB y 512GB", bat: "3000", ram:"2Gb"},
            {idCell: 3, name: "Iphone Xs Max", screen: "6.3", memo: "64Gb, 256GB y 512GB", bat: "3000", ram:"2Gb"},
            {idCell: 4, name: "Iphone Xs Max", screen: "6.3", memo: "64Gb, 256GB y 512GB", bat: "3000", ram:"2Gb"}
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
      lgShow: false
    };
    
    }

  render() {
    
    let lgClose = () => this.setState({ lgShow: false });
    let dlClose = () => this.setState({ dlShow: false });
    const CellsList = this.state.Cellphones;
    return (
      <div className="Content">  
      <Grid>
      <Row>
             <Col xs={5}>
            {CellsList.map((CellsList, idCell) => (
              <div className="item">
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
                  <Button bsStyle="primary" onClick={() => this.setState({ lgShow: true })}>Editar</Button>
                  &nbsp;
                  <Button bsStyle="default" onClick={() => this.setState({ dlShow: true })}>Eliminar</Button>
                 </p>                
              </Thumbnail>
              </div>))}
              </Col>
              </Row>
          <ModalEdit show={this.state.lgShow} onHide={lgClose} />
          <ModalDelete show={this.state.dlShow} onHide={dlClose} /> 
          </Grid>       
          </div>
    );
  }
}

export default Content;
