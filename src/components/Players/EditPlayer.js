import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

export class EditPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = { players: [] };
        this.handleSubmit = this.handleSubmit.bind(this);;
    }


    componentDidMount() {
        fetch(process.env.REACT_APP_API + 'player')
            .then(response => response.json())
            .then(data => {
                this.setState({ players: data });
            });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'player', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Id: event.target.Id.value,
                Name: event.target.Name.value,
                GP: event.target.GP.value,
                AB: event.target.AB.value,
                H: event.target.H.value,
                R: event.target.R.value,
                RBI: event.target.RBI.value,
                DBL: event.target.DBL.value,
                TPL: event.target.TPL.value,
                HR: event.target.HR.value,
                SLG: event.target.SLG.value,
                BB: event.target.BB.value,
                K: event.target.K.value,
                IP: event.target.IP.value,
                Walks: event.target.Walks.value,
                Strikeouts: event.target.Strikeouts.value,
                BALL: event.target.BALL.value,
                STRK: event.target.STRK.value,
                PT: event.target.PT.value,
                PO: event.target.PO.value,
                A: event.target.A.value,
                E: event.target.E.value,
                FP: event.target.FP.value,
                SB: event.target.SB.value,
                CS: event.target.CS.value,
                SBP: event.target.SPB.value,
                AVG: event.target.AVG.value,
                WHIP: event.target.WHIP.value,
                ERA: event.target.ERA.value,
                OBP: event.target.OBP.value,
                OPS: event.target.OPS.value,
                FIP: event.target.FIP.value,

            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
            },
                (error) => {
                    alert('Failed');
                })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2> Register A Player </h2>
                <Form.Group className="mb-3" controlId="Name">
                    <Form.Control type="text" placeholder="Player Name" onChange={this.handleNameChange} value={this.state.name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupDescription">
                    <Form.Control type="number" placeholder="Hockey Games Played" onChange={this.handleGameChange} value={this.state.games_played} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupDescription">
                    <Form.Control type="number" placeholder="Goals" onChange={this.handleGoalsChange} value={this.state.goals} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupDescription">
                    <Form.Control type="number" placeholder="Assists" onChange={this.handleAssistsChange} value={this.state.assists} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupDescription">
                    <Form.Control type="number" placeholder="Points" onChange={this.handlePointsChange} value={this.state.points} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="number" placeholder="Minibat Games Played" onChange={this.handleMiniBatChange} value={this.state.minibat_games_played} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="number" placeholder="At Bats" onChange={this.handleAtBatChange} value={this.state.at_bats} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="number" placeholder="Hits" onChange={this.handleHitsChange} value={this.state.hits} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="number" placeholder="Batting Average" onChange={this.handleAverageChange} value={this.state.batting_average} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="number" placeholder="Homeruns" onChange={this.handleHomerunChange} value={this.state.homeruns} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="number" placeholder="Championships" onChange={this.handleChampChange} value={this.state.championships} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="text" placeholder="About Me" onChange={this.handleInfoChange} value={this.state.info} />
                </Form.Group>
                <Button type="submit" variant="contained" class="btn btn-success">Update Player Stats</Button>
            </form>
        );
    }
}
export default EditPlayer;