import from 'react-router-dom'
import React from 'react'
export const Card=({user})=>(
    <div className="card">
        <img alt={user.login} src={user.avatar_url} className={'card-img-top'}/>
        <div className="card-body">
            <h5 className="card-title">{user.login}</h5>
            <Link to={'/profile/' + user.login} className="btn btn-primary">Открыть</Link>
        </div>
    </div>
)