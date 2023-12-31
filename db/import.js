import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import connect, { disconnect } from "./connect.js";
import { users, starships } from "./fixtures.js";
import User from "./models/User.js";
import Starship from "./models/Starship.js";
import Listing from "./models/Listing.js";

function random(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomFloat(max, min) {
  return Math.random() * (max - min) + min;
}

// sampleSize
function getStarship(arr) {
  return arr[random(arr.length - 1, 0)];
}

console.log("Connecting...");
await connect(process.env.MONGODB_URI);

console.log("Dropping existing collections...");
await Listing.collection.drop();
await Starship.collection.drop();
await User.collection.drop();

const createdStarships = await Starship.insertMany(starships);

await Promise.all(
  users.map(async ({ listings, ...user }, index) => {
    console.log(`Creating user: ${index}...`);
    const newUser = await User.create(user);

    console.log(`Saving listings for user: ${index}...`);

    const savedListings = await Listing.insertMany(
      listings.map((listing) => {
        const starship = getStarship(createdStarships);
        const starshipPrice = Math.floor(
          starship.default_cost_in_credits *
            (1 + randomFloat(0.3, 0.05) * (Math.round(Math.random()) ? 1 : -1))
        );
        return {
          price: starshipPrice,
          user: newUser._id,
          starship: starship._id,
        };
      })
    );

    newUser.listings = savedListings.map((x) => x._id);

    newUser.starships = savedListings.map((x) => x.starship);

    for (let i = 0; i < random(5, 1); i++) {
      let starhip_id = getStarship(createdStarships)._id;
      if (newUser.starships.includes(starhip_id)) {
        newUser.starships.push();
      }
      newUser.starships.push(starhip_id);
    }

    await newUser.save();
  })
);

console.log("Disconnecting...");
await disconnect();

console.log("Done!");
