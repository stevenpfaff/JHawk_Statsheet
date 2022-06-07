import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = { game: [] }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'game')
            .then(response => response.json())
            .then(data => {
                this.setState({ game: data })
            })
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { game } = this.state
        return (
            <div style={{ marginRight: "25%", marginLeft: "25%", marginBottom: "10%" }} >
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>League Game Results</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Away Team</th>
                            <th>Away Score</th>
                            <th>Home Team</th>
                            <th>Home Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {game.map((game) => (
                            <tr>
                                <td>{game.Date}</td>
                                <td>{game.AwayTeam}</td>
                                <td>{game.AwayScore}</td>
                                <td>{game.HomeTeam}</td>
                                <td>{game.HomeScore}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>


            </div>
        )
    }
}
export default Schedule;