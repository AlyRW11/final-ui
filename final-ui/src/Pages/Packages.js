import React, { Component } from 'react';

class Package extends Component {

    render() {
        return (
            <div>
                <h3>Fotografías </h3>
                <ul>
                    <li>{this.props.amount} fotografías impresas en papel tamaño 4 x 6 entregadas en álbum fotográfico</li>
                    <li>{this.props.size1} Amplificación de {this.props.sizecount} {this.props.frame}</li>
                    <li>{this.props.size2} Amplificaciónes {this.props.sizecount2} {this.props.frame}</li>
                    <li>{this.props.size3} {this.props.sizecount3} {this.props.frame}</li>
                </ul>

                <h1>DVD</h1>
                <p>{this.props.dvdsection}<br />{this.props.time}</p>
                <h1>Seción Previa</h1>
                <p>{this.props.session}</p>
                    <h1>Extras</h1>
                    <ul>
                        <li>{this.props.extraAmount}</li>
                        <li>{this.props.wallet}</li>
                        <li>{this.props.online}</li>
                        
                    </ul>
                    <h1>Magia Digital Studio se compromete:</h1>          
            </div>
                )
            }
        }
        
export default Package