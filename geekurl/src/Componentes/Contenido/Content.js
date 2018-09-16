import React, { Component } from 'react';
import './css/Content.css';
import ModalEdit from './Modals/ModalEdit'
import ModalDelete from './Modals/ModalDelete'
import { Button,Col,Row, Grid,Thumbnail,FormGroup,Form,ControlLabel,FormControl} from 'react-bootstrap';
class Content extends Component {
  constructor(props, context) {
    super(props, context);  
    this.state = {
      dlShow: false,
      lgShow: false
    };
    var cel = {
      "name": "Iphone X",
      "panta": 6.1 , 
      "memo": "64GB y 256GB",
      "bat": "3000mhA",
      "ram": "2GB"
      }
      var celJSON = JSON.stringify(cel);
      localStorage.setItem("game", celJSON);
      }

  render() {
    let lgClose = () => this.setState({ lgShow: false });
    let dlClose = () => this.setState({ dlShow: false });
    var celJSON = localStorage.getItem("game");
    var game = JSON.parse(celJSON);
    console.log(game.name);
    return (
      <div className="Content">  
       <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src="">
                <h3>Iphone X</h3>
                <Form horizontal>
                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={3}>
                     Pantalla
                    </Col>
                    <Col sm={9}>
                      <FormControl type="text" placeholder="Tamaño Pantalla" value={game.panta} disabled/>
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={3}>
                      Capacidad
                    </Col>
                    <Col sm={9}>
                      <FormControl type="text" placeholder="Capacidad"  value={game.memo} disabled/>
                    </Col>
                  </FormGroup>

                   <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={3}>
                      Bateria
                    </Col>
                    <Col sm={9}>
                      <FormControl type="text" placeholder="Bateria"  value={game.bat} disabled/>
                    </Col>
                  </FormGroup>

                   <FormGroup controlId="formHorizontalRam">
                    <Col componentClass={ControlLabel} sm={3}>
                      Ram
                    </Col>
                    <Col sm={9}>
                      <FormControl type="text" placeholder="Memoria Ram"  value={game.ram} disabled/>
                    </Col>
                  </FormGroup>
                  </Form>
                  <p>
                  <Button bsStyle="primary" onClick={() => this.setState({ lgShow: true })}>Editar</Button>
                  &nbsp;
                  <Button bsStyle="default" onClick={() => this.setState({ dlShow: true })}>Eliminar</Button>
                 </p>                
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="">
                <h3>Huawei P20</h3>
                <Form horizontal>
                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={3}>
                     Pantalla
                    </Col>
                    <Col sm={9}>
                      <FormControl type="text" placeholder="Tamaño Pantalla" disabled/>
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={3}>
                      Capacidad
                    </Col>
                    <Col sm={9}>
                      <FormControl type="text" placeholder="Capacidad" disabled/>
                    </Col>
                  </FormGroup>

                   <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={3}>
                      Bateria
                    </Col>
                    <Col sm={9}>
                      <FormControl type="text" placeholder="Bateria" disabled/>
                    </Col>
                  </FormGroup>

                   <FormGroup controlId="formHorizontalRam">
                    <Col componentClass={ControlLabel} sm={3}>
                      Ram
                    </Col>
                    <Col sm={9}>
                      <FormControl type="text" placeholder="Memoria Ram" disabled/>
                    </Col>
                  </FormGroup>
                  </Form>
                <p>
                  <Button bsStyle="primary"  onClick={() => this.setState({ lgShow: true })}>Editar</Button>
                  &nbsp;
                  <Button bsStyle="default" onClick={() => this.setState({ dlShow: true })}>Eliminar</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="">
                <h3>Samsung Galaxy S9</h3>
                <Form horizontal>
                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={3}>
                     Pantalla
                    </Col>
                    <Col sm={9}>
                      <FormControl type="text" placeholder="Tamaño Pantalla" disabled/>
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={3}>
                      Capacidad
                    </Col>
                    <Col sm={9}>
                      <FormControl type="text" placeholder="Capacidad" disabled/>
                    </Col>
                  </FormGroup>

                   <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={3}>
                      Bateria
                    </Col>
                    <Col sm={9}>
                      <FormControl type="text" placeholder="Bateria" disabled/>
                    </Col>
                  </FormGroup>

                   <FormGroup controlId="formHorizontalRam">
                    <Col componentClass={ControlLabel} sm={3}>
                      Ram
                    </Col>
                    <Col sm={9}>
                      <FormControl type="text" placeholder="Memoria Ram" disabled/>
                    </Col>
                  </FormGroup>
                  </Form>
                <p>
                  <Button bsStyle="primary" onClick={() => this.setState({ lgShow: true })}>Editar</Button>
                  &nbsp;
                  <Button bsStyle="default" onClick={() => this.setState({ dlShow: true })}>Eliminar</Button>
                </p>
              </Thumbnail>
            </Col>
          </Row>
          <ModalEdit show={this.state.lgShow} onHide={lgClose} />
          <ModalDelete show={this.state.dlShow} onHide={dlClose} />
        </Grid>;
      </div>
    );
  }
}

export default Content;
