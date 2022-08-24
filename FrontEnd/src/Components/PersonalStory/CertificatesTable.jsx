import { useState } from 'react';
// import data from './personalStory.json'
// import '../'

const CertificatesTable = ({ profileData }) => {

  //const [certificates, setCertificates] = useState(data);

  return (

    <>
      <div>
        <h4>Awards Experience / Positions Held</h4>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Issuer</th>
              <th>Award</th>
              <th>Grade</th>
              <th>Year</th>
              <th>Weight</th>
              <th>Priority</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {profileData.map((certificate,index) =>
              <tr key={index}>
                <td>{certificate.type}</td>
                <td>{certificate.employer}</td>
                <td>{certificate.position}</td>
                <td>{certificate.fromDate}</td>
                <td>{certificate.toDate}</td>
                <td>{certificate.weight}</td>
                <td>{certificate.priority}</td>
                <td>{certificate.description}</td>
              </tr>
            )}

          </tbody>
        </table>
      </div>

    </>

  )


}
export default CertificatesTable;