import { useState } from 'react';
import data from './personalStory.json'

const PortfolioTable = ({ portfolio }) => {


  return (

    <>
      <div>
        <h4>Portfolio</h4>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>URL</th>
              <th>Year</th>
              <th>Weight</th>
              <th>Priority</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {portfolio?.map((portfolio) =>
              <tr>
                <td>{portfolio.title}</td>
                <td>{portfolio.url}</td>
                <td>{portfolio.year}</td>
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