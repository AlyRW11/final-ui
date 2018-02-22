import React, { Component } from 'react';
import './Packages.css'

class Package extends Component {

    render() {
        return (
            <div>
                <h1>Paquete {this.props.pacakgeNumber}</h1>
                <h3>Fotografías </h3>
                <ul>
                    <li>{this.props.amount} fotografías impresas en papel tamaño 4 x 6 entregadas en álbum fotográfico.</li>
                    <li>{this.props.size1} Amplificación de {this.props.sizeCount1} {this.props.frame1}</li>
                    <li>{this.props.size2} Amplificación(es) de {this.props.sizeCount2} {this.props.frame2}</li>
                    <li>{this.props.size3} Amplificación(es) de {this.props.sizeCount3} {this.props.frame3}</li>
                </ul>

                <h3>DVD</h3>
                <p>{this.props.dvdsection}DVD con los mejores momentos del evento
    (Iglesia, parque y fiesta)<br /> con duración de {this.props.time} <br/> {this.props.movie} </p>

                <h3>Seción Previa</h3>
                <p>Seción Previa duración {this.props.session} <br/> {this.props.makeup}</p>

                <h3>Extras con el Paquete</h3>
                <ul>
                    <li>1 DVD con {this.props.extraAmount} fotografías digitales</li>
                    <li>{this.props.wallet} fotografías tamaño cartera (wallet) calidad 100% digital</li>
                    <li>{this.props.online}</li>
                </ul>

                <h4>Estudio Portátil</h4>
                <p>Estudio Portátil si el
                Salón tiene espacio sufuciente.</p>

                <h6 className="promise">Magia Digital Studio se compromete:</h6>
                <p>A darle servicio personalizado al cliente, y entregar en un periodo
                no mayor a 30 días.</p>
            </div>
        )
    }
}

export default Package