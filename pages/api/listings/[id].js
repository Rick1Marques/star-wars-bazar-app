import connect from "@/db/connect";
import Listing from "@/db/models/Listing";

export default async function handler(request, response) {
  await connect();

  if (request.method === "DELETE") {
    try {
      const listing = await Listing.findOneAndDelete({ _id: request.query.id });
      await User.findByIdAndUpdate(listing.user, {
        $pull: {
          listings: listing._id,
        },
      });

      response.status(200).json(listing);
    } catch (error) {
      console.log("DELETE /api/listings/:id", error);
      response.status(500).json({ message: "Error deleting listing" });
    }
    return;
  }

  response.status(405).json({ message: "Method not allowed" });
}
