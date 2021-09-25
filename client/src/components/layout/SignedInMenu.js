import React from 'react'

const SignedInMenu = ({logout}) => {
    return (
        <div>
            <li onClick={logout}><a href="#">Logout</a></li>
        </div>
    )
}

export default SignedInMenu
