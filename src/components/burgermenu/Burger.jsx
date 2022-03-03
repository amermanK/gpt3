import React, { useState } from 'react';
import Menu from '../menu/Menu';
import './burger.scss';


const Burger = () => {
    const [status, setStatus] = useState('close');
    return (
        <div 
            className='Burger__container'
            role='button'
            onClick= {() => setStatus(status === 'open' ? 'close' : 'open')}
        >
            <i className={status}></i>
            <i className={status}></i>
            <i className={status}></i>

            <nav className={status}>
                <div id="Burger__menu">
                    <Menu />
                </div>
            </nav>

        </div>
        
    );
};

export default Burger;