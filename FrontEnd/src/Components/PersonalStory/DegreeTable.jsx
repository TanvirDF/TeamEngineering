import { useState } from 'react';
import data from './personalStory.json'

const DegreeTable = () => {

  const [degrees, setDegrees] = useState(data);

  return (
    
    <>
      <div>
        <h4>Degrees</h4>
      <table>
        <thead>
          <tr>
            <th>University</th>
            <th>Subject</th>
            <th>Level</th>
            <th>Grade</th>
            <th>From</th>
            <th>To</th>
            <th>Weight</th>
            <th>Priority</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {degrees.map((degree) =>
          <tr>
            <td>{degree.degrees.university}</td>
            <td>{degree.degrees.subject}</td>
            <td>{degree.degrees.level}</td>
            <td>{degree.degrees.grade}</td>
            <td>{degree.degrees.fromDate}</td>
            <td>{degree.degrees.toDate}</td>
            <td>{degree.degrees.weight}</td>
            <td>{degree.degrees.priority}</td>
            <td>{degree.degrees.description}</td>
          </tr>)}
          
        </tbody>
      </table>
    </div>

</>
    
  )


}
export default DegreeTable;