import Story from './Story'
import '../../CSS/Profile.css'


const Profile = ({ profileData }) => {
    const { name, personalEmail, dfEmail, github, phone, linkedin, gender, nationality } = profileData;
    return (
        <div className="whole-component">
            <div className="Basic-info">
                <div className="title">
                    <h1>Your profile</h1>
                    <button type="submit" id="edit-button"><a href="/profilepage">Edit</a></button>
                </div >
                <p><strong>Name:</strong>{name} </p>
                <p><strong>Personal email:</strong>{personalEmail} </p>
                <p><strong>Digital futures email:</strong>{dfEmail} </p>
                <p><strong>Github:</strong>{github}</p>
                <p><strong>Linkedin:</strong>{linkedin} </p>
                <p><strong>Phone:</strong>{phone}</p>

            </div>
            <Story />
        </div>

    )
}
export default Profile
