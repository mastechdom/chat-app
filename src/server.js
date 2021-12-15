let express = require("express");
let app = express();

app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, , authorization"
    );
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
    next();
});
const port = 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}`));


let { getConnection } = require("./dataBaseCon.ts");


app.get("/messages", function(req, res) {
    let connection = getConnection();
    let sql = "SELECT * FROM message";
    connection.query(sql, function(err, result){
        if(err){
            console.log(err);
            res.status(404).send(err);
        }
        else {
            res.send(result);
        }
    })
})
app.get("/Technical", function(req, res) {
    let connection = getConnection();
    let sql = "SELECT * FROM message WHERE room = 'Technical'";
    connection.query(sql, function(err, result){
        if(err){
            console.log(err);
            res.status(404).send(err);
        }
        else {
            res.send(result);
        }
    })
})
app.get("/English", function(req, res) {
    let connection = getConnection();
    let sql = "SELECT * FROM message WHERE room = 'English'";
    connection.query(sql, function(err, result){
        if(err){
            console.log(err);
            res.status(404).send(err);
        }
        else {
            res.send(result);
        }
    })
})

app.post("/messages", function(req,res){
    let body = req.body;
    let connection = getConnection();
    let sql = "INSERT INTO message(text,sender,room,time,date) VALUES(?,?,?,?,?)";
    connection.query(sql,[body.text,body.sender,body.room,body.time,body.date],function(err,result){
        if(err){
            console.log(err);
            res.status(404).send(err);
        }
        else{
            res.send(body);
        }
    });
});

