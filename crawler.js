var express = require("express");
var app = express();
var fs = require("fs");

var text = fs.readFileSync("crawler-data.txt").toString().split("\n");

console.log(text);
 app.get('/',(req,res)=>{
  res.send("saaaa");
 });

 app.get('/:query',(req,res)=>{
    query=req.params["query"];
    var sites=[];

    text.forEach(element => {
        if(element.includes(query)){
           sites.push(element); 
        }
        else{
            
        }
        
      });
       
             res.send(sites);
             res.end();
            





   });






   app.listen(3000);
