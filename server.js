var express=require('express');
const mysql= require('mysql');
const bodyParser= require('body-parser')

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'mydb'
  });
var app=express();


app.use(express.static('./public'));
app.use(bodyParser.json());




app.get('/contactlist',(req,res)=>{

    console.log("I received the get request");


    connection.query("SELECT * FROM borehole",(err,rows,fiels)=>{
      
        if(err){
            console.log("Something is wrong");
            res.sendStatus(500);
            return;
        }
        console.log("I think we fetched successfully");
        res.json(rows);
    });

});





app.get('/waterlist/:id',(req,res)=>{
    console.log("I received the get request");

    var id=req.params.id;
    //console.log("JJJJJJJ "+id);

    connection.query("SELECT * FROM waterlevel WHERE id2=?",[id],(err,rows,fiels)=>{
      
        if(err){
            console.log("Something is wrong");
            res.sendStatus(500);
            return;
        }
        console.log("I think we fetched successfully");

        console.log(rows);
        res.json(rows);
    });

});














app.post('/contactlist',(req,res)=>{

    console.log(req.body);

    const name= req.body.name;
    const type= req.body.type;
    const longitude= req.body.longitude;
    const latitude= req.body.latitude;
    const elevation= req.body.elevation;
    

    const queryString= "INSERT INTO borehole (name,type,longitude,latitude,elevation) VALUES(?,?,?,?,?)";

    //connecting to database
    connection.query(queryString,[name,type,longitude,latitude,elevation],(err,results,fields)=>
    {
        if(err)
        {
            console.log("Fail to create new user");
            res.sendStatus(500);
            return;
        }
        console.log("Inserted a new user with ID >>");

        res.json(results);
        res.end;
    });







});


app.delete('/contactlist/:id',(req,res)=>{

    var id=req.params.id;

    console.log(id);

    var sql = "DELETE FROM borehole WHERE id = ?";

    connection.query(sql,[id],function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
        res.json(result);
        res.end();


      });
});

//////////////////////////////////////////////////////////////


app.post('/waterlist/:id',(req,res)=>{

    console.log(req.body);
    var id=req.params.id;

    const date= req.body.date;
    const readings= req.body.readings;
    
    

    const queryString= "INSERT INTO waterlevel (date,readings,id2) VALUES(?,?,?)";

    //connecting to database
    connection.query(queryString,[date,readings,id],(err,results,fields)=>
    {
        if(err)
        {
            console.log("Fail to create new user");
            res.sendStatus(500);
            return;
        }
        console.log("Inserted a new user with ID >>");

        res.json(results);
        res.end;
    });




});

app.delete('/waterlist/:id',(req,res)=>{

    var id=req.params.id;

    console.log(id);

    var sql = "DELETE FROM waterlevel WHERE id = ?";

    connection.query(sql,[id],function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
        res.json(result);
        res.end();


      });
});



app.get('/waterlist2/:id', function (req, res) {
    var id = req.params.id;
    //console.log(id+"hhhhgggggggggggggggggg");

    connection.query("SELECT * FROM waterlevel WHERE id=?",[id],(err,rows,fields)=>{
      
        if(err){
            console.log("Something is wrong");
            res.sendStatus(500);
            return;
        }

        console.log(rows+"JJJJJJJ");

        res.json(rows[0]);
        res.end();
    });
    

 
  });


  app.put('/waterlist3/:id', function (req, res) {
    var id = req.params.id;


    const date= req.body.date;
    const readings= req.body.readings;

    var sql="UPDATE waterlevel SET date= ?, readings= ? WHERE id = ?";


    connection.query(sql,[date,readings,id],(err,rows,fields)=>{
      
        if(err){
            console.log("Something is wrong");
            res.sendStatus(500);
            return;
        }

        res.json(rows);
        res.end();
    });
    

    
  })


/////////////////////////////////////////////////////////////////
/*
app.get('/contactlist/:id',(req,res)=>{

    var id =req.param.id;
    console.log("JJJJJ "+id);
    connection.query("SELECT * FROM borehole WHERE id=?",[id],(err,results,fields)=>{
      
        if(err){
            console.log("Something is wrong");
            res.sendStatus(500);
            return;
        }

        res.json(results);
        res.end();
    });



});
*/




















app.get('/contactlist/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);

    connection.query("SELECT * FROM borehole WHERE id=?",[id],(err,rows,fields)=>{
      
        if(err){
            console.log("Something is wrong");
            res.sendStatus(500);
            return;
        }

        var name;
       



        //console.log(rows);

        res.json(rows[0]);
        res.end();
    });
    

 
  });




  app.put('/contactlist/:id', function (req, res) {
    var id = req.params.id;


    const name= req.body.name;
    const type= req.body.type;
    const longitude= req.body.longitude;
    const latitude= req.body.latitude;
    const elevation= req.body.elevation;


    console.log(name);

    var sql="UPDATE borehole SET name= ?, type= ?, latitude =?, longitude =?, elevation = ? WHERE id = ?";


    connection.query(sql,[name,type,longitude,latitude,elevation,id],(err,rows,fields)=>{
      
        if(err){
            console.log("Something is wrong");
            res.sendStatus(500);
            return;
        }

        res.json(rows);
        res.end();
    });
    

    
  });





// server running on port 5000
const port=4000;
app.listen(port,(req,res)=>{
    console.log("Server has started and is running");

});