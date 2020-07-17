var correct_english_sentence = ["John ate an apple before afternoon","some students like to study in the night","John and Mary went to church","John went to church after eating","did he go to market","the woman who called my sister sells cosmetics","John goes to the library and studies","John ate an apple so did she","the teacher returned the book after she noticed the error","I told her that I bought a book yesterday"]

var eng1 = [["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
["some students like to study in the night","at night some students like to study"],
["John and Mary went to church","Mary and John went to church"],
["John went to church after eating","after eating John went to church","John after eating went to church"],
["did he go to market","he did go to market"],
["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
["John goes to the library and studies","John studies and goes to the library"],
["John ate an apple so did she","she ate an apple so did John"],
["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her"  ,"yesterday I bought a book that I told her"]]


var correct_hindi_sentence = ["राम और श्याम बाजार गयें","राम सोया और श्याम भी","मैंने उसे बताया कि राम सो रहा है","राम खाकर सोया","बिल्लियों को मारकर कुत्ता सो गया" ,"एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है  "]


var hin1 = [["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],
["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
["बिल्लियों को मारकर कुत्ता सो गया" ,"मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]];

function lang1()
{
   b=correct_hindi_sentence[Math.floor(Math.random() * correct_hindi_sentence.length)];
            b1=b.split(" ");
              a=correct_english_sentence[Math.floor(Math.random() * correct_english_sentence.length)];
a1=a.split(" ");
  document.getElementById("example3").innerHTML=""
  document.getElementById("example5").innerHTML=""
  document.getElementById("example4").innerHTML=""
  document.getElementById("example6").innerHTML=""
  document.getElementById("example7").innerHTML=""
  document.getElementById("but5").innerHTML="Get Correct Sentence"
  document.getElementById("but3").style.visibility="hidden";
  document.getElementById('but4').style.visibility="hidden"
  document.getElementById('but5').style.visibility="hidden";
  count = 0
  

if(document.getElementById("english").selected)
{

    document.getElementById("example").innerHTML="Form a sentence(Declarative or Interrogative or any other type) from the given words"
    document.getElementById("example1").innerHTML="(select the buttons in proper order)";
    let body = document.getElementsByTagName("p")[3];
   for(i=0;i<a1.length;i++)
{
  j=Math.floor(Math.random()*a1.length)
  a2=a1[i];
  a1[i]=a1[j]
  a1[j]=a2;
}

for(i=0;i<a1.length;i++)
{
         let button = document.createElement("button");
         button.id='button'+i;
    
  button.innerHTML = a1[i]
  body.appendChild(button);
     
button.addEventListener ("click", function() {
    document.getElementById("example4").innerHTML="Formed Sentence<span style='font-style:italic;color:blue;font-weight:lighter'>(after selecting words):</span>";
    document.getElementById("example5").innerHTML+=this.innerHTML+" ";
    this.style.visibility="hidden";
    count=count+1;

    if (count>0 ) 
     {
        document.getElementById("but3").style.visibility="visible";
     }
    var x=String(document.getElementById("example5").innerHTML).replace(/\s+$/, '');
     x1=x.split(" ")


     if(a1.length==x1.length)
     {
      document.getElementById("but4").style.visibility="visible";
     }
});

}

   
}
else if (document.getElementById("hindi").selected) 
{ 
    

    document.getElementById("example").innerHTML="Form a sentence(Declarative or Interrogative or any other type) from the given words"
    document.getElementById("example1").innerHTML="(select the buttons in proper order)";
    let body = document.getElementsByTagName("p")[3];
    for(i=0;i<b1.length;i++)
{
  j=Math.floor(Math.random()*b1.length)
  a2=b1[i];
  b1[i]=b1[j]
  b1[j]=a2;

}
for(i=0;i<b1.length;i++)
{
         let button = document.createElement("button");
         button.id='button'+i;
  button.innerHTML = b1[i]
  body.appendChild(button)

button.addEventListener ("click", function() {
    document.getElementById("example4").innerHTML="Formed Sentence<span style='font-style:italic;color:blue;font-weight:lighter'>(after selecting words):</span>";
    document.getElementById("example5").innerHTML+=this.innerHTML+" ";
    this.style.visibility="hidden";
    count=count+1;
    if (count>0) 
     {
        document.getElementById("but3").style.visibility="visible";
     }
     var x=String(document.getElementById("example5").innerHTML).replace(/\s+$/, '');
     x1=x.split(" ")
    if (b1.length==x1.length) 
     {
      document.getElementById("but4").style.visibility="visible";

     }
});

}
}


else
{
    document.getElementById("example").innerHTML=""
    document.getElementById("example1").innerHTML=""
    document.getElementById("example3").innerHTML=""
}
}

function reset()

{

    for(i=0;i<a1.length||i<b1.length;i++)
    {
      if(document.getElementById('button'+i).style.visibility=="hidden")
      {
      
        document.getElementById('button'+i).style.visibility="visible";
      document.getElementById('example4').innerHTML=""
      document.getElementById('example5').innerHTML=""
      document.getElementById('example6').innerHTML=""
      document.getElementById('example7').innerHTML=""
      document.getElementById('but3').style.visibility="hidden"
      document.getElementById('but4').style.visibility="hidden" 
      document.getElementById('but5').style.visibility="hidden"; 
    }
    
}
}

function analyse()
{

  var m=String(document.getElementById("example5").innerHTML).replace(/\s+$/, '');
  n=0;
  o=0
  if(document.getElementById("english").selected)
  {
  for(i=0;i<10;i++)
  {
    for(j=0;j<eng1[i].length;j++)
    {

      if(m==eng1[i][j])
      {
           
        n++;
      }
    }
  }

if(n==1)
{
      document.getElementById("example6").innerHTML="<span style='color:green;font-size:30px;position: absolute;top:720px;left: 575px;'>Right answer!!!</span>"

}
else
{
      document.getElementById("example6").innerHTML="<span style='color:red;font-size:30px;position: absolute;top:720px;left: 575px;'>Wrong answer!!!</span>"
       document.getElementById("but5").style.visibility="visible";  
}

}

 else if(document.getElementById("hindi").selected)
  {
  for(i=0;i<7;i++)
  {
    for(j=0;j<hin1[i].length;j++)
    {

      if(m==hin1[i][j])
      {
           
        o++;

      }
    }
  }


if(o==1)
{
      document.getElementById("example6").innerHTML="<span style='color:green;font-size:30px;position: absolute;top:720px;left: 575px;'>Right answer!!!</span>"

}
else
{
      document.getElementById("example6").innerHTML="<span style='color:red;font-size:30px;position: absolute;top:720px;left: 575px;'>Wrong answer!!!</span>"
      document.getElementById("but5").style.visibility="visible";
  
}

}
}

function change()
{
d=correct_english_sentence.indexOf(a)
u=eng1[d]
e=correct_hindi_sentence.indexOf(b)
w=hin1[e]



if(document.getElementById("english").selected)
  {
    if(document.getElementById("but5").innerHTML=="Get Correct Sentence")
    {
       for(i=0;i<u.length;i++)
  { 
   document.getElementById("example7").innerHTML+=u[i]+"<br>";
   document.getElementById("but5").innerHTML="Hide the correct Sentence" 
} 
}
else if(document.getElementById("but5").innerHTML=="Hide the correct Sentence")
  {
    
   document.getElementById("example7").innerHTML=""
   document.getElementById("but5").innerHTML="Get Answers"
}
else if(document.getElementById("but5").innerHTML=="Get Answers")
{

       for(i=0;i<u.length;i++)
  { 
   document.getElementById("example7").innerHTML+=u[i]+"<br>";
   document.getElementById("but5").innerHTML="Hide the correct Sentence" 
} 
}
}

else if(document.getElementById("hindi").selected)
  { 

    if(document.getElementById("but5").innerHTML=="Get Correct Sentence")
    {
       for(i=0;i<w.length;i++)
  { 
   document.getElementById("example7").innerHTML+=w[i]+"<br>";
   document.getElementById("but5").innerHTML="Hide the correct Sentence" 
} 
}
else if(document.getElementById("but5").innerHTML=="Hide the correct Sentence")
  {
    
   document.getElementById("example7").innerHTML=""
   document.getElementById("but5").innerHTML="Get Answers"
}
else if(document.getElementById("but5").innerHTML=="Get Answers")
{

  for(i=0;i<w.length;i++)

  {
   
   document.getElementById("example7").innerHTML+=w[i]+"<br>";
   document.getElementById("but5").innerHTML="Hide the correct Sentence" 
} 
 
}
}
}