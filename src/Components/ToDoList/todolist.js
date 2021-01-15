import './todolist.css'

import AddToDo from '../AddToDo/addTodo';

import React, { useState } from 'react';

function ToDoCard(props){

    // eslint-disable-next-line
    const [taskTitle, setTaskTitle] = useState('');

    function addTaskToCard(val,ind){
        setTaskTitle(val);
        props.addTaskToCard(val,ind)
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
                    <div className="col-4">
                        <input onClick={(e)=>props.changeItemState(props.cardIndex,index)} type="checkbox" className="mr-3"  value={item.taskName}></input>
                    </div>
                    <div className="col-8">  
                        <div className="row">
                            <span id={'card'+props.cardIndex+'task'+index} key={index}>{item.taskName}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}


export default ToDoCard;