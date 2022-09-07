var objTo = document.getElementById('container');
let h2=document.createElement('h2');
objTo.appendChild(h2);
h2.setAttribute('id','header');
document.getElementById("header").innerHTML="Dictionary";
let divs=document.createElement("div");
objTo.appendChild(divs);
divs.setAttribute('id','nav');
document.getElementById('nav').innerHTML="Definitions from <a href='#'>Oxford Languages<a href= '#'> · Learn more</a>"
let multi=document.createElement('div');
document.body.appendChild(multi);
multi.setAttribute('id','english');
document.getElementById('english').innerHTML="<select  id='language'><option value='English'>English</option><option value='English&hindi'>English&hindi</option><option value='English&Marti'>English&Marti</option><option value='English&Tamil'>English&Tamil</option></select>"
let di=document.createElement("div");
objTo.appendChild(di);
di.setAttribute("id","demo");
document.getElementById("demo").innerHTML="<input id='searchbox' type='text' placeholder='Search for a word'><button  id='btn'value='search' onclick='search()'><i class='fa fa-search'></i></button>"
let newdi=document.createElement("div");
objTo.appendChild(newdi);
newdi.setAttribute('id','p');
document.getElementById('p').innerHTML="<p id=head></p><p id='tail'></p><p id=noun></p><p id=para></p><p id=adjective></p><p id=Ptag></p>"

function search(){
var ci=document.getElementById('searchbox').value;
//document.getElementById('para').innerHTML=ci;
/*let text1="https://api.dictionaryapi.dev/api/v2/entries/en/";
let text2=ci;
let text3=text1.concat(text2);*/
//console.log(text3);
var xhr=new XMLHttpRequest();
xhr.onreadystatechange =function(){
    if(this.readyState==4 &&this.status==200){
        const obj=JSON.parse(xhr.responseText);
      //document.getElementById("audi").innerHTML= obj[0].phonetics[1].audio;
        document.getElementById("tail").innerHTML= obj[0].phonetic;
        document.getElementById("head").innerHTML= obj[0].word;
        document.getElementById("noun").innerHTML= obj[0].meanings[0].partOfSpeech;
        document.getElementById("para").innerHTML = obj[0].meanings[0].definitions[0].definition;
         document.getElementById("adjective").innerHTML= obj[0].meanings[1].partOfSpeech;
        document.getElementById("Ptag").innerHTML =     obj[0].meanings[1].definitions[0].definition;  }
else{
    const obj=JSON.parse(xhr.responseText);
    document.getElementById("para").innerHTML=obj.title+" <br>"+obj.message+"<br>"+obj.resolution;
    document.getElementById("Ptag").innerHTML="";
    document.getElementById("adjective").innerHTML="";
    console.log(this.responseText)
}
   

}
//xhr.open('GET',text3,true);
xhr.open('GET',`https://api.dictionaryapi.dev/api/v2/entries/en/ ${ci}`,true);

xhr.send();
}
/*function search(){

}*/