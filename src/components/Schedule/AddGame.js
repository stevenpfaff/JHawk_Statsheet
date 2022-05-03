import React, { Component } from 'react'
import { Form } from "react-bootstrap"

class AddGame extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        fetch(process.env.REACT_APP_API + 'game')
            .then(response => response.json())
            .then(data => {
                this.setState({ game: data });
            });
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'game', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Id: null,
                HomeTeam: event.target.HomeTeam.value,
                HomeScore: event.target.HomeScore.value,
                AwayTeam: event.target.AwayTeam.value,
                AwayScore: event.target.AwayScore.value,
                Field: event.target.Field.value,
                Date: event.target.Date.value,
                Time: event.target.Time.value

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
                <h1>Add A Game</h1>
                <Form.Group controlId="HomeTeam">
                    <Form.Control type="text" placeholder="Home Team" />
                </Form.Group>
                <Form.Group controlId="HomeScore">
                    <Form.Control type="number" placeholder="Home Score" />
                </Form.Group>
                <Form.Group controlId="AwayTeam">
                    <Form.Control type="text" placeholder="Away Team" />
                </Form.Group>
                <Form.Group controlId="AwayScore">
                    <Form.Control type="number" placeholder="Away Score" />
                </Form.Group>
                <Form.Group controlId="Field">
                    <Form.Control type="text" placeholder="Location" />
                </Form.Group>
                <Form.Group controlId="Date">
                    <Form.Control type="date" placeholder="YYYY-MM-DD" />
                </Form.Group>
                <Form.Group controlId="Time">
                    <Form.Control type="time" placeholder="Time" />
                </Form.Group>
                <button type="submit">Add Game</button>
            </form>
        )
    }
}
export default AddGame;