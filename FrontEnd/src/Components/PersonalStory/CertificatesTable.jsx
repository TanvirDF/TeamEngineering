import { useState } from 'react';
import data from './personalStory.json'
// import '../'

const CertificatesTable = ({ certificate }) => {

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
            {certificate?.map((certificate) =>
              <tr>
                <td>{certificate.type}</td>
                <td>{certificate.issuer}</td>
                <td>{certificate.awards}</td>
                <td>{certificate.grade}</td>
                <td>{certificate.year}</td>
                <td>{certificate.weight}</td>
                <td>{certificate.priority}</td>
                <td>{certificate.description}</td>
              </tr>)}

          </tbody>
        </table>
      </div>

    </>

  )


}
export default CertificatesTable;