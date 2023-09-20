import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

// {
//     name: "CR90 corvette",
//     model: "CR90 corvette",
//     manufacturer: "Corellian Engineering Corporation",
//     default_cost_in_credits: 3500000,
//     max_atmosphering_speed: "950",
//     passengers: "600",
//     cargo_capacity: "3000000",
//     starship_class: "corvette",
//     img: "https://static.wikia.nocookie.net/starwars/images/2/24/TantiveIV-TSWB.png/revision/latest?cb=20221006055135",
//   },

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
