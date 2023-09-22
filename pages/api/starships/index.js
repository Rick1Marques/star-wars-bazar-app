import connect from "@/db/connect.js";
import Starship from "@/db/models/Starship";

export default async function handler(request, response) {
  await connect();
  if (request.method === "GET") {
    const starships = await Starship.find({});
    response.status(200).json(starships);
    return;
  }
}
