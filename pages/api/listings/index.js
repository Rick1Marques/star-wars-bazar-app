import connect from "@/db/connect";
import Listing from "@/db/models/Listing";
import Starship from "@/db/models/Starship";

export default async function handler(request, response) {
  await connect();
  if (request.method === "GET") {
    const listings = await Listing.find({ users }).populate("starship").exec();
    response.status(200).json(listings);
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
