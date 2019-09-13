import React from 'react';
import {Link} from 'react-router-dom';

/* Component for the navigation between pages */
const Header: React.FC = () => {
    return (
        <nav className='navbar is-primary container'>
            <div className='navbar-brand'>
                <Link className='navbar-item' to='/'>App</Link>
                <Link className='navbar-item' to='about'>About</Link>                           
                <div className='navbar-burger'>
                    <span></span>  
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
}
/*
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
*/

export default Header;