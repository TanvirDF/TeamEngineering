import React from 'react';
import ProfileBadge from './ProfileBadge';
import ProfileScore from './ProfileScore';
import '../CSS/Information.css';



const Information = () => {
    return (
        <div className='profile-container'>
            <ProfileBadge />
            <ProfileScore />
        </div>
    );
}



export default Information;