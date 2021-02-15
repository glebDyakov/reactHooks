import React,{useContext,useState} from 'react'
export const Search=()=>{
    const [value, setValue]=useState('')
    const alert=useContext(AlertContext)
    const github=useContext(GithubContext)
    onSubmit=(event)=>{
        if(event.key !== 'Enter'){
            // show("This is alert")
            return 
        }
        github.clearUsers()
        if(value.trim()){
            alert.hide()
            // show("This is alert")
            github.search(value.trim())
            
        }else{
            alert.show('введите данные пользователя')
        }

    }
    return (
        <div className="form-group">
            <input className="form-control" value={value} onChange={event=>setValue(event.target.value)} placeholder="Введите ник пользователя" onKeyPress={onSubmit}></input>
        </div>
    )
}