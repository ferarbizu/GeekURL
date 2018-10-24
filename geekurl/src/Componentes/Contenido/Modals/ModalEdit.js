import React, { Component } from 'react';
import './css/ModalEdit.css'
import { Modal,FormGroup,Form,ControlLabel,FormControl,Col} from 'react-bootstrap';

class ModalEdit extends Component {
  
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      _id:0,
        name: '',
        screen : '',
        memo : '',
        bat : '',
        ram : '',
        img : ''
    }
}

    componentWillReceiveProps(nextProps) {
      this.setState({
        _id: nextProps._id,
        name: nextProps.name,
        screen: nextProps.screen,
        memo: nextProps.memo,
        bat: nextProps.bat,
        ram: nextProps.ram,
        img : nextProps.img,
      });
    }

    onChange(e){
      this.setState({[e.target.id]: e.target.value});
    }

    handleSave() {
      debugger;
      const item = this.state;

      this.props.saveModalDetails(item);
    }
    
    render() {
        return (
            <Modal
            {...this.props}
            bsSize="large"
            aria-labelledby="contained-modal-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">Editar Celular </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form horizontal>
                   <FormGroup controlId="formHorizontalNombre">
                    <Col componentClass={ControlLabel} sm={2}>
                     Dispositivo
                    </Col>
                    <Col sm={10}>
                      <FormControl type="text" placeholder="Nombre Celular" value={this.state.name} id="name" onChange={(e) => this.onChange(e)}/>
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalPantalla">
                    <Col componentClass={ControlLabel} sm={2}>
                     Pantalla
                    </Col>
                    <Col sm={10}>
                      <FormControl type="text" placeholder="Tamaño Pantalla" value={this.state.screen} id="screen" onChange={(e) => this.onChange(e)}/>
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalCapacidad">
                    <Col componentClass={ControlLabel} sm={2}>
                      Capacidad
                    </Col>
                    <Col sm={10}>
                      <FormControl type="text" placeholder="Capacidad" value={this.state.memo} id="memo" onChange={(e) => this.onChange(e)}/>
                    </Col>
                  </FormGroup>

                   <FormGroup controlId="formHorizontalBateria">
                    <Col componentClass={ControlLabel} sm={2}>
                      Bateria
                    </Col>
                    <Col sm={10}>
                      <FormControl type="text" placeholder="Bateria" value={this.state.bat} id="bat" onChange={(e) => this.onChange(e)}/>
                    </Col>
                  </FormGroup>

                   <FormGroup controlId="formHorizontalRam">
                    <Col componentClass={ControlLabel} sm={2}>
                      Ram
                    </Col>
                    <Col sm={10}>
                      <FormControl type="text" placeholder="Memoria Ram" value={this.state.ram} id="ram" onChange={(e) => this.onChange(e)}/>
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalRam">
                    <Col componentClass={ControlLabel} sm={2}>
                      Imagen Link
                    </Col>
                    <Col sm={10}>
                      <FormControl type="text" placeholder="Imagen link" value={this.state.img} id="img" onChange={(e) => this.onChange(e)}/>
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
                        <button type="button" id="saveImage" class="btn btn-primary btn-hover-green" role="button" onClick={() => { this.handleSave() }} >Guardar</button>
                    </div>
                  </div>
            </Modal.Footer>
          </Modal>
        );
      }
  }
  export default ModalEdit;