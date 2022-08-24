import { useState } from 'react';


const SchoolTable = () => {

  const [schools, setSchools] = useState();

  return (
    
    <>
      <div>
        <h4>School Qualifications</h4>
      <table>
        <thead>
          <tr>
            <th>School</th>
            <th>Exam Type</th>
            <th>Subject</th>
            <th>Grade</th>
            <th>Year</th>
            <th>Weight</th>
            <th>Priority</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {schools.map((school) =>
          <tr>
            <td>{school.schooling.school}</td>
            <td>{school.schooling.examType}</td>
            <td>{school.schooling.subject}</td>
            <td>{school.schooling.grade}</td>
            <td>{school.schooling.year}</td>
            <td>{school.schooling.weight}</td>
            <td>{school.schooling.description}</td>
            </tr>)}
          
        </tbody>
      </table>
    </div>

</>
    
  )


}
export default SchoolTable;