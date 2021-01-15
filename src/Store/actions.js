const actions = {
    addCard(payload) {
        return {
            type: 'ADD_CARD',payload
        }
    },
    addTask(payload) {
        return {
            type: 'ADD_TASK',payload
        }
    },
    removeCard(payload){
        return {
            type : 'REMOVE_CARD',payload
        }
    }
}

export default actions;

