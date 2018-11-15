import React, { Component } from 'react';

import './Card.css';
import ImageModal from '../ImageModal/ImageModal';

class Card extends Component {
    constructor(props) {
        super(props);
        this.onModalClose = this.onModalClose.bind(this);
        this.state = {
            zoomView: false
        };
    }

    zoomImage(e){
        e.preventDefault();
        this.setState({
            zoomView: true,
        });
    }
    shouldComponentUpdate(){
        return true;
    }

    onModalClose(){
        this.setState({
            zoomView: false,
        });
    }


    render() {
        return (
            <div className="card" onClick={(e) => this.zoomImage(e)}>
                <img className="card-img-top" src={this.props.imageUrl} alt="{this.props.title}" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    {this.state.zoomView && (<ImageModal imageUrl={this.props.imageUrl} closeCallback={this.onModalClose} />)}
                </div>
            </div>
        );
    }

}

export default Card;