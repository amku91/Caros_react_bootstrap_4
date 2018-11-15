import React, { Component } from 'react';
import $ from 'jquery';

import Card from '../Card/Card';

import './Carousel.css';

class Carousel extends Component {
    imageData = [];
    constructor(props){
        super(props);
    }
    render() {
        this.imageData = this.props.imageData;
        let rows = [];
        return (
            <div className="row">
                <div className="col-1">
                    <div data-toggle="tooltip" onClick={this.props.loadPrevious} className={this.props.disablePrevious ? "arrowBack disabled" : "arrowBack"} title="Previous Image Set">
                        <i className="fa fa-angle-left arrowlarge roundFa"></i>
                    </div>
                </div>
                <div className="col-10">
                    <div className="card-group">
                        {
                            this.imageData.map((object, index) => {
                                let randomIndex = Math.floor(Math.random() * object.images.length);
                                let imageUrl = object.images[randomIndex];
                                return (
                                    <div key={index} className="col-3">
                                        <Card title={object.title} imageUrl={imageUrl} />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="col-1">
                    <div data-toggle="tooltip" onClick={this.props.loadNext} className={this.props.disableNext ? "arrowForward disabled" : "arrowForward"} title="Next Image Set">
                        <i className="fa fa-angle-right arrowlarge roundFa"></i>
                    </div>
                </div>
            </div>
        );
    }

    
    shouldComponentUpdate(nextProps, nextState){
        console.log("componetn should update");
        console.log(nextProps);
        console.log(nextState);
        console.log(this.props.pageNumber!= nextProps.pageNumber);
        return (this.props.pageNumber != nextProps.pageNumber);
    }

    componentWillMount() {
    }

    componentDidMount() {
        $('[data-toggle="tooltip"]').tooltip();
    }

    componentWillUpdate() {
    }

    componentDidUpdate() {
        $('[data-toggle="tooltip"]').tooltip();
    }
}

export default Carousel;