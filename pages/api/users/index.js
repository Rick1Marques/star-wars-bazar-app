import connect from "@/db/connect";
import User from "@/db/models/User";

export default async function handler(request, response) {
  await connect();
  if (request.method === "GET") {
    const users = await User.find({}).sort({ createdAt: -1 }).exec();
    response.status(200).json(users);
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
