

export default function Log({ gamelog, lastmove }) {
    return (
        <div className="log">
            <h2 style={{ color: "black" }}>Game Log</h2>
            <table style={{ border: "1px solid black", borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr>
                        <th style={{ border: "1px solid black", padding: "8px", color: "black" }}>Move</th>
                        <th style={{ border: "1px solid black", padding: "8px", color: "black" }}>Player</th>
                        <th style={{ border: "1px solid black", padding: "8px", color: "black" }}>Mark</th>
                        <th style={{ border: "1px solid black", padding: "8px", color: "black" }}>Board State</th>
                    </tr>
                </thead>
                <tbody>
                    {(gamelog || []).map((entry, index) => (
                        <tr key={index}>
                            <td style={{ border: "1px solid black", padding: "8px", color: "black" }}>{index + 1}</td>
                            <td style={{ border: "1px solid black", padding: "8px", color: "black" }}>{entry.playerName}</td>
                            <td style={{ border: "1px solid black", padding: "8px", color: "black" }}>{entry.turnMark}</td>
                            <td style={{ border: "1px solid black", padding: "8px", color: "black" }}>
                                <table style={{ borderCollapse: "collapse" }}>
                                    <tbody>
                                        {entry.board.map((row, rowIndex) => (
                                            <tr key={rowIndex}>
                                                {row.map((cell, cellIndex) => (
                                                    <td key={cellIndex} style={{ border: "1px solid black", padding: "4px", width: "30px", height: "30px", textAlign: "center", color: rowIndex === entry.lastmove.rowIndex && cellIndex === entry.lastmove.cellIndex ? "red" : "black" }}>{cell}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}