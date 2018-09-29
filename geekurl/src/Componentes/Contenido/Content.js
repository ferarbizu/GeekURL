import React, { Component } from 'react';
import './css/Content.css';
import ModalEdit from './Modals/ModalEdit'
import ModalAdd from './Modals/ModalAdd'
import { Button, Col, Row, Grid, Thumbnail, FormGroup, Form, ControlLabel, FormControl} from 'react-bootstrap';
class Content extends Component {
 
  componentDidMount(){
    var temp = [];

    if (typeof localStorage["Cells"] !== "undefined"){
        temp = JSON.parse(localStorage.getItem("Cells"));
        this.state.requiredItem = 0;
    }
    else{
      localStorage.setItem("Cells", JSON.stringify([
        {idCell: new Date().getTime(), name: "Iphone Xs Max", screen: "6.3", memo: "64Gb, 256GB y 512GB", bat: "3000", ram:"2Gb",img:"https://cnet4.cbsistatic.com/img/knVcFvL9RVPKDKE9kJqJy5L0gQM=/830x467/2017/10/31/312b3b6e-59b7-499a-aea4-9bc5f9721a21/iphone-x-54.jpg"}
    ]));
        temp = JSON.parse(localStorage.getItem("Cells"));
        this.state.requiredItem = 0;
    }
    this.setState({Cellphones:temp});
}
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
      idCell: 0,
      name: '',
      screen : '',
      memo : '',
      bat : '',
      ram : '',
      img : ''
    };
    
    }

    replaceModalItem(index,idCell,name,screen,memo,bat,ram,img) {
      debugger;
      this.setState({ lgShow: true });
      this.setState({ requiredItem: index });
      this.setState({ idCell: idCell });
      this.setState({ name: name });
      this.setState({ screen: screen });
      this.setState({ memo: memo });
      this.setState({ bat: bat });
      this.setState({ ram: ram });
      this.setState({ img: img });
    }
  
    saveModalDetails(item) {
      debugger;
      const requiredItem = this.state.requiredItem;
      let tempbrochure = JSON.parse(localStorage.getItem("Cells"));
      tempbrochure[requiredItem] = item;
      localStorage.setItem('Cells', JSON.stringify(tempbrochure));
      this.setState({ lgShow: false });
      this.setState({ Cellphones: tempbrochure });
    }

    saveModalAdd(item) {
      var tempbrochure = [];
      tempbrochure = JSON.parse(localStorage.getItem("Cells"));
      tempbrochure.unshift(item);
      localStorage.setItem('Cells', JSON.stringify(tempbrochure));
      this.setState({ adShow: false });
      this.setState({ Cellphones: tempbrochure });
      alert("Se agrego Exitosamente.");
    }
  
    deleteItem(index) {
      debugger;
      let tempBrochure = JSON.parse(localStorage.getItem("Cells"));;
    tempBrochure.splice(index, 1);
        localStorage.setItem('Cells', JSON.stringify(tempBrochure));
      this.setState({ Cellphones: tempBrochure });
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
            {CellsList.map((CellsList, idCell) => (
            <Thumbnail key={idCell} id={idCell}>
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
                  <Button bsStyle="primary" onClick={() => this.replaceModalItem(idCell,CellsList.idCell, CellsList.name, CellsList.screen,
                    CellsList.memo, CellsList.bat,CellsList.ram,CellsList.img)}>Editar</Button>
                  &nbsp;
                  <Button bsStyle="default" onClick={() => this.deleteItem(idCell)}>Eliminar</Button>
                 </p> 
              </div>               
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
