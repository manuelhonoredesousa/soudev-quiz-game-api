import { Injectable } from '@nestjs/common';
import { languageCodeList, languageCodeTypes } from './entities/Types_Interfaces';
import { checkInputParams } from './Functions/Errors/httpRequest';
import { IQuizGameLanguageFile, topicsTypes, topicList } from './Functions/QuizGameData/types';
import { getQuizGame } from 'src/Functions/QuizGameData';
import { selectTopicOnQuizGameMapper } from './Functions/QuizGameData/mappers';
import { errorMessage } from './Functions/Errors/httpResponse';
import { apiInformation } from './details/informationVariable';
import { getRandomQuestion, getRandomTopic } from './Functions/QuizGameData/random';

@Injectable()
export class AppService {
  home(){
    return {
      information: 'Hello, to get started, tou can follow the instructions at instructions',
      instructions: [
        'For normal game, you can try: http://quiz-game.com/«languageCode»/«topic»',
        'For random topic, you can try: http://quiz-game.com/«languageCode»/Random-Topic',
        'For random question, you can try: http://quiz-game.com/«languageCode»/Random-Question'
      ],
      languageCode: languageCodeList,
      topicList
    }
  }

  quizGameByLanguageAndTopic( languageCode: languageCodeTypes, topic: topicsTypes, openPageParm: string) {
    const inputValidations = checkInputParams({ languageCode , topic, openPage: openPageParm });
    if (inputValidations) return inputValidations;
        
    const allTopicForQuizGame: IQuizGameLanguageFile = getQuizGame(languageCode);
    if (!allTopicForQuizGame) {
      return errorMessage({
        statusCode: 404,
        smsContent: `Unexpected Error, We were unable to access this topic.`,
        help: 'Contact Support, or go to official website to see the available topics.',
      });
    }

    
    const openPage = parseInt(openPageParm);
    const topicForQuizGame = selectTopicOnQuizGameMapper(allTopicForQuizGame, { pickTopic: topic, getAllQuestion: false, openPage });

    if (topicForQuizGame.error == true) {
      return errorMessage({
        statusCode: 404,
        smsContent: `The page your're trying to access does not exist, there is only (${topicForQuizGame.avaliablePages}) pages available for this topic`,
        help: `Contact Support or visite the official site ${apiInformation.officialPageURL}`,
      });
    }
    
    return topicForQuizGame;
  }

  randomTopicFromQuizGame(languageCode: languageCodeTypes) {
    const inputValidations = checkInputParams({ languageCode });
    if (inputValidations) return inputValidations;

    const allTopicForQuizGame: IQuizGameLanguageFile = getQuizGame(languageCode);
    
    if (!allTopicForQuizGame) {
      return errorMessage({
        statusCode: 404,
        smsContent: `Unexpected Error, We were unable to access this topic.`,
        help: 'Contact Support, or go to official website to see the available topics.',
      });
    }

    const randomTopic = getRandomTopic(allTopicForQuizGame)
    return randomTopic
  }

  randomQuestionFromQuizGame(languageCode: languageCodeTypes) {
    const inputValidations = checkInputParams({ languageCode });
    if (inputValidations) return inputValidations;

    const allTopicForQuizGame: IQuizGameLanguageFile = getQuizGame(languageCode);
    
    if (!allTopicForQuizGame) {
      return errorMessage({
        statusCode: 404,
        smsContent: `Unexpected Error, We were unable to access this topic.`,
        help: 'Contact Support, or go to official website to see the available topics.',
      });
    }

    const randomTopic = getRandomTopic(allTopicForQuizGame)
    const randomQuestion = getRandomQuestion(randomTopic)
    return randomQuestion
  }
}
