import Story from './Story'
import '../CSS/Profile.css'


const Profile = () => {
    return (
        <div className="whole-component">
            <div className="Basic-info">
                <div className="title">
                    <h1>Your profile</h1>
                    <button type="submit" id="edit-button">Edit</button>
                </div >
                <p><strong>Name:</strong> Nathan</p>
                <p><strong>Personal email:</strong> nathanfry98@gmail.com</p>
                <p><strong>Digital futures email:</strong> nathan@dfutures.com</p>
                <p><strong>Github:</strong> nate8998</p>
                <p><strong>Linkedin:</strong> nathan@linkedin</p>
                <p><strong>Phone:</strong> 07872415240</p>
            </div>
            <Story />
        </div>

    )
}
export default Profile
