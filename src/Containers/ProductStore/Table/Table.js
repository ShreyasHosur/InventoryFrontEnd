import React , {Component} from 'react'
import classes from './Table.module.css'
import Pagination from '../Pagination/Pagination';
import axios from '../../../axios-instance';
import Button from '../../../UI/Button/Button'
import ProductForm from '../ProductForm/ProductForm';

class Table extends Component{

    state = {
        currentPage:0,
        pageSize:2,
        Loading:false,
        numberofpagesRequired:1,
        products:null,
    }

    componentDidMount(){
        this.setState({Loading:true });
        axios.get("get-product?pageNum="+this.state.currentPage+"&pageSize="+this.state.pageSize)
        .then(response => {
            console.log(response)
            this.setState({
                numberofpagesRequired:response.data.totalPages,
                products:response.data.content,
                Loading:false
            })
        })
    }

    getPageData = (pagenum ,pageSize) => {
        this.setState({Loading:true });
        axios.get("get-product?pageNum="+pagenum+"&pageSize="+pageSize)
        .then(response => {
            this.setState({
                products:response.data.content,
                currentPage:pagenum,
                Loading:false
            })
        })
    }

  

    prevClick = () => {
        this.getPageData(this.state.currentPage-1,this.state.pageSize);
    }

    doublePrevClick= () => {
        this.getPageData(this.state.currentPage-2,this.state.pageSize);
    }

    nextClick = () => {
        this.getPageData(this.state.currentPage+1,this.state.pageSize);
    }

    doubleNextClick = () => {
        this.getPageData(this.state.currentPage+2,this.state.pageSize);
    }

    prevButton = () => {
        return (
            this.state.currentPage > 0
        )

    }

    doublePrevbutton = () => {
        return (this.state.currentPage - 2) >= 0;

    }

    nextButton = () => {
        return (
             (this.state.currentPage + 1) < this.state.numberofpagesRequired
        )
    }

    doublenextButton = () => {
        return (
            (this.state.currentPage + 2)  < this.state.numberofpagesRequired
        )
    }

    render = () => {
        console.log('render')
        let productdata = null;
        if(this.state.products){
            productdata = this.state.products.map(product => {
                return (
                    <tr key={product.productName}>
                        <td>{product.id}</td>
                        <td>{product.productCategory}</td>
                        <td>{product.productName}</td>
                        <td>{product.quantities}</td>
                        <td>{product.currentSP}</td>
                        {/* On click Link to another URL with productID as get Parameter*/}
                        <td><Button clicked = {() => this.props.edit(product.id)} btnType = 'Success'>Edit</Button></td>
                    </tr>
                )
            })
        }
        if(this.state.Loading){
            productdata='Loading';
        }
        return (
        <div>
        <table className = {classes.Table}>
            <thead>
                <tr>
                    <th>ProductId</th>
                    <th>ProductCategory</th>
                    <th>ProductName</th>
                    <th>Available</th>
                    <th>Current SP</th>
                    <th></th>

                </tr>
            </thead>
            <tbody>
                {productdata}
            </tbody>
        </table>
        <Pagination
        prevClick = {this.prevClick}
        doublePrevClick = {this.doublePrevClick}
        currentpageNumber={this.state.currentPage + 1}
        nextClick = {this.nextClick}
        doubleNextClick={this.doubleNextClick}
        prevButton = {this.prevButton}
        doublePrevbutton = {this.doublePrevbutton}
        nextButton = {this.nextButton}
        doublenextButton = {this.doublenextButton}
        />
        </div>
        )
    }

}

export default Table;