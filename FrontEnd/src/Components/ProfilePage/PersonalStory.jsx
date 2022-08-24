import React from "react";
import CertificatesTable from "../PersonalStory/CertificatesTable.jsx";
import DegreeTable from "../PersonalStory/DegreeTable.jsx";
import PortfolioTable from "../PersonalStory/Portfolio.jsx";
import SchoolTable from "../PersonalStory/SchoolTable.jsx";
import WorkTable from '../PersonalStory/WorkTable'




const PersonalStory = ({props}) => {
    
    return (
        <>
            <DegreeTable />
            <SchoolTable />
            <WorkTable /> 
            <CertificatesTable props={props.awards} />
            <PortfolioTable />
        </>
       
    )
}

export default PersonalStory;