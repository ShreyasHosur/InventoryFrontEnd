import React,{Component} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from '../../../axios-instance';
import Topbar from '../../../Components/Topbar/Topbar';
import Aux from '../../../hoc/Aux';
import classes from './ProductForm.module.css';


class ProductForm extends Component {

    state = {
        productId:'',
        productName:'',
        productCategory:'',
        Available:'',
        CurrentSP:''
    }

    componentDidMount(){
        axios.get('');
    }

    handlevalidation = (values) => {

    }

    handlesubmit = () => {

    }

    handlechange = (values) => {

    }


    render = () => {
        return (
        <Aux> 
            <Topbar/>
            <div className={classes.Formik}>
                <Formik
                validate={this.handlevalidation}
                onSubmit={this.handlesubmit} 
            >
                {
                    (errors,touched) => (
                        <Form>
                            <div className={classes.FormGroup}>
                                <label htmlFor = "ProductId" >ProductId:</label>
                                <Field className={classes.Field} type="text" placeholder ="Enter the productId" name ="ProductId"/>
                                <div className={classes.Error} name = "ProductId" component="div">abc</div>
                            </div>
                            <div className={classes.FormGroup}>
                                <label htmlFor = "productName" >Product Name:</label>
                                <Field className={classes.Field} type="text" name ="productName"/>
                                <div className={classes.Error} name = "ProductId" component="div">abc</div>
                            </div>
                            <div className={classes.FormGroup}>
                                <label htmlFor = "productCategory" >Product Category:</label>
                                <Field className={classes.Field} type="text" name ="productCategory"/>
                                <div className={classes.Error} name = "ProductId" component="div">abc</div>
                            </div>
                            <div className={classes.FormGroup}>
                                <label htmlFor = "Available" >Available:</label>
                                <Field className={classes.Field} type="text" name ="Available"/>
                                <div className={classes.Error} name = "Available" component="div">abc</div>
                            </div>
                            <div className={classes.FormGroup}>
                                <label htmlFor = "CurrentSP" >Selling Price:</label>
                                <Field className={classes.Field} type="text" name ="CurrentSP"/>
                                <div className={classes.Error} name = "CurrentSP" component="div">abc</div>
                            </div>
                            <button className = {classes.button}type="submit">
                                submit
                            </button>
                        </Form>
                    )
                }    
            </Formik>
            </div>
        </Aux> 
        )
         
    }
}

export default ProductForm;
