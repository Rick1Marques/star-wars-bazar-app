import connect from "@/db/connect";
import User from "@/db/models/User";

export default async function handler(request, response) {
  await connect();
  if (request.method === "GET") {
    const user = await User.findById(request.query.id)
      .populate("listings")
      .populate("starships")
      .exec();
    if (!user) {
      response.status(404).json({
        message:
          "Sorry, something went wrong, 404 page not found! Please try again later.",
      });
      return;
    }
    response.status(200).json(user);
  }
}
