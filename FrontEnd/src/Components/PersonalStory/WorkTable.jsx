import { useState } from 'react';
import data from './personalStory.json'
import moment from 'moment'
const WorkTable = ({ work }) => {



  return (

    <>
      <div className='infotables'>
        <h4  >Work Experience / positions held</h4>
        <table id='table'>
          <thead className='head'>
            <tr>
              <th>Type</th>
              <th>Employer</th>
              <th>Position</th>
              <th>From</th>
              <th>To</th>
              <th>Weight</th>
              <th>Priority</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody className='body'>
            {work?.map((work, index) =>
              <tr key={index}>
                <td>{work.type}</td>
                <td>{work.employer}</td>
                <td>{work.position}</td>
                <td>{moment(work.fromDate).format('l')}</td>
                <td>{moment(work.toDate).format('l')}</td>
                <td>{work.weight}</td>
                <td>{work.priority}</td>
                <td>{work.description}</td>
              </tr>)}

          </tbody>
        </table>
      </div>

    </>

  )


}
export default WorkTable;