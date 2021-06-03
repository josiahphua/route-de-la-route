import React, { useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import RoutesView from './RoutesView';
// import { addRoutesToFirebase } from '../admin/AdminFunc';


export default function Routes({ routesProps, setFave, fave }) {
    let storage = [];

    // console.log(routesProps);

    return (

        <Table striped bordered>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Color</th>
                    <th>Grade (Pie)</th>
                    <th>Setter</th>
                    <th>Attempts</th>
                    <th>Edit here</th>
                </tr>
                    </thead>
                    <tbody>
                {routesProps.map(route => (
                    <RoutesView 
                    key={route.id}
                    route={route} 
                    fave={fave}
                    setFave={setFave}
                    storage={storage}
                    
                    />
                ))}
                
            </tbody>
            </Table>     

    )
}

// import the array here then add routes using this little code below.
// <th><Button onClick={()=>addRoutesToFirebase(routes1)}>This is the button</Button></th>


