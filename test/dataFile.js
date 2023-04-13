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



// lang.forEach(lg => {
    // const dataFile = require('./../src/Functions/QuizGameData/database/'+lg+'_QuizGameSouDEV.json').quiz;
    // console.log("\n>>> ", lg);
    // //verificarAsKeys(dataFile);
    // //verificarSeExisteQuatroKeys(dataFile);
    // verificarSeAnswerBateNasOptions(dataFile)
    // })
    
    
    const dataFile = require('./../src/Functions/QuizGameData/database/hindi_QuizGameSouDEV.json').quiz;
    
    verificarSeAnswerBateNasOptions(dataFile)