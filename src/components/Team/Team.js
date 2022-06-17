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
                        <td>10</td>
                        <td>1</td>
                        <td>131</td>
                        <td>163</td>
                        <td>-32</td>
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
                        <td>57</td>
                        <td>.254</td>
                        <td>.494</td>
                        <td>.329</td>
                        <td>.823</td>
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
                        <td>67.2</td>
                        <td>8.09</td>
                        <td>2.44</td>
                        <td>92</td>
                        <td>108</td>
                        <td>4.38</td>
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
                        <td>110</td>
                        <td>63</td>
                        <td>64</td>
                        <td>73%</td>
                        <td>83</td>
                        <td>7</td>
                        <td>92%</td>
                    </tr>
                </tbody>
            </Table>
        </div >
    )
}
export default Team;