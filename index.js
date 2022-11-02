let clock = document.querySelector("#saat");

setInterval(() => {
     let date = new Date();
     let hours = date.getHours();
     let mins = date.getMinutes();
     let sec = date.getSeconds();

     hours = hours < 10 ? "0" + hours : hours
     mins = mins < 10 ? "0" + mins : mins
     sec = sec < 10 ? "0" + sec : sec
  
     clock.innerHTML = `${hours} : ${mins} : ${sec}`
   
})
let day = document.querySelector("#text3")
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear(); 

today = dd + '/' + mm + '/' + yyyy;
setTimeout(() => {
    day.innerHTML = `${today + " tarihinde"}`
})
let getName = prompt("Lütfen adınızı giriniz.")
let selectName = document.querySelector("#myName")
selectName.innerHTML = `${getName}`