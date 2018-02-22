import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import './Home.css'

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img className="first" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/1533886_10200967305616596_1201302026_n.jpg?oh=b112e3de1d24ea9829d45add98f43911&oe=5B05F42D" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img className="second" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/13119954_10205824666647586_1639762694205345900_o.jpg?oh=01c5a5fbe85710f9a4a63dbbda534fd1&oe=5B0D47F1" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img className="third" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/10246612_10201469599053618_8625422942980795871_n.jpg?oh=b5c0c95377a51f5750d3170117d33fb6&oe=5B1082B9" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    )
  }
}

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'))

export default DemoCarousel