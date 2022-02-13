import React from 'react';

function Header() {
    return (
        <header style={styles.header}>
            <div style={styles.logo}>
                <h1> The Movie Spot </h1>
            </div>
            <div>
                {/* Search */}
            </div>
        </header>
    )
}
export default Header

const styles={
    header:{
        display: 'flex',
        felxDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        zIndex: '1',
        height: '50px',
        width: '100%',
        padding: '20px',
        backgroundColor: '#0071b7',
        color: '#000'
    },
    logo:{
        backgroundColor: '#F1c538',
        padding: '5px'
    }
}