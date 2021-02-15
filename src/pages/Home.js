import React,{Fragment,useContext} from 'react'
export const Home=()=>{
    const {loading,users}=useContext(GithubContext)
    // const cards=new Array(15).fill('').map((_,i)=>i)
    return(
        <Fragment>
            <Search/>
            <div className="row">
                {loading ? <p className="text-center">загрузка</p> : 
                users.map(user=>{
                    return (
                        <div className='col-sm-4 mb-4' key={user.id}>
                <Card user={user}/>

                </div>
                    )
                })}
                {/* {} */}
            <div className='col-sm-4 mb-4'>
                <Card/>

                </div>
                <div className='col-sm-4 mb-4'>
                <Card/>

                </div>
                <div className='col-sm-4 mb-4'>
                <Card/>

                </div>
            </div>
            
        </Fragment>
    )
}