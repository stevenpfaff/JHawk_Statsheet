import React from 'react'
import { Table } from 'react-bootstrap'
import games from '../../Data/games.json'

function Games() {
    return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <h1>Game Results</h1>
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