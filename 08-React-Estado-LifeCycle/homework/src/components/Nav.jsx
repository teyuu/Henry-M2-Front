import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className='navbar navbar-dark bg-dark'>
      <div>
        <img src={Logo} alt="" />
        <span className='text-white ml-3'>Henry - Weather app</span>
      </div>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
