import React from 'react';
import ProfileBadge from './ProfileBadge';
import ProfileScore from './ProfileScore';
import '../CSS/Information.css';



const Information = ({ badgeName, badgeDescription, scoreAptitude, scoreJava }) => {
    return (
        <div className='profile-container'>
            <div className='info-container'>
                <div><h1>Your Information</h1></div>
                <div className='badge-container'>
                    <div className='h3'><h3>Badges:</h3></div>
                    <div className='badge-holder'>
                        <div className='hold</div>er'>
                            <ProfileBadge badgeName={badgeName} badgeDescription={badgeDescription} />
                        </div>
                    </div >
                </div >
            </div >
            <ProfileScore />
        </div >
    );
}



export default Information;