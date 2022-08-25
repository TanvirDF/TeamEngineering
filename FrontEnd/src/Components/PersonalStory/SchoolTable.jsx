import { useState } from 'react';
import data from './personalStory.json'
import moment from 'moment'
const SchoolTable = ({ schooling }) => {

  const schools = schooling

  return (

    <>
      <div className='infotables'>
        <h4 >School Qualifications</h4>
        <table id='table'>
          <thead className='head'>
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
          <tbody className='body'>
            {schools?.map((school, index) =>
              <tr key={index}>
                <td>{school.school}</td>
                <td>{school.examType}</td>
                <td>{school.subject}</td>
                <td>{school.grade}</td>
                <td>{moment(school.year).format('l')}</td>
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