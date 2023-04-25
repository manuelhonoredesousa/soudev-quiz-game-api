import { paginateQuiz, pickPage } from './pagination';
import { changeQuestionOptionsOrder } from './random';
import { IQuizGameLanguageFile, topicsTypes } from './types';

interface ISelectTopicOnQuizGameMapperEntries {
  pickTopic: topicsTypes;
  getAllQuestion: boolean;
  openPage?: number;
}

export function selectTopicOnQuizGameMapper(
  QuizGameFile: IQuizGameLanguageFile,
  { getAllQuestion, pickTopic, openPage }: ISelectTopicOnQuizGameMapperEntries,
) {
  const pickedTopic = QuizGameFile.quiz[pickTopic];

  if (getAllQuestion) {
    //Not in use yet//
    return {
      quizGameTopic: pickTopic,
      totalQuestions: QuizGameFile.totalQuestionsForEachTopicInQuiz,
      language: QuizGameFile.language,
      languageCode: QuizGameFile.languageCode,
      quiz: pickedTopic,
    };
  } else {
    const pickThisPage: number = openPage ? openPage : 1;

    const quiz = paginateQuiz({
      content: pickedTopic,
      numberOfContentOnPage: 10,
    });


    const selectedPage = pickPage({
      pages: quiz.pages,
      pickPage: pickThisPage,
    });

    if (!selectedPage) {
      return { error: true, avaliablePages: quiz.numberOfPages };
    }

    const changedQuestionOptionsOrder = changeQuestionOptionsOrder(selectedPage)

    return {
      quizGameTopic: pickTopic,
      totalQuestions: QuizGameFile.totalQuestionsForEachTopicInQuiz,
      numberOfPages: quiz.numberOfPages,
      currentPage: pickThisPage,
      language: QuizGameFile.language,
      languageCode: QuizGameFile.languageCode,
      quiz: changedQuestionOptionsOrder,
    };
  }
}

export function selectFileByLanguageMapper({
  quizTitle,
  totalTopicsInQuiz,
  totalQuestionsForEachTopicInQuiz,
  language,
  languageCode,
  quiz,
}): IQuizGameLanguageFile {
  return {
    quizTitle: quizTitle,
    totalTopicsInQuiz: totalTopicsInQuiz,
    totalQuestionsForEachTopicInQuiz: totalQuestionsForEachTopicInQuiz,
    language: language,
    languageCode: languageCode,
    quiz: Object.assign({}, quiz),
  };
}


