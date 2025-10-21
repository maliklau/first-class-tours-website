import React from "react";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

const Header = () => {

    const [isDropdownVisible, setDropdownVisible] = useState(false);
    
        const handleMouseEnter = () => {
            setDropdownVisible(true);
          };
        
        const handleMouseLeave = () => {
            setDropdownVisible(false);
        };

    return (
        <header style={styles.navbar}>
                <p style={styles.logo}>
                    Call us today: <a style={{fontWeight: "bold"}}>(810) 300-4209</a>
                </p>
                <a href="/" style={{textAlign: 'center', display: 'flow'}}>
                    <img src="firstClassLogoFillCirc.png" alt="First Class Logo" style={{ marginLeft: "150px", maxWidth: '20%', height: 'auto', padding: "5px" }} />
                </a>
                <nav>
                    <ul style={styles.navLinks}>
                        <li><a href="about" style={styles.navLink}>About Us</a></li>
                        <div className="menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <li style={{ position: 'relative' }}>
                                <a href="itineraries" style={styles.navLink}>Our Itineraries</a>
                                {isDropdownVisible && <DropdownMenu />}
                            </li>
                        </div>
                        <li><a href="quote" style={styles.navLink}>Get a Quote</a></li>
                        <li><a href="contact" style={styles.navLink}>Contact</a></li>
                        <li><a href="faqs" style={styles.navLink}>FAQ's</a></li>
                    </ul>
                </nav>
            </header>
    );
}

const styles = {
    logo: {
        fontSize: '20px',
    },
    navbar: {
        display: 'flex',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#33A8DA',
        color: '#fff',
        paddingLeft: '100px',
        paddingRight: '100px',
    },
    navLinks: {
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
        margin: 0,
        padding: 0,
        fontweight: 'bold',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '20px',
    }
};

export default Header;