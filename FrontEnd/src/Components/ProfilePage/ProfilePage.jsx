import React from "react";
import EditPI from "./EditPI";
import PersonalStory from "./PersonalStory";
import ProfileCompletion from "./ProfileCompletion";
// import "FrontEnd/src/CSS/EditPI.css";

    
const ProfilePage = () => {
    return (
        <div>
        <ProfileCompletion/>
        <PersonalStory />
        <EditPI/>
        </div>
    )
}

export default ProfilePage;
