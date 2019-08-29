import React from 'react';
import {Link} from 'react-router-dom';


const Header: React.FC = () => {
    return (
        <header style={headerStyle}>
            <Link to='/'>App</Link>|<Link to='about'>About</Link>
        </header>
    );
}

let headerStyle = {
    display: 'flex',
    padding: '10px auto',
    margin: '10px auto',
    fontSize: '5evh',
    maxWidth: '20%',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: '#5dd9ce',
    color: 'black',
    textAlign: 'center' as 'center',
    borderRadius: '50px',
    textDecoration: 'none',
}


export default Header;