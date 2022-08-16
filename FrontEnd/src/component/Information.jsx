import React from 'react';
import ProfileBadge from './ProfileBadge';
import ProfileScore from './ProfileScore';
import '../CSS/Information.css';



const Information = ({ profileData }) => {
    return (
        <div className='profile-container'>
            {profileData.map((eachItem, index) => (
                <ProfileBadge key={index} badgeName={eachItem.badges.badgeName} />
                // <ProfileScore />
            ))}
        </div>
    );
}



export default Information;