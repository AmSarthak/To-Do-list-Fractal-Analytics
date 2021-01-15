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
    console.log(state);
    return state;
    
}

export default asyncReducer;

