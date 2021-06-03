import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import AttComp from './AttComp';
import { getAttemptsFromFirebase } from '../admin/AdminFunc';
import { useAuth } from '../contexts/AuthContext';


export default function Attempt() {
    const[attempts, setAttempts] = useState([]);
    const { currentUser } = useAuth();

    function printAttemptOnPage(){
        attempts[0].attemptedRoutes?.map(attempt=>{
            <AttComp
            key={attempt.id}
            attempt={attempt} 
            />
        })
    }

    useEffect(()=>{
        getAttemptsFromFirebase(setAttempts, currentUser)

        

    },[])

    return (
        
        <Table striped bordered>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Attempts</th>
                    <th>Grade (Pie)</th>
                    <th>Color</th>
                </tr>
            </thead>
            <tbody>
            {/**
            */}
            {attempts[0]?.attemptedRoutes.map(attempt=>(
                <AttComp
                key={attempt.id}
                attempt={attempt} 
                />
            ))}
            </tbody>
        </Table>
    )
}
