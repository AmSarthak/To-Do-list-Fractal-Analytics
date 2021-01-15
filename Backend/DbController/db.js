var mysql = require('mysql')
var con = mysql.createConnection({
    host: "",
    port: "",
    user: "",
    password: "",
    database:''
  });

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

function disconnectDatabase() {
	con.end(function(err){
	if(err) throw err;
	console.log('Disconnected');
	});
}

function verifyToken(token){
    //return true or false w.r.t validation
}

const db = {
    addTask(token,data,errorCallback,successCallback){
        if(verifyToken(token)){
            var query = "INSERT INTO TODOS (uid,taskName,isCompleted,tag) VALUES (" + "'"+data.uid+"'," + "'"+data.taskName+"'," + "'"+data.isCompleted+"'," + "'"+data.tag+")";
            con.query(query, function(err,data) {
                if(err) errorCallback(err);
                successCallback(data);
            });
        }
    },
    getalltodos(token){
        if(verifyToken(token)){
            var query = "SELECT * FROM TODOS"
            con.query(query, function(err,data) {
                if(err) errorCallback(err);
                successCallback(data);
            });
        }
    }
}

export default db;
