const lang = [ 'portuguese', 'english', 'spanish', 'arabic', 'french', 'hindi', 'russian', 'mandarin', 'korean', 'japanese',
];

function verificarAsKeys(data = Array()) {
  const allTitles = Object.keys(data);
  const allTitlesLength = Object.keys(data).length;
  const problem = [];

  for (let c = 0; c < allTitlesLength; c++) {
    const title = allTitles[c];
    const topicQuestions = data[title];
    topicQuestions.forEach((quiz) => {
      const keys = Object.keys(quiz);

      keys.forEach((key) => {
        if (
          key === 'id' ||
          key === 'question' ||
          key === 'options' ||
          key === 'answer'
        ) {
        } else {
          problem.push({ id: quiz.id, topic: title });
        }
      });
    });
  }
  console.log(problem);
}
function verificarSeExisteQuatroKeys(data = Array()) {
  const allTitles = Object.keys(data);
  const allTitlesLength = Object.keys(data).length;
  const problem = [];

  for (let c = 0; c < allTitlesLength; c++) {
    const title = allTitles[c];
    const topicQuestions = data[title];
    topicQuestions.forEach((quiz) => {
      const keysLength = Object.keys(quiz).length;
      if (keysLength === 4) {
      } else {
        problem.push({ id: quiz.id, topic: title });
      }
    });
  }
  console.log(problem);
}
function verificarSeAnswerBateNasOptions(data = Array()) {
  const allTitles = Object.keys(data);
  const allTitlesLength = Object.keys(data).length;
  const problem = [];

  for (let c = 0; c < allTitlesLength; c++) {
    const title = allTitles[c];
    const topicQuestions = data[title];
    topicQuestions.forEach((quiz) => {
      
      const answer = quiz.answer
      const options = quiz.options

      if (options.includes(answer)) {
      }else{
        problem.push({ id: quiz.id, topic: title });
      }

    });
  }
  console.log("Total of errors: " + problem.length);
  console.log(problem);
}

function verificaSeAsOptionsTemQuatro(data = Array()) {
  const allTitles = Object.keys(data);
  const allTitlesLength = Object.keys(data).length;
  const problem = [];

  for (let c = 0; c < allTitlesLength; c++) {
    const title = allTitles[c];
    const topicQuestions = data[title];
    topicQuestions.forEach((quiz) => {
      
      // const answer = quiz.answer
      const options = quiz.options

      if (options.length === 4) {
      }else{
        problem.push({ id: quiz.id, topic: title });
      }

    });
  }
  console.log("Total of errors: " + problem.length);
  console.log(problem);
}

function verificaSeTemPerguntasIguais(data = Array()) {
  const allTitles = Object.keys(data);
  const allTitlesLength = Object.keys(data).length;
  const problem = [];
  const questions = []

  for (let c = 0; c < allTitlesLength; c++) {
    const title = allTitles[c];
    const topicQuestions = data[title];
    topicQuestions.forEach((quiz) => {
      
      const question = quiz.question
      // const options = quiz.options
      
      if (questions.includes(question)) {
        problem.push({ id: quiz.id, topic: title });
      }else{
        questions.push(question)
      }

    });
  }
  console.log("Total of errors: " + problem.length);
  console.log(problem);
}
function verificarSeIDeID(data = Array()) {
  const allTitles = Object.keys(data);
  const allTitlesLength = Object.keys(data).length;
  const problem = [];

  for (let c = 0; c < allTitlesLength; c++) {
    const title = allTitles[c];
    const topicQuestions = data[title];
    topicQuestions.forEach((quiz) => {
      
     
      if (Object.keys(quiz).includes("id")) {
      }else{
        problem.push({ id: quiz.id, topic: title });
      }

    });
  }
  console.log("Total of errors: " + problem.length);
  console.log(problem);
}

function verificarAsImagens(data = Array()) {
  const images = []
  const ddd = require('./../src/Functions/QuizGameData/database/portuguese_QuizGameSouDEV.json').quiz;
  ddd.Image_quiz.forEach(quiz => images.push(quiz.question))
  
  const problem = []
  data.Image_quiz.forEach(quiz => {

    const existThisImage = images.filter(image => image === quiz.question)
    
    if (existThisImage.length >= 1) {
    }else{ // console.log("AS");
      problem.push({ id: quiz.id});
    }
  })

  console.log(problem);

}


lang.forEach(lg => {
    const dataFile = require('./../src/Functions/QuizGameData/database/'+lg+'_QuizGameSouDEV.json').quiz;
    console.log("\n>>> ", lg);
    // // verificarAsKeys(dataFile);
    // // verificarSeExisteQuatroKeys(dataFile);
    // // verificaSeAsOptionsTemQuatro(dataFile)
    // // verificarSeIDeID(dataFile)
    // // verificarAsImagens(dataFile)
    
    // verificarSeAnswerBateNasOptions(dataFile)
  })
  
  
  const dataFile = require('./../src/Functions/QuizGameData/database/mandarin_QuizGameSouDEV.json').quiz;
  // verificarSeAnswerBateNasOptions(dataFile)
  
  // const dataFile = require('./../src/Functions/QuizGameData/database/portuguese_QuizGameSouDEV.json').quiz;


  
  

    // portuguese -  
    // english    -
    // spanish    - 
    // french     -   
    // hindi      -
    // russian    -
    // mandarin   -
    // korean 
    // japanese
    // arabic 



