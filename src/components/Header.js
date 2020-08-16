import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from '@material-ui/core'
import { useStateValue } from '../StateProvider';

function Header({spotify}) {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className='header'>
            <div className='header__left'>
                <SearchIcon />
                <input
                    placeholder='Search for any artist, songs or podcasts '
                    type='text'
                />
            </div>
            <div className='header__right'>
                <h4>{user?.display_name}</h4>
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
            </div>
        </div>
    )
}

export default Header
