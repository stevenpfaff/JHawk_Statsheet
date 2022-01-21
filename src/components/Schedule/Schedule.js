import React from 'react'
import { Table } from 'react-bootstrap'
import schedule from '../../Data/schedule.json'

function Schedule() {
    return (
        <div style={{ marginRight: "15%", marginLeft: "15%", marginBottom: "10%" }} >
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Team Schedule</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Location</th>
                        <th>Away Team</th>
                        <th>Home Team</th>
                    </tr>
                </thead>
                <tbody>
                    {schedule.map((schedule) => (
                        <tr>
                            <td>{schedule.date}</td>
                            <td>{schedule.time}</td>
                            <td>{schedule.location}</td>
                            <td>{schedule.away_team}</td>
                            <td>{schedule.home_team}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
export default Schedule;