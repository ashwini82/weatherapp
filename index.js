let apiKey='5e0cd4889c06f9c4861fbd431372378f';
const city ='charlotte' ;    //argv.c ||'charlotte';
//let zipcode = 28277 ;
let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
//let request = require('request');
//const argv = require('yargs').argv ;

//const Moment = require('moment');
//var myFunction= setInterval(() =>{
//	var Moment = moment().format()
//	var time = new Moment();

//	console.log(moment().format("h:mm:ss"))
//},3000);


 request(url, function (err,response,body){
 	if(err){
 		console.log('Error:',error);
 	} else {
 		//console.log('body:',body);
 		let weather = JSON.parse(body)
 		let message = `It is ${weather.main.temp}deg in ${weather.name} !`;
 		console.log(message);
 	}
 });
 
