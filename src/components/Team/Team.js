import React from 'react'
import { Table } from 'react-bootstrap'
import './Teams.css'

function Team() {
    return (
        <div style={{ marginRight: "25%", marginLeft: "25%", marginBottom: "10%" }} >
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Team Record</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>W</th>
                        <th>L</th>
                        <th>T</th>
                        <th>R</th>
                        <th>RA</th>
                        <th>RD</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>4</td>
                        <td>16</td>
                        <td>1</td>
                        <td>163</td>
                        <td>268</td>
                        <td>-105</td>
                    </tr>
                </tbody>
            </Table>
            <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Team Batting Stats</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>H</th>
                        <th>AVG</th>
                        <th>OBP</th>
                        <th>SLG</th>
                        <th>OPS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>103</td>
                        <td>.252</td>
                        <td>.476</td>
                        <td>.320</td>
                        <td>.796</td>
                    </tr>
                </tbody>
            </Table>
            <h1 style={{ marginRight: "25%", marginLeft: "25%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Team Pitching Stats</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>IP</th>
                        <th>ERA</th>
                        <th>WHIP</th>
                        <th>BB</th>
                        <th>K</th>
                        <th>FIP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>100.1</td>
                        <td>10.32</td>
                        <td>2.98</td>
                        <td>125</td>
                        <td>137</td>
                        <td>4.64</td>
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
                        <td>166</td>
                        <td>101</td>
                        <td>100</td>
                        <td>73%</td>
                        <td>110</td>
                        <td>9</td>
                        <td>92%</td>
                    </tr>
                </tbody>
            </Table>
        </div >
    )
}
export default Team;