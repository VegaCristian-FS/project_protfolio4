import React from 'react';
import { Link } from 'react-router-dom';
import {MdMovie, MdTrendingUp, FaHeart} from 'react-icons/md';
import {BsFillHeartFill} from 'react-icons/bs';
import {ImTv} from 'react-icons/im';

const Nav = props => {
    return(
        <aside style={styles.aside}>
            <nav>
                <ul style={styles.nav}>
                    <li><Link to='/CurrentMovies' style={styles.navContainer}><MdMovie/> Current Movies</Link></li>
                    <li><Link to='/Trending' style={styles.navContainer}><MdTrendingUp/> Trending</Link></li>
                    <li><Link to='/PopularMovies' style={styles.navContainer}><BsFillHeartFill/>Popular Movies</Link></li>
                    <li><Link to='/TVShows' style={styles.navContainer}><ImTv/>TV Shows</Link></li>
                </ul>
                
            </nav>
        </aside>
    )
}
export default Nav

const styles = {
    aside:{
        zIndex: '1',
        position: 'fixed',
        top: '0',
        left: '0',
        paddingTop: '100px',
        display: 'block',
        height: '100vh',
        fontSize:'1.5rem',
        backgroundColor: '#242526'
    },
    nav:{
        listStyleType: 'none',
        margin: '0',
        padding: '0',
        width: '200px'
    },
    navContainer:{
        display: 'block',
        color: '#D3D3D3',
        padding: "8px 16px",
        textAlign: "left",
        textDecoration: 'none',

        "&:hover":{
            backgroundColor: "#555",
            color: "black"
        }
    }
}