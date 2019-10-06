import React,{Component} from 'react';
import classes from './Dashboard.module.css';
import Salesgraph from '../../Components/Salesgraph/Salesgraph'
import ProfitLoss from '../../Components/ProfitLoss/ProfitLoss'
import Piechart from '../../Components/Piechart/Piechart'
import ProductStatistics from '../../Components/ProductsStatistics/ProductStatistics'
import {connect} from 'react-redux';

class Dashboard extends Component {

    render = () => {
        let dashboardclass = [classes.Dashboard]
        if (this.props.sidebarshow) {
            dashboardclass = [classes.DashboardSideBar]
        }
        return (
            <div className ={dashboardclass.join(' ')}>
               <Salesgraph />
               <Piechart />
               <ProfitLoss />
               <ProductStatistics />              
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        sidebarshow:state.sidebarshow
    }
}

export default connect(mapStatetoProps,null)(Dashboard);