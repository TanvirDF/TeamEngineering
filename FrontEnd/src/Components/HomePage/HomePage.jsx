import React from 'react';
import Profile from "./Profile";
import Training from "./Training";
import Information from "./Information";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useParams } from 'react-router-dom';




const Homepage = ({ id }) => {



    const [profileData, setProfileData] = useState([]);
    const [trainingData, setTrainingData] = useState([]);
    const [informationData, setInformationData] = useState([]);

    useEffect(() => {
        getInformationData();
        getTrainingData();
        getProfileData();
    }, [id]);

    const getProfileData = async () => {
        try {
            // console.log('Hello from profile');
            const res = await axios.get(`http://localhost:4000/graduate/${id}`);
            setProfileData(res.data);
            // console.log(res.data);
        }
        catch (e) {
            console.log(e);
        }
    }
    const getTrainingData = async () => {
        try {
            // console.log('Hello from training');
            const res = await axios.get(`http://localhost:4000/training/${id}`);
            setTrainingData(res.data)
            // console.log(res.data)
        }
        catch (e) {
            console.log(e);
        }
    }

    const getInformationData = async () => {
        try {
            // console.log('Hello from information');
            const res = await axios.get(`http://localhost:4000/information/${id}`);
            setInformationData(res.data);
            // console.log(res.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <Profile profileData={profileData} id={id} />
            <Training trainingData={trainingData} />
            <Information informationData={informationData} />
        </div>
    )
}



export default Homepage; 