import React, { useEffect, useRef } from 'react';

const RotatingImages = () => {
    const images = [
        "rotatingImg1.jpg",
        "rotatingImg2.jpg",
        "rotatingImg3.jpg",
        "rotatingImg4.jpg",
        "rotatingImg5.jpg",
        "rotatingImg6.jpg",
    ];

    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        let animationFrameId;

        const startSliding = () => {
            if (!container) return;

            let scrollAmount = 0;

            const slide = () => {
                scrollAmount += 1; // Adjust this value to control the speed
                if (scrollAmount >= container.scrollWidth / 2) {
                    scrollAmount = 0; // Reset scroll to create a seamless loop
                }
                container.scrollLeft = scrollAmount;
                animationFrameId = requestAnimationFrame(slide);
            };

            slide();
        };

        startSliding();

        return () => cancelAnimationFrame(animationFrameId); // Cleanup on unmount
    }, []);

    return (
        <div ref={containerRef} style={styles.container}>
            <div style={styles.slider}>
                {[...images, ...images].map((src, index) => (
                    <div key={index} style={styles.imageWrapper}>
                        <img src={src} alt={`Image ${index + 1}`} style={styles.image} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    slider: {
        display: 'flex',
    },
    imageWrapper: {
        flex: '0 0 auto',
        width: '200px',
        height: '200px',
        margin: '0 5px',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
};

export default RotatingImages;
