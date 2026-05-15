const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const question1 = document.getElementById("question");
question1.innerText =  `What is ${num1} multiply by ${num2} ? `;

const correctAns = num1 * num2;

const formid = document.getElementById("form");

const scoreid = document.getElementById("score")

let score = JSON.parse(localStorage.getItem("score"))

if(!score){
    score = 0;
}

scoreid.innerText = `score: ${score}`

const inputid = document.getElementById("input")


formid.addEventListener("submit",()=>{
    const userOutput = +inputid.value;
    if(correctAns == userOutput){
        score++;
        updatelocalstorage();
        
    }else{
        score--;
        updatelocalstorage();
    }
})

function updatelocalstorage(){
    localStorage.setItem("score", JSON.stringify(score))
}