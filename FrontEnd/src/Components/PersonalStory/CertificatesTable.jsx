import { useState } from 'react';

// import '../'

const CertificatesTable = ({props}) => {
  
  const [certificates, setCertificates] = useState();
  const { type, employer, position, fromDate, toDate, weight, priority, description} = props
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
          {certificates.map((props) =>
          <tr>
            <td>{props.type}</td>
            <td>{props.employer}</td>
            <td>{props.position}</td>
            <td>{props.fromDate}</td>
            <td>{props.toDate}</td>
            <td>{props.weight}</td>
            <td>{props.priority}</td>
            <td>{props.description}</td>
          </tr>)}
          
        </tbody>
      </table>
    </div>

</>
    
  )


}
export default CertificatesTable;