import React, { Component } from 'react';
import $ from 'jquery';

import Card from '../../Simple/Card/Card';

import './Carousel.css';

class Carousel extends Component {
    imageData = [];
    render() {
        this.imageData = this.props.imageData;
        let rows = [];
        return (
            <div className="row">
                <div className="col-1">
                    <div data-toggle="tooltip" onClick={this.props.loadPrevious} className="arrowBack" title="Previous Image Set">
                        <i className="fa fa-angle-left arrowlarge roundFa"></i>
                    </div>
                </div>
                <div className="col-10">
                    <div className="card-group">
                        {
                            this.imageData.map((object, index) => {
                                let randomIndex = Math.floor(Math.random() * object.images.length);
                                return (
                                    <div key={index} className="col-3">
                                        <Card title={object.title} imageUrl={object.images[randomIndex]} />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="col-1">
                    <div data-toggle="tooltip" onClick={this.props.loadNext} className="arrowForward" title="Next Image Set">
                        <i className="fa fa-angle-right arrowlarge roundFa"></i>
                    </div>
                </div>
            </div>
        );
    }
    componentWillMount() {
        console.log("component will mount");
        console.log(this.imageData);
    }

    componentDidMount() {
        console.log("component did mount");
        console.log(this.props.imageData);
        $('[data-toggle="tooltip"]').tooltip();
    }

    componentWillUpdate() {
        console.log("component will update");
        console.log(this.props.imageData);
    }

    componentDidUpdate() {
        console.log("component did update");
        console.log(this.props.imageData);
        $('[data-toggle="tooltip"]').tooltip();
    }
}

export default Carousel;