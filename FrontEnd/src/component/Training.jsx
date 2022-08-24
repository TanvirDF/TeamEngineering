import React from "react";
import TrainingStory from "./TrainingStory";
import '../CSS/Training.css'

const Training = () => {
    return (
        <div className="box-component">
            <div className="training-info">
                <h1>Your training</h1>

                <p><strong>Cohort:</strong> 5</p>
                <p><strong>Learning path:</strong> Software Engineering</p>
                <p><strong>Trainer:</strong> Ed</p>
                <p><strong>Training finish date:</strong> 26th August 2022</p>
            </div>
            <TrainingStory />
        </div>
    )
}

export default Training;