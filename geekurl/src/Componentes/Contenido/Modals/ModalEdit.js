import React, { Component } from 'react';
import './css/ModalEdit.css'
import { Modal,FormGroup,Form,ControlLabel,FormControl,Col} from 'react-bootstrap';

class ModalEdit extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
       idCell:0,
        name: '',
        screen : '',
        memo : '',
        bat : '',
        ram : '',
    }
}

    componentWillReceiveProps(nextProps) {
      this.setState({
       idCell:nextProps.idCell,
        name: nextProps.name,
        screen: nextProps.screen,
        memo: nextProps.memo,
        bat: nextProps.bat,
        ram: nextProps.ram
      });
    }

    onChange(e){
      this.setState({[e.target.id]: e.target.value});
    }

    EditItem(e, idCell){
      debugger;
      e.preventDefault();
      var id = idCell;
      var name = this.state.name;
      var screen = this.state.screen;
      var memo = this.state.memo;
      var bat = this.state.bat;
      var ram = this.state.ram;
  
      var cel = {
        idCell: id,
        name:name,
        screen:screen,
        memo:memo,
        bat:bat,
        ram:ram
      }
      var localStorageContent = [];
      var NewLocalStorage = [];
      var Cellphone = [];
      localStorageContent = JSON.parse(localStorage.getItem("Cells"));
      for(var i = 0; i < localStorageContent.length; i++){
          if(localStorageContent[i].idCell === id){
             localStorageContent[i] = cel;
          }
          NewLocalStorage.push(localStorageContent[i]);
      }  
      NewLocalStorage = JSON.stringify(NewLocalStorage);
      localStorage.setItem('Cells', NewLocalStorage);
      Cellphone = JSON.parse(localStorage.getItem("Cells"));
   
      e.preventDefault();
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
                      <FormControl type="text" placeholder="Capacidad" value={this.state.memo} id="mem" onChange={(e) => this.onChange(e)}/>
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
                  </Form>
            </Modal.Body>
            <Modal.Footer>
                <div class="btn-group btn-group-justified" role="group" aria-label="group button">
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-danger" data-dismiss="modal"  role="button" onClick={this.props.onHide}>Cancelar</button>
                    </div>
                    
                    <div class="btn-group" role="group">
                        <button type="button" id="saveImage" class="btn btn-primary btn-hover-green" role="button" onClick={(e) => this.EditItem(e,this.state.idCell)} >Guardar</button>
                    </div>
                  </div>
            </Modal.Footer>
          </Modal>
        );
      }
  }
  export default ModalEdit;