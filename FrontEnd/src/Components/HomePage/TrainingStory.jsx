const TrainingStory = ({ trainingData }) => {
    return (
        <>

            <div className="module-info" data-testId="trainingstory" >
                {trainingData.modules?.map((module, index) => (
                    <p key={index}>{module.name} , {module.challenge} :  {module.status}</p>
                ))}
            </div >

        </>
    )
}
export default TrainingStory;