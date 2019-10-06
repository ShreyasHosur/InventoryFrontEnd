import React, {Component} from 'react';
import TopBar from '../../Components/Topbar/Topbar';
import Table from './Table/Table';
import Aux from '../../hoc/Aux'

class Store extends Component {

    edithandler = (id) => {
        console.log(this.props);
        this.props.history.push(this.props.match.url + "/"+id);
    }

    render = () => {
        return (
            <Aux>
                <TopBar/>
                <Table  edit = {this.edithandler}/>
            </Aux>
        )
    }

}

export default Store;