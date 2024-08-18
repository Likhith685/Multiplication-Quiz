const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);
const questionel=document.getElementById("question");

const inputel=document.getElementById("input");
const formel=document.getElementById("form");
const scoreel=document.getElementById("score");

let score=JSON.parse(localStorage.getItem("score"));
if(!score)
{
    score=0;
}
scoreel.innerText=`score: ${score}`;

questionel.innerText=`What is ${num1} multiply by ${num2} ?`;

const correctanswer=num1*num2;

formel.addEventListener("submit",()=>
{
     const userans= +inputel.value;
     if(userans==correctanswer)
     {
        score+=1;
        updatelocalstorage();
     }
     else{
        score-=1;
        updatelocalstorage();
     }
})
function updatelocalstorage()
{
    localStorage.setItem("score",JSON.stringify(score));
}
