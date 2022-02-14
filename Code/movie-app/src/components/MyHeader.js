import React from 'react';

function MyHeader() {
    return (
        <header style={styles.header}>
            <div style={styles.logo}>
                <h1> The Movie Spot </h1>
            </div>
            <div>
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
        justifyContent: 'space-between',
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
    search:{
        marginRight: '40px',
        width: '400px',
        fontSize: '20px',
        padding: '5px 0 5px 10px', 
        display: 'block',
        borderRadius: '10px'
    }
}