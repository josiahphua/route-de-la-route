import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Profile() {
    return (
        <div>
            <div>
                <NavLink className="nav-link" to="/logout">
                    Update Profile or log out here
                </NavLink>
            </div>


            This will be profile view. 
            Now how do I affect the routes after they have selected them from home?
        </div>
    )
}
