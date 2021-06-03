import React, { useState, useEffect } from 'react';
import { Heart, HeartFill, Save } from 'react-bootstrap-icons';
import { addRouteToFirebase } from '../admin/AdminFunc';
import { useAuth } from '../contexts/AuthContext';
import {Button} from 'react-bootstrap';

export default function RoutesView({key, route, setFave, fave, storage }) {
    const [attempts, setAttempts] = useState("");
    const [click, setClick] = useState(false);
    const [tempRoute, setTempRoute] = useState({});
    const { currentUser } = useAuth();

    function storeNumberOfAttempts(e){
        setAttempts("");
        let temp = {...route};

        if(e.target.value < 100){
            setAttempts(e.target.value)
        } else {
            alert ("Don't lie")
        }
        setTempRoute(prevState => {
           return {...prevState,...temp, Attempts: e.target.value}
        });
    }

    function handleFaveToggle(route){
        let tempFaves = [...fave]
        let index = tempFaves.indexOf(route)
        setClick(!click)

        if (index > -1){
            tempFaves.splice(index, 1)
        } else {
            tempFaves.push(route)
        }
        setFave(tempFaves)
    }

    return (
        <tr>
            <td>
                {route.Name} 
                <i className="btn" onClick={()=>handleFaveToggle(route)}>{click ? <HeartFill /> : <Heart />}</i>
            </td>
            <td>
                {route.Color}
            </td>
            <td>
                {route.Grade}
            </td>
            <td>
                {route.Setter}
            </td>
            <td>
                {attempts} Attempts | Change this code to be reactive to firebase edit
            </td>
            <td>
                <input 
                type="number" 
                min="0"
                max="101"
                placeholder="edit" 
                onChange={storeNumberOfAttempts}
                />
                <Button className="m-2" onClick={()=>addRouteToFirebase(currentUser, tempRoute, alert)}><Save /></Button>
            </td>
            
        </tr>
    )
}

// <td>Can add input field for number of attempts
//  connect it to the account so that only if the user is logged in
//  it will show.</td>

// For bookmarking
//<i className="btn" onClick={()=>changeHeart()}>{click ? <BookmarkFill /> : <Bookmark />}</i>
