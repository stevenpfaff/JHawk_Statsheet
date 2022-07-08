import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import './Teams.css'

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = { team: [] }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'teamtotals')
            .then(response => response.json())
            .then(data => {
                this.setState({ team: data })
            })
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }
    render() {
        const { team } = this.state;
        return (
            <div style={{ marginRight: "25%", marginLeft: "25%", marginBottom: "10%" }} >
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Team Record</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Game Type</th>
                            <th>W</th>
                            <th>L</th>
                            <th>T</th>
                            <th>R</th>
                            <th>RA</th>
                            <th>RD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {team.map((team) => (
                            <tr>
                                <td>{team.Game}</td>
                                <td>{team.Wins}</td>
                                <td>{team.Losses}</td>
                                <td>{team.Ties}</td>
                                <td>{team.R}</td>
                                <td>{team.RA}</td>
                                <td>{team.RD}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Team Batting Stats</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Game Type</th>
                            <th>H</th>
                            <th>AVG</th>
                            <th>OBP</th>
                            <th>SLG</th>
                            <th>OPS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {team.map((team) => (
                            <tr>
                                <td>{team.Game}</td>
                                <td>{team.H}</td>
                                <td>{team.BA}</td>
                                <td>{team.OBP}</td>
                                <td>{team.SLG}</td>
                                <td>{team.OPS}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <h1 style={{ marginRight: "25%", marginLeft: "25%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Team Pitching & Fielding</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Game Type</th>
                            <th>IP</th>
                            <th>ERA</th>
                            <th>WHIP</th>
                            <th>BB</th>
                            <th>K</th>
                            <th>FIP</th>
                            <th>F%</th>
                        </tr>
                    </thead>
                    <tbody>
                        {team.map((team) => (
                            <tr>
                                <td>{team.Game}</td>
                                <td>{team.INN}</td>
                                <td>{team.ERA}</td>
                                <td>{team.WHIP}</td>
                                <td>{team.BB}</td>
                                <td>{team.K}</td>
                                <td>{team.FIP}</td>
                                <td>{team.FP}%</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div >
        )
    }
}
export default Team;