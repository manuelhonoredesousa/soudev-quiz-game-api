import { languageCodeTypes } from 'src/entities/Types_Interfaces';
import { selectFileByLanguage } from './selectFileByLanguage';
import { IQuizGameLanguageFile } from './types';

export function getQuizGame(
  languageCode: languageCodeTypes,
): IQuizGameLanguageFile | undefined {
  try {
    let rawFile: IQuizGameLanguageFile | undefined =
      selectFileByLanguage(languageCode);

    if (!rawFile) throw new Error('Error loading');

    return rawFile;
  } catch (error) {
    return undefined;
  }
}
