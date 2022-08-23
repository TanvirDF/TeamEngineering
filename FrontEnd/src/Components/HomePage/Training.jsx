import React from "react";
import TrainingStory from "./TrainingStory";
import '../../CSS/Training.css'


const Training = ({ trainingData }) => {

    return (
        <div className="box-component">
            <div className="training-info">
                <h1>Your training</h1>
                {/* {
                    trainingData.map((eachItem, index) => (
                         key={index} cohort={eachItem.cohort} track={eachItem.track} trainer={eachItem.trainer} finishDate={eachItem.finishDate} 
                    ))} */}
                
            </div>
            {/* <TrainingStory /> */}
        </div>
    )
}

export default Training;