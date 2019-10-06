import React , {Component} from 'react';
import Sidebar from '../SideBar/Sidebar'
import Topbar from '../Topbar/Topbar'

class Header extends Component {

    render = () => {
        return (
        <div>
            <Topbar >
            <Sidebar />
            </Topbar>
        </div>
        )
    }

}

export default Header;