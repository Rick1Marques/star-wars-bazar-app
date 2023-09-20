import connect from "@/db/connect.js";
import Starship from "@/db/models/Starship";

export default async function handler(request, response) {
  await connect();
  if (request.method === "GET") {
    const starships = await Starship.find({});
    response.status(200).json(starships);
    return;
  }

  //   if (request.method === "POST") {
  //     try {
  //       const starship = await Starship.create(request.body);
  //       response.status(201).json(starship);
  //     } catch (error) {
  //       console.log("POST /api/starships", error);
  //       response.status(500).json({ message: "Error creating starship" });
  //     }
  //     return;
  //   }

  //   response.status(405).json({ message: "Method not allowed" });
}
