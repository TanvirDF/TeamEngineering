import React from "react";
import TrainingStory from "./TrainingStory";
import '../../CSS/Training.css'





const Training = ({ trainingData }) => {
    const { cohort, learningPath, trainer, trainingFinishDate } = trainingData;
    return (
        <div className="box-component">
            <div className="training-info">
                <h1>Your training</h1>
                <p><strong>Cohort : </strong>{cohort}</p>
                <p><strong>Learning Path :  </strong>{learningPath}</p>
                <p><strong>Trainer :  </strong>{trainer}</p>
                <p><strong>Training finish date :  </strong>{
                    trainingFinishDate}</p>
            </div>
            <TrainingStory trainingData={trainingData} />
        </div>
    )
}

export default Training;