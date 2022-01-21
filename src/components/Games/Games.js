import React from 'react'
import { Table } from 'react-bootstrap'
import games from '../../Data/games.json'
import './Games.css'

function Games() {
    return (
        <div style={{ marginRight: "15%", marginLeft: "15%", marginBottom: "10%" }} >
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Game Results</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Away Team</th>
                        <th>Away Score</th>
                        <th>Home Team</th>
                        <th>Home Score</th>
                    </tr>
                </thead>
                <tbody>
                    {games.map((game) => (
                        <tr>
                            <td>{game.away_team}</td>
                            <td>{game.away_score}</td>
                            <td>{game.home_team}</td>
                            <td>{game.home_score}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
export default Games;