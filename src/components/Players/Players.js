import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

class Players extends Component {
    constructor(props) {
        super(props);
        this.state = { player: [] }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'player')
            .then(response => response.json())
            .then(data => {
                this.setState({ player: data })
            })
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }


    render() {
        const { player } = this.state;
        return (
            <div style={{ marginRight: "25%", marginLeft: "25%", marginBottom: "10%" }} >
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Batting Stats</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>PLAYER</th>
                            <th>GP</th>
                            <th>AB</th>
                            <th>H</th>
                            <th>AVG</th>
                            <th>BB</th>
                            <th>K</th>
                            <th>R</th>
                            <th>RBI</th>
                            <th>2B</th>
                            <th>3B</th>
                            <th>HR</th>
                            <th>SLG</th>
                            <th>OBP</th>
                            <th>OPS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {player.map((player) => (
                            <tr key={player.Id}>
                                <td>{player.Name}</td>
                                <td>{player.GP}</td>
                                <td>{player.AB}</td>
                                <td>{player.H}</td>
                                <td>{player.AVG}</td>
                                <td>{player.R}</td>
                                <td>{player.RBI}</td>
                                <td>{player.BB}</td>
                                <td>{player.K}</td>
                                <td>{player.DBL}</td>
                                <td>{player.TPL}</td>
                                <td>{player.HR}</td>
                                <td>{player.SLG}</td>
                                <td>{player.OBP}</td>
                                <td>{player.OPS}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Pitching Stats</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>PLAYER</th>
                            <th>IP</th>
                            <th>ERA</th>
                            <th>BB</th>
                            <th>K</th>
                            <th>WHIP</th>
                            <th>BALLS</th>
                            <th>STRKS</th>
                            <th>PT</th>
                            <th>FIP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {player.map((player) => (
                            <tr key={player.Id}>
                                <td>{player.Name}</td>
                                <td>{player.IP}</td>
                                <td>{player.ERA}</td>
                                <td>{player.Walks}</td>
                                <td>{player.Strikeouts}</td>
                                <td>{player.WHIP}</td>
                                <td>{player.BALL}</td>
                                <td>{player.STRK}</td>
                                <td>{player.PT}</td>
                                <td>{player.FIP}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Fielding & Baserunning Stats</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>PLAYER</th>
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
                        {player.map((player) => (
                            <tr key={player.Id}>
                                <td>{player.Name}</td>
                                <td>{player.PO}</td>
                                <td>{player.A}</td>
                                <td>{player.E}</td>
                                <td>{player.FP}%</td>
                                <td>{player.SB}</td>
                                <td>{player.CS}</td>
                                <td>{player.SBP}%</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default Players;