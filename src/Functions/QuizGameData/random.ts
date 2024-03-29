import { numberOrString, questionsOptionsTypes } from './../../entities/Questions-Entity';
import { QuestionEntity } from 'src/entities/Questions-Entity';
import { IQuizGameLanguageFile } from './types';

interface IRandomNumber {
  startAt: number;
  endAt: number;
}

function randomNumber({ startAt, endAt }: IRandomNumber): number {
  const random = Math.random();
  const randomInRange = random * endAt;
  const randomNumber = Math.floor(randomInRange) + startAt;
  return randomNumber;
}

interface IGetRandomQuestion {
  quiz: QuestionEntity[];
  topic: string;
}

export function getRandomQuestion({quiz, topic}:IGetRandomQuestion) {
    const numberOfAvaliableQuestions = quiz.length
    const randomIndex = randomNumber({ startAt: 1, endAt: numberOfAvaliableQuestions });
    //
    return { topic: topic, quiz: quiz[randomIndex - 1] }
}

export function getRandomTopic(allTopicForQuizGame: IQuizGameLanguageFile) {
  const avaliableTopics = Object.keys(allTopicForQuizGame.quiz);
  const numberOfAvaliableTopics = Object.keys(allTopicForQuizGame.quiz).length;
  const randomIndex = randomNumber({ startAt: 1, endAt: numberOfAvaliableTopics });
  const randomTopic = avaliableTopics[randomIndex - 1];

   const selectedTopic = allTopicForQuizGame.quiz[randomTopic]
   const changedQuestionOptionsOrder = changeQuestionOptionsOrder(selectedTopic)
   
   return { topic: randomTopic, quiz: changedQuestionOptionsOrder };
  }
  
  const randomOptions = () => Math.random() - 0.5
  const alterOptions = (options: questionsOptionsTypes): questionsOptionsTypes => options.sort(randomOptions)
  
  export function changeQuestionOptionsOrder(EntryQuiz: QuestionEntity[]) {
    const quiz = EntryQuiz
     quiz.forEach(question=> question.options = alterOptions(question.options))
     return quiz
  }
