import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const listingSchema = new Schema(
  {
    preis: {
      type: Number,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    starship: {
      type: Schema.Types.ObjectId,
      ref: "Starship",
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = models?.Listing || model("Listing", listingSchema);
export default Listing;
