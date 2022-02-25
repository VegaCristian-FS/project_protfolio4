import React from 'react';

function MyHeader() {
    return (
        <header>
            <h1 style={styles.logo}> The Movie Spot </h1>
        </header>
    )
}
export default MyHeader

const styles={
    logo:{
        backgroundColor: '#F1c538',
        height: '50px',
        padding: '10px',
    }
}