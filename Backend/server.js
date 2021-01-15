const express = require('express');
const bodyParser = require('body-parser');
const port = 8800;
const app = express();
import db from './DbController/db';

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (request, response) => response.status(200).send('App Running'));

function getUID(){
    return Math.floor(1000 + Math.random() * 9000);
}

function getSecurityToken(){
    return 'demotoken';
}

app.post('/addtodo', (request, response) => {
    var taskObject = {
        taskName : request.body.taskName,
        uid : getUID(),
        isCompleted : false,
        tag:request.body.tag
    }

    //error first callback

  db.addTask(getSecurityToken(),taskObject,(err)=>{
        response.status(200).json({status: 'Failed',error: err});
  },(data)=>{   
        response.status(200).json({status: 'Success',data: data});
  }); 
});

app.get('/getalltodos',(request,response)=>{
    db.getFullData(getSecurityToken(),(err)=>{
        response.status(200).json({status: 'Failed',error: err});
  },(data)=>{   
        response.status(200).json({status: 'Success',data: data});
  }); 
})

app.listen(port,()=>{
    console.log('Server running')
});