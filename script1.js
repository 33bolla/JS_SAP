// automation JS for exe 08.01
// by MaoSoft() R1 20180331
//              R2 20180403  routine migliorata per conteggio elementi
//              R3 20180408  accessing data on server file


/*  ****Function List
    selWordChar (engine function)
    
    --reading data functions
    readwebsite (read data from file -- in progress)
    $btnText    internal data
    $btnFile    data on server files


*/

function selWordChar(s1, c) {
    //this function perform the exercise
    
    // The function returns all the elements of L1 containing c
    // s1 file content as a  string from a text file, c character.
    //test 1
    
    //init
    var L1 = []; // array built on input string
    var L1_1 =[]; //array costituito dalle parole delle riga di testo in lavorazione
    var L2 = []; // output array 
    var n = "" //return from test condition
    
    // converting input data
    L1= s1.split("/n"); // /n stands for newLine
    
    //looping for matching condition on strings included in L1
    for (i = 0; i < L1.length; i++) { 
        console.log("ecco le parole della riga "+i)+ "che diventano elementi di un array";
        L1_1 = L1[i].split(" ");
        console.log (L1_1);
        
        for (j= 0; j < L1_1.length; j++) {
            console.log(L1_1[j]);
            n = L1_1[j].indexOf(c);
            if (n == -1){
                ; 
             } else {
                //console.log (L1_1[j]);
                L2.push(L1_1[j]);
            } 
        }
    return L2;
    }
}
   
function readWebSite(urlWeb){
   //read webSite text!
    console.log ("sono in readWebSite; la URL è ", urlWeb);
    var s=""; //return string
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", urlWeb, true);
    xmlhttp.send();
    
    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
            s = this.responseText;
            console.log (s);
            
        }
    }
    // ------- da qui!!
    s = document.getElementById("demo").innerHTML; // come mai non recupera inner html?
    console.log (s);
    return s;
    
}



$("#btnText").click(function() { 
    //preliminary test 
    alert("You are in SAP 08.01 Now! Working with text");
    

    /*
    by now we are  not able to read a file from disk so:
    we'll use demo text (on string) in order to  test function
    After:
    // we try to use data from  web (for example a web page)
    // wetry again to read a local file with JS  
    */
    //init
    var s = ""; //input text string (from file)
    var c = "";   // character as parameter
    var L2 = []; //output array  

    //File contents for test:
    
    /* example 1
    s = "Questo è un esempio di un file di testo. /n"+
    "Occupa quattro righe /n"+
    "/n"+
    "Riga 4/n";
    c="a";
    */
    
    
    s = "Nel mezzo del cammin di nostra vita /n"+
    "mi ritrovai per una selva oscura/n"+
    "che la diritta via era smarrita/n"+
    "ciao belloccio/n";
    c="a"; 
    
    console.log (s,c);
    L2 = selWordChar(s, c);
    console.log (L2, " numero parole trovate "+ L2.length);
    //document.write(L2);
    
    // exporting all L2 words in html
    var L2Html ="";

    for (i=0; i < L2.length; i++) {
        console.log (L2[i]);
        L2Html = L2Html +  L2[i]+"; ";
    }

    $("#demo").html(L2Html);
    
})



$("#btnFile").click(function() { 
    //preliminary test 
    //needs JQ Ajax XMLHttpRequest function
    alert("You are in SAP 08.01 Now! working with files");
    
    //with JQ AJAX maybe you can access to local file...(only in server path)
    function loadDoc() {
        var xhttp = new XMLHttpRequest();
        var testo1 = "";
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
            this.responseText;
            var testo1 = this.responseText
            console.log(testo1);
            return testo1;
          }
        };
        xhttp.open("GET", "Esempio.txt", true);
        xhttp.send();    
        testo1 = xhttp.responseText;
        console.log(testo1);
        return testo1;
    
    }
    //init
    var s = ""; //input text string (from file)
    var c = "";   // character as parameter
    var L2 = []; //output array  
    s=loadDoc();   
    console.log(s);
    c="a"; 
    
});