import React from 'react';
import Aux from '../hoc/Aux'
import Header from '../Components/Header/Header'
import Dashboard from  './DashBoard/Dashboard';



const Home = () => {
    return (
        <Aux>
        <Header />
        <Dashboard  />  
        </Aux>
    )
}


export default Home;