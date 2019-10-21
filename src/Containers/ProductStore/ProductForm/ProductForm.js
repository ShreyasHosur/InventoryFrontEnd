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
        available:'',
        currentSP:'',
        initial:null,
        mount:false,
        change:[]
    }

    

    componentDidMount(){
        axios.get(`/get-productid-info?id=${this.props.match.params.id}`)
        .then(response => {
            this.setState({
                productId:response.data.productId,
                productName:response.data.productName,
                productCategory:response.data.productCategory,
                available:response.data.available,
                currentSP:response.data.currentSP,
                initial:response.data,
                mount:true
            })
        });
    }

    handlevalidation = (values) => {
        let errors = {}
        if(!values.productId){
            errors.productId = "Please enter Product Id"
        }
        else if(!values.productName){
            errors.productName = "Please Enter Product Name"
        }
        else if(!values.productCategory){
            errors.productCategory = "Please Product Category"
        }
        return errors;
    }

    handlesubmit = (values,{setSubmitting}) => {
        values = {
            ...values,
            productId:parseInt(values.productId),
            currentSP:parseInt(values.currentSP)
        }
        this.compareinitialandchangedValues(values);
        if(this.state.change.length === 0){
            setSubmitting(false);
            return
        }
        else{
          values={
              ...values,
              change:this.state.change
          }
           axios.post(`post-productid-info`,values);
           setSubmitting(false);
        }  
    }

    compareinitialandchangedValues = (values) => {
        if(this.state.mount && values){
            let change = []
            for(let key in values){
                if(this.state.initial[key] != values[key] ){
                    change.push(key)
                }
            }
            this.state.change = change;
            console.log(this.state.change)
            if(change.length > 0){
                return false;
            } 
            return true
    }
    }


    render = () => {
        let {productId,productCategory,productName,available , currentSP} = this.state
        return (
        <Aux> 
            <Topbar/>
            <div className={classes.Formik}>
                <Formik
                initialValues={{ productId, productCategory ,productName ,available,currentSP }}
                validate={this.handlevalidation}
                onSubmit={this.handlesubmit} 
                enableReinitialize={true}
            >
                {
                    (props) => (
                        <Form>
                             {console.log(props)}
                            <div className={classes.FormGroup}>
                                <label htmlFor = "productId" >ProductId:</label>
                                <Field  type="text" placeholder ="Enter the productId" name ="productId"
                                   className={[classes.Field,(props.errors.productId && props.touched.productId) ? classes.FieldInvalid : ''].join(' ')}/>
                                <ErrorMessage className={classes.Error} name = "productId" component="div" value={props.errors.productId}/>
                            </div>
                            <div className={classes.FormGroup}>
                                <label htmlFor = "productCategory" >Product Category:</label>
                                <Field className={[classes.Field,(props.errors.productCategory && props.touched.productCategory) ? classes.FieldInvalid : ''].join(' ')} 
                                  type="text" placeholder ="Enter the Product Category" name ="productCategory"/>
                                <ErrorMessage className={classes.Error} name = "productCategory" component="div" value={props.errors.productCategory}/>
                            </div>
                            <div className={classes.FormGroup}>
                                <label htmlFor = "productName" >Product Name:</label>
                                <Field className={[classes.Field,(props.errors.productName && props.touched.productName) ? classes.FieldInvalid : ''].join(' ')} 
                                  type="text" placeholder ="Enter the Product Name" name ="productName"/>
                                <ErrorMessage className={classes.Error} name = "productName" component="div" value={props.errors.productName}/>
                            </div>
                            <div className={classes.FormGroup}>
                                <label htmlFor = "available" >Available:</label>
                                <Field disabled className={[classes.Field,(props.errors.available && props.touched.available) ? classes.FieldInvalid : ''].join(' ')} 
                                     type="text" name ="available" />
                            </div>
                            <div className={classes.FormGroup}>
                                <label htmlFor = "currentSP" >Selling Price:</label>
                                <Field className={[classes.Field,(props.errors.currentSP && props.touched.currentSP) ? classes.FieldInvalid : ''].join(' ')}
                                     type="text" placeholder ="Enter the SP" name ="currentSP"/>
                                <ErrorMessage className={classes.Error} name = "currentSP" component="div" value={props.errors.currentSP}/>
                            </div>
                            <button disabled = {Object.keys(props.errors).length > 0 || (props.values && this.compareinitialandchangedValues(props.values))} 
                            className = {classes.button} type="submit">
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
