export type numberOrString = string | number
export type questionsOptionsTypes = [numberOrString, numberOrString, numberOrString, numberOrString]

export abstract class QuestionEntity {
    id: number;
    question: string;
    options: questionsOptionsTypes;
    answer: numberOrString;
}

 