import React from 'react'
import { Table } from 'react-bootstrap'

function Team() {
    return (
        <div style={{ marginRight: "15%", marginLeft: "15%", marginBottom: "10%" }} >
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Team Record</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Runs Scored</th>
                        <th>Runs Allowed</th>
                        <th>Run Diff</th>
                    </tr>
                </thead>
                <tbody>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tbody>
            </Table>
            <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Team Batting Stats</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Hits</th>
                        <th>AVG</th>
                        <th>Slug%</th>
                        <th>OBP</th>
                        <th>OPS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0</td>
                        <td>.000</td>
                        <td>.000</td>
                        <td>.000</td>
                        <td>.000</td>
                    </tr>
                </tbody>
            </Table>
            <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Team Pitching Stats</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>IP</th>
                        <th>ERA</th>
                        <th>WHIP</th>
                        <th>BB's</th>
                        <th>K's</th>
                        <th>FIP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0.00</td>
                    </tr>
                </tbody>
            </Table>
        </div >
    )
}
export default Team;