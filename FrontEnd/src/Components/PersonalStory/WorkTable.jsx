import { useState } from 'react';
import data from './personalStory.json'

const WorkTable = () => {

  const [works, setWorks] = useState(data);

  return (
    
    <>
      <div>
        <h4>Work Experience / positions held</h4>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Employer or other organization</th>
            <th>Position</th>
            <th>From</th>
            <th>To</th>
            <th>Weight</th>
            <th>Priority</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {works.map((work) =>
          <tr>
            <td>{work.work.type}</td>
            <td>{work.work.employer}</td>
            <td>{work.work.position}</td>
            <td>{work.work.fromDate}</td>
            <td>{work.work.toDate}</td>
            <td>{work.work.weight}</td>
            <td>{work.work.priority}</td>
            <td>{work.work.description}</td>
          </tr>)}
          
        </tbody>
      </table>
    </div>

</>
    
  )


}
export default WorkTable;