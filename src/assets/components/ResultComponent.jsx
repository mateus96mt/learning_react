export default function ResultComponent({ investmentData }) {
    return (
        <table id="result">
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
                    {(investmentData || []).map(data => (
                        <tr key={data.year}>
                            <td>{data.year}</td>
                            <td>{data.valueEndOfYear}</td>
                            <td>{data.interest}</td>
                            <td>{data.totalInterest}</td>
                            <td>{data.investedCapital}</td>
                        </tr>
                    ))}
                </tbody>
        </table>
    )
}