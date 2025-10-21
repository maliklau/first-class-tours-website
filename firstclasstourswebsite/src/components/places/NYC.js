import React from 'react';
import Header from "../HeaderNavBar";
import Footer from "../Footer";
import FloatingActionButton from '../FloatingActionButton';

const NYC = () => {
    return (
        <div>
            <Header />
            <h1>Welcome to New York City</h1>
            <p>
                New York City, often simply called NYC, is the largest city in the United States. 
                Known as "The Big Apple," it is famous for its iconic landmarks, diverse culture, 
                and vibrant energy. From Times Square to Central Park, NYC has something for everyone!
            </p>
            <Footer />
            <FloatingActionButton />
        </div>
    );
};

export default NYC;