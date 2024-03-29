import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { languageCodeTypes } from './entities/Types_Interfaces';
import { topicsTypes } from './Functions/QuizGameData/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  home(){return this.appService.home()}

  @Get(':languageCode/:topic/:openPage') 
  playQuizGame( @Param('languageCode') languageCode: languageCodeTypes, @Param('topic') topic: topicsTypes, @Param('openPage') openPage: string) {
    return this.appService.quizGameByLanguageAndTopic(languageCode, topic, openPage);
  }
  
  @Get(':languageCode/random-topic')
  getRandomTopicFromQuizGame(@Param('languageCode') languageCode: languageCodeTypes){
    return this.appService.randomTopicFromQuizGame(languageCode);
  }

  @Get(':languageCode/random-question')
  getRandomQuestionFromQuizGame(@Param('languageCode') languageCode: languageCodeTypes){
    return this.appService.randomQuestionFromQuizGame(languageCode);
  }
}