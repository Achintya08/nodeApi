const http = require("http");
const url = require("url");
http
    .createServer(function(req,res){
        const path = req.url;
        const quertyParam = url.parse(
            path, true).query;
        if (path.includes("age")){
            const name = quertyParam.name;
            const date = quertyParam.date;
            const month = quertyParam.month;
            const years = quertyParam.year;
            const dob = new Date(years, month, date);

            const montdiff = Date.now() - dob.getTime();
            const ageDate = new Date(montdiff);
            const yearss =   ageDate.getUTCFullYear();
            const age =   Math.abs(yearss - 1970);
           
            res.write(`<p>Hello ${name}</p>`);
            res.write(`<p>You are currently ${age} years old</p>`);
            res.end();
        } 
        else{   
        res.write("hello world");
        res.end();}
    }).listen(8080);