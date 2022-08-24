import { useState } from 'react';


const PortfolioTable = () => {

  const [portfolios, setPortfolios] = useState();

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
          {portfolios.map((portfolio) =>
          <tr>
            <td>{portfolio.portfolio.title}</td>
            <td>{portfolio.portfolio.url}</td>
            <td>{portfolio.portfolio.year}</td>
            <td>{portfolio.portfolio.weight}</td>
            <td>{portfolio.portfolio.priority}</td>
            <td>{portfolio.portfolio.description}</td>
          </tr>)}
          
        </tbody>
      </table>
    </div>

</>
    
  )


}
export default PortfolioTable;