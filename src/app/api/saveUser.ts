import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();
console.log(prisma);
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, username } = req.body;
    try {
      const user = await prisma.user.create({
        data: {
          email,
          username,
        },
      });
      res.status(200).json(user);
    } catch (error) {
      console.error("database error:", error);
      res.status(500).json({ error: "データベースに情報を保存できませんでした" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
