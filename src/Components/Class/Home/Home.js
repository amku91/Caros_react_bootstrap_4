import React, { Component } from 'react';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';

import './Home.css';

import Carousel from '../Carousel/Carousel';

class Home extends Component {

    imageBlockAPI = "https://demo3235729.mockable.io/carousel/getaAll";

    constructor(props) {
        super(props);
        this.loadNextImageBlock = this.loadNextImageBlock.bind(this);
        this.state = {
            isSuccess: false,
            isError: false,
            errorMessage: "",
            isLoading: true,
            pageLength: 4,
            pageNumber: 1,
            data: [],
            blockData: [],
        };
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="error">
                            {this.state.isError && (<div className="alert alert-danger" role="alert">OOPS!!! Unable to connect with server. Please refresh your page.</div>)}
                        </div>
                        <div className="loaderContainer">
                            {this.state.isLoading && (<i className="fa fa-circle-o-notch fa-spin loader"></i>)}
                        </div>
                        {this.state.isSuccess && (<Carousel imageData={this.state.blockData} loadNext={this.loadNextImageBlock}></Carousel>)}
                    </div>
                </div>
            </div>
        );
    }
    componentWillMount() {
    }

    componentDidMount() {
        this.getImages();
    }

    shouldComponentUpdate(shouldUpdate) {
        return true;
    }

    loadNextImageBlock(){
        console.log("load next");
    }

    processData(data){
        let currentPage  = this.state.pageNumber;
        let pageLength = this.state.pageLength;
        let blockData = this.getBlockSlice(data, currentPage, pageLength);
        console.log("sliced data");
        console.log(blockData);
        /**Set State Now */
        this.setState({
            isSuccess: true,
            isError: false,
            errorMessage: "",
            isLoading: false,
            data: data,
            blockData: blockData
        });
    }
    
    getBlockSlice(allData, currentPage, pageLength){
        let pageToNavigate = currentPage * pageLength;
        let startIndex = ((this.currentPage - 1) * this.pageLength);
        return allData.slice(startIndex, pageToNavigate);
    }

    getImages() {
        axios.get(this.imageBlockAPI).then(response => {
            this.processData(response.data);
            
        }).catch(error => {
            this.setErrorState(error);
        });
    }

    setErrorState(error){
        this.setState({
            isSuccess: false,
            isError: true,
            errorMessage: error,
            isLoading: false,
        });
    }
}

export default Home;