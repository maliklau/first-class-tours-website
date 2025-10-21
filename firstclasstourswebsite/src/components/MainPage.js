import React from 'react';
import Footer from './Footer';
import Itineraries from './Itineraries';
import Header from './HeaderNavBar';
import FloatingActionButton from './FloatingActionButton';
import RotatingImages from './RotatingImages';

const MainPage = () => {

    return (
        <div>
            <Header />
            <Itineraries />
            <RotatingImages />
            <FloatingActionButton />
            <Footer />
        </div>
    );
};

const styles = {
    logo: {
        fontSize: '24px',
    },
    mainContent: {
        padding: '15px',
        textAlign: 'center',
    },
};

export default MainPage;