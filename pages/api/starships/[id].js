import connect from "@/db/connect";
import Starship from "@/db/models/Starship";

export default async function handler(request, response) {
  await connect();
  if (request.method === "GET") {
    const starship = await Starship.findById(request.query.id);
    if (!starship) {
      response
        .status(404)
        .json({
          message:
            "Sorry, something went wrong, 404 page not found! Please try again later.",
        });
      return;
    }
    response.status(200).json(starship);
  }
}
