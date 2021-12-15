let mysql = require("mysql");
let connData = {
    host : "13.126.119.182",
    user : "mohd",
    password : "Mohd@123",
    database : "chatbot",
};

function getConnection() {
    return mysql.createConnection(connData);
}

module.exports.getConnection = getConnection;