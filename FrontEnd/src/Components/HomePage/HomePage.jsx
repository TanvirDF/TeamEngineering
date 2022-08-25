import React from 'react';
import Profile from "./Profile";
import Training from "./Training";
import Information from "./Information";
import { useEffect, useState } from "react";
import axios from "axios";





const Homepage = () => {

    const [profileData, setProfileData] = useState([]);
    const [trainingData, setTrainingData] = useState([]);
    const [informationData, setInformationData] = useState([]);

    useEffect(() => {
        getInformationData();
        getTrainingData();
        getProfileData();
    }, []);

    const getProfileData = async () => {
        try {
            // console.log('Hello from profile');
            const res = await axios.get('http://localhost:4000/graduate/1234');
            setProfileData(res.data);
            // console.log(res.data);
        }
        catch (e) {
            console.log(e);
        }
    }
    const getTrainingData = async () => {
        try {
            console.log('Hello from training');
            const res = await axios.get('http://localhost:4000/training/1234');
            setTrainingData(res.data)
            console.log(res.data)
        }
        catch (e) {
            console.log(e);
        }
    }

    const getInformationData = async () => {
        try {
            // console.log('Hello from information');
            const res = await axios.get('http://localhost:4000/information/1234');
            setInformationData(res.data);
            // console.log(res.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <Profile profileData={profileData} />

            <Training trainingData={trainingData } />
           <Information informationData={informationData} />
  </div>
    )
}



export default Homepage; 