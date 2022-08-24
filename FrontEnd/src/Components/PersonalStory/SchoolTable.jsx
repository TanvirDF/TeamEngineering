import { useState } from 'react';
import data from './personalStory.json'

const SchoolTable = ({ schooling }) => {

  const schools = schooling

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
            {schools?.map((school) =>
              <tr>
                <td>{school.school}</td>
                <td>{school.examType}</td>
                <td>{school.subject}</td>
                <td>{school.grade}</td>
                <td>{school.year}</td>
                <td>{school.weight}</td>
                <td>{school.priority}</td>
                <td>{school.description}</td>
              </tr>)}

          </tbody>
        </table>
      </div>

    </>

  )


}
export default SchoolTable;