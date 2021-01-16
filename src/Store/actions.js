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
    },
    removeTask(payload){
        return {
            type : 'REMOVE_TASK',payload
        }
    },
    changeName(payload){
        return {
            type : 'CHANGE_TASK_NAME',payload
        }
    }
}

export default actions;

