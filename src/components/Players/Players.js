import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { SortNumericDown } from 'react-bootstrap-icons'

class Players extends Component {
    constructor(props) {
        super(props);
        this.state = { player: [] }
        this.byGames = this.byGames.bind(this);
        this.byHits = this.byHits.bind(this);
        this.byDoubles = this.byDoubles.bind(this);
        this.byTriples = this.byTriples.bind(this);
        this.byHomers = this.byHomers.bind(this);
        this.byAvg = this.byAvg.bind(this);
        this.byRbi = this.byRbi.bind(this);
        this.byAb = this.byAb.bind(this);
        this.byRun = this.byRun.bind(this);
        this.byWalk = this.byWalk.bind(this);
        this.byStrikeout = this.byStrikeout.bind(this);
        this.byOBP = this.byOBP.bind(this);
        this.bySLG = this.bySLG.bind(this);
        this.byOPS = this.byOPS.bind(this);
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

    byGames() {
        let games = this.state.player.sort((a, b) => {
            return b.GP - a.GP;
        });

        this.setState({
            player: games
        });
    }

    byHits() {
        let hits = this.state.player.sort((a, b) => {
            return b.H - a.H;
        });

        this.setState({
            player: hits
        });
    }

    byDoubles() {
        let doubles = this.state.player.sort((a, b) => {
            return b.DBL - a.DBL;
        });

        this.setState({
            player: doubles
        });
    }

    byTriples() {
        let triples = this.state.player.sort((a, b) => {
            return b.TPL - a.TPL;
        });

        this.setState({
            player: triples
        });
    }

    byHomers() {
        let homers = this.state.player.sort((a, b) => {
            return b.HR - a.HR;
        });

        this.setState({
            player: homers
        });
    }

    byAvg() {
        let avg = this.state.player.sort((a, b) => {
            return b.AVG - a.AVG;
        });

        this.setState({
            player: avg
        });
    }

    byRbi() {
        let rbi = this.state.player.sort((a, b) => {
            return b.RBI - a.RBI;
        });

        this.setState({
            player: rbi
        });
    }

    byAb() {
        let ab = this.state.player.sort((a, b) => {
            return b.AB - a.AB;
        });

        this.setState({
            player: ab
        });
    }

    byRun() {
        let runs = this.state.player.sort((a, b) => {
            return b.R - a.R;
        });

        this.setState({
            player: runs
        });
    }

    byWalk() {
        let walk = this.state.player.sort((a, b) => {
            return b.BB - a.BB;
        });

        this.setState({
            player: walk
        });
    }

    byStrikeout() {
        let strkout = this.state.player.sort((a, b) => {
            return b.K - a.K;
        });

        this.setState({
            player: strkout
        });
    }

    byOBP() {
        let obp = this.state.player.sort((a, b) => {
            return b.OBP - a.OBP;
        });

        this.setState({
            player: obp
        });
    }

    bySLG() {
        let slg = this.state.player.sort((a, b) => {
            return b.SLG - a.SLG;
        });

        this.setState({
            player: slg
        });
    }

    byOPS() {
        let ops = this.state.player.sort((a, b) => {
            return b.OPS - a.OPS;
        });

        this.setState({
            player: ops
        });
    }




    render() {
        return (
            <div style={{ marginRight: "25%", marginLeft: "25%", marginBottom: "10%" }} >
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Total Batting Stats</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Player</th>
                            <th>GP<button type="button" class="btn btn-default" onClick={this.byGames}><SortNumericDown /></button></th>
                            <th>AB<button type="button" class="btn btn-default" onClick={this.byAb}><SortNumericDown /></button></th>
                            <th>H<button type="button" class="btn btn-default" onClick={this.byHits}><SortNumericDown /></button></th>
                            <th>AVG<button type="button" class="btn btn-default" onClick={this.byAvg}><SortNumericDown /></button></th>
                            <th>R<button type="button" class="btn btn-default" onClick={this.byRun}><SortNumericDown /></button></th>
                            <th>RBI<button type="button" class="btn btn-default" onClick={this.byRbi}><SortNumericDown /></button></th>
                            <th>BB<button type="button" class="btn btn-default" onClick={this.byWalk}><SortNumericDown /></button></th>
                            <th>K<button type="button" class="btn btn-default" onClick={this.byStrikeout}><SortNumericDown /></button></th>
                            <th>2B<button type="button" class="btn btn-default" onClick={this.byDoubles}><SortNumericDown /></button></th>
                            <th>3B<button type="button" class="btn btn-default" onClick={this.byTriples}><SortNumericDown /></button></th>
                            <th>HR<button type="button" class="btn btn-default" onClick={this.byHomers}><SortNumericDown /></button></th>
                            <th>OBP<button type="button" class="btn btn-default" onClick={this.byOBP}><SortNumericDown /></button></th>
                            <th>SLG<button type="button" class="btn btn-default" onClick={this.bySLG}><SortNumericDown /></button></th>
                            <th>OPS<button type="button" class="btn btn-default" onClick={this.byOPS}><SortNumericDown /></button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.player.map((player) => (
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
                                <td>{player.OBP}</td>
                                <td>{player.SLG}</td>
                                <td>{player.OPS}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Total Pitching Stats</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Player</th>
                            <th>IP</th>
                            <th>ERA</th>
                            <th>BB</th>
                            <th>K</th>
                            <th>WHIP</th>
                            <th>B</th>
                            <th>S</th>
                            <th>PT</th>
                            <th>FIP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.player.map((player) => (
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
                            <th>Player</th>
                            <th>PO</th>
                            <th>A</th>
                            <th>E</th>
                            <th>CS</th>
                            <th>F%</th>
                            <th>SB</th>
                            <th>CS</th>
                            <th>SB%</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.player.map((player) => (
                            <tr key={player.Id}>
                                <td>{player.Name}</td>
                                <td>{player.PO}</td>
                                <td>{player.A}</td>
                                <td>{player.E}</td>
                                <td>{player.CCS}</td>
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