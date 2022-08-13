var sec=0;
var min=0;
var hour=0;

var counter

function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function start(){
  increase()
  counter=setInterval(increase,1000)
}

function pause(){
  clearInterval(counter)
}

function stop(){
  clearInterval(counter)
  sec=0
  min=0
  hour=0
  document.getElementById('display').innerText=twoDigits(hour)+':'+twoDigits(min)+':'+twoDigits(sec)
}

function increase(){
  sec++
  if(sec==60){
    min++
    sec=0
    if(min==60){
      hour++
      min=0
    }
  }
  document.getElementById('display').innerText=twoDigits(hour)+':'+twoDigits(min)+':'+twoDigits(sec)
}