import React from "react";
import EditPI from "./EditPI";
import PersonalStory from "./PersonalStory.jsx";
import ProfileCompletion from "./ProfileCompletion";
// import "FrontEnd/src/CSS/EditPI.css";
    
const ProfilePage = () => {
    return (
        <div>
        <ProfileCompletion/>
        <EditPI/>
        <PersonalStory />
        </div>
    )
}

export default ProfilePage;
