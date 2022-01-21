import React from 'react'
import { Table } from 'react-bootstrap'
import tourneys from '../../Data/tournaments.json'

function Tourneys() {
    return (
        <div style={{ marginRight: "15%", marginLeft: "15%", marginBottom: "10%" }} >
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Tournaments</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Dates</th>
                    </tr>
                </thead>
                <tbody>
                    {tourneys.map((tourney) =>
                        <tr>
                            <td>{tourney.location}</td>
                            <td>{tourney.dates}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}
export default Tourneys;