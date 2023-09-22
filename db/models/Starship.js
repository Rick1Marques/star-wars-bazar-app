import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const starshipSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: false,
    },
    manufacturer: {
      type: String,
      required: false,
    },
    default_cost_in_credits: {
      type: Number,
      required: false,
    },
    max_atmosphering_speed: {
      type: String,
      required: false,
    },
    passengers: {
      type: String,
      required: false,
    },
    cargo_capacity: {
      type: String,
      required: false,
    },
    starship_class: {
      type: String,
      required: false,
    },
    img: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Starship = models?.Starship || model("Starship", starshipSchema);
export default Starship;
