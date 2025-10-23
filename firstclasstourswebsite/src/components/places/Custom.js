import React from 'react';
import Header from "../HeaderNavBar";
import Footer from "../Footer";
import FloatingActionButton from '../FloatingActionButton';

const Custom = () => {
    return (
        <div>
            <Header />
            <div style={styles.imageContainer}>
                <img 
                    src='airplaneFlyingHeader.jpeg' 
                    alt="Airplane in the sky sunrise" 
                    style={styles.image}
                />
                <div style={styles.overlay}></div>
                <h1 style={styles.overlayText}>Skies the limit</h1>
            </div>
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

const styles = {
    imageContainer: {
        position: "relative",
        width: "100%",
        height: "auto",
    },
    image: {
        width: "100%", // Span the full width of the screen
        height: "auto", // Maintain aspect ratio
        display: "block", // Remove any extra space below the image
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent black overlay
    },
    overlayText: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)", // Center the text
        fontSize: "48px",
        fontWeight: "bold",
        color: "#fff",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Add shadow for better readability
        textAlign: "center",
    },
};

export default Custom;