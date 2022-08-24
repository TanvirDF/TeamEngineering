import React from 'react';
// import '../CSS/Information.css';



const ProfileBadge = ({ informationData }) => {
    return (
        // <div className='info-container'>
        //     <div><h1>Your Information</h1></div>
        //     <div className='badge-container'>
        //         <div className='h3'><h3>Badges:</h3></div>
        //         <div className='badge-holder'>
        //             <div className='holder'>
        <>
            {informationData?.badges?.map((badge, index) => (
                <div className='badge' key={index}>
                    <h2>{badge.name}  </h2>
                    <p>{badge.description}</p>
                </div>
            ))}
        </>
    );


    //             </div >
    //         </div >
    //     </div >
    // </div >
}


export default ProfileBadge;