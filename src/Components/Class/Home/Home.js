import React, { Component } from 'react';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';

import './Home.css';

import Carousel from '../Carousel/Carousel';

class Home extends Component {

    imageBlockAPI = "https://demo3235729.mockable.io/carousel/getaAll";
    disablePrevious = true;
    disableNext = false;

    constructor(props) {
        super(props);
        /**Bind to retian object state */
        this.loadNextImageBlock = this.loadNextImageBlock.bind(this);
        this.loadPreviousImageBlock = this.loadPreviousImageBlock.bind(this);
        /**Initialise state */
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
                        {this.state.isSuccess && (<Carousel pageNumber={this.state.pageNumber} imageData={this.state.blockData} loadNext={this.loadNextImageBlock} loadPrevious={this.loadPreviousImageBlock} disablePrevious={this.disablePrevious} disableNext={this.disableNext}></Carousel>)}
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

    loadPreviousImageBlock(){
        let currentPage = this.state.pageNumber;
        let pageLength = this.state.pageLength;
        currentPage = currentPage - 1;
        let blockData = this.getBlockSlice(this.state.data, currentPage, pageLength);
        /**Set State Now */
        this.setState({
         blockData: blockData,
         pageNumber: currentPage
         });
     }

    loadNextImageBlock(){
       let currentPage = this.state.pageNumber;
       let pageLength = this.state.pageLength;
       currentPage = currentPage + 1;
       let blockData = this.getBlockSlice(this.state.data, currentPage, pageLength);
       /**Set State Now */
       this.setState({
        blockData: blockData,
        pageNumber: currentPage
        });
    }

    processData(data){
        let currentPage  = this.state.pageNumber;
        let pageLength = this.state.pageLength;
        let blockData = this.getBlockSlice(data, currentPage, pageLength);
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
        let startIndex = ((currentPage - 1) * pageLength);
        /**Check for button logic */
        this.handleButtonLogic(allData, startIndex, pageToNavigate);
        /**Return slice */
        return allData.slice(startIndex, pageToNavigate);
    }

    handleButtonLogic(allData, startIndex, pageToNavigate){
        if(startIndex == 0){
            this.disablePrevious = true;
            this.disableNext = false;
        }else if(pageToNavigate >= allData.length){
            this.disablePrevious = false;
            this.disableNext = true;
        }else{
            this.disablePrevious = false;
            this.disableNext = false;
        }
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