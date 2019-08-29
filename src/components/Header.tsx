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
    flexBasis: 'fit-content',
    flexDirection: 'row' as 'row',
    padding: '0',
    margin: '0',
    fontSize: '10px',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    color: 'black',
    borderRadius: '50px',
    textDecoration: 'none',
}


export default Header;