import { useState } from "react";
import { Form } from "react-bootstrap"
import { Button, Grid } from '@material-ui/core';

const AddTourneyGame = () => {
    const [HomeTeam, setHomeTeam] = useState('')
    const [HomeScore, setHomeScore] = useState()
    const [AwayTeam, setAwayTeam] = useState('')
    const [AwayScore, setAwayScore] = useState()
    const [Name, setName] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()
        const game = { HomeTeam, HomeScore, AwayTeam, AwayScore, Name }
        fetch(process.env.REACT_APP_API + 'game', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(game)
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Enter Game Results</h2>
            <Form.Group className="mb-3" controlId="HomeTeam">
                <Form.Control type="text" placeholder="Home Team" onChange={(event) => setHomeTeam(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="HomeScore">
                <Form.Control type="number" placeholder="Home Score" onChange={(event) => setHomeScore(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="AwayTeam">
                <Form.Control type="Text" placeholder="Away Team" onChange={(event) => setAwayTeam(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="AwayScore">
                <Form.Control type="number" placeholder="Away Score" onChange={(event) => setAwayScore(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Name">
                <Form.Control type="text" placeholder="Name" onChange={(event) => setName(event.target.value)} />
            </Form.Group>
            <Button type="submit" variant="contained" class="btn btn-primary">Add Game</Button>
            <Grid style={{ marginLeft: "850px" }}></Grid>
        </form>
    );
}
export default AddTourneyGame;