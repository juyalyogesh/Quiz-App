const quizdata=[
    {
    question:"Q-1: Which of these best describes the legendary Christmas character Krampus?",
    opstion:[
        "head elf at the North Pole",
        "mouse that lives on Santa’s sleigh",
        "monster that punishes children",
        "Kris Kringle’s child",
    ],
    correct:3,
    },
    {
question:"Q-2: In A Christmas Carol, who was Jacob Marley, the first ghost to visit Ebenezer Scrooge?",
opstion:[
    "the neighbor Scrooge never liked",
    "Scrooge’s childhood friend",
    "Scrooge’s estranged son",
    "Scrooge’s business partner",
],
correct:3,
    },
    {
        question:"Q-3: Which composer called his own 1892 ballet The Nutcracker 'rather boring'?",

        
        opstion:[
            "Tchaikovsky",
            "Mozart",
            "Handel",
            "Bach",
        ],
        correct:0,
            },
            {
                question:"Q-4: Which British monarch helped popularize the German custom of bringing a tree inside the house at Christmas?",
                opstion:[
                    "King Henry VIII",
                    "William the Conqueror",
                    "Queen Victoria",
                    "Queen Elizabeth II",
                ],
                correct:2,
                    },
                    {
                        question:"Q-5: In Dr. Seuss’s How the Grinch Stole Christmas!, the Grinch is afflicted with what condition?",
                        opstion:[
                            "soul like a worn-out shoe",
                            "shrinking of the scruples",
                            "criminally cramped conscience",
                            "heart two sizes too small",
                        ],
                        correct:3,
                            },
                            {
                                question:"Q-6: According to the song “Frosty the Snowman,” what does Frosty have for a nose?",
                                opstion:[
                                    "button",
                                    "rock",
                                    "carrot",
                                    "lump of coal",
                                ],
                                correct:0,
                                    },
                                    
];
let [questionelem,opstion_1,opstion_2,opstion_3,opstion_4]=document.querySelectorAll('#qes,#option_1,#option_2,#option_3,option_4');

const sumitbtn=document.querySelector('#btn');
const answer=document.querySelectorAll('.asnwerinput');
let pannel=document.querySelector('.pannel');

let currentquiz=0;
let score=0;

runfunction=()=>{
    const{question,opstion}=quizdata[currentquiz];
    questionelem.innerHTML=question;
    opstion.forEach((currentquiz,index)=>{
      (window[`option_${index + 1}`].innerHTML=currentquiz)
    });
};
runfunction();
getselectedoption=()=>{
    let answerelm= Array.from(answer);
   return answerelm.findIndex((currentelm)=>  currentelm.checked);
};
const deselected=()=>{
    answer.forEach((current)=>(current.checked=false));
};
sumitbtn.addEventListener('click', btnfunction);
 function btnfunction(){
    const selectedoption=getselectedoption();
    if(selectedoption===quizdata[currentquiz].correct){
  score+=1; 
    }
    currentquiz++;
    if(currentquiz < quizdata.length){
    deselected();
    runfunction();
}
else{
pannel.innerHTML=`<div class="result">
<div class="number">
    <div class="text">
    <h2>Your Score:</h2>&nbsp; &nbsp;
   <h2>${score}/${quizdata.length}</h2>&nbsp; &nbsp;
   <h2>${((score*100)/quizdata.length).toFixed(2)}%</h2>&nbsp; &nbsp;
   <h2>Correct Answer</h2>
</div>
<div class="text-2">
    <p>Congretulation On Completing The Quiz</p>
    <button class="btn-2" onclick="location.reload()">Play Again</button>
</div>

</div>
</div>`;
}
}
