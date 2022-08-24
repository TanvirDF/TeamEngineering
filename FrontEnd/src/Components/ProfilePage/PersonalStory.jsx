import React from "react";
import CertificatesTable from "../PersonalStory/CertificatesTable.jsx";
import DegreeTable from "../PersonalStory/DegreeTable.jsx";
import PortfolioTable from "../PersonalStory/Portfolio.jsx";
import SchoolTable from "../PersonalStory/SchoolTable.jsx";
import WorkTable from '../PersonalStory/WorkTable'




const PersonalStory = ({ profileData }) => {

    return (
        <>
            <DegreeTable />
            <SchoolTable />
            <WorkTable />
            <CertificatesTable profileData={profileData} />
            <PortfolioTable />
        </>

    )
}

export default PersonalStory;