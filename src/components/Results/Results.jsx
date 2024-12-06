import { calculateInvestmentResults, formatter } from '../../util/investment'

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input)
  console.log(resultsData)

  return <table id='result'>
    <thead>
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
      {resultsData.map((yearData) => {
        return <tr key={yearData.year}>
          <td>{yearData.year}</td>
          <td>{formatter.format(yearData.valueEndOfYear)}</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
    })}
    </tbody>
  </table>
}