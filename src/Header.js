import React from 'react'
import "./Header.css";
import {Avatar} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <ForumIcon />
                <div className="brand_text">
                    OpenForum
                </div>
            </div>

            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search Somthing Here!" />
            </div>


            <div className="header__right">
                <Avatar 
                    className="header__avatar"
                    // alt={user?.displayName}
                    // src={user?.photoURL}
                />
            </div>
        </div>
    )
}

export default Header
