import '../../CSS/tables.css'
import moment from 'moment'
const DegreeTable = ({ degrees }) => {


  return (

    <>
      <div className='infotables'>
        <h4 >Degrees</h4>
        <table id='table'>
          <thead className='head'>
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
          <tbody className='body'>
            {degrees?.map((degree, index) =>
              <tr key={index}>
                <td>{degree.university}</td>
                <td>{degree.subject}</td>
                <td>{degree.level}</td>
                <td>{degree.grade}</td>
                <td>{moment(degree.fromDate).format('l')}</td>
                <td>{moment(degree.toDate).format('l')}</td>
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