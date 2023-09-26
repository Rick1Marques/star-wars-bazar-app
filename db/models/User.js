import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    credits: {
      type: Number,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    starships: [
      {
        type: Schema.Types.ObjectId,
        ref: "Starship",
      },
    ],
    listings: [
      {
        type: Schema.Types.ObjectId,
        ref: "Listing",
      },
    ],
  },
  { timestamps: true }
);

const User = models?.User || model("User", userSchema);
export default User;
