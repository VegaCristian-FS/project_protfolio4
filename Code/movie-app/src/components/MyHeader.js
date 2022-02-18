import React from 'react';

function MyHeader() {
    return (
        <header>
            <h1 style={styles.logo}> The Movie Spot </h1>
            <div>
                <input style={styles.search} placeholder='Search'></input>
            </div>
        </header>
    )
}
export default MyHeader

const styles={
    logo:{
        backgroundColor: '#F1c538',
        height: '50px',
        padding: '10px',
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