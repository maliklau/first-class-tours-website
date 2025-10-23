import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.footerContent}>
                <img
                    src="smallNoCircleLogo.webp"
                    alt="First Class Tours Logo"
                    style={styles.logo}
                />
                <div style={styles.textAndLinks}>
                    <p style={styles.address}>P.O. Box 137 Algonac, MI 48001</p>
                    <div style={styles.links}>
                        <a
                            target="_blank"
                            href="https://www.instagram.com/firstclasstoursllc?igsh=MW9kZmg5NzFneHZhdQ=="
                        >
                            <InstagramIcon style={styles.linkStyling} />
                        </a>
                        <FacebookIcon style={styles.linkStyling} />
                        <a target="_blank" href="mailto:firstclasstoursllc@gmail.com">
                            <EmailIcon style={styles.linkStyling} />
                        </a>
                        <a>
                            <MonetizationOnIcon style={styles.linkStyling} />
                        </a>
                    </div>
                <p style={styles.copyright}>
                    © 2025 First Class Tours. All rights reserved.
                 </p>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        textAlign: 'center',
        padding: '10px',
        backgroundColor: '#333535',
        color: '#fff',
    },
    footerContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '8px',
    },
    logo: {
        width: '8%',
        marginRight: '20px',
    },
    textAndLinks: {
        textAlign: 'left',
    },
    address: {
        fontWeight: 'bold',
        fontSize: '16px',
        marginBottom: '10px',
    },
    links: {
        display: 'flex',
        alignItems: 'center',
    },
    linkStyling: {
        color: '#fff',
        textDecoration: 'none',
        verticalAlign: 'middle',
        marginRight: '8px',
    },
    copyright: {
        fontSize: '14px',
    },
};

export default Footer;