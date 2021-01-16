const initialState = {
    cardData:[{
        title:'General',
        list:[]
    }]
};

const asyncReducer = (state = initialState,action) =>{
    if(action.type==='ADD_CARD'){
        state.cardData.push(action.payload);
    }
    if(action.type==='ADD_TASK'){
        state.cardData[action.payload.index].list.push(action.payload.task);
    }
    if(action.type==='REMOVE_CARD'){
        state.cardData.splice(action.payload,1);
    }
    if(action.type==='REMOVE_TASK'){
        state.cardData[action.payload.cardIndex].list.splice(action.payload.taskIndex,1);
    }
    if(action.type==='CHANGE_TASK_NAME'){
        state.cardData[action.payload.cardIndex].list[action.payload.taskIndex].taskName = action.payload.newName;
    }
    console.log(state);
    return state;
    
}

export default asyncReducer;

