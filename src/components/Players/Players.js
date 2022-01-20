import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import players from '../../Data/players.json'

class Players extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [{

            }]
        }
    }
    render() {
        return (
            <div style={{ marginRight: "15%", marginLeft: "15%", marginBottom: "10%" }} >
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Batting Stats</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Games</th>
                            <th>ABs</th>
                            <th>Hits</th>
                            <th>AVG</th>
                            <th>Runs</th>
                            <th>RBIs</th>
                            <th>XBH</th>
                            <th>Slug%</th>
                            <th>BB's</th>
                            <th>K's</th>
                            <th>OBP</th>
                            <th>OPS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player) => (
                            <tr>
                                <td>{player.name}</td>
                                <td>{player.games}</td>
                                <td>{player.at_bats}</td>
                                <td>{player.hits}</td>
                                <td>.{player.average}</td>
                                <td>{player.runs}</td>
                                <td>{player.rbis}</td>
                                <td>{player.xbh}</td>
                                <td>.{player.slug}</td>
                                <td>{player.walks}</td>
                                <td>{player.strikeouts}</td>
                                <td>.{player.obp}</td>
                                <td>.{player.ops}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Pitching Stats</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>IP</th>
                            <th>ER's</th>
                            <th>ERA</th>
                            <th>BB's</th>
                            <th>K's</th>
                            <th>WHIP</th>
                            <th>PT's</th>
                            <th>BALL</th>
                            <th>STRK</th>
                            <th>FIP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player) => (
                            <tr>
                                <td>{player.name}</td>
                                <td>{player.ip}</td>
                                <td>{player.er}</td>
                                <td>{player.era}</td>
                                <td>.{player.bbs}</td>
                                <td>{player.ks}</td>
                                <td>{player.whip}</td>
                                <td>{player.pt}</td>
                                <td>.{player.balls}</td>
                                <td>{player.strikes}</td>
                                <td>{player.fip}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default Players;