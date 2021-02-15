import React from 'react'
export const Repos=({repos})=>{
    <React.Fragment>
        {repos.map((repo)=>{
            <div key={repo.id} className="card mb-3">
                <div classNama={card-body}>
                    <h5>
                        <a rel="nooper noreferrer" href={repo.html_url} target="_blank">{repo.name}</a>
                    </h5>
                </div>
            </div>
        })}
    </React.Fragment>
}