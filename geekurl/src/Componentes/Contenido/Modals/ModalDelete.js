import React, { Component } from 'react';
import './css/ModalDelete.css'
import {Modal} from 'react-bootstrap';

class ModalDelete extends Component {
    render() {
        return (
          <Modal
            {...this.props}
            bsSize="large"
            aria-labelledby="contained-modal-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">Elimar Celular</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4> Esta seguro que desea eliminar esta información?</h4>
            </Modal.Body>
            <Modal.Footer>
                <div class="btn-group btn-group-justified" role="group" aria-label="group button">
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-danger" data-dismiss="modal"  role="button" onClick={this.props.onHide}>Cancelar</button>
                    </div>
                    
                    <div class="btn-group" role="group">
                        <button type="button" id="saveImage" class="btn btn-primary btn-hover-green" data-action="save" role="button">Eliminar</button>
                    </div>
                </div>
            </Modal.Footer>
          </Modal>
        );
      }
  }
  export default ModalDelete;