import React from "react";
import EditPI from "./EditPI";
import PersonalStory from "./PersonalStory.jsx";
import ProfileCompletion from "./ProfileCompletion";
import { useEffect, useState } from "react";
import axios from "axios";

    
const ProfilePage = () => {

    const [personalStory, setPersonalStory] = useState([]);
    
    
    useEffect(() => {
        getPersonalStory();
    }, []);


    const getPersonalStory = async () => {
        try {
            const res = await axios.get('mongodb+srv://Tanvir:pass123@teamengineering.zhdzlfu.mongodb.net/userData/personalStory');
            setPersonalStory(res.data);
            console.log(res.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
        <ProfileCompletion/>
        <EditPI/>
        <PersonalStory props={personalStory} />
        </div>
    )
}

export default ProfilePage;
