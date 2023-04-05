import * as portuguese_QuizGameSouDEV from './database/portuguese_QuizGameSouDEV.json';
import * as english_QuizGameSouDEV from './database/english_QuizGameSouDEV.json';
import * as spanish_QuizGameSouDEV from './database/spanish_QuizGameSouDEV.json';
import * as arabic_QuizGameSouDEV from './database/arabic_QuizGameSouDEV.json';
import * as french_QuizGameSouDEV from './database/french_QuizGameSouDEV.json';
import * as hindi_QuizGameSouDEV from './database/hindi_QuizGameSouDEV.json';
import * as russian_QuizGameSouDEV from './database/russian_QuizGameSouDEV.json';
import * as mandarin_QuizGameSouDEV from './database/mandarin_QuizGameSouDEV.json';
import * as korean_QuizGameSouDEV from './database/korean_QuizGameSouDEV.json';
import * as japanese_QuizGameSouDEV from './database/japanese_QuizGameSouDEV.json';
import { languageCodeList } from './../../entities/Types_Interfaces';
import { languageCodeTypes } from 'src/entities/Types_Interfaces';
import { IQuizGameLanguageFile } from './types';
import { selectFileByLanguageMapper } from './mappers';
import { IErrorMessageResponse } from '../Errors/httpResponse';

export type selectFileByLanguageResponseType = IQuizGameLanguageFile | IErrorMessageResponse 

export function selectFileByLanguage(
  languageCode: languageCodeTypes,
): IQuizGameLanguageFile | undefined {
  let selectedFile: IQuizGameLanguageFile = Object();

  switch (languageCode) {
    case 'ar':
      selectedFile = selectFile(arabic_QuizGameSouDEV);
      break;
    case 'en':
      selectedFile = selectFile(english_QuizGameSouDEV);
      break;
    case 'es':
      selectedFile = selectFile(spanish_QuizGameSouDEV);
      break;
    case 'fr':
      selectedFile = selectFile(french_QuizGameSouDEV);
      break;
    case 'hi':
      selectedFile = selectFile(hindi_QuizGameSouDEV);
      break;
    case 'ja':
      selectedFile = selectFile(japanese_QuizGameSouDEV);
      break;
    case 'ko':
      selectedFile = selectFile(korean_QuizGameSouDEV);
      break;
    case 'pt':
      selectedFile = selectFile(portuguese_QuizGameSouDEV);
      break;
    case 'ru':
      selectedFile = selectFile(russian_QuizGameSouDEV);
      break;
    case 'zh':
      selectedFile = selectFile(mandarin_QuizGameSouDEV);
      break;
  }

  if (!selectedFile) {
    console.log(`> Error\n>'${languageCode}' file not found or is lefting '${languageCode}' KEY in file`);
    return undefined;
  }
  
  return selectFileByLanguageMapper({
    quizTitle: selectedFile.quizTitle,
    totalTopicsInQuiz: selectedFile.totalTopicsInQuiz,
    totalQuestionsForEachTopicInQuiz:
      selectedFile.totalQuestionsForEachTopicInQuiz,
    language: selectedFile.language,
    languageCode: selectedFile.languageCode,
    quiz: selectedFile.quiz,
  });
}

function selectFile(file = Object()) {
  const response = Object.assign({}, file);
  if (languageCodeList.includes(response.languageCode)) return response; 
}
