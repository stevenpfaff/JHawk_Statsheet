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
                        {player.map((player) => (
                            <tr key={player.Id}>
                                <td>{player.Name}</td>
                                <td>{player.GP}</td>
                                <td>{player.AB}</td>
                                <td>{player.H}</td>
                                <td>.{player.AVG}</td>
                                <td>{player.R}</td>
                                <td>{player.R}</td>
                                <td>{player.DBL}</td>
                                <td>{player.TPL}</td>
                                <td>{player.HR}</td>
                                <td>.{player.SLG}</td>
                                <td>{player.BB}</td>
                                <td>{player.K}</td>
                                <td>.{player.OBP}</td>
                                <td>.{player.OPS}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default Players;