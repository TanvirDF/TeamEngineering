import React from 'react';



const ProfileScore = () => {
    return (
        <div className='score-container'>
            <div className='label'><h3>Scores:</h3></div>
            <div className='scrollBox'>Aptitude: 93%<br />
                Java:87<br />
                (here we only show particular external scores)</div>
        </div>
    );
}


export default ProfileScore;