import './addTodo.css'

function AddToDo(props) {
    function setValue(){
        var value = '';
        value = document.getElementById('text-field'+props.cardIndex).value;
        props.addTask(value,props.cardIndex);
        document.getElementById('text-field'+props.cardIndex).value = '';
        
    }
    function checkKey(event){
        if(event.keyCode === 13){
            setValue();
        }
    }
    return(
       <div>
            <div className="row">
                <div className="col-9">
                    <input onKeyDown={(e)=>checkKey(e)} id={'text-field'+props.cardIndex} type="text" placeholder="Enter task" className="mb-2 input-box"></input>
                </div>
                <div className="col-3">
                    <button type="button" className="btn mr-2 btn-outline-info" onClick={(e)=>setValue()}>+</button>
                </div>
            </div>
       </div>
    )
}

export default AddToDo;