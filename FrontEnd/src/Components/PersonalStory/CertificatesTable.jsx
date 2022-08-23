import { useState } from 'react';
import data from './personalStory.json'
// import '../'

const CertificatesTable = () => {

  const [certificates, setCertificates] = useState(data);

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
          {certificates.map((certificate) =>
          <tr>
            <td>{certificate.awards.type}</td>
            <td>{certificate.awards.employer}</td>
            <td>{certificate.awards.position}</td>
            <td>{certificate.awards.fromDate}</td>
            <td>{certificate.awards.toDate}</td>
            <td>{certificate.awards.weight}</td>
            <td>{certificate.awards.priority}</td>
            <td>{certificate.awards.description}</td>
          </tr>)}
          
        </tbody>
      </table>
    </div>

</>
    
  )


}
export default CertificatesTable;