import Profile from "./Profile";
import Training from "./Training";
import Information from "./Information";
import { useEffect, useState } from "react";
import axios from "axios";

const Homepage = () => {

    const [profileData, setProfileData] = useState([]);

    useEffect(() => {
        getData();
        getTrainingData();
    }, [])
    
    const getData = async () => {
        try {
            const res = await axios.get('http://localhost:3000/info');
            setProfileData(res.data.data)
        }
        catch (e) {
            console.log(e);
        }
    }

    const [trainingData, setTrainingData] = useState([]);

        
    const getTrainingData = async () => {
        try {
            const res = await axios.get('http://localhost:3000/info');
            setTrainingData(res.data.data)
            console.log(res.data.data)
        }
        catch (e) {
            console.log(e);
        }
    }

    return ( 
        <div>
            <Profile profileData={profileData} />
            <Information  />
            <Training trainingData={trainingData } />
        </div>
    
)
}

export default Homepage; 