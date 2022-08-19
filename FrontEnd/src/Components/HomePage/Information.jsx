import React from 'react';
import ProfileBadge from './ProfileBadge';
import ProfileScore from './ProfileScore';
import '../../CSS/Information.css';



const Information = ({ informationData }) => {
    return (
        <>

            < div className='profile-container' >
                <div className='info-container'>
                    <div><h1>Your Information</h1></div>
                    <div className='badge-container'>
                        <div className='h3'><h3>Badges:</h3></div>
                        <div className='badge-holder'>
                            <div className='holder'>
                                {
                                    informationData.map((eachItem, index) => (
                                        <ProfileBadge key={index} badgeName={eachItem.badges.badgeName} badgeDescription={eachItem.badges.badgeDescription} />
                                    ))}
                            </div >
                            <div>
                                <ProfileScore />
                            </div >
                        </div>
                    </div >
                </div >
            </div>
        </>

        //                     <ProfileBadge badgeName={badgeName} badgeDescription={badgeDescription} />
        //
        //     </div >
        //     <ProfileScore />
        // </div >

    );
}



export default Information;