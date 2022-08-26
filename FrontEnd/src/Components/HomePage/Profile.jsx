import Story from './Story'
import '../../CSS/Profile.css'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


const Profile = ({ profileData, personalStory }) => {







    const { name, personalEmail, dfEmail, github, phone, linkedin, gender, nationality } = profileData;



    return (
        <div className="whole-component">
            <div className="Basic-info">
                <div className="title">
                    <h1 >Your profile</h1>
                    <br />
                    <button type="submit" id="edit-button"><a className="link" href="/edit">Edit</a></button>
                </div >
                <div className="info-boxes">
                    <p><strong>Name:  </strong>{name} </p>
                    <p><strong>Personal email:  </strong>{personalEmail} </p>
                    <p><strong>Digital futures email:  </strong>{dfEmail} </p>
                    <p><strong>Github:  </strong>{github}</p>
                    <p><strong>Linkedin:  </strong>{linkedin} </p>
                    <p><strong>Phone:  </strong>{phone}</p>
                </div>
            </div>
            <Story personalStory={personalStory} />
        </div>

    )
}
export default Profile
