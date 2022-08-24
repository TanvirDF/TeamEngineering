import React from "react";
import CertificatesTable from "../PersonalStory/CertificatesTable.jsx";
import DegreeTable from "../PersonalStory/DegreeTable.jsx";
import PortfolioTable from "../PersonalStory/Portfolio.jsx";
import SchoolTable from "../PersonalStory/SchoolTable.jsx";
import WorkTable from '../PersonalStory/WorkTable'




const PersonalStory = ({ profileData }) => {

    return (
        <>
            <DegreeTable degrees={profileData.degrees} />
            <SchoolTable schooling={profileData.schooling} />
            <WorkTable work={profileData.work} />
            <CertificatesTable certificate={profileData.certificate} />
            <PortfolioTable portfolio={profileData.portfolio} />
        </>

    )
}

export default PersonalStory;