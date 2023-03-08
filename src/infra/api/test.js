const quiz = [
    {
        pergunta: "Qual é o maior país do mundo?",
        opcoes: ["Rússia", "China", "Índia", "Estados Unidos"],
        resposta: "Rússia"
      }
]

const question = Object.keys(quiz[0])[0]
const options = Object.keys(quiz[0])[1]
const answer = Object.keys(quiz[0])[2]

// console.log(quiz[0][question]);

const quizGames = require("./PT_SouDev_Quiz_Game.json")
console.log("🚀 ~ file: test.js:16 ~ quizGames:", quizGames.quiz)



// console.log(user[k]);