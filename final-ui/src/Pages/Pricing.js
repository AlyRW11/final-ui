import React, { Component } from 'react';
import {
  Collapse, Button, CardBody, Card, CardImg,
  CardTitle, CardText, CardDeck, CardSubtitle, CardGroup
} from 'reactstrap';
import Package from './Packages'

class Pricing extends Component {
  state = {
    collapse1: false,
    collapse2: false,
    collapse3: false
  }

  toggle = (e) => {
    const desiredState = {
      collapse1: false,
      collapse2: false,
      collapse3: false
    }
    if (e.target.id === "1") {
      this.setState((prevState) => {
        desiredState.collapse1 = !prevState.collapse1
        return desiredState
      })
    }
    if (e.target.id === "2") {
      this.setState((prevState) => {
        desiredState.collapse2 = !prevState.collapse2
        return desiredState
      })
    }
    if (e.target.id === "3") {
      this.setState((prevState) => {
        desiredState.collapse3 = !prevState.collapse3
        return desiredState
      })
    }
  }


  render() {
    return (
      <div>
        <CardGroup>
          <Card>
            <CardImg top width="25%" src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/14720360_1138406442907061_1155723253742123873_n.jpg?oh=164a4622e402f0a3916cad10dc8e92b4&oe=5B07BA93" alt="Card image cap" />
            <CardBody>
              <CardTitle>Baustizos y 1ra Comunion</CardTitle>
              <CardText>Permitenos captar los momentos importantes de la vida de tus hijos(as).</CardText>
              <Button className='pricing-one' id="1" onClick={this.toggle} style={{ marginBottom: '1rem' }}>See More</Button>
              <Collapse isOpen={this.state.collapse1}>
                <Card>
                  <CardBody>
                   <Package 
                   amount="100"
                   size1="1 Amplificación de 20 x 30    (Sin Marco)"
                   size2="1 Amplificaciónes 16 x 20   (Sin marco)"
                   size3="3 Amplificaciónes de 8 x 10"
                   dvdsection="3 DVD con los mejores momentos del evento 
                   (Iglesia, parque y fiesta)"
                   time="con duración de 1hora 30 minutos"
                   session="Seción Previa duración 1 hora"
                   extraAmount="1 DVD con 150 fotografias Digitales"
                   wallet="(Wallet) Calidad Digital"
                   online="10 fotografias tamaño cartera"
                  />
                  </CardBody>
                </Card>
              </Collapse>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="25%" src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/12741938_961197577294616_6336476592629202265_n.jpg?oh=0a95864c2c652417f6e8fc891f55a1fd&oe=5B1CF3DB" alt="Card image cap" />
            <CardBody>
              <CardTitle>Quinciañeras</CardTitle>
              <CardText>La epoca mas hermosa de tu vida.
                No dejes en manos inexpertas esos inolvidables momentos! </CardText>
              <Button className='pricing-one' id="2" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Aprende Mas</Button>
              <Collapse isOpen={this.state.collapse2}>
                <Card>
                  <CardBody>
                    <div>
                    <h3>Fotografías</h3>
<p amount="150"> fotografías impresas en papel tamaño 4 x 6 
    entregadas en álbum fotográfico 1 Amplificación de 20 x 30 (Sin Marco) 
    1 Amplificaciónes
    16 x 20 (Sin marco) 3 Amplificaciónes de 8 x 10</p>

<h3>DVD</h3>
<p> 3 DVD con los mejores momentos del evento 
    (Iglesia, parque y fiesta) con duración de 1hora 30 minutos</p>
<h3>Seción Previa</h3>
<p>Seción Previa duración 1 hora</p>
<h2>Magia Digital Studio se compromete:</h2>
<p>A darle servicio personalizado al cliente, 
    y entregar en un periodo no mayor a 30 días.</p>
                    </div>
            </CardBody>
                </Card>
              </Collapse>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="25%" src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/12728879_961197143961326_6440001187650532998_n.jpg?oh=f43dad1cd1726daf9d5e322dbbd91caf&oe=5B22CD96" alt="Card image cap" />
            <CardBody>
              <CardTitle> Bodas </CardTitle>
              <CardText>En uno de los días mas importantes de tu vida.
                Permiteme ser parte de tu historia y grabar para siempre esos momentos inolvidables.
                 </CardText>
              <Button className='pricing-one' id="3" onClick={this.toggle} style={{ marginBottom: '1rem' }}>See More</Button>
              <Collapse isOpen={this.state.collapse3}>
                <Card>
                  <CardBody>
                    Pricing three.
            </CardBody>
                </Card>
              </Collapse>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    )
  }
}

export default Pricing
//  export default class extends Component {
//      render(){
//          return(
//              <div></div>
//          )
//      }
//  }