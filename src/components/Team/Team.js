import React from 'react'
import { Table } from 'react-bootstrap'
import './Teams.css'

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
                    <td>1</td>
                    <td>0</td>
                    <td>21</td>
                    <td>7</td>
                    <td>+13</td>
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
                        <td>9</td>
                        <td>.375</td>
                        <td>.583</td>
                        <td>.634</td>
                        <td>1.217</td>
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
                        <td>5</td>
                        <td>8.40</td>
                        <td>1.60</td>
                        <td>8</td>
                        <td>8</td>
                        <td>5.10</td>
                    </tr>
                </tbody>
            </Table>
            <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Team Fielding & Baserunning</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>PO</th>
                        <th>A</th>
                        <th>E</th>
                        <th>F%</th>
                        <th>SB</th>
                        <th>CS</th>
                        <th>SB%</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>7</td>
                        <td>5</td>
                        <td>1</td>
                        <td>92%</td>
                        <td>4</td>
                        <td>1</td>
                        <td>80%</td>
                    </tr>
                </tbody>
            </Table>
        </div >
    )
}
export default Team;