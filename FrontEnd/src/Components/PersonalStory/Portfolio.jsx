import { useState } from 'react';
import data from './personalStory.json'
import moment from 'moment'
const PortfolioTable = ({ portfolio }) => {


  return (

    <>
      <div className='infotables'>
        <h4 >Portfolio</h4>
        <table id='table'>
          <thead className='head'>
            <tr>
              <th>Title</th>
              <th>URL</th>
              <th>Year</th>
              <th>Weight</th>
              <th>Priority</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody className='body'>
            {portfolio?.map((portfolio, index) =>
              <tr key={index}>
                <td>{portfolio.title}</td>
                <td>{portfolio.url}</td>
                <td>{moment(portfolio.year).format('l')}</td>
                <td>{portfolio.weight}</td>
                <td>{portfolio.priority}</td>
                <td>{portfolio.description}</td>
              </tr>)}

          </tbody>
        </table>
      </div>

    </>

  )
}
export default PortfolioTable;