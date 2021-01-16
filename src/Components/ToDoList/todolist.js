import './todolist.css'

import AddToDo from '../AddToDo/addTodo';

import React, { useState } from 'react';

function ToDoCard(props){

    // eslint-disable-next-line
    const [taskTitle, setTaskTitle] = useState('');
     // eslint-disable-next-line
     const [removeTaskId, setRemoveTaskId] = useState('');
      // eslint-disable-next-line
      const [changeTask, setTaskChange] = useState('');

    function addTaskToCard(val,ind){
        setTaskTitle(val);
        props.addTaskToCard(val,ind)
    }

    function removeTask(i,e){
        setRemoveTaskId(e);
        props.removeTask(i,e)
    }

    function changeTaskName(i,e){
        let elem = 'card'+i+'task'+e;
        let val = document.getElementById(elem).textContent;
        setTaskChange(val);
        document.getElementById(elem).contentEditable = false;
        props.changeTask(i,e,val);
    }

    function editTask(i,e){
        let elem = 'card'+i+'task'+e;
        document.getElementById(elem).contentEditable = true;
        document.getElementById(elem).click();
    }

    return(
        <div className="main-card">
            <div className="row">
                <div className="col-12">
                    <span onClick={()=>props.removeCard(props.cardIndex)} title="Remove Card" className="remove-card float-right mr-2"><strong>X</strong></span>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12">
                    <span className="heading"><strong>{props.card.title}</strong></span>
                    <hr/>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-12">
                    <AddToDo cardIndex={props.cardIndex} addTask={addTaskToCard} title={props.card.title}/>
                </div>
            </div>
            {props.card.list.map((item,index)=>
                <div key={'card'+props.cardIndex+'task'+index}  className="mb-4 row task-item">
                    <div className="col-2">
                        <input id={item.id} onClick={(e)=>props.changeItemState(props.cardIndex,index)} type="checkbox" className="mr-3"  value={item.taskName}></input>
                    </div>
                    <div className="col-6">  
                        <div className="row">
                            <span onBlur={(e)=>changeTaskName(props.cardIndex,index)} id={'card'+props.cardIndex+'task'+index} key={index}>{item.taskName}</span>
                        </div>
                    </div>
                    <div className="col-2">
                        <span onClick={(e)=>editTask(props.cardIndex,index)} title="Click to edit" className="edit-btn float-right mr-2"><i className="fa fa-edit"></i></span>
                    </div>
                    <div className="col-2">
                        <span onClick={(e)=>removeTask(props.cardIndex,index)} title="Remove Task" className="remove-task float-right mr-2"><i className="fa fa-close"></i></span>
                    </div>
                </div>
            )}
        </div>
    )
}


export default ToDoCard;