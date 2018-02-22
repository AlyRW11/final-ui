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
                   pacakgeNumber="Uno"
                   amount="150"
                   size1="1 "
                   sizeCount1="20 x 30"
                   frame1="(Sin Marco)"
                   size2="1 "
                   sizeCount2="16 x 20"
                   frame2="(Sin Marco)"
                   size3="3 "
                   sizeCount3="8 x 10"
                   frame3="(Sin Marco)"
                   dvdsection="3 "
                   time="1 hora 30 minutos"
                   session="1 hora"
                   extraAmount="150"
                   wallet="10"
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
                  <Package 
                  pacakgeNumber="Dos"
                   amount="200"
                   size1="1"
                   sizeCount1="20 x 30"
                   frame1="(Sin Marco)"
                   size2="2"
                   sizeCount2="16 x 20"
                   frame2="(Sin Marco)"
                   size3="5"
                   sizeCount3="8 x 10"
                   frame3="(Sin Marco)"
                   dvdsection="3 "
                   time="2 horas"
                   movie="Película en línea"
                   session="1 hora 30 minutos"
                   extraAmount="200"
                   wallet="10"
                   online="Album digital en línea."
                  />
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
                  <Package 
                  pacakgeNumber="Tres"
                   amount="300"
                   size1="1"
                   sizeCount1="20 x 30"
                   frame1="(Con Marco de Lujo)"
                   size2="2"
                   sizeCount2="16 x 20"
                   frame2="(Sin Marco)"
                   size3="10"
                   sizeCount3="8 x 10"
                   frame3="(Sin Marco)"
                   dvdsection="3 "
                   time="2 horas 30 minutos"
                   session="1 hora 30 minutos"
                   makeup="Maquillaje y Peinado incluido"
                   extraAmount="300"
                   wallet="20"
                   online="Album digital en línea."
                  />
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