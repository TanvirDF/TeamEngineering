import React from "react";
import TrainingStory from "./TrainingStory";

const Training = () => {
    return (
        <div className="whole-component">
            <div className="Basic-info">
                <div className="title">
                    <h1>Your training</h1>
                </div>
                <p><strong>Cohort:</strong> 5</p>
                <p><strong>Learning path:</strong> Software Engineering</p>
                <p><strong>Trainer:</strong> Ed</p>
                <p><strong>Training finish date:</strong> 26th August 2022</p>
                <TrainingStory />
            </div>
        </div>
    )
}

export default Training;