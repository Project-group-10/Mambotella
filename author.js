var counter=0;
document.querySelector('.right-arrow').addEventListener('click', next);
function next(){
    
    if(counter<5){
        counter+=1
     var hide=counter-1;
     document.getElementById("person-"+hide).style.display='none';
    document.getElementById("person-"+counter).style.display='flex'; 
    
    }
}


document.querySelector('.left-arrow').addEventListener('click', back);
function back(){
    
    if(counter>0){
        counter-=1
     var hide=counter+1;
     document.getElementById("person-"+hide).style.display='none';
    document.getElementById("person-"+counter).style.display='flex'; 

    }
}
//a