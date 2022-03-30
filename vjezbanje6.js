//1
var skrolTekst = document.getElementById ('skrolTekst');

//2

function napraviTekst () {

    var tekst1 = "Da li ćeš ovo razumjeti" ; 
    var tekst2 = "Ako razumiješ" ; 
    var tekst3 = "Svaka čast" ; 
    var tekst4 = "Ako ne razumiješ" ; 
    var tekst5 = "Biće nekad bolje" ; 


    var splitTekst1 = tekst1.split ('');
    var splitTekst2 = tekst2.split (''); 
    var splitTekst3 = tekst3.split (''); 
    var splitTekst4 = tekst4.split (''); 
    var splitTekst5 = tekst5.split (''); 


    var zajednickaLista = [splitTekst1,splitTekst2,splitTekst3,splitTekst4,splitTekst5];
    return zajednickaLista;

}



var nt = napraviTekst ();


//3
var i=0;
var loop;
function pocni () {

    if (nt[i].length > 0 ) {

        skrolTekst.innerHTML += nt[i].pop() ;
        loop = setTimeout (pocni,100); 


    } 

    else {
        var pauza1 = setTimeout (pauza,2000); 

    }


}


pocni () ;


//4
function pauza () {
     
     i++;
     if (i> 4) { // treba se navesti 

        i=0;
        nt = napraviTekst () ; // reset funkcije

        

     }
     skrolTekst.innerHTML = (''); 

     pocni() ;


}
