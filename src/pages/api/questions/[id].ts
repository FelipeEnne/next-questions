import type { NextApiRequest, NextApiResponse } from "next";
import QuestionModel from "../../../../model/question";
import questions from "../questionsBank";

type QuestionData = ReturnType<InstanceType<typeof QuestionModel>["toObject"]>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<QuestionData | { error: string }>
) {
  const { id } = req.query;

  if (!id || Array.isArray(id)) {
    return res.status(404).json({ error: "Invalid id" });
  }

  const questionSelected = questions.filter((q) => {
    return q.id === +id;
  });

  if (questionSelected.length === 1) {
    res.status(200).json(questionSelected[0].shuffleAnswers().toObject());
  } else {
    return res.status(404).send({ error: "Invalid id" });
  }
}
