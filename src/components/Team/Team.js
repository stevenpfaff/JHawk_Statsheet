import React from 'react'
import { Table } from 'react-bootstrap'

function Team() {
    return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <h1>Team Batting Stats</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Runs</th>
                        <th>RA's</th>
                        <th>Hits</th>
                        <th>AVG</th>
                        <th>Slug%</th>
                        <th>OBP</th>
                        <th>OPS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>0</th>
                        <th>0</th>
                        <th>0</th>
                        <th>0</th>
                        <th>0</th>
                        <th>.000</th>
                        <th>.000</th>
                        <th>.000</th>
                        <th>.000</th>
                    </tr>
                </tbody>
            </Table>
            <h1>Team Pitching Stats</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>IP</th>
                        <th>ERA</th>
                        <th>WHIP</th>
                        <th>BB's</th>
                        <th>K's</th>
                        <th>PT's</th>
                        <th>BALL</th>
                        <th>STRK</th>
                        <th>FIP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>0</th>
                        <th>0.00</th>
                        <th>0.00</th>
                        <th>0</th>
                        <th>0</th>
                        <th>0</th>
                        <th>0</th>
                        <th>0</th>
                        <th>0.00</th>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default Team;