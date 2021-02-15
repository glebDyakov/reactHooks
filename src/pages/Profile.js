import React,{useContext,useEffect,Fragment} from 'react'
import GithubContext from '../context/github/githubCOntext'
import React from 'react'
export const Profile=({match})=>{
    const {getRepos,getRepos,loading,user,repos}=useContext(GithubContext)
    const urlName=match.params.name
    useEffect(()=>{
        getUser(urlName)
    getRepos(urlName)
    },[])
    if(loading){
        return <p className="text-center">загрузка</p>
    }

    const {
        name,company,avatar_url,location,bio,login,html_url,followers,public_repos,public_gists,following
    }=user
    return(
        <Fragment>
            <Link to="/" className="btn btn-link">на главную</Link>
            <div className="card mb-4">
                <div className="card-body">
                <div className="row">
                <div className="col-sm-3">
                    <img alt={name} src={avatar_url} style={{width:'150px'}}/>
                    <h1>{name}</h1>
                    {location && <p>местоположение:{location}</p>}

                </div>
                <div className="col">
                    {bio && <Fragment>
                        <h3>BIO</h3>
                        <p>{bio}</p>
                        </Fragment>}
                        <a rel="nooper noreferrer" href={html_url} target="_black" className="btn btn-dark">открыть профиль</a>
                        <ul>
                    {login && <li><strong>username:</strong>{login}</li>}
                    {company && <li><strong>компания:</strong>{company}</li>}
                    {blog && <li><strong>website:</strong>{login}</li>}
                        </ul>
                        <div className="badge badge-primary">подписчики:{followers}</div>
                        <div className="badge badge-success">подписан:{following}</div>
                        <div className="badge badge-info">репозитории:{public_repos}</div>
                        <div className="badge badge-dark">gists:{public_gists}</div>
                </div>
                </div>
                </div>
            </div>
            <h1>
            Profile page
            </h1>
            <Repos repos={repos}></Repos>
            </Fragment>
    )
}