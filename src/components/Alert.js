import React,{useContext} from 'react'
export const Alert=()=>{
  const {alert,hide}=useContext(Alert)
  if(!alert) return null  
  return (
        <div class={`alert alert-${alert.type || 'secondary'} alert-dismissible`} role="alert">
  {alert.text}
  <button type="button" class="close" aria-label="Close" onCLick={hide}>
    <span aria-hidden="true">&times;</span>
  </button>
</div>

    )
}