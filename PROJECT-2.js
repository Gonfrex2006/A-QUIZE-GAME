const questions = [
    {
        question:"What is the capital of France?",
        answers:[
            {text:"Berlin",correct:false,},
            {text:"Madrid",correct:false,},
            {text:"Paris",correct:true,},
            {text:"Rome",correct:false,}
        ]
    },
    {
        question:"What is the chemical symbol for Gold?",
        answers:[
            {text:"ag",correct:false,},
            {text:"au",correct:true,},
            {text:"pb",correct:false,},
            {text:"fe",correct:false,}
        ]
    },
    {
        question:"Which element has the atomic number 1?",
        answers:[
            {text:"oxygene",correct:false,},
            {text:"hydrogen",correct:true,},
            {text:"helium",correct:false,},
            {text:"carbon",correct:false,}
        ]
    },
    {
        question:"Who wrote (To Kill a Mockingbird)?",
        answers:[
            {text:"Harper Lee",correct:true,},
            {text:"J.K. Rowling",correct:false,},
            {text:"Ernest Hemingway",correct:false,},
            {text:"Mark Twain",correct:false,}
        ]
    },
    {
        question:"What is the smallest planet in our solar system?",
        answers:[
            {text:"mars",correct:false,},
            {text:"earth",correct:false,},
            {text:"Mercury",correct:true,},
            {text:"moon",correct:false,}
        ]
    },
    {
        question:"What gas do plants use for photosynthesis?",
        answers:[
            {text:"Oxygen",correct:false,},
            {text:"Nitrogen",correct:false,},
            {text:"Carbon Dioxide",correct:true,},
            {text:"Hydrogen",correct:false,}
        ]
    },
    {
        question:"In which year did the Titanic sink?",
        answers:[
            {text:"1906",correct:false,},
            {text:"1912",correct:true,},
            {text:"1916",correct:false,},
            {text:"1913",correct:false,}
        ]
    },
    {
        question:"What is the longest river in the world?",
        answers:[
            {text:"Mississippi",correct:false,},
            {text:"Yangtze",correct:false,},
            {text:"Nile",correct:false,},
            {text:"Amazon",correct:true,}
        ]
    },
    {
        question:"What is the hardest natural substance on Earth?",
        answers:[
            {text:"gold",correct:false,},
            {text:"diamond",correct:true,},
            {text:"Iron",correct:false,},
            {text:"steel",correct:false,}
        ]
    },
    {
        question:"Who is known as the (Father of Computers)?",
        answers:[
            {text:"Charles Babbage",correct:true,},
            {text:"Alan Turing",correct:false,},
            {text:"Bill Gates",correct:false,},
            {text:"ME(Abdo)",correct:true,}
        ]
    },
    {
        question:"What is the largest ocean on Earth?",
        answers:[
            {text:"Atlantic Ocean",correct:false,},
            {text:"indian Ocean",correct:false,},
            {text:"Arctic Ocean",correct:false,},
            {text:"Pacific Ocean",correct:true,}
        ]
    },
    {
        question:"Who painted the Mona Lisa?",
        answers:[
            {text:"Vincent Van Gogh",correct:false,},
            {text:" Pablo Picasso",correct:false,},
            {text:"Claude Monet",correct:false,},
            {text:"Leonardo da Vinc",correct:true,}
        ]
    },
    {
        question:"What is the main ingredient in guacamole?",
        answers:[
            {text:"Tomato",correct:false,},
            {text:"Onion",correct:false,},
            {text:"Avocado ",correct:true,},
            {text:"Pepper",correct:false,}
        ]
    },
    {
        question:"What is the hardest known mineral on the Mohs scale?",
        answers:[
            {text:"Quartz",correct:false,},
            {text:"Topaz",correct:false,},
            {text:"Sapphire",correct:false,},
            {text:"Diamond",correct:true,}
        ]
    },
    {
        question:"What is the currency used in Japan?",
        answers:[
            {text:"Yen",correct:true,},
            {text:"Won",correct:false,},
            {text:"yuan",correct:false,},
            {text:"Ringgit",correct:false,}
        ]
    },
    {
        question:"What is the largest desert in the world?",
        answers:[
            {text:"sahara",correct:false,},
            {text:"antarctic desert",correct:true,},
            {text:"gobi",correct:false,},
            {text:" Arabian Desert",correct:false,}
        ]
    },
    {
        question:"In which continent is the Sahara Desert located?",
        answers:[
            {text:"Asia",correct:false,},
            {text:"South America",correct:false,},
            {text:"africa",correct:true,},
            {text:"australia",correct:false,}
        ]
    },
    {
        question:"What is the largest species of shark?",
        answers:[
            {text:"Great White Shark",correct:false,},
            {text:"Whale Shark",correct:true,},
            {text:"Tiger Shark",correct:false,},
            {text:" Hammerhead Shark",correct:false,}
        ]
    },
    {
        question:"Who developed the theory of relativity?",
        answers:[
            {text:" Isaac Newton",correct:false,},
            {text:"Albert Einstein",correct:true,},
            {text:" Niels Bohr",correct:false,},
            {text:" Galileo Galilei",correct:false,}
        ]
    },
    {
        question:"Who is the author of the Harry Potter series?",
        answers:[
            {text:"J.R.R. Tolkien",correct:false,},
            {text:"George R.R. Martin",correct:false,},
            {text:"J.K. Rowling",correct:true,},
            {text:"C.S. Lewis",correct:false,}
        ]
    },
    {
        question:"What is the capital of Australia?",
        answers:[
            {text:"Sydney",correct:false,},
            {text:"Melbourne",correct:false,},
            {text :"Canberra",correct:true,},
            {text:"brisbane",correct:false,}
        ]
    },
    {
        question:"What is the most abundant gas in the Earth's atmosphere?",
        answers:[
            {text:"Oxygen",correct:false,},
            {text:"Carbon Dioxide",correct:false,},
            {text :" Nitrogen",correct:true,},
            {text:"Argon",correct:false,}
        ]
    },
  
    {
        question:"What is the capital city of Canada? ",
        answers:[
            {text:"Toronto",correct:false,},
            {text:"Vancouver",correct:false,},
            {text :"Montreal",correct:false,},
            {text:"Ottawa",correct:true,}
        ]
    },
  
    {
        question:"Who was the first human to journey into outer space?",
        answers:[
            {text:"Neil Armstrong",correct:false,},
            {text:"Yuri Gagarin",correct:true,},
            {text :"Alan Shepard",correct:false,},
            {text:"Buzz Aldrin",correct:false,}
        ]
    },
  
    {
        question:"What is the main source of energy for the Earth?",
        answers:[
            {text:"The Moon",correct:false,},
            {text:"Geothermal Energy",correct:false,},
            {text :"The Sun",correct:true,},
            {text:" Tidal Forces",correct:false,}
        ]
    },
  
  
];

const yourquestion = document.getElementById("yourquestion");
const nextbutton = document.getElementById("nextbutton");
const botonat = document.getElementById("botonat");

let quizescore = 0 ;
let currentquestionindex = 0;

function startquize(){
    quizescore = 0;
    currentquestionindex = 0;
    nextbutton.innerHTML = "Next"
    showquestion()
    
}
function showquestion(){
    reststat()
    let currentquestion = questions[currentquestionindex];
    let quizeNo = currentquestionindex + 1; 
    yourquestion.innerHTML = quizeNo + ". " + currentquestion.question;
    console.log(yourquestion.innerHTML);
    
    currentquestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("answer");
        botonat.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectanswer)
    });
}


function reststat(){
    nextbutton.style.display = "none"
    while(botonat.firstChild){
        botonat.removeChild(botonat.firstChild)
    }
}

function selectanswer(e){
    const selectedbtn = e.target;
    const iscorrect = selectedbtn.dataset.correct === "true";
     if(iscorrect){
        selectedbtn.classList.add("correctanswer")
        quizescore ++;
    }
    else{
        selectedbtn.classList.add("incorrectanswer")
    }
    Array.from(botonat.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correctanswer")
        }
        nextbutton.style.display = "block"
        button.disabled = "true"
         
    })
   
}
function showscore(){
    reststat();
    yourquestion.innerHTML = `<p>your score is : ${quizescore}/${questions.length}</p>`
    nextbutton.style.display ="block"
    nextbutton.innerHTML = "play again"
}

function handlenext(){
    currentquestionindex ++;
    if(currentquestionindex < questions.length){
        showquestion()
    }else{
        showscore()
    }
    
}

nextbutton.addEventListener("click",() =>{
    if(currentquestionindex<questions.length){
        handlenext();
    }
    else{
        startquize()
    }
})
startquize()


