import type { NextApiRequest, NextApiResponse } from "next";
import questions from "../quetionsBank";
import { shuffle } from "../../../../functions/arrays";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<number[] | { error: string }>
) {
  const ids = questions.map((q) => q.id);
  res.status(200).json(shuffle(ids));
}
