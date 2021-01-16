import ToDoCard from '../ToDoList/todolist';
import { connect } from 'react-redux';
import React, { useState } from 'react';
import actions from '../../Store/actions';
import './home.css';

function mapDispatchToProps(dispatch) {
    return {
        addCard: card => dispatch(actions.addCard(card)),
        addTask : task => dispatch(actions.addTask(task)),
        removeCard : index=> dispatch(actions.removeCard(index)),
        removeTask : rmTask => dispatch(actions.removeTask(rmTask)),
        changeName : name => dispatch(actions.changeName(name))
    };
}

function mapStateToProps(state) {
    return { 
        cardData: state.cardData 
    }
}


function Home(props){

    // eslint-disable-next-line
    const [cardTitle, settitle] = useState('');
    // eslint-disable-next-line
    const [removeIndex, setRemoveIndex] = useState('');


    function setCardTitle(){
        var value = '';
        value = document.getElementById('title-field').value;
        settitle(value);
        if(value!=='')
            addBucket(value);
            document.getElementById('title-field').value = '';
    }

    function getUID(){
        return Math.floor(1000 + Math.random() * 9000);
    }

    function removeTaskByIndex(cardIndex,taskIndex){
        let obj = {
            cardIndex : cardIndex,
            taskIndex : taskIndex
        }
        props.removeTask(obj);
    }

    function changeTaskName(cardIndex,taskIndex,value){
        let obj = {
            cardIndex : cardIndex,
            taskIndex : taskIndex,
            newName: value
        }
        props.changeName(obj);
    }

    function addTaskToCard(e,index){
        let obj = {}
        obj.task = {
            taskName : e,
            completed: false,
            id: 'C'+index+getUID()
        }
        obj.index = index;
        props.addTask(obj);
    }

    function addBucket(e){
        let obj = {
            title: e,
            list:[]
        }
        props.addCard(obj);
    }

    function changeItemState(mainInd,taskInd){

        props.cardData[mainInd].list[taskInd].completed = !props.cardData[mainInd].list[taskInd].completed;
        if(props.cardData[mainInd].list[taskInd].completed){
           let elem = 'card'+mainInd+'task'+taskInd;
           document.getElementById(elem).style.textDecoration = "line-through";
           document.getElementById(elem).style.opacity = "0.5";
        }
        else{
            let elem = 'card'+mainInd+'task'+taskInd;
            document.getElementById(elem).style.textDecoration = "none";
            document.getElementById(elem).style.opacity = "1";
        }
    }
    function removeCardByIndex(ind){
        setRemoveIndex(ind);
        props.removeCard(ind);
    }
    return(
        <div className="container-fluid">
            <div className="add-card row ml-4">
                <input id="title-field" className="mr-2" type="text" placeholder="Enter category name"></input>
                <button onClick={(e)=>setCardTitle()} className="btn btn-mobile btn-info">Add new category</button>
            </div>
            <div className="mt-4">
                <div className="cards-div">
                    {props.cardData.map((card,index)=>
                        <div className="mb-2">
                            <ToDoCard changeTask={changeTaskName} removeTask={removeTaskByIndex} removeCard={removeCardByIndex} changeItemState={changeItemState} addTaskToCard={addTaskToCard} cardIndex={index} card={card}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
        
    )
}

const HomeComponent = connect(mapStateToProps,mapDispatchToProps)(Home)
export default HomeComponent;