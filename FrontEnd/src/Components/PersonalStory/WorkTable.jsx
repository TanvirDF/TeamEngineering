import { useState } from 'react';
import data from './personalStory.json'

const WorkTable = ({ work }) => {



  return (

    <>
      <div>
        <h4>Work Experience / positions held</h4>
        <table>
          <thead>
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
          <tbody>
            {work?.map((work) =>
              <tr>
                <td>{work.type}</td>
                <td>{work.employer}</td>
                <td>{work.position}</td>
                <td>{work.fromDate}</td>
                <td>{work.toDate}</td>
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