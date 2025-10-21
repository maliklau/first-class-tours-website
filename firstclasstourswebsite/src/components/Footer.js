import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '10px', backgroundColor: '#333535', color: '#fff' }}>
            <div stye={{display: "ruby", justifyContent: "center", alignItems: "center", marginBottom: "8px"}}>
                <p style={{fontweight: 'bold', fontSize: '18px'}}>P.O. Box 137 Algonac, MI 48001</p>
                <InstagramIcon style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                <FacebookIcon style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                <EmailIcon style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            </div>
            <p style={{fontSize: "14px"}}>© 2025 First Class Tours. All rights reserved.</p>
        </footer>
    );
};

export default Footer;