import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

class Tourney extends Component {
    constructor(props) {
        super(props);
        this.state = { tourney: [] }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'tourney')
            .then(response => response.json())
            .then(data => {
                this.setState({ tourney: data })
            })
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }
    render() {
        const { tourney } = this.state
        return (
            <div style={{ marginRight: "15%", marginLeft: "15%", marginBottom: "10%" }} >
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Tournament Results</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Tourney</th>
                            <th>Away Team</th>
                            <th>Away Score</th>
                            <th>Home Team</th>
                            <th>Home Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tourney.map((tourney) => (
                            <tr>
                                <td>{tourney.Name}</td>
                                <td>{tourney.AwayTeam}</td>
                                <td>{tourney.AwayScore}</td>
                                <td>{tourney.HomeTeam}</td>
                                <td>{tourney.HomeScore}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>


            </div>
        )
    }
}
export default Tourney;