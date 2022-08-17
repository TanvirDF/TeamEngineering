import React from "react";
import EditPI from "../EditPI";
import Profile from "../Profile";
import PersonalStory from "./PersonalStory";
// import "FrontEnd/src/CSS/EditPI.css";

    
const ProfilePage = () => {
    return (
        <div>
        <Profile/>
        <PersonalStory />
        <EditPI/>
        </div>
    )
}

export default ProfilePage;
