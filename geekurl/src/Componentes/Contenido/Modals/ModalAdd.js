import React, { Component } from 'react';
import './css/ModalAdd.css'
import { Modal,FormGroup,Form,ControlLabel,FormControl,Col} from 'react-bootstrap';

class ModalAdd extends Component {

  onChange(e){
    this.setState({[e.target.id]: e.target.value});
  }
  AddList(e){
    e.preventDefault();
    var name = this.state.name;
    var screen = this.state.screen;
    var memo = this.state.mem;
    var bat = this.state.bat;
    var ram = this.state.ram;

    var cel = {
      idCell: new Date().getTime(),
      name:name,
      screen:screen,
      memo:memo,
      bat:bat,
      ram:ram
    }
    
    var Cellphones = localStorage.getItem('Cells');

    if (Cellphones === null) {
      Cellphones = [];
    }
    else {
      Cellphones = JSON.parse(Cellphones);
    }
    Cellphones.unshift(cel);

    Cellphones = JSON.stringify(Cellphones);

    localStorage.setItem('Cells', Cellphones);


    }
    render() {
        return (
          <Modal id="addModal"
            {...this.props}
            bsSize="large"
            aria-labelledby="contained-modal-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">Agregar Celular</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form horizontal>
                   <FormGroup controlId="formHorizontalNombre">
                    <Col componentClass={ControlLabel} sm={2}>
                     Dispositivo
                    </Col>
                    <Col sm={10}>
                      <FormControl type="text" placeholder="Nombre Celular" id="name" onChange={(e) => this.onChange(e)} />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalPantalla">
                    <Col componentClass={ControlLabel} sm={2}>
                     Pantalla
                    </Col>
                    <Col sm={10}>
                      <FormControl type="text" placeholder="Tamaño Pantalla" id="screen" onChange={(e) => this.onChange(e)}/>
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalCapacidad">
                    <Col componentClass={ControlLabel} sm={2}>
                      Capacidad
                    </Col>
                    <Col sm={10}>
                      <FormControl type="text" placeholder="Capacidad"  id="mem" onChange={(e) => this.onChange(e)}/>
                    </Col>
                  </FormGroup>

                   <FormGroup controlId="formHorizontalBateria">
                    <Col componentClass={ControlLabel} sm={2}>
                      Bateria
                    </Col>
                    <Col sm={10}>
                      <FormControl type="text" placeholder="Bateria"  id="bat" onChange={(e) => this.onChange(e)}/>
                    </Col>
                  </FormGroup>

                   <FormGroup controlId="formHorizontalRam">
                    <Col componentClass={ControlLabel} sm={2}>
                      Ram
                    </Col>
                    <Col sm={10}>
                      <FormControl type="text" placeholder="Memoria Ram"  id="ram" onChange={(e) => this.onChange(e)}/>
                    </Col>
                  </FormGroup>
                  </Form>
            </Modal.Body>
            <Modal.Footer>
            <div class="btn-group btn-group-justified" role="group" aria-label="group button">
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-danger" data-dismiss="modal"  role="button" onClick={this.props.onHide}>Cancelar</button>
                    </div>
                    
                    <div class="btn-group" role="group">
                        <button type="submit" id="saveImage" class="btn btn-primary btn-hover-green" data-action="save" role="button" onClick={(e) => this.AddList(e)} >Guardar</button>
                    </div>
                  </div>
            </Modal.Footer>
          </Modal>
        );
      }
  }
  export default ModalAdd;