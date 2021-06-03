import React, { useEffect, useState } from 'react';
import Attempt from './Attempt';
import { Accordion, Card } from 'react-bootstrap';

export default function AccountView() {

    return (
        <div>
            This will be the account view.

            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    Attempted Route(s)
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <Attempt />
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
        )
    }
    
    // <Card>
    //     <Accordion.Toggle as={Card.Header} eventKey="0">
    //     Favourite(s)
    //     </Accordion.Toggle>
    //     <Accordion.Collapse eventKey="0">
    //     <Card.Body>
    //         <AccountFave fave={fave}/>
    //     </Card.Body>
    //     </Accordion.Collapse>
    // </Card>