import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css';
import Profile from '../ProfileForm/Profile'

const Header = () => {
    return (
        <div className='holder'>
            <div className='header'>
                <Profile></Profile>

                <SearchForm />
                
            </div>
        </div>
    )
}

export default Header
