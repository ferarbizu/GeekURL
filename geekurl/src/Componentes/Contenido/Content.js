import React, { Component } from 'react';
import './css/Content.css';
import ModalEdit from './Modals/ModalEdit'
import ModalAdd from './Modals/ModalAdd'
import { Button, Col, Row, Grid, Thumbnail, FormGroup, Form, ControlLabel, FormControl} from 'react-bootstrap';
class Content extends Component {
  constructor(props, context) {
      super(props, context);  
      this.replaceModalItem = this.replaceModalItem.bind(this);
      this.saveModalDetails = this.saveModalDetails.bind(this);
      this.saveModalAdd = this.saveModalAdd.bind(this);
      this.state = {
        Cellphones: [],
        requiredItem: 0,
        lgShow: false,
        adShow: false,
        _id: 0,
        name: '',
        screen : '',
        memo : '',
        bat : '',
        ram : '',
        img : ''
      };
    }
  async componentDidMount(){
    try {
      const response = await fetch('http://localhost:3001/api/V1/Cell/');
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      this.setState({Cellphones:data.cells});
    } catch (error) {
      console.log(error);
    }
  }
  
    replaceModalItem(index,_id,name,screen,memo,bat,ram,img) {
      this.setState({ lgShow: true });
      this.setState({ requiredItem: index });
      this.setState({ _id: _id });
      this.setState({ name: name });
      this.setState({ screen: screen });
      this.setState({ memo: memo });
      this.setState({ bat: bat });
      this.setState({ ram: ram });
      this.setState({ img: img });
    }
  
    async saveModalDetails(item) {
      try {
        const response = await fetch('http://localhost:3001/api/V1/Cell/', {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(item)
        });
        if (!response.ok) {
          throw Error(response.statusText);
        }
        this.componentDidMount();
        this.setState({ lgShow: false });
      } catch (error) {
        console.log(error);
      }
    }

    async saveModalAdd(item) {
        try {
          const response = await fetch('http://localhost:3001/api/V1/Cell/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(item)
        });
        if (!response.ok) {
          throw Error(response.statusText);
        }
        this.componentDidMount();
        this.setState({ adShow: false });
      } catch (error) {
        console.log(error);
      }
    }
  
    async deleteItem(index) {
      const response = await fetch('http://localhost:3001/api/V1/Cell/', {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id:index})
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }
      this.componentDidMount();
    }

  render() {
    let lgClose = () => this.setState({ lgShow: false });
    let adclose = () => this.setState({ adShow: false });
    const CellsList = this.state.Cellphones;
    const requiredItem = this.state.requiredItem;
    let modalData = this.state.Cellphones[requiredItem];
    return (
      <Grid >
        <button type="button" class="btn btn-info btn-lg btn-block"  onClick={() => this.setState({ adShow: true })}>Agregar Nuevo</button>
        <hr />
        <Row>
          <Col>   
            {CellsList.map((CellsList, _id) => (
            <Thumbnail key={_id} id={_id}>
                <h3>{CellsList.name}</h3>
                
                <Form horizontal>
                <div class="col-sm-6 CentrarInfo">
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
                  </div>
                <div class="col-sm-6">
                  <img className="media-object" class="img-thumbnail" src={CellsList.img}></img>
                </div>
              </Form>
              <div className="Centrar">    
                  <p>
                  <Button bsStyle="primary" onClick={() => this.replaceModalItem(_id,CellsList._id, CellsList.name, CellsList.screen,
                    CellsList.memo, CellsList.bat,CellsList.ram,CellsList.img)}>Editar</Button>
                  &nbsp;
                  <Button bsStyle="default" onClick={() => this.deleteItem(CellsList._id)}>Eliminar</Button>
                 </p> 
              </div>               
              </Thumbnail>))}
              </Col>
              </Row>
        <ModalEdit 
          _id={this.state._id}
          name={this.state.name} 
          screen={this.state.screen}
          memo={this.state.memo}
          bat={this.state.bat}
          ram={this.state.ram} 
          img={this.state.img} 
          show={this.state.lgShow} 
          onHide={lgClose}
          saveModalDetails={this.saveModalDetails} />
          <ModalAdd 
          saveModalAdd={this.saveModalAdd} 
          show={this.state.adShow} 
          onHide={adclose} />
          </Grid>       
    );
  }
}

export default Content;
