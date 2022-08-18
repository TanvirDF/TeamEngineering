import ProgressBar from "./ProgressBar";

const ProfileCompletion = () => {

    return (
        <>
            <div className="whole-component">
                <div className="progress-bar">
    
                    <div className="title">
                        <h1>Your profile</h1>
                     <button type="submit" id="submit-button">Submit Draft</button>

                    <button type="submit" id="reset-button">Reset Draft</button>
                </div >
                <ProgressBar /> 
                </div>

            </div>

          
        </>

    )
}

export default ProfileCompletion;