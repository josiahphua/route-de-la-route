import React from 'react';
import { NavLink } from 'react-router-dom';
import { Accordion, Card } from 'react-bootstrap';

export default function Home() {
    return (
        <div>
            This is the Home page.
            <br/>
            This page will show the multiple gyms that are available in the app.
            <br/>
            For now, this page will render only below info.
            <hr / >

            <div>
                Please Choose Gym to view routes.
            </div>
            <div>
                
            </div>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    Climb Central
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <NavLink to="/routes">Climb Central Funan</NavLink>
                        <br />
                        <NavLink to="/#">Climb Central Sports Hub</NavLink>
                        <br />
                        <NavLink to="/#">Climb Central Novena</NavLink>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    Another gym
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Location of gym (contains rotes)</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            
        </div>
    )
}
