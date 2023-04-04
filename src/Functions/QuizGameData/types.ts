import { QuestionEntity } from 'src/entities/Questions-Entity';
import { languageCodeTypes, languageTypes } from 'src/entities/Types_Interfaces';

export interface IQuizGameLanguageFile {
  quizTitle: 'SouDev Quiz Game' | string;
  totalTopicsInQuiz: number;
  totalQuestionsForEachTopicInQuiz: number;
  language: languageTypes;
  languageCode: languageCodeTypes,
  quiz: {
    world_geography: QuestionEntity[];
    world_history: QuestionEntity[];
    Movies_and_TV_series: QuestionEntity[];
    Music_and_famous_artists: QuestionEntity[];
    Famous_sports_and_athletes: QuestionEntity[];
    Science_and_technology: QuestionEntity[];
    Animals_and_wild_life: QuestionEntity[];
    Art_and_culture: QuestionEntity[];
    food_and_gastronomy: QuestionEntity[];
    Literature_and_famous_authors: QuestionEntity[];
    Image_quiz: QuestionEntity[];
  };
}

export type topicsTypes =
  | 'world_geography'
  | 'world_history'
  | 'Movies_and_TV_series'
  | 'Music_and_famous_artists'
  | 'Famous_sports_and_athletes'
  | 'Science_and_technology'
  | 'Animals_and_wild_life'
  | 'Art_and_culture'
  | 'food_and_gastronomy'
  | 'Literature_and_famous_authors'
  | 'Image_quiz';

export const topicList: topicsTypes[] = [
  'world_geography',
  'world_history',
  'Movies_and_TV_series',
  'Music_and_famous_artists',
  'Famous_sports_and_athletes',
  'Science_and_technology',
  'Animals_and_wild_life',
  'Art_and_culture',
  'food_and_gastronomy',
  'Literature_and_famous_authors',
  'Image_quiz',
];
