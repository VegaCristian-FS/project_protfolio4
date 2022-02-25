import React from 'react';
import { NavLink } from 'react-router-dom';
import {MdMovie, MdTrendingUp} from 'react-icons/md';
import {BsFillHeartFill} from 'react-icons/bs';
import {ImTv} from 'react-icons/im';

const MyNav = props => {
    return(
        <aside style={styles.aside}>
            <nav style={styles.nav}>
                <li><NavLink to='/CurrentMovies' style={styles.navContainer}><MdMovie/> Current Movies</NavLink></li>
                <li><NavLink to='/Trending' style={styles.navContainer}><MdTrendingUp/> Trending</NavLink></li>
                <li><NavLink to='/PopularMovies' style={styles.navContainer}><BsFillHeartFill/> Popular Movies</NavLink></li>
                <li><NavLink to='/TVShows' style={styles.navContainer}><ImTv/> TV Shows</NavLink></li>
            </nav>
        </aside>
    )
}
export default MyNav

const styles = {
    aside:{
        zIndex: '1',
        position: 'fixed',
        top: '0',
        left: '0',
        paddingTop: '80px',
        display: 'block',
        height: '100vh',
        fontSize:'1.5rem',
        backgroundColor: '#33393d'
    },
    nav:{
        padding: '10px',
        width: '290px'
    },
    navContainer:{
        display: 'block',
        color: '#fff',
        padding: "5px 16px",
        textAlign: "left",
        textDecoration: 'none',
    }
}