import React, { Fragment } from 'react';
import Navbar from './components/navbar/Navbar';
import MainContainer from './components/mainContainer/MainContainer';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = () => (
    <Fragment>
        <Navbar />
        <Header />
        <div> ></div>
        <div> ></div>
        <MainContainer />
        <Footer />
    </Fragment>
);

export default App;
