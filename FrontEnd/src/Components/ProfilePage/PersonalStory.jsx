import React from "react";
import CertificatesTable from "../PersonalStory/CertificatesTable.jsx";
import DegreeTable from "../PersonalStory/DegreeTable.jsx";
import PortfolioTable from "../PersonalStory/Portfolio.jsx";
import SchoolTable from "../PersonalStory/SchoolTable.jsx";
import WorkTable from '../PersonalStory/WorkTable'
import '../../CSS/tables.css'



const PersonalStory = ({ profileData }) => {

    return (
        <div className="storybox">
            <h1 id="content">Personal Story</h1>
            <DegreeTable degrees={profileData.degrees} />
            <SchoolTable schooling={profileData.schooling} />
            <WorkTable work={profileData.work} />
            <CertificatesTable certificate={profileData.certificate} />
            <PortfolioTable portfolio={profileData.portfolio} />
       </div>

    )
}

export default PersonalStory;