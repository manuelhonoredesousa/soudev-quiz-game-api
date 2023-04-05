import { QuestionEntity } from './Questions-Entity';

export interface IQuestionResponse extends QuestionEntity {
  topic: string;
}

export type languageTypes =
  | 'portuguese'
  | 'english'
  | 'spanish'
  | 'arabic'
  | 'french'
  | 'hindi'
  | 'russian'
  | 'mandarin'
  | 'korean'
  | 'japanese';

export type languageCodeTypes =
  | 'pt'
  | 'en'
  | 'es'
  | 'ar'
  | 'fr'
  | 'hi'
  | 'ru'
  | 'zh'
  | 'ko'
  | 'ja';

export const languageCodeList: languageCodeTypes[] = [
  'pt',
  'en',
  'es',
  'ar',
  'fr',
  'hi',
  'ru',
  'zh',
  'ko',
  'ja',
];