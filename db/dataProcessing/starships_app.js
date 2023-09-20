import { starshipsApi } from "./starships_api";
import { starshipsImg } from "./starships_img";

export const starshipsApp = starshipsApi
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
    }) => ({
      name,
      model,
      manufacturer,
      default_cost_in_credits,
      max_atmosphering_speed,
      passengers,
      cargo_capacity,
      starship_class,
    })
  )
  .map((starship) => {
    for (let i = 0; starshipsImg.length; i++) {
      return Object.assign({}, starship, {
        default_cost_in_credits: Number(starship.default_cost_in_credits),
        img: starshipsImg[i],
      });
    }
  });
