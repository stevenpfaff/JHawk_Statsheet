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
                        <th>R</th>
                        <th>RA</th>
                        <th>RD</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>4</td>
                        <td>7</td>
                        <td>101</td>
                        <td>114</td>
                        <td>-13</td>
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
                        <td>52</td>
                        <td>.257</td>
                        <td>.508</td>
                        <td>.347</td>
                        <td>.855</td>
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
                        <td>48.2</td>
                        <td>7.62</td>
                        <td>2.40</td>
                        <td>71</td>
                        <td>77</td>
                        <td>4.79</td>
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
                        <td>67</td>
                        <td>36</td>
                        <td>45</td>
                        <td>70%</td>
                        <td>59</td>
                        <td>5</td>
                        <td>92%</td>
                    </tr>
                </tbody>
            </Table>
        </div >
    )
}
export default Team;