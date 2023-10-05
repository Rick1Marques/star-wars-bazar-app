import connect from "@/db/connect";
import User from "@/db/models/User";
import Listing from "@/db/models/Listing";


export default async function handler(request, response) {
  await connect();
  if (request.method === "GET") {
    const listings = await Listing.find({})
      .sort({ createdAt: -1 })
      .populate("user")
      .populate("starship")
      .exec();
    response.status(200).json(listings);
    return;
  }

  if (request.method === "POST") {
    try {
      const listing = await Listing.create(request.body);
      await User.findByIdAndUpdate(listing.user, {
        $push: {
          listings: listing._id,
        },
      });
      response.status(201).json(listing);
    } catch (error) {
      console.log("POST /api/listings", error);
      response.status(500).json({ message: "Error creating listing" });
    }
    return;
  }

  response.status(405).json({ message: "Method not allowed" });
}
