const express = require("express");

const mysql = require("mysql");

const app = express();

app.use(express.json());



// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "todolist",
//     waitForConnections: true,
//     connectionLimit: 100,
// });
// let User;
// function updateDatabase(){
//     connection.query("SELECT * FROM user", function(err, result){
//         if(err) throw err;
//         User = result;
//     });
// };
// updateDatabase();

var charater = []
for (let i=65;i<91;i++){
    charater.push(String.fromCharCode(i));
};
for (let i=97;i<123;i++){
    charater.push(String.fromCharCode(i));
};
for (let i=0;i<10;i++){
    charater.push(i.toString());
};

const rnd = (arr) => { return arr[Math.floor(Math.random() * arr.length)] };

const createUsercode = () => {
    let result = "";
    for(let i = 0;i<13;i++){
        result += rnd(charater);
    }
    return result;
}



app.get("/",(req,res)=>{
    res.send("hello world");
});

let User = [];
app.post("/sign-up",(req,res)=>{
    var username = req.body.username.trim();
    var password = req.body.password.trim();

    for(let user of User) {
        if (user.username === username && user.password === password){
            res.send({
                "success":true,
                "usercode":user.usercode
            });
        }
    }
    res.send({"success":false,});
});



app.post("/auto-login",(req,res)=>{

});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("localhost:1807");
});
