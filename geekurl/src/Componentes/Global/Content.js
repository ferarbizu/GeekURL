import React, { Component } from 'react';
import './css/Content.css';

import { Button,Col,Row, Grid,Thumbnail,Image} from 'react-bootstrap';
class Content extends Component {
  render() {
    return (
      <div className="Content">  
       <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src="">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Editar</Button>
                  &nbsp;
                  <Button bsStyle="default">Eliminar</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Editar</Button>
                  &nbsp;
                  <Button bsStyle="default">Eliminar</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Editar</Button>
                  &nbsp;
                  <Button bsStyle="default">Eliminar</Button>
                </p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>;
      </div>
    );
  }
}

export default Content;
