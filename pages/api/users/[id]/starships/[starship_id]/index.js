// buy protocol

import connect from "@/db/connect.js";
import User from "@/db/models/User";

export default async function handler(request, response) {
  await connect();
  if (request.method === "POST") {
    try {
      const { id: user_id, starship_id } = request.query;
      await User.findByIdAndUpdate(user_id, {
        $push: {
          starships: starship_id,
        },
        // $set: {
        //   credits:
        // }
      });
      response.status(201).json({});
    } catch (error) {
      console.log("POST /api/pets/:id/ratings", error);
      response.status(500).json({ message: "Error creating rating" });
    }
    return;
  }

  response.status(405).json({ message: "Method not allowed" });
}
