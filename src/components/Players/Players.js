import React from 'react'
import { Table } from 'react-bootstrap'
import players from '../../Data/players.json'

function Players() {
    return (
        <div style={{ marginRight: "15%", marginLeft: "15%", marginBottom: "10%" }} >
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Batting Stats</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>GP</th>
                        <th>AB</th>
                        <th>H</th>
                        <th>AVG</th>
                        <th>R</th>
                        <th>RBI</th>
                        <th>2B</th>
                        <th>3B</th>
                        <th>HR</th>
                        <th>SLG</th>
                        <th>BB</th>
                        <th>K</th>
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
                            <td>{player.double}</td>
                            <td>{player.triple}</td>
                            <td>{player.homerun}</td>
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
                        <th>Player</th>
                        <th>IP</th>
                        <th>ERA</th>
                        <th>BB</th>
                        <th>K</th>
                        <th>WHIP</th>
                        <th>PT</th>
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
                            <td>.{player.era}</td>
                            <td>{player.bbs}</td>
                            <td>{player.ks}</td>
                            <td>.{player.whip}</td>
                            <td>{player.pt}</td>
                            <td>{player.balls}</td>
                            <td>{player.strikes}</td>
                            <td>.{player.fip}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Fielding & Baserunning Stats</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Player</th>
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
                    {players.map((player) => (
                        <tr>
                            <td>{player.name}</td>
                            <td>{player.po}</td>
                            <td>{player.a}</td>
                            <td>{player.e}</td>
                            <td>{player.fpct}</td>
                            <td>{player.sb}</td>
                            <td>{player.cs}</td>
                            <td>{player.sbpct}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
export default Players;