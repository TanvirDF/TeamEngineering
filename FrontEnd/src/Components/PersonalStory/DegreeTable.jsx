import { useState } from 'react';
import data from './personalStory.json'

const DegreeTable = ({ degrees }) => {


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
            {degrees?.map((degree) =>
              <tr>
                <td>{degree.university}</td>
                <td>{degree.subject}</td>
                <td>{degree.level}</td>
                <td>{degree.grade}</td>
                <td>{degree.fromDate}</td>
                <td>{degree.toDate}</td>
                <td>{degree.weight}</td>
                <td>{degree.priority}</td>
                <td>{degree.description}</td>
              </tr>)}

          </tbody>
        </table>
      </div>

    </>

  )


}
export default DegreeTable;