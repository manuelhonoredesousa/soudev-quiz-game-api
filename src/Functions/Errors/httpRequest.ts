import { errorMessage } from './httpResponse';
import { apiInformation } from 'src/details/informationVariable';
import { languageCodeList, languageCodeTypes} from 'src/entities/Types_Interfaces';
import { topicList, topicsTypes } from '../QuizGameData/types';

type verificationTypes = 'language code' | 'topic' | 'page';

interface ICheckInputParam {
  verifyContent: languageCodeTypes | topicsTypes | string;
  verifyOption: verificationTypes;
}
interface ICheckInputParams {
  languageCode?: languageCodeTypes;
  topic?: topicsTypes;
  openPage?: string;
}

export function checkInputParam({verifyContent,verifyOption}: ICheckInputParam) {

  let contentList = Array();
  if (verifyOption === 'language code') {
    contentList = languageCodeList;
  }

  if (verifyOption === 'topic') {
    contentList = topicList;
  }

  if (verifyOption === 'page') {
    const isOnlyNumbers = /^[0-9]+$/.test(verifyContent);
    if (!isOnlyNumbers) {
      return errorMessage({
        statusCode: 404,
        smsContent: `Please enter a valid ${verifyOption}, Only numbers allowed, and only pages from 1 upwards are allowed`,
        help: 'Verify page number',
      });
    }
    return;
  }

  const notFound = !(
    contentList.filter((content) => content === verifyContent).length > 0
  );

  if (notFound) {
    return errorMessage({
      statusCode: 500,
      smsContent: `Please enter a valid ${verifyOption} witch is available in official page. link to https://${apiInformation.officialPageURL}, or check the available ${verifyOption}`,
      help: contentList,
    });
  }
}



export function checkInputParams({ languageCode, topic, openPage}: ICheckInputParams) {
  if (languageCode) {
    const invalidLanguageCode = checkInputParam({
      verifyContent: languageCode,
      verifyOption: 'language code',
    });

    if (invalidLanguageCode) return invalidLanguageCode;
  }
  
  if (topic) {
    const invalidTopic = checkInputParam({
      verifyContent: topic,
      verifyOption: 'topic',
    });
    
    if (invalidTopic) return invalidTopic;
  }
  if (openPage) {
    const invalidPage = checkInputParam({
      verifyContent: openPage,
      verifyOption: 'page',
    });
    
    if(invalidPage) return invalidPage;
  }
}
