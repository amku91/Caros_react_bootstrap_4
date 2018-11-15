import React, { Component } from 'react';
import $ from 'jquery';

import './ImageModal.css';

class ImageModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal fade" ref={modal => this.modal = modal} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <img src={this.props.imageUrl} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        $(this.modal).modal('show');
        $(this.modal).on('hidden.bs.modal', this.props.closeCallback);
    }
}

export default ImageModal;