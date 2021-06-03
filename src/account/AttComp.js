import React from 'react'

export default function AttComp({attempt}) {
    return (
        <tr>
            <td>
                {attempt.Name}
            </td>
            <td>
                {attempt.Grade}
            </td>
            <td>
                {attempt.Attempts}
            </td>
            <td>
                {attempt.Color}
            </td>
            
        </tr>
    )
}
