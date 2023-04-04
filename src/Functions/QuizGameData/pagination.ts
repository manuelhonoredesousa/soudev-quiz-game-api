import { QuestionEntity } from 'src/entities/Questions-Entity';

interface IPaginateQuiz {
  content: QuestionEntity[];
  numberOfContentOnPage: number;
}
interface IPickPage {
  pages: Array<QuestionEntity[]>;
  pickPage: number;
}

export function paginateQuiz({
  content,
  numberOfContentOnPage,
}: IPaginateQuiz) {
  const contentsLength = content.length;
  const numberOfPages = contentsLength / numberOfContentOnPage;
  const myPages = [];

  let whereItStoped = 0;

  for (let i = 0; i < numberOfPages; i++) {
    myPages.push([]);
    for (let j = 0; j < numberOfContentOnPage; j++) {
      if (content[whereItStoped]) {
        myPages[i].push(content[whereItStoped]);
        whereItStoped++;
      }
    }
  }
  return { numberOfPages: myPages.length, pages: myPages };
}

export function pickPage({ pickPage, pages }: IPickPage) {
  const indexOfPage = pickPage - 1;
  return pages[indexOfPage];
}
