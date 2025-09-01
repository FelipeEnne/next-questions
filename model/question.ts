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
    right = false
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

  toObject() {
    return {
      id: this.#id,
      announcement: this.#announcement,
      answers: this.#answers.map((resp) => resp.toObject()),
      right: this.#right,
    };
  }
}
