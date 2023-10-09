import connect from "@/db/connect";
import Listing from "@/db/models/Listing";

export default async function handler(request, response) {
  await connect();
  if (request.method === "PUT") {
    try {
      console.log({ ...request.body });
      const listing = await Listing.findOneAndUpdate(
        { _id: request.query.id },
        {
          $set: {
            preis: { ...request.body }.preis,
          },
        }
      );

      response.status(200).json(listing);
    } catch (error) {
      console.log("PUT /api/listing/:id", error);
      response.status(500).json({ message: "Error updating listing" });
    }
    return;
  }
  if (request.method === "GET") {
    const listing = await Listing.findById(request.query.id)
      .populate("user")
      .populate("starship")
      .exec();
    if (!listing) {
      response.status(404).json({
        message:
          "Sorry, something went wrong, 404 page not found! Please try again later.",
      });
      return;
    }
    response.status(200).json(listing);
  }
}
