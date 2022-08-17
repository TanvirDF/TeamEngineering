import React from 'react';
// import '../CSS/Information.css';



const ProfileBadge = ({ badgeName, badgeDescription }) => {
    return (
        // <div className='info-container'>
        //     <div><h1>Your Information</h1></div>
        //     <div className='badge-container'>
        //         <div className='h3'><h3>Badges:</h3></div>
        //         <div className='badge-holder'>
        //             <div className='holder'>
        <div className='badge'>
            <h2>{badgeName}  </h2>
            <p>{badgeDescription}</p>
        </div>
    );


    //             </div >
    //         </div >
    //     </div >
    // </div >
}


export default ProfileBadge;