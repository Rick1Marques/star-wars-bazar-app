// sell protocol

import connect from "@/db/connect.js";
import Listing from "@/db/models/Listing";
import User from "@/db/models/User";

export default async function handler(request, response) {
  await connect();
  if (request.method === "DELETE") {
    try {
      const { user_id, listing_id, starship_id } = request.query;
      const listing = await Listing.findByIdAndDelete(listing_id);
      await User.findByIdAndUpdate(user_id, {
        $pull: {
          starships: { starship_id },
        },
        // $set: {
        //   credits:
        // }
      });
      response.status(200).json({});
    } catch (error) {
      console.log("POST", error);
      response.status(500).json({ message: "Error creating rating" });
    }
    return;
  }

  response.status(405).json({ message: "Method not allowed" });
}
