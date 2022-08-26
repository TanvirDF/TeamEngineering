import React from "react";
import EditPI from "./EditPI";
import PersonalStory from "./PersonalStory.jsx";
import ProfileCompletion from "./ProfileCompletion";
import { useEffect, useState } from "react";
import axios from "axios";


const ProfilePage = ({ id }) => {

    const [profileData, setProfileData] = useState([]);
    const [personalStory, setPersonalStory] = useState([]);


    useEffect(() => {
        getPersonalStory();
        getProfileData();
    }, [id]);


    const getPersonalStory = async () => {
        const res = await axios.get(`http://localhost:4000/personalStory/${id}`);
        setPersonalStory(res.data);
        console.log(res.data);

    }
    const getProfileData = async () => {

        // console.log('Hello from profile');
        const res = await axios.get(`http://localhost:4000/graduate/${id}`);
        setProfileData(res.data);
        console.log(res.data);

    }



    return (
        <div>
            {/* <ProfileCompletion /> */}
            <EditPI profileData={profileData} id={id} />
            <PersonalStory personalStory={personalStory} />
        </div>
    )
}

export default ProfilePage;
