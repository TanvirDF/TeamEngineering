import React from 'react';
import Information from '../HomePage/Information';
import Profile from '../HomePage/Profile';
import Training from '../Homepage/Training';




const FullProfile = ({ profileData }) => {
    return (
        <>
            {
                profileData.map((eachItem, index) => (
                    <>
                        <Profile />
                        <Training />
                        <Information key={index} badgeName={eachItem.badges.badgeName} badgeDescription={eachItem.badges.badgeDescription} scoreAptitude={eachItem.scores.Aptitude} scoreJava={eachItem.scores.Java} />
                    </>
                ))
            }
        </>
    );
}




export default FullProfile;