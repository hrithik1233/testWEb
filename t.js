window.addEventListener("load",()=>{

    let hr=document .getElementById("hr");
    let min=document .getElementById("min");
    let sec=document .getElementById("sec");   
    let hour= 0;
    let mint=0;
    let secd=0;
    function chrono() {
       let h=hour;
       let m=mint;
       let s=secd;

       if(secd==60){
        mint=mint+1;
        secd=0
       }
       if(mint==60){
        hour+=1
        mint=0
        secd=0
       }
       if(hour==12){
     
        mint=0
        secd=0
       }
 
       if(hour<10){
        h='0'+hour;
       }
       
       if(mint<10){
        m='0'+mint
       }
       if(secd<10){
        s='0'+secd;
       }
       
        
      hr.innerText= h;
      min.innerText=m;
      sec.innerText=s; 
    }
 
     function start(){
     
      secd=secd+1;
       chrono();
     }
     
   let isPaused =false
    
   let isStarted=true
  let stBtn=document.getElementById("start");
  let stopBtn=document.getElementById("stop");
  let pauseBtn=document.getElementById("pause");
  let intervalId;
  stBtn.addEventListener("click",()=>{
 
    
    if(isStarted){ 
        console.log(isStarted)
        isStarted=!isStarted
    intervalId= setInterval( start , 1000);
    }
  });
  stopBtn.addEventListener("click",(e)=>{
    hour=0;
    mint=0
    secd=0
     isStarted=true
    chrono();
    clearInterval(intervalId);
  });
  pauseBtn.addEventListener("click",()=>{
   
    
    isPaused=!isPaused
    if(isPaused){
      pauseBtn.innerText='resume'
    clearInterval(intervalId);
    }else{
      pauseBtn.innerText='pause'
      
      intervalId= setInterval( start ,  1000);
    }
    
    
  })

});
