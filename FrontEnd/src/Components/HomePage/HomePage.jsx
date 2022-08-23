import React from 'react';
import Profile from "./Profile";
import Training from "./Training";
import Information from "./Information";
// import '.../CSS/home.css'


import { useEffect, useState } from 'react';
import axios from 'axios';
// import FullProfile from './component/FullProfile';


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
            console.log('HEllo');
            const res = await axios.get('http://localhost:4000/graduate/1234');
            setProfileData(res.data);
            console.log(res.data);

        }
        catch (e) {
            console.log(e);
        }
    };








    const getTrainingData = async () => {
        try {
            const res = await axios.get('http://localhost:4000/trainings/1234');
            setTrainingData(res.data)
            console.log(res.data)
        }
        catch (e) {
            console.log(e);
        }
    }





    const getInformationData = async () => {
        try {
            console.log('Hello');
            const res = await axios.get('http://localhost:4000/information/1234');
            setInformationData(res.data);

            console.log(res.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <Profile profileData={profileData} />
            <Training trainingData={trainingData} />
            <Information informationDat={informationData} />
        </div>
    )




}

export default Homepage; 