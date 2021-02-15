const handlers={
    [SHOW_ALERT]:(state,action)=>action.payload,
    [HIDE_ALERT]:(state,action)=>null,
    DEFAULT:state=>state
},

export const alertReducer=(state,action)=>{
    // switch(action.type){
    //     case SHOW_ALERT:return action.payload
    //     case HIDE_ALERT:return null
    //     default:return state
    // }
    const handler=handlers[action.type] || handlers.DEFAULT
    return handler(state,action)
}