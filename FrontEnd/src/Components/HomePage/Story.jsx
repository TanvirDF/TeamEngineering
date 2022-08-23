const Story = ({ personalStory }) => {

    return (
        <div className="quali" data-testId="story">
            <h3>Personal story summary:</h3>
            <br />
            <div className="info-box">
                <p>Degree in {personalStory.userId}</p>
                <p>13 school qualifications</p>
                <p>5 work experience</p>
                <p>3 personal achievements</p>
            </div>
        </div>
    )
}
export default Story;