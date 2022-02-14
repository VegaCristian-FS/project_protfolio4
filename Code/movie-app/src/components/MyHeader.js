import React from 'react';

function MyHeader() {
    return (
        <header style={styles.header}>
            <div style={styles.logo}>
                <h1> The Movie Spot </h1>
            </div>
            <div style={styles.searchContainer}>
                <input style={styles.search} placeholder='Search'></input>
            </div>
        </header>
    )
}
export default MyHeader

const styles={
    header:{
        display: 'flex',
        felxDirection: 'row',
        alignItems: 'center',
        position: 'fixed',
        zIndex: '2',
        height: '50px',
        width: '100%',
        padding: '20px',
        backgroundColor: '#0071b7',
        color: '#000'
    },
    logo:{
        backgroundColor: '#F1c538',
        padding: '5px'
    },
    searchContainer:{
        textAlign: 'right'
    },
    search:{

    }
}