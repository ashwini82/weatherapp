
 //var apiKey='5e0cd4889c06f9c4861fbd431372378f';

var button = document.querySelector('.button');
var des = document.querySelector('.des');
var temp = document.querySelector('.temp');
var tim = document.querySelector('.time');
var coun = document.querySelector('.country');
var icons=document.querySelector('img');
var date=document.querySelector('.da');
 
button.addEventListener('click',function(){

var inputValue = document.querySelector('input').value;
var name= document.querySelector('.city');

fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${inputValue}&units=metric &appid=5e0cd4889c06f9c4861fbd431372378f`)
.then(response => response.json())
.then(data =>{
    
    var iconimage=("http://openweathermap.org/img/wn/" + data.weather[0].icon +'@2x' + ".png");
    var ti = data['timezone'];
	var tempValue = data['main']['temp'];
	var desValue = data['weather'][0]['description'];
	var timeValue = [moment().utcOffset(ti/60).format("hh:mm a")];
	var dateValue = [moment().format("MM:DD:YYYY")];
	var nameValue = data['name'];
    var counValue = data['sys']['country'];
 // console.log(data);
    name.innerHTML = nameValue ;
	temp.innerHTML= parseInt((tempValue-273.15) * 9/5 + 32) + '&#8457'; 
	des.innerHTML = desValue;
	tim.innerHTML  = dateValue + ' ' + timeValue ;
	//date.innerHTML= dateValue;
	coun.innerHTML= counValue;
	icons.src = iconimage;
}) 

.catch(err => alert("wrong entry!"))
})
