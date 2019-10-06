import React , {Component} from 'react';
import classes from './Topbar.module.css';
import Hamburger from './Hamburger/Hamburger';
import {connect} from 'react-redux'
import * as actionCreators from '../../Store/actions/actionCreators'

class Topbar extends Component {


    render = () => {

        return (
            <div className={classes.Topbar}>
                <div className={classes.hamburger}>
                    <Hamburger clicked = {this.props.ToggleSideBar} />
                </div>
                <a href = "/">Nav1</a>
                <a href = "/">Nav2</a>   
                {this.props.children}
            </div>       
         )
    }
}

const mapDispatchtoProps = dispatch => {
    return {
    ToggleSideBar : () => dispatch(actionCreators.SidebarToggle())
    }
}

export default connect(null,mapDispatchtoProps)(Topbar);