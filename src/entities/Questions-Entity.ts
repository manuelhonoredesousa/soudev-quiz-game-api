type numberOrString = string | number

export abstract class QuestionEntity {
    id: number;
    question: string;
    options: [numberOrString, numberOrString, numberOrString, numberOrString];
    answer: numberOrString;
}

 