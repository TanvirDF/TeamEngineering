const Story = ({ personalStory }) => {

    return (
        <div className="quali" data-testId="story">
            <h3>Personal story summary:</h3>
            <br />
            <div className="info-box">
                {personalStory.degrees?.map((eachDegree, index) => (

                    <p key={index} >Degree in {eachDegree.subject}</p>
                ))}
                {personalStory.schooling ?
                    <p>{personalStory.schooling.length} school qualifications</p> : <></>
                }
                {personalStory.work ?
                    <p> {personalStory.work.length} work experience</p> : <></>
                }
                {personalStory.awards ?
                    <p>{personalStory.awards.length} personal achievements</p> : <></>
                }
            </div>
        </div >
    )
}
export default Story;