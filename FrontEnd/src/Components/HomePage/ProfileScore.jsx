import React from 'react';



const ProfileScore = ({ scoreData }) => {
    return (
        <div className='score-container'>
            <div className='label'><h3>Scores:</h3></div>
            <br />
            < div className='scrollBox'>
                <p>Aptitude: {scoreData.Aptitude}</p>
                {scoreData.scores?.map((score, index) => (
                    <div key={index}>
                        <p> {score.name} : {score.score} </p>
                        <p>(here we only show particular external scores)</p>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default ProfileScore;