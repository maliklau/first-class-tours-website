import { fontStyle } from "@mui/system";
import React from "react";

const Testimonials = () => {
    const quotes = [
        {
            text: "Highly recommend First Class Tours for anyone looking for a stress-free vacation.",
            author: "Emily Johnson",
            tours: "Washington DC Tour",
        },
        {
            text: "First Class Tours made our group trip easy to plan.",
            author: "Jane Smith",
            tours: "Chicago Tour",
        },
    ];

    return (
        <div style={styles.container}>
            <div>
                <p style={styles.quoteText}>"First Class Tours made our trip <span style={styles.emphasis}>unforgettable!</span>"</p>
                <p style={styles.quoteAuthor}>John Doe <span style={styles.quoteTours}> Boston & NYC Tours</span></p>
            </div>
            <div>
                <p style={styles.quoteText}>"The service was <span style={styles.emphasis}>exceptional</span> and the itinerary was <span style={styles.emphasis}>perfect</span>."</p>
                <p style={styles.quoteAuthor}>Jane Smith<span style={styles.quoteTours}> NYC Tour</span></p>
            </div>
            <div>
                <p style={styles.quoteText}>"Highly recommend First Class Tours for anyone looking for a <span style={styles.emphasis}>stress-free</span> vacation."</p>
                <p style={styles.quoteAuthor}>Emily Johnson<span style={styles.quoteTours}> Washington DC Tour</span></p>
            </div>
            <div>
                <p style={styles.quoteText}>"First Class Tours made our group trip <span style={styles.emphasis}>easy</span> to plan."</p>
                <p style={styles.quoteAuthor}>Marie Claire<span style={styles.quoteTours}> Chicago Tour</span></p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        gap: "30px",
        padding: "20px",
    },
    quoteText: {
        fontSize: "22px",
        fontStyle: "italic",
        marginBottom: "10px",
        fontWeight: "200",
        color: "#555",
    },
    quoteAuthor: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#1C1E20",
    },
    quoteTours: {
        fontSize: "14px",
        color: "#83C4F0",
    },
    emphasis: {
        fontWeight: "300",
        fontSize: "30px",
        color: "#1B6183",
        fontStyle: "normal",
    }
};

export default Testimonials;