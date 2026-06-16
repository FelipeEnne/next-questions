import { shuffle } from "../functions/arrays";
import AnswersModel from "./answer";

export default class QuestionModel {
  #id: number;
  #announcement: string;
  #answers: AnswersModel[];
  #right: boolean;

  constructor(
    id: number,
    announcement: string,
    answers: AnswersModel[],
    right = false,
  ) {
    this.#id = id;
    this.#announcement = announcement;
    this.#answers = answers;
    this.#right = right;
  }

  get id() {
    return this.#id;
  }

  get announcement() {
    return this.#announcement;
  }

  get answers() {
    return this.#answers;
  }

  get right() {
    return this.#right;
  }

  get answered() {
    for (const answers of this.answers) {
      if (answers.revealed) return true;
    }
    return false;
  }

  answersWith(index: number): QuestionModel {
    const correct = this.#answers[index]?.correct;
    const answers = this.#answers.map((answer, i) => {
      const answersSelected = index === i;
      const shouldReveal = answersSelected || answer.correct;
      return shouldReveal ? answer.reveal() : answer;
    });

    return new QuestionModel(this.#id, this.#announcement, answers, correct);
  }

  shuffleAnswers(): QuestionModel {
    const shuffleAnswers = shuffle(this.#answers);
    return new QuestionModel(
      this.#id,
      this.#announcement,
      shuffleAnswers,
      this.#right,
    );
  }

  static createUsingObj(obj: QuestionModel): QuestionModel {
    const answers = obj.answers.map((resp) =>
      AnswersModel.createUsingObj(resp),
    );
    return new QuestionModel(obj.id, obj.announcement, answers, obj.right);
  }

  toObject() {
    return {
      id: this.#id,
      announcement: this.#announcement,
      answers: this.#answers.map((resp) => resp.toObject()),
      answered: this.answered,
      right: this.#right,
    };
  }
}
