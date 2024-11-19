
/*
---



*/

const displayarea=document.getElementById('myid');

//timeleft globally bebohar kora
let timeleft;
let timerinterval;
let isrunning=false;
//main function----
const mainfunction=(duration)=>{
  let time=duration;
  //time distribution
  timerinterval=setInterval(() => {
    //kew jodii string die fele sei jonno jate somossa na hoi tate parseint ar dosomike convert korar jonno 10 nilam

   const minites=parseInt(time/60,10);
   const second=parseInt(time%60,10);

   displayarea.textContent=`0${minites}:${second}`
   //time running
   if(--time<0){
  clearInterval(timerinterval)
  displayarea.innerHTML='Breath Out';
  
  setTimeout(() => {
    displayarea.innerHTML='Breath In';
    mainfunction(timeleft)


    
  }, 1000);
   }
    
  }, 1000);
  
 
}
//start button
const startbtn=()=>{
  if(!isrunning){
    timeleft=90;
    mainfunction(timeleft);
    isrunning=true;
  }


}
//stop button
const stopBtn=()=>{
clearInterval(timerinterval)
displayarea.innerHTML='Breath In'
isrunning=false;

}

