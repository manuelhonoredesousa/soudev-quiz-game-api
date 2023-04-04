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

// export function convertLanguageCodeToExtendLanguage(languageCode: languageCodeTypes): languageTypes {
//   switch (languageCode) {
//     case 'ar':
//       return 'arabic';
//     case 'en':
//       return 'english';
//     case 'es':
//       return 'spanish';
//     case 'fr':
//       return 'french';
//     case 'hi':
//       return 'hindi';
//     case 'ja':
//       return 'japanese';
//     case 'ko':
//       return 'korean';
//     case 'pt': 
//       return 'portuguese';
//     case 'ru':
//      return 'russian';
//     case 'zh':
//       return 'mandarin';
//   }
// }
