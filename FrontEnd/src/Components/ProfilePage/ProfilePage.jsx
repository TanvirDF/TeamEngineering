import React from "react";
import EditPI from "./EditPI";
import PersonalStory from "./PersonalStory.jsx";
import ProfileCompletion from "./ProfileCompletion";
import { useEffect, useState } from "react";
import axios from "axios";


const ProfilePage = ({ id }) => {

    const [profileData, setProfileData] = useState([]);


    useEffect(() => {
        getProfileData();
    }, [id]);


    const getProfileData = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/personalStory/${id}`);
            setProfileData(res.data);
            console.log(res.data);
        }
        catch (e) {
            console.log(e);
        }
    }



    return (
        <div>
            {/* <ProfileCompletion /> */}
            <EditPI />
            <PersonalStory profileData={profileData} />
        </div>
    )
}

export default ProfilePage;
