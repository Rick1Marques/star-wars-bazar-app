import { starshipsApi } from "./starships_api";
import { starshipsImg } from "./starships_img";

let starshipsWithImg = [...starshipsApi];

for (let i = 0; i < starshipsImg.length; i++) {
  starshipsWithImg[i].img = starshipsImg[i];
  // starshipsWithImg[i].cost_in_credits = Number(starshipsWithImg[i].cost_in_credits)
}

export const starshipsApp = starshipsWithImg
  .map(
    ({
      name,
      model,
      manufacturer,
      cost_in_credits: default_cost_in_credits,
      max_atmosphering_speed,
      passengers,
      cargo_capacity,
      starship_class,
      img,
    }) => ({
      name,
      model,
      manufacturer,
      default_cost_in_credits,
      max_atmosphering_speed,
      passengers,
      cargo_capacity,
      starship_class,
      img,
    })
  )
  .map((starship) => {
    return Object.assign({}, starship, {
      default_cost_in_credits: Number(starship.default_cost_in_credits),
    });
  });
