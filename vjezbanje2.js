function sleep () {
    i++;
    
        if(i>2) {

            i=0;
            ar = makeText(); 

        }
    
    scroll.innerHTML = ""; 
   
    start ();
       
}
  

    function makeText () {

        var text = 'Oooo batko moj';
        var text1 = 'Da te pita nešto batko tvoj? :D';
        var text2 = 'Šta ima batko moj? :D';



        var stext = text.split ('');    
        var stext1 = text1.split ('');  
        var stext2 = text2.split ('');  


        var nasArray = [stext, stext1, stext2];

   
    return nasArray;

    }


var ar=makeText();
var scroll = document.getElementById ('scroll');
var loop;

var i = 0;

function start () {


        if(ar[i].length > 0) {
            scroll.innerHTML += ar[i].shift();
            loop = setTimeout (start,300); 
    }

    
       else{
         var ss = setTimeout (sleep,2000);
       }

}
start();
