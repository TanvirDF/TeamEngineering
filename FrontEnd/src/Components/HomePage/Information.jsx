import React from 'react';
import ProfileBadge from './ProfileBadge';
import ProfileScore from './ProfileScore';
import '../../CSS/Information.css';



const Information = ({ informationData }) => {
    return (
        < div className='profile-container' >
            <div><h1>Your Information</h1></div>
            <div className='info-container'>
                <div className='badge-container'>
                    <div className='BLabel'><h3>Badges:</h3></div>
                    <div className='badge-holder'>
                        {/* {informationData.badges?.map((badge, index) => (
                            <div className='holder' key={index}>
                                <div className='badge'>
                                    <h2>{badge.name}  </h2>
                                    <p>{badge.description}</p>
                                </div>
                            </div >
                        ))} */}
                    </div>
                </div >
                <div>
                    {/* <ProfileScore scoreData={informationData} /> */}
                </div >
            </div >
        </div>
    );
}



export default Information;