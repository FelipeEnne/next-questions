import type { NextApiRequest, NextApiResponse } from "next";
import questions from "../quetionsBank";

type Data = {
  id: number;
  name?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | { error: string }>
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
