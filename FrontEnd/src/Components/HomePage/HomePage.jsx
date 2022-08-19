import React from 'react';
import Profile from "./Profile";
import Training from "./Training";
import Information from "./Information";
// import '.../CSS/home.css'


import { useEffect, useState } from 'react';
import axios from 'axios';
// import FullProfile from './component/FullProfile';


const Homepage = () => {

    const [informationData, setInformationData] = useState([]);


    useEffect(() => {
        getData();

    }, []);


    const getData = async () => {
        try {
            const res = await axios.get('http://localhost:3000/info');
            setInformationData(res.data.data);
            // console.log(res.data.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <Profile />
            <Training />
            <Information informationData={informationData} />

        </div>

    )
}

export default Homepage; 