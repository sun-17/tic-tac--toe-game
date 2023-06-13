
var turn=1;
var noOfP=document.querySelectorAll(".item").length;
for(var i=0;i<noOfP;i++){

document.querySelectorAll(".item")[i].addEventListener("click",function (){
if(turn===1){
    this.style.color="#A460ED";
    var aud=new Audio("./move.mp3");
    aud.play();
    this.innerHTML="X";
    
    var a=document.querySelector(".a").innerHTML;

    var d=document.querySelector(".d").innerHTML;
    
    var g=document.querySelector(".g").innerHTML;
    var b=document.querySelector(".b").innerHTML;
    var e=document.querySelector(".e").innerHTML;
    var h=document.querySelector(".h").innerHTML;
    var c=document.querySelector(".c").innerHTML;
    var f=document.querySelector(".f").innerHTML;
    var i=document.querySelector(".i").innerHTML;
    
    if(a==="X" && d==="X" && g==="X"||c==="X" && e==="X" && g==="X"||a==="X" && e==="X" && i==="X"){
        alert("X won...click ok to replay");
      
    myfun();
       location.reload();
        
    }
    else if(b==="X" && e==="X" && h==="X"){
        alert("X won...click ok to replay");
       myfun();
        location.reload();
    }
    else if(c==="X" && f==="X" && i==="X"||a==="X" && b==="X" && c==="X"||d==="X" && e==="X" && f==="X"||g==="X" && h==="X" && i==="X"){
        alert("X won...click ok to replay");
        myfun();
        location.reload();
    }
     
else if(a!='<p></p>'&&b!='<p></p>'&&c!='<p></p>'&&d!='<p></p>'&&e!='<p></p>'&&f!='<p></p>'&&g!='<p></p>'&&h!='<p></p>'&&i!='<p></p>'){

    alert("draw!");
    myfun();
    location.reload();
}
    
   turn++;
}
else if(turn===2){
    this.style.color="#4B56D2";
    var aud=new Audio("./move.mp3");
    aud.play();
    this.innerHTML="O";
    
    var a=document.querySelector(".a").innerHTML;

    var d=document.querySelector(".d").innerHTML;
    
    var g=document.querySelector(".g").innerHTML;
    var b=document.querySelector(".b").innerHTML;
    var e=document.querySelector(".e").innerHTML;
    var h=document.querySelector(".h").innerHTML;
    var c=document.querySelector(".c").innerHTML;
    var f=document.querySelector(".f").innerHTML;
    var i=document.querySelector(".i").innerHTML;
    
    if(a==="O" && d==="O" && g==="O"||c==="O" && e==="O" && g==="O"||a==="O" && e==="O" && i==="O"){
        alert("O won...click ok to replay");
        myfun();
        location.reload();
    }
    else if(b==="O" && e==="O" && h==="O"){
        alert("O won...click ok to replay");
        myfun();
        location.reload();
    }
    else if(c==="O" && f==="O" && i==="O"||a==="O" && b==="O" && c==="O"||d==="O" && e==="O" && f==="O"||g==="O" && h==="O" && i==="O"){
        alert("O won...click ok to replay");
        myfun();
        location.reload();
    }
  
else if(a!='<p></p>'&&b!='<p></p>'&&c!='<p></p>'&&d!='<p></p>'&&e!='<p></p>'&&f!='<p></p>'&&g!='<p></p>'&&h!='<p></p>'&&i!='<p></p>'){

    alert("draw!");
    myfun();
    location.reload();
}
    
    turn--;
    



}
  
   

      
    });
}

function myfun(){
    
 
    var audio=new Audio("./gamestart.mp3");
    audio.play();   

}